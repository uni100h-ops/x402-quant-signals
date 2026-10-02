"""Quant Trading Signals: same legacy URLs, explicit x402 v2 payments, durable receipts."""
import asyncio
import base64
import copy
import hashlib
import json
import logging
import os
import secrets
import sqlite3
import time
from contextlib import asynccontextmanager
from pathlib import Path
from urllib.parse import urlparse
from typing import Literal

import httpx
from algosdk import encoding, transaction
from algosdk.v2client.algod import AlgodClient
from fastapi import FastAPI, Header, HTTPException, Request
from fastapi.responses import FileResponse, JSONResponse, Response
from pydantic import BaseModel, Field
from nacl.signing import VerifyKey
from x402.extensions.bazaar import declare_discovery_extension, OutputConfig
from signals import ASSETS, SignalEngine, DataUnavailable


OUTPUT_EXAMPLE={'schema':'qts-signal-1','symbol':'BTC','name':'Bitcoin','timeframe':'5m',
    'signal':'HOLD','technical_signal':'HOLD',
    'reason_codes':['ema_bull','macd_bear','rsi_long','technical_mixed'],
    'market':{'pair':'BTCUSDT','quote':'USDT','venue':'Binance Spot'}}
NAME='Quant Trading Signals'
VERSION='3.1.0'
PAY_TO='SGLTUPAC7TKGKNNXKNPQ2QZCC7NJSLAKYZ7O7NOGGAPXWBFZTOLTPMSPPI'
NETWORK='algorand:wGHE2Pwdvd7S12BL5FaOP20EGYesN73ktiC1qzkkit8='
GENESIS=NETWORK.split(':',1)[1]
ASSET='31566704'
AMOUNT='100000'  # 0.1 USDC; no other application fee.
FACILITATOR='https://facilitator.goplausible.xyz'
ALGOD='https://mainnet-api.algonode.cloud'
ORIGIN=os.getenv('PUBLIC_URL','https://x402-quant-signals.onrender.com').rstrip('/')
DB_PATH=os.getenv('DATABASE_PATH','./data/qts.sqlite3')
HERE=Path(__file__).resolve().parent
LOG=logging.getLogger('qts')
logging.basicConfig(level=logging.INFO,format='%(asctime)s UTC | %(levelname)s | %(message)s')
logging.Formatter.converter=time.gmtime
# Never log a news provider URL containing its API key.
logging.getLogger('httpx').setLevel(logging.WARNING)
logging.getLogger('httpcore').setLevel(logging.WARNING)


def canonical(obj):return json.dumps(obj,sort_keys=True,separators=(',',':'),ensure_ascii=False,allow_nan=False)
def b64(obj):return base64.b64encode(canonical(obj).encode()).decode()
def unb64(value):
    if not value or len(value)>64000:raise ValueError('Invalid payment header')
    return json.loads(base64.b64decode(value+'='*((-len(value))%4),altchars=b'-_',validate=True))
def db():
    conn=sqlite3.connect(DB_PATH,timeout=20);conn.row_factory=sqlite3.Row;return conn

def initialize_database():
    if os.getenv('RENDER') and (not os.getenv('DATABASE_PATH') or not DB_PATH.startswith('/var/data/')):
        raise RuntimeError('On Render mount a persistent disk at /var/data and set DATABASE_PATH=/var/data/qts.sqlite3')
    Path(DB_PATH).parent.mkdir(parents=True,exist_ok=True)
    with db() as c:
        c.execute('PRAGMA journal_mode=WAL')
        c.execute('CREATE TABLE IF NOT EXISTS quotes (id TEXT PRIMARY KEY, txid TEXT UNIQUE, payer TEXT, resource TEXT, report TEXT, requirement TEXT, group_json TEXT, created REAL, expires REAL)')
        c.execute('CREATE TABLE IF NOT EXISTS payments (txid TEXT PRIMARY KEY, fingerprint TEXT, resource TEXT, payer TEXT, state TEXT, report TEXT, receipt TEXT, updated REAL)')
        c.execute('CREATE TABLE IF NOT EXISTS usage (day TEXT PRIMARY KEY, requests INTEGER NOT NULL)')

