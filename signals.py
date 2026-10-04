"""Closed 5-minute signals; news is optional and requested only by web flows."""
import asyncio
import math
import logging
import os
import re
import time
from datetime import datetime, timezone
from urllib.parse import urlparse

# Exact legacy symbols captured from merchant 1128c420e3f5d347 on 2026-09-29.
ASSETS = {
 'UNI':'Uniswap','ETH':'Ethereum','AVAX':'Avalanche','USDT':'Tether','BNB':'BNB',
 'ALGO':'Algorand','ADA':'Cardano','SOL':'Solana','XRP':'XRP','DOT':'Polkadot',
 'BCH':'Bitcoin Cash','STETH':'Lido Staked Ether','LINK':'Chainlink','LTC':'Litecoin',
 'MATIC':'Polygon','HBAR':'Hedera','XLM':'Stellar','QNT':'Quant','ATOM':'Cosmos',
 'APT':'Aptos','FIL':'Filecoin','DOGE':'Dogecoin','ARB':'Arbitrum','AAVE':'Aave',
 'DASH':'Dash','CRO':'Cronos','WBTC':'Wrapped Bitcoin','GRT':'The Graph','ZEC':'Zcash',
 'LDO':'Lido DAO','BAL':'Balancer','AXS':'Axie Infinity','IMX':'Immutable','FTM':'Fantom',
 'MKR':'Maker','CRV':'Curve DAO','OP':'Optimism','COMP':'Compound','YFI':'yearn.finance',
 'SUI':'Sui','CVX':'Convex Finance','MANA':'Decentraland','XMR':'Monero','SNX':'Synthetix',
 'CAKE':'PancakeSwap','SAND':'The Sandbox','KAS':'Kaspa','ICP':'Internet Computer',
 'BTC':'Bitcoin','ARKM':'Arkham','PEPE':'Pepe','BONK':'Bonk','GMX':'GMX','WLD':'Worldcoin',
 'NEAR':'NEAR Protocol','DYDX':'dYdX','BLUR':'Blur','W':'Wormhole','VET':'VeChain',
 'TIA':'Celestia','ONDO':'Ondo','JTO':'Jito','XEC':'eCash','SEI':'Sei','PIXEL':'Pixels',
 'HNT':'Helium','RENDER':'Render Network','JUP':'Jupiter',
}
SPOT = 'https://data-api.binance.vision'
FUTURES = 'https://fapi.binance.com'
POSITIVE = ['etf approval','approved etf','sec approves','partnership','institutional adoption',
            'integrates','integration','upgrade launches','mainnet launch','buyback','inflows']
NEGATIVE = ['hack','hacked','exploit','exploited','delist','delisting','lawsuit','outage',
            'bankruptcy','insolvent','breach','outflows','sec charges']
REASONS = {
 'ema_bull':'EMA 20 is above EMA 50 on the last closed 5-minute candle.',
 'ema_bear':'EMA 20 is below EMA 50 on the last closed 5-minute candle.',
 'ema_flat':'EMA 20 and EMA 50 have no clear direction.',
 'macd_bull':'MACD is above its signal line.', 'macd_bear':'MACD is below its signal line.',
 'rsi_long':'RSI is between 50 and 70: positive momentum without the overbought filter.',
 'rsi_short':'RSI is between 30 and 50: negative momentum without the oversold filter.',
 'rsi_extreme':'RSI is outside the directional entry ranges.',
 'trend_weak':'ADX is below 18: trend strength is insufficient.',
 'volatility_block':'ATR is outside the allowed 0.03% to 3% of price range.',
 'technical_mixed':'EMA, MACD and RSI do not all agree.',
 'news_positive':'The selected headline contains positive event terms.',
 'news_negative':'The selected headline contains negative event terms.',
 'news_neutral':'Headline terms do not provide a clear directional news bias.',
 'news_conflict':'The headline bias opposes the technical signal; the result is HOLD.',
 'aligned':'Technical filters pass and the headline bias does not oppose the direction.',
 'news_not_requested':'API report: technical indicators only; no news provider was queried.',
 'no_relevant_news':'No relevant news was found today (UTC). This report uses technical indicators only.',
 'news_unavailable':'News could not be checked. This report uses technical indicators only.',
 'technical_aligned':'The technical direction, momentum, trend and volatility filters pass.',
}

