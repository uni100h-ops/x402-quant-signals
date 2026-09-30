(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __esm = (fn, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    } catch (e) {
      throw err = [e], e;
    }
  };
  var __commonJS = (cb, mod) => function __require2() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/@agoralabs-sh/avm-web-provider/dist/constants/Prefixes.js
  var require_Prefixes = __commonJS({
    "node_modules/@agoralabs-sh/avm-web-provider/dist/constants/Prefixes.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ARC0027_PREFIX = void 0;
      exports.ARC0027_PREFIX = "arc0027";
    }
  });

  // node_modules/@agoralabs-sh/avm-web-provider/dist/constants/Suffixes.js
  var require_Suffixes = __commonJS({
    "node_modules/@agoralabs-sh/avm-web-provider/dist/constants/Suffixes.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.CHANNEL_NAME_SUFFIX = void 0;
      exports.CHANNEL_NAME_SUFFIX = "channel";
    }
  });

  // node_modules/@agoralabs-sh/avm-web-provider/dist/constants/Timeouts.js
  var require_Timeouts = __commonJS({
    "node_modules/@agoralabs-sh/avm-web-provider/dist/constants/Timeouts.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.UPPER_REQUEST_TIMEOUT = exports.LOWER_REQUEST_TIMEOUT = exports.DEFAULT_REQUEST_TIMEOUT = void 0;
      exports.DEFAULT_REQUEST_TIMEOUT = 18e4;
      exports.LOWER_REQUEST_TIMEOUT = 750;
      exports.UPPER_REQUEST_TIMEOUT = 3e5;
    }
  });

  // node_modules/@agoralabs-sh/avm-web-provider/dist/constants/index.js
  var require_constants = __commonJS({
    "node_modules/@agoralabs-sh/avm-web-provider/dist/constants/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      }) : (function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      }));
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p2 in m) if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2)) __createBinding(exports2, m, p2);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_Prefixes(), exports);
      __exportStar(require_Suffixes(), exports);
      __exportStar(require_Timeouts(), exports);
    }
  });

  // node_modules/uuid/dist/commonjs-browser/rng.js
  var require_rng = __commonJS({
    "node_modules/uuid/dist/commonjs-browser/rng.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = rng;
      var getRandomValues;
      var rnds8 = new Uint8Array(16);
      function rng() {
        if (!getRandomValues) {
          getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
          if (!getRandomValues) {
            throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
          }
        }
        return getRandomValues(rnds8);
      }
    }
  });

  // node_modules/uuid/dist/commonjs-browser/regex.js
  var require_regex = __commonJS({
    "node_modules/uuid/dist/commonjs-browser/regex.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
      exports.default = _default;
    }
  });

  // node_modules/uuid/dist/commonjs-browser/validate.js
  var require_validate = __commonJS({
    "node_modules/uuid/dist/commonjs-browser/validate.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _regex = _interopRequireDefault(require_regex());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function validate(uuid) {
        return typeof uuid === "string" && _regex.default.test(uuid);
      }
      var _default = validate;
      exports.default = _default;
    }
  });

  // node_modules/uuid/dist/commonjs-browser/stringify.js
  var require_stringify = __commonJS({
    "node_modules/uuid/dist/commonjs-browser/stringify.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      exports.unsafeStringify = unsafeStringify;
      var _validate = _interopRequireDefault(require_validate());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var byteToHex = [];
      for (let i = 0; i < 256; ++i) {
        byteToHex.push((i + 256).toString(16).slice(1));
      }
      function unsafeStringify(arr, offset = 0) {
        return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
      }
      function stringify(arr, offset = 0) {
        const uuid = unsafeStringify(arr, offset);
        if (!(0, _validate.default)(uuid)) {
          throw TypeError("Stringified UUID is invalid");
        }
        return uuid;
      }
      var _default = stringify;
      exports.default = _default;
    }
  });

  // node_modules/uuid/dist/commonjs-browser/v1.js
  var require_v1 = __commonJS({
    "node_modules/uuid/dist/commonjs-browser/v1.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _rng = _interopRequireDefault(require_rng());
      var _stringify = require_stringify();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var _nodeId;
      var _clockseq;
      var _lastMSecs = 0;
      var _lastNSecs = 0;
      function v1(options, buf, offset) {
        let i = buf && offset || 0;
        const b = buf || new Array(16);
        options = options || {};
        let node = options.node || _nodeId;
        let clockseq = options.clockseq !== void 0 ? options.clockseq : _clockseq;
        if (node == null || clockseq == null) {
          const seedBytes = options.random || (options.rng || _rng.default)();
          if (node == null) {
            node = _nodeId = [seedBytes[0] | 1, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
          }
          if (clockseq == null) {
            clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 16383;
          }
        }
        let msecs = options.msecs !== void 0 ? options.msecs : Date.now();
        let nsecs = options.nsecs !== void 0 ? options.nsecs : _lastNSecs + 1;
        const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 1e4;
        if (dt < 0 && options.clockseq === void 0) {
          clockseq = clockseq + 1 & 16383;
        }
        if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === void 0) {
          nsecs = 0;
        }
        if (nsecs >= 1e4) {
          throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        }
        _lastMSecs = msecs;
        _lastNSecs = nsecs;
        _clockseq = clockseq;
        msecs += 122192928e5;
        const tl = ((msecs & 268435455) * 1e4 + nsecs) % 4294967296;
        b[i++] = tl >>> 24 & 255;
        b[i++] = tl >>> 16 & 255;
        b[i++] = tl >>> 8 & 255;
        b[i++] = tl & 255;
        const tmh = msecs / 4294967296 * 1e4 & 268435455;
        b[i++] = tmh >>> 8 & 255;
        b[i++] = tmh & 255;
        b[i++] = tmh >>> 24 & 15 | 16;
        b[i++] = tmh >>> 16 & 255;
        b[i++] = clockseq >>> 8 | 128;
        b[i++] = clockseq & 255;
        for (let n = 0; n < 6; ++n) {
          b[i + n] = node[n];
        }
        return buf || (0, _stringify.unsafeStringify)(b);
      }
      var _default = v1;
      exports.default = _default;
    }
  });

  // node_modules/uuid/dist/commonjs-browser/parse.js
  var require_parse = __commonJS({
    "node_modules/uuid/dist/commonjs-browser/parse.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _validate = _interopRequireDefault(require_validate());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function parse(uuid) {
        if (!(0, _validate.default)(uuid)) {
          throw TypeError("Invalid UUID");
        }
        let v;
        const arr = new Uint8Array(16);
        arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
        arr[1] = v >>> 16 & 255;
        arr[2] = v >>> 8 & 255;
        arr[3] = v & 255;
        arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
        arr[5] = v & 255;
        arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
        arr[7] = v & 255;
        arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
        arr[9] = v & 255;
        arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 1099511627776 & 255;
        arr[11] = v / 4294967296 & 255;
        arr[12] = v >>> 24 & 255;
        arr[13] = v >>> 16 & 255;
        arr[14] = v >>> 8 & 255;
        arr[15] = v & 255;
        return arr;
      }
      var _default = parse;
      exports.default = _default;
    }
  });

  // node_modules/uuid/dist/commonjs-browser/v35.js
  var require_v35 = __commonJS({
    "node_modules/uuid/dist/commonjs-browser/v35.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.URL = exports.DNS = void 0;
      exports.default = v35;
      var _stringify = require_stringify();
      var _parse = _interopRequireDefault(require_parse());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function stringToBytes(str) {
        str = unescape(encodeURIComponent(str));
        const bytes = [];
        for (let i = 0; i < str.length; ++i) {
          bytes.push(str.charCodeAt(i));
        }
        return bytes;
      }
      var DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
      exports.DNS = DNS;
      var URL2 = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
      exports.URL = URL2;
      function v35(name, version, hashfunc) {
        function generateUUID(value, namespace, buf, offset) {
          var _namespace;
          if (typeof value === "string") {
            value = stringToBytes(value);
          }
          if (typeof namespace === "string") {
            namespace = (0, _parse.default)(namespace);
          }
          if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) {
            throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
          }
          let bytes = new Uint8Array(16 + value.length);
          bytes.set(namespace);
          bytes.set(value, namespace.length);
          bytes = hashfunc(bytes);
          bytes[6] = bytes[6] & 15 | version;
          bytes[8] = bytes[8] & 63 | 128;
          if (buf) {
            offset = offset || 0;
            for (let i = 0; i < 16; ++i) {
              buf[offset + i] = bytes[i];
            }
            return buf;
          }
          return (0, _stringify.unsafeStringify)(bytes);
        }
        try {
          generateUUID.name = name;
        } catch (err) {
        }
        generateUUID.DNS = DNS;
        generateUUID.URL = URL2;
        return generateUUID;
      }
    }
  });

  // node_modules/uuid/dist/commonjs-browser/md5.js
  var require_md5 = __commonJS({
    "node_modules/uuid/dist/commonjs-browser/md5.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      function md5(bytes) {
        if (typeof bytes === "string") {
          const msg = unescape(encodeURIComponent(bytes));
          bytes = new Uint8Array(msg.length);
          for (let i = 0; i < msg.length; ++i) {
            bytes[i] = msg.charCodeAt(i);
          }
        }
        return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
      }
      function md5ToHexEncodedArray(input) {
        const output = [];
        const length32 = input.length * 32;
        const hexTab = "0123456789abcdef";
        for (let i = 0; i < length32; i += 8) {
          const x = input[i >> 5] >>> i % 32 & 255;
          const hex = parseInt(hexTab.charAt(x >>> 4 & 15) + hexTab.charAt(x & 15), 16);
          output.push(hex);
        }
        return output;
      }
      function getOutputLength(inputLength8) {
        return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
      }
      function wordsToMd5(x, len) {
        x[len >> 5] |= 128 << len % 32;
        x[getOutputLength(len) - 1] = len;
        let a = 1732584193;
        let b = -271733879;
        let c = -1732584194;
        let d2 = 271733878;
        for (let i = 0; i < x.length; i += 16) {
          const olda = a;
          const oldb = b;
          const oldc = c;
          const oldd = d2;
          a = md5ff(a, b, c, d2, x[i], 7, -680876936);
          d2 = md5ff(d2, a, b, c, x[i + 1], 12, -389564586);
          c = md5ff(c, d2, a, b, x[i + 2], 17, 606105819);
          b = md5ff(b, c, d2, a, x[i + 3], 22, -1044525330);
          a = md5ff(a, b, c, d2, x[i + 4], 7, -176418897);
          d2 = md5ff(d2, a, b, c, x[i + 5], 12, 1200080426);
          c = md5ff(c, d2, a, b, x[i + 6], 17, -1473231341);
          b = md5ff(b, c, d2, a, x[i + 7], 22, -45705983);
          a = md5ff(a, b, c, d2, x[i + 8], 7, 1770035416);
          d2 = md5ff(d2, a, b, c, x[i + 9], 12, -1958414417);
          c = md5ff(c, d2, a, b, x[i + 10], 17, -42063);
          b = md5ff(b, c, d2, a, x[i + 11], 22, -1990404162);
          a = md5ff(a, b, c, d2, x[i + 12], 7, 1804603682);
          d2 = md5ff(d2, a, b, c, x[i + 13], 12, -40341101);
          c = md5ff(c, d2, a, b, x[i + 14], 17, -1502002290);
          b = md5ff(b, c, d2, a, x[i + 15], 22, 1236535329);
          a = md5gg(a, b, c, d2, x[i + 1], 5, -165796510);
          d2 = md5gg(d2, a, b, c, x[i + 6], 9, -1069501632);
          c = md5gg(c, d2, a, b, x[i + 11], 14, 643717713);
          b = md5gg(b, c, d2, a, x[i], 20, -373897302);
          a = md5gg(a, b, c, d2, x[i + 5], 5, -701558691);
          d2 = md5gg(d2, a, b, c, x[i + 10], 9, 38016083);
          c = md5gg(c, d2, a, b, x[i + 15], 14, -660478335);
          b = md5gg(b, c, d2, a, x[i + 4], 20, -405537848);
          a = md5gg(a, b, c, d2, x[i + 9], 5, 568446438);
          d2 = md5gg(d2, a, b, c, x[i + 14], 9, -1019803690);
          c = md5gg(c, d2, a, b, x[i + 3], 14, -187363961);
          b = md5gg(b, c, d2, a, x[i + 8], 20, 1163531501);
          a = md5gg(a, b, c, d2, x[i + 13], 5, -1444681467);
          d2 = md5gg(d2, a, b, c, x[i + 2], 9, -51403784);
          c = md5gg(c, d2, a, b, x[i + 7], 14, 1735328473);
          b = md5gg(b, c, d2, a, x[i + 12], 20, -1926607734);
          a = md5hh(a, b, c, d2, x[i + 5], 4, -378558);
          d2 = md5hh(d2, a, b, c, x[i + 8], 11, -2022574463);
          c = md5hh(c, d2, a, b, x[i + 11], 16, 1839030562);
          b = md5hh(b, c, d2, a, x[i + 14], 23, -35309556);
          a = md5hh(a, b, c, d2, x[i + 1], 4, -1530992060);
          d2 = md5hh(d2, a, b, c, x[i + 4], 11, 1272893353);
          c = md5hh(c, d2, a, b, x[i + 7], 16, -155497632);
          b = md5hh(b, c, d2, a, x[i + 10], 23, -1094730640);
          a = md5hh(a, b, c, d2, x[i + 13], 4, 681279174);
          d2 = md5hh(d2, a, b, c, x[i], 11, -358537222);
          c = md5hh(c, d2, a, b, x[i + 3], 16, -722521979);
          b = md5hh(b, c, d2, a, x[i + 6], 23, 76029189);
          a = md5hh(a, b, c, d2, x[i + 9], 4, -640364487);
          d2 = md5hh(d2, a, b, c, x[i + 12], 11, -421815835);
          c = md5hh(c, d2, a, b, x[i + 15], 16, 530742520);
          b = md5hh(b, c, d2, a, x[i + 2], 23, -995338651);
          a = md5ii(a, b, c, d2, x[i], 6, -198630844);
          d2 = md5ii(d2, a, b, c, x[i + 7], 10, 1126891415);
          c = md5ii(c, d2, a, b, x[i + 14], 15, -1416354905);
          b = md5ii(b, c, d2, a, x[i + 5], 21, -57434055);
          a = md5ii(a, b, c, d2, x[i + 12], 6, 1700485571);
          d2 = md5ii(d2, a, b, c, x[i + 3], 10, -1894986606);
          c = md5ii(c, d2, a, b, x[i + 10], 15, -1051523);
          b = md5ii(b, c, d2, a, x[i + 1], 21, -2054922799);
          a = md5ii(a, b, c, d2, x[i + 8], 6, 1873313359);
          d2 = md5ii(d2, a, b, c, x[i + 15], 10, -30611744);
          c = md5ii(c, d2, a, b, x[i + 6], 15, -1560198380);
          b = md5ii(b, c, d2, a, x[i + 13], 21, 1309151649);
          a = md5ii(a, b, c, d2, x[i + 4], 6, -145523070);
          d2 = md5ii(d2, a, b, c, x[i + 11], 10, -1120210379);
          c = md5ii(c, d2, a, b, x[i + 2], 15, 718787259);
          b = md5ii(b, c, d2, a, x[i + 9], 21, -343485551);
          a = safeAdd(a, olda);
          b = safeAdd(b, oldb);
          c = safeAdd(c, oldc);
          d2 = safeAdd(d2, oldd);
        }
        return [a, b, c, d2];
      }
      function bytesToWords(input) {
        if (input.length === 0) {
          return [];
        }
        const length8 = input.length * 8;
        const output = new Uint32Array(getOutputLength(length8));
        for (let i = 0; i < length8; i += 8) {
          output[i >> 5] |= (input[i / 8] & 255) << i % 32;
        }
        return output;
      }
      function safeAdd(x, y) {
        const lsw = (x & 65535) + (y & 65535);
        const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return msw << 16 | lsw & 65535;
      }
      function bitRotateLeft(num, cnt) {
        return num << cnt | num >>> 32 - cnt;
      }
      function md5cmn(q, a, b, x, s, t) {
        return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
      }
      function md5ff(a, b, c, d2, x, s, t) {
        return md5cmn(b & c | ~b & d2, a, b, x, s, t);
      }
      function md5gg(a, b, c, d2, x, s, t) {
        return md5cmn(b & d2 | c & ~d2, a, b, x, s, t);
      }
      function md5hh(a, b, c, d2, x, s, t) {
        return md5cmn(b ^ c ^ d2, a, b, x, s, t);
      }
      function md5ii(a, b, c, d2, x, s, t) {
        return md5cmn(c ^ (b | ~d2), a, b, x, s, t);
      }
      var _default = md5;
      exports.default = _default;
    }
  });

  // node_modules/uuid/dist/commonjs-browser/v3.js
  var require_v3 = __commonJS({
    "node_modules/uuid/dist/commonjs-browser/v3.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _v = _interopRequireDefault(require_v35());
      var _md = _interopRequireDefault(require_md5());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var v3 = (0, _v.default)("v3", 48, _md.default);
      var _default = v3;
      exports.default = _default;
    }
  });

  // node_modules/uuid/dist/commonjs-browser/native.js
  var require_native = __commonJS({
    "node_modules/uuid/dist/commonjs-browser/native.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
      var _default = {
        randomUUID
      };
      exports.default = _default;
    }
  });

  // node_modules/uuid/dist/commonjs-browser/v4.js
  var require_v4 = __commonJS({
    "node_modules/uuid/dist/commonjs-browser/v4.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _native = _interopRequireDefault(require_native());
      var _rng = _interopRequireDefault(require_rng());
      var _stringify = require_stringify();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function v4(options, buf, offset) {
        if (_native.default.randomUUID && !buf && !options) {
          return _native.default.randomUUID();
        }
        options = options || {};
        const rnds = options.random || (options.rng || _rng.default)();
        rnds[6] = rnds[6] & 15 | 64;
        rnds[8] = rnds[8] & 63 | 128;
        if (buf) {
          offset = offset || 0;
          for (let i = 0; i < 16; ++i) {
            buf[offset + i] = rnds[i];
          }
          return buf;
        }
        return (0, _stringify.unsafeStringify)(rnds);
      }
      var _default = v4;
      exports.default = _default;
    }
  });

  // node_modules/uuid/dist/commonjs-browser/sha1.js
  var require_sha1 = __commonJS({
    "node_modules/uuid/dist/commonjs-browser/sha1.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      function f(s, x, y, z) {
        switch (s) {
          case 0:
            return x & y ^ ~x & z;
          case 1:
            return x ^ y ^ z;
          case 2:
            return x & y ^ x & z ^ y & z;
          case 3:
            return x ^ y ^ z;
        }
      }
      function ROTL(x, n) {
        return x << n | x >>> 32 - n;
      }
      function sha1(bytes) {
        const K = [1518500249, 1859775393, 2400959708, 3395469782];
        const H = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
        if (typeof bytes === "string") {
          const msg = unescape(encodeURIComponent(bytes));
          bytes = [];
          for (let i = 0; i < msg.length; ++i) {
            bytes.push(msg.charCodeAt(i));
          }
        } else if (!Array.isArray(bytes)) {
          bytes = Array.prototype.slice.call(bytes);
        }
        bytes.push(128);
        const l = bytes.length / 4 + 2;
        const N = Math.ceil(l / 16);
        const M = new Array(N);
        for (let i = 0; i < N; ++i) {
          const arr = new Uint32Array(16);
          for (let j = 0; j < 16; ++j) {
            arr[j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];
          }
          M[i] = arr;
        }
        M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
        M[N - 1][14] = Math.floor(M[N - 1][14]);
        M[N - 1][15] = (bytes.length - 1) * 8 & 4294967295;
        for (let i = 0; i < N; ++i) {
          const W = new Uint32Array(80);
          for (let t = 0; t < 16; ++t) {
            W[t] = M[i][t];
          }
          for (let t = 16; t < 80; ++t) {
            W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
          }
          let a = H[0];
          let b = H[1];
          let c = H[2];
          let d2 = H[3];
          let e = H[4];
          for (let t = 0; t < 80; ++t) {
            const s = Math.floor(t / 20);
            const T = ROTL(a, 5) + f(s, b, c, d2) + e + K[s] + W[t] >>> 0;
            e = d2;
            d2 = c;
            c = ROTL(b, 30) >>> 0;
            b = a;
            a = T;
          }
          H[0] = H[0] + a >>> 0;
          H[1] = H[1] + b >>> 0;
          H[2] = H[2] + c >>> 0;
          H[3] = H[3] + d2 >>> 0;
          H[4] = H[4] + e >>> 0;
        }
        return [H[0] >> 24 & 255, H[0] >> 16 & 255, H[0] >> 8 & 255, H[0] & 255, H[1] >> 24 & 255, H[1] >> 16 & 255, H[1] >> 8 & 255, H[1] & 255, H[2] >> 24 & 255, H[2] >> 16 & 255, H[2] >> 8 & 255, H[2] & 255, H[3] >> 24 & 255, H[3] >> 16 & 255, H[3] >> 8 & 255, H[3] & 255, H[4] >> 24 & 255, H[4] >> 16 & 255, H[4] >> 8 & 255, H[4] & 255];
      }
      var _default = sha1;
      exports.default = _default;
    }
  });

  // node_modules/uuid/dist/commonjs-browser/v5.js
  var require_v5 = __commonJS({
    "node_modules/uuid/dist/commonjs-browser/v5.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _v = _interopRequireDefault(require_v35());
      var _sha = _interopRequireDefault(require_sha1());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var v5 = (0, _v.default)("v5", 80, _sha.default);
      var _default = v5;
      exports.default = _default;
    }
  });

  // node_modules/uuid/dist/commonjs-browser/nil.js
  var require_nil = __commonJS({
    "node_modules/uuid/dist/commonjs-browser/nil.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _default = "00000000-0000-0000-0000-000000000000";
      exports.default = _default;
    }
  });

  // node_modules/uuid/dist/commonjs-browser/version.js
  var require_version = __commonJS({
    "node_modules/uuid/dist/commonjs-browser/version.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _validate = _interopRequireDefault(require_validate());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function version(uuid) {
        if (!(0, _validate.default)(uuid)) {
          throw TypeError("Invalid UUID");
        }
        return parseInt(uuid.slice(14, 15), 16);
      }
      var _default = version;
      exports.default = _default;
    }
  });

  // node_modules/uuid/dist/commonjs-browser/index.js
  var require_commonjs_browser = __commonJS({
    "node_modules/uuid/dist/commonjs-browser/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "NIL", {
        enumerable: true,
        get: function get() {
          return _nil.default;
        }
      });
      Object.defineProperty(exports, "parse", {
        enumerable: true,
        get: function get() {
          return _parse.default;
        }
      });
      Object.defineProperty(exports, "stringify", {
        enumerable: true,
        get: function get() {
          return _stringify.default;
        }
      });
      Object.defineProperty(exports, "v1", {
        enumerable: true,
        get: function get() {
          return _v.default;
        }
      });
      Object.defineProperty(exports, "v3", {
        enumerable: true,
        get: function get() {
          return _v2.default;
        }
      });
      Object.defineProperty(exports, "v4", {
        enumerable: true,
        get: function get() {
          return _v3.default;
        }
      });
      Object.defineProperty(exports, "v5", {
        enumerable: true,
        get: function get() {
          return _v4.default;
        }
      });
      Object.defineProperty(exports, "validate", {
        enumerable: true,
        get: function get() {
          return _validate.default;
        }
      });
      Object.defineProperty(exports, "version", {
        enumerable: true,
        get: function get() {
          return _version.default;
        }
      });
      var _v = _interopRequireDefault(require_v1());
      var _v2 = _interopRequireDefault(require_v3());
      var _v3 = _interopRequireDefault(require_v4());
      var _v4 = _interopRequireDefault(require_v5());
      var _nil = _interopRequireDefault(require_nil());
      var _version = _interopRequireDefault(require_version());
      var _validate = _interopRequireDefault(require_validate());
      var _stringify = _interopRequireDefault(require_stringify());
      var _parse = _interopRequireDefault(require_parse());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
    }
  });

  // node_modules/@agoralabs-sh/avm-web-provider/dist/controllers/Logger.js
  var require_Logger = __commonJS({
    "node_modules/@agoralabs-sh/avm-web-provider/dist/controllers/Logger.js"(exports) {
      "use strict";
      var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
          }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var Logger = (
        /** @class */
        (function() {
          function Logger2(level) {
            this._level = level;
          }
          Logger2.prototype.canLog = function(allowedLevel) {
            switch (this._level) {
              case "error":
                return allowedLevel === "error";
              case "warn":
                return allowedLevel === "error" || allowedLevel === "warn";
              case "info":
                return allowedLevel === "error" || allowedLevel === "warn" || allowedLevel === "info";
              case "debug":
                return true;
              default:
                return false;
            }
          };
          Logger2.prototype.debug = function(message) {
            var optionalParams = [];
            for (var _i = 1; _i < arguments.length; _i++) {
              optionalParams[_i - 1] = arguments[_i];
            }
            this.canLog("debug") && console.log.apply(console, __spreadArray([message], optionalParams, false));
          };
          Logger2.prototype.error = function(message) {
            var optionalParams = [];
            for (var _i = 1; _i < arguments.length; _i++) {
              optionalParams[_i - 1] = arguments[_i];
            }
            this.canLog("error") && console.error.apply(console, __spreadArray([message], optionalParams, false));
          };
          Logger2.prototype.info = function(message) {
            var optionalParams = [];
            for (var _i = 1; _i < arguments.length; _i++) {
              optionalParams[_i - 1] = arguments[_i];
            }
            this.canLog("info") && console.info.apply(console, __spreadArray([message], optionalParams, false));
          };
          Logger2.prototype.warn = function(message) {
            var optionalParams = [];
            for (var _i = 1; _i < arguments.length; _i++) {
              optionalParams[_i - 1] = arguments[_i];
            }
            this.canLog("warn") && console.warn.apply(console, __spreadArray([message], optionalParams, false));
          };
          return Logger2;
        })()
      );
      exports.default = Logger;
    }
  });

  // node_modules/@agoralabs-sh/avm-web-provider/dist/controllers/BaseController.js
  var require_BaseController = __commonJS({
    "node_modules/@agoralabs-sh/avm-web-provider/dist/controllers/BaseController.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var Logger_1 = __importDefault(require_Logger());
      var BaseController = (
        /** @class */
        (function() {
          function BaseController2(config) {
            this._config = config;
            this._listeners = /* @__PURE__ */ new Map();
            this._logger = new Logger_1.default(config.debug ? "debug" : "error");
          }
          BaseController2.prototype.getConfig = function() {
            return this._config;
          };
          BaseController2.prototype.removeAllListeners = function() {
            this._listeners.forEach(function(_a) {
              var listener = _a.listener, reference = _a.reference;
              return window.removeEventListener(reference, listener);
            });
            this._listeners.clear();
          };
          BaseController2.prototype.removeListener = function(id) {
            var item = this._listeners.get(id) || null;
            if (!item) {
              return;
            }
            window.removeEventListener(item.reference, item.listener);
            this._listeners.delete(id);
          };
          return BaseController2;
        })()
      );
      exports.default = BaseController;
    }
  });

  // node_modules/@agoralabs-sh/avm-web-provider/dist/enums/ARC0027ErrorCodeEnum.js
  var require_ARC0027ErrorCodeEnum = __commonJS({
    "node_modules/@agoralabs-sh/avm-web-provider/dist/enums/ARC0027ErrorCodeEnum.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var ARC0027ErrorCodeEnum;
      (function(ARC0027ErrorCodeEnum2) {
        ARC0027ErrorCodeEnum2[ARC0027ErrorCodeEnum2["UnknownError"] = 4e3] = "UnknownError";
        ARC0027ErrorCodeEnum2[ARC0027ErrorCodeEnum2["MethodCanceledError"] = 4001] = "MethodCanceledError";
        ARC0027ErrorCodeEnum2[ARC0027ErrorCodeEnum2["MethodTimedOutError"] = 4002] = "MethodTimedOutError";
        ARC0027ErrorCodeEnum2[ARC0027ErrorCodeEnum2["MethodNotSupportedError"] = 4003] = "MethodNotSupportedError";
        ARC0027ErrorCodeEnum2[ARC0027ErrorCodeEnum2["NetworkNotSupportedError"] = 4004] = "NetworkNotSupportedError";
        ARC0027ErrorCodeEnum2[ARC0027ErrorCodeEnum2["UnauthorizedSignerError"] = 4100] = "UnauthorizedSignerError";
        ARC0027ErrorCodeEnum2[ARC0027ErrorCodeEnum2["InvalidInputError"] = 4200] = "InvalidInputError";
        ARC0027ErrorCodeEnum2[ARC0027ErrorCodeEnum2["InvalidGroupIdError"] = 4201] = "InvalidGroupIdError";
        ARC0027ErrorCodeEnum2[ARC0027ErrorCodeEnum2["FailedToPostSomeTransactionsError"] = 4300] = "FailedToPostSomeTransactionsError";
      })(ARC0027ErrorCodeEnum || (ARC0027ErrorCodeEnum = {}));
      exports.default = ARC0027ErrorCodeEnum;
    }
  });

  // node_modules/@agoralabs-sh/avm-web-provider/dist/enums/ARC0027MessageTypeEnum.js
  var require_ARC0027MessageTypeEnum = __commonJS({
    "node_modules/@agoralabs-sh/avm-web-provider/dist/enums/ARC0027MessageTypeEnum.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var ARC0027MessageTypeEnum;
      (function(ARC0027MessageTypeEnum2) {
        ARC0027MessageTypeEnum2["Request"] = "request";
        ARC0027MessageTypeEnum2["Response"] = "response";
      })(ARC0027MessageTypeEnum || (ARC0027MessageTypeEnum = {}));
      exports.default = ARC0027MessageTypeEnum;
    }
  });

  // node_modules/@agoralabs-sh/avm-web-provider/dist/enums/ARC0027MethodEnum.js
  var require_ARC0027MethodEnum = __commonJS({
    "node_modules/@agoralabs-sh/avm-web-provider/dist/enums/ARC0027MethodEnum.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var ARC0027MethodEnum;
      (function(ARC0027MethodEnum2) {
        ARC0027MethodEnum2["Disable"] = "disable";
        ARC0027MethodEnum2["Discover"] = "discover";
        ARC0027MethodEnum2["Enable"] = "enable";
        ARC0027MethodEnum2["PostTransactions"] = "post_transactions";
        ARC0027MethodEnum2["SignAndPostTransactions"] = "sign_and_post_transactions";
        ARC0027MethodEnum2["SignMessage"] = "sign_message";
        ARC0027MethodEnum2["SignTransactions"] = "sign_transactions";
      })(ARC0027MethodEnum || (ARC0027MethodEnum = {}));
      exports.default = ARC0027MethodEnum;
    }
  });

  // node_modules/@agoralabs-sh/avm-web-provider/dist/enums/index.js
  var require_enums = __commonJS({
    "node_modules/@agoralabs-sh/avm-web-provider/dist/enums/index.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ARC0027MethodEnum = exports.ARC0027MessageTypeEnum = exports.ARC0027ErrorCodeEnum = void 0;
      var ARC0027ErrorCodeEnum_1 = require_ARC0027ErrorCodeEnum();
      Object.defineProperty(exports, "ARC0027ErrorCodeEnum", { enumerable: true, get: function() {
        return __importDefault(ARC0027ErrorCodeEnum_1).default;
      } });
      var ARC0027MessageTypeEnum_1 = require_ARC0027MessageTypeEnum();
      Object.defineProperty(exports, "ARC0027MessageTypeEnum", { enumerable: true, get: function() {
        return __importDefault(ARC0027MessageTypeEnum_1).default;
      } });
      var ARC0027MethodEnum_1 = require_ARC0027MethodEnum();
      Object.defineProperty(exports, "ARC0027MethodEnum", { enumerable: true, get: function() {
        return __importDefault(ARC0027MethodEnum_1).default;
      } });
    }
  });

  // node_modules/@agoralabs-sh/avm-web-provider/dist/errors/BaseARC0027Error.js
  var require_BaseARC0027Error = __commonJS({
    "node_modules/@agoralabs-sh/avm-web-provider/dist/errors/BaseARC0027Error.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var BaseARC0027Error = (
        /** @class */
        /* @__PURE__ */ (function() {
          function BaseARC0027Error2(_a) {
            var message = _a.message, providerId = _a.providerId;
            this.message = message.toLowerCase();
            this.providerId = providerId;
          }
          return BaseARC0027Error2;
        })()
      );
      exports.default = BaseARC0027Error;
    }
  });

  // node_modules/@agoralabs-sh/avm-web-provider/dist/errors/ARC0027FailedToPostSomeTransactionsError.js
  var require_ARC0027FailedToPostSomeTransactionsError = __commonJS({
    "node_modules/@agoralabs-sh/avm-web-provider/dist/errors/ARC0027FailedToPostSomeTransactionsError.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || /* @__PURE__ */ (function() {
        var extendStatics = function(d2, b) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b2) {
            d3.__proto__ = b2;
          } || function(d3, b2) {
            for (var p2 in b2) if (Object.prototype.hasOwnProperty.call(b2, p2)) d3[p2] = b2[p2];
          };
          return extendStatics(d2, b);
        };
        return function(d2, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d2, b);
          function __() {
            this.constructor = d2;
          }
          d2.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      })();
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var enums_1 = require_enums();
      var BaseARC0027Error_1 = __importDefault(require_BaseARC0027Error());
      var ARC0027FailedToPostSomeTransactionsError = (
        /** @class */
        (function(_super) {
          __extends2(ARC0027FailedToPostSomeTransactionsError2, _super);
          function ARC0027FailedToPostSomeTransactionsError2(_a) {
            var message = _a.message, providerId = _a.providerId, successTxnIDs = _a.successTxnIDs;
            var _this = _super.call(this, {
              message: message || "failed to post some transactions",
              providerId
            }) || this;
            _this.code = enums_1.ARC0027ErrorCodeEnum.FailedToPostSomeTransactionsError;
            _this.name = "FailedToPostSomeTransactionsError";
            _this.data = {
              successTxnIDs
            };
            return _this;
          }
          return ARC0027FailedToPostSomeTransactionsError2;
        })(BaseARC0027Error_1.default)
      );
      exports.default = ARC0027FailedToPostSomeTransactionsError;
    }
  });

  // node_modules/@agoralabs-sh/avm-web-provider/dist/errors/ARC0027InvalidGroupIdError.js
  var require_ARC0027InvalidGroupIdError = __commonJS({
    "node_modules/@agoralabs-sh/avm-web-provider/dist/errors/ARC0027InvalidGroupIdError.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || /* @__PURE__ */ (function() {
        var extendStatics = function(d2, b) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b2) {
            d3.__proto__ = b2;
          } || function(d3, b2) {
            for (var p2 in b2) if (Object.prototype.hasOwnProperty.call(b2, p2)) d3[p2] = b2[p2];
          };
          return extendStatics(d2, b);
        };
        return function(d2, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d2, b);
          function __() {
            this.constructor = d2;
          }
          d2.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      })();
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var enums_1 = require_enums();
      var BaseARC0027Error_1 = __importDefault(require_BaseARC0027Error());
      var ARC0027InvalidGroupIdError = (
        /** @class */
        (function(_super) {
          __extends2(ARC0027InvalidGroupIdError2, _super);
          function ARC0027InvalidGroupIdError2(_a) {
            var message = _a.message, providerId = _a.providerId;
            var _this = _super.call(this, {
              message: message || "computed group id does not match the assigned id of one or more transactions",
              providerId
            }) || this;
            _this.code = enums_1.ARC0027ErrorCodeEnum.InvalidGroupIdError;
            _this.name = "InvalidGroupIdError";
            return _this;
          }
          return ARC0027InvalidGroupIdError2;
        })(BaseARC0027Error_1.default)
      );
      exports.default = ARC0027InvalidGroupIdError;
    }
  });

  // node_modules/@agoralabs-sh/avm-web-provider/dist/errors/ARC0027InvalidInputError.js
  var require_ARC0027InvalidInputError = __commonJS({
    "node_modules/@agoralabs-sh/avm-web-provider/dist/errors/ARC0027InvalidInputError.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || /* @__PURE__ */ (function() {
        var extendStatics = function(d2, b) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b2) {
            d3.__proto__ = b2;
          } || function(d3, b2) {
            for (var p2 in b2) if (Object.prototype.hasOwnProperty.call(b2, p2)) d3[p2] = b2[p2];
          };
          return extendStatics(d2, b);
        };
        return function(d2, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d2, b);
          function __() {
            this.constructor = d2;
          }
          d2.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      })();
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var enums_1 = require_enums();
      var BaseARC0027Error_1 = __importDefault(require_BaseARC0027Error());
      var ARC0027InvalidInputError = (
        /** @class */
        (function(_super) {
          __extends2(ARC0027InvalidInputError2, _super);
          function ARC0027InvalidInputError2(_a) {
            var message = _a.message, providerId = _a.providerId;
            var _this = _super.call(this, {
              message: message || "invalid input in transaction(s)",
              providerId
            }) || this;
            _this.code = enums_1.ARC0027ErrorCodeEnum.InvalidInputError;
            _this.name = "InvalidInputError";
            return _this;
          }
          return ARC0027InvalidInputError2;
        })(BaseARC0027Error_1.default)
      );
      exports.default = ARC0027InvalidInputError;
    }
  });

  // node_modules/@agoralabs-sh/avm-web-provider/dist/errors/ARC0027MethodCanceledError.js
  var require_ARC0027MethodCanceledError = __commonJS({
    "node_modules/@agoralabs-sh/avm-web-provider/dist/errors/ARC0027MethodCanceledError.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || /* @__PURE__ */ (function() {
        var extendStatics = function(d2, b) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b2) {
            d3.__proto__ = b2;
          } || function(d3, b2) {
            for (var p2 in b2) if (Object.prototype.hasOwnProperty.call(b2, p2)) d3[p2] = b2[p2];
          };
          return extendStatics(d2, b);
        };
        return function(d2, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d2, b);
          function __() {
            this.constructor = d2;
          }
          d2.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      })();
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var enums_1 = require_enums();
      var BaseARC0027Error_1 = __importDefault(require_BaseARC0027Error());
      var ARC0027MethodCanceledError = (
        /** @class */
        (function(_super) {
          __extends2(ARC0027MethodCanceledError2, _super);
          function ARC0027MethodCanceledError2(_a) {
            var message = _a.message, method = _a.method, providerId = _a.providerId;
            var _this = _super.call(this, {
              message: message || 'method "'.concat(method, '" canceled for provider "').concat(providerId, '"'),
              providerId
            }) || this;
            _this.code = enums_1.ARC0027ErrorCodeEnum.MethodCanceledError;
            _this.name = "MethodCanceledError";
            _this.data = {
              method
            };
            return _this;
          }
          return ARC0027MethodCanceledError2;
        })(BaseARC0027Error_1.default)
      );
      exports.default = ARC0027MethodCanceledError;
    }
  });

  // node_modules/@agoralabs-sh/avm-web-provider/dist/errors/ARC0027MethodNotSupportedError.js
  var require_ARC0027MethodNotSupportedError = __commonJS({
    "node_modules/@agoralabs-sh/avm-web-provider/dist/errors/ARC0027MethodNotSupportedError.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || /* @__PURE__ */ (function() {
        var extendStatics = function(d2, b) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b2) {
            d3.__proto__ = b2;
          } || function(d3, b2) {
            for (var p2 in b2) if (Object.prototype.hasOwnProperty.call(b2, p2)) d3[p2] = b2[p2];
          };
          return extendStatics(d2, b);
        };
        return function(d2, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d2, b);
          function __() {
            this.constructor = d2;
          }
          d2.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      })();
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var enums_1 = require_enums();
      var BaseARC0027Error_1 = __importDefault(require_BaseARC0027Error());
      var ARC0027MethodSupportedError = (
        /** @class */
        (function(_super) {
          __extends2(ARC0027MethodSupportedError2, _super);
          function ARC0027MethodSupportedError2(_a) {
            var message = _a.message, method = _a.method, providerId = _a.providerId;
            var _this = _super.call(this, {
              message: message || 'method "'.concat(method, '" not supported for provider "').concat(providerId, '"'),
              providerId
            }) || this;
            _this.code = enums_1.ARC0027ErrorCodeEnum.MethodNotSupportedError;
            _this.name = "MethodNotSupportedError";
            _this.data = {
              method
            };
            return _this;
          }
          return ARC0027MethodSupportedError2;
        })(BaseARC0027Error_1.default)
      );
      exports.default = ARC0027MethodSupportedError;
    }
  });

  // node_modules/@agoralabs-sh/avm-web-provider/dist/errors/ARC0027MethodTimedOutError.js
  var require_ARC0027MethodTimedOutError = __commonJS({
    "node_modules/@agoralabs-sh/avm-web-provider/dist/errors/ARC0027MethodTimedOutError.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || /* @__PURE__ */ (function() {
        var extendStatics = function(d2, b) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b2) {
            d3.__proto__ = b2;
          } || function(d3, b2) {
            for (var p2 in b2) if (Object.prototype.hasOwnProperty.call(b2, p2)) d3[p2] = b2[p2];
          };
          return extendStatics(d2, b);
        };
        return function(d2, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d2, b);
          function __() {
            this.constructor = d2;
          }
          d2.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      })();
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var enums_1 = require_enums();
      var BaseARC0027Error_1 = __importDefault(require_BaseARC0027Error());
      var ARC0027MethodTimedOutError = (
        /** @class */
        (function(_super) {
          __extends2(ARC0027MethodTimedOutError2, _super);
          function ARC0027MethodTimedOutError2(_a) {
            var message = _a.message, method = _a.method, providerId = _a.providerId;
            var _this = _super.call(this, {
              message: message || 'method "'.concat(method, '" timed out'),
              providerId
            }) || this;
            _this.code = enums_1.ARC0027ErrorCodeEnum.MethodTimedOutError;
            _this.name = "MethodTimedOutError";
            _this.data = {
              method
            };
            return _this;
          }
          return ARC0027MethodTimedOutError2;
        })(BaseARC0027Error_1.default)
      );
      exports.default = ARC0027MethodTimedOutError;
    }
  });

  // node_modules/@agoralabs-sh/avm-web-provider/dist/errors/ARC0027NetworkNotSupportedError.js
  var require_ARC0027NetworkNotSupportedError = __commonJS({
    "node_modules/@agoralabs-sh/avm-web-provider/dist/errors/ARC0027NetworkNotSupportedError.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || /* @__PURE__ */ (function() {
        var extendStatics = function(d2, b) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b2) {
            d3.__proto__ = b2;
          } || function(d3, b2) {
            for (var p2 in b2) if (Object.prototype.hasOwnProperty.call(b2, p2)) d3[p2] = b2[p2];
          };
          return extendStatics(d2, b);
        };
        return function(d2, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d2, b);
          function __() {
            this.constructor = d2;
          }
          d2.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      })();
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var enums_1 = require_enums();
      var BaseARC0027Error_1 = __importDefault(require_BaseARC0027Error());
      var ARC0027NetworkNotSupportedError = (
        /** @class */
        (function(_super) {
          __extends2(ARC0027NetworkNotSupportedError2, _super);
          function ARC0027NetworkNotSupportedError2(_a) {
            var genesisHashes = _a.genesisHashes, message = _a.message, providerId = _a.providerId;
            var _this = _super.call(this, {
              message: message || "provider does not support network with genesis hashes [".concat(genesisHashes.map(function(value) {
                return '"'.concat(value, '"');
              }).join(","), "]"),
              providerId
            }) || this;
            _this.code = enums_1.ARC0027ErrorCodeEnum.NetworkNotSupportedError;
            _this.name = "NetworkNotSupportedError";
            _this.data = {
              genesisHashes
            };
            return _this;
          }
          return ARC0027NetworkNotSupportedError2;
        })(BaseARC0027Error_1.default)
      );
      exports.default = ARC0027NetworkNotSupportedError;
    }
  });

  // node_modules/@agoralabs-sh/avm-web-provider/dist/errors/ARC0027UnauthorizedSignerError.js
  var require_ARC0027UnauthorizedSignerError = __commonJS({
    "node_modules/@agoralabs-sh/avm-web-provider/dist/errors/ARC0027UnauthorizedSignerError.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || /* @__PURE__ */ (function() {
        var extendStatics = function(d2, b) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b2) {
            d3.__proto__ = b2;
          } || function(d3, b2) {
            for (var p2 in b2) if (Object.prototype.hasOwnProperty.call(b2, p2)) d3[p2] = b2[p2];
          };
          return extendStatics(d2, b);
        };
        return function(d2, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d2, b);
          function __() {
            this.constructor = d2;
          }
          d2.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      })();
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var enums_1 = require_enums();
      var BaseARC0027Error_1 = __importDefault(require_BaseARC0027Error());
      var ARC0027UnauthorizedSignerError = (
        /** @class */
        (function(_super) {
          __extends2(ARC0027UnauthorizedSignerError2, _super);
          function ARC0027UnauthorizedSignerError2(_a) {
            var message = _a.message, providerId = _a.providerId, signer = _a.signer;
            var _this = _super.call(this, {
              message: message || "unauthorized signer".concat(signer ? ' "'.concat(signer, '"') : ""),
              providerId
            }) || this;
            _this.code = enums_1.ARC0027ErrorCodeEnum.UnauthorizedSignerError;
            _this.name = "UnauthorizedSignerError";
            _this.data = {
              signer
            };
            return _this;
          }
          return ARC0027UnauthorizedSignerError2;
        })(BaseARC0027Error_1.default)
      );
      exports.default = ARC0027UnauthorizedSignerError;
    }
  });

  // node_modules/@agoralabs-sh/avm-web-provider/dist/errors/ARC0027UnknownError.js
  var require_ARC0027UnknownError = __commonJS({
    "node_modules/@agoralabs-sh/avm-web-provider/dist/errors/ARC0027UnknownError.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || /* @__PURE__ */ (function() {
        var extendStatics = function(d2, b) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b2) {
            d3.__proto__ = b2;
          } || function(d3, b2) {
            for (var p2 in b2) if (Object.prototype.hasOwnProperty.call(b2, p2)) d3[p2] = b2[p2];
          };
          return extendStatics(d2, b);
        };
        return function(d2, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d2, b);
          function __() {
            this.constructor = d2;
          }
          d2.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      })();
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var enums_1 = require_enums();
      var BaseARC0027Error_1 = __importDefault(require_BaseARC0027Error());
      var ARC0027UnknownError = (
        /** @class */
        (function(_super) {
          __extends2(ARC0027UnknownError2, _super);
          function ARC0027UnknownError2() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.code = enums_1.ARC0027ErrorCodeEnum.UnknownError;
            _this.name = "UnknownError";
            return _this;
          }
          return ARC0027UnknownError2;
        })(BaseARC0027Error_1.default)
      );
      exports.default = ARC0027UnknownError;
    }
  });

  // node_modules/@agoralabs-sh/avm-web-provider/dist/errors/index.js
  var require_errors = __commonJS({
    "node_modules/@agoralabs-sh/avm-web-provider/dist/errors/index.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.BaseARC0027Error = exports.ARC0027UnknownError = exports.ARC0027UnauthorizedSignerError = exports.ARC0027NetworkNotSupportedError = exports.ARC0027MethodTimedOutError = exports.ARC0027MethodNotSupportedError = exports.ARC0027MethodCanceledError = exports.ARC0027InvalidInputError = exports.ARC0027InvalidGroupIdError = exports.ARC0027FailedToPostSomeTransactionsError = void 0;
      var ARC0027FailedToPostSomeTransactionsError_1 = require_ARC0027FailedToPostSomeTransactionsError();
      Object.defineProperty(exports, "ARC0027FailedToPostSomeTransactionsError", { enumerable: true, get: function() {
        return __importDefault(ARC0027FailedToPostSomeTransactionsError_1).default;
      } });
      var ARC0027InvalidGroupIdError_1 = require_ARC0027InvalidGroupIdError();
      Object.defineProperty(exports, "ARC0027InvalidGroupIdError", { enumerable: true, get: function() {
        return __importDefault(ARC0027InvalidGroupIdError_1).default;
      } });
      var ARC0027InvalidInputError_1 = require_ARC0027InvalidInputError();
      Object.defineProperty(exports, "ARC0027InvalidInputError", { enumerable: true, get: function() {
        return __importDefault(ARC0027InvalidInputError_1).default;
      } });
      var ARC0027MethodCanceledError_1 = require_ARC0027MethodCanceledError();
      Object.defineProperty(exports, "ARC0027MethodCanceledError", { enumerable: true, get: function() {
        return __importDefault(ARC0027MethodCanceledError_1).default;
      } });
      var ARC0027MethodNotSupportedError_1 = require_ARC0027MethodNotSupportedError();
      Object.defineProperty(exports, "ARC0027MethodNotSupportedError", { enumerable: true, get: function() {
        return __importDefault(ARC0027MethodNotSupportedError_1).default;
      } });
      var ARC0027MethodTimedOutError_1 = require_ARC0027MethodTimedOutError();
      Object.defineProperty(exports, "ARC0027MethodTimedOutError", { enumerable: true, get: function() {
        return __importDefault(ARC0027MethodTimedOutError_1).default;
      } });
      var ARC0027NetworkNotSupportedError_1 = require_ARC0027NetworkNotSupportedError();
      Object.defineProperty(exports, "ARC0027NetworkNotSupportedError", { enumerable: true, get: function() {
        return __importDefault(ARC0027NetworkNotSupportedError_1).default;
      } });
      var ARC0027UnauthorizedSignerError_1 = require_ARC0027UnauthorizedSignerError();
      Object.defineProperty(exports, "ARC0027UnauthorizedSignerError", { enumerable: true, get: function() {
        return __importDefault(ARC0027UnauthorizedSignerError_1).default;
      } });
      var ARC0027UnknownError_1 = require_ARC0027UnknownError();
      Object.defineProperty(exports, "ARC0027UnknownError", { enumerable: true, get: function() {
        return __importDefault(ARC0027UnknownError_1).default;
      } });
      var BaseARC0027Error_1 = require_BaseARC0027Error();
      Object.defineProperty(exports, "BaseARC0027Error", { enumerable: true, get: function() {
        return __importDefault(BaseARC0027Error_1).default;
      } });
    }
  });

  // node_modules/@agoralabs-sh/avm-web-provider/dist/messages/BaseResponseMessage.js
  var require_BaseResponseMessage = __commonJS({
    "node_modules/@agoralabs-sh/avm-web-provider/dist/messages/BaseResponseMessage.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var BaseResponseMessage = (
        /** @class */
        /* @__PURE__ */ (function() {
          function BaseResponseMessage2(_a) {
            var id = _a.id, reference = _a.reference, requestId = _a.requestId;
            this.id = id;
            this.reference = reference;
            this.requestId = requestId;
          }
          return BaseResponseMessage2;
        })()
      );
      exports.default = BaseResponseMessage;
    }
  });

  // node_modules/@agoralabs-sh/avm-web-provider/dist/messages/RequestMessage.js
  var require_RequestMessage = __commonJS({
    "node_modules/@agoralabs-sh/avm-web-provider/dist/messages/RequestMessage.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var RequestMessage = (
        /** @class */
        /* @__PURE__ */ (function() {
          function RequestMessage2(_a) {
            var id = _a.id, params = _a.params, reference = _a.reference;
            this.id = id;
            this.params = params;
            this.reference = reference;
          }
          return RequestMessage2;
        })()
      );
      exports.default = RequestMessage;
    }
  });

  // node_modules/@agoralabs-sh/avm-web-provider/dist/messages/ResponseMessageWithError.js
  var require_ResponseMessageWithError = __commonJS({
    "node_modules/@agoralabs-sh/avm-web-provider/dist/messages/ResponseMessageWithError.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || /* @__PURE__ */ (function() {
        var extendStatics = function(d2, b) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b2) {
            d3.__proto__ = b2;
          } || function(d3, b2) {
            for (var p2 in b2) if (Object.prototype.hasOwnProperty.call(b2, p2)) d3[p2] = b2[p2];
          };
          return extendStatics(d2, b);
        };
        return function(d2, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d2, b);
          function __() {
            this.constructor = d2;
          }
          d2.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      })();
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var BaseResponseMessage_1 = __importDefault(require_BaseResponseMessage());
      var ResponseMessageWithError = (
        /** @class */
        (function(_super) {
          __extends2(ResponseMessageWithError2, _super);
          function ResponseMessageWithError2(_a) {
            var error = _a.error, id = _a.id, reference = _a.reference, requestId = _a.requestId;
            var _this = _super.call(this, { id, reference, requestId }) || this;
            _this.error = error;
            return _this;
          }
          return ResponseMessageWithError2;
        })(BaseResponseMessage_1.default)
      );
      exports.default = ResponseMessageWithError;
    }
  });

  // node_modules/@agoralabs-sh/avm-web-provider/dist/messages/ResponseMessageWithResult.js
  var require_ResponseMessageWithResult = __commonJS({
    "node_modules/@agoralabs-sh/avm-web-provider/dist/messages/ResponseMessageWithResult.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || /* @__PURE__ */ (function() {
        var extendStatics = function(d2, b) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b2) {
            d3.__proto__ = b2;
          } || function(d3, b2) {
            for (var p2 in b2) if (Object.prototype.hasOwnProperty.call(b2, p2)) d3[p2] = b2[p2];
          };
          return extendStatics(d2, b);
        };
        return function(d2, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d2, b);
          function __() {
            this.constructor = d2;
          }
          d2.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      })();
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var BaseResponseMessage_1 = __importDefault(require_BaseResponseMessage());
      var ResponseMessageWithResult = (
        /** @class */
        (function(_super) {
          __extends2(ResponseMessageWithResult2, _super);
          function ResponseMessageWithResult2(_a) {
            var id = _a.id, reference = _a.reference, requestId = _a.requestId, result = _a.result;
            var _this = _super.call(this, { id, reference, requestId }) || this;
            _this.result = result;
            return _this;
          }
          return ResponseMessageWithResult2;
        })(BaseResponseMessage_1.default)
      );
      exports.default = ResponseMessageWithResult;
    }
  });

  // node_modules/@agoralabs-sh/avm-web-provider/dist/messages/index.js
  var require_messages = __commonJS({
    "node_modules/@agoralabs-sh/avm-web-provider/dist/messages/index.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ResponseMessageWithResult = exports.ResponseMessageWithError = exports.RequestMessage = exports.BaseResponseMessage = void 0;
      var BaseResponseMessage_1 = require_BaseResponseMessage();
      Object.defineProperty(exports, "BaseResponseMessage", { enumerable: true, get: function() {
        return __importDefault(BaseResponseMessage_1).default;
      } });
      var RequestMessage_1 = require_RequestMessage();
      Object.defineProperty(exports, "RequestMessage", { enumerable: true, get: function() {
        return __importDefault(RequestMessage_1).default;
      } });
      var ResponseMessageWithError_1 = require_ResponseMessageWithError();
      Object.defineProperty(exports, "ResponseMessageWithError", { enumerable: true, get: function() {
        return __importDefault(ResponseMessageWithError_1).default;
      } });
      var ResponseMessageWithResult_1 = require_ResponseMessageWithResult();
      Object.defineProperty(exports, "ResponseMessageWithResult", { enumerable: true, get: function() {
        return __importDefault(ResponseMessageWithResult_1).default;
      } });
    }
  });

  // node_modules/@agoralabs-sh/avm-web-provider/dist/utils/createMessageReference.js
  var require_createMessageReference = __commonJS({
    "node_modules/@agoralabs-sh/avm-web-provider/dist/utils/createMessageReference.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var constants_1 = require_constants();
      function createMessageReference(method, type) {
        return "".concat(constants_1.ARC0027_PREFIX, ":").concat(method, ":").concat(type);
      }
      exports.default = createMessageReference;
    }
  });

  // node_modules/@agoralabs-sh/avm-web-provider/dist/utils/index.js
  var require_utils = __commonJS({
    "node_modules/@agoralabs-sh/avm-web-provider/dist/utils/index.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.createMessageReference = void 0;
      var createMessageReference_1 = require_createMessageReference();
      Object.defineProperty(exports, "createMessageReference", { enumerable: true, get: function() {
        return __importDefault(createMessageReference_1).default;
      } });
    }
  });

  // node_modules/@agoralabs-sh/avm-web-provider/dist/controllers/AVMWebClient.js
  var require_AVMWebClient = __commonJS({
    "node_modules/@agoralabs-sh/avm-web-provider/dist/controllers/AVMWebClient.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || /* @__PURE__ */ (function() {
        var extendStatics = function(d2, b) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b2) {
            d3.__proto__ = b2;
          } || function(d3, b2) {
            for (var p2 in b2) if (Object.prototype.hasOwnProperty.call(b2, p2)) d3[p2] = b2[p2];
          };
          return extendStatics(d2, b);
        };
        return function(d2, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d2, b);
          function __() {
            this.constructor = d2;
          }
          d2.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      })();
      var __assign = exports && exports.__assign || function() {
        __assign = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p2 in s) if (Object.prototype.hasOwnProperty.call(s, p2))
              t[p2] = s[p2];
          }
          return t;
        };
        return __assign.apply(this, arguments);
      };
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var uuid_1 = require_commonjs_browser();
      var constants_1 = require_constants();
      var BaseController_1 = __importDefault(require_BaseController());
      var enums_1 = require_enums();
      var errors_1 = require_errors();
      var messages_1 = require_messages();
      var utils_1 = require_utils();
      var AVMWebClient = (
        /** @class */
        (function(_super) {
          __extends2(AVMWebClient2, _super);
          function AVMWebClient2(config) {
            var _this = _super.call(this, config) || this;
            _this._requestIds = [];
            return _this;
          }
          AVMWebClient2.init = function(_a) {
            var _b = _a === void 0 ? { debug: false } : _a, debug = _b.debug;
            return new AVMWebClient2({
              debug: debug || false
            });
          };
          AVMWebClient2.prototype._addListener = function(method, callback) {
            var _this = this;
            var _functionName = "_addListener";
            var listener = function(event) {
              var detail;
              try {
                detail = JSON.parse(event.detail);
              } catch (error) {
                _this._logger.error("".concat(AVMWebClient2.name, "#").concat(_functionName, ":"), error);
                return;
              }
              if (!_this._requestIds.includes(detail.requestId)) {
                return;
              }
              _this._logger.debug("".concat(AVMWebClient2.name, "#").concat(_functionName, ": received response event:"), detail);
              callback(__assign(__assign({}, detail), { error: detail.error || null, method, result: detail.result || null }));
            };
            var listenerID = (0, uuid_1.v4)();
            var reference = (0, utils_1.createMessageReference)(method, enums_1.ARC0027MessageTypeEnum.Response);
            window.addEventListener(reference, listener);
            this._listeners.set(listenerID, {
              listener,
              reference
            });
            return listenerID;
          };
          AVMWebClient2.prototype._sendRequestMessage = function(_a) {
            var _this = this;
            var method = _a.method, params = _a.params;
            var _functionName = "_sendRequestMessage";
            var id = (0, uuid_1.v4)();
            var reference = (0, utils_1.createMessageReference)(method, enums_1.ARC0027MessageTypeEnum.Request);
            try {
              window.dispatchEvent(new CustomEvent(reference, {
                detail: new messages_1.RequestMessage({
                  id,
                  params,
                  reference
                })
              }));
              window.setTimeout(function() {
                _this._requestIds = _this._requestIds.filter(function(value) {
                  return value !== id;
                });
              }, constants_1.DEFAULT_REQUEST_TIMEOUT);
              this._logger.debug("".concat(AVMWebClient2.name, "#").concat(_functionName, ': posted request message "').concat(reference, '" with id "').concat(id, '"'));
              this._requestIds.push(id);
              return id;
            } catch (error) {
              this._logger.error(error);
              throw new errors_1.ARC0027UnknownError(error.message);
            }
          };
          AVMWebClient2.prototype.disable = function(params) {
            return this._sendRequestMessage({
              method: enums_1.ARC0027MethodEnum.Disable,
              params
            });
          };
          AVMWebClient2.prototype.discover = function(params) {
            return this._sendRequestMessage({
              method: enums_1.ARC0027MethodEnum.Discover,
              params
            });
          };
          AVMWebClient2.prototype.enable = function(params) {
            return this._sendRequestMessage({
              method: enums_1.ARC0027MethodEnum.Enable,
              params
            });
          };
          AVMWebClient2.prototype.onDisable = function(callback) {
            return this._addListener(enums_1.ARC0027MethodEnum.Disable, callback);
          };
          AVMWebClient2.prototype.onDiscover = function(callback) {
            return this._addListener(enums_1.ARC0027MethodEnum.Discover, callback);
          };
          AVMWebClient2.prototype.onEnable = function(callback) {
            return this._addListener(enums_1.ARC0027MethodEnum.Enable, callback);
          };
          AVMWebClient2.prototype.onPostTransactions = function(callback) {
            return this._addListener(enums_1.ARC0027MethodEnum.PostTransactions, callback);
          };
          AVMWebClient2.prototype.onSignAndPostTransactions = function(callback) {
            return this._addListener(enums_1.ARC0027MethodEnum.SignAndPostTransactions, callback);
          };
          AVMWebClient2.prototype.onSignMessage = function(callback) {
            return this._addListener(enums_1.ARC0027MethodEnum.SignMessage, callback);
          };
          AVMWebClient2.prototype.onSignTransactions = function(callback) {
            return this._addListener(enums_1.ARC0027MethodEnum.SignTransactions, callback);
          };
          AVMWebClient2.prototype.postTransactions = function(params) {
            return this._sendRequestMessage({
              method: enums_1.ARC0027MethodEnum.PostTransactions,
              params
            });
          };
          AVMWebClient2.prototype.signAndPostTransactions = function(params) {
            return this._sendRequestMessage({
              method: enums_1.ARC0027MethodEnum.SignAndPostTransactions,
              params
            });
          };
          AVMWebClient2.prototype.signMessage = function(params) {
            return this._sendRequestMessage({
              method: enums_1.ARC0027MethodEnum.SignMessage,
              params
            });
          };
          AVMWebClient2.prototype.signTransactions = function(params) {
            return this._sendRequestMessage({
              method: enums_1.ARC0027MethodEnum.SignTransactions,
              params
            });
          };
          return AVMWebClient2;
        })(BaseController_1.default)
      );
      exports.default = AVMWebClient;
    }
  });

  // node_modules/@agoralabs-sh/avm-web-provider/dist/controllers/AVMWebProvider.js
  var require_AVMWebProvider = __commonJS({
    "node_modules/@agoralabs-sh/avm-web-provider/dist/controllers/AVMWebProvider.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || /* @__PURE__ */ (function() {
        var extendStatics = function(d2, b) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b2) {
            d3.__proto__ = b2;
          } || function(d3, b2) {
            for (var p2 in b2) if (Object.prototype.hasOwnProperty.call(b2, p2)) d3[p2] = b2[p2];
          };
          return extendStatics(d2, b);
        };
        return function(d2, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d2, b);
          function __() {
            this.constructor = d2;
          }
          d2.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      })();
      var __awaiter2 = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      var __generator2 = exports && exports.__generator || function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1) throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f) throw new TypeError("Generator is already executing.");
          while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2]) _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
          if (op[0] & 5) throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var uuid_1 = require_commonjs_browser();
      var BaseController_1 = __importDefault(require_BaseController());
      var enums_1 = require_enums();
      var errors_1 = require_errors();
      var messages_1 = require_messages();
      var utils_1 = require_utils();
      var AVMWebProvider = (
        /** @class */
        (function(_super) {
          __extends2(AVMWebProvider2, _super);
          function AVMWebProvider2(config) {
            return _super.call(this, config) || this;
          }
          AVMWebProvider2.prototype._addListener = function(method, callback) {
            var _this = this;
            var _functionName = "_addListener";
            var listener = function(event) {
              _this._logger.debug("[".concat(_this._config.providerId, "]").concat(AVMWebProvider2.name, "#").concat(_functionName, ": received request event:"), event.detail);
              return _this._sendResponseMessage({
                callback,
                method,
                requestMessage: event.detail
              });
            };
            var listenerID = (0, uuid_1.v4)();
            var reference = (0, utils_1.createMessageReference)(method, enums_1.ARC0027MessageTypeEnum.Request);
            window.addEventListener(reference, listener);
            this._listeners.set(listenerID, {
              listener,
              reference
            });
            return listenerID;
          };
          AVMWebProvider2.prototype._sendResponseMessage = function(_a) {
            var _b;
            var callback = _a.callback, method = _a.method, requestMessage = _a.requestMessage;
            return __awaiter2(this, void 0, void 0, function() {
              var _functionName, id, reference, result, error_1;
              return __generator2(this, function(_c) {
                switch (_c.label) {
                  case 0:
                    _functionName = "_sendResponseMessage";
                    if (((_b = requestMessage.params) === null || _b === void 0 ? void 0 : _b.providerId) && requestMessage.params.providerId !== this._config.providerId) {
                      this._logger.debug("[".concat(this._config.providerId, "]").concat(AVMWebProvider2.name, "#").concat(_functionName, ': message "').concat(requestMessage.reference, '" is for provider "').concat(requestMessage.params.providerId, '", skipping'));
                      return [
                        2
                        /*return*/
                      ];
                    }
                    id = (0, uuid_1.v4)();
                    reference = (0, utils_1.createMessageReference)(method, enums_1.ARC0027MessageTypeEnum.Response);
                    _c.label = 1;
                  case 1:
                    _c.trys.push([1, 3, , 4]);
                    return [4, callback({
                      id: requestMessage.id,
                      method,
                      params: requestMessage.params
                    })];
                  case 2:
                    result = _c.sent();
                    window.dispatchEvent(new CustomEvent(reference, {
                      detail: JSON.stringify(new messages_1.ResponseMessageWithResult({
                        id,
                        reference,
                        requestId: requestMessage.id,
                        result
                      }))
                    }));
                    this._logger.debug("[".concat(this._config.providerId, "]").concat(AVMWebProvider2.name, "#").concat(_functionName, ': posted response message "').concat(reference, '" with id "').concat(id, '"'));
                    return [
                      2
                      /*return*/
                    ];
                  case 3:
                    error_1 = _c.sent();
                    this._logger.error(error_1);
                    if (error_1.code) {
                      window.dispatchEvent(new CustomEvent(reference, {
                        detail: JSON.stringify(new messages_1.ResponseMessageWithError({
                          error: error_1,
                          id,
                          reference,
                          requestId: requestMessage.id
                        }))
                      }));
                      return [
                        2
                        /*return*/
                      ];
                    }
                    window.dispatchEvent(new CustomEvent(reference, {
                      detail: JSON.stringify(new messages_1.ResponseMessageWithError({
                        error: new errors_1.ARC0027UnknownError({
                          message: error_1.message,
                          providerId: this._config.providerId
                        }),
                        id,
                        reference,
                        requestId: requestMessage.id
                      }))
                    }));
                    return [
                      2
                      /*return*/
                    ];
                  case 4:
                    return [
                      2
                      /*return*/
                    ];
                }
              });
            });
          };
          AVMWebProvider2.init = function(providerId, _a) {
            var _b = _a === void 0 ? { debug: false } : _a, debug = _b.debug;
            return new AVMWebProvider2({
              debug: debug || false,
              providerId
            });
          };
          AVMWebProvider2.prototype.onDisable = function(callback) {
            return this._addListener(enums_1.ARC0027MethodEnum.Disable, callback);
          };
          AVMWebProvider2.prototype.onDiscover = function(callback) {
            return this._addListener(enums_1.ARC0027MethodEnum.Discover, callback);
          };
          AVMWebProvider2.prototype.onEnable = function(callback) {
            return this._addListener(enums_1.ARC0027MethodEnum.Enable, callback);
          };
          AVMWebProvider2.prototype.onPostTransactions = function(callback) {
            return this._addListener(enums_1.ARC0027MethodEnum.PostTransactions, callback);
          };
          AVMWebProvider2.prototype.onSignAndPostTransactions = function(callback) {
            return this._addListener(enums_1.ARC0027MethodEnum.SignAndPostTransactions, callback);
          };
          AVMWebProvider2.prototype.onSignMessage = function(callback) {
            return this._addListener(enums_1.ARC0027MethodEnum.SignMessage, callback);
          };
          AVMWebProvider2.prototype.onSignTransactions = function(callback) {
            return this._addListener(enums_1.ARC0027MethodEnum.SignTransactions, callback);
          };
          return AVMWebProvider2;
        })(BaseController_1.default)
      );
      exports.default = AVMWebProvider;
    }
  });

  // node_modules/@agoralabs-sh/avm-web-provider/dist/controllers/index.js
  var require_controllers = __commonJS({
    "node_modules/@agoralabs-sh/avm-web-provider/dist/controllers/index.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Logger = exports.BaseController = exports.AVMWebProvider = exports.AVMWebClient = void 0;
      var AVMWebClient_1 = require_AVMWebClient();
      Object.defineProperty(exports, "AVMWebClient", { enumerable: true, get: function() {
        return __importDefault(AVMWebClient_1).default;
      } });
      var AVMWebProvider_1 = require_AVMWebProvider();
      Object.defineProperty(exports, "AVMWebProvider", { enumerable: true, get: function() {
        return __importDefault(AVMWebProvider_1).default;
      } });
      var BaseController_1 = require_BaseController();
      Object.defineProperty(exports, "BaseController", { enumerable: true, get: function() {
        return __importDefault(BaseController_1).default;
      } });
      var Logger_1 = require_Logger();
      Object.defineProperty(exports, "Logger", { enumerable: true, get: function() {
        return __importDefault(Logger_1).default;
      } });
    }
  });

  // node_modules/@agoralabs-sh/avm-web-provider/dist/types/index.js
  var require_types = __commonJS({
    "node_modules/@agoralabs-sh/avm-web-provider/dist/types/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@agoralabs-sh/avm-web-provider/dist/index.js
  var require_dist = __commonJS({
    "node_modules/@agoralabs-sh/avm-web-provider/dist/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      }) : (function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      }));
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p2 in m) if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2)) __createBinding(exports2, m, p2);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_constants(), exports);
      __exportStar(require_controllers(), exports);
      __exportStar(require_enums(), exports);
      __exportStar(require_errors(), exports);
      __exportStar(require_messages(), exports);
      __exportStar(require_types(), exports);
      __exportStar(require_utils(), exports);
    }
  });

  // node_modules/algosdk/dist/esm/convert.js
  var INVALID_MICROALGOS_ERROR_MSG;
  var init_convert = __esm({
    "node_modules/algosdk/dist/esm/convert.js"() {
      INVALID_MICROALGOS_ERROR_MSG = "Microalgos should be positive and less than 2^53 - 1.";
    }
  });

  // node_modules/bignumber.js/bignumber.js
  var require_bignumber = __commonJS({
    "node_modules/bignumber.js/bignumber.js"(exports, module) {
      (function(globalObject) {
        "use strict";
        var BigNumber, isNumeric = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, mathceil = Math.ceil, mathfloor = Math.floor, bignumberError = "[BigNumber Error] ", tooManyDigits = bignumberError + "Number primitive has more than 15 significant digits: ", BASE = 1e14, LOG_BASE = 14, MAX_SAFE_INTEGER = 9007199254740991, POWS_TEN = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], SQRT_BASE = 1e7, MAX = 1e9;
        function clone(configObject) {
          var div, convertBase, parseNumeric, P = BigNumber2.prototype = { constructor: BigNumber2, toString: null, valueOf: null }, ONE = new BigNumber2(1), DECIMAL_PLACES = 20, ROUNDING_MODE = 4, TO_EXP_NEG = -7, TO_EXP_POS = 21, MIN_EXP = -1e7, MAX_EXP = 1e7, CRYPTO = false, MODULO_MODE = 1, POW_PRECISION = 0, FORMAT = {
            prefix: "",
            groupSize: 3,
            secondaryGroupSize: 0,
            groupSeparator: ",",
            decimalSeparator: ".",
            fractionGroupSize: 0,
            fractionGroupSeparator: "\xA0",
            // non-breaking space
            suffix: ""
          }, ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyz", alphabetHasNormalDecimalDigits = true;
          function BigNumber2(v, b) {
            var alphabet, c, caseChanged, e, i, isNum, len, str, x = this;
            if (!(x instanceof BigNumber2)) return new BigNumber2(v, b);
            if (b == null) {
              if (v && v._isBigNumber === true) {
                x.s = v.s;
                if (!v.c || v.e > MAX_EXP) {
                  x.c = x.e = null;
                } else if (v.e < MIN_EXP) {
                  x.c = [x.e = 0];
                } else {
                  x.e = v.e;
                  x.c = v.c.slice();
                }
                return;
              }
              if ((isNum = typeof v == "number") && v * 0 == 0) {
                x.s = 1 / v < 0 ? (v = -v, -1) : 1;
                if (v === ~~v) {
                  for (e = 0, i = v; i >= 10; i /= 10, e++) ;
                  if (e > MAX_EXP) {
                    x.c = x.e = null;
                  } else {
                    x.e = e;
                    x.c = [v];
                  }
                  return;
                }
                str = String(v);
              } else {
                if (!isNumeric.test(str = String(v))) return parseNumeric(x, str, isNum);
                x.s = str.charCodeAt(0) == 45 ? (str = str.slice(1), -1) : 1;
              }
              if ((e = str.indexOf(".")) > -1) str = str.replace(".", "");
              if ((i = str.search(/e/i)) > 0) {
                if (e < 0) e = i;
                e += +str.slice(i + 1);
                str = str.substring(0, i);
              } else if (e < 0) {
                e = str.length;
              }
            } else {
              intCheck(b, 2, ALPHABET.length, "Base");
              if (b == 10 && alphabetHasNormalDecimalDigits) {
                x = new BigNumber2(v);
                return round(x, DECIMAL_PLACES + x.e + 1, ROUNDING_MODE);
              }
              str = String(v);
              if (isNum = typeof v == "number") {
                if (v * 0 != 0) return parseNumeric(x, str, isNum, b);
                x.s = 1 / v < 0 ? (str = str.slice(1), -1) : 1;
                if (BigNumber2.DEBUG && str.replace(/^0\.0*|\./, "").length > 15) {
                  throw Error(tooManyDigits + v);
                }
              } else {
                x.s = str.charCodeAt(0) === 45 ? (str = str.slice(1), -1) : 1;
              }
              alphabet = ALPHABET.slice(0, b);
              e = i = 0;
              for (len = str.length; i < len; i++) {
                if (alphabet.indexOf(c = str.charAt(i)) < 0) {
                  if (c == ".") {
                    if (i > e) {
                      e = len;
                      continue;
                    }
                  } else if (!caseChanged) {
                    if (str == str.toUpperCase() && (str = str.toLowerCase()) || str == str.toLowerCase() && (str = str.toUpperCase())) {
                      caseChanged = true;
                      i = -1;
                      e = 0;
                      continue;
                    }
                  }
                  return parseNumeric(x, String(v), isNum, b);
                }
              }
              isNum = false;
              str = convertBase(str, b, 10, x.s);
              if ((e = str.indexOf(".")) > -1) str = str.replace(".", "");
              else e = str.length;
            }
            for (i = 0; str.charCodeAt(i) === 48; i++) ;
            for (len = str.length; str.charCodeAt(--len) === 48; ) ;
            if (str = str.slice(i, ++len)) {
              len -= i;
              if (isNum && BigNumber2.DEBUG && len > 15 && (v > MAX_SAFE_INTEGER || v !== mathfloor(v))) {
                throw Error(tooManyDigits + x.s * v);
              }
              if ((e = e - i - 1) > MAX_EXP) {
                x.c = x.e = null;
              } else if (e < MIN_EXP) {
                x.c = [x.e = 0];
              } else {
                x.e = e;
                x.c = [];
                i = (e + 1) % LOG_BASE;
                if (e < 0) i += LOG_BASE;
                if (i < len) {
                  if (i) x.c.push(+str.slice(0, i));
                  for (len -= LOG_BASE; i < len; ) {
                    x.c.push(+str.slice(i, i += LOG_BASE));
                  }
                  i = LOG_BASE - (str = str.slice(i)).length;
                } else {
                  i -= len;
                }
                for (; i--; str += "0") ;
                x.c.push(+str);
              }
            } else {
              x.c = [x.e = 0];
            }
          }
          BigNumber2.clone = clone;
          BigNumber2.ROUND_UP = 0;
          BigNumber2.ROUND_DOWN = 1;
          BigNumber2.ROUND_CEIL = 2;
          BigNumber2.ROUND_FLOOR = 3;
          BigNumber2.ROUND_HALF_UP = 4;
          BigNumber2.ROUND_HALF_DOWN = 5;
          BigNumber2.ROUND_HALF_EVEN = 6;
          BigNumber2.ROUND_HALF_CEIL = 7;
          BigNumber2.ROUND_HALF_FLOOR = 8;
          BigNumber2.EUCLID = 9;
          BigNumber2.config = BigNumber2.set = function(obj) {
            var p2, v;
            if (obj != null) {
              if (typeof obj == "object") {
                if (obj.hasOwnProperty(p2 = "DECIMAL_PLACES")) {
                  v = obj[p2];
                  intCheck(v, 0, MAX, p2);
                  DECIMAL_PLACES = v;
                }
                if (obj.hasOwnProperty(p2 = "ROUNDING_MODE")) {
                  v = obj[p2];
                  intCheck(v, 0, 8, p2);
                  ROUNDING_MODE = v;
                }
                if (obj.hasOwnProperty(p2 = "EXPONENTIAL_AT")) {
                  v = obj[p2];
                  if (v && v.pop) {
                    intCheck(v[0], -MAX, 0, p2);
                    intCheck(v[1], 0, MAX, p2);
                    TO_EXP_NEG = v[0];
                    TO_EXP_POS = v[1];
                  } else {
                    intCheck(v, -MAX, MAX, p2);
                    TO_EXP_NEG = -(TO_EXP_POS = v < 0 ? -v : v);
                  }
                }
                if (obj.hasOwnProperty(p2 = "RANGE")) {
                  v = obj[p2];
                  if (v && v.pop) {
                    intCheck(v[0], -MAX, -1, p2);
                    intCheck(v[1], 1, MAX, p2);
                    MIN_EXP = v[0];
                    MAX_EXP = v[1];
                  } else {
                    intCheck(v, -MAX, MAX, p2);
                    if (v) {
                      MIN_EXP = -(MAX_EXP = v < 0 ? -v : v);
                    } else {
                      throw Error(bignumberError + p2 + " cannot be zero: " + v);
                    }
                  }
                }
                if (obj.hasOwnProperty(p2 = "CRYPTO")) {
                  v = obj[p2];
                  if (v === !!v) {
                    if (v) {
                      if (typeof crypto != "undefined" && crypto && (crypto.getRandomValues || crypto.randomBytes)) {
                        CRYPTO = v;
                      } else {
                        CRYPTO = !v;
                        throw Error(bignumberError + "crypto unavailable");
                      }
                    } else {
                      CRYPTO = v;
                    }
                  } else {
                    throw Error(bignumberError + p2 + " not true or false: " + v);
                  }
                }
                if (obj.hasOwnProperty(p2 = "MODULO_MODE")) {
                  v = obj[p2];
                  intCheck(v, 0, 9, p2);
                  MODULO_MODE = v;
                }
                if (obj.hasOwnProperty(p2 = "POW_PRECISION")) {
                  v = obj[p2];
                  intCheck(v, 0, MAX, p2);
                  POW_PRECISION = v;
                }
                if (obj.hasOwnProperty(p2 = "FORMAT")) {
                  v = obj[p2];
                  if (typeof v == "object") FORMAT = v;
                  else throw Error(bignumberError + p2 + " not an object: " + v);
                }
                if (obj.hasOwnProperty(p2 = "ALPHABET")) {
                  v = obj[p2];
                  if (typeof v == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(v)) {
                    alphabetHasNormalDecimalDigits = v.slice(0, 10) == "0123456789";
                    ALPHABET = v;
                  } else {
                    throw Error(bignumberError + p2 + " invalid: " + v);
                  }
                }
              } else {
                throw Error(bignumberError + "Object expected: " + obj);
              }
            }
            return {
              DECIMAL_PLACES,
              ROUNDING_MODE,
              EXPONENTIAL_AT: [TO_EXP_NEG, TO_EXP_POS],
              RANGE: [MIN_EXP, MAX_EXP],
              CRYPTO,
              MODULO_MODE,
              POW_PRECISION,
              FORMAT,
              ALPHABET
            };
          };
          BigNumber2.isBigNumber = function(v) {
            if (!v || v._isBigNumber !== true) return false;
            if (!BigNumber2.DEBUG) return true;
            var i, n, c = v.c, e = v.e, s = v.s;
            out: if ({}.toString.call(c) == "[object Array]") {
              if ((s === 1 || s === -1) && e >= -MAX && e <= MAX && e === mathfloor(e)) {
                if (c[0] === 0) {
                  if (e === 0 && c.length === 1) return true;
                  break out;
                }
                i = (e + 1) % LOG_BASE;
                if (i < 1) i += LOG_BASE;
                if (String(c[0]).length == i) {
                  for (i = 0; i < c.length; i++) {
                    n = c[i];
                    if (n < 0 || n >= BASE || n !== mathfloor(n)) break out;
                  }
                  if (n !== 0) return true;
                }
              }
            } else if (c === null && e === null && (s === null || s === 1 || s === -1)) {
              return true;
            }
            throw Error(bignumberError + "Invalid BigNumber: " + v);
          };
          BigNumber2.maximum = BigNumber2.max = function() {
            return maxOrMin(arguments, -1);
          };
          BigNumber2.minimum = BigNumber2.min = function() {
            return maxOrMin(arguments, 1);
          };
          BigNumber2.random = (function() {
            var pow2_53 = 9007199254740992;
            var random53bitInt = Math.random() * pow2_53 & 2097151 ? function() {
              return mathfloor(Math.random() * pow2_53);
            } : function() {
              return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
            };
            return function(dp) {
              var a, b, e, k, v, i = 0, c = [], rand = new BigNumber2(ONE);
              if (dp == null) dp = DECIMAL_PLACES;
              else intCheck(dp, 0, MAX);
              k = mathceil(dp / LOG_BASE);
              if (CRYPTO) {
                if (crypto.getRandomValues) {
                  a = crypto.getRandomValues(new Uint32Array(k *= 2));
                  for (; i < k; ) {
                    v = a[i] * 131072 + (a[i + 1] >>> 11);
                    if (v >= 9e15) {
                      b = crypto.getRandomValues(new Uint32Array(2));
                      a[i] = b[0];
                      a[i + 1] = b[1];
                    } else {
                      c.push(v % 1e14);
                      i += 2;
                    }
                  }
                  i = k / 2;
                } else if (crypto.randomBytes) {
                  a = crypto.randomBytes(k *= 7);
                  for (; i < k; ) {
                    v = (a[i] & 31) * 281474976710656 + a[i + 1] * 1099511627776 + a[i + 2] * 4294967296 + a[i + 3] * 16777216 + (a[i + 4] << 16) + (a[i + 5] << 8) + a[i + 6];
                    if (v >= 9e15) {
                      crypto.randomBytes(7).copy(a, i);
                    } else {
                      c.push(v % 1e14);
                      i += 7;
                    }
                  }
                  i = k / 7;
                } else {
                  CRYPTO = false;
                  throw Error(bignumberError + "crypto unavailable");
                }
              }
              if (!CRYPTO) {
                for (; i < k; ) {
                  v = random53bitInt();
                  if (v < 9e15) c[i++] = v % 1e14;
                }
              }
              k = c[--i];
              dp %= LOG_BASE;
              if (k && dp) {
                v = POWS_TEN[LOG_BASE - dp];
                c[i] = mathfloor(k / v) * v;
              }
              for (; c[i] === 0; c.pop(), i--) ;
              if (i < 0) {
                c = [e = 0];
              } else {
                for (e = -1; c[0] === 0; c.splice(0, 1), e -= LOG_BASE) ;
                for (i = 1, v = c[0]; v >= 10; v /= 10, i++) ;
                if (i < LOG_BASE) e -= LOG_BASE - i;
              }
              rand.e = e;
              rand.c = c;
              return rand;
            };
          })();
          BigNumber2.sum = function() {
            var i = 1, args = arguments, sum = new BigNumber2(args[0]);
            for (; i < args.length; ) sum = sum.plus(args[i++]);
            return sum;
          };
          convertBase = /* @__PURE__ */ (function() {
            var decimal = "0123456789";
            function toBaseOut(str, baseIn, baseOut, alphabet) {
              var j, arr = [0], arrL, i = 0, len = str.length;
              for (; i < len; ) {
                for (arrL = arr.length; arrL--; arr[arrL] *= baseIn) ;
                arr[0] += alphabet.indexOf(str.charAt(i++));
                for (j = 0; j < arr.length; j++) {
                  if (arr[j] > baseOut - 1) {
                    if (arr[j + 1] == null) arr[j + 1] = 0;
                    arr[j + 1] += arr[j] / baseOut | 0;
                    arr[j] %= baseOut;
                  }
                }
              }
              return arr.reverse();
            }
            return function(str, baseIn, baseOut, sign2, callerIsToString) {
              var alphabet, d2, e, k, r, x, xc, y, i = str.indexOf("."), dp = DECIMAL_PLACES, rm = ROUNDING_MODE;
              if (i >= 0) {
                k = POW_PRECISION;
                POW_PRECISION = 0;
                str = str.replace(".", "");
                y = new BigNumber2(baseIn);
                x = y.pow(str.length - i);
                POW_PRECISION = k;
                y.c = toBaseOut(
                  toFixedPoint(coeffToString(x.c), x.e, "0"),
                  10,
                  baseOut,
                  decimal
                );
                y.e = y.c.length;
              }
              xc = toBaseOut(str, baseIn, baseOut, callerIsToString ? (alphabet = ALPHABET, decimal) : (alphabet = decimal, ALPHABET));
              e = k = xc.length;
              for (; xc[--k] == 0; xc.pop()) ;
              if (!xc[0]) return alphabet.charAt(0);
              if (i < 0) {
                --e;
              } else {
                x.c = xc;
                x.e = e;
                x.s = sign2;
                x = div(x, y, dp, rm, baseOut);
                xc = x.c;
                r = x.r;
                e = x.e;
              }
              d2 = e + dp + 1;
              i = xc[d2];
              k = baseOut / 2;
              r = r || d2 < 0 || xc[d2 + 1] != null;
              r = rm < 4 ? (i != null || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : i > k || i == k && (rm == 4 || r || rm == 6 && xc[d2 - 1] & 1 || rm == (x.s < 0 ? 8 : 7));
              if (d2 < 1 || !xc[0]) {
                str = r ? toFixedPoint(alphabet.charAt(1), -dp, alphabet.charAt(0)) : alphabet.charAt(0);
              } else {
                xc.length = d2;
                if (r) {
                  for (--baseOut; ++xc[--d2] > baseOut; ) {
                    xc[d2] = 0;
                    if (!d2) {
                      ++e;
                      xc = [1].concat(xc);
                    }
                  }
                }
                for (k = xc.length; !xc[--k]; ) ;
                for (i = 0, str = ""; i <= k; str += alphabet.charAt(xc[i++])) ;
                str = toFixedPoint(str, e, alphabet.charAt(0));
              }
              return str;
            };
          })();
          div = /* @__PURE__ */ (function() {
            function multiply(x, k, base) {
              var m, temp, xlo, xhi, carry = 0, i = x.length, klo = k % SQRT_BASE, khi = k / SQRT_BASE | 0;
              for (x = x.slice(); i--; ) {
                xlo = x[i] % SQRT_BASE;
                xhi = x[i] / SQRT_BASE | 0;
                m = khi * xlo + xhi * klo;
                temp = klo * xlo + m % SQRT_BASE * SQRT_BASE + carry;
                carry = (temp / base | 0) + (m / SQRT_BASE | 0) + khi * xhi;
                x[i] = temp % base;
              }
              if (carry) x = [carry].concat(x);
              return x;
            }
            function compare2(a, b, aL, bL) {
              var i, cmp;
              if (aL != bL) {
                cmp = aL > bL ? 1 : -1;
              } else {
                for (i = cmp = 0; i < aL; i++) {
                  if (a[i] != b[i]) {
                    cmp = a[i] > b[i] ? 1 : -1;
                    break;
                  }
                }
              }
              return cmp;
            }
            function subtract(a, b, aL, base) {
              var i = 0;
              for (; aL--; ) {
                a[aL] -= i;
                i = a[aL] < b[aL] ? 1 : 0;
                a[aL] = i * base + a[aL] - b[aL];
              }
              for (; !a[0] && a.length > 1; a.splice(0, 1)) ;
            }
            return function(x, y, dp, rm, base) {
              var cmp, e, i, more, n, prod, prodL, q, qc, rem, remL, rem0, xi, xL, yc0, yL, yz, s = x.s == y.s ? 1 : -1, xc = x.c, yc = y.c;
              if (!xc || !xc[0] || !yc || !yc[0]) {
                return new BigNumber2(
                  // Return NaN if either NaN, or both Infinity or 0.
                  !x.s || !y.s || (xc ? yc && xc[0] == yc[0] : !yc) ? NaN : (
                    // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
                    xc && xc[0] == 0 || !yc ? s * 0 : s / 0
                  )
                );
              }
              q = new BigNumber2(s);
              qc = q.c = [];
              e = x.e - y.e;
              s = dp + e + 1;
              if (!base) {
                base = BASE;
                e = bitFloor(x.e / LOG_BASE) - bitFloor(y.e / LOG_BASE);
                s = s / LOG_BASE | 0;
              }
              for (i = 0; yc[i] == (xc[i] || 0); i++) ;
              if (yc[i] > (xc[i] || 0)) e--;
              if (s < 0) {
                qc.push(1);
                more = true;
              } else {
                xL = xc.length;
                yL = yc.length;
                i = 0;
                s += 2;
                n = mathfloor(base / (yc[0] + 1));
                if (n > 1) {
                  yc = multiply(yc, n, base);
                  xc = multiply(xc, n, base);
                  yL = yc.length;
                  xL = xc.length;
                }
                xi = yL;
                rem = xc.slice(0, yL);
                remL = rem.length;
                for (; remL < yL; rem[remL++] = 0) ;
                yz = yc.slice();
                yz = [0].concat(yz);
                yc0 = yc[0];
                if (yc[1] >= base / 2) yc0++;
                do {
                  n = 0;
                  cmp = compare2(yc, rem, yL, remL);
                  if (cmp < 0) {
                    rem0 = rem[0];
                    if (yL != remL) rem0 = rem0 * base + (rem[1] || 0);
                    n = mathfloor(rem0 / yc0);
                    if (n > 1) {
                      if (n >= base) n = base - 1;
                      prod = multiply(yc, n, base);
                      prodL = prod.length;
                      remL = rem.length;
                      while (compare2(prod, rem, prodL, remL) == 1) {
                        n--;
                        subtract(prod, yL < prodL ? yz : yc, prodL, base);
                        prodL = prod.length;
                        cmp = 1;
                      }
                    } else {
                      if (n == 0) {
                        cmp = n = 1;
                      }
                      prod = yc.slice();
                      prodL = prod.length;
                    }
                    if (prodL < remL) prod = [0].concat(prod);
                    subtract(rem, prod, remL, base);
                    remL = rem.length;
                    if (cmp == -1) {
                      while (compare2(yc, rem, yL, remL) < 1) {
                        n++;
                        subtract(rem, yL < remL ? yz : yc, remL, base);
                        remL = rem.length;
                      }
                    }
                  } else if (cmp === 0) {
                    n++;
                    rem = [0];
                  }
                  qc[i++] = n;
                  if (rem[0]) {
                    rem[remL++] = xc[xi] || 0;
                  } else {
                    rem = [xc[xi]];
                    remL = 1;
                  }
                } while ((xi++ < xL || rem[0] != null) && s--);
                more = rem[0] != null;
                if (!qc[0]) qc.splice(0, 1);
              }
              if (base == BASE) {
                for (i = 1, s = qc[0]; s >= 10; s /= 10, i++) ;
                round(q, dp + (q.e = i + e * LOG_BASE - 1) + 1, rm, more);
              } else {
                q.e = e;
                q.r = +more;
              }
              return q;
            };
          })();
          function format(n, i, rm, id) {
            var c0, e, ne, len, str;
            if (rm == null) rm = ROUNDING_MODE;
            else intCheck(rm, 0, 8);
            if (!n.c) return n.toString();
            c0 = n.c[0];
            ne = n.e;
            if (i == null) {
              str = coeffToString(n.c);
              str = id == 1 || id == 2 && (ne <= TO_EXP_NEG || ne >= TO_EXP_POS) ? toExponential(str, ne) : toFixedPoint(str, ne, "0");
            } else {
              n = round(new BigNumber2(n), i, rm);
              e = n.e;
              str = coeffToString(n.c);
              len = str.length;
              if (id == 1 || id == 2 && (i <= e || e <= TO_EXP_NEG)) {
                for (; len < i; str += "0", len++) ;
                str = toExponential(str, e);
              } else {
                i -= ne + (id === 2 && e > ne);
                str = toFixedPoint(str, e, "0");
                if (e + 1 > len) {
                  if (--i > 0) for (str += "."; i--; str += "0") ;
                } else {
                  i += e - len;
                  if (i > 0) {
                    if (e + 1 == len) str += ".";
                    for (; i--; str += "0") ;
                  }
                }
              }
            }
            return n.s < 0 && c0 ? "-" + str : str;
          }
          function maxOrMin(args, n) {
            var k, y, i = 1, x = new BigNumber2(args[0]);
            for (; i < args.length; i++) {
              y = new BigNumber2(args[i]);
              if (!y.s || (k = compare(x, y)) === n || k === 0 && x.s === n) {
                x = y;
              }
            }
            return x;
          }
          function normalise(n, c, e) {
            var i = 1, j = c.length;
            for (; !c[--j]; c.pop()) ;
            for (j = c[0]; j >= 10; j /= 10, i++) ;
            if ((e = i + e * LOG_BASE - 1) > MAX_EXP) {
              n.c = n.e = null;
            } else if (e < MIN_EXP) {
              n.c = [n.e = 0];
            } else {
              n.e = e;
              n.c = c;
            }
            return n;
          }
          parseNumeric = /* @__PURE__ */ (function() {
            var basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i, dotAfter = /^([^.]+)\.$/, dotBefore = /^\.([^.]+)$/, isInfinityOrNaN = /^-?(Infinity|NaN)$/, whitespaceOrPlus = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
            return function(x, str, isNum, b) {
              var base, s = isNum ? str : str.replace(whitespaceOrPlus, "");
              if (isInfinityOrNaN.test(s)) {
                x.s = isNaN(s) ? null : s < 0 ? -1 : 1;
              } else {
                if (!isNum) {
                  s = s.replace(basePrefix, function(m, p1, p2) {
                    base = (p2 = p2.toLowerCase()) == "x" ? 16 : p2 == "b" ? 2 : 8;
                    return !b || b == base ? p1 : m;
                  });
                  if (b) {
                    base = b;
                    s = s.replace(dotAfter, "$1").replace(dotBefore, "0.$1");
                  }
                  if (str != s) return new BigNumber2(s, base);
                }
                if (BigNumber2.DEBUG) {
                  throw Error(bignumberError + "Not a" + (b ? " base " + b : "") + " number: " + str);
                }
                x.s = null;
              }
              x.c = x.e = null;
            };
          })();
          function round(x, sd, rm, r) {
            var d2, i, j, k, n, ni, rd, xc = x.c, pows10 = POWS_TEN;
            if (xc) {
              out: {
                for (d2 = 1, k = xc[0]; k >= 10; k /= 10, d2++) ;
                i = sd - d2;
                if (i < 0) {
                  i += LOG_BASE;
                  j = sd;
                  n = xc[ni = 0];
                  rd = mathfloor(n / pows10[d2 - j - 1] % 10);
                } else {
                  ni = mathceil((i + 1) / LOG_BASE);
                  if (ni >= xc.length) {
                    if (r) {
                      for (; xc.length <= ni; xc.push(0)) ;
                      n = rd = 0;
                      d2 = 1;
                      i %= LOG_BASE;
                      j = i - LOG_BASE + 1;
                    } else {
                      break out;
                    }
                  } else {
                    n = k = xc[ni];
                    for (d2 = 1; k >= 10; k /= 10, d2++) ;
                    i %= LOG_BASE;
                    j = i - LOG_BASE + d2;
                    rd = j < 0 ? 0 : mathfloor(n / pows10[d2 - j - 1] % 10);
                  }
                }
                r = r || sd < 0 || // Are there any non-zero digits after the rounding digit?
                // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
                // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
                xc[ni + 1] != null || (j < 0 ? n : n % pows10[d2 - j - 1]);
                r = rm < 4 ? (rd || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || r || rm == 6 && // Check whether the digit to the left of the rounding digit is odd.
                (i > 0 ? j > 0 ? n / pows10[d2 - j] : 0 : xc[ni - 1]) % 10 & 1 || rm == (x.s < 0 ? 8 : 7));
                if (sd < 1 || !xc[0]) {
                  xc.length = 0;
                  if (r) {
                    sd -= x.e + 1;
                    xc[0] = pows10[(LOG_BASE - sd % LOG_BASE) % LOG_BASE];
                    x.e = -sd || 0;
                  } else {
                    xc[0] = x.e = 0;
                  }
                  return x;
                }
                if (i == 0) {
                  xc.length = ni;
                  k = 1;
                  ni--;
                } else {
                  xc.length = ni + 1;
                  k = pows10[LOG_BASE - i];
                  xc[ni] = j > 0 ? mathfloor(n / pows10[d2 - j] % pows10[j]) * k : 0;
                }
                if (r) {
                  for (; ; ) {
                    if (ni == 0) {
                      for (i = 1, j = xc[0]; j >= 10; j /= 10, i++) ;
                      j = xc[0] += k;
                      for (k = 1; j >= 10; j /= 10, k++) ;
                      if (i != k) {
                        x.e++;
                        if (xc[0] == BASE) xc[0] = 1;
                      }
                      break;
                    } else {
                      xc[ni] += k;
                      if (xc[ni] != BASE) break;
                      xc[ni--] = 0;
                      k = 1;
                    }
                  }
                }
                for (i = xc.length; xc[--i] === 0; xc.pop()) ;
              }
              if (x.e > MAX_EXP) {
                x.c = x.e = null;
              } else if (x.e < MIN_EXP) {
                x.c = [x.e = 0];
              }
            }
            return x;
          }
          function valueOf(n) {
            var str, e = n.e;
            if (e === null) return n.toString();
            str = coeffToString(n.c);
            str = e <= TO_EXP_NEG || e >= TO_EXP_POS ? toExponential(str, e) : toFixedPoint(str, e, "0");
            return n.s < 0 ? "-" + str : str;
          }
          P.absoluteValue = P.abs = function() {
            var x = new BigNumber2(this);
            if (x.s < 0) x.s = 1;
            return x;
          };
          P.comparedTo = function(y, b) {
            return compare(this, new BigNumber2(y, b));
          };
          P.decimalPlaces = P.dp = function(dp, rm) {
            var c, n, v, x = this;
            if (dp != null) {
              intCheck(dp, 0, MAX);
              if (rm == null) rm = ROUNDING_MODE;
              else intCheck(rm, 0, 8);
              return round(new BigNumber2(x), dp + x.e + 1, rm);
            }
            if (!(c = x.c)) return null;
            n = ((v = c.length - 1) - bitFloor(this.e / LOG_BASE)) * LOG_BASE;
            if (v = c[v]) for (; v % 10 == 0; v /= 10, n--) ;
            if (n < 0) n = 0;
            return n;
          };
          P.dividedBy = P.div = function(y, b) {
            return div(this, new BigNumber2(y, b), DECIMAL_PLACES, ROUNDING_MODE);
          };
          P.dividedToIntegerBy = P.idiv = function(y, b) {
            return div(this, new BigNumber2(y, b), 0, 1);
          };
          P.exponentiatedBy = P.pow = function(n, m) {
            var half, isModExp, i, k, more, nIsBig, nIsNeg, nIsOdd, y, x = this;
            n = new BigNumber2(n);
            if (n.c && !n.isInteger()) {
              throw Error(bignumberError + "Exponent not an integer: " + valueOf(n));
            }
            if (m != null) m = new BigNumber2(m);
            nIsBig = n.e > 14;
            if (!x.c || !x.c[0] || x.c[0] == 1 && !x.e && x.c.length == 1 || !n.c || !n.c[0]) {
              y = new BigNumber2(Math.pow(+valueOf(x), nIsBig ? n.s * (2 - isOdd(n)) : +valueOf(n)));
              return m ? y.mod(m) : y;
            }
            nIsNeg = n.s < 0;
            if (m) {
              if (m.c ? !m.c[0] : !m.s) return new BigNumber2(NaN);
              isModExp = !nIsNeg && x.isInteger() && m.isInteger();
              if (isModExp) x = x.mod(m);
            } else if (n.e > 9 && (x.e > 0 || x.e < -1 || (x.e == 0 ? x.c[0] > 1 || nIsBig && x.c[1] >= 24e7 : x.c[0] < 8e13 || nIsBig && x.c[0] <= 9999975e7))) {
              k = x.s < 0 && isOdd(n) ? -0 : 0;
              if (x.e > -1) k = 1 / k;
              return new BigNumber2(nIsNeg ? 1 / k : k);
            } else if (POW_PRECISION) {
              k = mathceil(POW_PRECISION / LOG_BASE + 2);
            }
            if (nIsBig) {
              half = new BigNumber2(0.5);
              if (nIsNeg) n.s = 1;
              nIsOdd = isOdd(n);
            } else {
              i = Math.abs(+valueOf(n));
              nIsOdd = i % 2;
            }
            y = new BigNumber2(ONE);
            for (; ; ) {
              if (nIsOdd) {
                y = y.times(x);
                if (!y.c) break;
                if (k) {
                  if (y.c.length > k) y.c.length = k;
                } else if (isModExp) {
                  y = y.mod(m);
                }
              }
              if (i) {
                i = mathfloor(i / 2);
                if (i === 0) break;
                nIsOdd = i % 2;
              } else {
                n = n.times(half);
                round(n, n.e + 1, 1);
                if (n.e > 14) {
                  nIsOdd = isOdd(n);
                } else {
                  i = +valueOf(n);
                  if (i === 0) break;
                  nIsOdd = i % 2;
                }
              }
              x = x.times(x);
              if (k) {
                if (x.c && x.c.length > k) x.c.length = k;
              } else if (isModExp) {
                x = x.mod(m);
              }
            }
            if (isModExp) return y;
            if (nIsNeg) y = ONE.div(y);
            return m ? y.mod(m) : k ? round(y, POW_PRECISION, ROUNDING_MODE, more) : y;
          };
          P.integerValue = function(rm) {
            var n = new BigNumber2(this);
            if (rm == null) rm = ROUNDING_MODE;
            else intCheck(rm, 0, 8);
            return round(n, n.e + 1, rm);
          };
          P.isEqualTo = P.eq = function(y, b) {
            return compare(this, new BigNumber2(y, b)) === 0;
          };
          P.isFinite = function() {
            return !!this.c;
          };
          P.isGreaterThan = P.gt = function(y, b) {
            return compare(this, new BigNumber2(y, b)) > 0;
          };
          P.isGreaterThanOrEqualTo = P.gte = function(y, b) {
            return (b = compare(this, new BigNumber2(y, b))) === 1 || b === 0;
          };
          P.isInteger = function() {
            return !!this.c && bitFloor(this.e / LOG_BASE) > this.c.length - 2;
          };
          P.isLessThan = P.lt = function(y, b) {
            return compare(this, new BigNumber2(y, b)) < 0;
          };
          P.isLessThanOrEqualTo = P.lte = function(y, b) {
            return (b = compare(this, new BigNumber2(y, b))) === -1 || b === 0;
          };
          P.isNaN = function() {
            return !this.s;
          };
          P.isNegative = function() {
            return this.s < 0;
          };
          P.isPositive = function() {
            return this.s > 0;
          };
          P.isZero = function() {
            return !!this.c && this.c[0] == 0;
          };
          P.minus = function(y, b) {
            var i, j, t, xLTy, x = this, a = x.s;
            y = new BigNumber2(y, b);
            b = y.s;
            if (!a || !b) return new BigNumber2(NaN);
            if (a != b) {
              y.s = -b;
              return x.plus(y);
            }
            var xe = x.e / LOG_BASE, ye = y.e / LOG_BASE, xc = x.c, yc = y.c;
            if (!xe || !ye) {
              if (!xc || !yc) return xc ? (y.s = -b, y) : new BigNumber2(yc ? x : NaN);
              if (!xc[0] || !yc[0]) {
                return yc[0] ? (y.s = -b, y) : new BigNumber2(xc[0] ? x : (
                  // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
                  ROUNDING_MODE == 3 ? -0 : 0
                ));
              }
            }
            xe = bitFloor(xe);
            ye = bitFloor(ye);
            xc = xc.slice();
            if (a = xe - ye) {
              if (xLTy = a < 0) {
                a = -a;
                t = xc;
              } else {
                ye = xe;
                t = yc;
              }
              t.reverse();
              for (b = a; b--; t.push(0)) ;
              t.reverse();
            } else {
              j = (xLTy = (a = xc.length) < (b = yc.length)) ? a : b;
              for (a = b = 0; b < j; b++) {
                if (xc[b] != yc[b]) {
                  xLTy = xc[b] < yc[b];
                  break;
                }
              }
            }
            if (xLTy) {
              t = xc;
              xc = yc;
              yc = t;
              y.s = -y.s;
            }
            b = (j = yc.length) - (i = xc.length);
            if (b > 0) for (; b--; xc[i++] = 0) ;
            b = BASE - 1;
            for (; j > a; ) {
              if (xc[--j] < yc[j]) {
                for (i = j; i && !xc[--i]; xc[i] = b) ;
                --xc[i];
                xc[j] += BASE;
              }
              xc[j] -= yc[j];
            }
            for (; xc[0] == 0; xc.splice(0, 1), --ye) ;
            if (!xc[0]) {
              y.s = ROUNDING_MODE == 3 ? -1 : 1;
              y.c = [y.e = 0];
              return y;
            }
            return normalise(y, xc, ye);
          };
          P.modulo = P.mod = function(y, b) {
            var q, s, x = this;
            y = new BigNumber2(y, b);
            if (!x.c || !y.s || y.c && !y.c[0]) {
              return new BigNumber2(NaN);
            } else if (!y.c || x.c && !x.c[0]) {
              return new BigNumber2(x);
            }
            if (MODULO_MODE == 9) {
              s = y.s;
              y.s = 1;
              q = div(x, y, 0, 3);
              y.s = s;
              q.s *= s;
            } else {
              q = div(x, y, 0, MODULO_MODE);
            }
            y = x.minus(q.times(y));
            if (!y.c[0] && MODULO_MODE == 1) y.s = x.s;
            return y;
          };
          P.multipliedBy = P.times = function(y, b) {
            var c, e, i, j, k, m, xcL, xlo, xhi, ycL, ylo, yhi, zc, base, sqrtBase, x = this, xc = x.c, yc = (y = new BigNumber2(y, b)).c;
            if (!xc || !yc || !xc[0] || !yc[0]) {
              if (!x.s || !y.s || xc && !xc[0] && !yc || yc && !yc[0] && !xc) {
                y.c = y.e = y.s = null;
              } else {
                y.s *= x.s;
                if (!xc || !yc) {
                  y.c = y.e = null;
                } else {
                  y.c = [0];
                  y.e = 0;
                }
              }
              return y;
            }
            e = bitFloor(x.e / LOG_BASE) + bitFloor(y.e / LOG_BASE);
            y.s *= x.s;
            xcL = xc.length;
            ycL = yc.length;
            if (xcL < ycL) {
              zc = xc;
              xc = yc;
              yc = zc;
              i = xcL;
              xcL = ycL;
              ycL = i;
            }
            for (i = xcL + ycL, zc = []; i--; zc.push(0)) ;
            base = BASE;
            sqrtBase = SQRT_BASE;
            for (i = ycL; --i >= 0; ) {
              c = 0;
              ylo = yc[i] % sqrtBase;
              yhi = yc[i] / sqrtBase | 0;
              for (k = xcL, j = i + k; j > i; ) {
                xlo = xc[--k] % sqrtBase;
                xhi = xc[k] / sqrtBase | 0;
                m = yhi * xlo + xhi * ylo;
                xlo = ylo * xlo + m % sqrtBase * sqrtBase + zc[j] + c;
                c = (xlo / base | 0) + (m / sqrtBase | 0) + yhi * xhi;
                zc[j--] = xlo % base;
              }
              zc[j] = c;
            }
            if (c) {
              ++e;
            } else {
              zc.splice(0, 1);
            }
            return normalise(y, zc, e);
          };
          P.negated = function() {
            var x = new BigNumber2(this);
            x.s = -x.s || null;
            return x;
          };
          P.plus = function(y, b) {
            var t, x = this, a = x.s;
            y = new BigNumber2(y, b);
            b = y.s;
            if (!a || !b) return new BigNumber2(NaN);
            if (a != b) {
              y.s = -b;
              return x.minus(y);
            }
            var xe = x.e / LOG_BASE, ye = y.e / LOG_BASE, xc = x.c, yc = y.c;
            if (!xe || !ye) {
              if (!xc || !yc) return new BigNumber2(a / 0);
              if (!xc[0] || !yc[0]) return yc[0] ? y : new BigNumber2(xc[0] ? x : a * 0);
            }
            xe = bitFloor(xe);
            ye = bitFloor(ye);
            xc = xc.slice();
            if (a = xe - ye) {
              if (a > 0) {
                ye = xe;
                t = yc;
              } else {
                a = -a;
                t = xc;
              }
              t.reverse();
              for (; a--; t.push(0)) ;
              t.reverse();
            }
            a = xc.length;
            b = yc.length;
            if (a - b < 0) {
              t = yc;
              yc = xc;
              xc = t;
              b = a;
            }
            for (a = 0; b; ) {
              a = (xc[--b] = xc[b] + yc[b] + a) / BASE | 0;
              xc[b] = BASE === xc[b] ? 0 : xc[b] % BASE;
            }
            if (a) {
              xc = [a].concat(xc);
              ++ye;
            }
            return normalise(y, xc, ye);
          };
          P.precision = P.sd = function(sd, rm) {
            var c, n, v, x = this;
            if (sd != null && sd !== !!sd) {
              intCheck(sd, 1, MAX);
              if (rm == null) rm = ROUNDING_MODE;
              else intCheck(rm, 0, 8);
              return round(new BigNumber2(x), sd, rm);
            }
            if (!(c = x.c)) return null;
            v = c.length - 1;
            n = v * LOG_BASE + 1;
            if (v = c[v]) {
              for (; v % 10 == 0; v /= 10, n--) ;
              for (v = c[0]; v >= 10; v /= 10, n++) ;
            }
            if (sd && x.e + 1 > n) n = x.e + 1;
            return n;
          };
          P.shiftedBy = function(k) {
            intCheck(k, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER);
            return this.times("1e" + k);
          };
          P.squareRoot = P.sqrt = function() {
            var m, n, r, rep, t, x = this, c = x.c, s = x.s, e = x.e, dp = DECIMAL_PLACES + 4, half = new BigNumber2("0.5");
            if (s !== 1 || !c || !c[0]) {
              return new BigNumber2(!s || s < 0 && (!c || c[0]) ? NaN : c ? x : 1 / 0);
            }
            s = Math.sqrt(+valueOf(x));
            if (s == 0 || s == 1 / 0) {
              n = coeffToString(c);
              if ((n.length + e) % 2 == 0) n += "0";
              s = Math.sqrt(+n);
              e = bitFloor((e + 1) / 2) - (e < 0 || e % 2);
              if (s == 1 / 0) {
                n = "5e" + e;
              } else {
                n = s.toExponential();
                n = n.slice(0, n.indexOf("e") + 1) + e;
              }
              r = new BigNumber2(n);
            } else {
              r = new BigNumber2(s + "");
            }
            if (r.c[0]) {
              e = r.e;
              s = e + dp;
              if (s < 3) s = 0;
              for (; ; ) {
                t = r;
                r = half.times(t.plus(div(x, t, dp, 1)));
                if (coeffToString(t.c).slice(0, s) === (n = coeffToString(r.c)).slice(0, s)) {
                  if (r.e < e) --s;
                  n = n.slice(s - 3, s + 1);
                  if (n == "9999" || !rep && n == "4999") {
                    if (!rep) {
                      round(t, t.e + DECIMAL_PLACES + 2, 0);
                      if (t.times(t).eq(x)) {
                        r = t;
                        break;
                      }
                    }
                    dp += 4;
                    s += 4;
                    rep = 1;
                  } else {
                    if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
                      round(r, r.e + DECIMAL_PLACES + 2, 1);
                      m = !r.times(r).eq(x);
                    }
                    break;
                  }
                }
              }
            }
            return round(r, r.e + DECIMAL_PLACES + 1, ROUNDING_MODE, m);
          };
          P.toExponential = function(dp, rm) {
            if (dp != null) {
              intCheck(dp, 0, MAX);
              dp++;
            }
            return format(this, dp, rm, 1);
          };
          P.toFixed = function(dp, rm) {
            if (dp != null) {
              intCheck(dp, 0, MAX);
              dp = dp + this.e + 1;
            }
            return format(this, dp, rm);
          };
          P.toFormat = function(dp, rm, format2) {
            var str, x = this;
            if (format2 == null) {
              if (dp != null && rm && typeof rm == "object") {
                format2 = rm;
                rm = null;
              } else if (dp && typeof dp == "object") {
                format2 = dp;
                dp = rm = null;
              } else {
                format2 = FORMAT;
              }
            } else if (typeof format2 != "object") {
              throw Error(bignumberError + "Argument not an object: " + format2);
            }
            str = x.toFixed(dp, rm);
            if (x.c) {
              var i, arr = str.split("."), g1 = +format2.groupSize, g2 = +format2.secondaryGroupSize, groupSeparator = format2.groupSeparator || "", intPart = arr[0], fractionPart = arr[1], isNeg = x.s < 0, intDigits = isNeg ? intPart.slice(1) : intPart, len = intDigits.length;
              if (g2) {
                i = g1;
                g1 = g2;
                g2 = i;
                len -= i;
              }
              if (g1 > 0 && len > 0) {
                i = len % g1 || g1;
                intPart = intDigits.substr(0, i);
                for (; i < len; i += g1) intPart += groupSeparator + intDigits.substr(i, g1);
                if (g2 > 0) intPart += groupSeparator + intDigits.slice(i);
                if (isNeg) intPart = "-" + intPart;
              }
              str = fractionPart ? intPart + (format2.decimalSeparator || "") + ((g2 = +format2.fractionGroupSize) ? fractionPart.replace(
                new RegExp("\\d{" + g2 + "}\\B", "g"),
                "$&" + (format2.fractionGroupSeparator || "")
              ) : fractionPart) : intPart;
            }
            return (format2.prefix || "") + str + (format2.suffix || "");
          };
          P.toFraction = function(md) {
            var d2, d0, d1, d22, e, exp, n, n0, n1, q, r, s, x = this, xc = x.c;
            if (md != null) {
              n = new BigNumber2(md);
              if (!n.isInteger() && (n.c || n.s !== 1) || n.lt(ONE)) {
                throw Error(bignumberError + "Argument " + (n.isInteger() ? "out of range: " : "not an integer: ") + valueOf(n));
              }
            }
            if (!xc) return new BigNumber2(x);
            d2 = new BigNumber2(ONE);
            n1 = d0 = new BigNumber2(ONE);
            d1 = n0 = new BigNumber2(ONE);
            s = coeffToString(xc);
            e = d2.e = s.length - x.e - 1;
            d2.c[0] = POWS_TEN[(exp = e % LOG_BASE) < 0 ? LOG_BASE + exp : exp];
            md = !md || n.comparedTo(d2) > 0 ? e > 0 ? d2 : n1 : n;
            exp = MAX_EXP;
            MAX_EXP = 1 / 0;
            n = new BigNumber2(s);
            n0.c[0] = 0;
            for (; ; ) {
              q = div(n, d2, 0, 1);
              d22 = d0.plus(q.times(d1));
              if (d22.comparedTo(md) == 1) break;
              d0 = d1;
              d1 = d22;
              n1 = n0.plus(q.times(d22 = n1));
              n0 = d22;
              d2 = n.minus(q.times(d22 = d2));
              n = d22;
            }
            d22 = div(md.minus(d0), d1, 0, 1);
            n0 = n0.plus(d22.times(n1));
            d0 = d0.plus(d22.times(d1));
            n0.s = n1.s = x.s;
            e = e * 2;
            r = div(n1, d1, e, ROUNDING_MODE).minus(x).abs().comparedTo(
              div(n0, d0, e, ROUNDING_MODE).minus(x).abs()
            ) < 1 ? [n1, d1] : [n0, d0];
            MAX_EXP = exp;
            return r;
          };
          P.toNumber = function() {
            return +valueOf(this);
          };
          P.toPrecision = function(sd, rm) {
            if (sd != null) intCheck(sd, 1, MAX);
            return format(this, sd, rm, 2);
          };
          P.toString = function(b) {
            var str, n = this, s = n.s, e = n.e;
            if (e === null) {
              if (s) {
                str = "Infinity";
                if (s < 0) str = "-" + str;
              } else {
                str = "NaN";
              }
            } else {
              if (b == null) {
                str = e <= TO_EXP_NEG || e >= TO_EXP_POS ? toExponential(coeffToString(n.c), e) : toFixedPoint(coeffToString(n.c), e, "0");
              } else if (b === 10 && alphabetHasNormalDecimalDigits) {
                n = round(new BigNumber2(n), DECIMAL_PLACES + e + 1, ROUNDING_MODE);
                str = toFixedPoint(coeffToString(n.c), n.e, "0");
              } else {
                intCheck(b, 2, ALPHABET.length, "Base");
                str = convertBase(toFixedPoint(coeffToString(n.c), e, "0"), 10, b, s, true);
              }
              if (s < 0 && n.c[0]) str = "-" + str;
            }
            return str;
          };
          P.valueOf = P.toJSON = function() {
            return valueOf(this);
          };
          P._isBigNumber = true;
          if (configObject != null) BigNumber2.set(configObject);
          return BigNumber2;
        }
        function bitFloor(n) {
          var i = n | 0;
          return n > 0 || n === i ? i : i - 1;
        }
        function coeffToString(a) {
          var s, z, i = 1, j = a.length, r = a[0] + "";
          for (; i < j; ) {
            s = a[i++] + "";
            z = LOG_BASE - s.length;
            for (; z--; s = "0" + s) ;
            r += s;
          }
          for (j = r.length; r.charCodeAt(--j) === 48; ) ;
          return r.slice(0, j + 1 || 1);
        }
        function compare(x, y) {
          var a, b, xc = x.c, yc = y.c, i = x.s, j = y.s, k = x.e, l = y.e;
          if (!i || !j) return null;
          a = xc && !xc[0];
          b = yc && !yc[0];
          if (a || b) return a ? b ? 0 : -j : i;
          if (i != j) return i;
          a = i < 0;
          b = k == l;
          if (!xc || !yc) return b ? 0 : !xc ^ a ? 1 : -1;
          if (!b) return k > l ^ a ? 1 : -1;
          j = (k = xc.length) < (l = yc.length) ? k : l;
          for (i = 0; i < j; i++) if (xc[i] != yc[i]) return xc[i] > yc[i] ^ a ? 1 : -1;
          return k == l ? 0 : k > l ^ a ? 1 : -1;
        }
        function intCheck(n, min, max, name) {
          if (n < min || n > max || n !== mathfloor(n)) {
            throw Error(bignumberError + (name || "Argument") + (typeof n == "number" ? n < min || n > max ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(n));
          }
        }
        function isOdd(n) {
          var k = n.c.length - 1;
          return bitFloor(n.e / LOG_BASE) == k && n.c[k] % 2 != 0;
        }
        function toExponential(str, e) {
          return (str.length > 1 ? str.charAt(0) + "." + str.slice(1) : str) + (e < 0 ? "e" : "e+") + e;
        }
        function toFixedPoint(str, e, z) {
          var len, zs;
          if (e < 0) {
            for (zs = z + "."; ++e; zs += z) ;
            str = zs + str;
          } else {
            len = str.length;
            if (++e > len) {
              for (zs = z, e -= len; --e; zs += z) ;
              str += zs;
            } else if (e < len) {
              str = str.slice(0, e) + "." + str.slice(e);
            }
          }
          return str;
        }
        BigNumber = clone();
        BigNumber["default"] = BigNumber.BigNumber = BigNumber;
        if (typeof define == "function" && define.amd) {
          define(function() {
            return BigNumber;
          });
        } else if (typeof module != "undefined" && module.exports) {
          module.exports = BigNumber;
        } else {
          if (!globalObject) {
            globalObject = typeof self != "undefined" && self ? self : window;
          }
          globalObject.BigNumber = BigNumber;
        }
      })(exports);
    }
  });

  // node_modules/json-bigint/lib/stringify.js
  var require_stringify2 = __commonJS({
    "node_modules/json-bigint/lib/stringify.js"(exports, module) {
      var BigNumber = require_bignumber();
      var JSON2 = module.exports;
      (function() {
        "use strict";
        function f(n) {
          return n < 10 ? "0" + n : n;
        }
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
          // table of character substitutions
          "\b": "\\b",
          "	": "\\t",
          "\n": "\\n",
          "\f": "\\f",
          "\r": "\\r",
          '"': '\\"',
          "\\": "\\\\"
        }, rep;
        function quote(string) {
          escapable.lastIndex = 0;
          return escapable.test(string) ? '"' + string.replace(escapable, function(a) {
            var c = meta[a];
            return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
          }) + '"' : '"' + string + '"';
        }
        function str(key, holder) {
          var i, k, v, length, mind = gap, partial, value = holder[key], isBigNumber = value != null && (value instanceof BigNumber || BigNumber.isBigNumber(value));
          if (value && typeof value === "object" && typeof value.toJSON === "function") {
            value = value.toJSON(key);
          }
          if (typeof rep === "function") {
            value = rep.call(holder, key, value);
          }
          switch (typeof value) {
            case "string":
              if (isBigNumber) {
                return value;
              } else {
                return quote(value);
              }
            case "number":
              return isFinite(value) ? String(value) : "null";
            case "boolean":
            case "null":
            case "bigint":
              return String(value);
            // If the type is 'object', we might be dealing with an object or an array or
            // null.
            case "object":
              if (!value) {
                return "null";
              }
              gap += indent;
              partial = [];
              if (Object.prototype.toString.apply(value) === "[object Array]") {
                length = value.length;
                for (i = 0; i < length; i += 1) {
                  partial[i] = str(i, value) || "null";
                }
                v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
                gap = mind;
                return v;
              }
              if (rep && typeof rep === "object") {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                  if (typeof rep[i] === "string") {
                    k = rep[i];
                    v = str(k, value);
                    if (v) {
                      partial.push(quote(k) + (gap ? ": " : ":") + v);
                    }
                  }
                }
              } else {
                Object.keys(value).forEach(function(k2) {
                  var v2 = str(k2, value);
                  if (v2) {
                    partial.push(quote(k2) + (gap ? ": " : ":") + v2);
                  }
                });
              }
              v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
              gap = mind;
              return v;
          }
        }
        if (typeof JSON2.stringify !== "function") {
          JSON2.stringify = function(value, replacer, space) {
            var i;
            gap = "";
            indent = "";
            if (typeof space === "number") {
              for (i = 0; i < space; i += 1) {
                indent += " ";
              }
            } else if (typeof space === "string") {
              indent = space;
            }
            rep = replacer;
            if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
              throw new Error("JSON.stringify");
            }
            return str("", { "": value });
          };
        }
      })();
    }
  });

  // node_modules/json-bigint/lib/parse.js
  var require_parse2 = __commonJS({
    "node_modules/json-bigint/lib/parse.js"(exports, module) {
      var BigNumber = null;
      var suspectProtoRx = /(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])/;
      var suspectConstructorRx = /(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)/;
      var json_parse = function(options) {
        "use strict";
        var _options = {
          strict: false,
          // not being strict means do not generate syntax errors for "duplicate key"
          storeAsString: false,
          // toggles whether the values should be stored as BigNumber (default) or a string
          alwaysParseAsBig: false,
          // toggles whether all numbers should be Big
          useNativeBigInt: false,
          // toggles whether to use native BigInt instead of bignumber.js
          protoAction: "error",
          constructorAction: "error"
        };
        if (options !== void 0 && options !== null) {
          if (options.strict === true) {
            _options.strict = true;
          }
          if (options.storeAsString === true) {
            _options.storeAsString = true;
          }
          _options.alwaysParseAsBig = options.alwaysParseAsBig === true ? options.alwaysParseAsBig : false;
          _options.useNativeBigInt = options.useNativeBigInt === true ? options.useNativeBigInt : false;
          if (typeof options.constructorAction !== "undefined") {
            if (options.constructorAction === "error" || options.constructorAction === "ignore" || options.constructorAction === "preserve") {
              _options.constructorAction = options.constructorAction;
            } else {
              throw new Error(
                `Incorrect value for constructorAction option, must be "error", "ignore" or undefined but passed ${options.constructorAction}`
              );
            }
          }
          if (typeof options.protoAction !== "undefined") {
            if (options.protoAction === "error" || options.protoAction === "ignore" || options.protoAction === "preserve") {
              _options.protoAction = options.protoAction;
            } else {
              throw new Error(
                `Incorrect value for protoAction option, must be "error", "ignore" or undefined but passed ${options.protoAction}`
              );
            }
          }
        }
        var at, ch, escapee = {
          '"': '"',
          "\\": "\\",
          "/": "/",
          b: "\b",
          f: "\f",
          n: "\n",
          r: "\r",
          t: "	"
        }, text, error = function(m) {
          throw {
            name: "SyntaxError",
            message: m,
            at,
            text
          };
        }, next = function(c) {
          if (c && c !== ch) {
            error("Expected '" + c + "' instead of '" + ch + "'");
          }
          ch = text.charAt(at);
          at += 1;
          return ch;
        }, number = function() {
          var number2, string2 = "";
          if (ch === "-") {
            string2 = "-";
            next("-");
          }
          while (ch >= "0" && ch <= "9") {
            string2 += ch;
            next();
          }
          if (ch === ".") {
            string2 += ".";
            while (next() && ch >= "0" && ch <= "9") {
              string2 += ch;
            }
          }
          if (ch === "e" || ch === "E") {
            string2 += ch;
            next();
            if (ch === "-" || ch === "+") {
              string2 += ch;
              next();
            }
            while (ch >= "0" && ch <= "9") {
              string2 += ch;
              next();
            }
          }
          number2 = +string2;
          if (!isFinite(number2)) {
            error("Bad number");
          } else {
            if (BigNumber == null) BigNumber = require_bignumber();
            if (string2.length > 15)
              return _options.storeAsString ? string2 : _options.useNativeBigInt ? BigInt(string2) : new BigNumber(string2);
            else
              return !_options.alwaysParseAsBig ? number2 : _options.useNativeBigInt ? BigInt(number2) : new BigNumber(number2);
          }
        }, string = function() {
          var hex, i, string2 = "", uffff;
          if (ch === '"') {
            var startAt = at;
            while (next()) {
              if (ch === '"') {
                if (at - 1 > startAt) string2 += text.substring(startAt, at - 1);
                next();
                return string2;
              }
              if (ch === "\\") {
                if (at - 1 > startAt) string2 += text.substring(startAt, at - 1);
                next();
                if (ch === "u") {
                  uffff = 0;
                  for (i = 0; i < 4; i += 1) {
                    hex = parseInt(next(), 16);
                    if (!isFinite(hex)) {
                      break;
                    }
                    uffff = uffff * 16 + hex;
                  }
                  string2 += String.fromCharCode(uffff);
                } else if (typeof escapee[ch] === "string") {
                  string2 += escapee[ch];
                } else {
                  break;
                }
                startAt = at;
              }
            }
          }
          error("Bad string");
        }, white = function() {
          while (ch && ch <= " ") {
            next();
          }
        }, word = function() {
          switch (ch) {
            case "t":
              next("t");
              next("r");
              next("u");
              next("e");
              return true;
            case "f":
              next("f");
              next("a");
              next("l");
              next("s");
              next("e");
              return false;
            case "n":
              next("n");
              next("u");
              next("l");
              next("l");
              return null;
          }
          error("Unexpected '" + ch + "'");
        }, value, array = function() {
          var array2 = [];
          if (ch === "[") {
            next("[");
            white();
            if (ch === "]") {
              next("]");
              return array2;
            }
            while (ch) {
              array2.push(value());
              white();
              if (ch === "]") {
                next("]");
                return array2;
              }
              next(",");
              white();
            }
          }
          error("Bad array");
        }, object = function() {
          var key, object2 = /* @__PURE__ */ Object.create(null);
          if (ch === "{") {
            next("{");
            white();
            if (ch === "}") {
              next("}");
              return object2;
            }
            while (ch) {
              key = string();
              white();
              next(":");
              if (_options.strict === true && Object.hasOwnProperty.call(object2, key)) {
                error('Duplicate key "' + key + '"');
              }
              if (suspectProtoRx.test(key) === true) {
                if (_options.protoAction === "error") {
                  error("Object contains forbidden prototype property");
                } else if (_options.protoAction === "ignore") {
                  value();
                } else {
                  object2[key] = value();
                }
              } else if (suspectConstructorRx.test(key) === true) {
                if (_options.constructorAction === "error") {
                  error("Object contains forbidden constructor property");
                } else if (_options.constructorAction === "ignore") {
                  value();
                } else {
                  object2[key] = value();
                }
              } else {
                object2[key] = value();
              }
              white();
              if (ch === "}") {
                next("}");
                return object2;
              }
              next(",");
              white();
            }
          }
          error("Bad object");
        };
        value = function() {
          white();
          switch (ch) {
            case "{":
              return object();
            case "[":
              return array();
            case '"':
              return string();
            case "-":
              return number();
            default:
              return ch >= "0" && ch <= "9" ? number() : word();
          }
        };
        return function(source, reviver) {
          var result;
          text = source + "";
          at = 0;
          ch = " ";
          result = value();
          white();
          if (ch) {
            error("Syntax error");
          }
          return typeof reviver === "function" ? (function walk(holder, key) {
            var k, v, value2 = holder[key];
            if (value2 && typeof value2 === "object") {
              Object.keys(value2).forEach(function(k2) {
                v = walk(value2, k2);
                if (v !== void 0) {
                  value2[k2] = v;
                } else {
                  delete value2[k2];
                }
              });
            }
            return reviver.call(holder, key, value2);
          })({ "": result }, "") : result;
        };
      };
      module.exports = json_parse;
    }
  });

  // node_modules/json-bigint/index.js
  var require_json_bigint = __commonJS({
    "node_modules/json-bigint/index.js"(exports, module) {
      var json_stringify = require_stringify2().stringify;
      var json_parse = require_parse2();
      module.exports = function(options) {
        return {
          parse: json_parse(options),
          stringify: json_stringify
        };
      };
      module.exports.parse = json_parse();
      module.exports.stringify = json_stringify;
    }
  });

  // node_modules/algosdk/dist/esm/types/intDecoding.js
  var IntDecoding, intDecoding_default;
  var init_intDecoding = __esm({
    "node_modules/algosdk/dist/esm/types/intDecoding.js"() {
      (function(IntDecoding2) {
        IntDecoding2["UNSAFE"] = "unsafe";
        IntDecoding2["SAFE"] = "safe";
        IntDecoding2["MIXED"] = "mixed";
        IntDecoding2["BIGINT"] = "bigint";
      })(IntDecoding || (IntDecoding = {}));
      intDecoding_default = IntDecoding;
    }
  });

  // node_modules/algosdk/dist/esm/utils/utils.js
  function stringifyJSON(value, replacer, space) {
    return JSONbig.stringify(value, replacer, space);
  }
  function arrayEqual(a, b) {
    if (a.length !== b.length) {
      return false;
    }
    return Array.from(a).every((val, i) => val === b[i]);
  }
  function concatArrays(...arrs) {
    const size = arrs.reduce((sum, arr) => sum + arr.length, 0);
    const c = new Uint8Array(size);
    let offset = 0;
    for (let i = 0; i < arrs.length; i++) {
      c.set(arrs[i], offset);
      offset += arrs[i].length;
    }
    return c;
  }
  function isNode() {
    return (
      // @ts-ignore
      typeof process === "object" && // @ts-ignore
      typeof process.versions === "object" && // @ts-ignore
      typeof process.versions.node !== "undefined"
    );
  }
  function ensureSafeInteger(value) {
    if (typeof value === "undefined") {
      throw new Error("Value is undefined");
    }
    if (typeof value === "bigint") {
      if (value > BigInt(Number.MAX_SAFE_INTEGER) || value < BigInt(Number.MIN_SAFE_INTEGER)) {
        throw new Error(`BigInt value ${value} is not a safe integer`);
      }
      return Number(value);
    }
    if (typeof value === "number") {
      if (Number.isSafeInteger(value)) {
        return value;
      }
      throw new Error(`Value ${value} is not a safe integer`);
    }
    throw new Error(`Unexpected type ${typeof value}, ${value}`);
  }
  function ensureSafeUnsignedInteger(value) {
    const intValue = ensureSafeInteger(value);
    if (intValue < 0) {
      throw new Error(`Value ${intValue} is negative`);
    }
    return intValue;
  }
  function ensureBigInt(value) {
    if (typeof value === "undefined") {
      throw new Error("Value is undefined");
    }
    if (typeof value === "bigint") {
      return value;
    }
    if (typeof value === "number") {
      if (!Number.isSafeInteger(value)) {
        throw new Error(`Value ${value} is not a safe integer`);
      }
      return BigInt(value);
    }
    throw new Error(`Unexpected type ${typeof value}, ${value}`);
  }
  function ensureUint64(value) {
    const bigIntValue = ensureBigInt(value);
    if (bigIntValue < 0 || bigIntValue > BigInt("0xffffffffffffffff")) {
      throw new Error(`Value ${bigIntValue} is not a uint64`);
    }
    return bigIntValue;
  }
  function isEmptyObject(obj) {
    if (!obj || typeof obj !== "object")
      return false;
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        if (obj[key] !== void 0) {
          return false;
        }
      }
    }
    return true;
  }
  var import_json_bigint, JSONbig;
  var init_utils = __esm({
    "node_modules/algosdk/dist/esm/utils/utils.js"() {
      import_json_bigint = __toESM(require_json_bigint(), 1);
      init_intDecoding();
      JSONbig = (0, import_json_bigint.default)({
        useNativeBigInt: true,
        strict: true
      });
    }
  });

  // node_modules/algosdk/dist/esm/client/urlTokenBaseHTTPClient.js
  var init_urlTokenBaseHTTPClient = __esm({
    "node_modules/algosdk/dist/esm/client/urlTokenBaseHTTPClient.js"() {
    }
  });

  // node_modules/algosdk/dist/esm/client/client.js
  var init_client = __esm({
    "node_modules/algosdk/dist/esm/client/client.js"() {
      init_utils();
      init_urlTokenBaseHTTPClient();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/serviceClient.js
  var init_serviceClient = __esm({
    "node_modules/algosdk/dist/esm/client/v2/serviceClient.js"() {
      init_client();
    }
  });

  // node_modules/algorand-msgpack/dist.es5+esm/utils/utf8.mjs
  function utf8Count(str) {
    var strLength = str.length;
    var byteLength = 0;
    var pos = 0;
    while (pos < strLength) {
      var value = str.charCodeAt(pos++);
      if ((value & 4294967168) === 0) {
        byteLength++;
        continue;
      } else if ((value & 4294965248) === 0) {
        byteLength += 2;
      } else {
        if (value >= 55296 && value <= 56319) {
          if (pos < strLength) {
            var extra = str.charCodeAt(pos);
            if ((extra & 64512) === 56320) {
              ++pos;
              value = ((value & 1023) << 10) + (extra & 1023) + 65536;
            }
          }
        }
        if ((value & 4294901760) === 0) {
          byteLength += 3;
        } else {
          byteLength += 4;
        }
      }
    }
    return byteLength;
  }
  function utf8EncodeJs(str, output, outputOffset) {
    var strLength = str.length;
    var offset = outputOffset;
    var pos = 0;
    while (pos < strLength) {
      var value = str.charCodeAt(pos++);
      if ((value & 4294967168) === 0) {
        output[offset++] = value;
        continue;
      } else if ((value & 4294965248) === 0) {
        output[offset++] = value >> 6 & 31 | 192;
      } else {
        if (value >= 55296 && value <= 56319) {
          if (pos < strLength) {
            var extra = str.charCodeAt(pos);
            if ((extra & 64512) === 56320) {
              ++pos;
              value = ((value & 1023) << 10) + (extra & 1023) + 65536;
            }
          }
        }
        if ((value & 4294901760) === 0) {
          output[offset++] = value >> 12 & 15 | 224;
          output[offset++] = value >> 6 & 63 | 128;
        } else {
          output[offset++] = value >> 18 & 7 | 240;
          output[offset++] = value >> 12 & 63 | 128;
          output[offset++] = value >> 6 & 63 | 128;
        }
      }
      output[offset++] = value & 63 | 128;
    }
  }
  function utf8EncodeTE(str, output, outputOffset) {
    sharedTextEncoder.encodeInto(str, output.subarray(outputOffset));
  }
  function utf8Encode(str, output, outputOffset) {
    if (str.length > TEXT_ENCODER_THRESHOLD) {
      utf8EncodeTE(str, output, outputOffset);
    } else {
      utf8EncodeJs(str, output, outputOffset);
    }
  }
  function utf8DecodeJs(bytes, inputOffset, byteLength) {
    var offset = inputOffset;
    var end = offset + byteLength;
    var units = [];
    var result = "";
    while (offset < end) {
      var byte1 = bytes[offset++];
      if ((byte1 & 128) === 0) {
        units.push(byte1);
      } else if ((byte1 & 224) === 192) {
        var byte2 = bytes[offset++] & 63;
        units.push((byte1 & 31) << 6 | byte2);
      } else if ((byte1 & 240) === 224) {
        var byte2 = bytes[offset++] & 63;
        var byte3 = bytes[offset++] & 63;
        units.push((byte1 & 31) << 12 | byte2 << 6 | byte3);
      } else if ((byte1 & 248) === 240) {
        var byte2 = bytes[offset++] & 63;
        var byte3 = bytes[offset++] & 63;
        var byte4 = bytes[offset++] & 63;
        var unit = (byte1 & 7) << 18 | byte2 << 12 | byte3 << 6 | byte4;
        if (unit > 65535) {
          unit -= 65536;
          units.push(unit >>> 10 & 1023 | 55296);
          unit = 56320 | unit & 1023;
        }
        units.push(unit);
      } else {
        units.push(byte1);
      }
      if (units.length >= CHUNK_SIZE) {
        result += String.fromCharCode.apply(String, units);
        units.length = 0;
      }
    }
    if (units.length > 0) {
      result += String.fromCharCode.apply(String, units);
    }
    return result;
  }
  function utf8DecodeTD(bytes, inputOffset, byteLength) {
    var stringBytes = bytes.subarray(inputOffset, inputOffset + byteLength);
    return sharedTextDecoder.decode(stringBytes);
  }
  function utf8Decode(bytes, inputOffset, byteLength) {
    if (byteLength > TEXT_DECODER_THRESHOLD) {
      return utf8DecodeTD(bytes, inputOffset, byteLength);
    } else {
      return utf8DecodeJs(bytes, inputOffset, byteLength);
    }
  }
  var sharedTextEncoder, TEXT_ENCODER_THRESHOLD, CHUNK_SIZE, sharedTextDecoder, TEXT_DECODER_THRESHOLD;
  var init_utf8 = __esm({
    "node_modules/algorand-msgpack/dist.es5+esm/utils/utf8.mjs"() {
      sharedTextEncoder = new TextEncoder();
      TEXT_ENCODER_THRESHOLD = 50;
      CHUNK_SIZE = 4096;
      sharedTextDecoder = new TextDecoder();
      TEXT_DECODER_THRESHOLD = 200;
    }
  });

  // node_modules/algorand-msgpack/dist.es5+esm/ExtData.mjs
  var ExtData;
  var init_ExtData = __esm({
    "node_modules/algorand-msgpack/dist.es5+esm/ExtData.mjs"() {
      ExtData = /** @class */
      /* @__PURE__ */ (function() {
        function ExtData2(type, data) {
          this.type = type;
          this.data = data;
        }
        return ExtData2;
      })();
    }
  });

  // node_modules/algorand-msgpack/dist.es5+esm/DecodeError.mjs
  var __extends, DecodeError;
  var init_DecodeError = __esm({
    "node_modules/algorand-msgpack/dist.es5+esm/DecodeError.mjs"() {
      __extends = /* @__PURE__ */ (function() {
        var extendStatics = function(d2, b) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b2) {
            d3.__proto__ = b2;
          } || function(d3, b2) {
            for (var p2 in b2) if (Object.prototype.hasOwnProperty.call(b2, p2)) d3[p2] = b2[p2];
          };
          return extendStatics(d2, b);
        };
        return function(d2, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d2, b);
          function __() {
            this.constructor = d2;
          }
          d2.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      })();
      DecodeError = /** @class */
      (function(_super) {
        __extends(DecodeError2, _super);
        function DecodeError2(message) {
          var _this = _super.call(this, message) || this;
          var proto = Object.create(DecodeError2.prototype);
          Object.setPrototypeOf(_this, proto);
          Object.defineProperty(_this, "name", {
            configurable: true,
            enumerable: false,
            value: DecodeError2.name
          });
          return _this;
        }
        return DecodeError2;
      })(Error);
    }
  });

  // node_modules/algorand-msgpack/dist.es5+esm/utils/int.mjs
  function setUint64(view, offset, value) {
    var high = value / 4294967296;
    var low = value;
    view.setUint32(offset, high);
    view.setUint32(offset + 4, low);
  }
  function setInt64(view, offset, value) {
    var high = Math.floor(value / 4294967296);
    var low = value;
    view.setUint32(offset, high);
    view.setUint32(offset + 4, low);
  }
  function getInt64(view, offset, mode) {
    if (mode === IntMode.UNSAFE_NUMBER || mode === IntMode.SAFE_NUMBER) {
      var high = view.getInt32(offset);
      var low = view.getUint32(offset + 4);
      if (mode === IntMode.SAFE_NUMBER && (high < Math.floor(Number.MIN_SAFE_INTEGER / 4294967296) || high === Math.floor(Number.MIN_SAFE_INTEGER / 4294967296) && low === 0 || high > (Number.MAX_SAFE_INTEGER - low) / 4294967296)) {
        var hexValue = "".concat(high < 0 ? "-" : "", "0x").concat(Math.abs(high).toString(16)).concat(low.toString(16).padStart(8, "0"));
        throw new Error("Mode is IntMode.SAFE_NUMBER and value is not a safe integer: ".concat(hexValue));
      }
      return high * 4294967296 + low;
    }
    var value = view.getBigInt64(offset);
    if (mode === IntMode.MIXED && value >= Number.MIN_SAFE_INTEGER && value <= Number.MAX_SAFE_INTEGER) {
      return Number(value);
    }
    return value;
  }
  function getUint64(view, offset, mode) {
    if (mode === IntMode.UNSAFE_NUMBER || mode === IntMode.SAFE_NUMBER) {
      var high = view.getUint32(offset);
      var low = view.getUint32(offset + 4);
      if (mode === IntMode.SAFE_NUMBER && high > (Number.MAX_SAFE_INTEGER - low) / 4294967296) {
        var hexValue = "0x".concat(high.toString(16)).concat(low.toString(16).padStart(8, "0"));
        throw new Error("Mode is IntMode.SAFE_NUMBER and value is not a safe integer: ".concat(hexValue));
      }
      return high * 4294967296 + low;
    }
    var value = view.getBigUint64(offset);
    if (mode === IntMode.MIXED && value <= Number.MAX_SAFE_INTEGER) {
      return Number(value);
    }
    return value;
  }
  function convertSafeIntegerToMode(value, mode) {
    if (mode === IntMode.BIGINT) {
      return BigInt(value);
    }
    return Number(value);
  }
  var IntMode, UINT32_MAX;
  var init_int = __esm({
    "node_modules/algorand-msgpack/dist.es5+esm/utils/int.mjs"() {
      (function(IntMode2) {
        IntMode2[IntMode2["UNSAFE_NUMBER"] = 0] = "UNSAFE_NUMBER";
        IntMode2[IntMode2["SAFE_NUMBER"] = 1] = "SAFE_NUMBER";
        IntMode2[IntMode2["AS_ENCODED"] = 2] = "AS_ENCODED";
        IntMode2[IntMode2["MIXED"] = 3] = "MIXED";
        IntMode2[IntMode2["BIGINT"] = 4] = "BIGINT";
      })(IntMode || (IntMode = {}));
      UINT32_MAX = 4294967295;
    }
  });

  // node_modules/algorand-msgpack/dist.es5+esm/timestamp.mjs
  function encodeTimeSpecToTimestamp(_a) {
    var sec = _a.sec, nsec = _a.nsec;
    if (sec >= 0 && nsec >= 0 && sec <= TIMESTAMP64_MAX_SEC) {
      if (nsec === 0 && sec <= TIMESTAMP32_MAX_SEC) {
        var rv = new Uint8Array(4);
        var view = new DataView(rv.buffer);
        view.setUint32(0, sec);
        return rv;
      } else {
        var secHigh = sec / 4294967296;
        var secLow = sec & 4294967295;
        var rv = new Uint8Array(8);
        var view = new DataView(rv.buffer);
        view.setUint32(0, nsec << 2 | secHigh & 3);
        view.setUint32(4, secLow);
        return rv;
      }
    } else {
      var rv = new Uint8Array(12);
      var view = new DataView(rv.buffer);
      view.setUint32(0, nsec);
      setInt64(view, 4, sec);
      return rv;
    }
  }
  function encodeDateToTimeSpec(date) {
    var msec = date.getTime();
    var sec = Math.floor(msec / 1e3);
    var nsec = (msec - sec * 1e3) * 1e6;
    var nsecInSec = Math.floor(nsec / 1e9);
    return {
      sec: sec + nsecInSec,
      nsec: nsec - nsecInSec * 1e9
    };
  }
  function encodeTimestampExtension(object) {
    if (object instanceof Date) {
      var timeSpec = encodeDateToTimeSpec(object);
      return encodeTimeSpecToTimestamp(timeSpec);
    } else {
      return null;
    }
  }
  function decodeTimestampToTimeSpec(data) {
    var view = new DataView(data.buffer, data.byteOffset, data.byteLength);
    switch (data.byteLength) {
      case 4: {
        var sec = view.getUint32(0);
        var nsec = 0;
        return { sec, nsec };
      }
      case 8: {
        var nsec30AndSecHigh2 = view.getUint32(0);
        var secLow32 = view.getUint32(4);
        var sec = (nsec30AndSecHigh2 & 3) * 4294967296 + secLow32;
        var nsec = nsec30AndSecHigh2 >>> 2;
        return { sec, nsec };
      }
      case 12: {
        var sec = getInt64(view, 4, IntMode.UNSAFE_NUMBER);
        var nsec = view.getUint32(0);
        return { sec, nsec };
      }
      default:
        throw new DecodeError("Unrecognized data size for timestamp (expected 4, 8, or 12): ".concat(data.length));
    }
  }
  function decodeTimestampExtension(data) {
    var timeSpec = decodeTimestampToTimeSpec(data);
    return new Date(timeSpec.sec * 1e3 + timeSpec.nsec / 1e6);
  }
  var EXT_TIMESTAMP, TIMESTAMP32_MAX_SEC, TIMESTAMP64_MAX_SEC, timestampExtension;
  var init_timestamp = __esm({
    "node_modules/algorand-msgpack/dist.es5+esm/timestamp.mjs"() {
      init_DecodeError();
      init_int();
      EXT_TIMESTAMP = -1;
      TIMESTAMP32_MAX_SEC = 4294967296 - 1;
      TIMESTAMP64_MAX_SEC = 17179869184 - 1;
      timestampExtension = {
        type: EXT_TIMESTAMP,
        encode: encodeTimestampExtension,
        decode: decodeTimestampExtension
      };
    }
  });

  // node_modules/algorand-msgpack/dist.es5+esm/ExtensionCodec.mjs
  var ExtensionCodec;
  var init_ExtensionCodec = __esm({
    "node_modules/algorand-msgpack/dist.es5+esm/ExtensionCodec.mjs"() {
      init_ExtData();
      init_timestamp();
      ExtensionCodec = /** @class */
      (function() {
        function ExtensionCodec2() {
          this.builtInEncoders = [];
          this.builtInDecoders = [];
          this.encoders = [];
          this.decoders = [];
          this.register(timestampExtension);
        }
        ExtensionCodec2.prototype.register = function(_a) {
          var type = _a.type, encode2 = _a.encode, decode3 = _a.decode;
          if (type >= 0) {
            this.encoders[type] = encode2;
            this.decoders[type] = decode3;
          } else {
            var index = 1 + type;
            this.builtInEncoders[index] = encode2;
            this.builtInDecoders[index] = decode3;
          }
        };
        ExtensionCodec2.prototype.tryToEncode = function(object, context) {
          for (var i = 0; i < this.builtInEncoders.length; i++) {
            var encodeExt = this.builtInEncoders[i];
            if (encodeExt != null) {
              var data = encodeExt(object, context);
              if (data != null) {
                var type = -1 - i;
                return new ExtData(type, data);
              }
            }
          }
          for (var i = 0; i < this.encoders.length; i++) {
            var encodeExt = this.encoders[i];
            if (encodeExt != null) {
              var data = encodeExt(object, context);
              if (data != null) {
                var type = i;
                return new ExtData(type, data);
              }
            }
          }
          if (object instanceof ExtData) {
            return object;
          }
          return null;
        };
        ExtensionCodec2.prototype.decode = function(data, type, context) {
          var decodeExt = type < 0 ? this.builtInDecoders[-1 - type] : this.decoders[type];
          if (decodeExt) {
            return decodeExt(data, type, context);
          } else {
            return new ExtData(type, data);
          }
        };
        ExtensionCodec2.defaultCodec = new ExtensionCodec2();
        return ExtensionCodec2;
      })();
    }
  });

  // node_modules/algorand-msgpack/dist.es5+esm/utils/typedArrays.mjs
  function ensureUint8Array(buffer) {
    if (buffer instanceof Uint8Array) {
      return buffer;
    } else if (ArrayBuffer.isView(buffer)) {
      return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
    } else if (buffer instanceof ArrayBuffer) {
      return new Uint8Array(buffer);
    } else {
      return Uint8Array.from(buffer);
    }
  }
  function createDataView(buffer) {
    if (buffer instanceof ArrayBuffer) {
      return new DataView(buffer);
    }
    var bufferView = ensureUint8Array(buffer);
    return new DataView(bufferView.buffer, bufferView.byteOffset, bufferView.byteLength);
  }
  function compareUint8Arrays(a, b) {
    var length = Math.min(a.length, b.length);
    for (var i = 0; i < length; i++) {
      var diff = a[i] - b[i];
      if (diff !== 0) {
        return diff;
      }
    }
    return a.length - b.length;
  }
  var RawBinaryString;
  var init_typedArrays = __esm({
    "node_modules/algorand-msgpack/dist.es5+esm/utils/typedArrays.mjs"() {
      RawBinaryString = /** @class */
      /* @__PURE__ */ (function() {
        function RawBinaryString2(rawBinaryValue) {
          this.rawBinaryValue = rawBinaryValue;
          if (!ArrayBuffer.isView(rawBinaryValue)) {
            throw new TypeError("RawBinaryString: rawBinaryValue must be an ArrayBufferView");
          }
        }
        return RawBinaryString2;
      })();
    }
  });

  // node_modules/algorand-msgpack/dist.es5+esm/Encoder.mjs
  var DEFAULT_MAX_DEPTH, DEFAULT_INITIAL_BUFFER_SIZE, Encoder;
  var init_Encoder = __esm({
    "node_modules/algorand-msgpack/dist.es5+esm/Encoder.mjs"() {
      init_utf8();
      init_ExtensionCodec();
      init_int();
      init_typedArrays();
      DEFAULT_MAX_DEPTH = 100;
      DEFAULT_INITIAL_BUFFER_SIZE = 2048;
      Encoder = /** @class */
      (function() {
        function Encoder2(options) {
          var _a, _b, _c, _d, _e, _f, _g, _h;
          this.extensionCodec = (_a = options === null || options === void 0 ? void 0 : options.extensionCodec) !== null && _a !== void 0 ? _a : ExtensionCodec.defaultCodec;
          this.context = options === null || options === void 0 ? void 0 : options.context;
          this.forceBigIntToInt64 = (_b = options === null || options === void 0 ? void 0 : options.forceBigIntToInt64) !== null && _b !== void 0 ? _b : false;
          this.maxDepth = (_c = options === null || options === void 0 ? void 0 : options.maxDepth) !== null && _c !== void 0 ? _c : DEFAULT_MAX_DEPTH;
          this.initialBufferSize = (_d = options === null || options === void 0 ? void 0 : options.initialBufferSize) !== null && _d !== void 0 ? _d : DEFAULT_INITIAL_BUFFER_SIZE;
          this.sortKeys = (_e = options === null || options === void 0 ? void 0 : options.sortKeys) !== null && _e !== void 0 ? _e : false;
          this.forceFloat32 = (_f = options === null || options === void 0 ? void 0 : options.forceFloat32) !== null && _f !== void 0 ? _f : false;
          this.ignoreUndefined = (_g = options === null || options === void 0 ? void 0 : options.ignoreUndefined) !== null && _g !== void 0 ? _g : false;
          this.forceIntegerToFloat = (_h = options === null || options === void 0 ? void 0 : options.forceIntegerToFloat) !== null && _h !== void 0 ? _h : false;
          this.pos = 0;
          this.view = new DataView(new ArrayBuffer(this.initialBufferSize));
          this.bytes = new Uint8Array(this.view.buffer);
        }
        Encoder2.prototype.reinitializeState = function() {
          this.pos = 0;
        };
        Encoder2.prototype.encodeSharedRef = function(object) {
          this.reinitializeState();
          this.doEncode(object, 1);
          return this.bytes.subarray(0, this.pos);
        };
        Encoder2.prototype.encode = function(object) {
          this.reinitializeState();
          this.doEncode(object, 1);
          return this.bytes.slice(0, this.pos);
        };
        Encoder2.prototype.doEncode = function(object, depth) {
          if (depth > this.maxDepth) {
            throw new Error("Too deep objects in depth ".concat(depth));
          }
          if (object == null) {
            this.encodeNil();
          } else if (typeof object === "boolean") {
            this.encodeBoolean(object);
          } else if (typeof object === "number") {
            this.encodeNumber(object);
          } else if (typeof object === "string") {
            this.encodeString(object);
          } else {
            this.encodeObject(object, depth);
          }
        };
        Encoder2.prototype.ensureBufferSizeToWrite = function(sizeToWrite) {
          var requiredSize = this.pos + sizeToWrite;
          if (this.view.byteLength < requiredSize) {
            this.resizeBuffer(requiredSize * 2);
          }
        };
        Encoder2.prototype.resizeBuffer = function(newSize) {
          var newBuffer = new ArrayBuffer(newSize);
          var newBytes = new Uint8Array(newBuffer);
          var newView = new DataView(newBuffer);
          newBytes.set(this.bytes);
          this.view = newView;
          this.bytes = newBytes;
        };
        Encoder2.prototype.encodeNil = function() {
          this.writeU8(192);
        };
        Encoder2.prototype.encodeBoolean = function(object) {
          if (object === false) {
            this.writeU8(194);
          } else {
            this.writeU8(195);
          }
        };
        Encoder2.prototype.encodeNumber = function(object) {
          if (!this.forceIntegerToFloat && Number.isSafeInteger(object)) {
            if (object >= 0) {
              if (object < 128) {
                this.writeU8(object);
              } else if (object < 256) {
                this.writeU8(204);
                this.writeU8(object);
              } else if (object < 65536) {
                this.writeU8(205);
                this.writeU16(object);
              } else if (object < 4294967296) {
                this.writeU8(206);
                this.writeU32(object);
              } else {
                this.writeU8(207);
                this.writeU64(object);
              }
            } else {
              if (object >= -32) {
                this.writeU8(224 | object + 32);
              } else if (object >= -128) {
                this.writeU8(208);
                this.writeI8(object);
              } else if (object >= -32768) {
                this.writeU8(209);
                this.writeI16(object);
              } else if (object >= -2147483648) {
                this.writeU8(210);
                this.writeI32(object);
              } else {
                this.writeU8(211);
                this.writeI64(object);
              }
            }
          } else {
            this.encodeNumberAsFloat(object);
          }
        };
        Encoder2.prototype.encodeNumberAsFloat = function(object) {
          if (this.forceFloat32) {
            this.writeU8(202);
            this.writeF32(object);
          } else {
            this.writeU8(203);
            this.writeF64(object);
          }
        };
        Encoder2.prototype.encodeBigInt = function(object) {
          if (this.forceBigIntToInt64) {
            this.encodeBigIntAsInt64(object);
          } else if (object >= 0) {
            if (object < 4294967296 || this.forceIntegerToFloat) {
              this.encodeNumber(Number(object));
            } else if (object < BigInt("0x10000000000000000")) {
              this.encodeBigIntAsInt64(object);
            } else {
              throw new Error("Bigint is too large for uint64: ".concat(object));
            }
          } else {
            if (object >= -2147483648 || this.forceIntegerToFloat) {
              this.encodeNumber(Number(object));
            } else if (object >= BigInt(-1) * BigInt("0x8000000000000000")) {
              this.encodeBigIntAsInt64(object);
            } else {
              throw new Error("Bigint is too small for int64: ".concat(object));
            }
          }
        };
        Encoder2.prototype.encodeBigIntAsInt64 = function(object) {
          if (object >= BigInt(0)) {
            this.writeU8(207);
            this.writeBigUint64(object);
          } else {
            this.writeU8(211);
            this.writeBigInt64(object);
          }
        };
        Encoder2.prototype.writeStringHeader = function(byteLength) {
          if (byteLength < 32) {
            this.writeU8(160 + byteLength);
          } else if (byteLength < 256) {
            this.writeU8(217);
            this.writeU8(byteLength);
          } else if (byteLength < 65536) {
            this.writeU8(218);
            this.writeU16(byteLength);
          } else if (byteLength < 4294967296) {
            this.writeU8(219);
            this.writeU32(byteLength);
          } else {
            throw new Error("Too long string: ".concat(byteLength, " bytes in UTF-8"));
          }
        };
        Encoder2.prototype.encodeString = function(object) {
          var maxHeaderSize = 1 + 4;
          var byteLength = utf8Count(object);
          this.ensureBufferSizeToWrite(maxHeaderSize + byteLength);
          this.writeStringHeader(byteLength);
          utf8Encode(object, this.bytes, this.pos);
          this.pos += byteLength;
        };
        Encoder2.prototype.encodeObject = function(object, depth) {
          var ext = this.extensionCodec.tryToEncode(object, this.context);
          if (ext != null) {
            this.encodeExtension(ext);
          } else if (Array.isArray(object)) {
            this.encodeArray(object, depth);
          } else if (ArrayBuffer.isView(object)) {
            this.encodeBinary(object);
          } else if (object instanceof RawBinaryString) {
            this.encodeBinaryAsString(object);
          } else if (typeof object === "bigint") {
            this.encodeBigInt(object);
          } else if (object instanceof Map) {
            this.encodeMap(object, depth);
          } else if (typeof object === "object") {
            this.encodeMapObject(object, depth);
          } else {
            throw new Error("Unrecognized object: ".concat(Object.prototype.toString.apply(object)));
          }
        };
        Encoder2.prototype.encodeBinary = function(object) {
          var size = object.byteLength;
          if (size < 256) {
            this.writeU8(196);
            this.writeU8(size);
          } else if (size < 65536) {
            this.writeU8(197);
            this.writeU16(size);
          } else if (size < 4294967296) {
            this.writeU8(198);
            this.writeU32(size);
          } else {
            throw new Error("Too large binary: ".concat(size));
          }
          var bytes = ensureUint8Array(object);
          this.writeU8a(bytes);
        };
        Encoder2.prototype.encodeBinaryAsString = function(binaryString) {
          var object = binaryString.rawBinaryValue;
          this.writeStringHeader(object.byteLength);
          var bytes = ensureUint8Array(object);
          this.writeU8a(bytes);
        };
        Encoder2.prototype.encodeArray = function(object, depth) {
          var size = object.length;
          if (size < 16) {
            this.writeU8(144 + size);
          } else if (size < 65536) {
            this.writeU8(220);
            this.writeU16(size);
          } else if (size < 4294967296) {
            this.writeU8(221);
            this.writeU32(size);
          } else {
            throw new Error("Too large array: ".concat(size));
          }
          for (var _i = 0, object_1 = object; _i < object_1.length; _i++) {
            var item = object_1[_i];
            this.doEncode(item, depth + 1);
          }
        };
        Encoder2.prototype.countWithoutUndefined = function(map, keys) {
          var count = 0;
          for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (map.get(key) !== void 0) {
              count++;
            }
          }
          return count;
        };
        Encoder2.prototype.sortMapKeys = function(keys) {
          var numericKeys = [];
          var stringKeys = [];
          var rawStringKeys = [];
          var binaryKeys = [];
          for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
            var key = keys_2[_i];
            if (typeof key === "number") {
              if (isNaN(key)) {
                throw new Error("Cannot sort map keys with NaN value");
              }
              numericKeys.push(key);
            } else if (typeof key === "bigint") {
              numericKeys.push(key);
            } else if (typeof key === "string") {
              stringKeys.push(key);
            } else if (ArrayBuffer.isView(key)) {
              binaryKeys.push(ensureUint8Array(key));
            } else if (key instanceof RawBinaryString) {
              rawStringKeys.push(key);
            } else {
              throw new Error("Unsupported map key type: ".concat(Object.prototype.toString.apply(key)));
            }
          }
          numericKeys.sort(function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0;
          });
          stringKeys.sort();
          rawStringKeys.sort(function(a, b) {
            return compareUint8Arrays(ensureUint8Array(a.rawBinaryValue), ensureUint8Array(b.rawBinaryValue));
          });
          binaryKeys.sort(compareUint8Arrays);
          return [].concat(numericKeys, stringKeys, rawStringKeys, binaryKeys);
        };
        Encoder2.prototype.encodeMapObject = function(object, depth) {
          this.encodeMap(new Map(Object.entries(object)), depth);
        };
        Encoder2.prototype.encodeMap = function(map, depth) {
          var keys = Array.from(map.keys());
          if (this.sortKeys) {
            keys = this.sortMapKeys(keys);
          }
          var size = this.ignoreUndefined ? this.countWithoutUndefined(map, keys) : keys.length;
          if (size < 16) {
            this.writeU8(128 + size);
          } else if (size < 65536) {
            this.writeU8(222);
            this.writeU16(size);
          } else if (size < 4294967296) {
            this.writeU8(223);
            this.writeU32(size);
          } else {
            throw new Error("Too large map object: ".concat(size));
          }
          for (var _i = 0, keys_3 = keys; _i < keys_3.length; _i++) {
            var key = keys_3[_i];
            var value = map.get(key);
            if (!(this.ignoreUndefined && value === void 0)) {
              if (typeof key === "string") {
                this.encodeString(key);
              } else if (typeof key === "number") {
                this.encodeNumber(key);
              } else if (typeof key === "bigint") {
                this.encodeBigInt(key);
              } else if (ArrayBuffer.isView(key)) {
                this.encodeBinary(key);
              } else if (key instanceof RawBinaryString) {
                this.encodeBinaryAsString(key);
              } else {
                throw new Error("Unsupported map key type: ".concat(Object.prototype.toString.apply(key)));
              }
              this.doEncode(value, depth + 1);
            }
          }
        };
        Encoder2.prototype.encodeExtension = function(ext) {
          var size = ext.data.length;
          if (size === 1) {
            this.writeU8(212);
          } else if (size === 2) {
            this.writeU8(213);
          } else if (size === 4) {
            this.writeU8(214);
          } else if (size === 8) {
            this.writeU8(215);
          } else if (size === 16) {
            this.writeU8(216);
          } else if (size < 256) {
            this.writeU8(199);
            this.writeU8(size);
          } else if (size < 65536) {
            this.writeU8(200);
            this.writeU16(size);
          } else if (size < 4294967296) {
            this.writeU8(201);
            this.writeU32(size);
          } else {
            throw new Error("Too large extension object: ".concat(size));
          }
          this.writeI8(ext.type);
          this.writeU8a(ext.data);
        };
        Encoder2.prototype.writeU8 = function(value) {
          this.ensureBufferSizeToWrite(1);
          this.view.setUint8(this.pos, value);
          this.pos++;
        };
        Encoder2.prototype.writeU8a = function(values) {
          var size = values.length;
          this.ensureBufferSizeToWrite(size);
          this.bytes.set(values, this.pos);
          this.pos += size;
        };
        Encoder2.prototype.writeI8 = function(value) {
          this.ensureBufferSizeToWrite(1);
          this.view.setInt8(this.pos, value);
          this.pos++;
        };
        Encoder2.prototype.writeU16 = function(value) {
          this.ensureBufferSizeToWrite(2);
          this.view.setUint16(this.pos, value);
          this.pos += 2;
        };
        Encoder2.prototype.writeI16 = function(value) {
          this.ensureBufferSizeToWrite(2);
          this.view.setInt16(this.pos, value);
          this.pos += 2;
        };
        Encoder2.prototype.writeU32 = function(value) {
          this.ensureBufferSizeToWrite(4);
          this.view.setUint32(this.pos, value);
          this.pos += 4;
        };
        Encoder2.prototype.writeI32 = function(value) {
          this.ensureBufferSizeToWrite(4);
          this.view.setInt32(this.pos, value);
          this.pos += 4;
        };
        Encoder2.prototype.writeF32 = function(value) {
          this.ensureBufferSizeToWrite(4);
          this.view.setFloat32(this.pos, value);
          this.pos += 4;
        };
        Encoder2.prototype.writeF64 = function(value) {
          this.ensureBufferSizeToWrite(8);
          this.view.setFloat64(this.pos, value);
          this.pos += 8;
        };
        Encoder2.prototype.writeU64 = function(value) {
          this.ensureBufferSizeToWrite(8);
          setUint64(this.view, this.pos, value);
          this.pos += 8;
        };
        Encoder2.prototype.writeI64 = function(value) {
          this.ensureBufferSizeToWrite(8);
          setInt64(this.view, this.pos, value);
          this.pos += 8;
        };
        Encoder2.prototype.writeBigUint64 = function(value) {
          this.ensureBufferSizeToWrite(8);
          this.view.setBigUint64(this.pos, value);
          this.pos += 8;
        };
        Encoder2.prototype.writeBigInt64 = function(value) {
          this.ensureBufferSizeToWrite(8);
          this.view.setBigInt64(this.pos, value);
          this.pos += 8;
        };
        return Encoder2;
      })();
    }
  });

  // node_modules/algorand-msgpack/dist.es5+esm/encode.mjs
  function encode(value, options) {
    var encoder = new Encoder(options);
    return encoder.encodeSharedRef(value);
  }
  var init_encode = __esm({
    "node_modules/algorand-msgpack/dist.es5+esm/encode.mjs"() {
      init_Encoder();
    }
  });

  // node_modules/algorand-msgpack/dist.es5+esm/utils/prettyByte.mjs
  function prettyByte(byte) {
    return "".concat(byte < 0 ? "-" : "", "0x").concat(Math.abs(byte).toString(16).padStart(2, "0"));
  }
  var init_prettyByte = __esm({
    "node_modules/algorand-msgpack/dist.es5+esm/utils/prettyByte.mjs"() {
    }
  });

  // node_modules/algorand-msgpack/dist.es5+esm/CachedKeyDecoder.mjs
  var DEFAULT_MAX_KEY_LENGTH, DEFAULT_MAX_LENGTH_PER_KEY, CachedKeyDecoder;
  var init_CachedKeyDecoder = __esm({
    "node_modules/algorand-msgpack/dist.es5+esm/CachedKeyDecoder.mjs"() {
      init_utf8();
      DEFAULT_MAX_KEY_LENGTH = 16;
      DEFAULT_MAX_LENGTH_PER_KEY = 16;
      CachedKeyDecoder = /** @class */
      (function() {
        function CachedKeyDecoder2(maxKeyLength, maxLengthPerKey) {
          if (maxKeyLength === void 0) {
            maxKeyLength = DEFAULT_MAX_KEY_LENGTH;
          }
          if (maxLengthPerKey === void 0) {
            maxLengthPerKey = DEFAULT_MAX_LENGTH_PER_KEY;
          }
          this.maxKeyLength = maxKeyLength;
          this.maxLengthPerKey = maxLengthPerKey;
          this.hit = 0;
          this.miss = 0;
          this.caches = [];
          for (var i = 0; i < this.maxKeyLength; i++) {
            this.caches.push([]);
          }
        }
        CachedKeyDecoder2.prototype.canBeCached = function(byteLength) {
          return byteLength > 0 && byteLength <= this.maxKeyLength;
        };
        CachedKeyDecoder2.prototype.find = function(bytes, inputOffset, byteLength) {
          var records = this.caches[byteLength - 1];
          FIND_CHUNK: for (var _i = 0, records_1 = records; _i < records_1.length; _i++) {
            var record = records_1[_i];
            var recordBytes = record.bytes;
            for (var j = 0; j < byteLength; j++) {
              if (recordBytes[j] !== bytes[inputOffset + j]) {
                continue FIND_CHUNK;
              }
            }
            return record.str;
          }
          return null;
        };
        CachedKeyDecoder2.prototype.store = function(bytes, value) {
          var records = this.caches[bytes.length - 1];
          var record = { bytes, str: value };
          if (records.length >= this.maxLengthPerKey) {
            records[Math.random() * records.length | 0] = record;
          } else {
            records.push(record);
          }
        };
        CachedKeyDecoder2.prototype.decode = function(bytes, inputOffset, byteLength) {
          var cachedValue = this.find(bytes, inputOffset, byteLength);
          if (cachedValue != null) {
            this.hit++;
            return cachedValue;
          }
          this.miss++;
          var str = utf8DecodeJs(bytes, inputOffset, byteLength);
          var slicedCopyOfBytes = Uint8Array.prototype.slice.call(bytes, inputOffset, inputOffset + byteLength);
          this.store(slicedCopyOfBytes, str);
          return str;
        };
        return CachedKeyDecoder2;
      })();
    }
  });

  // node_modules/algorand-msgpack/dist.es5+esm/Decoder.mjs
  function isValidMapKeyType(key, useMap, supportObjectNumberKeys) {
    if (useMap) {
      return typeof key === "string" || typeof key === "number" || typeof key === "bigint" || key instanceof Uint8Array || key instanceof RawBinaryString;
    }
    return typeof key === "string" || supportObjectNumberKeys && typeof key === "number";
  }
  var __awaiter, __generator, __asyncValues, __await, __asyncGenerator, STATE_ARRAY, STATE_MAP_KEY, STATE_MAP_VALUE, StackPool, HEAD_BYTE_REQUIRED, EMPTY_VIEW, EMPTY_BYTES, DataViewIndexOutOfBoundsError, MORE_DATA, sharedCachedKeyDecoder, Decoder;
  var init_Decoder = __esm({
    "node_modules/algorand-msgpack/dist.es5+esm/Decoder.mjs"() {
      init_prettyByte();
      init_ExtensionCodec();
      init_int();
      init_utf8();
      init_typedArrays();
      init_CachedKeyDecoder();
      init_DecodeError();
      __awaiter = function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      __generator = function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1) throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f) throw new TypeError("Generator is already executing.");
          while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2]) _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
          if (op[0] & 5) throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      __asyncValues = function(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i);
        function verb(n) {
          i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
              v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
          };
        }
        function settle(resolve, reject, d2, v) {
          Promise.resolve(v).then(function(v2) {
            resolve({ value: v2, done: d2 });
          }, reject);
        }
      };
      __await = function(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
      };
      __asyncGenerator = function(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i;
        function verb(n) {
          if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
              q.push([n, v, a, b]) > 1 || resume(n, v);
            });
          };
        }
        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }
        function step(r) {
          r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }
        function fulfill(value) {
          resume("next", value);
        }
        function reject(value) {
          resume("throw", value);
        }
        function settle(f, v) {
          if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
        }
      };
      STATE_ARRAY = "array";
      STATE_MAP_KEY = "map_key";
      STATE_MAP_VALUE = "map_value";
      StackPool = /** @class */
      (function() {
        function StackPool2(useMap) {
          this.useMap = useMap;
          this.stack = [];
          this.stackHeadPosition = -1;
        }
        Object.defineProperty(StackPool2.prototype, "length", {
          get: function() {
            return this.stackHeadPosition + 1;
          },
          enumerable: false,
          configurable: true
        });
        StackPool2.prototype.top = function() {
          return this.stack[this.stackHeadPosition];
        };
        StackPool2.prototype.pushArrayState = function(size) {
          var state = this.getUninitializedStateFromPool();
          state.type = STATE_ARRAY;
          state.position = 0;
          state.size = size;
          state.array = new Array(size);
        };
        StackPool2.prototype.pushMapState = function(size) {
          var state = this.getUninitializedStateFromPool();
          state.type = STATE_MAP_KEY;
          state.readCount = 0;
          state.size = size;
          state.map = this.useMap ? /* @__PURE__ */ new Map() : {};
        };
        StackPool2.prototype.getUninitializedStateFromPool = function() {
          this.stackHeadPosition++;
          if (this.stackHeadPosition === this.stack.length) {
            var partialState = {
              type: void 0,
              size: 0,
              array: void 0,
              position: 0,
              readCount: 0,
              map: void 0,
              key: null
            };
            this.stack.push(partialState);
          }
          return this.stack[this.stackHeadPosition];
        };
        StackPool2.prototype.release = function(state) {
          var topStackState = this.stack[this.stackHeadPosition];
          if (topStackState !== state) {
            throw new Error("Invalid stack state. Released state is not on top of the stack.");
          }
          if (state.type === STATE_ARRAY) {
            var partialState = state;
            partialState.size = 0;
            partialState.array = void 0;
            partialState.position = 0;
            partialState.type = void 0;
          }
          if (state.type === STATE_MAP_KEY || state.type === STATE_MAP_VALUE) {
            var partialState = state;
            partialState.size = 0;
            partialState.map = void 0;
            partialState.readCount = 0;
            partialState.type = void 0;
          }
          this.stackHeadPosition--;
        };
        StackPool2.prototype.reset = function() {
          this.stack.length = 0;
          this.stackHeadPosition = -1;
        };
        return StackPool2;
      })();
      HEAD_BYTE_REQUIRED = -1;
      EMPTY_VIEW = new DataView(new ArrayBuffer(0));
      EMPTY_BYTES = new Uint8Array(EMPTY_VIEW.buffer);
      try {
        EMPTY_VIEW.getInt8(0);
      } catch (e) {
        if (!(e instanceof RangeError)) {
          throw new Error("This module is not supported in the current JavaScript engine because DataView does not throw RangeError on out-of-bounds access");
        }
      }
      DataViewIndexOutOfBoundsError = RangeError;
      MORE_DATA = new DataViewIndexOutOfBoundsError("Insufficient data");
      sharedCachedKeyDecoder = new CachedKeyDecoder();
      Decoder = /** @class */
      (function() {
        function Decoder2(options) {
          var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
          this.totalPos = 0;
          this.pos = 0;
          this.view = EMPTY_VIEW;
          this.bytes = EMPTY_BYTES;
          this.headByte = HEAD_BYTE_REQUIRED;
          this.extensionCodec = (_a = options === null || options === void 0 ? void 0 : options.extensionCodec) !== null && _a !== void 0 ? _a : ExtensionCodec.defaultCodec;
          this.context = options === null || options === void 0 ? void 0 : options.context;
          this.intMode = (_b = options === null || options === void 0 ? void 0 : options.intMode) !== null && _b !== void 0 ? _b : (options === null || options === void 0 ? void 0 : options.useBigInt64) ? IntMode.AS_ENCODED : IntMode.UNSAFE_NUMBER;
          this.rawBinaryStringValues = (_c = options === null || options === void 0 ? void 0 : options.rawBinaryStringValues) !== null && _c !== void 0 ? _c : false;
          this.rawBinaryStringKeys = (_d = options === null || options === void 0 ? void 0 : options.rawBinaryStringKeys) !== null && _d !== void 0 ? _d : false;
          this.useRawBinaryStringClass = (_e = options === null || options === void 0 ? void 0 : options.useRawBinaryStringClass) !== null && _e !== void 0 ? _e : false;
          this.useMap = (_f = options === null || options === void 0 ? void 0 : options.useMap) !== null && _f !== void 0 ? _f : false;
          this.supportObjectNumberKeys = (_g = options === null || options === void 0 ? void 0 : options.supportObjectNumberKeys) !== null && _g !== void 0 ? _g : false;
          this.maxStrLength = (_h = options === null || options === void 0 ? void 0 : options.maxStrLength) !== null && _h !== void 0 ? _h : UINT32_MAX;
          this.maxBinLength = (_j = options === null || options === void 0 ? void 0 : options.maxBinLength) !== null && _j !== void 0 ? _j : UINT32_MAX;
          this.maxArrayLength = (_k = options === null || options === void 0 ? void 0 : options.maxArrayLength) !== null && _k !== void 0 ? _k : UINT32_MAX;
          this.maxMapLength = (_l = options === null || options === void 0 ? void 0 : options.maxMapLength) !== null && _l !== void 0 ? _l : UINT32_MAX;
          this.maxExtLength = (_m = options === null || options === void 0 ? void 0 : options.maxExtLength) !== null && _m !== void 0 ? _m : UINT32_MAX;
          this.keyDecoder = (options === null || options === void 0 ? void 0 : options.keyDecoder) !== void 0 ? options.keyDecoder : sharedCachedKeyDecoder;
          if (this.rawBinaryStringKeys && !this.useMap) {
            throw new Error("rawBinaryStringKeys is only supported when useMap is true");
          }
          this.stack = new StackPool(this.useMap);
        }
        Decoder2.prototype.reinitializeState = function() {
          this.totalPos = 0;
          this.headByte = HEAD_BYTE_REQUIRED;
          this.stack.reset();
        };
        Decoder2.prototype.setBuffer = function(buffer) {
          this.bytes = ensureUint8Array(buffer);
          this.view = createDataView(this.bytes);
          this.pos = 0;
        };
        Decoder2.prototype.appendBuffer = function(buffer) {
          if (this.headByte === HEAD_BYTE_REQUIRED && !this.hasRemaining(1)) {
            this.setBuffer(buffer);
          } else {
            var remainingData = this.bytes.subarray(this.pos);
            var newData = ensureUint8Array(buffer);
            var newBuffer = new Uint8Array(remainingData.length + newData.length);
            newBuffer.set(remainingData);
            newBuffer.set(newData, remainingData.length);
            this.setBuffer(newBuffer);
          }
        };
        Decoder2.prototype.hasRemaining = function(size) {
          return this.view.byteLength - this.pos >= size;
        };
        Decoder2.prototype.createExtraByteError = function(posToShow) {
          var _a = this, view = _a.view, pos = _a.pos;
          return new RangeError("Extra ".concat(view.byteLength - pos, " of ").concat(view.byteLength, " byte(s) found at buffer[").concat(posToShow, "]"));
        };
        Decoder2.prototype.decode = function(buffer) {
          this.reinitializeState();
          this.setBuffer(buffer);
          var object = this.doDecodeSync();
          if (this.hasRemaining(1)) {
            throw this.createExtraByteError(this.pos);
          }
          return object;
        };
        Decoder2.prototype.decodeMulti = function(buffer) {
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                this.reinitializeState();
                this.setBuffer(buffer);
                _a.label = 1;
              case 1:
                if (!this.hasRemaining(1)) return [3, 3];
                return [4, this.doDecodeSync()];
              case 2:
                _a.sent();
                return [3, 1];
              case 3:
                return [
                  2
                  /*return*/
                ];
            }
          });
        };
        Decoder2.prototype.decodeAsync = function(stream) {
          var _a, stream_1, stream_1_1;
          var _b, e_1, _c, _d;
          return __awaiter(this, void 0, void 0, function() {
            var decoded, object, buffer, e_1_1, _e, headByte, pos, totalPos;
            return __generator(this, function(_f) {
              switch (_f.label) {
                case 0:
                  decoded = false;
                  _f.label = 1;
                case 1:
                  _f.trys.push([1, 6, 7, 12]);
                  _a = true, stream_1 = __asyncValues(stream);
                  _f.label = 2;
                case 2:
                  return [4, stream_1.next()];
                case 3:
                  if (!(stream_1_1 = _f.sent(), _b = stream_1_1.done, !_b)) return [3, 5];
                  _d = stream_1_1.value;
                  _a = false;
                  buffer = _d;
                  if (decoded) {
                    throw this.createExtraByteError(this.totalPos);
                  }
                  this.appendBuffer(buffer);
                  try {
                    object = this.doDecodeSync();
                    decoded = true;
                  } catch (e) {
                    if (!(e instanceof DataViewIndexOutOfBoundsError)) {
                      throw e;
                    }
                  }
                  this.totalPos += this.pos;
                  _f.label = 4;
                case 4:
                  _a = true;
                  return [3, 2];
                case 5:
                  return [3, 12];
                case 6:
                  e_1_1 = _f.sent();
                  e_1 = { error: e_1_1 };
                  return [3, 12];
                case 7:
                  _f.trys.push([7, , 10, 11]);
                  if (!(!_a && !_b && (_c = stream_1.return))) return [3, 9];
                  return [4, _c.call(stream_1)];
                case 8:
                  _f.sent();
                  _f.label = 9;
                case 9:
                  return [3, 11];
                case 10:
                  if (e_1) throw e_1.error;
                  return [
                    7
                    /*endfinally*/
                  ];
                case 11:
                  return [
                    7
                    /*endfinally*/
                  ];
                case 12:
                  if (decoded) {
                    if (this.hasRemaining(1)) {
                      throw this.createExtraByteError(this.totalPos);
                    }
                    return [2, object];
                  }
                  _e = this, headByte = _e.headByte, pos = _e.pos, totalPos = _e.totalPos;
                  throw new RangeError("Insufficient data in parsing ".concat(prettyByte(headByte), " at ").concat(totalPos, " (").concat(pos, " in the current buffer)"));
              }
            });
          });
        };
        Decoder2.prototype.decodeArrayStream = function(stream) {
          return this.decodeMultiAsync(stream, true);
        };
        Decoder2.prototype.decodeStream = function(stream) {
          return this.decodeMultiAsync(stream, false);
        };
        Decoder2.prototype.decodeMultiAsync = function(stream, isArray) {
          return __asyncGenerator(this, arguments, function decodeMultiAsync_1() {
            var isArrayHeaderRequired, arrayItemsLeft, _a, stream_2, stream_2_1, buffer, e_2, e_3_1;
            var _b, e_3, _c, _d;
            return __generator(this, function(_e) {
              switch (_e.label) {
                case 0:
                  isArrayHeaderRequired = isArray;
                  arrayItemsLeft = -1;
                  _e.label = 1;
                case 1:
                  _e.trys.push([1, 13, 14, 19]);
                  _a = true, stream_2 = __asyncValues(stream);
                  _e.label = 2;
                case 2:
                  return [4, __await(stream_2.next())];
                case 3:
                  if (!(stream_2_1 = _e.sent(), _b = stream_2_1.done, !_b)) return [3, 12];
                  _d = stream_2_1.value;
                  _a = false;
                  buffer = _d;
                  if (isArray && arrayItemsLeft === 0) {
                    throw this.createExtraByteError(this.totalPos);
                  }
                  this.appendBuffer(buffer);
                  if (isArrayHeaderRequired) {
                    arrayItemsLeft = this.readArraySize();
                    isArrayHeaderRequired = false;
                    this.complete();
                  }
                  _e.label = 4;
                case 4:
                  _e.trys.push([4, 9, , 10]);
                  _e.label = 5;
                case 5:
                  if (false) return [3, 8];
                  return [4, __await(this.doDecodeSync())];
                case 6:
                  return [4, _e.sent()];
                case 7:
                  _e.sent();
                  if (--arrayItemsLeft === 0) {
                    return [3, 8];
                  }
                  return [3, 5];
                case 8:
                  return [3, 10];
                case 9:
                  e_2 = _e.sent();
                  if (!(e_2 instanceof DataViewIndexOutOfBoundsError)) {
                    throw e_2;
                  }
                  return [3, 10];
                case 10:
                  this.totalPos += this.pos;
                  _e.label = 11;
                case 11:
                  _a = true;
                  return [3, 2];
                case 12:
                  return [3, 19];
                case 13:
                  e_3_1 = _e.sent();
                  e_3 = { error: e_3_1 };
                  return [3, 19];
                case 14:
                  _e.trys.push([14, , 17, 18]);
                  if (!(!_a && !_b && (_c = stream_2.return))) return [3, 16];
                  return [4, __await(_c.call(stream_2))];
                case 15:
                  _e.sent();
                  _e.label = 16;
                case 16:
                  return [3, 18];
                case 17:
                  if (e_3) throw e_3.error;
                  return [
                    7
                    /*endfinally*/
                  ];
                case 18:
                  return [
                    7
                    /*endfinally*/
                  ];
                case 19:
                  return [
                    2
                    /*return*/
                  ];
              }
            });
          });
        };
        Decoder2.prototype.doDecodeSync = function() {
          DECODE: while (true) {
            var headByte = this.readHeadByte();
            var object = void 0;
            if (headByte >= 224) {
              object = this.convertNumber(headByte - 256);
            } else if (headByte < 192) {
              if (headByte < 128) {
                object = this.convertNumber(headByte);
              } else if (headByte < 144) {
                var size = headByte - 128;
                if (size !== 0) {
                  this.pushMapState(size);
                  this.complete();
                  continue DECODE;
                } else {
                  object = this.useMap ? /* @__PURE__ */ new Map() : {};
                }
              } else if (headByte < 160) {
                var size = headByte - 144;
                if (size !== 0) {
                  this.pushArrayState(size);
                  this.complete();
                  continue DECODE;
                } else {
                  object = [];
                }
              } else {
                var byteLength = headByte - 160;
                object = this.decodeString(byteLength, 0);
              }
            } else if (headByte === 192) {
              object = null;
            } else if (headByte === 194) {
              object = false;
            } else if (headByte === 195) {
              object = true;
            } else if (headByte === 202) {
              object = this.readF32();
            } else if (headByte === 203) {
              object = this.readF64();
            } else if (headByte === 204) {
              object = this.convertNumber(this.readU8());
            } else if (headByte === 205) {
              object = this.convertNumber(this.readU16());
            } else if (headByte === 206) {
              object = this.convertNumber(this.readU32());
            } else if (headByte === 207) {
              object = this.readU64();
            } else if (headByte === 208) {
              object = this.convertNumber(this.readI8());
            } else if (headByte === 209) {
              object = this.convertNumber(this.readI16());
            } else if (headByte === 210) {
              object = this.convertNumber(this.readI32());
            } else if (headByte === 211) {
              object = this.readI64();
            } else if (headByte === 217) {
              var byteLength = this.lookU8();
              object = this.decodeString(byteLength, 1);
            } else if (headByte === 218) {
              var byteLength = this.lookU16();
              object = this.decodeString(byteLength, 2);
            } else if (headByte === 219) {
              var byteLength = this.lookU32();
              object = this.decodeString(byteLength, 4);
            } else if (headByte === 220) {
              var size = this.readU16();
              if (size !== 0) {
                this.pushArrayState(size);
                this.complete();
                continue DECODE;
              } else {
                object = [];
              }
            } else if (headByte === 221) {
              var size = this.readU32();
              if (size !== 0) {
                this.pushArrayState(size);
                this.complete();
                continue DECODE;
              } else {
                object = [];
              }
            } else if (headByte === 222) {
              var size = this.readU16();
              if (size !== 0) {
                this.pushMapState(size);
                this.complete();
                continue DECODE;
              } else {
                object = {};
              }
            } else if (headByte === 223) {
              var size = this.readU32();
              if (size !== 0) {
                this.pushMapState(size);
                this.complete();
                continue DECODE;
              } else {
                object = {};
              }
            } else if (headByte === 196) {
              var size = this.lookU8();
              object = this.decodeBinary(size, 1);
            } else if (headByte === 197) {
              var size = this.lookU16();
              object = this.decodeBinary(size, 2);
            } else if (headByte === 198) {
              var size = this.lookU32();
              object = this.decodeBinary(size, 4);
            } else if (headByte === 212) {
              object = this.decodeExtension(1, 0);
            } else if (headByte === 213) {
              object = this.decodeExtension(2, 0);
            } else if (headByte === 214) {
              object = this.decodeExtension(4, 0);
            } else if (headByte === 215) {
              object = this.decodeExtension(8, 0);
            } else if (headByte === 216) {
              object = this.decodeExtension(16, 0);
            } else if (headByte === 199) {
              var size = this.lookU8();
              object = this.decodeExtension(size, 1);
            } else if (headByte === 200) {
              var size = this.lookU16();
              object = this.decodeExtension(size, 2);
            } else if (headByte === 201) {
              var size = this.lookU32();
              object = this.decodeExtension(size, 4);
            } else {
              throw new DecodeError("Unrecognized type byte: ".concat(prettyByte(headByte)));
            }
            this.complete();
            var stack = this.stack;
            while (stack.length > 0) {
              var state = stack.top();
              if (state.type === STATE_ARRAY) {
                state.array[state.position] = object;
                state.position++;
                if (state.position === state.size) {
                  object = state.array;
                  stack.release(state);
                } else {
                  continue DECODE;
                }
              } else if (state.type === STATE_MAP_KEY) {
                if (!isValidMapKeyType(object, this.useMap, this.supportObjectNumberKeys)) {
                  var acceptableTypes = this.useMap ? "string, number, bigint, or Uint8Array" : this.supportObjectNumberKeys ? "string or number" : "string";
                  throw new DecodeError("The type of key must be ".concat(acceptableTypes, " but got ").concat(typeof object));
                }
                if (!this.useMap && object === "__proto__") {
                  throw new DecodeError("The key __proto__ is not allowed");
                }
                state.key = object;
                state.type = STATE_MAP_VALUE;
                continue DECODE;
              } else {
                if (this.useMap) {
                  state.map.set(state.key, object);
                } else {
                  state.map[state.key] = object;
                }
                state.readCount++;
                if (state.readCount === state.size) {
                  object = state.map;
                  stack.release(state);
                } else {
                  state.key = null;
                  state.type = STATE_MAP_KEY;
                  continue DECODE;
                }
              }
            }
            return object;
          }
        };
        Decoder2.prototype.readHeadByte = function() {
          if (this.headByte === HEAD_BYTE_REQUIRED) {
            this.headByte = this.readU8();
          }
          return this.headByte;
        };
        Decoder2.prototype.complete = function() {
          this.headByte = HEAD_BYTE_REQUIRED;
        };
        Decoder2.prototype.readArraySize = function() {
          var headByte = this.readHeadByte();
          switch (headByte) {
            case 220:
              return this.readU16();
            case 221:
              return this.readU32();
            default: {
              if (headByte < 160) {
                return headByte - 144;
              } else {
                throw new DecodeError("Unrecognized array type byte: ".concat(prettyByte(headByte)));
              }
            }
          }
        };
        Decoder2.prototype.pushMapState = function(size) {
          if (size > this.maxMapLength) {
            throw new DecodeError("Max length exceeded: map length (".concat(size, ") > maxMapLengthLength (").concat(this.maxMapLength, ")"));
          }
          this.stack.pushMapState(size);
        };
        Decoder2.prototype.pushArrayState = function(size) {
          if (size > this.maxArrayLength) {
            throw new DecodeError("Max length exceeded: array length (".concat(size, ") > maxArrayLength (").concat(this.maxArrayLength, ")"));
          }
          this.stack.pushArrayState(size);
        };
        Decoder2.prototype.decodeString = function(byteLength, headerOffset) {
          if (this.stateIsMapKey() ? this.rawBinaryStringKeys : this.rawBinaryStringValues) {
            var decoded = this.decodeBinary(byteLength, headerOffset);
            if (this.useRawBinaryStringClass) {
              return new RawBinaryString(decoded);
            }
            return decoded;
          }
          return this.decodeUtf8String(byteLength, headerOffset);
        };
        Decoder2.prototype.decodeUtf8String = function(byteLength, headerOffset) {
          var _a;
          if (byteLength > this.maxStrLength) {
            throw new DecodeError("Max length exceeded: UTF-8 byte length (".concat(byteLength, ") > maxStrLength (").concat(this.maxStrLength, ")"));
          }
          if (this.bytes.byteLength < this.pos + headerOffset + byteLength) {
            throw MORE_DATA;
          }
          var offset = this.pos + headerOffset;
          var object;
          if (this.stateIsMapKey() && ((_a = this.keyDecoder) === null || _a === void 0 ? void 0 : _a.canBeCached(byteLength))) {
            object = this.keyDecoder.decode(this.bytes, offset, byteLength);
          } else {
            object = utf8Decode(this.bytes, offset, byteLength);
          }
          this.pos += headerOffset + byteLength;
          return object;
        };
        Decoder2.prototype.stateIsMapKey = function() {
          if (this.stack.length > 0) {
            var state = this.stack.top();
            return state.type === STATE_MAP_KEY;
          }
          return false;
        };
        Decoder2.prototype.decodeBinary = function(byteLength, headOffset) {
          if (byteLength > this.maxBinLength) {
            throw new DecodeError("Max length exceeded: bin length (".concat(byteLength, ") > maxBinLength (").concat(this.maxBinLength, ")"));
          }
          if (!this.hasRemaining(byteLength + headOffset)) {
            throw MORE_DATA;
          }
          var offset = this.pos + headOffset;
          var object = this.bytes.subarray(offset, offset + byteLength);
          this.pos += headOffset + byteLength;
          return object;
        };
        Decoder2.prototype.decodeExtension = function(size, headOffset) {
          if (size > this.maxExtLength) {
            throw new DecodeError("Max length exceeded: ext length (".concat(size, ") > maxExtLength (").concat(this.maxExtLength, ")"));
          }
          var extType = this.view.getInt8(this.pos + headOffset);
          var data = this.decodeBinary(
            size,
            headOffset + 1
            /* extType */
          );
          return this.extensionCodec.decode(data, extType, this.context);
        };
        Decoder2.prototype.convertNumber = function(value) {
          return convertSafeIntegerToMode(value, this.intMode);
        };
        Decoder2.prototype.lookU8 = function() {
          return this.view.getUint8(this.pos);
        };
        Decoder2.prototype.lookU16 = function() {
          return this.view.getUint16(this.pos);
        };
        Decoder2.prototype.lookU32 = function() {
          return this.view.getUint32(this.pos);
        };
        Decoder2.prototype.readU8 = function() {
          var value = this.view.getUint8(this.pos);
          this.pos++;
          return value;
        };
        Decoder2.prototype.readI8 = function() {
          var value = this.view.getInt8(this.pos);
          this.pos++;
          return value;
        };
        Decoder2.prototype.readU16 = function() {
          var value = this.view.getUint16(this.pos);
          this.pos += 2;
          return value;
        };
        Decoder2.prototype.readI16 = function() {
          var value = this.view.getInt16(this.pos);
          this.pos += 2;
          return value;
        };
        Decoder2.prototype.readU32 = function() {
          var value = this.view.getUint32(this.pos);
          this.pos += 4;
          return value;
        };
        Decoder2.prototype.readI32 = function() {
          var value = this.view.getInt32(this.pos);
          this.pos += 4;
          return value;
        };
        Decoder2.prototype.readU64 = function() {
          var value = getUint64(this.view, this.pos, this.intMode);
          this.pos += 8;
          return value;
        };
        Decoder2.prototype.readI64 = function() {
          var value = getInt64(this.view, this.pos, this.intMode);
          this.pos += 8;
          return value;
        };
        Decoder2.prototype.readF32 = function() {
          var value = this.view.getFloat32(this.pos);
          this.pos += 4;
          return value;
        };
        Decoder2.prototype.readF64 = function() {
          var value = this.view.getFloat64(this.pos);
          this.pos += 8;
          return value;
        };
        return Decoder2;
      })();
    }
  });

  // node_modules/algorand-msgpack/dist.es5+esm/decode.mjs
  function decode(buffer, options) {
    var decoder = new Decoder(options);
    return decoder.decode(buffer);
  }
  var init_decode = __esm({
    "node_modules/algorand-msgpack/dist.es5+esm/decode.mjs"() {
      init_Decoder();
    }
  });

  // node_modules/algorand-msgpack/dist.es5+esm/index.mjs
  var init_dist = __esm({
    "node_modules/algorand-msgpack/dist.es5+esm/index.mjs"() {
      init_encode();
      init_decode();
      init_int();
      init_typedArrays();
    }
  });

  // node_modules/algosdk/dist/esm/encoding/binarydata.js
  function base64ToBytes(base64String) {
    if (isNode()) {
      return new Uint8Array(Buffer.from(base64String, "base64"));
    }
    const binString = atob(base64String);
    return Uint8Array.from(binString, (m) => m.codePointAt(0));
  }
  function bytesToBase64(byteArray) {
    if (isNode()) {
      return Buffer.from(byteArray).toString("base64");
    }
    const binString = Array.from(byteArray, (x) => String.fromCodePoint(x)).join("");
    return btoa(binString);
  }
  function bytesToString(byteArray) {
    return new TextDecoder().decode(byteArray);
  }
  function coerceToBytes(input) {
    if (typeof input === "string") {
      return new TextEncoder().encode(input);
    }
    return input;
  }
  function bytesToHex(byteArray) {
    if (isNode()) {
      return Buffer.from(byteArray).toString("hex");
    }
    return Array.from(byteArray).map((i) => i.toString(16).padStart(2, "0")).join("");
  }
  var init_binarydata = __esm({
    "node_modules/algosdk/dist/esm/encoding/binarydata.js"() {
      init_utils();
    }
  });

  // node_modules/algosdk/dist/esm/encoding/encoding.js
  function msgpackRawEncode(obj) {
    const options = { sortKeys: true };
    return encode(obj, options);
  }
  function intDecodingToIntMode(intDecoding) {
    switch (intDecoding) {
      case intDecoding_default.UNSAFE:
        return IntMode.UNSAFE_NUMBER;
      case intDecoding_default.SAFE:
        return IntMode.SAFE_NUMBER;
      case intDecoding_default.MIXED:
        return IntMode.MIXED;
      case intDecoding_default.BIGINT:
        return IntMode.BIGINT;
      default:
        throw new Error(`Invalid intDecoding: ${intDecoding}`);
    }
  }
  function msgpackRawDecodeAsMap(encoded, options) {
    const decoderOptions = {
      intMode: options?.intDecoding ? intDecodingToIntMode(options?.intDecoding) : IntMode.BIGINT,
      useMap: true
    };
    return decode(encoded, decoderOptions);
  }
  function msgpackRawDecodeAsMapWithRawStrings(encoded, options) {
    const decoderOptions = {
      intMode: options?.intDecoding ? intDecodingToIntMode(options?.intDecoding) : IntMode.BIGINT,
      useMap: true,
      rawBinaryStringKeys: true,
      rawBinaryStringValues: true,
      useRawBinaryStringClass: true
    };
    return decode(encoded, decoderOptions);
  }
  function msgpackEncodingDataToJSONEncodingData(e) {
    if (e === null || e === void 0) {
      return e;
    }
    if (e instanceof Uint8Array) {
      return bytesToBase64(e);
    }
    if (Array.isArray(e)) {
      return e.map(msgpackEncodingDataToJSONEncodingData);
    }
    if (e instanceof Map) {
      const obj = {};
      for (const [k, v] of e) {
        if (typeof k !== "string") {
          throw new Error(`JSON map key must be a string: ${k}`);
        }
        obj[k] = msgpackEncodingDataToJSONEncodingData(v);
      }
      return obj;
    }
    return e;
  }
  function jsonEncodingDataToMsgpackEncodingData(e) {
    if (e === null || e === void 0) {
      return e;
    }
    if (typeof e === "string" || // Note, this will not convert base64 to Uint8Array
    typeof e === "number" || typeof e === "bigint" || typeof e === "boolean") {
      return e;
    }
    if (Array.isArray(e)) {
      return e.map(jsonEncodingDataToMsgpackEncodingData);
    }
    if (typeof e === "object") {
      const obj = /* @__PURE__ */ new Map();
      for (const [key, value] of Object.entries(e)) {
        obj.set(key, jsonEncodingDataToMsgpackEncodingData(value));
      }
      return obj;
    }
    throw new Error(`Invalid JSON encoding data: ${e}`);
  }
  function decodeMsgpack(encoded, c) {
    const decoded = msgpackRawDecodeAsMap(encoded);
    const rawStringProvider = new MsgpackRawStringProvider({
      baseObjectBytes: encoded
    });
    return c.fromEncodingData(c.encodingSchema.fromPreparedMsgpack(decoded, rawStringProvider));
  }
  function encodeMsgpack(e) {
    return msgpackRawEncode(e.getEncodingSchema().prepareMsgpack(e.toEncodingData()));
  }
  var MsgpackObjectPathSegmentKind, MsgpackRawStringProvider, Schema;
  var init_encoding = __esm({
    "node_modules/algosdk/dist/esm/encoding/encoding.js"() {
      init_dist();
      init_binarydata();
      init_intDecoding();
      init_utils();
      (function(MsgpackObjectPathSegmentKind2) {
        MsgpackObjectPathSegmentKind2[MsgpackObjectPathSegmentKind2["MAP_VALUE"] = 0] = "MAP_VALUE";
        MsgpackObjectPathSegmentKind2[MsgpackObjectPathSegmentKind2["ARRAY_ELEMENT"] = 1] = "ARRAY_ELEMENT";
      })(MsgpackObjectPathSegmentKind || (MsgpackObjectPathSegmentKind = {}));
      MsgpackRawStringProvider = class _MsgpackRawStringProvider {
        constructor({ parent, segment, baseObjectBytes }) {
          this.resolvedCache = null;
          this.resolvedCachePresent = false;
          this.parent = parent;
          this.segment = segment;
          this.baseObjectBytes = baseObjectBytes;
        }
        /**
         * Create a new provider that resolves to the current provider's map value at the given key.
         */
        withMapValue(key) {
          return new _MsgpackRawStringProvider({
            parent: this,
            segment: {
              kind: MsgpackObjectPathSegmentKind.MAP_VALUE,
              key
            }
          });
        }
        /**
         * Create a new provider that resolves to the current provider's array element at the given index.
         */
        withArrayElement(index) {
          return new _MsgpackRawStringProvider({
            parent: this,
            segment: {
              kind: MsgpackObjectPathSegmentKind.ARRAY_ELEMENT,
              key: index
            }
          });
        }
        /**
         * Get the raw string at the current location. If the current location is not a raw string, an error is thrown.
         */
        getRawStringAtCurrentLocation() {
          const resolved = this.resolve();
          if (resolved instanceof RawBinaryString) {
            return resolved.rawBinaryValue;
          }
          throw new Error(`Invalid type. Expected RawBinaryString, got ${resolved} (${typeof resolved})`);
        }
        /**
         * Get the raw string map keys and values at the current location. If the current location is not a map, an error is thrown.
         */
        getRawStringKeysAndValuesAtCurrentLocation() {
          const resolved = this.resolve();
          if (!(resolved instanceof Map)) {
            throw new Error(`Invalid type. Expected Map, got ${resolved} (${typeof resolved})`);
          }
          const keysAndValues = /* @__PURE__ */ new Map();
          for (const [key, value] of resolved) {
            if (key instanceof RawBinaryString) {
              keysAndValues.set(key.rawBinaryValue, value);
            } else {
              throw new Error(`Invalid type for map key. Expected RawBinaryString, got ${key} (${typeof key})`);
            }
          }
          return keysAndValues;
        }
        /**
         * Resolve the provider by extracting the value it indicates from the base msgpack object.
         */
        resolve() {
          if (this.resolvedCachePresent) {
            return this.resolvedCache;
          }
          let parentResolved;
          if (this.parent) {
            parentResolved = this.parent.resolve();
          } else {
            parentResolved = msgpackRawDecodeAsMapWithRawStrings(this.baseObjectBytes);
          }
          if (!this.segment) {
            this.resolvedCache = parentResolved;
            this.resolvedCachePresent = true;
            return parentResolved;
          }
          if (this.segment.kind === MsgpackObjectPathSegmentKind.MAP_VALUE) {
            if (!(parentResolved instanceof Map)) {
              throw new Error(`Invalid type. Expected Map, got ${parentResolved} (${typeof parentResolved})`);
            }
            if (typeof this.segment.key === "string" || this.segment.key instanceof Uint8Array || this.segment.key instanceof RawBinaryString) {
              const targetBytes = this.segment.key instanceof RawBinaryString ? (
                // Decoded rawBinaryValue will always be a Uint8Array
                this.segment.key.rawBinaryValue
              ) : coerceToBytes(this.segment.key);
              const targetIsRawString = typeof this.segment.key === "string" || this.segment.key instanceof RawBinaryString;
              for (const [key, value] of parentResolved) {
                let potentialKeyBytes;
                if (targetIsRawString) {
                  if (key instanceof RawBinaryString) {
                    potentialKeyBytes = key.rawBinaryValue;
                  }
                } else if (key instanceof Uint8Array) {
                  potentialKeyBytes = key;
                }
                if (potentialKeyBytes && arrayEqual(targetBytes, potentialKeyBytes)) {
                  this.resolvedCache = value;
                  break;
                }
              }
            } else {
              this.resolvedCache = parentResolved.get(this.segment.key);
            }
            this.resolvedCachePresent = true;
            return this.resolvedCache;
          }
          if (this.segment.kind === MsgpackObjectPathSegmentKind.ARRAY_ELEMENT) {
            if (!Array.isArray(parentResolved)) {
              throw new Error(`Invalid type. Expected Array, got ${parentResolved} (${typeof parentResolved})`);
            }
            this.resolvedCache = parentResolved[this.segment.key];
            this.resolvedCachePresent = true;
            return this.resolvedCache;
          }
          throw new Error(`Invalid segment kind: ${this.segment.kind}`);
        }
        /**
         * Get the path string of the current location indicated by the provider. Useful for debugging.
         */
        getPathString() {
          const parentPathString = this.parent ? this.parent.getPathString() : "root";
          if (!this.segment) {
            return parentPathString;
          }
          if (this.segment.kind === MsgpackObjectPathSegmentKind.MAP_VALUE) {
            return `${parentPathString} -> map key "${this.segment.key}" (${typeof this.segment.key})`;
          }
          if (this.segment.kind === MsgpackObjectPathSegmentKind.ARRAY_ELEMENT) {
            return `${parentPathString} -> array index ${this.segment.key} (${typeof this.segment.key})`;
          }
          return `${parentPathString} -> unknown segment kind ${this.segment.kind}`;
        }
      };
      Schema = class {
      };
    }
  });

  // node_modules/algosdk/dist/esm/encoding/schema/boolean.js
  var BooleanSchema;
  var init_boolean = __esm({
    "node_modules/algosdk/dist/esm/encoding/schema/boolean.js"() {
      init_encoding();
      BooleanSchema = class extends Schema {
        defaultValue() {
          return false;
        }
        isDefaultValue(data) {
          return data === false;
        }
        prepareMsgpack(data) {
          if (typeof data === "boolean") {
            return data;
          }
          throw new Error("Invalid boolean");
        }
        fromPreparedMsgpack(encoded, _rawStringProvider) {
          if (typeof encoded === "boolean") {
            return encoded;
          }
          throw new Error("Invalid boolean");
        }
        prepareJSON(data, _options) {
          if (typeof data === "boolean") {
            return data;
          }
          throw new Error("Invalid boolean");
        }
        fromPreparedJSON(encoded) {
          if (typeof encoded === "boolean") {
            return encoded;
          }
          throw new Error("Invalid boolean");
        }
      };
    }
  });

  // node_modules/algosdk/dist/esm/encoding/schema/string.js
  var StringSchema;
  var init_string = __esm({
    "node_modules/algosdk/dist/esm/encoding/schema/string.js"() {
      init_encoding();
      StringSchema = class extends Schema {
        defaultValue() {
          return "";
        }
        isDefaultValue(data) {
          return data === "";
        }
        prepareMsgpack(data) {
          if (typeof data === "string") {
            return data;
          }
          throw new Error(`Invalid string: (${typeof data}) ${data}`);
        }
        fromPreparedMsgpack(encoded, _rawStringProvider) {
          if (typeof encoded === "string") {
            return encoded;
          }
          throw new Error(`Invalid string: (${typeof encoded}) ${encoded}`);
        }
        prepareJSON(data, _options) {
          if (typeof data === "string") {
            return data;
          }
          throw new Error(`Invalid string: (${typeof data}) ${data}`);
        }
        fromPreparedJSON(encoded) {
          if (typeof encoded === "string") {
            return encoded;
          }
          throw new Error(`Invalid string: (${typeof encoded}) ${encoded}`);
        }
      };
    }
  });

  // node_modules/algosdk/dist/esm/encoding/schema/uint64.js
  var Uint64Schema;
  var init_uint64 = __esm({
    "node_modules/algosdk/dist/esm/encoding/schema/uint64.js"() {
      init_encoding();
      init_utils();
      Uint64Schema = class extends Schema {
        defaultValue() {
          return BigInt(0);
        }
        isDefaultValue(data) {
          if (typeof data === "bigint")
            return data === BigInt(0);
          if (typeof data === "number")
            return data === 0;
          return false;
        }
        prepareMsgpack(data) {
          return ensureUint64(data);
        }
        fromPreparedMsgpack(encoded, _rawStringProvider) {
          return ensureUint64(encoded);
        }
        prepareJSON(data, _options) {
          return ensureUint64(data);
        }
        fromPreparedJSON(encoded) {
          return ensureUint64(encoded);
        }
      };
    }
  });

  // node_modules/hi-base32/src/base32.js
  var require_base32 = __commonJS({
    "node_modules/hi-base32/src/base32.js"(exports, module) {
      /*
       * [hi-base32]{@link https://github.com/emn178/hi-base32}
       *
       * @version 0.5.0
       * @author Chen, Yi-Cyuan [emn178@gmail.com]
       * @copyright Chen, Yi-Cyuan 2015-2018
       * @license MIT
       */
      (function() {
        "use strict";
        var root = typeof window === "object" ? window : {};
        var NODE_JS = !root.HI_BASE32_NO_NODE_JS && typeof process === "object" && process.versions && process.versions.node;
        if (NODE_JS) {
          root = global;
        }
        var COMMON_JS = !root.HI_BASE32_NO_COMMON_JS && typeof module === "object" && module.exports;
        var AMD = typeof define === "function" && define.amd;
        var BASE32_ENCODE_CHAR = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567".split("");
        var BASE32_DECODE_CHAR = {
          "A": 0,
          "B": 1,
          "C": 2,
          "D": 3,
          "E": 4,
          "F": 5,
          "G": 6,
          "H": 7,
          "I": 8,
          "J": 9,
          "K": 10,
          "L": 11,
          "M": 12,
          "N": 13,
          "O": 14,
          "P": 15,
          "Q": 16,
          "R": 17,
          "S": 18,
          "T": 19,
          "U": 20,
          "V": 21,
          "W": 22,
          "X": 23,
          "Y": 24,
          "Z": 25,
          "2": 26,
          "3": 27,
          "4": 28,
          "5": 29,
          "6": 30,
          "7": 31
        };
        var blocks = [0, 0, 0, 0, 0, 0, 0, 0];
        var throwInvalidUtf8 = function(position, partial) {
          if (partial.length > 10) {
            partial = "..." + partial.substr(-10);
          }
          var err = new Error("Decoded data is not valid UTF-8. Maybe try base32.decode.asBytes()? Partial data after reading " + position + " bytes: " + partial + " <-");
          err.position = position;
          throw err;
        };
        var toUtf8String = function(bytes) {
          var str = "", length = bytes.length, i = 0, followingChars = 0, b, c;
          while (i < length) {
            b = bytes[i++];
            if (b <= 127) {
              str += String.fromCharCode(b);
              continue;
            } else if (b > 191 && b <= 223) {
              c = b & 31;
              followingChars = 1;
            } else if (b <= 239) {
              c = b & 15;
              followingChars = 2;
            } else if (b <= 247) {
              c = b & 7;
              followingChars = 3;
            } else {
              throwInvalidUtf8(i, str);
            }
            for (var j = 0; j < followingChars; ++j) {
              b = bytes[i++];
              if (b < 128 || b > 191) {
                throwInvalidUtf8(i, str);
              }
              c <<= 6;
              c += b & 63;
            }
            if (c >= 55296 && c <= 57343) {
              throwInvalidUtf8(i, str);
            }
            if (c > 1114111) {
              throwInvalidUtf8(i, str);
            }
            if (c <= 65535) {
              str += String.fromCharCode(c);
            } else {
              c -= 65536;
              str += String.fromCharCode((c >> 10) + 55296);
              str += String.fromCharCode((c & 1023) + 56320);
            }
          }
          return str;
        };
        var decodeAsBytes = function(base32Str) {
          if (base32Str === "") {
            return [];
          } else if (!/^[A-Z2-7=]+$/.test(base32Str)) {
            throw new Error("Invalid base32 characters");
          }
          base32Str = base32Str.replace(/=/g, "");
          var v1, v2, v3, v4, v5, v6, v7, v8, bytes = [], index = 0, length = base32Str.length;
          for (var i = 0, count = length >> 3 << 3; i < count; ) {
            v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v6 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v7 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v8 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            bytes[index++] = (v1 << 3 | v2 >>> 2) & 255;
            bytes[index++] = (v2 << 6 | v3 << 1 | v4 >>> 4) & 255;
            bytes[index++] = (v4 << 4 | v5 >>> 1) & 255;
            bytes[index++] = (v5 << 7 | v6 << 2 | v7 >>> 3) & 255;
            bytes[index++] = (v7 << 5 | v8) & 255;
          }
          var remain = length - count;
          if (remain === 2) {
            v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            bytes[index++] = (v1 << 3 | v2 >>> 2) & 255;
          } else if (remain === 4) {
            v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            bytes[index++] = (v1 << 3 | v2 >>> 2) & 255;
            bytes[index++] = (v2 << 6 | v3 << 1 | v4 >>> 4) & 255;
          } else if (remain === 5) {
            v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            bytes[index++] = (v1 << 3 | v2 >>> 2) & 255;
            bytes[index++] = (v2 << 6 | v3 << 1 | v4 >>> 4) & 255;
            bytes[index++] = (v4 << 4 | v5 >>> 1) & 255;
          } else if (remain === 7) {
            v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v6 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v7 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            bytes[index++] = (v1 << 3 | v2 >>> 2) & 255;
            bytes[index++] = (v2 << 6 | v3 << 1 | v4 >>> 4) & 255;
            bytes[index++] = (v4 << 4 | v5 >>> 1) & 255;
            bytes[index++] = (v5 << 7 | v6 << 2 | v7 >>> 3) & 255;
          }
          return bytes;
        };
        var encodeAscii = function(str) {
          var v1, v2, v3, v4, v5, base32Str = "", length = str.length;
          for (var i = 0, count = parseInt(length / 5) * 5; i < count; ) {
            v1 = str.charCodeAt(i++);
            v2 = str.charCodeAt(i++);
            v3 = str.charCodeAt(i++);
            v4 = str.charCodeAt(i++);
            v5 = str.charCodeAt(i++);
            base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] + BASE32_ENCODE_CHAR[(v3 << 1 | v4 >>> 7) & 31] + BASE32_ENCODE_CHAR[v4 >>> 2 & 31] + BASE32_ENCODE_CHAR[(v4 << 3 | v5 >>> 5) & 31] + BASE32_ENCODE_CHAR[v5 & 31];
          }
          var remain = length - count;
          if (remain === 1) {
            v1 = str.charCodeAt(i);
            base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[v1 << 2 & 31] + "======";
          } else if (remain === 2) {
            v1 = str.charCodeAt(i++);
            v2 = str.charCodeAt(i);
            base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[v2 << 4 & 31] + "====";
          } else if (remain === 3) {
            v1 = str.charCodeAt(i++);
            v2 = str.charCodeAt(i++);
            v3 = str.charCodeAt(i);
            base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] + BASE32_ENCODE_CHAR[v3 << 1 & 31] + "===";
          } else if (remain === 4) {
            v1 = str.charCodeAt(i++);
            v2 = str.charCodeAt(i++);
            v3 = str.charCodeAt(i++);
            v4 = str.charCodeAt(i);
            base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] + BASE32_ENCODE_CHAR[(v3 << 1 | v4 >>> 7) & 31] + BASE32_ENCODE_CHAR[v4 >>> 2 & 31] + BASE32_ENCODE_CHAR[v4 << 3 & 31] + "=";
          }
          return base32Str;
        };
        var encodeUtf8 = function(str) {
          var v1, v2, v3, v4, v5, code, end = false, base32Str = "", index = 0, i, start = 0, bytes = 0, length = str.length;
          if (str === "") {
            return base32Str;
          }
          do {
            blocks[0] = blocks[5];
            blocks[1] = blocks[6];
            blocks[2] = blocks[7];
            for (i = start; index < length && i < 5; ++index) {
              code = str.charCodeAt(index);
              if (code < 128) {
                blocks[i++] = code;
              } else if (code < 2048) {
                blocks[i++] = 192 | code >> 6;
                blocks[i++] = 128 | code & 63;
              } else if (code < 55296 || code >= 57344) {
                blocks[i++] = 224 | code >> 12;
                blocks[i++] = 128 | code >> 6 & 63;
                blocks[i++] = 128 | code & 63;
              } else {
                code = 65536 + ((code & 1023) << 10 | str.charCodeAt(++index) & 1023);
                blocks[i++] = 240 | code >> 18;
                blocks[i++] = 128 | code >> 12 & 63;
                blocks[i++] = 128 | code >> 6 & 63;
                blocks[i++] = 128 | code & 63;
              }
            }
            bytes += i - start;
            start = i - 5;
            if (index === length) {
              ++index;
            }
            if (index > length && i < 6) {
              end = true;
            }
            v1 = blocks[0];
            if (i > 4) {
              v2 = blocks[1];
              v3 = blocks[2];
              v4 = blocks[3];
              v5 = blocks[4];
              base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] + BASE32_ENCODE_CHAR[(v3 << 1 | v4 >>> 7) & 31] + BASE32_ENCODE_CHAR[v4 >>> 2 & 31] + BASE32_ENCODE_CHAR[(v4 << 3 | v5 >>> 5) & 31] + BASE32_ENCODE_CHAR[v5 & 31];
            } else if (i === 1) {
              base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[v1 << 2 & 31] + "======";
            } else if (i === 2) {
              v2 = blocks[1];
              base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[v2 << 4 & 31] + "====";
            } else if (i === 3) {
              v2 = blocks[1];
              v3 = blocks[2];
              base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] + BASE32_ENCODE_CHAR[v3 << 1 & 31] + "===";
            } else {
              v2 = blocks[1];
              v3 = blocks[2];
              v4 = blocks[3];
              base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] + BASE32_ENCODE_CHAR[(v3 << 1 | v4 >>> 7) & 31] + BASE32_ENCODE_CHAR[v4 >>> 2 & 31] + BASE32_ENCODE_CHAR[v4 << 3 & 31] + "=";
            }
          } while (!end);
          return base32Str;
        };
        var encodeBytes = function(bytes) {
          var v1, v2, v3, v4, v5, base32Str = "", length = bytes.length;
          for (var i = 0, count = parseInt(length / 5) * 5; i < count; ) {
            v1 = bytes[i++];
            v2 = bytes[i++];
            v3 = bytes[i++];
            v4 = bytes[i++];
            v5 = bytes[i++];
            base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] + BASE32_ENCODE_CHAR[(v3 << 1 | v4 >>> 7) & 31] + BASE32_ENCODE_CHAR[v4 >>> 2 & 31] + BASE32_ENCODE_CHAR[(v4 << 3 | v5 >>> 5) & 31] + BASE32_ENCODE_CHAR[v5 & 31];
          }
          var remain = length - count;
          if (remain === 1) {
            v1 = bytes[i];
            base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[v1 << 2 & 31] + "======";
          } else if (remain === 2) {
            v1 = bytes[i++];
            v2 = bytes[i];
            base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[v2 << 4 & 31] + "====";
          } else if (remain === 3) {
            v1 = bytes[i++];
            v2 = bytes[i++];
            v3 = bytes[i];
            base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] + BASE32_ENCODE_CHAR[v3 << 1 & 31] + "===";
          } else if (remain === 4) {
            v1 = bytes[i++];
            v2 = bytes[i++];
            v3 = bytes[i++];
            v4 = bytes[i];
            base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] + BASE32_ENCODE_CHAR[(v3 << 1 | v4 >>> 7) & 31] + BASE32_ENCODE_CHAR[v4 >>> 2 & 31] + BASE32_ENCODE_CHAR[v4 << 3 & 31] + "=";
          }
          return base32Str;
        };
        var encode2 = function(input, asciiOnly) {
          var notString = typeof input !== "string";
          if (notString && input.constructor === ArrayBuffer) {
            input = new Uint8Array(input);
          }
          if (notString) {
            return encodeBytes(input);
          } else if (asciiOnly) {
            return encodeAscii(input);
          } else {
            return encodeUtf8(input);
          }
        };
        var decode3 = function(base32Str, asciiOnly) {
          if (!asciiOnly) {
            return toUtf8String(decodeAsBytes(base32Str));
          }
          if (base32Str === "") {
            return "";
          } else if (!/^[A-Z2-7=]+$/.test(base32Str)) {
            throw new Error("Invalid base32 characters");
          }
          var v1, v2, v3, v4, v5, v6, v7, v8, str = "", length = base32Str.indexOf("=");
          if (length === -1) {
            length = base32Str.length;
          }
          for (var i = 0, count = length >> 3 << 3; i < count; ) {
            v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v6 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v7 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v8 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            str += String.fromCharCode((v1 << 3 | v2 >>> 2) & 255) + String.fromCharCode((v2 << 6 | v3 << 1 | v4 >>> 4) & 255) + String.fromCharCode((v4 << 4 | v5 >>> 1) & 255) + String.fromCharCode((v5 << 7 | v6 << 2 | v7 >>> 3) & 255) + String.fromCharCode((v7 << 5 | v8) & 255);
          }
          var remain = length - count;
          if (remain === 2) {
            v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            str += String.fromCharCode((v1 << 3 | v2 >>> 2) & 255);
          } else if (remain === 4) {
            v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            str += String.fromCharCode((v1 << 3 | v2 >>> 2) & 255) + String.fromCharCode((v2 << 6 | v3 << 1 | v4 >>> 4) & 255);
          } else if (remain === 5) {
            v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            str += String.fromCharCode((v1 << 3 | v2 >>> 2) & 255) + String.fromCharCode((v2 << 6 | v3 << 1 | v4 >>> 4) & 255) + String.fromCharCode((v4 << 4 | v5 >>> 1) & 255);
          } else if (remain === 7) {
            v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v6 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v7 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            str += String.fromCharCode((v1 << 3 | v2 >>> 2) & 255) + String.fromCharCode((v2 << 6 | v3 << 1 | v4 >>> 4) & 255) + String.fromCharCode((v4 << 4 | v5 >>> 1) & 255) + String.fromCharCode((v5 << 7 | v6 << 2 | v7 >>> 3) & 255);
          }
          return str;
        };
        var exports2 = {
          encode: encode2,
          decode: decode3
        };
        decode3.asBytes = decodeAsBytes;
        if (COMMON_JS) {
          module.exports = exports2;
        } else {
          root.base32 = exports2;
          if (AMD) {
            define(function() {
              return exports2;
            });
          }
        }
      })();
    }
  });

  // (disabled):crypto
  var require_crypto = __commonJS({
    "(disabled):crypto"() {
    }
  });

  // node_modules/tweetnacl/nacl-fast.js
  var require_nacl_fast = __commonJS({
    "node_modules/tweetnacl/nacl-fast.js"(exports, module) {
      (function(nacl2) {
        "use strict";
        var gf = function(init) {
          var i, r = new Float64Array(16);
          if (init) for (i = 0; i < init.length; i++) r[i] = init[i];
          return r;
        };
        var randombytes = function() {
          throw new Error("no PRNG");
        };
        var _0 = new Uint8Array(16);
        var _9 = new Uint8Array(32);
        _9[0] = 9;
        var gf0 = gf(), gf1 = gf([1]), _121665 = gf([56129, 1]), D = gf([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]), D2 = gf([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]), X = gf([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]), Y = gf([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]), I2 = gf([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);
        function ts64(x, i, h, l) {
          x[i] = h >> 24 & 255;
          x[i + 1] = h >> 16 & 255;
          x[i + 2] = h >> 8 & 255;
          x[i + 3] = h & 255;
          x[i + 4] = l >> 24 & 255;
          x[i + 5] = l >> 16 & 255;
          x[i + 6] = l >> 8 & 255;
          x[i + 7] = l & 255;
        }
        function vn(x, xi, y, yi, n) {
          var i, d2 = 0;
          for (i = 0; i < n; i++) d2 |= x[xi + i] ^ y[yi + i];
          return (1 & d2 - 1 >>> 8) - 1;
        }
        function crypto_verify_16(x, xi, y, yi) {
          return vn(x, xi, y, yi, 16);
        }
        function crypto_verify_32(x, xi, y, yi) {
          return vn(x, xi, y, yi, 32);
        }
        function core_salsa20(o, p2, k, c) {
          var j0 = c[0] & 255 | (c[1] & 255) << 8 | (c[2] & 255) << 16 | (c[3] & 255) << 24, j1 = k[0] & 255 | (k[1] & 255) << 8 | (k[2] & 255) << 16 | (k[3] & 255) << 24, j2 = k[4] & 255 | (k[5] & 255) << 8 | (k[6] & 255) << 16 | (k[7] & 255) << 24, j3 = k[8] & 255 | (k[9] & 255) << 8 | (k[10] & 255) << 16 | (k[11] & 255) << 24, j4 = k[12] & 255 | (k[13] & 255) << 8 | (k[14] & 255) << 16 | (k[15] & 255) << 24, j5 = c[4] & 255 | (c[5] & 255) << 8 | (c[6] & 255) << 16 | (c[7] & 255) << 24, j6 = p2[0] & 255 | (p2[1] & 255) << 8 | (p2[2] & 255) << 16 | (p2[3] & 255) << 24, j7 = p2[4] & 255 | (p2[5] & 255) << 8 | (p2[6] & 255) << 16 | (p2[7] & 255) << 24, j8 = p2[8] & 255 | (p2[9] & 255) << 8 | (p2[10] & 255) << 16 | (p2[11] & 255) << 24, j9 = p2[12] & 255 | (p2[13] & 255) << 8 | (p2[14] & 255) << 16 | (p2[15] & 255) << 24, j10 = c[8] & 255 | (c[9] & 255) << 8 | (c[10] & 255) << 16 | (c[11] & 255) << 24, j11 = k[16] & 255 | (k[17] & 255) << 8 | (k[18] & 255) << 16 | (k[19] & 255) << 24, j12 = k[20] & 255 | (k[21] & 255) << 8 | (k[22] & 255) << 16 | (k[23] & 255) << 24, j13 = k[24] & 255 | (k[25] & 255) << 8 | (k[26] & 255) << 16 | (k[27] & 255) << 24, j14 = k[28] & 255 | (k[29] & 255) << 8 | (k[30] & 255) << 16 | (k[31] & 255) << 24, j15 = c[12] & 255 | (c[13] & 255) << 8 | (c[14] & 255) << 16 | (c[15] & 255) << 24;
          var x0 = j0, x1 = j1, x2 = j2, x3 = j3, x4 = j4, x5 = j5, x6 = j6, x7 = j7, x8 = j8, x9 = j9, x10 = j10, x11 = j11, x12 = j12, x13 = j13, x14 = j14, x15 = j15, u;
          for (var i = 0; i < 20; i += 2) {
            u = x0 + x12 | 0;
            x4 ^= u << 7 | u >>> 32 - 7;
            u = x4 + x0 | 0;
            x8 ^= u << 9 | u >>> 32 - 9;
            u = x8 + x4 | 0;
            x12 ^= u << 13 | u >>> 32 - 13;
            u = x12 + x8 | 0;
            x0 ^= u << 18 | u >>> 32 - 18;
            u = x5 + x1 | 0;
            x9 ^= u << 7 | u >>> 32 - 7;
            u = x9 + x5 | 0;
            x13 ^= u << 9 | u >>> 32 - 9;
            u = x13 + x9 | 0;
            x1 ^= u << 13 | u >>> 32 - 13;
            u = x1 + x13 | 0;
            x5 ^= u << 18 | u >>> 32 - 18;
            u = x10 + x6 | 0;
            x14 ^= u << 7 | u >>> 32 - 7;
            u = x14 + x10 | 0;
            x2 ^= u << 9 | u >>> 32 - 9;
            u = x2 + x14 | 0;
            x6 ^= u << 13 | u >>> 32 - 13;
            u = x6 + x2 | 0;
            x10 ^= u << 18 | u >>> 32 - 18;
            u = x15 + x11 | 0;
            x3 ^= u << 7 | u >>> 32 - 7;
            u = x3 + x15 | 0;
            x7 ^= u << 9 | u >>> 32 - 9;
            u = x7 + x3 | 0;
            x11 ^= u << 13 | u >>> 32 - 13;
            u = x11 + x7 | 0;
            x15 ^= u << 18 | u >>> 32 - 18;
            u = x0 + x3 | 0;
            x1 ^= u << 7 | u >>> 32 - 7;
            u = x1 + x0 | 0;
            x2 ^= u << 9 | u >>> 32 - 9;
            u = x2 + x1 | 0;
            x3 ^= u << 13 | u >>> 32 - 13;
            u = x3 + x2 | 0;
            x0 ^= u << 18 | u >>> 32 - 18;
            u = x5 + x4 | 0;
            x6 ^= u << 7 | u >>> 32 - 7;
            u = x6 + x5 | 0;
            x7 ^= u << 9 | u >>> 32 - 9;
            u = x7 + x6 | 0;
            x4 ^= u << 13 | u >>> 32 - 13;
            u = x4 + x7 | 0;
            x5 ^= u << 18 | u >>> 32 - 18;
            u = x10 + x9 | 0;
            x11 ^= u << 7 | u >>> 32 - 7;
            u = x11 + x10 | 0;
            x8 ^= u << 9 | u >>> 32 - 9;
            u = x8 + x11 | 0;
            x9 ^= u << 13 | u >>> 32 - 13;
            u = x9 + x8 | 0;
            x10 ^= u << 18 | u >>> 32 - 18;
            u = x15 + x14 | 0;
            x12 ^= u << 7 | u >>> 32 - 7;
            u = x12 + x15 | 0;
            x13 ^= u << 9 | u >>> 32 - 9;
            u = x13 + x12 | 0;
            x14 ^= u << 13 | u >>> 32 - 13;
            u = x14 + x13 | 0;
            x15 ^= u << 18 | u >>> 32 - 18;
          }
          x0 = x0 + j0 | 0;
          x1 = x1 + j1 | 0;
          x2 = x2 + j2 | 0;
          x3 = x3 + j3 | 0;
          x4 = x4 + j4 | 0;
          x5 = x5 + j5 | 0;
          x6 = x6 + j6 | 0;
          x7 = x7 + j7 | 0;
          x8 = x8 + j8 | 0;
          x9 = x9 + j9 | 0;
          x10 = x10 + j10 | 0;
          x11 = x11 + j11 | 0;
          x12 = x12 + j12 | 0;
          x13 = x13 + j13 | 0;
          x14 = x14 + j14 | 0;
          x15 = x15 + j15 | 0;
          o[0] = x0 >>> 0 & 255;
          o[1] = x0 >>> 8 & 255;
          o[2] = x0 >>> 16 & 255;
          o[3] = x0 >>> 24 & 255;
          o[4] = x1 >>> 0 & 255;
          o[5] = x1 >>> 8 & 255;
          o[6] = x1 >>> 16 & 255;
          o[7] = x1 >>> 24 & 255;
          o[8] = x2 >>> 0 & 255;
          o[9] = x2 >>> 8 & 255;
          o[10] = x2 >>> 16 & 255;
          o[11] = x2 >>> 24 & 255;
          o[12] = x3 >>> 0 & 255;
          o[13] = x3 >>> 8 & 255;
          o[14] = x3 >>> 16 & 255;
          o[15] = x3 >>> 24 & 255;
          o[16] = x4 >>> 0 & 255;
          o[17] = x4 >>> 8 & 255;
          o[18] = x4 >>> 16 & 255;
          o[19] = x4 >>> 24 & 255;
          o[20] = x5 >>> 0 & 255;
          o[21] = x5 >>> 8 & 255;
          o[22] = x5 >>> 16 & 255;
          o[23] = x5 >>> 24 & 255;
          o[24] = x6 >>> 0 & 255;
          o[25] = x6 >>> 8 & 255;
          o[26] = x6 >>> 16 & 255;
          o[27] = x6 >>> 24 & 255;
          o[28] = x7 >>> 0 & 255;
          o[29] = x7 >>> 8 & 255;
          o[30] = x7 >>> 16 & 255;
          o[31] = x7 >>> 24 & 255;
          o[32] = x8 >>> 0 & 255;
          o[33] = x8 >>> 8 & 255;
          o[34] = x8 >>> 16 & 255;
          o[35] = x8 >>> 24 & 255;
          o[36] = x9 >>> 0 & 255;
          o[37] = x9 >>> 8 & 255;
          o[38] = x9 >>> 16 & 255;
          o[39] = x9 >>> 24 & 255;
          o[40] = x10 >>> 0 & 255;
          o[41] = x10 >>> 8 & 255;
          o[42] = x10 >>> 16 & 255;
          o[43] = x10 >>> 24 & 255;
          o[44] = x11 >>> 0 & 255;
          o[45] = x11 >>> 8 & 255;
          o[46] = x11 >>> 16 & 255;
          o[47] = x11 >>> 24 & 255;
          o[48] = x12 >>> 0 & 255;
          o[49] = x12 >>> 8 & 255;
          o[50] = x12 >>> 16 & 255;
          o[51] = x12 >>> 24 & 255;
          o[52] = x13 >>> 0 & 255;
          o[53] = x13 >>> 8 & 255;
          o[54] = x13 >>> 16 & 255;
          o[55] = x13 >>> 24 & 255;
          o[56] = x14 >>> 0 & 255;
          o[57] = x14 >>> 8 & 255;
          o[58] = x14 >>> 16 & 255;
          o[59] = x14 >>> 24 & 255;
          o[60] = x15 >>> 0 & 255;
          o[61] = x15 >>> 8 & 255;
          o[62] = x15 >>> 16 & 255;
          o[63] = x15 >>> 24 & 255;
        }
        function core_hsalsa20(o, p2, k, c) {
          var j0 = c[0] & 255 | (c[1] & 255) << 8 | (c[2] & 255) << 16 | (c[3] & 255) << 24, j1 = k[0] & 255 | (k[1] & 255) << 8 | (k[2] & 255) << 16 | (k[3] & 255) << 24, j2 = k[4] & 255 | (k[5] & 255) << 8 | (k[6] & 255) << 16 | (k[7] & 255) << 24, j3 = k[8] & 255 | (k[9] & 255) << 8 | (k[10] & 255) << 16 | (k[11] & 255) << 24, j4 = k[12] & 255 | (k[13] & 255) << 8 | (k[14] & 255) << 16 | (k[15] & 255) << 24, j5 = c[4] & 255 | (c[5] & 255) << 8 | (c[6] & 255) << 16 | (c[7] & 255) << 24, j6 = p2[0] & 255 | (p2[1] & 255) << 8 | (p2[2] & 255) << 16 | (p2[3] & 255) << 24, j7 = p2[4] & 255 | (p2[5] & 255) << 8 | (p2[6] & 255) << 16 | (p2[7] & 255) << 24, j8 = p2[8] & 255 | (p2[9] & 255) << 8 | (p2[10] & 255) << 16 | (p2[11] & 255) << 24, j9 = p2[12] & 255 | (p2[13] & 255) << 8 | (p2[14] & 255) << 16 | (p2[15] & 255) << 24, j10 = c[8] & 255 | (c[9] & 255) << 8 | (c[10] & 255) << 16 | (c[11] & 255) << 24, j11 = k[16] & 255 | (k[17] & 255) << 8 | (k[18] & 255) << 16 | (k[19] & 255) << 24, j12 = k[20] & 255 | (k[21] & 255) << 8 | (k[22] & 255) << 16 | (k[23] & 255) << 24, j13 = k[24] & 255 | (k[25] & 255) << 8 | (k[26] & 255) << 16 | (k[27] & 255) << 24, j14 = k[28] & 255 | (k[29] & 255) << 8 | (k[30] & 255) << 16 | (k[31] & 255) << 24, j15 = c[12] & 255 | (c[13] & 255) << 8 | (c[14] & 255) << 16 | (c[15] & 255) << 24;
          var x0 = j0, x1 = j1, x2 = j2, x3 = j3, x4 = j4, x5 = j5, x6 = j6, x7 = j7, x8 = j8, x9 = j9, x10 = j10, x11 = j11, x12 = j12, x13 = j13, x14 = j14, x15 = j15, u;
          for (var i = 0; i < 20; i += 2) {
            u = x0 + x12 | 0;
            x4 ^= u << 7 | u >>> 32 - 7;
            u = x4 + x0 | 0;
            x8 ^= u << 9 | u >>> 32 - 9;
            u = x8 + x4 | 0;
            x12 ^= u << 13 | u >>> 32 - 13;
            u = x12 + x8 | 0;
            x0 ^= u << 18 | u >>> 32 - 18;
            u = x5 + x1 | 0;
            x9 ^= u << 7 | u >>> 32 - 7;
            u = x9 + x5 | 0;
            x13 ^= u << 9 | u >>> 32 - 9;
            u = x13 + x9 | 0;
            x1 ^= u << 13 | u >>> 32 - 13;
            u = x1 + x13 | 0;
            x5 ^= u << 18 | u >>> 32 - 18;
            u = x10 + x6 | 0;
            x14 ^= u << 7 | u >>> 32 - 7;
            u = x14 + x10 | 0;
            x2 ^= u << 9 | u >>> 32 - 9;
            u = x2 + x14 | 0;
            x6 ^= u << 13 | u >>> 32 - 13;
            u = x6 + x2 | 0;
            x10 ^= u << 18 | u >>> 32 - 18;
            u = x15 + x11 | 0;
            x3 ^= u << 7 | u >>> 32 - 7;
            u = x3 + x15 | 0;
            x7 ^= u << 9 | u >>> 32 - 9;
            u = x7 + x3 | 0;
            x11 ^= u << 13 | u >>> 32 - 13;
            u = x11 + x7 | 0;
            x15 ^= u << 18 | u >>> 32 - 18;
            u = x0 + x3 | 0;
            x1 ^= u << 7 | u >>> 32 - 7;
            u = x1 + x0 | 0;
            x2 ^= u << 9 | u >>> 32 - 9;
            u = x2 + x1 | 0;
            x3 ^= u << 13 | u >>> 32 - 13;
            u = x3 + x2 | 0;
            x0 ^= u << 18 | u >>> 32 - 18;
            u = x5 + x4 | 0;
            x6 ^= u << 7 | u >>> 32 - 7;
            u = x6 + x5 | 0;
            x7 ^= u << 9 | u >>> 32 - 9;
            u = x7 + x6 | 0;
            x4 ^= u << 13 | u >>> 32 - 13;
            u = x4 + x7 | 0;
            x5 ^= u << 18 | u >>> 32 - 18;
            u = x10 + x9 | 0;
            x11 ^= u << 7 | u >>> 32 - 7;
            u = x11 + x10 | 0;
            x8 ^= u << 9 | u >>> 32 - 9;
            u = x8 + x11 | 0;
            x9 ^= u << 13 | u >>> 32 - 13;
            u = x9 + x8 | 0;
            x10 ^= u << 18 | u >>> 32 - 18;
            u = x15 + x14 | 0;
            x12 ^= u << 7 | u >>> 32 - 7;
            u = x12 + x15 | 0;
            x13 ^= u << 9 | u >>> 32 - 9;
            u = x13 + x12 | 0;
            x14 ^= u << 13 | u >>> 32 - 13;
            u = x14 + x13 | 0;
            x15 ^= u << 18 | u >>> 32 - 18;
          }
          o[0] = x0 >>> 0 & 255;
          o[1] = x0 >>> 8 & 255;
          o[2] = x0 >>> 16 & 255;
          o[3] = x0 >>> 24 & 255;
          o[4] = x5 >>> 0 & 255;
          o[5] = x5 >>> 8 & 255;
          o[6] = x5 >>> 16 & 255;
          o[7] = x5 >>> 24 & 255;
          o[8] = x10 >>> 0 & 255;
          o[9] = x10 >>> 8 & 255;
          o[10] = x10 >>> 16 & 255;
          o[11] = x10 >>> 24 & 255;
          o[12] = x15 >>> 0 & 255;
          o[13] = x15 >>> 8 & 255;
          o[14] = x15 >>> 16 & 255;
          o[15] = x15 >>> 24 & 255;
          o[16] = x6 >>> 0 & 255;
          o[17] = x6 >>> 8 & 255;
          o[18] = x6 >>> 16 & 255;
          o[19] = x6 >>> 24 & 255;
          o[20] = x7 >>> 0 & 255;
          o[21] = x7 >>> 8 & 255;
          o[22] = x7 >>> 16 & 255;
          o[23] = x7 >>> 24 & 255;
          o[24] = x8 >>> 0 & 255;
          o[25] = x8 >>> 8 & 255;
          o[26] = x8 >>> 16 & 255;
          o[27] = x8 >>> 24 & 255;
          o[28] = x9 >>> 0 & 255;
          o[29] = x9 >>> 8 & 255;
          o[30] = x9 >>> 16 & 255;
          o[31] = x9 >>> 24 & 255;
        }
        function crypto_core_salsa20(out, inp, k, c) {
          core_salsa20(out, inp, k, c);
        }
        function crypto_core_hsalsa20(out, inp, k, c) {
          core_hsalsa20(out, inp, k, c);
        }
        var sigma = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);
        function crypto_stream_salsa20_xor(c, cpos, m, mpos, b, n, k) {
          var z = new Uint8Array(16), x = new Uint8Array(64);
          var u, i;
          for (i = 0; i < 16; i++) z[i] = 0;
          for (i = 0; i < 8; i++) z[i] = n[i];
          while (b >= 64) {
            crypto_core_salsa20(x, z, k, sigma);
            for (i = 0; i < 64; i++) c[cpos + i] = m[mpos + i] ^ x[i];
            u = 1;
            for (i = 8; i < 16; i++) {
              u = u + (z[i] & 255) | 0;
              z[i] = u & 255;
              u >>>= 8;
            }
            b -= 64;
            cpos += 64;
            mpos += 64;
          }
          if (b > 0) {
            crypto_core_salsa20(x, z, k, sigma);
            for (i = 0; i < b; i++) c[cpos + i] = m[mpos + i] ^ x[i];
          }
          return 0;
        }
        function crypto_stream_salsa20(c, cpos, b, n, k) {
          var z = new Uint8Array(16), x = new Uint8Array(64);
          var u, i;
          for (i = 0; i < 16; i++) z[i] = 0;
          for (i = 0; i < 8; i++) z[i] = n[i];
          while (b >= 64) {
            crypto_core_salsa20(x, z, k, sigma);
            for (i = 0; i < 64; i++) c[cpos + i] = x[i];
            u = 1;
            for (i = 8; i < 16; i++) {
              u = u + (z[i] & 255) | 0;
              z[i] = u & 255;
              u >>>= 8;
            }
            b -= 64;
            cpos += 64;
          }
          if (b > 0) {
            crypto_core_salsa20(x, z, k, sigma);
            for (i = 0; i < b; i++) c[cpos + i] = x[i];
          }
          return 0;
        }
        function crypto_stream(c, cpos, d2, n, k) {
          var s = new Uint8Array(32);
          crypto_core_hsalsa20(s, n, k, sigma);
          var sn = new Uint8Array(8);
          for (var i = 0; i < 8; i++) sn[i] = n[i + 16];
          return crypto_stream_salsa20(c, cpos, d2, sn, s);
        }
        function crypto_stream_xor(c, cpos, m, mpos, d2, n, k) {
          var s = new Uint8Array(32);
          crypto_core_hsalsa20(s, n, k, sigma);
          var sn = new Uint8Array(8);
          for (var i = 0; i < 8; i++) sn[i] = n[i + 16];
          return crypto_stream_salsa20_xor(c, cpos, m, mpos, d2, sn, s);
        }
        var poly1305 = function(key) {
          this.buffer = new Uint8Array(16);
          this.r = new Uint16Array(10);
          this.h = new Uint16Array(10);
          this.pad = new Uint16Array(8);
          this.leftover = 0;
          this.fin = 0;
          var t0, t1, t2, t3, t4, t5, t6, t7;
          t0 = key[0] & 255 | (key[1] & 255) << 8;
          this.r[0] = t0 & 8191;
          t1 = key[2] & 255 | (key[3] & 255) << 8;
          this.r[1] = (t0 >>> 13 | t1 << 3) & 8191;
          t2 = key[4] & 255 | (key[5] & 255) << 8;
          this.r[2] = (t1 >>> 10 | t2 << 6) & 7939;
          t3 = key[6] & 255 | (key[7] & 255) << 8;
          this.r[3] = (t2 >>> 7 | t3 << 9) & 8191;
          t4 = key[8] & 255 | (key[9] & 255) << 8;
          this.r[4] = (t3 >>> 4 | t4 << 12) & 255;
          this.r[5] = t4 >>> 1 & 8190;
          t5 = key[10] & 255 | (key[11] & 255) << 8;
          this.r[6] = (t4 >>> 14 | t5 << 2) & 8191;
          t6 = key[12] & 255 | (key[13] & 255) << 8;
          this.r[7] = (t5 >>> 11 | t6 << 5) & 8065;
          t7 = key[14] & 255 | (key[15] & 255) << 8;
          this.r[8] = (t6 >>> 8 | t7 << 8) & 8191;
          this.r[9] = t7 >>> 5 & 127;
          this.pad[0] = key[16] & 255 | (key[17] & 255) << 8;
          this.pad[1] = key[18] & 255 | (key[19] & 255) << 8;
          this.pad[2] = key[20] & 255 | (key[21] & 255) << 8;
          this.pad[3] = key[22] & 255 | (key[23] & 255) << 8;
          this.pad[4] = key[24] & 255 | (key[25] & 255) << 8;
          this.pad[5] = key[26] & 255 | (key[27] & 255) << 8;
          this.pad[6] = key[28] & 255 | (key[29] & 255) << 8;
          this.pad[7] = key[30] & 255 | (key[31] & 255) << 8;
        };
        poly1305.prototype.blocks = function(m, mpos, bytes) {
          var hibit = this.fin ? 0 : 1 << 11;
          var t0, t1, t2, t3, t4, t5, t6, t7, c;
          var d0, d1, d2, d3, d4, d5, d6, d7, d8, d9;
          var h0 = this.h[0], h1 = this.h[1], h2 = this.h[2], h3 = this.h[3], h4 = this.h[4], h5 = this.h[5], h6 = this.h[6], h7 = this.h[7], h8 = this.h[8], h9 = this.h[9];
          var r0 = this.r[0], r1 = this.r[1], r2 = this.r[2], r3 = this.r[3], r4 = this.r[4], r5 = this.r[5], r6 = this.r[6], r7 = this.r[7], r8 = this.r[8], r9 = this.r[9];
          while (bytes >= 16) {
            t0 = m[mpos + 0] & 255 | (m[mpos + 1] & 255) << 8;
            h0 += t0 & 8191;
            t1 = m[mpos + 2] & 255 | (m[mpos + 3] & 255) << 8;
            h1 += (t0 >>> 13 | t1 << 3) & 8191;
            t2 = m[mpos + 4] & 255 | (m[mpos + 5] & 255) << 8;
            h2 += (t1 >>> 10 | t2 << 6) & 8191;
            t3 = m[mpos + 6] & 255 | (m[mpos + 7] & 255) << 8;
            h3 += (t2 >>> 7 | t3 << 9) & 8191;
            t4 = m[mpos + 8] & 255 | (m[mpos + 9] & 255) << 8;
            h4 += (t3 >>> 4 | t4 << 12) & 8191;
            h5 += t4 >>> 1 & 8191;
            t5 = m[mpos + 10] & 255 | (m[mpos + 11] & 255) << 8;
            h6 += (t4 >>> 14 | t5 << 2) & 8191;
            t6 = m[mpos + 12] & 255 | (m[mpos + 13] & 255) << 8;
            h7 += (t5 >>> 11 | t6 << 5) & 8191;
            t7 = m[mpos + 14] & 255 | (m[mpos + 15] & 255) << 8;
            h8 += (t6 >>> 8 | t7 << 8) & 8191;
            h9 += t7 >>> 5 | hibit;
            c = 0;
            d0 = c;
            d0 += h0 * r0;
            d0 += h1 * (5 * r9);
            d0 += h2 * (5 * r8);
            d0 += h3 * (5 * r7);
            d0 += h4 * (5 * r6);
            c = d0 >>> 13;
            d0 &= 8191;
            d0 += h5 * (5 * r5);
            d0 += h6 * (5 * r4);
            d0 += h7 * (5 * r3);
            d0 += h8 * (5 * r2);
            d0 += h9 * (5 * r1);
            c += d0 >>> 13;
            d0 &= 8191;
            d1 = c;
            d1 += h0 * r1;
            d1 += h1 * r0;
            d1 += h2 * (5 * r9);
            d1 += h3 * (5 * r8);
            d1 += h4 * (5 * r7);
            c = d1 >>> 13;
            d1 &= 8191;
            d1 += h5 * (5 * r6);
            d1 += h6 * (5 * r5);
            d1 += h7 * (5 * r4);
            d1 += h8 * (5 * r3);
            d1 += h9 * (5 * r2);
            c += d1 >>> 13;
            d1 &= 8191;
            d2 = c;
            d2 += h0 * r2;
            d2 += h1 * r1;
            d2 += h2 * r0;
            d2 += h3 * (5 * r9);
            d2 += h4 * (5 * r8);
            c = d2 >>> 13;
            d2 &= 8191;
            d2 += h5 * (5 * r7);
            d2 += h6 * (5 * r6);
            d2 += h7 * (5 * r5);
            d2 += h8 * (5 * r4);
            d2 += h9 * (5 * r3);
            c += d2 >>> 13;
            d2 &= 8191;
            d3 = c;
            d3 += h0 * r3;
            d3 += h1 * r2;
            d3 += h2 * r1;
            d3 += h3 * r0;
            d3 += h4 * (5 * r9);
            c = d3 >>> 13;
            d3 &= 8191;
            d3 += h5 * (5 * r8);
            d3 += h6 * (5 * r7);
            d3 += h7 * (5 * r6);
            d3 += h8 * (5 * r5);
            d3 += h9 * (5 * r4);
            c += d3 >>> 13;
            d3 &= 8191;
            d4 = c;
            d4 += h0 * r4;
            d4 += h1 * r3;
            d4 += h2 * r2;
            d4 += h3 * r1;
            d4 += h4 * r0;
            c = d4 >>> 13;
            d4 &= 8191;
            d4 += h5 * (5 * r9);
            d4 += h6 * (5 * r8);
            d4 += h7 * (5 * r7);
            d4 += h8 * (5 * r6);
            d4 += h9 * (5 * r5);
            c += d4 >>> 13;
            d4 &= 8191;
            d5 = c;
            d5 += h0 * r5;
            d5 += h1 * r4;
            d5 += h2 * r3;
            d5 += h3 * r2;
            d5 += h4 * r1;
            c = d5 >>> 13;
            d5 &= 8191;
            d5 += h5 * r0;
            d5 += h6 * (5 * r9);
            d5 += h7 * (5 * r8);
            d5 += h8 * (5 * r7);
            d5 += h9 * (5 * r6);
            c += d5 >>> 13;
            d5 &= 8191;
            d6 = c;
            d6 += h0 * r6;
            d6 += h1 * r5;
            d6 += h2 * r4;
            d6 += h3 * r3;
            d6 += h4 * r2;
            c = d6 >>> 13;
            d6 &= 8191;
            d6 += h5 * r1;
            d6 += h6 * r0;
            d6 += h7 * (5 * r9);
            d6 += h8 * (5 * r8);
            d6 += h9 * (5 * r7);
            c += d6 >>> 13;
            d6 &= 8191;
            d7 = c;
            d7 += h0 * r7;
            d7 += h1 * r6;
            d7 += h2 * r5;
            d7 += h3 * r4;
            d7 += h4 * r3;
            c = d7 >>> 13;
            d7 &= 8191;
            d7 += h5 * r2;
            d7 += h6 * r1;
            d7 += h7 * r0;
            d7 += h8 * (5 * r9);
            d7 += h9 * (5 * r8);
            c += d7 >>> 13;
            d7 &= 8191;
            d8 = c;
            d8 += h0 * r8;
            d8 += h1 * r7;
            d8 += h2 * r6;
            d8 += h3 * r5;
            d8 += h4 * r4;
            c = d8 >>> 13;
            d8 &= 8191;
            d8 += h5 * r3;
            d8 += h6 * r2;
            d8 += h7 * r1;
            d8 += h8 * r0;
            d8 += h9 * (5 * r9);
            c += d8 >>> 13;
            d8 &= 8191;
            d9 = c;
            d9 += h0 * r9;
            d9 += h1 * r8;
            d9 += h2 * r7;
            d9 += h3 * r6;
            d9 += h4 * r5;
            c = d9 >>> 13;
            d9 &= 8191;
            d9 += h5 * r4;
            d9 += h6 * r3;
            d9 += h7 * r2;
            d9 += h8 * r1;
            d9 += h9 * r0;
            c += d9 >>> 13;
            d9 &= 8191;
            c = (c << 2) + c | 0;
            c = c + d0 | 0;
            d0 = c & 8191;
            c = c >>> 13;
            d1 += c;
            h0 = d0;
            h1 = d1;
            h2 = d2;
            h3 = d3;
            h4 = d4;
            h5 = d5;
            h6 = d6;
            h7 = d7;
            h8 = d8;
            h9 = d9;
            mpos += 16;
            bytes -= 16;
          }
          this.h[0] = h0;
          this.h[1] = h1;
          this.h[2] = h2;
          this.h[3] = h3;
          this.h[4] = h4;
          this.h[5] = h5;
          this.h[6] = h6;
          this.h[7] = h7;
          this.h[8] = h8;
          this.h[9] = h9;
        };
        poly1305.prototype.finish = function(mac, macpos) {
          var g = new Uint16Array(10);
          var c, mask, f, i;
          if (this.leftover) {
            i = this.leftover;
            this.buffer[i++] = 1;
            for (; i < 16; i++) this.buffer[i] = 0;
            this.fin = 1;
            this.blocks(this.buffer, 0, 16);
          }
          c = this.h[1] >>> 13;
          this.h[1] &= 8191;
          for (i = 2; i < 10; i++) {
            this.h[i] += c;
            c = this.h[i] >>> 13;
            this.h[i] &= 8191;
          }
          this.h[0] += c * 5;
          c = this.h[0] >>> 13;
          this.h[0] &= 8191;
          this.h[1] += c;
          c = this.h[1] >>> 13;
          this.h[1] &= 8191;
          this.h[2] += c;
          g[0] = this.h[0] + 5;
          c = g[0] >>> 13;
          g[0] &= 8191;
          for (i = 1; i < 10; i++) {
            g[i] = this.h[i] + c;
            c = g[i] >>> 13;
            g[i] &= 8191;
          }
          g[9] -= 1 << 13;
          mask = (c ^ 1) - 1;
          for (i = 0; i < 10; i++) g[i] &= mask;
          mask = ~mask;
          for (i = 0; i < 10; i++) this.h[i] = this.h[i] & mask | g[i];
          this.h[0] = (this.h[0] | this.h[1] << 13) & 65535;
          this.h[1] = (this.h[1] >>> 3 | this.h[2] << 10) & 65535;
          this.h[2] = (this.h[2] >>> 6 | this.h[3] << 7) & 65535;
          this.h[3] = (this.h[3] >>> 9 | this.h[4] << 4) & 65535;
          this.h[4] = (this.h[4] >>> 12 | this.h[5] << 1 | this.h[6] << 14) & 65535;
          this.h[5] = (this.h[6] >>> 2 | this.h[7] << 11) & 65535;
          this.h[6] = (this.h[7] >>> 5 | this.h[8] << 8) & 65535;
          this.h[7] = (this.h[8] >>> 8 | this.h[9] << 5) & 65535;
          f = this.h[0] + this.pad[0];
          this.h[0] = f & 65535;
          for (i = 1; i < 8; i++) {
            f = (this.h[i] + this.pad[i] | 0) + (f >>> 16) | 0;
            this.h[i] = f & 65535;
          }
          mac[macpos + 0] = this.h[0] >>> 0 & 255;
          mac[macpos + 1] = this.h[0] >>> 8 & 255;
          mac[macpos + 2] = this.h[1] >>> 0 & 255;
          mac[macpos + 3] = this.h[1] >>> 8 & 255;
          mac[macpos + 4] = this.h[2] >>> 0 & 255;
          mac[macpos + 5] = this.h[2] >>> 8 & 255;
          mac[macpos + 6] = this.h[3] >>> 0 & 255;
          mac[macpos + 7] = this.h[3] >>> 8 & 255;
          mac[macpos + 8] = this.h[4] >>> 0 & 255;
          mac[macpos + 9] = this.h[4] >>> 8 & 255;
          mac[macpos + 10] = this.h[5] >>> 0 & 255;
          mac[macpos + 11] = this.h[5] >>> 8 & 255;
          mac[macpos + 12] = this.h[6] >>> 0 & 255;
          mac[macpos + 13] = this.h[6] >>> 8 & 255;
          mac[macpos + 14] = this.h[7] >>> 0 & 255;
          mac[macpos + 15] = this.h[7] >>> 8 & 255;
        };
        poly1305.prototype.update = function(m, mpos, bytes) {
          var i, want;
          if (this.leftover) {
            want = 16 - this.leftover;
            if (want > bytes)
              want = bytes;
            for (i = 0; i < want; i++)
              this.buffer[this.leftover + i] = m[mpos + i];
            bytes -= want;
            mpos += want;
            this.leftover += want;
            if (this.leftover < 16)
              return;
            this.blocks(this.buffer, 0, 16);
            this.leftover = 0;
          }
          if (bytes >= 16) {
            want = bytes - bytes % 16;
            this.blocks(m, mpos, want);
            mpos += want;
            bytes -= want;
          }
          if (bytes) {
            for (i = 0; i < bytes; i++)
              this.buffer[this.leftover + i] = m[mpos + i];
            this.leftover += bytes;
          }
        };
        function crypto_onetimeauth(out, outpos, m, mpos, n, k) {
          var s = new poly1305(k);
          s.update(m, mpos, n);
          s.finish(out, outpos);
          return 0;
        }
        function crypto_onetimeauth_verify(h, hpos, m, mpos, n, k) {
          var x = new Uint8Array(16);
          crypto_onetimeauth(x, 0, m, mpos, n, k);
          return crypto_verify_16(h, hpos, x, 0);
        }
        function crypto_secretbox(c, m, d2, n, k) {
          var i;
          if (d2 < 32) return -1;
          crypto_stream_xor(c, 0, m, 0, d2, n, k);
          crypto_onetimeauth(c, 16, c, 32, d2 - 32, c);
          for (i = 0; i < 16; i++) c[i] = 0;
          return 0;
        }
        function crypto_secretbox_open(m, c, d2, n, k) {
          var i;
          var x = new Uint8Array(32);
          if (d2 < 32) return -1;
          crypto_stream(x, 0, 32, n, k);
          if (crypto_onetimeauth_verify(c, 16, c, 32, d2 - 32, x) !== 0) return -1;
          crypto_stream_xor(m, 0, c, 0, d2, n, k);
          for (i = 0; i < 32; i++) m[i] = 0;
          return 0;
        }
        function set25519(r, a) {
          var i;
          for (i = 0; i < 16; i++) r[i] = a[i] | 0;
        }
        function car25519(o) {
          var i, v, c = 1;
          for (i = 0; i < 16; i++) {
            v = o[i] + c + 65535;
            c = Math.floor(v / 65536);
            o[i] = v - c * 65536;
          }
          o[0] += c - 1 + 37 * (c - 1);
        }
        function sel25519(p2, q, b) {
          var t, c = ~(b - 1);
          for (var i = 0; i < 16; i++) {
            t = c & (p2[i] ^ q[i]);
            p2[i] ^= t;
            q[i] ^= t;
          }
        }
        function pack25519(o, n) {
          var i, j, b;
          var m = gf(), t = gf();
          for (i = 0; i < 16; i++) t[i] = n[i];
          car25519(t);
          car25519(t);
          car25519(t);
          for (j = 0; j < 2; j++) {
            m[0] = t[0] - 65517;
            for (i = 1; i < 15; i++) {
              m[i] = t[i] - 65535 - (m[i - 1] >> 16 & 1);
              m[i - 1] &= 65535;
            }
            m[15] = t[15] - 32767 - (m[14] >> 16 & 1);
            b = m[15] >> 16 & 1;
            m[14] &= 65535;
            sel25519(t, m, 1 - b);
          }
          for (i = 0; i < 16; i++) {
            o[2 * i] = t[i] & 255;
            o[2 * i + 1] = t[i] >> 8;
          }
        }
        function neq25519(a, b) {
          var c = new Uint8Array(32), d2 = new Uint8Array(32);
          pack25519(c, a);
          pack25519(d2, b);
          return crypto_verify_32(c, 0, d2, 0);
        }
        function par25519(a) {
          var d2 = new Uint8Array(32);
          pack25519(d2, a);
          return d2[0] & 1;
        }
        function unpack25519(o, n) {
          var i;
          for (i = 0; i < 16; i++) o[i] = n[2 * i] + (n[2 * i + 1] << 8);
          o[15] &= 32767;
        }
        function A(o, a, b) {
          for (var i = 0; i < 16; i++) o[i] = a[i] + b[i];
        }
        function Z(o, a, b) {
          for (var i = 0; i < 16; i++) o[i] = a[i] - b[i];
        }
        function M(o, a, b) {
          var v, c, t0 = 0, t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0, t7 = 0, t8 = 0, t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0, t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0, t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0, b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7], b8 = b[8], b9 = b[9], b10 = b[10], b11 = b[11], b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
          v = a[0];
          t0 += v * b0;
          t1 += v * b1;
          t2 += v * b2;
          t3 += v * b3;
          t4 += v * b4;
          t5 += v * b5;
          t6 += v * b6;
          t7 += v * b7;
          t8 += v * b8;
          t9 += v * b9;
          t10 += v * b10;
          t11 += v * b11;
          t12 += v * b12;
          t13 += v * b13;
          t14 += v * b14;
          t15 += v * b15;
          v = a[1];
          t1 += v * b0;
          t2 += v * b1;
          t3 += v * b2;
          t4 += v * b3;
          t5 += v * b4;
          t6 += v * b5;
          t7 += v * b6;
          t8 += v * b7;
          t9 += v * b8;
          t10 += v * b9;
          t11 += v * b10;
          t12 += v * b11;
          t13 += v * b12;
          t14 += v * b13;
          t15 += v * b14;
          t16 += v * b15;
          v = a[2];
          t2 += v * b0;
          t3 += v * b1;
          t4 += v * b2;
          t5 += v * b3;
          t6 += v * b4;
          t7 += v * b5;
          t8 += v * b6;
          t9 += v * b7;
          t10 += v * b8;
          t11 += v * b9;
          t12 += v * b10;
          t13 += v * b11;
          t14 += v * b12;
          t15 += v * b13;
          t16 += v * b14;
          t17 += v * b15;
          v = a[3];
          t3 += v * b0;
          t4 += v * b1;
          t5 += v * b2;
          t6 += v * b3;
          t7 += v * b4;
          t8 += v * b5;
          t9 += v * b6;
          t10 += v * b7;
          t11 += v * b8;
          t12 += v * b9;
          t13 += v * b10;
          t14 += v * b11;
          t15 += v * b12;
          t16 += v * b13;
          t17 += v * b14;
          t18 += v * b15;
          v = a[4];
          t4 += v * b0;
          t5 += v * b1;
          t6 += v * b2;
          t7 += v * b3;
          t8 += v * b4;
          t9 += v * b5;
          t10 += v * b6;
          t11 += v * b7;
          t12 += v * b8;
          t13 += v * b9;
          t14 += v * b10;
          t15 += v * b11;
          t16 += v * b12;
          t17 += v * b13;
          t18 += v * b14;
          t19 += v * b15;
          v = a[5];
          t5 += v * b0;
          t6 += v * b1;
          t7 += v * b2;
          t8 += v * b3;
          t9 += v * b4;
          t10 += v * b5;
          t11 += v * b6;
          t12 += v * b7;
          t13 += v * b8;
          t14 += v * b9;
          t15 += v * b10;
          t16 += v * b11;
          t17 += v * b12;
          t18 += v * b13;
          t19 += v * b14;
          t20 += v * b15;
          v = a[6];
          t6 += v * b0;
          t7 += v * b1;
          t8 += v * b2;
          t9 += v * b3;
          t10 += v * b4;
          t11 += v * b5;
          t12 += v * b6;
          t13 += v * b7;
          t14 += v * b8;
          t15 += v * b9;
          t16 += v * b10;
          t17 += v * b11;
          t18 += v * b12;
          t19 += v * b13;
          t20 += v * b14;
          t21 += v * b15;
          v = a[7];
          t7 += v * b0;
          t8 += v * b1;
          t9 += v * b2;
          t10 += v * b3;
          t11 += v * b4;
          t12 += v * b5;
          t13 += v * b6;
          t14 += v * b7;
          t15 += v * b8;
          t16 += v * b9;
          t17 += v * b10;
          t18 += v * b11;
          t19 += v * b12;
          t20 += v * b13;
          t21 += v * b14;
          t22 += v * b15;
          v = a[8];
          t8 += v * b0;
          t9 += v * b1;
          t10 += v * b2;
          t11 += v * b3;
          t12 += v * b4;
          t13 += v * b5;
          t14 += v * b6;
          t15 += v * b7;
          t16 += v * b8;
          t17 += v * b9;
          t18 += v * b10;
          t19 += v * b11;
          t20 += v * b12;
          t21 += v * b13;
          t22 += v * b14;
          t23 += v * b15;
          v = a[9];
          t9 += v * b0;
          t10 += v * b1;
          t11 += v * b2;
          t12 += v * b3;
          t13 += v * b4;
          t14 += v * b5;
          t15 += v * b6;
          t16 += v * b7;
          t17 += v * b8;
          t18 += v * b9;
          t19 += v * b10;
          t20 += v * b11;
          t21 += v * b12;
          t22 += v * b13;
          t23 += v * b14;
          t24 += v * b15;
          v = a[10];
          t10 += v * b0;
          t11 += v * b1;
          t12 += v * b2;
          t13 += v * b3;
          t14 += v * b4;
          t15 += v * b5;
          t16 += v * b6;
          t17 += v * b7;
          t18 += v * b8;
          t19 += v * b9;
          t20 += v * b10;
          t21 += v * b11;
          t22 += v * b12;
          t23 += v * b13;
          t24 += v * b14;
          t25 += v * b15;
          v = a[11];
          t11 += v * b0;
          t12 += v * b1;
          t13 += v * b2;
          t14 += v * b3;
          t15 += v * b4;
          t16 += v * b5;
          t17 += v * b6;
          t18 += v * b7;
          t19 += v * b8;
          t20 += v * b9;
          t21 += v * b10;
          t22 += v * b11;
          t23 += v * b12;
          t24 += v * b13;
          t25 += v * b14;
          t26 += v * b15;
          v = a[12];
          t12 += v * b0;
          t13 += v * b1;
          t14 += v * b2;
          t15 += v * b3;
          t16 += v * b4;
          t17 += v * b5;
          t18 += v * b6;
          t19 += v * b7;
          t20 += v * b8;
          t21 += v * b9;
          t22 += v * b10;
          t23 += v * b11;
          t24 += v * b12;
          t25 += v * b13;
          t26 += v * b14;
          t27 += v * b15;
          v = a[13];
          t13 += v * b0;
          t14 += v * b1;
          t15 += v * b2;
          t16 += v * b3;
          t17 += v * b4;
          t18 += v * b5;
          t19 += v * b6;
          t20 += v * b7;
          t21 += v * b8;
          t22 += v * b9;
          t23 += v * b10;
          t24 += v * b11;
          t25 += v * b12;
          t26 += v * b13;
          t27 += v * b14;
          t28 += v * b15;
          v = a[14];
          t14 += v * b0;
          t15 += v * b1;
          t16 += v * b2;
          t17 += v * b3;
          t18 += v * b4;
          t19 += v * b5;
          t20 += v * b6;
          t21 += v * b7;
          t22 += v * b8;
          t23 += v * b9;
          t24 += v * b10;
          t25 += v * b11;
          t26 += v * b12;
          t27 += v * b13;
          t28 += v * b14;
          t29 += v * b15;
          v = a[15];
          t15 += v * b0;
          t16 += v * b1;
          t17 += v * b2;
          t18 += v * b3;
          t19 += v * b4;
          t20 += v * b5;
          t21 += v * b6;
          t22 += v * b7;
          t23 += v * b8;
          t24 += v * b9;
          t25 += v * b10;
          t26 += v * b11;
          t27 += v * b12;
          t28 += v * b13;
          t29 += v * b14;
          t30 += v * b15;
          t0 += 38 * t16;
          t1 += 38 * t17;
          t2 += 38 * t18;
          t3 += 38 * t19;
          t4 += 38 * t20;
          t5 += 38 * t21;
          t6 += 38 * t22;
          t7 += 38 * t23;
          t8 += 38 * t24;
          t9 += 38 * t25;
          t10 += 38 * t26;
          t11 += 38 * t27;
          t12 += 38 * t28;
          t13 += 38 * t29;
          t14 += 38 * t30;
          c = 1;
          v = t0 + c + 65535;
          c = Math.floor(v / 65536);
          t0 = v - c * 65536;
          v = t1 + c + 65535;
          c = Math.floor(v / 65536);
          t1 = v - c * 65536;
          v = t2 + c + 65535;
          c = Math.floor(v / 65536);
          t2 = v - c * 65536;
          v = t3 + c + 65535;
          c = Math.floor(v / 65536);
          t3 = v - c * 65536;
          v = t4 + c + 65535;
          c = Math.floor(v / 65536);
          t4 = v - c * 65536;
          v = t5 + c + 65535;
          c = Math.floor(v / 65536);
          t5 = v - c * 65536;
          v = t6 + c + 65535;
          c = Math.floor(v / 65536);
          t6 = v - c * 65536;
          v = t7 + c + 65535;
          c = Math.floor(v / 65536);
          t7 = v - c * 65536;
          v = t8 + c + 65535;
          c = Math.floor(v / 65536);
          t8 = v - c * 65536;
          v = t9 + c + 65535;
          c = Math.floor(v / 65536);
          t9 = v - c * 65536;
          v = t10 + c + 65535;
          c = Math.floor(v / 65536);
          t10 = v - c * 65536;
          v = t11 + c + 65535;
          c = Math.floor(v / 65536);
          t11 = v - c * 65536;
          v = t12 + c + 65535;
          c = Math.floor(v / 65536);
          t12 = v - c * 65536;
          v = t13 + c + 65535;
          c = Math.floor(v / 65536);
          t13 = v - c * 65536;
          v = t14 + c + 65535;
          c = Math.floor(v / 65536);
          t14 = v - c * 65536;
          v = t15 + c + 65535;
          c = Math.floor(v / 65536);
          t15 = v - c * 65536;
          t0 += c - 1 + 37 * (c - 1);
          c = 1;
          v = t0 + c + 65535;
          c = Math.floor(v / 65536);
          t0 = v - c * 65536;
          v = t1 + c + 65535;
          c = Math.floor(v / 65536);
          t1 = v - c * 65536;
          v = t2 + c + 65535;
          c = Math.floor(v / 65536);
          t2 = v - c * 65536;
          v = t3 + c + 65535;
          c = Math.floor(v / 65536);
          t3 = v - c * 65536;
          v = t4 + c + 65535;
          c = Math.floor(v / 65536);
          t4 = v - c * 65536;
          v = t5 + c + 65535;
          c = Math.floor(v / 65536);
          t5 = v - c * 65536;
          v = t6 + c + 65535;
          c = Math.floor(v / 65536);
          t6 = v - c * 65536;
          v = t7 + c + 65535;
          c = Math.floor(v / 65536);
          t7 = v - c * 65536;
          v = t8 + c + 65535;
          c = Math.floor(v / 65536);
          t8 = v - c * 65536;
          v = t9 + c + 65535;
          c = Math.floor(v / 65536);
          t9 = v - c * 65536;
          v = t10 + c + 65535;
          c = Math.floor(v / 65536);
          t10 = v - c * 65536;
          v = t11 + c + 65535;
          c = Math.floor(v / 65536);
          t11 = v - c * 65536;
          v = t12 + c + 65535;
          c = Math.floor(v / 65536);
          t12 = v - c * 65536;
          v = t13 + c + 65535;
          c = Math.floor(v / 65536);
          t13 = v - c * 65536;
          v = t14 + c + 65535;
          c = Math.floor(v / 65536);
          t14 = v - c * 65536;
          v = t15 + c + 65535;
          c = Math.floor(v / 65536);
          t15 = v - c * 65536;
          t0 += c - 1 + 37 * (c - 1);
          o[0] = t0;
          o[1] = t1;
          o[2] = t2;
          o[3] = t3;
          o[4] = t4;
          o[5] = t5;
          o[6] = t6;
          o[7] = t7;
          o[8] = t8;
          o[9] = t9;
          o[10] = t10;
          o[11] = t11;
          o[12] = t12;
          o[13] = t13;
          o[14] = t14;
          o[15] = t15;
        }
        function S(o, a) {
          M(o, a, a);
        }
        function inv25519(o, i) {
          var c = gf();
          var a;
          for (a = 0; a < 16; a++) c[a] = i[a];
          for (a = 253; a >= 0; a--) {
            S(c, c);
            if (a !== 2 && a !== 4) M(c, c, i);
          }
          for (a = 0; a < 16; a++) o[a] = c[a];
        }
        function pow2523(o, i) {
          var c = gf();
          var a;
          for (a = 0; a < 16; a++) c[a] = i[a];
          for (a = 250; a >= 0; a--) {
            S(c, c);
            if (a !== 1) M(c, c, i);
          }
          for (a = 0; a < 16; a++) o[a] = c[a];
        }
        function crypto_scalarmult(q, n, p2) {
          var z = new Uint8Array(32);
          var x = new Float64Array(80), r, i;
          var a = gf(), b = gf(), c = gf(), d2 = gf(), e = gf(), f = gf();
          for (i = 0; i < 31; i++) z[i] = n[i];
          z[31] = n[31] & 127 | 64;
          z[0] &= 248;
          unpack25519(x, p2);
          for (i = 0; i < 16; i++) {
            b[i] = x[i];
            d2[i] = a[i] = c[i] = 0;
          }
          a[0] = d2[0] = 1;
          for (i = 254; i >= 0; --i) {
            r = z[i >>> 3] >>> (i & 7) & 1;
            sel25519(a, b, r);
            sel25519(c, d2, r);
            A(e, a, c);
            Z(a, a, c);
            A(c, b, d2);
            Z(b, b, d2);
            S(d2, e);
            S(f, a);
            M(a, c, a);
            M(c, b, e);
            A(e, a, c);
            Z(a, a, c);
            S(b, a);
            Z(c, d2, f);
            M(a, c, _121665);
            A(a, a, d2);
            M(c, c, a);
            M(a, d2, f);
            M(d2, b, x);
            S(b, e);
            sel25519(a, b, r);
            sel25519(c, d2, r);
          }
          for (i = 0; i < 16; i++) {
            x[i + 16] = a[i];
            x[i + 32] = c[i];
            x[i + 48] = b[i];
            x[i + 64] = d2[i];
          }
          var x32 = x.subarray(32);
          var x16 = x.subarray(16);
          inv25519(x32, x32);
          M(x16, x16, x32);
          pack25519(q, x16);
          return 0;
        }
        function crypto_scalarmult_base(q, n) {
          return crypto_scalarmult(q, n, _9);
        }
        function crypto_box_keypair(y, x) {
          randombytes(x, 32);
          return crypto_scalarmult_base(y, x);
        }
        function crypto_box_beforenm(k, y, x) {
          var s = new Uint8Array(32);
          crypto_scalarmult(s, x, y);
          return crypto_core_hsalsa20(k, _0, s, sigma);
        }
        var crypto_box_afternm = crypto_secretbox;
        var crypto_box_open_afternm = crypto_secretbox_open;
        function crypto_box(c, m, d2, n, y, x) {
          var k = new Uint8Array(32);
          crypto_box_beforenm(k, y, x);
          return crypto_box_afternm(c, m, d2, n, k);
        }
        function crypto_box_open(m, c, d2, n, y, x) {
          var k = new Uint8Array(32);
          crypto_box_beforenm(k, y, x);
          return crypto_box_open_afternm(m, c, d2, n, k);
        }
        var K = [
          1116352408,
          3609767458,
          1899447441,
          602891725,
          3049323471,
          3964484399,
          3921009573,
          2173295548,
          961987163,
          4081628472,
          1508970993,
          3053834265,
          2453635748,
          2937671579,
          2870763221,
          3664609560,
          3624381080,
          2734883394,
          310598401,
          1164996542,
          607225278,
          1323610764,
          1426881987,
          3590304994,
          1925078388,
          4068182383,
          2162078206,
          991336113,
          2614888103,
          633803317,
          3248222580,
          3479774868,
          3835390401,
          2666613458,
          4022224774,
          944711139,
          264347078,
          2341262773,
          604807628,
          2007800933,
          770255983,
          1495990901,
          1249150122,
          1856431235,
          1555081692,
          3175218132,
          1996064986,
          2198950837,
          2554220882,
          3999719339,
          2821834349,
          766784016,
          2952996808,
          2566594879,
          3210313671,
          3203337956,
          3336571891,
          1034457026,
          3584528711,
          2466948901,
          113926993,
          3758326383,
          338241895,
          168717936,
          666307205,
          1188179964,
          773529912,
          1546045734,
          1294757372,
          1522805485,
          1396182291,
          2643833823,
          1695183700,
          2343527390,
          1986661051,
          1014477480,
          2177026350,
          1206759142,
          2456956037,
          344077627,
          2730485921,
          1290863460,
          2820302411,
          3158454273,
          3259730800,
          3505952657,
          3345764771,
          106217008,
          3516065817,
          3606008344,
          3600352804,
          1432725776,
          4094571909,
          1467031594,
          275423344,
          851169720,
          430227734,
          3100823752,
          506948616,
          1363258195,
          659060556,
          3750685593,
          883997877,
          3785050280,
          958139571,
          3318307427,
          1322822218,
          3812723403,
          1537002063,
          2003034995,
          1747873779,
          3602036899,
          1955562222,
          1575990012,
          2024104815,
          1125592928,
          2227730452,
          2716904306,
          2361852424,
          442776044,
          2428436474,
          593698344,
          2756734187,
          3733110249,
          3204031479,
          2999351573,
          3329325298,
          3815920427,
          3391569614,
          3928383900,
          3515267271,
          566280711,
          3940187606,
          3454069534,
          4118630271,
          4000239992,
          116418474,
          1914138554,
          174292421,
          2731055270,
          289380356,
          3203993006,
          460393269,
          320620315,
          685471733,
          587496836,
          852142971,
          1086792851,
          1017036298,
          365543100,
          1126000580,
          2618297676,
          1288033470,
          3409855158,
          1501505948,
          4234509866,
          1607167915,
          987167468,
          1816402316,
          1246189591
        ];
        function crypto_hashblocks_hl(hh, hl, m, n) {
          var wh = new Int32Array(16), wl = new Int32Array(16), bh0, bh1, bh2, bh3, bh4, bh5, bh6, bh7, bl0, bl1, bl2, bl3, bl4, bl5, bl6, bl7, th, tl, i, j, h, l, a, b, c, d2;
          var ah0 = hh[0], ah1 = hh[1], ah2 = hh[2], ah3 = hh[3], ah4 = hh[4], ah5 = hh[5], ah6 = hh[6], ah7 = hh[7], al0 = hl[0], al1 = hl[1], al2 = hl[2], al3 = hl[3], al4 = hl[4], al5 = hl[5], al6 = hl[6], al7 = hl[7];
          var pos = 0;
          while (n >= 128) {
            for (i = 0; i < 16; i++) {
              j = 8 * i + pos;
              wh[i] = m[j + 0] << 24 | m[j + 1] << 16 | m[j + 2] << 8 | m[j + 3];
              wl[i] = m[j + 4] << 24 | m[j + 5] << 16 | m[j + 6] << 8 | m[j + 7];
            }
            for (i = 0; i < 80; i++) {
              bh0 = ah0;
              bh1 = ah1;
              bh2 = ah2;
              bh3 = ah3;
              bh4 = ah4;
              bh5 = ah5;
              bh6 = ah6;
              bh7 = ah7;
              bl0 = al0;
              bl1 = al1;
              bl2 = al2;
              bl3 = al3;
              bl4 = al4;
              bl5 = al5;
              bl6 = al6;
              bl7 = al7;
              h = ah7;
              l = al7;
              a = l & 65535;
              b = l >>> 16;
              c = h & 65535;
              d2 = h >>> 16;
              h = (ah4 >>> 14 | al4 << 32 - 14) ^ (ah4 >>> 18 | al4 << 32 - 18) ^ (al4 >>> 41 - 32 | ah4 << 32 - (41 - 32));
              l = (al4 >>> 14 | ah4 << 32 - 14) ^ (al4 >>> 18 | ah4 << 32 - 18) ^ (ah4 >>> 41 - 32 | al4 << 32 - (41 - 32));
              a += l & 65535;
              b += l >>> 16;
              c += h & 65535;
              d2 += h >>> 16;
              h = ah4 & ah5 ^ ~ah4 & ah6;
              l = al4 & al5 ^ ~al4 & al6;
              a += l & 65535;
              b += l >>> 16;
              c += h & 65535;
              d2 += h >>> 16;
              h = K[i * 2];
              l = K[i * 2 + 1];
              a += l & 65535;
              b += l >>> 16;
              c += h & 65535;
              d2 += h >>> 16;
              h = wh[i % 16];
              l = wl[i % 16];
              a += l & 65535;
              b += l >>> 16;
              c += h & 65535;
              d2 += h >>> 16;
              b += a >>> 16;
              c += b >>> 16;
              d2 += c >>> 16;
              th = c & 65535 | d2 << 16;
              tl = a & 65535 | b << 16;
              h = th;
              l = tl;
              a = l & 65535;
              b = l >>> 16;
              c = h & 65535;
              d2 = h >>> 16;
              h = (ah0 >>> 28 | al0 << 32 - 28) ^ (al0 >>> 34 - 32 | ah0 << 32 - (34 - 32)) ^ (al0 >>> 39 - 32 | ah0 << 32 - (39 - 32));
              l = (al0 >>> 28 | ah0 << 32 - 28) ^ (ah0 >>> 34 - 32 | al0 << 32 - (34 - 32)) ^ (ah0 >>> 39 - 32 | al0 << 32 - (39 - 32));
              a += l & 65535;
              b += l >>> 16;
              c += h & 65535;
              d2 += h >>> 16;
              h = ah0 & ah1 ^ ah0 & ah2 ^ ah1 & ah2;
              l = al0 & al1 ^ al0 & al2 ^ al1 & al2;
              a += l & 65535;
              b += l >>> 16;
              c += h & 65535;
              d2 += h >>> 16;
              b += a >>> 16;
              c += b >>> 16;
              d2 += c >>> 16;
              bh7 = c & 65535 | d2 << 16;
              bl7 = a & 65535 | b << 16;
              h = bh3;
              l = bl3;
              a = l & 65535;
              b = l >>> 16;
              c = h & 65535;
              d2 = h >>> 16;
              h = th;
              l = tl;
              a += l & 65535;
              b += l >>> 16;
              c += h & 65535;
              d2 += h >>> 16;
              b += a >>> 16;
              c += b >>> 16;
              d2 += c >>> 16;
              bh3 = c & 65535 | d2 << 16;
              bl3 = a & 65535 | b << 16;
              ah1 = bh0;
              ah2 = bh1;
              ah3 = bh2;
              ah4 = bh3;
              ah5 = bh4;
              ah6 = bh5;
              ah7 = bh6;
              ah0 = bh7;
              al1 = bl0;
              al2 = bl1;
              al3 = bl2;
              al4 = bl3;
              al5 = bl4;
              al6 = bl5;
              al7 = bl6;
              al0 = bl7;
              if (i % 16 === 15) {
                for (j = 0; j < 16; j++) {
                  h = wh[j];
                  l = wl[j];
                  a = l & 65535;
                  b = l >>> 16;
                  c = h & 65535;
                  d2 = h >>> 16;
                  h = wh[(j + 9) % 16];
                  l = wl[(j + 9) % 16];
                  a += l & 65535;
                  b += l >>> 16;
                  c += h & 65535;
                  d2 += h >>> 16;
                  th = wh[(j + 1) % 16];
                  tl = wl[(j + 1) % 16];
                  h = (th >>> 1 | tl << 32 - 1) ^ (th >>> 8 | tl << 32 - 8) ^ th >>> 7;
                  l = (tl >>> 1 | th << 32 - 1) ^ (tl >>> 8 | th << 32 - 8) ^ (tl >>> 7 | th << 32 - 7);
                  a += l & 65535;
                  b += l >>> 16;
                  c += h & 65535;
                  d2 += h >>> 16;
                  th = wh[(j + 14) % 16];
                  tl = wl[(j + 14) % 16];
                  h = (th >>> 19 | tl << 32 - 19) ^ (tl >>> 61 - 32 | th << 32 - (61 - 32)) ^ th >>> 6;
                  l = (tl >>> 19 | th << 32 - 19) ^ (th >>> 61 - 32 | tl << 32 - (61 - 32)) ^ (tl >>> 6 | th << 32 - 6);
                  a += l & 65535;
                  b += l >>> 16;
                  c += h & 65535;
                  d2 += h >>> 16;
                  b += a >>> 16;
                  c += b >>> 16;
                  d2 += c >>> 16;
                  wh[j] = c & 65535 | d2 << 16;
                  wl[j] = a & 65535 | b << 16;
                }
              }
            }
            h = ah0;
            l = al0;
            a = l & 65535;
            b = l >>> 16;
            c = h & 65535;
            d2 = h >>> 16;
            h = hh[0];
            l = hl[0];
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d2 += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d2 += c >>> 16;
            hh[0] = ah0 = c & 65535 | d2 << 16;
            hl[0] = al0 = a & 65535 | b << 16;
            h = ah1;
            l = al1;
            a = l & 65535;
            b = l >>> 16;
            c = h & 65535;
            d2 = h >>> 16;
            h = hh[1];
            l = hl[1];
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d2 += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d2 += c >>> 16;
            hh[1] = ah1 = c & 65535 | d2 << 16;
            hl[1] = al1 = a & 65535 | b << 16;
            h = ah2;
            l = al2;
            a = l & 65535;
            b = l >>> 16;
            c = h & 65535;
            d2 = h >>> 16;
            h = hh[2];
            l = hl[2];
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d2 += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d2 += c >>> 16;
            hh[2] = ah2 = c & 65535 | d2 << 16;
            hl[2] = al2 = a & 65535 | b << 16;
            h = ah3;
            l = al3;
            a = l & 65535;
            b = l >>> 16;
            c = h & 65535;
            d2 = h >>> 16;
            h = hh[3];
            l = hl[3];
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d2 += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d2 += c >>> 16;
            hh[3] = ah3 = c & 65535 | d2 << 16;
            hl[3] = al3 = a & 65535 | b << 16;
            h = ah4;
            l = al4;
            a = l & 65535;
            b = l >>> 16;
            c = h & 65535;
            d2 = h >>> 16;
            h = hh[4];
            l = hl[4];
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d2 += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d2 += c >>> 16;
            hh[4] = ah4 = c & 65535 | d2 << 16;
            hl[4] = al4 = a & 65535 | b << 16;
            h = ah5;
            l = al5;
            a = l & 65535;
            b = l >>> 16;
            c = h & 65535;
            d2 = h >>> 16;
            h = hh[5];
            l = hl[5];
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d2 += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d2 += c >>> 16;
            hh[5] = ah5 = c & 65535 | d2 << 16;
            hl[5] = al5 = a & 65535 | b << 16;
            h = ah6;
            l = al6;
            a = l & 65535;
            b = l >>> 16;
            c = h & 65535;
            d2 = h >>> 16;
            h = hh[6];
            l = hl[6];
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d2 += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d2 += c >>> 16;
            hh[6] = ah6 = c & 65535 | d2 << 16;
            hl[6] = al6 = a & 65535 | b << 16;
            h = ah7;
            l = al7;
            a = l & 65535;
            b = l >>> 16;
            c = h & 65535;
            d2 = h >>> 16;
            h = hh[7];
            l = hl[7];
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d2 += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d2 += c >>> 16;
            hh[7] = ah7 = c & 65535 | d2 << 16;
            hl[7] = al7 = a & 65535 | b << 16;
            pos += 128;
            n -= 128;
          }
          return n;
        }
        function crypto_hash(out, m, n) {
          var hh = new Int32Array(8), hl = new Int32Array(8), x = new Uint8Array(256), i, b = n;
          hh[0] = 1779033703;
          hh[1] = 3144134277;
          hh[2] = 1013904242;
          hh[3] = 2773480762;
          hh[4] = 1359893119;
          hh[5] = 2600822924;
          hh[6] = 528734635;
          hh[7] = 1541459225;
          hl[0] = 4089235720;
          hl[1] = 2227873595;
          hl[2] = 4271175723;
          hl[3] = 1595750129;
          hl[4] = 2917565137;
          hl[5] = 725511199;
          hl[6] = 4215389547;
          hl[7] = 327033209;
          crypto_hashblocks_hl(hh, hl, m, n);
          n %= 128;
          for (i = 0; i < n; i++) x[i] = m[b - n + i];
          x[n] = 128;
          n = 256 - 128 * (n < 112 ? 1 : 0);
          x[n - 9] = 0;
          ts64(x, n - 8, b / 536870912 | 0, b << 3);
          crypto_hashblocks_hl(hh, hl, x, n);
          for (i = 0; i < 8; i++) ts64(out, 8 * i, hh[i], hl[i]);
          return 0;
        }
        function add(p2, q) {
          var a = gf(), b = gf(), c = gf(), d2 = gf(), e = gf(), f = gf(), g = gf(), h = gf(), t = gf();
          Z(a, p2[1], p2[0]);
          Z(t, q[1], q[0]);
          M(a, a, t);
          A(b, p2[0], p2[1]);
          A(t, q[0], q[1]);
          M(b, b, t);
          M(c, p2[3], q[3]);
          M(c, c, D2);
          M(d2, p2[2], q[2]);
          A(d2, d2, d2);
          Z(e, b, a);
          Z(f, d2, c);
          A(g, d2, c);
          A(h, b, a);
          M(p2[0], e, f);
          M(p2[1], h, g);
          M(p2[2], g, f);
          M(p2[3], e, h);
        }
        function cswap(p2, q, b) {
          var i;
          for (i = 0; i < 4; i++) {
            sel25519(p2[i], q[i], b);
          }
        }
        function pack(r, p2) {
          var tx = gf(), ty = gf(), zi = gf();
          inv25519(zi, p2[2]);
          M(tx, p2[0], zi);
          M(ty, p2[1], zi);
          pack25519(r, ty);
          r[31] ^= par25519(tx) << 7;
        }
        function scalarmult(p2, q, s) {
          var b, i;
          set25519(p2[0], gf0);
          set25519(p2[1], gf1);
          set25519(p2[2], gf1);
          set25519(p2[3], gf0);
          for (i = 255; i >= 0; --i) {
            b = s[i / 8 | 0] >> (i & 7) & 1;
            cswap(p2, q, b);
            add(q, p2);
            add(p2, p2);
            cswap(p2, q, b);
          }
        }
        function scalarbase(p2, s) {
          var q = [gf(), gf(), gf(), gf()];
          set25519(q[0], X);
          set25519(q[1], Y);
          set25519(q[2], gf1);
          M(q[3], X, Y);
          scalarmult(p2, q, s);
        }
        function crypto_sign_keypair(pk, sk, seeded) {
          var d2 = new Uint8Array(64);
          var p2 = [gf(), gf(), gf(), gf()];
          var i;
          if (!seeded) randombytes(sk, 32);
          crypto_hash(d2, sk, 32);
          d2[0] &= 248;
          d2[31] &= 127;
          d2[31] |= 64;
          scalarbase(p2, d2);
          pack(pk, p2);
          for (i = 0; i < 32; i++) sk[i + 32] = pk[i];
          return 0;
        }
        var L = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);
        function modL(r, x) {
          var carry, i, j, k;
          for (i = 63; i >= 32; --i) {
            carry = 0;
            for (j = i - 32, k = i - 12; j < k; ++j) {
              x[j] += carry - 16 * x[i] * L[j - (i - 32)];
              carry = Math.floor((x[j] + 128) / 256);
              x[j] -= carry * 256;
            }
            x[j] += carry;
            x[i] = 0;
          }
          carry = 0;
          for (j = 0; j < 32; j++) {
            x[j] += carry - (x[31] >> 4) * L[j];
            carry = x[j] >> 8;
            x[j] &= 255;
          }
          for (j = 0; j < 32; j++) x[j] -= carry * L[j];
          for (i = 0; i < 32; i++) {
            x[i + 1] += x[i] >> 8;
            r[i] = x[i] & 255;
          }
        }
        function reduce(r) {
          var x = new Float64Array(64), i;
          for (i = 0; i < 64; i++) x[i] = r[i];
          for (i = 0; i < 64; i++) r[i] = 0;
          modL(r, x);
        }
        function crypto_sign(sm, m, n, sk) {
          var d2 = new Uint8Array(64), h = new Uint8Array(64), r = new Uint8Array(64);
          var i, j, x = new Float64Array(64);
          var p2 = [gf(), gf(), gf(), gf()];
          crypto_hash(d2, sk, 32);
          d2[0] &= 248;
          d2[31] &= 127;
          d2[31] |= 64;
          var smlen = n + 64;
          for (i = 0; i < n; i++) sm[64 + i] = m[i];
          for (i = 0; i < 32; i++) sm[32 + i] = d2[32 + i];
          crypto_hash(r, sm.subarray(32), n + 32);
          reduce(r);
          scalarbase(p2, r);
          pack(sm, p2);
          for (i = 32; i < 64; i++) sm[i] = sk[i];
          crypto_hash(h, sm, n + 64);
          reduce(h);
          for (i = 0; i < 64; i++) x[i] = 0;
          for (i = 0; i < 32; i++) x[i] = r[i];
          for (i = 0; i < 32; i++) {
            for (j = 0; j < 32; j++) {
              x[i + j] += h[i] * d2[j];
            }
          }
          modL(sm.subarray(32), x);
          return smlen;
        }
        function unpackneg(r, p2) {
          var t = gf(), chk = gf(), num = gf(), den = gf(), den2 = gf(), den4 = gf(), den6 = gf();
          set25519(r[2], gf1);
          unpack25519(r[1], p2);
          S(num, r[1]);
          M(den, num, D);
          Z(num, num, r[2]);
          A(den, r[2], den);
          S(den2, den);
          S(den4, den2);
          M(den6, den4, den2);
          M(t, den6, num);
          M(t, t, den);
          pow2523(t, t);
          M(t, t, num);
          M(t, t, den);
          M(t, t, den);
          M(r[0], t, den);
          S(chk, r[0]);
          M(chk, chk, den);
          if (neq25519(chk, num)) M(r[0], r[0], I2);
          S(chk, r[0]);
          M(chk, chk, den);
          if (neq25519(chk, num)) return -1;
          if (par25519(r[0]) === p2[31] >> 7) Z(r[0], gf0, r[0]);
          M(r[3], r[0], r[1]);
          return 0;
        }
        function crypto_sign_open(m, sm, n, pk) {
          var i;
          var t = new Uint8Array(32), h = new Uint8Array(64);
          var p2 = [gf(), gf(), gf(), gf()], q = [gf(), gf(), gf(), gf()];
          if (n < 64) return -1;
          if (unpackneg(q, pk)) return -1;
          for (i = 0; i < n; i++) m[i] = sm[i];
          for (i = 0; i < 32; i++) m[i + 32] = pk[i];
          crypto_hash(h, m, n);
          reduce(h);
          scalarmult(p2, q, h);
          scalarbase(q, sm.subarray(32));
          add(p2, q);
          pack(t, p2);
          n -= 64;
          if (crypto_verify_32(sm, 0, t, 0)) {
            for (i = 0; i < n; i++) m[i] = 0;
            return -1;
          }
          for (i = 0; i < n; i++) m[i] = sm[i + 64];
          return n;
        }
        var crypto_secretbox_KEYBYTES = 32, crypto_secretbox_NONCEBYTES = 24, crypto_secretbox_ZEROBYTES = 32, crypto_secretbox_BOXZEROBYTES = 16, crypto_scalarmult_BYTES = 32, crypto_scalarmult_SCALARBYTES = 32, crypto_box_PUBLICKEYBYTES = 32, crypto_box_SECRETKEYBYTES = 32, crypto_box_BEFORENMBYTES = 32, crypto_box_NONCEBYTES = crypto_secretbox_NONCEBYTES, crypto_box_ZEROBYTES = crypto_secretbox_ZEROBYTES, crypto_box_BOXZEROBYTES = crypto_secretbox_BOXZEROBYTES, crypto_sign_BYTES = 64, crypto_sign_PUBLICKEYBYTES = 32, crypto_sign_SECRETKEYBYTES = 64, crypto_sign_SEEDBYTES = 32, crypto_hash_BYTES = 64;
        nacl2.lowlevel = {
          crypto_core_hsalsa20,
          crypto_stream_xor,
          crypto_stream,
          crypto_stream_salsa20_xor,
          crypto_stream_salsa20,
          crypto_onetimeauth,
          crypto_onetimeauth_verify,
          crypto_verify_16,
          crypto_verify_32,
          crypto_secretbox,
          crypto_secretbox_open,
          crypto_scalarmult,
          crypto_scalarmult_base,
          crypto_box_beforenm,
          crypto_box_afternm,
          crypto_box,
          crypto_box_open,
          crypto_box_keypair,
          crypto_hash,
          crypto_sign,
          crypto_sign_keypair,
          crypto_sign_open,
          crypto_secretbox_KEYBYTES,
          crypto_secretbox_NONCEBYTES,
          crypto_secretbox_ZEROBYTES,
          crypto_secretbox_BOXZEROBYTES,
          crypto_scalarmult_BYTES,
          crypto_scalarmult_SCALARBYTES,
          crypto_box_PUBLICKEYBYTES,
          crypto_box_SECRETKEYBYTES,
          crypto_box_BEFORENMBYTES,
          crypto_box_NONCEBYTES,
          crypto_box_ZEROBYTES,
          crypto_box_BOXZEROBYTES,
          crypto_sign_BYTES,
          crypto_sign_PUBLICKEYBYTES,
          crypto_sign_SECRETKEYBYTES,
          crypto_sign_SEEDBYTES,
          crypto_hash_BYTES,
          gf,
          D,
          L,
          pack25519,
          unpack25519,
          M,
          A,
          S,
          Z,
          pow2523,
          add,
          set25519,
          modL,
          scalarmult,
          scalarbase
        };
        function checkLengths(k, n) {
          if (k.length !== crypto_secretbox_KEYBYTES) throw new Error("bad key size");
          if (n.length !== crypto_secretbox_NONCEBYTES) throw new Error("bad nonce size");
        }
        function checkBoxLengths(pk, sk) {
          if (pk.length !== crypto_box_PUBLICKEYBYTES) throw new Error("bad public key size");
          if (sk.length !== crypto_box_SECRETKEYBYTES) throw new Error("bad secret key size");
        }
        function checkArrayTypes() {
          for (var i = 0; i < arguments.length; i++) {
            if (!(arguments[i] instanceof Uint8Array))
              throw new TypeError("unexpected type, use Uint8Array");
          }
        }
        function cleanup(arr) {
          for (var i = 0; i < arr.length; i++) arr[i] = 0;
        }
        nacl2.randomBytes = function(n) {
          var b = new Uint8Array(n);
          randombytes(b, n);
          return b;
        };
        nacl2.secretbox = function(msg, nonce, key) {
          checkArrayTypes(msg, nonce, key);
          checkLengths(key, nonce);
          var m = new Uint8Array(crypto_secretbox_ZEROBYTES + msg.length);
          var c = new Uint8Array(m.length);
          for (var i = 0; i < msg.length; i++) m[i + crypto_secretbox_ZEROBYTES] = msg[i];
          crypto_secretbox(c, m, m.length, nonce, key);
          return c.subarray(crypto_secretbox_BOXZEROBYTES);
        };
        nacl2.secretbox.open = function(box, nonce, key) {
          checkArrayTypes(box, nonce, key);
          checkLengths(key, nonce);
          var c = new Uint8Array(crypto_secretbox_BOXZEROBYTES + box.length);
          var m = new Uint8Array(c.length);
          for (var i = 0; i < box.length; i++) c[i + crypto_secretbox_BOXZEROBYTES] = box[i];
          if (c.length < 32) return null;
          if (crypto_secretbox_open(m, c, c.length, nonce, key) !== 0) return null;
          return m.subarray(crypto_secretbox_ZEROBYTES);
        };
        nacl2.secretbox.keyLength = crypto_secretbox_KEYBYTES;
        nacl2.secretbox.nonceLength = crypto_secretbox_NONCEBYTES;
        nacl2.secretbox.overheadLength = crypto_secretbox_BOXZEROBYTES;
        nacl2.scalarMult = function(n, p2) {
          checkArrayTypes(n, p2);
          if (n.length !== crypto_scalarmult_SCALARBYTES) throw new Error("bad n size");
          if (p2.length !== crypto_scalarmult_BYTES) throw new Error("bad p size");
          var q = new Uint8Array(crypto_scalarmult_BYTES);
          crypto_scalarmult(q, n, p2);
          return q;
        };
        nacl2.scalarMult.base = function(n) {
          checkArrayTypes(n);
          if (n.length !== crypto_scalarmult_SCALARBYTES) throw new Error("bad n size");
          var q = new Uint8Array(crypto_scalarmult_BYTES);
          crypto_scalarmult_base(q, n);
          return q;
        };
        nacl2.scalarMult.scalarLength = crypto_scalarmult_SCALARBYTES;
        nacl2.scalarMult.groupElementLength = crypto_scalarmult_BYTES;
        nacl2.box = function(msg, nonce, publicKey, secretKey) {
          var k = nacl2.box.before(publicKey, secretKey);
          return nacl2.secretbox(msg, nonce, k);
        };
        nacl2.box.before = function(publicKey, secretKey) {
          checkArrayTypes(publicKey, secretKey);
          checkBoxLengths(publicKey, secretKey);
          var k = new Uint8Array(crypto_box_BEFORENMBYTES);
          crypto_box_beforenm(k, publicKey, secretKey);
          return k;
        };
        nacl2.box.after = nacl2.secretbox;
        nacl2.box.open = function(msg, nonce, publicKey, secretKey) {
          var k = nacl2.box.before(publicKey, secretKey);
          return nacl2.secretbox.open(msg, nonce, k);
        };
        nacl2.box.open.after = nacl2.secretbox.open;
        nacl2.box.keyPair = function() {
          var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
          var sk = new Uint8Array(crypto_box_SECRETKEYBYTES);
          crypto_box_keypair(pk, sk);
          return { publicKey: pk, secretKey: sk };
        };
        nacl2.box.keyPair.fromSecretKey = function(secretKey) {
          checkArrayTypes(secretKey);
          if (secretKey.length !== crypto_box_SECRETKEYBYTES)
            throw new Error("bad secret key size");
          var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
          crypto_scalarmult_base(pk, secretKey);
          return { publicKey: pk, secretKey: new Uint8Array(secretKey) };
        };
        nacl2.box.publicKeyLength = crypto_box_PUBLICKEYBYTES;
        nacl2.box.secretKeyLength = crypto_box_SECRETKEYBYTES;
        nacl2.box.sharedKeyLength = crypto_box_BEFORENMBYTES;
        nacl2.box.nonceLength = crypto_box_NONCEBYTES;
        nacl2.box.overheadLength = nacl2.secretbox.overheadLength;
        nacl2.sign = function(msg, secretKey) {
          checkArrayTypes(msg, secretKey);
          if (secretKey.length !== crypto_sign_SECRETKEYBYTES)
            throw new Error("bad secret key size");
          var signedMsg = new Uint8Array(crypto_sign_BYTES + msg.length);
          crypto_sign(signedMsg, msg, msg.length, secretKey);
          return signedMsg;
        };
        nacl2.sign.open = function(signedMsg, publicKey) {
          checkArrayTypes(signedMsg, publicKey);
          if (publicKey.length !== crypto_sign_PUBLICKEYBYTES)
            throw new Error("bad public key size");
          var tmp = new Uint8Array(signedMsg.length);
          var mlen = crypto_sign_open(tmp, signedMsg, signedMsg.length, publicKey);
          if (mlen < 0) return null;
          var m = new Uint8Array(mlen);
          for (var i = 0; i < m.length; i++) m[i] = tmp[i];
          return m;
        };
        nacl2.sign.detached = function(msg, secretKey) {
          var signedMsg = nacl2.sign(msg, secretKey);
          var sig = new Uint8Array(crypto_sign_BYTES);
          for (var i = 0; i < sig.length; i++) sig[i] = signedMsg[i];
          return sig;
        };
        nacl2.sign.detached.verify = function(msg, sig, publicKey) {
          checkArrayTypes(msg, sig, publicKey);
          if (sig.length !== crypto_sign_BYTES)
            throw new Error("bad signature size");
          if (publicKey.length !== crypto_sign_PUBLICKEYBYTES)
            throw new Error("bad public key size");
          var sm = new Uint8Array(crypto_sign_BYTES + msg.length);
          var m = new Uint8Array(crypto_sign_BYTES + msg.length);
          var i;
          for (i = 0; i < crypto_sign_BYTES; i++) sm[i] = sig[i];
          for (i = 0; i < msg.length; i++) sm[i + crypto_sign_BYTES] = msg[i];
          return crypto_sign_open(m, sm, sm.length, publicKey) >= 0;
        };
        nacl2.sign.keyPair = function() {
          var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
          var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
          crypto_sign_keypair(pk, sk);
          return { publicKey: pk, secretKey: sk };
        };
        nacl2.sign.keyPair.fromSecretKey = function(secretKey) {
          checkArrayTypes(secretKey);
          if (secretKey.length !== crypto_sign_SECRETKEYBYTES)
            throw new Error("bad secret key size");
          var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
          for (var i = 0; i < pk.length; i++) pk[i] = secretKey[32 + i];
          return { publicKey: pk, secretKey: new Uint8Array(secretKey) };
        };
        nacl2.sign.keyPair.fromSeed = function(seed) {
          checkArrayTypes(seed);
          if (seed.length !== crypto_sign_SEEDBYTES)
            throw new Error("bad seed size");
          var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
          var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
          for (var i = 0; i < 32; i++) sk[i] = seed[i];
          crypto_sign_keypair(pk, sk, true);
          return { publicKey: pk, secretKey: sk };
        };
        nacl2.sign.publicKeyLength = crypto_sign_PUBLICKEYBYTES;
        nacl2.sign.secretKeyLength = crypto_sign_SECRETKEYBYTES;
        nacl2.sign.seedLength = crypto_sign_SEEDBYTES;
        nacl2.sign.signatureLength = crypto_sign_BYTES;
        nacl2.hash = function(msg) {
          checkArrayTypes(msg);
          var h = new Uint8Array(crypto_hash_BYTES);
          crypto_hash(h, msg, msg.length);
          return h;
        };
        nacl2.hash.hashLength = crypto_hash_BYTES;
        nacl2.verify = function(x, y) {
          checkArrayTypes(x, y);
          if (x.length === 0 || y.length === 0) return false;
          if (x.length !== y.length) return false;
          return vn(x, 0, y, 0, x.length) === 0 ? true : false;
        };
        nacl2.setPRNG = function(fn) {
          randombytes = fn;
        };
        (function() {
          var crypto2 = typeof self !== "undefined" ? self.crypto || self.msCrypto : null;
          if (crypto2 && crypto2.getRandomValues) {
            var QUOTA = 65536;
            nacl2.setPRNG(function(x, n) {
              var i, v = new Uint8Array(n);
              for (i = 0; i < n; i += QUOTA) {
                crypto2.getRandomValues(v.subarray(i, i + Math.min(n - i, QUOTA)));
              }
              for (i = 0; i < n; i++) x[i] = v[i];
              cleanup(v);
            });
          } else if (typeof __require !== "undefined") {
            crypto2 = require_crypto();
            if (crypto2 && crypto2.randomBytes) {
              nacl2.setPRNG(function(x, n) {
                var i, v = crypto2.randomBytes(n);
                for (i = 0; i < n; i++) x[i] = v[i];
                cleanup(v);
              });
            }
          }
        })();
      })(typeof module !== "undefined" && module.exports ? module.exports : self.nacl = self.nacl || {});
    }
  });

  // node_modules/js-sha512/src/sha512.js
  var require_sha512 = __commonJS({
    "node_modules/js-sha512/src/sha512.js"(exports, module) {
      /*
       * [js-sha512]{@link https://github.com/emn178/js-sha512}
       *
       * @version 0.8.0
       * @author Chen, Yi-Cyuan [emn178@gmail.com]
       * @copyright Chen, Yi-Cyuan 2014-2018
       * @license MIT
       */
      (function() {
        "use strict";
        var INPUT_ERROR = "input is invalid type";
        var FINALIZE_ERROR = "finalize already called";
        var WINDOW = typeof window === "object";
        var root = WINDOW ? window : {};
        if (root.JS_SHA512_NO_WINDOW) {
          WINDOW = false;
        }
        var WEB_WORKER = !WINDOW && typeof self === "object";
        var NODE_JS = !root.JS_SHA512_NO_NODE_JS && typeof process === "object" && process.versions && process.versions.node;
        if (NODE_JS) {
          root = global;
        } else if (WEB_WORKER) {
          root = self;
        }
        var COMMON_JS = !root.JS_SHA512_NO_COMMON_JS && typeof module === "object" && module.exports;
        var AMD = typeof define === "function" && define.amd;
        var ARRAY_BUFFER = !root.JS_SHA512_NO_ARRAY_BUFFER && typeof ArrayBuffer !== "undefined";
        var HEX_CHARS = "0123456789abcdef".split("");
        var EXTRA = [-2147483648, 8388608, 32768, 128];
        var SHIFT = [24, 16, 8, 0];
        var K = [
          1116352408,
          3609767458,
          1899447441,
          602891725,
          3049323471,
          3964484399,
          3921009573,
          2173295548,
          961987163,
          4081628472,
          1508970993,
          3053834265,
          2453635748,
          2937671579,
          2870763221,
          3664609560,
          3624381080,
          2734883394,
          310598401,
          1164996542,
          607225278,
          1323610764,
          1426881987,
          3590304994,
          1925078388,
          4068182383,
          2162078206,
          991336113,
          2614888103,
          633803317,
          3248222580,
          3479774868,
          3835390401,
          2666613458,
          4022224774,
          944711139,
          264347078,
          2341262773,
          604807628,
          2007800933,
          770255983,
          1495990901,
          1249150122,
          1856431235,
          1555081692,
          3175218132,
          1996064986,
          2198950837,
          2554220882,
          3999719339,
          2821834349,
          766784016,
          2952996808,
          2566594879,
          3210313671,
          3203337956,
          3336571891,
          1034457026,
          3584528711,
          2466948901,
          113926993,
          3758326383,
          338241895,
          168717936,
          666307205,
          1188179964,
          773529912,
          1546045734,
          1294757372,
          1522805485,
          1396182291,
          2643833823,
          1695183700,
          2343527390,
          1986661051,
          1014477480,
          2177026350,
          1206759142,
          2456956037,
          344077627,
          2730485921,
          1290863460,
          2820302411,
          3158454273,
          3259730800,
          3505952657,
          3345764771,
          106217008,
          3516065817,
          3606008344,
          3600352804,
          1432725776,
          4094571909,
          1467031594,
          275423344,
          851169720,
          430227734,
          3100823752,
          506948616,
          1363258195,
          659060556,
          3750685593,
          883997877,
          3785050280,
          958139571,
          3318307427,
          1322822218,
          3812723403,
          1537002063,
          2003034995,
          1747873779,
          3602036899,
          1955562222,
          1575990012,
          2024104815,
          1125592928,
          2227730452,
          2716904306,
          2361852424,
          442776044,
          2428436474,
          593698344,
          2756734187,
          3733110249,
          3204031479,
          2999351573,
          3329325298,
          3815920427,
          3391569614,
          3928383900,
          3515267271,
          566280711,
          3940187606,
          3454069534,
          4118630271,
          4000239992,
          116418474,
          1914138554,
          174292421,
          2731055270,
          289380356,
          3203993006,
          460393269,
          320620315,
          685471733,
          587496836,
          852142971,
          1086792851,
          1017036298,
          365543100,
          1126000580,
          2618297676,
          1288033470,
          3409855158,
          1501505948,
          4234509866,
          1607167915,
          987167468,
          1816402316,
          1246189591
        ];
        var OUTPUT_TYPES = ["hex", "array", "digest", "arrayBuffer"];
        var blocks = [];
        if (root.JS_SHA512_NO_NODE_JS || !Array.isArray) {
          Array.isArray = function(obj) {
            return Object.prototype.toString.call(obj) === "[object Array]";
          };
        }
        if (ARRAY_BUFFER && (root.JS_SHA512_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
          ArrayBuffer.isView = function(obj) {
            return typeof obj === "object" && obj.buffer && obj.buffer.constructor === ArrayBuffer;
          };
        }
        var createOutputMethod = function(outputType, bits) {
          return function(message) {
            return new Sha512(bits, true).update(message)[outputType]();
          };
        };
        var createMethod = function(bits) {
          var method = createOutputMethod("hex", bits);
          method.create = function() {
            return new Sha512(bits);
          };
          method.update = function(message) {
            return method.create().update(message);
          };
          for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
            var type = OUTPUT_TYPES[i];
            method[type] = createOutputMethod(type, bits);
          }
          return method;
        };
        var createHmacOutputMethod = function(outputType, bits) {
          return function(key, message) {
            return new HmacSha512(key, bits, true).update(message)[outputType]();
          };
        };
        var createHmacMethod = function(bits) {
          var method = createHmacOutputMethod("hex", bits);
          method.create = function(key) {
            return new HmacSha512(key, bits);
          };
          method.update = function(key, message) {
            return method.create(key).update(message);
          };
          for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
            var type = OUTPUT_TYPES[i];
            method[type] = createHmacOutputMethod(type, bits);
          }
          return method;
        };
        function Sha512(bits, sharedMemory) {
          if (sharedMemory) {
            blocks[0] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = blocks[16] = blocks[17] = blocks[18] = blocks[19] = blocks[20] = blocks[21] = blocks[22] = blocks[23] = blocks[24] = blocks[25] = blocks[26] = blocks[27] = blocks[28] = blocks[29] = blocks[30] = blocks[31] = blocks[32] = 0;
            this.blocks = blocks;
          } else {
            this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          }
          if (bits == 384) {
            this.h0h = 3418070365;
            this.h0l = 3238371032;
            this.h1h = 1654270250;
            this.h1l = 914150663;
            this.h2h = 2438529370;
            this.h2l = 812702999;
            this.h3h = 355462360;
            this.h3l = 4144912697;
            this.h4h = 1731405415;
            this.h4l = 4290775857;
            this.h5h = 2394180231;
            this.h5l = 1750603025;
            this.h6h = 3675008525;
            this.h6l = 1694076839;
            this.h7h = 1203062813;
            this.h7l = 3204075428;
          } else if (bits == 256) {
            this.h0h = 573645204;
            this.h0l = 4230739756;
            this.h1h = 2673172387;
            this.h1l = 3360449730;
            this.h2h = 596883563;
            this.h2l = 1867755857;
            this.h3h = 2520282905;
            this.h3l = 1497426621;
            this.h4h = 2519219938;
            this.h4l = 2827943907;
            this.h5h = 3193839141;
            this.h5l = 1401305490;
            this.h6h = 721525244;
            this.h6l = 746961066;
            this.h7h = 246885852;
            this.h7l = 2177182882;
          } else if (bits == 224) {
            this.h0h = 2352822216;
            this.h0l = 424955298;
            this.h1h = 1944164710;
            this.h1l = 2312950998;
            this.h2h = 502970286;
            this.h2l = 855612546;
            this.h3h = 1738396948;
            this.h3l = 1479516111;
            this.h4h = 258812777;
            this.h4l = 2077511080;
            this.h5h = 2011393907;
            this.h5l = 79989058;
            this.h6h = 1067287976;
            this.h6l = 1780299464;
            this.h7h = 286451373;
            this.h7l = 2446758561;
          } else {
            this.h0h = 1779033703;
            this.h0l = 4089235720;
            this.h1h = 3144134277;
            this.h1l = 2227873595;
            this.h2h = 1013904242;
            this.h2l = 4271175723;
            this.h3h = 2773480762;
            this.h3l = 1595750129;
            this.h4h = 1359893119;
            this.h4l = 2917565137;
            this.h5h = 2600822924;
            this.h5l = 725511199;
            this.h6h = 528734635;
            this.h6l = 4215389547;
            this.h7h = 1541459225;
            this.h7l = 327033209;
          }
          this.bits = bits;
          this.block = this.start = this.bytes = this.hBytes = 0;
          this.finalized = this.hashed = false;
        }
        Sha512.prototype.update = function(message) {
          if (this.finalized) {
            throw new Error(FINALIZE_ERROR);
          }
          var notString, type = typeof message;
          if (type !== "string") {
            if (type === "object") {
              if (message === null) {
                throw new Error(INPUT_ERROR);
              } else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
                message = new Uint8Array(message);
              } else if (!Array.isArray(message)) {
                if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {
                  throw new Error(INPUT_ERROR);
                }
              }
            } else {
              throw new Error(INPUT_ERROR);
            }
            notString = true;
          }
          var code, index = 0, i, length = message.length, blocks2 = this.blocks;
          while (index < length) {
            if (this.hashed) {
              this.hashed = false;
              blocks2[0] = this.block;
              blocks2[1] = blocks2[2] = blocks2[3] = blocks2[4] = blocks2[5] = blocks2[6] = blocks2[7] = blocks2[8] = blocks2[9] = blocks2[10] = blocks2[11] = blocks2[12] = blocks2[13] = blocks2[14] = blocks2[15] = blocks2[16] = blocks2[17] = blocks2[18] = blocks2[19] = blocks2[20] = blocks2[21] = blocks2[22] = blocks2[23] = blocks2[24] = blocks2[25] = blocks2[26] = blocks2[27] = blocks2[28] = blocks2[29] = blocks2[30] = blocks2[31] = blocks2[32] = 0;
            }
            if (notString) {
              for (i = this.start; index < length && i < 128; ++index) {
                blocks2[i >> 2] |= message[index] << SHIFT[i++ & 3];
              }
            } else {
              for (i = this.start; index < length && i < 128; ++index) {
                code = message.charCodeAt(index);
                if (code < 128) {
                  blocks2[i >> 2] |= code << SHIFT[i++ & 3];
                } else if (code < 2048) {
                  blocks2[i >> 2] |= (192 | code >> 6) << SHIFT[i++ & 3];
                  blocks2[i >> 2] |= (128 | code & 63) << SHIFT[i++ & 3];
                } else if (code < 55296 || code >= 57344) {
                  blocks2[i >> 2] |= (224 | code >> 12) << SHIFT[i++ & 3];
                  blocks2[i >> 2] |= (128 | code >> 6 & 63) << SHIFT[i++ & 3];
                  blocks2[i >> 2] |= (128 | code & 63) << SHIFT[i++ & 3];
                } else {
                  code = 65536 + ((code & 1023) << 10 | message.charCodeAt(++index) & 1023);
                  blocks2[i >> 2] |= (240 | code >> 18) << SHIFT[i++ & 3];
                  blocks2[i >> 2] |= (128 | code >> 12 & 63) << SHIFT[i++ & 3];
                  blocks2[i >> 2] |= (128 | code >> 6 & 63) << SHIFT[i++ & 3];
                  blocks2[i >> 2] |= (128 | code & 63) << SHIFT[i++ & 3];
                }
              }
            }
            this.lastByteIndex = i;
            this.bytes += i - this.start;
            if (i >= 128) {
              this.block = blocks2[32];
              this.start = i - 128;
              this.hash();
              this.hashed = true;
            } else {
              this.start = i;
            }
          }
          if (this.bytes > 4294967295) {
            this.hBytes += this.bytes / 4294967296 << 0;
            this.bytes = this.bytes % 4294967296;
          }
          return this;
        };
        Sha512.prototype.finalize = function() {
          if (this.finalized) {
            return;
          }
          this.finalized = true;
          var blocks2 = this.blocks, i = this.lastByteIndex;
          blocks2[32] = this.block;
          blocks2[i >> 2] |= EXTRA[i & 3];
          this.block = blocks2[32];
          if (i >= 112) {
            if (!this.hashed) {
              this.hash();
            }
            blocks2[0] = this.block;
            blocks2[1] = blocks2[2] = blocks2[3] = blocks2[4] = blocks2[5] = blocks2[6] = blocks2[7] = blocks2[8] = blocks2[9] = blocks2[10] = blocks2[11] = blocks2[12] = blocks2[13] = blocks2[14] = blocks2[15] = blocks2[16] = blocks2[17] = blocks2[18] = blocks2[19] = blocks2[20] = blocks2[21] = blocks2[22] = blocks2[23] = blocks2[24] = blocks2[25] = blocks2[26] = blocks2[27] = blocks2[28] = blocks2[29] = blocks2[30] = blocks2[31] = blocks2[32] = 0;
          }
          blocks2[30] = this.hBytes << 3 | this.bytes >>> 29;
          blocks2[31] = this.bytes << 3;
          this.hash();
        };
        Sha512.prototype.hash = function() {
          var h0h = this.h0h, h0l = this.h0l, h1h = this.h1h, h1l = this.h1l, h2h = this.h2h, h2l = this.h2l, h3h = this.h3h, h3l = this.h3l, h4h = this.h4h, h4l = this.h4l, h5h = this.h5h, h5l = this.h5l, h6h = this.h6h, h6l = this.h6l, h7h = this.h7h, h7l = this.h7l, blocks2 = this.blocks, j, s0h, s0l, s1h, s1l, c1, c2, c3, c4, abh, abl, dah, dal, cdh, cdl, bch, bcl, majh, majl, t1h, t1l, t2h, t2l, chh, chl;
          for (j = 32; j < 160; j += 2) {
            t1h = blocks2[j - 30];
            t1l = blocks2[j - 29];
            s0h = (t1h >>> 1 | t1l << 31) ^ (t1h >>> 8 | t1l << 24) ^ t1h >>> 7;
            s0l = (t1l >>> 1 | t1h << 31) ^ (t1l >>> 8 | t1h << 24) ^ (t1l >>> 7 | t1h << 25);
            t1h = blocks2[j - 4];
            t1l = blocks2[j - 3];
            s1h = (t1h >>> 19 | t1l << 13) ^ (t1l >>> 29 | t1h << 3) ^ t1h >>> 6;
            s1l = (t1l >>> 19 | t1h << 13) ^ (t1h >>> 29 | t1l << 3) ^ (t1l >>> 6 | t1h << 26);
            t1h = blocks2[j - 32];
            t1l = blocks2[j - 31];
            t2h = blocks2[j - 14];
            t2l = blocks2[j - 13];
            c1 = (t2l & 65535) + (t1l & 65535) + (s0l & 65535) + (s1l & 65535);
            c2 = (t2l >>> 16) + (t1l >>> 16) + (s0l >>> 16) + (s1l >>> 16) + (c1 >>> 16);
            c3 = (t2h & 65535) + (t1h & 65535) + (s0h & 65535) + (s1h & 65535) + (c2 >>> 16);
            c4 = (t2h >>> 16) + (t1h >>> 16) + (s0h >>> 16) + (s1h >>> 16) + (c3 >>> 16);
            blocks2[j] = c4 << 16 | c3 & 65535;
            blocks2[j + 1] = c2 << 16 | c1 & 65535;
          }
          var ah = h0h, al = h0l, bh = h1h, bl = h1l, ch = h2h, cl = h2l, dh = h3h, dl = h3l, eh = h4h, el = h4l, fh = h5h, fl = h5l, gh = h6h, gl = h6l, hh = h7h, hl = h7l;
          bch = bh & ch;
          bcl = bl & cl;
          for (j = 0; j < 160; j += 8) {
            s0h = (ah >>> 28 | al << 4) ^ (al >>> 2 | ah << 30) ^ (al >>> 7 | ah << 25);
            s0l = (al >>> 28 | ah << 4) ^ (ah >>> 2 | al << 30) ^ (ah >>> 7 | al << 25);
            s1h = (eh >>> 14 | el << 18) ^ (eh >>> 18 | el << 14) ^ (el >>> 9 | eh << 23);
            s1l = (el >>> 14 | eh << 18) ^ (el >>> 18 | eh << 14) ^ (eh >>> 9 | el << 23);
            abh = ah & bh;
            abl = al & bl;
            majh = abh ^ ah & ch ^ bch;
            majl = abl ^ al & cl ^ bcl;
            chh = eh & fh ^ ~eh & gh;
            chl = el & fl ^ ~el & gl;
            t1h = blocks2[j];
            t1l = blocks2[j + 1];
            t2h = K[j];
            t2l = K[j + 1];
            c1 = (t2l & 65535) + (t1l & 65535) + (chl & 65535) + (s1l & 65535) + (hl & 65535);
            c2 = (t2l >>> 16) + (t1l >>> 16) + (chl >>> 16) + (s1l >>> 16) + (hl >>> 16) + (c1 >>> 16);
            c3 = (t2h & 65535) + (t1h & 65535) + (chh & 65535) + (s1h & 65535) + (hh & 65535) + (c2 >>> 16);
            c4 = (t2h >>> 16) + (t1h >>> 16) + (chh >>> 16) + (s1h >>> 16) + (hh >>> 16) + (c3 >>> 16);
            t1h = c4 << 16 | c3 & 65535;
            t1l = c2 << 16 | c1 & 65535;
            c1 = (majl & 65535) + (s0l & 65535);
            c2 = (majl >>> 16) + (s0l >>> 16) + (c1 >>> 16);
            c3 = (majh & 65535) + (s0h & 65535) + (c2 >>> 16);
            c4 = (majh >>> 16) + (s0h >>> 16) + (c3 >>> 16);
            t2h = c4 << 16 | c3 & 65535;
            t2l = c2 << 16 | c1 & 65535;
            c1 = (dl & 65535) + (t1l & 65535);
            c2 = (dl >>> 16) + (t1l >>> 16) + (c1 >>> 16);
            c3 = (dh & 65535) + (t1h & 65535) + (c2 >>> 16);
            c4 = (dh >>> 16) + (t1h >>> 16) + (c3 >>> 16);
            hh = c4 << 16 | c3 & 65535;
            hl = c2 << 16 | c1 & 65535;
            c1 = (t2l & 65535) + (t1l & 65535);
            c2 = (t2l >>> 16) + (t1l >>> 16) + (c1 >>> 16);
            c3 = (t2h & 65535) + (t1h & 65535) + (c2 >>> 16);
            c4 = (t2h >>> 16) + (t1h >>> 16) + (c3 >>> 16);
            dh = c4 << 16 | c3 & 65535;
            dl = c2 << 16 | c1 & 65535;
            s0h = (dh >>> 28 | dl << 4) ^ (dl >>> 2 | dh << 30) ^ (dl >>> 7 | dh << 25);
            s0l = (dl >>> 28 | dh << 4) ^ (dh >>> 2 | dl << 30) ^ (dh >>> 7 | dl << 25);
            s1h = (hh >>> 14 | hl << 18) ^ (hh >>> 18 | hl << 14) ^ (hl >>> 9 | hh << 23);
            s1l = (hl >>> 14 | hh << 18) ^ (hl >>> 18 | hh << 14) ^ (hh >>> 9 | hl << 23);
            dah = dh & ah;
            dal = dl & al;
            majh = dah ^ dh & bh ^ abh;
            majl = dal ^ dl & bl ^ abl;
            chh = hh & eh ^ ~hh & fh;
            chl = hl & el ^ ~hl & fl;
            t1h = blocks2[j + 2];
            t1l = blocks2[j + 3];
            t2h = K[j + 2];
            t2l = K[j + 3];
            c1 = (t2l & 65535) + (t1l & 65535) + (chl & 65535) + (s1l & 65535) + (gl & 65535);
            c2 = (t2l >>> 16) + (t1l >>> 16) + (chl >>> 16) + (s1l >>> 16) + (gl >>> 16) + (c1 >>> 16);
            c3 = (t2h & 65535) + (t1h & 65535) + (chh & 65535) + (s1h & 65535) + (gh & 65535) + (c2 >>> 16);
            c4 = (t2h >>> 16) + (t1h >>> 16) + (chh >>> 16) + (s1h >>> 16) + (gh >>> 16) + (c3 >>> 16);
            t1h = c4 << 16 | c3 & 65535;
            t1l = c2 << 16 | c1 & 65535;
            c1 = (majl & 65535) + (s0l & 65535);
            c2 = (majl >>> 16) + (s0l >>> 16) + (c1 >>> 16);
            c3 = (majh & 65535) + (s0h & 65535) + (c2 >>> 16);
            c4 = (majh >>> 16) + (s0h >>> 16) + (c3 >>> 16);
            t2h = c4 << 16 | c3 & 65535;
            t2l = c2 << 16 | c1 & 65535;
            c1 = (cl & 65535) + (t1l & 65535);
            c2 = (cl >>> 16) + (t1l >>> 16) + (c1 >>> 16);
            c3 = (ch & 65535) + (t1h & 65535) + (c2 >>> 16);
            c4 = (ch >>> 16) + (t1h >>> 16) + (c3 >>> 16);
            gh = c4 << 16 | c3 & 65535;
            gl = c2 << 16 | c1 & 65535;
            c1 = (t2l & 65535) + (t1l & 65535);
            c2 = (t2l >>> 16) + (t1l >>> 16) + (c1 >>> 16);
            c3 = (t2h & 65535) + (t1h & 65535) + (c2 >>> 16);
            c4 = (t2h >>> 16) + (t1h >>> 16) + (c3 >>> 16);
            ch = c4 << 16 | c3 & 65535;
            cl = c2 << 16 | c1 & 65535;
            s0h = (ch >>> 28 | cl << 4) ^ (cl >>> 2 | ch << 30) ^ (cl >>> 7 | ch << 25);
            s0l = (cl >>> 28 | ch << 4) ^ (ch >>> 2 | cl << 30) ^ (ch >>> 7 | cl << 25);
            s1h = (gh >>> 14 | gl << 18) ^ (gh >>> 18 | gl << 14) ^ (gl >>> 9 | gh << 23);
            s1l = (gl >>> 14 | gh << 18) ^ (gl >>> 18 | gh << 14) ^ (gh >>> 9 | gl << 23);
            cdh = ch & dh;
            cdl = cl & dl;
            majh = cdh ^ ch & ah ^ dah;
            majl = cdl ^ cl & al ^ dal;
            chh = gh & hh ^ ~gh & eh;
            chl = gl & hl ^ ~gl & el;
            t1h = blocks2[j + 4];
            t1l = blocks2[j + 5];
            t2h = K[j + 4];
            t2l = K[j + 5];
            c1 = (t2l & 65535) + (t1l & 65535) + (chl & 65535) + (s1l & 65535) + (fl & 65535);
            c2 = (t2l >>> 16) + (t1l >>> 16) + (chl >>> 16) + (s1l >>> 16) + (fl >>> 16) + (c1 >>> 16);
            c3 = (t2h & 65535) + (t1h & 65535) + (chh & 65535) + (s1h & 65535) + (fh & 65535) + (c2 >>> 16);
            c4 = (t2h >>> 16) + (t1h >>> 16) + (chh >>> 16) + (s1h >>> 16) + (fh >>> 16) + (c3 >>> 16);
            t1h = c4 << 16 | c3 & 65535;
            t1l = c2 << 16 | c1 & 65535;
            c1 = (majl & 65535) + (s0l & 65535);
            c2 = (majl >>> 16) + (s0l >>> 16) + (c1 >>> 16);
            c3 = (majh & 65535) + (s0h & 65535) + (c2 >>> 16);
            c4 = (majh >>> 16) + (s0h >>> 16) + (c3 >>> 16);
            t2h = c4 << 16 | c3 & 65535;
            t2l = c2 << 16 | c1 & 65535;
            c1 = (bl & 65535) + (t1l & 65535);
            c2 = (bl >>> 16) + (t1l >>> 16) + (c1 >>> 16);
            c3 = (bh & 65535) + (t1h & 65535) + (c2 >>> 16);
            c4 = (bh >>> 16) + (t1h >>> 16) + (c3 >>> 16);
            fh = c4 << 16 | c3 & 65535;
            fl = c2 << 16 | c1 & 65535;
            c1 = (t2l & 65535) + (t1l & 65535);
            c2 = (t2l >>> 16) + (t1l >>> 16) + (c1 >>> 16);
            c3 = (t2h & 65535) + (t1h & 65535) + (c2 >>> 16);
            c4 = (t2h >>> 16) + (t1h >>> 16) + (c3 >>> 16);
            bh = c4 << 16 | c3 & 65535;
            bl = c2 << 16 | c1 & 65535;
            s0h = (bh >>> 28 | bl << 4) ^ (bl >>> 2 | bh << 30) ^ (bl >>> 7 | bh << 25);
            s0l = (bl >>> 28 | bh << 4) ^ (bh >>> 2 | bl << 30) ^ (bh >>> 7 | bl << 25);
            s1h = (fh >>> 14 | fl << 18) ^ (fh >>> 18 | fl << 14) ^ (fl >>> 9 | fh << 23);
            s1l = (fl >>> 14 | fh << 18) ^ (fl >>> 18 | fh << 14) ^ (fh >>> 9 | fl << 23);
            bch = bh & ch;
            bcl = bl & cl;
            majh = bch ^ bh & dh ^ cdh;
            majl = bcl ^ bl & dl ^ cdl;
            chh = fh & gh ^ ~fh & hh;
            chl = fl & gl ^ ~fl & hl;
            t1h = blocks2[j + 6];
            t1l = blocks2[j + 7];
            t2h = K[j + 6];
            t2l = K[j + 7];
            c1 = (t2l & 65535) + (t1l & 65535) + (chl & 65535) + (s1l & 65535) + (el & 65535);
            c2 = (t2l >>> 16) + (t1l >>> 16) + (chl >>> 16) + (s1l >>> 16) + (el >>> 16) + (c1 >>> 16);
            c3 = (t2h & 65535) + (t1h & 65535) + (chh & 65535) + (s1h & 65535) + (eh & 65535) + (c2 >>> 16);
            c4 = (t2h >>> 16) + (t1h >>> 16) + (chh >>> 16) + (s1h >>> 16) + (eh >>> 16) + (c3 >>> 16);
            t1h = c4 << 16 | c3 & 65535;
            t1l = c2 << 16 | c1 & 65535;
            c1 = (majl & 65535) + (s0l & 65535);
            c2 = (majl >>> 16) + (s0l >>> 16) + (c1 >>> 16);
            c3 = (majh & 65535) + (s0h & 65535) + (c2 >>> 16);
            c4 = (majh >>> 16) + (s0h >>> 16) + (c3 >>> 16);
            t2h = c4 << 16 | c3 & 65535;
            t2l = c2 << 16 | c1 & 65535;
            c1 = (al & 65535) + (t1l & 65535);
            c2 = (al >>> 16) + (t1l >>> 16) + (c1 >>> 16);
            c3 = (ah & 65535) + (t1h & 65535) + (c2 >>> 16);
            c4 = (ah >>> 16) + (t1h >>> 16) + (c3 >>> 16);
            eh = c4 << 16 | c3 & 65535;
            el = c2 << 16 | c1 & 65535;
            c1 = (t2l & 65535) + (t1l & 65535);
            c2 = (t2l >>> 16) + (t1l >>> 16) + (c1 >>> 16);
            c3 = (t2h & 65535) + (t1h & 65535) + (c2 >>> 16);
            c4 = (t2h >>> 16) + (t1h >>> 16) + (c3 >>> 16);
            ah = c4 << 16 | c3 & 65535;
            al = c2 << 16 | c1 & 65535;
          }
          c1 = (h0l & 65535) + (al & 65535);
          c2 = (h0l >>> 16) + (al >>> 16) + (c1 >>> 16);
          c3 = (h0h & 65535) + (ah & 65535) + (c2 >>> 16);
          c4 = (h0h >>> 16) + (ah >>> 16) + (c3 >>> 16);
          this.h0h = c4 << 16 | c3 & 65535;
          this.h0l = c2 << 16 | c1 & 65535;
          c1 = (h1l & 65535) + (bl & 65535);
          c2 = (h1l >>> 16) + (bl >>> 16) + (c1 >>> 16);
          c3 = (h1h & 65535) + (bh & 65535) + (c2 >>> 16);
          c4 = (h1h >>> 16) + (bh >>> 16) + (c3 >>> 16);
          this.h1h = c4 << 16 | c3 & 65535;
          this.h1l = c2 << 16 | c1 & 65535;
          c1 = (h2l & 65535) + (cl & 65535);
          c2 = (h2l >>> 16) + (cl >>> 16) + (c1 >>> 16);
          c3 = (h2h & 65535) + (ch & 65535) + (c2 >>> 16);
          c4 = (h2h >>> 16) + (ch >>> 16) + (c3 >>> 16);
          this.h2h = c4 << 16 | c3 & 65535;
          this.h2l = c2 << 16 | c1 & 65535;
          c1 = (h3l & 65535) + (dl & 65535);
          c2 = (h3l >>> 16) + (dl >>> 16) + (c1 >>> 16);
          c3 = (h3h & 65535) + (dh & 65535) + (c2 >>> 16);
          c4 = (h3h >>> 16) + (dh >>> 16) + (c3 >>> 16);
          this.h3h = c4 << 16 | c3 & 65535;
          this.h3l = c2 << 16 | c1 & 65535;
          c1 = (h4l & 65535) + (el & 65535);
          c2 = (h4l >>> 16) + (el >>> 16) + (c1 >>> 16);
          c3 = (h4h & 65535) + (eh & 65535) + (c2 >>> 16);
          c4 = (h4h >>> 16) + (eh >>> 16) + (c3 >>> 16);
          this.h4h = c4 << 16 | c3 & 65535;
          this.h4l = c2 << 16 | c1 & 65535;
          c1 = (h5l & 65535) + (fl & 65535);
          c2 = (h5l >>> 16) + (fl >>> 16) + (c1 >>> 16);
          c3 = (h5h & 65535) + (fh & 65535) + (c2 >>> 16);
          c4 = (h5h >>> 16) + (fh >>> 16) + (c3 >>> 16);
          this.h5h = c4 << 16 | c3 & 65535;
          this.h5l = c2 << 16 | c1 & 65535;
          c1 = (h6l & 65535) + (gl & 65535);
          c2 = (h6l >>> 16) + (gl >>> 16) + (c1 >>> 16);
          c3 = (h6h & 65535) + (gh & 65535) + (c2 >>> 16);
          c4 = (h6h >>> 16) + (gh >>> 16) + (c3 >>> 16);
          this.h6h = c4 << 16 | c3 & 65535;
          this.h6l = c2 << 16 | c1 & 65535;
          c1 = (h7l & 65535) + (hl & 65535);
          c2 = (h7l >>> 16) + (hl >>> 16) + (c1 >>> 16);
          c3 = (h7h & 65535) + (hh & 65535) + (c2 >>> 16);
          c4 = (h7h >>> 16) + (hh >>> 16) + (c3 >>> 16);
          this.h7h = c4 << 16 | c3 & 65535;
          this.h7l = c2 << 16 | c1 & 65535;
        };
        Sha512.prototype.hex = function() {
          this.finalize();
          var h0h = this.h0h, h0l = this.h0l, h1h = this.h1h, h1l = this.h1l, h2h = this.h2h, h2l = this.h2l, h3h = this.h3h, h3l = this.h3l, h4h = this.h4h, h4l = this.h4l, h5h = this.h5h, h5l = this.h5l, h6h = this.h6h, h6l = this.h6l, h7h = this.h7h, h7l = this.h7l, bits = this.bits;
          var hex = HEX_CHARS[h0h >> 28 & 15] + HEX_CHARS[h0h >> 24 & 15] + HEX_CHARS[h0h >> 20 & 15] + HEX_CHARS[h0h >> 16 & 15] + HEX_CHARS[h0h >> 12 & 15] + HEX_CHARS[h0h >> 8 & 15] + HEX_CHARS[h0h >> 4 & 15] + HEX_CHARS[h0h & 15] + HEX_CHARS[h0l >> 28 & 15] + HEX_CHARS[h0l >> 24 & 15] + HEX_CHARS[h0l >> 20 & 15] + HEX_CHARS[h0l >> 16 & 15] + HEX_CHARS[h0l >> 12 & 15] + HEX_CHARS[h0l >> 8 & 15] + HEX_CHARS[h0l >> 4 & 15] + HEX_CHARS[h0l & 15] + HEX_CHARS[h1h >> 28 & 15] + HEX_CHARS[h1h >> 24 & 15] + HEX_CHARS[h1h >> 20 & 15] + HEX_CHARS[h1h >> 16 & 15] + HEX_CHARS[h1h >> 12 & 15] + HEX_CHARS[h1h >> 8 & 15] + HEX_CHARS[h1h >> 4 & 15] + HEX_CHARS[h1h & 15] + HEX_CHARS[h1l >> 28 & 15] + HEX_CHARS[h1l >> 24 & 15] + HEX_CHARS[h1l >> 20 & 15] + HEX_CHARS[h1l >> 16 & 15] + HEX_CHARS[h1l >> 12 & 15] + HEX_CHARS[h1l >> 8 & 15] + HEX_CHARS[h1l >> 4 & 15] + HEX_CHARS[h1l & 15] + HEX_CHARS[h2h >> 28 & 15] + HEX_CHARS[h2h >> 24 & 15] + HEX_CHARS[h2h >> 20 & 15] + HEX_CHARS[h2h >> 16 & 15] + HEX_CHARS[h2h >> 12 & 15] + HEX_CHARS[h2h >> 8 & 15] + HEX_CHARS[h2h >> 4 & 15] + HEX_CHARS[h2h & 15] + HEX_CHARS[h2l >> 28 & 15] + HEX_CHARS[h2l >> 24 & 15] + HEX_CHARS[h2l >> 20 & 15] + HEX_CHARS[h2l >> 16 & 15] + HEX_CHARS[h2l >> 12 & 15] + HEX_CHARS[h2l >> 8 & 15] + HEX_CHARS[h2l >> 4 & 15] + HEX_CHARS[h2l & 15] + HEX_CHARS[h3h >> 28 & 15] + HEX_CHARS[h3h >> 24 & 15] + HEX_CHARS[h3h >> 20 & 15] + HEX_CHARS[h3h >> 16 & 15] + HEX_CHARS[h3h >> 12 & 15] + HEX_CHARS[h3h >> 8 & 15] + HEX_CHARS[h3h >> 4 & 15] + HEX_CHARS[h3h & 15];
          if (bits >= 256) {
            hex += HEX_CHARS[h3l >> 28 & 15] + HEX_CHARS[h3l >> 24 & 15] + HEX_CHARS[h3l >> 20 & 15] + HEX_CHARS[h3l >> 16 & 15] + HEX_CHARS[h3l >> 12 & 15] + HEX_CHARS[h3l >> 8 & 15] + HEX_CHARS[h3l >> 4 & 15] + HEX_CHARS[h3l & 15];
          }
          if (bits >= 384) {
            hex += HEX_CHARS[h4h >> 28 & 15] + HEX_CHARS[h4h >> 24 & 15] + HEX_CHARS[h4h >> 20 & 15] + HEX_CHARS[h4h >> 16 & 15] + HEX_CHARS[h4h >> 12 & 15] + HEX_CHARS[h4h >> 8 & 15] + HEX_CHARS[h4h >> 4 & 15] + HEX_CHARS[h4h & 15] + HEX_CHARS[h4l >> 28 & 15] + HEX_CHARS[h4l >> 24 & 15] + HEX_CHARS[h4l >> 20 & 15] + HEX_CHARS[h4l >> 16 & 15] + HEX_CHARS[h4l >> 12 & 15] + HEX_CHARS[h4l >> 8 & 15] + HEX_CHARS[h4l >> 4 & 15] + HEX_CHARS[h4l & 15] + HEX_CHARS[h5h >> 28 & 15] + HEX_CHARS[h5h >> 24 & 15] + HEX_CHARS[h5h >> 20 & 15] + HEX_CHARS[h5h >> 16 & 15] + HEX_CHARS[h5h >> 12 & 15] + HEX_CHARS[h5h >> 8 & 15] + HEX_CHARS[h5h >> 4 & 15] + HEX_CHARS[h5h & 15] + HEX_CHARS[h5l >> 28 & 15] + HEX_CHARS[h5l >> 24 & 15] + HEX_CHARS[h5l >> 20 & 15] + HEX_CHARS[h5l >> 16 & 15] + HEX_CHARS[h5l >> 12 & 15] + HEX_CHARS[h5l >> 8 & 15] + HEX_CHARS[h5l >> 4 & 15] + HEX_CHARS[h5l & 15];
          }
          if (bits == 512) {
            hex += HEX_CHARS[h6h >> 28 & 15] + HEX_CHARS[h6h >> 24 & 15] + HEX_CHARS[h6h >> 20 & 15] + HEX_CHARS[h6h >> 16 & 15] + HEX_CHARS[h6h >> 12 & 15] + HEX_CHARS[h6h >> 8 & 15] + HEX_CHARS[h6h >> 4 & 15] + HEX_CHARS[h6h & 15] + HEX_CHARS[h6l >> 28 & 15] + HEX_CHARS[h6l >> 24 & 15] + HEX_CHARS[h6l >> 20 & 15] + HEX_CHARS[h6l >> 16 & 15] + HEX_CHARS[h6l >> 12 & 15] + HEX_CHARS[h6l >> 8 & 15] + HEX_CHARS[h6l >> 4 & 15] + HEX_CHARS[h6l & 15] + HEX_CHARS[h7h >> 28 & 15] + HEX_CHARS[h7h >> 24 & 15] + HEX_CHARS[h7h >> 20 & 15] + HEX_CHARS[h7h >> 16 & 15] + HEX_CHARS[h7h >> 12 & 15] + HEX_CHARS[h7h >> 8 & 15] + HEX_CHARS[h7h >> 4 & 15] + HEX_CHARS[h7h & 15] + HEX_CHARS[h7l >> 28 & 15] + HEX_CHARS[h7l >> 24 & 15] + HEX_CHARS[h7l >> 20 & 15] + HEX_CHARS[h7l >> 16 & 15] + HEX_CHARS[h7l >> 12 & 15] + HEX_CHARS[h7l >> 8 & 15] + HEX_CHARS[h7l >> 4 & 15] + HEX_CHARS[h7l & 15];
          }
          return hex;
        };
        Sha512.prototype.toString = Sha512.prototype.hex;
        Sha512.prototype.digest = function() {
          this.finalize();
          var h0h = this.h0h, h0l = this.h0l, h1h = this.h1h, h1l = this.h1l, h2h = this.h2h, h2l = this.h2l, h3h = this.h3h, h3l = this.h3l, h4h = this.h4h, h4l = this.h4l, h5h = this.h5h, h5l = this.h5l, h6h = this.h6h, h6l = this.h6l, h7h = this.h7h, h7l = this.h7l, bits = this.bits;
          var arr = [
            h0h >> 24 & 255,
            h0h >> 16 & 255,
            h0h >> 8 & 255,
            h0h & 255,
            h0l >> 24 & 255,
            h0l >> 16 & 255,
            h0l >> 8 & 255,
            h0l & 255,
            h1h >> 24 & 255,
            h1h >> 16 & 255,
            h1h >> 8 & 255,
            h1h & 255,
            h1l >> 24 & 255,
            h1l >> 16 & 255,
            h1l >> 8 & 255,
            h1l & 255,
            h2h >> 24 & 255,
            h2h >> 16 & 255,
            h2h >> 8 & 255,
            h2h & 255,
            h2l >> 24 & 255,
            h2l >> 16 & 255,
            h2l >> 8 & 255,
            h2l & 255,
            h3h >> 24 & 255,
            h3h >> 16 & 255,
            h3h >> 8 & 255,
            h3h & 255
          ];
          if (bits >= 256) {
            arr.push(h3l >> 24 & 255, h3l >> 16 & 255, h3l >> 8 & 255, h3l & 255);
          }
          if (bits >= 384) {
            arr.push(
              h4h >> 24 & 255,
              h4h >> 16 & 255,
              h4h >> 8 & 255,
              h4h & 255,
              h4l >> 24 & 255,
              h4l >> 16 & 255,
              h4l >> 8 & 255,
              h4l & 255,
              h5h >> 24 & 255,
              h5h >> 16 & 255,
              h5h >> 8 & 255,
              h5h & 255,
              h5l >> 24 & 255,
              h5l >> 16 & 255,
              h5l >> 8 & 255,
              h5l & 255
            );
          }
          if (bits == 512) {
            arr.push(
              h6h >> 24 & 255,
              h6h >> 16 & 255,
              h6h >> 8 & 255,
              h6h & 255,
              h6l >> 24 & 255,
              h6l >> 16 & 255,
              h6l >> 8 & 255,
              h6l & 255,
              h7h >> 24 & 255,
              h7h >> 16 & 255,
              h7h >> 8 & 255,
              h7h & 255,
              h7l >> 24 & 255,
              h7l >> 16 & 255,
              h7l >> 8 & 255,
              h7l & 255
            );
          }
          return arr;
        };
        Sha512.prototype.array = Sha512.prototype.digest;
        Sha512.prototype.arrayBuffer = function() {
          this.finalize();
          var bits = this.bits;
          var buffer = new ArrayBuffer(bits / 8);
          var dataView = new DataView(buffer);
          dataView.setUint32(0, this.h0h);
          dataView.setUint32(4, this.h0l);
          dataView.setUint32(8, this.h1h);
          dataView.setUint32(12, this.h1l);
          dataView.setUint32(16, this.h2h);
          dataView.setUint32(20, this.h2l);
          dataView.setUint32(24, this.h3h);
          if (bits >= 256) {
            dataView.setUint32(28, this.h3l);
          }
          if (bits >= 384) {
            dataView.setUint32(32, this.h4h);
            dataView.setUint32(36, this.h4l);
            dataView.setUint32(40, this.h5h);
            dataView.setUint32(44, this.h5l);
          }
          if (bits == 512) {
            dataView.setUint32(48, this.h6h);
            dataView.setUint32(52, this.h6l);
            dataView.setUint32(56, this.h7h);
            dataView.setUint32(60, this.h7l);
          }
          return buffer;
        };
        Sha512.prototype.clone = function() {
          var hash = new Sha512(this.bits, false);
          this.copyTo(hash);
          return hash;
        };
        Sha512.prototype.copyTo = function(hash) {
          var i = 0, attrs = [
            "h0h",
            "h0l",
            "h1h",
            "h1l",
            "h2h",
            "h2l",
            "h3h",
            "h3l",
            "h4h",
            "h4l",
            "h5h",
            "h5l",
            "h6h",
            "h6l",
            "h7h",
            "h7l",
            "start",
            "bytes",
            "hBytes",
            "finalized",
            "hashed",
            "lastByteIndex"
          ];
          for (i = 0; i < attrs.length; ++i) {
            hash[attrs[i]] = this[attrs[i]];
          }
          for (i = 0; i < this.blocks.length; ++i) {
            hash.blocks[i] = this.blocks[i];
          }
        };
        function HmacSha512(key, bits, sharedMemory) {
          var notString, type = typeof key;
          if (type !== "string") {
            if (type === "object") {
              if (key === null) {
                throw new Error(INPUT_ERROR);
              } else if (ARRAY_BUFFER && key.constructor === ArrayBuffer) {
                key = new Uint8Array(key);
              } else if (!Array.isArray(key)) {
                if (!ARRAY_BUFFER || !ArrayBuffer.isView(key)) {
                  throw new Error(INPUT_ERROR);
                }
              }
            } else {
              throw new Error(INPUT_ERROR);
            }
            notString = true;
          }
          var length = key.length;
          if (!notString) {
            var bytes = [], length = key.length, index = 0, code;
            for (var i = 0; i < length; ++i) {
              code = key.charCodeAt(i);
              if (code < 128) {
                bytes[index++] = code;
              } else if (code < 2048) {
                bytes[index++] = 192 | code >> 6;
                bytes[index++] = 128 | code & 63;
              } else if (code < 55296 || code >= 57344) {
                bytes[index++] = 224 | code >> 12;
                bytes[index++] = 128 | code >> 6 & 63;
                bytes[index++] = 128 | code & 63;
              } else {
                code = 65536 + ((code & 1023) << 10 | key.charCodeAt(++i) & 1023);
                bytes[index++] = 240 | code >> 18;
                bytes[index++] = 128 | code >> 12 & 63;
                bytes[index++] = 128 | code >> 6 & 63;
                bytes[index++] = 128 | code & 63;
              }
            }
            key = bytes;
          }
          if (key.length > 128) {
            key = new Sha512(bits, true).update(key).array();
          }
          var oKeyPad = [], iKeyPad = [];
          for (var i = 0; i < 128; ++i) {
            var b = key[i] || 0;
            oKeyPad[i] = 92 ^ b;
            iKeyPad[i] = 54 ^ b;
          }
          Sha512.call(this, bits, sharedMemory);
          this.update(iKeyPad);
          this.oKeyPad = oKeyPad;
          this.inner = true;
          this.sharedMemory = sharedMemory;
        }
        HmacSha512.prototype = new Sha512();
        HmacSha512.prototype.finalize = function() {
          Sha512.prototype.finalize.call(this);
          if (this.inner) {
            this.inner = false;
            var innerHash = this.array();
            Sha512.call(this, this.bits, this.sharedMemory);
            this.update(this.oKeyPad);
            this.update(innerHash);
            Sha512.prototype.finalize.call(this);
          }
        };
        HmacSha512.prototype.clone = function() {
          var hash = new HmacSha512([], this.bits, false);
          this.copyTo(hash);
          hash.inner = this.inner;
          for (var i = 0; i < this.oKeyPad.length; ++i) {
            hash.oKeyPad[i] = this.oKeyPad[i];
          }
          return hash;
        };
        var exports2 = createMethod(512);
        exports2.sha512 = exports2;
        exports2.sha384 = createMethod(384);
        exports2.sha512_256 = createMethod(256);
        exports2.sha512_224 = createMethod(224);
        exports2.sha512.hmac = createHmacMethod(512);
        exports2.sha384.hmac = createHmacMethod(384);
        exports2.sha512_256.hmac = createHmacMethod(256);
        exports2.sha512_224.hmac = createHmacMethod(224);
        if (COMMON_JS) {
          module.exports = exports2;
        } else {
          root.sha512 = exports2.sha512;
          root.sha384 = exports2.sha384;
          root.sha512_256 = exports2.sha512_256;
          root.sha512_224 = exports2.sha512_224;
          if (AMD) {
            define(function() {
              return exports2;
            });
          }
        }
      })();
    }
  });

  // node_modules/algosdk/dist/esm/nacl/naclWrappers.js
  function genericHash(arr) {
    return import_js_sha512.default.sha512_256.array(arr);
  }
  function isValidSignatureLength(len) {
    return len === import_tweetnacl.default.sign.signatureLength;
  }
  function keyPairFromSecretKey(sk) {
    return import_tweetnacl.default.sign.keyPair.fromSecretKey(sk);
  }
  function sign(msg, secretKey) {
    return import_tweetnacl.default.sign.detached(msg, secretKey);
  }
  function verify(message, signature, verifyKey) {
    return import_tweetnacl.default.sign.detached.verify(message, signature, verifyKey);
  }
  var import_tweetnacl, import_js_sha512, PUBLIC_KEY_LENGTH, SECRET_KEY_LENGTH, HASH_BYTES_LENGTH;
  var init_naclWrappers = __esm({
    "node_modules/algosdk/dist/esm/nacl/naclWrappers.js"() {
      import_tweetnacl = __toESM(require_nacl_fast(), 1);
      import_js_sha512 = __toESM(require_sha512(), 1);
      init_utils();
      PUBLIC_KEY_LENGTH = import_tweetnacl.default.sign.publicKeyLength;
      SECRET_KEY_LENGTH = import_tweetnacl.default.sign.secretKeyLength;
      HASH_BYTES_LENGTH = 32;
    }
  });

  // node_modules/algosdk/dist/esm/encoding/uint64.js
  var init_uint642 = __esm({
    "node_modules/algosdk/dist/esm/encoding/uint64.js"() {
      init_utils();
    }
  });

  // node_modules/algosdk/dist/esm/utils/ed25519-check.js
  function powMod(base, exp) {
    let res = 1n;
    let currentExp = exp;
    let currentBase = (base % p + p) % p;
    while (currentExp > 0n) {
      if (currentExp & 1n)
        res = res * currentBase % p;
      currentBase = currentBase * currentBase % p;
      currentExp >>= 1n;
    }
    return res;
  }
  function decodeY(keyBytes) {
    const bytes = keyBytes.slice();
    bytes[31] &= 127;
    let y = 0n;
    for (let i = 31; i >= 0; i--)
      y = y << 8n | BigInt(bytes[i]);
    return y;
  }
  function hasValidX(y) {
    const yr = (y % p + p) % p;
    const y2 = yr * yr % p;
    const u = (y2 - 1n + p) % p;
    const v = (d * y2 + 1n) % p;
    if (v === 0n)
      return false;
    const vInv = powMod(v, p - 2n);
    const x2 = u * vInv % p;
    const x1 = powMod(x2, (p + 3n) / 8n);
    if (x1 * x1 % p === x2)
      return true;
    const x1b = x1 * I % p;
    if (x1b * x1b % p === x2)
      return true;
    return false;
  }
  function couldBeCurvePoint(keyBytes) {
    if (keyBytes.length !== ED25519_PUBLIC_KEY_LENGTH)
      return false;
    return hasValidX(decodeY(keyBytes));
  }
  var p, ED25519_PUBLIC_KEY_LENGTH, d, I;
  var init_ed25519_check = __esm({
    "node_modules/algosdk/dist/esm/utils/ed25519-check.js"() {
      p = (1n << 255n) - 19n;
      ED25519_PUBLIC_KEY_LENGTH = 32;
      d = (-121665n * powMod(121666n, p - 2n) % p + p) % p;
      I = powMod(2n, (p - 1n) / 4n);
    }
  });

  // node_modules/algosdk/dist/esm/encoding/address.js
  function checksumFromPublicKey(pk) {
    return Uint8Array.from(genericHash(pk).slice(HASH_BYTES_LENGTH - ALGORAND_CHECKSUM_BYTE_LENGTH, HASH_BYTES_LENGTH));
  }
  function decodeAddress(address) {
    return Address.fromString(address);
  }
  function isValidAddress(address) {
    try {
      Address.fromString(address);
    } catch (e) {
      return false;
    }
    return true;
  }
  function encodeAddress(address) {
    return new Address(address).toString();
  }
  function addressFromPQKey(schemeBytes, key) {
    if (schemeBytes.length !== PQ_SCHEME_SIZE)
      throw new Error(`invalid PQ scheme length: expected ${PQ_SCHEME_SIZE} bytes, got ${schemeBytes.length}`);
    for (let salt = 0; salt <= PQ_SALT_MAX; salt++) {
      const toBeHashed = concatArrays(PQ_ADDRESS_PREFIX, schemeBytes, Uint8Array.of(salt), key);
      const publicKey = Uint8Array.from(genericHash(toBeHashed));
      if (!couldBeCurvePoint(publicKey)) {
        return { address: new Address(publicKey), salt };
      }
    }
    throw new Error("no canonical salt exists for this PQ public key and scheme");
  }
  function addressFromPQSig(pqsig) {
    const { address, salt } = addressFromPQKey(pqsig.sch, pqsig.pk);
    if (salt !== pqsig.slt) {
      throw new Error(`invalid PQ signature salt: expected the canonical salt ${salt}, got ${pqsig.slt}`);
    }
    return address;
  }
  var import_hi_base32, ALGORAND_ADDRESS_BYTE_LENGTH, ALGORAND_CHECKSUM_BYTE_LENGTH, ALGORAND_ADDRESS_LENGTH, MALFORMED_ADDRESS_ERROR_MSG, CHECKSUM_ADDRESS_ERROR_MSG, PQ_ADDRESS_PREFIX, PQ_SCHEME_SIZE, PQ_SALT_MAX, Address, APP_ID_PREFIX;
  var init_address = __esm({
    "node_modules/algosdk/dist/esm/encoding/address.js"() {
      import_hi_base32 = __toESM(require_base32(), 1);
      init_naclWrappers();
      init_utils();
      init_uint642();
      init_binarydata();
      init_ed25519_check();
      ALGORAND_ADDRESS_BYTE_LENGTH = 36;
      ALGORAND_CHECKSUM_BYTE_LENGTH = 4;
      ALGORAND_ADDRESS_LENGTH = 58;
      MALFORMED_ADDRESS_ERROR_MSG = "address seems to be malformed";
      CHECKSUM_ADDRESS_ERROR_MSG = "wrong checksum for address";
      PQ_ADDRESS_PREFIX = new TextEncoder().encode("PQA");
      PQ_SCHEME_SIZE = 2;
      PQ_SALT_MAX = 255;
      Address = class _Address {
        /**
         * Create a new Address object from its binary form.
         * @param publicKey - The binary form of the address. Must be 32 bytes.
         */
        constructor(publicKey) {
          if (!(publicKey instanceof Uint8Array)) {
            throw new Error(`${MALFORMED_ADDRESS_ERROR_MSG}: ${publicKey} is not Uint8Array, type ${typeof publicKey}`);
          }
          if (publicKey.length !== ALGORAND_ADDRESS_BYTE_LENGTH - ALGORAND_CHECKSUM_BYTE_LENGTH)
            throw new Error(`${MALFORMED_ADDRESS_ERROR_MSG}: 0x${bytesToHex(publicKey)}, length ${publicKey.length}`);
          this.publicKey = publicKey;
        }
        /**
         * Check if the address is equal to another address.
         */
        equals(other) {
          return other instanceof _Address && arrayEqual(this.publicKey, other.publicKey);
        }
        /**
         * Compute the 4 byte checksum of the address.
         */
        checksum() {
          return checksumFromPublicKey(this.publicKey);
        }
        /**
         * Encode the address into a string form.
         */
        toString() {
          const addr = import_hi_base32.default.encode(concatArrays(this.publicKey, this.checksum()));
          return addr.slice(0, ALGORAND_ADDRESS_LENGTH);
        }
        /**
         * Decode an address from a string.
         * @param address - The address to decode. Must be 58 bytes long.
         * @returns An Address object corresponding to the input string.
         */
        static fromString(address) {
          if (typeof address !== "string")
            throw new Error(`${MALFORMED_ADDRESS_ERROR_MSG}: expected string, got ${typeof address}, ${address}`);
          if (address.length !== ALGORAND_ADDRESS_LENGTH)
            throw new Error(`${MALFORMED_ADDRESS_ERROR_MSG}: expected length ${ALGORAND_ADDRESS_LENGTH}, got ${address.length}: ${address}`);
          const decoded = import_hi_base32.default.decode.asBytes(address);
          if (decoded.length !== ALGORAND_ADDRESS_BYTE_LENGTH)
            throw new Error(`${MALFORMED_ADDRESS_ERROR_MSG}: expected byte length ${ALGORAND_ADDRESS_BYTE_LENGTH}, got ${decoded.length}`);
          const pk = new Uint8Array(decoded.slice(0, ALGORAND_ADDRESS_BYTE_LENGTH - ALGORAND_CHECKSUM_BYTE_LENGTH));
          const cs = new Uint8Array(decoded.slice(PUBLIC_KEY_LENGTH, ALGORAND_ADDRESS_BYTE_LENGTH));
          const checksum = checksumFromPublicKey(pk);
          if (!arrayEqual(checksum, cs))
            throw new Error(CHECKSUM_ADDRESS_ERROR_MSG);
          return new _Address(pk);
        }
        /**
         * Get the zero address.
         */
        static zeroAddress() {
          return new _Address(new Uint8Array(ALGORAND_ADDRESS_BYTE_LENGTH - ALGORAND_CHECKSUM_BYTE_LENGTH));
        }
      };
      APP_ID_PREFIX = new TextEncoder().encode("appID");
    }
  });

  // node_modules/algosdk/dist/esm/encoding/schema/address.js
  var AddressSchema;
  var init_address2 = __esm({
    "node_modules/algosdk/dist/esm/encoding/schema/address.js"() {
      init_encoding();
      init_address();
      AddressSchema = class extends Schema {
        defaultValue() {
          return Address.zeroAddress();
        }
        isDefaultValue(data) {
          return Address.zeroAddress().equals(data);
        }
        prepareMsgpack(data) {
          if (data instanceof Address) {
            return data.publicKey;
          }
          throw new Error(`Invalid address: (${typeof data}) ${data}`);
        }
        fromPreparedMsgpack(encoded, _rawStringProvider) {
          return new Address(encoded);
        }
        prepareJSON(data, _options) {
          if (data instanceof Address) {
            return data.toString();
          }
          throw new Error(`Invalid address: (${typeof data}) ${data}`);
        }
        fromPreparedJSON(encoded) {
          return Address.fromString(encoded);
        }
      };
    }
  });

  // node_modules/algosdk/dist/esm/encoding/schema/bytearray.js
  var ByteArraySchema, FixedLengthByteArraySchema;
  var init_bytearray = __esm({
    "node_modules/algosdk/dist/esm/encoding/schema/bytearray.js"() {
      init_encoding();
      init_binarydata();
      ByteArraySchema = class extends Schema {
        defaultValue() {
          return new Uint8Array();
        }
        isDefaultValue(data) {
          return data instanceof Uint8Array && data.byteLength === 0;
        }
        prepareMsgpack(data) {
          if (data instanceof Uint8Array) {
            return data;
          }
          throw new Error(`Invalid byte array: (${typeof data}) ${data}`);
        }
        fromPreparedMsgpack(encoded, _rawStringProvider) {
          if (encoded instanceof Uint8Array) {
            return encoded;
          }
          throw new Error(`Invalid byte array: (${typeof encoded}) ${encoded}`);
        }
        prepareJSON(data, _options) {
          if (data instanceof Uint8Array) {
            return bytesToBase64(data);
          }
          throw new Error(`Invalid byte array: (${typeof data}) ${data}`);
        }
        fromPreparedJSON(encoded) {
          if (encoded === null || encoded === void 0) {
            return this.defaultValue();
          }
          if (typeof encoded === "string") {
            return base64ToBytes(encoded);
          }
          throw new Error(`Invalid byte array: (${typeof encoded}) ${encoded}`);
        }
      };
      FixedLengthByteArraySchema = class extends Schema {
        constructor(length) {
          super();
          this.length = length;
        }
        defaultValue() {
          return new Uint8Array(this.length);
        }
        isDefaultValue(data) {
          return data instanceof Uint8Array && data.byteLength === this.length && data.every((byte) => byte === 0);
        }
        prepareMsgpack(data) {
          if (data instanceof Uint8Array) {
            if (data.byteLength === this.length) {
              return data;
            }
            throw new Error(`Invalid byte array length: wanted ${this.length}, got ${data.byteLength}`);
          }
          throw new Error("Invalid byte array");
        }
        fromPreparedMsgpack(encoded, _rawStringProvider) {
          if (encoded instanceof Uint8Array) {
            if (encoded.byteLength === this.length) {
              return encoded;
            }
            throw new Error(`Invalid byte array length: wanted ${this.length}, got ${encoded.byteLength}`);
          }
          throw new Error("Invalid byte array");
        }
        prepareJSON(data) {
          if (data instanceof Uint8Array) {
            if (data.byteLength === this.length) {
              return bytesToBase64(data);
            }
            throw new Error(`Invalid byte array length: wanted ${this.length}, got ${data.byteLength}`);
          }
          throw new Error("Invalid byte array");
        }
        fromPreparedJSON(encoded) {
          if (typeof encoded === "string") {
            const bytes = base64ToBytes(encoded);
            if (bytes.byteLength === this.length) {
              return bytes;
            }
            throw new Error(`Invalid byte array length: wanted ${this.length}, got ${bytes.byteLength}`);
          }
          throw new Error("Invalid base64 byte array");
        }
      };
    }
  });

  // node_modules/algosdk/dist/esm/encoding/schema/blockhash.js
  var import_hi_base322, blockHashByteLength, base32Length, BlockHashSchema;
  var init_blockhash = __esm({
    "node_modules/algosdk/dist/esm/encoding/schema/blockhash.js"() {
      import_hi_base322 = __toESM(require_base32(), 1);
      init_encoding();
      blockHashByteLength = 32;
      base32Length = 52;
      BlockHashSchema = class extends Schema {
        defaultValue() {
          return new Uint8Array(blockHashByteLength);
        }
        isDefaultValue(data) {
          return data instanceof Uint8Array && data.byteLength === blockHashByteLength && data.every((byte) => byte === 0);
        }
        prepareMsgpack(data) {
          if (data instanceof Uint8Array && data.byteLength === blockHashByteLength) {
            return data;
          }
          throw new Error(`Invalid block hash: (${typeof data}) ${data}`);
        }
        fromPreparedMsgpack(encoded, _rawStringProvider) {
          if (encoded instanceof Uint8Array && encoded.byteLength === blockHashByteLength) {
            return encoded;
          }
          throw new Error(`Invalid block hash: (${typeof encoded}) ${encoded}`);
        }
        prepareJSON(data, _options) {
          if (data instanceof Uint8Array && data.byteLength === blockHashByteLength) {
            return `blk-${import_hi_base322.default.encode(data).slice(0, base32Length)}`;
          }
          throw new Error(`Invalid block hash: (${typeof data}) ${data}`);
        }
        fromPreparedJSON(encoded) {
          if (typeof encoded === "string" && encoded.length === base32Length + 4 && encoded.startsWith("blk-")) {
            return Uint8Array.from(import_hi_base322.default.decode.asBytes(encoded.slice(4)));
          }
          throw new Error(`Invalid block hash: (${typeof encoded}) ${encoded}`);
        }
      };
    }
  });

  // node_modules/algosdk/dist/esm/encoding/schema/binarystring.js
  var SpecialCaseBinaryStringSchema;
  var init_binarystring = __esm({
    "node_modules/algosdk/dist/esm/encoding/schema/binarystring.js"() {
      init_dist();
      init_encoding();
      init_binarydata();
      init_utils();
      SpecialCaseBinaryStringSchema = class extends Schema {
        defaultValue() {
          return new Uint8Array();
        }
        isDefaultValue(data) {
          return data instanceof Uint8Array && data.byteLength === 0;
        }
        prepareMsgpack(data) {
          if (data instanceof Uint8Array) {
            return new RawBinaryString(data);
          }
          throw new Error(`Invalid byte array: (${typeof data}) ${data}`);
        }
        fromPreparedMsgpack(_encoded, rawStringProvider) {
          return rawStringProvider.getRawStringAtCurrentLocation();
        }
        prepareJSON(data, options) {
          if (data instanceof Uint8Array) {
            const stringValue = bytesToString(data);
            if (!options.lossyBinaryStringConversion && !arrayEqual(coerceToBytes(stringValue), data)) {
              throw new Error(`Invalid UTF-8 byte array encountered. Encode with lossyBinaryStringConversion enabled to bypass this check. Base64 value: ${bytesToBase64(data)}`);
            }
            return stringValue;
          }
          throw new Error(`Invalid byte array: (${typeof data}) ${data}`);
        }
        fromPreparedJSON(encoded) {
          if (typeof encoded === "string") {
            return coerceToBytes(encoded);
          }
          throw new Error(`Invalid byte array: (${typeof encoded}) ${encoded}`);
        }
      };
    }
  });

  // node_modules/algosdk/dist/esm/encoding/schema/array.js
  var ArraySchema;
  var init_array = __esm({
    "node_modules/algosdk/dist/esm/encoding/schema/array.js"() {
      init_encoding();
      ArraySchema = class extends Schema {
        constructor(itemSchema) {
          super();
          this.itemSchema = itemSchema;
        }
        defaultValue() {
          return [];
        }
        isDefaultValue(data) {
          return Array.isArray(data) && data.length === 0;
        }
        prepareMsgpack(data) {
          if (Array.isArray(data)) {
            return data.map((item) => this.itemSchema.prepareMsgpack(item));
          }
          throw new Error("ArraySchema data must be an array");
        }
        fromPreparedMsgpack(encoded, rawStringProvider) {
          if (Array.isArray(encoded)) {
            return encoded.map((item, index) => this.itemSchema.fromPreparedMsgpack(item, rawStringProvider.withArrayElement(index)));
          }
          throw new Error(`ArraySchema encoded data must be an array: ${encoded} (${typeof encoded})`);
        }
        prepareJSON(data, options) {
          if (Array.isArray(data)) {
            return data.map((item) => this.itemSchema.prepareJSON(item, options));
          }
          throw new Error("ArraySchema data must be an array");
        }
        fromPreparedJSON(encoded) {
          if (Array.isArray(encoded)) {
            return encoded.map((item) => this.itemSchema.fromPreparedJSON(item));
          }
          throw new Error(`ArraySchema encoded data must be an array: ${encoded} (${typeof encoded})`);
        }
      };
    }
  });

  // node_modules/algosdk/dist/esm/encoding/schema/map.js
  function allOmitEmpty(entries) {
    return entries.map((entry) => ({ ...entry, omitEmpty: true }));
  }
  function combineMaps(...maps) {
    const combined = /* @__PURE__ */ new Map();
    for (const map of maps) {
      for (const [key, value] of map) {
        if (combined.has(key)) {
          throw new Error(`Duplicate key: ${key}`);
        }
        combined.set(key, value);
      }
    }
    return combined;
  }
  function convertMap(map, func) {
    const mapped = /* @__PURE__ */ new Map();
    for (const [key, value] of map) {
      const [newKey, newValue] = func(key, value);
      mapped.set(newKey, newValue);
    }
    return mapped;
  }
  function convertRawStringsInMsgpackValue(value) {
    if (value instanceof RawBinaryString) {
      return bytesToString(value.rawBinaryValue);
    }
    if (value instanceof Map) {
      const newMap = /* @__PURE__ */ new Map();
      for (const [key, val] of value) {
        newMap.set(convertRawStringsInMsgpackValue(key), convertRawStringsInMsgpackValue(val));
      }
      return newMap;
    }
    if (Array.isArray(value)) {
      return value.map(convertRawStringsInMsgpackValue);
    }
    return value;
  }
  var NamedMapSchema, Uint64MapSchema, ByteArrayMapSchema, SpecialCaseBinaryStringMapSchema;
  var init_map = __esm({
    "node_modules/algosdk/dist/esm/encoding/schema/map.js"() {
      init_dist();
      init_encoding();
      init_utils();
      init_binarydata();
      NamedMapSchema = class _NamedMapSchema extends Schema {
        constructor(entries) {
          super();
          this.entries = entries;
          this.checkEntries();
        }
        /**
         * Adds new entries to the map schema. WARNING: this is a mutable operation, and you should be very
         * careful when using it. Any error that happens here is non-recoverable and will corrupt the
         * NamedMapSchema object;
         * @param entries - The entries to add.
         */
        pushEntries(...entries) {
          this.entries.push(...entries);
          this.checkEntries();
        }
        checkEntries() {
          for (const entry of this.entries) {
            if (entry.embedded) {
              if (entry.key !== "") {
                throw new Error("Embedded entries must have an empty key");
              }
              if (!(entry.valueSchema instanceof _NamedMapSchema)) {
                throw new Error("Embedded entry valueSchema must be a NamedMapSchema");
              }
            }
          }
          const keys = /* @__PURE__ */ new Set();
          for (const entry of this.getEntries()) {
            if (keys.has(entry.key)) {
              throw new Error(`Duplicate key: ${entry.key}`);
            }
            keys.add(entry.key);
          }
        }
        /**
         * Returns all top-level entries, properly accounting for fields from embedded entries.
         * @returns An array of all top-level entries for this map.
         */
        getEntries() {
          const entries = [];
          for (const entry of this.entries) {
            if (entry.embedded) {
              const embeddedMapSchema = entry.valueSchema;
              entries.push(...embeddedMapSchema.getEntries());
            } else {
              entries.push(entry);
            }
          }
          return entries;
        }
        defaultValue() {
          const map = /* @__PURE__ */ new Map();
          for (const entry of this.getEntries()) {
            map.set(entry.key, entry.valueSchema.defaultValue());
          }
          return map;
        }
        isDefaultValue(data) {
          if (!(data instanceof Map))
            return false;
          for (const entry of this.getEntries()) {
            if (!entry.valueSchema.isDefaultValue(data.get(entry.key))) {
              return false;
            }
          }
          return true;
        }
        prepareMsgpack(data) {
          if (!(data instanceof Map)) {
            throw new Error(`NamedMapSchema data must be a Map. Got (${typeof data}) ${data}`);
          }
          const map = /* @__PURE__ */ new Map();
          for (const entry of this.getEntries()) {
            const value = data.get(entry.key);
            if (entry.omitEmpty && entry.valueSchema.isDefaultValue(value)) {
              continue;
            }
            map.set(entry.key, entry.valueSchema.prepareMsgpack(value));
          }
          return map;
        }
        fromPreparedMsgpack(encoded, rawStringProvider) {
          if (!(encoded instanceof Map)) {
            throw new Error("NamedMapSchema data must be a Map");
          }
          const map = /* @__PURE__ */ new Map();
          for (const entry of this.getEntries()) {
            if (encoded.has(entry.key)) {
              map.set(entry.key, entry.valueSchema.fromPreparedMsgpack(encoded.get(entry.key), rawStringProvider.withMapValue(entry.key)));
            } else if (entry.omitEmpty) {
              map.set(entry.key, entry.valueSchema.defaultValue());
            } else {
              throw new Error(`Missing key: ${entry.key}`);
            }
          }
          return map;
        }
        prepareJSON(data, options) {
          if (!(data instanceof Map)) {
            throw new Error("NamedMapSchema data must be a Map");
          }
          const obj = {};
          for (const entry of this.getEntries()) {
            const value = data.get(entry.key);
            if (entry.omitEmpty && entry.valueSchema.isDefaultValue(value)) {
              continue;
            }
            obj[entry.key] = entry.valueSchema.prepareJSON(value, options);
          }
          return obj;
        }
        fromPreparedJSON(encoded) {
          if (encoded == null || typeof encoded !== "object" || Array.isArray(encoded)) {
            throw new Error("NamedMapSchema data must be an object");
          }
          const map = /* @__PURE__ */ new Map();
          for (const entry of this.getEntries()) {
            if (Object.prototype.hasOwnProperty.call(encoded, entry.key)) {
              map.set(entry.key, entry.valueSchema.fromPreparedJSON(encoded[entry.key]));
            } else if (entry.omitEmpty) {
              map.set(entry.key, entry.valueSchema.defaultValue());
            } else {
              throw new Error(`Missing key: ${entry.key}`);
            }
          }
          return map;
        }
      };
      Uint64MapSchema = class extends Schema {
        constructor(valueSchema) {
          super();
          this.valueSchema = valueSchema;
        }
        defaultValue() {
          return /* @__PURE__ */ new Map();
        }
        isDefaultValue(data) {
          return data instanceof Map && data.size === 0;
        }
        prepareMsgpack(data) {
          if (!(data instanceof Map)) {
            throw new Error(`Uint64MapSchema data must be a Map. Got (${typeof data}) ${data}`);
          }
          const prepared = /* @__PURE__ */ new Map();
          for (const [key, value] of data) {
            const bigintKey = ensureUint64(key);
            if (prepared.has(bigintKey)) {
              throw new Error(`Duplicate key: ${bigintKey}`);
            }
            prepared.set(bigintKey, this.valueSchema.prepareMsgpack(value));
          }
          return prepared;
        }
        fromPreparedMsgpack(encoded, rawStringProvider) {
          if (!(encoded instanceof Map)) {
            throw new Error("Uint64MapSchema data must be a Map");
          }
          const map = /* @__PURE__ */ new Map();
          for (const [key, value] of encoded) {
            const bigintKey = ensureUint64(key);
            if (map.has(bigintKey)) {
              throw new Error(`Duplicate key: ${bigintKey}`);
            }
            map.set(bigintKey, this.valueSchema.fromPreparedMsgpack(value, rawStringProvider.withMapValue(key)));
          }
          return map;
        }
        prepareJSON(data, options) {
          if (!(data instanceof Map)) {
            throw new Error(`Uint64MapSchema data must be a Map. Got (${typeof data}) ${data}`);
          }
          const prepared = /* @__PURE__ */ new Map();
          for (const [key, value] of data) {
            const bigintKey = ensureUint64(key);
            if (prepared.has(bigintKey)) {
              throw new Error(`Duplicate key: ${bigintKey}`);
            }
            prepared.set(bigintKey, this.valueSchema.prepareJSON(value, options));
          }
          const obj = {};
          for (const [key, value] of prepared) {
            obj[key.toString()] = value;
          }
          return obj;
        }
        fromPreparedJSON(encoded) {
          if (encoded == null || typeof encoded !== "object" || Array.isArray(encoded)) {
            throw new Error("Uint64MapSchema data must be an object");
          }
          const map = /* @__PURE__ */ new Map();
          for (const [key, value] of Object.entries(encoded)) {
            const bigintKey = BigInt(key);
            if (map.has(bigintKey)) {
              throw new Error(`Duplicate key: ${bigintKey}`);
            }
            map.set(bigintKey, this.valueSchema.fromPreparedJSON(value));
          }
          return map;
        }
      };
      ByteArrayMapSchema = class extends Schema {
        constructor(valueSchema) {
          super();
          this.valueSchema = valueSchema;
        }
        defaultValue() {
          return /* @__PURE__ */ new Map();
        }
        isDefaultValue(data) {
          return data instanceof Map && data.size === 0;
        }
        prepareMsgpack(data) {
          if (!(data instanceof Map)) {
            throw new Error(`ByteArrayMapSchema data must be a Map. Got (${typeof data}) ${data}`);
          }
          const prepared = /* @__PURE__ */ new Map();
          for (const [key, value] of data) {
            if (!(key instanceof Uint8Array)) {
              throw new Error(`Invalid key: ${key} (${typeof key})`);
            }
            prepared.set(key, this.valueSchema.prepareMsgpack(value));
          }
          return prepared;
        }
        fromPreparedMsgpack(encoded, rawStringProvider) {
          if (!(encoded instanceof Map)) {
            throw new Error("ByteArrayMapSchema data must be a Map");
          }
          const map = /* @__PURE__ */ new Map();
          for (const [key, value] of encoded) {
            if (!(key instanceof Uint8Array)) {
              throw new Error(`Invalid key: ${key} (${typeof key})`);
            }
            map.set(key, this.valueSchema.fromPreparedMsgpack(value, rawStringProvider.withMapValue(key)));
          }
          return map;
        }
        prepareJSON(data, options) {
          if (!(data instanceof Map)) {
            throw new Error(`ByteArrayMapSchema data must be a Map. Got (${typeof data}) ${data}`);
          }
          const prepared = /* @__PURE__ */ new Map();
          for (const [key, value] of data) {
            if (!(key instanceof Uint8Array)) {
              throw new Error(`Invalid key: ${key} (${typeof key})`);
            }
            const b64Encoded = bytesToBase64(key);
            if (prepared.has(b64Encoded)) {
              throw new Error(`Duplicate key (base64): ${b64Encoded}`);
            }
            prepared.set(b64Encoded, this.valueSchema.prepareJSON(value, options));
          }
          const obj = {};
          for (const [key, value] of prepared) {
            obj[key] = value;
          }
          return obj;
        }
        fromPreparedJSON(encoded) {
          if (encoded == null || typeof encoded !== "object" || Array.isArray(encoded)) {
            throw new Error("ByteArrayMapSchema data must be an object");
          }
          const map = /* @__PURE__ */ new Map();
          for (const [key, value] of Object.entries(encoded)) {
            map.set(base64ToBytes(key), this.valueSchema.fromPreparedJSON(value));
          }
          return map;
        }
      };
      SpecialCaseBinaryStringMapSchema = class extends Schema {
        constructor(valueSchema) {
          super();
          this.valueSchema = valueSchema;
        }
        defaultValue() {
          return /* @__PURE__ */ new Map();
        }
        isDefaultValue(data) {
          return data instanceof Map && data.size === 0;
        }
        prepareMsgpack(data) {
          if (!(data instanceof Map)) {
            throw new Error(`SpecialCaseBinaryStringMapSchema data must be a Map. Got (${typeof data}) ${data}`);
          }
          const prepared = /* @__PURE__ */ new Map();
          for (const [key, value] of data) {
            if (!(key instanceof Uint8Array)) {
              throw new Error(`Invalid key: ${key} (${typeof key})`);
            }
            prepared.set(new RawBinaryString(key), this.valueSchema.prepareMsgpack(value));
          }
          return prepared;
        }
        fromPreparedMsgpack(_encoded, rawStringProvider) {
          const map = /* @__PURE__ */ new Map();
          const keysAndValues = rawStringProvider.getRawStringKeysAndValuesAtCurrentLocation();
          for (const [key, value] of keysAndValues) {
            map.set(key, this.valueSchema.fromPreparedMsgpack(convertRawStringsInMsgpackValue(value), rawStringProvider.withMapValue(new RawBinaryString(key))));
          }
          return map;
        }
        prepareJSON(data, options) {
          if (!(data instanceof Map)) {
            throw new Error(`SpecialCaseBinaryStringMapSchema data must be a Map. Got (${typeof data}) ${data}`);
          }
          const prepared = /* @__PURE__ */ new Map();
          for (const [key, value] of data) {
            if (!(key instanceof Uint8Array)) {
              throw new Error(`Invalid key: ${key}`);
            }
            const keyStringValue = bytesToString(key);
            if (!options.lossyBinaryStringConversion && !arrayEqual(coerceToBytes(keyStringValue), key)) {
              throw new Error(`Invalid UTF-8 byte array encountered. Encode with lossyBinaryStringConversion enabled to bypass this check. Base64 value: ${bytesToBase64(key)}`);
            }
            prepared.set(keyStringValue, this.valueSchema.prepareJSON(value, options));
          }
          const obj = {};
          for (const [key, value] of prepared) {
            obj[key] = value;
          }
          return obj;
        }
        fromPreparedJSON(encoded) {
          if (encoded == null || typeof encoded !== "object" || Array.isArray(encoded)) {
            throw new Error("SpecialCaseBinaryStringMapSchema data must be an object");
          }
          const map = /* @__PURE__ */ new Map();
          for (const [key, value] of Object.entries(encoded)) {
            map.set(coerceToBytes(key), this.valueSchema.fromPreparedJSON(value));
          }
          return map;
        }
      };
    }
  });

  // node_modules/algosdk/dist/esm/encoding/schema/optional.js
  var OptionalSchema;
  var init_optional = __esm({
    "node_modules/algosdk/dist/esm/encoding/schema/optional.js"() {
      init_encoding();
      OptionalSchema = class extends Schema {
        constructor(valueSchema) {
          super();
          this.valueSchema = valueSchema;
        }
        defaultValue() {
          return void 0;
        }
        isDefaultValue(data) {
          return data === void 0 || this.valueSchema.isDefaultValue(data);
        }
        prepareMsgpack(data) {
          if (data === void 0) {
            return void 0;
          }
          return this.valueSchema.prepareMsgpack(data);
        }
        fromPreparedMsgpack(encoded, rawStringProvider) {
          if (encoded === void 0 || encoded === null) {
            return void 0;
          }
          return this.valueSchema.fromPreparedMsgpack(encoded, rawStringProvider);
        }
        prepareJSON(data, options) {
          if (data === void 0) {
            return null;
          }
          return this.valueSchema.prepareJSON(data, options);
        }
        fromPreparedJSON(encoded) {
          if (encoded === void 0 || encoded === null) {
            return void 0;
          }
          return this.valueSchema.fromPreparedJSON(encoded);
        }
      };
    }
  });

  // node_modules/algosdk/dist/esm/encoding/schema/untyped.js
  var UntypedSchema;
  var init_untyped = __esm({
    "node_modules/algosdk/dist/esm/encoding/schema/untyped.js"() {
      init_encoding();
      UntypedSchema = class extends Schema {
        defaultValue() {
          return void 0;
        }
        isDefaultValue(data) {
          return data === void 0;
        }
        prepareMsgpack(data) {
          return data;
        }
        fromPreparedMsgpack(encoded, _rawStringProvider) {
          return encoded;
        }
        prepareJSON(data, _options) {
          return msgpackEncodingDataToJSONEncodingData(data);
        }
        fromPreparedJSON(encoded) {
          return jsonEncodingDataToMsgpackEncodingData(encoded);
        }
      };
    }
  });

  // node_modules/algosdk/dist/esm/encoding/schema/index.js
  var init_schema = __esm({
    "node_modules/algosdk/dist/esm/encoding/schema/index.js"() {
      init_boolean();
      init_string();
      init_uint64();
      init_address2();
      init_bytearray();
      init_blockhash();
      init_binarystring();
      init_array();
      init_map();
      init_optional();
      init_untyped();
    }
  });

  // node_modules/algosdk/dist/esm/boxStorage.js
  function boxReferenceToEncodingData(reference, foreignApps, appIndex) {
    const referenceId = BigInt(reference.appIndex);
    const referenceName = reference.name;
    const isOwnReference = referenceId === BigInt(0) || referenceId === appIndex;
    const index = foreignApps.indexOf(referenceId) + 1;
    if (index === 0 && !isOwnReference) {
      throw new Error(`Box ref with appId ${referenceId} not in foreign-apps`);
    }
    return /* @__PURE__ */ new Map([
      ["i", index],
      ["n", referenceName]
    ]);
  }
  function boxReferencesToEncodingData(references, foreignApps, appIndex) {
    const appIndexBigInt = BigInt(appIndex);
    const foreignAppsBigInt = foreignApps.map(BigInt);
    return references.map((bx) => boxReferenceToEncodingData(bx, foreignAppsBigInt, appIndexBigInt));
  }
  var init_boxStorage = __esm({
    "node_modules/algosdk/dist/esm/boxStorage.js"() {
    }
  });

  // node_modules/algosdk/dist/esm/appAccess.js
  function resourceReferencesToEncodingData(appIndex, references) {
    const accessList = [];
    function ensure(target) {
      for (let idx = 0; idx < accessList.length; idx++) {
        const a = accessList[idx];
        const aAddress = a.get("d");
        const addressesEqual = !target.address && !aAddress || target.address && aAddress && target.address.equals(aAddress);
        if (addressesEqual && a.get("s") === target.assetIndex && a.get("p") === target.appIndex) {
          return idx + 1;
        }
      }
      if (target.address) {
        accessList.push(/* @__PURE__ */ new Map([["d", target.address]]));
      }
      if (target.assetIndex) {
        accessList.push(/* @__PURE__ */ new Map([["s", target.assetIndex]]));
      }
      if (target.appIndex) {
        accessList.push(/* @__PURE__ */ new Map([["p", target.appIndex]]));
      }
      return accessList.length;
    }
    const zeroAddr = Address.zeroAddress();
    for (const rr of references) {
      if (rr.address || rr.assetIndex || rr.appIndex) {
        ensure(rr);
        continue;
      }
      if (rr.holding) {
        const h = rr.holding;
        let addrIdx = 0;
        if (h.address && !h.address.equals(zeroAddr)) {
          addrIdx = ensure({ address: h.address });
        }
        const assetIdx = ensure({ assetIndex: h.assetIndex });
        accessList.push(/* @__PURE__ */ new Map([
          [
            "h",
            /* @__PURE__ */ new Map([
              ["d", addrIdx],
              ["s", assetIdx]
            ])
          ]
        ]));
        continue;
      }
      if (rr.locals) {
        const l = rr.locals;
        let addrIdx = 0;
        if (l.address && !l.address.equals(zeroAddr)) {
          addrIdx = ensure({ address: l.address });
        }
        let appIdx = 0;
        if (l.appIndex && BigInt(l.appIndex) !== appIndex) {
          appIdx = ensure({ appIndex: l.appIndex });
        }
        accessList.push(/* @__PURE__ */ new Map([
          [
            "l",
            /* @__PURE__ */ new Map([
              ["d", addrIdx],
              ["p", appIdx]
            ])
          ]
        ]));
        continue;
      }
      if (rr.box) {
        const b = rr.box;
        let appIdx = 0;
        if (b.appIndex && BigInt(b.appIndex) !== appIndex) {
          appIdx = ensure({ appIndex: b.appIndex });
        }
        accessList.push(/* @__PURE__ */ new Map([
          [
            "b",
            /* @__PURE__ */ new Map([
              ["i", appIdx],
              ["n", b.name]
            ])
          ]
        ]));
        continue;
      }
      accessList.push(/* @__PURE__ */ new Map());
    }
    return accessList;
  }
  function convertIndicesToResourceReferences(accessList) {
    const references = [];
    for (const item of accessList) {
      const address = item.get("d");
      const assetIndex = item.get("s");
      const appIndex = item.get("p");
      if (address) {
        references.push({ address });
        continue;
      }
      if (assetIndex) {
        references.push({ assetIndex });
        continue;
      }
      if (appIndex) {
        references.push({ appIndex });
        continue;
      }
      const holding = item.get("h");
      if (holding) {
        const hAddressIndex = ensureSafeUnsignedInteger(holding.get("d") ?? 0);
        const hAssetIndex = ensureSafeUnsignedInteger(holding.get("s"));
        if (!hAssetIndex) {
          throw new Error(`Holding missing asset index: ${holding}`);
        }
        const hAddress = hAddressIndex === 0 ? Address.zeroAddress() : accessList[hAddressIndex - 1].get("d");
        const asset = accessList[hAssetIndex - 1].get("s");
        references.push({ holding: { address: hAddress, assetIndex: asset } });
        continue;
      }
      const locals = item.get("l");
      if (locals) {
        const lAddressIndex = ensureSafeUnsignedInteger(locals.get("d") ?? 0);
        const lAppIndex = ensureSafeUnsignedInteger(locals.get("p") ?? 0);
        const lAddress = lAddressIndex === 0 ? Address.zeroAddress() : accessList[lAddressIndex - 1].get("d");
        const app = lAppIndex === 0 ? BigInt(0) : accessList[lAppIndex - 1].get("p");
        references.push({ locals: { address: lAddress, appIndex: app } });
        continue;
      }
      const box = item.get("b");
      if (box) {
        const bAppIndex = ensureSafeUnsignedInteger(box.get("i") ?? 0);
        const name = box.get("n");
        if (!name) {
          throw new Error(`Box missing name: ${box}`);
        }
        const app = bAppIndex === 0 ? BigInt(0) : accessList[bAppIndex - 1].get("p");
        references.push({ box: { appIndex: app, name } });
        continue;
      }
      references.push({ box: { appIndex: BigInt(0), name: new Uint8Array(0) } });
    }
    return references;
  }
  function foreignArraysToResourceReferences({ appIndex, accounts, foreignAssets, foreignApps, holdings, locals, boxes }) {
    const accessList = [];
    function ensureAddress2(addr) {
      let addr2;
      if (typeof addr === "string") {
        if (addr === "") {
          return;
        }
        addr2 = Address.fromString(addr);
      } else {
        addr2 = addr;
      }
      if (addr2.equals(Address.zeroAddress())) {
        return;
      }
      let addrFound = false;
      for (const rr of accessList) {
        if (!rr.address) {
          continue;
        }
        let rrAddress = rr.address;
        if (typeof rr.address === "string") {
          rrAddress = Address.fromString(rr.address);
        }
        if (rrAddress.equals(addr2)) {
          addrFound = true;
          break;
        }
      }
      if (!addrFound) {
        accessList.push({ address: addr });
      }
    }
    function ensureAsset(asset) {
      let assetFound = false;
      for (const rr of accessList) {
        if (rr.assetIndex === asset) {
          assetFound = true;
          break;
        }
      }
      if (!assetFound) {
        accessList.push({ assetIndex: asset });
      }
    }
    function ensureApp(app) {
      let appFound = false;
      for (const rr of accessList) {
        if (rr.appIndex === app) {
          appFound = true;
          break;
        }
      }
      if (!appFound) {
        accessList.push({ appIndex: app });
      }
    }
    for (const acct of accounts ?? []) {
      ensureAddress2(acct);
    }
    for (const asset of foreignAssets ?? []) {
      ensureAsset(asset);
    }
    for (const app of foreignApps ?? []) {
      ensureApp(app);
    }
    for (const holding of holdings ?? []) {
      if (holding.address) {
        ensureAddress2(holding.address);
      }
      ensureAsset(holding.assetIndex);
      accessList.push({ holding });
    }
    for (const local of locals ?? []) {
      if (local.address) {
        ensureAddress2(local.address);
      }
      if (local.appIndex && BigInt(local.appIndex) !== appIndex) {
        ensureApp(local.appIndex);
      }
      accessList.push({ locals: local });
    }
    for (const box of boxes ?? []) {
      if (box.appIndex && BigInt(box.appIndex) !== appIndex) {
        ensureApp(box.appIndex);
      }
      accessList.push({ box });
    }
    return accessList;
  }
  var init_appAccess = __esm({
    "node_modules/algosdk/dist/esm/appAccess.js"() {
      init_address();
      init_utils();
    }
  });

  // node_modules/algosdk/dist/esm/types/transactions/base.js
  function isTransactionType(s) {
    return s === TransactionType.pay || s === TransactionType.keyreg || s === TransactionType.acfg || s === TransactionType.axfer || s === TransactionType.afrz || s === TransactionType.appl || s === TransactionType.stpf || s === TransactionType.hb;
  }
  function isOnApplicationComplete(v) {
    return v === OnApplicationComplete.NoOpOC || v === OnApplicationComplete.OptInOC || v === OnApplicationComplete.CloseOutOC || v === OnApplicationComplete.ClearStateOC || v === OnApplicationComplete.UpdateApplicationOC || v === OnApplicationComplete.DeleteApplicationOC;
  }
  var TransactionType, OnApplicationComplete;
  var init_base = __esm({
    "node_modules/algosdk/dist/esm/types/transactions/base.js"() {
      (function(TransactionType2) {
        TransactionType2["pay"] = "pay";
        TransactionType2["keyreg"] = "keyreg";
        TransactionType2["acfg"] = "acfg";
        TransactionType2["axfer"] = "axfer";
        TransactionType2["afrz"] = "afrz";
        TransactionType2["appl"] = "appl";
        TransactionType2["stpf"] = "stpf";
        TransactionType2["hb"] = "hb";
      })(TransactionType || (TransactionType = {}));
      (function(OnApplicationComplete2) {
        OnApplicationComplete2[OnApplicationComplete2["NoOpOC"] = 0] = "NoOpOC";
        OnApplicationComplete2[OnApplicationComplete2["OptInOC"] = 1] = "OptInOC";
        OnApplicationComplete2[OnApplicationComplete2["CloseOutOC"] = 2] = "CloseOutOC";
        OnApplicationComplete2[OnApplicationComplete2["ClearStateOC"] = 3] = "ClearStateOC";
        OnApplicationComplete2[OnApplicationComplete2["UpdateApplicationOC"] = 4] = "UpdateApplicationOC";
        OnApplicationComplete2[OnApplicationComplete2["DeleteApplicationOC"] = 5] = "DeleteApplicationOC";
      })(OnApplicationComplete || (OnApplicationComplete = {}));
    }
  });

  // node_modules/algosdk/dist/esm/stateproof.js
  var HashFactory, MerkleArrayProof, MerkleSignatureVerifier, Participant, FalconVerifier, FalconSignatureStruct, SigslotCommit, Reveal, StateProof, StateProofMessage;
  var init_stateproof = __esm({
    "node_modules/algosdk/dist/esm/stateproof.js"() {
      init_schema();
      HashFactory = class _HashFactory {
        constructor(params) {
          this.hashType = params.hashType;
        }
        // eslint-disable-next-line class-methods-use-this
        getEncodingSchema() {
          return _HashFactory.encodingSchema;
        }
        toEncodingData() {
          return /* @__PURE__ */ new Map([["t", this.hashType]]);
        }
        static fromEncodingData(data) {
          if (!(data instanceof Map)) {
            throw new Error(`Invalid decoded HashFactory: ${data}`);
          }
          return new _HashFactory({
            hashType: Number(data.get("t"))
          });
        }
      };
      HashFactory.encodingSchema = new NamedMapSchema(allOmitEmpty([
        { key: "t", valueSchema: new Uint64Schema() }
        // hashType
      ]));
      MerkleArrayProof = class _MerkleArrayProof {
        constructor(params) {
          this.path = params.path;
          this.hashFactory = params.hashFactory;
          this.treeDepth = params.treeDepth;
        }
        // eslint-disable-next-line class-methods-use-this
        getEncodingSchema() {
          return _MerkleArrayProof.encodingSchema;
        }
        toEncodingData() {
          return /* @__PURE__ */ new Map([
            ["pth", this.path],
            ["hsh", this.hashFactory.toEncodingData()],
            ["td", this.treeDepth]
          ]);
        }
        static fromEncodingData(data) {
          if (!(data instanceof Map)) {
            throw new Error(`Invalid decoded MerkleArrayProof: ${data}`);
          }
          return new _MerkleArrayProof({
            path: data.get("pth"),
            hashFactory: HashFactory.fromEncodingData(data.get("hsh")),
            treeDepth: Number(data.get("td"))
          });
        }
      };
      MerkleArrayProof.encodingSchema = new NamedMapSchema(allOmitEmpty([
        {
          key: "pth",
          // path
          valueSchema: new ArraySchema(new ByteArraySchema())
        },
        {
          key: "hsh",
          // hashFactory
          valueSchema: HashFactory.encodingSchema
        },
        {
          key: "td",
          // treeDepth
          valueSchema: new Uint64Schema()
        }
      ]));
      MerkleSignatureVerifier = class _MerkleSignatureVerifier {
        constructor(params) {
          this.commitment = params.commitment;
          this.keyLifetime = params.keyLifetime;
        }
        // eslint-disable-next-line class-methods-use-this
        getEncodingSchema() {
          return _MerkleSignatureVerifier.encodingSchema;
        }
        toEncodingData() {
          return /* @__PURE__ */ new Map([
            ["cmt", this.commitment],
            ["lf", this.keyLifetime]
          ]);
        }
        static fromEncodingData(data) {
          if (!(data instanceof Map)) {
            throw new Error(`Invalid decoded MerkleSignatureVerifier: ${data}`);
          }
          return new _MerkleSignatureVerifier({
            commitment: data.get("cmt"),
            keyLifetime: data.get("lf")
          });
        }
      };
      MerkleSignatureVerifier.encodingSchema = new NamedMapSchema(allOmitEmpty([
        {
          key: "cmt",
          // commitment
          valueSchema: new FixedLengthByteArraySchema(64)
        },
        {
          key: "lf",
          // keyLifetime
          valueSchema: new Uint64Schema()
        }
      ]));
      Participant = class _Participant {
        constructor(params) {
          this.pk = params.pk;
          this.weight = params.weight;
        }
        // eslint-disable-next-line class-methods-use-this
        getEncodingSchema() {
          return _Participant.encodingSchema;
        }
        toEncodingData() {
          return /* @__PURE__ */ new Map([
            ["p", this.pk.toEncodingData()],
            ["w", this.weight]
          ]);
        }
        static fromEncodingData(data) {
          if (!(data instanceof Map)) {
            throw new Error(`Invalid decoded Participant: ${data}`);
          }
          return new _Participant({
            pk: MerkleSignatureVerifier.fromEncodingData(data.get("p")),
            weight: data.get("w")
          });
        }
      };
      Participant.encodingSchema = new NamedMapSchema(allOmitEmpty([
        {
          key: "p",
          // pk
          valueSchema: MerkleSignatureVerifier.encodingSchema
        },
        {
          key: "w",
          // weight
          valueSchema: new Uint64Schema()
        }
      ]));
      FalconVerifier = class _FalconVerifier {
        constructor(params) {
          this.publicKey = params.publicKey;
        }
        // eslint-disable-next-line class-methods-use-this
        getEncodingSchema() {
          return _FalconVerifier.encodingSchema;
        }
        toEncodingData() {
          return /* @__PURE__ */ new Map([["k", this.publicKey]]);
        }
        static fromEncodingData(data) {
          if (!(data instanceof Map)) {
            throw new Error(`Invalid decoded FalconVerifier: ${data}`);
          }
          return new _FalconVerifier({
            publicKey: data.get("k")
          });
        }
      };
      FalconVerifier.encodingSchema = new NamedMapSchema(allOmitEmpty([
        { key: "k", valueSchema: new FixedLengthByteArraySchema(1793) }
        // publicKey
      ]));
      FalconSignatureStruct = class _FalconSignatureStruct {
        constructor(params) {
          this.signature = params.signature;
          this.vectorCommitmentIndex = params.index;
          this.proof = params.proof;
          this.verifyingKey = params.verifyingKey;
        }
        // eslint-disable-next-line class-methods-use-this
        getEncodingSchema() {
          return _FalconSignatureStruct.encodingSchema;
        }
        toEncodingData() {
          return /* @__PURE__ */ new Map([
            ["sig", this.signature],
            ["idx", this.vectorCommitmentIndex],
            ["prf", this.proof.toEncodingData()],
            ["vkey", this.verifyingKey.toEncodingData()]
          ]);
        }
        static fromEncodingData(data) {
          if (!(data instanceof Map)) {
            throw new Error(`Invalid decoded FalconSignatureStruct: ${data}`);
          }
          return new _FalconSignatureStruct({
            signature: data.get("sig"),
            index: data.get("idx"),
            proof: MerkleArrayProof.fromEncodingData(data.get("prf")),
            verifyingKey: FalconVerifier.fromEncodingData(data.get("vkey"))
          });
        }
      };
      FalconSignatureStruct.encodingSchema = new NamedMapSchema(allOmitEmpty([
        { key: "sig", valueSchema: new ByteArraySchema() },
        // signature
        { key: "idx", valueSchema: new Uint64Schema() },
        // index
        { key: "prf", valueSchema: MerkleArrayProof.encodingSchema },
        // proof
        { key: "vkey", valueSchema: FalconVerifier.encodingSchema }
        // verifyingKey
      ]));
      SigslotCommit = class _SigslotCommit {
        constructor(params) {
          this.sig = params.sig;
          this.l = params.l;
        }
        // eslint-disable-next-line class-methods-use-this
        getEncodingSchema() {
          return _SigslotCommit.encodingSchema;
        }
        toEncodingData() {
          return /* @__PURE__ */ new Map([
            ["s", this.sig.toEncodingData()],
            ["l", this.l]
          ]);
        }
        static fromEncodingData(data) {
          if (!(data instanceof Map)) {
            throw new Error(`Invalid decoded SigslotCommit: ${data}`);
          }
          return new _SigslotCommit({
            sig: FalconSignatureStruct.fromEncodingData(data.get("s")),
            l: data.get("l")
          });
        }
      };
      SigslotCommit.encodingSchema = new NamedMapSchema(allOmitEmpty([
        { key: "s", valueSchema: FalconSignatureStruct.encodingSchema },
        // sigslot
        { key: "l", valueSchema: new Uint64Schema() }
        // l
      ]));
      Reveal = class _Reveal {
        constructor(params) {
          this.sigslot = params.sigslot;
          this.participant = params.participant;
        }
        // eslint-disable-next-line class-methods-use-this
        getEncodingSchema() {
          return _Reveal.encodingSchema;
        }
        toEncodingData() {
          return /* @__PURE__ */ new Map([
            ["s", this.sigslot.toEncodingData()],
            ["p", this.participant.toEncodingData()]
          ]);
        }
        static fromEncodingData(data) {
          if (!(data instanceof Map)) {
            throw new Error(`Invalid decoded Reveal: ${data}`);
          }
          return new _Reveal({
            sigslot: SigslotCommit.fromEncodingData(data.get("s")),
            participant: Participant.fromEncodingData(data.get("p"))
          });
        }
      };
      Reveal.encodingSchema = new NamedMapSchema(allOmitEmpty([
        { key: "s", valueSchema: SigslotCommit.encodingSchema },
        // sigslotCommit
        { key: "p", valueSchema: Participant.encodingSchema }
        // participant
      ]));
      StateProof = class _StateProof {
        constructor(params) {
          this.sigCommit = params.sigCommit;
          this.signedWeight = params.signedWeight;
          this.sigProofs = params.sigProofs;
          this.partProofs = params.partProofs;
          this.merkleSignatureSaltVersion = params.merkleSignatureSaltVersion;
          this.reveals = params.reveals;
          this.positionsToReveal = params.positionsToReveal;
        }
        // eslint-disable-next-line class-methods-use-this
        getEncodingSchema() {
          return _StateProof.encodingSchema;
        }
        toEncodingData() {
          return /* @__PURE__ */ new Map([
            ["c", this.sigCommit],
            ["w", this.signedWeight],
            ["S", this.sigProofs.toEncodingData()],
            ["P", this.partProofs.toEncodingData()],
            ["v", this.merkleSignatureSaltVersion],
            [
              "r",
              convertMap(this.reveals, (key, value) => [key, value.toEncodingData()])
            ],
            ["pr", this.positionsToReveal]
          ]);
        }
        static fromEncodingData(data) {
          if (!(data instanceof Map)) {
            throw new Error(`Invalid decoded StateProof: ${data}`);
          }
          return new _StateProof({
            sigCommit: data.get("c"),
            signedWeight: data.get("w"),
            sigProofs: MerkleArrayProof.fromEncodingData(data.get("S")),
            partProofs: MerkleArrayProof.fromEncodingData(data.get("P")),
            merkleSignatureSaltVersion: Number(data.get("v")),
            reveals: convertMap(data.get("r"), (key, value) => [
              key,
              Reveal.fromEncodingData(value)
            ]),
            positionsToReveal: data.get("pr")
          });
        }
      };
      StateProof.encodingSchema = new NamedMapSchema(allOmitEmpty([
        {
          key: "c",
          // sigCommit
          valueSchema: new ByteArraySchema()
        },
        {
          key: "w",
          // signedWeight
          valueSchema: new Uint64Schema()
        },
        {
          key: "S",
          // sigProofs
          valueSchema: MerkleArrayProof.encodingSchema
        },
        {
          key: "P",
          // partProofs
          valueSchema: MerkleArrayProof.encodingSchema
        },
        {
          key: "v",
          // merkleSignatureSaltVersion
          valueSchema: new Uint64Schema()
        },
        {
          key: "r",
          // reveals
          valueSchema: new Uint64MapSchema(Reveal.encodingSchema)
        },
        {
          key: "pr",
          // positionsToReveal
          valueSchema: new ArraySchema(new Uint64Schema())
        }
      ]));
      StateProofMessage = class _StateProofMessage {
        constructor(params) {
          this.blockHeadersCommitment = params.blockHeadersCommitment;
          this.votersCommitment = params.votersCommitment;
          this.lnProvenWeight = params.lnProvenWeight;
          this.firstAttestedRound = params.firstAttestedRound;
          this.lastAttestedRound = params.lastAttestedRound;
        }
        // eslint-disable-next-line class-methods-use-this
        getEncodingSchema() {
          return _StateProofMessage.encodingSchema;
        }
        toEncodingData() {
          return /* @__PURE__ */ new Map([
            ["b", this.blockHeadersCommitment],
            ["v", this.votersCommitment],
            ["P", this.lnProvenWeight],
            ["f", this.firstAttestedRound],
            ["l", this.lastAttestedRound]
          ]);
        }
        static fromEncodingData(data) {
          if (!(data instanceof Map)) {
            throw new Error(`Invalid decoded StateProofMessage: ${data}`);
          }
          return new _StateProofMessage({
            blockHeadersCommitment: data.get("b"),
            votersCommitment: data.get("v"),
            lnProvenWeight: data.get("P"),
            firstAttestedRound: data.get("f"),
            lastAttestedRound: data.get("l")
          });
        }
        static fromMap(data) {
          return new _StateProofMessage({
            blockHeadersCommitment: data.get("b"),
            votersCommitment: data.get("v"),
            lnProvenWeight: data.get("P"),
            firstAttestedRound: data.get("f"),
            lastAttestedRound: data.get("l")
          });
        }
      };
      StateProofMessage.encodingSchema = new NamedMapSchema(allOmitEmpty([
        { key: "b", valueSchema: new ByteArraySchema() },
        // blockHeadersCommitment
        { key: "v", valueSchema: new ByteArraySchema() },
        // votersCommitment
        { key: "P", valueSchema: new Uint64Schema() },
        // lnProvenWeight
        { key: "f", valueSchema: new Uint64Schema() },
        // firstAttestedRound
        { key: "l", valueSchema: new Uint64Schema() }
        // lastAttestedRound
      ]));
    }
  });

  // node_modules/algosdk/dist/esm/heartbeat.js
  var HeartbeatProof, Heartbeat;
  var init_heartbeat = __esm({
    "node_modules/algosdk/dist/esm/heartbeat.js"() {
      init_schema();
      HeartbeatProof = class _HeartbeatProof {
        constructor(params) {
          this.sig = params.sig;
          this.pk = params.pk;
          this.pk2 = params.pk2;
          this.pk1Sig = params.pk1Sig;
          this.pk2Sig = params.pk2Sig;
        }
        // eslint-disable-next-line class-methods-use-this
        getEncodingSchema() {
          return _HeartbeatProof.encodingSchema;
        }
        toEncodingData() {
          return /* @__PURE__ */ new Map([
            ["s", this.sig],
            ["p", this.pk],
            ["p2", this.pk2],
            ["p1s", this.pk1Sig],
            ["p2s", this.pk2Sig]
          ]);
        }
        static fromEncodingData(data) {
          if (!(data instanceof Map)) {
            throw new Error(`Invalid decoded HeartbeatProof: ${data}`);
          }
          return new _HeartbeatProof({
            sig: data.get("s"),
            pk: data.get("p"),
            pk2: data.get("p2"),
            pk1Sig: data.get("p1s"),
            pk2Sig: data.get("p2s")
          });
        }
      };
      HeartbeatProof.encodingSchema = new NamedMapSchema(allOmitEmpty([
        {
          key: "s",
          // Sig
          valueSchema: new FixedLengthByteArraySchema(64)
        },
        {
          key: "p",
          // PK
          valueSchema: new FixedLengthByteArraySchema(32)
        },
        {
          key: "p2",
          // PK2
          valueSchema: new FixedLengthByteArraySchema(32)
        },
        {
          key: "p1s",
          // PK1Sig
          valueSchema: new FixedLengthByteArraySchema(64)
        },
        {
          key: "p2s",
          // PK2Sig
          valueSchema: new FixedLengthByteArraySchema(64)
        }
      ]));
      Heartbeat = class _Heartbeat {
        constructor(params) {
          this.address = params.address;
          this.proof = params.proof;
          this.seed = params.seed;
          this.voteID = params.voteID;
          this.keyDilution = params.keyDilution;
          this.challengeDiscount = params.challengeDiscount ?? false;
        }
        // eslint-disable-next-line class-methods-use-this
        getEncodingSchema() {
          return _Heartbeat.encodingSchema;
        }
        toEncodingData() {
          return /* @__PURE__ */ new Map([
            ["a", this.address],
            ["prf", this.proof.toEncodingData()],
            ["sd", this.seed],
            ["vid", this.voteID],
            ["kd", this.keyDilution],
            ["c", this.challengeDiscount]
          ]);
        }
        static fromEncodingData(data) {
          if (!(data instanceof Map)) {
            throw new Error(`Invalid decoded Heartbeat: ${data}`);
          }
          return new _Heartbeat({
            address: data.get("a"),
            proof: HeartbeatProof.fromEncodingData(data.get("prf")),
            seed: data.get("sd"),
            voteID: data.get("vid"),
            keyDilution: data.get("kd"),
            challengeDiscount: data.get("c")
          });
        }
      };
      Heartbeat.encodingSchema = new NamedMapSchema(allOmitEmpty([
        {
          key: "a",
          // HbAddress
          valueSchema: new AddressSchema()
        },
        {
          key: "prf",
          // HbProof
          valueSchema: HeartbeatProof.encodingSchema
        },
        {
          key: "sd",
          // HbSeed
          valueSchema: new ByteArraySchema()
        },
        {
          key: "vid",
          // HbVoteID
          valueSchema: new FixedLengthByteArraySchema(32)
        },
        {
          key: "kd",
          // HbKeyDilution
          valueSchema: new Uint64Schema()
        },
        {
          key: "c",
          // HbChallengeDiscount
          valueSchema: new BooleanSchema()
        }
      ]));
    }
  });

  // node_modules/algosdk/dist/esm/transaction.js
  function uint8ArrayIsEmpty(input) {
    return input.every((value) => value === 0);
  }
  function getKeyregKey(input, inputName, length) {
    if (input == null) {
      return void 0;
    }
    let inputBytes;
    if (input instanceof Uint8Array) {
      inputBytes = input;
    }
    if (inputBytes == null || inputBytes.byteLength !== length) {
      throw Error(`${inputName} must be a ${length} byte Uint8Array`);
    }
    return inputBytes;
  }
  function ensureAddress(input) {
    if (input == null) {
      throw new Error("Address must not be null or undefined");
    }
    if (typeof input === "string") {
      return Address.fromString(input);
    }
    if (input instanceof Address) {
      return input;
    }
    throw new Error(`Not an address: ${input}`);
  }
  function optionalAddress(input) {
    if (input == null) {
      return void 0;
    }
    let addr;
    if (input instanceof Address) {
      addr = input;
    } else if (typeof input === "string") {
      addr = Address.fromString(input);
    } else {
      throw new Error(`Not an address: ${input}`);
    }
    if (uint8ArrayIsEmpty(addr.publicKey)) {
      throw new Error("Invalid use of the zero address. To omit this value, pass in undefined");
    }
    return addr;
  }
  function optionalUint8Array(input) {
    if (typeof input === "undefined") {
      return void 0;
    }
    if (input instanceof Uint8Array) {
      return input;
    }
    throw new Error(`Not a Uint8Array: ${input}`);
  }
  function ensureUint8Array2(input) {
    if (input instanceof Uint8Array) {
      return input;
    }
    throw new Error(`Not a Uint8Array: ${input}`);
  }
  function optionalUint64(input) {
    if (typeof input === "undefined") {
      return void 0;
    }
    return ensureUint64(input);
  }
  function ensureBoolean(input) {
    if (input === true || input === false) {
      return input;
    }
    throw new Error(`Not a boolean: ${input}`);
  }
  function ensureArray(input) {
    if (Array.isArray(input)) {
      return input.slice();
    }
    throw new Error(`Not an array: ${input}`);
  }
  function optionalFixedLengthByteArray(input, length, name) {
    const bytes = optionalUint8Array(input);
    if (typeof bytes === "undefined") {
      return void 0;
    }
    if (bytes.byteLength !== length) {
      throw new Error(`${name} must be ${length} bytes long, was ${bytes.byteLength}`);
    }
    if (uint8ArrayIsEmpty(bytes)) {
      return void 0;
    }
    return bytes;
  }
  function ensureBoxReference(input) {
    if (input != null && typeof input === "object") {
      const { appIndex, name } = input;
      return {
        appIndex: ensureUint64(appIndex),
        name: ensureUint8Array2(name)
      };
    }
    throw new Error(`Not a box reference: ${input}`);
  }
  function ensureHoldingReference(input) {
    if (input != null && typeof input === "object") {
      const { assetIndex, address } = input;
      return {
        assetIndex: ensureUint64(assetIndex),
        address: ensureAddress(address)
      };
    }
    throw new Error(`Not a holding reference: ${input}`);
  }
  function ensureLocalsReference(input) {
    if (input != null && typeof input === "object") {
      const { appIndex, address } = input;
      return {
        appIndex: ensureUint64(appIndex),
        address: ensureAddress(address)
      };
    }
    throw new Error(`Not a locals reference: ${input}`);
  }
  function ensureResourceReference(input) {
    if (input != null && typeof input === "object") {
      const { address, appIndex, assetIndex, holding, locals, box } = input;
      if (address !== void 0) {
        return { address: ensureAddress(address) };
      }
      if (appIndex !== void 0) {
        return { appIndex: ensureUint64(appIndex) };
      }
      if (assetIndex !== void 0) {
        return { assetIndex: ensureUint64(assetIndex) };
      }
      if (holding !== void 0) {
        return { holding: ensureHoldingReference(holding) };
      }
      if (locals !== void 0) {
        return { locals: ensureLocalsReference(locals) };
      }
      if (box !== void 0) {
        return { box: ensureBoxReference(box) };
      }
      if (isEmptyObject(input)) {
        return {};
      }
    }
    throw new Error(`Not a resource reference: ${input}`);
  }
  function decodeUnsignedTransaction(transactionBuffer) {
    return decodeMsgpack(transactionBuffer, Transaction);
  }
  var import_hi_base323, ALGORAND_TRANSACTION_LENGTH, ALGORAND_TRANSACTION_LEASE_LENGTH, NUM_ADDL_BYTES_AFTER_SIGNING, ASSET_METADATA_HASH_LENGTH, KEYREG_VOTE_KEY_LENGTH, KEYREG_SELECTION_KEY_LENGTH, KEYREG_STATE_PROOF_KEY_LENGTH, ALGORAND_TRANSACTION_GROUP_LENGTH, TX_TAG, Transaction;
  var init_transaction = __esm({
    "node_modules/algosdk/dist/esm/transaction.js"() {
      import_hi_base323 = __toESM(require_base32(), 1);
      init_boxStorage();
      init_appAccess();
      init_address();
      init_encoding();
      init_schema();
      init_naclWrappers();
      init_base();
      init_stateproof();
      init_heartbeat();
      init_utils();
      ALGORAND_TRANSACTION_LENGTH = 52;
      ALGORAND_TRANSACTION_LEASE_LENGTH = 32;
      NUM_ADDL_BYTES_AFTER_SIGNING = 75;
      ASSET_METADATA_HASH_LENGTH = 32;
      KEYREG_VOTE_KEY_LENGTH = 32;
      KEYREG_SELECTION_KEY_LENGTH = 32;
      KEYREG_STATE_PROOF_KEY_LENGTH = 64;
      ALGORAND_TRANSACTION_GROUP_LENGTH = 32;
      TX_TAG = new TextEncoder().encode("TX");
      Transaction = class _Transaction {
        constructor(params) {
          if (!isTransactionType(params.type)) {
            throw new Error(`Invalid transaction type: ${params.type}`);
          }
          this.type = params.type;
          this.sender = ensureAddress(params.sender);
          this.note = ensureUint8Array2(params.note ?? new Uint8Array());
          this.lease = optionalFixedLengthByteArray(params.lease, ALGORAND_TRANSACTION_LEASE_LENGTH, "lease");
          this.rekeyTo = optionalAddress(params.rekeyTo);
          this.group = void 0;
          this.firstValid = ensureUint64(params.suggestedParams.firstValid);
          this.lastValid = ensureUint64(params.suggestedParams.lastValid);
          if (params.suggestedParams.genesisID) {
            if (typeof params.suggestedParams.genesisID !== "string") {
              throw new Error("Genesis ID must be a string if present");
            }
            this.genesisID = params.suggestedParams.genesisID;
          }
          this.genesisHash = optionalUint8Array(params.suggestedParams.genesisHash);
          const fieldsPresent = [];
          if (params.paymentParams)
            fieldsPresent.push(TransactionType.pay);
          if (params.keyregParams)
            fieldsPresent.push(TransactionType.keyreg);
          if (params.assetConfigParams)
            fieldsPresent.push(TransactionType.acfg);
          if (params.assetTransferParams)
            fieldsPresent.push(TransactionType.axfer);
          if (params.assetFreezeParams)
            fieldsPresent.push(TransactionType.afrz);
          if (params.appCallParams)
            fieldsPresent.push(TransactionType.appl);
          if (params.stateProofParams)
            fieldsPresent.push(TransactionType.stpf);
          if (params.heartbeatParams)
            fieldsPresent.push(TransactionType.hb);
          if (fieldsPresent.length !== 1) {
            throw new Error(`Transaction has wrong number of type fields present (${fieldsPresent.length}): ${fieldsPresent}`);
          }
          if (this.type !== fieldsPresent[0]) {
            throw new Error(`Transaction has type ${this.type} but fields present for ${fieldsPresent[0]}`);
          }
          if (params.paymentParams) {
            this.payment = {
              receiver: ensureAddress(params.paymentParams.receiver),
              amount: ensureUint64(params.paymentParams.amount),
              closeRemainderTo: optionalAddress(params.paymentParams.closeRemainderTo)
            };
          }
          if (params.keyregParams) {
            this.keyreg = {
              voteKey: getKeyregKey(params.keyregParams.voteKey, "voteKey", KEYREG_VOTE_KEY_LENGTH),
              selectionKey: getKeyregKey(params.keyregParams.selectionKey, "selectionKey", KEYREG_SELECTION_KEY_LENGTH),
              stateProofKey: getKeyregKey(params.keyregParams.stateProofKey, "stateProofKey", KEYREG_STATE_PROOF_KEY_LENGTH),
              voteFirst: optionalUint64(params.keyregParams.voteFirst),
              voteLast: optionalUint64(params.keyregParams.voteLast),
              voteKeyDilution: optionalUint64(params.keyregParams.voteKeyDilution),
              nonParticipation: ensureBoolean(params.keyregParams.nonParticipation ?? false)
            };
            if (this.keyreg.nonParticipation && (this.keyreg.voteKey || this.keyreg.selectionKey || this.keyreg.stateProofKey || typeof this.keyreg.voteFirst !== "undefined" || typeof this.keyreg.voteLast !== "undefined" || typeof this.keyreg.voteKeyDilution !== "undefined")) {
              throw new Error("nonParticipation is true but participation params are present.");
            }
            if (
              // If we are participating
              !this.keyreg.nonParticipation && // And *ANY* participating fields are present
              (this.keyreg.voteKey || this.keyreg.selectionKey || this.keyreg.stateProofKey || typeof this.keyreg.voteFirst !== "undefined" || typeof this.keyreg.voteLast !== "undefined" || typeof this.keyreg.voteKeyDilution !== "undefined") && // Then *ALL* participating fields must be present (with an exception for stateProofKey,
              // which was introduced later so for backwards compatibility we don't require it)
              !(this.keyreg.voteKey && this.keyreg.selectionKey && typeof this.keyreg.voteFirst !== "undefined" && typeof this.keyreg.voteLast !== "undefined" && typeof this.keyreg.voteKeyDilution !== "undefined")
            ) {
              throw new Error(`Online key registration missing at least one of the following fields: voteKey, selectionKey, voteFirst, voteLast, voteKeyDilution`);
            }
          }
          if (params.assetConfigParams) {
            this.assetConfig = {
              assetIndex: ensureUint64(params.assetConfigParams.assetIndex ?? 0),
              total: ensureUint64(params.assetConfigParams.total ?? 0),
              decimals: ensureSafeUnsignedInteger(params.assetConfigParams.decimals ?? 0),
              defaultFrozen: ensureBoolean(params.assetConfigParams.defaultFrozen ?? false),
              manager: optionalAddress(params.assetConfigParams.manager),
              reserve: optionalAddress(params.assetConfigParams.reserve),
              freeze: optionalAddress(params.assetConfigParams.freeze),
              clawback: optionalAddress(params.assetConfigParams.clawback),
              unitName: params.assetConfigParams.unitName,
              assetName: params.assetConfigParams.assetName,
              assetURL: params.assetConfigParams.assetURL,
              assetMetadataHash: optionalFixedLengthByteArray(params.assetConfigParams.assetMetadataHash, ASSET_METADATA_HASH_LENGTH, "assetMetadataHash")
            };
          }
          if (params.assetTransferParams) {
            this.assetTransfer = {
              assetIndex: ensureUint64(params.assetTransferParams.assetIndex),
              amount: ensureUint64(params.assetTransferParams.amount),
              assetSender: optionalAddress(params.assetTransferParams.assetSender),
              receiver: ensureAddress(params.assetTransferParams.receiver),
              closeRemainderTo: optionalAddress(params.assetTransferParams.closeRemainderTo)
            };
          }
          if (params.assetFreezeParams) {
            this.assetFreeze = {
              assetIndex: ensureUint64(params.assetFreezeParams.assetIndex),
              freezeAccount: ensureAddress(params.assetFreezeParams.freezeTarget),
              frozen: ensureBoolean(params.assetFreezeParams.frozen)
            };
          }
          if (params.appCallParams) {
            const { onComplete } = params.appCallParams;
            if (!isOnApplicationComplete(onComplete)) {
              throw new Error(`Invalid onCompletion value: ${onComplete}`);
            }
            this.applicationCall = {
              appIndex: ensureUint64(params.appCallParams.appIndex),
              onComplete,
              numLocalInts: ensureSafeUnsignedInteger(params.appCallParams.numLocalInts ?? 0),
              numLocalByteSlices: ensureSafeUnsignedInteger(params.appCallParams.numLocalByteSlices ?? 0),
              numGlobalInts: ensureSafeUnsignedInteger(params.appCallParams.numGlobalInts ?? 0),
              numGlobalByteSlices: ensureSafeUnsignedInteger(params.appCallParams.numGlobalByteSlices ?? 0),
              extraPages: ensureSafeUnsignedInteger(params.appCallParams.extraPages ?? 0),
              approvalProgram: ensureUint8Array2(params.appCallParams.approvalProgram ?? new Uint8Array()),
              clearProgram: ensureUint8Array2(params.appCallParams.clearProgram ?? new Uint8Array()),
              appArgs: ensureArray(params.appCallParams.appArgs ?? []).map(ensureUint8Array2),
              accounts: ensureArray(params.appCallParams.accounts ?? []).map(ensureAddress),
              foreignApps: ensureArray(params.appCallParams.foreignApps ?? []).map(ensureUint64),
              foreignAssets: ensureArray(params.appCallParams.foreignAssets ?? []).map(ensureUint64),
              boxes: ensureArray(params.appCallParams.boxes ?? []).map(ensureBoxReference),
              access: ensureArray(params.appCallParams.access ?? []).map(ensureResourceReference),
              rejectVersion: ensureSafeUnsignedInteger(params.appCallParams.rejectVersion ?? 0)
            };
          }
          if (params.stateProofParams) {
            this.stateProof = {
              stateProofType: ensureSafeUnsignedInteger(params.stateProofParams.stateProofType ?? 0),
              stateProof: params.stateProofParams.stateProof,
              message: params.stateProofParams.message
            };
          }
          if (params.heartbeatParams) {
            this.heartbeat = new Heartbeat({
              address: params.heartbeatParams.address,
              proof: params.heartbeatParams.proof,
              seed: params.heartbeatParams.seed,
              voteID: params.heartbeatParams.voteID,
              keyDilution: params.heartbeatParams.keyDilution,
              challengeDiscount: params.heartbeatParams.challengeDiscount
            });
          }
          this.fee = ensureUint64(params.suggestedParams.fee);
          const feeDependsOnSize = !ensureBoolean(params.suggestedParams.flatFee ?? false);
          if (feeDependsOnSize) {
            const minFee = ensureUint64(params.suggestedParams.minFee);
            this.fee *= BigInt(this.estimateSize());
            if (this.fee < minFee) {
              this.fee = minFee;
            }
          }
        }
        // eslint-disable-next-line class-methods-use-this
        getEncodingSchema() {
          return _Transaction.encodingSchema;
        }
        toEncodingData() {
          const data = /* @__PURE__ */ new Map([
            ["type", this.type],
            ["fv", this.firstValid],
            ["lv", this.lastValid],
            ["snd", this.sender],
            ["gen", this.genesisID],
            ["gh", this.genesisHash],
            ["fee", this.fee],
            ["note", this.note],
            ["lx", this.lease],
            ["rekey", this.rekeyTo],
            ["grp", this.group]
          ]);
          if (this.payment) {
            data.set("amt", this.payment.amount);
            data.set("rcv", this.payment.receiver);
            data.set("close", this.payment.closeRemainderTo);
            return data;
          }
          if (this.keyreg) {
            data.set("votekey", this.keyreg.voteKey);
            data.set("selkey", this.keyreg.selectionKey);
            data.set("sprfkey", this.keyreg.stateProofKey);
            data.set("votefst", this.keyreg.voteFirst);
            data.set("votelst", this.keyreg.voteLast);
            data.set("votekd", this.keyreg.voteKeyDilution);
            data.set("nonpart", this.keyreg.nonParticipation);
            return data;
          }
          if (this.assetConfig) {
            data.set("caid", this.assetConfig.assetIndex);
            const assetParams = /* @__PURE__ */ new Map([
              ["t", this.assetConfig.total],
              ["dc", this.assetConfig.decimals],
              ["df", this.assetConfig.defaultFrozen],
              ["m", this.assetConfig.manager],
              ["r", this.assetConfig.reserve],
              ["f", this.assetConfig.freeze],
              ["c", this.assetConfig.clawback],
              ["un", this.assetConfig.unitName],
              ["an", this.assetConfig.assetName],
              ["au", this.assetConfig.assetURL],
              ["am", this.assetConfig.assetMetadataHash]
            ]);
            data.set("apar", assetParams);
            return data;
          }
          if (this.assetTransfer) {
            data.set("xaid", this.assetTransfer.assetIndex);
            data.set("aamt", this.assetTransfer.amount);
            data.set("arcv", this.assetTransfer.receiver);
            data.set("aclose", this.assetTransfer.closeRemainderTo);
            data.set("asnd", this.assetTransfer.assetSender);
            return data;
          }
          if (this.assetFreeze) {
            data.set("faid", this.assetFreeze.assetIndex);
            data.set("afrz", this.assetFreeze.frozen);
            data.set("fadd", this.assetFreeze.freezeAccount);
            return data;
          }
          if (this.applicationCall) {
            data.set("apid", this.applicationCall.appIndex);
            data.set("apan", this.applicationCall.onComplete);
            data.set("apaa", this.applicationCall.appArgs);
            data.set("apat", this.applicationCall.accounts);
            data.set("apas", this.applicationCall.foreignAssets);
            data.set("apfa", this.applicationCall.foreignApps);
            data.set("apbx", boxReferencesToEncodingData(this.applicationCall.boxes, this.applicationCall.foreignApps, this.applicationCall.appIndex));
            data.set("al", resourceReferencesToEncodingData(this.applicationCall.appIndex, this.applicationCall.access));
            data.set("apap", this.applicationCall.approvalProgram);
            data.set("apsu", this.applicationCall.clearProgram);
            data.set("apls", /* @__PURE__ */ new Map([
              ["nui", this.applicationCall.numLocalInts],
              ["nbs", this.applicationCall.numLocalByteSlices]
            ]));
            data.set("apgs", /* @__PURE__ */ new Map([
              ["nui", this.applicationCall.numGlobalInts],
              ["nbs", this.applicationCall.numGlobalByteSlices]
            ]));
            data.set("apep", this.applicationCall.extraPages);
            data.set("aprv", this.applicationCall.rejectVersion);
            return data;
          }
          if (this.stateProof) {
            data.set("sptype", this.stateProof.stateProofType);
            data.set("sp", this.stateProof.stateProof ? this.stateProof.stateProof.toEncodingData() : void 0);
            data.set("spmsg", this.stateProof.message ? this.stateProof.message.toEncodingData() : void 0);
            return data;
          }
          if (this.heartbeat) {
            const heartbeat = new Heartbeat({
              address: this.heartbeat.address,
              proof: this.heartbeat.proof,
              seed: this.heartbeat.seed,
              voteID: this.heartbeat.voteID,
              keyDilution: this.heartbeat.keyDilution,
              challengeDiscount: this.heartbeat.challengeDiscount
            });
            data.set("hb", heartbeat.toEncodingData());
            return data;
          }
          throw new Error(`Unexpected transaction type: ${this.type}`);
        }
        static fromEncodingData(data) {
          if (!(data instanceof Map)) {
            throw new Error(`Invalid decoded logic sig account: ${data}`);
          }
          const suggestedParams = {
            minFee: BigInt(0),
            flatFee: true,
            fee: data.get("fee") ?? 0,
            firstValid: data.get("fv") ?? 0,
            lastValid: data.get("lv") ?? 0,
            genesisHash: data.get("gh"),
            genesisID: data.get("gen")
          };
          const txnType = data.get("type");
          if (!isTransactionType(txnType)) {
            throw new Error(`Unrecognized transaction type: ${txnType}`);
          }
          const params = {
            type: txnType,
            sender: data.get("snd") ?? Address.zeroAddress(),
            note: data.get("note"),
            lease: data.get("lx"),
            suggestedParams
          };
          if (data.get("rekey")) {
            params.rekeyTo = data.get("rekey");
          }
          if (params.type === TransactionType.pay) {
            const paymentParams = {
              amount: data.get("amt") ?? 0,
              receiver: data.get("rcv") ?? Address.zeroAddress()
            };
            if (data.get("close")) {
              paymentParams.closeRemainderTo = data.get("close");
            }
            params.paymentParams = paymentParams;
          } else if (params.type === TransactionType.keyreg) {
            const keyregParams = {
              voteKey: data.get("votekey"),
              selectionKey: data.get("selkey"),
              stateProofKey: data.get("sprfkey"),
              voteFirst: data.get("votefst"),
              voteLast: data.get("votelst"),
              voteKeyDilution: data.get("votekd"),
              nonParticipation: data.get("nonpart")
            };
            params.keyregParams = keyregParams;
          } else if (params.type === TransactionType.acfg) {
            const assetConfigParams = {
              assetIndex: data.get("caid")
            };
            if (data.get("apar")) {
              const assetParams = data.get("apar");
              assetConfigParams.total = assetParams.get("t");
              assetConfigParams.decimals = assetParams.get("dc");
              assetConfigParams.defaultFrozen = assetParams.get("df");
              assetConfigParams.unitName = assetParams.get("un");
              assetConfigParams.assetName = assetParams.get("an");
              assetConfigParams.assetURL = assetParams.get("au");
              assetConfigParams.assetMetadataHash = assetParams.get("am");
              if (assetParams.get("m")) {
                assetConfigParams.manager = assetParams.get("m");
              }
              if (assetParams.get("r")) {
                assetConfigParams.reserve = assetParams.get("r");
              }
              if (assetParams.get("f")) {
                assetConfigParams.freeze = assetParams.get("f");
              }
              if (assetParams.get("c")) {
                assetConfigParams.clawback = assetParams.get("c");
              }
            }
            params.assetConfigParams = assetConfigParams;
          } else if (params.type === TransactionType.axfer) {
            const assetTransferParams = {
              assetIndex: data.get("xaid") ?? 0,
              amount: data.get("aamt") ?? 0,
              receiver: data.get("arcv") ?? Address.zeroAddress()
            };
            if (data.get("aclose")) {
              assetTransferParams.closeRemainderTo = data.get("aclose");
            }
            if (data.get("asnd")) {
              assetTransferParams.assetSender = data.get("asnd");
            }
            params.assetTransferParams = assetTransferParams;
          } else if (params.type === TransactionType.afrz) {
            const assetFreezeParams = {
              assetIndex: data.get("faid") ?? 0,
              freezeTarget: data.get("fadd") ?? Address.zeroAddress(),
              frozen: data.get("afrz") ?? false
            };
            params.assetFreezeParams = assetFreezeParams;
          } else if (params.type === TransactionType.appl) {
            const appCallParams = {
              appIndex: data.get("apid") ?? 0,
              onComplete: ensureSafeUnsignedInteger(data.get("apan") ?? 0),
              appArgs: data.get("apaa"),
              accounts: data.get("apat"),
              foreignAssets: data.get("apas"),
              foreignApps: data.get("apfa"),
              approvalProgram: data.get("apap"),
              clearProgram: data.get("apsu"),
              extraPages: data.get("apep"),
              rejectVersion: data.get("aprv") ?? 0
            };
            const localSchema = data.get("apls");
            if (localSchema) {
              appCallParams.numLocalInts = localSchema.get("nui");
              appCallParams.numLocalByteSlices = localSchema.get("nbs");
            }
            const globalSchema = data.get("apgs");
            if (globalSchema) {
              appCallParams.numGlobalInts = globalSchema.get("nui");
              appCallParams.numGlobalByteSlices = globalSchema.get("nbs");
            }
            const boxes = data.get("apbx");
            if (boxes) {
              appCallParams.boxes = boxes.map((box) => {
                const index = ensureSafeUnsignedInteger(box.get("i") ?? 0);
                const name = ensureUint8Array2(box.get("n") ?? new Uint8Array());
                if (index === 0) {
                  return {
                    appIndex: 0,
                    name
                  };
                }
                if (!appCallParams.foreignApps || index > appCallParams.foreignApps.length) {
                  throw new Error(`Cannot find foreign app index ${index} in ${appCallParams.foreignApps}`);
                }
                return {
                  appIndex: appCallParams.foreignApps[index - 1],
                  name
                };
              });
            }
            const references = data.get("al");
            if (references) {
              appCallParams.access = convertIndicesToResourceReferences(references);
            }
            params.appCallParams = appCallParams;
          } else if (params.type === TransactionType.stpf) {
            const stateProofParams = {
              stateProofType: data.get("sptype"),
              stateProof: data.get("sp") ? StateProof.fromEncodingData(data.get("sp")) : void 0,
              message: data.get("spmsg") ? StateProofMessage.fromEncodingData(data.get("spmsg")) : void 0
            };
            params.stateProofParams = stateProofParams;
          } else if (params.type === TransactionType.hb) {
            const heartbeat = Heartbeat.fromEncodingData(data.get("hb"));
            const heartbeatParams = {
              address: heartbeat.address,
              proof: heartbeat.proof,
              seed: heartbeat.seed,
              voteID: heartbeat.voteID,
              keyDilution: heartbeat.keyDilution,
              challengeDiscount: heartbeat.challengeDiscount
            };
            params.heartbeatParams = heartbeatParams;
          } else {
            const exhaustiveCheck = params.type;
            throw new Error(`Unexpected transaction type: ${exhaustiveCheck}`);
          }
          const txn = new _Transaction(params);
          if (data.get("grp")) {
            const group = ensureUint8Array2(data.get("grp"));
            if (group.byteLength !== ALGORAND_TRANSACTION_GROUP_LENGTH) {
              throw new Error(`Invalid group length: ${group.byteLength}`);
            }
            txn.group = group;
          }
          return txn;
        }
        estimateSize() {
          return this.toByte().length + NUM_ADDL_BYTES_AFTER_SIGNING;
        }
        bytesToSign() {
          const encodedMsg = this.toByte();
          return concatArrays(TX_TAG, encodedMsg);
        }
        toByte() {
          return encodeMsgpack(this);
        }
        /**
         * @deprecated Use `(await signTransactionWithSigner(txn, signer)).stxn.sig` instead
         *
         * returns the raw signature
         *
         */
        rawSignTxn(sk) {
          const toBeSigned = this.bytesToSign();
          const sig = sign(toBeSigned, sk);
          return sig;
        }
        /**
         * @deprecated Use `await signTransactionWithSigner(txn, signer)`
         */
        signTxn(sk) {
          const keypair = keyPairFromSecretKey(sk);
          const signerAddr = new Address(keypair.publicKey);
          const sig = this.rawSignTxn(sk);
          return this.attachSignature(signerAddr, sig);
        }
        attachSignature(signerAddr, signature) {
          if (!isValidSignatureLength(signature.length)) {
            throw new Error("Invalid signature length");
          }
          const sTxn = /* @__PURE__ */ new Map([
            ["sig", signature],
            ["txn", this.toEncodingData()]
          ]);
          const signerAddrObj = ensureAddress(signerAddr);
          if (!this.sender.equals(signerAddrObj)) {
            sTxn.set("sgnr", signerAddrObj);
          }
          const stxnSchema = new NamedMapSchema(allOmitEmpty([
            {
              key: "txn",
              valueSchema: _Transaction.encodingSchema
            },
            {
              key: "sig",
              valueSchema: new FixedLengthByteArraySchema(64)
            },
            {
              key: "sgnr",
              valueSchema: new OptionalSchema(new AddressSchema())
            }
          ]));
          return msgpackRawEncode(stxnSchema.prepareMsgpack(sTxn));
        }
        rawTxID() {
          const enMsg = this.toByte();
          const gh = concatArrays(TX_TAG, enMsg);
          return Uint8Array.from(genericHash(gh));
        }
        txID() {
          const hash = this.rawTxID();
          return import_hi_base323.default.encode(hash).slice(0, ALGORAND_TRANSACTION_LENGTH);
        }
      };
      Transaction.encodingSchema = new NamedMapSchema(allOmitEmpty([
        // Common
        { key: "type", valueSchema: new StringSchema() },
        { key: "snd", valueSchema: new AddressSchema() },
        { key: "lv", valueSchema: new Uint64Schema() },
        { key: "gen", valueSchema: new OptionalSchema(new StringSchema()) },
        {
          key: "gh",
          valueSchema: new OptionalSchema(new FixedLengthByteArraySchema(32))
        },
        { key: "fee", valueSchema: new Uint64Schema() },
        { key: "fv", valueSchema: new Uint64Schema() },
        { key: "note", valueSchema: new ByteArraySchema() },
        {
          key: "lx",
          valueSchema: new OptionalSchema(new FixedLengthByteArraySchema(32))
        },
        { key: "rekey", valueSchema: new OptionalSchema(new AddressSchema()) },
        {
          key: "grp",
          valueSchema: new OptionalSchema(new FixedLengthByteArraySchema(32))
        },
        // We mark all top-level type-specific fields optional because they will not be present when
        // the transaction is not that type.
        // Payment
        { key: "amt", valueSchema: new OptionalSchema(new Uint64Schema()) },
        { key: "rcv", valueSchema: new OptionalSchema(new AddressSchema()) },
        { key: "close", valueSchema: new OptionalSchema(new AddressSchema()) },
        // Keyreg
        {
          key: "votekey",
          valueSchema: new OptionalSchema(new FixedLengthByteArraySchema(32))
        },
        {
          key: "selkey",
          valueSchema: new OptionalSchema(new FixedLengthByteArraySchema(32))
        },
        {
          key: "sprfkey",
          valueSchema: new OptionalSchema(new FixedLengthByteArraySchema(64))
        },
        { key: "votefst", valueSchema: new OptionalSchema(new Uint64Schema()) },
        { key: "votelst", valueSchema: new OptionalSchema(new Uint64Schema()) },
        { key: "votekd", valueSchema: new OptionalSchema(new Uint64Schema()) },
        { key: "nonpart", valueSchema: new OptionalSchema(new BooleanSchema()) },
        // AssetConfig
        { key: "caid", valueSchema: new OptionalSchema(new Uint64Schema()) },
        {
          key: "apar",
          valueSchema: new OptionalSchema(new NamedMapSchema(allOmitEmpty([
            { key: "t", valueSchema: new Uint64Schema() },
            { key: "dc", valueSchema: new Uint64Schema() },
            { key: "df", valueSchema: new BooleanSchema() },
            {
              key: "m",
              valueSchema: new OptionalSchema(new AddressSchema())
            },
            {
              key: "r",
              valueSchema: new OptionalSchema(new AddressSchema())
            },
            {
              key: "f",
              valueSchema: new OptionalSchema(new AddressSchema())
            },
            {
              key: "c",
              valueSchema: new OptionalSchema(new AddressSchema())
            },
            {
              key: "un",
              valueSchema: new OptionalSchema(new StringSchema())
            },
            {
              key: "an",
              valueSchema: new OptionalSchema(new StringSchema())
            },
            {
              key: "au",
              valueSchema: new OptionalSchema(new StringSchema())
            },
            {
              key: "am",
              valueSchema: new OptionalSchema(new FixedLengthByteArraySchema(32))
            }
          ])))
        },
        // AssetTransfer
        { key: "xaid", valueSchema: new OptionalSchema(new Uint64Schema()) },
        { key: "aamt", valueSchema: new OptionalSchema(new Uint64Schema()) },
        { key: "arcv", valueSchema: new OptionalSchema(new AddressSchema()) },
        { key: "aclose", valueSchema: new OptionalSchema(new AddressSchema()) },
        { key: "asnd", valueSchema: new OptionalSchema(new AddressSchema()) },
        // AssetFreeze
        { key: "faid", valueSchema: new OptionalSchema(new Uint64Schema()) },
        { key: "afrz", valueSchema: new OptionalSchema(new BooleanSchema()) },
        { key: "fadd", valueSchema: new OptionalSchema(new AddressSchema()) },
        // Application
        { key: "apid", valueSchema: new OptionalSchema(new Uint64Schema()) },
        { key: "apan", valueSchema: new OptionalSchema(new Uint64Schema()) },
        {
          key: "apaa",
          valueSchema: new OptionalSchema(new ArraySchema(new ByteArraySchema()))
        },
        {
          key: "apat",
          valueSchema: new OptionalSchema(new ArraySchema(new AddressSchema()))
        },
        {
          key: "apas",
          valueSchema: new OptionalSchema(new ArraySchema(new Uint64Schema()))
        },
        {
          key: "apfa",
          valueSchema: new OptionalSchema(new ArraySchema(new Uint64Schema()))
        },
        {
          key: "apbx",
          valueSchema: new OptionalSchema(new ArraySchema(new NamedMapSchema(allOmitEmpty([
            {
              key: "i",
              valueSchema: new Uint64Schema()
            },
            {
              key: "n",
              valueSchema: new ByteArraySchema()
            }
          ]))))
        },
        {
          key: "al",
          valueSchema: new OptionalSchema(new ArraySchema(new NamedMapSchema(allOmitEmpty([
            {
              key: "d",
              valueSchema: new OptionalSchema(new AddressSchema())
            },
            {
              key: "s",
              valueSchema: new OptionalSchema(new Uint64Schema())
            },
            {
              key: "p",
              valueSchema: new OptionalSchema(new Uint64Schema())
            },
            {
              key: "h",
              valueSchema: new OptionalSchema(new NamedMapSchema(allOmitEmpty([
                {
                  key: "d",
                  valueSchema: new Uint64Schema()
                },
                {
                  key: "s",
                  valueSchema: new Uint64Schema()
                }
              ])))
            },
            {
              key: "l",
              valueSchema: new OptionalSchema(new NamedMapSchema(allOmitEmpty([
                {
                  key: "d",
                  valueSchema: new Uint64Schema()
                },
                {
                  key: "p",
                  valueSchema: new Uint64Schema()
                }
              ])))
            },
            {
              key: "b",
              valueSchema: new OptionalSchema(new NamedMapSchema(allOmitEmpty([
                {
                  key: "i",
                  valueSchema: new Uint64Schema()
                },
                {
                  key: "n",
                  valueSchema: new ByteArraySchema()
                }
              ])))
            }
          ]))))
        },
        { key: "apap", valueSchema: new OptionalSchema(new ByteArraySchema()) },
        { key: "apsu", valueSchema: new OptionalSchema(new ByteArraySchema()) },
        {
          key: "apls",
          valueSchema: new OptionalSchema(new NamedMapSchema(allOmitEmpty([
            {
              key: "nui",
              valueSchema: new Uint64Schema()
            },
            {
              key: "nbs",
              valueSchema: new Uint64Schema()
            }
          ])))
        },
        {
          key: "apgs",
          valueSchema: new OptionalSchema(new NamedMapSchema(allOmitEmpty([
            {
              key: "nui",
              valueSchema: new Uint64Schema()
            },
            {
              key: "nbs",
              valueSchema: new Uint64Schema()
            }
          ])))
        },
        { key: "apep", valueSchema: new OptionalSchema(new Uint64Schema()) },
        { key: "aprv", valueSchema: new OptionalSchema(new Uint64Schema()) },
        // StateProof
        { key: "sptype", valueSchema: new OptionalSchema(new Uint64Schema()) },
        { key: "sp", valueSchema: new OptionalSchema(StateProof.encodingSchema) },
        {
          key: "spmsg",
          valueSchema: new OptionalSchema(StateProofMessage.encodingSchema)
        },
        // Heartbeat
        { key: "hb", valueSchema: new OptionalSchema(Heartbeat.encodingSchema) }
      ]));
    }
  });

  // node_modules/algosdk/dist/esm/multisig.js
  function pksFromAddresses(addrs) {
    return addrs.map((addr) => {
      if (typeof addr === "string") {
        return Address.fromString(addr).publicKey;
      }
      return addr.publicKey;
    });
  }
  function addressFromMultisigPreImg({ version, threshold, pks }) {
    if (version !== 1 || version > 255 || version < 0) {
      throw new Error(INVALID_MSIG_VERSION_ERROR_MSG);
    }
    if (threshold === 0 || pks.length === 0 || threshold > pks.length || threshold > 255) {
      throw new Error(INVALID_MSIG_THRESHOLD_ERROR_MSG);
    }
    const pkLen = ALGORAND_ADDRESS_BYTE_LENGTH - ALGORAND_CHECKSUM_BYTE_LENGTH;
    if (pkLen !== PUBLIC_KEY_LENGTH) {
      throw new Error(UNEXPECTED_PK_LEN_ERROR_MSG);
    }
    const merged = new Uint8Array(MULTISIG_PREIMG2ADDR_PREFIX.length + 2 + pkLen * pks.length);
    merged.set(MULTISIG_PREIMG2ADDR_PREFIX, 0);
    merged.set([version], MULTISIG_PREIMG2ADDR_PREFIX.length);
    merged.set([threshold], MULTISIG_PREIMG2ADDR_PREFIX.length + 1);
    for (let i = 0; i < pks.length; i++) {
      if (pks[i].length !== pkLen) {
        throw new Error(INVALID_MSIG_PK_ERROR_MSG);
      }
      merged.set(pks[i], MULTISIG_PREIMG2ADDR_PREFIX.length + 2 + i * pkLen);
    }
    return new Address(Uint8Array.from(genericHash(merged)));
  }
  function verifyMultisig(toBeVerified, msig, publicKey) {
    const version = msig.v;
    const threshold = msig.thr;
    const subsigs = msig.subsig;
    const pks = subsigs.map((subsig) => subsig.pk);
    if (msig.subsig.length < threshold) {
      return false;
    }
    let pk;
    try {
      pk = addressFromMultisigPreImg({ version, threshold, pks }).publicKey;
    } catch (e) {
      return false;
    }
    if (!arrayEqual(pk, publicKey)) {
      return false;
    }
    let counter = 0;
    for (const subsig of subsigs) {
      if (subsig.s !== void 0) {
        counter += 1;
      }
    }
    if (counter < threshold) {
      return false;
    }
    let verifiedCounter = 0;
    for (const subsig of subsigs) {
      if (subsig.s !== void 0) {
        if (verify(toBeVerified, subsig.s, subsig.pk)) {
          verifiedCounter += 1;
        }
      }
    }
    if (verifiedCounter < threshold) {
      return false;
    }
    return true;
  }
  var MULTISIG_PREIMG2ADDR_PREFIX, INVALID_MSIG_VERSION_ERROR_MSG, INVALID_MSIG_THRESHOLD_ERROR_MSG, INVALID_MSIG_PK_ERROR_MSG, UNEXPECTED_PK_LEN_ERROR_MSG;
  var init_multisig = __esm({
    "node_modules/algosdk/dist/esm/multisig.js"() {
      init_naclWrappers();
      init_address();
      init_utils();
      MULTISIG_PREIMG2ADDR_PREFIX = new Uint8Array([
        77,
        117,
        108,
        116,
        105,
        115,
        105,
        103,
        65,
        100,
        100,
        114
      ]);
      INVALID_MSIG_VERSION_ERROR_MSG = "invalid multisig version";
      INVALID_MSIG_THRESHOLD_ERROR_MSG = "bad multisig threshold";
      INVALID_MSIG_PK_ERROR_MSG = "bad multisig public key - wrong length";
      UNEXPECTED_PK_LEN_ERROR_MSG = "nacl public key length is not 32 bytes";
    }
  });

  // node_modules/algosdk/dist/esm/types/transactions/encoded.js
  function encodedSubsigFromEncodingData(data) {
    if (!(data instanceof Map)) {
      throw new Error(`Invalid decoded EncodedSubsig: ${data}`);
    }
    const subsig = {
      pk: data.get("pk")
    };
    if (data.get("s")) {
      subsig.s = data.get("s");
    }
    return subsig;
  }
  function encodedSubsigToEncodingData(subsig) {
    const data = /* @__PURE__ */ new Map([["pk", subsig.pk]]);
    if (subsig.s) {
      data.set("s", subsig.s);
    }
    return data;
  }
  function encodedMultiSigFromEncodingData(data) {
    if (!(data instanceof Map)) {
      throw new Error(`Invalid decoded EncodedMultiSig: ${data}`);
    }
    return {
      v: ensureSafeUnsignedInteger(data.get("v")),
      thr: ensureSafeUnsignedInteger(data.get("thr")),
      subsig: data.get("subsig").map(encodedSubsigFromEncodingData)
    };
  }
  function encodedMultiSigToEncodingData(msig) {
    return /* @__PURE__ */ new Map([
      ["v", msig.v],
      ["thr", msig.thr],
      ["subsig", msig.subsig.map(encodedSubsigToEncodingData)]
    ]);
  }
  function encodedPQSigFromEncodingData(data) {
    if (!(data instanceof Map)) {
      throw new Error(`Invalid decoded EncodedPQSig: ${data}`);
    }
    const sch = data.get("sch");
    if (sch.length !== PQ_SCHEME_SIZE) {
      throw new Error(`Invalid decoded EncodedPQSig: expected a ${PQ_SCHEME_SIZE}-byte scheme, got ${sch.length} bytes`);
    }
    const slt = ensureSafeUnsignedInteger(data.get("slt"));
    if (slt > PQ_SALT_MAX) {
      throw new Error(`Invalid decoded EncodedPQSig: salt ${slt} exceeds the maximum of ${PQ_SALT_MAX}`);
    }
    return {
      sch,
      slt,
      pk: data.get("pk"),
      sig: data.get("sig")
    };
  }
  function encodedPQSigToEncodingData(pqsig) {
    return /* @__PURE__ */ new Map([
      ["sch", pqsig.sch],
      ["slt", pqsig.slt],
      ["pk", pqsig.pk],
      ["sig", pqsig.sig]
    ]);
  }
  var ENCODED_SUBSIG_SCHEMA, ENCODED_MULTISIG_SCHEMA, ENCODED_PQSIG_SCHEMA;
  var init_encoded = __esm({
    "node_modules/algosdk/dist/esm/types/transactions/encoded.js"() {
      init_schema();
      init_utils();
      init_address();
      ENCODED_SUBSIG_SCHEMA = new NamedMapSchema(allOmitEmpty([
        {
          key: "pk",
          valueSchema: new FixedLengthByteArraySchema(32)
        },
        {
          key: "s",
          valueSchema: new OptionalSchema(new FixedLengthByteArraySchema(64))
        }
      ]));
      ENCODED_MULTISIG_SCHEMA = new NamedMapSchema(allOmitEmpty([
        {
          key: "v",
          valueSchema: new Uint64Schema()
        },
        {
          key: "thr",
          valueSchema: new Uint64Schema()
        },
        {
          key: "subsig",
          valueSchema: new ArraySchema(ENCODED_SUBSIG_SCHEMA)
        }
      ]));
      ENCODED_PQSIG_SCHEMA = new NamedMapSchema(allOmitEmpty([
        {
          key: "sch",
          valueSchema: new ByteArraySchema()
        },
        {
          key: "slt",
          valueSchema: new Uint64Schema()
        },
        {
          key: "pk",
          valueSchema: new ByteArraySchema()
        },
        {
          key: "sig",
          valueSchema: new ByteArraySchema()
        }
      ]));
    }
  });

  // node_modules/algosdk/dist/esm/logicsig.js
  function sanityCheckProgram(program) {
    if (!program || program.length === 0)
      throw new Error("empty program");
    const lineBreakOrd = "\n".charCodeAt(0);
    const blankSpaceOrd = " ".charCodeAt(0);
    const tildeOrd = "~".charCodeAt(0);
    const isPrintable = (x) => blankSpaceOrd <= x && x <= tildeOrd;
    const isAsciiPrintable = program.every((x) => x === lineBreakOrd || isPrintable(x));
    if (isAsciiPrintable) {
      const programStr = new TextDecoder().decode(program);
      if (isValidAddress(programStr))
        throw new Error("requesting program bytes, get Algorand address");
      if (base64regex.test(programStr))
        throw new Error("program should not be b64 encoded");
      throw new Error("program bytes are all ASCII printable characters, not looking like Teal byte code");
    }
  }
  var base64regex, PROGRAM_TAG, PQ_PROGRAM_TAG, MSIG_PROGRAM_TAG, LogicSig, LogicSigAccount, SIGN_PROGRAM_DATA_PREFIX;
  var init_logicsig = __esm({
    "node_modules/algosdk/dist/esm/logicsig.js"() {
      init_naclWrappers();
      init_address();
      init_encoding();
      init_schema();
      init_multisig();
      init_utils();
      init_encoded();
      base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
      PROGRAM_TAG = new TextEncoder().encode("Program");
      PQ_PROGRAM_TAG = new TextEncoder().encode("PQProgram");
      MSIG_PROGRAM_TAG = new TextEncoder().encode("MsigProgram");
      LogicSig = class _LogicSig {
        constructor(program, programArgs) {
          if (programArgs && (!Array.isArray(programArgs) || !programArgs.every((arg) => arg.constructor === Uint8Array))) {
            throw new TypeError("Invalid arguments");
          }
          let args = [];
          if (programArgs != null)
            args = programArgs.map((arg) => new Uint8Array(arg));
          sanityCheckProgram(program);
          this.logic = program;
          this.args = args;
          this.sig = void 0;
          this.msig = void 0;
          this.lmsig = void 0;
          this.pqsig = void 0;
        }
        // eslint-disable-next-line class-methods-use-this
        getEncodingSchema() {
          return _LogicSig.encodingSchema;
        }
        toEncodingData() {
          const data = /* @__PURE__ */ new Map([
            ["l", this.logic],
            ["arg", this.args],
            ["sig", this.sig]
          ]);
          if (this.msig) {
            data.set("msig", encodedMultiSigToEncodingData(this.msig));
          }
          if (this.lmsig) {
            data.set("lmsig", encodedMultiSigToEncodingData(this.lmsig));
          }
          if (this.pqsig) {
            data.set("pqsig", encodedPQSigToEncodingData(this.pqsig));
          }
          return data;
        }
        static fromEncodingData(data) {
          if (!(data instanceof Map)) {
            throw new Error(`Invalid decoded logic sig: ${data}`);
          }
          const lsig = new _LogicSig(data.get("l"), data.get("arg"));
          lsig.sig = data.get("sig");
          if (data.get("msig")) {
            lsig.msig = encodedMultiSigFromEncodingData(data.get("msig"));
          }
          if (data.get("lmsig")) {
            lsig.lmsig = encodedMultiSigFromEncodingData(data.get("lmsig"));
          }
          if (data.get("pqsig")) {
            lsig.pqsig = encodedPQSigFromEncodingData(data.get("pqsig"));
          }
          return lsig;
        }
        /**
         * @deprecated This function does not perform full verification and should not be fully trusted on its own.
         * For example, it does not evaluate programs and does not have the ability to validate PQ signatures.
         *
         * Performs signature verification
         * @param publicKey - Verification key (derived from sender address or escrow address)
         */
        verify(publicKey) {
          const sigCount = [this.sig, this.msig, this.lmsig, this.pqsig].filter(Boolean).length;
          if (sigCount > 1) {
            return false;
          }
          try {
            sanityCheckProgram(this.logic);
          } catch (e) {
            return false;
          }
          const toBeSigned = concatArrays(PROGRAM_TAG, this.logic);
          if (!this.sig && !this.msig && !this.lmsig && !this.pqsig) {
            const hash = genericHash(toBeSigned);
            return arrayEqual(hash, publicKey);
          }
          if (this.pqsig) {
            return false;
          }
          if (this.sig) {
            return verify(toBeSigned, this.sig, publicKey);
          }
          if (this.lmsig) {
            const multisigAddr = addressFromMultisigPreImg({
              version: this.lmsig.v,
              threshold: this.lmsig.thr,
              pks: this.lmsig.subsig.map((subsig) => subsig.pk)
            });
            const lmsigProgram = concatArrays(MSIG_PROGRAM_TAG, multisigAddr.publicKey, this.logic);
            return verifyMultisig(lmsigProgram, this.lmsig, publicKey);
          }
          if (this.msig) {
            return verifyMultisig(toBeSigned, this.msig, publicKey);
          }
          return false;
        }
        /**
         * Compute hash of the logic sig program (that is the same as escrow account address) as string address
         * @returns String representation of the address
         */
        address() {
          const toBeSigned = concatArrays(PROGRAM_TAG, this.logic);
          const hash = genericHash(toBeSigned);
          return new Address(Uint8Array.from(hash));
        }
        /**
         * @deprecated Use `signWithSigner` instead
         *
         * Creates signature (if no msig provided) or multi signature otherwise
         * @param secretKey - Secret key to sign with
         * @param msig - Multisig account as \{version, threshold, addrs\}
         */
        sign(secretKey, msig) {
          if (msig == null) {
            this.sig = this.signProgram(secretKey);
          } else {
            const subsigs = pksFromAddresses(msig.addrs).map((pk) => ({ pk }));
            this.lmsig = {
              v: msig.version,
              thr: msig.threshold,
              subsig: subsigs
            };
            const [sig, index] = this.singleSignMultisig(secretKey, this.lmsig);
            this.lmsig.subsig[index].s = sig;
          }
        }
        /**
         * Signs this LogicSig for delegation using the given signer.
         *
         * @remarks
         * Re-signing an already-signed LogicSig is allowed, and replaces the previous
         * delegation signature. At most one of `sig`, `msig`, `lmsig` and `pqsig` may
         * be set, so any signature left over from an earlier call is cleared.
         *
         * @param signer - The signer to delegate to
         * @param msig - Optional multisig account the signer is a subsigner of
         * @returns The address the signer signed as. When `msig` is omitted this is
         *   the delegating account. When `msig` is given it is the individual
         *   subsigner, not the multisig, so the delegating account is
         *   `multisigAddress(msig)`. Either way it is an authorizing address, which
         *   is not necessarily the address a signer sends transactions from.
         * @throws If the signer returns a signature of the wrong kind for the
         *   requested delegation, or an `lmsig` whose version, threshold or public
         *   keys do not match `msig`
         */
        async signWithSigner(signer, msig) {
          const sigResult = await signer(this, msig);
          if (msig == null) {
            if ("pqsig" in sigResult && sigResult.pqsig) {
              this.clearSignatures();
              this.pqsig = sigResult.pqsig;
              return sigResult.address;
            }
            if (!("sig" in sigResult) || !sigResult.sig) {
              throw Error("Expected DelegatedLsigSigner to return sig or pqsig, but both are undefined. If signing for an msig, be sure to pass the msig argument");
            }
            this.clearSignatures();
            this.sig = sigResult.sig;
          } else {
            if (!("lmsig" in sigResult) || !sigResult.lmsig) {
              throw Error("Expected DelegatedLsigSigner to return lmsig, but lmsig is undefined. If signing for a single account, do not pass msig argument");
            }
            const { lmsig } = sigResult;
            const expectedPks = pksFromAddresses(msig.addrs);
            if (lmsig.v !== msig.version || lmsig.thr !== msig.threshold || lmsig.subsig.length !== expectedPks.length || !lmsig.subsig.every((subsig, i) => arrayEqual(subsig.pk, expectedPks[i]))) {
              throw Error("DelegatedLsigSigner returned an lmsig whose version, threshold or public keys do not match the requested multisig");
            }
            this.clearSignatures();
            this.lmsig = sigResult.lmsig;
          }
          return sigResult.address;
        }
        /**
         * Removes every delegation signature from this LogicSig, so that exactly one
         * of them can be set afterwards.
         */
        clearSignatures() {
          this.sig = void 0;
          this.msig = void 0;
          this.lmsig = void 0;
          this.pqsig = void 0;
        }
        /**
         * @deprecated Use `appendToMultisigWithSigner` instead
         *
         * Appends a signature to multi signature
         * @param secretKey - Secret key to sign with
         */
        appendToMultisig(secretKey) {
          if (this.lmsig === void 0) {
            throw new Error("no multisig present");
          }
          const [sig, index] = this.singleSignMultisig(secretKey, this.lmsig);
          this.lmsig.subsig[index].s = sig;
        }
        /**
         * Appends an additional subsignature to this LogicSig's existing multisig
         * delegation.
         *
         * @remarks
         * The multisig preimage is taken from the `lmsig` already on this LogicSig,
         * so {@link signWithSigner} must have been called with an `msig` argument
         * first. The signer must hold a key belonging to that multisig.
         *
         * A signature already collected from another member is never silently
         * replaced: if the signer returns a different signature for a subsig that is
         * already filled in, this throws instead.
         *
         * @param signer - The signer to append a subsignature from
         * @throws If there is no multisig on this LogicSig, if the signer returns no
         *   signature, a signature for a key outside the multisig, or one that
         *   conflicts with a signature already collected
         */
        async appendToMultisigWithSigner(signer) {
          if (this.lmsig === void 0) {
            throw new Error("no multisig present");
          }
          const sigResult = await signer(this, {
            version: this.lmsig.v,
            threshold: this.lmsig.thr,
            addrs: this.lmsig.subsig.map((s) => new Address(s.pk))
          });
          if (!("lmsig" in sigResult) || !sigResult.lmsig) {
            throw Error("Expected DelegatedLsigSigner to return lmsig, but lmsig is undefined");
          }
          if (sigResult.lmsig.v !== this.lmsig.v || sigResult.lmsig.thr !== this.lmsig.thr) {
            throw Error("DelegatedLsigSigner returned an lmsig whose version or threshold does not match the current msig");
          }
          let signaturesReturned = false;
          for (const subsig of sigResult.lmsig.subsig) {
            if (subsig.s) {
              signaturesReturned = true;
              const thisSubsig = this.lmsig.subsig.find((s) => arrayEqual(s.pk, subsig.pk));
              if (thisSubsig === void 0) {
                throw Error(`DelegatedLsigSigner returned a signature for ${new Address(subsig.pk)} but this pk is not in the current msig`);
              }
              if (thisSubsig.s && !arrayEqual(thisSubsig.s, subsig.s)) {
                throw Error(`DelegatedLsigSigner returned a signature for ${new Address(subsig.pk)} that conflicts with the signature already collected for it`);
              }
              thisSubsig.s = subsig.s;
            }
          }
          if (!signaturesReturned) {
            throw Error("DelegatedLsigSigner returned an lmsig with no signatures");
          }
        }
        /**
         * @deprecated Use `signWithSigner` followed by `.sig` instead
         */
        signProgram(secretKey) {
          const toBeSigned = concatArrays(PROGRAM_TAG, this.logic);
          const sig = sign(toBeSigned, secretKey);
          return sig;
        }
        /**
         * @deprecated Use `signWithSigner` followed by `.sig` instead
         */
        signProgramMultisig(secretKey, msig) {
          const multisigAddr = addressFromMultisigPreImg({
            version: msig.v,
            threshold: msig.thr,
            pks: msig.subsig.map((subsig) => subsig.pk)
          });
          const toBeSigned = concatArrays(MSIG_PROGRAM_TAG, multisigAddr.publicKey, this.logic);
          const sig = sign(toBeSigned, secretKey);
          return sig;
        }
        /**
         * @deprecated Use `signWithSigner` followed by `.sig` instead
         */
        singleSignMultisig(secretKey, msig) {
          let index = -1;
          const myPk = keyPairFromSecretKey(secretKey).publicKey;
          for (let i = 0; i < msig.subsig.length; i++) {
            const { pk } = msig.subsig[i];
            if (arrayEqual(pk, myPk)) {
              index = i;
              break;
            }
          }
          if (index === -1) {
            throw new Error("invalid secret key");
          }
          const sig = this.signProgramMultisig(secretKey, msig);
          return [sig, index];
        }
        toByte() {
          return encodeMsgpack(this);
        }
        static fromByte(encoded) {
          return decodeMsgpack(encoded, _LogicSig);
        }
        /**
         * Signs arbitrary data for use with the `ed25519verify` opcode from within
         * this LogicSig's program.
         *
         * @remarks
         * This does not modify the LogicSig or delegate it; the LogicSig is only used
         * for the address that domain-separates the signature. The program is
         * responsible for verifying the returned signature against the signer's
         * public key.
         *
         * @param signer - The signer to sign the data with
         * @param data - The data to sign
         * @returns A promise which resolves to the raw signature over the data
         */
        async signDataWithSigner(signer, data) {
          return signer(data, this);
        }
      };
      LogicSig.encodingSchema = new NamedMapSchema(allOmitEmpty([
        {
          key: "l",
          valueSchema: new ByteArraySchema()
        },
        {
          key: "arg",
          valueSchema: new ArraySchema(new ByteArraySchema())
        },
        {
          key: "sig",
          valueSchema: new OptionalSchema(new FixedLengthByteArraySchema(64))
        },
        {
          key: "msig",
          valueSchema: new OptionalSchema(ENCODED_MULTISIG_SCHEMA)
        },
        {
          key: "lmsig",
          valueSchema: new OptionalSchema(ENCODED_MULTISIG_SCHEMA)
        },
        {
          key: "pqsig",
          valueSchema: new OptionalSchema(ENCODED_PQSIG_SCHEMA)
        }
      ]));
      LogicSigAccount = class _LogicSigAccount {
        /**
         * Create a new LogicSigAccount. By default this will create an escrow
         * LogicSig account. Call `sign` or `signMultisig` on the newly created
         * LogicSigAccount to make it a delegated account.
         *
         * @param program - The compiled TEAL program which contains the logic for
         *   this LogicSig.
         * @param args - An optional array of arguments for the program.
         */
        constructor(program, args) {
          this.lsig = new LogicSig(program, args);
          this.sigkey = void 0;
        }
        // eslint-disable-next-line class-methods-use-this
        getEncodingSchema() {
          return _LogicSigAccount.encodingSchema;
        }
        toEncodingData() {
          return /* @__PURE__ */ new Map([
            ["lsig", this.lsig.toEncodingData()],
            ["sigkey", this.sigkey]
          ]);
        }
        static fromEncodingData(data) {
          if (!(data instanceof Map)) {
            throw new Error(`Invalid decoded logic sig account: ${data}`);
          }
          const value = data;
          const lsig = LogicSig.fromEncodingData(value.get("lsig"));
          const lsigAccount = new _LogicSigAccount(lsig.logic, lsig.args);
          lsigAccount.lsig = lsig;
          lsigAccount.sigkey = value.get("sigkey");
          return lsigAccount;
        }
        /**
         * Encode this object into msgpack.
         */
        toByte() {
          return encodeMsgpack(this);
        }
        /**
         * Decode a msgpack object into a LogicSigAccount.
         * @param encoded - The encoded LogicSigAccount.
         */
        static fromByte(encoded) {
          return decodeMsgpack(encoded, _LogicSigAccount);
        }
        /**
         * Check if this LogicSigAccount has been delegated to another account with a
         * signature.
         *
         * Note this function only checks for the presence of a delegation signature.
         * To verify the delegation signature, use `verify`.
         */
        isDelegated() {
          return !!(this.lsig.sig || this.lsig.msig || this.lsig.lmsig || this.lsig.pqsig);
        }
        /**
         * @deprecated This function does not perform full verification and should not be fully trusted on its own.
         * For example, it does not evaluate programs and does not have the ability to validate PQ signatures.
         *
         * Verifies this LogicSig's program and signatures.
         * @returns true if and only if the LogicSig program and signatures are valid.
         */
        verify() {
          const addr = this.address();
          return this.lsig.verify(addr.publicKey);
        }
        /**
         * Get the address of this LogicSigAccount.
         *
         * If the LogicSig is delegated to another account, this will return the
         * address of that account.
         *
         * If the LogicSig is not delegated to another account, this will return an
         *  escrow address that is the hash of the LogicSig's program code.
         */
        address() {
          const sigCount = [
            this.lsig.sig,
            this.lsig.msig,
            this.lsig.lmsig,
            this.lsig.pqsig
          ].filter(Boolean).length;
          if (sigCount > 1) {
            throw new Error("LogicSig has too many signatures. At most one of sig, msig, lmsig, or pqsig may be present");
          }
          if (this.lsig.pqsig) {
            const derived = addressFromPQSig(this.lsig.pqsig);
            if (this.sigkey && !arrayEqual(this.sigkey, derived.publicKey)) {
              throw new Error(`Signing key for delegated account does not match the PQ signature. The signature authorizes ${derived}, but sigkey is ${new Address(this.sigkey)}`);
            }
            return derived;
          }
          if (this.lsig.sig) {
            if (!this.sigkey) {
              throw new Error("Signing key for delegated account is missing");
            }
            return new Address(this.sigkey);
          }
          const msig = this.lsig.lmsig || this.lsig.msig;
          if (msig) {
            const msigMetadata = {
              version: msig.v,
              threshold: msig.thr,
              pks: msig.subsig.map((subsig) => subsig.pk)
            };
            return addressFromMultisigPreImg(msigMetadata);
          }
          return this.lsig.address();
        }
        /**
         * @deprecated Use `signMultisigWithSigner` instead
         *
         * Turns this LogicSigAccount into a delegated LogicSig. This type of LogicSig
         * has the authority to sign transactions on behalf of another account, called
         * the delegating account. Use this function if the delegating account is a
         * multisig account.
         *
         * @param msig - The multisig delegating account
         * @param secretKey - The secret key of one of the members of the delegating
         *   multisig account. Use `appendToMultisig` to add additional signatures
         *   from other members.
         */
        signMultisig(msig, secretKey) {
          this.lsig.sign(secretKey, msig);
        }
        /**
         * Turns this LogicSigAccount into a delegated LogicSig, signed by one member
         * of a delegating multisig account.
         *
         * @remarks
         * This produces a LogicSig with a single subsignature filled in. Unless the
         * multisig's threshold is 1, call {@link LogicSigAccount.appendToMultisigWithSigner}
         * with the remaining members' signers before the LogicSig can authorize
         * transactions.
         *
         * If the delegating account is not a multisig, use
         * {@link LogicSigAccount.signWithSigner} instead.
         *
         * @param msig - The multisig delegating to this LogicSig
         * @param signer - The signer of one member of `msig`
         */
        async signMultisigWithSigner(msig, signer) {
          await this.lsig.signWithSigner(signer, msig);
        }
        /**
         * @deprecated Use appendToMultisigWithSigner
         *
         * Adds an additional signature from a member of the delegating multisig
         * account.
         *
         * @param secretKey - The secret key of one of the members of the delegating
         *   multisig account.
         */
        appendToMultisig(secretKey) {
          this.lsig.appendToMultisig(secretKey);
        }
        /**
         * Adds an additional signature from a member of the delegating multisig
         * account.
         *
         * @remarks
         * {@link LogicSigAccount.signMultisigWithSigner} must have been called first
         * to establish the multisig this signature belongs to.
         *
         * @param signer - The signer of another member of the delegating multisig account
         */
        async appendToMultisigWithSigner(signer) {
          await this.lsig.appendToMultisigWithSigner(signer);
        }
        /**
         * @deprecated Use `signWithSigner` instead
         *
         * Turns this LogicSigAccount into a delegated LogicSig. This type of LogicSig
         * has the authority to sign transactions on behalf of another account, called
         * the delegating account. If the delegating account is a multisig account,
         * use `signMultisig` instead.
         *
         * @param secretKey - The secret key of the delegating account.
         */
        sign(secretKey) {
          this.lsig.sign(secretKey);
          this.sigkey = keyPairFromSecretKey(secretKey).publicKey;
        }
        /**
         * Turns this LogicSigAccount into a delegated LogicSig, signed by the given
         * signer. This type of LogicSig has the authority to sign transactions on
         * behalf of another account, called the delegating account.
         *
         * @remarks
         * If the delegating account is a multisig account, use
         * {@link LogicSigAccount.signMultisigWithSigner} instead.
         *
         * The delegating account is taken to be the address the signer reports having
         * signed as, not any sending address the signer advertises: for a rekeyed
         * account the latter is the address it sends transactions from, which is not
         * the account authorizing this delegation.
         *
         * @param signer - The signer of the delegating account.
         */
        async signWithSigner(signer) {
          const delegatingAddress = await this.lsig.signWithSigner(signer);
          this.sigkey = delegatingAddress.publicKey;
        }
      };
      LogicSigAccount.encodingSchema = new NamedMapSchema(allOmitEmpty([
        {
          key: "lsig",
          valueSchema: LogicSig.encodingSchema
        },
        {
          key: "sigkey",
          valueSchema: new OptionalSchema(new FixedLengthByteArraySchema(32))
        }
      ]));
      SIGN_PROGRAM_DATA_PREFIX = new TextEncoder().encode("ProgData");
    }
  });

  // node_modules/algosdk/dist/esm/types/transactions/index.js
  var init_transactions = __esm({
    "node_modules/algosdk/dist/esm/types/transactions/index.js"() {
      init_base();
      init_encoded();
    }
  });

  // node_modules/algosdk/dist/esm/signedTransaction.js
  function decodeSignedTransaction(transactionBuffer) {
    return decodeMsgpack(transactionBuffer, SignedTransaction);
  }
  var SignedTransaction;
  var init_signedTransaction = __esm({
    "node_modules/algosdk/dist/esm/signedTransaction.js"() {
      init_encoding();
      init_transaction();
      init_logicsig();
      init_transactions();
      init_schema();
      SignedTransaction = class _SignedTransaction {
        constructor({ txn, sig, msig, lsig, pqsig, sgnr }) {
          this.txn = txn;
          this.sig = sig;
          this.msig = msig;
          this.lsig = lsig;
          this.pqsig = pqsig;
          this.sgnr = sgnr;
          let numberOfSigs = 0;
          if (sig)
            numberOfSigs += 1;
          if (msig)
            numberOfSigs += 1;
          if (lsig)
            numberOfSigs += 1;
          if (pqsig)
            numberOfSigs += 1;
          if (numberOfSigs > 1) {
            throw new Error(`SignedTransaction must not have more than 1 signature. Got ${numberOfSigs}`);
          }
        }
        // eslint-disable-next-line class-methods-use-this
        getEncodingSchema() {
          return _SignedTransaction.encodingSchema;
        }
        toEncodingData() {
          return /* @__PURE__ */ new Map([
            ["txn", this.txn.toEncodingData()],
            ["sig", this.sig],
            [
              "msig",
              this.msig ? encodedMultiSigToEncodingData(this.msig) : void 0
            ],
            ["lsig", this.lsig ? this.lsig.toEncodingData() : void 0],
            [
              "pqsig",
              this.pqsig ? encodedPQSigToEncodingData(this.pqsig) : void 0
            ],
            ["sgnr", this.sgnr]
          ]);
        }
        static fromEncodingData(data) {
          if (!(data instanceof Map)) {
            throw new Error(`Invalid decoded SignedTransaction: ${data}`);
          }
          return new _SignedTransaction({
            txn: Transaction.fromEncodingData(data.get("txn")),
            sig: data.get("sig"),
            msig: data.get("msig") ? encodedMultiSigFromEncodingData(data.get("msig")) : void 0,
            lsig: data.get("lsig") ? LogicSig.fromEncodingData(data.get("lsig")) : void 0,
            pqsig: data.get("pqsig") ? encodedPQSigFromEncodingData(data.get("pqsig")) : void 0,
            sgnr: data.get("sgnr")
          });
        }
      };
      SignedTransaction.encodingSchema = new NamedMapSchema(allOmitEmpty([
        {
          key: "txn",
          valueSchema: Transaction.encodingSchema
        },
        {
          key: "sig",
          valueSchema: new OptionalSchema(new FixedLengthByteArraySchema(64))
        },
        {
          key: "msig",
          valueSchema: new OptionalSchema(ENCODED_MULTISIG_SCHEMA)
        },
        {
          key: "lsig",
          valueSchema: new OptionalSchema(LogicSig.encodingSchema)
        },
        {
          key: "pqsig",
          valueSchema: new OptionalSchema(ENCODED_PQSIG_SCHEMA)
        },
        {
          key: "sgnr",
          valueSchema: new OptionalSchema(new AddressSchema())
        }
      ]));
    }
  });

  // node_modules/algosdk/dist/esm/types/block.js
  var StateProofTrackingData, TxnCommitments, RewardState, UpgradeState, UpgradeVote, ParticipationUpdates, BlockHeader, ValueDelta, EvalDelta, ApplyData, SignedTxnWithAD, SignedTxnInBlock, Block;
  var init_block = __esm({
    "node_modules/algosdk/dist/esm/types/block.js"() {
      init_schema();
      init_signedTransaction();
      StateProofTrackingData = class _StateProofTrackingData {
        constructor(params) {
          this.stateProofVotersCommitment = params.stateProofVotersCommitment;
          this.stateProofOnlineTotalWeight = params.stateProofOnlineTotalWeight;
          this.stateProofNextRound = params.stateProofNextRound;
        }
        // eslint-disable-next-line class-methods-use-this
        getEncodingSchema() {
          return _StateProofTrackingData.encodingSchema;
        }
        toEncodingData() {
          return /* @__PURE__ */ new Map([
            ["v", this.stateProofVotersCommitment],
            ["t", this.stateProofOnlineTotalWeight],
            ["n", this.stateProofNextRound]
          ]);
        }
        static fromEncodingData(data) {
          if (!(data instanceof Map)) {
            throw new Error(`Invalid decoded StateProofTrackingData: ${data}`);
          }
          return new _StateProofTrackingData({
            stateProofVotersCommitment: data.get("v"),
            stateProofOnlineTotalWeight: data.get("t"),
            stateProofNextRound: data.get("n")
          });
        }
      };
      StateProofTrackingData.encodingSchema = new NamedMapSchema(allOmitEmpty([
        {
          key: "v",
          // stateProofVotersCommitment
          valueSchema: new ByteArraySchema()
        },
        {
          key: "t",
          // stateProofOnlineTotalWeight
          valueSchema: new Uint64Schema()
        },
        {
          key: "n",
          // stateProofNextRound
          valueSchema: new Uint64Schema()
        }
      ]));
      TxnCommitments = class _TxnCommitments {
        constructor(params) {
          this.nativeSha512_256Commitment = params.nativeSha512_256Commitment;
          this.sha256Commitment = params.sha256Commitment;
          this.sha512Commitment = params.sha512Commitment ?? new Uint8Array(64);
        }
        // eslint-disable-next-line class-methods-use-this
        getEncodingSchema() {
          return _TxnCommitments.encodingSchema;
        }
        toEncodingData() {
          return /* @__PURE__ */ new Map([
            ["txn", this.nativeSha512_256Commitment],
            ["txn256", this.sha256Commitment],
            ["txn512", this.sha512Commitment]
          ]);
        }
        static fromEncodingData(data) {
          if (!(data instanceof Map)) {
            throw new Error(`Invalid decoded TxnCommitments: ${data}`);
          }
          return new _TxnCommitments({
            nativeSha512_256Commitment: data.get("txn"),
            sha256Commitment: data.get("txn256"),
            sha512Commitment: data.get("txn512")
          });
        }
      };
      TxnCommitments.encodingSchema = new NamedMapSchema(allOmitEmpty([
        {
          key: "txn",
          // nativeSha512_256Commitment
          valueSchema: new FixedLengthByteArraySchema(32)
        },
        {
          key: "txn256",
          // sha256Commitment
          valueSchema: new FixedLengthByteArraySchema(32)
        },
        {
          key: "txn512",
          // sha512Commitment
          valueSchema: new FixedLengthByteArraySchema(64)
        }
      ]));
      RewardState = class _RewardState {
        constructor(params) {
          this.feeSink = params.feeSink;
          this.rewardsPool = params.rewardsPool;
          this.rewardsLevel = params.rewardsLevel;
          this.rewardsRate = params.rewardsRate;
          this.rewardsResidue = params.rewardsResidue;
          this.rewardsRecalculationRound = params.rewardsRecalculationRound;
        }
        // eslint-disable-next-line class-methods-use-this
        getEncodingSchema() {
          return _RewardState.encodingSchema;
        }
        toEncodingData() {
          return /* @__PURE__ */ new Map([
            ["fees", this.feeSink],
            ["rwd", this.rewardsPool],
            ["earn", this.rewardsLevel],
            ["rate", this.rewardsRate],
            ["frac", this.rewardsResidue],
            ["rwcalr", this.rewardsRecalculationRound]
          ]);
        }
        static fromEncodingData(data) {
          if (!(data instanceof Map)) {
            throw new Error(`Invalid decoded RewardState: ${data}`);
          }
          return new _RewardState({
            feeSink: data.get("fees"),
            rewardsPool: data.get("rwd"),
            rewardsLevel: data.get("earn"),
            rewardsRate: data.get("rate"),
            rewardsResidue: data.get("frac"),
            rewardsRecalculationRound: data.get("rwcalr")
          });
        }
      };
      RewardState.encodingSchema = new NamedMapSchema(allOmitEmpty([
        {
          key: "fees",
          // feeSink
          valueSchema: new AddressSchema()
        },
        {
          key: "rwd",
          // rewardsPool
          valueSchema: new AddressSchema()
        },
        {
          key: "earn",
          // rewardsLevel
          valueSchema: new Uint64Schema()
        },
        {
          key: "rate",
          // rewardsRate
          valueSchema: new Uint64Schema()
        },
        {
          key: "frac",
          // rewardsResidue
          valueSchema: new Uint64Schema()
        },
        {
          key: "rwcalr",
          // rewardsRecalculationRound
          valueSchema: new Uint64Schema()
        }
      ]));
      UpgradeState = class _UpgradeState {
        constructor(params) {
          this.currentProtocol = params.currentProtocol;
          this.nextProtocol = params.nextProtocol;
          this.nextProtocolApprovals = params.nextProtocolApprovals;
          this.nextProtocolVoteBefore = params.nextProtocolVoteBefore;
          this.nextProtocolSwitchOn = params.nextProtocolSwitchOn;
        }
        // eslint-disable-next-line class-methods-use-this
        getEncodingSchema() {
          return _UpgradeState.encodingSchema;
        }
        toEncodingData() {
          return /* @__PURE__ */ new Map([
            ["proto", this.currentProtocol],
            ["nextproto", this.nextProtocol],
            ["nextyes", this.nextProtocolApprovals],
            ["nextbefore", this.nextProtocolVoteBefore],
            ["nextswitch", this.nextProtocolSwitchOn]
          ]);
        }
        static fromEncodingData(data) {
          if (!(data instanceof Map)) {
            throw new Error(`Invalid decoded UpgradeState: ${data}`);
          }
          return new _UpgradeState({
            currentProtocol: data.get("proto"),
            nextProtocol: data.get("nextproto"),
            nextProtocolApprovals: data.get("nextyes"),
            nextProtocolVoteBefore: data.get("nextbefore"),
            nextProtocolSwitchOn: data.get("nextswitch")
          });
        }
      };
      UpgradeState.encodingSchema = new NamedMapSchema(allOmitEmpty([
        {
          key: "proto",
          // currentProtocol
          valueSchema: new StringSchema()
        },
        {
          key: "nextproto",
          // nextProtocol
          valueSchema: new StringSchema()
        },
        {
          key: "nextyes",
          // nextProtocolApprovals
          valueSchema: new Uint64Schema()
        },
        {
          key: "nextbefore",
          // nextProtocolVoteBefore
          valueSchema: new Uint64Schema()
        },
        {
          key: "nextswitch",
          // nextProtocolSwitchOn
          valueSchema: new Uint64Schema()
        }
      ]));
      UpgradeVote = class _UpgradeVote {
        constructor(params) {
          this.upgradePropose = params.upgradePropose;
          this.upgradeDelay = params.upgradeDelay;
          this.upgradeApprove = params.upgradeApprove;
        }
        // eslint-disable-next-line class-methods-use-this
        getEncodingSchema() {
          return _UpgradeVote.encodingSchema;
        }
        toEncodingData() {
          return /* @__PURE__ */ new Map([
            ["upgradeprop", this.upgradePropose],
            ["upgradedelay", this.upgradeDelay],
            ["upgradeyes", this.upgradeApprove]
          ]);
        }
        static fromEncodingData(data) {
          if (!(data instanceof Map)) {
            throw new Error(`Invalid decoded UpgradeVote: ${data}`);
          }
          return new _UpgradeVote({
            upgradePropose: data.get("upgradeprop"),
            upgradeDelay: data.get("upgradedelay"),
            upgradeApprove: data.get("upgradeyes")
          });
        }
      };
      UpgradeVote.encodingSchema = new NamedMapSchema(allOmitEmpty([
        {
          key: "upgradeprop",
          // upgradePropose
          valueSchema: new StringSchema()
        },
        {
          key: "upgradedelay",
          // upgradeDelay
          valueSchema: new Uint64Schema()
        },
        {
          key: "upgradeyes",
          // upgradeApprove
          valueSchema: new BooleanSchema()
        }
      ]));
      ParticipationUpdates = class _ParticipationUpdates {
        constructor(params) {
          this.expiredParticipationAccounts = params.expiredParticipationAccounts;
          this.absentParticipationAccounts = params.absentParticipationAccounts;
        }
        // eslint-disable-next-line class-methods-use-this
        getEncodingSchema() {
          return _ParticipationUpdates.encodingSchema;
        }
        toEncodingData() {
          return /* @__PURE__ */ new Map([
            ["partupdrmv", this.expiredParticipationAccounts],
            ["partupdabs", this.absentParticipationAccounts]
          ]);
        }
        static fromEncodingData(data) {
          if (!(data instanceof Map)) {
            throw new Error(`Invalid decoded ParticipationUpdates: ${data}`);
          }
          return new _ParticipationUpdates({
            expiredParticipationAccounts: data.get("partupdrmv"),
            absentParticipationAccounts: data.get("partupdabs")
          });
        }
      };
      ParticipationUpdates.encodingSchema = new NamedMapSchema(allOmitEmpty([
        {
          key: "partupdrmv",
          // expiredParticipationAccounts
          valueSchema: new ArraySchema(new AddressSchema())
        },
        {
          key: "partupdabs",
          // absentParticipationAccounts
          valueSchema: new ArraySchema(new AddressSchema())
        }
      ]));
      BlockHeader = class _BlockHeader {
        constructor(params) {
          this.round = params.round;
          this.branch = params.branch;
          this.branch512 = params.branch512 ?? new Uint8Array(64);
          this.seed = params.seed;
          this.txnCommitments = params.txnCommitments;
          this.timestamp = params.timestamp;
          this.genesisID = params.genesisID;
          this.genesisHash = params.genesisHash;
          this.proposer = params.proposer;
          this.feesCollected = params.feesCollected;
          this.bonus = params.bonus;
          this.proposerPayout = params.proposerPayout;
          this.rewardState = params.rewardState;
          this.upgradeState = params.upgradeState;
          this.upgradeVote = params.upgradeVote;
          this.txnCounter = params.txnCounter;
          this.stateproofTracking = params.stateproofTracking;
          this.participationUpdates = params.participationUpdates;
          this.load = params.load ?? BigInt(0);
          this.congestionTax = params.congestionTax ?? BigInt(0);
        }
        // eslint-disable-next-line class-methods-use-this
        getEncodingSchema() {
          return _BlockHeader.encodingSchema;
        }
        toEncodingData() {
          const data = /* @__PURE__ */ new Map([
            ["rnd", this.round],
            ["prev", this.branch],
            ["prev512", this.branch512],
            ["seed", this.seed],
            ["ts", this.timestamp],
            ["gen", this.genesisID],
            ["gh", this.genesisHash],
            ["prp", this.proposer],
            ["fc", this.feesCollected],
            ["bi", this.bonus],
            ["pp", this.proposerPayout],
            ["tc", this.txnCounter],
            ["ld", this.load],
            ["ct", this.congestionTax],
            [
              "spt",
              convertMap(this.stateproofTracking, (key, value) => [
                key,
                value.toEncodingData()
              ])
            ]
          ]);
          return combineMaps(data, this.txnCommitments.toEncodingData(), this.rewardState.toEncodingData(), this.upgradeState.toEncodingData(), this.upgradeVote.toEncodingData(), this.participationUpdates.toEncodingData());
        }
        static fromEncodingData(data) {
          if (!(data instanceof Map)) {
            throw new Error(`Invalid decoded BlockHeader: ${data}`);
          }
          return new _BlockHeader({
            round: data.get("rnd"),
            branch: data.get("prev"),
            branch512: data.get("prev512"),
            seed: data.get("seed"),
            txnCommitments: TxnCommitments.fromEncodingData(data),
            timestamp: data.get("ts"),
            genesisID: data.get("gen"),
            genesisHash: data.get("gh"),
            proposer: data.get("prp"),
            feesCollected: data.get("fc"),
            bonus: data.get("bi"),
            proposerPayout: data.get("pp"),
            rewardState: RewardState.fromEncodingData(data),
            upgradeState: UpgradeState.fromEncodingData(data),
            upgradeVote: UpgradeVote.fromEncodingData(data),
            txnCounter: data.get("tc"),
            stateproofTracking: convertMap(data.get("spt"), (key, value) => [
              Number(key),
              StateProofTrackingData.fromEncodingData(value)
            ]),
            participationUpdates: ParticipationUpdates.fromEncodingData(data),
            load: data.get("ld"),
            congestionTax: data.get("ct")
          });
        }
      };
      BlockHeader.encodingSchema = new NamedMapSchema(allOmitEmpty([
        {
          key: "rnd",
          // round
          valueSchema: new Uint64Schema()
        },
        {
          key: "prev",
          // branch
          valueSchema: new BlockHashSchema()
        },
        {
          key: "prev512",
          // branch512
          valueSchema: new FixedLengthByteArraySchema(64)
        },
        {
          key: "seed",
          // seed
          valueSchema: new ByteArraySchema()
        },
        {
          key: "",
          valueSchema: TxnCommitments.encodingSchema,
          embedded: true
        },
        {
          key: "ts",
          // timestamp
          valueSchema: new Uint64Schema()
        },
        {
          key: "gen",
          // genesisID
          valueSchema: new StringSchema()
        },
        {
          key: "gh",
          // genesisHash
          valueSchema: new FixedLengthByteArraySchema(32)
        },
        {
          key: "prp",
          // proposer
          valueSchema: new AddressSchema()
        },
        {
          key: "fc",
          // feesCollected
          valueSchema: new Uint64Schema()
        },
        {
          key: "bi",
          // bonus
          valueSchema: new Uint64Schema()
        },
        {
          key: "pp",
          // proposerPayout
          valueSchema: new Uint64Schema()
        },
        {
          key: "",
          valueSchema: RewardState.encodingSchema,
          embedded: true
        },
        {
          key: "",
          valueSchema: UpgradeState.encodingSchema,
          embedded: true
        },
        {
          key: "",
          valueSchema: UpgradeVote.encodingSchema,
          embedded: true
        },
        {
          key: "tc",
          // txnCounter
          valueSchema: new Uint64Schema()
        },
        {
          key: "spt",
          // stateproofTracking
          valueSchema: new Uint64MapSchema(StateProofTrackingData.encodingSchema)
        },
        {
          key: "",
          valueSchema: ParticipationUpdates.encodingSchema,
          embedded: true
        },
        {
          key: "ld",
          // load
          valueSchema: new Uint64Schema()
        },
        {
          key: "ct",
          // congestionTax
          valueSchema: new Uint64Schema()
        }
      ]));
      ValueDelta = class _ValueDelta {
        constructor(params) {
          this.action = params.action;
          this.bytes = params.bytes;
          this.uint = params.uint;
        }
        // eslint-disable-next-line class-methods-use-this
        getEncodingSchema() {
          return _ValueDelta.encodingSchema;
        }
        toEncodingData() {
          return /* @__PURE__ */ new Map([
            ["at", this.action],
            ["bs", this.bytes],
            ["ui", this.uint]
          ]);
        }
        static fromEncodingData(data) {
          if (!(data instanceof Map)) {
            throw new Error(`Invalid decoded ValueDelta: ${data}`);
          }
          return new _ValueDelta({
            action: Number(data.get("at")),
            bytes: data.get("bs"),
            uint: data.get("ui")
          });
        }
      };
      ValueDelta.encodingSchema = new NamedMapSchema(allOmitEmpty([
        {
          key: "at",
          // action
          valueSchema: new Uint64Schema()
        },
        {
          key: "bs",
          // bytes
          valueSchema: new SpecialCaseBinaryStringSchema()
        },
        {
          key: "ui",
          // uint
          valueSchema: new Uint64Schema()
        }
      ]));
      EvalDelta = class _EvalDelta {
        static get encodingSchema() {
          if (!this.encodingSchemaValue) {
            this.encodingSchemaValue = new NamedMapSchema([]);
            this.encodingSchemaValue.pushEntries(...allOmitEmpty([
              {
                key: "gd",
                // globalDelta
                valueSchema: new OptionalSchema(new SpecialCaseBinaryStringMapSchema(ValueDelta.encodingSchema))
              },
              {
                key: "ld",
                // localDeltas
                valueSchema: new OptionalSchema(new Uint64MapSchema(new SpecialCaseBinaryStringMapSchema(ValueDelta.encodingSchema)))
              },
              {
                key: "sa",
                // sharedAccts
                valueSchema: new OptionalSchema(new ArraySchema(new AddressSchema()))
              },
              {
                key: "lg",
                // logs
                valueSchema: new OptionalSchema(new ArraySchema(new SpecialCaseBinaryStringSchema()))
              },
              {
                key: "itx",
                // innerTxns
                valueSchema: new OptionalSchema(
                  // eslint-disable-next-line no-use-before-define
                  new ArraySchema(SignedTxnWithAD.encodingSchema)
                )
              }
            ]));
          }
          return this.encodingSchemaValue;
        }
        constructor(params) {
          this.globalDelta = params.globalDelta ?? /* @__PURE__ */ new Map();
          this.localDeltas = params.localDeltas ?? /* @__PURE__ */ new Map();
          this.sharedAccts = params.sharedAccts ?? [];
          this.logs = params.logs ?? [];
          this.innerTxns = params.innerTxns ?? [];
        }
        // eslint-disable-next-line class-methods-use-this
        getEncodingSchema() {
          return _EvalDelta.encodingSchema;
        }
        toEncodingData() {
          return /* @__PURE__ */ new Map([
            [
              "gd",
              convertMap(this.globalDelta, (key, value) => [
                key,
                value.toEncodingData()
              ])
            ],
            [
              "ld",
              convertMap(this.localDeltas, (key, value) => [
                key,
                convertMap(value, (k, v) => [k, v.toEncodingData()])
              ])
            ],
            ["sa", this.sharedAccts],
            ["lg", this.logs],
            ["itx", this.innerTxns.map((t) => t.toEncodingData())]
          ]);
        }
        static fromEncodingData(data) {
          if (!(data instanceof Map)) {
            throw new Error(`Invalid decoded EvalDelta: ${data}`);
          }
          return new _EvalDelta({
            globalDelta: data.get("gd") ? convertMap(data.get("gd"), (key, value) => [key, ValueDelta.fromEncodingData(value)]) : void 0,
            localDeltas: data.get("ld") ? convertMap(data.get("ld"), (key, value) => [
              Number(key),
              convertMap(value, (k, v) => [k, ValueDelta.fromEncodingData(v)])
            ]) : void 0,
            sharedAccts: data.get("sa"),
            logs: data.get("lg"),
            // eslint-disable-next-line no-use-before-define
            innerTxns: (data.get("itx") ?? []).map(SignedTxnWithAD.fromEncodingData)
          });
        }
      };
      ApplyData = class _ApplyData {
        static get encodingSchema() {
          if (!this.encodingSchemaValue) {
            this.encodingSchemaValue = new NamedMapSchema([]);
            this.encodingSchemaValue.pushEntries(...allOmitEmpty([
              {
                key: "ca",
                // closingAmount
                valueSchema: new OptionalSchema(new Uint64Schema())
              },
              {
                key: "aca",
                // assetClosingAmount
                valueSchema: new OptionalSchema(new Uint64Schema())
              },
              {
                key: "rs",
                // senderRewards
                valueSchema: new OptionalSchema(new Uint64Schema())
              },
              {
                key: "rr",
                // receiverRewards
                valueSchema: new OptionalSchema(new Uint64Schema())
              },
              {
                key: "rc",
                // closeRewards
                valueSchema: new OptionalSchema(new Uint64Schema())
              },
              {
                key: "dt",
                // evalDelta
                valueSchema: new OptionalSchema(EvalDelta.encodingSchema)
              },
              {
                key: "caid",
                // configAsset
                valueSchema: new OptionalSchema(new Uint64Schema())
              },
              {
                key: "apid",
                // applicationID
                valueSchema: new OptionalSchema(new Uint64Schema())
              }
            ]));
          }
          return this.encodingSchemaValue;
        }
        constructor(params) {
          this.closingAmount = params.closingAmount;
          this.assetClosingAmount = params.assetClosingAmount;
          this.senderRewards = params.senderRewards;
          this.receiverRewards = params.receiverRewards;
          this.closeRewards = params.closeRewards;
          this.evalDelta = params.evalDelta;
          this.configAsset = params.configAsset;
          this.applicationID = params.applicationID;
        }
        // eslint-disable-next-line class-methods-use-this
        getEncodingSchema() {
          return _ApplyData.encodingSchema;
        }
        toEncodingData() {
          return /* @__PURE__ */ new Map([
            ["ca", this.closingAmount],
            ["aca", this.assetClosingAmount],
            ["rs", this.senderRewards],
            ["rr", this.receiverRewards],
            ["rc", this.closeRewards],
            ["dt", this.evalDelta ? this.evalDelta.toEncodingData() : void 0],
            ["caid", this.configAsset],
            ["apid", this.applicationID]
          ]);
        }
        static fromEncodingData(data) {
          if (!(data instanceof Map)) {
            throw new Error(`Invalid decoded ApplyData: ${data}`);
          }
          return new _ApplyData({
            closingAmount: data.get("ca"),
            assetClosingAmount: data.get("aca"),
            senderRewards: data.get("rs"),
            receiverRewards: data.get("rr"),
            closeRewards: data.get("rc"),
            evalDelta: data.get("dt") ? EvalDelta.fromEncodingData(data.get("dt")) : void 0,
            configAsset: data.get("caid"),
            applicationID: data.get("apid")
          });
        }
      };
      SignedTxnWithAD = class _SignedTxnWithAD {
        static get encodingSchema() {
          if (!this.encodingSchemaValue) {
            this.encodingSchemaValue = new NamedMapSchema([]);
            this.encodingSchemaValue.pushEntries(...allOmitEmpty([
              {
                key: "",
                valueSchema: SignedTransaction.encodingSchema,
                embedded: true
              },
              {
                key: "",
                valueSchema: ApplyData.encodingSchema,
                embedded: true
              }
            ]));
          }
          return this.encodingSchemaValue;
        }
        constructor(params) {
          this.signedTxn = params.signedTxn;
          this.applyData = params.applyData;
        }
        // eslint-disable-next-line class-methods-use-this
        getEncodingSchema() {
          return _SignedTxnWithAD.encodingSchema;
        }
        toEncodingData() {
          return combineMaps(this.signedTxn.toEncodingData(), this.applyData.toEncodingData());
        }
        static fromEncodingData(data) {
          if (!(data instanceof Map)) {
            throw new Error(`Invalid decoded SignedTxnWithAD: ${data}`);
          }
          return new _SignedTxnWithAD({
            signedTxn: SignedTransaction.fromEncodingData(data),
            applyData: ApplyData.fromEncodingData(data)
          });
        }
      };
      SignedTxnInBlock = class _SignedTxnInBlock {
        constructor(params) {
          this.signedTxn = params.signedTxn;
          this.hasGenesisID = params.hasGenesisID;
          this.hasGenesisHash = params.hasGenesisHash;
        }
        // eslint-disable-next-line class-methods-use-this
        getEncodingSchema() {
          return _SignedTxnInBlock.encodingSchema;
        }
        toEncodingData() {
          const data = /* @__PURE__ */ new Map([
            ["hgi", this.hasGenesisID],
            ["hgh", this.hasGenesisHash]
          ]);
          return combineMaps(data, this.signedTxn.toEncodingData());
        }
        static fromEncodingData(data) {
          if (!(data instanceof Map)) {
            throw new Error(`Invalid decoded SignedTxnInBlock: ${data}`);
          }
          return new _SignedTxnInBlock({
            signedTxn: SignedTxnWithAD.fromEncodingData(data),
            hasGenesisID: data.get("hgi"),
            hasGenesisHash: data.get("hgh")
          });
        }
      };
      SignedTxnInBlock.encodingSchema = new NamedMapSchema(allOmitEmpty([
        {
          key: "",
          valueSchema: SignedTxnWithAD.encodingSchema,
          embedded: true
        },
        {
          key: "hgi",
          // hasGenesisID
          valueSchema: new BooleanSchema()
        },
        {
          key: "hgh",
          // hasGenesisHash
          valueSchema: new BooleanSchema()
        }
      ]));
      Block = class _Block {
        constructor(params) {
          this.header = params.header;
          this.payset = params.payset;
        }
        // eslint-disable-next-line class-methods-use-this
        getEncodingSchema() {
          return _Block.encodingSchema;
        }
        toEncodingData() {
          const data = /* @__PURE__ */ new Map([
            ["txns", this.payset.map((p2) => p2.toEncodingData())]
          ]);
          return combineMaps(data, this.header.toEncodingData());
        }
        static fromEncodingData(data) {
          if (!(data instanceof Map)) {
            throw new Error(`Invalid decoded BlockHeader: ${data}`);
          }
          return new _Block({
            header: BlockHeader.fromEncodingData(data),
            payset: data.get("txns").map(SignedTxnInBlock.fromEncodingData)
          });
        }
      };
      Block.encodingSchema = new NamedMapSchema(allOmitEmpty([
        {
          key: "",
          valueSchema: BlockHeader.encodingSchema,
          embedded: true
        },
        {
          key: "txns",
          // payset
          valueSchema: new ArraySchema(SignedTxnInBlock.encodingSchema)
        }
      ]));
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/untypedmodel.js
  var UntypedValue;
  var init_untypedmodel = __esm({
    "node_modules/algosdk/dist/esm/client/v2/untypedmodel.js"() {
      init_schema();
      UntypedValue = class _UntypedValue {
        constructor(data) {
          this.data = data;
        }
        // eslint-disable-next-line class-methods-use-this
        getEncodingSchema() {
          return _UntypedValue.encodingSchema;
        }
        toEncodingData() {
          return this.data;
        }
        static fromEncodingData(data) {
          return new _UntypedValue(data);
        }
      };
      UntypedValue.encodingSchema = new UntypedSchema();
    }
  });

  // node_modules/algosdk/dist/esm/types/statedelta.js
  var TealValue, StateSchema, AppParams, AppLocalState, AppLocalStateDelta, AppParamsDelta, AppResourceRecord, AssetHolding, AssetHoldingDelta, AssetParams, AssetParamsDelta, AssetResourceRecord, VotingData, AccountBaseData, AccountData, BalanceRecord, AccountDeltas, KvValueDelta, IncludedTransactions, ModifiedCreatable, AlgoCount, AccountTotals, LedgerStateDelta;
  var init_statedelta = __esm({
    "node_modules/algosdk/dist/esm/types/statedelta.js"() {
      init_schema();
      init_address();
      init_block();
      init_untypedmodel();
      TealValue = class _TealValue {
        constructor(params) {
          this.type = params.type;
          this.bytes = params.bytes;
          this.uint = params.uint;
        }
        // eslint-disable-next-line class-methods-use-this
        getEncodingSchema() {
          return _TealValue.encodingSchema;
        }
        toEncodingData() {
          return /* @__PURE__ */ new Map([
            ["tt", this.type],
            ["tb", this.bytes],
            ["ui", this.uint]
          ]);
        }
        static fromEncodingData(data) {
          if (!(data instanceof Map)) {
            throw new Error(`Invalid decoded TealValue: ${data}`);
          }
          return new _TealValue({
            type: Number(data.get("tt")),
            bytes: data.get("tb"),
            uint: data.get("ui")
          });
        }
      };
      TealValue.encodingSchema = new NamedMapSchema(allOmitEmpty([
        { key: "tt", valueSchema: new Uint64Schema() },
        // type
        {
          key: "tb",
          // bytes
          valueSchema: new OptionalSchema(new SpecialCaseBinaryStringSchema())
        },
        { key: "ui", valueSchema: new OptionalSchema(new Uint64Schema()) }
        // uint
      ]));
      StateSchema = class _StateSchema {
        constructor(params) {
          this.numUints = params.numUints;
          this.numByteSlices = params.numByteSlices;
        }
        // eslint-disable-next-line class-methods-use-this
        getEncodingSchema() {
          return _StateSchema.encodingSchema;
        }
        toEncodingData() {
          return /* @__PURE__ */ new Map([
            ["nui", this.numUints],
            ["nbs", this.numByteSlices]
          ]);
        }
        static fromEncodingData(data) {
          if (!(data instanceof Map)) {
            throw new Error(`Invalid decoded StateSchema: ${data}`);
          }
          return new _StateSchema({
            numUints: Number(data.get("nui")),
            numByteSlices: Number(data.get("nbs"))
          });
        }
      };
      StateSchema.encodingSchema = new NamedMapSchema(allOmitEmpty([
        {
          key: "nui",
          // numUints
          valueSchema: new Uint64Schema()
        },
        {
          key: "nbs",
          // numByteSlices
          valueSchema: new Uint64Schema()
        }
      ]));
      AppParams = class _AppParams {
        constructor(params) {
          this.approvalProgram = params.approvalProgram;
          this.clearStateProgram = params.clearStateProgram;
          this.globalState = params.globalState;
          this.localStateSchema = params.localStateSchema;
          this.globalStateSchema = params.globalStateSchema;
          this.extraProgramPages = params.extraProgramPages;
          this.version = params.version ?? BigInt(0);
          this.sizeSponsor = params.sizeSponsor ?? Address.zeroAddress();
          this.foreignBoxReads = params.foreignBoxReads ?? false;
          this.familyBoxAccess = params.familyBoxAccess ?? false;
        }
        // eslint-disable-next-line class-methods-use-this
        getEncodingSchema() {
          return _AppParams.encodingSchema;
        }
        toEncodingData() {
          return /* @__PURE__ */ new Map([
            ["approv", this.approvalProgram],
            ["clearp", this.clearStateProgram],
            ["gs", convertMap(this.globalState, (k, v) => [k, v.toEncodingData()])],
            ["lsch", this.localStateSchema.toEncodingData()],
            ["gsch", this.globalStateSchema.toEncodingData()],
            ["epp", this.extraProgramPages],
            ["v", this.version],
            ["ss", this.sizeSponsor],
            ["fbr", this.foreignBoxReads],
            ["fba", this.familyBoxAccess]
          ]);
        }
        static fromEncodingData(data) {
          if (!(data instanceof Map)) {
            throw new Error(`Invalid decoded AppParams: ${data}`);
          }
          return new _AppParams({
            approvalProgram: data.get("approv"),
            clearStateProgram: data.get("clearp"),
            globalState: convertMap(data.get("gs"), (k, v) => [k, TealValue.fromEncodingData(v)]),
            localStateSchema: StateSchema.fromEncodingData(data.get("lsch")),
            globalStateSchema: StateSchema.fromEncodingData(data.get("gsch")),
            extraProgramPages: Number(data.get("epp")),
            version: data.get("v"),
            sizeSponsor: data.get("ss"),
            foreignBoxReads: data.get("fbr"),
            familyBoxAccess: data.get("fba")
          });
        }
      };
      AppParams.encodingSchema = new NamedMapSchema(allOmitEmpty([
        { key: "approv", valueSchema: new ByteArraySchema() },
        // approvalProgram
        { key: "clearp", valueSchema: new ByteArraySchema() },
        // alearStateProgram
        {
          key: "gs",
          valueSchema: new SpecialCaseBinaryStringMapSchema(TealValue.encodingSchema)
        },
        // globalState
        { key: "lsch", valueSchema: StateSchema.encodingSchema },
        // localStateSchema
        { key: "gsch", valueSchema: StateSchema.encodingSchema },
        // globalStateSchema
        { key: "epp", valueSchema: new Uint64Schema() },
        // extraProgramPages
        { key: "v", valueSchema: new Uint64Schema() },
        // version
        { key: "ss", valueSchema: new AddressSchema() },
        // sizeSponsor
        { key: "fbr", valueSchema: new BooleanSchema() },
        // foreignBoxReads
        { key: "fba", valueSchema: new BooleanSchema() }
        // familyBoxAccess
      ]));
      AppLocalState = class _AppLocalState {
        constructor(params) {
          this.schema = params.schema;
          this.keyValue = params.keyValue;
        }
        // eslint-disable-next-line class-methods-use-this
        getEncodingSchema() {
          return _AppLocalState.encodingSchema;
        }
        toEncodingData() {
          return /* @__PURE__ */ new Map([
            ["hsch", this.schema.toEncodingData()],
            ["tkv", convertMap(this.keyValue, (k, v) => [k, v.toEncodingData()])]
          ]);
        }
        static fromEncodingData(data) {
          if (!(data instanceof Map)) {
            throw new Error(`Invalid decoded AppLocalState: ${data}`);
          }
          return new _AppLocalState({
            schema: StateSchema.fromEncodingData(data.get("hsch")),
            keyValue: convertMap(data.get("tkv"), (k, v) => [k, TealValue.fromEncodingData(v)])
          });
        }
      };
      AppLocalState.encodingSchema = new NamedMapSchema(allOmitEmpty([
        { key: "hsch", valueSchema: StateSchema.encodingSchema },
        // schema
        {
          key: "tkv",
          // keyValue
          valueSchema: new SpecialCaseBinaryStringMapSchema(TealValue.encodingSchema)
        }
      ]));
      AppLocalStateDelta = class _AppLocalStateDelta {
        constructor(params) {
          this.localState = params.localState;
          this.deleted = params.deleted;
        }
        // eslint-disable-next-line class-methods-use-this
        getEncodingSchema() {
          return _AppLocalStateDelta.encodingSchema;
        }
        toEncodingData() {
          return /* @__PURE__ */ new Map([
            [
              "LocalState",
              this.localState ? this.localState.toEncodingData() : void 0
            ],
            ["Deleted", this.deleted]
          ]);
        }
        static fromEncodingData(data) {
          if (!(data instanceof Map)) {
            throw new Error(`Invalid decoded AppLocalStateDelta: ${data}`);
          }
          return new _AppLocalStateDelta({
            localState: data.get("LocalState") ? AppLocalState.fromEncodingData(data.get("LocalState")) : void 0,
            deleted: data.get("Deleted")
          });
        }
      };
      AppLocalStateDelta.encodingSchema = new NamedMapSchema(allOmitEmpty([
        {
          key: "LocalState",
          // localState
          valueSchema: new OptionalSchema(AppLocalState.encodingSchema)
        },
        { key: "Deleted", valueSchema: new BooleanSchema() }
        // deleted
      ]));
      AppParamsDelta = class _AppParamsDelta {
        constructor(params) {
          this.params = params.params;
          this.deleted = params.deleted;
        }
        // eslint-disable-next-line class-methods-use-this
        getEncodingSchema() {
          return _AppParamsDelta.encodingSchema;
        }
        toEncodingData() {
          return /* @__PURE__ */ new Map([
            ["Params", this.params ? this.params.toEncodingData() : void 0],
            ["Deleted", this.deleted]
          ]);
        }
        static fromEncodingData(data) {
          if (!(data instanceof Map)) {
            throw new Error(`Invalid decoded AppParamsDelta: ${data}`);
          }
          return new _AppParamsDelta({
            params: data.get("Params") ? AppParams.fromEncodingData(data.get("Params")) : void 0,
            deleted: data.get("Deleted")
          });
        }
      };
      AppParamsDelta.encodingSchema = new NamedMapSchema(allOmitEmpty([
        {
          key: "Params",
          // params
          valueSchema: new OptionalSchema(AppParams.encodingSchema)
        },
        { key: "Deleted", valueSchema: new BooleanSchema() }
        // deleted
      ]));
      AppResourceRecord = class _AppResourceRecord {
        constructor(params) {
          this.id = params.id;
          this.address = params.address;
          this.params = params.params;
          this.state = params.state;
        }
        // eslint-disable-next-line class-methods-use-this
        getEncodingSchema() {
          return _AppResourceRecord.encodingSchema;
        }
        toEncodingData() {
          return /* @__PURE__ */ new Map([
            ["Aidx", this.id],
            ["Addr", this.address],
            ["Params", this.params.toEncodingData()],
            ["State", this.state.toEncodingData()]
          ]);
        }
        static fromEncodingData(data) {
          if (!(data instanceof Map)) {
            throw new Error(`Invalid decoded AppResourceRecord: ${data}`);
          }
          return new _AppResourceRecord({
            id: data.get("Aidx"),
            address: data.get("Addr"),
            params: AppParamsDelta.fromEncodingData(data.get("Params")),
            state: AppLocalStateDelta.fromEncodingData(data.get("State"))
          });
        }
      };
      AppResourceRecord.encodingSchema = new NamedMapSchema(allOmitEmpty([
        { key: "Aidx", valueSchema: new Uint64Schema() },
        // id
        { key: "Addr", valueSchema: new AddressSchema() },
        // address
        {
          key: "Params",
          // params
          valueSchema: AppParamsDelta.encodingSchema
        },
        {
          key: "State",
          // state
          valueSchema: AppLocalStateDelta.encodingSchema
        }
      ]));
      AssetHolding = class _AssetHolding {
        constructor(params) {
          this.amount = params.amount;
          this.frozen = params.frozen;
        }
        // eslint-disable-next-line class-methods-use-this
        getEncodingSchema() {
          return _AssetHolding.encodingSchema;
        }
        toEncodingData() {
          return /* @__PURE__ */ new Map([
            ["a", this.amount],
            ["f", this.frozen]
          ]);
        }
        static fromEncodingData(data) {
          if (!(data instanceof Map)) {
            throw new Error(`Invalid decoded AssetHolding: ${data}`);
          }
          return new _AssetHolding({
            amount: data.get("a"),
            frozen: data.get("f")
          });
        }
      };
      AssetHolding.encodingSchema = new NamedMapSchema(allOmitEmpty([
        { key: "a", valueSchema: new Uint64Schema() },
        // amount
        { key: "f", valueSchema: new BooleanSchema() }
        // frozen
      ]));
      AssetHoldingDelta = class _AssetHoldingDelta {
        constructor(params) {
          this.holding = params.holding;
          this.deleted = params.deleted;
        }
        // eslint-disable-next-line class-methods-use-this
        getEncodingSchema() {
          return _AssetHoldingDelta.encodingSchema;
        }
        toEncodingData() {
          return /* @__PURE__ */ new Map([
            ["Holding", this.holding ? this.holding.toEncodingData() : void 0],
            ["Deleted", this.deleted]
          ]);
        }
        static fromEncodingData(data) {
          if (!(data instanceof Map)) {
            throw new Error(`Invalid decoded AssetHoldingDelta: ${data}`);
          }
          return new _AssetHoldingDelta({
            holding: data.get("Holding") ? AssetHolding.fromEncodingData(data.get("Holding")) : void 0,
            deleted: data.get("Deleted")
          });
        }
      };
      AssetHoldingDelta.encodingSchema = new NamedMapSchema(allOmitEmpty([
        {
          key: "Holding",
          // holding
          valueSchema: new OptionalSchema(AssetHolding.encodingSchema)
        },
        { key: "Deleted", valueSchema: new BooleanSchema() }
        // deleted
      ]));
      AssetParams = class _AssetParams {
        constructor(params) {
          this.total = params.total;
          this.decimals = params.decimals;
          this.defaultFrozen = params.defaultFrozen;
          this.unitName = params.unitName;
          this.assetName = params.assetName;
          this.url = params.url;
          this.metadataHash = params.metadataHash;
          this.manager = params.manager;
          this.reserve = params.reserve;
          this.freeze = params.freeze;
          this.clawback = params.clawback;
        }
        // eslint-disable-next-line class-methods-use-this
        getEncodingSchema() {
          return _AssetParams.encodingSchema;
        }
        toEncodingData() {
          return /* @__PURE__ */ new Map([
            ["t", this.total],
            ["dc", this.decimals],
            ["df", this.defaultFrozen],
            ["un", this.unitName],
            ["an", this.assetName],
            ["au", this.url],
            ["am", this.metadataHash],
            ["m", this.manager],
            ["r", this.reserve],
            ["f", this.freeze],
            ["c", this.clawback]
          ]);
        }
        static fromEncodingData(data) {
          if (!(data instanceof Map)) {
            throw new Error(`Invalid decoded AssetParams: ${data}`);
          }
          return new _AssetParams({
            total: data.get("t"),
            decimals: data.get("dc"),
            defaultFrozen: data.get("df"),
            unitName: data.get("un"),
            assetName: data.get("an"),
            url: data.get("au"),
            metadataHash: data.get("am"),
            manager: data.get("m"),
            reserve: data.get("r"),
            freeze: data.get("f"),
            clawback: data.get("c")
          });
        }
      };
      AssetParams.encodingSchema = new NamedMapSchema(allOmitEmpty([
        { key: "t", valueSchema: new Uint64Schema() },
        // total
        { key: "dc", valueSchema: new Uint64Schema() },
        // decimals
        { key: "df", valueSchema: new BooleanSchema() },
        // defaultFrozen
        {
          key: "un",
          // unitName
          valueSchema: new OptionalSchema(new SpecialCaseBinaryStringSchema())
        },
        {
          key: "an",
          // assetName
          valueSchema: new OptionalSchema(new SpecialCaseBinaryStringSchema())
        },
        {
          key: "au",
          // url
          valueSchema: new OptionalSchema(new SpecialCaseBinaryStringSchema())
        },
        { key: "am", valueSchema: new FixedLengthByteArraySchema(32) },
        // metadataHash
        { key: "m", valueSchema: new OptionalSchema(new AddressSchema()) },
        // manager
        { key: "r", valueSchema: new OptionalSchema(new AddressSchema()) },
        // reserve
        { key: "f", valueSchema: new OptionalSchema(new AddressSchema()) },
        // freeze
        { key: "c", valueSchema: new OptionalSchema(new AddressSchema()) }
        // clawback
      ]));
      AssetParamsDelta = class _AssetParamsDelta {
        constructor(params) {
          this.params = params.params;
          this.deleted = params.deleted;
        }
        // eslint-disable-next-line class-methods-use-this
        getEncodingSchema() {
          return _AssetParamsDelta.encodingSchema;
        }
        toEncodingData() {
          return /* @__PURE__ */ new Map([
            ["Params", this.params ? this.params.toEncodingData() : void 0],
            ["Deleted", this.deleted]
          ]);
        }
        static fromEncodingData(data) {
          if (!(data instanceof Map)) {
            throw new Error(`Invalid decoded AssetParamsDelta: ${data}`);
          }
          return new _AssetParamsDelta({
            params: data.get("Params") ? AssetParams.fromEncodingData(data.get("Params")) : void 0,
            deleted: data.get("Deleted")
          });
        }
      };
      AssetParamsDelta.encodingSchema = new NamedMapSchema(allOmitEmpty([
        {
          key: "Params",
          // params
          valueSchema: new OptionalSchema(AssetParams.encodingSchema)
        },
        { key: "Deleted", valueSchema: new BooleanSchema() }
        // deleted
      ]));
      AssetResourceRecord = class _AssetResourceRecord {
        constructor(params) {
          this.id = params.id;
          this.address = params.address;
          this.params = params.params;
          this.holding = params.holding;
        }
        // eslint-disable-next-line class-methods-use-this
        getEncodingSchema() {
          return _AssetResourceRecord.encodingSchema;
        }
        toEncodingData() {
          return /* @__PURE__ */ new Map([
            ["Aidx", this.id],
            ["Addr", this.address],
            ["Params", this.params.toEncodingData()],
            ["Holding", this.holding.toEncodingData()]
          ]);
        }
        static fromEncodingData(data) {
          if (!(data instanceof Map)) {
            throw new Error(`Invalid decoded AssetResourceRecord: ${data}`);
          }
          return new _AssetResourceRecord({
            id: data.get("Aidx"),
            address: data.get("Addr"),
            params: AssetParamsDelta.fromEncodingData(data.get("Params")),
            holding: AssetHoldingDelta.fromEncodingData(data.get("Holding"))
          });
        }
      };
      AssetResourceRecord.encodingSchema = new NamedMapSchema(allOmitEmpty([
        { key: "Aidx", valueSchema: new Uint64Schema() },
        // id
        { key: "Addr", valueSchema: new AddressSchema() },
        // address
        {
          key: "Params",
          // params
          valueSchema: AssetParamsDelta.encodingSchema
        },
        {
          key: "Holding",
          // holding
          valueSchema: AssetHoldingDelta.encodingSchema
        }
      ]));
      VotingData = class _VotingData {
        constructor(params) {
          this.voteID = params.voteID;
          this.selectionID = params.selectionID;
          this.stateProofID = params.stateProofID;
          this.voteFirstValid = params.voteFirstValid;
          this.voteLastValid = params.voteLastValid;
          this.voteKeyDilution = params.voteKeyDilution;
        }
        // eslint-disable-next-line class-methods-use-this
        getEncodingSchema() {
          return _VotingData.encodingSchema;
        }
        toEncodingData() {
          return /* @__PURE__ */ new Map([
            ["VoteID", this.voteID],
            ["SelectionID", this.selectionID],
            ["StateProofID", this.stateProofID],
            ["VoteFirstValid", this.voteFirstValid],
            ["VoteLastValid", this.voteLastValid],
            ["VoteKeyDilution", this.voteKeyDilution]
          ]);
        }
        static fromEncodingData(data) {
          if (!(data instanceof Map)) {
            throw new Error(`Invalid decoded VotingData: ${data}`);
          }
          return new _VotingData({
            voteID: data.get("VoteID"),
            selectionID: data.get("SelectionID"),
            stateProofID: data.get("StateProofID"),
            voteFirstValid: data.get("VoteFirstValid"),
            voteLastValid: data.get("VoteLastValid"),
            voteKeyDilution: data.get("VoteKeyDilution")
          });
        }
      };
      VotingData.encodingSchema = new NamedMapSchema(allOmitEmpty([
        {
          key: "VoteID",
          // voteID
          valueSchema: new FixedLengthByteArraySchema(32)
        },
        {
          key: "SelectionID",
          // selectionID
          valueSchema: new FixedLengthByteArraySchema(32)
        },
        {
          key: "StateProofID",
          // stateProofID
          valueSchema: new FixedLengthByteArraySchema(64)
        },
        {
          key: "VoteFirstValid",
          // voteFirstValid
          valueSchema: new Uint64Schema()
        },
        {
          key: "VoteLastValid",
          // voteLastValid
          valueSchema: new Uint64Schema()
        },
        {
          key: "VoteKeyDilution",
          // voteKeyDilution
          valueSchema: new Uint64Schema()
        }
      ]));
      AccountBaseData = class _AccountBaseData {
        constructor(params) {
          this.status = params.status;
          this.microAlgos = params.microAlgos;
          this.rewardsBase = params.rewardsBase;
          this.rewardedMicroAlgos = params.rewardedMicroAlgos;
          this.authAddr = params.authAddr;
          this.incentiveEligible = params.incentiveEligible;
          this.totalAppSchema = params.totalAppSchema;
          this.totalExtraAppPages = params.totalExtraAppPages;
          this.totalAppParams = params.totalAppParams;
          this.totalAppLocalStates = params.totalAppLocalStates;
          this.totalAssetParams = params.totalAssetParams;
          this.totalAssets = params.totalAssets;
          this.totalBoxes = params.totalBoxes;
          this.totalBoxBytes = params.totalBoxBytes;
          this.lastProposed = params.lastProposed;
          this.lastHeartbeat = params.lastHeartbeat;
        }
        // eslint-disable-next-line class-methods-use-this
        getEncodingSchema() {
          return _AccountBaseData.encodingSchema;
        }
        toEncodingData() {
          return /* @__PURE__ */ new Map([
            ["Status", this.status],
            ["MicroAlgos", this.microAlgos],
            ["RewardsBase", this.rewardsBase],
            ["RewardedMicroAlgos", this.rewardedMicroAlgos],
            ["AuthAddr", this.authAddr],
            ["IncentiveEligible", this.incentiveEligible],
            ["TotalAppSchema", this.totalAppSchema.toEncodingData()],
            ["TotalExtraAppPages", this.totalExtraAppPages],
            ["TotalAppParams", this.totalAppParams],
            ["TotalAppLocalStates", this.totalAppLocalStates],
            ["TotalAssetParams", this.totalAssetParams],
            ["TotalAssets", this.totalAssets],
            ["TotalBoxes", this.totalBoxes],
            ["TotalBoxBytes", this.totalBoxBytes],
            ["LastProposed", this.lastProposed],
            ["LastHeartbeat", this.lastHeartbeat]
          ]);
        }
        static fromEncodingData(data) {
          if (!(data instanceof Map)) {
            throw new Error(`Invalid decoded AccountBaseData: ${data}`);
          }
          return new _AccountBaseData({
            status: Number(data.get("Status")),
            microAlgos: data.get("MicroAlgos"),
            rewardsBase: data.get("RewardsBase"),
            rewardedMicroAlgos: data.get("RewardedMicroAlgos"),
            authAddr: data.get("AuthAddr"),
            incentiveEligible: data.get("IncentiveEligible"),
            totalAppSchema: StateSchema.fromEncodingData(data.get("TotalAppSchema")),
            totalExtraAppPages: Number(data.get("TotalExtraAppPages")),
            totalAppParams: data.get("TotalAppParams"),
            totalAppLocalStates: data.get("TotalAppLocalStates"),
            totalAssetParams: data.get("TotalAssetParams"),
            totalAssets: data.get("TotalAssets"),
            totalBoxes: data.get("TotalBoxes"),
            totalBoxBytes: data.get("TotalBoxBytes"),
            lastProposed: data.get("LastProposed"),
            lastHeartbeat: data.get("LastHeartbeat")
          });
        }
      };
      AccountBaseData.encodingSchema = new NamedMapSchema(allOmitEmpty([
        { key: "Status", valueSchema: new Uint64Schema() },
        // status
        { key: "MicroAlgos", valueSchema: new Uint64Schema() },
        // microAlgos
        { key: "RewardsBase", valueSchema: new Uint64Schema() },
        // rewardsBase
        {
          key: "RewardedMicroAlgos",
          // rewardedMicroAlgos
          valueSchema: new Uint64Schema()
        },
        { key: "AuthAddr", valueSchema: new AddressSchema() },
        // authAddr
        {
          key: "IncentiveEligible",
          // incentiveEligible
          valueSchema: new BooleanSchema()
        },
        {
          key: "TotalAppSchema",
          // totalAppSchema
          valueSchema: StateSchema.encodingSchema
        },
        {
          key: "TotalExtraAppPages",
          // totalExtraAppPages
          valueSchema: new Uint64Schema()
        },
        {
          key: "TotalAppParams",
          // totalAppParams
          valueSchema: new Uint64Schema()
        },
        {
          key: "TotalAppLocalStates",
          // totalAppLocalStates
          valueSchema: new Uint64Schema()
        },
        {
          key: "TotalAssetParams",
          // totalAssetParams
          valueSchema: new Uint64Schema()
        },
        { key: "TotalAssets", valueSchema: new Uint64Schema() },
        // totalAssets
        { key: "TotalBoxes", valueSchema: new Uint64Schema() },
        // totalBoxes
        {
          key: "TotalBoxBytes",
          // totalBoxBytes
          valueSchema: new Uint64Schema()
        },
        { key: "LastProposed", valueSchema: new Uint64Schema() },
        // lastProposed
        {
          key: "LastHeartbeat",
          // lastHeartbeat
          valueSchema: new Uint64Schema()
        }
      ]));
      AccountData = class _AccountData {
        constructor(params) {
          this.accountBaseData = params.accountBaseData;
          this.votingData = params.votingData;
        }
        // eslint-disable-next-line class-methods-use-this
        getEncodingSchema() {
          return _AccountData.encodingSchema;
        }
        toEncodingData() {
          return combineMaps(this.accountBaseData.toEncodingData(), this.votingData.toEncodingData());
        }
        static fromEncodingData(data) {
          if (!(data instanceof Map)) {
            throw new Error(`Invalid decoded AccountData: ${data}`);
          }
          return new _AccountData({
            accountBaseData: AccountBaseData.fromEncodingData(data),
            votingData: VotingData.fromEncodingData(data)
          });
        }
      };
      AccountData.encodingSchema = new NamedMapSchema(allOmitEmpty([
        {
          key: "",
          valueSchema: AccountBaseData.encodingSchema,
          embedded: true
        },
        {
          key: "",
          valueSchema: VotingData.encodingSchema,
          embedded: true
        }
      ]));
      BalanceRecord = class _BalanceRecord {
        constructor(params) {
          this.addr = params.addr;
          this.accountData = params.accountData;
        }
        // eslint-disable-next-line class-methods-use-this
        getEncodingSchema() {
          return _BalanceRecord.encodingSchema;
        }
        toEncodingData() {
          return combineMaps(/* @__PURE__ */ new Map([["Addr", this.addr]]), this.accountData.toEncodingData());
        }
        static fromEncodingData(data) {
          if (!(data instanceof Map)) {
            throw new Error(`Invalid decoded BalanceRecord: ${data}`);
          }
          return new _BalanceRecord({
            addr: data.get("Addr"),
            accountData: AccountData.fromEncodingData(data)
          });
        }
      };
      BalanceRecord.encodingSchema = new NamedMapSchema(allOmitEmpty([
        {
          key: "Addr",
          valueSchema: new AddressSchema()
        },
        {
          key: "",
          valueSchema: AccountData.encodingSchema,
          embedded: true
        }
      ]));
      AccountDeltas = class _AccountDeltas {
        constructor(params) {
          this.accounts = params.accounts;
          this.appResources = params.appResources;
          this.assetResources = params.assetResources;
        }
        // eslint-disable-next-line class-methods-use-this
        getEncodingSchema() {
          return _AccountDeltas.encodingSchema;
        }
        toEncodingData() {
          return /* @__PURE__ */ new Map([
            ["Accts", this.accounts.map((account) => account.toEncodingData())],
            [
              "AppResources",
              this.appResources.length === 0 ? void 0 : this.appResources.map((appResource) => appResource.toEncodingData())
            ],
            [
              "AssetResources",
              this.assetResources.length === 0 ? void 0 : this.assetResources.map((assetResource) => assetResource.toEncodingData())
            ]
          ]);
        }
        static fromEncodingData(data) {
          if (!(data instanceof Map)) {
            throw new Error(`Invalid decoded AccountDeltas: ${data}`);
          }
          return new _AccountDeltas({
            accounts: (data.get("Accts") ?? []).map(BalanceRecord.fromEncodingData),
            appResources: (data.get("AppResources") ?? []).map(AppResourceRecord.fromEncodingData),
            assetResources: (data.get("AssetResources") ?? []).map(AssetResourceRecord.fromEncodingData)
          });
        }
      };
      AccountDeltas.encodingSchema = new NamedMapSchema(allOmitEmpty([
        {
          key: "Accts",
          // accounts
          valueSchema: new ArraySchema(BalanceRecord.encodingSchema)
        },
        {
          key: "AppResources",
          // appResources
          valueSchema: new OptionalSchema(new ArraySchema(AppResourceRecord.encodingSchema))
        },
        {
          key: "AssetResources",
          // assetResources
          valueSchema: new OptionalSchema(new ArraySchema(AssetResourceRecord.encodingSchema))
        }
      ]));
      KvValueDelta = class _KvValueDelta {
        constructor(params) {
          this.data = params.data;
          this.oldData = params.oldData;
        }
        // eslint-disable-next-line class-methods-use-this
        getEncodingSchema() {
          return _KvValueDelta.encodingSchema;
        }
        toEncodingData() {
          return /* @__PURE__ */ new Map([
            ["Data", this.data],
            ["OldData", this.oldData]
          ]);
        }
        static fromEncodingData(data) {
          if (!(data instanceof Map)) {
            throw new Error(`Invalid decoded KvValueDelta: ${data}`);
          }
          return new _KvValueDelta({
            data: data.get("Data"),
            oldData: data.get("OldData")
          });
        }
      };
      KvValueDelta.encodingSchema = new NamedMapSchema(allOmitEmpty([
        {
          key: "Data",
          valueSchema: new OptionalSchema(new ByteArraySchema())
        },
        {
          key: "OldData",
          valueSchema: new OptionalSchema(new ByteArraySchema())
        }
      ]));
      IncludedTransactions = class _IncludedTransactions {
        constructor(params) {
          this.lastValid = params.lastValid;
          this.intra = params.intra;
        }
        // eslint-disable-next-line class-methods-use-this
        getEncodingSchema() {
          return _IncludedTransactions.encodingSchema;
        }
        toEncodingData() {
          return /* @__PURE__ */ new Map([
            ["LastValid", this.lastValid],
            ["Intra", this.intra]
          ]);
        }
        static fromEncodingData(data) {
          if (!(data instanceof Map)) {
            throw new Error(`Invalid decoded IncludedTransactions: ${data}`);
          }
          return new _IncludedTransactions({
            lastValid: data.get("LastValid"),
            intra: Number(data.get("Intra"))
          });
        }
      };
      IncludedTransactions.encodingSchema = new NamedMapSchema(allOmitEmpty([
        {
          key: "LastValid",
          valueSchema: new Uint64Schema()
        },
        {
          key: "Intra",
          valueSchema: new Uint64Schema()
        }
      ]));
      ModifiedCreatable = class _ModifiedCreatable {
        constructor(params) {
          this.creatableType = params.creatableType;
          this.created = params.created;
          this.creator = params.creator;
          this.ndeltas = params.ndeltas;
        }
        // eslint-disable-next-line class-methods-use-this
        getEncodingSchema() {
          return _ModifiedCreatable.encodingSchema;
        }
        toEncodingData() {
          return /* @__PURE__ */ new Map([
            ["Ctype", this.creatableType],
            ["Created", this.created],
            ["Creator", this.creator],
            ["Ndeltas", this.ndeltas]
          ]);
        }
        static fromEncodingData(data) {
          if (!(data instanceof Map)) {
            throw new Error(`Invalid decoded ModifiedCreatable: ${data}`);
          }
          return new _ModifiedCreatable({
            creatableType: Number(data.get("Ctype")),
            created: data.get("Created"),
            creator: data.get("Creator"),
            ndeltas: Number(data.get("Ndeltas"))
          });
        }
      };
      ModifiedCreatable.encodingSchema = new NamedMapSchema(allOmitEmpty([
        {
          key: "Ctype",
          // creatableType
          valueSchema: new Uint64Schema()
        },
        {
          key: "Created",
          // created
          valueSchema: new BooleanSchema()
        },
        {
          key: "Creator",
          // creator
          valueSchema: new AddressSchema()
        },
        {
          key: "Ndeltas",
          // ndeltas
          valueSchema: new Uint64Schema()
        }
      ]));
      AlgoCount = class _AlgoCount {
        constructor(params) {
          this.money = params.money;
          this.rewardUnits = params.rewardUnits;
        }
        // eslint-disable-next-line class-methods-use-this
        getEncodingSchema() {
          return _AlgoCount.encodingSchema;
        }
        toEncodingData() {
          return /* @__PURE__ */ new Map([
            ["mon", this.money],
            ["rwd", this.rewardUnits]
          ]);
        }
        static fromEncodingData(data) {
          if (!(data instanceof Map)) {
            throw new Error(`Invalid decoded AlgoCount: ${data}`);
          }
          return new _AlgoCount({
            money: data.get("mon"),
            rewardUnits: data.get("rwd")
          });
        }
      };
      AlgoCount.encodingSchema = new NamedMapSchema(allOmitEmpty([
        { key: "mon", valueSchema: new Uint64Schema() },
        // money
        { key: "rwd", valueSchema: new Uint64Schema() }
        // rewardUnits
      ]));
      AccountTotals = class _AccountTotals {
        constructor(params) {
          this.online = params.online;
          this.offline = params.offline;
          this.notParticipating = params.notParticipating;
          this.rewardsLevel = params.rewardsLevel;
        }
        // eslint-disable-next-line class-methods-use-this
        getEncodingSchema() {
          return _AccountTotals.encodingSchema;
        }
        toEncodingData() {
          return /* @__PURE__ */ new Map([
            ["online", this.online.toEncodingData()],
            ["offline", this.offline.toEncodingData()],
            ["notpart", this.notParticipating.toEncodingData()],
            ["rwdlvl", this.rewardsLevel]
          ]);
        }
        static fromEncodingData(data) {
          if (!(data instanceof Map)) {
            throw new Error(`Invalid decoded AccountTotals: ${data}`);
          }
          return new _AccountTotals({
            online: AlgoCount.fromEncodingData(data.get("online")),
            offline: AlgoCount.fromEncodingData(data.get("offline")),
            notParticipating: AlgoCount.fromEncodingData(data.get("notpart")),
            rewardsLevel: data.get("rwdlvl")
          });
        }
      };
      AccountTotals.encodingSchema = new NamedMapSchema(allOmitEmpty([
        { key: "online", valueSchema: AlgoCount.encodingSchema },
        // online
        { key: "offline", valueSchema: AlgoCount.encodingSchema },
        // offline
        { key: "notpart", valueSchema: AlgoCount.encodingSchema },
        // notParticipating
        { key: "rwdlvl", valueSchema: new Uint64Schema() }
        // rewardsLevel
      ]));
      LedgerStateDelta = class _LedgerStateDelta {
        constructor(params) {
          this.accounts = params.accounts;
          this.kvMods = params.kvMods;
          this.txids = params.txids;
          this.txleases = params.txleases;
          this.creatables = params.creatables;
          this.blockHeader = params.blockHeader;
          this.stateProofNext = params.stateProofNext;
          this.prevTimestamp = params.prevTimestamp;
          this.totals = params.totals;
        }
        // eslint-disable-next-line class-methods-use-this
        getEncodingSchema() {
          return _LedgerStateDelta.encodingSchema;
        }
        toEncodingData() {
          return /* @__PURE__ */ new Map([
            ["Accts", this.accounts.toEncodingData()],
            [
              "KvMods",
              this.kvMods.size === 0 ? void 0 : convertMap(this.kvMods, (key, value) => [
                key,
                value.toEncodingData()
              ])
            ],
            [
              "Txids",
              convertMap(this.txids, (key, value) => [key, value.toEncodingData()])
            ],
            ["Txleases", this.txleases.toEncodingData()],
            [
              "Creatables",
              this.creatables.size === 0 ? void 0 : convertMap(this.creatables, (key, value) => [
                key,
                value.toEncodingData()
              ])
            ],
            ["Hdr", this.blockHeader.toEncodingData()],
            ["StateProofNext", this.stateProofNext],
            ["PrevTimestamp", this.prevTimestamp],
            ["Totals", this.totals.toEncodingData()]
          ]);
        }
        static fromEncodingData(data) {
          if (!(data instanceof Map)) {
            throw new Error(`Invalid decoded LedgerStateDelta: ${data}`);
          }
          return new _LedgerStateDelta({
            accounts: AccountDeltas.fromEncodingData(data.get("Accts")),
            kvMods: convertMap(data.get("KvMods") ?? /* @__PURE__ */ new Map(), (key, value) => [key, KvValueDelta.fromEncodingData(value)]),
            txids: convertMap(data.get("Txids"), (key, value) => [key, IncludedTransactions.fromEncodingData(value)]),
            txleases: UntypedValue.fromEncodingData(data.get("Txleases")),
            creatables: convertMap(data.get("Creatables") ?? /* @__PURE__ */ new Map(), (key, value) => [key, ModifiedCreatable.fromEncodingData(value)]),
            blockHeader: BlockHeader.fromEncodingData(data.get("Hdr")),
            stateProofNext: data.get("StateProofNext"),
            prevTimestamp: data.get("PrevTimestamp"),
            totals: AccountTotals.fromEncodingData(data.get("Totals"))
          });
        }
      };
      LedgerStateDelta.encodingSchema = new NamedMapSchema(allOmitEmpty([
        {
          key: "Accts",
          // accounts
          valueSchema: AccountDeltas.encodingSchema
        },
        {
          key: "KvMods",
          // kvMods
          valueSchema: new OptionalSchema(new SpecialCaseBinaryStringMapSchema(KvValueDelta.encodingSchema))
        },
        {
          key: "Txids",
          // txids
          valueSchema: new ByteArrayMapSchema(IncludedTransactions.encodingSchema)
        },
        {
          key: "Txleases",
          // txleases
          // Note: because txleases is currently just an UntypedSchema and we are expected to decode
          // null values for this field, we use OptionalSchema to coerce null values to undefined so
          // that the values can be properly omitted during encoding.
          valueSchema: new OptionalSchema(new UntypedSchema())
        },
        {
          key: "Creatables",
          // creatables
          valueSchema: new OptionalSchema(new Uint64MapSchema(ModifiedCreatable.encodingSchema))
        },
        {
          key: "Hdr",
          // blockHeader
          valueSchema: BlockHeader.encodingSchema
        },
        {
          key: "StateProofNext",
          // stateProofNext
          valueSchema: new Uint64Schema()
        },
        {
          key: "PrevTimestamp",
          // prevTimestamp
          valueSchema: new Uint64Schema()
        },
        {
          key: "Totals",
          // totals
          valueSchema: AccountTotals.encodingSchema
        }
      ]));
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/algod/models/types.js
  var SimulateRequest, SimulateRequestTransactionGroup, SimulateTraceConfig;
  var init_types = __esm({
    "node_modules/algosdk/dist/esm/client/v2/algod/models/types.js"() {
      init_utils();
      init_schema();
      init_binarydata();
      init_block();
      init_statedelta();
      init_signedTransaction();
      init_address();
      init_untypedmodel();
      SimulateRequest = class _SimulateRequest {
        static get encodingSchema() {
          if (!this.encodingSchemaValue) {
            this.encodingSchemaValue = new NamedMapSchema([]);
            this.encodingSchemaValue.pushEntries({
              key: "txn-groups",
              valueSchema: new ArraySchema(SimulateRequestTransactionGroup.encodingSchema),
              omitEmpty: true
            }, {
              key: "allow-empty-signatures",
              valueSchema: new OptionalSchema(new BooleanSchema()),
              omitEmpty: true
            }, {
              key: "allow-more-logging",
              valueSchema: new OptionalSchema(new BooleanSchema()),
              omitEmpty: true
            }, {
              key: "allow-unnamed-resources",
              valueSchema: new OptionalSchema(new BooleanSchema()),
              omitEmpty: true
            }, {
              key: "exec-trace-config",
              valueSchema: new OptionalSchema(SimulateTraceConfig.encodingSchema),
              omitEmpty: true
            }, {
              key: "extra-opcode-budget",
              valueSchema: new OptionalSchema(new Uint64Schema()),
              omitEmpty: true
            }, {
              key: "fix-signers",
              valueSchema: new OptionalSchema(new BooleanSchema()),
              omitEmpty: true
            }, {
              key: "round",
              valueSchema: new OptionalSchema(new Uint64Schema()),
              omitEmpty: true
            });
          }
          return this.encodingSchemaValue;
        }
        /**
         * Creates a new `SimulateRequest` object.
         * @param txnGroups - The transaction groups to simulate.
         * @param allowEmptySignatures - Allows transactions without signatures to be simulated as if they had correct
         * signatures.
         * @param allowMoreLogging - Lifts limits on log opcode usage during simulation.
         * @param allowUnnamedResources - Allows access to unnamed resources during simulation.
         * @param execTraceConfig - An object that configures simulation execution trace.
         * @param extraOpcodeBudget - Applies extra opcode budget during simulation for each transaction group.
         * @param fixSigners - If true, signers for transactions that are missing signatures will be fixed
         * during evaluation.
         * @param round - If provided, specifies the round preceding the simulation. State changes through
         * this round will be used to run this simulation. Usually only the 4 most recent
         * rounds will be available (controlled by the node config value MaxAcctLookback).
         * If not specified, defaults to the latest available round.
         */
        constructor({ txnGroups, allowEmptySignatures, allowMoreLogging, allowUnnamedResources, execTraceConfig, extraOpcodeBudget, fixSigners, round }) {
          this.txnGroups = txnGroups;
          this.allowEmptySignatures = allowEmptySignatures;
          this.allowMoreLogging = allowMoreLogging;
          this.allowUnnamedResources = allowUnnamedResources;
          this.execTraceConfig = execTraceConfig;
          this.extraOpcodeBudget = typeof extraOpcodeBudget === "undefined" ? void 0 : ensureSafeInteger(extraOpcodeBudget);
          this.fixSigners = fixSigners;
          this.round = typeof round === "undefined" ? void 0 : ensureBigInt(round);
        }
        // eslint-disable-next-line class-methods-use-this
        getEncodingSchema() {
          return _SimulateRequest.encodingSchema;
        }
        toEncodingData() {
          return /* @__PURE__ */ new Map([
            ["txn-groups", this.txnGroups.map((v) => v.toEncodingData())],
            ["allow-empty-signatures", this.allowEmptySignatures],
            ["allow-more-logging", this.allowMoreLogging],
            ["allow-unnamed-resources", this.allowUnnamedResources],
            [
              "exec-trace-config",
              typeof this.execTraceConfig !== "undefined" ? this.execTraceConfig.toEncodingData() : void 0
            ],
            ["extra-opcode-budget", this.extraOpcodeBudget],
            ["fix-signers", this.fixSigners],
            ["round", this.round]
          ]);
        }
        static fromEncodingData(data) {
          if (!(data instanceof Map)) {
            throw new Error(`Invalid decoded SimulateRequest: ${data}`);
          }
          return new _SimulateRequest({
            txnGroups: (data.get("txn-groups") ?? []).map((v) => SimulateRequestTransactionGroup.fromEncodingData(v)),
            allowEmptySignatures: data.get("allow-empty-signatures"),
            allowMoreLogging: data.get("allow-more-logging"),
            allowUnnamedResources: data.get("allow-unnamed-resources"),
            execTraceConfig: typeof data.get("exec-trace-config") !== "undefined" ? SimulateTraceConfig.fromEncodingData(data.get("exec-trace-config")) : void 0,
            extraOpcodeBudget: data.get("extra-opcode-budget"),
            fixSigners: data.get("fix-signers"),
            round: data.get("round")
          });
        }
      };
      SimulateRequestTransactionGroup = class _SimulateRequestTransactionGroup {
        static get encodingSchema() {
          if (!this.encodingSchemaValue) {
            this.encodingSchemaValue = new NamedMapSchema([]);
            this.encodingSchemaValue.pushEntries({
              key: "txns",
              valueSchema: new ArraySchema(SignedTransaction.encodingSchema),
              omitEmpty: true
            });
          }
          return this.encodingSchemaValue;
        }
        /**
         * Creates a new `SimulateRequestTransactionGroup` object.
         * @param txns - An atomic transaction group.
         */
        constructor({ txns }) {
          this.txns = txns;
        }
        // eslint-disable-next-line class-methods-use-this
        getEncodingSchema() {
          return _SimulateRequestTransactionGroup.encodingSchema;
        }
        toEncodingData() {
          return /* @__PURE__ */ new Map([
            ["txns", this.txns.map((v) => v.toEncodingData())]
          ]);
        }
        static fromEncodingData(data) {
          if (!(data instanceof Map)) {
            throw new Error(`Invalid decoded SimulateRequestTransactionGroup: ${data}`);
          }
          return new _SimulateRequestTransactionGroup({
            txns: (data.get("txns") ?? []).map((v) => SignedTransaction.fromEncodingData(v))
          });
        }
      };
      SimulateTraceConfig = class _SimulateTraceConfig {
        static get encodingSchema() {
          if (!this.encodingSchemaValue) {
            this.encodingSchemaValue = new NamedMapSchema([]);
            this.encodingSchemaValue.pushEntries({
              key: "enable",
              valueSchema: new OptionalSchema(new BooleanSchema()),
              omitEmpty: true
            }, {
              key: "scratch-change",
              valueSchema: new OptionalSchema(new BooleanSchema()),
              omitEmpty: true
            }, {
              key: "stack-change",
              valueSchema: new OptionalSchema(new BooleanSchema()),
              omitEmpty: true
            }, {
              key: "state-change",
              valueSchema: new OptionalSchema(new BooleanSchema()),
              omitEmpty: true
            });
          }
          return this.encodingSchemaValue;
        }
        /**
         * Creates a new `SimulateTraceConfig` object.
         * @param enable - A boolean option for opting in execution trace features simulation endpoint.
         * @param scratchChange - A boolean option enabling returning scratch slot changes together with execution
         * trace during simulation.
         * @param stackChange - A boolean option enabling returning stack changes together with execution trace
         * during simulation.
         * @param stateChange - A boolean option enabling returning application state changes (global, local,
         * and box changes) with the execution trace during simulation.
         */
        constructor({ enable, scratchChange, stackChange, stateChange }) {
          this.enable = enable;
          this.scratchChange = scratchChange;
          this.stackChange = stackChange;
          this.stateChange = stateChange;
        }
        // eslint-disable-next-line class-methods-use-this
        getEncodingSchema() {
          return _SimulateTraceConfig.encodingSchema;
        }
        toEncodingData() {
          return /* @__PURE__ */ new Map([
            ["enable", this.enable],
            ["scratch-change", this.scratchChange],
            ["stack-change", this.stackChange],
            ["state-change", this.stateChange]
          ]);
        }
        static fromEncodingData(data) {
          if (!(data instanceof Map)) {
            throw new Error(`Invalid decoded SimulateTraceConfig: ${data}`);
          }
          return new _SimulateTraceConfig({
            enable: data.get("enable"),
            scratchChange: data.get("scratch-change"),
            stackChange: data.get("stack-change"),
            stateChange: data.get("state-change")
          });
        }
      };
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/jsonrequest.js
  var init_jsonrequest = __esm({
    "node_modules/algosdk/dist/esm/client/v2/jsonrequest.js"() {
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/algod/accountInformation.js
  var init_accountInformation = __esm({
    "node_modules/algosdk/dist/esm/client/v2/algod/accountInformation.js"() {
      init_jsonrequest();
      init_encoding();
      init_types();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/algod/accountAssetInformation.js
  var init_accountAssetInformation = __esm({
    "node_modules/algosdk/dist/esm/client/v2/algod/accountAssetInformation.js"() {
      init_jsonrequest();
      init_encoding();
      init_types();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/algod/accountAssetsInformation.js
  var init_accountAssetsInformation = __esm({
    "node_modules/algosdk/dist/esm/client/v2/algod/accountAssetsInformation.js"() {
      init_jsonrequest();
      init_encoding();
      init_types();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/algod/accountApplicationsInformation.js
  var init_accountApplicationsInformation = __esm({
    "node_modules/algosdk/dist/esm/client/v2/algod/accountApplicationsInformation.js"() {
      init_jsonrequest();
      init_encoding();
      init_types();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/algod/accountApplicationInformation.js
  var init_accountApplicationInformation = __esm({
    "node_modules/algosdk/dist/esm/client/v2/algod/accountApplicationInformation.js"() {
      init_jsonrequest();
      init_encoding();
      init_types();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/algod/block.js
  var init_block2 = __esm({
    "node_modules/algosdk/dist/esm/client/v2/algod/block.js"() {
      init_jsonrequest();
      init_encoding();
      init_types();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/algod/compile.js
  var init_compile = __esm({
    "node_modules/algosdk/dist/esm/client/v2/algod/compile.js"() {
      init_binarydata();
      init_encoding();
      init_types();
      init_jsonrequest();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/algod/genesis.js
  var init_genesis = __esm({
    "node_modules/algosdk/dist/esm/client/v2/algod/genesis.js"() {
      init_jsonrequest();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/algod/getAssetByID.js
  var init_getAssetByID = __esm({
    "node_modules/algosdk/dist/esm/client/v2/algod/getAssetByID.js"() {
      init_jsonrequest();
      init_encoding();
      init_types();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/algod/getApplicationByID.js
  var init_getApplicationByID = __esm({
    "node_modules/algosdk/dist/esm/client/v2/algod/getApplicationByID.js"() {
      init_jsonrequest();
      init_encoding();
      init_types();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/algod/getBlockHash.js
  var init_getBlockHash = __esm({
    "node_modules/algosdk/dist/esm/client/v2/algod/getBlockHash.js"() {
      init_jsonrequest();
      init_encoding();
      init_types();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/algod/getBlockTxids.js
  var init_getBlockTxids = __esm({
    "node_modules/algosdk/dist/esm/client/v2/algod/getBlockTxids.js"() {
      init_jsonrequest();
      init_encoding();
      init_types();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/algod/getApplicationBoxByName.js
  var init_getApplicationBoxByName = __esm({
    "node_modules/algosdk/dist/esm/client/v2/algod/getApplicationBoxByName.js"() {
      init_binarydata();
      init_encoding();
      init_jsonrequest();
      init_types();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/algod/getApplicationBoxes.js
  var init_getApplicationBoxes = __esm({
    "node_modules/algosdk/dist/esm/client/v2/algod/getApplicationBoxes.js"() {
      init_jsonrequest();
      init_encoding();
      init_binarydata();
      init_utils();
      init_types();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/algod/healthCheck.js
  var init_healthCheck = __esm({
    "node_modules/algosdk/dist/esm/client/v2/algod/healthCheck.js"() {
      init_jsonrequest();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/algod/pendingTransactionInformation.js
  var init_pendingTransactionInformation = __esm({
    "node_modules/algosdk/dist/esm/client/v2/algod/pendingTransactionInformation.js"() {
      init_jsonrequest();
      init_encoding();
      init_types();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/algod/pendingTransactions.js
  var init_pendingTransactions = __esm({
    "node_modules/algosdk/dist/esm/client/v2/algod/pendingTransactions.js"() {
      init_jsonrequest();
      init_encoding();
      init_types();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/algod/pendingTransactionsByAddress.js
  var init_pendingTransactionsByAddress = __esm({
    "node_modules/algosdk/dist/esm/client/v2/algod/pendingTransactionsByAddress.js"() {
      init_jsonrequest();
      init_encoding();
      init_types();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/algod/getTransactionProof.js
  var init_getTransactionProof = __esm({
    "node_modules/algosdk/dist/esm/client/v2/algod/getTransactionProof.js"() {
      init_jsonrequest();
      init_encoding();
      init_types();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/algod/sendRawTransaction.js
  var init_sendRawTransaction = __esm({
    "node_modules/algosdk/dist/esm/client/v2/algod/sendRawTransaction.js"() {
      init_utils();
      init_types();
      init_encoding();
      init_jsonrequest();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/algod/status.js
  var init_status = __esm({
    "node_modules/algosdk/dist/esm/client/v2/algod/status.js"() {
      init_jsonrequest();
      init_encoding();
      init_types();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/algod/statusAfterBlock.js
  var init_statusAfterBlock = __esm({
    "node_modules/algosdk/dist/esm/client/v2/algod/statusAfterBlock.js"() {
      init_jsonrequest();
      init_encoding();
      init_types();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/algod/suggestedParams.js
  var init_suggestedParams = __esm({
    "node_modules/algosdk/dist/esm/client/v2/algod/suggestedParams.js"() {
      init_jsonrequest();
      init_encoding();
      init_types();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/algod/supply.js
  var init_supply = __esm({
    "node_modules/algosdk/dist/esm/client/v2/algod/supply.js"() {
      init_jsonrequest();
      init_encoding();
      init_types();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/algod/versions.js
  var init_versions = __esm({
    "node_modules/algosdk/dist/esm/client/v2/algod/versions.js"() {
      init_jsonrequest();
      init_encoding();
      init_types();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/algod/lightBlockHeaderProof.js
  var init_lightBlockHeaderProof = __esm({
    "node_modules/algosdk/dist/esm/client/v2/algod/lightBlockHeaderProof.js"() {
      init_jsonrequest();
      init_encoding();
      init_types();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/algod/stateproof.js
  var init_stateproof2 = __esm({
    "node_modules/algosdk/dist/esm/client/v2/algod/stateproof.js"() {
      init_jsonrequest();
      init_encoding();
      init_types();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/algod/setSyncRound.js
  var init_setSyncRound = __esm({
    "node_modules/algosdk/dist/esm/client/v2/algod/setSyncRound.js"() {
      init_jsonrequest();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/algod/getSyncRound.js
  var init_getSyncRound = __esm({
    "node_modules/algosdk/dist/esm/client/v2/algod/getSyncRound.js"() {
      init_jsonrequest();
      init_encoding();
      init_types();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/algod/setBlockOffsetTimestamp.js
  var init_setBlockOffsetTimestamp = __esm({
    "node_modules/algosdk/dist/esm/client/v2/algod/setBlockOffsetTimestamp.js"() {
      init_jsonrequest();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/algod/getBlockOffsetTimestamp.js
  var init_getBlockOffsetTimestamp = __esm({
    "node_modules/algosdk/dist/esm/client/v2/algod/getBlockOffsetTimestamp.js"() {
      init_jsonrequest();
      init_encoding();
      init_types();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/algod/disassemble.js
  var init_disassemble = __esm({
    "node_modules/algosdk/dist/esm/client/v2/algod/disassemble.js"() {
      init_binarydata();
      init_encoding();
      init_types();
      init_jsonrequest();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/algod/simulateTransaction.js
  var init_simulateTransaction = __esm({
    "node_modules/algosdk/dist/esm/client/v2/algod/simulateTransaction.js"() {
      init_encoding();
      init_jsonrequest();
      init_types();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/algod/ready.js
  var init_ready = __esm({
    "node_modules/algosdk/dist/esm/client/v2/algod/ready.js"() {
      init_jsonrequest();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/algod/unsetSyncRound.js
  var init_unsetSyncRound = __esm({
    "node_modules/algosdk/dist/esm/client/v2/algod/unsetSyncRound.js"() {
      init_jsonrequest();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/algod/getLedgerStateDeltaForTransactionGroup.js
  var init_getLedgerStateDeltaForTransactionGroup = __esm({
    "node_modules/algosdk/dist/esm/client/v2/algod/getLedgerStateDeltaForTransactionGroup.js"() {
      init_jsonrequest();
      init_encoding();
      init_statedelta();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/algod/getLedgerStateDelta.js
  var init_getLedgerStateDelta = __esm({
    "node_modules/algosdk/dist/esm/client/v2/algod/getLedgerStateDelta.js"() {
      init_jsonrequest();
      init_encoding();
      init_statedelta();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/algod/getTransactionGroupLedgerStateDeltasForRound.js
  var init_getTransactionGroupLedgerStateDeltasForRound = __esm({
    "node_modules/algosdk/dist/esm/client/v2/algod/getTransactionGroupLedgerStateDeltasForRound.js"() {
      init_jsonrequest();
      init_types();
      init_encoding();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/algod/algod.js
  var init_algod = __esm({
    "node_modules/algosdk/dist/esm/client/v2/algod/algod.js"() {
      init_serviceClient();
      init_types();
      init_accountInformation();
      init_accountAssetInformation();
      init_accountAssetsInformation();
      init_accountApplicationsInformation();
      init_accountApplicationInformation();
      init_block2();
      init_compile();
      init_genesis();
      init_getAssetByID();
      init_getApplicationByID();
      init_getBlockHash();
      init_getBlockTxids();
      init_getApplicationBoxByName();
      init_getApplicationBoxes();
      init_healthCheck();
      init_pendingTransactionInformation();
      init_pendingTransactions();
      init_pendingTransactionsByAddress();
      init_getTransactionProof();
      init_sendRawTransaction();
      init_status();
      init_statusAfterBlock();
      init_suggestedParams();
      init_supply();
      init_versions();
      init_lightBlockHeaderProof();
      init_stateproof2();
      init_setSyncRound();
      init_getSyncRound();
      init_setBlockOffsetTimestamp();
      init_getBlockOffsetTimestamp();
      init_disassemble();
      init_simulateTransaction();
      init_signedTransaction();
      init_encoding();
      init_ready();
      init_unsetSyncRound();
      init_getLedgerStateDeltaForTransactionGroup();
      init_getLedgerStateDelta();
      init_getTransactionGroupLedgerStateDeltasForRound();
    }
  });

  // node_modules/algosdk/dist/esm/client/kmd.js
  var init_kmd = __esm({
    "node_modules/algosdk/dist/esm/client/kmd.js"() {
      init_binarydata();
      init_intDecoding();
      init_serviceClient();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/indexer/models/types.js
  var init_types2 = __esm({
    "node_modules/algosdk/dist/esm/client/v2/indexer/models/types.js"() {
      init_utils();
      init_schema();
      init_binarydata();
      init_address();
      init_untypedmodel();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/indexer/makeHealthCheck.js
  var init_makeHealthCheck = __esm({
    "node_modules/algosdk/dist/esm/client/v2/indexer/makeHealthCheck.js"() {
      init_jsonrequest();
      init_encoding();
      init_types2();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/indexer/lookupAssetBalances.js
  var init_lookupAssetBalances = __esm({
    "node_modules/algosdk/dist/esm/client/v2/indexer/lookupAssetBalances.js"() {
      init_jsonrequest();
      init_encoding();
      init_types2();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/indexer/lookupAccountTransactions.js
  var init_lookupAccountTransactions = __esm({
    "node_modules/algosdk/dist/esm/client/v2/indexer/lookupAccountTransactions.js"() {
      init_binarydata();
      init_encoding();
      init_jsonrequest();
      init_types2();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/indexer/lookupAssetTransactions.js
  var init_lookupAssetTransactions = __esm({
    "node_modules/algosdk/dist/esm/client/v2/indexer/lookupAssetTransactions.js"() {
      init_jsonrequest();
      init_encoding();
      init_lookupAccountTransactions();
      init_types2();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/indexer/lookupBlock.js
  var init_lookupBlock = __esm({
    "node_modules/algosdk/dist/esm/client/v2/indexer/lookupBlock.js"() {
      init_jsonrequest();
      init_encoding();
      init_types2();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/indexer/lookupTransactionByID.js
  var init_lookupTransactionByID = __esm({
    "node_modules/algosdk/dist/esm/client/v2/indexer/lookupTransactionByID.js"() {
      init_jsonrequest();
      init_encoding();
      init_types2();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/indexer/lookupAccountByID.js
  var init_lookupAccountByID = __esm({
    "node_modules/algosdk/dist/esm/client/v2/indexer/lookupAccountByID.js"() {
      init_jsonrequest();
      init_encoding();
      init_types2();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/indexer/lookupAccountAssets.js
  var init_lookupAccountAssets = __esm({
    "node_modules/algosdk/dist/esm/client/v2/indexer/lookupAccountAssets.js"() {
      init_jsonrequest();
      init_encoding();
      init_types2();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/indexer/lookupAccountCreatedAssets.js
  var init_lookupAccountCreatedAssets = __esm({
    "node_modules/algosdk/dist/esm/client/v2/indexer/lookupAccountCreatedAssets.js"() {
      init_jsonrequest();
      init_encoding();
      init_types2();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/indexer/lookupAccountAppLocalStates.js
  var init_lookupAccountAppLocalStates = __esm({
    "node_modules/algosdk/dist/esm/client/v2/indexer/lookupAccountAppLocalStates.js"() {
      init_jsonrequest();
      init_encoding();
      init_types2();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/indexer/lookupAccountCreatedApplications.js
  var init_lookupAccountCreatedApplications = __esm({
    "node_modules/algosdk/dist/esm/client/v2/indexer/lookupAccountCreatedApplications.js"() {
      init_jsonrequest();
      init_encoding();
      init_types2();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/indexer/lookupAssetByID.js
  var init_lookupAssetByID = __esm({
    "node_modules/algosdk/dist/esm/client/v2/indexer/lookupAssetByID.js"() {
      init_jsonrequest();
      init_encoding();
      init_types2();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/indexer/lookupApplications.js
  var init_lookupApplications = __esm({
    "node_modules/algosdk/dist/esm/client/v2/indexer/lookupApplications.js"() {
      init_jsonrequest();
      init_encoding();
      init_types2();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/indexer/lookupApplicationLogs.js
  var init_lookupApplicationLogs = __esm({
    "node_modules/algosdk/dist/esm/client/v2/indexer/lookupApplicationLogs.js"() {
      init_jsonrequest();
      init_encoding();
      init_types2();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/indexer/lookupApplicationBoxByIDandName.js
  var init_lookupApplicationBoxByIDandName = __esm({
    "node_modules/algosdk/dist/esm/client/v2/indexer/lookupApplicationBoxByIDandName.js"() {
      init_binarydata();
      init_encoding();
      init_jsonrequest();
      init_types2();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/indexer/searchAccounts.js
  var init_searchAccounts = __esm({
    "node_modules/algosdk/dist/esm/client/v2/indexer/searchAccounts.js"() {
      init_jsonrequest();
      init_encoding();
      init_types2();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/indexer/searchForBlockHeaders.js
  var init_searchForBlockHeaders = __esm({
    "node_modules/algosdk/dist/esm/client/v2/indexer/searchForBlockHeaders.js"() {
      init_jsonrequest();
      init_encoding();
      init_types2();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/indexer/searchForTransactions.js
  var init_searchForTransactions = __esm({
    "node_modules/algosdk/dist/esm/client/v2/indexer/searchForTransactions.js"() {
      init_jsonrequest();
      init_encoding();
      init_lookupAccountTransactions();
      init_types2();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/indexer/searchForAssets.js
  var init_searchForAssets = __esm({
    "node_modules/algosdk/dist/esm/client/v2/indexer/searchForAssets.js"() {
      init_jsonrequest();
      init_encoding();
      init_types2();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/indexer/searchForApplications.js
  var init_searchForApplications = __esm({
    "node_modules/algosdk/dist/esm/client/v2/indexer/searchForApplications.js"() {
      init_jsonrequest();
      init_encoding();
      init_types2();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/indexer/searchForApplicationBoxes.js
  var init_searchForApplicationBoxes = __esm({
    "node_modules/algosdk/dist/esm/client/v2/indexer/searchForApplicationBoxes.js"() {
      init_jsonrequest();
      init_encoding();
      init_types2();
    }
  });

  // node_modules/algosdk/dist/esm/client/v2/indexer/indexer.js
  var init_indexer = __esm({
    "node_modules/algosdk/dist/esm/client/v2/indexer/indexer.js"() {
      init_serviceClient();
      init_makeHealthCheck();
      init_lookupAssetBalances();
      init_lookupAssetTransactions();
      init_lookupAccountTransactions();
      init_lookupBlock();
      init_lookupTransactionByID();
      init_lookupAccountByID();
      init_lookupAccountAssets();
      init_lookupAccountCreatedAssets();
      init_lookupAccountAppLocalStates();
      init_lookupAccountCreatedApplications();
      init_lookupAssetByID();
      init_lookupApplications();
      init_lookupApplicationLogs();
      init_lookupApplicationBoxByIDandName();
      init_searchAccounts();
      init_searchForBlockHeaders();
      init_searchForTransactions();
      init_searchForAssets();
      init_searchForApplications();
      init_searchForApplicationBoxes();
    }
  });

  // node_modules/algosdk/dist/esm/wait.js
  async function waitForConfirmation(client, txid, waitRounds) {
    const status = await client.status().do();
    if (typeof status === "undefined") {
      throw new Error("Unable to get node status");
    }
    const startRound = status.lastRound + BigInt(1);
    const stopRound = startRound + BigInt(waitRounds);
    let currentRound = startRound;
    while (currentRound < stopRound) {
      let poolError = false;
      try {
        const pendingInfo = await client.pendingTransactionInformation(txid).do();
        if (pendingInfo.confirmedRound) {
          return pendingInfo;
        }
        if (pendingInfo.poolError) {
          poolError = true;
          throw new Error(`Transaction Rejected: ${pendingInfo.poolError}`);
        }
      } catch (err) {
        if (poolError) {
          throw err;
        }
      }
      await client.statusAfterBlock(currentRound).do();
      currentRound += BigInt(1);
    }
    throw new Error(`Transaction not confirmed after ${waitRounds} rounds`);
  }
  var init_wait = __esm({
    "node_modules/algosdk/dist/esm/wait.js"() {
    }
  });

  // node_modules/algosdk/dist/esm/encoding/bigint.js
  function bigIntToBytes(bi, size) {
    let hex = bi.toString(16);
    if (hex.length !== size * 2) {
      hex = hex.padStart(size * 2, "0");
    }
    const byteArray = new Uint8Array(hex.length / 2);
    for (let i = 0, j = 0; i < hex.length / 2; i++, j += 2) {
      byteArray[i] = parseInt(hex.slice(j, j + 2), 16);
    }
    return byteArray;
  }
  function bytesToBigInt(bytes) {
    let res = BigInt(0);
    const buf = new DataView(bytes.buffer, bytes.byteOffset);
    for (let i = 0; i < bytes.length; i++) {
      res = BigInt(Number(buf.getUint8(i))) + res * BigInt(256);
    }
    return res;
  }
  var init_bigint = __esm({
    "node_modules/algosdk/dist/esm/encoding/bigint.js"() {
    }
  });

  // node_modules/algosdk/dist/esm/account.js
  var init_account = __esm({
    "node_modules/algosdk/dist/esm/account.js"() {
      init_naclWrappers();
      init_address();
    }
  });

  // node_modules/algosdk/dist/esm/mnemonic/wordlists/english.js
  var init_english = __esm({
    "node_modules/algosdk/dist/esm/mnemonic/wordlists/english.js"() {
    }
  });

  // node_modules/algosdk/dist/esm/mnemonic/mnemonic.js
  var PQ_KEY_PREFIX;
  var init_mnemonic = __esm({
    "node_modules/algosdk/dist/esm/mnemonic/mnemonic.js"() {
      init_english();
      init_naclWrappers();
      init_address();
      init_utils();
      PQ_KEY_PREFIX = new TextEncoder().encode("PQK");
    }
  });

  // node_modules/algosdk/dist/esm/group.js
  function txGroupPreimage(txnHashes) {
    if (txnHashes.length > ALGORAND_MAX_TX_GROUP_SIZE) {
      throw new Error(`${txnHashes.length} transactions grouped together but max group size is ${ALGORAND_MAX_TX_GROUP_SIZE}`);
    }
    if (txnHashes.length === 0) {
      throw new Error("Cannot compute group ID of zero transactions");
    }
    const bytes = msgpackRawEncode({
      txlist: txnHashes
    });
    return concatArrays(TX_GROUP_TAG, bytes);
  }
  function computeGroupID(txns) {
    const hashes = [];
    for (const txn of txns) {
      hashes.push(txn.rawTxID());
    }
    const toBeHashed = txGroupPreimage(hashes);
    const gid = genericHash(toBeHashed);
    return Uint8Array.from(gid);
  }
  function assignGroupID(txns) {
    const gid = computeGroupID(txns);
    for (const txn of txns) {
      txn.group = gid;
    }
    return txns;
  }
  var ALGORAND_MAX_TX_GROUP_SIZE, TX_GROUP_TAG;
  var init_group = __esm({
    "node_modules/algosdk/dist/esm/group.js"() {
      init_naclWrappers();
      init_encoding();
      init_utils();
      ALGORAND_MAX_TX_GROUP_SIZE = 16;
      TX_GROUP_TAG = new TextEncoder().encode("TG");
    }
  });

  // node_modules/algosdk/dist/esm/signing.js
  var SIGN_BYTES_PREFIX;
  var init_signing = __esm({
    "node_modules/algosdk/dist/esm/signing.js"() {
      init_naclWrappers();
      init_address();
      init_encoding();
      init_utils();
      init_signedTransaction();
      init_logicsig();
      init_multisig();
      SIGN_BYTES_PREFIX = Uint8Array.from([77, 88]);
    }
  });

  // node_modules/algosdk/dist/esm/multisigSigning.js
  var init_multisigSigning = __esm({
    "node_modules/algosdk/dist/esm/multisigSigning.js"() {
      init_naclWrappers();
      init_address();
      init_encoding();
      init_utils();
      init_signedTransaction();
      init_multisig();
      init_signing();
    }
  });

  // node_modules/vlq/src/index.js
  var char_to_integer, integer_to_char;
  var init_src = __esm({
    "node_modules/vlq/src/index.js"() {
      char_to_integer = {};
      integer_to_char = {};
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".split("").forEach(function(char, i) {
        char_to_integer[char] = i;
        integer_to_char[i] = char;
      });
    }
  });

  // node_modules/algosdk/dist/esm/logic/sourcemap.js
  var init_sourcemap = __esm({
    "node_modules/algosdk/dist/esm/logic/sourcemap.js"() {
      init_src();
    }
  });

  // node_modules/algosdk/dist/esm/ed25519-signer.js
  var init_ed25519_signer = __esm({
    "node_modules/algosdk/dist/esm/ed25519-signer.js"() {
      init_address();
      init_encoding();
      init_logicsig();
      init_multisig();
      init_signedTransaction();
      init_signing();
      init_utils();
    }
  });

  // node_modules/algosdk/dist/esm/pq-signer.js
  var init_pq_signer = __esm({
    "node_modules/algosdk/dist/esm/pq-signer.js"() {
      init_address();
      init_encoding();
      init_logicsig();
      init_signedTransaction();
      init_utils();
    }
  });

  // node_modules/algosdk/dist/esm/falcon-signer.js
  var FALCON_1024_SCHEME;
  var init_falcon_signer = __esm({
    "node_modules/algosdk/dist/esm/falcon-signer.js"() {
      init_pq_signer();
      FALCON_1024_SCHEME = new TextEncoder().encode("f1");
    }
  });

  // node_modules/algosdk/dist/esm/makeTxn.js
  function makeApplicationCallTxnFromObject({ sender, appIndex, onComplete, appArgs, accounts, foreignApps, foreignAssets, boxes, convertToAccess, holdings, locals, access, approvalProgram, clearProgram, numLocalInts, numLocalByteSlices, numGlobalInts, numGlobalByteSlices, extraPages, rejectVersion, note, lease, rekeyTo, suggestedParams }) {
    if (onComplete == null) {
      throw Error("onComplete must be provided");
    }
    if (access && (accounts || foreignApps || foreignAssets || boxes || holdings || locals)) {
      throw Error("cannot specify both access and other access fields");
    }
    let access2 = access;
    if (convertToAccess) {
      access2 = foreignArraysToResourceReferences({
        appIndex,
        accounts,
        foreignApps,
        foreignAssets,
        holdings,
        locals,
        boxes
      });
    }
    return new Transaction({
      type: TransactionType.appl,
      sender,
      note,
      lease,
      rekeyTo,
      suggestedParams,
      appCallParams: {
        appIndex,
        onComplete,
        appArgs,
        // Only pass legacy foreign arrays if access is not provided
        accounts: access2 ? void 0 : accounts,
        foreignAssets: access2 ? void 0 : foreignAssets,
        foreignApps: access2 ? void 0 : foreignApps,
        boxes: access2 ? void 0 : boxes,
        access: access2,
        approvalProgram,
        clearProgram,
        numLocalInts,
        numLocalByteSlices,
        numGlobalInts,
        numGlobalByteSlices,
        extraPages,
        rejectVersion
      }
    });
  }
  var init_makeTxn = __esm({
    "node_modules/algosdk/dist/esm/makeTxn.js"() {
      init_transaction();
      init_base();
      init_appAccess();
    }
  });

  // node_modules/algosdk/dist/esm/signer.js
  function isTransactionWithSigner(value) {
    return typeof value === "object" && Object.keys(value).length === 2 && typeof value.txn === "object" && typeof value.signer === "function";
  }
  var init_signer = __esm({
    "node_modules/algosdk/dist/esm/signer.js"() {
      init_signedTransaction();
      init_signing();
      init_multisigSigning();
    }
  });

  // node_modules/algosdk/dist/esm/abi/abi_type.js
  function compressMultipleBool(valueList) {
    let res = 0;
    if (valueList.length > 8) {
      throw new Error("value list passed in should be no greater than length 8");
    }
    for (let i = 0; i < valueList.length; i++) {
      const boolVal = valueList[i];
      if (typeof boolVal !== "boolean") {
        throw new Error("non-boolean values cannot be compressed into a byte");
      }
      if (boolVal) {
        res |= 1 << 7 - i;
      }
    }
    return res;
  }
  function findBoolLR(typeList, index, delta) {
    let until = 0;
    while (true) {
      const curr = index + delta * until;
      if (typeList[curr].constructor === ABIBoolType) {
        if (curr !== typeList.length - 1 && delta === 1) {
          until += 1;
        } else if (curr > 0 && delta === -1) {
          until += 1;
        } else {
          break;
        }
      } else {
        until -= 1;
        break;
      }
    }
    return until;
  }
  var MAX_LEN, ADDR_BYTE_SIZE, SINGLE_BYTE_SIZE, SINGLE_BOOL_SIZE, LENGTH_ENCODE_BYTE_SIZE, staticArrayRegexp, ufixedRegexp, ABIType, ABIUintType, ABIUfixedType, ABIAddressType, ABIBoolType, ABIByteType, ABIStringType, ABIArrayStaticType, ABIArrayDynamicType, ABITupleType;
  var init_abi_type = __esm({
    "node_modules/algosdk/dist/esm/abi/abi_type.js"() {
      init_address();
      init_bigint();
      init_utils();
      MAX_LEN = 2 ** 16 - 1;
      ADDR_BYTE_SIZE = 32;
      SINGLE_BYTE_SIZE = 1;
      SINGLE_BOOL_SIZE = 1;
      LENGTH_ENCODE_BYTE_SIZE = 2;
      staticArrayRegexp = /^([a-z\d[\](),]+)\[(0|[1-9][\d]*)]$/;
      ufixedRegexp = /^ufixed([1-9][\d]*)x([1-9][\d]*)$/;
      ABIType = class _ABIType {
        // De-serializes the ABI type from a string using the ABI specs
        static from(str) {
          if (str.endsWith("[]")) {
            const arrayArgType = _ABIType.from(str.slice(0, str.length - 2));
            return new ABIArrayDynamicType(arrayArgType);
          }
          if (str.endsWith("]")) {
            const stringMatches = str.match(staticArrayRegexp);
            if (!stringMatches || stringMatches.length !== 3) {
              throw new Error(`malformed static array string: ${str}`);
            }
            const arrayLengthStr = stringMatches[2];
            const arrayLength = parseInt(arrayLengthStr, 10);
            if (arrayLength > MAX_LEN) {
              throw new Error(`array length exceeds limit ${MAX_LEN}`);
            }
            const arrayType = _ABIType.from(stringMatches[1]);
            return new ABIArrayStaticType(arrayType, arrayLength);
          }
          if (str.startsWith("uint")) {
            const digitsOnly = (s) => [...s].every((c) => "0123456789".includes(c));
            const typeSizeStr = str.slice(4, str.length);
            if (!digitsOnly(typeSizeStr)) {
              throw new Error(`malformed uint string: ${typeSizeStr}`);
            }
            const typeSize = parseInt(typeSizeStr, 10);
            if (typeSize > MAX_LEN) {
              throw new Error(`malformed uint string: ${typeSize}`);
            }
            return new ABIUintType(typeSize);
          }
          if (str === "byte") {
            return new ABIByteType();
          }
          if (str.startsWith("ufixed")) {
            const stringMatches = str.match(ufixedRegexp);
            if (!stringMatches || stringMatches.length !== 3) {
              throw new Error(`malformed ufixed type: ${str}`);
            }
            const ufixedSize = parseInt(stringMatches[1], 10);
            const ufixedPrecision = parseInt(stringMatches[2], 10);
            return new ABIUfixedType(ufixedSize, ufixedPrecision);
          }
          if (str === "bool") {
            return new ABIBoolType();
          }
          if (str === "address") {
            return new ABIAddressType();
          }
          if (str === "string") {
            return new ABIStringType();
          }
          if (str.length >= 2 && str[0] === "(" && str[str.length - 1] === ")") {
            const tupleContent = ABITupleType.parseTupleContent(str.slice(1, str.length - 1));
            const tupleTypes = [];
            for (let i = 0; i < tupleContent.length; i++) {
              const ti = _ABIType.from(tupleContent[i]);
              tupleTypes.push(ti);
            }
            return new ABITupleType(tupleTypes);
          }
          throw new Error(`cannot convert a string ${str} to an ABI type`);
        }
      };
      ABIUintType = class _ABIUintType extends ABIType {
        constructor(size) {
          super();
          if (size % 8 !== 0 || size < 8 || size > 512) {
            throw new Error(`unsupported uint type bitSize: ${size}`);
          }
          this.bitSize = size;
        }
        toString() {
          return `uint${this.bitSize}`;
        }
        equals(other) {
          return other instanceof _ABIUintType && this.bitSize === other.bitSize;
        }
        isDynamic() {
          return false;
        }
        byteLen() {
          return this.bitSize / 8;
        }
        encode(value) {
          if (typeof value !== "bigint" && typeof value !== "number") {
            throw new Error(`Cannot encode value as uint${this.bitSize}: ${value}`);
          }
          if (value >= BigInt(2 ** this.bitSize) || value < BigInt(0)) {
            throw new Error(`${value} is not a non-negative int or too big to fit in size uint${this.bitSize}`);
          }
          if (typeof value === "number" && !Number.isSafeInteger(value)) {
            throw new Error(`${value} should be converted into a BigInt before it is encoded`);
          }
          return bigIntToBytes(value, this.bitSize / 8);
        }
        decode(byteString) {
          if (byteString.length !== this.bitSize / 8) {
            throw new Error(`byte string must correspond to a uint${this.bitSize}`);
          }
          return bytesToBigInt(byteString);
        }
      };
      ABIUfixedType = class _ABIUfixedType extends ABIType {
        constructor(size, denominator) {
          super();
          if (size % 8 !== 0 || size < 8 || size > 512) {
            throw new Error(`unsupported ufixed type bitSize: ${size}`);
          }
          if (denominator > 160 || denominator < 1) {
            throw new Error(`unsupported ufixed type precision: ${denominator}`);
          }
          this.bitSize = size;
          this.precision = denominator;
        }
        toString() {
          return `ufixed${this.bitSize}x${this.precision}`;
        }
        equals(other) {
          return other instanceof _ABIUfixedType && this.bitSize === other.bitSize && this.precision === other.precision;
        }
        isDynamic() {
          return false;
        }
        byteLen() {
          return this.bitSize / 8;
        }
        encode(value) {
          if (typeof value !== "bigint" && typeof value !== "number") {
            throw new Error(`Cannot encode value as ${this.toString()}: ${value}`);
          }
          if (value >= BigInt(2 ** this.bitSize) || value < BigInt(0)) {
            throw new Error(`${value} is not a non-negative int or too big to fit in size ${this.toString()}`);
          }
          if (typeof value === "number" && !Number.isSafeInteger(value)) {
            throw new Error(`${value} should be converted into a BigInt before it is encoded`);
          }
          return bigIntToBytes(value, this.bitSize / 8);
        }
        decode(byteString) {
          if (byteString.length !== this.bitSize / 8) {
            throw new Error(`byte string must correspond to a ${this.toString()}`);
          }
          return bytesToBigInt(byteString);
        }
      };
      ABIAddressType = class _ABIAddressType extends ABIType {
        toString() {
          return "address";
        }
        equals(other) {
          return other instanceof _ABIAddressType;
        }
        isDynamic() {
          return false;
        }
        byteLen() {
          return ADDR_BYTE_SIZE;
        }
        encode(value) {
          if (typeof value === "string") {
            const decodedAddress = decodeAddress(value);
            return decodedAddress.publicKey;
          }
          if (value instanceof Address) {
            return value.publicKey;
          }
          if (value instanceof Uint8Array) {
            if (value.byteLength !== 32) {
              throw new Error(`byte string must be 32 bytes long for an address`);
            }
            return value;
          }
          throw new Error(`Cannot encode value as ${this.toString()}: ${value}`);
        }
        decode(byteString) {
          if (byteString.byteLength !== 32) {
            throw new Error(`byte string must be 32 bytes long for an address`);
          }
          return encodeAddress(byteString);
        }
      };
      ABIBoolType = class _ABIBoolType extends ABIType {
        toString() {
          return "bool";
        }
        equals(other) {
          return other instanceof _ABIBoolType;
        }
        isDynamic() {
          return false;
        }
        byteLen() {
          return SINGLE_BOOL_SIZE;
        }
        encode(value) {
          if (typeof value !== "boolean") {
            throw new Error(`Cannot encode value as bool: ${value}`);
          }
          if (value) {
            return new Uint8Array([128]);
          }
          return new Uint8Array([0]);
        }
        decode(byteString) {
          if (byteString.byteLength !== 1) {
            throw new Error(`bool string must be 1 byte long`);
          }
          const value = byteString[0];
          if (value === 128) {
            return true;
          }
          if (value === 0) {
            return false;
          }
          throw new Error(`boolean could not be decoded from the byte string`);
        }
      };
      ABIByteType = class _ABIByteType extends ABIType {
        toString() {
          return "byte";
        }
        equals(other) {
          return other instanceof _ABIByteType;
        }
        isDynamic() {
          return false;
        }
        byteLen() {
          return SINGLE_BYTE_SIZE;
        }
        encode(value) {
          if (typeof value !== "number" && typeof value !== "bigint") {
            throw new Error(`Cannot encode value as byte: ${value}`);
          }
          if (typeof value === "bigint") {
            value = Number(value);
          }
          if (value < 0 || value > 255) {
            throw new Error(`${value} cannot be encoded into a byte`);
          }
          return new Uint8Array([value]);
        }
        decode(byteString) {
          if (byteString.byteLength !== 1) {
            throw new Error(`byte string must be 1 byte long`);
          }
          return byteString[0];
        }
      };
      ABIStringType = class _ABIStringType extends ABIType {
        toString() {
          return "string";
        }
        equals(other) {
          return other instanceof _ABIStringType;
        }
        isDynamic() {
          return true;
        }
        byteLen() {
          throw new Error(`${this.toString()} is a dynamic type`);
        }
        encode(value) {
          if (typeof value !== "string" && !(value instanceof Uint8Array)) {
            throw new Error(`Cannot encode value as string: ${value}`);
          }
          let encodedBytes;
          if (typeof value === "string") {
            encodedBytes = new TextEncoder().encode(value);
          } else {
            encodedBytes = value;
          }
          const encodedLength = bigIntToBytes(encodedBytes.length, LENGTH_ENCODE_BYTE_SIZE);
          const mergedBytes = new Uint8Array(encodedBytes.length + LENGTH_ENCODE_BYTE_SIZE);
          mergedBytes.set(encodedLength);
          mergedBytes.set(encodedBytes, LENGTH_ENCODE_BYTE_SIZE);
          return mergedBytes;
        }
        decode(byteString) {
          if (byteString.length < LENGTH_ENCODE_BYTE_SIZE) {
            throw new Error(`byte string is too short to be decoded. Actual length is ${byteString.length}, but expected at least ${LENGTH_ENCODE_BYTE_SIZE}`);
          }
          const view = new DataView(byteString.buffer, byteString.byteOffset, LENGTH_ENCODE_BYTE_SIZE);
          const byteLength = view.getUint16(0);
          const byteValue = byteString.slice(LENGTH_ENCODE_BYTE_SIZE, byteString.length);
          if (byteLength !== byteValue.length) {
            throw new Error(`string length bytes do not match the actual length of string. Expected ${byteLength}, got ${byteValue.length}`);
          }
          return new TextDecoder("utf-8").decode(byteValue);
        }
      };
      ABIArrayStaticType = class _ABIArrayStaticType extends ABIType {
        constructor(argType, arrayLength) {
          super();
          if (arrayLength < 0) {
            throw new Error(`static array must have a non negative length: ${arrayLength}`);
          }
          this.childType = argType;
          this.staticLength = arrayLength;
        }
        toString() {
          return `${this.childType.toString()}[${this.staticLength}]`;
        }
        equals(other) {
          return other instanceof _ABIArrayStaticType && this.staticLength === other.staticLength && this.childType.equals(other.childType);
        }
        isDynamic() {
          return this.childType.isDynamic();
        }
        byteLen() {
          if (this.childType.constructor === ABIBoolType) {
            return Math.ceil(this.staticLength / 8);
          }
          return this.staticLength * this.childType.byteLen();
        }
        encode(value) {
          if (!Array.isArray(value) && !(value instanceof Uint8Array)) {
            throw new Error(`Cannot encode value as ${this.toString()}: ${value}`);
          }
          if (value.length !== this.staticLength) {
            throw new Error(`Value array does not match static array length. Expected ${this.staticLength}, got ${value.length}`);
          }
          const convertedTuple = this.toABITupleType();
          return convertedTuple.encode(value);
        }
        decode(byteString) {
          const convertedTuple = this.toABITupleType();
          return convertedTuple.decode(byteString);
        }
        toABITupleType() {
          return new ABITupleType(Array(this.staticLength).fill(this.childType));
        }
      };
      ABIArrayDynamicType = class _ABIArrayDynamicType extends ABIType {
        constructor(argType) {
          super();
          this.childType = argType;
        }
        toString() {
          return `${this.childType.toString()}[]`;
        }
        equals(other) {
          return other instanceof _ABIArrayDynamicType && this.childType.equals(other.childType);
        }
        isDynamic() {
          return true;
        }
        byteLen() {
          throw new Error(`${this.toString()} is a dynamic type`);
        }
        encode(value) {
          if (!Array.isArray(value) && !(value instanceof Uint8Array)) {
            throw new Error(`Cannot encode value as ${this.toString()}: ${value}`);
          }
          const convertedTuple = this.toABITupleType(value.length);
          const encodedTuple = convertedTuple.encode(value);
          const encodedLength = bigIntToBytes(convertedTuple.childTypes.length, LENGTH_ENCODE_BYTE_SIZE);
          const mergedBytes = concatArrays(encodedLength, encodedTuple);
          return mergedBytes;
        }
        decode(byteString) {
          const view = new DataView(byteString.buffer, 0, LENGTH_ENCODE_BYTE_SIZE);
          const byteLength = view.getUint16(0);
          const convertedTuple = this.toABITupleType(byteLength);
          return convertedTuple.decode(byteString.slice(LENGTH_ENCODE_BYTE_SIZE, byteString.length));
        }
        toABITupleType(length) {
          return new ABITupleType(Array(length).fill(this.childType));
        }
      };
      ABITupleType = class _ABITupleType extends ABIType {
        constructor(argTypes) {
          super();
          if (argTypes.length >= MAX_LEN) {
            throw new Error("tuple type child type number larger than maximum uint16 error");
          }
          this.childTypes = argTypes;
        }
        toString() {
          const typeStrings = [];
          for (let i = 0; i < this.childTypes.length; i++) {
            typeStrings[i] = this.childTypes[i].toString();
          }
          return `(${typeStrings.join(",")})`;
        }
        equals(other) {
          return other instanceof _ABITupleType && this.childTypes.length === other.childTypes.length && this.childTypes.every((child, index) => child.equals(other.childTypes[index]));
        }
        isDynamic() {
          const isDynamic = (child) => child.isDynamic();
          return this.childTypes.some(isDynamic);
        }
        byteLen() {
          let size = 0;
          for (let i = 0; i < this.childTypes.length; i++) {
            if (this.childTypes[i].constructor === ABIBoolType) {
              const after = findBoolLR(this.childTypes, i, 1);
              const boolNum = after + 1;
              i += after;
              size += Math.trunc((boolNum + 7) / 8);
            } else {
              const childByteSize = this.childTypes[i].byteLen();
              size += childByteSize;
            }
          }
          return size;
        }
        encode(value) {
          if (!Array.isArray(value) && !(value instanceof Uint8Array)) {
            throw new Error(`Cannot encode value as ${this.toString()}: ${value}`);
          }
          const values = Array.from(value);
          if (value.length > MAX_LEN) {
            throw new Error("length of tuple array should not exceed a uint16");
          }
          const tupleTypes = this.childTypes;
          const heads = [];
          const tails = [];
          const isDynamicIndex = /* @__PURE__ */ new Map();
          let i = 0;
          while (i < tupleTypes.length) {
            const tupleType = tupleTypes[i];
            if (tupleType.isDynamic()) {
              isDynamicIndex.set(heads.length, true);
              heads.push(new Uint8Array([0, 0]));
              tails.push(tupleType.encode(values[i]));
            } else {
              if (tupleType.constructor === ABIBoolType) {
                const before = findBoolLR(tupleTypes, i, -1);
                let after = findBoolLR(tupleTypes, i, 1);
                if (before % 8 !== 0) {
                  throw new Error("expected before index should have number of bool mod 8 equal 0");
                }
                after = Math.min(7, after);
                const compressedInt = compressMultipleBool(values.slice(i, i + after + 1));
                heads.push(bigIntToBytes(compressedInt, 1));
                i += after;
              } else {
                const encodedTupleValue = tupleType.encode(values[i]);
                heads.push(encodedTupleValue);
              }
              isDynamicIndex.set(i, false);
              tails.push(new Uint8Array());
            }
            i += 1;
          }
          let headLength = 0;
          for (const headElement of heads) {
            headLength += headElement.length;
          }
          let tailLength = 0;
          for (let j = 0; j < heads.length; j++) {
            if (isDynamicIndex.get(j)) {
              const headValue = headLength + tailLength;
              if (headValue > MAX_LEN) {
                throw new Error(`byte length of ${headValue} should not exceed a uint16`);
              }
              heads[j] = bigIntToBytes(headValue, LENGTH_ENCODE_BYTE_SIZE);
            }
            tailLength += tails[j].length;
          }
          return concatArrays(...heads, ...tails);
        }
        decode(byteString) {
          const tupleTypes = this.childTypes;
          const dynamicSegments = [];
          const valuePartition = [];
          let i = 0;
          let iterIndex = 0;
          const view = new DataView(byteString.buffer);
          while (i < tupleTypes.length) {
            const tupleType = tupleTypes[i];
            if (tupleType.isDynamic()) {
              if (byteString.slice(iterIndex, byteString.length).length < LENGTH_ENCODE_BYTE_SIZE) {
                throw new Error("dynamic type in tuple is too short to be decoded");
              }
              const dynamicIndex = view.getUint16(iterIndex);
              if (dynamicSegments.length > 0) {
                dynamicSegments[dynamicSegments.length - 1].right = dynamicIndex;
                if (dynamicIndex < dynamicSegments[dynamicSegments.length - 1].left) {
                  throw new Error("dynamic index segment miscalculation: left is greater than right index");
                }
              }
              const seg = {
                left: dynamicIndex,
                right: -1
              };
              dynamicSegments.push(seg);
              valuePartition.push(null);
              iterIndex += LENGTH_ENCODE_BYTE_SIZE;
            } else {
              if (tupleType.constructor === ABIBoolType) {
                const before = findBoolLR(this.childTypes, i, -1);
                let after = findBoolLR(this.childTypes, i, 1);
                if (before % 8 !== 0) {
                  throw new Error("expected before bool number mod 8 === 0");
                }
                after = Math.min(7, after);
                for (let boolIndex = 0; boolIndex <= after; boolIndex++) {
                  const boolMask = 128 >> boolIndex;
                  if ((byteString[iterIndex] & boolMask) > 0) {
                    valuePartition.push(new Uint8Array([128]));
                  } else {
                    valuePartition.push(new Uint8Array([0]));
                  }
                }
                i += after;
                iterIndex += 1;
              } else {
                const currLen = tupleType.byteLen();
                valuePartition.push(byteString.slice(iterIndex, iterIndex + currLen));
                iterIndex += currLen;
              }
            }
            if (i !== tupleTypes.length - 1 && iterIndex >= byteString.length) {
              throw new Error("input byte not enough to decode");
            }
            i += 1;
          }
          if (dynamicSegments.length > 0) {
            dynamicSegments[dynamicSegments.length - 1].right = byteString.length;
            iterIndex = byteString.length;
          }
          if (iterIndex < byteString.length) {
            throw new Error("input byte not fully consumed");
          }
          for (let j = 0; j < dynamicSegments.length; j++) {
            const seg = dynamicSegments[j];
            if (seg.left > seg.right) {
              throw new Error("dynamic segment should display a [l, r] space with l <= r");
            }
            if (j !== dynamicSegments.length - 1 && seg.right !== dynamicSegments[j + 1].left) {
              throw new Error("dynamic segment should be consecutive");
            }
          }
          let segIndex = 0;
          for (let j = 0; j < tupleTypes.length; j++) {
            if (tupleTypes[j].isDynamic()) {
              valuePartition[j] = byteString.slice(dynamicSegments[segIndex].left, dynamicSegments[segIndex].right);
              segIndex += 1;
            }
          }
          const returnValues = [];
          for (let j = 0; j < tupleTypes.length; j++) {
            const valueTi = tupleTypes[j].decode(valuePartition[j]);
            returnValues.push(valueTi);
          }
          return returnValues;
        }
        static parseTupleContent(str) {
          if (str.length === 0) {
            return [];
          }
          if (str.endsWith(",") || str.startsWith(",")) {
            throw new Error("tuple string should not start with comma");
          }
          if (str.includes(",,")) {
            throw new Error("tuple string should not have consecutive commas");
          }
          const tupleStrings = [];
          let depth = 0;
          let word = "";
          for (const char of str) {
            word += char;
            if (char === "(") {
              depth += 1;
            } else if (char === ")") {
              depth -= 1;
            } else if (char === ",") {
              if (depth === 0) {
                tupleStrings.push(word.slice(0, word.length - 1));
                word = "";
              }
            }
          }
          if (word.length !== 0) {
            tupleStrings.push(word);
          }
          if (depth !== 0) {
            throw new Error("tuple string has mismatched parentheses");
          }
          return tupleStrings;
        }
      };
    }
  });

  // node_modules/algosdk/dist/esm/abi/transaction.js
  function abiTypeIsTransaction(type) {
    return type === ABITransactionType.any || type === ABITransactionType.pay || type === ABITransactionType.keyreg || type === ABITransactionType.acfg || type === ABITransactionType.axfer || type === ABITransactionType.afrz || type === ABITransactionType.appl;
  }
  function abiCheckTransactionType(type, txn) {
    if (type === ABITransactionType.any) {
      return true;
    }
    return txn.type ? txn.type.toString() === type.toString() : false;
  }
  var ABITransactionType;
  var init_transaction2 = __esm({
    "node_modules/algosdk/dist/esm/abi/transaction.js"() {
      (function(ABITransactionType2) {
        ABITransactionType2["any"] = "txn";
        ABITransactionType2["pay"] = "pay";
        ABITransactionType2["keyreg"] = "keyreg";
        ABITransactionType2["acfg"] = "acfg";
        ABITransactionType2["axfer"] = "axfer";
        ABITransactionType2["afrz"] = "afrz";
        ABITransactionType2["appl"] = "appl";
      })(ABITransactionType || (ABITransactionType = {}));
    }
  });

  // node_modules/algosdk/dist/esm/abi/reference.js
  function abiTypeIsReference(type) {
    return type === ABIReferenceType.account || type === ABIReferenceType.application || type === ABIReferenceType.asset;
  }
  var ABIReferenceType;
  var init_reference = __esm({
    "node_modules/algosdk/dist/esm/abi/reference.js"() {
      (function(ABIReferenceType2) {
        ABIReferenceType2["account"] = "account";
        ABIReferenceType2["application"] = "application";
        ABIReferenceType2["asset"] = "asset";
      })(ABIReferenceType || (ABIReferenceType = {}));
    }
  });

  // node_modules/algosdk/dist/esm/abi/method.js
  var init_method = __esm({
    "node_modules/algosdk/dist/esm/abi/method.js"() {
      init_naclWrappers();
      init_abi_type();
      init_transaction2();
      init_reference();
    }
  });

  // node_modules/algosdk/dist/esm/abi/contract.js
  var init_contract = __esm({
    "node_modules/algosdk/dist/esm/abi/contract.js"() {
      init_method();
    }
  });

  // node_modules/algosdk/dist/esm/abi/interface.js
  var init_interface = __esm({
    "node_modules/algosdk/dist/esm/abi/interface.js"() {
      init_method();
    }
  });

  // node_modules/algosdk/dist/esm/abi/index.js
  var init_abi = __esm({
    "node_modules/algosdk/dist/esm/abi/index.js"() {
      init_abi_type();
      init_contract();
      init_interface();
      init_method();
      init_transaction2();
      init_reference();
    }
  });

  // node_modules/algosdk/dist/esm/composer.js
  function populateForeignArray(valueToAdd, array, zeroValue) {
    if (zeroValue != null && valueToAdd === zeroValue) {
      return 0;
    }
    const offset = zeroValue == null ? 0 : 1;
    for (let i = 0; i < array.length; i++) {
      if (valueToAdd === array[i]) {
        return i + offset;
      }
    }
    array.push(valueToAdd);
    return array.length - 1 + offset;
  }
  var RETURN_PREFIX, MAX_APP_ARGS, AtomicTransactionComposerStatus, AtomicTransactionComposer;
  var init_composer = __esm({
    "node_modules/algosdk/dist/esm/composer.js"() {
      init_abi();
      init_types();
      init_encoding();
      init_group();
      init_makeTxn();
      init_signer();
      init_transaction();
      init_signedTransaction();
      init_base();
      init_utils();
      init_wait();
      RETURN_PREFIX = new Uint8Array([21, 31, 124, 117]);
      MAX_APP_ARGS = 16;
      (function(AtomicTransactionComposerStatus2) {
        AtomicTransactionComposerStatus2[AtomicTransactionComposerStatus2["BUILDING"] = 0] = "BUILDING";
        AtomicTransactionComposerStatus2[AtomicTransactionComposerStatus2["BUILT"] = 1] = "BUILT";
        AtomicTransactionComposerStatus2[AtomicTransactionComposerStatus2["SIGNED"] = 2] = "SIGNED";
        AtomicTransactionComposerStatus2[AtomicTransactionComposerStatus2["SUBMITTED"] = 3] = "SUBMITTED";
        AtomicTransactionComposerStatus2[AtomicTransactionComposerStatus2["COMMITTED"] = 4] = "COMMITTED";
      })(AtomicTransactionComposerStatus || (AtomicTransactionComposerStatus = {}));
      AtomicTransactionComposer = class _AtomicTransactionComposer {
        constructor() {
          this.status = AtomicTransactionComposerStatus.BUILDING;
          this.transactions = [];
          this.methodCalls = /* @__PURE__ */ new Map();
          this.signedTxns = [];
          this.txIDs = [];
        }
        /**
         * Get the status of this composer's transaction group.
         */
        getStatus() {
          return this.status;
        }
        /**
         * Get the number of transactions currently in this atomic group.
         */
        count() {
          return this.transactions.length;
        }
        /**
         * Create a new composer with the same underlying transactions. The new composer's status will be
         * BUILDING, so additional transactions may be added to it.
         */
        clone() {
          const theClone = new _AtomicTransactionComposer();
          theClone.transactions = this.transactions.map(({ txn, signer }) => {
            const txnMap = txn.toEncodingData();
            txnMap.delete("grp");
            return {
              // not quite a deep copy, but good enough for our purposes (modifying txn.group in buildGroup)
              txn: Transaction.fromEncodingData(txnMap),
              signer
            };
          });
          theClone.methodCalls = new Map(this.methodCalls);
          return theClone;
        }
        /**
         * Add a transaction to this atomic group.
         *
         * An error will be thrown if the transaction has a nonzero group ID, the composer's status is
         * not BUILDING, or if adding this transaction causes the current group to exceed MAX_GROUP_SIZE.
         */
        addTransaction(txnAndSigner) {
          if (this.status !== AtomicTransactionComposerStatus.BUILDING) {
            throw new Error("Cannot add transactions when composer status is not BUILDING");
          }
          if (this.transactions.length === _AtomicTransactionComposer.MAX_GROUP_SIZE) {
            throw new Error(`Adding an additional transaction exceeds the maximum atomic group size of ${_AtomicTransactionComposer.MAX_GROUP_SIZE}`);
          }
          if (txnAndSigner.txn.group && txnAndSigner.txn.group.some((v) => v !== 0)) {
            throw new Error("Cannot add a transaction with nonzero group ID");
          }
          this.transactions.push(txnAndSigner);
        }
        /**
         * Add a smart contract method call to this atomic group.
         *
         * An error will be thrown if the composer's status is not BUILDING, if adding this transaction
         * causes the current group to exceed MAX_GROUP_SIZE, or if the provided arguments are invalid
         * for the given method.
         */
        addMethodCall({ appID, method, methodArgs, sender, suggestedParams, onComplete, approvalProgram, clearProgram, numGlobalInts, numGlobalByteSlices, numLocalInts, numLocalByteSlices, extraPages, appAccounts, appForeignApps, appForeignAssets, boxes, access, note, lease, rekeyTo, rejectVersion, signer }) {
          if (this.status !== AtomicTransactionComposerStatus.BUILDING) {
            throw new Error("Cannot add transactions when composer status is not BUILDING");
          }
          if (this.transactions.length + method.txnCount() > _AtomicTransactionComposer.MAX_GROUP_SIZE) {
            throw new Error(`Adding additional transactions exceeds the maximum atomic group size of ${_AtomicTransactionComposer.MAX_GROUP_SIZE}`);
          }
          if (BigInt(appID) === BigInt(0)) {
            if (approvalProgram == null || clearProgram == null || numGlobalInts == null || numGlobalByteSlices == null || numLocalInts == null || numLocalByteSlices == null) {
              throw new Error("One of the following required parameters for application creation is missing: approvalProgram, clearProgram, numGlobalInts, numGlobalByteSlices, numLocalInts, numLocalByteSlices");
            }
          } else if (onComplete === OnApplicationComplete.UpdateApplicationOC) {
            if (approvalProgram == null || clearProgram == null) {
              throw new Error("One of the following required parameters for OnApplicationComplete.UpdateApplicationOC is missing: approvalProgram, clearProgram");
            }
            if (numLocalInts != null || numLocalByteSlices != null) {
              throw new Error("The local state schema cannot be changed on an update call: numLocalInts, numLocalByteSlices");
            }
          } else if (approvalProgram != null || clearProgram != null || numGlobalInts != null || numGlobalByteSlices != null || numLocalInts != null || numLocalByteSlices != null || extraPages != null) {
            throw new Error("One of the following application creation parameters were set on a non-creation call: approvalProgram, clearProgram, numGlobalInts, numGlobalByteSlices, numLocalInts, numLocalByteSlices, extraPages");
          }
          if (access && (appAccounts || appForeignApps || appForeignAssets || boxes)) {
            throw new Error("Cannot specify both access and legacy foreign arrays (appAccounts, appForeignApps, appForeignAssets, boxes)");
          }
          if (methodArgs == null) {
            methodArgs = [];
          }
          if (methodArgs.length !== method.args.length) {
            throw new Error(`Incorrect number of method arguments. Expected ${method.args.length}, got ${methodArgs.length}`);
          }
          let basicArgTypes = [];
          let basicArgValues = [];
          const txnArgs = [];
          const refArgTypes = [];
          const refArgValues = [];
          const refArgIndexToBasicArgIndex = /* @__PURE__ */ new Map();
          const boxReferences = !boxes ? [] : boxes;
          for (let i = 0; i < methodArgs.length; i++) {
            let argType = method.args[i].type;
            const argValue = methodArgs[i];
            if (abiTypeIsTransaction(argType)) {
              if (!isTransactionWithSigner(argValue) || !abiCheckTransactionType(argType, argValue.txn)) {
                throw new Error(`Expected ${argType} TransactionWithSigner for argument at index ${i}`);
              }
              if (argValue.txn.group && argValue.txn.group.some((v) => v !== 0)) {
                throw new Error("Cannot add a transaction with nonzero group ID");
              }
              txnArgs.push(argValue);
              continue;
            }
            if (isTransactionWithSigner(argValue)) {
              throw new Error(`Expected non-transaction value for argument at index ${i}`);
            }
            if (abiTypeIsReference(argType)) {
              refArgIndexToBasicArgIndex.set(refArgTypes.length, basicArgTypes.length);
              refArgTypes.push(argType);
              refArgValues.push(argValue);
              argType = new ABIUintType(8);
            }
            if (typeof argType === "string") {
              throw new Error(`Unknown ABI type: ${argType}`);
            }
            basicArgTypes.push(argType);
            basicArgValues.push(argValue);
          }
          const resolvedRefIndexes = [];
          const foreignAccounts = appAccounts == null ? [] : appAccounts.map((addr) => addr.toString());
          const foreignApps = appForeignApps == null ? [] : appForeignApps.map(ensureUint64);
          const foreignAssets = appForeignAssets == null ? [] : appForeignAssets.map(ensureUint64);
          for (let i = 0; i < refArgTypes.length; i++) {
            const refType = refArgTypes[i];
            const refValue = refArgValues[i];
            let resolved = 0;
            switch (refType) {
              case ABIReferenceType.account: {
                const addressType = new ABIAddressType();
                const address = addressType.decode(addressType.encode(refValue));
                resolved = populateForeignArray(address, foreignAccounts, sender.toString());
                break;
              }
              case ABIReferenceType.application: {
                const uint64Type = new ABIUintType(64);
                const refAppID = uint64Type.decode(uint64Type.encode(refValue));
                if (refAppID > Number.MAX_SAFE_INTEGER) {
                  throw new Error(`Expected safe integer for application value, got ${refAppID}`);
                }
                resolved = populateForeignArray(refAppID, foreignApps, ensureUint64(appID));
                break;
              }
              case ABIReferenceType.asset: {
                const uint64Type = new ABIUintType(64);
                const refAssetID = uint64Type.decode(uint64Type.encode(refValue));
                if (refAssetID > Number.MAX_SAFE_INTEGER) {
                  throw new Error(`Expected safe integer for asset value, got ${refAssetID}`);
                }
                resolved = populateForeignArray(refAssetID, foreignAssets);
                break;
              }
              default:
                throw new Error(`Unknown reference type: ${refType}`);
            }
            resolvedRefIndexes.push(resolved);
          }
          for (let i = 0; i < resolvedRefIndexes.length; i++) {
            const basicArgIndex = refArgIndexToBasicArgIndex.get(i);
            basicArgValues[basicArgIndex] = resolvedRefIndexes[i];
          }
          if (basicArgTypes.length > MAX_APP_ARGS - 1) {
            const lastArgTupleTypes = basicArgTypes.slice(MAX_APP_ARGS - 2);
            const lastArgTupleValues = basicArgValues.slice(MAX_APP_ARGS - 2);
            basicArgTypes = basicArgTypes.slice(0, MAX_APP_ARGS - 2);
            basicArgValues = basicArgValues.slice(0, MAX_APP_ARGS - 2);
            basicArgTypes.push(new ABITupleType(lastArgTupleTypes));
            basicArgValues.push(lastArgTupleValues);
          }
          const appArgsEncoded = [method.getSelector()];
          for (let i = 0; i < basicArgTypes.length; i++) {
            appArgsEncoded.push(basicArgTypes[i].encode(basicArgValues[i]));
          }
          const appCall = {
            txn: makeApplicationCallTxnFromObject({
              sender,
              appIndex: appID,
              appArgs: appArgsEncoded,
              // Only pass legacy foreign arrays if access is not provided
              accounts: access ? void 0 : foreignAccounts,
              foreignApps: access ? void 0 : foreignApps,
              foreignAssets: access ? void 0 : foreignAssets,
              boxes: access ? void 0 : boxReferences,
              access,
              onComplete: onComplete == null ? OnApplicationComplete.NoOpOC : onComplete,
              approvalProgram,
              clearProgram,
              numGlobalInts,
              numGlobalByteSlices,
              numLocalInts,
              numLocalByteSlices,
              extraPages,
              rejectVersion,
              lease,
              note,
              rekeyTo,
              suggestedParams
            }),
            signer
          };
          this.transactions.push(...txnArgs, appCall);
          this.methodCalls.set(this.transactions.length - 1, method);
        }
        /**
         * Finalize the transaction group and returned the finalized transactions.
         *
         * The composer's status will be at least BUILT after executing this method.
         */
        buildGroup() {
          if (this.status === AtomicTransactionComposerStatus.BUILDING) {
            if (this.transactions.length === 0) {
              throw new Error("Cannot build a group with 0 transactions");
            }
            if (this.transactions.length > 1) {
              assignGroupID(this.transactions.map((txnWithSigner) => txnWithSigner.txn));
            }
            this.status = AtomicTransactionComposerStatus.BUILT;
          }
          return this.transactions;
        }
        /**
         * Obtain signatures for each transaction in this group. If signatures have already been obtained,
         * this method will return cached versions of the signatures.
         *
         * The composer's status will be at least SIGNED after executing this method.
         *
         * An error will be thrown if signing any of the transactions fails.
         *
         * @returns A promise that resolves to an array of signed transactions.
         */
        async gatherSignatures() {
          if (this.status >= AtomicTransactionComposerStatus.SIGNED) {
            return this.signedTxns;
          }
          const txnsWithSigners = this.buildGroup();
          const txnGroup = txnsWithSigners.map((txnWithSigner) => txnWithSigner.txn);
          const indexesPerSigner = /* @__PURE__ */ new Map();
          for (let i = 0; i < txnsWithSigners.length; i++) {
            const { signer } = txnsWithSigners[i];
            if (!indexesPerSigner.has(signer)) {
              indexesPerSigner.set(signer, []);
            }
            indexesPerSigner.get(signer).push(i);
          }
          const orderedSigners = Array.from(indexesPerSigner);
          const batchedSigs = await Promise.all(orderedSigners.map(([signer, indexes]) => signer(txnGroup, indexes)));
          const signedTxns = txnsWithSigners.map(() => null);
          for (let signerIndex = 0; signerIndex < orderedSigners.length; signerIndex++) {
            const indexes = orderedSigners[signerIndex][1];
            const sigs = batchedSigs[signerIndex];
            for (let i = 0; i < indexes.length; i++) {
              signedTxns[indexes[i]] = sigs[i];
            }
          }
          function fullyPopulated(a) {
            return a.every((v) => v != null);
          }
          if (!fullyPopulated(signedTxns)) {
            throw new Error(`Missing signatures. Got ${signedTxns}`);
          }
          const txIDs = signedTxns.map((stxn, index) => {
            try {
              return decodeMsgpack(stxn, SignedTransaction).txn.txID();
            } catch (err) {
              throw new Error(`Cannot decode signed transaction at index ${index}. ${err}`);
            }
          });
          this.signedTxns = signedTxns;
          this.txIDs = txIDs;
          this.status = AtomicTransactionComposerStatus.SIGNED;
          return signedTxns;
        }
        /**
         * Send the transaction group to the network, but don't wait for it to be committed to a block. An
         * error will be thrown if submission fails.
         *
         * The composer's status must be SUBMITTED or lower before calling this method. If submission is
         * successful, this composer's status will update to SUBMITTED.
         *
         * Note: a group can only be submitted again if it fails.
         *
         * @param client - An Algodv2 client
         *
         * @returns A promise that, upon success, resolves to a list of TxIDs of the submitted transactions.
         */
        async submit(client) {
          if (this.status > AtomicTransactionComposerStatus.SUBMITTED) {
            throw new Error("Transaction group cannot be resubmitted");
          }
          const stxns = await this.gatherSignatures();
          await client.sendRawTransaction(stxns).do();
          this.status = AtomicTransactionComposerStatus.SUBMITTED;
          return this.txIDs;
        }
        /**
         * Simulates the transaction group in the network.
         *
         * The composer will try to sign any transactions in the group, then simulate
         * the results.
         * Simulating the group will not change the composer's status.
         *
         * @param client - An Algodv2 client
         * @param request - SimulateRequest with options in simulation.
         *   If provided, the request's transaction group will be overrwritten by the composer's group,
         *   only simulation related options will be used.
         *
         * @returns A promise that, upon success, resolves to an object containing an
         *   array of results containing one element for each method call transaction
         *   in this group (ABIResult[]) and the SimulateResponse object.
         */
        async simulate(client, request) {
          if (this.status > AtomicTransactionComposerStatus.SUBMITTED) {
            throw new Error("Simulated Transaction group has already been submitted to the network");
          }
          const stxns = await this.gatherSignatures();
          const txnObjects = stxns.map((stxn) => decodeMsgpack(stxn, SignedTransaction));
          const currentRequest = request == null ? new SimulateRequest({ txnGroups: [] }) : request;
          currentRequest.txnGroups = [
            new SimulateRequestTransactionGroup({
              txns: txnObjects
            })
          ];
          const simulateResponse = await client.simulateTransactions(currentRequest).do();
          const methodResults = [];
          for (const [txnIndex, method] of this.methodCalls) {
            const txID = this.txIDs[txnIndex];
            const pendingInfo = simulateResponse.txnGroups[0].txnResults[txnIndex].txnResult;
            const methodResult = {
              txID,
              rawReturnValue: new Uint8Array(),
              method
            };
            methodResults.push(_AtomicTransactionComposer.parseMethodResponse(method, methodResult, pendingInfo));
          }
          return { methodResults, simulateResponse };
        }
        /**
         * Send the transaction group to the network and wait until it's committed to a block. An error
         * will be thrown if submission or execution fails.
         *
         * The composer's status must be SUBMITTED or lower before calling this method, since execution is
         * only allowed once. If submission is successful, this composer's status will update to SUBMITTED.
         * If the execution is also successful, this composer's status will update to COMMITTED.
         *
         * Note: a group can only be submitted again if it fails.
         *
         * @param client - An Algodv2 client
         * @param waitRounds - The maximum number of rounds to wait for transaction confirmation
         *
         * @returns A promise that, upon success, resolves to an object containing the confirmed round for
         *   this transaction, the txIDs of the submitted transactions, and an array of results containing
         *   one element for each method call transaction in this group.
         */
        async execute(client, waitRounds) {
          if (this.status === AtomicTransactionComposerStatus.COMMITTED) {
            throw new Error("Transaction group has already been executed successfully");
          }
          const txIDs = await this.submit(client);
          this.status = AtomicTransactionComposerStatus.SUBMITTED;
          const firstMethodCallIndex = this.transactions.findIndex((_, index) => this.methodCalls.has(index));
          const indexToWaitFor = firstMethodCallIndex === -1 ? 0 : firstMethodCallIndex;
          const confirmedTxnInfo = await waitForConfirmation(client, txIDs[indexToWaitFor], waitRounds);
          this.status = AtomicTransactionComposerStatus.COMMITTED;
          const confirmedRound = confirmedTxnInfo.confirmedRound;
          const methodResults = [];
          for (const [txnIndex, method] of this.methodCalls) {
            const txID = txIDs[txnIndex];
            let methodResult = {
              txID,
              rawReturnValue: new Uint8Array(),
              method
            };
            try {
              const pendingInfo = txnIndex === firstMethodCallIndex ? confirmedTxnInfo : (
                // eslint-disable-next-line no-await-in-loop
                await client.pendingTransactionInformation(txID).do()
              );
              methodResult = _AtomicTransactionComposer.parseMethodResponse(method, methodResult, pendingInfo);
            } catch (err) {
              methodResult.decodeError = err;
            }
            methodResults.push(methodResult);
          }
          return {
            confirmedRound,
            txIDs,
            methodResults
          };
        }
        /**
         * Parses a single ABI Method transaction log into a ABI result object.
         *
         * @param method
         * @param methodResult
         * @param pendingInfo
         * @returns An ABIResult object
         */
        static parseMethodResponse(method, methodResult, pendingInfo) {
          const returnedResult = methodResult;
          try {
            returnedResult.txInfo = pendingInfo;
            if (method.returns.type !== "void") {
              const logs = pendingInfo.logs || [];
              if (logs.length === 0) {
                throw new Error(`App call transaction did not log a return value ${stringifyJSON(pendingInfo)}`);
              }
              const lastLog = logs[logs.length - 1];
              if (lastLog.byteLength < 4 || !arrayEqual(lastLog.slice(0, 4), RETURN_PREFIX)) {
                throw new Error(`App call transaction did not log a ABI return value ${stringifyJSON(pendingInfo)}`);
              }
              returnedResult.rawReturnValue = new Uint8Array(lastLog.slice(4));
              returnedResult.returnValue = method.returns.type.decode(methodResult.rawReturnValue);
            }
          } catch (err) {
            returnedResult.decodeError = err;
          }
          return returnedResult;
        }
      };
      AtomicTransactionComposer.MAX_GROUP_SIZE = 16;
    }
  });

  // node_modules/algosdk/dist/esm/main.js
  var MULTISIG_BAD_SENDER_ERROR_MSG, ERROR_MULTISIG_BAD_SENDER, ERROR_INVALID_MICROALGOS;
  var init_main = __esm({
    "node_modules/algosdk/dist/esm/main.js"() {
      init_convert();
      init_algod();
      init_kmd();
      init_intDecoding();
      init_indexer();
      init_wait();
      init_encoding();
      init_address();
      init_bigint();
      init_binarydata();
      init_uint642();
      init_utils();
      init_account();
      init_block();
      init_statedelta();
      init_stateproof();
      init_untypedmodel();
      init_types();
      init_types2();
      init_mnemonic();
      init_convert();
      init_group();
      init_signedTransaction();
      init_signing();
      init_logicsig();
      init_multisig();
      init_multisigSigning();
      init_sourcemap();
      init_ed25519_signer();
      init_falcon_signer();
      init_pq_signer();
      init_makeTxn();
      init_transaction();
      init_signer();
      init_composer();
      init_transactions();
      init_abi();
      MULTISIG_BAD_SENDER_ERROR_MSG = "The transaction sender address and multisig preimage do not match.";
      ERROR_MULTISIG_BAD_SENDER = new Error(MULTISIG_BAD_SENDER_ERROR_MSG);
      ERROR_INVALID_MICROALGOS = new Error(INVALID_MICROALGOS_ERROR_MSG);
    }
  });

  // node_modules/algosdk/dist/esm/index.js
  var init_esm = __esm({
    "node_modules/algosdk/dist/esm/index.js"() {
      init_main();
      init_main();
    }
  });

  // wallet-entry.js
  var require_wallet_entry = __commonJS({
    "wallet-entry.js"() {
      var import_avm_web_provider = __toESM(require_dist());
      init_esm();
      var PROVIDER = "f6d1c86b-4493-42fb-b88d-a62407b4cdf6";
      var GENESIS = "wGHE2Pwdvd7S12BL5FaOP20EGYesN73ktiC1qzkkit8=";
      var PAYTO = "SGLTUPAC7TKGKNNXKNPQ2QZCC7NJSLAKYZ7O7NOGGAPXWBFZTOLTPMSPPI";
      var client;
      function getClient() {
        return client ??= import_avm_web_provider.AVMWebClient.init();
      }
      var from64 = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));
      var to64 = (a) => btoa(Array.from(a, (x) => String.fromCharCode(x)).join(""));
      function call(method, listen, params, timeout = 12e4) {
        const c = getClient();
        return new Promise((resolve, reject) => {
          let timer;
          const id = c[listen](({ error, result }) => {
            if (result && result.providerId !== PROVIDER) return;
            c.removeListener(id);
            clearTimeout(timer);
            if (error) return reject(new Error("WALLET_REQUEST_REJECTED"));
            if (!result) return reject(new Error("WALLET_EMPTY_RESPONSE"));
            resolve(result);
          });
          timer = setTimeout(() => {
            c.removeListener(id);
            reject(new Error("KIBISIS_TIMEOUT"));
          }, timeout);
          c[method]({ ...params, providerId: PROVIDER });
        });
      }
      function address(x) {
        return x?.toString();
      }
      function assert(ok) {
        if (!ok) throw new Error("UNSAFE_PAYMENT_BLOCKED");
      }
      function validate(q, payer, symbol) {
        const ch = q.payment_required, req = ch?.accepts?.[0];
        assert(ch?.x402Version === 2 && ch.accepts.length === 1 && req.scheme === "exact");
        assert(req.network === "algorand:" + GENESIS && req.asset === "31566704" && req.amount === "100000" && req.payTo === PAYTO);
        assert(ch.resource.url === location.origin + "/api/v1/market-signal/" + symbol);
        assert(ch.extensions?.bazaar?.info?.input?.method === "GET");
        assert(Array.isArray(q.unsigned_transactions) && q.unsigned_transactions.length === 2 && q.sign_indexes?.length === 1 && q.sign_indexes[0] === 1);
        assert(Date.now() / 1e3 < q.expires_at && q.expires_at - Date.now() / 1e3 <= 190);
        const txns = q.unsigned_transactions.map((x) => decodeUnsignedTransaction(from64(x)));
        const [s, p2] = txns;
        assert(p2.type === "axfer" && address(p2.sender) === payer && address(p2.assetTransfer.receiver) === PAYTO);
        assert(p2.assetTransfer.amount === 100000n && p2.assetTransfer.assetIndex === 31566704n && p2.fee === 0n);
        assert(!p2.assetTransfer.closeRemainderTo && !p2.assetTransfer.assetSender && !p2.rekeyTo && !p2.lease);
        assert(s.type === "pay" && address(s.sender) === req.extra?.feePayer && address(s.payment.receiver) === address(s.sender));
        assert(s.payment.amount === 0n && !s.payment.closeRemainderTo && !s.rekeyTo && !s.lease && s.fee >= 2000n && s.fee <= 4000n);
        assert(to64(s.genesisHash) === GENESIS && to64(p2.genesisHash) === GENESIS);
        assert(s.firstValid === p2.firstValid && s.lastValid === p2.lastValid && p2.lastValid >= p2.firstValid && p2.lastValid - p2.firstValid <= 1000n);
        assert(p2.group && s.group && to64(p2.group) === to64(s.group));
        const expected = to64(p2.group);
        txns.forEach((x) => x.group = void 0);
        assert(to64(computeGroupID(txns)) === expected);
        assert(decodeUnsignedTransaction(from64(q.unsigned_transactions[1])).txID() === q.txid);
        return req;
      }
      window.QTSWallet = {
        async connect() {
          const r = await call("enable", "onEnable", { genesisHash: GENESIS });
          assert(r.genesisHash === GENESIS);
          const accounts = r.accounts.filter((a) => isValidAddress(a.address));
          if (!accounts.length) throw new Error("NO_WALLET_ACCOUNTS");
          return accounts;
        },
        async disconnect() {
          try {
            await call("disable", "onDisable", { genesisHash: GENESIS }, 1500);
          } catch {
          }
        },
        async sign(q, payer, symbol) {
          const req = validate(q, payer, symbol);
          const r = await call("signTransactions", "onSignTransactions", { txns: q.unsigned_transactions.map((txn, i) => i === 1 ? { txn } : { txn, signers: [] }) });
          assert(r.stxns?.length === 2 && r.stxns[0] === null && typeof r.stxns[1] === "string");
          const decoded = decodeSignedTransaction(from64(r.stxns[1]));
          assert(to64(decoded.txn.toByte()) === q.unsigned_transactions[1] && decoded.sig?.length === 64 && !decoded.sgnr && !decoded.msig && !decoded.lsig);
          const payload = {
            x402Version: 2,
            accepted: req,
            resource: q.payment_required.resource,
            extensions: q.payment_required.extensions,
            payload: { paymentGroup: [q.unsigned_transactions[0], r.stxns[1]], paymentIndex: 1 }
          };
          return btoa(unescape(encodeURIComponent(JSON.stringify(payload))));
        },
        validate
      };
    }
  });
  require_wallet_entry();
})();

/*
THIRD-PARTY LICENSE NOTICES
Bundled for deployment without Node.js.


@agoralabs-sh/avm-web-provider 1.7.0
CC0 1.0 Universal

Statement of Purpose

The laws of most jurisdictions throughout the world automatically confer
exclusive Copyright and Related Rights (defined below) upon the creator and
subsequent owner(s) (each and all, an "owner") of an original work of
authorship and/or a database (each, a "Work").

Certain owners wish to permanently relinquish those rights to a Work for the
purpose of contributing to a commons of creative, cultural and scientific
works ("Commons") that the public can reliably and without fear of later
claims of infringement build upon, modify, incorporate in other works, reuse
and redistribute as freely as possible in any form whatsoever and for any
purposes, including without limitation commercial purposes. These owners may
contribute to the Commons to promote the ideal of a free culture and the
further production of creative, cultural and scientific works, or to gain
reputation or greater distribution for their Work in part through the use and
efforts of others.

For these and/or other purposes and motivations, and without any expectation
of additional consideration or compensation, the person associating CC0 with a
Work (the "Affirmer"), to the extent that he or she is an owner of Copyright
and Related Rights in the Work, voluntarily elects to apply CC0 to the Work
and publicly distribute the Work under its terms, with knowledge of his or her
Copyright and Related Rights in the Work and the meaning and intended legal
effect of CC0 on those rights.

1. Copyright and Related Rights. A Work made available under CC0 may be
protected by copyright and related or neighboring rights ("Copyright and
Related Rights"). Copyright and Related Rights include, but are not limited
to, the following:

  i. the right to reproduce, adapt, distribute, perform, display, communicate,
  and translate a Work;

  ii. moral rights retained by the original author(s) and/or performer(s);

  iii. publicity and privacy rights pertaining to a person's image or likeness
  depicted in a Work;

  iv. rights protecting against unfair competition in regards to a Work,
  subject to the limitations in paragraph 4(a), below;

  v. rights protecting the extraction, dissemination, use and reuse of data in
  a Work;

  vi. database rights (such as those arising under Directive 96/9/EC of the
  European Parliament and of the Council of 11 March 1996 on the legal
  protection of databases, and under any national implementation thereof,
  including any amended or successor version of such directive); and

  vii. other similar, equivalent or corresponding rights throughout the world
  based on applicable law or treaty, and any national implementations thereof.

2. Waiver. To the greatest extent permitted by, but not in contravention of,
applicable law, Affirmer hereby overtly, fully, permanently, irrevocably and
unconditionally waives, abandons, and surrenders all of Affirmer's Copyright
and Related Rights and associated claims and causes of action, whether now
known or unknown (including existing as well as future claims and causes of
action), in the Work (i) in all territories worldwide, (ii) for the maximum
duration provided by applicable law or treaty (including future time
extensions), (iii) in any current or future medium and for any number of
copies, and (iv) for any purpose whatsoever, including without limitation
commercial, advertising or promotional purposes (the "Waiver"). Affirmer makes
the Waiver for the benefit of each member of the public at large and to the
detriment of Affirmer's heirs and successors, fully intending that such Waiver
shall not be subject to revocation, rescission, cancellation, termination, or
any other legal or equitable action to disrupt the quiet enjoyment of the Work
by the public as contemplated by Affirmer's express Statement of Purpose.

3. Public License Fallback. Should any part of the Waiver for any reason be
judged legally invalid or ineffective under applicable law, then the Waiver
shall be preserved to the maximum extent permitted taking into account
Affirmer's express Statement of Purpose. In addition, to the extent the Waiver
is so judged Affirmer hereby grants to each affected person a royalty-free,
non transferable, non sublicensable, non exclusive, irrevocable and
unconditional license to exercise Affirmer's Copyright and Related Rights in
the Work (i) in all territories worldwide, (ii) for the maximum duration
provided by applicable law or treaty (including future time extensions), (iii)
in any current or future medium and for any number of copies, and (iv) for any
purpose whatsoever, including without limitation commercial, advertising or
promotional purposes (the "License"). The License shall be deemed effective as
of the date CC0 was applied by Affirmer to the Work. Should any part of the
License for any reason be judged legally invalid or ineffective under
applicable law, such partial invalidity or ineffectiveness shall not
invalidate the remainder of the License, and in such case Affirmer hereby
affirms that he or she will not (i) exercise any of his or her remaining
Copyright and Related Rights in the Work or (ii) assert any associated claims
and causes of action with respect to the Work, in either case contrary to
Affirmer's express Statement of Purpose.

4. Limitations and Disclaimers.

  a. No trademark or patent rights held by Affirmer are waived, abandoned,
  surrendered, licensed or otherwise affected by this document.

  b. Affirmer offers the Work as-is and makes no representations or warranties
  of any kind concerning the Work, express, implied, statutory or otherwise,
  including without limitation warranties of title, merchantability, fitness
  for a particular purpose, non infringement, or the absence of latent or
  other defects, accuracy, or the present or absence of errors, whether or not
  discoverable, all to the greatest extent permissible under applicable law.

  c. Affirmer disclaims responsibility for clearing rights of other persons
  that may apply to the Work or any use thereof, including without limitation
  any person's Copyright and Related Rights in the Work. Further, Affirmer
  disclaims responsibility for obtaining any necessary consents, permissions
  or other rights required for any use of the Work.

  d. Affirmer understands and acknowledges that Creative Commons is not a
  party to this document and has no duty or obligation with respect to this
  CC0 or use of the Work.

For more information, please see
<http://creativecommons.org/publicdomain/zero/1.0/>


algorand-msgpack 1.1.0
Copyright 2019 The MessagePack Community.

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.


algosdk 3.8.0
MIT License

Copyright (c) 2019 Algorand, llc

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


bignumber.js 9.3.1
The MIT License (MIT)
=====================

Copyright © `<2025>` `Michael Mclaughlin`

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the “Software”), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.



hi-base32 0.5.1
Copyright (c) 2015-2021 Chen, Yi-Cyuan

MIT License

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


js-sha512 0.8.0
Copyright 2014-2018 Chen, Yi-Cyuan

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


json-bigint 1.0.0
The MIT License (MIT)

Copyright (c) 2013 Andrey Sidorov

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


tweetnacl 1.0.3
This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org>


uuid 9.0.1
The MIT License (MIT)

Copyright (c) 2010-2020 Robert Kieffer and other contributors

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


vlq 2.0.4
Copyright (c) 2017-2021 [these people](https://github.com/Rich-Harris/vlq/graphs/contributors)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


*/