def reserve_news_request():
    day=time.strftime('%Y-%m-%d',time.gmtime())
    maximum=int(os.getenv('NEWS_DAILY_LIMIT','90'))
    with db() as c:
        c.execute('BEGIN IMMEDIATE')
        c.execute('INSERT OR IGNORE INTO usage VALUES (?,0)',(day,))
        count=c.execute('SELECT requests FROM usage WHERE day=?',(day,)).fetchone()[0]
        if count>=maximum:raise DataUnavailable('NEWS_DAILY_LIMIT')
        c.execute('UPDATE usage SET requests=requests+1 WHERE day=?',(day,))

@asynccontextmanager
async def lifespan(app):
    parsed=urlparse(ORIGIN)
    if parsed.scheme!='https' or not parsed.netloc or parsed.path or parsed.query or parsed.fragment:
        raise RuntimeError('PUBLIC_URL must be the original HTTPS origin without a path')
    initialize_database()
    app.state.http=httpx.AsyncClient(timeout=httpx.Timeout(25,connect=10),follow_redirects=False)
    app.state.engine=SignalEngine(app.state.http, reserve_news_request)
    app.state.lock=asyncio.Lock();app.state.supported=None;app.state.rate={}
    yield
    await app.state.http.aclose()

app=FastAPI(title=NAME,version=VERSION,lifespan=lifespan,
 description='Closed 5-minute technical signals. API purchases never query news; web purchases include relevant daily news when available. 0.1 USDC on Algorand per report. No trades are executed.')

@app.middleware('http')
async def limits(request,call_next):
    length=request.headers.get('content-length','0')
    if request.method=='POST' and (not length.isdigit() or int(length)>100000):
        return JSONResponse({'detail':'REQUEST_TOO_LARGE'},status_code=413)
    if request.url.path.startswith('/api/'):
        key=request.client.host if request.client else 'unknown';now=time.time()
        start,count=app.state.rate.get(key,(now,0))
        if now-start>=60:start,count=now,0
        if count>=60:return JSONResponse({'detail':'RATE_LIMITED'},status_code=429,headers={'Retry-After':'60'})
        if len(app.state.rate)>10000:app.state.rate.clear()
        app.state.rate[key]=(start,count+1)
    response=await call_next(request)
    response.headers['X-Content-Type-Options']='nosniff'
    response.headers['Referrer-Policy']='no-referrer'
    response.headers['Cache-Control']='no-store'
    response.headers['Permissions-Policy']='camera=(), microphone=(), geolocation=()'
    response.headers['Content-Security-Policy']="default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; img-src 'self' data: https://fastapi.tiangolo.com; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; object-src 'none'"
    response.headers['Access-Control-Expose-Headers']='PAYMENT-REQUIRED, PAYMENT-RESPONSE, EXTENSION-RESPONSES'
    return response

@app.exception_handler(DataUnavailable)
async def unavailable(request,error):
    LOG.warning('DATA UNAVAILABLE | %s | %s',request.url.path,error.code)
    return JSONResponse({'detail':error.code,'charged':False},status_code=503)

@app.get('/',include_in_schema=False)
async def homepage():return FileResponse(HERE/'index.html')
@app.get('/wallet.js',include_in_schema=False)
async def wallet_js():return FileResponse(HERE/'wallet.js',media_type='application/javascript')
# Public project logo, using the same three green bars as the website.
# Embedded here so deployment still requires only the existing runtime files.
@app.api_route('/logo.svg',methods=['GET','HEAD'],include_in_schema=False)
async def merchant_logo():
    svg='''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256" role="img" aria-labelledby="title">
<title id="title">Quant Trading Signals</title>
<rect width="256" height="256" rx="48" fill="#080e16"/>
<g fill="#8df2b6">
<path d="M44 161h36l-10 47H34z"/>
<path d="M109 104h36l-22 104H87z"/>
<path d="M174 48h36l-34 160h-36z"/>
</g></svg>'''
    return Response(content=svg,media_type='image/svg+xml')