class DataUnavailable(Exception):
    def __init__(self, code): self.code=code; super().__init__(code)

def ema(values, period):
    out=[float(values[0])]; a=2/(period+1)
    for v in values[1:]: out.append(a*v+(1-a)*out[-1])
    return out

def rma(values, period):
    if len(values)<period: raise DataUnavailable('INSUFFICIENT_CANDLES')
    out=[sum(values[:period])/period]
    for value in values[period:]: out.append((out[-1]*(period-1)+value)/period)
    return out

def technical(rows):
    if len(rows)<250: raise DataUnavailable('INSUFFICIENT_CANDLES')
    close=[float(r[4]) for r in rows]; high=[float(r[2]) for r in rows]; low=[float(r[3]) for r in rows]
    e20=ema(close,20); e50=ema(close,50)
    line=[a-b for a,b in zip(ema(close,12),ema(close,26))]; macd_signal=ema(line,9)
    deltas=[b-a for a,b in zip(close,close[1:])]
    gain=rma([max(x,0) for x in deltas],14)[-1]; loss=rma([max(-x,0) for x in deltas],14)[-1]
    rsi=50 if gain==loss==0 else 100 if loss==0 else 100-100/(1+gain/loss)
    tr=[]; plus=[]; minus=[]
    for i in range(1,len(close)):
        tr.append(max(high[i]-low[i],abs(high[i]-close[i-1]),abs(low[i]-close[i-1])))
        up=high[i]-high[i-1]; down=low[i-1]-low[i]
        plus.append(up if up>down and up>0 else 0); minus.append(down if down>up and down>0 else 0)
    atr=rma(tr,14); p=rma(plus,14); m=rma(minus,14)
    dx=[100*abs(a-b)/(a+b) if a+b else 0 for a,b in zip(p,m)]
    adx=rma(dx,14)[-1]; atr_pct=100*atr[-1]/close[-1]
    bull=e20[-1]>e50[-1]; bear=e20[-1]<e50[-1]
    mb=line[-1]>macd_signal[-1]; ms=line[-1]<macd_signal[-1]
    long_rsi=50<rsi<70; short_rsi=30<rsi<50
    volatility=0.03<=atr_pct<=3; trend=adx>=18
    buy=bull and mb and long_rsi and volatility and trend
    sell=bear and ms and short_rsi and volatility and trend
    codes=['ema_bull' if bull else 'ema_bear' if bear else 'ema_flat']
    if mb or ms: codes.append('macd_bull' if mb else 'macd_bear')
    codes.append('rsi_long' if long_rsi else 'rsi_short' if short_rsi else 'rsi_extreme')
    if not trend: codes.append('trend_weak')
    if not volatility: codes.append('volatility_block')
    if not ((bull and mb and long_rsi) or (bear and ms and short_rsi)): codes.append('technical_mixed')
    cross='UP' if bull and e20[-2]<=e50[-2] else 'DOWN' if bear and e20[-2]>=e50[-2] else 'NONE'
    return {
      'signal':'BUY' if buy else 'SELL' if sell else 'HOLD', 'reason_codes':codes,
      'price':close[-1], 'ema20':e20[-1], 'ema50':e50[-1], 'ema_cross':cross,
      'macd':line[-1], 'macd_signal':macd_signal[-1], 'macd_histogram':line[-1]-macd_signal[-1],
      'rsi':rsi,'atr':atr[-1],'atr_pct':atr_pct,'adx':adx,
      'closed_at':datetime.fromtimestamp((int(rows[-1][6])+1)/1000,timezone.utc).isoformat(),
      'chart':[{'time':int(rows[i][0]),'close':close[i],'ema20':e20[i],'ema50':e50[i]}
               for i in range(len(rows)-96,len(rows))],
    }

def utc_parse(value):
    try: return datetime.fromisoformat(value.replace('Z','+00:00')).astimezone(timezone.utc)
    except (ValueError,TypeError,AttributeError): return None