@app.get('/health')
async def health():
    return {'status':'ok','version':VERSION,'news_configured':bool(os.getenv('GNEWS_API_KEY')), 'network':'mainnet'}
@app.get('/api/v1/config')
async def config():
    return {'name':NAME,'price_usdc':'0.1','amount':AMOUNT,'asset':ASSET,'pay_to':PAY_TO,
      'network':NETWORK,'genesis_hash':GENESIS,'public_url':ORIGIN,'wallet':'Kibisis',
      'timeframe':'5m','news_day':'UTC','api_news':False,'web_news':'optional',
      'merchant_id':'1128c420e3f5d347'}
@app.get('/api/v1/assets')
async def assets():
    try:markets=await app.state.engine.markets();error=None
    except DataUnavailable as e:markets={};error=e.code
    return {'assets':[{'symbol':s,'name':n,'available':s in markets,'market':markets.get(s),
      'reason':None if s in markets else 'STABLECOIN_NO_DIRECTIONAL_SIGNAL' if s=='USDT' else error or 'MARKET_NOT_AVAILABLE'}
      for s,n in sorted(ASSETS.items())],'catalog_source':'Existing merchant routes, captured 2026-09-29','market_error':error}

def extensions():
    # data=declare_discovery_extension(input={},input_schema={'type':'object','properties':{}})
    data=declare_discovery_extension(input={},input_schema={'type':'object','properties':{}},
                                     output=OutputConfig(example=OUTPUT_EXAMPLE))
    ext=data['bazaar'];ext['info']['input'].update({'method':'GET','queryParams':{}})
    ext['schema']['properties']['input']['properties']['method']={'type':'string','enum':['GET']}
    ext['schema']['properties']['input']['required'].append('method')
    ext['info'].update({'name':NAME,'description':'5-minute technical signals; optional daily news in web reports.',
                        'tags':['x402-global-challenge','trading','crypto']})
    data['x402-merchant']={
        'info':{
            'name':NAME,
            'website':ORIGIN+'/',
            'logo':ORIGIN+'/logo.svg',
            'categories':['trading-signals','market-data','crypto'],
        },
        'schema':{
            '$schema':'https://json-schema.org/draft/2020-12/schema',
            'type':'object',
            'required':['name','website','logo','categories'],
            'properties':{
                'name':{'type':'string','minLength':1},
                'website':{'type':'string','format':'uri'},
                'logo':{'type':'string','format':'uri'},
                'categories':{'type':'array','minItems':1,'uniqueItems':True,
                              'items':{'type':'string','minLength':1}},
            },
        },
    }
    return data

async def requirement():
    cached=app.state.supported
    if not cached or cached[0]<time.time():
        try:
            r=await app.state.http.get(FACILITATOR+'/supported');r.raise_for_status()
            sponsor=next(x.get('extra',{}).get('feePayer') for x in r.json()['kinds']
                         if x.get('network')==NETWORK and x.get('scheme')=='exact' and x.get('x402Version')==2)
            if not encoding.is_valid_address(sponsor):raise ValueError()
        except Exception:raise HTTPException(503,'PAYMENT_FACILITATOR_UNAVAILABLE') from None
        app.state.supported=(time.time()+300,sponsor)
    sponsor=app.state.supported[1]
    return {'scheme':'exact','network':NETWORK,'asset':ASSET,'amount':AMOUNT,'payTo':PAY_TO,
            'maxTimeoutSeconds':300,'extra':{'decimals':6,'tag':'x402-global-challenge','feePayer':sponsor}}

def resource(path):return {'url':ORIGIN+path,'description':NAME+' — 5-minute market signal; news optional on the web','mimeType':'application/json','serviceName':NAME}
def challenge(path,req):return {'x402Version':2,'resource':resource(path),'accepts':[req],'extensions':extensions()}
@app.get('/.well-known/x402.json',include_in_schema=False)
async def manifest():
    return {'name':NAME,'description':'Paid technical signals with optional news for web purchases.','url':ORIGIN,'documentation':ORIGIN+'/docs',
      'payTo':PAY_TO,'network':NETWORK,'resources':[{'url':ORIGIN+'/api/v1/market-signal'+('/'+s if s else ''),
      'method':'GET','description':NAME,'price':'0.1 USDC','extensions':extensions()} for s in ['',*ASSETS]]}

class Checkout(BaseModel):
    address:str=Field(min_length=58,max_length=58)
    source:Literal['api','web']='api'

def normalize_symbol(symbol):
    symbol=symbol.upper()
    if symbol not in ASSETS:raise HTTPException(404,'UNSUPPORTED_ASSET')
    return symbol

async def precompute(symbol,*,include_news=False):
    # Bound news costs even if anonymous users repeatedly request free preparation.
    # A per-asset report cache and the provider cache also avoid duplicate work.
    return await app.state.engine.report(symbol,include_news=include_news)

@app.get('/api/v1/news-status/{symbol}')
async def news_status(symbol:str):
    """Web selection check: availability only, no paid article or signal content."""
    return await app.state.engine.news_status(normalize_symbol(symbol))


def build_group(payer,req):
    algod=AlgodClient('',ALGOD)
    info=algod.account_info(payer)
    if info.get('auth-addr') not in (None,payer):raise ValueError('REKEYED_ACCOUNT_NOT_SUPPORTED')
    balance=next((a.get('amount',0) for a in info.get('assets',[]) if a.get('asset-id')==int(ASSET)),None)
    if balance is None:raise ValueError('USDC_OPT_IN_REQUIRED')
    if balance<int(AMOUNT):raise ValueError('INSUFFICIENT_USDC')
    sp=algod.suggested_params()
    if sp.gh!=GENESIS:raise ValueError('WRONG_ALGORAND_NETWORK')
    fee=max(1000,sp.min_fee or 1000)*2
    if fee>4000:raise ValueError('NETWORK_FEE_TOO_HIGH')
    # Short validity prevents a cancelled unsigned checkout from staying usable for long.
    last=min(sp.last,sp.first+60)
    def params(f):return transaction.SuggestedParams(f,sp.first,last,sp.gh,sp.gen,flat_fee=True)
    sponsor=req['extra']['feePayer']
    nonce=secrets.token_bytes(16)
    txs=[transaction.PaymentTxn(sponsor,params(fee),sponsor,0,note=b'qts-fee:'+nonce),
         transaction.AssetTransferTxn(payer,params(0),PAY_TO,int(AMOUNT),int(ASSET),note=b'qts-signal:'+nonce)]
    transaction.assign_group_id(txs)
    return [encoding.msgpack_encode(tx) for tx in txs],txs[1].get_txid()

@app.post('/api/v1/checkout/{symbol}')
async def checkout(symbol:str,body:Checkout):
    symbol=normalize_symbol(symbol)
    if not encoding.is_valid_address(body.address):raise HTTPException(400,'INVALID_ADDRESS')
    report=await precompute(symbol,include_news=body.source=='web');req=await requirement()
    try:group,txid=await asyncio.to_thread(build_group,body.address,req)
    except ValueError as e:raise HTTPException(400,str(e)) from None
    except Exception:raise HTTPException(503,'ALGORAND_NODE_UNAVAILABLE') from None
    quote_id=secrets.token_urlsafe(24);now=time.time();path='/api/v1/market-signal/'+symbol
    with db() as c:
        c.execute('DELETE FROM quotes WHERE expires < ? AND txid NOT IN (SELECT txid FROM payments)',(now-86400,))
        c.execute('INSERT INTO quotes VALUES (?,?,?,?,?,?,?,?,?)',(quote_id,txid,body.address,ORIGIN+path,
            canonical(report),canonical(req),canonical(group),now,now+180))
    return {'quote_id':quote_id,'expires_at':now+180,'payment_required':challenge(path,req),
      'unsigned_transactions':group,'sign_indexes':[1],'txid':txid,'charged':False,
      'news_status':report.get('news_status')}