def rank_news(articles,symbol,now):
    name=ASSETS[symbol]; candidates=[]; seen=set()
    # Ambiguous tickers must appear alongside crypto context; names are also matched.
    aliases=[name]
    if symbol=='BTC':aliases=['Bitcoin']
    if symbol=='ETH':aliases=['Ethereum','Ether']
    if symbol=='RENDER':aliases=['Render Network','Render token']
    generic={'W','OP','COMP','LINK','GRT','IMX','DASH','BLUR','PIXEL','NEAR','ONDO','QUANT'}
    context=re.compile(r'\b(crypto|blockchain|token|coin|defi|bitcoin|ethereum)\b',re.I)
    for a in articles:
        title=str(a.get('title') or '').strip(); desc=str(a.get('description') or '')
        text=title+' '+desc; url=a.get('url') or ''; when=utc_parse(a.get('publishedAt'))
        if not title or not when or when.date()!=now.date() or when>now:continue
        if urlparse(url).scheme!='https' or not urlparse(url).netloc or url in seen:continue
        seen.add(url)
        name_hit=any(re.search(r'(?<!\w)'+re.escape(x)+r'(?!\w)',text,re.I) for x in aliases)
        ticker_hit=bool(re.search(r'(?<!\w)'+re.escape(symbol)+r'(?!\w)',text))
        if not (name_hit or ticker_hit):continue
        if (symbol in generic or name.lower() in ['quant','compound','dash','blur','pixels','jupiter','sui','sei']) and not context.search(text):continue
        title_hit=any(x.lower() in title.lower() for x in aliases) or bool(re.search(r'\b'+re.escape(symbol)+r'\b',title))
        lower=title.lower()
        pos=[w for w in POSITIVE if re.search(r'\b'+re.escape(w)+r'\b',lower)]
        neg=[w for w in NEGATIVE if re.search(r'\b'+re.escape(w)+r'\b',lower)]
        # Headlines with negation or speculation are not interpreted as confirmed events.
        uncertain=bool(re.search(r'\b(no|not|denies|rumou?r|could|may|might|would|if|reportedly)\b|\?',lower))
        bias='NEUTRAL' if uncertain or bool(pos)==bool(neg) else 'POSITIVE' if pos else 'NEGATIVE'
        age=(now-when).total_seconds()/3600
        event=20 if pos or neg else 0
        score=(60 if title_hit else 35)+event+max(0,20*(1-age/24))
        candidates.append({'title':title[:300],'url':url,'source':str((a.get('source') or {}).get('name') or urlparse(url).hostname),
           'published_at':when.isoformat(),'score':round(score,2),'bias':bias,'matched_terms':pos+neg,
           'selection':'Highest score among the retrieved relevant articles published today (UTC).',
           'sentiment_method':'Conservative headline keyword rules; not a full-article interpretation.'})
    if not candidates:raise DataUnavailable('NO_RELEVANT_NEWS_TODAY')
    candidates.sort(key=lambda a:(a['score'],a['published_at']),reverse=True)
    return candidates[0],len(candidates)

NEWS_SCAN_SECONDS=4*3600  # A landing-page scan costs one provider request per batch.

def news_batches(symbols):
    """Group asset names into OR queries within the provider's 200-character limit."""
    tail=') AND (crypto OR token OR blockchain)';batches=[];names=[];batch=[]
    for s in symbols:
        name='"'+ASSETS[s]+'"'
        if names and len('('+' OR '.join(names+[name])+tail)>200:
            batches.append(('('+' OR '.join(names)+tail,batch));names=[];batch=[]
        names.append(name);batch.append(s)
    if batch:batches.append(('('+' OR '.join(names)+tail,batch))
    return batches