def validate_payload(payload,req,path):
    if payload.get('x402Version')!=2 or payload.get('accepted')!=req or payload.get('resource',{}).get('url')!=ORIGIN+path:
        raise ValueError('PAYMENT_REQUIREMENTS_MISMATCH')
    inner=payload.get('payload',{});group=inner.get('paymentGroup',[])
    if len(group)!=2 or inner.get('paymentIndex')!=1:raise ValueError('INVALID_PAYMENT_GROUP')
    sponsor=encoding.msgpack_decode(group[0]);signed=encoding.msgpack_decode(group[1])
    if not isinstance(sponsor,transaction.PaymentTxn) or not isinstance(signed,transaction.SignedTransaction):
        raise ValueError('INVALID_SIGNATURE_FORMAT')
    if signed.authorizing_address:raise ValueError('REKEYED_ACCOUNT_NOT_SUPPORTED')
    pay=signed.transaction
    if not isinstance(pay,transaction.AssetTransferTxn):raise ValueError('USDC_TRANSFER_REQUIRED')
    if pay.receiver!=PAY_TO or pay.amount!=int(AMOUNT) or pay.index!=int(ASSET) or pay.fee!=0:
        raise ValueError('WRONG_PAYMENT')
    if pay.close_assets_to or pay.revocation_target or pay.rekey_to or pay.lease:raise ValueError('UNSAFE_PAYMENT')
    if sponsor.sender!=req['extra']['feePayer'] or sponsor.receiver!=sponsor.sender or sponsor.amt!=0:
        raise ValueError('INVALID_SPONSOR')
    if sponsor.close_remainder_to or sponsor.rekey_to or sponsor.lease or not 2000<=sponsor.fee<=4000:
        raise ValueError('UNSAFE_SPONSOR')
    if pay.genesis_hash!=GENESIS or sponsor.genesis_hash!=GENESIS or pay.first_valid_round!=sponsor.first_valid_round or pay.last_valid_round!=sponsor.last_valid_round:
        raise ValueError('WRONG_NETWORK_OR_ROUNDS')
    if not pay.group or pay.group!=sponsor.group:raise ValueError('MISSING_GROUP')
    unsigned=copy.deepcopy([sponsor,pay])
    for t in unsigned:t.group=None
    if transaction.calculate_group_id(unsigned)!=pay.group:raise ValueError('GROUP_HASH_MISMATCH')
    VerifyKey(encoding.decode_address(pay.sender)).verify(
        b'TX'+base64.b64decode(encoding.msgpack_encode(pay)),base64.b64decode(signed.signature))
    return pay.get_txid(),pay.sender,[encoding.msgpack_encode(sponsor),encoding.msgpack_encode(pay)]

class VerificationRejected(Exception):
    pass

async def settle_payload(payload,req):
    body={'x402Version':2,'paymentPayload':payload,'paymentRequirements':req}
    r=await app.state.http.post(FACILITATOR+'/verify',json=body);r.raise_for_status();verify=r.json()
    if verify.get('isValid') is not True:raise VerificationRejected('PAYMENT_VERIFICATION_FAILED')
    r=await app.state.http.post(FACILITATOR+'/settle',json=body);r.raise_for_status()
    return r.json()

async def onchain_confirmed(txid):
    # A settle timeout must not cause a fresh payment. Reconcile the SAME txid.
    try:
        r=await app.state.http.get(ALGOD+'/v2/transactions/pending/'+txid)
        if r.status_code==200 and r.json().get('confirmed-round',0)>0:return True
        r=await app.state.http.get('https://mainnet-idx.algonode.cloud/v2/transactions/'+txid)
        return r.status_code==200 and r.json().get('transaction',{}).get('confirmed-round',0)>0
    except Exception:return False

async def expired_unpaid(txid,last_round):
    # Only release an uncertain payment after BOTH the node and indexer have
    # passed its validity window. A slow indexer or network error keeps it pending.
    try:
        node=await app.state.http.get(ALGOD+'/v2/status');node.raise_for_status()
        if node.json().get('last-round',0)<=last_round+10:return False
        index=await app.state.http.get('https://mainnet-idx.algonode.cloud/health');index.raise_for_status()
        if index.json().get('round',0)<=last_round+10:return False
        lookup=await app.state.http.get('https://mainnet-idx.algonode.cloud/v2/transactions/'+txid)
        return lookup.status_code==404
    except Exception:return False

def paid_response(report,receipt):
    data=json.loads(report);data['billing']={'price_usdc':'0.1','asset':'USDC','network':'Algorand Mainnet','receipt':receipt}
    return JSONResponse(data,headers={'PAYMENT-RESPONSE':b64(receipt)})