class SignalEngine:
    def __init__(self,http,reserve_news=None):
        self.reserve_news=reserve_news
        self.http=http;self.cache={};self.locks={};self.market_cache=None
        self.news_lock=asyncio.Lock();self.next_news_request=0.0
        self.today=('',{});self.next_scan=0.0;self.scan_code='NO_RELEVANT_NEWS_TODAY'
        self.news_request_interval=max(1.1,float(os.getenv('NEWS_REQUEST_INTERVAL_SECONDS','1.1')))
    async def get_json(self,url,params=None):
        try:
            response=await self.http.get(url,params=params)
            if response.status_code>=400:
                host=urlparse(url).hostname
                logging.getLogger('qts').warning('DATA PROVIDER ERROR | %s | HTTP %s',host,response.status_code)
                if host=='gnews.io':
                    raise DataUnavailable('NEWS_ACCESS_DENIED' if response.status_code in (401,403)
                        else 'NEWS_PROVIDER_LIMIT' if response.status_code==429 else 'NEWS_PROVIDER_UNAVAILABLE')
            response.raise_for_status();return response.json()
        except DataUnavailable:raise
        except Exception:
            raise DataUnavailable('DATA_PROVIDER_UNAVAILABLE') from None
    async def markets(self):
        if self.market_cache and self.market_cache[0]>time.time():return self.market_cache[1]
        found={}
        results=await asyncio.gather(self.get_json(SPOT+'/api/v3/exchangeInfo'),
                                     self.get_json(FUTURES+'/fapi/v1/exchangeInfo'),return_exceptions=True)
        for name,data in zip(['Binance Spot','Binance USD-M Futures'],results):
            if isinstance(data,Exception):continue
            for row in data.get('symbols',[]):
                base=row.get('baseAsset'); quote=row.get('quoteAsset')
                if base not in ASSETS or base=='USDT' or quote not in ('USDT','USDC') or row.get('status')!='TRADING':continue
                if name.endswith('Futures') and row.get('contractType')!='PERPETUAL':continue
                if base not in found:found[base]={'pair':row['symbol'],'quote':quote,'venue':name}
        if not found:raise DataUnavailable('MARKET_DATA_UNAVAILABLE')
        self.market_cache=(time.time()+1800,found);return found
    async def candles(self,symbol):
        market=(await self.markets()).get(symbol)
        if not market:raise DataUnavailable('MARKET_NOT_AVAILABLE')
        futures=market['venue'].endswith('Futures')
        rows=await self.get_json((FUTURES+'/fapi/v1/klines') if futures else (SPOT+'/api/v3/klines'),
                                 {'symbol':market['pair'],'interval':'5m','limit':600})
        now=int(time.time()*1000)-1500
        rows=[r for r in rows if isinstance(r,list) and len(r)>=7 and int(r[6])<now]
        if len(rows)<250:raise DataUnavailable('INSUFFICIENT_CANDLES')
        if now-int(rows[-1][6])>600000:raise DataUnavailable('STALE_CANDLES')
        for i,row in enumerate(rows):
            values=[float(row[j]) for j in (1,2,3,4,5)]
            if not all(math.isfinite(x) for x in values) or min(values[:4])<=0 or values[4]<0:raise DataUnavailable('INVALID_CANDLES')
            if float(row[2])<max(float(row[1]),float(row[4])) or float(row[3])>min(float(row[1]),float(row[4])):raise DataUnavailable('INVALID_CANDLES')
            if i and int(row[0])-int(rows[i-1][0])!=300000:raise DataUnavailable('CANDLE_GAP')
        return technical(rows),market
    async def news(self,symbol):
        # Share the provider cache and lock between selection checks and checkout.
        # This also serializes requests across symbols on the one-worker server.
        async with self.news_lock:
            return await self._news_locked(symbol)
    async def _news_locked(self,symbol):
        now=datetime.now(timezone.utc);key='news:'+symbol+':'+now.date().isoformat()
        cached=self.cache.get(key)
        if cached and cached[0]>time.time():
            if isinstance(cached[1],DataUnavailable):raise cached[1]
            return cached[1]
        found=self.found_today(now)
        try:
            result=rank_news(await self.search('"'+ASSETS[symbol]+'" AND (crypto OR token OR blockchain)',now),symbol,now)
        except DataUnavailable as error:
            # An article already found today (UTC) is still today's news for this asset.
            result=found.get(symbol)
            if not result:
                # Missing articles must not consume a new provider request on every click.
                self.cache[key]=(time.time()+300,error)
                raise
        found[symbol]=result
        self.cache[key]=(time.time()+900,result);return result
    async def search(self,query,now):
        api_key=os.getenv('GNEWS_API_KEY','').strip()
        if not api_key:raise DataUnavailable('NEWS_API_NOT_CONFIGURED')
        delay=self.next_news_request-time.monotonic()
        if delay>0:await asyncio.sleep(delay)
        if self.reserve_news:self.reserve_news()
        self.next_news_request=time.monotonic()+self.news_request_interval
        data=await self.get_json('https://gnews.io/api/v4/search',{
            'q':query,'lang':'en','max':10,'sortby':'relevance','in':'title,description',
            'from':now.replace(hour=0,minute=0,second=0,microsecond=0).isoformat(),
            'to':now.isoformat(),'apikey':api_key})
        return data.get('articles',[])
    def found_today(self,now):
        day=now.date().isoformat()
        if self.today[0]!=day:self.today=(day,{});self.next_scan=0.0
        return self.today[1]
    async def news_today(self):
        """Assets with relevant news today (UTC), from a few batched provider queries."""
        async with self.news_lock:
            now=datetime.now(timezone.utc);found=self.found_today(now)
            if self.next_scan<=time.time():
                try:
                    markets=await self.markets()
                    # Bitcoin goes with the other majors so it does not crowd out a batch of small assets.
                    for query,batch in news_batches(sorted((s for s in ASSETS if s in markets),key=lambda s:s!='BTC')):
                        articles=await self.search(query,now)
                        for s in batch:
                            if s in found:continue
                            try:found[s]=rank_news(articles,s,now)
                            except DataUnavailable:pass
                    self.scan_code='NO_RELEVANT_NEWS_TODAY';self.next_scan=time.time()+NEWS_SCAN_SECONDS
                except DataUnavailable as error:
                    self.scan_code=error.code;self.next_scan=time.time()+300
            # Availability only: paid headline/content are never exposed by this route.
            return {'symbols':sorted(found),'code':'NEWS_AVAILABLE' if found else self.scan_code,
                    'checked_at':now.isoformat()}
    async def optional_news(self,symbol):
        """An absent or unavailable news feed never blocks a technical report."""
        try:
            news,count=await self.news(symbol)
            return news,count,'NEWS_AVAILABLE'
        except DataUnavailable as error:
            return None,0,error.code
    async def news_status(self,symbol):
        news,_,code=await self.optional_news(symbol)
        # Availability only: paid headline/content are never exposed by this route.
        return {'symbol':symbol,'available':news is not None,'code':code,
                'checked_at':datetime.now(timezone.utc).isoformat()}
    async def report(self,symbol,*,include_news=False):
        if symbol not in ASSETS:raise DataUnavailable('UNSUPPORTED_ASSET')
        if symbol=='USDT':raise DataUnavailable('STABLECOIN_NO_DIRECTIONAL_SIGNAL')
        cache_key='report:'+('web:' if include_news else 'api:')+symbol
        async with self.locks.setdefault(cache_key,asyncio.Lock()):
            cached=self.cache.get(cache_key)
            if cached and cached[0]>time.time():return copy_report(cached[1])
            ind,market=await self.candles(symbol)
            news,count,news_code=(await self.optional_news(symbol)) if include_news else (None,0,'NEWS_NOT_REQUESTED')
            final=ind['signal'];codes=list(ind['reason_codes'])
            methodology='EMA 20/50 alignment, MACD 12/26/9, RSI 14, ADX 14 >=18, ATR 14 0.03%-3%'
            limitations=['Rule-based decision support, not a prediction or a promise of profit.',
                         'Only closed candles are used. New purchases may change as new candles arrive.']
            if news is not None:
                bias=news['bias'];codes.append('news_'+bias.lower())
                if (final=='BUY' and bias=='NEGATIVE') or (final=='SELL' and bias=='POSITIVE'):
                    final='HOLD';codes.append('news_conflict')
                elif final!='HOLD':codes.append('aligned')
                methodology+='; contrary news bias changes the result to HOLD.'
                limitations.append('News selection is limited to retrieved GNews articles; headlines remain in their original language.')
            else:
                codes.append('news_not_requested' if not include_news else
                             'no_relevant_news' if news_code=='NO_RELEVANT_NEWS_TODAY' else 'news_unavailable')
                if final!='HOLD':codes.append('technical_aligned')
                methodology+='; technical indicators only, without a news adjustment.'
                limitations.append('This report does not assess news or event risk.')
            report={'schema':'qts-signal-1','symbol':symbol,'name':ASSETS[symbol],
                'analysis_mode':'technical_and_news' if news is not None else 'technical_only',
                'news_status':{'requested':include_news,'available':news is not None,'code':news_code},
                'signal':final,'technical_signal':ind['signal'],'timeframe':'5m',
                'as_of':datetime.now(timezone.utc).isoformat(),'market':market,'indicators':ind,
                'news':news,'news_candidates':count,'reason_codes':codes,'reasons':[REASONS[c] for c in codes],
                'methodology':methodology,'limitations':limitations}
            self.cache[cache_key]=(time.time()+20,report)
            return copy_report(report)

def copy_report(value):
    import copy
    return copy.deepcopy(value)