async def paid_signal(symbol,request,signature,quote_id):
    symbol=normalize_symbol(symbol);path=request.url.path
    if not signature:
        c=challenge(path,await requirement())
        return JSONResponse(c,status_code=402,headers={'PAYMENT-REQUIRED':b64(c)})
    try:payload=unb64(signature)
    except Exception:raise HTTPException(400,'INVALID_PAYMENT_HEADER') from None
    if not isinstance(payload,dict):raise HTTPException(400,'INVALID_PAYMENT_HEADER')
    quote=None
    if quote_id:
        with db() as c:quote=c.execute('SELECT * FROM quotes WHERE id=?',(quote_id,)).fetchone()
        if not quote or quote['resource']!=ORIGIN+path:raise HTTPException(400,'UNKNOWN_QUOTE')
        req=json.loads(quote['requirement'])
    else:req=await requirement()
    try:txid,payer,group=validate_payload(payload,req,path)
    except Exception:raise HTTPException(400,'INVALID_PAYMENT_OR_REQUIREMENTS') from None
    if quote and (quote['payer']!=payer or quote['txid']!=txid or json.loads(quote['group_json'])!=group):
        raise HTTPException(400,'QUOTE_PAYMENT_MISMATCH')
    fingerprint=hashlib.sha256(canonical({'group':payload['payload'],'resource':ORIGIN+path}).encode()).hexdigest()
    # One process + one worker; SQLite retains replay protection through redeploys.
    async with app.state.lock:
        with db() as c:stored=c.execute('SELECT * FROM payments WHERE txid=?',(txid,)).fetchone()
        if stored:
            if stored['fingerprint']!=fingerprint or stored['resource']!=ORIGIN+path:raise HTTPException(409,'PAYMENT_ALREADY_USED')
            if stored['state']=='paid':return paid_response(stored['report'],json.loads(stored['receipt']))
            if stored['state']=='rejected':raise HTTPException(402,'PAYMENT_REJECTED')
            if stored['state']=='expired':raise HTTPException(409,'PAYMENT_EXPIRED_UNPAID')
            if await onchain_confirmed(txid):
                receipt={'success':True,'transaction':txid,'network':NETWORK,'payer':payer,'reconciled':True}
                with db() as c:c.execute('UPDATE payments SET state=?,receipt=?,updated=? WHERE txid=?',('paid',canonical(receipt),time.time(),txid))
                return paid_response(stored['report'],receipt)
            last_round=encoding.msgpack_decode(payload['payload']['paymentGroup'][1]).transaction.last_valid_round
            if await expired_unpaid(txid,last_round):
                with db() as c:c.execute('UPDATE payments SET state=?,updated=? WHERE txid=?',('expired',time.time(),txid))
                raise HTTPException(409,'PAYMENT_EXPIRED_UNPAID')
            # Never settle a second time after an uncertain outcome or a restart.
            return JSONResponse({'detail':'PAYMENT_PENDING','txid':txid,'retry_same_payment':True},status_code=202)
        if quote and quote['expires']<time.time():raise HTTPException(409,'QUOTE_EXPIRED_NOT_SUBMITTED')
        report=json.loads(quote['report']) if quote else await precompute(symbol,include_news=False)
        if quote and report['symbol']!=symbol:raise HTTPException(409,'QUOTE_SYMBOL_MISMATCH')
        report_json=canonical(report)
        with db() as c:c.execute('INSERT INTO payments VALUES (?,?,?,?,?,?,?,?)',
            (txid,fingerprint,ORIGIN+path,payer,'pending',report_json,None,time.time()))
        # Trusted discovery declaration is passed all the way to verify AND settle.
        payload['extensions']=extensions();payload['resource']=resource(path)
        try:
            receipt=await settle_payload(payload,req)
            if receipt.get('success') is not True or not receipt.get('transaction') or receipt.get('network')!=NETWORK:
                LOG.warning('PAYMENT PENDING | %s | settlement did not confirm success',txid)
                return JSONResponse({'detail':'PAYMENT_PENDING','txid':txid,'retry_same_payment':True},status_code=202)
            # A facilitator may return the group sponsor txid; reconcile the payment itself.
            if receipt['transaction']!=txid and not await onchain_confirmed(txid):
                return JSONResponse({'detail':'PAYMENT_PENDING','txid':txid,'retry_same_payment':True},status_code=202)
            with db() as c:c.execute('UPDATE payments SET state=?,receipt=?,updated=? WHERE txid=?',('paid',canonical(receipt),time.time(),txid))
            LOG.info('REPORT PAID | %s | %s | 0.1 USDC | %s',symbol,report['signal'],txid)
            return paid_response(report_json,receipt)
        except VerificationRejected:
            with db() as c:c.execute('UPDATE payments SET state=?,updated=? WHERE txid=?',('rejected',time.time(),txid))
            raise HTTPException(402,'PAYMENT_VERIFICATION_FAILED') from None
        except Exception:
            LOG.warning('PAYMENT PENDING | %s | confirmation unavailable; keep the same signed request',txid)
            return JSONResponse({'detail':'PAYMENT_PENDING','txid':txid,'retry_same_payment':True},status_code=202)

@app.get('/api/v1/market-signal/{symbol}',responses={402:{'description':'x402 v2 payment required'},202:{'description':'Same payment awaiting confirmation'}})
async def market_signal(symbol:str,request:Request,payment_signature:str|None=Header(None),x_qts_quote:str|None=Header(None)):
    """Pay 0.1 USDC on Algorand. Returns BUY, SELL or HOLD and the supporting report.

    First GET returns PAYMENT-REQUIRED. Retry the SAME route with PAYMENT-SIGNATURE.
    Direct API purchases never query news. Web clients use /api/v1/checkout/{symbol}
    with source="web" to include news when available; no-news reports remain payable.
    A 202 response must be retried with the SAME signature; do not create a new payment.
    """
    return await paid_signal(symbol,request,payment_signature,x_qts_quote)

@app.get('/api/v1/market-signal')
async def legacy_default(request:Request,payment_signature:str|None=Header(None)):
    """Legacy base URL, now explicitly a BTC report. Preserves this registered route."""
    return await paid_signal('BTC',request,payment_signature,None)

if __name__=='__main__':
    import uvicorn
    uvicorn.run(app,host='0.0.0.0',port=int(os.getenv('PORT','8080')))
