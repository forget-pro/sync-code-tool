var Ey = Object.defineProperty;
var _y = (e, t, n) => t in e ? Ey(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var xe = (e, t, n) => _y(e, typeof t != "symbol" ? t + "" : t, n);
import Bn, { app as rn, dialog as Wh, ipcMain as zn, shell as Sy, BrowserWindow as Vh, globalShortcut as Ty } from "electron";
import { createRequire as Yh } from "node:module";
import { fileURLToPath as Ay } from "node:url";
import Pe from "util";
import ie, { Readable as Ry } from "stream";
import ae from "path";
import bo from "http";
import Nl from "https";
import At from "url";
import oe from "fs";
import Dr from "crypto";
import wo from "assert";
import Xh from "tty";
import Eo from "os";
import Qe from "zlib";
import Hn, { EventEmitter as Cy } from "events";
import Nt from "buffer";
import Kh from "constants";
import kl from "string_decoder";
import _o, { spawn as mp } from "child_process";
import vp from "node:fs";
import ot from "node:path";
function Jh(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Oy } = Object.prototype, { getPrototypeOf: Ll } = Object, { iterator: So, toStringTag: Zh } = Symbol, To = /* @__PURE__ */ ((e) => (t) => {
  const n = Oy.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), dt = (e) => (e = e.toLowerCase(), (t) => To(t) === e), Ao = (e) => (t) => typeof t === e, { isArray: Fr } = Array, li = Ao("undefined");
function $y(e) {
  return e !== null && !li(e) && e.constructor !== null && !li(e.constructor) && et(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Qh = dt("ArrayBuffer");
function Iy(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Qh(e.buffer), t;
}
const Py = Ao("string"), et = Ao("function"), em = Ao("number"), Ro = (e) => e !== null && typeof e == "object", Dy = (e) => e === !0 || e === !1, Ba = (e) => {
  if (To(e) !== "object")
    return !1;
  const t = Ll(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Zh in e) && !(So in e);
}, Fy = dt("Date"), Ny = dt("File"), ky = dt("Blob"), Ly = dt("FileList"), Uy = (e) => Ro(e) && et(e.pipe), By = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || et(e.append) && ((t = To(e)) === "formdata" || // detect form-data instance
  t === "object" && et(e.toString) && e.toString() === "[object FormData]"));
}, jy = dt("URLSearchParams"), [My, qy, zy, Hy] = ["ReadableStream", "Request", "Response", "Headers"].map(dt), Gy = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function $i(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, i;
  if (typeof e != "object" && (e = [e]), Fr(e))
    for (r = 0, i = e.length; r < i; r++)
      t.call(null, e[r], r, e);
  else {
    const a = n ? Object.getOwnPropertyNames(e) : Object.keys(e), o = a.length;
    let c;
    for (r = 0; r < o; r++)
      c = a[r], t.call(null, e[c], c, e);
  }
}
function tm(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, i;
  for (; r-- > 0; )
    if (i = n[r], t === i.toLowerCase())
      return i;
  return null;
}
const $n = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, nm = (e) => !li(e) && e !== $n;
function Qc() {
  const { caseless: e } = nm(this) && this || {}, t = {}, n = (r, i) => {
    const a = e && tm(t, i) || i;
    Ba(t[a]) && Ba(r) ? t[a] = Qc(t[a], r) : Ba(r) ? t[a] = Qc({}, r) : Fr(r) ? t[a] = r.slice() : t[a] = r;
  };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && $i(arguments[r], n);
  return t;
}
const Wy = (e, t, n, { allOwnKeys: r } = {}) => ($i(t, (i, a) => {
  n && et(i) ? e[a] = Jh(i, n) : e[a] = i;
}, { allOwnKeys: r }), e), Vy = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Yy = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Xy = (e, t, n, r) => {
  let i, a, o;
  const c = {};
  if (t = t || {}, e == null) return t;
  do {
    for (i = Object.getOwnPropertyNames(e), a = i.length; a-- > 0; )
      o = i[a], (!r || r(o, e, t)) && !c[o] && (t[o] = e[o], c[o] = !0);
    e = n !== !1 && Ll(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Ky = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Jy = (e) => {
  if (!e) return null;
  if (Fr(e)) return e;
  let t = e.length;
  if (!em(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Zy = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Ll(Uint8Array)), Qy = (e, t) => {
  const r = (e && e[So]).call(e);
  let i;
  for (; (i = r.next()) && !i.done; ) {
    const a = i.value;
    t.call(e, a[0], a[1]);
  }
}, eb = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, tb = dt("HTMLFormElement"), nb = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, i) {
    return r.toUpperCase() + i;
  }
), gp = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), rb = dt("RegExp"), rm = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  $i(n, (i, a) => {
    let o;
    (o = t(i, a, e)) !== !1 && (r[a] = o || i);
  }), Object.defineProperties(e, r);
}, ib = (e) => {
  rm(e, (t, n) => {
    if (et(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (et(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, ab = (e, t) => {
  const n = {}, r = (i) => {
    i.forEach((a) => {
      n[a] = !0;
    });
  };
  return Fr(e) ? r(e) : r(String(e).split(t)), n;
}, ob = () => {
}, sb = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function cb(e) {
  return !!(e && et(e.append) && e[Zh] === "FormData" && e[So]);
}
const lb = (e) => {
  const t = new Array(10), n = (r, i) => {
    if (Ro(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[i] = r;
        const a = Fr(r) ? [] : {};
        return $i(r, (o, c) => {
          const s = n(o, i + 1);
          !li(s) && (a[c] = s);
        }), t[i] = void 0, a;
      }
    }
    return r;
  };
  return n(e, 0);
}, ub = dt("AsyncFunction"), pb = (e) => e && (Ro(e) || et(e)) && et(e.then) && et(e.catch), im = ((e, t) => e ? setImmediate : t ? ((n, r) => ($n.addEventListener("message", ({ source: i, data: a }) => {
  i === $n && a === n && r.length && r.shift()();
}, !1), (i) => {
  r.push(i), $n.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  et($n.postMessage)
), fb = typeof queueMicrotask < "u" ? queueMicrotask.bind($n) : typeof process < "u" && process.nextTick || im, db = (e) => e != null && et(e[So]), P = {
  isArray: Fr,
  isArrayBuffer: Qh,
  isBuffer: $y,
  isFormData: By,
  isArrayBufferView: Iy,
  isString: Py,
  isNumber: em,
  isBoolean: Dy,
  isObject: Ro,
  isPlainObject: Ba,
  isReadableStream: My,
  isRequest: qy,
  isResponse: zy,
  isHeaders: Hy,
  isUndefined: li,
  isDate: Fy,
  isFile: Ny,
  isBlob: ky,
  isRegExp: rb,
  isFunction: et,
  isStream: Uy,
  isURLSearchParams: jy,
  isTypedArray: Zy,
  isFileList: Ly,
  forEach: $i,
  merge: Qc,
  extend: Wy,
  trim: Gy,
  stripBOM: Vy,
  inherits: Yy,
  toFlatObject: Xy,
  kindOf: To,
  kindOfTest: dt,
  endsWith: Ky,
  toArray: Jy,
  forEachEntry: Qy,
  matchAll: eb,
  isHTMLForm: tb,
  hasOwnProperty: gp,
  hasOwnProp: gp,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: rm,
  freezeMethods: ib,
  toObjectSet: ab,
  toCamelCase: nb,
  noop: ob,
  toFiniteNumber: sb,
  findKey: tm,
  global: $n,
  isContextDefined: nm,
  isSpecCompliantForm: cb,
  toJSONObject: lb,
  isAsyncFn: ub,
  isThenable: pb,
  setImmediate: im,
  asap: fb,
  isIterable: db
};
function V(e, t, n, r, i) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), i && (this.response = i, this.status = i.status ? i.status : null);
}
P.inherits(V, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: P.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const am = V.prototype, om = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  om[e] = { value: e };
});
Object.defineProperties(V, om);
Object.defineProperty(am, "isAxiosError", { value: !0 });
V.from = (e, t, n, r, i, a) => {
  const o = Object.create(am);
  return P.toFlatObject(e, o, function(s) {
    return s !== Error.prototype;
  }, (c) => c !== "isAxiosError"), V.call(o, e.message, t, n, r, i), o.cause = e, o.name = e.name, a && Object.assign(o, a), o;
};
var Te = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ul(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var sm = ie.Stream, hb = Pe, mb = ht;
function ht() {
  this.source = null, this.dataSize = 0, this.maxDataSize = 1024 * 1024, this.pauseStream = !0, this._maxDataSizeExceeded = !1, this._released = !1, this._bufferedEvents = [];
}
hb.inherits(ht, sm);
ht.create = function(e, t) {
  var n = new this();
  t = t || {};
  for (var r in t)
    n[r] = t[r];
  n.source = e;
  var i = e.emit;
  return e.emit = function() {
    return n._handleEmit(arguments), i.apply(e, arguments);
  }, e.on("error", function() {
  }), n.pauseStream && e.pause(), n;
};
Object.defineProperty(ht.prototype, "readable", {
  configurable: !0,
  enumerable: !0,
  get: function() {
    return this.source.readable;
  }
});
ht.prototype.setEncoding = function() {
  return this.source.setEncoding.apply(this.source, arguments);
};
ht.prototype.resume = function() {
  this._released || this.release(), this.source.resume();
};
ht.prototype.pause = function() {
  this.source.pause();
};
ht.prototype.release = function() {
  this._released = !0, this._bufferedEvents.forEach((function(e) {
    this.emit.apply(this, e);
  }).bind(this)), this._bufferedEvents = [];
};
ht.prototype.pipe = function() {
  var e = sm.prototype.pipe.apply(this, arguments);
  return this.resume(), e;
};
ht.prototype._handleEmit = function(e) {
  if (this._released) {
    this.emit.apply(this, e);
    return;
  }
  e[0] === "data" && (this.dataSize += e[1].length, this._checkIfMaxDataSizeExceeded()), this._bufferedEvents.push(e);
};
ht.prototype._checkIfMaxDataSizeExceeded = function() {
  if (!this._maxDataSizeExceeded && !(this.dataSize <= this.maxDataSize)) {
    this._maxDataSizeExceeded = !0;
    var e = "DelayedStream#maxDataSize of " + this.maxDataSize + " bytes exceeded.";
    this.emit("error", new Error(e));
  }
};
var vb = Pe, cm = ie.Stream, xp = mb, gb = we;
function we() {
  this.writable = !1, this.readable = !0, this.dataSize = 0, this.maxDataSize = 2 * 1024 * 1024, this.pauseStreams = !0, this._released = !1, this._streams = [], this._currentStream = null, this._insideLoop = !1, this._pendingNext = !1;
}
vb.inherits(we, cm);
we.create = function(e) {
  var t = new this();
  e = e || {};
  for (var n in e)
    t[n] = e[n];
  return t;
};
we.isStreamLike = function(e) {
  return typeof e != "function" && typeof e != "string" && typeof e != "boolean" && typeof e != "number" && !Buffer.isBuffer(e);
};
we.prototype.append = function(e) {
  var t = we.isStreamLike(e);
  if (t) {
    if (!(e instanceof xp)) {
      var n = xp.create(e, {
        maxDataSize: 1 / 0,
        pauseStream: this.pauseStreams
      });
      e.on("data", this._checkDataSize.bind(this)), e = n;
    }
    this._handleErrors(e), this.pauseStreams && e.pause();
  }
  return this._streams.push(e), this;
};
we.prototype.pipe = function(e, t) {
  return cm.prototype.pipe.call(this, e, t), this.resume(), e;
};
we.prototype._getNext = function() {
  if (this._currentStream = null, this._insideLoop) {
    this._pendingNext = !0;
    return;
  }
  this._insideLoop = !0;
  try {
    do
      this._pendingNext = !1, this._realGetNext();
    while (this._pendingNext);
  } finally {
    this._insideLoop = !1;
  }
};
we.prototype._realGetNext = function() {
  var e = this._streams.shift();
  if (typeof e > "u") {
    this.end();
    return;
  }
  if (typeof e != "function") {
    this._pipeNext(e);
    return;
  }
  var t = e;
  t((function(n) {
    var r = we.isStreamLike(n);
    r && (n.on("data", this._checkDataSize.bind(this)), this._handleErrors(n)), this._pipeNext(n);
  }).bind(this));
};
we.prototype._pipeNext = function(e) {
  this._currentStream = e;
  var t = we.isStreamLike(e);
  if (t) {
    e.on("end", this._getNext.bind(this)), e.pipe(this, { end: !1 });
    return;
  }
  var n = e;
  this.write(n), this._getNext();
};
we.prototype._handleErrors = function(e) {
  var t = this;
  e.on("error", function(n) {
    t._emitError(n);
  });
};
we.prototype.write = function(e) {
  this.emit("data", e);
};
we.prototype.pause = function() {
  this.pauseStreams && (this.pauseStreams && this._currentStream && typeof this._currentStream.pause == "function" && this._currentStream.pause(), this.emit("pause"));
};
we.prototype.resume = function() {
  this._released || (this._released = !0, this.writable = !0, this._getNext()), this.pauseStreams && this._currentStream && typeof this._currentStream.resume == "function" && this._currentStream.resume(), this.emit("resume");
};
we.prototype.end = function() {
  this._reset(), this.emit("end");
};
we.prototype.destroy = function() {
  this._reset(), this.emit("close");
};
we.prototype._reset = function() {
  this.writable = !1, this._streams = [], this._currentStream = null;
};
we.prototype._checkDataSize = function() {
  if (this._updateDataSize(), !(this.dataSize <= this.maxDataSize)) {
    var e = "DelayedStream#maxDataSize of " + this.maxDataSize + " bytes exceeded.";
    this._emitError(new Error(e));
  }
};
we.prototype._updateDataSize = function() {
  this.dataSize = 0;
  var e = this;
  this._streams.forEach(function(t) {
    t.dataSize && (e.dataSize += t.dataSize);
  }), this._currentStream && this._currentStream.dataSize && (this.dataSize += this._currentStream.dataSize);
};
we.prototype._emitError = function(e) {
  this._reset(), this.emit("error", e);
};
var lm = {};
const xb = {
  "application/1d-interleaved-parityfec": {
    source: "iana"
  },
  "application/3gpdash-qoe-report+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/3gpp-ims+xml": {
    source: "iana",
    compressible: !0
  },
  "application/3gpphal+json": {
    source: "iana",
    compressible: !0
  },
  "application/3gpphalforms+json": {
    source: "iana",
    compressible: !0
  },
  "application/a2l": {
    source: "iana"
  },
  "application/ace+cbor": {
    source: "iana"
  },
  "application/activemessage": {
    source: "iana"
  },
  "application/activity+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-costmap+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-costmapfilter+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-directory+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-endpointcost+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-endpointcostparams+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-endpointprop+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-endpointpropparams+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-error+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-networkmap+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-networkmapfilter+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-updatestreamcontrol+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-updatestreamparams+json": {
    source: "iana",
    compressible: !0
  },
  "application/aml": {
    source: "iana"
  },
  "application/andrew-inset": {
    source: "iana",
    extensions: [
      "ez"
    ]
  },
  "application/applefile": {
    source: "iana"
  },
  "application/applixware": {
    source: "apache",
    extensions: [
      "aw"
    ]
  },
  "application/at+jwt": {
    source: "iana"
  },
  "application/atf": {
    source: "iana"
  },
  "application/atfx": {
    source: "iana"
  },
  "application/atom+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "atom"
    ]
  },
  "application/atomcat+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "atomcat"
    ]
  },
  "application/atomdeleted+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "atomdeleted"
    ]
  },
  "application/atomicmail": {
    source: "iana"
  },
  "application/atomsvc+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "atomsvc"
    ]
  },
  "application/atsc-dwd+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "dwd"
    ]
  },
  "application/atsc-dynamic-event-message": {
    source: "iana"
  },
  "application/atsc-held+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "held"
    ]
  },
  "application/atsc-rdt+json": {
    source: "iana",
    compressible: !0
  },
  "application/atsc-rsat+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rsat"
    ]
  },
  "application/atxml": {
    source: "iana"
  },
  "application/auth-policy+xml": {
    source: "iana",
    compressible: !0
  },
  "application/bacnet-xdd+zip": {
    source: "iana",
    compressible: !1
  },
  "application/batch-smtp": {
    source: "iana"
  },
  "application/bdoc": {
    compressible: !1,
    extensions: [
      "bdoc"
    ]
  },
  "application/beep+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/calendar+json": {
    source: "iana",
    compressible: !0
  },
  "application/calendar+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xcs"
    ]
  },
  "application/call-completion": {
    source: "iana"
  },
  "application/cals-1840": {
    source: "iana"
  },
  "application/captive+json": {
    source: "iana",
    compressible: !0
  },
  "application/cbor": {
    source: "iana"
  },
  "application/cbor-seq": {
    source: "iana"
  },
  "application/cccex": {
    source: "iana"
  },
  "application/ccmp+xml": {
    source: "iana",
    compressible: !0
  },
  "application/ccxml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "ccxml"
    ]
  },
  "application/cdfx+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "cdfx"
    ]
  },
  "application/cdmi-capability": {
    source: "iana",
    extensions: [
      "cdmia"
    ]
  },
  "application/cdmi-container": {
    source: "iana",
    extensions: [
      "cdmic"
    ]
  },
  "application/cdmi-domain": {
    source: "iana",
    extensions: [
      "cdmid"
    ]
  },
  "application/cdmi-object": {
    source: "iana",
    extensions: [
      "cdmio"
    ]
  },
  "application/cdmi-queue": {
    source: "iana",
    extensions: [
      "cdmiq"
    ]
  },
  "application/cdni": {
    source: "iana"
  },
  "application/cea": {
    source: "iana"
  },
  "application/cea-2018+xml": {
    source: "iana",
    compressible: !0
  },
  "application/cellml+xml": {
    source: "iana",
    compressible: !0
  },
  "application/cfw": {
    source: "iana"
  },
  "application/city+json": {
    source: "iana",
    compressible: !0
  },
  "application/clr": {
    source: "iana"
  },
  "application/clue+xml": {
    source: "iana",
    compressible: !0
  },
  "application/clue_info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/cms": {
    source: "iana"
  },
  "application/cnrp+xml": {
    source: "iana",
    compressible: !0
  },
  "application/coap-group+json": {
    source: "iana",
    compressible: !0
  },
  "application/coap-payload": {
    source: "iana"
  },
  "application/commonground": {
    source: "iana"
  },
  "application/conference-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/cose": {
    source: "iana"
  },
  "application/cose-key": {
    source: "iana"
  },
  "application/cose-key-set": {
    source: "iana"
  },
  "application/cpl+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "cpl"
    ]
  },
  "application/csrattrs": {
    source: "iana"
  },
  "application/csta+xml": {
    source: "iana",
    compressible: !0
  },
  "application/cstadata+xml": {
    source: "iana",
    compressible: !0
  },
  "application/csvm+json": {
    source: "iana",
    compressible: !0
  },
  "application/cu-seeme": {
    source: "apache",
    extensions: [
      "cu"
    ]
  },
  "application/cwt": {
    source: "iana"
  },
  "application/cybercash": {
    source: "iana"
  },
  "application/dart": {
    compressible: !0
  },
  "application/dash+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mpd"
    ]
  },
  "application/dash-patch+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mpp"
    ]
  },
  "application/dashdelta": {
    source: "iana"
  },
  "application/davmount+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "davmount"
    ]
  },
  "application/dca-rft": {
    source: "iana"
  },
  "application/dcd": {
    source: "iana"
  },
  "application/dec-dx": {
    source: "iana"
  },
  "application/dialog-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/dicom": {
    source: "iana"
  },
  "application/dicom+json": {
    source: "iana",
    compressible: !0
  },
  "application/dicom+xml": {
    source: "iana",
    compressible: !0
  },
  "application/dii": {
    source: "iana"
  },
  "application/dit": {
    source: "iana"
  },
  "application/dns": {
    source: "iana"
  },
  "application/dns+json": {
    source: "iana",
    compressible: !0
  },
  "application/dns-message": {
    source: "iana"
  },
  "application/docbook+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "dbk"
    ]
  },
  "application/dots+cbor": {
    source: "iana"
  },
  "application/dskpp+xml": {
    source: "iana",
    compressible: !0
  },
  "application/dssc+der": {
    source: "iana",
    extensions: [
      "dssc"
    ]
  },
  "application/dssc+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xdssc"
    ]
  },
  "application/dvcs": {
    source: "iana"
  },
  "application/ecmascript": {
    source: "iana",
    compressible: !0,
    extensions: [
      "es",
      "ecma"
    ]
  },
  "application/edi-consent": {
    source: "iana"
  },
  "application/edi-x12": {
    source: "iana",
    compressible: !1
  },
  "application/edifact": {
    source: "iana",
    compressible: !1
  },
  "application/efi": {
    source: "iana"
  },
  "application/elm+json": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/elm+xml": {
    source: "iana",
    compressible: !0
  },
  "application/emergencycalldata.cap+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/emergencycalldata.comment+xml": {
    source: "iana",
    compressible: !0
  },
  "application/emergencycalldata.control+xml": {
    source: "iana",
    compressible: !0
  },
  "application/emergencycalldata.deviceinfo+xml": {
    source: "iana",
    compressible: !0
  },
  "application/emergencycalldata.ecall.msd": {
    source: "iana"
  },
  "application/emergencycalldata.providerinfo+xml": {
    source: "iana",
    compressible: !0
  },
  "application/emergencycalldata.serviceinfo+xml": {
    source: "iana",
    compressible: !0
  },
  "application/emergencycalldata.subscriberinfo+xml": {
    source: "iana",
    compressible: !0
  },
  "application/emergencycalldata.veds+xml": {
    source: "iana",
    compressible: !0
  },
  "application/emma+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "emma"
    ]
  },
  "application/emotionml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "emotionml"
    ]
  },
  "application/encaprtp": {
    source: "iana"
  },
  "application/epp+xml": {
    source: "iana",
    compressible: !0
  },
  "application/epub+zip": {
    source: "iana",
    compressible: !1,
    extensions: [
      "epub"
    ]
  },
  "application/eshop": {
    source: "iana"
  },
  "application/exi": {
    source: "iana",
    extensions: [
      "exi"
    ]
  },
  "application/expect-ct-report+json": {
    source: "iana",
    compressible: !0
  },
  "application/express": {
    source: "iana",
    extensions: [
      "exp"
    ]
  },
  "application/fastinfoset": {
    source: "iana"
  },
  "application/fastsoap": {
    source: "iana"
  },
  "application/fdt+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "fdt"
    ]
  },
  "application/fhir+json": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/fhir+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/fido.trusted-apps+json": {
    compressible: !0
  },
  "application/fits": {
    source: "iana"
  },
  "application/flexfec": {
    source: "iana"
  },
  "application/font-sfnt": {
    source: "iana"
  },
  "application/font-tdpfr": {
    source: "iana",
    extensions: [
      "pfr"
    ]
  },
  "application/font-woff": {
    source: "iana",
    compressible: !1
  },
  "application/framework-attributes+xml": {
    source: "iana",
    compressible: !0
  },
  "application/geo+json": {
    source: "iana",
    compressible: !0,
    extensions: [
      "geojson"
    ]
  },
  "application/geo+json-seq": {
    source: "iana"
  },
  "application/geopackage+sqlite3": {
    source: "iana"
  },
  "application/geoxacml+xml": {
    source: "iana",
    compressible: !0
  },
  "application/gltf-buffer": {
    source: "iana"
  },
  "application/gml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "gml"
    ]
  },
  "application/gpx+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "gpx"
    ]
  },
  "application/gxf": {
    source: "apache",
    extensions: [
      "gxf"
    ]
  },
  "application/gzip": {
    source: "iana",
    compressible: !1,
    extensions: [
      "gz"
    ]
  },
  "application/h224": {
    source: "iana"
  },
  "application/held+xml": {
    source: "iana",
    compressible: !0
  },
  "application/hjson": {
    extensions: [
      "hjson"
    ]
  },
  "application/http": {
    source: "iana"
  },
  "application/hyperstudio": {
    source: "iana",
    extensions: [
      "stk"
    ]
  },
  "application/ibe-key-request+xml": {
    source: "iana",
    compressible: !0
  },
  "application/ibe-pkg-reply+xml": {
    source: "iana",
    compressible: !0
  },
  "application/ibe-pp-data": {
    source: "iana"
  },
  "application/iges": {
    source: "iana"
  },
  "application/im-iscomposing+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/index": {
    source: "iana"
  },
  "application/index.cmd": {
    source: "iana"
  },
  "application/index.obj": {
    source: "iana"
  },
  "application/index.response": {
    source: "iana"
  },
  "application/index.vnd": {
    source: "iana"
  },
  "application/inkml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "ink",
      "inkml"
    ]
  },
  "application/iotp": {
    source: "iana"
  },
  "application/ipfix": {
    source: "iana",
    extensions: [
      "ipfix"
    ]
  },
  "application/ipp": {
    source: "iana"
  },
  "application/isup": {
    source: "iana"
  },
  "application/its+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "its"
    ]
  },
  "application/java-archive": {
    source: "apache",
    compressible: !1,
    extensions: [
      "jar",
      "war",
      "ear"
    ]
  },
  "application/java-serialized-object": {
    source: "apache",
    compressible: !1,
    extensions: [
      "ser"
    ]
  },
  "application/java-vm": {
    source: "apache",
    compressible: !1,
    extensions: [
      "class"
    ]
  },
  "application/javascript": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0,
    extensions: [
      "js",
      "mjs"
    ]
  },
  "application/jf2feed+json": {
    source: "iana",
    compressible: !0
  },
  "application/jose": {
    source: "iana"
  },
  "application/jose+json": {
    source: "iana",
    compressible: !0
  },
  "application/jrd+json": {
    source: "iana",
    compressible: !0
  },
  "application/jscalendar+json": {
    source: "iana",
    compressible: !0
  },
  "application/json": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0,
    extensions: [
      "json",
      "map"
    ]
  },
  "application/json-patch+json": {
    source: "iana",
    compressible: !0
  },
  "application/json-seq": {
    source: "iana"
  },
  "application/json5": {
    extensions: [
      "json5"
    ]
  },
  "application/jsonml+json": {
    source: "apache",
    compressible: !0,
    extensions: [
      "jsonml"
    ]
  },
  "application/jwk+json": {
    source: "iana",
    compressible: !0
  },
  "application/jwk-set+json": {
    source: "iana",
    compressible: !0
  },
  "application/jwt": {
    source: "iana"
  },
  "application/kpml-request+xml": {
    source: "iana",
    compressible: !0
  },
  "application/kpml-response+xml": {
    source: "iana",
    compressible: !0
  },
  "application/ld+json": {
    source: "iana",
    compressible: !0,
    extensions: [
      "jsonld"
    ]
  },
  "application/lgr+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "lgr"
    ]
  },
  "application/link-format": {
    source: "iana"
  },
  "application/load-control+xml": {
    source: "iana",
    compressible: !0
  },
  "application/lost+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "lostxml"
    ]
  },
  "application/lostsync+xml": {
    source: "iana",
    compressible: !0
  },
  "application/lpf+zip": {
    source: "iana",
    compressible: !1
  },
  "application/lxf": {
    source: "iana"
  },
  "application/mac-binhex40": {
    source: "iana",
    extensions: [
      "hqx"
    ]
  },
  "application/mac-compactpro": {
    source: "apache",
    extensions: [
      "cpt"
    ]
  },
  "application/macwriteii": {
    source: "iana"
  },
  "application/mads+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mads"
    ]
  },
  "application/manifest+json": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0,
    extensions: [
      "webmanifest"
    ]
  },
  "application/marc": {
    source: "iana",
    extensions: [
      "mrc"
    ]
  },
  "application/marcxml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mrcx"
    ]
  },
  "application/mathematica": {
    source: "iana",
    extensions: [
      "ma",
      "nb",
      "mb"
    ]
  },
  "application/mathml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mathml"
    ]
  },
  "application/mathml-content+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mathml-presentation+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-associated-procedure-description+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-deregister+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-envelope+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-msk+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-msk-response+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-protection-description+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-reception-report+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-register+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-register-response+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-schedule+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-user-service-description+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbox": {
    source: "iana",
    extensions: [
      "mbox"
    ]
  },
  "application/media-policy-dataset+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mpf"
    ]
  },
  "application/media_control+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mediaservercontrol+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mscml"
    ]
  },
  "application/merge-patch+json": {
    source: "iana",
    compressible: !0
  },
  "application/metalink+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "metalink"
    ]
  },
  "application/metalink4+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "meta4"
    ]
  },
  "application/mets+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mets"
    ]
  },
  "application/mf4": {
    source: "iana"
  },
  "application/mikey": {
    source: "iana"
  },
  "application/mipc": {
    source: "iana"
  },
  "application/missing-blocks+cbor-seq": {
    source: "iana"
  },
  "application/mmt-aei+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "maei"
    ]
  },
  "application/mmt-usd+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "musd"
    ]
  },
  "application/mods+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mods"
    ]
  },
  "application/moss-keys": {
    source: "iana"
  },
  "application/moss-signature": {
    source: "iana"
  },
  "application/mosskey-data": {
    source: "iana"
  },
  "application/mosskey-request": {
    source: "iana"
  },
  "application/mp21": {
    source: "iana",
    extensions: [
      "m21",
      "mp21"
    ]
  },
  "application/mp4": {
    source: "iana",
    extensions: [
      "mp4s",
      "m4p"
    ]
  },
  "application/mpeg4-generic": {
    source: "iana"
  },
  "application/mpeg4-iod": {
    source: "iana"
  },
  "application/mpeg4-iod-xmt": {
    source: "iana"
  },
  "application/mrb-consumer+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mrb-publish+xml": {
    source: "iana",
    compressible: !0
  },
  "application/msc-ivr+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/msc-mixer+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/msword": {
    source: "iana",
    compressible: !1,
    extensions: [
      "doc",
      "dot"
    ]
  },
  "application/mud+json": {
    source: "iana",
    compressible: !0
  },
  "application/multipart-core": {
    source: "iana"
  },
  "application/mxf": {
    source: "iana",
    extensions: [
      "mxf"
    ]
  },
  "application/n-quads": {
    source: "iana",
    extensions: [
      "nq"
    ]
  },
  "application/n-triples": {
    source: "iana",
    extensions: [
      "nt"
    ]
  },
  "application/nasdata": {
    source: "iana"
  },
  "application/news-checkgroups": {
    source: "iana",
    charset: "US-ASCII"
  },
  "application/news-groupinfo": {
    source: "iana",
    charset: "US-ASCII"
  },
  "application/news-transmission": {
    source: "iana"
  },
  "application/nlsml+xml": {
    source: "iana",
    compressible: !0
  },
  "application/node": {
    source: "iana",
    extensions: [
      "cjs"
    ]
  },
  "application/nss": {
    source: "iana"
  },
  "application/oauth-authz-req+jwt": {
    source: "iana"
  },
  "application/oblivious-dns-message": {
    source: "iana"
  },
  "application/ocsp-request": {
    source: "iana"
  },
  "application/ocsp-response": {
    source: "iana"
  },
  "application/octet-stream": {
    source: "iana",
    compressible: !1,
    extensions: [
      "bin",
      "dms",
      "lrf",
      "mar",
      "so",
      "dist",
      "distz",
      "pkg",
      "bpk",
      "dump",
      "elc",
      "deploy",
      "exe",
      "dll",
      "deb",
      "dmg",
      "iso",
      "img",
      "msi",
      "msp",
      "msm",
      "buffer"
    ]
  },
  "application/oda": {
    source: "iana",
    extensions: [
      "oda"
    ]
  },
  "application/odm+xml": {
    source: "iana",
    compressible: !0
  },
  "application/odx": {
    source: "iana"
  },
  "application/oebps-package+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "opf"
    ]
  },
  "application/ogg": {
    source: "iana",
    compressible: !1,
    extensions: [
      "ogx"
    ]
  },
  "application/omdoc+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "omdoc"
    ]
  },
  "application/onenote": {
    source: "apache",
    extensions: [
      "onetoc",
      "onetoc2",
      "onetmp",
      "onepkg"
    ]
  },
  "application/opc-nodeset+xml": {
    source: "iana",
    compressible: !0
  },
  "application/oscore": {
    source: "iana"
  },
  "application/oxps": {
    source: "iana",
    extensions: [
      "oxps"
    ]
  },
  "application/p21": {
    source: "iana"
  },
  "application/p21+zip": {
    source: "iana",
    compressible: !1
  },
  "application/p2p-overlay+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "relo"
    ]
  },
  "application/parityfec": {
    source: "iana"
  },
  "application/passport": {
    source: "iana"
  },
  "application/patch-ops-error+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xer"
    ]
  },
  "application/pdf": {
    source: "iana",
    compressible: !1,
    extensions: [
      "pdf"
    ]
  },
  "application/pdx": {
    source: "iana"
  },
  "application/pem-certificate-chain": {
    source: "iana"
  },
  "application/pgp-encrypted": {
    source: "iana",
    compressible: !1,
    extensions: [
      "pgp"
    ]
  },
  "application/pgp-keys": {
    source: "iana",
    extensions: [
      "asc"
    ]
  },
  "application/pgp-signature": {
    source: "iana",
    extensions: [
      "asc",
      "sig"
    ]
  },
  "application/pics-rules": {
    source: "apache",
    extensions: [
      "prf"
    ]
  },
  "application/pidf+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/pidf-diff+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/pkcs10": {
    source: "iana",
    extensions: [
      "p10"
    ]
  },
  "application/pkcs12": {
    source: "iana"
  },
  "application/pkcs7-mime": {
    source: "iana",
    extensions: [
      "p7m",
      "p7c"
    ]
  },
  "application/pkcs7-signature": {
    source: "iana",
    extensions: [
      "p7s"
    ]
  },
  "application/pkcs8": {
    source: "iana",
    extensions: [
      "p8"
    ]
  },
  "application/pkcs8-encrypted": {
    source: "iana"
  },
  "application/pkix-attr-cert": {
    source: "iana",
    extensions: [
      "ac"
    ]
  },
  "application/pkix-cert": {
    source: "iana",
    extensions: [
      "cer"
    ]
  },
  "application/pkix-crl": {
    source: "iana",
    extensions: [
      "crl"
    ]
  },
  "application/pkix-pkipath": {
    source: "iana",
    extensions: [
      "pkipath"
    ]
  },
  "application/pkixcmp": {
    source: "iana",
    extensions: [
      "pki"
    ]
  },
  "application/pls+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "pls"
    ]
  },
  "application/poc-settings+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/postscript": {
    source: "iana",
    compressible: !0,
    extensions: [
      "ai",
      "eps",
      "ps"
    ]
  },
  "application/ppsp-tracker+json": {
    source: "iana",
    compressible: !0
  },
  "application/problem+json": {
    source: "iana",
    compressible: !0
  },
  "application/problem+xml": {
    source: "iana",
    compressible: !0
  },
  "application/provenance+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "provx"
    ]
  },
  "application/prs.alvestrand.titrax-sheet": {
    source: "iana"
  },
  "application/prs.cww": {
    source: "iana",
    extensions: [
      "cww"
    ]
  },
  "application/prs.cyn": {
    source: "iana",
    charset: "7-BIT"
  },
  "application/prs.hpub+zip": {
    source: "iana",
    compressible: !1
  },
  "application/prs.nprend": {
    source: "iana"
  },
  "application/prs.plucker": {
    source: "iana"
  },
  "application/prs.rdf-xml-crypt": {
    source: "iana"
  },
  "application/prs.xsf+xml": {
    source: "iana",
    compressible: !0
  },
  "application/pskc+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "pskcxml"
    ]
  },
  "application/pvd+json": {
    source: "iana",
    compressible: !0
  },
  "application/qsig": {
    source: "iana"
  },
  "application/raml+yaml": {
    compressible: !0,
    extensions: [
      "raml"
    ]
  },
  "application/raptorfec": {
    source: "iana"
  },
  "application/rdap+json": {
    source: "iana",
    compressible: !0
  },
  "application/rdf+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rdf",
      "owl"
    ]
  },
  "application/reginfo+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rif"
    ]
  },
  "application/relax-ng-compact-syntax": {
    source: "iana",
    extensions: [
      "rnc"
    ]
  },
  "application/remote-printing": {
    source: "iana"
  },
  "application/reputon+json": {
    source: "iana",
    compressible: !0
  },
  "application/resource-lists+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rl"
    ]
  },
  "application/resource-lists-diff+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rld"
    ]
  },
  "application/rfc+xml": {
    source: "iana",
    compressible: !0
  },
  "application/riscos": {
    source: "iana"
  },
  "application/rlmi+xml": {
    source: "iana",
    compressible: !0
  },
  "application/rls-services+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rs"
    ]
  },
  "application/route-apd+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rapd"
    ]
  },
  "application/route-s-tsid+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "sls"
    ]
  },
  "application/route-usd+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rusd"
    ]
  },
  "application/rpki-ghostbusters": {
    source: "iana",
    extensions: [
      "gbr"
    ]
  },
  "application/rpki-manifest": {
    source: "iana",
    extensions: [
      "mft"
    ]
  },
  "application/rpki-publication": {
    source: "iana"
  },
  "application/rpki-roa": {
    source: "iana",
    extensions: [
      "roa"
    ]
  },
  "application/rpki-updown": {
    source: "iana"
  },
  "application/rsd+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "rsd"
    ]
  },
  "application/rss+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "rss"
    ]
  },
  "application/rtf": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rtf"
    ]
  },
  "application/rtploopback": {
    source: "iana"
  },
  "application/rtx": {
    source: "iana"
  },
  "application/samlassertion+xml": {
    source: "iana",
    compressible: !0
  },
  "application/samlmetadata+xml": {
    source: "iana",
    compressible: !0
  },
  "application/sarif+json": {
    source: "iana",
    compressible: !0
  },
  "application/sarif-external-properties+json": {
    source: "iana",
    compressible: !0
  },
  "application/sbe": {
    source: "iana"
  },
  "application/sbml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "sbml"
    ]
  },
  "application/scaip+xml": {
    source: "iana",
    compressible: !0
  },
  "application/scim+json": {
    source: "iana",
    compressible: !0
  },
  "application/scvp-cv-request": {
    source: "iana",
    extensions: [
      "scq"
    ]
  },
  "application/scvp-cv-response": {
    source: "iana",
    extensions: [
      "scs"
    ]
  },
  "application/scvp-vp-request": {
    source: "iana",
    extensions: [
      "spq"
    ]
  },
  "application/scvp-vp-response": {
    source: "iana",
    extensions: [
      "spp"
    ]
  },
  "application/sdp": {
    source: "iana",
    extensions: [
      "sdp"
    ]
  },
  "application/secevent+jwt": {
    source: "iana"
  },
  "application/senml+cbor": {
    source: "iana"
  },
  "application/senml+json": {
    source: "iana",
    compressible: !0
  },
  "application/senml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "senmlx"
    ]
  },
  "application/senml-etch+cbor": {
    source: "iana"
  },
  "application/senml-etch+json": {
    source: "iana",
    compressible: !0
  },
  "application/senml-exi": {
    source: "iana"
  },
  "application/sensml+cbor": {
    source: "iana"
  },
  "application/sensml+json": {
    source: "iana",
    compressible: !0
  },
  "application/sensml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "sensmlx"
    ]
  },
  "application/sensml-exi": {
    source: "iana"
  },
  "application/sep+xml": {
    source: "iana",
    compressible: !0
  },
  "application/sep-exi": {
    source: "iana"
  },
  "application/session-info": {
    source: "iana"
  },
  "application/set-payment": {
    source: "iana"
  },
  "application/set-payment-initiation": {
    source: "iana",
    extensions: [
      "setpay"
    ]
  },
  "application/set-registration": {
    source: "iana"
  },
  "application/set-registration-initiation": {
    source: "iana",
    extensions: [
      "setreg"
    ]
  },
  "application/sgml": {
    source: "iana"
  },
  "application/sgml-open-catalog": {
    source: "iana"
  },
  "application/shf+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "shf"
    ]
  },
  "application/sieve": {
    source: "iana",
    extensions: [
      "siv",
      "sieve"
    ]
  },
  "application/simple-filter+xml": {
    source: "iana",
    compressible: !0
  },
  "application/simple-message-summary": {
    source: "iana"
  },
  "application/simplesymbolcontainer": {
    source: "iana"
  },
  "application/sipc": {
    source: "iana"
  },
  "application/slate": {
    source: "iana"
  },
  "application/smil": {
    source: "iana"
  },
  "application/smil+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "smi",
      "smil"
    ]
  },
  "application/smpte336m": {
    source: "iana"
  },
  "application/soap+fastinfoset": {
    source: "iana"
  },
  "application/soap+xml": {
    source: "iana",
    compressible: !0
  },
  "application/sparql-query": {
    source: "iana",
    extensions: [
      "rq"
    ]
  },
  "application/sparql-results+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "srx"
    ]
  },
  "application/spdx+json": {
    source: "iana",
    compressible: !0
  },
  "application/spirits-event+xml": {
    source: "iana",
    compressible: !0
  },
  "application/sql": {
    source: "iana"
  },
  "application/srgs": {
    source: "iana",
    extensions: [
      "gram"
    ]
  },
  "application/srgs+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "grxml"
    ]
  },
  "application/sru+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "sru"
    ]
  },
  "application/ssdl+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "ssdl"
    ]
  },
  "application/ssml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "ssml"
    ]
  },
  "application/stix+json": {
    source: "iana",
    compressible: !0
  },
  "application/swid+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "swidtag"
    ]
  },
  "application/tamp-apex-update": {
    source: "iana"
  },
  "application/tamp-apex-update-confirm": {
    source: "iana"
  },
  "application/tamp-community-update": {
    source: "iana"
  },
  "application/tamp-community-update-confirm": {
    source: "iana"
  },
  "application/tamp-error": {
    source: "iana"
  },
  "application/tamp-sequence-adjust": {
    source: "iana"
  },
  "application/tamp-sequence-adjust-confirm": {
    source: "iana"
  },
  "application/tamp-status-query": {
    source: "iana"
  },
  "application/tamp-status-response": {
    source: "iana"
  },
  "application/tamp-update": {
    source: "iana"
  },
  "application/tamp-update-confirm": {
    source: "iana"
  },
  "application/tar": {
    compressible: !0
  },
  "application/taxii+json": {
    source: "iana",
    compressible: !0
  },
  "application/td+json": {
    source: "iana",
    compressible: !0
  },
  "application/tei+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "tei",
      "teicorpus"
    ]
  },
  "application/tetra_isi": {
    source: "iana"
  },
  "application/thraud+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "tfi"
    ]
  },
  "application/timestamp-query": {
    source: "iana"
  },
  "application/timestamp-reply": {
    source: "iana"
  },
  "application/timestamped-data": {
    source: "iana",
    extensions: [
      "tsd"
    ]
  },
  "application/tlsrpt+gzip": {
    source: "iana"
  },
  "application/tlsrpt+json": {
    source: "iana",
    compressible: !0
  },
  "application/tnauthlist": {
    source: "iana"
  },
  "application/token-introspection+jwt": {
    source: "iana"
  },
  "application/toml": {
    compressible: !0,
    extensions: [
      "toml"
    ]
  },
  "application/trickle-ice-sdpfrag": {
    source: "iana"
  },
  "application/trig": {
    source: "iana",
    extensions: [
      "trig"
    ]
  },
  "application/ttml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "ttml"
    ]
  },
  "application/tve-trigger": {
    source: "iana"
  },
  "application/tzif": {
    source: "iana"
  },
  "application/tzif-leap": {
    source: "iana"
  },
  "application/ubjson": {
    compressible: !1,
    extensions: [
      "ubj"
    ]
  },
  "application/ulpfec": {
    source: "iana"
  },
  "application/urc-grpsheet+xml": {
    source: "iana",
    compressible: !0
  },
  "application/urc-ressheet+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rsheet"
    ]
  },
  "application/urc-targetdesc+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "td"
    ]
  },
  "application/urc-uisocketdesc+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vcard+json": {
    source: "iana",
    compressible: !0
  },
  "application/vcard+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vemmi": {
    source: "iana"
  },
  "application/vividence.scriptfile": {
    source: "apache"
  },
  "application/vnd.1000minds.decision-model+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "1km"
    ]
  },
  "application/vnd.3gpp-prose+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp-prose-pc3ch+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp-v2x-local-service-information": {
    source: "iana"
  },
  "application/vnd.3gpp.5gnas": {
    source: "iana"
  },
  "application/vnd.3gpp.access-transfer-events+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.bsf+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.gmop+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.gtpc": {
    source: "iana"
  },
  "application/vnd.3gpp.interworking-data": {
    source: "iana"
  },
  "application/vnd.3gpp.lpp": {
    source: "iana"
  },
  "application/vnd.3gpp.mc-signalling-ear": {
    source: "iana"
  },
  "application/vnd.3gpp.mcdata-affiliation-command+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcdata-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcdata-payload": {
    source: "iana"
  },
  "application/vnd.3gpp.mcdata-service-config+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcdata-signalling": {
    source: "iana"
  },
  "application/vnd.3gpp.mcdata-ue-config+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcdata-user-profile+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-affiliation-command+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-floor-request+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-location-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-mbms-usage-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-service-config+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-signed+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-ue-config+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-ue-init-config+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-user-profile+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcvideo-affiliation-command+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcvideo-affiliation-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcvideo-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcvideo-location-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcvideo-mbms-usage-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcvideo-service-config+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcvideo-transmission-request+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcvideo-ue-config+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcvideo-user-profile+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mid-call+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.ngap": {
    source: "iana"
  },
  "application/vnd.3gpp.pfcp": {
    source: "iana"
  },
  "application/vnd.3gpp.pic-bw-large": {
    source: "iana",
    extensions: [
      "plb"
    ]
  },
  "application/vnd.3gpp.pic-bw-small": {
    source: "iana",
    extensions: [
      "psb"
    ]
  },
  "application/vnd.3gpp.pic-bw-var": {
    source: "iana",
    extensions: [
      "pvb"
    ]
  },
  "application/vnd.3gpp.s1ap": {
    source: "iana"
  },
  "application/vnd.3gpp.sms": {
    source: "iana"
  },
  "application/vnd.3gpp.sms+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.srvcc-ext+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.srvcc-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.state-and-event-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.ussd+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp2.bcmcsinfo+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp2.sms": {
    source: "iana"
  },
  "application/vnd.3gpp2.tcap": {
    source: "iana",
    extensions: [
      "tcap"
    ]
  },
  "application/vnd.3lightssoftware.imagescal": {
    source: "iana"
  },
  "application/vnd.3m.post-it-notes": {
    source: "iana",
    extensions: [
      "pwn"
    ]
  },
  "application/vnd.accpac.simply.aso": {
    source: "iana",
    extensions: [
      "aso"
    ]
  },
  "application/vnd.accpac.simply.imp": {
    source: "iana",
    extensions: [
      "imp"
    ]
  },
  "application/vnd.acucobol": {
    source: "iana",
    extensions: [
      "acu"
    ]
  },
  "application/vnd.acucorp": {
    source: "iana",
    extensions: [
      "atc",
      "acutc"
    ]
  },
  "application/vnd.adobe.air-application-installer-package+zip": {
    source: "apache",
    compressible: !1,
    extensions: [
      "air"
    ]
  },
  "application/vnd.adobe.flash.movie": {
    source: "iana"
  },
  "application/vnd.adobe.formscentral.fcdt": {
    source: "iana",
    extensions: [
      "fcdt"
    ]
  },
  "application/vnd.adobe.fxp": {
    source: "iana",
    extensions: [
      "fxp",
      "fxpl"
    ]
  },
  "application/vnd.adobe.partial-upload": {
    source: "iana"
  },
  "application/vnd.adobe.xdp+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xdp"
    ]
  },
  "application/vnd.adobe.xfdf": {
    source: "iana",
    extensions: [
      "xfdf"
    ]
  },
  "application/vnd.aether.imp": {
    source: "iana"
  },
  "application/vnd.afpc.afplinedata": {
    source: "iana"
  },
  "application/vnd.afpc.afplinedata-pagedef": {
    source: "iana"
  },
  "application/vnd.afpc.cmoca-cmresource": {
    source: "iana"
  },
  "application/vnd.afpc.foca-charset": {
    source: "iana"
  },
  "application/vnd.afpc.foca-codedfont": {
    source: "iana"
  },
  "application/vnd.afpc.foca-codepage": {
    source: "iana"
  },
  "application/vnd.afpc.modca": {
    source: "iana"
  },
  "application/vnd.afpc.modca-cmtable": {
    source: "iana"
  },
  "application/vnd.afpc.modca-formdef": {
    source: "iana"
  },
  "application/vnd.afpc.modca-mediummap": {
    source: "iana"
  },
  "application/vnd.afpc.modca-objectcontainer": {
    source: "iana"
  },
  "application/vnd.afpc.modca-overlay": {
    source: "iana"
  },
  "application/vnd.afpc.modca-pagesegment": {
    source: "iana"
  },
  "application/vnd.age": {
    source: "iana",
    extensions: [
      "age"
    ]
  },
  "application/vnd.ah-barcode": {
    source: "iana"
  },
  "application/vnd.ahead.space": {
    source: "iana",
    extensions: [
      "ahead"
    ]
  },
  "application/vnd.airzip.filesecure.azf": {
    source: "iana",
    extensions: [
      "azf"
    ]
  },
  "application/vnd.airzip.filesecure.azs": {
    source: "iana",
    extensions: [
      "azs"
    ]
  },
  "application/vnd.amadeus+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.amazon.ebook": {
    source: "apache",
    extensions: [
      "azw"
    ]
  },
  "application/vnd.amazon.mobi8-ebook": {
    source: "iana"
  },
  "application/vnd.americandynamics.acc": {
    source: "iana",
    extensions: [
      "acc"
    ]
  },
  "application/vnd.amiga.ami": {
    source: "iana",
    extensions: [
      "ami"
    ]
  },
  "application/vnd.amundsen.maze+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.android.ota": {
    source: "iana"
  },
  "application/vnd.android.package-archive": {
    source: "apache",
    compressible: !1,
    extensions: [
      "apk"
    ]
  },
  "application/vnd.anki": {
    source: "iana"
  },
  "application/vnd.anser-web-certificate-issue-initiation": {
    source: "iana",
    extensions: [
      "cii"
    ]
  },
  "application/vnd.anser-web-funds-transfer-initiation": {
    source: "apache",
    extensions: [
      "fti"
    ]
  },
  "application/vnd.antix.game-component": {
    source: "iana",
    extensions: [
      "atx"
    ]
  },
  "application/vnd.apache.arrow.file": {
    source: "iana"
  },
  "application/vnd.apache.arrow.stream": {
    source: "iana"
  },
  "application/vnd.apache.thrift.binary": {
    source: "iana"
  },
  "application/vnd.apache.thrift.compact": {
    source: "iana"
  },
  "application/vnd.apache.thrift.json": {
    source: "iana"
  },
  "application/vnd.api+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.aplextor.warrp+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.apothekende.reservation+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.apple.installer+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mpkg"
    ]
  },
  "application/vnd.apple.keynote": {
    source: "iana",
    extensions: [
      "key"
    ]
  },
  "application/vnd.apple.mpegurl": {
    source: "iana",
    extensions: [
      "m3u8"
    ]
  },
  "application/vnd.apple.numbers": {
    source: "iana",
    extensions: [
      "numbers"
    ]
  },
  "application/vnd.apple.pages": {
    source: "iana",
    extensions: [
      "pages"
    ]
  },
  "application/vnd.apple.pkpass": {
    compressible: !1,
    extensions: [
      "pkpass"
    ]
  },
  "application/vnd.arastra.swi": {
    source: "iana"
  },
  "application/vnd.aristanetworks.swi": {
    source: "iana",
    extensions: [
      "swi"
    ]
  },
  "application/vnd.artisan+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.artsquare": {
    source: "iana"
  },
  "application/vnd.astraea-software.iota": {
    source: "iana",
    extensions: [
      "iota"
    ]
  },
  "application/vnd.audiograph": {
    source: "iana",
    extensions: [
      "aep"
    ]
  },
  "application/vnd.autopackage": {
    source: "iana"
  },
  "application/vnd.avalon+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.avistar+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.balsamiq.bmml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "bmml"
    ]
  },
  "application/vnd.balsamiq.bmpr": {
    source: "iana"
  },
  "application/vnd.banana-accounting": {
    source: "iana"
  },
  "application/vnd.bbf.usp.error": {
    source: "iana"
  },
  "application/vnd.bbf.usp.msg": {
    source: "iana"
  },
  "application/vnd.bbf.usp.msg+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.bekitzur-stech+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.bint.med-content": {
    source: "iana"
  },
  "application/vnd.biopax.rdf+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.blink-idb-value-wrapper": {
    source: "iana"
  },
  "application/vnd.blueice.multipass": {
    source: "iana",
    extensions: [
      "mpm"
    ]
  },
  "application/vnd.bluetooth.ep.oob": {
    source: "iana"
  },
  "application/vnd.bluetooth.le.oob": {
    source: "iana"
  },
  "application/vnd.bmi": {
    source: "iana",
    extensions: [
      "bmi"
    ]
  },
  "application/vnd.bpf": {
    source: "iana"
  },
  "application/vnd.bpf3": {
    source: "iana"
  },
  "application/vnd.businessobjects": {
    source: "iana",
    extensions: [
      "rep"
    ]
  },
  "application/vnd.byu.uapi+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.cab-jscript": {
    source: "iana"
  },
  "application/vnd.canon-cpdl": {
    source: "iana"
  },
  "application/vnd.canon-lips": {
    source: "iana"
  },
  "application/vnd.capasystems-pg+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.cendio.thinlinc.clientconf": {
    source: "iana"
  },
  "application/vnd.century-systems.tcp_stream": {
    source: "iana"
  },
  "application/vnd.chemdraw+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "cdxml"
    ]
  },
  "application/vnd.chess-pgn": {
    source: "iana"
  },
  "application/vnd.chipnuts.karaoke-mmd": {
    source: "iana",
    extensions: [
      "mmd"
    ]
  },
  "application/vnd.ciedi": {
    source: "iana"
  },
  "application/vnd.cinderella": {
    source: "iana",
    extensions: [
      "cdy"
    ]
  },
  "application/vnd.cirpack.isdn-ext": {
    source: "iana"
  },
  "application/vnd.citationstyles.style+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "csl"
    ]
  },
  "application/vnd.claymore": {
    source: "iana",
    extensions: [
      "cla"
    ]
  },
  "application/vnd.cloanto.rp9": {
    source: "iana",
    extensions: [
      "rp9"
    ]
  },
  "application/vnd.clonk.c4group": {
    source: "iana",
    extensions: [
      "c4g",
      "c4d",
      "c4f",
      "c4p",
      "c4u"
    ]
  },
  "application/vnd.cluetrust.cartomobile-config": {
    source: "iana",
    extensions: [
      "c11amc"
    ]
  },
  "application/vnd.cluetrust.cartomobile-config-pkg": {
    source: "iana",
    extensions: [
      "c11amz"
    ]
  },
  "application/vnd.coffeescript": {
    source: "iana"
  },
  "application/vnd.collabio.xodocuments.document": {
    source: "iana"
  },
  "application/vnd.collabio.xodocuments.document-template": {
    source: "iana"
  },
  "application/vnd.collabio.xodocuments.presentation": {
    source: "iana"
  },
  "application/vnd.collabio.xodocuments.presentation-template": {
    source: "iana"
  },
  "application/vnd.collabio.xodocuments.spreadsheet": {
    source: "iana"
  },
  "application/vnd.collabio.xodocuments.spreadsheet-template": {
    source: "iana"
  },
  "application/vnd.collection+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.collection.doc+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.collection.next+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.comicbook+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.comicbook-rar": {
    source: "iana"
  },
  "application/vnd.commerce-battelle": {
    source: "iana"
  },
  "application/vnd.commonspace": {
    source: "iana",
    extensions: [
      "csp"
    ]
  },
  "application/vnd.contact.cmsg": {
    source: "iana",
    extensions: [
      "cdbcmsg"
    ]
  },
  "application/vnd.coreos.ignition+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.cosmocaller": {
    source: "iana",
    extensions: [
      "cmc"
    ]
  },
  "application/vnd.crick.clicker": {
    source: "iana",
    extensions: [
      "clkx"
    ]
  },
  "application/vnd.crick.clicker.keyboard": {
    source: "iana",
    extensions: [
      "clkk"
    ]
  },
  "application/vnd.crick.clicker.palette": {
    source: "iana",
    extensions: [
      "clkp"
    ]
  },
  "application/vnd.crick.clicker.template": {
    source: "iana",
    extensions: [
      "clkt"
    ]
  },
  "application/vnd.crick.clicker.wordbank": {
    source: "iana",
    extensions: [
      "clkw"
    ]
  },
  "application/vnd.criticaltools.wbs+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "wbs"
    ]
  },
  "application/vnd.cryptii.pipe+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.crypto-shade-file": {
    source: "iana"
  },
  "application/vnd.cryptomator.encrypted": {
    source: "iana"
  },
  "application/vnd.cryptomator.vault": {
    source: "iana"
  },
  "application/vnd.ctc-posml": {
    source: "iana",
    extensions: [
      "pml"
    ]
  },
  "application/vnd.ctct.ws+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.cups-pdf": {
    source: "iana"
  },
  "application/vnd.cups-postscript": {
    source: "iana"
  },
  "application/vnd.cups-ppd": {
    source: "iana",
    extensions: [
      "ppd"
    ]
  },
  "application/vnd.cups-raster": {
    source: "iana"
  },
  "application/vnd.cups-raw": {
    source: "iana"
  },
  "application/vnd.curl": {
    source: "iana"
  },
  "application/vnd.curl.car": {
    source: "apache",
    extensions: [
      "car"
    ]
  },
  "application/vnd.curl.pcurl": {
    source: "apache",
    extensions: [
      "pcurl"
    ]
  },
  "application/vnd.cyan.dean.root+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.cybank": {
    source: "iana"
  },
  "application/vnd.cyclonedx+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.cyclonedx+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.d2l.coursepackage1p0+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.d3m-dataset": {
    source: "iana"
  },
  "application/vnd.d3m-problem": {
    source: "iana"
  },
  "application/vnd.dart": {
    source: "iana",
    compressible: !0,
    extensions: [
      "dart"
    ]
  },
  "application/vnd.data-vision.rdz": {
    source: "iana",
    extensions: [
      "rdz"
    ]
  },
  "application/vnd.datapackage+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dataresource+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dbf": {
    source: "iana",
    extensions: [
      "dbf"
    ]
  },
  "application/vnd.debian.binary-package": {
    source: "iana"
  },
  "application/vnd.dece.data": {
    source: "iana",
    extensions: [
      "uvf",
      "uvvf",
      "uvd",
      "uvvd"
    ]
  },
  "application/vnd.dece.ttml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "uvt",
      "uvvt"
    ]
  },
  "application/vnd.dece.unspecified": {
    source: "iana",
    extensions: [
      "uvx",
      "uvvx"
    ]
  },
  "application/vnd.dece.zip": {
    source: "iana",
    extensions: [
      "uvz",
      "uvvz"
    ]
  },
  "application/vnd.denovo.fcselayout-link": {
    source: "iana",
    extensions: [
      "fe_launch"
    ]
  },
  "application/vnd.desmume.movie": {
    source: "iana"
  },
  "application/vnd.dir-bi.plate-dl-nosuffix": {
    source: "iana"
  },
  "application/vnd.dm.delegation+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dna": {
    source: "iana",
    extensions: [
      "dna"
    ]
  },
  "application/vnd.document+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dolby.mlp": {
    source: "apache",
    extensions: [
      "mlp"
    ]
  },
  "application/vnd.dolby.mobile.1": {
    source: "iana"
  },
  "application/vnd.dolby.mobile.2": {
    source: "iana"
  },
  "application/vnd.doremir.scorecloud-binary-document": {
    source: "iana"
  },
  "application/vnd.dpgraph": {
    source: "iana",
    extensions: [
      "dpg"
    ]
  },
  "application/vnd.dreamfactory": {
    source: "iana",
    extensions: [
      "dfac"
    ]
  },
  "application/vnd.drive+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ds-keypoint": {
    source: "apache",
    extensions: [
      "kpxx"
    ]
  },
  "application/vnd.dtg.local": {
    source: "iana"
  },
  "application/vnd.dtg.local.flash": {
    source: "iana"
  },
  "application/vnd.dtg.local.html": {
    source: "iana"
  },
  "application/vnd.dvb.ait": {
    source: "iana",
    extensions: [
      "ait"
    ]
  },
  "application/vnd.dvb.dvbisl+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dvb.dvbj": {
    source: "iana"
  },
  "application/vnd.dvb.esgcontainer": {
    source: "iana"
  },
  "application/vnd.dvb.ipdcdftnotifaccess": {
    source: "iana"
  },
  "application/vnd.dvb.ipdcesgaccess": {
    source: "iana"
  },
  "application/vnd.dvb.ipdcesgaccess2": {
    source: "iana"
  },
  "application/vnd.dvb.ipdcesgpdd": {
    source: "iana"
  },
  "application/vnd.dvb.ipdcroaming": {
    source: "iana"
  },
  "application/vnd.dvb.iptv.alfec-base": {
    source: "iana"
  },
  "application/vnd.dvb.iptv.alfec-enhancement": {
    source: "iana"
  },
  "application/vnd.dvb.notif-aggregate-root+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dvb.notif-container+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dvb.notif-generic+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dvb.notif-ia-msglist+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dvb.notif-ia-registration-request+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dvb.notif-ia-registration-response+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dvb.notif-init+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dvb.pfr": {
    source: "iana"
  },
  "application/vnd.dvb.service": {
    source: "iana",
    extensions: [
      "svc"
    ]
  },
  "application/vnd.dxr": {
    source: "iana"
  },
  "application/vnd.dynageo": {
    source: "iana",
    extensions: [
      "geo"
    ]
  },
  "application/vnd.dzr": {
    source: "iana"
  },
  "application/vnd.easykaraoke.cdgdownload": {
    source: "iana"
  },
  "application/vnd.ecdis-update": {
    source: "iana"
  },
  "application/vnd.ecip.rlp": {
    source: "iana"
  },
  "application/vnd.eclipse.ditto+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ecowin.chart": {
    source: "iana",
    extensions: [
      "mag"
    ]
  },
  "application/vnd.ecowin.filerequest": {
    source: "iana"
  },
  "application/vnd.ecowin.fileupdate": {
    source: "iana"
  },
  "application/vnd.ecowin.series": {
    source: "iana"
  },
  "application/vnd.ecowin.seriesrequest": {
    source: "iana"
  },
  "application/vnd.ecowin.seriesupdate": {
    source: "iana"
  },
  "application/vnd.efi.img": {
    source: "iana"
  },
  "application/vnd.efi.iso": {
    source: "iana"
  },
  "application/vnd.emclient.accessrequest+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.enliven": {
    source: "iana",
    extensions: [
      "nml"
    ]
  },
  "application/vnd.enphase.envoy": {
    source: "iana"
  },
  "application/vnd.eprints.data+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.epson.esf": {
    source: "iana",
    extensions: [
      "esf"
    ]
  },
  "application/vnd.epson.msf": {
    source: "iana",
    extensions: [
      "msf"
    ]
  },
  "application/vnd.epson.quickanime": {
    source: "iana",
    extensions: [
      "qam"
    ]
  },
  "application/vnd.epson.salt": {
    source: "iana",
    extensions: [
      "slt"
    ]
  },
  "application/vnd.epson.ssf": {
    source: "iana",
    extensions: [
      "ssf"
    ]
  },
  "application/vnd.ericsson.quickcall": {
    source: "iana"
  },
  "application/vnd.espass-espass+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.eszigno3+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "es3",
      "et3"
    ]
  },
  "application/vnd.etsi.aoc+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.asic-e+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.etsi.asic-s+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.etsi.cug+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.iptvcommand+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.iptvdiscovery+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.iptvprofile+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.iptvsad-bc+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.iptvsad-cod+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.iptvsad-npvr+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.iptvservice+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.iptvsync+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.iptvueprofile+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.mcid+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.mheg5": {
    source: "iana"
  },
  "application/vnd.etsi.overload-control-policy-dataset+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.pstn+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.sci+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.simservs+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.timestamp-token": {
    source: "iana"
  },
  "application/vnd.etsi.tsl+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.tsl.der": {
    source: "iana"
  },
  "application/vnd.eu.kasparian.car+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.eudora.data": {
    source: "iana"
  },
  "application/vnd.evolv.ecig.profile": {
    source: "iana"
  },
  "application/vnd.evolv.ecig.settings": {
    source: "iana"
  },
  "application/vnd.evolv.ecig.theme": {
    source: "iana"
  },
  "application/vnd.exstream-empower+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.exstream-package": {
    source: "iana"
  },
  "application/vnd.ezpix-album": {
    source: "iana",
    extensions: [
      "ez2"
    ]
  },
  "application/vnd.ezpix-package": {
    source: "iana",
    extensions: [
      "ez3"
    ]
  },
  "application/vnd.f-secure.mobile": {
    source: "iana"
  },
  "application/vnd.familysearch.gedcom+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.fastcopy-disk-image": {
    source: "iana"
  },
  "application/vnd.fdf": {
    source: "iana",
    extensions: [
      "fdf"
    ]
  },
  "application/vnd.fdsn.mseed": {
    source: "iana",
    extensions: [
      "mseed"
    ]
  },
  "application/vnd.fdsn.seed": {
    source: "iana",
    extensions: [
      "seed",
      "dataless"
    ]
  },
  "application/vnd.ffsns": {
    source: "iana"
  },
  "application/vnd.ficlab.flb+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.filmit.zfc": {
    source: "iana"
  },
  "application/vnd.fints": {
    source: "iana"
  },
  "application/vnd.firemonkeys.cloudcell": {
    source: "iana"
  },
  "application/vnd.flographit": {
    source: "iana",
    extensions: [
      "gph"
    ]
  },
  "application/vnd.fluxtime.clip": {
    source: "iana",
    extensions: [
      "ftc"
    ]
  },
  "application/vnd.font-fontforge-sfd": {
    source: "iana"
  },
  "application/vnd.framemaker": {
    source: "iana",
    extensions: [
      "fm",
      "frame",
      "maker",
      "book"
    ]
  },
  "application/vnd.frogans.fnc": {
    source: "iana",
    extensions: [
      "fnc"
    ]
  },
  "application/vnd.frogans.ltf": {
    source: "iana",
    extensions: [
      "ltf"
    ]
  },
  "application/vnd.fsc.weblaunch": {
    source: "iana",
    extensions: [
      "fsc"
    ]
  },
  "application/vnd.fujifilm.fb.docuworks": {
    source: "iana"
  },
  "application/vnd.fujifilm.fb.docuworks.binder": {
    source: "iana"
  },
  "application/vnd.fujifilm.fb.docuworks.container": {
    source: "iana"
  },
  "application/vnd.fujifilm.fb.jfi+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.fujitsu.oasys": {
    source: "iana",
    extensions: [
      "oas"
    ]
  },
  "application/vnd.fujitsu.oasys2": {
    source: "iana",
    extensions: [
      "oa2"
    ]
  },
  "application/vnd.fujitsu.oasys3": {
    source: "iana",
    extensions: [
      "oa3"
    ]
  },
  "application/vnd.fujitsu.oasysgp": {
    source: "iana",
    extensions: [
      "fg5"
    ]
  },
  "application/vnd.fujitsu.oasysprs": {
    source: "iana",
    extensions: [
      "bh2"
    ]
  },
  "application/vnd.fujixerox.art-ex": {
    source: "iana"
  },
  "application/vnd.fujixerox.art4": {
    source: "iana"
  },
  "application/vnd.fujixerox.ddd": {
    source: "iana",
    extensions: [
      "ddd"
    ]
  },
  "application/vnd.fujixerox.docuworks": {
    source: "iana",
    extensions: [
      "xdw"
    ]
  },
  "application/vnd.fujixerox.docuworks.binder": {
    source: "iana",
    extensions: [
      "xbd"
    ]
  },
  "application/vnd.fujixerox.docuworks.container": {
    source: "iana"
  },
  "application/vnd.fujixerox.hbpl": {
    source: "iana"
  },
  "application/vnd.fut-misnet": {
    source: "iana"
  },
  "application/vnd.futoin+cbor": {
    source: "iana"
  },
  "application/vnd.futoin+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.fuzzysheet": {
    source: "iana",
    extensions: [
      "fzs"
    ]
  },
  "application/vnd.genomatix.tuxedo": {
    source: "iana",
    extensions: [
      "txd"
    ]
  },
  "application/vnd.gentics.grd+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.geo+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.geocube+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.geogebra.file": {
    source: "iana",
    extensions: [
      "ggb"
    ]
  },
  "application/vnd.geogebra.slides": {
    source: "iana"
  },
  "application/vnd.geogebra.tool": {
    source: "iana",
    extensions: [
      "ggt"
    ]
  },
  "application/vnd.geometry-explorer": {
    source: "iana",
    extensions: [
      "gex",
      "gre"
    ]
  },
  "application/vnd.geonext": {
    source: "iana",
    extensions: [
      "gxt"
    ]
  },
  "application/vnd.geoplan": {
    source: "iana",
    extensions: [
      "g2w"
    ]
  },
  "application/vnd.geospace": {
    source: "iana",
    extensions: [
      "g3w"
    ]
  },
  "application/vnd.gerber": {
    source: "iana"
  },
  "application/vnd.globalplatform.card-content-mgt": {
    source: "iana"
  },
  "application/vnd.globalplatform.card-content-mgt-response": {
    source: "iana"
  },
  "application/vnd.gmx": {
    source: "iana",
    extensions: [
      "gmx"
    ]
  },
  "application/vnd.google-apps.document": {
    compressible: !1,
    extensions: [
      "gdoc"
    ]
  },
  "application/vnd.google-apps.presentation": {
    compressible: !1,
    extensions: [
      "gslides"
    ]
  },
  "application/vnd.google-apps.spreadsheet": {
    compressible: !1,
    extensions: [
      "gsheet"
    ]
  },
  "application/vnd.google-earth.kml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "kml"
    ]
  },
  "application/vnd.google-earth.kmz": {
    source: "iana",
    compressible: !1,
    extensions: [
      "kmz"
    ]
  },
  "application/vnd.gov.sk.e-form+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.gov.sk.e-form+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.gov.sk.xmldatacontainer+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.grafeq": {
    source: "iana",
    extensions: [
      "gqf",
      "gqs"
    ]
  },
  "application/vnd.gridmp": {
    source: "iana"
  },
  "application/vnd.groove-account": {
    source: "iana",
    extensions: [
      "gac"
    ]
  },
  "application/vnd.groove-help": {
    source: "iana",
    extensions: [
      "ghf"
    ]
  },
  "application/vnd.groove-identity-message": {
    source: "iana",
    extensions: [
      "gim"
    ]
  },
  "application/vnd.groove-injector": {
    source: "iana",
    extensions: [
      "grv"
    ]
  },
  "application/vnd.groove-tool-message": {
    source: "iana",
    extensions: [
      "gtm"
    ]
  },
  "application/vnd.groove-tool-template": {
    source: "iana",
    extensions: [
      "tpl"
    ]
  },
  "application/vnd.groove-vcard": {
    source: "iana",
    extensions: [
      "vcg"
    ]
  },
  "application/vnd.hal+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.hal+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "hal"
    ]
  },
  "application/vnd.handheld-entertainment+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "zmm"
    ]
  },
  "application/vnd.hbci": {
    source: "iana",
    extensions: [
      "hbci"
    ]
  },
  "application/vnd.hc+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.hcl-bireports": {
    source: "iana"
  },
  "application/vnd.hdt": {
    source: "iana"
  },
  "application/vnd.heroku+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.hhe.lesson-player": {
    source: "iana",
    extensions: [
      "les"
    ]
  },
  "application/vnd.hl7cda+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/vnd.hl7v2+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/vnd.hp-hpgl": {
    source: "iana",
    extensions: [
      "hpgl"
    ]
  },
  "application/vnd.hp-hpid": {
    source: "iana",
    extensions: [
      "hpid"
    ]
  },
  "application/vnd.hp-hps": {
    source: "iana",
    extensions: [
      "hps"
    ]
  },
  "application/vnd.hp-jlyt": {
    source: "iana",
    extensions: [
      "jlt"
    ]
  },
  "application/vnd.hp-pcl": {
    source: "iana",
    extensions: [
      "pcl"
    ]
  },
  "application/vnd.hp-pclxl": {
    source: "iana",
    extensions: [
      "pclxl"
    ]
  },
  "application/vnd.httphone": {
    source: "iana"
  },
  "application/vnd.hydrostatix.sof-data": {
    source: "iana",
    extensions: [
      "sfd-hdstx"
    ]
  },
  "application/vnd.hyper+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.hyper-item+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.hyperdrive+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.hzn-3d-crossword": {
    source: "iana"
  },
  "application/vnd.ibm.afplinedata": {
    source: "iana"
  },
  "application/vnd.ibm.electronic-media": {
    source: "iana"
  },
  "application/vnd.ibm.minipay": {
    source: "iana",
    extensions: [
      "mpy"
    ]
  },
  "application/vnd.ibm.modcap": {
    source: "iana",
    extensions: [
      "afp",
      "listafp",
      "list3820"
    ]
  },
  "application/vnd.ibm.rights-management": {
    source: "iana",
    extensions: [
      "irm"
    ]
  },
  "application/vnd.ibm.secure-container": {
    source: "iana",
    extensions: [
      "sc"
    ]
  },
  "application/vnd.iccprofile": {
    source: "iana",
    extensions: [
      "icc",
      "icm"
    ]
  },
  "application/vnd.ieee.1905": {
    source: "iana"
  },
  "application/vnd.igloader": {
    source: "iana",
    extensions: [
      "igl"
    ]
  },
  "application/vnd.imagemeter.folder+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.imagemeter.image+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.immervision-ivp": {
    source: "iana",
    extensions: [
      "ivp"
    ]
  },
  "application/vnd.immervision-ivu": {
    source: "iana",
    extensions: [
      "ivu"
    ]
  },
  "application/vnd.ims.imsccv1p1": {
    source: "iana"
  },
  "application/vnd.ims.imsccv1p2": {
    source: "iana"
  },
  "application/vnd.ims.imsccv1p3": {
    source: "iana"
  },
  "application/vnd.ims.lis.v2.result+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ims.lti.v2.toolconsumerprofile+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ims.lti.v2.toolproxy+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ims.lti.v2.toolproxy.id+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ims.lti.v2.toolsettings+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ims.lti.v2.toolsettings.simple+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.informedcontrol.rms+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.informix-visionary": {
    source: "iana"
  },
  "application/vnd.infotech.project": {
    source: "iana"
  },
  "application/vnd.infotech.project+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.innopath.wamp.notification": {
    source: "iana"
  },
  "application/vnd.insors.igm": {
    source: "iana",
    extensions: [
      "igm"
    ]
  },
  "application/vnd.intercon.formnet": {
    source: "iana",
    extensions: [
      "xpw",
      "xpx"
    ]
  },
  "application/vnd.intergeo": {
    source: "iana",
    extensions: [
      "i2g"
    ]
  },
  "application/vnd.intertrust.digibox": {
    source: "iana"
  },
  "application/vnd.intertrust.nncp": {
    source: "iana"
  },
  "application/vnd.intu.qbo": {
    source: "iana",
    extensions: [
      "qbo"
    ]
  },
  "application/vnd.intu.qfx": {
    source: "iana",
    extensions: [
      "qfx"
    ]
  },
  "application/vnd.iptc.g2.catalogitem+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.iptc.g2.conceptitem+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.iptc.g2.knowledgeitem+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.iptc.g2.newsitem+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.iptc.g2.newsmessage+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.iptc.g2.packageitem+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.iptc.g2.planningitem+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ipunplugged.rcprofile": {
    source: "iana",
    extensions: [
      "rcprofile"
    ]
  },
  "application/vnd.irepository.package+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "irp"
    ]
  },
  "application/vnd.is-xpr": {
    source: "iana",
    extensions: [
      "xpr"
    ]
  },
  "application/vnd.isac.fcs": {
    source: "iana",
    extensions: [
      "fcs"
    ]
  },
  "application/vnd.iso11783-10+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.jam": {
    source: "iana",
    extensions: [
      "jam"
    ]
  },
  "application/vnd.japannet-directory-service": {
    source: "iana"
  },
  "application/vnd.japannet-jpnstore-wakeup": {
    source: "iana"
  },
  "application/vnd.japannet-payment-wakeup": {
    source: "iana"
  },
  "application/vnd.japannet-registration": {
    source: "iana"
  },
  "application/vnd.japannet-registration-wakeup": {
    source: "iana"
  },
  "application/vnd.japannet-setstore-wakeup": {
    source: "iana"
  },
  "application/vnd.japannet-verification": {
    source: "iana"
  },
  "application/vnd.japannet-verification-wakeup": {
    source: "iana"
  },
  "application/vnd.jcp.javame.midlet-rms": {
    source: "iana",
    extensions: [
      "rms"
    ]
  },
  "application/vnd.jisp": {
    source: "iana",
    extensions: [
      "jisp"
    ]
  },
  "application/vnd.joost.joda-archive": {
    source: "iana",
    extensions: [
      "joda"
    ]
  },
  "application/vnd.jsk.isdn-ngn": {
    source: "iana"
  },
  "application/vnd.kahootz": {
    source: "iana",
    extensions: [
      "ktz",
      "ktr"
    ]
  },
  "application/vnd.kde.karbon": {
    source: "iana",
    extensions: [
      "karbon"
    ]
  },
  "application/vnd.kde.kchart": {
    source: "iana",
    extensions: [
      "chrt"
    ]
  },
  "application/vnd.kde.kformula": {
    source: "iana",
    extensions: [
      "kfo"
    ]
  },
  "application/vnd.kde.kivio": {
    source: "iana",
    extensions: [
      "flw"
    ]
  },
  "application/vnd.kde.kontour": {
    source: "iana",
    extensions: [
      "kon"
    ]
  },
  "application/vnd.kde.kpresenter": {
    source: "iana",
    extensions: [
      "kpr",
      "kpt"
    ]
  },
  "application/vnd.kde.kspread": {
    source: "iana",
    extensions: [
      "ksp"
    ]
  },
  "application/vnd.kde.kword": {
    source: "iana",
    extensions: [
      "kwd",
      "kwt"
    ]
  },
  "application/vnd.kenameaapp": {
    source: "iana",
    extensions: [
      "htke"
    ]
  },
  "application/vnd.kidspiration": {
    source: "iana",
    extensions: [
      "kia"
    ]
  },
  "application/vnd.kinar": {
    source: "iana",
    extensions: [
      "kne",
      "knp"
    ]
  },
  "application/vnd.koan": {
    source: "iana",
    extensions: [
      "skp",
      "skd",
      "skt",
      "skm"
    ]
  },
  "application/vnd.kodak-descriptor": {
    source: "iana",
    extensions: [
      "sse"
    ]
  },
  "application/vnd.las": {
    source: "iana"
  },
  "application/vnd.las.las+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.las.las+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "lasxml"
    ]
  },
  "application/vnd.laszip": {
    source: "iana"
  },
  "application/vnd.leap+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.liberty-request+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.llamagraphics.life-balance.desktop": {
    source: "iana",
    extensions: [
      "lbd"
    ]
  },
  "application/vnd.llamagraphics.life-balance.exchange+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "lbe"
    ]
  },
  "application/vnd.logipipe.circuit+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.loom": {
    source: "iana"
  },
  "application/vnd.lotus-1-2-3": {
    source: "iana",
    extensions: [
      "123"
    ]
  },
  "application/vnd.lotus-approach": {
    source: "iana",
    extensions: [
      "apr"
    ]
  },
  "application/vnd.lotus-freelance": {
    source: "iana",
    extensions: [
      "pre"
    ]
  },
  "application/vnd.lotus-notes": {
    source: "iana",
    extensions: [
      "nsf"
    ]
  },
  "application/vnd.lotus-organizer": {
    source: "iana",
    extensions: [
      "org"
    ]
  },
  "application/vnd.lotus-screencam": {
    source: "iana",
    extensions: [
      "scm"
    ]
  },
  "application/vnd.lotus-wordpro": {
    source: "iana",
    extensions: [
      "lwp"
    ]
  },
  "application/vnd.macports.portpkg": {
    source: "iana",
    extensions: [
      "portpkg"
    ]
  },
  "application/vnd.mapbox-vector-tile": {
    source: "iana",
    extensions: [
      "mvt"
    ]
  },
  "application/vnd.marlin.drm.actiontoken+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.marlin.drm.conftoken+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.marlin.drm.license+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.marlin.drm.mdcf": {
    source: "iana"
  },
  "application/vnd.mason+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.maxar.archive.3tz+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.maxmind.maxmind-db": {
    source: "iana"
  },
  "application/vnd.mcd": {
    source: "iana",
    extensions: [
      "mcd"
    ]
  },
  "application/vnd.medcalcdata": {
    source: "iana",
    extensions: [
      "mc1"
    ]
  },
  "application/vnd.mediastation.cdkey": {
    source: "iana",
    extensions: [
      "cdkey"
    ]
  },
  "application/vnd.meridian-slingshot": {
    source: "iana"
  },
  "application/vnd.mfer": {
    source: "iana",
    extensions: [
      "mwf"
    ]
  },
  "application/vnd.mfmp": {
    source: "iana",
    extensions: [
      "mfm"
    ]
  },
  "application/vnd.micro+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.micrografx.flo": {
    source: "iana",
    extensions: [
      "flo"
    ]
  },
  "application/vnd.micrografx.igx": {
    source: "iana",
    extensions: [
      "igx"
    ]
  },
  "application/vnd.microsoft.portable-executable": {
    source: "iana"
  },
  "application/vnd.microsoft.windows.thumbnail-cache": {
    source: "iana"
  },
  "application/vnd.miele+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.mif": {
    source: "iana",
    extensions: [
      "mif"
    ]
  },
  "application/vnd.minisoft-hp3000-save": {
    source: "iana"
  },
  "application/vnd.mitsubishi.misty-guard.trustweb": {
    source: "iana"
  },
  "application/vnd.mobius.daf": {
    source: "iana",
    extensions: [
      "daf"
    ]
  },
  "application/vnd.mobius.dis": {
    source: "iana",
    extensions: [
      "dis"
    ]
  },
  "application/vnd.mobius.mbk": {
    source: "iana",
    extensions: [
      "mbk"
    ]
  },
  "application/vnd.mobius.mqy": {
    source: "iana",
    extensions: [
      "mqy"
    ]
  },
  "application/vnd.mobius.msl": {
    source: "iana",
    extensions: [
      "msl"
    ]
  },
  "application/vnd.mobius.plc": {
    source: "iana",
    extensions: [
      "plc"
    ]
  },
  "application/vnd.mobius.txf": {
    source: "iana",
    extensions: [
      "txf"
    ]
  },
  "application/vnd.mophun.application": {
    source: "iana",
    extensions: [
      "mpn"
    ]
  },
  "application/vnd.mophun.certificate": {
    source: "iana",
    extensions: [
      "mpc"
    ]
  },
  "application/vnd.motorola.flexsuite": {
    source: "iana"
  },
  "application/vnd.motorola.flexsuite.adsi": {
    source: "iana"
  },
  "application/vnd.motorola.flexsuite.fis": {
    source: "iana"
  },
  "application/vnd.motorola.flexsuite.gotap": {
    source: "iana"
  },
  "application/vnd.motorola.flexsuite.kmr": {
    source: "iana"
  },
  "application/vnd.motorola.flexsuite.ttc": {
    source: "iana"
  },
  "application/vnd.motorola.flexsuite.wem": {
    source: "iana"
  },
  "application/vnd.motorola.iprm": {
    source: "iana"
  },
  "application/vnd.mozilla.xul+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xul"
    ]
  },
  "application/vnd.ms-3mfdocument": {
    source: "iana"
  },
  "application/vnd.ms-artgalry": {
    source: "iana",
    extensions: [
      "cil"
    ]
  },
  "application/vnd.ms-asf": {
    source: "iana"
  },
  "application/vnd.ms-cab-compressed": {
    source: "iana",
    extensions: [
      "cab"
    ]
  },
  "application/vnd.ms-color.iccprofile": {
    source: "apache"
  },
  "application/vnd.ms-excel": {
    source: "iana",
    compressible: !1,
    extensions: [
      "xls",
      "xlm",
      "xla",
      "xlc",
      "xlt",
      "xlw"
    ]
  },
  "application/vnd.ms-excel.addin.macroenabled.12": {
    source: "iana",
    extensions: [
      "xlam"
    ]
  },
  "application/vnd.ms-excel.sheet.binary.macroenabled.12": {
    source: "iana",
    extensions: [
      "xlsb"
    ]
  },
  "application/vnd.ms-excel.sheet.macroenabled.12": {
    source: "iana",
    extensions: [
      "xlsm"
    ]
  },
  "application/vnd.ms-excel.template.macroenabled.12": {
    source: "iana",
    extensions: [
      "xltm"
    ]
  },
  "application/vnd.ms-fontobject": {
    source: "iana",
    compressible: !0,
    extensions: [
      "eot"
    ]
  },
  "application/vnd.ms-htmlhelp": {
    source: "iana",
    extensions: [
      "chm"
    ]
  },
  "application/vnd.ms-ims": {
    source: "iana",
    extensions: [
      "ims"
    ]
  },
  "application/vnd.ms-lrm": {
    source: "iana",
    extensions: [
      "lrm"
    ]
  },
  "application/vnd.ms-office.activex+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ms-officetheme": {
    source: "iana",
    extensions: [
      "thmx"
    ]
  },
  "application/vnd.ms-opentype": {
    source: "apache",
    compressible: !0
  },
  "application/vnd.ms-outlook": {
    compressible: !1,
    extensions: [
      "msg"
    ]
  },
  "application/vnd.ms-package.obfuscated-opentype": {
    source: "apache"
  },
  "application/vnd.ms-pki.seccat": {
    source: "apache",
    extensions: [
      "cat"
    ]
  },
  "application/vnd.ms-pki.stl": {
    source: "apache",
    extensions: [
      "stl"
    ]
  },
  "application/vnd.ms-playready.initiator+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ms-powerpoint": {
    source: "iana",
    compressible: !1,
    extensions: [
      "ppt",
      "pps",
      "pot"
    ]
  },
  "application/vnd.ms-powerpoint.addin.macroenabled.12": {
    source: "iana",
    extensions: [
      "ppam"
    ]
  },
  "application/vnd.ms-powerpoint.presentation.macroenabled.12": {
    source: "iana",
    extensions: [
      "pptm"
    ]
  },
  "application/vnd.ms-powerpoint.slide.macroenabled.12": {
    source: "iana",
    extensions: [
      "sldm"
    ]
  },
  "application/vnd.ms-powerpoint.slideshow.macroenabled.12": {
    source: "iana",
    extensions: [
      "ppsm"
    ]
  },
  "application/vnd.ms-powerpoint.template.macroenabled.12": {
    source: "iana",
    extensions: [
      "potm"
    ]
  },
  "application/vnd.ms-printdevicecapabilities+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ms-printing.printticket+xml": {
    source: "apache",
    compressible: !0
  },
  "application/vnd.ms-printschematicket+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ms-project": {
    source: "iana",
    extensions: [
      "mpp",
      "mpt"
    ]
  },
  "application/vnd.ms-tnef": {
    source: "iana"
  },
  "application/vnd.ms-windows.devicepairing": {
    source: "iana"
  },
  "application/vnd.ms-windows.nwprinting.oob": {
    source: "iana"
  },
  "application/vnd.ms-windows.printerpairing": {
    source: "iana"
  },
  "application/vnd.ms-windows.wsd.oob": {
    source: "iana"
  },
  "application/vnd.ms-wmdrm.lic-chlg-req": {
    source: "iana"
  },
  "application/vnd.ms-wmdrm.lic-resp": {
    source: "iana"
  },
  "application/vnd.ms-wmdrm.meter-chlg-req": {
    source: "iana"
  },
  "application/vnd.ms-wmdrm.meter-resp": {
    source: "iana"
  },
  "application/vnd.ms-word.document.macroenabled.12": {
    source: "iana",
    extensions: [
      "docm"
    ]
  },
  "application/vnd.ms-word.template.macroenabled.12": {
    source: "iana",
    extensions: [
      "dotm"
    ]
  },
  "application/vnd.ms-works": {
    source: "iana",
    extensions: [
      "wps",
      "wks",
      "wcm",
      "wdb"
    ]
  },
  "application/vnd.ms-wpl": {
    source: "iana",
    extensions: [
      "wpl"
    ]
  },
  "application/vnd.ms-xpsdocument": {
    source: "iana",
    compressible: !1,
    extensions: [
      "xps"
    ]
  },
  "application/vnd.msa-disk-image": {
    source: "iana"
  },
  "application/vnd.mseq": {
    source: "iana",
    extensions: [
      "mseq"
    ]
  },
  "application/vnd.msign": {
    source: "iana"
  },
  "application/vnd.multiad.creator": {
    source: "iana"
  },
  "application/vnd.multiad.creator.cif": {
    source: "iana"
  },
  "application/vnd.music-niff": {
    source: "iana"
  },
  "application/vnd.musician": {
    source: "iana",
    extensions: [
      "mus"
    ]
  },
  "application/vnd.muvee.style": {
    source: "iana",
    extensions: [
      "msty"
    ]
  },
  "application/vnd.mynfc": {
    source: "iana",
    extensions: [
      "taglet"
    ]
  },
  "application/vnd.nacamar.ybrid+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ncd.control": {
    source: "iana"
  },
  "application/vnd.ncd.reference": {
    source: "iana"
  },
  "application/vnd.nearst.inv+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.nebumind.line": {
    source: "iana"
  },
  "application/vnd.nervana": {
    source: "iana"
  },
  "application/vnd.netfpx": {
    source: "iana"
  },
  "application/vnd.neurolanguage.nlu": {
    source: "iana",
    extensions: [
      "nlu"
    ]
  },
  "application/vnd.nimn": {
    source: "iana"
  },
  "application/vnd.nintendo.nitro.rom": {
    source: "iana"
  },
  "application/vnd.nintendo.snes.rom": {
    source: "iana"
  },
  "application/vnd.nitf": {
    source: "iana",
    extensions: [
      "ntf",
      "nitf"
    ]
  },
  "application/vnd.noblenet-directory": {
    source: "iana",
    extensions: [
      "nnd"
    ]
  },
  "application/vnd.noblenet-sealer": {
    source: "iana",
    extensions: [
      "nns"
    ]
  },
  "application/vnd.noblenet-web": {
    source: "iana",
    extensions: [
      "nnw"
    ]
  },
  "application/vnd.nokia.catalogs": {
    source: "iana"
  },
  "application/vnd.nokia.conml+wbxml": {
    source: "iana"
  },
  "application/vnd.nokia.conml+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.nokia.iptv.config+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.nokia.isds-radio-presets": {
    source: "iana"
  },
  "application/vnd.nokia.landmark+wbxml": {
    source: "iana"
  },
  "application/vnd.nokia.landmark+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.nokia.landmarkcollection+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.nokia.n-gage.ac+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "ac"
    ]
  },
  "application/vnd.nokia.n-gage.data": {
    source: "iana",
    extensions: [
      "ngdat"
    ]
  },
  "application/vnd.nokia.n-gage.symbian.install": {
    source: "iana",
    extensions: [
      "n-gage"
    ]
  },
  "application/vnd.nokia.ncd": {
    source: "iana"
  },
  "application/vnd.nokia.pcd+wbxml": {
    source: "iana"
  },
  "application/vnd.nokia.pcd+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.nokia.radio-preset": {
    source: "iana",
    extensions: [
      "rpst"
    ]
  },
  "application/vnd.nokia.radio-presets": {
    source: "iana",
    extensions: [
      "rpss"
    ]
  },
  "application/vnd.novadigm.edm": {
    source: "iana",
    extensions: [
      "edm"
    ]
  },
  "application/vnd.novadigm.edx": {
    source: "iana",
    extensions: [
      "edx"
    ]
  },
  "application/vnd.novadigm.ext": {
    source: "iana",
    extensions: [
      "ext"
    ]
  },
  "application/vnd.ntt-local.content-share": {
    source: "iana"
  },
  "application/vnd.ntt-local.file-transfer": {
    source: "iana"
  },
  "application/vnd.ntt-local.ogw_remote-access": {
    source: "iana"
  },
  "application/vnd.ntt-local.sip-ta_remote": {
    source: "iana"
  },
  "application/vnd.ntt-local.sip-ta_tcp_stream": {
    source: "iana"
  },
  "application/vnd.oasis.opendocument.chart": {
    source: "iana",
    extensions: [
      "odc"
    ]
  },
  "application/vnd.oasis.opendocument.chart-template": {
    source: "iana",
    extensions: [
      "otc"
    ]
  },
  "application/vnd.oasis.opendocument.database": {
    source: "iana",
    extensions: [
      "odb"
    ]
  },
  "application/vnd.oasis.opendocument.formula": {
    source: "iana",
    extensions: [
      "odf"
    ]
  },
  "application/vnd.oasis.opendocument.formula-template": {
    source: "iana",
    extensions: [
      "odft"
    ]
  },
  "application/vnd.oasis.opendocument.graphics": {
    source: "iana",
    compressible: !1,
    extensions: [
      "odg"
    ]
  },
  "application/vnd.oasis.opendocument.graphics-template": {
    source: "iana",
    extensions: [
      "otg"
    ]
  },
  "application/vnd.oasis.opendocument.image": {
    source: "iana",
    extensions: [
      "odi"
    ]
  },
  "application/vnd.oasis.opendocument.image-template": {
    source: "iana",
    extensions: [
      "oti"
    ]
  },
  "application/vnd.oasis.opendocument.presentation": {
    source: "iana",
    compressible: !1,
    extensions: [
      "odp"
    ]
  },
  "application/vnd.oasis.opendocument.presentation-template": {
    source: "iana",
    extensions: [
      "otp"
    ]
  },
  "application/vnd.oasis.opendocument.spreadsheet": {
    source: "iana",
    compressible: !1,
    extensions: [
      "ods"
    ]
  },
  "application/vnd.oasis.opendocument.spreadsheet-template": {
    source: "iana",
    extensions: [
      "ots"
    ]
  },
  "application/vnd.oasis.opendocument.text": {
    source: "iana",
    compressible: !1,
    extensions: [
      "odt"
    ]
  },
  "application/vnd.oasis.opendocument.text-master": {
    source: "iana",
    extensions: [
      "odm"
    ]
  },
  "application/vnd.oasis.opendocument.text-template": {
    source: "iana",
    extensions: [
      "ott"
    ]
  },
  "application/vnd.oasis.opendocument.text-web": {
    source: "iana",
    extensions: [
      "oth"
    ]
  },
  "application/vnd.obn": {
    source: "iana"
  },
  "application/vnd.ocf+cbor": {
    source: "iana"
  },
  "application/vnd.oci.image.manifest.v1+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oftn.l10n+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oipf.contentaccessdownload+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oipf.contentaccessstreaming+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oipf.cspg-hexbinary": {
    source: "iana"
  },
  "application/vnd.oipf.dae.svg+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oipf.dae.xhtml+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oipf.mippvcontrolmessage+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oipf.pae.gem": {
    source: "iana"
  },
  "application/vnd.oipf.spdiscovery+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oipf.spdlist+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oipf.ueprofile+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oipf.userprofile+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.olpc-sugar": {
    source: "iana",
    extensions: [
      "xo"
    ]
  },
  "application/vnd.oma-scws-config": {
    source: "iana"
  },
  "application/vnd.oma-scws-http-request": {
    source: "iana"
  },
  "application/vnd.oma-scws-http-response": {
    source: "iana"
  },
  "application/vnd.oma.bcast.associated-procedure-parameter+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.bcast.drm-trigger+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.bcast.imd+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.bcast.ltkm": {
    source: "iana"
  },
  "application/vnd.oma.bcast.notification+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.bcast.provisioningtrigger": {
    source: "iana"
  },
  "application/vnd.oma.bcast.sgboot": {
    source: "iana"
  },
  "application/vnd.oma.bcast.sgdd+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.bcast.sgdu": {
    source: "iana"
  },
  "application/vnd.oma.bcast.simple-symbol-container": {
    source: "iana"
  },
  "application/vnd.oma.bcast.smartcard-trigger+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.bcast.sprov+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.bcast.stkm": {
    source: "iana"
  },
  "application/vnd.oma.cab-address-book+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.cab-feature-handler+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.cab-pcc+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.cab-subs-invite+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.cab-user-prefs+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.dcd": {
    source: "iana"
  },
  "application/vnd.oma.dcdc": {
    source: "iana"
  },
  "application/vnd.oma.dd2+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "dd2"
    ]
  },
  "application/vnd.oma.drm.risd+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.group-usage-list+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.lwm2m+cbor": {
    source: "iana"
  },
  "application/vnd.oma.lwm2m+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.lwm2m+tlv": {
    source: "iana"
  },
  "application/vnd.oma.pal+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.poc.detailed-progress-report+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.poc.final-report+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.poc.groups+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.poc.invocation-descriptor+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.poc.optimized-progress-report+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.push": {
    source: "iana"
  },
  "application/vnd.oma.scidm.messages+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.xcap-directory+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.omads-email+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/vnd.omads-file+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/vnd.omads-folder+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/vnd.omaloc-supl-init": {
    source: "iana"
  },
  "application/vnd.onepager": {
    source: "iana"
  },
  "application/vnd.onepagertamp": {
    source: "iana"
  },
  "application/vnd.onepagertamx": {
    source: "iana"
  },
  "application/vnd.onepagertat": {
    source: "iana"
  },
  "application/vnd.onepagertatp": {
    source: "iana"
  },
  "application/vnd.onepagertatx": {
    source: "iana"
  },
  "application/vnd.openblox.game+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "obgx"
    ]
  },
  "application/vnd.openblox.game-binary": {
    source: "iana"
  },
  "application/vnd.openeye.oeb": {
    source: "iana"
  },
  "application/vnd.openofficeorg.extension": {
    source: "apache",
    extensions: [
      "oxt"
    ]
  },
  "application/vnd.openstreetmap.data+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "osm"
    ]
  },
  "application/vnd.opentimestamps.ots": {
    source: "iana"
  },
  "application/vnd.openxmlformats-officedocument.custom-properties+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.customxmlproperties+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.drawing+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.extended-properties+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.comments+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.presentation": {
    source: "iana",
    compressible: !1,
    extensions: [
      "pptx"
    ]
  },
  "application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.presprops+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slide": {
    source: "iana",
    extensions: [
      "sldx"
    ]
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slide+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slideshow": {
    source: "iana",
    extensions: [
      "ppsx"
    ]
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.tags+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.template": {
    source: "iana",
    extensions: [
      "potx"
    ]
  },
  "application/vnd.openxmlformats-officedocument.presentationml.template.main+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
    source: "iana",
    compressible: !1,
    extensions: [
      "xlsx"
    ]
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.template": {
    source: "iana",
    extensions: [
      "xltx"
    ]
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.theme+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.themeoverride+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.vmldrawing": {
    source: "iana"
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
    source: "iana",
    compressible: !1,
    extensions: [
      "docx"
    ]
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.template": {
    source: "iana",
    extensions: [
      "dotx"
    ]
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-package.core-properties+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-package.relationships+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oracle.resource+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.orange.indata": {
    source: "iana"
  },
  "application/vnd.osa.netdeploy": {
    source: "iana"
  },
  "application/vnd.osgeo.mapguide.package": {
    source: "iana",
    extensions: [
      "mgp"
    ]
  },
  "application/vnd.osgi.bundle": {
    source: "iana"
  },
  "application/vnd.osgi.dp": {
    source: "iana",
    extensions: [
      "dp"
    ]
  },
  "application/vnd.osgi.subsystem": {
    source: "iana",
    extensions: [
      "esa"
    ]
  },
  "application/vnd.otps.ct-kip+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oxli.countgraph": {
    source: "iana"
  },
  "application/vnd.pagerduty+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.palm": {
    source: "iana",
    extensions: [
      "pdb",
      "pqa",
      "oprc"
    ]
  },
  "application/vnd.panoply": {
    source: "iana"
  },
  "application/vnd.paos.xml": {
    source: "iana"
  },
  "application/vnd.patentdive": {
    source: "iana"
  },
  "application/vnd.patientecommsdoc": {
    source: "iana"
  },
  "application/vnd.pawaafile": {
    source: "iana",
    extensions: [
      "paw"
    ]
  },
  "application/vnd.pcos": {
    source: "iana"
  },
  "application/vnd.pg.format": {
    source: "iana",
    extensions: [
      "str"
    ]
  },
  "application/vnd.pg.osasli": {
    source: "iana",
    extensions: [
      "ei6"
    ]
  },
  "application/vnd.piaccess.application-licence": {
    source: "iana"
  },
  "application/vnd.picsel": {
    source: "iana",
    extensions: [
      "efif"
    ]
  },
  "application/vnd.pmi.widget": {
    source: "iana",
    extensions: [
      "wg"
    ]
  },
  "application/vnd.poc.group-advertisement+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.pocketlearn": {
    source: "iana",
    extensions: [
      "plf"
    ]
  },
  "application/vnd.powerbuilder6": {
    source: "iana",
    extensions: [
      "pbd"
    ]
  },
  "application/vnd.powerbuilder6-s": {
    source: "iana"
  },
  "application/vnd.powerbuilder7": {
    source: "iana"
  },
  "application/vnd.powerbuilder7-s": {
    source: "iana"
  },
  "application/vnd.powerbuilder75": {
    source: "iana"
  },
  "application/vnd.powerbuilder75-s": {
    source: "iana"
  },
  "application/vnd.preminet": {
    source: "iana"
  },
  "application/vnd.previewsystems.box": {
    source: "iana",
    extensions: [
      "box"
    ]
  },
  "application/vnd.proteus.magazine": {
    source: "iana",
    extensions: [
      "mgz"
    ]
  },
  "application/vnd.psfs": {
    source: "iana"
  },
  "application/vnd.publishare-delta-tree": {
    source: "iana",
    extensions: [
      "qps"
    ]
  },
  "application/vnd.pvi.ptid1": {
    source: "iana",
    extensions: [
      "ptid"
    ]
  },
  "application/vnd.pwg-multiplexed": {
    source: "iana"
  },
  "application/vnd.pwg-xhtml-print+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.qualcomm.brew-app-res": {
    source: "iana"
  },
  "application/vnd.quarantainenet": {
    source: "iana"
  },
  "application/vnd.quark.quarkxpress": {
    source: "iana",
    extensions: [
      "qxd",
      "qxt",
      "qwd",
      "qwt",
      "qxl",
      "qxb"
    ]
  },
  "application/vnd.quobject-quoxdocument": {
    source: "iana"
  },
  "application/vnd.radisys.moml+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-audit+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-audit-conf+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-audit-conn+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-audit-dialog+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-audit-stream+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-conf+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-dialog+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-dialog-base+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-dialog-fax-detect+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-dialog-fax-sendrecv+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-dialog-group+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-dialog-speech+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-dialog-transform+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.rainstor.data": {
    source: "iana"
  },
  "application/vnd.rapid": {
    source: "iana"
  },
  "application/vnd.rar": {
    source: "iana",
    extensions: [
      "rar"
    ]
  },
  "application/vnd.realvnc.bed": {
    source: "iana",
    extensions: [
      "bed"
    ]
  },
  "application/vnd.recordare.musicxml": {
    source: "iana",
    extensions: [
      "mxl"
    ]
  },
  "application/vnd.recordare.musicxml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "musicxml"
    ]
  },
  "application/vnd.renlearn.rlprint": {
    source: "iana"
  },
  "application/vnd.resilient.logic": {
    source: "iana"
  },
  "application/vnd.restful+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.rig.cryptonote": {
    source: "iana",
    extensions: [
      "cryptonote"
    ]
  },
  "application/vnd.rim.cod": {
    source: "apache",
    extensions: [
      "cod"
    ]
  },
  "application/vnd.rn-realmedia": {
    source: "apache",
    extensions: [
      "rm"
    ]
  },
  "application/vnd.rn-realmedia-vbr": {
    source: "apache",
    extensions: [
      "rmvb"
    ]
  },
  "application/vnd.route66.link66+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "link66"
    ]
  },
  "application/vnd.rs-274x": {
    source: "iana"
  },
  "application/vnd.ruckus.download": {
    source: "iana"
  },
  "application/vnd.s3sms": {
    source: "iana"
  },
  "application/vnd.sailingtracker.track": {
    source: "iana",
    extensions: [
      "st"
    ]
  },
  "application/vnd.sar": {
    source: "iana"
  },
  "application/vnd.sbm.cid": {
    source: "iana"
  },
  "application/vnd.sbm.mid2": {
    source: "iana"
  },
  "application/vnd.scribus": {
    source: "iana"
  },
  "application/vnd.sealed.3df": {
    source: "iana"
  },
  "application/vnd.sealed.csf": {
    source: "iana"
  },
  "application/vnd.sealed.doc": {
    source: "iana"
  },
  "application/vnd.sealed.eml": {
    source: "iana"
  },
  "application/vnd.sealed.mht": {
    source: "iana"
  },
  "application/vnd.sealed.net": {
    source: "iana"
  },
  "application/vnd.sealed.ppt": {
    source: "iana"
  },
  "application/vnd.sealed.tiff": {
    source: "iana"
  },
  "application/vnd.sealed.xls": {
    source: "iana"
  },
  "application/vnd.sealedmedia.softseal.html": {
    source: "iana"
  },
  "application/vnd.sealedmedia.softseal.pdf": {
    source: "iana"
  },
  "application/vnd.seemail": {
    source: "iana",
    extensions: [
      "see"
    ]
  },
  "application/vnd.seis+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.sema": {
    source: "iana",
    extensions: [
      "sema"
    ]
  },
  "application/vnd.semd": {
    source: "iana",
    extensions: [
      "semd"
    ]
  },
  "application/vnd.semf": {
    source: "iana",
    extensions: [
      "semf"
    ]
  },
  "application/vnd.shade-save-file": {
    source: "iana"
  },
  "application/vnd.shana.informed.formdata": {
    source: "iana",
    extensions: [
      "ifm"
    ]
  },
  "application/vnd.shana.informed.formtemplate": {
    source: "iana",
    extensions: [
      "itp"
    ]
  },
  "application/vnd.shana.informed.interchange": {
    source: "iana",
    extensions: [
      "iif"
    ]
  },
  "application/vnd.shana.informed.package": {
    source: "iana",
    extensions: [
      "ipk"
    ]
  },
  "application/vnd.shootproof+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.shopkick+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.shp": {
    source: "iana"
  },
  "application/vnd.shx": {
    source: "iana"
  },
  "application/vnd.sigrok.session": {
    source: "iana"
  },
  "application/vnd.simtech-mindmapper": {
    source: "iana",
    extensions: [
      "twd",
      "twds"
    ]
  },
  "application/vnd.siren+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.smaf": {
    source: "iana",
    extensions: [
      "mmf"
    ]
  },
  "application/vnd.smart.notebook": {
    source: "iana"
  },
  "application/vnd.smart.teacher": {
    source: "iana",
    extensions: [
      "teacher"
    ]
  },
  "application/vnd.snesdev-page-table": {
    source: "iana"
  },
  "application/vnd.software602.filler.form+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "fo"
    ]
  },
  "application/vnd.software602.filler.form-xml-zip": {
    source: "iana"
  },
  "application/vnd.solent.sdkm+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "sdkm",
      "sdkd"
    ]
  },
  "application/vnd.spotfire.dxp": {
    source: "iana",
    extensions: [
      "dxp"
    ]
  },
  "application/vnd.spotfire.sfs": {
    source: "iana",
    extensions: [
      "sfs"
    ]
  },
  "application/vnd.sqlite3": {
    source: "iana"
  },
  "application/vnd.sss-cod": {
    source: "iana"
  },
  "application/vnd.sss-dtf": {
    source: "iana"
  },
  "application/vnd.sss-ntf": {
    source: "iana"
  },
  "application/vnd.stardivision.calc": {
    source: "apache",
    extensions: [
      "sdc"
    ]
  },
  "application/vnd.stardivision.draw": {
    source: "apache",
    extensions: [
      "sda"
    ]
  },
  "application/vnd.stardivision.impress": {
    source: "apache",
    extensions: [
      "sdd"
    ]
  },
  "application/vnd.stardivision.math": {
    source: "apache",
    extensions: [
      "smf"
    ]
  },
  "application/vnd.stardivision.writer": {
    source: "apache",
    extensions: [
      "sdw",
      "vor"
    ]
  },
  "application/vnd.stardivision.writer-global": {
    source: "apache",
    extensions: [
      "sgl"
    ]
  },
  "application/vnd.stepmania.package": {
    source: "iana",
    extensions: [
      "smzip"
    ]
  },
  "application/vnd.stepmania.stepchart": {
    source: "iana",
    extensions: [
      "sm"
    ]
  },
  "application/vnd.street-stream": {
    source: "iana"
  },
  "application/vnd.sun.wadl+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "wadl"
    ]
  },
  "application/vnd.sun.xml.calc": {
    source: "apache",
    extensions: [
      "sxc"
    ]
  },
  "application/vnd.sun.xml.calc.template": {
    source: "apache",
    extensions: [
      "stc"
    ]
  },
  "application/vnd.sun.xml.draw": {
    source: "apache",
    extensions: [
      "sxd"
    ]
  },
  "application/vnd.sun.xml.draw.template": {
    source: "apache",
    extensions: [
      "std"
    ]
  },
  "application/vnd.sun.xml.impress": {
    source: "apache",
    extensions: [
      "sxi"
    ]
  },
  "application/vnd.sun.xml.impress.template": {
    source: "apache",
    extensions: [
      "sti"
    ]
  },
  "application/vnd.sun.xml.math": {
    source: "apache",
    extensions: [
      "sxm"
    ]
  },
  "application/vnd.sun.xml.writer": {
    source: "apache",
    extensions: [
      "sxw"
    ]
  },
  "application/vnd.sun.xml.writer.global": {
    source: "apache",
    extensions: [
      "sxg"
    ]
  },
  "application/vnd.sun.xml.writer.template": {
    source: "apache",
    extensions: [
      "stw"
    ]
  },
  "application/vnd.sus-calendar": {
    source: "iana",
    extensions: [
      "sus",
      "susp"
    ]
  },
  "application/vnd.svd": {
    source: "iana",
    extensions: [
      "svd"
    ]
  },
  "application/vnd.swiftview-ics": {
    source: "iana"
  },
  "application/vnd.sycle+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.syft+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.symbian.install": {
    source: "apache",
    extensions: [
      "sis",
      "sisx"
    ]
  },
  "application/vnd.syncml+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0,
    extensions: [
      "xsm"
    ]
  },
  "application/vnd.syncml.dm+wbxml": {
    source: "iana",
    charset: "UTF-8",
    extensions: [
      "bdm"
    ]
  },
  "application/vnd.syncml.dm+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0,
    extensions: [
      "xdm"
    ]
  },
  "application/vnd.syncml.dm.notification": {
    source: "iana"
  },
  "application/vnd.syncml.dmddf+wbxml": {
    source: "iana"
  },
  "application/vnd.syncml.dmddf+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0,
    extensions: [
      "ddf"
    ]
  },
  "application/vnd.syncml.dmtnds+wbxml": {
    source: "iana"
  },
  "application/vnd.syncml.dmtnds+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/vnd.syncml.ds.notification": {
    source: "iana"
  },
  "application/vnd.tableschema+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.tao.intent-module-archive": {
    source: "iana",
    extensions: [
      "tao"
    ]
  },
  "application/vnd.tcpdump.pcap": {
    source: "iana",
    extensions: [
      "pcap",
      "cap",
      "dmp"
    ]
  },
  "application/vnd.think-cell.ppttc+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.tmd.mediaflex.api+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.tml": {
    source: "iana"
  },
  "application/vnd.tmobile-livetv": {
    source: "iana",
    extensions: [
      "tmo"
    ]
  },
  "application/vnd.tri.onesource": {
    source: "iana"
  },
  "application/vnd.trid.tpt": {
    source: "iana",
    extensions: [
      "tpt"
    ]
  },
  "application/vnd.triscape.mxs": {
    source: "iana",
    extensions: [
      "mxs"
    ]
  },
  "application/vnd.trueapp": {
    source: "iana",
    extensions: [
      "tra"
    ]
  },
  "application/vnd.truedoc": {
    source: "iana"
  },
  "application/vnd.ubisoft.webplayer": {
    source: "iana"
  },
  "application/vnd.ufdl": {
    source: "iana",
    extensions: [
      "ufd",
      "ufdl"
    ]
  },
  "application/vnd.uiq.theme": {
    source: "iana",
    extensions: [
      "utz"
    ]
  },
  "application/vnd.umajin": {
    source: "iana",
    extensions: [
      "umj"
    ]
  },
  "application/vnd.unity": {
    source: "iana",
    extensions: [
      "unityweb"
    ]
  },
  "application/vnd.uoml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "uoml"
    ]
  },
  "application/vnd.uplanet.alert": {
    source: "iana"
  },
  "application/vnd.uplanet.alert-wbxml": {
    source: "iana"
  },
  "application/vnd.uplanet.bearer-choice": {
    source: "iana"
  },
  "application/vnd.uplanet.bearer-choice-wbxml": {
    source: "iana"
  },
  "application/vnd.uplanet.cacheop": {
    source: "iana"
  },
  "application/vnd.uplanet.cacheop-wbxml": {
    source: "iana"
  },
  "application/vnd.uplanet.channel": {
    source: "iana"
  },
  "application/vnd.uplanet.channel-wbxml": {
    source: "iana"
  },
  "application/vnd.uplanet.list": {
    source: "iana"
  },
  "application/vnd.uplanet.list-wbxml": {
    source: "iana"
  },
  "application/vnd.uplanet.listcmd": {
    source: "iana"
  },
  "application/vnd.uplanet.listcmd-wbxml": {
    source: "iana"
  },
  "application/vnd.uplanet.signal": {
    source: "iana"
  },
  "application/vnd.uri-map": {
    source: "iana"
  },
  "application/vnd.valve.source.material": {
    source: "iana"
  },
  "application/vnd.vcx": {
    source: "iana",
    extensions: [
      "vcx"
    ]
  },
  "application/vnd.vd-study": {
    source: "iana"
  },
  "application/vnd.vectorworks": {
    source: "iana"
  },
  "application/vnd.vel+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.verimatrix.vcas": {
    source: "iana"
  },
  "application/vnd.veritone.aion+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.veryant.thin": {
    source: "iana"
  },
  "application/vnd.ves.encrypted": {
    source: "iana"
  },
  "application/vnd.vidsoft.vidconference": {
    source: "iana"
  },
  "application/vnd.visio": {
    source: "iana",
    extensions: [
      "vsd",
      "vst",
      "vss",
      "vsw"
    ]
  },
  "application/vnd.visionary": {
    source: "iana",
    extensions: [
      "vis"
    ]
  },
  "application/vnd.vividence.scriptfile": {
    source: "iana"
  },
  "application/vnd.vsf": {
    source: "iana",
    extensions: [
      "vsf"
    ]
  },
  "application/vnd.wap.sic": {
    source: "iana"
  },
  "application/vnd.wap.slc": {
    source: "iana"
  },
  "application/vnd.wap.wbxml": {
    source: "iana",
    charset: "UTF-8",
    extensions: [
      "wbxml"
    ]
  },
  "application/vnd.wap.wmlc": {
    source: "iana",
    extensions: [
      "wmlc"
    ]
  },
  "application/vnd.wap.wmlscriptc": {
    source: "iana",
    extensions: [
      "wmlsc"
    ]
  },
  "application/vnd.webturbo": {
    source: "iana",
    extensions: [
      "wtb"
    ]
  },
  "application/vnd.wfa.dpp": {
    source: "iana"
  },
  "application/vnd.wfa.p2p": {
    source: "iana"
  },
  "application/vnd.wfa.wsc": {
    source: "iana"
  },
  "application/vnd.windows.devicepairing": {
    source: "iana"
  },
  "application/vnd.wmc": {
    source: "iana"
  },
  "application/vnd.wmf.bootstrap": {
    source: "iana"
  },
  "application/vnd.wolfram.mathematica": {
    source: "iana"
  },
  "application/vnd.wolfram.mathematica.package": {
    source: "iana"
  },
  "application/vnd.wolfram.player": {
    source: "iana",
    extensions: [
      "nbp"
    ]
  },
  "application/vnd.wordperfect": {
    source: "iana",
    extensions: [
      "wpd"
    ]
  },
  "application/vnd.wqd": {
    source: "iana",
    extensions: [
      "wqd"
    ]
  },
  "application/vnd.wrq-hp3000-labelled": {
    source: "iana"
  },
  "application/vnd.wt.stf": {
    source: "iana",
    extensions: [
      "stf"
    ]
  },
  "application/vnd.wv.csp+wbxml": {
    source: "iana"
  },
  "application/vnd.wv.csp+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.wv.ssp+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.xacml+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.xara": {
    source: "iana",
    extensions: [
      "xar"
    ]
  },
  "application/vnd.xfdl": {
    source: "iana",
    extensions: [
      "xfdl"
    ]
  },
  "application/vnd.xfdl.webform": {
    source: "iana"
  },
  "application/vnd.xmi+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.xmpie.cpkg": {
    source: "iana"
  },
  "application/vnd.xmpie.dpkg": {
    source: "iana"
  },
  "application/vnd.xmpie.plan": {
    source: "iana"
  },
  "application/vnd.xmpie.ppkg": {
    source: "iana"
  },
  "application/vnd.xmpie.xlim": {
    source: "iana"
  },
  "application/vnd.yamaha.hv-dic": {
    source: "iana",
    extensions: [
      "hvd"
    ]
  },
  "application/vnd.yamaha.hv-script": {
    source: "iana",
    extensions: [
      "hvs"
    ]
  },
  "application/vnd.yamaha.hv-voice": {
    source: "iana",
    extensions: [
      "hvp"
    ]
  },
  "application/vnd.yamaha.openscoreformat": {
    source: "iana",
    extensions: [
      "osf"
    ]
  },
  "application/vnd.yamaha.openscoreformat.osfpvg+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "osfpvg"
    ]
  },
  "application/vnd.yamaha.remote-setup": {
    source: "iana"
  },
  "application/vnd.yamaha.smaf-audio": {
    source: "iana",
    extensions: [
      "saf"
    ]
  },
  "application/vnd.yamaha.smaf-phrase": {
    source: "iana",
    extensions: [
      "spf"
    ]
  },
  "application/vnd.yamaha.through-ngn": {
    source: "iana"
  },
  "application/vnd.yamaha.tunnel-udpencap": {
    source: "iana"
  },
  "application/vnd.yaoweme": {
    source: "iana"
  },
  "application/vnd.yellowriver-custom-menu": {
    source: "iana",
    extensions: [
      "cmp"
    ]
  },
  "application/vnd.youtube.yt": {
    source: "iana"
  },
  "application/vnd.zul": {
    source: "iana",
    extensions: [
      "zir",
      "zirz"
    ]
  },
  "application/vnd.zzazz.deck+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "zaz"
    ]
  },
  "application/voicexml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "vxml"
    ]
  },
  "application/voucher-cms+json": {
    source: "iana",
    compressible: !0
  },
  "application/vq-rtcpxr": {
    source: "iana"
  },
  "application/wasm": {
    source: "iana",
    compressible: !0,
    extensions: [
      "wasm"
    ]
  },
  "application/watcherinfo+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "wif"
    ]
  },
  "application/webpush-options+json": {
    source: "iana",
    compressible: !0
  },
  "application/whoispp-query": {
    source: "iana"
  },
  "application/whoispp-response": {
    source: "iana"
  },
  "application/widget": {
    source: "iana",
    extensions: [
      "wgt"
    ]
  },
  "application/winhlp": {
    source: "apache",
    extensions: [
      "hlp"
    ]
  },
  "application/wita": {
    source: "iana"
  },
  "application/wordperfect5.1": {
    source: "iana"
  },
  "application/wsdl+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "wsdl"
    ]
  },
  "application/wspolicy+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "wspolicy"
    ]
  },
  "application/x-7z-compressed": {
    source: "apache",
    compressible: !1,
    extensions: [
      "7z"
    ]
  },
  "application/x-abiword": {
    source: "apache",
    extensions: [
      "abw"
    ]
  },
  "application/x-ace-compressed": {
    source: "apache",
    extensions: [
      "ace"
    ]
  },
  "application/x-amf": {
    source: "apache"
  },
  "application/x-apple-diskimage": {
    source: "apache",
    extensions: [
      "dmg"
    ]
  },
  "application/x-arj": {
    compressible: !1,
    extensions: [
      "arj"
    ]
  },
  "application/x-authorware-bin": {
    source: "apache",
    extensions: [
      "aab",
      "x32",
      "u32",
      "vox"
    ]
  },
  "application/x-authorware-map": {
    source: "apache",
    extensions: [
      "aam"
    ]
  },
  "application/x-authorware-seg": {
    source: "apache",
    extensions: [
      "aas"
    ]
  },
  "application/x-bcpio": {
    source: "apache",
    extensions: [
      "bcpio"
    ]
  },
  "application/x-bdoc": {
    compressible: !1,
    extensions: [
      "bdoc"
    ]
  },
  "application/x-bittorrent": {
    source: "apache",
    extensions: [
      "torrent"
    ]
  },
  "application/x-blorb": {
    source: "apache",
    extensions: [
      "blb",
      "blorb"
    ]
  },
  "application/x-bzip": {
    source: "apache",
    compressible: !1,
    extensions: [
      "bz"
    ]
  },
  "application/x-bzip2": {
    source: "apache",
    compressible: !1,
    extensions: [
      "bz2",
      "boz"
    ]
  },
  "application/x-cbr": {
    source: "apache",
    extensions: [
      "cbr",
      "cba",
      "cbt",
      "cbz",
      "cb7"
    ]
  },
  "application/x-cdlink": {
    source: "apache",
    extensions: [
      "vcd"
    ]
  },
  "application/x-cfs-compressed": {
    source: "apache",
    extensions: [
      "cfs"
    ]
  },
  "application/x-chat": {
    source: "apache",
    extensions: [
      "chat"
    ]
  },
  "application/x-chess-pgn": {
    source: "apache",
    extensions: [
      "pgn"
    ]
  },
  "application/x-chrome-extension": {
    extensions: [
      "crx"
    ]
  },
  "application/x-cocoa": {
    source: "nginx",
    extensions: [
      "cco"
    ]
  },
  "application/x-compress": {
    source: "apache"
  },
  "application/x-conference": {
    source: "apache",
    extensions: [
      "nsc"
    ]
  },
  "application/x-cpio": {
    source: "apache",
    extensions: [
      "cpio"
    ]
  },
  "application/x-csh": {
    source: "apache",
    extensions: [
      "csh"
    ]
  },
  "application/x-deb": {
    compressible: !1
  },
  "application/x-debian-package": {
    source: "apache",
    extensions: [
      "deb",
      "udeb"
    ]
  },
  "application/x-dgc-compressed": {
    source: "apache",
    extensions: [
      "dgc"
    ]
  },
  "application/x-director": {
    source: "apache",
    extensions: [
      "dir",
      "dcr",
      "dxr",
      "cst",
      "cct",
      "cxt",
      "w3d",
      "fgd",
      "swa"
    ]
  },
  "application/x-doom": {
    source: "apache",
    extensions: [
      "wad"
    ]
  },
  "application/x-dtbncx+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "ncx"
    ]
  },
  "application/x-dtbook+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "dtb"
    ]
  },
  "application/x-dtbresource+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "res"
    ]
  },
  "application/x-dvi": {
    source: "apache",
    compressible: !1,
    extensions: [
      "dvi"
    ]
  },
  "application/x-envoy": {
    source: "apache",
    extensions: [
      "evy"
    ]
  },
  "application/x-eva": {
    source: "apache",
    extensions: [
      "eva"
    ]
  },
  "application/x-font-bdf": {
    source: "apache",
    extensions: [
      "bdf"
    ]
  },
  "application/x-font-dos": {
    source: "apache"
  },
  "application/x-font-framemaker": {
    source: "apache"
  },
  "application/x-font-ghostscript": {
    source: "apache",
    extensions: [
      "gsf"
    ]
  },
  "application/x-font-libgrx": {
    source: "apache"
  },
  "application/x-font-linux-psf": {
    source: "apache",
    extensions: [
      "psf"
    ]
  },
  "application/x-font-pcf": {
    source: "apache",
    extensions: [
      "pcf"
    ]
  },
  "application/x-font-snf": {
    source: "apache",
    extensions: [
      "snf"
    ]
  },
  "application/x-font-speedo": {
    source: "apache"
  },
  "application/x-font-sunos-news": {
    source: "apache"
  },
  "application/x-font-type1": {
    source: "apache",
    extensions: [
      "pfa",
      "pfb",
      "pfm",
      "afm"
    ]
  },
  "application/x-font-vfont": {
    source: "apache"
  },
  "application/x-freearc": {
    source: "apache",
    extensions: [
      "arc"
    ]
  },
  "application/x-futuresplash": {
    source: "apache",
    extensions: [
      "spl"
    ]
  },
  "application/x-gca-compressed": {
    source: "apache",
    extensions: [
      "gca"
    ]
  },
  "application/x-glulx": {
    source: "apache",
    extensions: [
      "ulx"
    ]
  },
  "application/x-gnumeric": {
    source: "apache",
    extensions: [
      "gnumeric"
    ]
  },
  "application/x-gramps-xml": {
    source: "apache",
    extensions: [
      "gramps"
    ]
  },
  "application/x-gtar": {
    source: "apache",
    extensions: [
      "gtar"
    ]
  },
  "application/x-gzip": {
    source: "apache"
  },
  "application/x-hdf": {
    source: "apache",
    extensions: [
      "hdf"
    ]
  },
  "application/x-httpd-php": {
    compressible: !0,
    extensions: [
      "php"
    ]
  },
  "application/x-install-instructions": {
    source: "apache",
    extensions: [
      "install"
    ]
  },
  "application/x-iso9660-image": {
    source: "apache",
    extensions: [
      "iso"
    ]
  },
  "application/x-iwork-keynote-sffkey": {
    extensions: [
      "key"
    ]
  },
  "application/x-iwork-numbers-sffnumbers": {
    extensions: [
      "numbers"
    ]
  },
  "application/x-iwork-pages-sffpages": {
    extensions: [
      "pages"
    ]
  },
  "application/x-java-archive-diff": {
    source: "nginx",
    extensions: [
      "jardiff"
    ]
  },
  "application/x-java-jnlp-file": {
    source: "apache",
    compressible: !1,
    extensions: [
      "jnlp"
    ]
  },
  "application/x-javascript": {
    compressible: !0
  },
  "application/x-keepass2": {
    extensions: [
      "kdbx"
    ]
  },
  "application/x-latex": {
    source: "apache",
    compressible: !1,
    extensions: [
      "latex"
    ]
  },
  "application/x-lua-bytecode": {
    extensions: [
      "luac"
    ]
  },
  "application/x-lzh-compressed": {
    source: "apache",
    extensions: [
      "lzh",
      "lha"
    ]
  },
  "application/x-makeself": {
    source: "nginx",
    extensions: [
      "run"
    ]
  },
  "application/x-mie": {
    source: "apache",
    extensions: [
      "mie"
    ]
  },
  "application/x-mobipocket-ebook": {
    source: "apache",
    extensions: [
      "prc",
      "mobi"
    ]
  },
  "application/x-mpegurl": {
    compressible: !1
  },
  "application/x-ms-application": {
    source: "apache",
    extensions: [
      "application"
    ]
  },
  "application/x-ms-shortcut": {
    source: "apache",
    extensions: [
      "lnk"
    ]
  },
  "application/x-ms-wmd": {
    source: "apache",
    extensions: [
      "wmd"
    ]
  },
  "application/x-ms-wmz": {
    source: "apache",
    extensions: [
      "wmz"
    ]
  },
  "application/x-ms-xbap": {
    source: "apache",
    extensions: [
      "xbap"
    ]
  },
  "application/x-msaccess": {
    source: "apache",
    extensions: [
      "mdb"
    ]
  },
  "application/x-msbinder": {
    source: "apache",
    extensions: [
      "obd"
    ]
  },
  "application/x-mscardfile": {
    source: "apache",
    extensions: [
      "crd"
    ]
  },
  "application/x-msclip": {
    source: "apache",
    extensions: [
      "clp"
    ]
  },
  "application/x-msdos-program": {
    extensions: [
      "exe"
    ]
  },
  "application/x-msdownload": {
    source: "apache",
    extensions: [
      "exe",
      "dll",
      "com",
      "bat",
      "msi"
    ]
  },
  "application/x-msmediaview": {
    source: "apache",
    extensions: [
      "mvb",
      "m13",
      "m14"
    ]
  },
  "application/x-msmetafile": {
    source: "apache",
    extensions: [
      "wmf",
      "wmz",
      "emf",
      "emz"
    ]
  },
  "application/x-msmoney": {
    source: "apache",
    extensions: [
      "mny"
    ]
  },
  "application/x-mspublisher": {
    source: "apache",
    extensions: [
      "pub"
    ]
  },
  "application/x-msschedule": {
    source: "apache",
    extensions: [
      "scd"
    ]
  },
  "application/x-msterminal": {
    source: "apache",
    extensions: [
      "trm"
    ]
  },
  "application/x-mswrite": {
    source: "apache",
    extensions: [
      "wri"
    ]
  },
  "application/x-netcdf": {
    source: "apache",
    extensions: [
      "nc",
      "cdf"
    ]
  },
  "application/x-ns-proxy-autoconfig": {
    compressible: !0,
    extensions: [
      "pac"
    ]
  },
  "application/x-nzb": {
    source: "apache",
    extensions: [
      "nzb"
    ]
  },
  "application/x-perl": {
    source: "nginx",
    extensions: [
      "pl",
      "pm"
    ]
  },
  "application/x-pilot": {
    source: "nginx",
    extensions: [
      "prc",
      "pdb"
    ]
  },
  "application/x-pkcs12": {
    source: "apache",
    compressible: !1,
    extensions: [
      "p12",
      "pfx"
    ]
  },
  "application/x-pkcs7-certificates": {
    source: "apache",
    extensions: [
      "p7b",
      "spc"
    ]
  },
  "application/x-pkcs7-certreqresp": {
    source: "apache",
    extensions: [
      "p7r"
    ]
  },
  "application/x-pki-message": {
    source: "iana"
  },
  "application/x-rar-compressed": {
    source: "apache",
    compressible: !1,
    extensions: [
      "rar"
    ]
  },
  "application/x-redhat-package-manager": {
    source: "nginx",
    extensions: [
      "rpm"
    ]
  },
  "application/x-research-info-systems": {
    source: "apache",
    extensions: [
      "ris"
    ]
  },
  "application/x-sea": {
    source: "nginx",
    extensions: [
      "sea"
    ]
  },
  "application/x-sh": {
    source: "apache",
    compressible: !0,
    extensions: [
      "sh"
    ]
  },
  "application/x-shar": {
    source: "apache",
    extensions: [
      "shar"
    ]
  },
  "application/x-shockwave-flash": {
    source: "apache",
    compressible: !1,
    extensions: [
      "swf"
    ]
  },
  "application/x-silverlight-app": {
    source: "apache",
    extensions: [
      "xap"
    ]
  },
  "application/x-sql": {
    source: "apache",
    extensions: [
      "sql"
    ]
  },
  "application/x-stuffit": {
    source: "apache",
    compressible: !1,
    extensions: [
      "sit"
    ]
  },
  "application/x-stuffitx": {
    source: "apache",
    extensions: [
      "sitx"
    ]
  },
  "application/x-subrip": {
    source: "apache",
    extensions: [
      "srt"
    ]
  },
  "application/x-sv4cpio": {
    source: "apache",
    extensions: [
      "sv4cpio"
    ]
  },
  "application/x-sv4crc": {
    source: "apache",
    extensions: [
      "sv4crc"
    ]
  },
  "application/x-t3vm-image": {
    source: "apache",
    extensions: [
      "t3"
    ]
  },
  "application/x-tads": {
    source: "apache",
    extensions: [
      "gam"
    ]
  },
  "application/x-tar": {
    source: "apache",
    compressible: !0,
    extensions: [
      "tar"
    ]
  },
  "application/x-tcl": {
    source: "apache",
    extensions: [
      "tcl",
      "tk"
    ]
  },
  "application/x-tex": {
    source: "apache",
    extensions: [
      "tex"
    ]
  },
  "application/x-tex-tfm": {
    source: "apache",
    extensions: [
      "tfm"
    ]
  },
  "application/x-texinfo": {
    source: "apache",
    extensions: [
      "texinfo",
      "texi"
    ]
  },
  "application/x-tgif": {
    source: "apache",
    extensions: [
      "obj"
    ]
  },
  "application/x-ustar": {
    source: "apache",
    extensions: [
      "ustar"
    ]
  },
  "application/x-virtualbox-hdd": {
    compressible: !0,
    extensions: [
      "hdd"
    ]
  },
  "application/x-virtualbox-ova": {
    compressible: !0,
    extensions: [
      "ova"
    ]
  },
  "application/x-virtualbox-ovf": {
    compressible: !0,
    extensions: [
      "ovf"
    ]
  },
  "application/x-virtualbox-vbox": {
    compressible: !0,
    extensions: [
      "vbox"
    ]
  },
  "application/x-virtualbox-vbox-extpack": {
    compressible: !1,
    extensions: [
      "vbox-extpack"
    ]
  },
  "application/x-virtualbox-vdi": {
    compressible: !0,
    extensions: [
      "vdi"
    ]
  },
  "application/x-virtualbox-vhd": {
    compressible: !0,
    extensions: [
      "vhd"
    ]
  },
  "application/x-virtualbox-vmdk": {
    compressible: !0,
    extensions: [
      "vmdk"
    ]
  },
  "application/x-wais-source": {
    source: "apache",
    extensions: [
      "src"
    ]
  },
  "application/x-web-app-manifest+json": {
    compressible: !0,
    extensions: [
      "webapp"
    ]
  },
  "application/x-www-form-urlencoded": {
    source: "iana",
    compressible: !0
  },
  "application/x-x509-ca-cert": {
    source: "iana",
    extensions: [
      "der",
      "crt",
      "pem"
    ]
  },
  "application/x-x509-ca-ra-cert": {
    source: "iana"
  },
  "application/x-x509-next-ca-cert": {
    source: "iana"
  },
  "application/x-xfig": {
    source: "apache",
    extensions: [
      "fig"
    ]
  },
  "application/x-xliff+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "xlf"
    ]
  },
  "application/x-xpinstall": {
    source: "apache",
    compressible: !1,
    extensions: [
      "xpi"
    ]
  },
  "application/x-xz": {
    source: "apache",
    extensions: [
      "xz"
    ]
  },
  "application/x-zmachine": {
    source: "apache",
    extensions: [
      "z1",
      "z2",
      "z3",
      "z4",
      "z5",
      "z6",
      "z7",
      "z8"
    ]
  },
  "application/x400-bp": {
    source: "iana"
  },
  "application/xacml+xml": {
    source: "iana",
    compressible: !0
  },
  "application/xaml+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "xaml"
    ]
  },
  "application/xcap-att+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xav"
    ]
  },
  "application/xcap-caps+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xca"
    ]
  },
  "application/xcap-diff+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xdf"
    ]
  },
  "application/xcap-el+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xel"
    ]
  },
  "application/xcap-error+xml": {
    source: "iana",
    compressible: !0
  },
  "application/xcap-ns+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xns"
    ]
  },
  "application/xcon-conference-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/xcon-conference-info-diff+xml": {
    source: "iana",
    compressible: !0
  },
  "application/xenc+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xenc"
    ]
  },
  "application/xhtml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xhtml",
      "xht"
    ]
  },
  "application/xhtml-voice+xml": {
    source: "apache",
    compressible: !0
  },
  "application/xliff+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xlf"
    ]
  },
  "application/xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xml",
      "xsl",
      "xsd",
      "rng"
    ]
  },
  "application/xml-dtd": {
    source: "iana",
    compressible: !0,
    extensions: [
      "dtd"
    ]
  },
  "application/xml-external-parsed-entity": {
    source: "iana"
  },
  "application/xml-patch+xml": {
    source: "iana",
    compressible: !0
  },
  "application/xmpp+xml": {
    source: "iana",
    compressible: !0
  },
  "application/xop+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xop"
    ]
  },
  "application/xproc+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "xpl"
    ]
  },
  "application/xslt+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xsl",
      "xslt"
    ]
  },
  "application/xspf+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "xspf"
    ]
  },
  "application/xv+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mxml",
      "xhvml",
      "xvml",
      "xvm"
    ]
  },
  "application/yang": {
    source: "iana",
    extensions: [
      "yang"
    ]
  },
  "application/yang-data+json": {
    source: "iana",
    compressible: !0
  },
  "application/yang-data+xml": {
    source: "iana",
    compressible: !0
  },
  "application/yang-patch+json": {
    source: "iana",
    compressible: !0
  },
  "application/yang-patch+xml": {
    source: "iana",
    compressible: !0
  },
  "application/yin+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "yin"
    ]
  },
  "application/zip": {
    source: "iana",
    compressible: !1,
    extensions: [
      "zip"
    ]
  },
  "application/zlib": {
    source: "iana"
  },
  "application/zstd": {
    source: "iana"
  },
  "audio/1d-interleaved-parityfec": {
    source: "iana"
  },
  "audio/32kadpcm": {
    source: "iana"
  },
  "audio/3gpp": {
    source: "iana",
    compressible: !1,
    extensions: [
      "3gpp"
    ]
  },
  "audio/3gpp2": {
    source: "iana"
  },
  "audio/aac": {
    source: "iana"
  },
  "audio/ac3": {
    source: "iana"
  },
  "audio/adpcm": {
    source: "apache",
    extensions: [
      "adp"
    ]
  },
  "audio/amr": {
    source: "iana",
    extensions: [
      "amr"
    ]
  },
  "audio/amr-wb": {
    source: "iana"
  },
  "audio/amr-wb+": {
    source: "iana"
  },
  "audio/aptx": {
    source: "iana"
  },
  "audio/asc": {
    source: "iana"
  },
  "audio/atrac-advanced-lossless": {
    source: "iana"
  },
  "audio/atrac-x": {
    source: "iana"
  },
  "audio/atrac3": {
    source: "iana"
  },
  "audio/basic": {
    source: "iana",
    compressible: !1,
    extensions: [
      "au",
      "snd"
    ]
  },
  "audio/bv16": {
    source: "iana"
  },
  "audio/bv32": {
    source: "iana"
  },
  "audio/clearmode": {
    source: "iana"
  },
  "audio/cn": {
    source: "iana"
  },
  "audio/dat12": {
    source: "iana"
  },
  "audio/dls": {
    source: "iana"
  },
  "audio/dsr-es201108": {
    source: "iana"
  },
  "audio/dsr-es202050": {
    source: "iana"
  },
  "audio/dsr-es202211": {
    source: "iana"
  },
  "audio/dsr-es202212": {
    source: "iana"
  },
  "audio/dv": {
    source: "iana"
  },
  "audio/dvi4": {
    source: "iana"
  },
  "audio/eac3": {
    source: "iana"
  },
  "audio/encaprtp": {
    source: "iana"
  },
  "audio/evrc": {
    source: "iana"
  },
  "audio/evrc-qcp": {
    source: "iana"
  },
  "audio/evrc0": {
    source: "iana"
  },
  "audio/evrc1": {
    source: "iana"
  },
  "audio/evrcb": {
    source: "iana"
  },
  "audio/evrcb0": {
    source: "iana"
  },
  "audio/evrcb1": {
    source: "iana"
  },
  "audio/evrcnw": {
    source: "iana"
  },
  "audio/evrcnw0": {
    source: "iana"
  },
  "audio/evrcnw1": {
    source: "iana"
  },
  "audio/evrcwb": {
    source: "iana"
  },
  "audio/evrcwb0": {
    source: "iana"
  },
  "audio/evrcwb1": {
    source: "iana"
  },
  "audio/evs": {
    source: "iana"
  },
  "audio/flexfec": {
    source: "iana"
  },
  "audio/fwdred": {
    source: "iana"
  },
  "audio/g711-0": {
    source: "iana"
  },
  "audio/g719": {
    source: "iana"
  },
  "audio/g722": {
    source: "iana"
  },
  "audio/g7221": {
    source: "iana"
  },
  "audio/g723": {
    source: "iana"
  },
  "audio/g726-16": {
    source: "iana"
  },
  "audio/g726-24": {
    source: "iana"
  },
  "audio/g726-32": {
    source: "iana"
  },
  "audio/g726-40": {
    source: "iana"
  },
  "audio/g728": {
    source: "iana"
  },
  "audio/g729": {
    source: "iana"
  },
  "audio/g7291": {
    source: "iana"
  },
  "audio/g729d": {
    source: "iana"
  },
  "audio/g729e": {
    source: "iana"
  },
  "audio/gsm": {
    source: "iana"
  },
  "audio/gsm-efr": {
    source: "iana"
  },
  "audio/gsm-hr-08": {
    source: "iana"
  },
  "audio/ilbc": {
    source: "iana"
  },
  "audio/ip-mr_v2.5": {
    source: "iana"
  },
  "audio/isac": {
    source: "apache"
  },
  "audio/l16": {
    source: "iana"
  },
  "audio/l20": {
    source: "iana"
  },
  "audio/l24": {
    source: "iana",
    compressible: !1
  },
  "audio/l8": {
    source: "iana"
  },
  "audio/lpc": {
    source: "iana"
  },
  "audio/melp": {
    source: "iana"
  },
  "audio/melp1200": {
    source: "iana"
  },
  "audio/melp2400": {
    source: "iana"
  },
  "audio/melp600": {
    source: "iana"
  },
  "audio/mhas": {
    source: "iana"
  },
  "audio/midi": {
    source: "apache",
    extensions: [
      "mid",
      "midi",
      "kar",
      "rmi"
    ]
  },
  "audio/mobile-xmf": {
    source: "iana",
    extensions: [
      "mxmf"
    ]
  },
  "audio/mp3": {
    compressible: !1,
    extensions: [
      "mp3"
    ]
  },
  "audio/mp4": {
    source: "iana",
    compressible: !1,
    extensions: [
      "m4a",
      "mp4a"
    ]
  },
  "audio/mp4a-latm": {
    source: "iana"
  },
  "audio/mpa": {
    source: "iana"
  },
  "audio/mpa-robust": {
    source: "iana"
  },
  "audio/mpeg": {
    source: "iana",
    compressible: !1,
    extensions: [
      "mpga",
      "mp2",
      "mp2a",
      "mp3",
      "m2a",
      "m3a"
    ]
  },
  "audio/mpeg4-generic": {
    source: "iana"
  },
  "audio/musepack": {
    source: "apache"
  },
  "audio/ogg": {
    source: "iana",
    compressible: !1,
    extensions: [
      "oga",
      "ogg",
      "spx",
      "opus"
    ]
  },
  "audio/opus": {
    source: "iana"
  },
  "audio/parityfec": {
    source: "iana"
  },
  "audio/pcma": {
    source: "iana"
  },
  "audio/pcma-wb": {
    source: "iana"
  },
  "audio/pcmu": {
    source: "iana"
  },
  "audio/pcmu-wb": {
    source: "iana"
  },
  "audio/prs.sid": {
    source: "iana"
  },
  "audio/qcelp": {
    source: "iana"
  },
  "audio/raptorfec": {
    source: "iana"
  },
  "audio/red": {
    source: "iana"
  },
  "audio/rtp-enc-aescm128": {
    source: "iana"
  },
  "audio/rtp-midi": {
    source: "iana"
  },
  "audio/rtploopback": {
    source: "iana"
  },
  "audio/rtx": {
    source: "iana"
  },
  "audio/s3m": {
    source: "apache",
    extensions: [
      "s3m"
    ]
  },
  "audio/scip": {
    source: "iana"
  },
  "audio/silk": {
    source: "apache",
    extensions: [
      "sil"
    ]
  },
  "audio/smv": {
    source: "iana"
  },
  "audio/smv-qcp": {
    source: "iana"
  },
  "audio/smv0": {
    source: "iana"
  },
  "audio/sofa": {
    source: "iana"
  },
  "audio/sp-midi": {
    source: "iana"
  },
  "audio/speex": {
    source: "iana"
  },
  "audio/t140c": {
    source: "iana"
  },
  "audio/t38": {
    source: "iana"
  },
  "audio/telephone-event": {
    source: "iana"
  },
  "audio/tetra_acelp": {
    source: "iana"
  },
  "audio/tetra_acelp_bb": {
    source: "iana"
  },
  "audio/tone": {
    source: "iana"
  },
  "audio/tsvcis": {
    source: "iana"
  },
  "audio/uemclip": {
    source: "iana"
  },
  "audio/ulpfec": {
    source: "iana"
  },
  "audio/usac": {
    source: "iana"
  },
  "audio/vdvi": {
    source: "iana"
  },
  "audio/vmr-wb": {
    source: "iana"
  },
  "audio/vnd.3gpp.iufp": {
    source: "iana"
  },
  "audio/vnd.4sb": {
    source: "iana"
  },
  "audio/vnd.audiokoz": {
    source: "iana"
  },
  "audio/vnd.celp": {
    source: "iana"
  },
  "audio/vnd.cisco.nse": {
    source: "iana"
  },
  "audio/vnd.cmles.radio-events": {
    source: "iana"
  },
  "audio/vnd.cns.anp1": {
    source: "iana"
  },
  "audio/vnd.cns.inf1": {
    source: "iana"
  },
  "audio/vnd.dece.audio": {
    source: "iana",
    extensions: [
      "uva",
      "uvva"
    ]
  },
  "audio/vnd.digital-winds": {
    source: "iana",
    extensions: [
      "eol"
    ]
  },
  "audio/vnd.dlna.adts": {
    source: "iana"
  },
  "audio/vnd.dolby.heaac.1": {
    source: "iana"
  },
  "audio/vnd.dolby.heaac.2": {
    source: "iana"
  },
  "audio/vnd.dolby.mlp": {
    source: "iana"
  },
  "audio/vnd.dolby.mps": {
    source: "iana"
  },
  "audio/vnd.dolby.pl2": {
    source: "iana"
  },
  "audio/vnd.dolby.pl2x": {
    source: "iana"
  },
  "audio/vnd.dolby.pl2z": {
    source: "iana"
  },
  "audio/vnd.dolby.pulse.1": {
    source: "iana"
  },
  "audio/vnd.dra": {
    source: "iana",
    extensions: [
      "dra"
    ]
  },
  "audio/vnd.dts": {
    source: "iana",
    extensions: [
      "dts"
    ]
  },
  "audio/vnd.dts.hd": {
    source: "iana",
    extensions: [
      "dtshd"
    ]
  },
  "audio/vnd.dts.uhd": {
    source: "iana"
  },
  "audio/vnd.dvb.file": {
    source: "iana"
  },
  "audio/vnd.everad.plj": {
    source: "iana"
  },
  "audio/vnd.hns.audio": {
    source: "iana"
  },
  "audio/vnd.lucent.voice": {
    source: "iana",
    extensions: [
      "lvp"
    ]
  },
  "audio/vnd.ms-playready.media.pya": {
    source: "iana",
    extensions: [
      "pya"
    ]
  },
  "audio/vnd.nokia.mobile-xmf": {
    source: "iana"
  },
  "audio/vnd.nortel.vbk": {
    source: "iana"
  },
  "audio/vnd.nuera.ecelp4800": {
    source: "iana",
    extensions: [
      "ecelp4800"
    ]
  },
  "audio/vnd.nuera.ecelp7470": {
    source: "iana",
    extensions: [
      "ecelp7470"
    ]
  },
  "audio/vnd.nuera.ecelp9600": {
    source: "iana",
    extensions: [
      "ecelp9600"
    ]
  },
  "audio/vnd.octel.sbc": {
    source: "iana"
  },
  "audio/vnd.presonus.multitrack": {
    source: "iana"
  },
  "audio/vnd.qcelp": {
    source: "iana"
  },
  "audio/vnd.rhetorex.32kadpcm": {
    source: "iana"
  },
  "audio/vnd.rip": {
    source: "iana",
    extensions: [
      "rip"
    ]
  },
  "audio/vnd.rn-realaudio": {
    compressible: !1
  },
  "audio/vnd.sealedmedia.softseal.mpeg": {
    source: "iana"
  },
  "audio/vnd.vmx.cvsd": {
    source: "iana"
  },
  "audio/vnd.wave": {
    compressible: !1
  },
  "audio/vorbis": {
    source: "iana",
    compressible: !1
  },
  "audio/vorbis-config": {
    source: "iana"
  },
  "audio/wav": {
    compressible: !1,
    extensions: [
      "wav"
    ]
  },
  "audio/wave": {
    compressible: !1,
    extensions: [
      "wav"
    ]
  },
  "audio/webm": {
    source: "apache",
    compressible: !1,
    extensions: [
      "weba"
    ]
  },
  "audio/x-aac": {
    source: "apache",
    compressible: !1,
    extensions: [
      "aac"
    ]
  },
  "audio/x-aiff": {
    source: "apache",
    extensions: [
      "aif",
      "aiff",
      "aifc"
    ]
  },
  "audio/x-caf": {
    source: "apache",
    compressible: !1,
    extensions: [
      "caf"
    ]
  },
  "audio/x-flac": {
    source: "apache",
    extensions: [
      "flac"
    ]
  },
  "audio/x-m4a": {
    source: "nginx",
    extensions: [
      "m4a"
    ]
  },
  "audio/x-matroska": {
    source: "apache",
    extensions: [
      "mka"
    ]
  },
  "audio/x-mpegurl": {
    source: "apache",
    extensions: [
      "m3u"
    ]
  },
  "audio/x-ms-wax": {
    source: "apache",
    extensions: [
      "wax"
    ]
  },
  "audio/x-ms-wma": {
    source: "apache",
    extensions: [
      "wma"
    ]
  },
  "audio/x-pn-realaudio": {
    source: "apache",
    extensions: [
      "ram",
      "ra"
    ]
  },
  "audio/x-pn-realaudio-plugin": {
    source: "apache",
    extensions: [
      "rmp"
    ]
  },
  "audio/x-realaudio": {
    source: "nginx",
    extensions: [
      "ra"
    ]
  },
  "audio/x-tta": {
    source: "apache"
  },
  "audio/x-wav": {
    source: "apache",
    extensions: [
      "wav"
    ]
  },
  "audio/xm": {
    source: "apache",
    extensions: [
      "xm"
    ]
  },
  "chemical/x-cdx": {
    source: "apache",
    extensions: [
      "cdx"
    ]
  },
  "chemical/x-cif": {
    source: "apache",
    extensions: [
      "cif"
    ]
  },
  "chemical/x-cmdf": {
    source: "apache",
    extensions: [
      "cmdf"
    ]
  },
  "chemical/x-cml": {
    source: "apache",
    extensions: [
      "cml"
    ]
  },
  "chemical/x-csml": {
    source: "apache",
    extensions: [
      "csml"
    ]
  },
  "chemical/x-pdb": {
    source: "apache"
  },
  "chemical/x-xyz": {
    source: "apache",
    extensions: [
      "xyz"
    ]
  },
  "font/collection": {
    source: "iana",
    extensions: [
      "ttc"
    ]
  },
  "font/otf": {
    source: "iana",
    compressible: !0,
    extensions: [
      "otf"
    ]
  },
  "font/sfnt": {
    source: "iana"
  },
  "font/ttf": {
    source: "iana",
    compressible: !0,
    extensions: [
      "ttf"
    ]
  },
  "font/woff": {
    source: "iana",
    extensions: [
      "woff"
    ]
  },
  "font/woff2": {
    source: "iana",
    extensions: [
      "woff2"
    ]
  },
  "image/aces": {
    source: "iana",
    extensions: [
      "exr"
    ]
  },
  "image/apng": {
    compressible: !1,
    extensions: [
      "apng"
    ]
  },
  "image/avci": {
    source: "iana",
    extensions: [
      "avci"
    ]
  },
  "image/avcs": {
    source: "iana",
    extensions: [
      "avcs"
    ]
  },
  "image/avif": {
    source: "iana",
    compressible: !1,
    extensions: [
      "avif"
    ]
  },
  "image/bmp": {
    source: "iana",
    compressible: !0,
    extensions: [
      "bmp"
    ]
  },
  "image/cgm": {
    source: "iana",
    extensions: [
      "cgm"
    ]
  },
  "image/dicom-rle": {
    source: "iana",
    extensions: [
      "drle"
    ]
  },
  "image/emf": {
    source: "iana",
    extensions: [
      "emf"
    ]
  },
  "image/fits": {
    source: "iana",
    extensions: [
      "fits"
    ]
  },
  "image/g3fax": {
    source: "iana",
    extensions: [
      "g3"
    ]
  },
  "image/gif": {
    source: "iana",
    compressible: !1,
    extensions: [
      "gif"
    ]
  },
  "image/heic": {
    source: "iana",
    extensions: [
      "heic"
    ]
  },
  "image/heic-sequence": {
    source: "iana",
    extensions: [
      "heics"
    ]
  },
  "image/heif": {
    source: "iana",
    extensions: [
      "heif"
    ]
  },
  "image/heif-sequence": {
    source: "iana",
    extensions: [
      "heifs"
    ]
  },
  "image/hej2k": {
    source: "iana",
    extensions: [
      "hej2"
    ]
  },
  "image/hsj2": {
    source: "iana",
    extensions: [
      "hsj2"
    ]
  },
  "image/ief": {
    source: "iana",
    extensions: [
      "ief"
    ]
  },
  "image/jls": {
    source: "iana",
    extensions: [
      "jls"
    ]
  },
  "image/jp2": {
    source: "iana",
    compressible: !1,
    extensions: [
      "jp2",
      "jpg2"
    ]
  },
  "image/jpeg": {
    source: "iana",
    compressible: !1,
    extensions: [
      "jpeg",
      "jpg",
      "jpe"
    ]
  },
  "image/jph": {
    source: "iana",
    extensions: [
      "jph"
    ]
  },
  "image/jphc": {
    source: "iana",
    extensions: [
      "jhc"
    ]
  },
  "image/jpm": {
    source: "iana",
    compressible: !1,
    extensions: [
      "jpm"
    ]
  },
  "image/jpx": {
    source: "iana",
    compressible: !1,
    extensions: [
      "jpx",
      "jpf"
    ]
  },
  "image/jxr": {
    source: "iana",
    extensions: [
      "jxr"
    ]
  },
  "image/jxra": {
    source: "iana",
    extensions: [
      "jxra"
    ]
  },
  "image/jxrs": {
    source: "iana",
    extensions: [
      "jxrs"
    ]
  },
  "image/jxs": {
    source: "iana",
    extensions: [
      "jxs"
    ]
  },
  "image/jxsc": {
    source: "iana",
    extensions: [
      "jxsc"
    ]
  },
  "image/jxsi": {
    source: "iana",
    extensions: [
      "jxsi"
    ]
  },
  "image/jxss": {
    source: "iana",
    extensions: [
      "jxss"
    ]
  },
  "image/ktx": {
    source: "iana",
    extensions: [
      "ktx"
    ]
  },
  "image/ktx2": {
    source: "iana",
    extensions: [
      "ktx2"
    ]
  },
  "image/naplps": {
    source: "iana"
  },
  "image/pjpeg": {
    compressible: !1
  },
  "image/png": {
    source: "iana",
    compressible: !1,
    extensions: [
      "png"
    ]
  },
  "image/prs.btif": {
    source: "iana",
    extensions: [
      "btif"
    ]
  },
  "image/prs.pti": {
    source: "iana",
    extensions: [
      "pti"
    ]
  },
  "image/pwg-raster": {
    source: "iana"
  },
  "image/sgi": {
    source: "apache",
    extensions: [
      "sgi"
    ]
  },
  "image/svg+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "svg",
      "svgz"
    ]
  },
  "image/t38": {
    source: "iana",
    extensions: [
      "t38"
    ]
  },
  "image/tiff": {
    source: "iana",
    compressible: !1,
    extensions: [
      "tif",
      "tiff"
    ]
  },
  "image/tiff-fx": {
    source: "iana",
    extensions: [
      "tfx"
    ]
  },
  "image/vnd.adobe.photoshop": {
    source: "iana",
    compressible: !0,
    extensions: [
      "psd"
    ]
  },
  "image/vnd.airzip.accelerator.azv": {
    source: "iana",
    extensions: [
      "azv"
    ]
  },
  "image/vnd.cns.inf2": {
    source: "iana"
  },
  "image/vnd.dece.graphic": {
    source: "iana",
    extensions: [
      "uvi",
      "uvvi",
      "uvg",
      "uvvg"
    ]
  },
  "image/vnd.djvu": {
    source: "iana",
    extensions: [
      "djvu",
      "djv"
    ]
  },
  "image/vnd.dvb.subtitle": {
    source: "iana",
    extensions: [
      "sub"
    ]
  },
  "image/vnd.dwg": {
    source: "iana",
    extensions: [
      "dwg"
    ]
  },
  "image/vnd.dxf": {
    source: "iana",
    extensions: [
      "dxf"
    ]
  },
  "image/vnd.fastbidsheet": {
    source: "iana",
    extensions: [
      "fbs"
    ]
  },
  "image/vnd.fpx": {
    source: "iana",
    extensions: [
      "fpx"
    ]
  },
  "image/vnd.fst": {
    source: "iana",
    extensions: [
      "fst"
    ]
  },
  "image/vnd.fujixerox.edmics-mmr": {
    source: "iana",
    extensions: [
      "mmr"
    ]
  },
  "image/vnd.fujixerox.edmics-rlc": {
    source: "iana",
    extensions: [
      "rlc"
    ]
  },
  "image/vnd.globalgraphics.pgb": {
    source: "iana"
  },
  "image/vnd.microsoft.icon": {
    source: "iana",
    compressible: !0,
    extensions: [
      "ico"
    ]
  },
  "image/vnd.mix": {
    source: "iana"
  },
  "image/vnd.mozilla.apng": {
    source: "iana"
  },
  "image/vnd.ms-dds": {
    compressible: !0,
    extensions: [
      "dds"
    ]
  },
  "image/vnd.ms-modi": {
    source: "iana",
    extensions: [
      "mdi"
    ]
  },
  "image/vnd.ms-photo": {
    source: "apache",
    extensions: [
      "wdp"
    ]
  },
  "image/vnd.net-fpx": {
    source: "iana",
    extensions: [
      "npx"
    ]
  },
  "image/vnd.pco.b16": {
    source: "iana",
    extensions: [
      "b16"
    ]
  },
  "image/vnd.radiance": {
    source: "iana"
  },
  "image/vnd.sealed.png": {
    source: "iana"
  },
  "image/vnd.sealedmedia.softseal.gif": {
    source: "iana"
  },
  "image/vnd.sealedmedia.softseal.jpg": {
    source: "iana"
  },
  "image/vnd.svf": {
    source: "iana"
  },
  "image/vnd.tencent.tap": {
    source: "iana",
    extensions: [
      "tap"
    ]
  },
  "image/vnd.valve.source.texture": {
    source: "iana",
    extensions: [
      "vtf"
    ]
  },
  "image/vnd.wap.wbmp": {
    source: "iana",
    extensions: [
      "wbmp"
    ]
  },
  "image/vnd.xiff": {
    source: "iana",
    extensions: [
      "xif"
    ]
  },
  "image/vnd.zbrush.pcx": {
    source: "iana",
    extensions: [
      "pcx"
    ]
  },
  "image/webp": {
    source: "apache",
    extensions: [
      "webp"
    ]
  },
  "image/wmf": {
    source: "iana",
    extensions: [
      "wmf"
    ]
  },
  "image/x-3ds": {
    source: "apache",
    extensions: [
      "3ds"
    ]
  },
  "image/x-cmu-raster": {
    source: "apache",
    extensions: [
      "ras"
    ]
  },
  "image/x-cmx": {
    source: "apache",
    extensions: [
      "cmx"
    ]
  },
  "image/x-freehand": {
    source: "apache",
    extensions: [
      "fh",
      "fhc",
      "fh4",
      "fh5",
      "fh7"
    ]
  },
  "image/x-icon": {
    source: "apache",
    compressible: !0,
    extensions: [
      "ico"
    ]
  },
  "image/x-jng": {
    source: "nginx",
    extensions: [
      "jng"
    ]
  },
  "image/x-mrsid-image": {
    source: "apache",
    extensions: [
      "sid"
    ]
  },
  "image/x-ms-bmp": {
    source: "nginx",
    compressible: !0,
    extensions: [
      "bmp"
    ]
  },
  "image/x-pcx": {
    source: "apache",
    extensions: [
      "pcx"
    ]
  },
  "image/x-pict": {
    source: "apache",
    extensions: [
      "pic",
      "pct"
    ]
  },
  "image/x-portable-anymap": {
    source: "apache",
    extensions: [
      "pnm"
    ]
  },
  "image/x-portable-bitmap": {
    source: "apache",
    extensions: [
      "pbm"
    ]
  },
  "image/x-portable-graymap": {
    source: "apache",
    extensions: [
      "pgm"
    ]
  },
  "image/x-portable-pixmap": {
    source: "apache",
    extensions: [
      "ppm"
    ]
  },
  "image/x-rgb": {
    source: "apache",
    extensions: [
      "rgb"
    ]
  },
  "image/x-tga": {
    source: "apache",
    extensions: [
      "tga"
    ]
  },
  "image/x-xbitmap": {
    source: "apache",
    extensions: [
      "xbm"
    ]
  },
  "image/x-xcf": {
    compressible: !1
  },
  "image/x-xpixmap": {
    source: "apache",
    extensions: [
      "xpm"
    ]
  },
  "image/x-xwindowdump": {
    source: "apache",
    extensions: [
      "xwd"
    ]
  },
  "message/cpim": {
    source: "iana"
  },
  "message/delivery-status": {
    source: "iana"
  },
  "message/disposition-notification": {
    source: "iana",
    extensions: [
      "disposition-notification"
    ]
  },
  "message/external-body": {
    source: "iana"
  },
  "message/feedback-report": {
    source: "iana"
  },
  "message/global": {
    source: "iana",
    extensions: [
      "u8msg"
    ]
  },
  "message/global-delivery-status": {
    source: "iana",
    extensions: [
      "u8dsn"
    ]
  },
  "message/global-disposition-notification": {
    source: "iana",
    extensions: [
      "u8mdn"
    ]
  },
  "message/global-headers": {
    source: "iana",
    extensions: [
      "u8hdr"
    ]
  },
  "message/http": {
    source: "iana",
    compressible: !1
  },
  "message/imdn+xml": {
    source: "iana",
    compressible: !0
  },
  "message/news": {
    source: "iana"
  },
  "message/partial": {
    source: "iana",
    compressible: !1
  },
  "message/rfc822": {
    source: "iana",
    compressible: !0,
    extensions: [
      "eml",
      "mime"
    ]
  },
  "message/s-http": {
    source: "iana"
  },
  "message/sip": {
    source: "iana"
  },
  "message/sipfrag": {
    source: "iana"
  },
  "message/tracking-status": {
    source: "iana"
  },
  "message/vnd.si.simp": {
    source: "iana"
  },
  "message/vnd.wfa.wsc": {
    source: "iana",
    extensions: [
      "wsc"
    ]
  },
  "model/3mf": {
    source: "iana",
    extensions: [
      "3mf"
    ]
  },
  "model/e57": {
    source: "iana"
  },
  "model/gltf+json": {
    source: "iana",
    compressible: !0,
    extensions: [
      "gltf"
    ]
  },
  "model/gltf-binary": {
    source: "iana",
    compressible: !0,
    extensions: [
      "glb"
    ]
  },
  "model/iges": {
    source: "iana",
    compressible: !1,
    extensions: [
      "igs",
      "iges"
    ]
  },
  "model/mesh": {
    source: "iana",
    compressible: !1,
    extensions: [
      "msh",
      "mesh",
      "silo"
    ]
  },
  "model/mtl": {
    source: "iana",
    extensions: [
      "mtl"
    ]
  },
  "model/obj": {
    source: "iana",
    extensions: [
      "obj"
    ]
  },
  "model/step": {
    source: "iana"
  },
  "model/step+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "stpx"
    ]
  },
  "model/step+zip": {
    source: "iana",
    compressible: !1,
    extensions: [
      "stpz"
    ]
  },
  "model/step-xml+zip": {
    source: "iana",
    compressible: !1,
    extensions: [
      "stpxz"
    ]
  },
  "model/stl": {
    source: "iana",
    extensions: [
      "stl"
    ]
  },
  "model/vnd.collada+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "dae"
    ]
  },
  "model/vnd.dwf": {
    source: "iana",
    extensions: [
      "dwf"
    ]
  },
  "model/vnd.flatland.3dml": {
    source: "iana"
  },
  "model/vnd.gdl": {
    source: "iana",
    extensions: [
      "gdl"
    ]
  },
  "model/vnd.gs-gdl": {
    source: "apache"
  },
  "model/vnd.gs.gdl": {
    source: "iana"
  },
  "model/vnd.gtw": {
    source: "iana",
    extensions: [
      "gtw"
    ]
  },
  "model/vnd.moml+xml": {
    source: "iana",
    compressible: !0
  },
  "model/vnd.mts": {
    source: "iana",
    extensions: [
      "mts"
    ]
  },
  "model/vnd.opengex": {
    source: "iana",
    extensions: [
      "ogex"
    ]
  },
  "model/vnd.parasolid.transmit.binary": {
    source: "iana",
    extensions: [
      "x_b"
    ]
  },
  "model/vnd.parasolid.transmit.text": {
    source: "iana",
    extensions: [
      "x_t"
    ]
  },
  "model/vnd.pytha.pyox": {
    source: "iana"
  },
  "model/vnd.rosette.annotated-data-model": {
    source: "iana"
  },
  "model/vnd.sap.vds": {
    source: "iana",
    extensions: [
      "vds"
    ]
  },
  "model/vnd.usdz+zip": {
    source: "iana",
    compressible: !1,
    extensions: [
      "usdz"
    ]
  },
  "model/vnd.valve.source.compiled-map": {
    source: "iana",
    extensions: [
      "bsp"
    ]
  },
  "model/vnd.vtu": {
    source: "iana",
    extensions: [
      "vtu"
    ]
  },
  "model/vrml": {
    source: "iana",
    compressible: !1,
    extensions: [
      "wrl",
      "vrml"
    ]
  },
  "model/x3d+binary": {
    source: "apache",
    compressible: !1,
    extensions: [
      "x3db",
      "x3dbz"
    ]
  },
  "model/x3d+fastinfoset": {
    source: "iana",
    extensions: [
      "x3db"
    ]
  },
  "model/x3d+vrml": {
    source: "apache",
    compressible: !1,
    extensions: [
      "x3dv",
      "x3dvz"
    ]
  },
  "model/x3d+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "x3d",
      "x3dz"
    ]
  },
  "model/x3d-vrml": {
    source: "iana",
    extensions: [
      "x3dv"
    ]
  },
  "multipart/alternative": {
    source: "iana",
    compressible: !1
  },
  "multipart/appledouble": {
    source: "iana"
  },
  "multipart/byteranges": {
    source: "iana"
  },
  "multipart/digest": {
    source: "iana"
  },
  "multipart/encrypted": {
    source: "iana",
    compressible: !1
  },
  "multipart/form-data": {
    source: "iana",
    compressible: !1
  },
  "multipart/header-set": {
    source: "iana"
  },
  "multipart/mixed": {
    source: "iana"
  },
  "multipart/multilingual": {
    source: "iana"
  },
  "multipart/parallel": {
    source: "iana"
  },
  "multipart/related": {
    source: "iana",
    compressible: !1
  },
  "multipart/report": {
    source: "iana"
  },
  "multipart/signed": {
    source: "iana",
    compressible: !1
  },
  "multipart/vnd.bint.med-plus": {
    source: "iana"
  },
  "multipart/voice-message": {
    source: "iana"
  },
  "multipart/x-mixed-replace": {
    source: "iana"
  },
  "text/1d-interleaved-parityfec": {
    source: "iana"
  },
  "text/cache-manifest": {
    source: "iana",
    compressible: !0,
    extensions: [
      "appcache",
      "manifest"
    ]
  },
  "text/calendar": {
    source: "iana",
    extensions: [
      "ics",
      "ifb"
    ]
  },
  "text/calender": {
    compressible: !0
  },
  "text/cmd": {
    compressible: !0
  },
  "text/coffeescript": {
    extensions: [
      "coffee",
      "litcoffee"
    ]
  },
  "text/cql": {
    source: "iana"
  },
  "text/cql-expression": {
    source: "iana"
  },
  "text/cql-identifier": {
    source: "iana"
  },
  "text/css": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0,
    extensions: [
      "css"
    ]
  },
  "text/csv": {
    source: "iana",
    compressible: !0,
    extensions: [
      "csv"
    ]
  },
  "text/csv-schema": {
    source: "iana"
  },
  "text/directory": {
    source: "iana"
  },
  "text/dns": {
    source: "iana"
  },
  "text/ecmascript": {
    source: "iana"
  },
  "text/encaprtp": {
    source: "iana"
  },
  "text/enriched": {
    source: "iana"
  },
  "text/fhirpath": {
    source: "iana"
  },
  "text/flexfec": {
    source: "iana"
  },
  "text/fwdred": {
    source: "iana"
  },
  "text/gff3": {
    source: "iana"
  },
  "text/grammar-ref-list": {
    source: "iana"
  },
  "text/html": {
    source: "iana",
    compressible: !0,
    extensions: [
      "html",
      "htm",
      "shtml"
    ]
  },
  "text/jade": {
    extensions: [
      "jade"
    ]
  },
  "text/javascript": {
    source: "iana",
    compressible: !0
  },
  "text/jcr-cnd": {
    source: "iana"
  },
  "text/jsx": {
    compressible: !0,
    extensions: [
      "jsx"
    ]
  },
  "text/less": {
    compressible: !0,
    extensions: [
      "less"
    ]
  },
  "text/markdown": {
    source: "iana",
    compressible: !0,
    extensions: [
      "markdown",
      "md"
    ]
  },
  "text/mathml": {
    source: "nginx",
    extensions: [
      "mml"
    ]
  },
  "text/mdx": {
    compressible: !0,
    extensions: [
      "mdx"
    ]
  },
  "text/mizar": {
    source: "iana"
  },
  "text/n3": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0,
    extensions: [
      "n3"
    ]
  },
  "text/parameters": {
    source: "iana",
    charset: "UTF-8"
  },
  "text/parityfec": {
    source: "iana"
  },
  "text/plain": {
    source: "iana",
    compressible: !0,
    extensions: [
      "txt",
      "text",
      "conf",
      "def",
      "list",
      "log",
      "in",
      "ini"
    ]
  },
  "text/provenance-notation": {
    source: "iana",
    charset: "UTF-8"
  },
  "text/prs.fallenstein.rst": {
    source: "iana"
  },
  "text/prs.lines.tag": {
    source: "iana",
    extensions: [
      "dsc"
    ]
  },
  "text/prs.prop.logic": {
    source: "iana"
  },
  "text/raptorfec": {
    source: "iana"
  },
  "text/red": {
    source: "iana"
  },
  "text/rfc822-headers": {
    source: "iana"
  },
  "text/richtext": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rtx"
    ]
  },
  "text/rtf": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rtf"
    ]
  },
  "text/rtp-enc-aescm128": {
    source: "iana"
  },
  "text/rtploopback": {
    source: "iana"
  },
  "text/rtx": {
    source: "iana"
  },
  "text/sgml": {
    source: "iana",
    extensions: [
      "sgml",
      "sgm"
    ]
  },
  "text/shaclc": {
    source: "iana"
  },
  "text/shex": {
    source: "iana",
    extensions: [
      "shex"
    ]
  },
  "text/slim": {
    extensions: [
      "slim",
      "slm"
    ]
  },
  "text/spdx": {
    source: "iana",
    extensions: [
      "spdx"
    ]
  },
  "text/strings": {
    source: "iana"
  },
  "text/stylus": {
    extensions: [
      "stylus",
      "styl"
    ]
  },
  "text/t140": {
    source: "iana"
  },
  "text/tab-separated-values": {
    source: "iana",
    compressible: !0,
    extensions: [
      "tsv"
    ]
  },
  "text/troff": {
    source: "iana",
    extensions: [
      "t",
      "tr",
      "roff",
      "man",
      "me",
      "ms"
    ]
  },
  "text/turtle": {
    source: "iana",
    charset: "UTF-8",
    extensions: [
      "ttl"
    ]
  },
  "text/ulpfec": {
    source: "iana"
  },
  "text/uri-list": {
    source: "iana",
    compressible: !0,
    extensions: [
      "uri",
      "uris",
      "urls"
    ]
  },
  "text/vcard": {
    source: "iana",
    compressible: !0,
    extensions: [
      "vcard"
    ]
  },
  "text/vnd.a": {
    source: "iana"
  },
  "text/vnd.abc": {
    source: "iana"
  },
  "text/vnd.ascii-art": {
    source: "iana"
  },
  "text/vnd.curl": {
    source: "iana",
    extensions: [
      "curl"
    ]
  },
  "text/vnd.curl.dcurl": {
    source: "apache",
    extensions: [
      "dcurl"
    ]
  },
  "text/vnd.curl.mcurl": {
    source: "apache",
    extensions: [
      "mcurl"
    ]
  },
  "text/vnd.curl.scurl": {
    source: "apache",
    extensions: [
      "scurl"
    ]
  },
  "text/vnd.debian.copyright": {
    source: "iana",
    charset: "UTF-8"
  },
  "text/vnd.dmclientscript": {
    source: "iana"
  },
  "text/vnd.dvb.subtitle": {
    source: "iana",
    extensions: [
      "sub"
    ]
  },
  "text/vnd.esmertec.theme-descriptor": {
    source: "iana",
    charset: "UTF-8"
  },
  "text/vnd.familysearch.gedcom": {
    source: "iana",
    extensions: [
      "ged"
    ]
  },
  "text/vnd.ficlab.flt": {
    source: "iana"
  },
  "text/vnd.fly": {
    source: "iana",
    extensions: [
      "fly"
    ]
  },
  "text/vnd.fmi.flexstor": {
    source: "iana",
    extensions: [
      "flx"
    ]
  },
  "text/vnd.gml": {
    source: "iana"
  },
  "text/vnd.graphviz": {
    source: "iana",
    extensions: [
      "gv"
    ]
  },
  "text/vnd.hans": {
    source: "iana"
  },
  "text/vnd.hgl": {
    source: "iana"
  },
  "text/vnd.in3d.3dml": {
    source: "iana",
    extensions: [
      "3dml"
    ]
  },
  "text/vnd.in3d.spot": {
    source: "iana",
    extensions: [
      "spot"
    ]
  },
  "text/vnd.iptc.newsml": {
    source: "iana"
  },
  "text/vnd.iptc.nitf": {
    source: "iana"
  },
  "text/vnd.latex-z": {
    source: "iana"
  },
  "text/vnd.motorola.reflex": {
    source: "iana"
  },
  "text/vnd.ms-mediapackage": {
    source: "iana"
  },
  "text/vnd.net2phone.commcenter.command": {
    source: "iana"
  },
  "text/vnd.radisys.msml-basic-layout": {
    source: "iana"
  },
  "text/vnd.senx.warpscript": {
    source: "iana"
  },
  "text/vnd.si.uricatalogue": {
    source: "iana"
  },
  "text/vnd.sosi": {
    source: "iana"
  },
  "text/vnd.sun.j2me.app-descriptor": {
    source: "iana",
    charset: "UTF-8",
    extensions: [
      "jad"
    ]
  },
  "text/vnd.trolltech.linguist": {
    source: "iana",
    charset: "UTF-8"
  },
  "text/vnd.wap.si": {
    source: "iana"
  },
  "text/vnd.wap.sl": {
    source: "iana"
  },
  "text/vnd.wap.wml": {
    source: "iana",
    extensions: [
      "wml"
    ]
  },
  "text/vnd.wap.wmlscript": {
    source: "iana",
    extensions: [
      "wmls"
    ]
  },
  "text/vtt": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0,
    extensions: [
      "vtt"
    ]
  },
  "text/x-asm": {
    source: "apache",
    extensions: [
      "s",
      "asm"
    ]
  },
  "text/x-c": {
    source: "apache",
    extensions: [
      "c",
      "cc",
      "cxx",
      "cpp",
      "h",
      "hh",
      "dic"
    ]
  },
  "text/x-component": {
    source: "nginx",
    extensions: [
      "htc"
    ]
  },
  "text/x-fortran": {
    source: "apache",
    extensions: [
      "f",
      "for",
      "f77",
      "f90"
    ]
  },
  "text/x-gwt-rpc": {
    compressible: !0
  },
  "text/x-handlebars-template": {
    extensions: [
      "hbs"
    ]
  },
  "text/x-java-source": {
    source: "apache",
    extensions: [
      "java"
    ]
  },
  "text/x-jquery-tmpl": {
    compressible: !0
  },
  "text/x-lua": {
    extensions: [
      "lua"
    ]
  },
  "text/x-markdown": {
    compressible: !0,
    extensions: [
      "mkd"
    ]
  },
  "text/x-nfo": {
    source: "apache",
    extensions: [
      "nfo"
    ]
  },
  "text/x-opml": {
    source: "apache",
    extensions: [
      "opml"
    ]
  },
  "text/x-org": {
    compressible: !0,
    extensions: [
      "org"
    ]
  },
  "text/x-pascal": {
    source: "apache",
    extensions: [
      "p",
      "pas"
    ]
  },
  "text/x-processing": {
    compressible: !0,
    extensions: [
      "pde"
    ]
  },
  "text/x-sass": {
    extensions: [
      "sass"
    ]
  },
  "text/x-scss": {
    extensions: [
      "scss"
    ]
  },
  "text/x-setext": {
    source: "apache",
    extensions: [
      "etx"
    ]
  },
  "text/x-sfv": {
    source: "apache",
    extensions: [
      "sfv"
    ]
  },
  "text/x-suse-ymp": {
    compressible: !0,
    extensions: [
      "ymp"
    ]
  },
  "text/x-uuencode": {
    source: "apache",
    extensions: [
      "uu"
    ]
  },
  "text/x-vcalendar": {
    source: "apache",
    extensions: [
      "vcs"
    ]
  },
  "text/x-vcard": {
    source: "apache",
    extensions: [
      "vcf"
    ]
  },
  "text/xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xml"
    ]
  },
  "text/xml-external-parsed-entity": {
    source: "iana"
  },
  "text/yaml": {
    compressible: !0,
    extensions: [
      "yaml",
      "yml"
    ]
  },
  "video/1d-interleaved-parityfec": {
    source: "iana"
  },
  "video/3gpp": {
    source: "iana",
    extensions: [
      "3gp",
      "3gpp"
    ]
  },
  "video/3gpp-tt": {
    source: "iana"
  },
  "video/3gpp2": {
    source: "iana",
    extensions: [
      "3g2"
    ]
  },
  "video/av1": {
    source: "iana"
  },
  "video/bmpeg": {
    source: "iana"
  },
  "video/bt656": {
    source: "iana"
  },
  "video/celb": {
    source: "iana"
  },
  "video/dv": {
    source: "iana"
  },
  "video/encaprtp": {
    source: "iana"
  },
  "video/ffv1": {
    source: "iana"
  },
  "video/flexfec": {
    source: "iana"
  },
  "video/h261": {
    source: "iana",
    extensions: [
      "h261"
    ]
  },
  "video/h263": {
    source: "iana",
    extensions: [
      "h263"
    ]
  },
  "video/h263-1998": {
    source: "iana"
  },
  "video/h263-2000": {
    source: "iana"
  },
  "video/h264": {
    source: "iana",
    extensions: [
      "h264"
    ]
  },
  "video/h264-rcdo": {
    source: "iana"
  },
  "video/h264-svc": {
    source: "iana"
  },
  "video/h265": {
    source: "iana"
  },
  "video/iso.segment": {
    source: "iana",
    extensions: [
      "m4s"
    ]
  },
  "video/jpeg": {
    source: "iana",
    extensions: [
      "jpgv"
    ]
  },
  "video/jpeg2000": {
    source: "iana"
  },
  "video/jpm": {
    source: "apache",
    extensions: [
      "jpm",
      "jpgm"
    ]
  },
  "video/jxsv": {
    source: "iana"
  },
  "video/mj2": {
    source: "iana",
    extensions: [
      "mj2",
      "mjp2"
    ]
  },
  "video/mp1s": {
    source: "iana"
  },
  "video/mp2p": {
    source: "iana"
  },
  "video/mp2t": {
    source: "iana",
    extensions: [
      "ts"
    ]
  },
  "video/mp4": {
    source: "iana",
    compressible: !1,
    extensions: [
      "mp4",
      "mp4v",
      "mpg4"
    ]
  },
  "video/mp4v-es": {
    source: "iana"
  },
  "video/mpeg": {
    source: "iana",
    compressible: !1,
    extensions: [
      "mpeg",
      "mpg",
      "mpe",
      "m1v",
      "m2v"
    ]
  },
  "video/mpeg4-generic": {
    source: "iana"
  },
  "video/mpv": {
    source: "iana"
  },
  "video/nv": {
    source: "iana"
  },
  "video/ogg": {
    source: "iana",
    compressible: !1,
    extensions: [
      "ogv"
    ]
  },
  "video/parityfec": {
    source: "iana"
  },
  "video/pointer": {
    source: "iana"
  },
  "video/quicktime": {
    source: "iana",
    compressible: !1,
    extensions: [
      "qt",
      "mov"
    ]
  },
  "video/raptorfec": {
    source: "iana"
  },
  "video/raw": {
    source: "iana"
  },
  "video/rtp-enc-aescm128": {
    source: "iana"
  },
  "video/rtploopback": {
    source: "iana"
  },
  "video/rtx": {
    source: "iana"
  },
  "video/scip": {
    source: "iana"
  },
  "video/smpte291": {
    source: "iana"
  },
  "video/smpte292m": {
    source: "iana"
  },
  "video/ulpfec": {
    source: "iana"
  },
  "video/vc1": {
    source: "iana"
  },
  "video/vc2": {
    source: "iana"
  },
  "video/vnd.cctv": {
    source: "iana"
  },
  "video/vnd.dece.hd": {
    source: "iana",
    extensions: [
      "uvh",
      "uvvh"
    ]
  },
  "video/vnd.dece.mobile": {
    source: "iana",
    extensions: [
      "uvm",
      "uvvm"
    ]
  },
  "video/vnd.dece.mp4": {
    source: "iana"
  },
  "video/vnd.dece.pd": {
    source: "iana",
    extensions: [
      "uvp",
      "uvvp"
    ]
  },
  "video/vnd.dece.sd": {
    source: "iana",
    extensions: [
      "uvs",
      "uvvs"
    ]
  },
  "video/vnd.dece.video": {
    source: "iana",
    extensions: [
      "uvv",
      "uvvv"
    ]
  },
  "video/vnd.directv.mpeg": {
    source: "iana"
  },
  "video/vnd.directv.mpeg-tts": {
    source: "iana"
  },
  "video/vnd.dlna.mpeg-tts": {
    source: "iana"
  },
  "video/vnd.dvb.file": {
    source: "iana",
    extensions: [
      "dvb"
    ]
  },
  "video/vnd.fvt": {
    source: "iana",
    extensions: [
      "fvt"
    ]
  },
  "video/vnd.hns.video": {
    source: "iana"
  },
  "video/vnd.iptvforum.1dparityfec-1010": {
    source: "iana"
  },
  "video/vnd.iptvforum.1dparityfec-2005": {
    source: "iana"
  },
  "video/vnd.iptvforum.2dparityfec-1010": {
    source: "iana"
  },
  "video/vnd.iptvforum.2dparityfec-2005": {
    source: "iana"
  },
  "video/vnd.iptvforum.ttsavc": {
    source: "iana"
  },
  "video/vnd.iptvforum.ttsmpeg2": {
    source: "iana"
  },
  "video/vnd.motorola.video": {
    source: "iana"
  },
  "video/vnd.motorola.videop": {
    source: "iana"
  },
  "video/vnd.mpegurl": {
    source: "iana",
    extensions: [
      "mxu",
      "m4u"
    ]
  },
  "video/vnd.ms-playready.media.pyv": {
    source: "iana",
    extensions: [
      "pyv"
    ]
  },
  "video/vnd.nokia.interleaved-multimedia": {
    source: "iana"
  },
  "video/vnd.nokia.mp4vr": {
    source: "iana"
  },
  "video/vnd.nokia.videovoip": {
    source: "iana"
  },
  "video/vnd.objectvideo": {
    source: "iana"
  },
  "video/vnd.radgamettools.bink": {
    source: "iana"
  },
  "video/vnd.radgamettools.smacker": {
    source: "iana"
  },
  "video/vnd.sealed.mpeg1": {
    source: "iana"
  },
  "video/vnd.sealed.mpeg4": {
    source: "iana"
  },
  "video/vnd.sealed.swf": {
    source: "iana"
  },
  "video/vnd.sealedmedia.softseal.mov": {
    source: "iana"
  },
  "video/vnd.uvvu.mp4": {
    source: "iana",
    extensions: [
      "uvu",
      "uvvu"
    ]
  },
  "video/vnd.vivo": {
    source: "iana",
    extensions: [
      "viv"
    ]
  },
  "video/vnd.youtube.yt": {
    source: "iana"
  },
  "video/vp8": {
    source: "iana"
  },
  "video/vp9": {
    source: "iana"
  },
  "video/webm": {
    source: "apache",
    compressible: !1,
    extensions: [
      "webm"
    ]
  },
  "video/x-f4v": {
    source: "apache",
    extensions: [
      "f4v"
    ]
  },
  "video/x-fli": {
    source: "apache",
    extensions: [
      "fli"
    ]
  },
  "video/x-flv": {
    source: "apache",
    compressible: !1,
    extensions: [
      "flv"
    ]
  },
  "video/x-m4v": {
    source: "apache",
    extensions: [
      "m4v"
    ]
  },
  "video/x-matroska": {
    source: "apache",
    compressible: !1,
    extensions: [
      "mkv",
      "mk3d",
      "mks"
    ]
  },
  "video/x-mng": {
    source: "apache",
    extensions: [
      "mng"
    ]
  },
  "video/x-ms-asf": {
    source: "apache",
    extensions: [
      "asf",
      "asx"
    ]
  },
  "video/x-ms-vob": {
    source: "apache",
    extensions: [
      "vob"
    ]
  },
  "video/x-ms-wm": {
    source: "apache",
    extensions: [
      "wm"
    ]
  },
  "video/x-ms-wmv": {
    source: "apache",
    compressible: !1,
    extensions: [
      "wmv"
    ]
  },
  "video/x-ms-wmx": {
    source: "apache",
    extensions: [
      "wmx"
    ]
  },
  "video/x-ms-wvx": {
    source: "apache",
    extensions: [
      "wvx"
    ]
  },
  "video/x-msvideo": {
    source: "apache",
    extensions: [
      "avi"
    ]
  },
  "video/x-sgi-movie": {
    source: "apache",
    extensions: [
      "movie"
    ]
  },
  "video/x-smv": {
    source: "apache",
    extensions: [
      "smv"
    ]
  },
  "x-conference/x-cooltalk": {
    source: "apache",
    extensions: [
      "ice"
    ]
  },
  "x-shader/x-fragment": {
    compressible: !0
  },
  "x-shader/x-vertex": {
    compressible: !0
  }
};
/*!
 * mime-db
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015-2022 Douglas Christopher Wilson
 * MIT Licensed
 */
var yb = xb;
/*!
 * mime-types
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
(function(e) {
  var t = yb, n = ae.extname, r = /^\s*([^;\s]*)(?:;|\s|$)/, i = /^text\//i;
  e.charset = a, e.charsets = { lookup: a }, e.contentType = o, e.extension = c, e.extensions = /* @__PURE__ */ Object.create(null), e.lookup = s, e.types = /* @__PURE__ */ Object.create(null), u(e.extensions, e.types);
  function a(l) {
    if (!l || typeof l != "string")
      return !1;
    var p = r.exec(l), d = p && t[p[1].toLowerCase()];
    return d && d.charset ? d.charset : p && i.test(p[1]) ? "UTF-8" : !1;
  }
  function o(l) {
    if (!l || typeof l != "string")
      return !1;
    var p = l.indexOf("/") === -1 ? e.lookup(l) : l;
    if (!p)
      return !1;
    if (p.indexOf("charset") === -1) {
      var d = e.charset(p);
      d && (p += "; charset=" + d.toLowerCase());
    }
    return p;
  }
  function c(l) {
    if (!l || typeof l != "string")
      return !1;
    var p = r.exec(l), d = p && e.extensions[p[1].toLowerCase()];
    return !d || !d.length ? !1 : d[0];
  }
  function s(l) {
    if (!l || typeof l != "string")
      return !1;
    var p = n("x." + l).toLowerCase().substr(1);
    return p && e.types[p] || !1;
  }
  function u(l, p) {
    var d = ["nginx", "apache", void 0, "iana"];
    Object.keys(t).forEach(function(g) {
      var v = t[g], y = v.extensions;
      if (!(!y || !y.length)) {
        l[g] = y;
        for (var x = 0; x < y.length; x++) {
          var w = y[x];
          if (p[w]) {
            var A = d.indexOf(t[p[w]].source), O = d.indexOf(v.source);
            if (p[w] !== "application/octet-stream" && (A > O || A === O && p[w].substr(0, 12) === "application/"))
              continue;
          }
          p[w] = g;
        }
      }
    });
  }
})(lm);
var bb = wb;
function wb(e) {
  var t = typeof setImmediate == "function" ? setImmediate : typeof process == "object" && typeof process.nextTick == "function" ? process.nextTick : null;
  t ? t(e) : setTimeout(e, 0);
}
var yp = bb, um = Eb;
function Eb(e) {
  var t = !1;
  return yp(function() {
    t = !0;
  }), function(r, i) {
    t ? e(r, i) : yp(function() {
      e(r, i);
    });
  };
}
var pm = _b;
function _b(e) {
  Object.keys(e.jobs).forEach(Sb.bind(e)), e.jobs = {};
}
function Sb(e) {
  typeof this.jobs[e] == "function" && this.jobs[e]();
}
var bp = um, Tb = pm, fm = Ab;
function Ab(e, t, n, r) {
  var i = n.keyedList ? n.keyedList[n.index] : n.index;
  n.jobs[i] = Rb(t, i, e[i], function(a, o) {
    i in n.jobs && (delete n.jobs[i], a ? Tb(n) : n.results[i] = o, r(a, n.results));
  });
}
function Rb(e, t, n, r) {
  var i;
  return e.length == 2 ? i = e(n, bp(r)) : i = e(n, t, bp(r)), i;
}
var dm = Cb;
function Cb(e, t) {
  var n = !Array.isArray(e), r = {
    index: 0,
    keyedList: n || t ? Object.keys(e) : null,
    jobs: {},
    results: n ? {} : [],
    size: n ? Object.keys(e).length : e.length
  };
  return t && r.keyedList.sort(n ? t : function(i, a) {
    return t(e[i], e[a]);
  }), r;
}
var Ob = pm, $b = um, hm = Ib;
function Ib(e) {
  Object.keys(this.jobs).length && (this.index = this.size, Ob(this), $b(e)(null, this.results));
}
var Pb = fm, Db = dm, Fb = hm, Nb = kb;
function kb(e, t, n) {
  for (var r = Db(e); r.index < (r.keyedList || e).length; )
    Pb(e, t, r, function(i, a) {
      if (i) {
        n(i, a);
        return;
      }
      if (Object.keys(r.jobs).length === 0) {
        n(null, r.results);
        return;
      }
    }), r.index++;
  return Fb.bind(r, n);
}
var Co = { exports: {} }, wp = fm, Lb = dm, Ub = hm;
Co.exports = Bb;
Co.exports.ascending = mm;
Co.exports.descending = jb;
function Bb(e, t, n, r) {
  var i = Lb(e, n);
  return wp(e, t, i, function a(o, c) {
    if (o) {
      r(o, c);
      return;
    }
    if (i.index++, i.index < (i.keyedList || e).length) {
      wp(e, t, i, a);
      return;
    }
    r(null, i.results);
  }), Ub.bind(i, r);
}
function mm(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function jb(e, t) {
  return -1 * mm(e, t);
}
var vm = Co.exports, Mb = vm, qb = zb;
function zb(e, t, n) {
  return Mb(e, t, null, n);
}
var Hb = {
  parallel: Nb,
  serial: qb,
  serialOrdered: vm
}, gm = Object, Gb = Error, Wb = EvalError, Vb = RangeError, Yb = ReferenceError, Xb = SyntaxError, Bl = TypeError, Kb = URIError, Jb = Math.abs, Zb = Math.floor, Qb = Math.max, e1 = Math.min, t1 = Math.pow, n1 = Math.round, r1 = Number.isNaN || function(t) {
  return t !== t;
}, i1 = r1, a1 = function(t) {
  return i1(t) || t === 0 ? t : t < 0 ? -1 : 1;
}, o1 = Object.getOwnPropertyDescriptor, ja = o1;
if (ja)
  try {
    ja([], "length");
  } catch {
    ja = null;
  }
var xm = ja, Ma = Object.defineProperty || !1;
if (Ma)
  try {
    Ma({}, "a", { value: 1 });
  } catch {
    Ma = !1;
  }
var s1 = Ma, Cs, Ep;
function ym() {
  return Ep || (Ep = 1, Cs = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var t = {}, n = Symbol("test"), r = Object(n);
    if (typeof n == "string" || Object.prototype.toString.call(n) !== "[object Symbol]" || Object.prototype.toString.call(r) !== "[object Symbol]")
      return !1;
    var i = 42;
    t[n] = i;
    for (var a in t)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
      return !1;
    var o = Object.getOwnPropertySymbols(t);
    if (o.length !== 1 || o[0] !== n || !Object.prototype.propertyIsEnumerable.call(t, n))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var c = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(t, n)
      );
      if (c.value !== i || c.enumerable !== !0)
        return !1;
    }
    return !0;
  }), Cs;
}
var Os, _p;
function c1() {
  if (_p) return Os;
  _p = 1;
  var e = typeof Symbol < "u" && Symbol, t = ym();
  return Os = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : t();
  }, Os;
}
var $s, Sp;
function bm() {
  return Sp || (Sp = 1, $s = typeof Reflect < "u" && Reflect.getPrototypeOf || null), $s;
}
var Is, Tp;
function wm() {
  if (Tp) return Is;
  Tp = 1;
  var e = gm;
  return Is = e.getPrototypeOf || null, Is;
}
var l1 = "Function.prototype.bind called on incompatible ", u1 = Object.prototype.toString, p1 = Math.max, f1 = "[object Function]", Ap = function(t, n) {
  for (var r = [], i = 0; i < t.length; i += 1)
    r[i] = t[i];
  for (var a = 0; a < n.length; a += 1)
    r[a + t.length] = n[a];
  return r;
}, d1 = function(t, n) {
  for (var r = [], i = n, a = 0; i < t.length; i += 1, a += 1)
    r[a] = t[i];
  return r;
}, h1 = function(e, t) {
  for (var n = "", r = 0; r < e.length; r += 1)
    n += e[r], r + 1 < e.length && (n += t);
  return n;
}, m1 = function(t) {
  var n = this;
  if (typeof n != "function" || u1.apply(n) !== f1)
    throw new TypeError(l1 + n);
  for (var r = d1(arguments, 1), i, a = function() {
    if (this instanceof i) {
      var l = n.apply(
        this,
        Ap(r, arguments)
      );
      return Object(l) === l ? l : this;
    }
    return n.apply(
      t,
      Ap(r, arguments)
    );
  }, o = p1(0, n.length - r.length), c = [], s = 0; s < o; s++)
    c[s] = "$" + s;
  if (i = Function("binder", "return function (" + h1(c, ",") + "){ return binder.apply(this,arguments); }")(a), n.prototype) {
    var u = function() {
    };
    u.prototype = n.prototype, i.prototype = new u(), u.prototype = null;
  }
  return i;
}, v1 = m1, Oo = Function.prototype.bind || v1, Ps, Rp;
function jl() {
  return Rp || (Rp = 1, Ps = Function.prototype.call), Ps;
}
var Ds, Cp;
function Em() {
  return Cp || (Cp = 1, Ds = Function.prototype.apply), Ds;
}
var Fs, Op;
function g1() {
  return Op || (Op = 1, Fs = typeof Reflect < "u" && Reflect && Reflect.apply), Fs;
}
var Ns, $p;
function x1() {
  if ($p) return Ns;
  $p = 1;
  var e = Oo, t = Em(), n = jl(), r = g1();
  return Ns = r || e.call(n, t), Ns;
}
var ks, Ip;
function y1() {
  if (Ip) return ks;
  Ip = 1;
  var e = Oo, t = Bl, n = jl(), r = x1();
  return ks = function(a) {
    if (a.length < 1 || typeof a[0] != "function")
      throw new t("a function is required");
    return r(e, n, a);
  }, ks;
}
var Ls, Pp;
function b1() {
  if (Pp) return Ls;
  Pp = 1;
  var e = y1(), t = xm, n;
  try {
    n = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (o) {
    if (!o || typeof o != "object" || !("code" in o) || o.code !== "ERR_PROTO_ACCESS")
      throw o;
  }
  var r = !!n && t && t(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  ), i = Object, a = i.getPrototypeOf;
  return Ls = r && typeof r.get == "function" ? e([r.get]) : typeof a == "function" ? (
    /** @type {import('./get')} */
    function(c) {
      return a(c == null ? c : i(c));
    }
  ) : !1, Ls;
}
var Us, Dp;
function w1() {
  if (Dp) return Us;
  Dp = 1;
  var e = bm(), t = wm(), n = b1();
  return Us = e ? function(i) {
    return e(i);
  } : t ? function(i) {
    if (!i || typeof i != "object" && typeof i != "function")
      throw new TypeError("getProto: not an object");
    return t(i);
  } : n ? function(i) {
    return n(i);
  } : null, Us;
}
var E1 = Function.prototype.call, _1 = Object.prototype.hasOwnProperty, S1 = Oo, Ml = S1.call(E1, _1), re, T1 = gm, A1 = Gb, R1 = Wb, C1 = Vb, O1 = Yb, Ar = Xb, br = Bl, $1 = Kb, I1 = Jb, P1 = Zb, D1 = Qb, F1 = e1, N1 = t1, k1 = n1, L1 = a1, _m = Function, Bs = function(e) {
  try {
    return _m('"use strict"; return (' + e + ").constructor;")();
  } catch {
  }
}, ui = xm, U1 = s1, js = function() {
  throw new br();
}, B1 = ui ? function() {
  try {
    return arguments.callee, js;
  } catch {
    try {
      return ui(arguments, "callee").get;
    } catch {
      return js;
    }
  }
}() : js, Qn = c1()(), $e = w1(), j1 = wm(), M1 = bm(), Sm = Em(), Ii = jl(), cr = {}, q1 = typeof Uint8Array > "u" || !$e ? re : $e(Uint8Array), Dn = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? re : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? re : ArrayBuffer,
  "%ArrayIteratorPrototype%": Qn && $e ? $e([][Symbol.iterator]()) : re,
  "%AsyncFromSyncIteratorPrototype%": re,
  "%AsyncFunction%": cr,
  "%AsyncGenerator%": cr,
  "%AsyncGeneratorFunction%": cr,
  "%AsyncIteratorPrototype%": cr,
  "%Atomics%": typeof Atomics > "u" ? re : Atomics,
  "%BigInt%": typeof BigInt > "u" ? re : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? re : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? re : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? re : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": A1,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": R1,
  "%Float16Array%": typeof Float16Array > "u" ? re : Float16Array,
  "%Float32Array%": typeof Float32Array > "u" ? re : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? re : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? re : FinalizationRegistry,
  "%Function%": _m,
  "%GeneratorFunction%": cr,
  "%Int8Array%": typeof Int8Array > "u" ? re : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? re : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? re : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": Qn && $e ? $e($e([][Symbol.iterator]())) : re,
  "%JSON%": typeof JSON == "object" ? JSON : re,
  "%Map%": typeof Map > "u" ? re : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !Qn || !$e ? re : $e((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": T1,
  "%Object.getOwnPropertyDescriptor%": ui,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? re : Promise,
  "%Proxy%": typeof Proxy > "u" ? re : Proxy,
  "%RangeError%": C1,
  "%ReferenceError%": O1,
  "%Reflect%": typeof Reflect > "u" ? re : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? re : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !Qn || !$e ? re : $e((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? re : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": Qn && $e ? $e(""[Symbol.iterator]()) : re,
  "%Symbol%": Qn ? Symbol : re,
  "%SyntaxError%": Ar,
  "%ThrowTypeError%": B1,
  "%TypedArray%": q1,
  "%TypeError%": br,
  "%Uint8Array%": typeof Uint8Array > "u" ? re : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? re : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? re : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? re : Uint32Array,
  "%URIError%": $1,
  "%WeakMap%": typeof WeakMap > "u" ? re : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? re : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? re : WeakSet,
  "%Function.prototype.call%": Ii,
  "%Function.prototype.apply%": Sm,
  "%Object.defineProperty%": U1,
  "%Object.getPrototypeOf%": j1,
  "%Math.abs%": I1,
  "%Math.floor%": P1,
  "%Math.max%": D1,
  "%Math.min%": F1,
  "%Math.pow%": N1,
  "%Math.round%": k1,
  "%Math.sign%": L1,
  "%Reflect.getPrototypeOf%": M1
};
if ($e)
  try {
    null.error;
  } catch (e) {
    var z1 = $e($e(e));
    Dn["%Error.prototype%"] = z1;
  }
var H1 = function e(t) {
  var n;
  if (t === "%AsyncFunction%")
    n = Bs("async function () {}");
  else if (t === "%GeneratorFunction%")
    n = Bs("function* () {}");
  else if (t === "%AsyncGeneratorFunction%")
    n = Bs("async function* () {}");
  else if (t === "%AsyncGenerator%") {
    var r = e("%AsyncGeneratorFunction%");
    r && (n = r.prototype);
  } else if (t === "%AsyncIteratorPrototype%") {
    var i = e("%AsyncGenerator%");
    i && $e && (n = $e(i.prototype));
  }
  return Dn[t] = n, n;
}, Fp = {
  __proto__: null,
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, Pi = Oo, Za = Ml, G1 = Pi.call(Ii, Array.prototype.concat), W1 = Pi.call(Sm, Array.prototype.splice), Np = Pi.call(Ii, String.prototype.replace), Qa = Pi.call(Ii, String.prototype.slice), V1 = Pi.call(Ii, RegExp.prototype.exec), Y1 = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, X1 = /\\(\\)?/g, K1 = function(t) {
  var n = Qa(t, 0, 1), r = Qa(t, -1);
  if (n === "%" && r !== "%")
    throw new Ar("invalid intrinsic syntax, expected closing `%`");
  if (r === "%" && n !== "%")
    throw new Ar("invalid intrinsic syntax, expected opening `%`");
  var i = [];
  return Np(t, Y1, function(a, o, c, s) {
    i[i.length] = c ? Np(s, X1, "$1") : o || a;
  }), i;
}, J1 = function(t, n) {
  var r = t, i;
  if (Za(Fp, r) && (i = Fp[r], r = "%" + i[0] + "%"), Za(Dn, r)) {
    var a = Dn[r];
    if (a === cr && (a = H1(r)), typeof a > "u" && !n)
      throw new br("intrinsic " + t + " exists, but is not available. Please file an issue!");
    return {
      alias: i,
      name: r,
      value: a
    };
  }
  throw new Ar("intrinsic " + t + " does not exist!");
}, Z1 = function(t, n) {
  if (typeof t != "string" || t.length === 0)
    throw new br("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof n != "boolean")
    throw new br('"allowMissing" argument must be a boolean');
  if (V1(/^%?[^%]*%?$/, t) === null)
    throw new Ar("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var r = K1(t), i = r.length > 0 ? r[0] : "", a = J1("%" + i + "%", n), o = a.name, c = a.value, s = !1, u = a.alias;
  u && (i = u[0], W1(r, G1([0, 1], u)));
  for (var l = 1, p = !0; l < r.length; l += 1) {
    var d = r[l], m = Qa(d, 0, 1), g = Qa(d, -1);
    if ((m === '"' || m === "'" || m === "`" || g === '"' || g === "'" || g === "`") && m !== g)
      throw new Ar("property names with quotes must have matching quotes");
    if ((d === "constructor" || !p) && (s = !0), i += "." + d, o = "%" + i + "%", Za(Dn, o))
      c = Dn[o];
    else if (c != null) {
      if (!(d in c)) {
        if (!n)
          throw new br("base intrinsic for " + t + " exists, but the property is not available.");
        return;
      }
      if (ui && l + 1 >= r.length) {
        var v = ui(c, d);
        p = !!v, p && "get" in v && !("originalValue" in v.get) ? c = v.get : c = c[d];
      } else
        p = Za(c, d), c = c[d];
      p && !s && (Dn[o] = c);
    }
  }
  return c;
}, Ms, kp;
function Q1() {
  if (kp) return Ms;
  kp = 1;
  var e = ym();
  return Ms = function() {
    return e() && !!Symbol.toStringTag;
  }, Ms;
}
var ew = Z1, Lp = ew("%Object.defineProperty%", !0), tw = Q1()(), nw = Ml, rw = Bl, la = tw ? Symbol.toStringTag : null, iw = function(t, n) {
  var r = arguments.length > 2 && !!arguments[2] && arguments[2].force, i = arguments.length > 2 && !!arguments[2] && arguments[2].nonConfigurable;
  if (typeof r < "u" && typeof r != "boolean" || typeof i < "u" && typeof i != "boolean")
    throw new rw("if provided, the `overrideIfSet` and `nonConfigurable` options must be booleans");
  la && (r || !nw(t, la)) && (Lp ? Lp(t, la, {
    configurable: !i,
    enumerable: !1,
    value: n,
    writable: !1
  }) : t[la] = n);
}, aw = function(e, t) {
  return Object.keys(t).forEach(function(n) {
    e[n] = e[n] || t[n];
  }), e;
}, ql = gb, ow = Pe, qs = ae, sw = bo, cw = Nl, lw = At.parse, uw = oe, pw = ie.Stream, zs = lm, fw = Hb, dw = iw, tn = Ml, el = aw;
function se(e) {
  if (!(this instanceof se))
    return new se(e);
  this._overheadLength = 0, this._valueLength = 0, this._valuesToMeasure = [], ql.call(this), e = e || {};
  for (var t in e)
    this[t] = e[t];
}
ow.inherits(se, ql);
se.LINE_BREAK = `\r
`;
se.DEFAULT_CONTENT_TYPE = "application/octet-stream";
se.prototype.append = function(e, t, n) {
  n = n || {}, typeof n == "string" && (n = { filename: n });
  var r = ql.prototype.append.bind(this);
  if ((typeof t == "number" || t == null) && (t = String(t)), Array.isArray(t)) {
    this._error(new Error("Arrays are not supported."));
    return;
  }
  var i = this._multiPartHeader(e, t, n), a = this._multiPartFooter();
  r(i), r(t), r(a), this._trackLength(i, t, n);
};
se.prototype._trackLength = function(e, t, n) {
  var r = 0;
  n.knownLength != null ? r += Number(n.knownLength) : Buffer.isBuffer(t) ? r = t.length : typeof t == "string" && (r = Buffer.byteLength(t)), this._valueLength += r, this._overheadLength += Buffer.byteLength(e) + se.LINE_BREAK.length, !(!t || !t.path && !(t.readable && tn(t, "httpVersion")) && !(t instanceof pw)) && (n.knownLength || this._valuesToMeasure.push(t));
};
se.prototype._lengthRetriever = function(e, t) {
  tn(e, "fd") ? e.end != null && e.end != 1 / 0 && e.start != null ? t(null, e.end + 1 - (e.start ? e.start : 0)) : uw.stat(e.path, function(n, r) {
    if (n) {
      t(n);
      return;
    }
    var i = r.size - (e.start ? e.start : 0);
    t(null, i);
  }) : tn(e, "httpVersion") ? t(null, Number(e.headers["content-length"])) : tn(e, "httpModule") ? (e.on("response", function(n) {
    e.pause(), t(null, Number(n.headers["content-length"]));
  }), e.resume()) : t("Unknown stream");
};
se.prototype._multiPartHeader = function(e, t, n) {
  if (typeof n.header == "string")
    return n.header;
  var r = this._getContentDisposition(t, n), i = this._getContentType(t, n), a = "", o = {
    // add custom disposition as third element or keep it two elements if not
    "Content-Disposition": ["form-data", 'name="' + e + '"'].concat(r || []),
    // if no content type. allow it to be empty array
    "Content-Type": [].concat(i || [])
  };
  typeof n.header == "object" && el(o, n.header);
  var c;
  for (var s in o)
    if (tn(o, s)) {
      if (c = o[s], c == null)
        continue;
      Array.isArray(c) || (c = [c]), c.length && (a += s + ": " + c.join("; ") + se.LINE_BREAK);
    }
  return "--" + this.getBoundary() + se.LINE_BREAK + a + se.LINE_BREAK;
};
se.prototype._getContentDisposition = function(e, t) {
  var n;
  if (typeof t.filepath == "string" ? n = qs.normalize(t.filepath).replace(/\\/g, "/") : t.filename || e && (e.name || e.path) ? n = qs.basename(t.filename || e && (e.name || e.path)) : e && e.readable && tn(e, "httpVersion") && (n = qs.basename(e.client._httpMessage.path || "")), n)
    return 'filename="' + n + '"';
};
se.prototype._getContentType = function(e, t) {
  var n = t.contentType;
  return !n && e && e.name && (n = zs.lookup(e.name)), !n && e && e.path && (n = zs.lookup(e.path)), !n && e && e.readable && tn(e, "httpVersion") && (n = e.headers["content-type"]), !n && (t.filepath || t.filename) && (n = zs.lookup(t.filepath || t.filename)), !n && e && typeof e == "object" && (n = se.DEFAULT_CONTENT_TYPE), n;
};
se.prototype._multiPartFooter = function() {
  return (function(e) {
    var t = se.LINE_BREAK, n = this._streams.length === 0;
    n && (t += this._lastBoundary()), e(t);
  }).bind(this);
};
se.prototype._lastBoundary = function() {
  return "--" + this.getBoundary() + "--" + se.LINE_BREAK;
};
se.prototype.getHeaders = function(e) {
  var t, n = {
    "content-type": "multipart/form-data; boundary=" + this.getBoundary()
  };
  for (t in e)
    tn(e, t) && (n[t.toLowerCase()] = e[t]);
  return n;
};
se.prototype.setBoundary = function(e) {
  if (typeof e != "string")
    throw new TypeError("FormData boundary must be a string");
  this._boundary = e;
};
se.prototype.getBoundary = function() {
  return this._boundary || this._generateBoundary(), this._boundary;
};
se.prototype.getBuffer = function() {
  for (var e = new Buffer.alloc(0), t = this.getBoundary(), n = 0, r = this._streams.length; n < r; n++)
    typeof this._streams[n] != "function" && (Buffer.isBuffer(this._streams[n]) ? e = Buffer.concat([e, this._streams[n]]) : e = Buffer.concat([e, Buffer.from(this._streams[n])]), (typeof this._streams[n] != "string" || this._streams[n].substring(2, t.length + 2) !== t) && (e = Buffer.concat([e, Buffer.from(se.LINE_BREAK)])));
  return Buffer.concat([e, Buffer.from(this._lastBoundary())]);
};
se.prototype._generateBoundary = function() {
  for (var e = "--------------------------", t = 0; t < 24; t++)
    e += Math.floor(Math.random() * 10).toString(16);
  this._boundary = e;
};
se.prototype.getLengthSync = function() {
  var e = this._overheadLength + this._valueLength;
  return this._streams.length && (e += this._lastBoundary().length), this.hasKnownLength() || this._error(new Error("Cannot calculate proper length in synchronous way.")), e;
};
se.prototype.hasKnownLength = function() {
  var e = !0;
  return this._valuesToMeasure.length && (e = !1), e;
};
se.prototype.getLength = function(e) {
  var t = this._overheadLength + this._valueLength;
  if (this._streams.length && (t += this._lastBoundary().length), !this._valuesToMeasure.length) {
    process.nextTick(e.bind(this, null, t));
    return;
  }
  fw.parallel(this._valuesToMeasure, this._lengthRetriever, function(n, r) {
    if (n) {
      e(n);
      return;
    }
    r.forEach(function(i) {
      t += i;
    }), e(null, t);
  });
};
se.prototype.submit = function(e, t) {
  var n, r, i = { method: "post" };
  return typeof e == "string" ? (e = lw(e), r = el({
    port: e.port,
    path: e.pathname,
    host: e.hostname,
    protocol: e.protocol
  }, i)) : (r = el(e, i), r.port || (r.port = r.protocol === "https:" ? 443 : 80)), r.headers = this.getHeaders(e.headers), r.protocol === "https:" ? n = cw.request(r) : n = sw.request(r), this.getLength((function(a, o) {
    if (a && a !== "Unknown stream") {
      this._error(a);
      return;
    }
    if (o && n.setHeader("Content-Length", o), this.pipe(n), t) {
      var c, s = function(u, l) {
        return n.removeListener("error", s), n.removeListener("response", c), t.call(this, u, l);
      };
      c = s.bind(this, null), n.on("error", s), n.on("response", c);
    }
  }).bind(this)), n;
};
se.prototype._error = function(e) {
  this.error || (this.error = e, this.pause(), this.emit("error", e));
};
se.prototype.toString = function() {
  return "[object FormData]";
};
dw(se, "FormData");
var hw = se;
const Tm = /* @__PURE__ */ Ul(hw);
function tl(e) {
  return P.isPlainObject(e) || P.isArray(e);
}
function Am(e) {
  return P.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Up(e, t, n) {
  return e ? e.concat(t).map(function(i, a) {
    return i = Am(i), !n && a ? "[" + i + "]" : i;
  }).join(n ? "." : "") : t;
}
function mw(e) {
  return P.isArray(e) && !e.some(tl);
}
const vw = P.toFlatObject(P, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function $o(e, t, n) {
  if (!P.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new (Tm || FormData)(), n = P.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(v, y) {
    return !P.isUndefined(y[v]);
  });
  const r = n.metaTokens, i = n.visitor || l, a = n.dots, o = n.indexes, s = (n.Blob || typeof Blob < "u" && Blob) && P.isSpecCompliantForm(t);
  if (!P.isFunction(i))
    throw new TypeError("visitor must be a function");
  function u(g) {
    if (g === null) return "";
    if (P.isDate(g))
      return g.toISOString();
    if (P.isBoolean(g))
      return g.toString();
    if (!s && P.isBlob(g))
      throw new V("Blob is not supported. Use a Buffer instead.");
    return P.isArrayBuffer(g) || P.isTypedArray(g) ? s && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function l(g, v, y) {
    let x = g;
    if (g && !y && typeof g == "object") {
      if (P.endsWith(v, "{}"))
        v = r ? v : v.slice(0, -2), g = JSON.stringify(g);
      else if (P.isArray(g) && mw(g) || (P.isFileList(g) || P.endsWith(v, "[]")) && (x = P.toArray(g)))
        return v = Am(v), x.forEach(function(A, O) {
          !(P.isUndefined(A) || A === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? Up([v], O, a) : o === null ? v : v + "[]",
            u(A)
          );
        }), !1;
    }
    return tl(g) ? !0 : (t.append(Up(y, v, a), u(g)), !1);
  }
  const p = [], d = Object.assign(vw, {
    defaultVisitor: l,
    convertValue: u,
    isVisitable: tl
  });
  function m(g, v) {
    if (!P.isUndefined(g)) {
      if (p.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      p.push(g), P.forEach(g, function(x, w) {
        (!(P.isUndefined(x) || x === null) && i.call(
          t,
          x,
          P.isString(w) ? w.trim() : w,
          v,
          d
        )) === !0 && m(x, v ? v.concat(w) : [w]);
      }), p.pop();
    }
  }
  if (!P.isObject(e))
    throw new TypeError("data must be an object");
  return m(e), t;
}
function Bp(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function Rm(e, t) {
  this._pairs = [], e && $o(e, this, t);
}
const Cm = Rm.prototype;
Cm.append = function(t, n) {
  this._pairs.push([t, n]);
};
Cm.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Bp);
  } : Bp;
  return this._pairs.map(function(i) {
    return n(i[0]) + "=" + n(i[1]);
  }, "").join("&");
};
function gw(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function zl(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || gw;
  P.isFunction(n) && (n = {
    serialize: n
  });
  const i = n && n.serialize;
  let a;
  if (i ? a = i(t, n) : a = P.isURLSearchParams(t) ? t.toString() : new Rm(t, n).toString(r), a) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class jp {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    P.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const Hl = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, xw = At.URLSearchParams, Hs = "abcdefghijklmnopqrstuvwxyz", Mp = "0123456789", Om = {
  DIGIT: Mp,
  ALPHA: Hs,
  ALPHA_DIGIT: Hs + Hs.toUpperCase() + Mp
}, yw = (e = 16, t = Om.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t, i = new Uint32Array(e);
  Dr.randomFillSync(i);
  for (let a = 0; a < e; a++)
    n += t[i[a] % r];
  return n;
}, bw = {
  isNode: !0,
  classes: {
    URLSearchParams: xw,
    FormData: Tm,
    Blob: typeof Blob < "u" && Blob || null
  },
  ALPHABET: Om,
  generateString: yw,
  protocols: ["http", "https", "file", "data"]
}, Gl = typeof window < "u" && typeof document < "u", nl = typeof navigator == "object" && navigator || void 0, ww = Gl && (!nl || ["ReactNative", "NativeScript", "NS"].indexOf(nl.product) < 0), Ew = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", _w = Gl && window.location.href || "http://localhost", Sw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Gl,
  hasStandardBrowserEnv: ww,
  hasStandardBrowserWebWorkerEnv: Ew,
  navigator: nl,
  origin: _w
}, Symbol.toStringTag, { value: "Module" })), be = {
  ...Sw,
  ...bw
};
function Tw(e, t) {
  return $o(e, new be.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, i, a) {
      return be.isNode && P.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Aw(e) {
  return P.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Rw(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const i = n.length;
  let a;
  for (r = 0; r < i; r++)
    a = n[r], t[a] = e[a];
  return t;
}
function $m(e) {
  function t(n, r, i, a) {
    let o = n[a++];
    if (o === "__proto__") return !0;
    const c = Number.isFinite(+o), s = a >= n.length;
    return o = !o && P.isArray(i) ? i.length : o, s ? (P.hasOwnProp(i, o) ? i[o] = [i[o], r] : i[o] = r, !c) : ((!i[o] || !P.isObject(i[o])) && (i[o] = []), t(n, r, i[o], a) && P.isArray(i[o]) && (i[o] = Rw(i[o])), !c);
  }
  if (P.isFormData(e) && P.isFunction(e.entries)) {
    const n = {};
    return P.forEachEntry(e, (r, i) => {
      t(Aw(r), i, n, 0);
    }), n;
  }
  return null;
}
function Cw(e, t, n) {
  if (P.isString(e))
    try {
      return (t || JSON.parse)(e), P.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const Di = {
  transitional: Hl,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", i = r.indexOf("application/json") > -1, a = P.isObject(t);
    if (a && P.isHTMLForm(t) && (t = new FormData(t)), P.isFormData(t))
      return i ? JSON.stringify($m(t)) : t;
    if (P.isArrayBuffer(t) || P.isBuffer(t) || P.isStream(t) || P.isFile(t) || P.isBlob(t) || P.isReadableStream(t))
      return t;
    if (P.isArrayBufferView(t))
      return t.buffer;
    if (P.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let c;
    if (a) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Tw(t, this.formSerializer).toString();
      if ((c = P.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const s = this.env && this.env.FormData;
        return $o(
          c ? { "files[]": t } : t,
          s && new s(),
          this.formSerializer
        );
      }
    }
    return a || i ? (n.setContentType("application/json", !1), Cw(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Di.transitional, r = n && n.forcedJSONParsing, i = this.responseType === "json";
    if (P.isResponse(t) || P.isReadableStream(t))
      return t;
    if (t && P.isString(t) && (r && !this.responseType || i)) {
      const o = !(n && n.silentJSONParsing) && i;
      try {
        return JSON.parse(t);
      } catch (c) {
        if (o)
          throw c.name === "SyntaxError" ? V.from(c, V.ERR_BAD_RESPONSE, this, null, this.response) : c;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: be.classes.FormData,
    Blob: be.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
P.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Di.headers[e] = {};
});
const Ow = P.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), $w = (e) => {
  const t = {};
  let n, r, i;
  return e && e.split(`
`).forEach(function(o) {
    i = o.indexOf(":"), n = o.substring(0, i).trim().toLowerCase(), r = o.substring(i + 1).trim(), !(!n || t[n] && Ow[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, qp = Symbol("internals");
function Hr(e) {
  return e && String(e).trim().toLowerCase();
}
function qa(e) {
  return e === !1 || e == null ? e : P.isArray(e) ? e.map(qa) : String(e);
}
function Iw(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Pw = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Gs(e, t, n, r, i) {
  if (P.isFunction(r))
    return r.call(this, t, n);
  if (i && (t = n), !!P.isString(t)) {
    if (P.isString(r))
      return t.indexOf(r) !== -1;
    if (P.isRegExp(r))
      return r.test(t);
  }
}
function Dw(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Fw(e, t) {
  const n = P.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(i, a, o) {
        return this[r].call(this, t, i, a, o);
      },
      configurable: !0
    });
  });
}
let Le = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const i = this;
    function a(c, s, u) {
      const l = Hr(s);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const p = P.findKey(i, l);
      (!p || i[p] === void 0 || u === !0 || u === void 0 && i[p] !== !1) && (i[p || s] = qa(c));
    }
    const o = (c, s) => P.forEach(c, (u, l) => a(u, l, s));
    if (P.isPlainObject(t) || t instanceof this.constructor)
      o(t, n);
    else if (P.isString(t) && (t = t.trim()) && !Pw(t))
      o($w(t), n);
    else if (P.isObject(t) && P.isIterable(t)) {
      let c = {}, s, u;
      for (const l of t) {
        if (!P.isArray(l))
          throw TypeError("Object iterator must return a key-value pair");
        c[u = l[0]] = (s = c[u]) ? P.isArray(s) ? [...s, l[1]] : [s, l[1]] : l[1];
      }
      o(c, n);
    } else
      t != null && a(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = Hr(t), t) {
      const r = P.findKey(this, t);
      if (r) {
        const i = this[r];
        if (!n)
          return i;
        if (n === !0)
          return Iw(i);
        if (P.isFunction(n))
          return n.call(this, i, r);
        if (P.isRegExp(n))
          return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Hr(t), t) {
      const r = P.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Gs(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let i = !1;
    function a(o) {
      if (o = Hr(o), o) {
        const c = P.findKey(r, o);
        c && (!n || Gs(r, r[c], c, n)) && (delete r[c], i = !0);
      }
    }
    return P.isArray(t) ? t.forEach(a) : a(t), i;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, i = !1;
    for (; r--; ) {
      const a = n[r];
      (!t || Gs(this, this[a], a, t, !0)) && (delete this[a], i = !0);
    }
    return i;
  }
  normalize(t) {
    const n = this, r = {};
    return P.forEach(this, (i, a) => {
      const o = P.findKey(r, a);
      if (o) {
        n[o] = qa(i), delete n[a];
        return;
      }
      const c = t ? Dw(a) : String(a).trim();
      c !== a && delete n[a], n[c] = qa(i), r[c] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return P.forEach(this, (r, i) => {
      r != null && r !== !1 && (n[i] = t && P.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((i) => r.set(i)), r;
  }
  static accessor(t) {
    const r = (this[qp] = this[qp] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function a(o) {
      const c = Hr(o);
      r[c] || (Fw(i, o), r[c] = !0);
    }
    return P.isArray(t) ? t.forEach(a) : a(t), this;
  }
};
Le.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
P.reduceDescriptors(Le.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
P.freezeMethods(Le);
function Ws(e, t) {
  const n = this || Di, r = t || n, i = Le.from(r.headers);
  let a = r.data;
  return P.forEach(e, function(c) {
    a = c.call(n, a, i.normalize(), t ? t.status : void 0);
  }), i.normalize(), a;
}
function Im(e) {
  return !!(e && e.__CANCEL__);
}
function an(e, t, n) {
  V.call(this, e ?? "canceled", V.ERR_CANCELED, t, n), this.name = "CanceledError";
}
P.inherits(an, V, {
  __CANCEL__: !0
});
function fr(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new V(
    "Request failed with status code " + n.status,
    [V.ERR_BAD_REQUEST, V.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function Nw(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function kw(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Wl(e, t, n) {
  let r = !Nw(t);
  return e && (r || n == !1) ? kw(e, t) : t;
}
var Pm = {}, Lw = At.parse, Uw = {
  ftp: 21,
  gopher: 70,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443
}, Bw = String.prototype.endsWith || function(e) {
  return e.length <= this.length && this.indexOf(e, this.length - e.length) !== -1;
};
function jw(e) {
  var t = typeof e == "string" ? Lw(e) : e || {}, n = t.protocol, r = t.host, i = t.port;
  if (typeof r != "string" || !r || typeof n != "string" || (n = n.split(":", 1)[0], r = r.replace(/:\d*$/, ""), i = parseInt(i) || Uw[n] || 0, !Mw(r, i)))
    return "";
  var a = dr("npm_config_" + n + "_proxy") || dr(n + "_proxy") || dr("npm_config_proxy") || dr("all_proxy");
  return a && a.indexOf("://") === -1 && (a = n + "://" + a), a;
}
function Mw(e, t) {
  var n = (dr("npm_config_no_proxy") || dr("no_proxy")).toLowerCase();
  return n ? n === "*" ? !1 : n.split(/[,\s]/).every(function(r) {
    if (!r)
      return !0;
    var i = r.match(/^(.+):(\d+)$/), a = i ? i[1] : r, o = i ? parseInt(i[2]) : 0;
    return o && o !== t ? !0 : /^[.*]/.test(a) ? (a.charAt(0) === "*" && (a = a.slice(1)), !Bw.call(e, a)) : e !== a;
  }) : !0;
}
function dr(e) {
  return process.env[e.toLowerCase()] || process.env[e.toUpperCase()] || "";
}
Pm.getProxyForUrl = jw;
var Vl = { exports: {} }, rl = { exports: {} }, ua = { exports: {} }, Vs, zp;
function qw() {
  if (zp) return Vs;
  zp = 1;
  var e = 1e3, t = e * 60, n = t * 60, r = n * 24, i = r * 7, a = r * 365.25;
  Vs = function(l, p) {
    p = p || {};
    var d = typeof l;
    if (d === "string" && l.length > 0)
      return o(l);
    if (d === "number" && isFinite(l))
      return p.long ? s(l) : c(l);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(l)
    );
  };
  function o(l) {
    if (l = String(l), !(l.length > 100)) {
      var p = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        l
      );
      if (p) {
        var d = parseFloat(p[1]), m = (p[2] || "ms").toLowerCase();
        switch (m) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return d * a;
          case "weeks":
          case "week":
          case "w":
            return d * i;
          case "days":
          case "day":
          case "d":
            return d * r;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return d * n;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return d * t;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return d * e;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return d;
          default:
            return;
        }
      }
    }
  }
  function c(l) {
    var p = Math.abs(l);
    return p >= r ? Math.round(l / r) + "d" : p >= n ? Math.round(l / n) + "h" : p >= t ? Math.round(l / t) + "m" : p >= e ? Math.round(l / e) + "s" : l + "ms";
  }
  function s(l) {
    var p = Math.abs(l);
    return p >= r ? u(l, p, r, "day") : p >= n ? u(l, p, n, "hour") : p >= t ? u(l, p, t, "minute") : p >= e ? u(l, p, e, "second") : l + " ms";
  }
  function u(l, p, d, m) {
    var g = p >= d * 1.5;
    return Math.round(l / d) + " " + m + (g ? "s" : "");
  }
  return Vs;
}
var Ys, Hp;
function Dm() {
  if (Hp) return Ys;
  Hp = 1;
  function e(t) {
    r.debug = r, r.default = r, r.coerce = u, r.disable = c, r.enable = a, r.enabled = s, r.humanize = qw(), r.destroy = l, Object.keys(t).forEach((p) => {
      r[p] = t[p];
    }), r.names = [], r.skips = [], r.formatters = {};
    function n(p) {
      let d = 0;
      for (let m = 0; m < p.length; m++)
        d = (d << 5) - d + p.charCodeAt(m), d |= 0;
      return r.colors[Math.abs(d) % r.colors.length];
    }
    r.selectColor = n;
    function r(p) {
      let d, m = null, g, v;
      function y(...x) {
        if (!y.enabled)
          return;
        const w = y, A = Number(/* @__PURE__ */ new Date()), O = A - (d || A);
        w.diff = O, w.prev = d, w.curr = A, d = A, x[0] = r.coerce(x[0]), typeof x[0] != "string" && x.unshift("%O");
        let k = 0;
        x[0] = x[0].replace(/%([a-zA-Z%])/g, (W, te) => {
          if (W === "%%")
            return "%";
          k++;
          const T = r.formatters[te];
          if (typeof T == "function") {
            const H = x[k];
            W = T.call(w, H), x.splice(k, 1), k--;
          }
          return W;
        }), r.formatArgs.call(w, x), (w.log || r.log).apply(w, x);
      }
      return y.namespace = p, y.useColors = r.useColors(), y.color = r.selectColor(p), y.extend = i, y.destroy = r.destroy, Object.defineProperty(y, "enabled", {
        enumerable: !0,
        configurable: !1,
        get: () => m !== null ? m : (g !== r.namespaces && (g = r.namespaces, v = r.enabled(p)), v),
        set: (x) => {
          m = x;
        }
      }), typeof r.init == "function" && r.init(y), y;
    }
    function i(p, d) {
      const m = r(this.namespace + (typeof d > "u" ? ":" : d) + p);
      return m.log = this.log, m;
    }
    function a(p) {
      r.save(p), r.namespaces = p, r.names = [], r.skips = [];
      const d = (typeof p == "string" ? p : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
      for (const m of d)
        m[0] === "-" ? r.skips.push(m.slice(1)) : r.names.push(m);
    }
    function o(p, d) {
      let m = 0, g = 0, v = -1, y = 0;
      for (; m < p.length; )
        if (g < d.length && (d[g] === p[m] || d[g] === "*"))
          d[g] === "*" ? (v = g, y = m, g++) : (m++, g++);
        else if (v !== -1)
          g = v + 1, y++, m = y;
        else
          return !1;
      for (; g < d.length && d[g] === "*"; )
        g++;
      return g === d.length;
    }
    function c() {
      const p = [
        ...r.names,
        ...r.skips.map((d) => "-" + d)
      ].join(",");
      return r.enable(""), p;
    }
    function s(p) {
      for (const d of r.skips)
        if (o(p, d))
          return !1;
      for (const d of r.names)
        if (o(p, d))
          return !0;
      return !1;
    }
    function u(p) {
      return p instanceof Error ? p.stack || p.message : p;
    }
    function l() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    return r.enable(r.load()), r;
  }
  return Ys = e, Ys;
}
var Gp;
function zw() {
  return Gp || (Gp = 1, function(e, t) {
    t.formatArgs = r, t.save = i, t.load = a, t.useColors = n, t.storage = o(), t.destroy = /* @__PURE__ */ (() => {
      let s = !1;
      return () => {
        s || (s = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
      };
    })(), t.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function n() {
      if (typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs))
        return !0;
      if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))
        return !1;
      let s;
      return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator < "u" && navigator.userAgent && (s = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(s[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function r(s) {
      if (s[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + s[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors)
        return;
      const u = "color: " + this.color;
      s.splice(1, 0, u, "color: inherit");
      let l = 0, p = 0;
      s[0].replace(/%[a-zA-Z%]/g, (d) => {
        d !== "%%" && (l++, d === "%c" && (p = l));
      }), s.splice(p, 0, u);
    }
    t.log = console.debug || console.log || (() => {
    });
    function i(s) {
      try {
        s ? t.storage.setItem("debug", s) : t.storage.removeItem("debug");
      } catch {
      }
    }
    function a() {
      let s;
      try {
        s = t.storage.getItem("debug") || t.storage.getItem("DEBUG");
      } catch {
      }
      return !s && typeof process < "u" && "env" in process && (s = process.env.DEBUG), s;
    }
    function o() {
      try {
        return localStorage;
      } catch {
      }
    }
    e.exports = Dm()(t);
    const { formatters: c } = e.exports;
    c.j = function(s) {
      try {
        return JSON.stringify(s);
      } catch (u) {
        return "[UnexpectedJSONParseError]: " + u.message;
      }
    };
  }(ua, ua.exports)), ua.exports;
}
var pa = { exports: {} }, Xs, Wp;
function Hw() {
  return Wp || (Wp = 1, Xs = (e, t = process.argv) => {
    const n = e.startsWith("-") ? "" : e.length === 1 ? "-" : "--", r = t.indexOf(n + e), i = t.indexOf("--");
    return r !== -1 && (i === -1 || r < i);
  }), Xs;
}
var Ks, Vp;
function Gw() {
  if (Vp) return Ks;
  Vp = 1;
  const e = Eo, t = Xh, n = Hw(), { env: r } = process;
  let i;
  n("no-color") || n("no-colors") || n("color=false") || n("color=never") ? i = 0 : (n("color") || n("colors") || n("color=true") || n("color=always")) && (i = 1), "FORCE_COLOR" in r && (r.FORCE_COLOR === "true" ? i = 1 : r.FORCE_COLOR === "false" ? i = 0 : i = r.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(r.FORCE_COLOR, 10), 3));
  function a(s) {
    return s === 0 ? !1 : {
      level: s,
      hasBasic: !0,
      has256: s >= 2,
      has16m: s >= 3
    };
  }
  function o(s, u) {
    if (i === 0)
      return 0;
    if (n("color=16m") || n("color=full") || n("color=truecolor"))
      return 3;
    if (n("color=256"))
      return 2;
    if (s && !u && i === void 0)
      return 0;
    const l = i || 0;
    if (r.TERM === "dumb")
      return l;
    if (process.platform === "win32") {
      const p = e.release().split(".");
      return Number(p[0]) >= 10 && Number(p[2]) >= 10586 ? Number(p[2]) >= 14931 ? 3 : 2 : 1;
    }
    if ("CI" in r)
      return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((p) => p in r) || r.CI_NAME === "codeship" ? 1 : l;
    if ("TEAMCITY_VERSION" in r)
      return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(r.TEAMCITY_VERSION) ? 1 : 0;
    if (r.COLORTERM === "truecolor")
      return 3;
    if ("TERM_PROGRAM" in r) {
      const p = parseInt((r.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
      switch (r.TERM_PROGRAM) {
        case "iTerm.app":
          return p >= 3 ? 3 : 2;
        case "Apple_Terminal":
          return 2;
      }
    }
    return /-256(color)?$/i.test(r.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(r.TERM) || "COLORTERM" in r ? 1 : l;
  }
  function c(s) {
    const u = o(s, s && s.isTTY);
    return a(u);
  }
  return Ks = {
    supportsColor: c,
    stdout: a(o(!0, t.isatty(1))),
    stderr: a(o(!0, t.isatty(2)))
  }, Ks;
}
var Yp;
function Ww() {
  return Yp || (Yp = 1, function(e, t) {
    const n = Xh, r = Pe;
    t.init = l, t.log = c, t.formatArgs = a, t.save = s, t.load = u, t.useColors = i, t.destroy = r.deprecate(
      () => {
      },
      "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
    ), t.colors = [6, 2, 3, 4, 5, 1];
    try {
      const d = Gw();
      d && (d.stderr || d).level >= 2 && (t.colors = [
        20,
        21,
        26,
        27,
        32,
        33,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        56,
        57,
        62,
        63,
        68,
        69,
        74,
        75,
        76,
        77,
        78,
        79,
        80,
        81,
        92,
        93,
        98,
        99,
        112,
        113,
        128,
        129,
        134,
        135,
        148,
        149,
        160,
        161,
        162,
        163,
        164,
        165,
        166,
        167,
        168,
        169,
        170,
        171,
        172,
        173,
        178,
        179,
        184,
        185,
        196,
        197,
        198,
        199,
        200,
        201,
        202,
        203,
        204,
        205,
        206,
        207,
        208,
        209,
        214,
        215,
        220,
        221
      ]);
    } catch {
    }
    t.inspectOpts = Object.keys(process.env).filter((d) => /^debug_/i.test(d)).reduce((d, m) => {
      const g = m.substring(6).toLowerCase().replace(/_([a-z])/g, (y, x) => x.toUpperCase());
      let v = process.env[m];
      return /^(yes|on|true|enabled)$/i.test(v) ? v = !0 : /^(no|off|false|disabled)$/i.test(v) ? v = !1 : v === "null" ? v = null : v = Number(v), d[g] = v, d;
    }, {});
    function i() {
      return "colors" in t.inspectOpts ? !!t.inspectOpts.colors : n.isatty(process.stderr.fd);
    }
    function a(d) {
      const { namespace: m, useColors: g } = this;
      if (g) {
        const v = this.color, y = "\x1B[3" + (v < 8 ? v : "8;5;" + v), x = `  ${y};1m${m} \x1B[0m`;
        d[0] = x + d[0].split(`
`).join(`
` + x), d.push(y + "m+" + e.exports.humanize(this.diff) + "\x1B[0m");
      } else
        d[0] = o() + m + " " + d[0];
    }
    function o() {
      return t.inspectOpts.hideDate ? "" : (/* @__PURE__ */ new Date()).toISOString() + " ";
    }
    function c(...d) {
      return process.stderr.write(r.formatWithOptions(t.inspectOpts, ...d) + `
`);
    }
    function s(d) {
      d ? process.env.DEBUG = d : delete process.env.DEBUG;
    }
    function u() {
      return process.env.DEBUG;
    }
    function l(d) {
      d.inspectOpts = {};
      const m = Object.keys(t.inspectOpts);
      for (let g = 0; g < m.length; g++)
        d.inspectOpts[m[g]] = t.inspectOpts[m[g]];
    }
    e.exports = Dm()(t);
    const { formatters: p } = e.exports;
    p.o = function(d) {
      return this.inspectOpts.colors = this.useColors, r.inspect(d, this.inspectOpts).split(`
`).map((m) => m.trim()).join(" ");
    }, p.O = function(d) {
      return this.inspectOpts.colors = this.useColors, r.inspect(d, this.inspectOpts);
    };
  }(pa, pa.exports)), pa.exports;
}
typeof process > "u" || process.type === "renderer" || process.browser === !0 || process.__nwjs ? rl.exports = zw() : rl.exports = Ww();
var Fm = rl.exports, Gr, Vw = function() {
  if (!Gr) {
    try {
      Gr = Fm("follow-redirects");
    } catch {
    }
    typeof Gr != "function" && (Gr = function() {
    });
  }
  Gr.apply(null, arguments);
}, Fi = At, pi = Fi.URL, Yw = bo, Xw = Nl, Yl = ie.Writable, Xl = wo, Nm = Vw;
(function() {
  var t = typeof process < "u", n = typeof window < "u" && typeof document < "u", r = jn(Error.captureStackTrace);
  !t && (n || !r) && console.warn("The follow-redirects package should be excluded from browser builds.");
})();
var Kl = !1;
try {
  Xl(new pi(""));
} catch (e) {
  Kl = e.code === "ERR_INVALID_URL";
}
var Kw = [
  "auth",
  "host",
  "hostname",
  "href",
  "path",
  "pathname",
  "port",
  "protocol",
  "query",
  "search",
  "hash"
], Jl = ["abort", "aborted", "connect", "error", "socket", "timeout"], Zl = /* @__PURE__ */ Object.create(null);
Jl.forEach(function(e) {
  Zl[e] = function(t, n, r) {
    this._redirectable.emit(e, t, n, r);
  };
});
var il = Ni(
  "ERR_INVALID_URL",
  "Invalid URL",
  TypeError
), al = Ni(
  "ERR_FR_REDIRECTION_FAILURE",
  "Redirected request failed"
), Jw = Ni(
  "ERR_FR_TOO_MANY_REDIRECTS",
  "Maximum number of redirects exceeded",
  al
), Zw = Ni(
  "ERR_FR_MAX_BODY_LENGTH_EXCEEDED",
  "Request body larger than maxBodyLength limit"
), Qw = Ni(
  "ERR_STREAM_WRITE_AFTER_END",
  "write after end"
), eE = Yl.prototype.destroy || Lm;
function tt(e, t) {
  Yl.call(this), this._sanitizeOptions(e), this._options = e, this._ended = !1, this._ending = !1, this._redirectCount = 0, this._redirects = [], this._requestBodyLength = 0, this._requestBodyBuffers = [], t && this.on("response", t);
  var n = this;
  this._onNativeResponse = function(r) {
    try {
      n._processResponse(r);
    } catch (i) {
      n.emit("error", i instanceof al ? i : new al({ cause: i }));
    }
  }, this._performRequest();
}
tt.prototype = Object.create(Yl.prototype);
tt.prototype.abort = function() {
  eu(this._currentRequest), this._currentRequest.abort(), this.emit("abort");
};
tt.prototype.destroy = function(e) {
  return eu(this._currentRequest, e), eE.call(this, e), this;
};
tt.prototype.write = function(e, t, n) {
  if (this._ending)
    throw new Qw();
  if (!Fn(e) && !rE(e))
    throw new TypeError("data should be a string, Buffer or Uint8Array");
  if (jn(t) && (n = t, t = null), e.length === 0) {
    n && n();
    return;
  }
  this._requestBodyLength + e.length <= this._options.maxBodyLength ? (this._requestBodyLength += e.length, this._requestBodyBuffers.push({ data: e, encoding: t }), this._currentRequest.write(e, t, n)) : (this.emit("error", new Zw()), this.abort());
};
tt.prototype.end = function(e, t, n) {
  if (jn(e) ? (n = e, e = t = null) : jn(t) && (n = t, t = null), !e)
    this._ended = this._ending = !0, this._currentRequest.end(null, null, n);
  else {
    var r = this, i = this._currentRequest;
    this.write(e, t, function() {
      r._ended = !0, i.end(null, null, n);
    }), this._ending = !0;
  }
};
tt.prototype.setHeader = function(e, t) {
  this._options.headers[e] = t, this._currentRequest.setHeader(e, t);
};
tt.prototype.removeHeader = function(e) {
  delete this._options.headers[e], this._currentRequest.removeHeader(e);
};
tt.prototype.setTimeout = function(e, t) {
  var n = this;
  function r(o) {
    o.setTimeout(e), o.removeListener("timeout", o.destroy), o.addListener("timeout", o.destroy);
  }
  function i(o) {
    n._timeout && clearTimeout(n._timeout), n._timeout = setTimeout(function() {
      n.emit("timeout"), a();
    }, e), r(o);
  }
  function a() {
    n._timeout && (clearTimeout(n._timeout), n._timeout = null), n.removeListener("abort", a), n.removeListener("error", a), n.removeListener("response", a), n.removeListener("close", a), t && n.removeListener("timeout", t), n.socket || n._currentRequest.removeListener("socket", i);
  }
  return t && this.on("timeout", t), this.socket ? i(this.socket) : this._currentRequest.once("socket", i), this.on("socket", r), this.on("abort", a), this.on("error", a), this.on("response", a), this.on("close", a), this;
};
[
  "flushHeaders",
  "getHeader",
  "setNoDelay",
  "setSocketKeepAlive"
].forEach(function(e) {
  tt.prototype[e] = function(t, n) {
    return this._currentRequest[e](t, n);
  };
});
["aborted", "connection", "socket"].forEach(function(e) {
  Object.defineProperty(tt.prototype, e, {
    get: function() {
      return this._currentRequest[e];
    }
  });
});
tt.prototype._sanitizeOptions = function(e) {
  if (e.headers || (e.headers = {}), e.host && (e.hostname || (e.hostname = e.host), delete e.host), !e.pathname && e.path) {
    var t = e.path.indexOf("?");
    t < 0 ? e.pathname = e.path : (e.pathname = e.path.substring(0, t), e.search = e.path.substring(t));
  }
};
tt.prototype._performRequest = function() {
  var e = this._options.protocol, t = this._options.nativeProtocols[e];
  if (!t)
    throw new TypeError("Unsupported protocol " + e);
  if (this._options.agents) {
    var n = e.slice(0, -1);
    this._options.agent = this._options.agents[n];
  }
  var r = this._currentRequest = t.request(this._options, this._onNativeResponse);
  r._redirectable = this;
  for (var i of Jl)
    r.on(i, Zl[i]);
  if (this._currentUrl = /^\//.test(this._options.path) ? Fi.format(this._options) : (
    // When making a request to a proxy, […]
    // a client MUST send the target URI in absolute-form […].
    this._options.path
  ), this._isRedirect) {
    var a = 0, o = this, c = this._requestBodyBuffers;
    (function s(u) {
      if (r === o._currentRequest)
        if (u)
          o.emit("error", u);
        else if (a < c.length) {
          var l = c[a++];
          r.finished || r.write(l.data, l.encoding, s);
        } else o._ended && r.end();
    })();
  }
};
tt.prototype._processResponse = function(e) {
  var t = e.statusCode;
  this._options.trackRedirects && this._redirects.push({
    url: this._currentUrl,
    headers: e.headers,
    statusCode: t
  });
  var n = e.headers.location;
  if (!n || this._options.followRedirects === !1 || t < 300 || t >= 400) {
    e.responseUrl = this._currentUrl, e.redirects = this._redirects, this.emit("response", e), this._requestBodyBuffers = [];
    return;
  }
  if (eu(this._currentRequest), e.destroy(), ++this._redirectCount > this._options.maxRedirects)
    throw new Jw();
  var r, i = this._options.beforeRedirect;
  i && (r = Object.assign({
    // The Host header was set by nativeProtocol.request
    Host: e.req.getHeader("host")
  }, this._options.headers));
  var a = this._options.method;
  ((t === 301 || t === 302) && this._options.method === "POST" || // RFC7231§6.4.4: The 303 (See Other) status code indicates that
  // the server is redirecting the user agent to a different resource […]
  // A user agent can perform a retrieval request targeting that URI
  // (a GET or HEAD request if using HTTP) […]
  t === 303 && !/^(?:GET|HEAD)$/.test(this._options.method)) && (this._options.method = "GET", this._requestBodyBuffers = [], Js(/^content-/i, this._options.headers));
  var o = Js(/^host$/i, this._options.headers), c = Ql(this._currentUrl), s = o || c.host, u = /^\w+:/.test(n) ? this._currentUrl : Fi.format(Object.assign(c, { host: s })), l = tE(n, u);
  if (Nm("redirecting to", l.href), this._isRedirect = !0, ol(l, this._options), (l.protocol !== c.protocol && l.protocol !== "https:" || l.host !== s && !nE(l.host, s)) && Js(/^(?:(?:proxy-)?authorization|cookie)$/i, this._options.headers), jn(i)) {
    var p = {
      headers: e.headers,
      statusCode: t
    }, d = {
      url: u,
      method: a,
      headers: r
    };
    i(this._options, p, d), this._sanitizeOptions(this._options);
  }
  this._performRequest();
};
function km(e) {
  var t = {
    maxRedirects: 21,
    maxBodyLength: 10485760
  }, n = {};
  return Object.keys(e).forEach(function(r) {
    var i = r + ":", a = n[i] = e[r], o = t[r] = Object.create(a);
    function c(u, l, p) {
      return iE(u) ? u = ol(u) : Fn(u) ? u = ol(Ql(u)) : (p = l, l = Um(u), u = { protocol: i }), jn(l) && (p = l, l = null), l = Object.assign({
        maxRedirects: t.maxRedirects,
        maxBodyLength: t.maxBodyLength
      }, u, l), l.nativeProtocols = n, !Fn(l.host) && !Fn(l.hostname) && (l.hostname = "::1"), Xl.equal(l.protocol, i, "protocol mismatch"), Nm("options", l), new tt(l, p);
    }
    function s(u, l, p) {
      var d = o.request(u, l, p);
      return d.end(), d;
    }
    Object.defineProperties(o, {
      request: { value: c, configurable: !0, enumerable: !0, writable: !0 },
      get: { value: s, configurable: !0, enumerable: !0, writable: !0 }
    });
  }), t;
}
function Lm() {
}
function Ql(e) {
  var t;
  if (Kl)
    t = new pi(e);
  else if (t = Um(Fi.parse(e)), !Fn(t.protocol))
    throw new il({ input: e });
  return t;
}
function tE(e, t) {
  return Kl ? new pi(e, t) : Ql(Fi.resolve(t, e));
}
function Um(e) {
  if (/^\[/.test(e.hostname) && !/^\[[:0-9a-f]+\]$/i.test(e.hostname))
    throw new il({ input: e.href || e });
  if (/^\[/.test(e.host) && !/^\[[:0-9a-f]+\](:\d+)?$/i.test(e.host))
    throw new il({ input: e.href || e });
  return e;
}
function ol(e, t) {
  var n = t || {};
  for (var r of Kw)
    n[r] = e[r];
  return n.hostname.startsWith("[") && (n.hostname = n.hostname.slice(1, -1)), n.port !== "" && (n.port = Number(n.port)), n.path = n.search ? n.pathname + n.search : n.pathname, n;
}
function Js(e, t) {
  var n;
  for (var r in t)
    e.test(r) && (n = t[r], delete t[r]);
  return n === null || typeof n > "u" ? void 0 : String(n).trim();
}
function Ni(e, t, n) {
  function r(i) {
    jn(Error.captureStackTrace) && Error.captureStackTrace(this, this.constructor), Object.assign(this, i || {}), this.code = e, this.message = this.cause ? t + ": " + this.cause.message : t;
  }
  return r.prototype = new (n || Error)(), Object.defineProperties(r.prototype, {
    constructor: {
      value: r,
      enumerable: !1
    },
    name: {
      value: "Error [" + e + "]",
      enumerable: !1
    }
  }), r;
}
function eu(e, t) {
  for (var n of Jl)
    e.removeListener(n, Zl[n]);
  e.on("error", Lm), e.destroy(t);
}
function nE(e, t) {
  Xl(Fn(e) && Fn(t));
  var n = e.length - t.length - 1;
  return n > 0 && e[n] === "." && e.endsWith(t);
}
function Fn(e) {
  return typeof e == "string" || e instanceof String;
}
function jn(e) {
  return typeof e == "function";
}
function rE(e) {
  return typeof e == "object" && "length" in e;
}
function iE(e) {
  return pi && e instanceof pi;
}
Vl.exports = km({ http: Yw, https: Xw });
Vl.exports.wrap = km;
var aE = Vl.exports;
const oE = /* @__PURE__ */ Ul(aE), eo = "1.10.0";
function Bm(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
const sE = /^(?:([^;]+);)?(?:[^;]+;)?(base64|),([\s\S]*)$/;
function cE(e, t, n) {
  const r = n && n.Blob || be.classes.Blob, i = Bm(e);
  if (t === void 0 && r && (t = !0), i === "data") {
    e = i.length ? e.slice(i.length + 1) : e;
    const a = sE.exec(e);
    if (!a)
      throw new V("Invalid URL", V.ERR_INVALID_URL);
    const o = a[1], c = a[2], s = a[3], u = Buffer.from(decodeURIComponent(s), c ? "base64" : "utf8");
    if (t) {
      if (!r)
        throw new V("Blob is not supported", V.ERR_NOT_SUPPORT);
      return new r([u], { type: o });
    }
    return u;
  }
  throw new V("Unsupported protocol " + i, V.ERR_NOT_SUPPORT);
}
const Zs = Symbol("internals");
class Xp extends ie.Transform {
  constructor(t) {
    t = P.toFlatObject(t, {
      maxRate: 0,
      chunkSize: 64 * 1024,
      minChunkSize: 100,
      timeWindow: 500,
      ticksRate: 2,
      samplesCount: 15
    }, null, (r, i) => !P.isUndefined(i[r])), super({
      readableHighWaterMark: t.chunkSize
    });
    const n = this[Zs] = {
      timeWindow: t.timeWindow,
      chunkSize: t.chunkSize,
      maxRate: t.maxRate,
      minChunkSize: t.minChunkSize,
      bytesSeen: 0,
      isCaptured: !1,
      notifiedBytesLoaded: 0,
      ts: Date.now(),
      bytes: 0,
      onReadCallback: null
    };
    this.on("newListener", (r) => {
      r === "progress" && (n.isCaptured || (n.isCaptured = !0));
    });
  }
  _read(t) {
    const n = this[Zs];
    return n.onReadCallback && n.onReadCallback(), super._read(t);
  }
  _transform(t, n, r) {
    const i = this[Zs], a = i.maxRate, o = this.readableHighWaterMark, c = i.timeWindow, s = 1e3 / c, u = a / s, l = i.minChunkSize !== !1 ? Math.max(i.minChunkSize, u * 0.01) : 0, p = (m, g) => {
      const v = Buffer.byteLength(m);
      i.bytesSeen += v, i.bytes += v, i.isCaptured && this.emit("progress", i.bytesSeen), this.push(m) ? process.nextTick(g) : i.onReadCallback = () => {
        i.onReadCallback = null, process.nextTick(g);
      };
    }, d = (m, g) => {
      const v = Buffer.byteLength(m);
      let y = null, x = o, w, A = 0;
      if (a) {
        const O = Date.now();
        (!i.ts || (A = O - i.ts) >= c) && (i.ts = O, w = u - i.bytes, i.bytes = w < 0 ? -w : 0, A = 0), w = u - i.bytes;
      }
      if (a) {
        if (w <= 0)
          return setTimeout(() => {
            g(null, m);
          }, c - A);
        w < x && (x = w);
      }
      x && v > x && v - x > l && (y = m.subarray(x), m = m.subarray(0, x)), p(m, y ? () => {
        process.nextTick(g, null, y);
      } : g);
    };
    d(t, function m(g, v) {
      if (g)
        return r(g);
      v ? d(v, m) : r(null);
    });
  }
}
const { asyncIterator: Kp } = Symbol, jm = async function* (e) {
  e.stream ? yield* e.stream() : e.arrayBuffer ? yield await e.arrayBuffer() : e[Kp] ? yield* e[Kp]() : yield e;
}, lE = be.ALPHABET.ALPHA_DIGIT + "-_", fi = typeof TextEncoder == "function" ? new TextEncoder() : new Pe.TextEncoder(), In = `\r
`, uE = fi.encode(In), pE = 2;
class fE {
  constructor(t, n) {
    const { escapeName: r } = this.constructor, i = P.isString(n);
    let a = `Content-Disposition: form-data; name="${r(t)}"${!i && n.name ? `; filename="${r(n.name)}"` : ""}${In}`;
    i ? n = fi.encode(String(n).replace(/\r?\n|\r\n?/g, In)) : a += `Content-Type: ${n.type || "application/octet-stream"}${In}`, this.headers = fi.encode(a + In), this.contentLength = i ? n.byteLength : n.size, this.size = this.headers.byteLength + this.contentLength + pE, this.name = t, this.value = n;
  }
  async *encode() {
    yield this.headers;
    const { value: t } = this;
    P.isTypedArray(t) ? yield t : yield* jm(t), yield uE;
  }
  static escapeName(t) {
    return String(t).replace(/[\r\n"]/g, (n) => ({
      "\r": "%0D",
      "\n": "%0A",
      '"': "%22"
    })[n]);
  }
}
const dE = (e, t, n) => {
  const {
    tag: r = "form-data-boundary",
    size: i = 25,
    boundary: a = r + "-" + be.generateString(i, lE)
  } = n || {};
  if (!P.isFormData(e))
    throw TypeError("FormData instance required");
  if (a.length < 1 || a.length > 70)
    throw Error("boundary must be 10-70 characters long");
  const o = fi.encode("--" + a + In), c = fi.encode("--" + a + "--" + In);
  let s = c.byteLength;
  const u = Array.from(e.entries()).map(([p, d]) => {
    const m = new fE(p, d);
    return s += m.size, m;
  });
  s += o.byteLength * u.length, s = P.toFiniteNumber(s);
  const l = {
    "Content-Type": `multipart/form-data; boundary=${a}`
  };
  return Number.isFinite(s) && (l["Content-Length"] = s), t && t(l), Ry.from(async function* () {
    for (const p of u)
      yield o, yield* p.encode();
    yield c;
  }());
};
class hE extends ie.Transform {
  __transform(t, n, r) {
    this.push(t), r();
  }
  _transform(t, n, r) {
    if (t.length !== 0 && (this._transform = this.__transform, t[0] !== 120)) {
      const i = Buffer.alloc(2);
      i[0] = 120, i[1] = 156, this.push(i, n);
    }
    this.__transform(t, n, r);
  }
}
const mE = (e, t) => P.isAsyncFn(e) ? function(...n) {
  const r = n.pop();
  e.apply(this, n).then((i) => {
    try {
      t ? r(null, ...t(i)) : r(null, i);
    } catch (a) {
      r(a);
    }
  }, r);
} : e;
function vE(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let i = 0, a = 0, o;
  return t = t !== void 0 ? t : 1e3, function(s) {
    const u = Date.now(), l = r[a];
    o || (o = u), n[i] = s, r[i] = u;
    let p = a, d = 0;
    for (; p !== i; )
      d += n[p++], p = p % e;
    if (i = (i + 1) % e, i === a && (a = (a + 1) % e), u - o < t)
      return;
    const m = l && u - l;
    return m ? Math.round(d * 1e3 / m) : void 0;
  };
}
function gE(e, t) {
  let n = 0, r = 1e3 / t, i, a;
  const o = (u, l = Date.now()) => {
    n = l, i = null, a && (clearTimeout(a), a = null), e.apply(null, u);
  };
  return [(...u) => {
    const l = Date.now(), p = l - n;
    p >= r ? o(u, l) : (i = u, a || (a = setTimeout(() => {
      a = null, o(i);
    }, r - p)));
  }, () => i && o(i)];
}
const Rr = (e, t, n = 3) => {
  let r = 0;
  const i = vE(50, 250);
  return gE((a) => {
    const o = a.loaded, c = a.lengthComputable ? a.total : void 0, s = o - r, u = i(s), l = o <= c;
    r = o;
    const p = {
      loaded: o,
      total: c,
      progress: c ? o / c : void 0,
      bytes: s,
      rate: u || void 0,
      estimated: u && c && l ? (c - o) / u : void 0,
      event: a,
      lengthComputable: c != null,
      [t ? "download" : "upload"]: !0
    };
    e(p);
  }, n);
}, to = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, no = (e) => (...t) => P.asap(() => e(...t)), Jp = {
  flush: Qe.constants.Z_SYNC_FLUSH,
  finishFlush: Qe.constants.Z_SYNC_FLUSH
}, xE = {
  flush: Qe.constants.BROTLI_OPERATION_FLUSH,
  finishFlush: Qe.constants.BROTLI_OPERATION_FLUSH
}, Zp = P.isFunction(Qe.createBrotliDecompress), { http: yE, https: bE } = oE, wE = /https:?/, Qp = be.protocols.map((e) => e + ":"), ef = (e, [t, n]) => (e.on("end", n).on("error", n), t);
function EE(e, t) {
  e.beforeRedirects.proxy && e.beforeRedirects.proxy(e), e.beforeRedirects.config && e.beforeRedirects.config(e, t);
}
function Mm(e, t, n) {
  let r = t;
  if (!r && r !== !1) {
    const i = Pm.getProxyForUrl(n);
    i && (r = new URL(i));
  }
  if (r) {
    if (r.username && (r.auth = (r.username || "") + ":" + (r.password || "")), r.auth) {
      (r.auth.username || r.auth.password) && (r.auth = (r.auth.username || "") + ":" + (r.auth.password || ""));
      const a = Buffer.from(r.auth, "utf8").toString("base64");
      e.headers["Proxy-Authorization"] = "Basic " + a;
    }
    e.headers.host = e.hostname + (e.port ? ":" + e.port : "");
    const i = r.hostname || r.host;
    e.hostname = i, e.host = i, e.port = r.port, e.path = n, r.protocol && (e.protocol = r.protocol.includes(":") ? r.protocol : `${r.protocol}:`);
  }
  e.beforeRedirects.proxy = function(a) {
    Mm(a, t, a.href);
  };
}
const _E = typeof process < "u" && P.kindOf(process) === "process", SE = (e) => new Promise((t, n) => {
  let r, i;
  const a = (s, u) => {
    i || (i = !0, r && r(s, u));
  }, o = (s) => {
    a(s), t(s);
  }, c = (s) => {
    a(s, !0), n(s);
  };
  e(o, c, (s) => r = s).catch(c);
}), TE = ({ address: e, family: t }) => {
  if (!P.isString(e))
    throw TypeError("address must be a string");
  return {
    address: e,
    family: t || (e.indexOf(".") < 0 ? 6 : 4)
  };
}, tf = (e, t) => TE(P.isObject(e) ? e : { address: e, family: t }), AE = _E && function(t) {
  return SE(async function(r, i, a) {
    let { data: o, lookup: c, family: s } = t;
    const { responseType: u, responseEncoding: l } = t, p = t.method.toUpperCase();
    let d, m = !1, g;
    if (c) {
      const b = mE(c, (E) => P.isArray(E) ? E : [E]);
      c = (E, R, N) => {
        b(E, R, (L, B, K) => {
          if (L)
            return N(L);
          const Z = P.isArray(B) ? B.map((M) => tf(M)) : [tf(B, K)];
          R.all ? N(L, Z) : N(L, Z[0].address, Z[0].family);
        });
      };
    }
    const v = new Cy(), y = () => {
      t.cancelToken && t.cancelToken.unsubscribe(x), t.signal && t.signal.removeEventListener("abort", x), v.removeAllListeners();
    };
    a((b, E) => {
      d = !0, E && (m = !0, y());
    });
    function x(b) {
      v.emit("abort", !b || b.type ? new an(null, t, g) : b);
    }
    v.once("abort", i), (t.cancelToken || t.signal) && (t.cancelToken && t.cancelToken.subscribe(x), t.signal && (t.signal.aborted ? x() : t.signal.addEventListener("abort", x)));
    const w = Wl(t.baseURL, t.url, t.allowAbsoluteUrls), A = new URL(w, be.hasBrowserEnv ? be.origin : void 0), O = A.protocol || Qp[0];
    if (O === "data:") {
      let b;
      if (p !== "GET")
        return fr(r, i, {
          status: 405,
          statusText: "method not allowed",
          headers: {},
          config: t
        });
      try {
        b = cE(t.url, u === "blob", {
          Blob: t.env && t.env.Blob
        });
      } catch (E) {
        throw V.from(E, V.ERR_BAD_REQUEST, t);
      }
      return u === "text" ? (b = b.toString(l), (!l || l === "utf8") && (b = P.stripBOM(b))) : u === "stream" && (b = ie.Readable.from(b)), fr(r, i, {
        data: b,
        status: 200,
        statusText: "OK",
        headers: new Le(),
        config: t
      });
    }
    if (Qp.indexOf(O) === -1)
      return i(new V(
        "Unsupported protocol " + O,
        V.ERR_BAD_REQUEST,
        t
      ));
    const k = Le.from(t.headers).normalize();
    k.set("User-Agent", "axios/" + eo, !1);
    const { onUploadProgress: q, onDownloadProgress: W } = t, te = t.maxRate;
    let T, H;
    if (P.isSpecCompliantForm(o)) {
      const b = k.getContentType(/boundary=([-_\w\d]{10,70})/i);
      o = dE(o, (E) => {
        k.set(E);
      }, {
        tag: `axios-${eo}-boundary`,
        boundary: b && b[1] || void 0
      });
    } else if (P.isFormData(o) && P.isFunction(o.getHeaders)) {
      if (k.set(o.getHeaders()), !k.hasContentLength())
        try {
          const b = await Pe.promisify(o.getLength).call(o);
          Number.isFinite(b) && b >= 0 && k.setContentLength(b);
        } catch {
        }
    } else if (P.isBlob(o) || P.isFile(o))
      o.size && k.setContentType(o.type || "application/octet-stream"), k.setContentLength(o.size || 0), o = ie.Readable.from(jm(o));
    else if (o && !P.isStream(o)) {
      if (!Buffer.isBuffer(o)) if (P.isArrayBuffer(o))
        o = Buffer.from(new Uint8Array(o));
      else if (P.isString(o))
        o = Buffer.from(o, "utf-8");
      else
        return i(new V(
          "Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream",
          V.ERR_BAD_REQUEST,
          t
        ));
      if (k.setContentLength(o.length, !1), t.maxBodyLength > -1 && o.length > t.maxBodyLength)
        return i(new V(
          "Request body larger than maxBodyLength limit",
          V.ERR_BAD_REQUEST,
          t
        ));
    }
    const j = P.toFiniteNumber(k.getContentLength());
    P.isArray(te) ? (T = te[0], H = te[1]) : T = H = te, o && (q || T) && (P.isStream(o) || (o = ie.Readable.from(o, { objectMode: !1 })), o = ie.pipeline([o, new Xp({
      maxRate: P.toFiniteNumber(T)
    })], P.noop), q && o.on("progress", ef(
      o,
      to(
        j,
        Rr(no(q), !1, 3)
      )
    )));
    let J;
    if (t.auth) {
      const b = t.auth.username || "", E = t.auth.password || "";
      J = b + ":" + E;
    }
    if (!J && A.username) {
      const b = A.username, E = A.password;
      J = b + ":" + E;
    }
    J && k.delete("authorization");
    let ne;
    try {
      ne = zl(
        A.pathname + A.search,
        t.params,
        t.paramsSerializer
      ).replace(/^\?/, "");
    } catch (b) {
      const E = new Error(b.message);
      return E.config = t, E.url = t.url, E.exists = !0, i(E);
    }
    k.set(
      "Accept-Encoding",
      "gzip, compress, deflate" + (Zp ? ", br" : ""),
      !1
    );
    const F = {
      path: ne,
      method: p,
      headers: k.toJSON(),
      agents: { http: t.httpAgent, https: t.httpsAgent },
      auth: J,
      protocol: O,
      family: s,
      beforeRedirect: EE,
      beforeRedirects: {}
    };
    !P.isUndefined(c) && (F.lookup = c), t.socketPath ? F.socketPath = t.socketPath : (F.hostname = A.hostname.startsWith("[") ? A.hostname.slice(1, -1) : A.hostname, F.port = A.port, Mm(F, t.proxy, O + "//" + A.hostname + (A.port ? ":" + A.port : "") + F.path));
    let $;
    const D = wE.test(F.protocol);
    if (F.agent = D ? t.httpsAgent : t.httpAgent, t.transport ? $ = t.transport : t.maxRedirects === 0 ? $ = D ? Nl : bo : (t.maxRedirects && (F.maxRedirects = t.maxRedirects), t.beforeRedirect && (F.beforeRedirects.config = t.beforeRedirect), $ = D ? bE : yE), t.maxBodyLength > -1 ? F.maxBodyLength = t.maxBodyLength : F.maxBodyLength = 1 / 0, t.insecureHTTPParser && (F.insecureHTTPParser = t.insecureHTTPParser), g = $.request(F, function(E) {
      if (g.destroyed) return;
      const R = [E], N = +E.headers["content-length"];
      if (W || H) {
        const M = new Xp({
          maxRate: P.toFiniteNumber(H)
        });
        W && M.on("progress", ef(
          M,
          to(
            N,
            Rr(no(W), !0, 3)
          )
        )), R.push(M);
      }
      let L = E;
      const B = E.req || g;
      if (t.decompress !== !1 && E.headers["content-encoding"])
        switch ((p === "HEAD" || E.statusCode === 204) && delete E.headers["content-encoding"], (E.headers["content-encoding"] || "").toLowerCase()) {
          case "gzip":
          case "x-gzip":
          case "compress":
          case "x-compress":
            R.push(Qe.createUnzip(Jp)), delete E.headers["content-encoding"];
            break;
          case "deflate":
            R.push(new hE()), R.push(Qe.createUnzip(Jp)), delete E.headers["content-encoding"];
            break;
          case "br":
            Zp && (R.push(Qe.createBrotliDecompress(xE)), delete E.headers["content-encoding"]);
        }
      L = R.length > 1 ? ie.pipeline(R, P.noop) : R[0];
      const K = ie.finished(L, () => {
        K(), y();
      }), Z = {
        status: E.statusCode,
        statusText: E.statusMessage,
        headers: new Le(E.headers),
        config: t,
        request: B
      };
      if (u === "stream")
        Z.data = L, fr(r, i, Z);
      else {
        const M = [];
        let le = 0;
        L.on("data", function(f) {
          M.push(f), le += f.length, t.maxContentLength > -1 && le > t.maxContentLength && (m = !0, L.destroy(), i(new V(
            "maxContentLength size of " + t.maxContentLength + " exceeded",
            V.ERR_BAD_RESPONSE,
            t,
            B
          )));
        }), L.on("aborted", function() {
          if (m)
            return;
          const f = new V(
            "stream has been aborted",
            V.ERR_BAD_RESPONSE,
            t,
            B
          );
          L.destroy(f), i(f);
        }), L.on("error", function(f) {
          g.destroyed || i(V.from(f, null, t, B));
        }), L.on("end", function() {
          try {
            let f = M.length === 1 ? M[0] : Buffer.concat(M);
            u !== "arraybuffer" && (f = f.toString(l), (!l || l === "utf8") && (f = P.stripBOM(f))), Z.data = f;
          } catch (f) {
            return i(V.from(f, null, t, Z.request, Z));
          }
          fr(r, i, Z);
        });
      }
      v.once("abort", (M) => {
        L.destroyed || (L.emit("error", M), L.destroy());
      });
    }), v.once("abort", (b) => {
      i(b), g.destroy(b);
    }), g.on("error", function(E) {
      i(V.from(E, null, t, g));
    }), g.on("socket", function(E) {
      E.setKeepAlive(!0, 1e3 * 60);
    }), t.timeout) {
      const b = parseInt(t.timeout, 10);
      if (Number.isNaN(b)) {
        i(new V(
          "error trying to parse `config.timeout` to int",
          V.ERR_BAD_OPTION_VALUE,
          t,
          g
        ));
        return;
      }
      g.setTimeout(b, function() {
        if (d) return;
        let R = t.timeout ? "timeout of " + t.timeout + "ms exceeded" : "timeout exceeded";
        const N = t.transitional || Hl;
        t.timeoutErrorMessage && (R = t.timeoutErrorMessage), i(new V(
          R,
          N.clarifyTimeoutError ? V.ETIMEDOUT : V.ECONNABORTED,
          t,
          g
        )), x();
      });
    }
    if (P.isStream(o)) {
      let b = !1, E = !1;
      o.on("end", () => {
        b = !0;
      }), o.once("error", (R) => {
        E = !0, g.destroy(R);
      }), o.on("close", () => {
        !b && !E && x(new an("Request stream has been aborted", t, g));
      }), o.pipe(g);
    } else
      g.end(o);
  });
}, RE = be.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, be.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(be.origin),
  be.navigator && /(msie|trident)/i.test(be.navigator.userAgent)
) : () => !0, CE = be.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, i, a) {
      const o = [e + "=" + encodeURIComponent(t)];
      P.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()), P.isString(r) && o.push("path=" + r), P.isString(i) && o.push("domain=" + i), a === !0 && o.push("secure"), document.cookie = o.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
), nf = (e) => e instanceof Le ? { ...e } : e;
function Mn(e, t) {
  t = t || {};
  const n = {};
  function r(u, l, p, d) {
    return P.isPlainObject(u) && P.isPlainObject(l) ? P.merge.call({ caseless: d }, u, l) : P.isPlainObject(l) ? P.merge({}, l) : P.isArray(l) ? l.slice() : l;
  }
  function i(u, l, p, d) {
    if (P.isUndefined(l)) {
      if (!P.isUndefined(u))
        return r(void 0, u, p, d);
    } else return r(u, l, p, d);
  }
  function a(u, l) {
    if (!P.isUndefined(l))
      return r(void 0, l);
  }
  function o(u, l) {
    if (P.isUndefined(l)) {
      if (!P.isUndefined(u))
        return r(void 0, u);
    } else return r(void 0, l);
  }
  function c(u, l, p) {
    if (p in t)
      return r(u, l);
    if (p in e)
      return r(void 0, u);
  }
  const s = {
    url: a,
    method: a,
    data: a,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: c,
    headers: (u, l, p) => i(nf(u), nf(l), p, !0)
  };
  return P.forEach(Object.keys(Object.assign({}, e, t)), function(l) {
    const p = s[l] || i, d = p(e[l], t[l], l);
    P.isUndefined(d) && p !== c || (n[l] = d);
  }), n;
}
const qm = (e) => {
  const t = Mn({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: i, xsrfCookieName: a, headers: o, auth: c } = t;
  t.headers = o = Le.from(o), t.url = zl(Wl(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), c && o.set(
    "Authorization",
    "Basic " + btoa((c.username || "") + ":" + (c.password ? unescape(encodeURIComponent(c.password)) : ""))
  );
  let s;
  if (P.isFormData(n)) {
    if (be.hasStandardBrowserEnv || be.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if ((s = o.getContentType()) !== !1) {
      const [u, ...l] = s ? s.split(";").map((p) => p.trim()).filter(Boolean) : [];
      o.setContentType([u || "multipart/form-data", ...l].join("; "));
    }
  }
  if (be.hasStandardBrowserEnv && (r && P.isFunction(r) && (r = r(t)), r || r !== !1 && RE(t.url))) {
    const u = i && a && CE.read(a);
    u && o.set(i, u);
  }
  return t;
}, OE = typeof XMLHttpRequest < "u", $E = OE && function(e) {
  return new Promise(function(n, r) {
    const i = qm(e);
    let a = i.data;
    const o = Le.from(i.headers).normalize();
    let { responseType: c, onUploadProgress: s, onDownloadProgress: u } = i, l, p, d, m, g;
    function v() {
      m && m(), g && g(), i.cancelToken && i.cancelToken.unsubscribe(l), i.signal && i.signal.removeEventListener("abort", l);
    }
    let y = new XMLHttpRequest();
    y.open(i.method.toUpperCase(), i.url, !0), y.timeout = i.timeout;
    function x() {
      if (!y)
        return;
      const A = Le.from(
        "getAllResponseHeaders" in y && y.getAllResponseHeaders()
      ), k = {
        data: !c || c === "text" || c === "json" ? y.responseText : y.response,
        status: y.status,
        statusText: y.statusText,
        headers: A,
        config: e,
        request: y
      };
      fr(function(W) {
        n(W), v();
      }, function(W) {
        r(W), v();
      }, k), y = null;
    }
    "onloadend" in y ? y.onloadend = x : y.onreadystatechange = function() {
      !y || y.readyState !== 4 || y.status === 0 && !(y.responseURL && y.responseURL.indexOf("file:") === 0) || setTimeout(x);
    }, y.onabort = function() {
      y && (r(new V("Request aborted", V.ECONNABORTED, e, y)), y = null);
    }, y.onerror = function() {
      r(new V("Network Error", V.ERR_NETWORK, e, y)), y = null;
    }, y.ontimeout = function() {
      let O = i.timeout ? "timeout of " + i.timeout + "ms exceeded" : "timeout exceeded";
      const k = i.transitional || Hl;
      i.timeoutErrorMessage && (O = i.timeoutErrorMessage), r(new V(
        O,
        k.clarifyTimeoutError ? V.ETIMEDOUT : V.ECONNABORTED,
        e,
        y
      )), y = null;
    }, a === void 0 && o.setContentType(null), "setRequestHeader" in y && P.forEach(o.toJSON(), function(O, k) {
      y.setRequestHeader(k, O);
    }), P.isUndefined(i.withCredentials) || (y.withCredentials = !!i.withCredentials), c && c !== "json" && (y.responseType = i.responseType), u && ([d, g] = Rr(u, !0), y.addEventListener("progress", d)), s && y.upload && ([p, m] = Rr(s), y.upload.addEventListener("progress", p), y.upload.addEventListener("loadend", m)), (i.cancelToken || i.signal) && (l = (A) => {
      y && (r(!A || A.type ? new an(null, e, y) : A), y.abort(), y = null);
    }, i.cancelToken && i.cancelToken.subscribe(l), i.signal && (i.signal.aborted ? l() : i.signal.addEventListener("abort", l)));
    const w = Bm(i.url);
    if (w && be.protocols.indexOf(w) === -1) {
      r(new V("Unsupported protocol " + w + ":", V.ERR_BAD_REQUEST, e));
      return;
    }
    y.send(a || null);
  });
}, IE = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), i;
    const a = function(u) {
      if (!i) {
        i = !0, c();
        const l = u instanceof Error ? u : this.reason;
        r.abort(l instanceof V ? l : new an(l instanceof Error ? l.message : l));
      }
    };
    let o = t && setTimeout(() => {
      o = null, a(new V(`timeout ${t} of ms exceeded`, V.ETIMEDOUT));
    }, t);
    const c = () => {
      e && (o && clearTimeout(o), o = null, e.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(a) : u.removeEventListener("abort", a);
      }), e = null);
    };
    e.forEach((u) => u.addEventListener("abort", a));
    const { signal: s } = r;
    return s.unsubscribe = () => P.asap(c), s;
  }
}, PE = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, i;
  for (; r < n; )
    i = r + t, yield e.slice(r, i), r = i;
}, DE = async function* (e, t) {
  for await (const n of FE(e))
    yield* PE(n, t);
}, FE = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await t.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await t.cancel();
  }
}, rf = (e, t, n, r) => {
  const i = DE(e, t);
  let a = 0, o, c = (s) => {
    o || (o = !0, r && r(s));
  };
  return new ReadableStream({
    async pull(s) {
      try {
        const { done: u, value: l } = await i.next();
        if (u) {
          c(), s.close();
          return;
        }
        let p = l.byteLength;
        if (n) {
          let d = a += p;
          n(d);
        }
        s.enqueue(new Uint8Array(l));
      } catch (u) {
        throw c(u), u;
      }
    },
    cancel(s) {
      return c(s), i.return();
    }
  }, {
    highWaterMark: 2
  });
}, Io = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", zm = Io && typeof ReadableStream == "function", NE = Io && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Hm = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, kE = zm && Hm(() => {
  let e = !1;
  const t = new Request(be.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), af = 64 * 1024, sl = zm && Hm(() => P.isReadableStream(new Response("").body)), ro = {
  stream: sl && ((e) => e.body)
};
Io && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !ro[t] && (ro[t] = P.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new V(`Response type '${t}' is not supported`, V.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const LE = async (e) => {
  if (e == null)
    return 0;
  if (P.isBlob(e))
    return e.size;
  if (P.isSpecCompliantForm(e))
    return (await new Request(be.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (P.isArrayBufferView(e) || P.isArrayBuffer(e))
    return e.byteLength;
  if (P.isURLSearchParams(e) && (e = e + ""), P.isString(e))
    return (await NE(e)).byteLength;
}, UE = async (e, t) => {
  const n = P.toFiniteNumber(e.getContentLength());
  return n ?? LE(t);
}, BE = Io && (async (e) => {
  let {
    url: t,
    method: n,
    data: r,
    signal: i,
    cancelToken: a,
    timeout: o,
    onDownloadProgress: c,
    onUploadProgress: s,
    responseType: u,
    headers: l,
    withCredentials: p = "same-origin",
    fetchOptions: d
  } = qm(e);
  u = u ? (u + "").toLowerCase() : "text";
  let m = IE([i, a && a.toAbortSignal()], o), g;
  const v = m && m.unsubscribe && (() => {
    m.unsubscribe();
  });
  let y;
  try {
    if (s && kE && n !== "get" && n !== "head" && (y = await UE(l, r)) !== 0) {
      let k = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), q;
      if (P.isFormData(r) && (q = k.headers.get("content-type")) && l.setContentType(q), k.body) {
        const [W, te] = to(
          y,
          Rr(no(s))
        );
        r = rf(k.body, af, W, te);
      }
    }
    P.isString(p) || (p = p ? "include" : "omit");
    const x = "credentials" in Request.prototype;
    g = new Request(t, {
      ...d,
      signal: m,
      method: n.toUpperCase(),
      headers: l.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: x ? p : void 0
    });
    let w = await fetch(g, d);
    const A = sl && (u === "stream" || u === "response");
    if (sl && (c || A && v)) {
      const k = {};
      ["status", "statusText", "headers"].forEach((T) => {
        k[T] = w[T];
      });
      const q = P.toFiniteNumber(w.headers.get("content-length")), [W, te] = c && to(
        q,
        Rr(no(c), !0)
      ) || [];
      w = new Response(
        rf(w.body, af, W, () => {
          te && te(), v && v();
        }),
        k
      );
    }
    u = u || "text";
    let O = await ro[P.findKey(ro, u) || "text"](w, e);
    return !A && v && v(), await new Promise((k, q) => {
      fr(k, q, {
        data: O,
        headers: Le.from(w.headers),
        status: w.status,
        statusText: w.statusText,
        config: e,
        request: g
      });
    });
  } catch (x) {
    throw v && v(), x && x.name === "TypeError" && /Load failed|fetch/i.test(x.message) ? Object.assign(
      new V("Network Error", V.ERR_NETWORK, e, g),
      {
        cause: x.cause || x
      }
    ) : V.from(x, x && x.code, e, g);
  }
}), cl = {
  http: AE,
  xhr: $E,
  fetch: BE
};
P.forEach(cl, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const of = (e) => `- ${e}`, jE = (e) => P.isFunction(e) || e === null || e === !1, Gm = {
  getAdapter: (e) => {
    e = P.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const i = {};
    for (let a = 0; a < t; a++) {
      n = e[a];
      let o;
      if (r = n, !jE(n) && (r = cl[(o = String(n)).toLowerCase()], r === void 0))
        throw new V(`Unknown adapter '${o}'`);
      if (r)
        break;
      i[o || "#" + a] = r;
    }
    if (!r) {
      const a = Object.entries(i).map(
        ([c, s]) => `adapter ${c} ` + (s === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = t ? a.length > 1 ? `since :
` + a.map(of).join(`
`) : " " + of(a[0]) : "as no adapter specified";
      throw new V(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: cl
};
function Qs(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new an(null, e);
}
function sf(e) {
  return Qs(e), e.headers = Le.from(e.headers), e.data = Ws.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Gm.getAdapter(e.adapter || Di.adapter)(e).then(function(r) {
    return Qs(e), r.data = Ws.call(
      e,
      e.transformResponse,
      r
    ), r.headers = Le.from(r.headers), r;
  }, function(r) {
    return Im(r) || (Qs(e), r && r.response && (r.response.data = Ws.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = Le.from(r.response.headers))), Promise.reject(r);
  });
}
const Po = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Po[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const cf = {};
Po.transitional = function(t, n, r) {
  function i(a, o) {
    return "[Axios v" + eo + "] Transitional option '" + a + "'" + o + (r ? ". " + r : "");
  }
  return (a, o, c) => {
    if (t === !1)
      throw new V(
        i(o, " has been removed" + (n ? " in " + n : "")),
        V.ERR_DEPRECATED
      );
    return n && !cf[o] && (cf[o] = !0, console.warn(
      i(
        o,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(a, o, c) : !0;
  };
};
Po.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function ME(e, t, n) {
  if (typeof e != "object")
    throw new V("options must be an object", V.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let i = r.length;
  for (; i-- > 0; ) {
    const a = r[i], o = t[a];
    if (o) {
      const c = e[a], s = c === void 0 || o(c, a, e);
      if (s !== !0)
        throw new V("option " + a + " must be " + s, V.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new V("Unknown option " + a, V.ERR_BAD_OPTION);
  }
}
const za = {
  assertOptions: ME,
  validators: Po
}, bt = za.validators;
let Nn = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new jp(),
      response: new jp()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let i = {};
        Error.captureStackTrace ? Error.captureStackTrace(i) : i = new Error();
        const a = i.stack ? i.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? a && !String(r.stack).endsWith(a.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + a) : r.stack = a;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Mn(this.defaults, n);
    const { transitional: r, paramsSerializer: i, headers: a } = n;
    r !== void 0 && za.assertOptions(r, {
      silentJSONParsing: bt.transitional(bt.boolean),
      forcedJSONParsing: bt.transitional(bt.boolean),
      clarifyTimeoutError: bt.transitional(bt.boolean)
    }, !1), i != null && (P.isFunction(i) ? n.paramsSerializer = {
      serialize: i
    } : za.assertOptions(i, {
      encode: bt.function,
      serialize: bt.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), za.assertOptions(n, {
      baseUrl: bt.spelling("baseURL"),
      withXsrfToken: bt.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let o = a && P.merge(
      a.common,
      a[n.method]
    );
    a && P.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (g) => {
        delete a[g];
      }
    ), n.headers = Le.concat(o, a);
    const c = [];
    let s = !0;
    this.interceptors.request.forEach(function(v) {
      typeof v.runWhen == "function" && v.runWhen(n) === !1 || (s = s && v.synchronous, c.unshift(v.fulfilled, v.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(v) {
      u.push(v.fulfilled, v.rejected);
    });
    let l, p = 0, d;
    if (!s) {
      const g = [sf.bind(this), void 0];
      for (g.unshift.apply(g, c), g.push.apply(g, u), d = g.length, l = Promise.resolve(n); p < d; )
        l = l.then(g[p++], g[p++]);
      return l;
    }
    d = c.length;
    let m = n;
    for (p = 0; p < d; ) {
      const g = c[p++], v = c[p++];
      try {
        m = g(m);
      } catch (y) {
        v.call(this, y);
        break;
      }
    }
    try {
      l = sf.call(this, m);
    } catch (g) {
      return Promise.reject(g);
    }
    for (p = 0, d = u.length; p < d; )
      l = l.then(u[p++], u[p++]);
    return l;
  }
  getUri(t) {
    t = Mn(this.defaults, t);
    const n = Wl(t.baseURL, t.url, t.allowAbsoluteUrls);
    return zl(n, t.params, t.paramsSerializer);
  }
};
P.forEach(["delete", "get", "head", "options"], function(t) {
  Nn.prototype[t] = function(n, r) {
    return this.request(Mn(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
P.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(a, o, c) {
      return this.request(Mn(c || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: o
      }));
    };
  }
  Nn.prototype[t] = n(), Nn.prototype[t + "Form"] = n(!0);
});
let qE = class Wm {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(a) {
      n = a;
    });
    const r = this;
    this.promise.then((i) => {
      if (!r._listeners) return;
      let a = r._listeners.length;
      for (; a-- > 0; )
        r._listeners[a](i);
      r._listeners = null;
    }), this.promise.then = (i) => {
      let a;
      const o = new Promise((c) => {
        r.subscribe(c), a = c;
      }).then(i);
      return o.cancel = function() {
        r.unsubscribe(a);
      }, o;
    }, t(function(a, o, c) {
      r.reason || (r.reason = new an(a, o, c), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), n = (r) => {
      t.abort(r);
    };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Wm(function(i) {
        t = i;
      }),
      cancel: t
    };
  }
};
function zE(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function HE(e) {
  return P.isObject(e) && e.isAxiosError === !0;
}
const ll = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(ll).forEach(([e, t]) => {
  ll[t] = e;
});
function Vm(e) {
  const t = new Nn(e), n = Jh(Nn.prototype.request, t);
  return P.extend(n, Nn.prototype, t, { allOwnKeys: !0 }), P.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(i) {
    return Vm(Mn(e, i));
  }, n;
}
const Ee = Vm(Di);
Ee.Axios = Nn;
Ee.CanceledError = an;
Ee.CancelToken = qE;
Ee.isCancel = Im;
Ee.VERSION = eo;
Ee.toFormData = $o;
Ee.AxiosError = V;
Ee.Cancel = Ee.CanceledError;
Ee.all = function(t) {
  return Promise.all(t);
};
Ee.spread = zE;
Ee.isAxiosError = HE;
Ee.mergeConfig = Mn;
Ee.AxiosHeaders = Le;
Ee.formToJSON = (e) => $m(P.isHTMLForm(e) ? new FormData(e) : e);
Ee.getAdapter = Gm.getAdapter;
Ee.HttpStatusCode = ll;
Ee.default = Ee;
const {
  Axios: KI,
  AxiosError: JI,
  CanceledError: ZI,
  isCancel: QI,
  CancelToken: eP,
  VERSION: tP,
  all: nP,
  Cancel: rP,
  isAxiosError: iP,
  spread: aP,
  toFormData: oP,
  AxiosHeaders: sP,
  HttpStatusCode: cP,
  formToJSON: lP,
  getAdapter: uP,
  mergeConfig: pP
} = Ee;
var Ym = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(Te, function() {
    var n = 1e3, r = 6e4, i = 36e5, a = "millisecond", o = "second", c = "minute", s = "hour", u = "day", l = "week", p = "month", d = "quarter", m = "year", g = "date", v = "Invalid Date", y = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, x = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, w = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(F) {
      var $ = ["th", "st", "nd", "rd"], D = F % 100;
      return "[" + F + ($[(D - 20) % 10] || $[D] || $[0]) + "]";
    } }, A = function(F, $, D) {
      var b = String(F);
      return !b || b.length >= $ ? F : "" + Array($ + 1 - b.length).join(D) + F;
    }, O = { s: A, z: function(F) {
      var $ = -F.utcOffset(), D = Math.abs($), b = Math.floor(D / 60), E = D % 60;
      return ($ <= 0 ? "+" : "-") + A(b, 2, "0") + ":" + A(E, 2, "0");
    }, m: function F($, D) {
      if ($.date() < D.date()) return -F(D, $);
      var b = 12 * (D.year() - $.year()) + (D.month() - $.month()), E = $.clone().add(b, p), R = D - E < 0, N = $.clone().add(b + (R ? -1 : 1), p);
      return +(-(b + (D - E) / (R ? E - N : N - E)) || 0);
    }, a: function(F) {
      return F < 0 ? Math.ceil(F) || 0 : Math.floor(F);
    }, p: function(F) {
      return { M: p, y: m, w: l, d: u, D: g, h: s, m: c, s: o, ms: a, Q: d }[F] || String(F || "").toLowerCase().replace(/s$/, "");
    }, u: function(F) {
      return F === void 0;
    } }, k = "en", q = {};
    q[k] = w;
    var W = "$isDayjsObject", te = function(F) {
      return F instanceof J || !(!F || !F[W]);
    }, T = function F($, D, b) {
      var E;
      if (!$) return k;
      if (typeof $ == "string") {
        var R = $.toLowerCase();
        q[R] && (E = R), D && (q[R] = D, E = R);
        var N = $.split("-");
        if (!E && N.length > 1) return F(N[0]);
      } else {
        var L = $.name;
        q[L] = $, E = L;
      }
      return !b && E && (k = E), E || !b && k;
    }, H = function(F, $) {
      if (te(F)) return F.clone();
      var D = typeof $ == "object" ? $ : {};
      return D.date = F, D.args = arguments, new J(D);
    }, j = O;
    j.l = T, j.i = te, j.w = function(F, $) {
      return H(F, { locale: $.$L, utc: $.$u, x: $.$x, $offset: $.$offset });
    };
    var J = function() {
      function F(D) {
        this.$L = T(D.locale, null, !0), this.parse(D), this.$x = this.$x || D.x || {}, this[W] = !0;
      }
      var $ = F.prototype;
      return $.parse = function(D) {
        this.$d = function(b) {
          var E = b.date, R = b.utc;
          if (E === null) return /* @__PURE__ */ new Date(NaN);
          if (j.u(E)) return /* @__PURE__ */ new Date();
          if (E instanceof Date) return new Date(E);
          if (typeof E == "string" && !/Z$/i.test(E)) {
            var N = E.match(y);
            if (N) {
              var L = N[2] - 1 || 0, B = (N[7] || "0").substring(0, 3);
              return R ? new Date(Date.UTC(N[1], L, N[3] || 1, N[4] || 0, N[5] || 0, N[6] || 0, B)) : new Date(N[1], L, N[3] || 1, N[4] || 0, N[5] || 0, N[6] || 0, B);
            }
          }
          return new Date(E);
        }(D), this.init();
      }, $.init = function() {
        var D = this.$d;
        this.$y = D.getFullYear(), this.$M = D.getMonth(), this.$D = D.getDate(), this.$W = D.getDay(), this.$H = D.getHours(), this.$m = D.getMinutes(), this.$s = D.getSeconds(), this.$ms = D.getMilliseconds();
      }, $.$utils = function() {
        return j;
      }, $.isValid = function() {
        return this.$d.toString() !== v;
      }, $.isSame = function(D, b) {
        var E = H(D);
        return this.startOf(b) <= E && E <= this.endOf(b);
      }, $.isAfter = function(D, b) {
        return H(D) < this.startOf(b);
      }, $.isBefore = function(D, b) {
        return this.endOf(b) < H(D);
      }, $.$g = function(D, b, E) {
        return j.u(D) ? this[b] : this.set(E, D);
      }, $.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, $.valueOf = function() {
        return this.$d.getTime();
      }, $.startOf = function(D, b) {
        var E = this, R = !!j.u(b) || b, N = j.p(D), L = function(C, S) {
          var G = j.w(E.$u ? Date.UTC(E.$y, S, C) : new Date(E.$y, S, C), E);
          return R ? G : G.endOf(u);
        }, B = function(C, S) {
          return j.w(E.toDate()[C].apply(E.toDate("s"), (R ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(S)), E);
        }, K = this.$W, Z = this.$M, M = this.$D, le = "set" + (this.$u ? "UTC" : "");
        switch (N) {
          case m:
            return R ? L(1, 0) : L(31, 11);
          case p:
            return R ? L(1, Z) : L(0, Z + 1);
          case l:
            var h = this.$locale().weekStart || 0, f = (K < h ? K + 7 : K) - h;
            return L(R ? M - f : M + (6 - f), Z);
          case u:
          case g:
            return B(le + "Hours", 0);
          case s:
            return B(le + "Minutes", 1);
          case c:
            return B(le + "Seconds", 2);
          case o:
            return B(le + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, $.endOf = function(D) {
        return this.startOf(D, !1);
      }, $.$set = function(D, b) {
        var E, R = j.p(D), N = "set" + (this.$u ? "UTC" : ""), L = (E = {}, E[u] = N + "Date", E[g] = N + "Date", E[p] = N + "Month", E[m] = N + "FullYear", E[s] = N + "Hours", E[c] = N + "Minutes", E[o] = N + "Seconds", E[a] = N + "Milliseconds", E)[R], B = R === u ? this.$D + (b - this.$W) : b;
        if (R === p || R === m) {
          var K = this.clone().set(g, 1);
          K.$d[L](B), K.init(), this.$d = K.set(g, Math.min(this.$D, K.daysInMonth())).$d;
        } else L && this.$d[L](B);
        return this.init(), this;
      }, $.set = function(D, b) {
        return this.clone().$set(D, b);
      }, $.get = function(D) {
        return this[j.p(D)]();
      }, $.add = function(D, b) {
        var E, R = this;
        D = Number(D);
        var N = j.p(b), L = function(Z) {
          var M = H(R);
          return j.w(M.date(M.date() + Math.round(Z * D)), R);
        };
        if (N === p) return this.set(p, this.$M + D);
        if (N === m) return this.set(m, this.$y + D);
        if (N === u) return L(1);
        if (N === l) return L(7);
        var B = (E = {}, E[c] = r, E[s] = i, E[o] = n, E)[N] || 1, K = this.$d.getTime() + D * B;
        return j.w(K, this);
      }, $.subtract = function(D, b) {
        return this.add(-1 * D, b);
      }, $.format = function(D) {
        var b = this, E = this.$locale();
        if (!this.isValid()) return E.invalidDate || v;
        var R = D || "YYYY-MM-DDTHH:mm:ssZ", N = j.z(this), L = this.$H, B = this.$m, K = this.$M, Z = E.weekdays, M = E.months, le = E.meridiem, h = function(S, G, z, X) {
          return S && (S[G] || S(b, R)) || z[G].slice(0, X);
        }, f = function(S) {
          return j.s(L % 12 || 12, S, "0");
        }, C = le || function(S, G, z) {
          var X = S < 12 ? "AM" : "PM";
          return z ? X.toLowerCase() : X;
        };
        return R.replace(x, function(S, G) {
          return G || function(z) {
            switch (z) {
              case "YY":
                return String(b.$y).slice(-2);
              case "YYYY":
                return j.s(b.$y, 4, "0");
              case "M":
                return K + 1;
              case "MM":
                return j.s(K + 1, 2, "0");
              case "MMM":
                return h(E.monthsShort, K, M, 3);
              case "MMMM":
                return h(M, K);
              case "D":
                return b.$D;
              case "DD":
                return j.s(b.$D, 2, "0");
              case "d":
                return String(b.$W);
              case "dd":
                return h(E.weekdaysMin, b.$W, Z, 2);
              case "ddd":
                return h(E.weekdaysShort, b.$W, Z, 3);
              case "dddd":
                return Z[b.$W];
              case "H":
                return String(L);
              case "HH":
                return j.s(L, 2, "0");
              case "h":
                return f(1);
              case "hh":
                return f(2);
              case "a":
                return C(L, B, !0);
              case "A":
                return C(L, B, !1);
              case "m":
                return String(B);
              case "mm":
                return j.s(B, 2, "0");
              case "s":
                return String(b.$s);
              case "ss":
                return j.s(b.$s, 2, "0");
              case "SSS":
                return j.s(b.$ms, 3, "0");
              case "Z":
                return N;
            }
            return null;
          }(S) || N.replace(":", "");
        });
      }, $.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, $.diff = function(D, b, E) {
        var R, N = this, L = j.p(b), B = H(D), K = (B.utcOffset() - this.utcOffset()) * r, Z = this - B, M = function() {
          return j.m(N, B);
        };
        switch (L) {
          case m:
            R = M() / 12;
            break;
          case p:
            R = M();
            break;
          case d:
            R = M() / 3;
            break;
          case l:
            R = (Z - K) / 6048e5;
            break;
          case u:
            R = (Z - K) / 864e5;
            break;
          case s:
            R = Z / i;
            break;
          case c:
            R = Z / r;
            break;
          case o:
            R = Z / n;
            break;
          default:
            R = Z;
        }
        return E ? R : j.a(R);
      }, $.daysInMonth = function() {
        return this.endOf(p).$D;
      }, $.$locale = function() {
        return q[this.$L];
      }, $.locale = function(D, b) {
        if (!D) return this.$L;
        var E = this.clone(), R = T(D, b, !0);
        return R && (E.$L = R), E;
      }, $.clone = function() {
        return j.w(this.$d, this);
      }, $.toDate = function() {
        return new Date(this.valueOf());
      }, $.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, $.toISOString = function() {
        return this.$d.toISOString();
      }, $.toString = function() {
        return this.$d.toUTCString();
      }, F;
    }(), ne = J.prototype;
    return H.prototype = ne, [["$ms", a], ["$s", o], ["$m", c], ["$H", s], ["$W", u], ["$M", p], ["$y", m], ["$D", g]].forEach(function(F) {
      ne[F[1]] = function($) {
        return this.$g($, F[0], F[1]);
      };
    }), H.extend = function(F, $) {
      return F.$i || (F($, J, H), F.$i = !0), H;
    }, H.locale = T, H.isDayjs = te, H.unix = function(F) {
      return H(1e3 * F);
    }, H.en = q[k], H.Ls = q, H.p = {}, H;
  });
})(Ym);
var GE = Ym.exports;
const lf = /* @__PURE__ */ Ul(GE);
var ki = {}, dn = {}, me = {}, ri = ae, Xm = oe, Km = parseInt("0777", 8), WE = wr.mkdirp = wr.mkdirP = wr;
function wr(e, t, n, r) {
  typeof t == "function" ? (n = t, t = {}) : (!t || typeof t != "object") && (t = { mode: t });
  var i = t.mode, a = t.fs || Xm;
  i === void 0 && (i = Km), r || (r = null);
  var o = n || /* istanbul ignore next */
  function() {
  };
  e = ri.resolve(e), a.mkdir(e, i, function(c) {
    if (!c)
      return r = r || e, o(null, r);
    switch (c.code) {
      case "ENOENT":
        if (ri.dirname(e) === e) return o(c);
        wr(ri.dirname(e), t, function(s, u) {
          s ? o(s, u) : wr(e, t, o, u);
        });
        break;
      default:
        a.stat(e, function(s, u) {
          s || !u.isDirectory() ? o(c, r) : o(null, r);
        });
        break;
    }
  });
}
wr.sync = function e(t, n, r) {
  (!n || typeof n != "object") && (n = { mode: n });
  var i = n.mode, a = n.fs || Xm;
  i === void 0 && (i = Km), r || (r = null), t = ri.resolve(t);
  try {
    a.mkdirSync(t, i), r = r || t;
  } catch (c) {
    switch (c.code) {
      case "ENOENT":
        r = e(ri.dirname(t), n, r), e(t, n, r);
        break;
      default:
        var o;
        try {
          o = a.statSync(t);
        } catch {
          throw c;
        }
        if (!o.isDirectory()) throw c;
        break;
    }
  }
  return r;
};
var tu = { exports: {} }, VE = Jm;
function Jm(e, t) {
  if (e && t) return Jm(e)(t);
  if (typeof e != "function")
    throw new TypeError("need wrapper function");
  return Object.keys(e).forEach(function(r) {
    n[r] = e[r];
  }), n;
  function n() {
    for (var r = new Array(arguments.length), i = 0; i < r.length; i++)
      r[i] = arguments[i];
    var a = e.apply(this, r), o = r[r.length - 1];
    return typeof a == "function" && a !== o && Object.keys(o).forEach(function(c) {
      a[c] = o[c];
    }), a;
  }
}
var Zm = VE;
tu.exports = Zm(Ha);
tu.exports.strict = Zm(Qm);
Ha.proto = Ha(function() {
  Object.defineProperty(Function.prototype, "once", {
    value: function() {
      return Ha(this);
    },
    configurable: !0
  }), Object.defineProperty(Function.prototype, "onceStrict", {
    value: function() {
      return Qm(this);
    },
    configurable: !0
  });
});
function Ha(e) {
  var t = function() {
    return t.called ? t.value : (t.called = !0, t.value = e.apply(this, arguments));
  };
  return t.called = !1, t;
}
function Qm(e) {
  var t = function() {
    if (t.called)
      throw new Error(t.onceError);
    return t.called = !0, t.value = e.apply(this, arguments);
  }, n = e.name || "Function wrapped with `once`";
  return t.onceError = n + " shouldn't be called more than once", t.called = !1, t;
}
var e0 = tu.exports, YE = e0, XE = function() {
}, KE = Te.Bare ? queueMicrotask : process.nextTick.bind(process), JE = function(e) {
  return e.setHeader && typeof e.abort == "function";
}, ZE = function(e) {
  return e.stdio && Array.isArray(e.stdio) && e.stdio.length === 3;
}, t0 = function(e, t, n) {
  if (typeof t == "function") return t0(e, null, t);
  t || (t = {}), n = YE(n || XE);
  var r = e._writableState, i = e._readableState, a = t.readable || t.readable !== !1 && e.readable, o = t.writable || t.writable !== !1 && e.writable, c = !1, s = function() {
    e.writable || u();
  }, u = function() {
    o = !1, a || n.call(e);
  }, l = function() {
    a = !1, o || n.call(e);
  }, p = function(y) {
    n.call(e, y ? new Error("exited with error code: " + y) : null);
  }, d = function(y) {
    n.call(e, y);
  }, m = function() {
    KE(g);
  }, g = function() {
    if (!c) {
      if (a && !(i && i.ended && !i.destroyed)) return n.call(e, new Error("premature close"));
      if (o && !(r && r.ended && !r.destroyed)) return n.call(e, new Error("premature close"));
    }
  }, v = function() {
    e.req.on("finish", u);
  };
  return JE(e) ? (e.on("complete", u), e.on("abort", m), e.req ? v() : e.on("request", v)) : o && !r && (e.on("end", s), e.on("close", s)), ZE(e) && e.on("exit", p), e.on("end", l), e.on("finish", u), t.error !== !1 && e.on("error", d), e.on("close", m), function() {
    c = !0, e.removeListener("complete", u), e.removeListener("abort", m), e.removeListener("request", v), e.req && e.req.removeListener("finish", u), e.removeListener("end", s), e.removeListener("close", s), e.removeListener("finish", u), e.removeListener("exit", p), e.removeListener("end", l), e.removeListener("error", d), e.removeListener("close", m);
  };
}, n0 = t0, QE = e0, e_ = n0, Ga;
try {
  Ga = require("fs");
} catch {
}
var di = function() {
}, t_ = typeof process > "u" ? !1 : /^v?\.0/.test(process.version), Do = function(e) {
  return typeof e == "function";
}, n_ = function(e) {
  return !t_ || !Ga ? !1 : (e instanceof (Ga.ReadStream || di) || e instanceof (Ga.WriteStream || di)) && Do(e.close);
}, r_ = function(e) {
  return e.setHeader && Do(e.abort);
}, i_ = function(e, t, n, r) {
  r = QE(r);
  var i = !1;
  e.on("close", function() {
    i = !0;
  }), e_(e, { readable: t, writable: n }, function(o) {
    if (o) return r(o);
    i = !0, r();
  });
  var a = !1;
  return function(o) {
    if (!i && !a) {
      if (a = !0, n_(e)) return e.close(di);
      if (r_(e)) return e.abort();
      if (Do(e.destroy)) return e.destroy();
      r(o || new Error("stream was destroyed"));
    }
  };
}, uf = function(e) {
  e();
}, a_ = function(e, t) {
  return e.pipe(t);
}, o_ = function() {
  var e = Array.prototype.slice.call(arguments), t = Do(e[e.length - 1] || di) && e.pop() || di;
  if (Array.isArray(e[0]) && (e = e[0]), e.length < 2) throw new Error("pump requires two streams per minimum");
  var n, r = e.map(function(i, a) {
    var o = a < e.length - 1, c = a > 0;
    return i_(i, o, c, function(s) {
      n || (n = s), s && r.forEach(uf), !o && (r.forEach(uf), t(n));
    });
  });
  return e.reduce(a_);
}, r0 = o_;
const io = oe, lr = ae, fa = WE, i0 = r0;
me.sourceType = (e) => {
  if (e) {
    if (e instanceof Buffer) return "buffer";
    if (typeof e._read == "function" || typeof e._transform == "function") return "stream";
    if (typeof e != "string") {
      const t = new Error("Type is not supported, must be a file path, file buffer, or a readable stream");
      throw t.name = "IlligalSourceError", t;
    }
    return "file";
  }
};
function Fo(e) {
  if (typeof e._write == "function" || typeof e._transform == "function") return "stream";
  if (typeof e != "string") {
    const t = new Error("Type is not supported, must be a file path, or a writable stream");
    throw t.name = "IlligalDestinationError", t;
  }
  return "path";
}
me.destType = Fo;
const a0 = new Error("Type is not supported, must be a file path, directory path, file buffer, or a readable stream");
a0.name = "IlligalEntryError";
me.entryType = (e) => {
  if (e) {
    if (e instanceof Buffer) return "buffer";
    if (typeof e._read == "function" || typeof e._transform == "function") return "stream";
    if (typeof e != "string") throw a0;
    return "fileOrDir";
  }
};
me.clone = (e) => {
  const t = {};
  for (const n in e)
    t[n] = e[n];
  return t;
};
me.makeFileProcessFn = (e) => (t, n, r) => {
  r = r || {}, r.source = t;
  const i = Fo(n) === "path" ? io.createWriteStream(n) : n, a = new e(r);
  return nu([a, i]);
};
me.makeCompressDirFn = (e) => (t, n, r) => {
  const i = Fo(n) === "path" ? io.createWriteStream(n) : n, a = new e();
  return a.addEntry(t, r), nu([a, i]);
};
me.makeUncompressFn = (e) => (t, n, r) => {
  if (r = r || {}, r.source = t, !t) {
    const i = new Error("Type is not supported, must be a file path, file buffer, or a readable stream");
    throw i.name = "IlligalSourceError", i;
  }
  if (Fo(n) !== "path") {
    const i = new Error("uncompress destination must be a directory");
    throw i.name = "IlligalDestError", i;
  }
  return new Promise((i, a) => {
    fa(n, (o) => {
      if (o) return a(o);
      let c = 0, s = 0, u = !1;
      function l() {
        u && c === s && i();
      }
      new e(r).on("finish", () => {
        u = !0, l();
      }).on("error", a).on("entry", (p, d, m) => {
        d.on("end", m);
        const g = lr.join(n, p.name);
        if (p.type === "file") {
          const v = lr.dirname(g);
          fa(v, (y) => {
            if (y) return a(y);
            c++, i0(d, io.createWriteStream(g, { mode: r.mode || p.mode }), (x) => {
              if (x) return a(x);
              s++, l();
            });
          });
        } else if (p.type === "symlink") {
          const v = lr.dirname(g), y = lr.resolve(v, p.linkname);
          c++, fa(v, (x) => {
            if (x) return a(x);
            const w = lr.relative(v, y);
            io.symlink(w, g, (A) => {
              if (A) return a(A);
              s++, d.resume();
            });
          });
        } else
          fa(g, (v) => {
            if (v) return a(v);
            d.resume();
          });
      });
    });
  });
};
me.streamToBuffer = (e) => new Promise((t, n) => {
  const r = [];
  e.on("readable", () => {
    let i;
    for (; i = e.read(); ) r.push(i);
  }).on("end", () => t(Buffer.concat(r))).on("error", (i) => n(i));
});
function nu(e) {
  return new Promise((t, n) => {
    i0(e[0], e[1], (r) => {
      if (r) return n(r);
      t();
    });
  });
}
me.safePipe = nu;
function s_(e) {
  return e = lr.normalize(e), process.platform === "win32" && (e = e.replace(/\\+/g, "/")), e;
}
function c_(e, t, n) {
  Buffer.isBuffer(t) && (t = t.toString()), t.indexOf("\\") !== -1 && (t = t.replace(/\\+/g, "/")), t[0] === "/" && (t = t.replace(/^\/+/, "")), t && (t = s_(t));
  let r = t.split("/");
  return r.indexOf("..") !== -1 && (t = t.replace(/(\.\.\/)+/, ""), n === "directory" && t && t[t.length - 1] !== "/" && (t += "/"), r = t.split("/")), e = Math.min(e, r.length - 1), r.slice(e).join("/") || "/";
}
me.stripFileName = c_;
var No = {}, Xt = Nt.Buffer, ul = [
  0,
  1996959894,
  3993919788,
  2567524794,
  124634137,
  1886057615,
  3915621685,
  2657392035,
  249268274,
  2044508324,
  3772115230,
  2547177864,
  162941995,
  2125561021,
  3887607047,
  2428444049,
  498536548,
  1789927666,
  4089016648,
  2227061214,
  450548861,
  1843258603,
  4107580753,
  2211677639,
  325883990,
  1684777152,
  4251122042,
  2321926636,
  335633487,
  1661365465,
  4195302755,
  2366115317,
  997073096,
  1281953886,
  3579855332,
  2724688242,
  1006888145,
  1258607687,
  3524101629,
  2768942443,
  901097722,
  1119000684,
  3686517206,
  2898065728,
  853044451,
  1172266101,
  3705015759,
  2882616665,
  651767980,
  1373503546,
  3369554304,
  3218104598,
  565507253,
  1454621731,
  3485111705,
  3099436303,
  671266974,
  1594198024,
  3322730930,
  2970347812,
  795835527,
  1483230225,
  3244367275,
  3060149565,
  1994146192,
  31158534,
  2563907772,
  4023717930,
  1907459465,
  112637215,
  2680153253,
  3904427059,
  2013776290,
  251722036,
  2517215374,
  3775830040,
  2137656763,
  141376813,
  2439277719,
  3865271297,
  1802195444,
  476864866,
  2238001368,
  4066508878,
  1812370925,
  453092731,
  2181625025,
  4111451223,
  1706088902,
  314042704,
  2344532202,
  4240017532,
  1658658271,
  366619977,
  2362670323,
  4224994405,
  1303535960,
  984961486,
  2747007092,
  3569037538,
  1256170817,
  1037604311,
  2765210733,
  3554079995,
  1131014506,
  879679996,
  2909243462,
  3663771856,
  1141124467,
  855842277,
  2852801631,
  3708648649,
  1342533948,
  654459306,
  3188396048,
  3373015174,
  1466479909,
  544179635,
  3110523913,
  3462522015,
  1591671054,
  702138776,
  2966460450,
  3352799412,
  1504918807,
  783551873,
  3082640443,
  3233442989,
  3988292384,
  2596254646,
  62317068,
  1957810842,
  3939845945,
  2647816111,
  81470997,
  1943803523,
  3814918930,
  2489596804,
  225274430,
  2053790376,
  3826175755,
  2466906013,
  167816743,
  2097651377,
  4027552580,
  2265490386,
  503444072,
  1762050814,
  4150417245,
  2154129355,
  426522225,
  1852507879,
  4275313526,
  2312317920,
  282753626,
  1742555852,
  4189708143,
  2394877945,
  397917763,
  1622183637,
  3604390888,
  2714866558,
  953729732,
  1340076626,
  3518719985,
  2797360999,
  1068828381,
  1219638859,
  3624741850,
  2936675148,
  906185462,
  1090812512,
  3747672003,
  2825379669,
  829329135,
  1181335161,
  3412177804,
  3160834842,
  628085408,
  1382605366,
  3423369109,
  3138078467,
  570562233,
  1426400815,
  3317316542,
  2998733608,
  733239954,
  1555261956,
  3268935591,
  3050360625,
  752459403,
  1541320221,
  2607071920,
  3965973030,
  1969922972,
  40735498,
  2617837225,
  3943577151,
  1913087877,
  83908371,
  2512341634,
  3803740692,
  2075208622,
  213261112,
  2463272603,
  3855990285,
  2094854071,
  198958881,
  2262029012,
  4057260610,
  1759359992,
  534414190,
  2176718541,
  4139329115,
  1873836001,
  414664567,
  2282248934,
  4279200368,
  1711684554,
  285281116,
  2405801727,
  4167216745,
  1634467795,
  376229701,
  2685067896,
  3608007406,
  1308918612,
  956543938,
  2808555105,
  3495958263,
  1231636301,
  1047427035,
  2932959818,
  3654703836,
  1088359270,
  936918e3,
  2847714899,
  3736837829,
  1202900863,
  817233897,
  3183342108,
  3401237130,
  1404277552,
  615818150,
  3134207493,
  3453421203,
  1423857449,
  601450431,
  3009837614,
  3294710456,
  1567103746,
  711928724,
  3020668471,
  3272380065,
  1510334235,
  755167117
];
typeof Int32Array < "u" && (ul = new Int32Array(ul));
function o0(e) {
  if (Xt.isBuffer(e))
    return e;
  var t = typeof Xt.alloc == "function" && typeof Xt.from == "function";
  if (typeof e == "number")
    return t ? Xt.alloc(e) : new Xt(e);
  if (typeof e == "string")
    return t ? Xt.from(e) : new Xt(e);
  throw new Error("input must be buffer, number, or string, received " + typeof e);
}
function l_(e) {
  var t = o0(4);
  return t.writeInt32BE(e, 0), t;
}
function ru(e, t) {
  e = o0(e), Xt.isBuffer(t) && (t = t.readUInt32BE(0));
  for (var n = ~~t ^ -1, r = 0; r < e.length; r++)
    n = ul[(n ^ e[r]) & 255] ^ n >>> 8;
  return n ^ -1;
}
function iu() {
  return l_(ru.apply(null, arguments));
}
iu.signed = function() {
  return ru.apply(null, arguments);
};
iu.unsigned = function() {
  return ru.apply(null, arguments) >>> 0;
};
var s0 = iu, pf = oe, ko = ie.Transform, c0 = ie.PassThrough, l0 = Qe, au = Pe, u_ = Hn.EventEmitter, u0 = s0;
No.ZipFile = Gn;
No.dateToDosDateTime = _0;
au.inherits(Gn, u_);
function Gn() {
  this.outputStream = new c0(), this.entries = [], this.outputStreamCursor = 0, this.ended = !1, this.allDone = !1, this.forceZip64Eocd = !1;
}
Gn.prototype.addFile = function(e, t, n) {
  var r = this;
  t = Lo(t, !1), n == null && (n = {});
  var i = new pe(t, !1, n);
  r.entries.push(i), pf.stat(e, function(a, o) {
    if (a) return r.emit("error", a);
    if (!o.isFile()) return r.emit("error", new Error("not a file: " + e));
    i.uncompressedSize = o.size, n.mtime == null && i.setLastModDate(o.mtime), n.mode == null && i.setFileAttributesMode(o.mode), i.setFileDataPumpFunction(function() {
      var c = pf.createReadStream(e);
      i.state = pe.FILE_DATA_IN_PROGRESS, c.on("error", function(s) {
        r.emit("error", s);
      }), p0(r, i, c);
    }), on(r);
  });
};
Gn.prototype.addReadStream = function(e, t, n) {
  var r = this;
  t = Lo(t, !1), n == null && (n = {});
  var i = new pe(t, !1, n);
  r.entries.push(i), i.setFileDataPumpFunction(function() {
    i.state = pe.FILE_DATA_IN_PROGRESS, p0(r, i, e);
  }), on(r);
};
Gn.prototype.addBuffer = function(e, t, n) {
  var r = this;
  if (t = Lo(t, !1), e.length > 1073741823) throw new Error("buffer too large: " + e.length + " > 1073741823");
  if (n == null && (n = {}), n.size != null) throw new Error("options.size not allowed");
  var i = new pe(t, !1, n);
  i.uncompressedSize = e.length, i.crc32 = u0.unsigned(e), i.crcAndFileSizeKnown = !0, r.entries.push(i), i.compress ? l0.deflateRaw(e, function(o, c) {
    a(c);
  }) : a(e);
  function a(o) {
    i.compressedSize = o.length, i.setFileDataPumpFunction(function() {
      kn(r, o), kn(r, i.getDataDescriptor()), i.state = pe.FILE_DATA_DONE, setImmediate(function() {
        on(r);
      });
    }), on(r);
  }
};
Gn.prototype.addEmptyDirectory = function(e, t) {
  var n = this;
  if (e = Lo(e, !0), t == null && (t = {}), t.size != null) throw new Error("options.size not allowed");
  if (t.compress != null) throw new Error("options.compress not allowed");
  var r = new pe(e, !0, t);
  n.entries.push(r), r.setFileDataPumpFunction(function() {
    kn(n, r.getDataDescriptor()), r.state = pe.FILE_DATA_DONE, on(n);
  }), on(n);
};
var p_ = Zt([80, 75, 5, 6]);
Gn.prototype.end = function(e, t) {
  if (typeof e == "function" && (t = e, e = null), e == null && (e = {}), !this.ended) {
    if (this.ended = !0, this.finalSizeCallback = t, this.forceZip64Eocd = !!e.forceZip64Format, e.comment) {
      if (typeof e.comment == "string" ? this.comment = h_(e.comment) : this.comment = e.comment, this.comment.length > 65535) throw new Error("comment is too large");
      if (ei(this.comment, p_)) throw new Error("comment contains end of central directory record signature");
    } else
      this.comment = Uo;
    on(this);
  }
};
function kn(e, t) {
  e.outputStream.write(t), e.outputStreamCursor += t.length;
}
function p0(e, t, n) {
  var r = new ou(), i = new ao(), a = t.compress ? new l0.DeflateRaw() : new c0(), o = new ao();
  n.pipe(r).pipe(i).pipe(a).pipe(o).pipe(e.outputStream, { end: !1 }), o.on("end", function() {
    if (t.crc32 = r.crc32, t.uncompressedSize == null)
      t.uncompressedSize = i.byteCount;
    else if (t.uncompressedSize !== i.byteCount) return e.emit("error", new Error("file data stream has unexpected number of bytes"));
    t.compressedSize = o.byteCount, e.outputStreamCursor += t.compressedSize, kn(e, t.getDataDescriptor()), t.state = pe.FILE_DATA_DONE, on(e);
  });
}
function on(e) {
  if (e.allDone) return;
  if (e.ended && e.finalSizeCallback != null) {
    var t = f_(e);
    t != null && (e.finalSizeCallback(t), e.finalSizeCallback = null);
  }
  var n = r();
  function r() {
    for (var a = 0; a < e.entries.length; a++) {
      var o = e.entries[a];
      if (o.state < pe.FILE_DATA_DONE) return o;
    }
    return null;
  }
  if (n != null) {
    if (n.state < pe.READY_TO_PUMP_FILE_DATA || n.state === pe.FILE_DATA_IN_PROGRESS) return;
    n.relativeOffsetOfLocalHeader = e.outputStreamCursor;
    var i = n.getLocalFileHeader();
    kn(e, i), n.doFileDataPump();
  } else
    e.ended && (e.offsetOfStartOfCentralDirectory = e.outputStreamCursor, e.entries.forEach(function(a) {
      var o = a.getCentralDirectoryRecord();
      kn(e, o);
    }), kn(e, d_(e)), e.outputStream.end(), e.allDone = !0);
}
function f_(e) {
  for (var t = 0, n = 0, r = 0; r < e.entries.length; r++) {
    var i = e.entries[r];
    if (i.compress) return -1;
    if (i.state >= pe.READY_TO_PUMP_FILE_DATA) {
      if (i.uncompressedSize == null) return -1;
    } else if (i.uncompressedSize == null) return null;
    i.relativeOffsetOfLocalHeader = t;
    var a = i.useZip64Format();
    t += h0 + i.utf8FileName.length, t += i.uncompressedSize, i.crcAndFileSizeKnown || (a ? t += w0 : t += b0), n += E0 + i.utf8FileName.length + i.fileComment.length, a && (n += fl);
  }
  var o = 0;
  return (e.forceZip64Eocd || e.entries.length >= 65535 || n >= 65535 || t >= 4294967295) && (o += pl + f0), o += d0 + e.comment.length, t + n + o;
}
var pl = 56, f0 = 20, d0 = 22;
function d_(e, t) {
  var n = !1, r = e.entries.length;
  (e.forceZip64Eocd || e.entries.length >= 65535) && (r = 65535, n = !0);
  var i = e.outputStreamCursor - e.offsetOfStartOfCentralDirectory, a = i;
  (e.forceZip64Eocd || i >= 4294967295) && (a = 4294967295, n = !0);
  var o = e.offsetOfStartOfCentralDirectory;
  (e.forceZip64Eocd || e.offsetOfStartOfCentralDirectory >= 4294967295) && (o = 4294967295, n = !0);
  var c = Ke(d0 + e.comment.length);
  if (c.writeUInt32LE(101010256, 0), c.writeUInt16LE(0, 4), c.writeUInt16LE(0, 6), c.writeUInt16LE(r, 8), c.writeUInt16LE(r, 10), c.writeUInt32LE(a, 12), c.writeUInt32LE(o, 16), c.writeUInt16LE(e.comment.length, 20), e.comment.copy(c, 22), !n) return c;
  var s = Ke(pl);
  s.writeUInt32LE(101075792, 0), pt(s, pl - 12, 4), s.writeUInt16LE(g0, 12), s.writeUInt16LE(v0, 14), s.writeUInt32LE(0, 16), s.writeUInt32LE(0, 20), pt(s, e.entries.length, 24), pt(s, e.entries.length, 32), pt(s, i, 40), pt(s, e.offsetOfStartOfCentralDirectory, 48);
  var u = Ke(f0);
  return u.writeUInt32LE(117853008, 0), u.writeUInt32LE(0, 4), pt(u, e.outputStreamCursor, 8), u.writeUInt32LE(1, 16), Buffer.concat([
    s,
    u,
    c
  ]);
}
function Lo(e, t) {
  if (e === "") throw new Error("empty metadataPath");
  if (e = e.replace(/\\/g, "/"), /^[a-zA-Z]:/.test(e) || /^\//.test(e)) throw new Error("absolute path: " + e);
  if (e.split("/").indexOf("..") !== -1) throw new Error("invalid relative path: " + e);
  var n = /\/$/.test(e);
  if (t)
    n || (e += "/");
  else if (n) throw new Error("file path cannot end with '/': " + e);
  return e;
}
var Uo = Ke(0);
function pe(e, t, n) {
  if (this.utf8FileName = Zt(e), this.utf8FileName.length > 65535) throw new Error("utf8 file name too long. " + utf8FileName.length + " > 65535");
  if (this.isDirectory = t, this.state = pe.WAITING_FOR_METADATA, this.setLastModDate(n.mtime != null ? n.mtime : /* @__PURE__ */ new Date()), n.mode != null ? this.setFileAttributesMode(n.mode) : this.setFileAttributesMode(t ? 16893 : 33204), t ? (this.crcAndFileSizeKnown = !0, this.crc32 = 0, this.uncompressedSize = 0, this.compressedSize = 0) : (this.crcAndFileSizeKnown = !1, this.crc32 = null, this.uncompressedSize = null, this.compressedSize = null, n.size != null && (this.uncompressedSize = n.size)), t ? this.compress = !1 : (this.compress = !0, n.compress != null && (this.compress = !!n.compress)), this.forceZip64Format = !!n.forceZip64Format, n.fileComment) {
    if (typeof n.fileComment == "string" ? this.fileComment = Zt(n.fileComment, "utf-8") : this.fileComment = n.fileComment, this.fileComment.length > 65535) throw new Error("fileComment is too large");
  } else
    this.fileComment = Uo;
}
pe.WAITING_FOR_METADATA = 0;
pe.READY_TO_PUMP_FILE_DATA = 1;
pe.FILE_DATA_IN_PROGRESS = 2;
pe.FILE_DATA_DONE = 3;
pe.prototype.setLastModDate = function(e) {
  var t = _0(e);
  this.lastModFileTime = t.time, this.lastModFileDate = t.date;
};
pe.prototype.setFileAttributesMode = function(e) {
  if ((e & 65535) !== e) throw new Error("invalid mode. expected: 0 <= " + e + " <= 65535");
  this.externalFileAttributes = e << 16 >>> 0;
};
pe.prototype.setFileDataPumpFunction = function(e) {
  this.doFileDataPump = e, this.state = pe.READY_TO_PUMP_FILE_DATA;
};
pe.prototype.useZip64Format = function() {
  return this.forceZip64Format || this.uncompressedSize != null && this.uncompressedSize > 4294967294 || this.compressedSize != null && this.compressedSize > 4294967294 || this.relativeOffsetOfLocalHeader != null && this.relativeOffsetOfLocalHeader > 4294967294;
};
var h0 = 30, m0 = 20, v0 = 45, g0 = 831, x0 = 2048, y0 = 8;
pe.prototype.getLocalFileHeader = function() {
  var e = 0, t = 0, n = 0;
  this.crcAndFileSizeKnown && (e = this.crc32, t = this.compressedSize, n = this.uncompressedSize);
  var r = Ke(h0), i = x0;
  return this.crcAndFileSizeKnown || (i |= y0), r.writeUInt32LE(67324752, 0), r.writeUInt16LE(m0, 4), r.writeUInt16LE(i, 6), r.writeUInt16LE(this.getCompressionMethod(), 8), r.writeUInt16LE(this.lastModFileTime, 10), r.writeUInt16LE(this.lastModFileDate, 12), r.writeUInt32LE(e, 14), r.writeUInt32LE(t, 18), r.writeUInt32LE(n, 22), r.writeUInt16LE(this.utf8FileName.length, 26), r.writeUInt16LE(0, 28), Buffer.concat([
    r,
    // file name (variable size)
    this.utf8FileName
    // extra field (variable size)
    // no extra fields
  ]);
};
var b0 = 16, w0 = 24;
pe.prototype.getDataDescriptor = function() {
  if (this.crcAndFileSizeKnown)
    return Uo;
  if (this.useZip64Format()) {
    var e = Ke(w0);
    return e.writeUInt32LE(134695760, 0), e.writeUInt32LE(this.crc32, 4), pt(e, this.compressedSize, 8), pt(e, this.uncompressedSize, 16), e;
  } else {
    var e = Ke(b0);
    return e.writeUInt32LE(134695760, 0), e.writeUInt32LE(this.crc32, 4), e.writeUInt32LE(this.compressedSize, 8), e.writeUInt32LE(this.uncompressedSize, 12), e;
  }
};
var E0 = 46, fl = 28;
pe.prototype.getCentralDirectoryRecord = function() {
  var e = Ke(E0), t = x0;
  this.crcAndFileSizeKnown || (t |= y0);
  var n = this.compressedSize, r = this.uncompressedSize, i = this.relativeOffsetOfLocalHeader, a, o;
  return this.useZip64Format() ? (n = 4294967295, r = 4294967295, i = 4294967295, a = v0, o = Ke(fl), o.writeUInt16LE(1, 0), o.writeUInt16LE(fl - 4, 2), pt(o, this.uncompressedSize, 4), pt(o, this.compressedSize, 12), pt(o, this.relativeOffsetOfLocalHeader, 20)) : (a = m0, o = Uo), e.writeUInt32LE(33639248, 0), e.writeUInt16LE(g0, 4), e.writeUInt16LE(a, 6), e.writeUInt16LE(t, 8), e.writeUInt16LE(this.getCompressionMethod(), 10), e.writeUInt16LE(this.lastModFileTime, 12), e.writeUInt16LE(this.lastModFileDate, 14), e.writeUInt32LE(this.crc32, 16), e.writeUInt32LE(n, 20), e.writeUInt32LE(r, 24), e.writeUInt16LE(this.utf8FileName.length, 28), e.writeUInt16LE(o.length, 30), e.writeUInt16LE(this.fileComment.length, 32), e.writeUInt16LE(0, 34), e.writeUInt16LE(0, 36), e.writeUInt32LE(this.externalFileAttributes, 38), e.writeUInt32LE(i, 42), Buffer.concat([
    e,
    // file name (variable size)
    this.utf8FileName,
    // extra field (variable size)
    o,
    // file comment (variable size)
    this.fileComment
  ]);
};
pe.prototype.getCompressionMethod = function() {
  var e = 0, t = 8;
  return this.compress ? t : e;
};
function _0(e) {
  var t = 0;
  t |= e.getDate() & 31, t |= (e.getMonth() + 1 & 15) << 5, t |= (e.getFullYear() - 1980 & 127) << 9;
  var n = 0;
  return n |= Math.floor(e.getSeconds() / 2), n |= (e.getMinutes() & 63) << 5, n |= (e.getHours() & 31) << 11, { date: t, time: n };
}
function pt(e, t, n) {
  var r = Math.floor(t / 4294967296), i = t % 4294967296;
  e.writeUInt32LE(i, n), e.writeUInt32LE(r, n + 4);
}
au.inherits(ao, ko);
function ao(e) {
  ko.call(this, e), this.byteCount = 0;
}
ao.prototype._transform = function(e, t, n) {
  this.byteCount += e.length, n(null, e);
};
au.inherits(ou, ko);
function ou(e) {
  ko.call(this, e), this.crc32 = 0;
}
ou.prototype._transform = function(e, t, n) {
  this.crc32 = u0.unsigned(e, this.crc32), n(null, e);
};
var dl = "\0☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼ !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~⌂ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ";
if (dl.length !== 256) throw new Error("assertion failure");
var da = null;
function h_(e) {
  if (/^[\x20-\x7e]*$/.test(e))
    return Zt(e, "utf-8");
  if (da == null) {
    da = {};
    for (var t = 0; t < dl.length; t++)
      da[dl[t]] = t;
  }
  for (var n = Ke(e.length), t = 0; t < e.length; t++) {
    var r = da[e[t]];
    if (r == null) throw new Error("character not encodable in CP437: " + JSON.stringify(e[t]));
    n[t] = r;
  }
  return n;
}
function Ke(e) {
  Ke = t;
  try {
    return Ke(e);
  } catch {
    return Ke = n, Ke(e);
  }
  function t(r) {
    return Buffer.allocUnsafe(r);
  }
  function n(r) {
    return new Buffer(r);
  }
}
function Zt(e, t) {
  Zt = n;
  try {
    return Zt(e, t);
  } catch {
    return Zt = r, Zt(e, t);
  }
  function n(i, a) {
    return Buffer.from(i, a);
  }
  function r(i, a) {
    return new Buffer(i, a);
  }
}
function ei(e, t) {
  ei = n;
  try {
    return ei(e, t);
  } catch {
    return ei = r, ei(e, t);
  }
  function n(i, a) {
    return i.includes(a);
  }
  function r(i, a) {
    for (var o = 0; o <= i.length - a.length; o++)
      for (var c = 0; ; c++) {
        if (c === a.length) return !0;
        if (i[o + c] !== a[c]) break;
      }
    return !1;
  }
}
var Li = {}, hl = { exports: {} }, ha = { exports: {} }, ff;
function Bo() {
  if (ff) return ha.exports;
  ff = 1, typeof process > "u" || !process.version || process.version.indexOf("v0.") === 0 || process.version.indexOf("v1.") === 0 && process.version.indexOf("v1.8.") !== 0 ? ha.exports = { nextTick: e } : ha.exports = process;
  function e(t, n, r, i) {
    if (typeof t != "function")
      throw new TypeError('"callback" argument must be a function');
    var a = arguments.length, o, c;
    switch (a) {
      case 0:
      case 1:
        return process.nextTick(t);
      case 2:
        return process.nextTick(function() {
          t.call(null, n);
        });
      case 3:
        return process.nextTick(function() {
          t.call(null, n, r);
        });
      case 4:
        return process.nextTick(function() {
          t.call(null, n, r, i);
        });
      default:
        for (o = new Array(a - 1), c = 0; c < o.length; )
          o[c++] = arguments[c];
        return process.nextTick(function() {
          t.apply(null, o);
        });
    }
  }
  return ha.exports;
}
var ec, df;
function m_() {
  if (df) return ec;
  df = 1;
  var e = {}.toString;
  return ec = Array.isArray || function(t) {
    return e.call(t) == "[object Array]";
  }, ec;
}
var tc, hf;
function S0() {
  return hf || (hf = 1, tc = ie), tc;
}
var ma = { exports: {} }, mf;
function jo() {
  return mf || (mf = 1, function(e, t) {
    var n = Nt, r = n.Buffer;
    function i(o, c) {
      for (var s in o)
        c[s] = o[s];
    }
    r.from && r.alloc && r.allocUnsafe && r.allocUnsafeSlow ? e.exports = n : (i(n, t), t.Buffer = a);
    function a(o, c, s) {
      return r(o, c, s);
    }
    i(r, a), a.from = function(o, c, s) {
      if (typeof o == "number")
        throw new TypeError("Argument must not be a number");
      return r(o, c, s);
    }, a.alloc = function(o, c, s) {
      if (typeof o != "number")
        throw new TypeError("Argument must be a number");
      var u = r(o);
      return c !== void 0 ? typeof s == "string" ? u.fill(c, s) : u.fill(c) : u.fill(0), u;
    }, a.allocUnsafe = function(o) {
      if (typeof o != "number")
        throw new TypeError("Argument must be a number");
      return r(o);
    }, a.allocUnsafeSlow = function(o) {
      if (typeof o != "number")
        throw new TypeError("Argument must be a number");
      return n.SlowBuffer(o);
    };
  }(ma, ma.exports)), ma.exports;
}
var Ne = {}, vf;
function Ui() {
  if (vf) return Ne;
  vf = 1;
  function e(v) {
    return Array.isArray ? Array.isArray(v) : g(v) === "[object Array]";
  }
  Ne.isArray = e;
  function t(v) {
    return typeof v == "boolean";
  }
  Ne.isBoolean = t;
  function n(v) {
    return v === null;
  }
  Ne.isNull = n;
  function r(v) {
    return v == null;
  }
  Ne.isNullOrUndefined = r;
  function i(v) {
    return typeof v == "number";
  }
  Ne.isNumber = i;
  function a(v) {
    return typeof v == "string";
  }
  Ne.isString = a;
  function o(v) {
    return typeof v == "symbol";
  }
  Ne.isSymbol = o;
  function c(v) {
    return v === void 0;
  }
  Ne.isUndefined = c;
  function s(v) {
    return g(v) === "[object RegExp]";
  }
  Ne.isRegExp = s;
  function u(v) {
    return typeof v == "object" && v !== null;
  }
  Ne.isObject = u;
  function l(v) {
    return g(v) === "[object Date]";
  }
  Ne.isDate = l;
  function p(v) {
    return g(v) === "[object Error]" || v instanceof Error;
  }
  Ne.isError = p;
  function d(v) {
    return typeof v == "function";
  }
  Ne.isFunction = d;
  function m(v) {
    return v === null || typeof v == "boolean" || typeof v == "number" || typeof v == "string" || typeof v == "symbol" || // ES6 symbol
    typeof v > "u";
  }
  Ne.isPrimitive = m, Ne.isBuffer = Nt.Buffer.isBuffer;
  function g(v) {
    return Object.prototype.toString.call(v);
  }
  return Ne;
}
var va = { exports: {} }, ga = { exports: {} }, gf;
function v_() {
  return gf || (gf = 1, typeof Object.create == "function" ? ga.exports = function(t, n) {
    n && (t.super_ = n, t.prototype = Object.create(n.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }));
  } : ga.exports = function(t, n) {
    if (n) {
      t.super_ = n;
      var r = function() {
      };
      r.prototype = n.prototype, t.prototype = new r(), t.prototype.constructor = t;
    }
  }), ga.exports;
}
var xf;
function Bi() {
  if (xf) return va.exports;
  xf = 1;
  try {
    var e = require("util");
    if (typeof e.inherits != "function") throw "";
    va.exports = e.inherits;
  } catch {
    va.exports = v_();
  }
  return va.exports;
}
var nc = { exports: {} }, yf;
function g_() {
  return yf || (yf = 1, function(e) {
    function t(a, o) {
      if (!(a instanceof o))
        throw new TypeError("Cannot call a class as a function");
    }
    var n = jo().Buffer, r = Pe;
    function i(a, o, c) {
      a.copy(o, c);
    }
    e.exports = function() {
      function a() {
        t(this, a), this.head = null, this.tail = null, this.length = 0;
      }
      return a.prototype.push = function(c) {
        var s = { data: c, next: null };
        this.length > 0 ? this.tail.next = s : this.head = s, this.tail = s, ++this.length;
      }, a.prototype.unshift = function(c) {
        var s = { data: c, next: this.head };
        this.length === 0 && (this.tail = s), this.head = s, ++this.length;
      }, a.prototype.shift = function() {
        if (this.length !== 0) {
          var c = this.head.data;
          return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, c;
        }
      }, a.prototype.clear = function() {
        this.head = this.tail = null, this.length = 0;
      }, a.prototype.join = function(c) {
        if (this.length === 0) return "";
        for (var s = this.head, u = "" + s.data; s = s.next; )
          u += c + s.data;
        return u;
      }, a.prototype.concat = function(c) {
        if (this.length === 0) return n.alloc(0);
        for (var s = n.allocUnsafe(c >>> 0), u = this.head, l = 0; u; )
          i(u.data, s, l), l += u.data.length, u = u.next;
        return s;
      }, a;
    }(), r && r.inspect && r.inspect.custom && (e.exports.prototype[r.inspect.custom] = function() {
      var a = r.inspect({ length: this.length });
      return this.constructor.name + " " + a;
    });
  }(nc)), nc.exports;
}
var rc, bf;
function T0() {
  if (bf) return rc;
  bf = 1;
  var e = Bo();
  function t(i, a) {
    var o = this, c = this._readableState && this._readableState.destroyed, s = this._writableState && this._writableState.destroyed;
    return c || s ? (a ? a(i) : i && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, e.nextTick(r, this, i)) : e.nextTick(r, this, i)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(i || null, function(u) {
      !a && u ? o._writableState ? o._writableState.errorEmitted || (o._writableState.errorEmitted = !0, e.nextTick(r, o, u)) : e.nextTick(r, o, u) : a && a(u);
    }), this);
  }
  function n() {
    this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1);
  }
  function r(i, a) {
    i.emit("error", a);
  }
  return rc = {
    destroy: t,
    undestroy: n
  }, rc;
}
var ic, wf;
function x_() {
  return wf || (wf = 1, ic = Pe.deprecate), ic;
}
var ac, Ef;
function A0() {
  if (Ef) return ac;
  Ef = 1;
  var e = Bo();
  ac = v;
  function t(b) {
    var E = this;
    this.next = null, this.entry = null, this.finish = function() {
      D(E, b);
    };
  }
  var n = !process.browser && ["v0.10", "v0.9."].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : e.nextTick, r;
  v.WritableState = m;
  var i = Object.create(Ui());
  i.inherits = Bi();
  var a = {
    deprecate: x_()
  }, o = S0(), c = jo().Buffer, s = (typeof Te < "u" ? Te : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function() {
  };
  function u(b) {
    return c.from(b);
  }
  function l(b) {
    return c.isBuffer(b) || b instanceof s;
  }
  var p = T0();
  i.inherits(v, o);
  function d() {
  }
  function m(b, E) {
    r = r || Cr(), b = b || {};
    var R = E instanceof r;
    this.objectMode = !!b.objectMode, R && (this.objectMode = this.objectMode || !!b.writableObjectMode);
    var N = b.highWaterMark, L = b.writableHighWaterMark, B = this.objectMode ? 16 : 16 * 1024;
    N || N === 0 ? this.highWaterMark = N : R && (L || L === 0) ? this.highWaterMark = L : this.highWaterMark = B, this.highWaterMark = Math.floor(this.highWaterMark), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
    var K = b.decodeStrings === !1;
    this.decodeStrings = !K, this.defaultEncoding = b.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(Z) {
      W(E, Z);
    }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new t(this);
  }
  m.prototype.getBuffer = function() {
    for (var E = this.bufferedRequest, R = []; E; )
      R.push(E), E = E.next;
    return R;
  }, function() {
    try {
      Object.defineProperty(m.prototype, "buffer", {
        get: a.deprecate(function() {
          return this.getBuffer();
        }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
      });
    } catch {
    }
  }();
  var g;
  typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function" ? (g = Function.prototype[Symbol.hasInstance], Object.defineProperty(v, Symbol.hasInstance, {
    value: function(b) {
      return g.call(this, b) ? !0 : this !== v ? !1 : b && b._writableState instanceof m;
    }
  })) : g = function(b) {
    return b instanceof this;
  };
  function v(b) {
    if (r = r || Cr(), !g.call(v, this) && !(this instanceof r))
      return new v(b);
    this._writableState = new m(b, this), this.writable = !0, b && (typeof b.write == "function" && (this._write = b.write), typeof b.writev == "function" && (this._writev = b.writev), typeof b.destroy == "function" && (this._destroy = b.destroy), typeof b.final == "function" && (this._final = b.final)), o.call(this);
  }
  v.prototype.pipe = function() {
    this.emit("error", new Error("Cannot pipe, not readable"));
  };
  function y(b, E) {
    var R = new Error("write after end");
    b.emit("error", R), e.nextTick(E, R);
  }
  function x(b, E, R, N) {
    var L = !0, B = !1;
    return R === null ? B = new TypeError("May not write null values to stream") : typeof R != "string" && R !== void 0 && !E.objectMode && (B = new TypeError("Invalid non-string/buffer chunk")), B && (b.emit("error", B), e.nextTick(N, B), L = !1), L;
  }
  v.prototype.write = function(b, E, R) {
    var N = this._writableState, L = !1, B = !N.objectMode && l(b);
    return B && !c.isBuffer(b) && (b = u(b)), typeof E == "function" && (R = E, E = null), B ? E = "buffer" : E || (E = N.defaultEncoding), typeof R != "function" && (R = d), N.ended ? y(this, R) : (B || x(this, N, b, R)) && (N.pendingcb++, L = A(this, N, B, b, E, R)), L;
  }, v.prototype.cork = function() {
    var b = this._writableState;
    b.corked++;
  }, v.prototype.uncork = function() {
    var b = this._writableState;
    b.corked && (b.corked--, !b.writing && !b.corked && !b.bufferProcessing && b.bufferedRequest && H(this, b));
  }, v.prototype.setDefaultEncoding = function(E) {
    if (typeof E == "string" && (E = E.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((E + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + E);
    return this._writableState.defaultEncoding = E, this;
  };
  function w(b, E, R) {
    return !b.objectMode && b.decodeStrings !== !1 && typeof E == "string" && (E = c.from(E, R)), E;
  }
  Object.defineProperty(v.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._writableState.highWaterMark;
    }
  });
  function A(b, E, R, N, L, B) {
    if (!R) {
      var K = w(E, N, L);
      N !== K && (R = !0, L = "buffer", N = K);
    }
    var Z = E.objectMode ? 1 : N.length;
    E.length += Z;
    var M = E.length < E.highWaterMark;
    if (M || (E.needDrain = !0), E.writing || E.corked) {
      var le = E.lastBufferedRequest;
      E.lastBufferedRequest = {
        chunk: N,
        encoding: L,
        isBuf: R,
        callback: B,
        next: null
      }, le ? le.next = E.lastBufferedRequest : E.bufferedRequest = E.lastBufferedRequest, E.bufferedRequestCount += 1;
    } else
      O(b, E, !1, Z, N, L, B);
    return M;
  }
  function O(b, E, R, N, L, B, K) {
    E.writelen = N, E.writecb = K, E.writing = !0, E.sync = !0, R ? b._writev(L, E.onwrite) : b._write(L, B, E.onwrite), E.sync = !1;
  }
  function k(b, E, R, N, L) {
    --E.pendingcb, R ? (e.nextTick(L, N), e.nextTick(F, b, E), b._writableState.errorEmitted = !0, b.emit("error", N)) : (L(N), b._writableState.errorEmitted = !0, b.emit("error", N), F(b, E));
  }
  function q(b) {
    b.writing = !1, b.writecb = null, b.length -= b.writelen, b.writelen = 0;
  }
  function W(b, E) {
    var R = b._writableState, N = R.sync, L = R.writecb;
    if (q(R), E) k(b, R, N, E, L);
    else {
      var B = j(R);
      !B && !R.corked && !R.bufferProcessing && R.bufferedRequest && H(b, R), N ? n(te, b, R, B, L) : te(b, R, B, L);
    }
  }
  function te(b, E, R, N) {
    R || T(b, E), E.pendingcb--, N(), F(b, E);
  }
  function T(b, E) {
    E.length === 0 && E.needDrain && (E.needDrain = !1, b.emit("drain"));
  }
  function H(b, E) {
    E.bufferProcessing = !0;
    var R = E.bufferedRequest;
    if (b._writev && R && R.next) {
      var N = E.bufferedRequestCount, L = new Array(N), B = E.corkedRequestsFree;
      B.entry = R;
      for (var K = 0, Z = !0; R; )
        L[K] = R, R.isBuf || (Z = !1), R = R.next, K += 1;
      L.allBuffers = Z, O(b, E, !0, E.length, L, "", B.finish), E.pendingcb++, E.lastBufferedRequest = null, B.next ? (E.corkedRequestsFree = B.next, B.next = null) : E.corkedRequestsFree = new t(E), E.bufferedRequestCount = 0;
    } else {
      for (; R; ) {
        var M = R.chunk, le = R.encoding, h = R.callback, f = E.objectMode ? 1 : M.length;
        if (O(b, E, !1, f, M, le, h), R = R.next, E.bufferedRequestCount--, E.writing)
          break;
      }
      R === null && (E.lastBufferedRequest = null);
    }
    E.bufferedRequest = R, E.bufferProcessing = !1;
  }
  v.prototype._write = function(b, E, R) {
    R(new Error("_write() is not implemented"));
  }, v.prototype._writev = null, v.prototype.end = function(b, E, R) {
    var N = this._writableState;
    typeof b == "function" ? (R = b, b = null, E = null) : typeof E == "function" && (R = E, E = null), b != null && this.write(b, E), N.corked && (N.corked = 1, this.uncork()), N.ending || $(this, N, R);
  };
  function j(b) {
    return b.ending && b.length === 0 && b.bufferedRequest === null && !b.finished && !b.writing;
  }
  function J(b, E) {
    b._final(function(R) {
      E.pendingcb--, R && b.emit("error", R), E.prefinished = !0, b.emit("prefinish"), F(b, E);
    });
  }
  function ne(b, E) {
    !E.prefinished && !E.finalCalled && (typeof b._final == "function" ? (E.pendingcb++, E.finalCalled = !0, e.nextTick(J, b, E)) : (E.prefinished = !0, b.emit("prefinish")));
  }
  function F(b, E) {
    var R = j(E);
    return R && (ne(b, E), E.pendingcb === 0 && (E.finished = !0, b.emit("finish"))), R;
  }
  function $(b, E, R) {
    E.ending = !0, F(b, E), R && (E.finished ? e.nextTick(R) : b.once("finish", R)), E.ended = !0, b.writable = !1;
  }
  function D(b, E, R) {
    var N = b.entry;
    for (b.entry = null; N; ) {
      var L = N.callback;
      E.pendingcb--, L(R), N = N.next;
    }
    E.corkedRequestsFree.next = b;
  }
  return Object.defineProperty(v.prototype, "destroyed", {
    get: function() {
      return this._writableState === void 0 ? !1 : this._writableState.destroyed;
    },
    set: function(b) {
      this._writableState && (this._writableState.destroyed = b);
    }
  }), v.prototype.destroy = p.destroy, v.prototype._undestroy = p.undestroy, v.prototype._destroy = function(b, E) {
    this.end(), E(b);
  }, ac;
}
var oc, _f;
function Cr() {
  if (_f) return oc;
  _f = 1;
  var e = Bo(), t = Object.keys || function(p) {
    var d = [];
    for (var m in p)
      d.push(m);
    return d;
  };
  oc = s;
  var n = Object.create(Ui());
  n.inherits = Bi();
  var r = R0(), i = A0();
  n.inherits(s, r);
  for (var a = t(i.prototype), o = 0; o < a.length; o++) {
    var c = a[o];
    s.prototype[c] || (s.prototype[c] = i.prototype[c]);
  }
  function s(p) {
    if (!(this instanceof s)) return new s(p);
    r.call(this, p), i.call(this, p), p && p.readable === !1 && (this.readable = !1), p && p.writable === !1 && (this.writable = !1), this.allowHalfOpen = !0, p && p.allowHalfOpen === !1 && (this.allowHalfOpen = !1), this.once("end", u);
  }
  Object.defineProperty(s.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._writableState.highWaterMark;
    }
  });
  function u() {
    this.allowHalfOpen || this._writableState.ended || e.nextTick(l, this);
  }
  function l(p) {
    p.end();
  }
  return Object.defineProperty(s.prototype, "destroyed", {
    get: function() {
      return this._readableState === void 0 || this._writableState === void 0 ? !1 : this._readableState.destroyed && this._writableState.destroyed;
    },
    set: function(p) {
      this._readableState === void 0 || this._writableState === void 0 || (this._readableState.destroyed = p, this._writableState.destroyed = p);
    }
  }), s.prototype._destroy = function(p, d) {
    this.push(null), this.end(), e.nextTick(d, p);
  }, oc;
}
var sc = {}, Sf;
function Tf() {
  if (Sf) return sc;
  Sf = 1;
  var e = jo().Buffer, t = e.isEncoding || function(x) {
    switch (x = "" + x, x && x.toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
      case "raw":
        return !0;
      default:
        return !1;
    }
  };
  function n(x) {
    if (!x) return "utf8";
    for (var w; ; )
      switch (x) {
        case "utf8":
        case "utf-8":
          return "utf8";
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return "utf16le";
        case "latin1":
        case "binary":
          return "latin1";
        case "base64":
        case "ascii":
        case "hex":
          return x;
        default:
          if (w) return;
          x = ("" + x).toLowerCase(), w = !0;
      }
  }
  function r(x) {
    var w = n(x);
    if (typeof w != "string" && (e.isEncoding === t || !t(x))) throw new Error("Unknown encoding: " + x);
    return w || x;
  }
  sc.StringDecoder = i;
  function i(x) {
    this.encoding = r(x);
    var w;
    switch (this.encoding) {
      case "utf16le":
        this.text = p, this.end = d, w = 4;
        break;
      case "utf8":
        this.fillLast = s, w = 4;
        break;
      case "base64":
        this.text = m, this.end = g, w = 3;
        break;
      default:
        this.write = v, this.end = y;
        return;
    }
    this.lastNeed = 0, this.lastTotal = 0, this.lastChar = e.allocUnsafe(w);
  }
  i.prototype.write = function(x) {
    if (x.length === 0) return "";
    var w, A;
    if (this.lastNeed) {
      if (w = this.fillLast(x), w === void 0) return "";
      A = this.lastNeed, this.lastNeed = 0;
    } else
      A = 0;
    return A < x.length ? w ? w + this.text(x, A) : this.text(x, A) : w || "";
  }, i.prototype.end = l, i.prototype.text = u, i.prototype.fillLast = function(x) {
    if (this.lastNeed <= x.length)
      return x.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
    x.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, x.length), this.lastNeed -= x.length;
  };
  function a(x) {
    return x <= 127 ? 0 : x >> 5 === 6 ? 2 : x >> 4 === 14 ? 3 : x >> 3 === 30 ? 4 : x >> 6 === 2 ? -1 : -2;
  }
  function o(x, w, A) {
    var O = w.length - 1;
    if (O < A) return 0;
    var k = a(w[O]);
    return k >= 0 ? (k > 0 && (x.lastNeed = k - 1), k) : --O < A || k === -2 ? 0 : (k = a(w[O]), k >= 0 ? (k > 0 && (x.lastNeed = k - 2), k) : --O < A || k === -2 ? 0 : (k = a(w[O]), k >= 0 ? (k > 0 && (k === 2 ? k = 0 : x.lastNeed = k - 3), k) : 0));
  }
  function c(x, w, A) {
    if ((w[0] & 192) !== 128)
      return x.lastNeed = 0, "�";
    if (x.lastNeed > 1 && w.length > 1) {
      if ((w[1] & 192) !== 128)
        return x.lastNeed = 1, "�";
      if (x.lastNeed > 2 && w.length > 2 && (w[2] & 192) !== 128)
        return x.lastNeed = 2, "�";
    }
  }
  function s(x) {
    var w = this.lastTotal - this.lastNeed, A = c(this, x);
    if (A !== void 0) return A;
    if (this.lastNeed <= x.length)
      return x.copy(this.lastChar, w, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
    x.copy(this.lastChar, w, 0, x.length), this.lastNeed -= x.length;
  }
  function u(x, w) {
    var A = o(this, x, w);
    if (!this.lastNeed) return x.toString("utf8", w);
    this.lastTotal = A;
    var O = x.length - (A - this.lastNeed);
    return x.copy(this.lastChar, 0, O), x.toString("utf8", w, O);
  }
  function l(x) {
    var w = x && x.length ? this.write(x) : "";
    return this.lastNeed ? w + "�" : w;
  }
  function p(x, w) {
    if ((x.length - w) % 2 === 0) {
      var A = x.toString("utf16le", w);
      if (A) {
        var O = A.charCodeAt(A.length - 1);
        if (O >= 55296 && O <= 56319)
          return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = x[x.length - 2], this.lastChar[1] = x[x.length - 1], A.slice(0, -1);
      }
      return A;
    }
    return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = x[x.length - 1], x.toString("utf16le", w, x.length - 1);
  }
  function d(x) {
    var w = x && x.length ? this.write(x) : "";
    if (this.lastNeed) {
      var A = this.lastTotal - this.lastNeed;
      return w + this.lastChar.toString("utf16le", 0, A);
    }
    return w;
  }
  function m(x, w) {
    var A = (x.length - w) % 3;
    return A === 0 ? x.toString("base64", w) : (this.lastNeed = 3 - A, this.lastTotal = 3, A === 1 ? this.lastChar[0] = x[x.length - 1] : (this.lastChar[0] = x[x.length - 2], this.lastChar[1] = x[x.length - 1]), x.toString("base64", w, x.length - A));
  }
  function g(x) {
    var w = x && x.length ? this.write(x) : "";
    return this.lastNeed ? w + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : w;
  }
  function v(x) {
    return x.toString(this.encoding);
  }
  function y(x) {
    return x && x.length ? this.write(x) : "";
  }
  return sc;
}
var cc, Af;
function R0() {
  if (Af) return cc;
  Af = 1;
  var e = Bo();
  cc = w;
  var t = m_(), n;
  w.ReadableState = x, Hn.EventEmitter;
  var r = function(h, f) {
    return h.listeners(f).length;
  }, i = S0(), a = jo().Buffer, o = (typeof Te < "u" ? Te : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function() {
  };
  function c(h) {
    return a.from(h);
  }
  function s(h) {
    return a.isBuffer(h) || h instanceof o;
  }
  var u = Object.create(Ui());
  u.inherits = Bi();
  var l = Pe, p = void 0;
  l && l.debuglog ? p = l.debuglog("stream") : p = function() {
  };
  var d = g_(), m = T0(), g;
  u.inherits(w, i);
  var v = ["error", "close", "destroy", "pause", "resume"];
  function y(h, f, C) {
    if (typeof h.prependListener == "function") return h.prependListener(f, C);
    !h._events || !h._events[f] ? h.on(f, C) : t(h._events[f]) ? h._events[f].unshift(C) : h._events[f] = [C, h._events[f]];
  }
  function x(h, f) {
    n = n || Cr(), h = h || {};
    var C = f instanceof n;
    this.objectMode = !!h.objectMode, C && (this.objectMode = this.objectMode || !!h.readableObjectMode);
    var S = h.highWaterMark, G = h.readableHighWaterMark, z = this.objectMode ? 16 : 16 * 1024;
    S || S === 0 ? this.highWaterMark = S : C && (G || G === 0) ? this.highWaterMark = G : this.highWaterMark = z, this.highWaterMark = Math.floor(this.highWaterMark), this.buffer = new d(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.destroyed = !1, this.defaultEncoding = h.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, h.encoding && (g || (g = Tf().StringDecoder), this.decoder = new g(h.encoding), this.encoding = h.encoding);
  }
  function w(h) {
    if (n = n || Cr(), !(this instanceof w)) return new w(h);
    this._readableState = new x(h, this), this.readable = !0, h && (typeof h.read == "function" && (this._read = h.read), typeof h.destroy == "function" && (this._destroy = h.destroy)), i.call(this);
  }
  Object.defineProperty(w.prototype, "destroyed", {
    get: function() {
      return this._readableState === void 0 ? !1 : this._readableState.destroyed;
    },
    set: function(h) {
      this._readableState && (this._readableState.destroyed = h);
    }
  }), w.prototype.destroy = m.destroy, w.prototype._undestroy = m.undestroy, w.prototype._destroy = function(h, f) {
    this.push(null), f(h);
  }, w.prototype.push = function(h, f) {
    var C = this._readableState, S;
    return C.objectMode ? S = !0 : typeof h == "string" && (f = f || C.defaultEncoding, f !== C.encoding && (h = a.from(h, f), f = ""), S = !0), A(this, h, f, !1, S);
  }, w.prototype.unshift = function(h) {
    return A(this, h, null, !0, !1);
  };
  function A(h, f, C, S, G) {
    var z = h._readableState;
    if (f === null)
      z.reading = !1, H(h, z);
    else {
      var X;
      G || (X = k(z, f)), X ? h.emit("error", X) : z.objectMode || f && f.length > 0 ? (typeof f != "string" && !z.objectMode && Object.getPrototypeOf(f) !== a.prototype && (f = c(f)), S ? z.endEmitted ? h.emit("error", new Error("stream.unshift() after end event")) : O(h, z, f, !0) : z.ended ? h.emit("error", new Error("stream.push() after EOF")) : (z.reading = !1, z.decoder && !C ? (f = z.decoder.write(f), z.objectMode || f.length !== 0 ? O(h, z, f, !1) : ne(h, z)) : O(h, z, f, !1))) : S || (z.reading = !1);
    }
    return q(z);
  }
  function O(h, f, C, S) {
    f.flowing && f.length === 0 && !f.sync ? (h.emit("data", C), h.read(0)) : (f.length += f.objectMode ? 1 : C.length, S ? f.buffer.unshift(C) : f.buffer.push(C), f.needReadable && j(h)), ne(h, f);
  }
  function k(h, f) {
    var C;
    return !s(f) && typeof f != "string" && f !== void 0 && !h.objectMode && (C = new TypeError("Invalid non-string/buffer chunk")), C;
  }
  function q(h) {
    return !h.ended && (h.needReadable || h.length < h.highWaterMark || h.length === 0);
  }
  w.prototype.isPaused = function() {
    return this._readableState.flowing === !1;
  }, w.prototype.setEncoding = function(h) {
    return g || (g = Tf().StringDecoder), this._readableState.decoder = new g(h), this._readableState.encoding = h, this;
  };
  var W = 8388608;
  function te(h) {
    return h >= W ? h = W : (h--, h |= h >>> 1, h |= h >>> 2, h |= h >>> 4, h |= h >>> 8, h |= h >>> 16, h++), h;
  }
  function T(h, f) {
    return h <= 0 || f.length === 0 && f.ended ? 0 : f.objectMode ? 1 : h !== h ? f.flowing && f.length ? f.buffer.head.data.length : f.length : (h > f.highWaterMark && (f.highWaterMark = te(h)), h <= f.length ? h : f.ended ? f.length : (f.needReadable = !0, 0));
  }
  w.prototype.read = function(h) {
    p("read", h), h = parseInt(h, 10);
    var f = this._readableState, C = h;
    if (h !== 0 && (f.emittedReadable = !1), h === 0 && f.needReadable && (f.length >= f.highWaterMark || f.ended))
      return p("read: emitReadable", f.length, f.ended), f.length === 0 && f.ended ? Z(this) : j(this), null;
    if (h = T(h, f), h === 0 && f.ended)
      return f.length === 0 && Z(this), null;
    var S = f.needReadable;
    p("need readable", S), (f.length === 0 || f.length - h < f.highWaterMark) && (S = !0, p("length less than watermark", S)), f.ended || f.reading ? (S = !1, p("reading or ended", S)) : S && (p("do read"), f.reading = !0, f.sync = !0, f.length === 0 && (f.needReadable = !0), this._read(f.highWaterMark), f.sync = !1, f.reading || (h = T(C, f)));
    var G;
    return h > 0 ? G = N(h, f) : G = null, G === null ? (f.needReadable = !0, h = 0) : f.length -= h, f.length === 0 && (f.ended || (f.needReadable = !0), C !== h && f.ended && Z(this)), G !== null && this.emit("data", G), G;
  };
  function H(h, f) {
    if (!f.ended) {
      if (f.decoder) {
        var C = f.decoder.end();
        C && C.length && (f.buffer.push(C), f.length += f.objectMode ? 1 : C.length);
      }
      f.ended = !0, j(h);
    }
  }
  function j(h) {
    var f = h._readableState;
    f.needReadable = !1, f.emittedReadable || (p("emitReadable", f.flowing), f.emittedReadable = !0, f.sync ? e.nextTick(J, h) : J(h));
  }
  function J(h) {
    p("emit readable"), h.emit("readable"), R(h);
  }
  function ne(h, f) {
    f.readingMore || (f.readingMore = !0, e.nextTick(F, h, f));
  }
  function F(h, f) {
    for (var C = f.length; !f.reading && !f.flowing && !f.ended && f.length < f.highWaterMark && (p("maybeReadMore read 0"), h.read(0), C !== f.length); )
      C = f.length;
    f.readingMore = !1;
  }
  w.prototype._read = function(h) {
    this.emit("error", new Error("_read() is not implemented"));
  }, w.prototype.pipe = function(h, f) {
    var C = this, S = this._readableState;
    switch (S.pipesCount) {
      case 0:
        S.pipes = h;
        break;
      case 1:
        S.pipes = [S.pipes, h];
        break;
      default:
        S.pipes.push(h);
        break;
    }
    S.pipesCount += 1, p("pipe count=%d opts=%j", S.pipesCount, f);
    var G = (!f || f.end !== !1) && h !== process.stdout && h !== process.stderr, z = G ? ve : xn;
    S.endEmitted ? e.nextTick(z) : C.once("end", z), h.on("unpipe", X);
    function X(qt, yn) {
      p("onunpipe"), qt === C && yn && yn.hasUnpiped === !1 && (yn.hasUnpiped = !0, Se());
    }
    function ve() {
      p("onend"), h.end();
    }
    var Ae = $(C);
    h.on("drain", Ae);
    var ct = !1;
    function Se() {
      p("cleanup"), h.removeListener("close", Ot), h.removeListener("finish", Mt), h.removeListener("drain", Ae), h.removeListener("error", jt), h.removeListener("unpipe", X), C.removeListener("end", ve), C.removeListener("end", xn), C.removeListener("data", Jn), ct = !0, S.awaitDrain && (!h._writableState || h._writableState.needDrain) && Ae();
    }
    var qe = !1;
    C.on("data", Jn);
    function Jn(qt) {
      p("ondata"), qe = !1;
      var yn = h.write(qt);
      yn === !1 && !qe && ((S.pipesCount === 1 && S.pipes === h || S.pipesCount > 1 && le(S.pipes, h) !== -1) && !ct && (p("false write response, pause", S.awaitDrain), S.awaitDrain++, qe = !0), C.pause());
    }
    function jt(qt) {
      p("onerror", qt), xn(), h.removeListener("error", jt), r(h, "error") === 0 && h.emit("error", qt);
    }
    y(h, "error", jt);
    function Ot() {
      h.removeListener("finish", Mt), xn();
    }
    h.once("close", Ot);
    function Mt() {
      p("onfinish"), h.removeListener("close", Ot), xn();
    }
    h.once("finish", Mt);
    function xn() {
      p("unpipe"), C.unpipe(h);
    }
    return h.emit("pipe", C), S.flowing || (p("pipe resume"), C.resume()), h;
  };
  function $(h) {
    return function() {
      var f = h._readableState;
      p("pipeOnDrain", f.awaitDrain), f.awaitDrain && f.awaitDrain--, f.awaitDrain === 0 && r(h, "data") && (f.flowing = !0, R(h));
    };
  }
  w.prototype.unpipe = function(h) {
    var f = this._readableState, C = { hasUnpiped: !1 };
    if (f.pipesCount === 0) return this;
    if (f.pipesCount === 1)
      return h && h !== f.pipes ? this : (h || (h = f.pipes), f.pipes = null, f.pipesCount = 0, f.flowing = !1, h && h.emit("unpipe", this, C), this);
    if (!h) {
      var S = f.pipes, G = f.pipesCount;
      f.pipes = null, f.pipesCount = 0, f.flowing = !1;
      for (var z = 0; z < G; z++)
        S[z].emit("unpipe", this, { hasUnpiped: !1 });
      return this;
    }
    var X = le(f.pipes, h);
    return X === -1 ? this : (f.pipes.splice(X, 1), f.pipesCount -= 1, f.pipesCount === 1 && (f.pipes = f.pipes[0]), h.emit("unpipe", this, C), this);
  }, w.prototype.on = function(h, f) {
    var C = i.prototype.on.call(this, h, f);
    if (h === "data")
      this._readableState.flowing !== !1 && this.resume();
    else if (h === "readable") {
      var S = this._readableState;
      !S.endEmitted && !S.readableListening && (S.readableListening = S.needReadable = !0, S.emittedReadable = !1, S.reading ? S.length && j(this) : e.nextTick(D, this));
    }
    return C;
  }, w.prototype.addListener = w.prototype.on;
  function D(h) {
    p("readable nexttick read 0"), h.read(0);
  }
  w.prototype.resume = function() {
    var h = this._readableState;
    return h.flowing || (p("resume"), h.flowing = !0, b(this, h)), this;
  };
  function b(h, f) {
    f.resumeScheduled || (f.resumeScheduled = !0, e.nextTick(E, h, f));
  }
  function E(h, f) {
    f.reading || (p("resume read 0"), h.read(0)), f.resumeScheduled = !1, f.awaitDrain = 0, h.emit("resume"), R(h), f.flowing && !f.reading && h.read(0);
  }
  w.prototype.pause = function() {
    return p("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== !1 && (p("pause"), this._readableState.flowing = !1, this.emit("pause")), this;
  };
  function R(h) {
    var f = h._readableState;
    for (p("flow", f.flowing); f.flowing && h.read() !== null; )
      ;
  }
  w.prototype.wrap = function(h) {
    var f = this, C = this._readableState, S = !1;
    h.on("end", function() {
      if (p("wrapped end"), C.decoder && !C.ended) {
        var X = C.decoder.end();
        X && X.length && f.push(X);
      }
      f.push(null);
    }), h.on("data", function(X) {
      if (p("wrapped data"), C.decoder && (X = C.decoder.write(X)), !(C.objectMode && X == null) && !(!C.objectMode && (!X || !X.length))) {
        var ve = f.push(X);
        ve || (S = !0, h.pause());
      }
    });
    for (var G in h)
      this[G] === void 0 && typeof h[G] == "function" && (this[G] = /* @__PURE__ */ function(X) {
        return function() {
          return h[X].apply(h, arguments);
        };
      }(G));
    for (var z = 0; z < v.length; z++)
      h.on(v[z], this.emit.bind(this, v[z]));
    return this._read = function(X) {
      p("wrapped _read", X), S && (S = !1, h.resume());
    }, this;
  }, Object.defineProperty(w.prototype, "readableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._readableState.highWaterMark;
    }
  }), w._fromList = N;
  function N(h, f) {
    if (f.length === 0) return null;
    var C;
    return f.objectMode ? C = f.buffer.shift() : !h || h >= f.length ? (f.decoder ? C = f.buffer.join("") : f.buffer.length === 1 ? C = f.buffer.head.data : C = f.buffer.concat(f.length), f.buffer.clear()) : C = L(h, f.buffer, f.decoder), C;
  }
  function L(h, f, C) {
    var S;
    return h < f.head.data.length ? (S = f.head.data.slice(0, h), f.head.data = f.head.data.slice(h)) : h === f.head.data.length ? S = f.shift() : S = C ? B(h, f) : K(h, f), S;
  }
  function B(h, f) {
    var C = f.head, S = 1, G = C.data;
    for (h -= G.length; C = C.next; ) {
      var z = C.data, X = h > z.length ? z.length : h;
      if (X === z.length ? G += z : G += z.slice(0, h), h -= X, h === 0) {
        X === z.length ? (++S, C.next ? f.head = C.next : f.head = f.tail = null) : (f.head = C, C.data = z.slice(X));
        break;
      }
      ++S;
    }
    return f.length -= S, G;
  }
  function K(h, f) {
    var C = a.allocUnsafe(h), S = f.head, G = 1;
    for (S.data.copy(C), h -= S.data.length; S = S.next; ) {
      var z = S.data, X = h > z.length ? z.length : h;
      if (z.copy(C, C.length - h, 0, X), h -= X, h === 0) {
        X === z.length ? (++G, S.next ? f.head = S.next : f.head = f.tail = null) : (f.head = S, S.data = z.slice(X));
        break;
      }
      ++G;
    }
    return f.length -= G, C;
  }
  function Z(h) {
    var f = h._readableState;
    if (f.length > 0) throw new Error('"endReadable()" called on non-empty stream');
    f.endEmitted || (f.ended = !0, e.nextTick(M, f, h));
  }
  function M(h, f) {
    !h.endEmitted && h.length === 0 && (h.endEmitted = !0, f.readable = !1, f.emit("end"));
  }
  function le(h, f) {
    for (var C = 0, S = h.length; C < S; C++)
      if (h[C] === f) return C;
    return -1;
  }
  return cc;
}
var lc, Rf;
function C0() {
  if (Rf) return lc;
  Rf = 1, lc = r;
  var e = Cr(), t = Object.create(Ui());
  t.inherits = Bi(), t.inherits(r, e);
  function n(o, c) {
    var s = this._transformState;
    s.transforming = !1;
    var u = s.writecb;
    if (!u)
      return this.emit("error", new Error("write callback called multiple times"));
    s.writechunk = null, s.writecb = null, c != null && this.push(c), u(o);
    var l = this._readableState;
    l.reading = !1, (l.needReadable || l.length < l.highWaterMark) && this._read(l.highWaterMark);
  }
  function r(o) {
    if (!(this instanceof r)) return new r(o);
    e.call(this, o), this._transformState = {
      afterTransform: n.bind(this),
      needTransform: !1,
      transforming: !1,
      writecb: null,
      writechunk: null,
      writeencoding: null
    }, this._readableState.needReadable = !0, this._readableState.sync = !1, o && (typeof o.transform == "function" && (this._transform = o.transform), typeof o.flush == "function" && (this._flush = o.flush)), this.on("prefinish", i);
  }
  function i() {
    var o = this;
    typeof this._flush == "function" ? this._flush(function(c, s) {
      a(o, c, s);
    }) : a(this, null, null);
  }
  r.prototype.push = function(o, c) {
    return this._transformState.needTransform = !1, e.prototype.push.call(this, o, c);
  }, r.prototype._transform = function(o, c, s) {
    throw new Error("_transform() is not implemented");
  }, r.prototype._write = function(o, c, s) {
    var u = this._transformState;
    if (u.writecb = s, u.writechunk = o, u.writeencoding = c, !u.transforming) {
      var l = this._readableState;
      (u.needTransform || l.needReadable || l.length < l.highWaterMark) && this._read(l.highWaterMark);
    }
  }, r.prototype._read = function(o) {
    var c = this._transformState;
    c.writechunk !== null && c.writecb && !c.transforming ? (c.transforming = !0, this._transform(c.writechunk, c.writeencoding, c.afterTransform)) : c.needTransform = !0;
  }, r.prototype._destroy = function(o, c) {
    var s = this;
    e.prototype._destroy.call(this, o, function(u) {
      c(u), s.emit("close");
    });
  };
  function a(o, c, s) {
    if (c) return o.emit("error", c);
    if (s != null && o.push(s), o._writableState.length) throw new Error("Calling transform done when ws.length != 0");
    if (o._transformState.transforming) throw new Error("Calling transform done when still transforming");
    return o.push(null);
  }
  return lc;
}
var uc, Cf;
function y_() {
  if (Cf) return uc;
  Cf = 1, uc = n;
  var e = C0(), t = Object.create(Ui());
  t.inherits = Bi(), t.inherits(n, e);
  function n(r) {
    if (!(this instanceof n)) return new n(r);
    e.call(this, r);
  }
  return n.prototype._transform = function(r, i, a) {
    a(null, r);
  }, uc;
}
(function(e, t) {
  var n = ie;
  process.env.READABLE_STREAM === "disable" && n ? (e.exports = n, t = e.exports = n.Readable, t.Readable = n.Readable, t.Writable = n.Writable, t.Duplex = n.Duplex, t.Transform = n.Transform, t.PassThrough = n.PassThrough, t.Stream = n) : (t = e.exports = R0(), t.Stream = n || t, t.Readable = t, t.Writable = A0(), t.Duplex = Cr(), t.Transform = C0(), t.PassThrough = y_());
})(hl, hl.exports);
var ji = hl.exports, b_ = ji.Duplex, ml = { exports: {} };
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
(function(e, t) {
  var n = Nt, r = n.Buffer;
  function i(o, c) {
    for (var s in o)
      c[s] = o[s];
  }
  r.from && r.alloc && r.allocUnsafe && r.allocUnsafeSlow ? e.exports = n : (i(n, t), t.Buffer = a);
  function a(o, c, s) {
    return r(o, c, s);
  }
  a.prototype = Object.create(r.prototype), i(r, a), a.from = function(o, c, s) {
    if (typeof o == "number")
      throw new TypeError("Argument must not be a number");
    return r(o, c, s);
  }, a.alloc = function(o, c, s) {
    if (typeof o != "number")
      throw new TypeError("Argument must be a number");
    var u = r(o);
    return c !== void 0 ? typeof s == "string" ? u.fill(c, s) : u.fill(c) : u.fill(0), u;
  }, a.allocUnsafe = function(o) {
    if (typeof o != "number")
      throw new TypeError("Argument must be a number");
    return r(o);
  }, a.allocUnsafeSlow = function(o) {
    if (typeof o != "number")
      throw new TypeError("Argument must be a number");
    return n.SlowBuffer(o);
  };
})(ml, ml.exports);
var O0 = ml.exports, su = b_, w_ = Pe, hr = O0.Buffer;
function _e(e) {
  if (!(this instanceof _e))
    return new _e(e);
  if (this._bufs = [], this.length = 0, typeof e == "function") {
    this._callback = e;
    var t = (function(r) {
      this._callback && (this._callback(r), this._callback = null);
    }).bind(this);
    this.on("pipe", function(r) {
      r.on("error", t);
    }), this.on("unpipe", function(r) {
      r.removeListener("error", t);
    });
  } else
    this.append(e);
  su.call(this);
}
w_.inherits(_e, su);
_e.prototype._offset = function(t) {
  var n = 0, r = 0, i;
  if (t === 0) return [0, 0];
  for (; r < this._bufs.length; r++) {
    if (i = n + this._bufs[r].length, t < i || r == this._bufs.length - 1)
      return [r, t - n];
    n = i;
  }
};
_e.prototype.append = function(t) {
  var n = 0;
  if (hr.isBuffer(t))
    this._appendBuffer(t);
  else if (Array.isArray(t))
    for (; n < t.length; n++)
      this.append(t[n]);
  else if (t instanceof _e)
    for (; n < t._bufs.length; n++)
      this.append(t._bufs[n]);
  else t != null && (typeof t == "number" && (t = t.toString()), this._appendBuffer(hr.from(t)));
  return this;
};
_e.prototype._appendBuffer = function(t) {
  this._bufs.push(t), this.length += t.length;
};
_e.prototype._write = function(t, n, r) {
  this._appendBuffer(t), typeof r == "function" && r();
};
_e.prototype._read = function(t) {
  if (!this.length)
    return this.push(null);
  t = Math.min(t, this.length), this.push(this.slice(0, t)), this.consume(t);
};
_e.prototype.end = function(t) {
  su.prototype.end.call(this, t), this._callback && (this._callback(null, this.slice()), this._callback = null);
};
_e.prototype.get = function(t) {
  return this.slice(t, t + 1)[0];
};
_e.prototype.slice = function(t, n) {
  return typeof t == "number" && t < 0 && (t += this.length), typeof n == "number" && n < 0 && (n += this.length), this.copy(null, 0, t, n);
};
_e.prototype.copy = function(t, n, r, i) {
  if ((typeof r != "number" || r < 0) && (r = 0), (typeof i != "number" || i > this.length) && (i = this.length), r >= this.length || i <= 0)
    return t || hr.alloc(0);
  var a = !!t, o = this._offset(r), c = i - r, s = c, u = a && n || 0, l = o[1], p, d;
  if (r === 0 && i == this.length) {
    if (!a)
      return this._bufs.length === 1 ? this._bufs[0] : hr.concat(this._bufs, this.length);
    for (d = 0; d < this._bufs.length; d++)
      this._bufs[d].copy(t, u), u += this._bufs[d].length;
    return t;
  }
  if (s <= this._bufs[o[0]].length - l)
    return a ? this._bufs[o[0]].copy(t, n, l, l + s) : this._bufs[o[0]].slice(l, l + s);
  for (a || (t = hr.allocUnsafe(c)), d = o[0]; d < this._bufs.length; d++) {
    if (p = this._bufs[d].length - l, s > p)
      this._bufs[d].copy(t, u, l), u += p;
    else {
      this._bufs[d].copy(t, u, l, l + s), u += p;
      break;
    }
    s -= p, l && (l = 0);
  }
  return t.length > u ? t.slice(0, u) : t;
};
_e.prototype.shallowSlice = function(t, n) {
  t = t || 0, n = n || this.length, t < 0 && (t += this.length), n < 0 && (n += this.length);
  var r = this._offset(t), i = this._offset(n), a = this._bufs.slice(r[0], i[0] + 1);
  return i[1] == 0 ? a.pop() : a[a.length - 1] = a[a.length - 1].slice(0, i[1]), r[1] != 0 && (a[0] = a[0].slice(r[1])), new _e(a);
};
_e.prototype.toString = function(t, n, r) {
  return this.slice(n, r).toString(t);
};
_e.prototype.consume = function(t) {
  if (t = Math.trunc(t), Number.isNaN(t) || t <= 0) return this;
  for (; this._bufs.length; )
    if (t >= this._bufs[0].length)
      t -= this._bufs[0].length, this.length -= this._bufs[0].length, this._bufs.shift();
    else {
      this._bufs[0] = this._bufs[0].slice(t), this.length -= t;
      break;
    }
  return this;
};
_e.prototype.duplicate = function() {
  for (var t = 0, n = new _e(); t < this._bufs.length; t++)
    n.append(this._bufs[t]);
  return n;
};
_e.prototype.destroy = function() {
  this._bufs.length = 0, this.length = 0, this.push(null);
};
(function() {
  var e = {
    readDoubleBE: 8,
    readDoubleLE: 8,
    readFloatBE: 4,
    readFloatLE: 4,
    readInt32BE: 4,
    readInt32LE: 4,
    readUInt32BE: 4,
    readUInt32LE: 4,
    readInt16BE: 2,
    readInt16LE: 2,
    readUInt16BE: 2,
    readUInt16LE: 2,
    readInt8: 1,
    readUInt8: 1
  };
  for (var t in e)
    (function(n) {
      _e.prototype[n] = function(r) {
        return this.slice(r, r + e[n])[n](0);
      };
    })(t);
})();
var E_ = _e, __ = T_, S_ = Object.prototype.hasOwnProperty;
function T_() {
  for (var e = {}, t = 0; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n)
      S_.call(n, r) && (e[r] = n[r]);
  }
  return e;
}
var Wn = {}, A_ = {}.toString, R_ = Array.isArray || function(e) {
  return A_.call(e) == "[object Array]";
}, Dt = O0.Buffer, C_ = R_, O_ = typeof Uint8Array < "u", $_ = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && ArrayBuffer.isView && (Dt.prototype instanceof Uint8Array || Dt.TYPED_ARRAY_SUPPORT), $0 = function(t, n) {
  if (t instanceof Dt)
    return t;
  if (typeof t == "string")
    return Dt.from(t, n);
  if ($_ && ArrayBuffer.isView(t)) {
    if (t.byteLength === 0)
      return Dt.alloc(0);
    var r = Dt.from(t.buffer, t.byteOffset, t.byteLength);
    if (r.byteLength === t.byteLength)
      return r;
  }
  if (O_ && t instanceof Uint8Array)
    return Dt.from(t);
  var i = C_(t);
  if (i)
    for (var a = 0; a < t.length; a += 1) {
      var o = t[a];
      if (typeof o != "number" || o < 0 || o > 255 || ~~o !== o)
        throw new RangeError("Array items must be numbers in the range 0-255.");
    }
  if (i || Dt.isBuffer(t) && t.constructor && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t))
    return Dt.from(t);
  throw new TypeError('The "data" argument must be a string, an Array, a Buffer, a TypedArray, or a DataView.');
}, I_ = function() {
  try {
    if (!Buffer.isEncoding("latin1"))
      return !1;
    var e = Buffer.alloc ? Buffer.alloc(4) : new Buffer(4);
    return e.fill("ab", "ucs2"), e.toString("hex") === "61006200";
  } catch {
    return !1;
  }
}();
function P_(e) {
  return e.length === 1 && e.charCodeAt(0) < 256;
}
function xa(e, t, n, r) {
  if (n < 0 || r > e.length)
    throw new RangeError("Out of range index");
  return n = n >>> 0, r = r === void 0 ? e.length : r >>> 0, r > n && e.fill(t, n, r), e;
}
function D_(e, t, n, r) {
  if (n < 0 || r > e.length)
    throw new RangeError("Out of range index");
  if (r <= n)
    return e;
  n = n >>> 0, r = r === void 0 ? e.length : r >>> 0;
  for (var i = n, a = t.length; i <= r - a; )
    t.copy(e, i), i += a;
  return i !== r && t.copy(e, i, 0, r - i), e;
}
function F_(e, t, n, r, i) {
  if (I_)
    return e.fill(t, n, r, i);
  if (typeof t == "number")
    return xa(e, t, n, r);
  if (typeof t == "string") {
    if (typeof n == "string" ? (i = n, n = 0, r = e.length) : typeof r == "string" && (i = r, r = e.length), i !== void 0 && typeof i != "string")
      throw new TypeError("encoding must be a string");
    if (i === "latin1" && (i = "binary"), typeof i == "string" && !Buffer.isEncoding(i))
      throw new TypeError("Unknown encoding: " + i);
    if (t === "")
      return xa(e, 0, n, r);
    if (P_(t))
      return xa(e, t.charCodeAt(0), n, r);
    t = new Buffer(t, i);
  }
  return Buffer.isBuffer(t) ? D_(e, t, n, r) : xa(e, 0, n, r);
}
var N_ = F_;
function k_(e) {
  if (typeof e != "number")
    throw new TypeError('"size" argument must be a number');
  if (e < 0)
    throw new RangeError('"size" argument must not be negative');
  return Buffer.allocUnsafe ? Buffer.allocUnsafe(e) : new Buffer(e);
}
var L_ = k_, Of = N_, U_ = L_, I0 = function(t, n, r) {
  if (typeof t != "number")
    throw new TypeError('"size" argument must be a number');
  if (t < 0)
    throw new RangeError('"size" argument must not be negative');
  if (Buffer.alloc)
    return Buffer.alloc(t, n, r);
  var i = U_(t);
  return t === 0 ? i : n === void 0 ? Of(i, 0) : (typeof r != "string" && (r = void 0), Of(i, n, r));
}, B_ = $0, j_ = I0, M_ = "0000000000000000000", q_ = "7777777777777777777", P0 = 48, z_ = "ustar\x0000", H_ = parseInt("7777", 8), G_ = function(e, t, n) {
  return typeof e != "number" ? n : (e = ~~e, e >= t ? t : e >= 0 || (e += t, e >= 0) ? e : 0);
}, W_ = function(e) {
  switch (e) {
    case 0:
      return "file";
    case 1:
      return "link";
    case 2:
      return "symlink";
    case 3:
      return "character-device";
    case 4:
      return "block-device";
    case 5:
      return "directory";
    case 6:
      return "fifo";
    case 7:
      return "contiguous-file";
    case 72:
      return "pax-header";
    case 55:
      return "pax-global-header";
    case 27:
      return "gnu-long-link-path";
    case 28:
    case 30:
      return "gnu-long-path";
  }
  return null;
}, V_ = function(e) {
  switch (e) {
    case "file":
      return 0;
    case "link":
      return 1;
    case "symlink":
      return 2;
    case "character-device":
      return 3;
    case "block-device":
      return 4;
    case "directory":
      return 5;
    case "fifo":
      return 6;
    case "contiguous-file":
      return 7;
    case "pax-header":
      return 72;
  }
  return 0;
}, D0 = function(e, t, n, r) {
  for (; n < r; n++)
    if (e[n] === t) return n;
  return r;
}, F0 = function(e) {
  for (var t = 256, n = 0; n < 148; n++) t += e[n];
  for (var r = 156; r < 512; r++) t += e[r];
  return t;
}, Wt = function(e, t) {
  return e = e.toString(8), e.length > t ? q_.slice(0, t) + " " : M_.slice(0, t - e.length) + e + " ";
};
function Y_(e) {
  var t;
  if (e[0] === 128) t = !0;
  else if (e[0] === 255) t = !1;
  else return null;
  for (var n = [], r = e.length - 1; r > 0; r--) {
    var i = e[r];
    t ? n.push(i) : n.push(255 - i);
  }
  var a = 0, o = n.length;
  for (r = 0; r < o; r++)
    a += n[r] * Math.pow(256, r);
  return t ? a : -1 * a;
}
var Vt = function(e, t, n) {
  if (e = e.slice(t, t + n), t = 0, e[t] & 128)
    return Y_(e);
  for (; t < e.length && e[t] === 32; ) t++;
  for (var r = G_(D0(e, 32, t, e.length), e.length, e.length); t < r && e[t] === 0; ) t++;
  return r === t ? 0 : parseInt(e.slice(t, r).toString(), 8);
}, ur = function(e, t, n, r) {
  return e.slice(t, D0(e, 0, t, t + n)).toString(r);
}, pc = function(e) {
  var t = Buffer.byteLength(e), n = Math.floor(Math.log(t) / Math.log(10)) + 1;
  return t + n >= Math.pow(10, n) && n++, t + n + e;
};
Wn.decodeLongPath = function(e, t) {
  return ur(e, 0, e.length, t);
};
Wn.encodePax = function(e) {
  var t = "";
  e.name && (t += pc(" path=" + e.name + `
`)), e.linkname && (t += pc(" linkpath=" + e.linkname + `
`));
  var n = e.pax;
  if (n)
    for (var r in n)
      t += pc(" " + r + "=" + n[r] + `
`);
  return B_(t);
};
Wn.decodePax = function(e) {
  for (var t = {}; e.length; ) {
    for (var n = 0; n < e.length && e[n] !== 32; ) n++;
    var r = parseInt(e.slice(0, n).toString(), 10);
    if (!r) return t;
    var i = e.slice(n + 1, r - 1).toString(), a = i.indexOf("=");
    if (a === -1) return t;
    t[i.slice(0, a)] = i.slice(a + 1), e = e.slice(r);
  }
  return t;
};
Wn.encode = function(e) {
  var t = j_(512), n = e.name, r = "";
  if (e.typeflag === 5 && n[n.length - 1] !== "/" && (n += "/"), Buffer.byteLength(n) !== n.length) return null;
  for (; Buffer.byteLength(n) > 100; ) {
    var i = n.indexOf("/");
    if (i === -1) return null;
    r += r ? "/" + n.slice(0, i) : n.slice(0, i), n = n.slice(i + 1);
  }
  return Buffer.byteLength(n) > 100 || Buffer.byteLength(r) > 155 || e.linkname && Buffer.byteLength(e.linkname) > 100 ? null : (t.write(n), t.write(Wt(e.mode & H_, 6), 100), t.write(Wt(e.uid, 6), 108), t.write(Wt(e.gid, 6), 116), t.write(Wt(e.size, 11), 124), t.write(Wt(e.mtime.getTime() / 1e3 | 0, 11), 136), t[156] = P0 + V_(e.type), e.linkname && t.write(e.linkname, 157), t.write(z_, 257), e.uname && t.write(e.uname, 265), e.gname && t.write(e.gname, 297), t.write(Wt(e.devmajor || 0, 6), 329), t.write(Wt(e.devminor || 0, 6), 337), r && t.write(r, 345), t.write(Wt(F0(t), 6), 148), t);
};
Wn.decode = function(e, t) {
  var n = e[156] === 0 ? 0 : e[156] - P0, r = ur(e, 0, 100, t), i = Vt(e, 100, 8), a = Vt(e, 108, 8), o = Vt(e, 116, 8), c = Vt(e, 124, 12), s = Vt(e, 136, 12), u = W_(n), l = e[157] === 0 ? null : ur(e, 157, 100, t), p = ur(e, 265, 32), d = ur(e, 297, 32), m = Vt(e, 329, 8), g = Vt(e, 337, 8);
  e[345] && (r = ur(e, 345, 155, t) + "/" + r), n === 0 && r && r[r.length - 1] === "/" && (n = 5);
  var v = F0(e);
  if (v === 8 * 32) return null;
  if (v !== Vt(e, 148, 8)) throw new Error("Invalid tar header. Maybe the tar is corrupted or it needs to be gunzipped?");
  return {
    name: r,
    mode: i,
    uid: a,
    gid: o,
    size: c,
    mtime: new Date(1e3 * s),
    type: u,
    linkname: l,
    uname: p,
    gname: d,
    devmajor: m,
    devminor: g
  };
};
var N0 = Pe, X_ = E_, K_ = __, Wr = Wn, k0 = ji.Writable, L0 = ji.PassThrough, U0 = function() {
}, $f = function(e) {
  return e &= 511, e && 512 - e;
}, J_ = function(e, t) {
  var n = new Mo(e, t);
  return n.end(), n;
}, Z_ = function(e, t) {
  return t.path && (e.name = t.path), t.linkpath && (e.linkname = t.linkpath), t.size && (e.size = parseInt(t.size, 10)), e.pax = t, e;
}, Mo = function(e, t) {
  this._parent = e, this.offset = t, L0.call(this);
};
N0.inherits(Mo, L0);
Mo.prototype.destroy = function(e) {
  this._parent.destroy(e);
};
var kt = function(e) {
  if (!(this instanceof kt)) return new kt(e);
  k0.call(this, e), e = e || {}, this._offset = 0, this._buffer = X_(), this._missing = 0, this._partial = !1, this._onparse = U0, this._header = null, this._stream = null, this._overflow = null, this._cb = null, this._locked = !1, this._destroyed = !1, this._pax = null, this._paxGlobal = null, this._gnuLongPath = null, this._gnuLongLinkPath = null;
  var t = this, n = t._buffer, r = function() {
    t._continue();
  }, i = function(d) {
    if (t._locked = !1, d) return t.destroy(d);
    t._stream || r();
  }, a = function() {
    t._stream = null;
    var d = $f(t._header.size);
    d ? t._parse(d, o) : t._parse(512, p), t._locked || r();
  }, o = function() {
    t._buffer.consume($f(t._header.size)), t._parse(512, p), r();
  }, c = function() {
    var d = t._header.size;
    t._paxGlobal = Wr.decodePax(n.slice(0, d)), n.consume(d), a();
  }, s = function() {
    var d = t._header.size;
    t._pax = Wr.decodePax(n.slice(0, d)), t._paxGlobal && (t._pax = K_(t._paxGlobal, t._pax)), n.consume(d), a();
  }, u = function() {
    var d = t._header.size;
    this._gnuLongPath = Wr.decodeLongPath(n.slice(0, d), e.filenameEncoding), n.consume(d), a();
  }, l = function() {
    var d = t._header.size;
    this._gnuLongLinkPath = Wr.decodeLongPath(n.slice(0, d), e.filenameEncoding), n.consume(d), a();
  }, p = function() {
    var d = t._offset, m;
    try {
      m = t._header = Wr.decode(n.slice(0, 512), e.filenameEncoding);
    } catch (g) {
      t.emit("error", g);
    }
    if (n.consume(512), !m) {
      t._parse(512, p), r();
      return;
    }
    if (m.type === "gnu-long-path") {
      t._parse(m.size, u), r();
      return;
    }
    if (m.type === "gnu-long-link-path") {
      t._parse(m.size, l), r();
      return;
    }
    if (m.type === "pax-global-header") {
      t._parse(m.size, c), r();
      return;
    }
    if (m.type === "pax-header") {
      t._parse(m.size, s), r();
      return;
    }
    if (t._gnuLongPath && (m.name = t._gnuLongPath, t._gnuLongPath = null), t._gnuLongLinkPath && (m.linkname = t._gnuLongLinkPath, t._gnuLongLinkPath = null), t._pax && (t._header = m = Z_(m, t._pax), t._pax = null), t._locked = !0, !m.size || m.type === "directory") {
      t._parse(512, p), t.emit("entry", m, J_(t, d), i);
      return;
    }
    t._stream = new Mo(t, d), t.emit("entry", m, t._stream, i), t._parse(m.size, a), r();
  };
  this._onheader = p, this._parse(512, p);
};
N0.inherits(kt, k0);
kt.prototype.destroy = function(e) {
  this._destroyed || (this._destroyed = !0, e && this.emit("error", e), this.emit("close"), this._stream && this._stream.emit("close"));
};
kt.prototype._parse = function(e, t) {
  this._destroyed || (this._offset += e, this._missing = e, t === this._onheader && (this._partial = !1), this._onparse = t);
};
kt.prototype._continue = function() {
  if (!this._destroyed) {
    var e = this._cb;
    this._cb = U0, this._overflow ? this._write(this._overflow, void 0, e) : e();
  }
};
kt.prototype._write = function(e, t, n) {
  if (!this._destroyed) {
    var r = this._stream, i = this._buffer, a = this._missing;
    if (e.length && (this._partial = !0), e.length < a)
      return this._missing -= e.length, this._overflow = null, r ? r.write(e, n) : (i.append(e), n());
    this._cb = n, this._missing = 0;
    var o = null;
    e.length > a && (o = e.slice(a), e = e.slice(0, a)), r ? r.end(e) : i.append(e), this._overflow = o, this._onparse();
  }
};
kt.prototype._final = function(e) {
  if (this._partial) return this.destroy(new Error("Unexpected end of data"));
  e();
};
var Q_ = kt, eS = oe.constants || Kh, er = eS, If = n0, qo = Pe, tS = I0, nS = $0, B0 = ji.Readable, Nr = ji.Writable, rS = kl.StringDecoder, Wa = Wn, iS = parseInt("755", 8), aS = parseInt("644", 8), j0 = tS(1024), cu = function() {
}, vl = function(e, t) {
  t &= 511, t && e.push(j0.slice(0, 512 - t));
};
function oS(e) {
  switch (e & er.S_IFMT) {
    case er.S_IFBLK:
      return "block-device";
    case er.S_IFCHR:
      return "character-device";
    case er.S_IFDIR:
      return "directory";
    case er.S_IFIFO:
      return "fifo";
    case er.S_IFLNK:
      return "symlink";
  }
  return "file";
}
var zo = function(e) {
  Nr.call(this), this.written = 0, this._to = e, this._destroyed = !1;
};
qo.inherits(zo, Nr);
zo.prototype._write = function(e, t, n) {
  if (this.written += e.length, this._to.push(e)) return n();
  this._to._drain = n;
};
zo.prototype.destroy = function() {
  this._destroyed || (this._destroyed = !0, this.emit("close"));
};
var Ho = function() {
  Nr.call(this), this.linkname = "", this._decoder = new rS("utf-8"), this._destroyed = !1;
};
qo.inherits(Ho, Nr);
Ho.prototype._write = function(e, t, n) {
  this.linkname += this._decoder.write(e), n();
};
Ho.prototype.destroy = function() {
  this._destroyed || (this._destroyed = !0, this.emit("close"));
};
var hi = function() {
  Nr.call(this), this._destroyed = !1;
};
qo.inherits(hi, Nr);
hi.prototype._write = function(e, t, n) {
  n(new Error("No body allowed for this entry"));
};
hi.prototype.destroy = function() {
  this._destroyed || (this._destroyed = !0, this.emit("close"));
};
var Tt = function(e) {
  if (!(this instanceof Tt)) return new Tt(e);
  B0.call(this, e), this._drain = cu, this._finalized = !1, this._finalizing = !1, this._destroyed = !1, this._stream = null;
};
qo.inherits(Tt, B0);
Tt.prototype.entry = function(e, t, n) {
  if (this._stream) throw new Error("already piping an entry");
  if (!(this._finalized || this._destroyed)) {
    typeof t == "function" && (n = t, t = null), n || (n = cu);
    var r = this;
    if ((!e.size || e.type === "symlink") && (e.size = 0), e.type || (e.type = oS(e.mode)), e.mode || (e.mode = e.type === "directory" ? iS : aS), e.uid || (e.uid = 0), e.gid || (e.gid = 0), e.mtime || (e.mtime = /* @__PURE__ */ new Date()), typeof t == "string" && (t = nS(t)), Buffer.isBuffer(t))
      return e.size = t.length, this._encode(e), this.push(t), vl(r, e.size), process.nextTick(n), new hi();
    if (e.type === "symlink" && !e.linkname) {
      var i = new Ho();
      return If(i, function(o) {
        if (o)
          return r.destroy(), n(o);
        e.linkname = i.linkname, r._encode(e), n();
      }), i;
    }
    if (this._encode(e), e.type !== "file" && e.type !== "contiguous-file")
      return process.nextTick(n), new hi();
    var a = new zo(this);
    return this._stream = a, If(a, function(o) {
      if (r._stream = null, o)
        return r.destroy(), n(o);
      if (a.written !== e.size)
        return r.destroy(), n(new Error("size mismatch"));
      vl(r, e.size), r._finalizing && r.finalize(), n();
    }), a;
  }
};
Tt.prototype.finalize = function() {
  if (this._stream) {
    this._finalizing = !0;
    return;
  }
  this._finalized || (this._finalized = !0, this.push(j0), this.push(null));
};
Tt.prototype.destroy = function(e) {
  this._destroyed || (this._destroyed = !0, e && this.emit("error", e), this.emit("close"), this._stream && this._stream.destroy && this._stream.destroy());
};
Tt.prototype._encode = function(e) {
  if (!e.pax) {
    var t = Wa.encode(e);
    if (t) {
      this.push(t);
      return;
    }
  }
  this._encodePax(e);
};
Tt.prototype._encodePax = function(e) {
  var t = Wa.encodePax({
    name: e.name,
    linkname: e.linkname,
    pax: e.pax
  }), n = {
    name: "PaxHeader",
    mode: e.mode,
    uid: e.uid,
    gid: e.gid,
    size: t.length,
    mtime: e.mtime,
    type: "pax-header",
    linkname: e.linkname && "PaxHeader",
    uname: e.uname,
    gname: e.gname,
    devmajor: e.devmajor,
    devminor: e.devminor
  };
  this.push(Wa.encode(n)), this.push(t), vl(this, t.length), n.size = e.size, n.type = e.type, this.push(Wa.encode(n));
};
Tt.prototype._read = function(e) {
  var t = this._drain;
  this._drain = cu, t();
};
var sS = Tt;
Li.extract = Q_;
Li.pack = sS;
const cS = ie;
let lS = class extends cS.Readable {
  addEntry() {
    throw new Error(".addEntry not implemented in sub class!");
  }
  _read() {
  }
  emit(t, n) {
    if (t === "error") {
      const r = n;
      r.name === "Error" && (r.name = this.constructor.name + "Error");
    }
    super.emit(t, n);
  }
};
var M0 = lS;
const ya = oe, Vr = ae, uS = ie, pS = Li, Pf = me, fS = M0;
let dS = class extends fS {
  constructor(t) {
    super(t), this._waitingEntries = [], this._processing = !1, this._init(t);
  }
  _init() {
    const t = this._pack = pS.pack();
    t.on("end", () => this.push(null)), t.on("data", (n) => this.push(n)), t.on("error", (n) => this.emit("error", n));
  }
  addEntry(t, n) {
    if (this._processing)
      return this._waitingEntries.push([t, n]);
    n = n || {}, this._processing = !0;
    const r = Pf.entryType(t);
    r && (r === "fileOrDir" ? this._addFileOrDirEntry(t, n) : r === "buffer" ? this._addBufferEntry(t, n) : this._addStreamEntry(t, n));
  }
  _addFileOrDirEntry(t, n) {
    ya.stat(t, (r, i) => {
      if (r) return this.emit("error", r);
      if (i.isDirectory()) return this._addDirEntry(t, n);
      if (i.isFile()) return this._addFileEntry(t, n);
      const a = new Error("Type is not supported, must be a file path, directory path, file buffer, or a readable stream");
      a.name = "IlligalEntryError", this.emit("error", a);
    });
  }
  _addFileEntry(t, n) {
    ya.stat(t, (r, i) => {
      if (r) return this.emit("error", r);
      const a = this._pack.entry({ name: n.relativePath || Vr.basename(t), size: i.size, mode: i.mode & 511 }, this._onEntryFinish.bind(this)), o = ya.createReadStream(t, n.fs);
      o.on("error", (c) => this.emit("error", c)), o.pipe(a);
    });
  }
  _addDirEntry(t, n) {
    ya.readdir(t, (r, i) => {
      if (r) return this.emit("error", r);
      const a = n.relativePath || "";
      i.forEach((o) => {
        const c = Pf.clone(n);
        n.ignoreBase ? c.relativePath = Vr.posix.join(a, o) : c.relativePath = Vr.posix.join(a, Vr.basename(t), o), c.ignoreBase = !0, this.addEntry(Vr.posix.join(t, o), c);
      }), this._onEntryFinish();
    });
  }
  _addBufferEntry(t, n) {
    if (!n.relativePath) return this.emit("error", "opts.relativePath is required if entry is a buffer");
    this._pack.entry({ name: n.relativePath }, t, this._onEntryFinish.bind(this));
  }
  _addStreamEntry(t, n) {
    if (t.on("error", (r) => this.emit("error", r)), !n.relativePath) return this.emit("error", new Error("opts.relativePath is required"));
    if (n.size) {
      const r = this._pack.entry({ name: n.relativePath, size: n.size }, this._onEntryFinish.bind(this));
      t.pipe(r);
    } else {
      n.suppressSizeWarning || console.warn("You should specify the size of streamming data by opts.size to prevent all streaming data from loading into memory. If you are sure about memory cost, pass opts.suppressSizeWarning: true to suppress this warning");
      const r = [], i = new uS.Writable({
        write(a, o, c) {
          r.push(a), c();
        }
      });
      i.on("error", (a) => this.emit("error", a)), i.on("finish", () => {
        this._pack.entry({ name: n.relativePath }, Buffer.concat(r), this._onEntryFinish.bind(this));
      }), t.pipe(i);
    }
  }
  _read() {
  }
  _onEntryFinish(t) {
    if (t) return this.emit("error", t);
    this._processing = !1;
    const n = this._waitingEntries.shift();
    n ? this.addEntry.apply(this, n) : this._finalize();
  }
  _finalize() {
    this._pack.finalize();
  }
};
var q0 = dS;
const hS = ae, mS = No, vS = q0;
let gS = class extends vS {
  _init() {
    const n = (this._zipfile = new mS.ZipFile()).outputStream;
    n.on("end", () => this.push(null)), n.on("data", (r) => this.push(r)), n.on("error", (r) => this.emit("error", r));
  }
  _addFileEntry(t, n) {
    this._zipfile.addFile(t, n.relativePath || hS.basename(t), n), this._onEntryFinish();
  }
  _addBufferEntry(t, n) {
    if (!n.relativePath) return this.emit("error", new Error("opts.relativePath is required if entry is a buffer"));
    this._zipfile.addBuffer(t, n.relativePath, n), this._onEntryFinish();
  }
  _addStreamEntry(t, n) {
    if (!n.relativePath) return this.emit("error", new Error("opts.relativePath is required if entry is a stream"));
    t.on("error", (r) => this.emit("error", r)), this._zipfile.addReadStream(t, n.relativePath, n), this._onEntryFinish();
  }
  _finalize() {
    this._zipfile.end();
  }
};
var xS = gS, lu = { exports: {} };
function yS(e) {
  if (this._ready = !!this._ready, this._readyCallbacks = this._readyCallbacks || [], arguments.length === 0)
    return new Promise((function(t) {
      if (this._ready)
        return t();
      this._readyCallbacks.push(t);
    }).bind(this));
  typeof e == "function" ? this._readyCallbacks.push(e) : this._ready = !!e, this._ready && this._readyCallbacks.splice(0, 1 / 0).forEach(function(t) {
    process.nextTick(t);
  });
}
function z0(e) {
  e.ready = yS;
}
lu.exports = z0;
lu.exports.mixin = z0;
var Go = lu.exports;
const bS = ae, wS = No, ES = wo, Df = ie, _S = me, SS = Go;
let H0 = class extends Df.Transform {
  constructor(t) {
    super(t);
    const n = _S.sourceType(t.source), r = new wS.ZipFile(), i = r.outputStream;
    if (i.on("data", (a) => this.push(a)), i.on("end", () => this.ready(!0)), r.on("error", (a) => this.emit("error", a)), n !== "file" && ES(t.relativePath, "opts.relativePath is required when compressing a buffer, or a stream"), n && this.end(), n === "file")
      r.addFile(t.source, t.relativePath || bS.basename(t.source), t.yazl);
    else if (n === "buffer")
      r.addBuffer(t.source, t.relativePath, t.yazl);
    else if (n === "stream")
      r.addReadStream(t.source, t.relativePath, t.yazl);
    else {
      const a = this._passThrough = new Df.PassThrough();
      this.on("finish", () => a.end()), r.addReadStream(a, t.relativePath, t.yazl);
    }
    r.end(t.yazl);
  }
  _transform(t, n, r) {
    this._passThrough && this._passThrough.write(t, n, r);
  }
  _flush(t) {
    this.ready(t);
  }
};
SS.mixin(H0.prototype);
var TS = H0, Rt = {}, Mi = {}, AS = Wo;
function Wo() {
  this.pending = 0, this.max = 1 / 0, this.listeners = [], this.waiting = [], this.error = null;
}
Wo.prototype.go = function(e) {
  this.pending < this.max ? W0(this, e) : this.waiting.push(e);
};
Wo.prototype.wait = function(e) {
  this.pending === 0 ? e(this.error) : this.listeners.push(e);
};
Wo.prototype.hold = function() {
  return G0(this);
};
function G0(e) {
  e.pending += 1;
  var t = !1;
  return n;
  function n(i) {
    if (t) throw new Error("callback called twice");
    if (t = !0, e.error = e.error || i, e.pending -= 1, e.waiting.length > 0 && e.pending < e.max)
      W0(e, e.waiting.shift());
    else if (e.pending === 0) {
      var a = e.listeners;
      e.listeners = [], a.forEach(r);
    }
  }
  function r(i) {
    i(e.error);
  }
}
function W0(e, t) {
  t(G0(e));
}
const ii = oe, { Readable: RS, Writable: V0, PassThrough: CS } = ie, OS = AS, { EventEmitter: Y0 } = Hn;
class X0 extends Y0 {
  constructor(t, n = {}) {
    super(), this.fd = t, this.pend = new OS(), this.pend.max = 1, this.refCount = 0, this.autoClose = !!n.autoClose;
  }
  read(t, n, r, i, a) {
    this.pend.go((o) => {
      ii.read(this.fd, t, n, r, i, (c, s, u) => {
        o(), a(c, s, u);
      });
    });
  }
  write(t, n, r, i, a) {
    this.pend.go((o) => {
      ii.write(this.fd, t, n, r, i, (c, s, u) => {
        o(), a(c, s, u);
      });
    });
  }
  createReadStream(t) {
    return new $S(this, t);
  }
  createWriteStream(t) {
    return new IS(this, t);
  }
  ref() {
    this.refCount += 1;
  }
  unref() {
    if (this.refCount -= 1, !(this.refCount > 0)) {
      if (this.refCount < 0) throw new Error("invalid unref");
      this.autoClose && ii.close(this.fd, (t) => {
        t ? this.emit("error", t) : this.emit("close");
      });
    }
  }
}
class $S extends RS {
  constructor(t, n = {}) {
    super(n), this.context = t, this.context.ref(), this.start = n.start || 0, this.endOffset = n.end, this.pos = this.start, this.destroyed = !1;
  }
  _read(t) {
    if (this.destroyed) return;
    let n = Math.min(this._readableState.highWaterMark, t);
    if (this.endOffset != null && (n = Math.min(n, this.endOffset - this.pos)), n <= 0) {
      this.destroyed = !0, this.push(null), this.context.unref();
      return;
    }
    this.context.pend.go((r) => {
      if (this.destroyed) return r();
      const i = Buffer.alloc(n);
      ii.read(this.context.fd, i, 0, n, this.pos, (a, o) => {
        a ? this.destroy(a) : o === 0 ? (this.destroyed = !0, this.push(null), this.context.unref()) : (this.pos += o, this.push(i.slice(0, o))), r();
      });
    });
  }
  destroy(t) {
    this.destroyed || (t = t || new Error("stream destroyed"), this.destroyed = !0, this.emit("error", t), this.context.unref());
  }
}
class IS extends V0 {
  constructor(t, n = {}) {
    super(n), this.context = t, this.context.ref(), this.start = n.start || 0, this.endOffset = n.end == null ? 1 / 0 : +n.end, this.bytesWritten = 0, this.pos = this.start, this.destroyed = !1, this.on("finish", this.destroy.bind(this));
  }
  _write(t, n, r) {
    if (!this.destroyed) {
      if (this.pos + t.length > this.endOffset) {
        const i = new Error("maximum file length exceeded");
        i.code = "ETOOBIG", this.destroy(), r(i);
        return;
      }
      this.context.pend.go((i) => {
        if (this.destroyed) return i();
        ii.write(this.context.fd, t, 0, t.length, this.pos, (a, o) => {
          a ? (this.destroy(), i(), r(a)) : (this.bytesWritten += o, this.pos += o, this.emit("progress"), i(), r());
        });
      });
    }
  }
  destroy() {
    this.destroyed || (this.destroyed = !0, this.context.unref());
  }
}
const { MAX_SAFE_INTEGER: PS } = Number;
class K0 extends Y0 {
  constructor(t, n) {
    super(), n = n || {}, this.refCount = 0, this.buffer = t, this.maxChunkSize = n.maxChunkSize || PS;
  }
  read(t, n, r, i, a) {
    const o = i + r, c = o - this.buffer.length, s = c > 0 ? c : r;
    this.buffer.copy(t, n, i, o), setImmediate(() => {
      a(null, s);
    });
  }
  write(t, n, r, i, a) {
    t.copy(this.buffer, i, n, n + r), setImmediate(() => {
      a(null, r, t);
    });
  }
  createReadStream(t = {}) {
    const n = new CS(t);
    n.destroyed = !1, n.start = t.start || 0, n.endOffset = t.end, n.pos = n.endOffset || this.buffer.length;
    const r = this.buffer.slice(n.start, n.pos);
    let i = 0;
    for (; ; ) {
      const a = i + this.maxChunkSize;
      if (a >= r.length) {
        i < r.length && n.write(r.slice(i, r.length));
        break;
      }
      n.write(r.slice(i, a)), i = a;
    }
    return n.end(), n.destroy = () => {
      n.destroyed = !0;
    }, n;
  }
  createWriteStream(t) {
    const n = this;
    t = t || {};
    const r = new V0(t);
    return r.start = t.start || 0, r.endOffset = t.end == null ? this.buffer.length : +t.end, r.bytesWritten = 0, r.pos = r.start, r.destroyed = !1, r._write = (i, a, o) => {
      if (r.destroyed) return;
      const c = r.pos + i.length;
      if (c > r.endOffset) {
        const s = new Error("maximum file length exceeded");
        s.code = "ETOOBIG", r.destroyed = !0, o(s);
        return;
      }
      i.copy(n.buffer, r.pos, 0, i.length), r.bytesWritten += i.length, r.pos = c, r.emit("progress"), o();
    }, r.destroy = () => {
      r.destroyed = !0;
    }, r;
  }
  ref() {
    this.refCount += 1;
  }
  unref() {
    if (this.refCount -= 1, this.refCount < 0)
      throw new Error("invalid unref");
  }
}
function DS(e, t) {
  return new K0(e, t);
}
function FS(e, t) {
  return new X0(e, t);
}
Mi.createFromBuffer = DS;
Mi.createFromFd = FS;
Mi.BufferSlicer = K0;
Mi.FdSlicer = X0;
var gl = oe, NS = Qe, J0 = Mi, kS = s0, Vo = Pe, Yo = Hn.EventEmitter, Z0 = ie.Transform, uu = ie.PassThrough, LS = ie.Writable;
Rt.open = US;
Rt.fromFd = Q0;
Rt.fromBuffer = BS;
Rt.fromRandomAccessReader = pu;
Rt.dosDateTimeToDate = tv;
Rt.validateFileName = nv;
Rt.ZipFile = sn;
Rt.Entry = qi;
Rt.RandomAccessReader = hn;
function US(e, t, n) {
  typeof t == "function" && (n = t, t = null), t == null && (t = {}), t.autoClose == null && (t.autoClose = !0), t.lazyEntries == null && (t.lazyEntries = !1), t.decodeStrings == null && (t.decodeStrings = !0), t.validateEntrySizes == null && (t.validateEntrySizes = !0), t.strictFileNames == null && (t.strictFileNames = !1), n == null && (n = oo), gl.open(e, "r", function(r, i) {
    if (r) return n(r);
    Q0(i, t, function(a, o) {
      a && gl.close(i, oo), n(a, o);
    });
  });
}
function Q0(e, t, n) {
  typeof t == "function" && (n = t, t = null), t == null && (t = {}), t.autoClose == null && (t.autoClose = !1), t.lazyEntries == null && (t.lazyEntries = !1), t.decodeStrings == null && (t.decodeStrings = !0), t.validateEntrySizes == null && (t.validateEntrySizes = !0), t.strictFileNames == null && (t.strictFileNames = !1), n == null && (n = oo), gl.fstat(e, function(r, i) {
    if (r) return n(r);
    var a = J0.createFromFd(e, { autoClose: !0 });
    pu(a, i.size, t, n);
  });
}
function BS(e, t, n) {
  typeof t == "function" && (n = t, t = null), t == null && (t = {}), t.autoClose = !1, t.lazyEntries == null && (t.lazyEntries = !1), t.decodeStrings == null && (t.decodeStrings = !0), t.validateEntrySizes == null && (t.validateEntrySizes = !0), t.strictFileNames == null && (t.strictFileNames = !1);
  var r = J0.createFromBuffer(e, { maxChunkSize: 65536 });
  pu(r, e.length, t, n);
}
function pu(e, t, n, r) {
  typeof n == "function" && (r = n, n = null), n == null && (n = {}), n.autoClose == null && (n.autoClose = !0), n.lazyEntries == null && (n.lazyEntries = !1), n.decodeStrings == null && (n.decodeStrings = !0);
  var i = !!n.decodeStrings;
  if (n.validateEntrySizes == null && (n.validateEntrySizes = !0), n.strictFileNames == null && (n.strictFileNames = !1), r == null && (r = oo), typeof t != "number") throw new Error("expected totalSize parameter to be a number");
  if (t > Number.MAX_SAFE_INTEGER)
    throw new Error("zip file too large. only file sizes up to 2^52 are supported due to JavaScript's Number type being an IEEE 754 double.");
  e.ref();
  var a = 22, o = 65535, c = Math.min(a + o, t), s = _t(c), u = t - s.length;
  Er(e, s, 0, c, u, function(l) {
    if (l) return r(l);
    for (var p = c - a; p >= 0; p -= 1)
      if (s.readUInt32LE(p) === 101010256) {
        var d = s.slice(p), m = d.readUInt16LE(4);
        if (m !== 0)
          return r(new Error("multi-disk zip files are not supported: found disk number: " + m));
        var g = d.readUInt16LE(10), v = d.readUInt32LE(16), y = d.readUInt16LE(20), x = d.length - a;
        if (y !== x)
          return r(new Error("invalid comment length. expected: " + x + ". found: " + y));
        var w = i ? Va(d, 22, d.length, !1) : d.slice(22);
        if (!(g === 65535 || v === 4294967295))
          return r(null, new sn(e, v, t, g, w, n.autoClose, n.lazyEntries, i, n.validateEntrySizes, n.strictFileNames));
        var A = _t(20), O = u + p - A.length;
        Er(e, A, 0, A.length, O, function(k) {
          if (k) return r(k);
          if (A.readUInt32LE(0) !== 117853008)
            return r(new Error("invalid zip64 end of central directory locator signature"));
          var q = _r(A, 8), W = _t(56);
          Er(e, W, 0, W.length, q, function(te) {
            return te ? r(te) : W.readUInt32LE(0) !== 101075792 ? r(new Error("invalid zip64 end of central directory record signature")) : (g = _r(W, 32), v = _r(W, 48), r(null, new sn(e, v, t, g, w, n.autoClose, n.lazyEntries, i, n.validateEntrySizes, n.strictFileNames)));
          });
        });
        return;
      }
    r(new Error("end of central directory record signature not found"));
  });
}
Vo.inherits(sn, Yo);
function sn(e, t, n, r, i, a, o, c, s, u) {
  var l = this;
  Yo.call(l), l.reader = e, l.reader.on("error", function(p) {
    ev(l, p);
  }), l.reader.once("close", function() {
    l.emit("close");
  }), l.readEntryCursor = t, l.fileSize = n, l.entryCount = r, l.comment = i, l.entriesRead = 0, l.autoClose = !!a, l.lazyEntries = !!o, l.decodeStrings = !!c, l.validateEntrySizes = !!s, l.strictFileNames = !!u, l.isOpen = !0, l.emittedError = !1, l.lazyEntries || l._readEntry();
}
sn.prototype.close = function() {
  this.isOpen && (this.isOpen = !1, this.reader.unref());
};
function ut(e, t) {
  e.autoClose && e.close(), ev(e, t);
}
function ev(e, t) {
  e.emittedError || (e.emittedError = !0, e.emit("error", t));
}
sn.prototype.readEntry = function() {
  if (!this.lazyEntries) throw new Error("readEntry() called without lazyEntries:true");
  this._readEntry();
};
sn.prototype._readEntry = function() {
  var e = this;
  if (e.entryCount === e.entriesRead) {
    setImmediate(function() {
      e.autoClose && e.close(), !e.emittedError && e.emit("end");
    });
    return;
  }
  if (!e.emittedError) {
    var t = _t(46);
    Er(e.reader, t, 0, t.length, e.readEntryCursor, function(n) {
      if (n) return ut(e, n);
      if (!e.emittedError) {
        var r = new qi(), i = t.readUInt32LE(0);
        if (i !== 33639248) return ut(e, new Error("invalid central directory file header signature: 0x" + i.toString(16)));
        if (r.versionMadeBy = t.readUInt16LE(4), r.versionNeededToExtract = t.readUInt16LE(6), r.generalPurposeBitFlag = t.readUInt16LE(8), r.compressionMethod = t.readUInt16LE(10), r.lastModFileTime = t.readUInt16LE(12), r.lastModFileDate = t.readUInt16LE(14), r.crc32 = t.readUInt32LE(16), r.compressedSize = t.readUInt32LE(20), r.uncompressedSize = t.readUInt32LE(24), r.fileNameLength = t.readUInt16LE(28), r.extraFieldLength = t.readUInt16LE(30), r.fileCommentLength = t.readUInt16LE(32), r.internalFileAttributes = t.readUInt16LE(36), r.externalFileAttributes = t.readUInt32LE(38), r.relativeOffsetOfLocalHeader = t.readUInt32LE(42), r.generalPurposeBitFlag & 64) return ut(e, new Error("strong encryption is not supported"));
        e.readEntryCursor += 46, t = _t(r.fileNameLength + r.extraFieldLength + r.fileCommentLength), Er(e.reader, t, 0, t.length, e.readEntryCursor, function(a) {
          if (a) return ut(e, a);
          if (!e.emittedError) {
            var o = (r.generalPurposeBitFlag & 2048) !== 0;
            r.fileName = e.decodeStrings ? Va(t, 0, r.fileNameLength, o) : t.slice(0, r.fileNameLength);
            var c = r.fileNameLength + r.extraFieldLength, s = t.slice(r.fileNameLength, c);
            r.extraFields = [];
            for (var u = 0; u < s.length - 3; ) {
              var l = s.readUInt16LE(u + 0), p = s.readUInt16LE(u + 2), d = u + 4, m = d + p;
              if (m > s.length) return ut(e, new Error("extra field length exceeds extra field buffer size"));
              var g = _t(p);
              s.copy(g, 0, d, m), r.extraFields.push({
                id: l,
                data: g
              }), u = m;
            }
            if (r.fileComment = e.decodeStrings ? Va(t, c, c + r.fileCommentLength, o) : t.slice(c, c + r.fileCommentLength), r.comment = r.fileComment, e.readEntryCursor += t.length, e.entriesRead += 1, r.uncompressedSize === 4294967295 || r.compressedSize === 4294967295 || r.relativeOffsetOfLocalHeader === 4294967295) {
              for (var v = null, u = 0; u < r.extraFields.length; u++) {
                var y = r.extraFields[u];
                if (y.id === 1) {
                  v = y.data;
                  break;
                }
              }
              if (v == null)
                return ut(e, new Error("expected zip64 extended information extra field"));
              var x = 0;
              if (r.uncompressedSize === 4294967295) {
                if (x + 8 > v.length)
                  return ut(e, new Error("zip64 extended information extra field does not include uncompressed size"));
                r.uncompressedSize = _r(v, x), x += 8;
              }
              if (r.compressedSize === 4294967295) {
                if (x + 8 > v.length)
                  return ut(e, new Error("zip64 extended information extra field does not include compressed size"));
                r.compressedSize = _r(v, x), x += 8;
              }
              if (r.relativeOffsetOfLocalHeader === 4294967295) {
                if (x + 8 > v.length)
                  return ut(e, new Error("zip64 extended information extra field does not include relative header offset"));
                r.relativeOffsetOfLocalHeader = _r(v, x), x += 8;
              }
            }
            if (e.decodeStrings)
              for (var u = 0; u < r.extraFields.length; u++) {
                var y = r.extraFields[u];
                if (y.id === 28789) {
                  if (y.data.length < 6 || y.data.readUInt8(0) !== 1)
                    continue;
                  var w = y.data.readUInt32LE(1);
                  if (kS.unsigned(t.slice(0, r.fileNameLength)) !== w)
                    continue;
                  r.fileName = Va(y.data, 5, y.data.length, !0);
                  break;
                }
              }
            if (e.validateEntrySizes && r.compressionMethod === 0) {
              var A = r.uncompressedSize;
              if (r.isEncrypted() && (A += 12), r.compressedSize !== A) {
                var O = "compressed/uncompressed size mismatch for stored file: " + r.compressedSize + " != " + r.uncompressedSize;
                return ut(e, new Error(O));
              }
            }
            if (e.decodeStrings) {
              e.strictFileNames || (r.fileName = r.fileName.replace(/\\/g, "/"));
              var k = nv(r.fileName, e.validateFileNameOptions);
              if (k != null) return ut(e, new Error(k));
            }
            e.emit("entry", r), e.lazyEntries || e._readEntry();
          }
        });
      }
    });
  }
};
sn.prototype.openReadStream = function(e, t, n) {
  var r = this, i = 0, a = e.compressedSize;
  if (n == null)
    n = t, t = {};
  else {
    if (t.decrypt != null) {
      if (!e.isEncrypted())
        throw new Error("options.decrypt can only be specified for encrypted entries");
      if (t.decrypt !== !1) throw new Error("invalid options.decrypt value: " + t.decrypt);
      if (e.isCompressed() && t.decompress !== !1)
        throw new Error("entry is encrypted and compressed, and options.decompress !== false");
    }
    if (t.decompress != null) {
      if (!e.isCompressed())
        throw new Error("options.decompress can only be specified for compressed entries");
      if (!(t.decompress === !1 || t.decompress === !0))
        throw new Error("invalid options.decompress value: " + t.decompress);
    }
    if (t.start != null || t.end != null) {
      if (e.isCompressed() && t.decompress !== !1)
        throw new Error("start/end range not allowed for compressed entry without options.decompress === false");
      if (e.isEncrypted() && t.decrypt !== !1)
        throw new Error("start/end range not allowed for encrypted entry without options.decrypt === false");
    }
    if (t.start != null) {
      if (i = t.start, i < 0) throw new Error("options.start < 0");
      if (i > e.compressedSize) throw new Error("options.start > entry.compressedSize");
    }
    if (t.end != null) {
      if (a = t.end, a < 0) throw new Error("options.end < 0");
      if (a > e.compressedSize) throw new Error("options.end > entry.compressedSize");
      if (a < i) throw new Error("options.end < options.start");
    }
  }
  if (!r.isOpen) return n(new Error("closed"));
  if (e.isEncrypted() && t.decrypt !== !1)
    return n(new Error("entry is encrypted, and options.decrypt !== false"));
  r.reader.ref();
  var o = _t(30);
  Er(r.reader, o, 0, o.length, e.relativeOffsetOfLocalHeader, function(c) {
    try {
      if (c) return n(c);
      var s = o.readUInt32LE(0);
      if (s !== 67324752)
        return n(new Error("invalid local file header signature: 0x" + s.toString(16)));
      var u = o.readUInt16LE(26), l = o.readUInt16LE(28), p = e.relativeOffsetOfLocalHeader + o.length + u + l, d;
      if (e.compressionMethod === 0)
        d = !1;
      else if (e.compressionMethod === 8)
        d = t.decompress != null ? t.decompress : !0;
      else
        return n(new Error("unsupported compression method: " + e.compressionMethod));
      var m = p, g = m + e.compressedSize;
      if (e.compressedSize !== 0 && g > r.fileSize)
        return n(new Error("file data overflows file bounds: " + m + " + " + e.compressedSize + " > " + r.fileSize));
      var v = r.reader.createReadStream({
        start: m + i,
        end: m + a
      }), y = v;
      if (d) {
        var x = !1, w = NS.createInflateRaw();
        v.on("error", function(A) {
          setImmediate(function() {
            x || w.emit("error", A);
          });
        }), v.pipe(w), r.validateEntrySizes ? (y = new zi(e.uncompressedSize), w.on("error", function(A) {
          setImmediate(function() {
            x || y.emit("error", A);
          });
        }), w.pipe(y)) : y = w, y.destroy = function() {
          x = !0, w !== y && w.unpipe(y), v.unpipe(w), v.destroy();
        };
      }
      n(null, y);
    } finally {
      r.reader.unref();
    }
  });
};
function qi() {
}
qi.prototype.getLastModDate = function() {
  return tv(this.lastModFileDate, this.lastModFileTime);
};
qi.prototype.isEncrypted = function() {
  return (this.generalPurposeBitFlag & 1) !== 0;
};
qi.prototype.isCompressed = function() {
  return this.compressionMethod === 8;
};
function tv(e, t) {
  var n = e & 31, r = (e >> 5 & 15) - 1, i = (e >> 9 & 127) + 1980, a = 0, o = (t & 31) * 2, c = t >> 5 & 63, s = t >> 11 & 31;
  return new Date(i, r, n, s, c, o, a);
}
function nv(e) {
  return e.indexOf("\\") !== -1 ? "invalid characters in fileName: " + e : /^[a-zA-Z]:/.test(e) || /^\//.test(e) ? "absolute path: " + e : e.split("/").indexOf("..") !== -1 ? "invalid relative path: " + e : null;
}
function Er(e, t, n, r, i, a) {
  if (r === 0)
    return setImmediate(function() {
      a(null, _t(0));
    });
  e.read(t, n, r, i, function(o, c) {
    if (o) return a(o);
    if (c < r)
      return a(new Error("unexpected EOF"));
    a();
  });
}
Vo.inherits(zi, Z0);
function zi(e) {
  Z0.call(this), this.actualByteCount = 0, this.expectedByteCount = e;
}
zi.prototype._transform = function(e, t, n) {
  if (this.actualByteCount += e.length, this.actualByteCount > this.expectedByteCount) {
    var r = "too many bytes in the stream. expected " + this.expectedByteCount + ". got at least " + this.actualByteCount;
    return n(new Error(r));
  }
  n(null, e);
};
zi.prototype._flush = function(e) {
  if (this.actualByteCount < this.expectedByteCount) {
    var t = "not enough bytes in the stream. expected " + this.expectedByteCount + ". got only " + this.actualByteCount;
    return e(new Error(t));
  }
  e();
};
Vo.inherits(hn, Yo);
function hn() {
  Yo.call(this), this.refCount = 0;
}
hn.prototype.ref = function() {
  this.refCount += 1;
};
hn.prototype.unref = function() {
  var e = this;
  if (e.refCount -= 1, e.refCount > 0) return;
  if (e.refCount < 0) throw new Error("invalid unref");
  e.close(t);
  function t(n) {
    if (n) return e.emit("error", n);
    e.emit("close");
  }
};
hn.prototype.createReadStream = function(e) {
  var t = e.start, n = e.end;
  if (t === n) {
    var r = new uu();
    return setImmediate(function() {
      r.end();
    }), r;
  }
  var i = this._readStreamForRange(t, n), a = !1, o = new Xo(this);
  i.on("error", function(s) {
    setImmediate(function() {
      a || o.emit("error", s);
    });
  }), o.destroy = function() {
    i.unpipe(o), o.unref(), i.destroy();
  };
  var c = new zi(n - t);
  return o.on("error", function(s) {
    setImmediate(function() {
      a || c.emit("error", s);
    });
  }), c.destroy = function() {
    a = !0, o.unpipe(c), o.destroy();
  }, i.pipe(o).pipe(c);
};
hn.prototype._readStreamForRange = function(e, t) {
  throw new Error("not implemented");
};
hn.prototype.read = function(e, t, n, r, i) {
  var a = this.createReadStream({ start: r, end: r + n }), o = new LS(), c = 0;
  o._write = function(s, u, l) {
    s.copy(e, t + c, 0, s.length), c += s.length, l();
  }, o.on("finish", i), a.on("error", function(s) {
    i(s);
  }), a.pipe(o);
};
hn.prototype.close = function(e) {
  setImmediate(e);
};
Vo.inherits(Xo, uu);
function Xo(e) {
  uu.call(this), this.context = e, this.context.ref(), this.unreffedYet = !1;
}
Xo.prototype._flush = function(e) {
  this.unref(), e();
};
Xo.prototype.unref = function(e) {
  this.unreffedYet || (this.unreffedYet = !0, this.context.unref());
};
var jS = "\0☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼ !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~⌂ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ";
function Va(e, t, n, r) {
  if (r)
    return e.toString("utf8", t, n);
  for (var i = "", a = t; a < n; a++)
    i += jS[e[a]];
  return i;
}
function _r(e, t) {
  var n = e.readUInt32LE(t), r = e.readUInt32LE(t + 4);
  return r * 4294967296 + n;
}
var _t;
typeof Buffer.allocUnsafe == "function" ? _t = function(e) {
  return Buffer.allocUnsafe(e);
} : _t = function(e) {
  return new Buffer(e);
};
function oo(e) {
  if (e) throw e;
}
const MS = ie;
let qS = class extends MS.Writable {
  emit(t, n) {
    if (t === "error") {
      const r = n;
      r.name === "Error" && (r.name = this.constructor.name + "Error");
    }
    super.emit.apply(this, arguments);
  }
};
var zS = qS, fc = { exports: {} }, dc, Ff;
function Vn() {
  if (Ff) return dc;
  Ff = 1;
  var e = Nt, t = e.Buffer, n = {}, r;
  for (r in e)
    e.hasOwnProperty(r) && (r === "SlowBuffer" || r === "Buffer" || (n[r] = e[r]));
  var i = n.Buffer = {};
  for (r in t)
    t.hasOwnProperty(r) && (r === "allocUnsafe" || r === "allocUnsafeSlow" || (i[r] = t[r]));
  if (n.Buffer.prototype = t.prototype, (!i.from || i.from === Uint8Array.from) && (i.from = function(a, o, c) {
    if (typeof a == "number")
      throw new TypeError('The "value" argument must not be of type number. Received type ' + typeof a);
    if (a && typeof a.length > "u")
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof a);
    return t(a, o, c);
  }), i.alloc || (i.alloc = function(a, o, c) {
    if (typeof a != "number")
      throw new TypeError('The "size" argument must be of type number. Received type ' + typeof a);
    if (a < 0 || a >= 2 * (1 << 30))
      throw new RangeError('The value "' + a + '" is invalid for option "size"');
    var s = t(a);
    return !o || o.length === 0 ? s.fill(0) : typeof c == "string" ? s.fill(o, c) : s.fill(o), s;
  }), !n.kStringMaxLength)
    try {
      n.kStringMaxLength = process.binding("buffer").kStringMaxLength;
    } catch {
    }
  return n.constants || (n.constants = {
    MAX_LENGTH: n.kMaxLength
  }, n.kStringMaxLength && (n.constants.MAX_STRING_LENGTH = n.kStringMaxLength)), dc = n, dc;
}
var ba = {}, Nf;
function HS() {
  if (Nf) return ba;
  Nf = 1;
  var e = "\uFEFF";
  ba.PrependBOM = t;
  function t(r, i) {
    this.encoder = r, this.addBOM = !0;
  }
  t.prototype.write = function(r) {
    return this.addBOM && (r = e + r, this.addBOM = !1), this.encoder.write(r);
  }, t.prototype.end = function() {
    return this.encoder.end();
  }, ba.StripBOM = n;
  function n(r, i) {
    this.decoder = r, this.pass = !1, this.options = i || {};
  }
  return n.prototype.write = function(r) {
    var i = this.decoder.write(r);
    return this.pass || !i || (i[0] === e && (i = i.slice(1), typeof this.options.stripBOM == "function" && this.options.stripBOM()), this.pass = !0), i;
  }, n.prototype.end = function() {
    return this.decoder.end();
  }, ba;
}
var hc = {}, mc, kf;
function GS() {
  if (kf) return mc;
  kf = 1;
  var e = Vn().Buffer;
  mc = {
    // Encodings
    utf8: { type: "_internal", bomAware: !0 },
    cesu8: { type: "_internal", bomAware: !0 },
    unicode11utf8: "utf8",
    ucs2: { type: "_internal", bomAware: !0 },
    utf16le: "ucs2",
    binary: { type: "_internal" },
    base64: { type: "_internal" },
    hex: { type: "_internal" },
    // Codec.
    _internal: t
  };
  function t(s, u) {
    this.enc = s.encodingName, this.bomAware = s.bomAware, this.enc === "base64" ? this.encoder = a : this.enc === "cesu8" && (this.enc = "utf8", this.encoder = o, e.from("eda0bdedb2a9", "hex").toString() !== "💩" && (this.decoder = c, this.defaultCharUnicode = u.defaultCharUnicode));
  }
  t.prototype.encoder = i, t.prototype.decoder = r;
  var n = kl.StringDecoder;
  n.prototype.end || (n.prototype.end = function() {
  });
  function r(s, u) {
    n.call(this, u.enc);
  }
  r.prototype = n.prototype;
  function i(s, u) {
    this.enc = u.enc;
  }
  i.prototype.write = function(s) {
    return e.from(s, this.enc);
  }, i.prototype.end = function() {
  };
  function a(s, u) {
    this.prevStr = "";
  }
  a.prototype.write = function(s) {
    s = this.prevStr + s;
    var u = s.length - s.length % 4;
    return this.prevStr = s.slice(u), s = s.slice(0, u), e.from(s, "base64");
  }, a.prototype.end = function() {
    return e.from(this.prevStr, "base64");
  };
  function o(s, u) {
  }
  o.prototype.write = function(s) {
    for (var u = e.alloc(s.length * 3), l = 0, p = 0; p < s.length; p++) {
      var d = s.charCodeAt(p);
      d < 128 ? u[l++] = d : d < 2048 ? (u[l++] = 192 + (d >>> 6), u[l++] = 128 + (d & 63)) : (u[l++] = 224 + (d >>> 12), u[l++] = 128 + (d >>> 6 & 63), u[l++] = 128 + (d & 63));
    }
    return u.slice(0, l);
  }, o.prototype.end = function() {
  };
  function c(s, u) {
    this.acc = 0, this.contBytes = 0, this.accBytes = 0, this.defaultCharUnicode = u.defaultCharUnicode;
  }
  return c.prototype.write = function(s) {
    for (var u = this.acc, l = this.contBytes, p = this.accBytes, d = "", m = 0; m < s.length; m++) {
      var g = s[m];
      (g & 192) !== 128 ? (l > 0 && (d += this.defaultCharUnicode, l = 0), g < 128 ? d += String.fromCharCode(g) : g < 224 ? (u = g & 31, l = 1, p = 1) : g < 240 ? (u = g & 15, l = 2, p = 1) : d += this.defaultCharUnicode) : l > 0 ? (u = u << 6 | g & 63, l--, p++, l === 0 && (p === 2 && u < 128 && u > 0 ? d += this.defaultCharUnicode : p === 3 && u < 2048 ? d += this.defaultCharUnicode : d += String.fromCharCode(u))) : d += this.defaultCharUnicode;
    }
    return this.acc = u, this.contBytes = l, this.accBytes = p, d;
  }, c.prototype.end = function() {
    var s = 0;
    return this.contBytes > 0 && (s += this.defaultCharUnicode), s;
  }, mc;
}
var Pt = {}, Lf;
function WS() {
  if (Lf) return Pt;
  Lf = 1;
  var e = Vn().Buffer;
  Pt._utf32 = t;
  function t(s, u) {
    this.iconv = u, this.bomAware = !0, this.isLE = s.isLE;
  }
  Pt.utf32le = { type: "_utf32", isLE: !0 }, Pt.utf32be = { type: "_utf32", isLE: !1 }, Pt.ucs4le = "utf32le", Pt.ucs4be = "utf32be", t.prototype.encoder = n, t.prototype.decoder = r;
  function n(s, u) {
    this.isLE = u.isLE, this.highSurrogate = 0;
  }
  n.prototype.write = function(s) {
    for (var u = e.from(s, "ucs2"), l = e.alloc(u.length * 2), p = this.isLE ? l.writeUInt32LE : l.writeUInt32BE, d = 0, m = 0; m < u.length; m += 2) {
      var g = u.readUInt16LE(m), v = 55296 <= g && g < 56320, y = 56320 <= g && g < 57344;
      if (this.highSurrogate)
        if (v || !y)
          p.call(l, this.highSurrogate, d), d += 4;
        else {
          var x = (this.highSurrogate - 55296 << 10 | g - 56320) + 65536;
          p.call(l, x, d), d += 4, this.highSurrogate = 0;
          continue;
        }
      v ? this.highSurrogate = g : (p.call(l, g, d), d += 4, this.highSurrogate = 0);
    }
    return d < l.length && (l = l.slice(0, d)), l;
  }, n.prototype.end = function() {
    if (this.highSurrogate) {
      var s = e.alloc(4);
      return this.isLE ? s.writeUInt32LE(this.highSurrogate, 0) : s.writeUInt32BE(this.highSurrogate, 0), this.highSurrogate = 0, s;
    }
  };
  function r(s, u) {
    this.isLE = u.isLE, this.badChar = u.iconv.defaultCharUnicode.charCodeAt(0), this.overflow = null;
  }
  r.prototype.write = function(s) {
    if (s.length === 0)
      return "";
    this.overflow && (s = e.concat([this.overflow, s]));
    var u = s.length - s.length % 4;
    s.length !== u ? (this.overflow = s.slice(u), s = s.slice(0, u)) : this.overflow = null;
    for (var l = e.alloc(u), p = 0, d = 0; d < u; d += 4) {
      var m = this.isLE ? s.readUInt32LE(d) : s.readUInt32BE(d);
      if (m < 65536)
        l.writeUInt16LE(m, p), p += 2;
      else if (m > 1114111)
        l.writeUInt16LE(this.badChar, p), p += 2;
      else {
        m -= 65536;
        var g = 55296 | m >> 10, v = 56320 + (m & 1023);
        l.writeUInt16LE(g, p), p += 2, l.writeUInt16LE(v, p), p += 2;
      }
    }
    return l.slice(0, p).toString("ucs2");
  }, r.prototype.end = function() {
    this.overflow = null;
  }, Pt.utf32 = i, Pt.ucs4 = i;
  function i(s, u) {
    this.iconv = u;
  }
  i.prototype.encoder = a, i.prototype.decoder = o;
  function a(s, u) {
    s = s || {}, s.addBOM === void 0 && (s.addBOM = !0), this.encoder = u.iconv.getEncoder(s.defaultEncoding || "utf-32le", s);
  }
  a.prototype.write = function(s) {
    return this.encoder.write(s);
  }, a.prototype.end = function() {
    return this.encoder.end();
  };
  function o(s, u) {
    this.decoder = null, this.initialBytes = [], this.initialBytesLen = 0, this.options = s || {}, this.iconv = u.iconv;
  }
  o.prototype.write = function(s) {
    if (!this.decoder) {
      if (this.initialBytes.push(s), this.initialBytesLen += s.length, this.initialBytesLen < 32)
        return "";
      var u = e.concat(this.initialBytes), l = c(u, this.options.defaultEncoding);
      this.decoder = this.iconv.getDecoder(l, this.options), this.initialBytes.length = this.initialBytesLen = 0;
    }
    return this.decoder.write(s);
  }, o.prototype.end = function() {
    if (!this.decoder) {
      var s = e.concat(this.initialBytes), u = c(s, this.options.defaultEncoding);
      this.decoder = this.iconv.getDecoder(u, this.options);
      var l = this.decoder.write(s), p = this.decoder.end();
      return p ? l + p : l;
    }
    return this.decoder.end();
  };
  function c(s, u) {
    var l = u || "utf-32le";
    if (s.length >= 4)
      if (s.readUInt32BE(0) === 65279)
        l = "utf-32be";
      else if (s.readUInt32LE(0) === 65279)
        l = "utf-32le";
      else {
        for (var p = 0, d = 0, m = 0, g = 0, v = Math.min(s.length - s.length % 4, 128), y = 0; y < v; y += 4) {
          var x = s[y], w = s[y + 1], A = s[y + 2], O = s[y + 3];
          (x !== 0 || w > 16) && ++d, (O !== 0 || A > 16) && ++p, x === 0 && w === 0 && A === 0 && O !== 0 && g++, x !== 0 && w === 0 && A === 0 && O === 0 && m++;
        }
        d < p ? l = "utf-32be" : p < d && (l = "utf-32le"), g > m ? l = "utf-32be" : g < m && (l = "utf-32le");
      }
    return l;
  }
  return Pt;
}
var wa = {}, Uf;
function VS() {
  if (Uf) return wa;
  Uf = 1;
  var e = Vn().Buffer;
  wa.utf16be = t;
  function t() {
  }
  t.prototype.encoder = n, t.prototype.decoder = r, t.prototype.bomAware = !0;
  function n() {
  }
  n.prototype.write = function(s) {
    for (var u = e.from(s, "ucs2"), l = 0; l < u.length; l += 2) {
      var p = u[l];
      u[l] = u[l + 1], u[l + 1] = p;
    }
    return u;
  }, n.prototype.end = function() {
  };
  function r() {
    this.overflowByte = -1;
  }
  r.prototype.write = function(s) {
    if (s.length == 0)
      return "";
    var u = e.alloc(s.length + 1), l = 0, p = 0;
    for (this.overflowByte !== -1 && (u[0] = s[0], u[1] = this.overflowByte, l = 1, p = 2); l < s.length - 1; l += 2, p += 2)
      u[p] = s[l + 1], u[p + 1] = s[l];
    return this.overflowByte = l == s.length - 1 ? s[s.length - 1] : -1, u.slice(0, p).toString("ucs2");
  }, r.prototype.end = function() {
  }, wa.utf16 = i;
  function i(s, u) {
    this.iconv = u;
  }
  i.prototype.encoder = a, i.prototype.decoder = o;
  function a(s, u) {
    s = s || {}, s.addBOM === void 0 && (s.addBOM = !0), this.encoder = u.iconv.getEncoder("utf-16le", s);
  }
  a.prototype.write = function(s) {
    return this.encoder.write(s);
  }, a.prototype.end = function() {
    return this.encoder.end();
  };
  function o(s, u) {
    this.decoder = null, this.initialBytes = [], this.initialBytesLen = 0, this.options = s || {}, this.iconv = u.iconv;
  }
  o.prototype.write = function(s) {
    if (!this.decoder) {
      if (this.initialBytes.push(s), this.initialBytesLen += s.length, this.initialBytesLen < 16)
        return "";
      var s = e.concat(this.initialBytes), u = c(s, this.options.defaultEncoding);
      this.decoder = this.iconv.getDecoder(u, this.options), this.initialBytes.length = this.initialBytesLen = 0;
    }
    return this.decoder.write(s);
  }, o.prototype.end = function() {
    if (!this.decoder) {
      var s = e.concat(this.initialBytes), u = c(s, this.options.defaultEncoding);
      this.decoder = this.iconv.getDecoder(u, this.options);
      var l = this.decoder.write(s), p = this.decoder.end();
      return p ? l + p : l;
    }
    return this.decoder.end();
  };
  function c(s, u) {
    var l = u || "utf-16le";
    if (s.length >= 2)
      if (s[0] == 254 && s[1] == 255)
        l = "utf-16be";
      else if (s[0] == 255 && s[1] == 254)
        l = "utf-16le";
      else {
        for (var p = 0, d = 0, m = Math.min(s.length - s.length % 2, 64), g = 0; g < m; g += 2)
          s[g] === 0 && s[g + 1] !== 0 && d++, s[g] !== 0 && s[g + 1] === 0 && p++;
        d > p ? l = "utf-16be" : d < p && (l = "utf-16le");
      }
    return l;
  }
  return wa;
}
var Yr = {}, Bf;
function YS() {
  if (Bf) return Yr;
  Bf = 1;
  var e = Vn().Buffer;
  Yr.utf7 = t, Yr.unicode11utf7 = "utf7";
  function t(v, y) {
    this.iconv = y;
  }
  t.prototype.encoder = r, t.prototype.decoder = i, t.prototype.bomAware = !0;
  var n = /[^A-Za-z0-9'\(\),-\.\/:\? \n\r\t]+/g;
  function r(v, y) {
    this.iconv = y.iconv;
  }
  r.prototype.write = function(v) {
    return e.from(v.replace(n, (function(y) {
      return "+" + (y === "+" ? "" : this.iconv.encode(y, "utf16-be").toString("base64").replace(/=+$/, "")) + "-";
    }).bind(this)));
  }, r.prototype.end = function() {
  };
  function i(v, y) {
    this.iconv = y.iconv, this.inBase64 = !1, this.base64Accum = "";
  }
  for (var a = /[A-Za-z0-9\/+]/, o = [], c = 0; c < 256; c++)
    o[c] = a.test(String.fromCharCode(c));
  var s = 43, u = 45, l = 38;
  i.prototype.write = function(v) {
    for (var y = "", x = 0, w = this.inBase64, A = this.base64Accum, O = 0; O < v.length; O++)
      if (!w)
        v[O] == s && (y += this.iconv.decode(v.slice(x, O), "ascii"), x = O + 1, w = !0);
      else if (!o[v[O]]) {
        if (O == x && v[O] == u)
          y += "+";
        else {
          var k = A + v.slice(x, O).toString();
          y += this.iconv.decode(e.from(k, "base64"), "utf16-be");
        }
        v[O] != u && O--, x = O + 1, w = !1, A = "";
      }
    if (!w)
      y += this.iconv.decode(v.slice(x), "ascii");
    else {
      var k = A + v.slice(x).toString(), q = k.length - k.length % 8;
      A = k.slice(q), k = k.slice(0, q), y += this.iconv.decode(e.from(k, "base64"), "utf16-be");
    }
    return this.inBase64 = w, this.base64Accum = A, y;
  }, i.prototype.end = function() {
    var v = "";
    return this.inBase64 && this.base64Accum.length > 0 && (v = this.iconv.decode(e.from(this.base64Accum, "base64"), "utf16-be")), this.inBase64 = !1, this.base64Accum = "", v;
  }, Yr.utf7imap = p;
  function p(v, y) {
    this.iconv = y;
  }
  p.prototype.encoder = d, p.prototype.decoder = m, p.prototype.bomAware = !0;
  function d(v, y) {
    this.iconv = y.iconv, this.inBase64 = !1, this.base64Accum = e.alloc(6), this.base64AccumIdx = 0;
  }
  d.prototype.write = function(v) {
    for (var y = this.inBase64, x = this.base64Accum, w = this.base64AccumIdx, A = e.alloc(v.length * 5 + 10), O = 0, k = 0; k < v.length; k++) {
      var q = v.charCodeAt(k);
      32 <= q && q <= 126 ? (y && (w > 0 && (O += A.write(x.slice(0, w).toString("base64").replace(/\//g, ",").replace(/=+$/, ""), O), w = 0), A[O++] = u, y = !1), y || (A[O++] = q, q === l && (A[O++] = u))) : (y || (A[O++] = l, y = !0), y && (x[w++] = q >> 8, x[w++] = q & 255, w == x.length && (O += A.write(x.toString("base64").replace(/\//g, ","), O), w = 0)));
    }
    return this.inBase64 = y, this.base64AccumIdx = w, A.slice(0, O);
  }, d.prototype.end = function() {
    var v = e.alloc(10), y = 0;
    return this.inBase64 && (this.base64AccumIdx > 0 && (y += v.write(this.base64Accum.slice(0, this.base64AccumIdx).toString("base64").replace(/\//g, ",").replace(/=+$/, ""), y), this.base64AccumIdx = 0), v[y++] = u, this.inBase64 = !1), v.slice(0, y);
  };
  function m(v, y) {
    this.iconv = y.iconv, this.inBase64 = !1, this.base64Accum = "";
  }
  var g = o.slice();
  return g[44] = !0, m.prototype.write = function(v) {
    for (var y = "", x = 0, w = this.inBase64, A = this.base64Accum, O = 0; O < v.length; O++)
      if (!w)
        v[O] == l && (y += this.iconv.decode(v.slice(x, O), "ascii"), x = O + 1, w = !0);
      else if (!g[v[O]]) {
        if (O == x && v[O] == u)
          y += "&";
        else {
          var k = A + v.slice(x, O).toString().replace(/,/g, "/");
          y += this.iconv.decode(e.from(k, "base64"), "utf16-be");
        }
        v[O] != u && O--, x = O + 1, w = !1, A = "";
      }
    if (!w)
      y += this.iconv.decode(v.slice(x), "ascii");
    else {
      var k = A + v.slice(x).toString().replace(/,/g, "/"), q = k.length - k.length % 8;
      A = k.slice(q), k = k.slice(0, q), y += this.iconv.decode(e.from(k, "base64"), "utf16-be");
    }
    return this.inBase64 = w, this.base64Accum = A, y;
  }, m.prototype.end = function() {
    var v = "";
    return this.inBase64 && this.base64Accum.length > 0 && (v = this.iconv.decode(e.from(this.base64Accum, "base64"), "utf16-be")), this.inBase64 = !1, this.base64Accum = "", v;
  }, Yr;
}
var vc = {}, jf;
function XS() {
  if (jf) return vc;
  jf = 1;
  var e = Vn().Buffer;
  vc._sbcs = t;
  function t(i, a) {
    if (!i)
      throw new Error("SBCS codec is called without the data.");
    if (!i.chars || i.chars.length !== 128 && i.chars.length !== 256)
      throw new Error("Encoding '" + i.type + "' has incorrect 'chars' (must be of len 128 or 256)");
    if (i.chars.length === 128) {
      for (var o = "", c = 0; c < 128; c++)
        o += String.fromCharCode(c);
      i.chars = o + i.chars;
    }
    this.decodeBuf = e.from(i.chars, "ucs2");
    for (var s = e.alloc(65536, a.defaultCharSingleByte.charCodeAt(0)), c = 0; c < i.chars.length; c++)
      s[i.chars.charCodeAt(c)] = c;
    this.encodeBuf = s;
  }
  t.prototype.encoder = n, t.prototype.decoder = r;
  function n(i, a) {
    this.encodeBuf = a.encodeBuf;
  }
  n.prototype.write = function(i) {
    for (var a = e.alloc(i.length), o = 0; o < i.length; o++)
      a[o] = this.encodeBuf[i.charCodeAt(o)];
    return a;
  }, n.prototype.end = function() {
  };
  function r(i, a) {
    this.decodeBuf = a.decodeBuf;
  }
  return r.prototype.write = function(i) {
    for (var a = this.decodeBuf, o = e.alloc(i.length * 2), c = 0, s = 0, u = 0; u < i.length; u++)
      c = i[u] * 2, s = u * 2, o[s] = a[c], o[s + 1] = a[c + 1];
    return o.toString("ucs2");
  }, r.prototype.end = function() {
  }, vc;
}
var gc, Mf;
function KS() {
  return Mf || (Mf = 1, gc = {
    // Not supported by iconv, not sure why.
    10029: "maccenteuro",
    maccenteuro: {
      type: "_sbcs",
      chars: "ÄĀāÉĄÖÜáąČäčĆćéŹźĎíďĒēĖóėôöõúĚěü†°Ę£§•¶ß®©™ę¨≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ¬√ńŇ∆«»… ňŐÕőŌ–—“”‘’÷◊ōŔŕŘ‹›řŖŗŠ‚„šŚśÁŤťÍŽžŪÓÔūŮÚůŰűŲųÝýķŻŁżĢˇ"
    },
    808: "cp808",
    ibm808: "cp808",
    cp808: {
      type: "_sbcs",
      chars: "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёЄєЇїЎў°∙·√№€■ "
    },
    mik: {
      type: "_sbcs",
      chars: "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя└┴┬├─┼╣║╚╔╩╦╠═╬┐░▒▓│┤№§╗╝┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
    },
    cp720: {
      type: "_sbcs",
      chars: "éâàçêëèïîّْô¤ـûùءآأؤ£إئابةتثجحخدذرزسشص«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀ضطظعغفµقكلمنهوىي≡ًٌٍَُِ≈°∙·√ⁿ²■ "
    },
    // Aliases of generated encodings.
    ascii8bit: "ascii",
    usascii: "ascii",
    ansix34: "ascii",
    ansix341968: "ascii",
    ansix341986: "ascii",
    csascii: "ascii",
    cp367: "ascii",
    ibm367: "ascii",
    isoir6: "ascii",
    iso646us: "ascii",
    iso646irv: "ascii",
    us: "ascii",
    latin1: "iso88591",
    latin2: "iso88592",
    latin3: "iso88593",
    latin4: "iso88594",
    latin5: "iso88599",
    latin6: "iso885910",
    latin7: "iso885913",
    latin8: "iso885914",
    latin9: "iso885915",
    latin10: "iso885916",
    csisolatin1: "iso88591",
    csisolatin2: "iso88592",
    csisolatin3: "iso88593",
    csisolatin4: "iso88594",
    csisolatincyrillic: "iso88595",
    csisolatinarabic: "iso88596",
    csisolatingreek: "iso88597",
    csisolatinhebrew: "iso88598",
    csisolatin5: "iso88599",
    csisolatin6: "iso885910",
    l1: "iso88591",
    l2: "iso88592",
    l3: "iso88593",
    l4: "iso88594",
    l5: "iso88599",
    l6: "iso885910",
    l7: "iso885913",
    l8: "iso885914",
    l9: "iso885915",
    l10: "iso885916",
    isoir14: "iso646jp",
    isoir57: "iso646cn",
    isoir100: "iso88591",
    isoir101: "iso88592",
    isoir109: "iso88593",
    isoir110: "iso88594",
    isoir144: "iso88595",
    isoir127: "iso88596",
    isoir126: "iso88597",
    isoir138: "iso88598",
    isoir148: "iso88599",
    isoir157: "iso885910",
    isoir166: "tis620",
    isoir179: "iso885913",
    isoir199: "iso885914",
    isoir203: "iso885915",
    isoir226: "iso885916",
    cp819: "iso88591",
    ibm819: "iso88591",
    cyrillic: "iso88595",
    arabic: "iso88596",
    arabic8: "iso88596",
    ecma114: "iso88596",
    asmo708: "iso88596",
    greek: "iso88597",
    greek8: "iso88597",
    ecma118: "iso88597",
    elot928: "iso88597",
    hebrew: "iso88598",
    hebrew8: "iso88598",
    turkish: "iso88599",
    turkish8: "iso88599",
    thai: "iso885911",
    thai8: "iso885911",
    celtic: "iso885914",
    celtic8: "iso885914",
    isoceltic: "iso885914",
    tis6200: "tis620",
    tis62025291: "tis620",
    tis62025330: "tis620",
    1e4: "macroman",
    10006: "macgreek",
    10007: "maccyrillic",
    10079: "maciceland",
    10081: "macturkish",
    cspc8codepage437: "cp437",
    cspc775baltic: "cp775",
    cspc850multilingual: "cp850",
    cspcp852: "cp852",
    cspc862latinhebrew: "cp862",
    cpgr: "cp869",
    msee: "cp1250",
    mscyrl: "cp1251",
    msansi: "cp1252",
    msgreek: "cp1253",
    msturk: "cp1254",
    mshebr: "cp1255",
    msarab: "cp1256",
    winbaltrim: "cp1257",
    cp20866: "koi8r",
    20866: "koi8r",
    ibm878: "koi8r",
    cskoi8r: "koi8r",
    cp21866: "koi8u",
    21866: "koi8u",
    ibm1168: "koi8u",
    strk10482002: "rk1048",
    tcvn5712: "tcvn",
    tcvn57121: "tcvn",
    gb198880: "iso646cn",
    cn: "iso646cn",
    csiso14jisc6220ro: "iso646jp",
    jisc62201969ro: "iso646jp",
    jp: "iso646jp",
    cshproman8: "hproman8",
    r8: "hproman8",
    roman8: "hproman8",
    xroman8: "hproman8",
    ibm1051: "hproman8",
    mac: "macintosh",
    csmacintosh: "macintosh"
  }), gc;
}
var xc, qf;
function JS() {
  return qf || (qf = 1, xc = {
    437: "cp437",
    737: "cp737",
    775: "cp775",
    850: "cp850",
    852: "cp852",
    855: "cp855",
    856: "cp856",
    857: "cp857",
    858: "cp858",
    860: "cp860",
    861: "cp861",
    862: "cp862",
    863: "cp863",
    864: "cp864",
    865: "cp865",
    866: "cp866",
    869: "cp869",
    874: "windows874",
    922: "cp922",
    1046: "cp1046",
    1124: "cp1124",
    1125: "cp1125",
    1129: "cp1129",
    1133: "cp1133",
    1161: "cp1161",
    1162: "cp1162",
    1163: "cp1163",
    1250: "windows1250",
    1251: "windows1251",
    1252: "windows1252",
    1253: "windows1253",
    1254: "windows1254",
    1255: "windows1255",
    1256: "windows1256",
    1257: "windows1257",
    1258: "windows1258",
    28591: "iso88591",
    28592: "iso88592",
    28593: "iso88593",
    28594: "iso88594",
    28595: "iso88595",
    28596: "iso88596",
    28597: "iso88597",
    28598: "iso88598",
    28599: "iso88599",
    28600: "iso885910",
    28601: "iso885911",
    28603: "iso885913",
    28604: "iso885914",
    28605: "iso885915",
    28606: "iso885916",
    windows874: {
      type: "_sbcs",
      chars: "€����…�����������‘’“”•–—�������� กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"
    },
    win874: "windows874",
    cp874: "windows874",
    windows1250: {
      type: "_sbcs",
      chars: "€�‚�„…†‡�‰Š‹ŚŤŽŹ�‘’“”•–—�™š›śťžź ˇ˘Ł¤Ą¦§¨©Ş«¬­®Ż°±˛ł´µ¶·¸ąş»Ľ˝ľżŔÁÂĂÄĹĆÇČÉĘËĚÍÎĎĐŃŇÓÔŐÖ×ŘŮÚŰÜÝŢßŕáâăäĺćçčéęëěíîďđńňóôőö÷řůúűüýţ˙"
    },
    win1250: "windows1250",
    cp1250: "windows1250",
    windows1251: {
      type: "_sbcs",
      chars: "ЂЃ‚ѓ„…†‡€‰Љ‹ЊЌЋЏђ‘’“”•–—�™љ›њќћџ ЎўЈ¤Ґ¦§Ё©Є«¬­®Ї°±Ііґµ¶·ё№є»јЅѕїАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя"
    },
    win1251: "windows1251",
    cp1251: "windows1251",
    windows1252: {
      type: "_sbcs",
      chars: "€�‚ƒ„…†‡ˆ‰Š‹Œ�Ž��‘’“”•–—˜™š›œ�žŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
    },
    win1252: "windows1252",
    cp1252: "windows1252",
    windows1253: {
      type: "_sbcs",
      chars: "€�‚ƒ„…†‡�‰�‹�����‘’“”•–—�™�›���� ΅Ά£¤¥¦§¨©�«¬­®―°±²³΄µ¶·ΈΉΊ»Ό½ΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ�ΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώ�"
    },
    win1253: "windows1253",
    cp1253: "windows1253",
    windows1254: {
      type: "_sbcs",
      chars: "€�‚ƒ„…†‡ˆ‰Š‹Œ����‘’“”•–—˜™š›œ��Ÿ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏĞÑÒÓÔÕÖ×ØÙÚÛÜİŞßàáâãäåæçèéêëìíîïğñòóôõö÷øùúûüışÿ"
    },
    win1254: "windows1254",
    cp1254: "windows1254",
    windows1255: {
      type: "_sbcs",
      chars: "€�‚ƒ„…†‡ˆ‰�‹�����‘’“”•–—˜™�›���� ¡¢£₪¥¦§¨©×«¬­®¯°±²³´µ¶·¸¹÷»¼½¾¿ְֱֲֳִֵֶַָֹֺֻּֽ־ֿ׀ׁׂ׃װױײ׳״�������אבגדהוזחטיךכלםמןנסעףפץצקרשת��‎‏�"
    },
    win1255: "windows1255",
    cp1255: "windows1255",
    windows1256: {
      type: "_sbcs",
      chars: "€پ‚ƒ„…†‡ˆ‰ٹ‹Œچژڈگ‘’“”•–—ک™ڑ›œ‌‍ں ،¢£¤¥¦§¨©ھ«¬­®¯°±²³´µ¶·¸¹؛»¼½¾؟ہءآأؤإئابةتثجحخدذرزسشصض×طظعغـفقكàلâمنهوçèéêëىيîïًٌٍَôُِ÷ّùْûü‎‏ے"
    },
    win1256: "windows1256",
    cp1256: "windows1256",
    windows1257: {
      type: "_sbcs",
      chars: "€�‚�„…†‡�‰�‹�¨ˇ¸�‘’“”•–—�™�›�¯˛� �¢£¤�¦§Ø©Ŗ«¬­®Æ°±²³´µ¶·ø¹ŗ»¼½¾æĄĮĀĆÄÅĘĒČÉŹĖĢĶĪĻŠŃŅÓŌÕÖ×ŲŁŚŪÜŻŽßąįāćäåęēčéźėģķīļšńņóōõö÷ųłśūüżž˙"
    },
    win1257: "windows1257",
    cp1257: "windows1257",
    windows1258: {
      type: "_sbcs",
      chars: "€�‚ƒ„…†‡ˆ‰�‹Œ����‘’“”•–—˜™�›œ��Ÿ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂĂÄÅÆÇÈÉÊË̀ÍÎÏĐÑ̉ÓÔƠÖ×ØÙÚÛÜỮßàáâăäåæçèéêë́íîïđṇ̃óôơö÷øùúûüư₫ÿ"
    },
    win1258: "windows1258",
    cp1258: "windows1258",
    iso88591: {
      type: "_sbcs",
      chars: " ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
    },
    cp28591: "iso88591",
    iso88592: {
      type: "_sbcs",
      chars: " Ą˘Ł¤ĽŚ§¨ŠŞŤŹ­ŽŻ°ą˛ł´ľśˇ¸šşťź˝žżŔÁÂĂÄĹĆÇČÉĘËĚÍÎĎĐŃŇÓÔŐÖ×ŘŮÚŰÜÝŢßŕáâăäĺćçčéęëěíîďđńňóôőö÷řůúűüýţ˙"
    },
    cp28592: "iso88592",
    iso88593: {
      type: "_sbcs",
      chars: " Ħ˘£¤�Ĥ§¨İŞĞĴ­�Ż°ħ²³´µĥ·¸ışğĵ½�żÀÁÂ�ÄĊĈÇÈÉÊËÌÍÎÏ�ÑÒÓÔĠÖ×ĜÙÚÛÜŬŜßàáâ�äċĉçèéêëìíîï�ñòóôġö÷ĝùúûüŭŝ˙"
    },
    cp28593: "iso88593",
    iso88594: {
      type: "_sbcs",
      chars: " ĄĸŖ¤ĨĻ§¨ŠĒĢŦ­Ž¯°ą˛ŗ´ĩļˇ¸šēģŧŊžŋĀÁÂÃÄÅÆĮČÉĘËĖÍÎĪĐŅŌĶÔÕÖ×ØŲÚÛÜŨŪßāáâãäåæįčéęëėíîīđņōķôõö÷øųúûüũū˙"
    },
    cp28594: "iso88594",
    iso88595: {
      type: "_sbcs",
      chars: " ЁЂЃЄЅІЇЈЉЊЋЌ­ЎЏАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя№ёђѓєѕіїјљњћќ§ўџ"
    },
    cp28595: "iso88595",
    iso88596: {
      type: "_sbcs",
      chars: " ���¤�������،­�������������؛���؟�ءآأؤإئابةتثجحخدذرزسشصضطظعغ�����ـفقكلمنهوىيًٌٍَُِّْ�������������"
    },
    cp28596: "iso88596",
    iso88597: {
      type: "_sbcs",
      chars: " ‘’£€₯¦§¨©ͺ«¬­�―°±²³΄΅Ά·ΈΉΊ»Ό½ΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ�ΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώ�"
    },
    cp28597: "iso88597",
    iso88598: {
      type: "_sbcs",
      chars: " �¢£¤¥¦§¨©×«¬­®¯°±²³´µ¶·¸¹÷»¼½¾��������������������������������‗אבגדהוזחטיךכלםמןנסעףפץצקרשת��‎‏�"
    },
    cp28598: "iso88598",
    iso88599: {
      type: "_sbcs",
      chars: " ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏĞÑÒÓÔÕÖ×ØÙÚÛÜİŞßàáâãäåæçèéêëìíîïğñòóôõö÷øùúûüışÿ"
    },
    cp28599: "iso88599",
    iso885910: {
      type: "_sbcs",
      chars: " ĄĒĢĪĨĶ§ĻĐŠŦŽ­ŪŊ°ąēģīĩķ·ļđšŧž―ūŋĀÁÂÃÄÅÆĮČÉĘËĖÍÎÏÐŅŌÓÔÕÖŨØŲÚÛÜÝÞßāáâãäåæįčéęëėíîïðņōóôõöũøųúûüýþĸ"
    },
    cp28600: "iso885910",
    iso885911: {
      type: "_sbcs",
      chars: " กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"
    },
    cp28601: "iso885911",
    iso885913: {
      type: "_sbcs",
      chars: " ”¢£¤„¦§Ø©Ŗ«¬­®Æ°±²³“µ¶·ø¹ŗ»¼½¾æĄĮĀĆÄÅĘĒČÉŹĖĢĶĪĻŠŃŅÓŌÕÖ×ŲŁŚŪÜŻŽßąįāćäåęēčéźėģķīļšńņóōõö÷ųłśūüżž’"
    },
    cp28603: "iso885913",
    iso885914: {
      type: "_sbcs",
      chars: " Ḃḃ£ĊċḊ§Ẁ©ẂḋỲ­®ŸḞḟĠġṀṁ¶ṖẁṗẃṠỳẄẅṡÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏŴÑÒÓÔÕÖṪØÙÚÛÜÝŶßàáâãäåæçèéêëìíîïŵñòóôõöṫøùúûüýŷÿ"
    },
    cp28604: "iso885914",
    iso885915: {
      type: "_sbcs",
      chars: " ¡¢£€¥Š§š©ª«¬­®¯°±²³Žµ¶·ž¹º»ŒœŸ¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
    },
    cp28605: "iso885915",
    iso885916: {
      type: "_sbcs",
      chars: " ĄąŁ€„Š§š©Ș«Ź­źŻ°±ČłŽ”¶·žčș»ŒœŸżÀÁÂĂÄĆÆÇÈÉÊËÌÍÎÏĐŃÒÓÔŐÖŚŰÙÚÛÜĘȚßàáâăäćæçèéêëìíîïđńòóôőöśűùúûüęțÿ"
    },
    cp28606: "iso885916",
    cp437: {
      type: "_sbcs",
      chars: "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
    },
    ibm437: "cp437",
    csibm437: "cp437",
    cp737: {
      type: "_sbcs",
      chars: "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρσςτυφχψ░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀ωάέήϊίόύϋώΆΈΉΊΌΎΏ±≥≤ΪΫ÷≈°∙·√ⁿ²■ "
    },
    ibm737: "cp737",
    csibm737: "cp737",
    cp775: {
      type: "_sbcs",
      chars: "ĆüéāäģåćłēŖŗīŹÄÅÉæÆōöĢ¢ŚśÖÜø£Ø×¤ĀĪóŻżź”¦©®¬½¼Ł«»░▒▓│┤ĄČĘĖ╣║╗╝ĮŠ┐└┴┬├─┼ŲŪ╚╔╩╦╠═╬Žąčęėįšųūž┘┌█▄▌▐▀ÓßŌŃõÕµńĶķĻļņĒŅ’­±“¾¶§÷„°∙·¹³²■ "
    },
    ibm775: "cp775",
    csibm775: "cp775",
    cp850: {
      type: "_sbcs",
      chars: "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø×ƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈıÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾¶§÷¸°¨·¹³²■ "
    },
    ibm850: "cp850",
    csibm850: "cp850",
    cp852: {
      type: "_sbcs",
      chars: "ÇüéâäůćçłëŐőîŹÄĆÉĹĺôöĽľŚśÖÜŤťŁ×čáíóúĄąŽžĘę¬źČş«»░▒▓│┤ÁÂĚŞ╣║╗╝Żż┐└┴┬├─┼Ăă╚╔╩╦╠═╬¤đĐĎËďŇÍÎě┘┌█▄ŢŮ▀ÓßÔŃńňŠšŔÚŕŰýÝţ´­˝˛ˇ˘§÷¸°¨˙űŘř■ "
    },
    ibm852: "cp852",
    csibm852: "cp852",
    cp855: {
      type: "_sbcs",
      chars: "ђЂѓЃёЁєЄѕЅіІїЇјЈљЉњЊћЋќЌўЎџЏюЮъЪаАбБцЦдДеЕфФгГ«»░▒▓│┤хХиИ╣║╗╝йЙ┐└┴┬├─┼кК╚╔╩╦╠═╬¤лЛмМнНоОп┘┌█▄Пя▀ЯрРсСтТуУжЖвВьЬ№­ыЫзЗшШэЭщЩчЧ§■ "
    },
    ibm855: "cp855",
    csibm855: "cp855",
    cp856: {
      type: "_sbcs",
      chars: "אבגדהוזחטיךכלםמןנסעףפץצקרשת�£�×����������®¬½¼�«»░▒▓│┤���©╣║╗╝¢¥┐└┴┬├─┼��╚╔╩╦╠═╬¤���������┘┌█▄¦�▀������µ�������¯´­±‗¾¶§÷¸°¨·¹³²■ "
    },
    ibm856: "cp856",
    csibm856: "cp856",
    cp857: {
      type: "_sbcs",
      chars: "ÇüéâäàåçêëèïîıÄÅÉæÆôöòûùİÖÜø£ØŞşáíóúñÑĞğ¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ºªÊËÈ�ÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµ�×ÚÛÙìÿ¯´­±�¾¶§÷¸°¨·¹³²■ "
    },
    ibm857: "cp857",
    csibm857: "cp857",
    cp858: {
      type: "_sbcs",
      chars: "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø×ƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈ€ÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾¶§÷¸°¨·¹³²■ "
    },
    ibm858: "cp858",
    csibm858: "cp858",
    cp860: {
      type: "_sbcs",
      chars: "ÇüéâãàÁçêÊèÍÔìÃÂÉÀÈôõòÚùÌÕÜ¢£Ù₧ÓáíóúñÑªº¿Ò¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
    },
    ibm860: "cp860",
    csibm860: "cp860",
    cp861: {
      type: "_sbcs",
      chars: "ÇüéâäàåçêëèÐðÞÄÅÉæÆôöþûÝýÖÜø£Ø₧ƒáíóúÁÍÓÚ¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
    },
    ibm861: "cp861",
    csibm861: "cp861",
    cp862: {
      type: "_sbcs",
      chars: "אבגדהוזחטיךכלםמןנסעףפץצקרשת¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
    },
    ibm862: "cp862",
    csibm862: "cp862",
    cp863: {
      type: "_sbcs",
      chars: "ÇüéâÂà¶çêëèïî‗À§ÉÈÊôËÏûù¤ÔÜ¢£ÙÛƒ¦´óú¨¸³¯Î⌐¬½¼¾«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
    },
    ibm863: "cp863",
    csibm863: "cp863",
    cp864: {
      type: "_sbcs",
      chars: `\0\x07\b	
\v\f\r\x1B !"#$٪&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_\`abcdefghijklmnopqrstuvwxyz{|}~°·∙√▒─│┼┤┬├┴┐┌└┘β∞φ±½¼≈«»ﻷﻸ��ﻻﻼ� ­ﺂ£¤ﺄ��ﺎﺏﺕﺙ،ﺝﺡﺥ٠١٢٣٤٥٦٧٨٩ﻑ؛ﺱﺵﺹ؟¢ﺀﺁﺃﺅﻊﺋﺍﺑﺓﺗﺛﺟﺣﺧﺩﺫﺭﺯﺳﺷﺻﺿﻁﻅﻋﻏ¦¬÷×ﻉـﻓﻗﻛﻟﻣﻧﻫﻭﻯﻳﺽﻌﻎﻍﻡﹽّﻥﻩﻬﻰﻲﻐﻕﻵﻶﻝﻙﻱ■�`
    },
    ibm864: "cp864",
    csibm864: "cp864",
    cp865: {
      type: "_sbcs",
      chars: "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø₧ƒáíóúñÑªº¿⌐¬½¼¡«¤░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
    },
    ibm865: "cp865",
    csibm865: "cp865",
    cp866: {
      type: "_sbcs",
      chars: "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёЄєЇїЎў°∙·√№¤■ "
    },
    ibm866: "cp866",
    csibm866: "cp866",
    cp869: {
      type: "_sbcs",
      chars: "������Ά�·¬¦‘’Έ―ΉΊΪΌ��ΎΫ©Ώ²³ά£έήίϊΐόύΑΒΓΔΕΖΗ½ΘΙ«»░▒▓│┤ΚΛΜΝ╣║╗╝ΞΟ┐└┴┬├─┼ΠΡ╚╔╩╦╠═╬ΣΤΥΦΧΨΩαβγ┘┌█▄δε▀ζηθικλμνξοπρσςτ΄­±υφχ§ψ΅°¨ωϋΰώ■ "
    },
    ibm869: "cp869",
    csibm869: "cp869",
    cp922: {
      type: "_sbcs",
      chars: " ¡¢£¤¥¦§¨©ª«¬­®‾°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏŠÑÒÓÔÕÖ×ØÙÚÛÜÝŽßàáâãäåæçèéêëìíîïšñòóôõö÷øùúûüýžÿ"
    },
    ibm922: "cp922",
    csibm922: "cp922",
    cp1046: {
      type: "_sbcs",
      chars: "ﺈ×÷ﹱ■│─┐┌└┘ﹹﹻﹽﹿﹷﺊﻰﻳﻲﻎﻏﻐﻶﻸﻺﻼ ¤ﺋﺑﺗﺛﺟﺣ،­ﺧﺳ٠١٢٣٤٥٦٧٨٩ﺷ؛ﺻﺿﻊ؟ﻋءآأؤإئابةتثجحخدذرزسشصضطﻇعغﻌﺂﺄﺎﻓـفقكلمنهوىيًٌٍَُِّْﻗﻛﻟﻵﻷﻹﻻﻣﻧﻬﻩ�"
    },
    ibm1046: "cp1046",
    csibm1046: "cp1046",
    cp1124: {
      type: "_sbcs",
      chars: " ЁЂҐЄЅІЇЈЉЊЋЌ­ЎЏАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя№ёђґєѕіїјљњћќ§ўџ"
    },
    ibm1124: "cp1124",
    csibm1124: "cp1124",
    cp1125: {
      type: "_sbcs",
      chars: "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёҐґЄєІіЇї·√№¤■ "
    },
    ibm1125: "cp1125",
    csibm1125: "cp1125",
    cp1129: {
      type: "_sbcs",
      chars: " ¡¢£¤¥¦§œ©ª«¬­®¯°±²³Ÿµ¶·Œ¹º»¼½¾¿ÀÁÂĂÄÅÆÇÈÉÊË̀ÍÎÏĐÑ̉ÓÔƠÖ×ØÙÚÛÜỮßàáâăäåæçèéêë́íîïđṇ̃óôơö÷øùúûüư₫ÿ"
    },
    ibm1129: "cp1129",
    csibm1129: "cp1129",
    cp1133: {
      type: "_sbcs",
      chars: " ກຂຄງຈສຊຍດຕຖທນບປຜຝພຟມຢຣລວຫອຮ���ຯະາຳິີຶືຸູຼັົຽ���ເແໂໃໄ່້໊໋໌ໍໆ�ໜໝ₭����������������໐໑໒໓໔໕໖໗໘໙��¢¬¦�"
    },
    ibm1133: "cp1133",
    csibm1133: "cp1133",
    cp1161: {
      type: "_sbcs",
      chars: "��������������������������������่กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู้๊๋€฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛¢¬¦ "
    },
    ibm1161: "cp1161",
    csibm1161: "cp1161",
    cp1162: {
      type: "_sbcs",
      chars: "€…‘’“”•–— กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"
    },
    ibm1162: "cp1162",
    csibm1162: "cp1162",
    cp1163: {
      type: "_sbcs",
      chars: " ¡¢£€¥¦§œ©ª«¬­®¯°±²³Ÿµ¶·Œ¹º»¼½¾¿ÀÁÂĂÄÅÆÇÈÉÊË̀ÍÎÏĐÑ̉ÓÔƠÖ×ØÙÚÛÜỮßàáâăäåæçèéêë́íîïđṇ̃óôơö÷øùúûüư₫ÿ"
    },
    ibm1163: "cp1163",
    csibm1163: "cp1163",
    maccroatian: {
      type: "_sbcs",
      chars: "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®Š™´¨≠ŽØ∞±≤≥∆µ∂∑∏š∫ªºΩžø¿¡¬√ƒ≈Ć«Č… ÀÃÕŒœĐ—“”‘’÷◊�©⁄¤‹›Æ»–·‚„‰ÂćÁčÈÍÎÏÌÓÔđÒÚÛÙıˆ˜¯πË˚¸Êæˇ"
    },
    maccyrillic: {
      type: "_sbcs",
      chars: "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°¢£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµ∂ЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю¤"
    },
    macgreek: {
      type: "_sbcs",
      chars: "Ä¹²É³ÖÜ΅àâä΄¨çéèêë£™îï•½‰ôö¦­ùûü†ΓΔΘΛΞΠß®©ΣΪ§≠°·Α±≤≥¥ΒΕΖΗΙΚΜΦΫΨΩάΝ¬ΟΡ≈Τ«»… ΥΧΆΈœ–―“”‘’÷ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ�"
    },
    maciceland: {
      type: "_sbcs",
      chars: "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûüÝ°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤ÐðÞþý·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"
    },
    macroman: {
      type: "_sbcs",
      chars: "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"
    },
    macromania: {
      type: "_sbcs",
      chars: "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ĂŞ∞±≤≥¥µ∂∑∏π∫ªºΩăş¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤‹›Ţţ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"
    },
    macthai: {
      type: "_sbcs",
      chars: "«»…“”�•‘’� กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู\uFEFF​–—฿เแโใไๅๆ็่้๊๋์ํ™๏๐๑๒๓๔๕๖๗๘๙®©����"
    },
    macturkish: {
      type: "_sbcs",
      chars: "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸĞğİıŞş‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙ�ˆ˜¯˘˙˚¸˝˛ˇ"
    },
    macukraine: {
      type: "_sbcs",
      chars: "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°Ґ£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµґЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю¤"
    },
    koi8r: {
      type: "_sbcs",
      chars: "─│┌┐└┘├┤┬┴┼▀▄█▌▐░▒▓⌠■∙√≈≤≥ ⌡°²·÷═║╒ё╓╔╕╖╗╘╙╚╛╜╝╞╟╠╡Ё╢╣╤╥╦╧╨╩╪╫╬©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"
    },
    koi8u: {
      type: "_sbcs",
      chars: "─│┌┐└┘├┤┬┴┼▀▄█▌▐░▒▓⌠■∙√≈≤≥ ⌡°²·÷═║╒ёє╔ії╗╘╙╚╛ґ╝╞╟╠╡ЁЄ╣ІЇ╦╧╨╩╪Ґ╬©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"
    },
    koi8ru: {
      type: "_sbcs",
      chars: "─│┌┐└┘├┤┬┴┼▀▄█▌▐░▒▓⌠■∙√≈≤≥ ⌡°²·÷═║╒ёє╔ії╗╘╙╚╛ґў╞╟╠╡ЁЄ╣ІЇ╦╧╨╩╪ҐЎ©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"
    },
    koi8t: {
      type: "_sbcs",
      chars: "қғ‚Ғ„…†‡�‰ҳ‹ҲҷҶ�Қ‘’“”•–—�™�›�����ӯӮё¤ӣ¦§���«¬­®�°±²Ё�Ӣ¶·�№�»���©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"
    },
    armscii8: {
      type: "_sbcs",
      chars: " �և։)(»«—.՝,-֊…՜՛՞ԱաԲբԳգԴդԵեԶզԷէԸըԹթԺժԻիԼլԽխԾծԿկՀհՁձՂղՃճՄմՅյՆնՇշՈոՉչՊպՋջՌռՍսՎվՏտՐրՑցՒւՓփՔքՕօՖֆ՚�"
    },
    rk1048: {
      type: "_sbcs",
      chars: "ЂЃ‚ѓ„…†‡€‰Љ‹ЊҚҺЏђ‘’“”•–—�™љ›њқһџ ҰұӘ¤Ө¦§Ё©Ғ«¬­®Ү°±Ііөµ¶·ё№ғ»әҢңүАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя"
    },
    tcvn: {
      type: "_sbcs",
      chars: `\0ÚỤỪỬỮ\x07\b	
\v\f\rỨỰỲỶỸÝỴ\x1B !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_\`abcdefghijklmnopqrstuvwxyz{|}~ÀẢÃÁẠẶẬÈẺẼÉẸỆÌỈĨÍỊÒỎÕÓỌỘỜỞỠỚỢÙỦŨ ĂÂÊÔƠƯĐăâêôơưđẶ̀̀̉̃́àảãáạẲằẳẵắẴẮẦẨẪẤỀặầẩẫấậèỂẻẽéẹềểễếệìỉỄẾỒĩíịòỔỏõóọồổỗốộờởỡớợùỖủũúụừửữứựỳỷỹýỵỐ`
    },
    georgianacademy: {
      type: "_sbcs",
      chars: "‚ƒ„…†‡ˆ‰Š‹Œ‘’“”•–—˜™š›œŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰჱჲჳჴჵჶçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
    },
    georgianps: {
      type: "_sbcs",
      chars: "‚ƒ„…†‡ˆ‰Š‹Œ‘’“”•–—˜™š›œŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿აბგდევზჱთიკლმნჲოპჟრსტჳუფქღყშჩცძწჭხჴჯჰჵæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
    },
    pt154: {
      type: "_sbcs",
      chars: "ҖҒӮғ„…ҶҮҲүҠӢҢҚҺҸҗ‘’“”•–—ҳҷҡӣңқһҹ ЎўЈӨҘҰ§Ё©Ә«¬ӯ®Ҝ°ұІіҙө¶·ё№ә»јҪҫҝАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя"
    },
    viscii: {
      type: "_sbcs",
      chars: `\0ẲẴẪ\x07\b	
\v\f\rỶỸ\x1BỴ !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_\`abcdefghijklmnopqrstuvwxyz{|}~ẠẮẰẶẤẦẨẬẼẸẾỀỂỄỆỐỒỔỖỘỢỚỜỞỊỎỌỈỦŨỤỲÕắằặấầẩậẽẹếềểễệốồổỗỠƠộờởịỰỨỪỬơớƯÀÁÂÃẢĂẳẵÈÉÊẺÌÍĨỳĐứÒÓÔạỷừửÙÚỹỵÝỡưàáâãảăữẫèéêẻìíĩỉđựòóôõỏọụùúũủýợỮ`
    },
    iso646cn: {
      type: "_sbcs",
      chars: `\0\x07\b	
\v\f\r\x1B !"#¥%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_\`abcdefghijklmnopqrstuvwxyz{|}‾��������������������������������������������������������������������������������������������������������������������������������`
    },
    iso646jp: {
      type: "_sbcs",
      chars: `\0\x07\b	
\v\f\r\x1B !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[¥]^_\`abcdefghijklmnopqrstuvwxyz{|}‾��������������������������������������������������������������������������������������������������������������������������������`
    },
    hproman8: {
      type: "_sbcs",
      chars: " ÀÂÈÊËÎÏ´ˋˆ¨˜ÙÛ₤¯Ýý°ÇçÑñ¡¿¤£¥§ƒ¢âêôûáéóúàèòùäëöüÅîØÆåíøæÄìÖÜÉïßÔÁÃãÐðÍÌÓÒÕõŠšÚŸÿÞþ·µ¶¾—¼½ªº«■»±�"
    },
    macintosh: {
      type: "_sbcs",
      chars: "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"
    },
    ascii: {
      type: "_sbcs",
      chars: "��������������������������������������������������������������������������������������������������������������������������������"
    },
    tis620: {
      type: "_sbcs",
      chars: "���������������������������������กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"
    }
  }), xc;
}
var yc = {}, zf;
function ZS() {
  if (zf) return yc;
  zf = 1;
  var e = Vn().Buffer;
  yc._dbcs = s;
  for (var t = -1, n = -2, r = -10, i = -1e3, a = new Array(256), o = -1, c = 0; c < 256; c++)
    a[c] = t;
  function s(d, m) {
    if (this.encodingName = d.encodingName, !d)
      throw new Error("DBCS codec is called without the data.");
    if (!d.table)
      throw new Error("Encoding '" + this.encodingName + "' has no data.");
    var g = d.table();
    this.decodeTables = [], this.decodeTables[0] = a.slice(0), this.decodeTableSeq = [];
    for (var v = 0; v < g.length; v++)
      this._addDecodeChunk(g[v]);
    this.defaultCharUnicode = m.defaultCharUnicode, this.encodeTable = [], this.encodeTableSeq = [];
    var y = {};
    if (d.encodeSkipVals)
      for (var v = 0; v < d.encodeSkipVals.length; v++) {
        var x = d.encodeSkipVals[v];
        if (typeof x == "number")
          y[x] = !0;
        else
          for (var w = x.from; w <= x.to; w++)
            y[w] = !0;
      }
    if (this._fillEncodeTable(0, 0, y), d.encodeAdd)
      for (var A in d.encodeAdd)
        Object.prototype.hasOwnProperty.call(d.encodeAdd, A) && this._setEncodeChar(A.charCodeAt(0), d.encodeAdd[A]);
    if (this.defCharSB = this.encodeTable[0][m.defaultCharSingleByte.charCodeAt(0)], this.defCharSB === t && (this.defCharSB = this.encodeTable[0]["?"]), this.defCharSB === t && (this.defCharSB = 63), typeof d.gb18030 == "function") {
      this.gb18030 = d.gb18030();
      for (var O = this.decodeTables.length, k = this.decodeTables[O] = a.slice(0), q = this.decodeTables.length, W = this.decodeTables[q] = a.slice(0), v = 129; v <= 254; v++)
        for (var te = i - this.decodeTables[0][v], T = this.decodeTables[te], w = 48; w <= 57; w++)
          T[w] = i - O;
      for (var v = 129; v <= 254; v++)
        k[v] = i - q;
      for (var v = 48; v <= 57; v++)
        W[v] = n;
    }
  }
  s.prototype.encoder = u, s.prototype.decoder = l, s.prototype._getDecodeTrieNode = function(d) {
    for (var m = []; d > 0; d >>= 8)
      m.push(d & 255);
    m.length == 0 && m.push(0);
    for (var g = this.decodeTables[0], v = m.length - 1; v > 0; v--) {
      var y = g[m[v]];
      if (y == t)
        g[m[v]] = i - this.decodeTables.length, this.decodeTables.push(g = a.slice(0));
      else if (y <= i)
        g = this.decodeTables[i - y];
      else
        throw new Error("Overwrite byte in " + this.encodingName + ", addr: " + d.toString(16));
    }
    return g;
  }, s.prototype._addDecodeChunk = function(d) {
    var m = parseInt(d[0], 16), g = this._getDecodeTrieNode(m);
    m = m & 255;
    for (var v = 1; v < d.length; v++) {
      var y = d[v];
      if (typeof y == "string")
        for (var x = 0; x < y.length; ) {
          var w = y.charCodeAt(x++);
          if (55296 <= w && w < 56320) {
            var A = y.charCodeAt(x++);
            if (56320 <= A && A < 57344)
              g[m++] = 65536 + (w - 55296) * 1024 + (A - 56320);
            else
              throw new Error("Incorrect surrogate pair in " + this.encodingName + " at chunk " + d[0]);
          } else if (4080 < w && w <= 4095) {
            for (var O = 4095 - w + 2, k = [], q = 0; q < O; q++)
              k.push(y.charCodeAt(x++));
            g[m++] = r - this.decodeTableSeq.length, this.decodeTableSeq.push(k);
          } else
            g[m++] = w;
        }
      else if (typeof y == "number")
        for (var W = g[m - 1] + 1, x = 0; x < y; x++)
          g[m++] = W++;
      else
        throw new Error("Incorrect type '" + typeof y + "' given in " + this.encodingName + " at chunk " + d[0]);
    }
    if (m > 255)
      throw new Error("Incorrect chunk in " + this.encodingName + " at addr " + d[0] + ": too long" + m);
  }, s.prototype._getEncodeBucket = function(d) {
    var m = d >> 8;
    return this.encodeTable[m] === void 0 && (this.encodeTable[m] = a.slice(0)), this.encodeTable[m];
  }, s.prototype._setEncodeChar = function(d, m) {
    var g = this._getEncodeBucket(d), v = d & 255;
    g[v] <= r ? this.encodeTableSeq[r - g[v]][o] = m : g[v] == t && (g[v] = m);
  }, s.prototype._setEncodeSequence = function(d, m) {
    var g = d[0], v = this._getEncodeBucket(g), y = g & 255, x;
    v[y] <= r ? x = this.encodeTableSeq[r - v[y]] : (x = {}, v[y] !== t && (x[o] = v[y]), v[y] = r - this.encodeTableSeq.length, this.encodeTableSeq.push(x));
    for (var w = 1; w < d.length - 1; w++) {
      var A = x[g];
      typeof A == "object" ? x = A : (x = x[g] = {}, A !== void 0 && (x[o] = A));
    }
    g = d[d.length - 1], x[g] = m;
  }, s.prototype._fillEncodeTable = function(d, m, g) {
    for (var v = this.decodeTables[d], y = 0; y < 256; y++) {
      var x = v[y], w = m + y;
      g[w] || (x >= 0 ? this._setEncodeChar(x, w) : x <= i ? this._fillEncodeTable(i - x, w << 8, g) : x <= r && this._setEncodeSequence(this.decodeTableSeq[r - x], w));
    }
  };
  function u(d, m) {
    this.leadSurrogate = -1, this.seqObj = void 0, this.encodeTable = m.encodeTable, this.encodeTableSeq = m.encodeTableSeq, this.defaultCharSingleByte = m.defCharSB, this.gb18030 = m.gb18030;
  }
  u.prototype.write = function(d) {
    for (var m = e.alloc(d.length * (this.gb18030 ? 4 : 3)), g = this.leadSurrogate, v = this.seqObj, y = -1, x = 0, w = 0; ; ) {
      if (y === -1) {
        if (x == d.length) break;
        var A = d.charCodeAt(x++);
      } else {
        var A = y;
        y = -1;
      }
      if (55296 <= A && A < 57344)
        if (A < 56320)
          if (g === -1) {
            g = A;
            continue;
          } else
            g = A, A = t;
        else
          g !== -1 ? (A = 65536 + (g - 55296) * 1024 + (A - 56320), g = -1) : A = t;
      else g !== -1 && (y = A, A = t, g = -1);
      var O = t;
      if (v !== void 0 && A != t) {
        var k = v[A];
        if (typeof k == "object") {
          v = k;
          continue;
        } else typeof k == "number" ? O = k : k == null && (k = v[o], k !== void 0 && (O = k, y = A));
        v = void 0;
      } else if (A >= 0) {
        var q = this.encodeTable[A >> 8];
        if (q !== void 0 && (O = q[A & 255]), O <= r) {
          v = this.encodeTableSeq[r - O];
          continue;
        }
        if (O == t && this.gb18030) {
          var W = p(this.gb18030.uChars, A);
          if (W != -1) {
            var O = this.gb18030.gbChars[W] + (A - this.gb18030.uChars[W]);
            m[w++] = 129 + Math.floor(O / 12600), O = O % 12600, m[w++] = 48 + Math.floor(O / 1260), O = O % 1260, m[w++] = 129 + Math.floor(O / 10), O = O % 10, m[w++] = 48 + O;
            continue;
          }
        }
      }
      O === t && (O = this.defaultCharSingleByte), O < 256 ? m[w++] = O : O < 65536 ? (m[w++] = O >> 8, m[w++] = O & 255) : (m[w++] = O >> 16, m[w++] = O >> 8 & 255, m[w++] = O & 255);
    }
    return this.seqObj = v, this.leadSurrogate = g, m.slice(0, w);
  }, u.prototype.end = function() {
    if (!(this.leadSurrogate === -1 && this.seqObj === void 0)) {
      var d = e.alloc(10), m = 0;
      if (this.seqObj) {
        var g = this.seqObj[o];
        g !== void 0 && (g < 256 ? d[m++] = g : (d[m++] = g >> 8, d[m++] = g & 255)), this.seqObj = void 0;
      }
      return this.leadSurrogate !== -1 && (d[m++] = this.defaultCharSingleByte, this.leadSurrogate = -1), d.slice(0, m);
    }
  }, u.prototype.findIdx = p;
  function l(d, m) {
    this.nodeIdx = 0, this.prevBuf = e.alloc(0), this.decodeTables = m.decodeTables, this.decodeTableSeq = m.decodeTableSeq, this.defaultCharUnicode = m.defaultCharUnicode, this.gb18030 = m.gb18030;
  }
  l.prototype.write = function(d) {
    var m = e.alloc(d.length * 2), g = this.nodeIdx, v = this.prevBuf, y = this.prevBuf.length, x = -this.prevBuf.length, w;
    y > 0 && (v = e.concat([v, d.slice(0, 10)]));
    for (var A = 0, O = 0; A < d.length; A++) {
      var k = A >= 0 ? d[A] : v[A + y], w = this.decodeTables[g][k];
      if (!(w >= 0)) if (w === t)
        A = x, w = this.defaultCharUnicode.charCodeAt(0);
      else if (w === n) {
        var q = x >= 0 ? d.slice(x, A + 1) : v.slice(x + y, A + 1 + y), W = (q[0] - 129) * 12600 + (q[1] - 48) * 1260 + (q[2] - 129) * 10 + (q[3] - 48), te = p(this.gb18030.gbChars, W);
        w = this.gb18030.uChars[te] + W - this.gb18030.gbChars[te];
      } else if (w <= i) {
        g = i - w;
        continue;
      } else if (w <= r) {
        for (var T = this.decodeTableSeq[r - w], H = 0; H < T.length - 1; H++)
          w = T[H], m[O++] = w & 255, m[O++] = w >> 8;
        w = T[T.length - 1];
      } else
        throw new Error("iconv-lite internal error: invalid decoding table value " + w + " at " + g + "/" + k);
      if (w > 65535) {
        w -= 65536;
        var j = 55296 + Math.floor(w / 1024);
        m[O++] = j & 255, m[O++] = j >> 8, w = 56320 + w % 1024;
      }
      m[O++] = w & 255, m[O++] = w >> 8, g = 0, x = A + 1;
    }
    return this.nodeIdx = g, this.prevBuf = x >= 0 ? d.slice(x) : v.slice(x + y), m.slice(0, O).toString("ucs2");
  }, l.prototype.end = function() {
    for (var d = ""; this.prevBuf.length > 0; ) {
      d += this.defaultCharUnicode;
      var m = this.prevBuf.slice(1);
      this.prevBuf = e.alloc(0), this.nodeIdx = 0, m.length > 0 && (d += this.write(m));
    }
    return this.nodeIdx = 0, d;
  };
  function p(d, m) {
    if (d[0] > m)
      return -1;
    for (var g = 0, v = d.length; g < v - 1; ) {
      var y = g + Math.floor((v - g + 1) / 2);
      d[y] <= m ? g = y : v = y;
    }
    return g;
  }
  return yc;
}
const QS = [
  [
    "0",
    "\0",
    128
  ],
  [
    "a1",
    "｡",
    62
  ],
  [
    "8140",
    "　、。，．・：；？！゛゜´｀¨＾￣＿ヽヾゝゞ〃仝々〆〇ー―‐／＼～∥｜…‥‘’“”（）〔〕［］｛｝〈",
    9,
    "＋－±×"
  ],
  [
    "8180",
    "÷＝≠＜＞≦≧∞∴♂♀°′″℃￥＄￠￡％＃＆＊＠§☆★○●◎◇◆□■△▲▽▼※〒→←↑↓〓"
  ],
  [
    "81b8",
    "∈∋⊆⊇⊂⊃∪∩"
  ],
  [
    "81c8",
    "∧∨￢⇒⇔∀∃"
  ],
  [
    "81da",
    "∠⊥⌒∂∇≡≒≪≫√∽∝∵∫∬"
  ],
  [
    "81f0",
    "Å‰♯♭♪†‡¶"
  ],
  [
    "81fc",
    "◯"
  ],
  [
    "824f",
    "０",
    9
  ],
  [
    "8260",
    "Ａ",
    25
  ],
  [
    "8281",
    "ａ",
    25
  ],
  [
    "829f",
    "ぁ",
    82
  ],
  [
    "8340",
    "ァ",
    62
  ],
  [
    "8380",
    "ム",
    22
  ],
  [
    "839f",
    "Α",
    16,
    "Σ",
    6
  ],
  [
    "83bf",
    "α",
    16,
    "σ",
    6
  ],
  [
    "8440",
    "А",
    5,
    "ЁЖ",
    25
  ],
  [
    "8470",
    "а",
    5,
    "ёж",
    7
  ],
  [
    "8480",
    "о",
    17
  ],
  [
    "849f",
    "─│┌┐┘└├┬┤┴┼━┃┏┓┛┗┣┳┫┻╋┠┯┨┷┿┝┰┥┸╂"
  ],
  [
    "8740",
    "①",
    19,
    "Ⅰ",
    9
  ],
  [
    "875f",
    "㍉㌔㌢㍍㌘㌧㌃㌶㍑㍗㌍㌦㌣㌫㍊㌻㎜㎝㎞㎎㎏㏄㎡"
  ],
  [
    "877e",
    "㍻"
  ],
  [
    "8780",
    "〝〟№㏍℡㊤",
    4,
    "㈱㈲㈹㍾㍽㍼≒≡∫∮∑√⊥∠∟⊿∵∩∪"
  ],
  [
    "889f",
    "亜唖娃阿哀愛挨姶逢葵茜穐悪握渥旭葦芦鯵梓圧斡扱宛姐虻飴絢綾鮎或粟袷安庵按暗案闇鞍杏以伊位依偉囲夷委威尉惟意慰易椅為畏異移維緯胃萎衣謂違遺医井亥域育郁磯一壱溢逸稲茨芋鰯允印咽員因姻引飲淫胤蔭"
  ],
  [
    "8940",
    "院陰隠韻吋右宇烏羽迂雨卯鵜窺丑碓臼渦嘘唄欝蔚鰻姥厩浦瓜閏噂云運雲荏餌叡営嬰影映曳栄永泳洩瑛盈穎頴英衛詠鋭液疫益駅悦謁越閲榎厭円"
  ],
  [
    "8980",
    "園堰奄宴延怨掩援沿演炎焔煙燕猿縁艶苑薗遠鉛鴛塩於汚甥凹央奥往応押旺横欧殴王翁襖鴬鴎黄岡沖荻億屋憶臆桶牡乙俺卸恩温穏音下化仮何伽価佳加可嘉夏嫁家寡科暇果架歌河火珂禍禾稼箇花苛茄荷華菓蝦課嘩貨迦過霞蚊俄峨我牙画臥芽蛾賀雅餓駕介会解回塊壊廻快怪悔恢懐戒拐改"
  ],
  [
    "8a40",
    "魁晦械海灰界皆絵芥蟹開階貝凱劾外咳害崖慨概涯碍蓋街該鎧骸浬馨蛙垣柿蛎鈎劃嚇各廓拡撹格核殻獲確穫覚角赫較郭閣隔革学岳楽額顎掛笠樫"
  ],
  [
    "8a80",
    "橿梶鰍潟割喝恰括活渇滑葛褐轄且鰹叶椛樺鞄株兜竃蒲釜鎌噛鴨栢茅萱粥刈苅瓦乾侃冠寒刊勘勧巻喚堪姦完官寛干幹患感慣憾換敢柑桓棺款歓汗漢澗潅環甘監看竿管簡緩缶翰肝艦莞観諌貫還鑑間閑関陥韓館舘丸含岸巌玩癌眼岩翫贋雁頑顔願企伎危喜器基奇嬉寄岐希幾忌揮机旗既期棋棄"
  ],
  [
    "8b40",
    "機帰毅気汽畿祈季稀紀徽規記貴起軌輝飢騎鬼亀偽儀妓宜戯技擬欺犠疑祇義蟻誼議掬菊鞠吉吃喫桔橘詰砧杵黍却客脚虐逆丘久仇休及吸宮弓急救"
  ],
  [
    "8b80",
    "朽求汲泣灸球究窮笈級糾給旧牛去居巨拒拠挙渠虚許距鋸漁禦魚亨享京供侠僑兇競共凶協匡卿叫喬境峡強彊怯恐恭挟教橋況狂狭矯胸脅興蕎郷鏡響饗驚仰凝尭暁業局曲極玉桐粁僅勤均巾錦斤欣欽琴禁禽筋緊芹菌衿襟謹近金吟銀九倶句区狗玖矩苦躯駆駈駒具愚虞喰空偶寓遇隅串櫛釧屑屈"
  ],
  [
    "8c40",
    "掘窟沓靴轡窪熊隈粂栗繰桑鍬勲君薫訓群軍郡卦袈祁係傾刑兄啓圭珪型契形径恵慶慧憩掲携敬景桂渓畦稽系経継繋罫茎荊蛍計詣警軽頚鶏芸迎鯨"
  ],
  [
    "8c80",
    "劇戟撃激隙桁傑欠決潔穴結血訣月件倹倦健兼券剣喧圏堅嫌建憲懸拳捲検権牽犬献研硯絹県肩見謙賢軒遣鍵険顕験鹸元原厳幻弦減源玄現絃舷言諺限乎個古呼固姑孤己庫弧戸故枯湖狐糊袴股胡菰虎誇跨鈷雇顧鼓五互伍午呉吾娯後御悟梧檎瑚碁語誤護醐乞鯉交佼侯候倖光公功効勾厚口向"
  ],
  [
    "8d40",
    "后喉坑垢好孔孝宏工巧巷幸広庚康弘恒慌抗拘控攻昂晃更杭校梗構江洪浩港溝甲皇硬稿糠紅紘絞綱耕考肯肱腔膏航荒行衡講貢購郊酵鉱砿鋼閤降"
  ],
  [
    "8d80",
    "項香高鴻剛劫号合壕拷濠豪轟麹克刻告国穀酷鵠黒獄漉腰甑忽惚骨狛込此頃今困坤墾婚恨懇昏昆根梱混痕紺艮魂些佐叉唆嵯左差査沙瑳砂詐鎖裟坐座挫債催再最哉塞妻宰彩才採栽歳済災采犀砕砦祭斎細菜裁載際剤在材罪財冴坂阪堺榊肴咲崎埼碕鷺作削咋搾昨朔柵窄策索錯桜鮭笹匙冊刷"
  ],
  [
    "8e40",
    "察拶撮擦札殺薩雑皐鯖捌錆鮫皿晒三傘参山惨撒散桟燦珊産算纂蚕讃賛酸餐斬暫残仕仔伺使刺司史嗣四士始姉姿子屍市師志思指支孜斯施旨枝止"
  ],
  [
    "8e80",
    "死氏獅祉私糸紙紫肢脂至視詞詩試誌諮資賜雌飼歯事似侍児字寺慈持時次滋治爾璽痔磁示而耳自蒔辞汐鹿式識鴫竺軸宍雫七叱執失嫉室悉湿漆疾質実蔀篠偲柴芝屡蕊縞舎写射捨赦斜煮社紗者謝車遮蛇邪借勺尺杓灼爵酌釈錫若寂弱惹主取守手朱殊狩珠種腫趣酒首儒受呪寿授樹綬需囚収周"
  ],
  [
    "8f40",
    "宗就州修愁拾洲秀秋終繍習臭舟蒐衆襲讐蹴輯週酋酬集醜什住充十従戎柔汁渋獣縦重銃叔夙宿淑祝縮粛塾熟出術述俊峻春瞬竣舜駿准循旬楯殉淳"
  ],
  [
    "8f80",
    "準潤盾純巡遵醇順処初所暑曙渚庶緒署書薯藷諸助叙女序徐恕鋤除傷償勝匠升召哨商唱嘗奨妾娼宵将小少尚庄床廠彰承抄招掌捷昇昌昭晶松梢樟樵沼消渉湘焼焦照症省硝礁祥称章笑粧紹肖菖蒋蕉衝裳訟証詔詳象賞醤鉦鍾鐘障鞘上丈丞乗冗剰城場壌嬢常情擾条杖浄状畳穣蒸譲醸錠嘱埴飾"
  ],
  [
    "9040",
    "拭植殖燭織職色触食蝕辱尻伸信侵唇娠寝審心慎振新晋森榛浸深申疹真神秦紳臣芯薪親診身辛進針震人仁刃塵壬尋甚尽腎訊迅陣靭笥諏須酢図厨"
  ],
  [
    "9080",
    "逗吹垂帥推水炊睡粋翠衰遂酔錐錘随瑞髄崇嵩数枢趨雛据杉椙菅頗雀裾澄摺寸世瀬畝是凄制勢姓征性成政整星晴棲栖正清牲生盛精聖声製西誠誓請逝醒青静斉税脆隻席惜戚斥昔析石積籍績脊責赤跡蹟碩切拙接摂折設窃節説雪絶舌蝉仙先千占宣専尖川戦扇撰栓栴泉浅洗染潜煎煽旋穿箭線"
  ],
  [
    "9140",
    "繊羨腺舛船薦詮賎践選遷銭銑閃鮮前善漸然全禅繕膳糎噌塑岨措曾曽楚狙疏疎礎祖租粗素組蘇訴阻遡鼠僧創双叢倉喪壮奏爽宋層匝惣想捜掃挿掻"
  ],
  [
    "9180",
    "操早曹巣槍槽漕燥争痩相窓糟総綜聡草荘葬蒼藻装走送遭鎗霜騒像増憎臓蔵贈造促側則即息捉束測足速俗属賊族続卒袖其揃存孫尊損村遜他多太汰詑唾堕妥惰打柁舵楕陀駄騨体堆対耐岱帯待怠態戴替泰滞胎腿苔袋貸退逮隊黛鯛代台大第醍題鷹滝瀧卓啄宅托択拓沢濯琢託鐸濁諾茸凧蛸只"
  ],
  [
    "9240",
    "叩但達辰奪脱巽竪辿棚谷狸鱈樽誰丹単嘆坦担探旦歎淡湛炭短端箪綻耽胆蛋誕鍛団壇弾断暖檀段男談値知地弛恥智池痴稚置致蜘遅馳築畜竹筑蓄"
  ],
  [
    "9280",
    "逐秩窒茶嫡着中仲宙忠抽昼柱注虫衷註酎鋳駐樗瀦猪苧著貯丁兆凋喋寵帖帳庁弔張彫徴懲挑暢朝潮牒町眺聴脹腸蝶調諜超跳銚長頂鳥勅捗直朕沈珍賃鎮陳津墜椎槌追鎚痛通塚栂掴槻佃漬柘辻蔦綴鍔椿潰坪壷嬬紬爪吊釣鶴亭低停偵剃貞呈堤定帝底庭廷弟悌抵挺提梯汀碇禎程締艇訂諦蹄逓"
  ],
  [
    "9340",
    "邸鄭釘鼎泥摘擢敵滴的笛適鏑溺哲徹撤轍迭鉄典填天展店添纏甜貼転顛点伝殿澱田電兎吐堵塗妬屠徒斗杜渡登菟賭途都鍍砥砺努度土奴怒倒党冬"
  ],
  [
    "9380",
    "凍刀唐塔塘套宕島嶋悼投搭東桃梼棟盗淘湯涛灯燈当痘祷等答筒糖統到董蕩藤討謄豆踏逃透鐙陶頭騰闘働動同堂導憧撞洞瞳童胴萄道銅峠鴇匿得徳涜特督禿篤毒独読栃橡凸突椴届鳶苫寅酉瀞噸屯惇敦沌豚遁頓呑曇鈍奈那内乍凪薙謎灘捺鍋楢馴縄畷南楠軟難汝二尼弐迩匂賑肉虹廿日乳入"
  ],
  [
    "9440",
    "如尿韮任妊忍認濡禰祢寧葱猫熱年念捻撚燃粘乃廼之埜嚢悩濃納能脳膿農覗蚤巴把播覇杷波派琶破婆罵芭馬俳廃拝排敗杯盃牌背肺輩配倍培媒梅"
  ],
  [
    "9480",
    "楳煤狽買売賠陪這蝿秤矧萩伯剥博拍柏泊白箔粕舶薄迫曝漠爆縛莫駁麦函箱硲箸肇筈櫨幡肌畑畠八鉢溌発醗髪伐罰抜筏閥鳩噺塙蛤隼伴判半反叛帆搬斑板氾汎版犯班畔繁般藩販範釆煩頒飯挽晩番盤磐蕃蛮匪卑否妃庇彼悲扉批披斐比泌疲皮碑秘緋罷肥被誹費避非飛樋簸備尾微枇毘琵眉美"
  ],
  [
    "9540",
    "鼻柊稗匹疋髭彦膝菱肘弼必畢筆逼桧姫媛紐百謬俵彪標氷漂瓢票表評豹廟描病秒苗錨鋲蒜蛭鰭品彬斌浜瀕貧賓頻敏瓶不付埠夫婦富冨布府怖扶敷"
  ],
  [
    "9580",
    "斧普浮父符腐膚芙譜負賦赴阜附侮撫武舞葡蕪部封楓風葺蕗伏副復幅服福腹複覆淵弗払沸仏物鮒分吻噴墳憤扮焚奮粉糞紛雰文聞丙併兵塀幣平弊柄並蔽閉陛米頁僻壁癖碧別瞥蔑箆偏変片篇編辺返遍便勉娩弁鞭保舗鋪圃捕歩甫補輔穂募墓慕戊暮母簿菩倣俸包呆報奉宝峰峯崩庖抱捧放方朋"
  ],
  [
    "9640",
    "法泡烹砲縫胞芳萌蓬蜂褒訪豊邦鋒飽鳳鵬乏亡傍剖坊妨帽忘忙房暴望某棒冒紡肪膨謀貌貿鉾防吠頬北僕卜墨撲朴牧睦穆釦勃没殆堀幌奔本翻凡盆"
  ],
  [
    "9680",
    "摩磨魔麻埋妹昧枚毎哩槙幕膜枕鮪柾鱒桝亦俣又抹末沫迄侭繭麿万慢満漫蔓味未魅巳箕岬密蜜湊蓑稔脈妙粍民眠務夢無牟矛霧鵡椋婿娘冥名命明盟迷銘鳴姪牝滅免棉綿緬面麺摸模茂妄孟毛猛盲網耗蒙儲木黙目杢勿餅尤戻籾貰問悶紋門匁也冶夜爺耶野弥矢厄役約薬訳躍靖柳薮鑓愉愈油癒"
  ],
  [
    "9740",
    "諭輸唯佑優勇友宥幽悠憂揖有柚湧涌猶猷由祐裕誘遊邑郵雄融夕予余与誉輿預傭幼妖容庸揚揺擁曜楊様洋溶熔用窯羊耀葉蓉要謡踊遥陽養慾抑欲"
  ],
  [
    "9780",
    "沃浴翌翼淀羅螺裸来莱頼雷洛絡落酪乱卵嵐欄濫藍蘭覧利吏履李梨理璃痢裏裡里離陸律率立葎掠略劉流溜琉留硫粒隆竜龍侶慮旅虜了亮僚両凌寮料梁涼猟療瞭稜糧良諒遼量陵領力緑倫厘林淋燐琳臨輪隣鱗麟瑠塁涙累類令伶例冷励嶺怜玲礼苓鈴隷零霊麗齢暦歴列劣烈裂廉恋憐漣煉簾練聯"
  ],
  [
    "9840",
    "蓮連錬呂魯櫓炉賂路露労婁廊弄朗楼榔浪漏牢狼篭老聾蝋郎六麓禄肋録論倭和話歪賄脇惑枠鷲亙亘鰐詫藁蕨椀湾碗腕"
  ],
  [
    "989f",
    "弌丐丕个丱丶丼丿乂乖乘亂亅豫亊舒弍于亞亟亠亢亰亳亶从仍仄仆仂仗仞仭仟价伉佚估佛佝佗佇佶侈侏侘佻佩佰侑佯來侖儘俔俟俎俘俛俑俚俐俤俥倚倨倔倪倥倅伜俶倡倩倬俾俯們倆偃假會偕偐偈做偖偬偸傀傚傅傴傲"
  ],
  [
    "9940",
    "僉僊傳僂僖僞僥僭僣僮價僵儉儁儂儖儕儔儚儡儺儷儼儻儿兀兒兌兔兢竸兩兪兮冀冂囘册冉冏冑冓冕冖冤冦冢冩冪冫决冱冲冰况冽凅凉凛几處凩凭"
  ],
  [
    "9980",
    "凰凵凾刄刋刔刎刧刪刮刳刹剏剄剋剌剞剔剪剴剩剳剿剽劍劔劒剱劈劑辨辧劬劭劼劵勁勍勗勞勣勦飭勠勳勵勸勹匆匈甸匍匐匏匕匚匣匯匱匳匸區卆卅丗卉卍凖卞卩卮夘卻卷厂厖厠厦厥厮厰厶參簒雙叟曼燮叮叨叭叺吁吽呀听吭吼吮吶吩吝呎咏呵咎呟呱呷呰咒呻咀呶咄咐咆哇咢咸咥咬哄哈咨"
  ],
  [
    "9a40",
    "咫哂咤咾咼哘哥哦唏唔哽哮哭哺哢唹啀啣啌售啜啅啖啗唸唳啝喙喀咯喊喟啻啾喘喞單啼喃喩喇喨嗚嗅嗟嗄嗜嗤嗔嘔嗷嘖嗾嗽嘛嗹噎噐營嘴嘶嘲嘸"
  ],
  [
    "9a80",
    "噫噤嘯噬噪嚆嚀嚊嚠嚔嚏嚥嚮嚶嚴囂嚼囁囃囀囈囎囑囓囗囮囹圀囿圄圉圈國圍圓團圖嗇圜圦圷圸坎圻址坏坩埀垈坡坿垉垓垠垳垤垪垰埃埆埔埒埓堊埖埣堋堙堝塲堡塢塋塰毀塒堽塹墅墹墟墫墺壞墻墸墮壅壓壑壗壙壘壥壜壤壟壯壺壹壻壼壽夂夊夐夛梦夥夬夭夲夸夾竒奕奐奎奚奘奢奠奧奬奩"
  ],
  [
    "9b40",
    "奸妁妝佞侫妣妲姆姨姜妍姙姚娥娟娑娜娉娚婀婬婉娵娶婢婪媚媼媾嫋嫂媽嫣嫗嫦嫩嫖嫺嫻嬌嬋嬖嬲嫐嬪嬶嬾孃孅孀孑孕孚孛孥孩孰孳孵學斈孺宀"
  ],
  [
    "9b80",
    "它宦宸寃寇寉寔寐寤實寢寞寥寫寰寶寳尅將專對尓尠尢尨尸尹屁屆屎屓屐屏孱屬屮乢屶屹岌岑岔妛岫岻岶岼岷峅岾峇峙峩峽峺峭嶌峪崋崕崗嵜崟崛崑崔崢崚崙崘嵌嵒嵎嵋嵬嵳嵶嶇嶄嶂嶢嶝嶬嶮嶽嶐嶷嶼巉巍巓巒巖巛巫已巵帋帚帙帑帛帶帷幄幃幀幎幗幔幟幢幤幇幵并幺麼广庠廁廂廈廐廏"
  ],
  [
    "9c40",
    "廖廣廝廚廛廢廡廨廩廬廱廳廰廴廸廾弃弉彝彜弋弑弖弩弭弸彁彈彌彎弯彑彖彗彙彡彭彳彷徃徂彿徊很徑徇從徙徘徠徨徭徼忖忻忤忸忱忝悳忿怡恠"
  ],
  [
    "9c80",
    "怙怐怩怎怱怛怕怫怦怏怺恚恁恪恷恟恊恆恍恣恃恤恂恬恫恙悁悍惧悃悚悄悛悖悗悒悧悋惡悸惠惓悴忰悽惆悵惘慍愕愆惶惷愀惴惺愃愡惻惱愍愎慇愾愨愧慊愿愼愬愴愽慂慄慳慷慘慙慚慫慴慯慥慱慟慝慓慵憙憖憇憬憔憚憊憑憫憮懌懊應懷懈懃懆憺懋罹懍懦懣懶懺懴懿懽懼懾戀戈戉戍戌戔戛"
  ],
  [
    "9d40",
    "戞戡截戮戰戲戳扁扎扞扣扛扠扨扼抂抉找抒抓抖拔抃抔拗拑抻拏拿拆擔拈拜拌拊拂拇抛拉挌拮拱挧挂挈拯拵捐挾捍搜捏掖掎掀掫捶掣掏掉掟掵捫"
  ],
  [
    "9d80",
    "捩掾揩揀揆揣揉插揶揄搖搴搆搓搦搶攝搗搨搏摧摯摶摎攪撕撓撥撩撈撼據擒擅擇撻擘擂擱擧舉擠擡抬擣擯攬擶擴擲擺攀擽攘攜攅攤攣攫攴攵攷收攸畋效敖敕敍敘敞敝敲數斂斃變斛斟斫斷旃旆旁旄旌旒旛旙无旡旱杲昊昃旻杳昵昶昴昜晏晄晉晁晞晝晤晧晨晟晢晰暃暈暎暉暄暘暝曁暹曉暾暼"
  ],
  [
    "9e40",
    "曄暸曖曚曠昿曦曩曰曵曷朏朖朞朦朧霸朮朿朶杁朸朷杆杞杠杙杣杤枉杰枩杼杪枌枋枦枡枅枷柯枴柬枳柩枸柤柞柝柢柮枹柎柆柧檜栞框栩桀桍栲桎"
  ],
  [
    "9e80",
    "梳栫桙档桷桿梟梏梭梔條梛梃檮梹桴梵梠梺椏梍桾椁棊椈棘椢椦棡椌棍棔棧棕椶椒椄棗棣椥棹棠棯椨椪椚椣椡棆楹楷楜楸楫楔楾楮椹楴椽楙椰楡楞楝榁楪榲榮槐榿槁槓榾槎寨槊槝榻槃榧樮榑榠榜榕榴槞槨樂樛槿權槹槲槧樅榱樞槭樔槫樊樒櫁樣樓橄樌橲樶橸橇橢橙橦橈樸樢檐檍檠檄檢檣"
  ],
  [
    "9f40",
    "檗蘗檻櫃櫂檸檳檬櫞櫑櫟檪櫚櫪櫻欅蘖櫺欒欖鬱欟欸欷盜欹飮歇歃歉歐歙歔歛歟歡歸歹歿殀殄殃殍殘殕殞殤殪殫殯殲殱殳殷殼毆毋毓毟毬毫毳毯"
  ],
  [
    "9f80",
    "麾氈氓气氛氤氣汞汕汢汪沂沍沚沁沛汾汨汳沒沐泄泱泓沽泗泅泝沮沱沾沺泛泯泙泪洟衍洶洫洽洸洙洵洳洒洌浣涓浤浚浹浙涎涕濤涅淹渕渊涵淇淦涸淆淬淞淌淨淒淅淺淙淤淕淪淮渭湮渮渙湲湟渾渣湫渫湶湍渟湃渺湎渤滿渝游溂溪溘滉溷滓溽溯滄溲滔滕溏溥滂溟潁漑灌滬滸滾漿滲漱滯漲滌"
  ],
  [
    "e040",
    "漾漓滷澆潺潸澁澀潯潛濳潭澂潼潘澎澑濂潦澳澣澡澤澹濆澪濟濕濬濔濘濱濮濛瀉瀋濺瀑瀁瀏濾瀛瀚潴瀝瀘瀟瀰瀾瀲灑灣炙炒炯烱炬炸炳炮烟烋烝"
  ],
  [
    "e080",
    "烙焉烽焜焙煥煕熈煦煢煌煖煬熏燻熄熕熨熬燗熹熾燒燉燔燎燠燬燧燵燼燹燿爍爐爛爨爭爬爰爲爻爼爿牀牆牋牘牴牾犂犁犇犒犖犢犧犹犲狃狆狄狎狒狢狠狡狹狷倏猗猊猜猖猝猴猯猩猥猾獎獏默獗獪獨獰獸獵獻獺珈玳珎玻珀珥珮珞璢琅瑯琥珸琲琺瑕琿瑟瑙瑁瑜瑩瑰瑣瑪瑶瑾璋璞璧瓊瓏瓔珱"
  ],
  [
    "e140",
    "瓠瓣瓧瓩瓮瓲瓰瓱瓸瓷甄甃甅甌甎甍甕甓甞甦甬甼畄畍畊畉畛畆畚畩畤畧畫畭畸當疆疇畴疊疉疂疔疚疝疥疣痂疳痃疵疽疸疼疱痍痊痒痙痣痞痾痿"
  ],
  [
    "e180",
    "痼瘁痰痺痲痳瘋瘍瘉瘟瘧瘠瘡瘢瘤瘴瘰瘻癇癈癆癜癘癡癢癨癩癪癧癬癰癲癶癸發皀皃皈皋皎皖皓皙皚皰皴皸皹皺盂盍盖盒盞盡盥盧盪蘯盻眈眇眄眩眤眞眥眦眛眷眸睇睚睨睫睛睥睿睾睹瞎瞋瞑瞠瞞瞰瞶瞹瞿瞼瞽瞻矇矍矗矚矜矣矮矼砌砒礦砠礪硅碎硴碆硼碚碌碣碵碪碯磑磆磋磔碾碼磅磊磬"
  ],
  [
    "e240",
    "磧磚磽磴礇礒礑礙礬礫祀祠祗祟祚祕祓祺祿禊禝禧齋禪禮禳禹禺秉秕秧秬秡秣稈稍稘稙稠稟禀稱稻稾稷穃穗穉穡穢穩龝穰穹穽窈窗窕窘窖窩竈窰"
  ],
  [
    "e280",
    "窶竅竄窿邃竇竊竍竏竕竓站竚竝竡竢竦竭竰笂笏笊笆笳笘笙笞笵笨笶筐筺笄筍笋筌筅筵筥筴筧筰筱筬筮箝箘箟箍箜箚箋箒箏筝箙篋篁篌篏箴篆篝篩簑簔篦篥籠簀簇簓篳篷簗簍篶簣簧簪簟簷簫簽籌籃籔籏籀籐籘籟籤籖籥籬籵粃粐粤粭粢粫粡粨粳粲粱粮粹粽糀糅糂糘糒糜糢鬻糯糲糴糶糺紆"
  ],
  [
    "e340",
    "紂紜紕紊絅絋紮紲紿紵絆絳絖絎絲絨絮絏絣經綉絛綏絽綛綺綮綣綵緇綽綫總綢綯緜綸綟綰緘緝緤緞緻緲緡縅縊縣縡縒縱縟縉縋縢繆繦縻縵縹繃縷"
  ],
  [
    "e380",
    "縲縺繧繝繖繞繙繚繹繪繩繼繻纃緕繽辮繿纈纉續纒纐纓纔纖纎纛纜缸缺罅罌罍罎罐网罕罔罘罟罠罨罩罧罸羂羆羃羈羇羌羔羞羝羚羣羯羲羹羮羶羸譱翅翆翊翕翔翡翦翩翳翹飜耆耄耋耒耘耙耜耡耨耿耻聊聆聒聘聚聟聢聨聳聲聰聶聹聽聿肄肆肅肛肓肚肭冐肬胛胥胙胝胄胚胖脉胯胱脛脩脣脯腋"
  ],
  [
    "e440",
    "隋腆脾腓腑胼腱腮腥腦腴膃膈膊膀膂膠膕膤膣腟膓膩膰膵膾膸膽臀臂膺臉臍臑臙臘臈臚臟臠臧臺臻臾舁舂舅與舊舍舐舖舩舫舸舳艀艙艘艝艚艟艤"
  ],
  [
    "e480",
    "艢艨艪艫舮艱艷艸艾芍芒芫芟芻芬苡苣苟苒苴苳苺莓范苻苹苞茆苜茉苙茵茴茖茲茱荀茹荐荅茯茫茗茘莅莚莪莟莢莖茣莎莇莊荼莵荳荵莠莉莨菴萓菫菎菽萃菘萋菁菷萇菠菲萍萢萠莽萸蔆菻葭萪萼蕚蒄葷葫蒭葮蒂葩葆萬葯葹萵蓊葢蒹蒿蒟蓙蓍蒻蓚蓐蓁蓆蓖蒡蔡蓿蓴蔗蔘蔬蔟蔕蔔蓼蕀蕣蕘蕈"
  ],
  [
    "e540",
    "蕁蘂蕋蕕薀薤薈薑薊薨蕭薔薛藪薇薜蕷蕾薐藉薺藏薹藐藕藝藥藜藹蘊蘓蘋藾藺蘆蘢蘚蘰蘿虍乕虔號虧虱蚓蚣蚩蚪蚋蚌蚶蚯蛄蛆蚰蛉蠣蚫蛔蛞蛩蛬"
  ],
  [
    "e580",
    "蛟蛛蛯蜒蜆蜈蜀蜃蛻蜑蜉蜍蛹蜊蜴蜿蜷蜻蜥蜩蜚蝠蝟蝸蝌蝎蝴蝗蝨蝮蝙蝓蝣蝪蠅螢螟螂螯蟋螽蟀蟐雖螫蟄螳蟇蟆螻蟯蟲蟠蠏蠍蟾蟶蟷蠎蟒蠑蠖蠕蠢蠡蠱蠶蠹蠧蠻衄衂衒衙衞衢衫袁衾袞衵衽袵衲袂袗袒袮袙袢袍袤袰袿袱裃裄裔裘裙裝裹褂裼裴裨裲褄褌褊褓襃褞褥褪褫襁襄褻褶褸襌褝襠襞"
  ],
  [
    "e640",
    "襦襤襭襪襯襴襷襾覃覈覊覓覘覡覩覦覬覯覲覺覽覿觀觚觜觝觧觴觸訃訖訐訌訛訝訥訶詁詛詒詆詈詼詭詬詢誅誂誄誨誡誑誥誦誚誣諄諍諂諚諫諳諧"
  ],
  [
    "e680",
    "諤諱謔諠諢諷諞諛謌謇謚諡謖謐謗謠謳鞫謦謫謾謨譁譌譏譎證譖譛譚譫譟譬譯譴譽讀讌讎讒讓讖讙讚谺豁谿豈豌豎豐豕豢豬豸豺貂貉貅貊貍貎貔豼貘戝貭貪貽貲貳貮貶賈賁賤賣賚賽賺賻贄贅贊贇贏贍贐齎贓賍贔贖赧赭赱赳趁趙跂趾趺跏跚跖跌跛跋跪跫跟跣跼踈踉跿踝踞踐踟蹂踵踰踴蹊"
  ],
  [
    "e740",
    "蹇蹉蹌蹐蹈蹙蹤蹠踪蹣蹕蹶蹲蹼躁躇躅躄躋躊躓躑躔躙躪躡躬躰軆躱躾軅軈軋軛軣軼軻軫軾輊輅輕輒輙輓輜輟輛輌輦輳輻輹轅轂輾轌轉轆轎轗轜"
  ],
  [
    "e780",
    "轢轣轤辜辟辣辭辯辷迚迥迢迪迯邇迴逅迹迺逑逕逡逍逞逖逋逧逶逵逹迸遏遐遑遒逎遉逾遖遘遞遨遯遶隨遲邂遽邁邀邊邉邏邨邯邱邵郢郤扈郛鄂鄒鄙鄲鄰酊酖酘酣酥酩酳酲醋醉醂醢醫醯醪醵醴醺釀釁釉釋釐釖釟釡釛釼釵釶鈞釿鈔鈬鈕鈑鉞鉗鉅鉉鉤鉈銕鈿鉋鉐銜銖銓銛鉚鋏銹銷鋩錏鋺鍄錮"
  ],
  [
    "e840",
    "錙錢錚錣錺錵錻鍜鍠鍼鍮鍖鎰鎬鎭鎔鎹鏖鏗鏨鏥鏘鏃鏝鏐鏈鏤鐚鐔鐓鐃鐇鐐鐶鐫鐵鐡鐺鑁鑒鑄鑛鑠鑢鑞鑪鈩鑰鑵鑷鑽鑚鑼鑾钁鑿閂閇閊閔閖閘閙"
  ],
  [
    "e880",
    "閠閨閧閭閼閻閹閾闊濶闃闍闌闕闔闖關闡闥闢阡阨阮阯陂陌陏陋陷陜陞陝陟陦陲陬隍隘隕隗險隧隱隲隰隴隶隸隹雎雋雉雍襍雜霍雕雹霄霆霈霓霎霑霏霖霙霤霪霰霹霽霾靄靆靈靂靉靜靠靤靦靨勒靫靱靹鞅靼鞁靺鞆鞋鞏鞐鞜鞨鞦鞣鞳鞴韃韆韈韋韜韭齏韲竟韶韵頏頌頸頤頡頷頽顆顏顋顫顯顰"
  ],
  [
    "e940",
    "顱顴顳颪颯颱颶飄飃飆飩飫餃餉餒餔餘餡餝餞餤餠餬餮餽餾饂饉饅饐饋饑饒饌饕馗馘馥馭馮馼駟駛駝駘駑駭駮駱駲駻駸騁騏騅駢騙騫騷驅驂驀驃"
  ],
  [
    "e980",
    "騾驕驍驛驗驟驢驥驤驩驫驪骭骰骼髀髏髑髓體髞髟髢髣髦髯髫髮髴髱髷髻鬆鬘鬚鬟鬢鬣鬥鬧鬨鬩鬪鬮鬯鬲魄魃魏魍魎魑魘魴鮓鮃鮑鮖鮗鮟鮠鮨鮴鯀鯊鮹鯆鯏鯑鯒鯣鯢鯤鯔鯡鰺鯲鯱鯰鰕鰔鰉鰓鰌鰆鰈鰒鰊鰄鰮鰛鰥鰤鰡鰰鱇鰲鱆鰾鱚鱠鱧鱶鱸鳧鳬鳰鴉鴈鳫鴃鴆鴪鴦鶯鴣鴟鵄鴕鴒鵁鴿鴾鵆鵈"
  ],
  [
    "ea40",
    "鵝鵞鵤鵑鵐鵙鵲鶉鶇鶫鵯鵺鶚鶤鶩鶲鷄鷁鶻鶸鶺鷆鷏鷂鷙鷓鷸鷦鷭鷯鷽鸚鸛鸞鹵鹹鹽麁麈麋麌麒麕麑麝麥麩麸麪麭靡黌黎黏黐黔黜點黝黠黥黨黯"
  ],
  [
    "ea80",
    "黴黶黷黹黻黼黽鼇鼈皷鼕鼡鼬鼾齊齒齔齣齟齠齡齦齧齬齪齷齲齶龕龜龠堯槇遙瑤凜熙"
  ],
  [
    "ed40",
    "纊褜鍈銈蓜俉炻昱棈鋹曻彅丨仡仼伀伃伹佖侒侊侚侔俍偀倢俿倞偆偰偂傔僴僘兊兤冝冾凬刕劜劦勀勛匀匇匤卲厓厲叝﨎咜咊咩哿喆坙坥垬埈埇﨏"
  ],
  [
    "ed80",
    "塚增墲夋奓奛奝奣妤妺孖寀甯寘寬尞岦岺峵崧嵓﨑嵂嵭嶸嶹巐弡弴彧德忞恝悅悊惞惕愠惲愑愷愰憘戓抦揵摠撝擎敎昀昕昻昉昮昞昤晥晗晙晴晳暙暠暲暿曺朎朗杦枻桒柀栁桄棏﨓楨﨔榘槢樰橫橆橳橾櫢櫤毖氿汜沆汯泚洄涇浯涖涬淏淸淲淼渹湜渧渼溿澈澵濵瀅瀇瀨炅炫焏焄煜煆煇凞燁燾犱"
  ],
  [
    "ee40",
    "犾猤猪獷玽珉珖珣珒琇珵琦琪琩琮瑢璉璟甁畯皂皜皞皛皦益睆劯砡硎硤硺礰礼神祥禔福禛竑竧靖竫箞精絈絜綷綠緖繒罇羡羽茁荢荿菇菶葈蒴蕓蕙"
  ],
  [
    "ee80",
    "蕫﨟薰蘒﨡蠇裵訒訷詹誧誾諟諸諶譓譿賰賴贒赶﨣軏﨤逸遧郞都鄕鄧釚釗釞釭釮釤釥鈆鈐鈊鈺鉀鈼鉎鉙鉑鈹鉧銧鉷鉸鋧鋗鋙鋐﨧鋕鋠鋓錥錡鋻﨨錞鋿錝錂鍰鍗鎤鏆鏞鏸鐱鑅鑈閒隆﨩隝隯霳霻靃靍靏靑靕顗顥飯飼餧館馞驎髙髜魵魲鮏鮱鮻鰀鵰鵫鶴鸙黑"
  ],
  [
    "eeef",
    "ⅰ",
    9,
    "￢￤＇＂"
  ],
  [
    "f040",
    "",
    62
  ],
  [
    "f080",
    "",
    124
  ],
  [
    "f140",
    "",
    62
  ],
  [
    "f180",
    "",
    124
  ],
  [
    "f240",
    "",
    62
  ],
  [
    "f280",
    "",
    124
  ],
  [
    "f340",
    "",
    62
  ],
  [
    "f380",
    "",
    124
  ],
  [
    "f440",
    "",
    62
  ],
  [
    "f480",
    "",
    124
  ],
  [
    "f540",
    "",
    62
  ],
  [
    "f580",
    "",
    124
  ],
  [
    "f640",
    "",
    62
  ],
  [
    "f680",
    "",
    124
  ],
  [
    "f740",
    "",
    62
  ],
  [
    "f780",
    "",
    124
  ],
  [
    "f840",
    "",
    62
  ],
  [
    "f880",
    "",
    124
  ],
  [
    "f940",
    ""
  ],
  [
    "fa40",
    "ⅰ",
    9,
    "Ⅰ",
    9,
    "￢￤＇＂㈱№℡∵纊褜鍈銈蓜俉炻昱棈鋹曻彅丨仡仼伀伃伹佖侒侊侚侔俍偀倢俿倞偆偰偂傔僴僘兊"
  ],
  [
    "fa80",
    "兤冝冾凬刕劜劦勀勛匀匇匤卲厓厲叝﨎咜咊咩哿喆坙坥垬埈埇﨏塚增墲夋奓奛奝奣妤妺孖寀甯寘寬尞岦岺峵崧嵓﨑嵂嵭嶸嶹巐弡弴彧德忞恝悅悊惞惕愠惲愑愷愰憘戓抦揵摠撝擎敎昀昕昻昉昮昞昤晥晗晙晴晳暙暠暲暿曺朎朗杦枻桒柀栁桄棏﨓楨﨔榘槢樰橫橆橳橾櫢櫤毖氿汜沆汯泚洄涇浯"
  ],
  [
    "fb40",
    "涖涬淏淸淲淼渹湜渧渼溿澈澵濵瀅瀇瀨炅炫焏焄煜煆煇凞燁燾犱犾猤猪獷玽珉珖珣珒琇珵琦琪琩琮瑢璉璟甁畯皂皜皞皛皦益睆劯砡硎硤硺礰礼神"
  ],
  [
    "fb80",
    "祥禔福禛竑竧靖竫箞精絈絜綷綠緖繒罇羡羽茁荢荿菇菶葈蒴蕓蕙蕫﨟薰蘒﨡蠇裵訒訷詹誧誾諟諸諶譓譿賰賴贒赶﨣軏﨤逸遧郞都鄕鄧釚釗釞釭釮釤釥鈆鈐鈊鈺鉀鈼鉎鉙鉑鈹鉧銧鉷鉸鋧鋗鋙鋐﨧鋕鋠鋓錥錡鋻﨨錞鋿錝錂鍰鍗鎤鏆鏞鏸鐱鑅鑈閒隆﨩隝隯霳霻靃靍靏靑靕顗顥飯飼餧館馞驎髙"
  ],
  [
    "fc40",
    "髜魵魲鮏鮱鮻鰀鵰鵫鶴鸙黑"
  ]
], e8 = [
  [
    "0",
    "\0",
    127
  ],
  [
    "8ea1",
    "｡",
    62
  ],
  [
    "a1a1",
    "　、。，．・：；？！゛゜´｀¨＾￣＿ヽヾゝゞ〃仝々〆〇ー―‐／＼～∥｜…‥‘’“”（）〔〕［］｛｝〈",
    9,
    "＋－±×÷＝≠＜＞≦≧∞∴♂♀°′″℃￥＄￠￡％＃＆＊＠§☆★○●◎◇"
  ],
  [
    "a2a1",
    "◆□■△▲▽▼※〒→←↑↓〓"
  ],
  [
    "a2ba",
    "∈∋⊆⊇⊂⊃∪∩"
  ],
  [
    "a2ca",
    "∧∨￢⇒⇔∀∃"
  ],
  [
    "a2dc",
    "∠⊥⌒∂∇≡≒≪≫√∽∝∵∫∬"
  ],
  [
    "a2f2",
    "Å‰♯♭♪†‡¶"
  ],
  [
    "a2fe",
    "◯"
  ],
  [
    "a3b0",
    "０",
    9
  ],
  [
    "a3c1",
    "Ａ",
    25
  ],
  [
    "a3e1",
    "ａ",
    25
  ],
  [
    "a4a1",
    "ぁ",
    82
  ],
  [
    "a5a1",
    "ァ",
    85
  ],
  [
    "a6a1",
    "Α",
    16,
    "Σ",
    6
  ],
  [
    "a6c1",
    "α",
    16,
    "σ",
    6
  ],
  [
    "a7a1",
    "А",
    5,
    "ЁЖ",
    25
  ],
  [
    "a7d1",
    "а",
    5,
    "ёж",
    25
  ],
  [
    "a8a1",
    "─│┌┐┘└├┬┤┴┼━┃┏┓┛┗┣┳┫┻╋┠┯┨┷┿┝┰┥┸╂"
  ],
  [
    "ada1",
    "①",
    19,
    "Ⅰ",
    9
  ],
  [
    "adc0",
    "㍉㌔㌢㍍㌘㌧㌃㌶㍑㍗㌍㌦㌣㌫㍊㌻㎜㎝㎞㎎㎏㏄㎡"
  ],
  [
    "addf",
    "㍻〝〟№㏍℡㊤",
    4,
    "㈱㈲㈹㍾㍽㍼≒≡∫∮∑√⊥∠∟⊿∵∩∪"
  ],
  [
    "b0a1",
    "亜唖娃阿哀愛挨姶逢葵茜穐悪握渥旭葦芦鯵梓圧斡扱宛姐虻飴絢綾鮎或粟袷安庵按暗案闇鞍杏以伊位依偉囲夷委威尉惟意慰易椅為畏異移維緯胃萎衣謂違遺医井亥域育郁磯一壱溢逸稲茨芋鰯允印咽員因姻引飲淫胤蔭"
  ],
  [
    "b1a1",
    "院陰隠韻吋右宇烏羽迂雨卯鵜窺丑碓臼渦嘘唄欝蔚鰻姥厩浦瓜閏噂云運雲荏餌叡営嬰影映曳栄永泳洩瑛盈穎頴英衛詠鋭液疫益駅悦謁越閲榎厭円園堰奄宴延怨掩援沿演炎焔煙燕猿縁艶苑薗遠鉛鴛塩於汚甥凹央奥往応"
  ],
  [
    "b2a1",
    "押旺横欧殴王翁襖鴬鴎黄岡沖荻億屋憶臆桶牡乙俺卸恩温穏音下化仮何伽価佳加可嘉夏嫁家寡科暇果架歌河火珂禍禾稼箇花苛茄荷華菓蝦課嘩貨迦過霞蚊俄峨我牙画臥芽蛾賀雅餓駕介会解回塊壊廻快怪悔恢懐戒拐改"
  ],
  [
    "b3a1",
    "魁晦械海灰界皆絵芥蟹開階貝凱劾外咳害崖慨概涯碍蓋街該鎧骸浬馨蛙垣柿蛎鈎劃嚇各廓拡撹格核殻獲確穫覚角赫較郭閣隔革学岳楽額顎掛笠樫橿梶鰍潟割喝恰括活渇滑葛褐轄且鰹叶椛樺鞄株兜竃蒲釜鎌噛鴨栢茅萱"
  ],
  [
    "b4a1",
    "粥刈苅瓦乾侃冠寒刊勘勧巻喚堪姦完官寛干幹患感慣憾換敢柑桓棺款歓汗漢澗潅環甘監看竿管簡緩缶翰肝艦莞観諌貫還鑑間閑関陥韓館舘丸含岸巌玩癌眼岩翫贋雁頑顔願企伎危喜器基奇嬉寄岐希幾忌揮机旗既期棋棄"
  ],
  [
    "b5a1",
    "機帰毅気汽畿祈季稀紀徽規記貴起軌輝飢騎鬼亀偽儀妓宜戯技擬欺犠疑祇義蟻誼議掬菊鞠吉吃喫桔橘詰砧杵黍却客脚虐逆丘久仇休及吸宮弓急救朽求汲泣灸球究窮笈級糾給旧牛去居巨拒拠挙渠虚許距鋸漁禦魚亨享京"
  ],
  [
    "b6a1",
    "供侠僑兇競共凶協匡卿叫喬境峡強彊怯恐恭挟教橋況狂狭矯胸脅興蕎郷鏡響饗驚仰凝尭暁業局曲極玉桐粁僅勤均巾錦斤欣欽琴禁禽筋緊芹菌衿襟謹近金吟銀九倶句区狗玖矩苦躯駆駈駒具愚虞喰空偶寓遇隅串櫛釧屑屈"
  ],
  [
    "b7a1",
    "掘窟沓靴轡窪熊隈粂栗繰桑鍬勲君薫訓群軍郡卦袈祁係傾刑兄啓圭珪型契形径恵慶慧憩掲携敬景桂渓畦稽系経継繋罫茎荊蛍計詣警軽頚鶏芸迎鯨劇戟撃激隙桁傑欠決潔穴結血訣月件倹倦健兼券剣喧圏堅嫌建憲懸拳捲"
  ],
  [
    "b8a1",
    "検権牽犬献研硯絹県肩見謙賢軒遣鍵険顕験鹸元原厳幻弦減源玄現絃舷言諺限乎個古呼固姑孤己庫弧戸故枯湖狐糊袴股胡菰虎誇跨鈷雇顧鼓五互伍午呉吾娯後御悟梧檎瑚碁語誤護醐乞鯉交佼侯候倖光公功効勾厚口向"
  ],
  [
    "b9a1",
    "后喉坑垢好孔孝宏工巧巷幸広庚康弘恒慌抗拘控攻昂晃更杭校梗構江洪浩港溝甲皇硬稿糠紅紘絞綱耕考肯肱腔膏航荒行衡講貢購郊酵鉱砿鋼閤降項香高鴻剛劫号合壕拷濠豪轟麹克刻告国穀酷鵠黒獄漉腰甑忽惚骨狛込"
  ],
  [
    "baa1",
    "此頃今困坤墾婚恨懇昏昆根梱混痕紺艮魂些佐叉唆嵯左差査沙瑳砂詐鎖裟坐座挫債催再最哉塞妻宰彩才採栽歳済災采犀砕砦祭斎細菜裁載際剤在材罪財冴坂阪堺榊肴咲崎埼碕鷺作削咋搾昨朔柵窄策索錯桜鮭笹匙冊刷"
  ],
  [
    "bba1",
    "察拶撮擦札殺薩雑皐鯖捌錆鮫皿晒三傘参山惨撒散桟燦珊産算纂蚕讃賛酸餐斬暫残仕仔伺使刺司史嗣四士始姉姿子屍市師志思指支孜斯施旨枝止死氏獅祉私糸紙紫肢脂至視詞詩試誌諮資賜雌飼歯事似侍児字寺慈持時"
  ],
  [
    "bca1",
    "次滋治爾璽痔磁示而耳自蒔辞汐鹿式識鴫竺軸宍雫七叱執失嫉室悉湿漆疾質実蔀篠偲柴芝屡蕊縞舎写射捨赦斜煮社紗者謝車遮蛇邪借勺尺杓灼爵酌釈錫若寂弱惹主取守手朱殊狩珠種腫趣酒首儒受呪寿授樹綬需囚収周"
  ],
  [
    "bda1",
    "宗就州修愁拾洲秀秋終繍習臭舟蒐衆襲讐蹴輯週酋酬集醜什住充十従戎柔汁渋獣縦重銃叔夙宿淑祝縮粛塾熟出術述俊峻春瞬竣舜駿准循旬楯殉淳準潤盾純巡遵醇順処初所暑曙渚庶緒署書薯藷諸助叙女序徐恕鋤除傷償"
  ],
  [
    "bea1",
    "勝匠升召哨商唱嘗奨妾娼宵将小少尚庄床廠彰承抄招掌捷昇昌昭晶松梢樟樵沼消渉湘焼焦照症省硝礁祥称章笑粧紹肖菖蒋蕉衝裳訟証詔詳象賞醤鉦鍾鐘障鞘上丈丞乗冗剰城場壌嬢常情擾条杖浄状畳穣蒸譲醸錠嘱埴飾"
  ],
  [
    "bfa1",
    "拭植殖燭織職色触食蝕辱尻伸信侵唇娠寝審心慎振新晋森榛浸深申疹真神秦紳臣芯薪親診身辛進針震人仁刃塵壬尋甚尽腎訊迅陣靭笥諏須酢図厨逗吹垂帥推水炊睡粋翠衰遂酔錐錘随瑞髄崇嵩数枢趨雛据杉椙菅頗雀裾"
  ],
  [
    "c0a1",
    "澄摺寸世瀬畝是凄制勢姓征性成政整星晴棲栖正清牲生盛精聖声製西誠誓請逝醒青静斉税脆隻席惜戚斥昔析石積籍績脊責赤跡蹟碩切拙接摂折設窃節説雪絶舌蝉仙先千占宣専尖川戦扇撰栓栴泉浅洗染潜煎煽旋穿箭線"
  ],
  [
    "c1a1",
    "繊羨腺舛船薦詮賎践選遷銭銑閃鮮前善漸然全禅繕膳糎噌塑岨措曾曽楚狙疏疎礎祖租粗素組蘇訴阻遡鼠僧創双叢倉喪壮奏爽宋層匝惣想捜掃挿掻操早曹巣槍槽漕燥争痩相窓糟総綜聡草荘葬蒼藻装走送遭鎗霜騒像増憎"
  ],
  [
    "c2a1",
    "臓蔵贈造促側則即息捉束測足速俗属賊族続卒袖其揃存孫尊損村遜他多太汰詑唾堕妥惰打柁舵楕陀駄騨体堆対耐岱帯待怠態戴替泰滞胎腿苔袋貸退逮隊黛鯛代台大第醍題鷹滝瀧卓啄宅托択拓沢濯琢託鐸濁諾茸凧蛸只"
  ],
  [
    "c3a1",
    "叩但達辰奪脱巽竪辿棚谷狸鱈樽誰丹単嘆坦担探旦歎淡湛炭短端箪綻耽胆蛋誕鍛団壇弾断暖檀段男談値知地弛恥智池痴稚置致蜘遅馳築畜竹筑蓄逐秩窒茶嫡着中仲宙忠抽昼柱注虫衷註酎鋳駐樗瀦猪苧著貯丁兆凋喋寵"
  ],
  [
    "c4a1",
    "帖帳庁弔張彫徴懲挑暢朝潮牒町眺聴脹腸蝶調諜超跳銚長頂鳥勅捗直朕沈珍賃鎮陳津墜椎槌追鎚痛通塚栂掴槻佃漬柘辻蔦綴鍔椿潰坪壷嬬紬爪吊釣鶴亭低停偵剃貞呈堤定帝底庭廷弟悌抵挺提梯汀碇禎程締艇訂諦蹄逓"
  ],
  [
    "c5a1",
    "邸鄭釘鼎泥摘擢敵滴的笛適鏑溺哲徹撤轍迭鉄典填天展店添纏甜貼転顛点伝殿澱田電兎吐堵塗妬屠徒斗杜渡登菟賭途都鍍砥砺努度土奴怒倒党冬凍刀唐塔塘套宕島嶋悼投搭東桃梼棟盗淘湯涛灯燈当痘祷等答筒糖統到"
  ],
  [
    "c6a1",
    "董蕩藤討謄豆踏逃透鐙陶頭騰闘働動同堂導憧撞洞瞳童胴萄道銅峠鴇匿得徳涜特督禿篤毒独読栃橡凸突椴届鳶苫寅酉瀞噸屯惇敦沌豚遁頓呑曇鈍奈那内乍凪薙謎灘捺鍋楢馴縄畷南楠軟難汝二尼弐迩匂賑肉虹廿日乳入"
  ],
  [
    "c7a1",
    "如尿韮任妊忍認濡禰祢寧葱猫熱年念捻撚燃粘乃廼之埜嚢悩濃納能脳膿農覗蚤巴把播覇杷波派琶破婆罵芭馬俳廃拝排敗杯盃牌背肺輩配倍培媒梅楳煤狽買売賠陪這蝿秤矧萩伯剥博拍柏泊白箔粕舶薄迫曝漠爆縛莫駁麦"
  ],
  [
    "c8a1",
    "函箱硲箸肇筈櫨幡肌畑畠八鉢溌発醗髪伐罰抜筏閥鳩噺塙蛤隼伴判半反叛帆搬斑板氾汎版犯班畔繁般藩販範釆煩頒飯挽晩番盤磐蕃蛮匪卑否妃庇彼悲扉批披斐比泌疲皮碑秘緋罷肥被誹費避非飛樋簸備尾微枇毘琵眉美"
  ],
  [
    "c9a1",
    "鼻柊稗匹疋髭彦膝菱肘弼必畢筆逼桧姫媛紐百謬俵彪標氷漂瓢票表評豹廟描病秒苗錨鋲蒜蛭鰭品彬斌浜瀕貧賓頻敏瓶不付埠夫婦富冨布府怖扶敷斧普浮父符腐膚芙譜負賦赴阜附侮撫武舞葡蕪部封楓風葺蕗伏副復幅服"
  ],
  [
    "caa1",
    "福腹複覆淵弗払沸仏物鮒分吻噴墳憤扮焚奮粉糞紛雰文聞丙併兵塀幣平弊柄並蔽閉陛米頁僻壁癖碧別瞥蔑箆偏変片篇編辺返遍便勉娩弁鞭保舗鋪圃捕歩甫補輔穂募墓慕戊暮母簿菩倣俸包呆報奉宝峰峯崩庖抱捧放方朋"
  ],
  [
    "cba1",
    "法泡烹砲縫胞芳萌蓬蜂褒訪豊邦鋒飽鳳鵬乏亡傍剖坊妨帽忘忙房暴望某棒冒紡肪膨謀貌貿鉾防吠頬北僕卜墨撲朴牧睦穆釦勃没殆堀幌奔本翻凡盆摩磨魔麻埋妹昧枚毎哩槙幕膜枕鮪柾鱒桝亦俣又抹末沫迄侭繭麿万慢満"
  ],
  [
    "cca1",
    "漫蔓味未魅巳箕岬密蜜湊蓑稔脈妙粍民眠務夢無牟矛霧鵡椋婿娘冥名命明盟迷銘鳴姪牝滅免棉綿緬面麺摸模茂妄孟毛猛盲網耗蒙儲木黙目杢勿餅尤戻籾貰問悶紋門匁也冶夜爺耶野弥矢厄役約薬訳躍靖柳薮鑓愉愈油癒"
  ],
  [
    "cda1",
    "諭輸唯佑優勇友宥幽悠憂揖有柚湧涌猶猷由祐裕誘遊邑郵雄融夕予余与誉輿預傭幼妖容庸揚揺擁曜楊様洋溶熔用窯羊耀葉蓉要謡踊遥陽養慾抑欲沃浴翌翼淀羅螺裸来莱頼雷洛絡落酪乱卵嵐欄濫藍蘭覧利吏履李梨理璃"
  ],
  [
    "cea1",
    "痢裏裡里離陸律率立葎掠略劉流溜琉留硫粒隆竜龍侶慮旅虜了亮僚両凌寮料梁涼猟療瞭稜糧良諒遼量陵領力緑倫厘林淋燐琳臨輪隣鱗麟瑠塁涙累類令伶例冷励嶺怜玲礼苓鈴隷零霊麗齢暦歴列劣烈裂廉恋憐漣煉簾練聯"
  ],
  [
    "cfa1",
    "蓮連錬呂魯櫓炉賂路露労婁廊弄朗楼榔浪漏牢狼篭老聾蝋郎六麓禄肋録論倭和話歪賄脇惑枠鷲亙亘鰐詫藁蕨椀湾碗腕"
  ],
  [
    "d0a1",
    "弌丐丕个丱丶丼丿乂乖乘亂亅豫亊舒弍于亞亟亠亢亰亳亶从仍仄仆仂仗仞仭仟价伉佚估佛佝佗佇佶侈侏侘佻佩佰侑佯來侖儘俔俟俎俘俛俑俚俐俤俥倚倨倔倪倥倅伜俶倡倩倬俾俯們倆偃假會偕偐偈做偖偬偸傀傚傅傴傲"
  ],
  [
    "d1a1",
    "僉僊傳僂僖僞僥僭僣僮價僵儉儁儂儖儕儔儚儡儺儷儼儻儿兀兒兌兔兢竸兩兪兮冀冂囘册冉冏冑冓冕冖冤冦冢冩冪冫决冱冲冰况冽凅凉凛几處凩凭凰凵凾刄刋刔刎刧刪刮刳刹剏剄剋剌剞剔剪剴剩剳剿剽劍劔劒剱劈劑辨"
  ],
  [
    "d2a1",
    "辧劬劭劼劵勁勍勗勞勣勦飭勠勳勵勸勹匆匈甸匍匐匏匕匚匣匯匱匳匸區卆卅丗卉卍凖卞卩卮夘卻卷厂厖厠厦厥厮厰厶參簒雙叟曼燮叮叨叭叺吁吽呀听吭吼吮吶吩吝呎咏呵咎呟呱呷呰咒呻咀呶咄咐咆哇咢咸咥咬哄哈咨"
  ],
  [
    "d3a1",
    "咫哂咤咾咼哘哥哦唏唔哽哮哭哺哢唹啀啣啌售啜啅啖啗唸唳啝喙喀咯喊喟啻啾喘喞單啼喃喩喇喨嗚嗅嗟嗄嗜嗤嗔嘔嗷嘖嗾嗽嘛嗹噎噐營嘴嘶嘲嘸噫噤嘯噬噪嚆嚀嚊嚠嚔嚏嚥嚮嚶嚴囂嚼囁囃囀囈囎囑囓囗囮囹圀囿圄圉"
  ],
  [
    "d4a1",
    "圈國圍圓團圖嗇圜圦圷圸坎圻址坏坩埀垈坡坿垉垓垠垳垤垪垰埃埆埔埒埓堊埖埣堋堙堝塲堡塢塋塰毀塒堽塹墅墹墟墫墺壞墻墸墮壅壓壑壗壙壘壥壜壤壟壯壺壹壻壼壽夂夊夐夛梦夥夬夭夲夸夾竒奕奐奎奚奘奢奠奧奬奩"
  ],
  [
    "d5a1",
    "奸妁妝佞侫妣妲姆姨姜妍姙姚娥娟娑娜娉娚婀婬婉娵娶婢婪媚媼媾嫋嫂媽嫣嫗嫦嫩嫖嫺嫻嬌嬋嬖嬲嫐嬪嬶嬾孃孅孀孑孕孚孛孥孩孰孳孵學斈孺宀它宦宸寃寇寉寔寐寤實寢寞寥寫寰寶寳尅將專對尓尠尢尨尸尹屁屆屎屓"
  ],
  [
    "d6a1",
    "屐屏孱屬屮乢屶屹岌岑岔妛岫岻岶岼岷峅岾峇峙峩峽峺峭嶌峪崋崕崗嵜崟崛崑崔崢崚崙崘嵌嵒嵎嵋嵬嵳嵶嶇嶄嶂嶢嶝嶬嶮嶽嶐嶷嶼巉巍巓巒巖巛巫已巵帋帚帙帑帛帶帷幄幃幀幎幗幔幟幢幤幇幵并幺麼广庠廁廂廈廐廏"
  ],
  [
    "d7a1",
    "廖廣廝廚廛廢廡廨廩廬廱廳廰廴廸廾弃弉彝彜弋弑弖弩弭弸彁彈彌彎弯彑彖彗彙彡彭彳彷徃徂彿徊很徑徇從徙徘徠徨徭徼忖忻忤忸忱忝悳忿怡恠怙怐怩怎怱怛怕怫怦怏怺恚恁恪恷恟恊恆恍恣恃恤恂恬恫恙悁悍惧悃悚"
  ],
  [
    "d8a1",
    "悄悛悖悗悒悧悋惡悸惠惓悴忰悽惆悵惘慍愕愆惶惷愀惴惺愃愡惻惱愍愎慇愾愨愧慊愿愼愬愴愽慂慄慳慷慘慙慚慫慴慯慥慱慟慝慓慵憙憖憇憬憔憚憊憑憫憮懌懊應懷懈懃懆憺懋罹懍懦懣懶懺懴懿懽懼懾戀戈戉戍戌戔戛"
  ],
  [
    "d9a1",
    "戞戡截戮戰戲戳扁扎扞扣扛扠扨扼抂抉找抒抓抖拔抃抔拗拑抻拏拿拆擔拈拜拌拊拂拇抛拉挌拮拱挧挂挈拯拵捐挾捍搜捏掖掎掀掫捶掣掏掉掟掵捫捩掾揩揀揆揣揉插揶揄搖搴搆搓搦搶攝搗搨搏摧摯摶摎攪撕撓撥撩撈撼"
  ],
  [
    "daa1",
    "據擒擅擇撻擘擂擱擧舉擠擡抬擣擯攬擶擴擲擺攀擽攘攜攅攤攣攫攴攵攷收攸畋效敖敕敍敘敞敝敲數斂斃變斛斟斫斷旃旆旁旄旌旒旛旙无旡旱杲昊昃旻杳昵昶昴昜晏晄晉晁晞晝晤晧晨晟晢晰暃暈暎暉暄暘暝曁暹曉暾暼"
  ],
  [
    "dba1",
    "曄暸曖曚曠昿曦曩曰曵曷朏朖朞朦朧霸朮朿朶杁朸朷杆杞杠杙杣杤枉杰枩杼杪枌枋枦枡枅枷柯枴柬枳柩枸柤柞柝柢柮枹柎柆柧檜栞框栩桀桍栲桎梳栫桙档桷桿梟梏梭梔條梛梃檮梹桴梵梠梺椏梍桾椁棊椈棘椢椦棡椌棍"
  ],
  [
    "dca1",
    "棔棧棕椶椒椄棗棣椥棹棠棯椨椪椚椣椡棆楹楷楜楸楫楔楾楮椹楴椽楙椰楡楞楝榁楪榲榮槐榿槁槓榾槎寨槊槝榻槃榧樮榑榠榜榕榴槞槨樂樛槿權槹槲槧樅榱樞槭樔槫樊樒櫁樣樓橄樌橲樶橸橇橢橙橦橈樸樢檐檍檠檄檢檣"
  ],
  [
    "dda1",
    "檗蘗檻櫃櫂檸檳檬櫞櫑櫟檪櫚櫪櫻欅蘖櫺欒欖鬱欟欸欷盜欹飮歇歃歉歐歙歔歛歟歡歸歹歿殀殄殃殍殘殕殞殤殪殫殯殲殱殳殷殼毆毋毓毟毬毫毳毯麾氈氓气氛氤氣汞汕汢汪沂沍沚沁沛汾汨汳沒沐泄泱泓沽泗泅泝沮沱沾"
  ],
  [
    "dea1",
    "沺泛泯泙泪洟衍洶洫洽洸洙洵洳洒洌浣涓浤浚浹浙涎涕濤涅淹渕渊涵淇淦涸淆淬淞淌淨淒淅淺淙淤淕淪淮渭湮渮渙湲湟渾渣湫渫湶湍渟湃渺湎渤滿渝游溂溪溘滉溷滓溽溯滄溲滔滕溏溥滂溟潁漑灌滬滸滾漿滲漱滯漲滌"
  ],
  [
    "dfa1",
    "漾漓滷澆潺潸澁澀潯潛濳潭澂潼潘澎澑濂潦澳澣澡澤澹濆澪濟濕濬濔濘濱濮濛瀉瀋濺瀑瀁瀏濾瀛瀚潴瀝瀘瀟瀰瀾瀲灑灣炙炒炯烱炬炸炳炮烟烋烝烙焉烽焜焙煥煕熈煦煢煌煖煬熏燻熄熕熨熬燗熹熾燒燉燔燎燠燬燧燵燼"
  ],
  [
    "e0a1",
    "燹燿爍爐爛爨爭爬爰爲爻爼爿牀牆牋牘牴牾犂犁犇犒犖犢犧犹犲狃狆狄狎狒狢狠狡狹狷倏猗猊猜猖猝猴猯猩猥猾獎獏默獗獪獨獰獸獵獻獺珈玳珎玻珀珥珮珞璢琅瑯琥珸琲琺瑕琿瑟瑙瑁瑜瑩瑰瑣瑪瑶瑾璋璞璧瓊瓏瓔珱"
  ],
  [
    "e1a1",
    "瓠瓣瓧瓩瓮瓲瓰瓱瓸瓷甄甃甅甌甎甍甕甓甞甦甬甼畄畍畊畉畛畆畚畩畤畧畫畭畸當疆疇畴疊疉疂疔疚疝疥疣痂疳痃疵疽疸疼疱痍痊痒痙痣痞痾痿痼瘁痰痺痲痳瘋瘍瘉瘟瘧瘠瘡瘢瘤瘴瘰瘻癇癈癆癜癘癡癢癨癩癪癧癬癰"
  ],
  [
    "e2a1",
    "癲癶癸發皀皃皈皋皎皖皓皙皚皰皴皸皹皺盂盍盖盒盞盡盥盧盪蘯盻眈眇眄眩眤眞眥眦眛眷眸睇睚睨睫睛睥睿睾睹瞎瞋瞑瞠瞞瞰瞶瞹瞿瞼瞽瞻矇矍矗矚矜矣矮矼砌砒礦砠礪硅碎硴碆硼碚碌碣碵碪碯磑磆磋磔碾碼磅磊磬"
  ],
  [
    "e3a1",
    "磧磚磽磴礇礒礑礙礬礫祀祠祗祟祚祕祓祺祿禊禝禧齋禪禮禳禹禺秉秕秧秬秡秣稈稍稘稙稠稟禀稱稻稾稷穃穗穉穡穢穩龝穰穹穽窈窗窕窘窖窩竈窰窶竅竄窿邃竇竊竍竏竕竓站竚竝竡竢竦竭竰笂笏笊笆笳笘笙笞笵笨笶筐"
  ],
  [
    "e4a1",
    "筺笄筍笋筌筅筵筥筴筧筰筱筬筮箝箘箟箍箜箚箋箒箏筝箙篋篁篌篏箴篆篝篩簑簔篦篥籠簀簇簓篳篷簗簍篶簣簧簪簟簷簫簽籌籃籔籏籀籐籘籟籤籖籥籬籵粃粐粤粭粢粫粡粨粳粲粱粮粹粽糀糅糂糘糒糜糢鬻糯糲糴糶糺紆"
  ],
  [
    "e5a1",
    "紂紜紕紊絅絋紮紲紿紵絆絳絖絎絲絨絮絏絣經綉絛綏絽綛綺綮綣綵緇綽綫總綢綯緜綸綟綰緘緝緤緞緻緲緡縅縊縣縡縒縱縟縉縋縢繆繦縻縵縹繃縷縲縺繧繝繖繞繙繚繹繪繩繼繻纃緕繽辮繿纈纉續纒纐纓纔纖纎纛纜缸缺"
  ],
  [
    "e6a1",
    "罅罌罍罎罐网罕罔罘罟罠罨罩罧罸羂羆羃羈羇羌羔羞羝羚羣羯羲羹羮羶羸譱翅翆翊翕翔翡翦翩翳翹飜耆耄耋耒耘耙耜耡耨耿耻聊聆聒聘聚聟聢聨聳聲聰聶聹聽聿肄肆肅肛肓肚肭冐肬胛胥胙胝胄胚胖脉胯胱脛脩脣脯腋"
  ],
  [
    "e7a1",
    "隋腆脾腓腑胼腱腮腥腦腴膃膈膊膀膂膠膕膤膣腟膓膩膰膵膾膸膽臀臂膺臉臍臑臙臘臈臚臟臠臧臺臻臾舁舂舅與舊舍舐舖舩舫舸舳艀艙艘艝艚艟艤艢艨艪艫舮艱艷艸艾芍芒芫芟芻芬苡苣苟苒苴苳苺莓范苻苹苞茆苜茉苙"
  ],
  [
    "e8a1",
    "茵茴茖茲茱荀茹荐荅茯茫茗茘莅莚莪莟莢莖茣莎莇莊荼莵荳荵莠莉莨菴萓菫菎菽萃菘萋菁菷萇菠菲萍萢萠莽萸蔆菻葭萪萼蕚蒄葷葫蒭葮蒂葩葆萬葯葹萵蓊葢蒹蒿蒟蓙蓍蒻蓚蓐蓁蓆蓖蒡蔡蓿蓴蔗蔘蔬蔟蔕蔔蓼蕀蕣蕘蕈"
  ],
  [
    "e9a1",
    "蕁蘂蕋蕕薀薤薈薑薊薨蕭薔薛藪薇薜蕷蕾薐藉薺藏薹藐藕藝藥藜藹蘊蘓蘋藾藺蘆蘢蘚蘰蘿虍乕虔號虧虱蚓蚣蚩蚪蚋蚌蚶蚯蛄蛆蚰蛉蠣蚫蛔蛞蛩蛬蛟蛛蛯蜒蜆蜈蜀蜃蛻蜑蜉蜍蛹蜊蜴蜿蜷蜻蜥蜩蜚蝠蝟蝸蝌蝎蝴蝗蝨蝮蝙"
  ],
  [
    "eaa1",
    "蝓蝣蝪蠅螢螟螂螯蟋螽蟀蟐雖螫蟄螳蟇蟆螻蟯蟲蟠蠏蠍蟾蟶蟷蠎蟒蠑蠖蠕蠢蠡蠱蠶蠹蠧蠻衄衂衒衙衞衢衫袁衾袞衵衽袵衲袂袗袒袮袙袢袍袤袰袿袱裃裄裔裘裙裝裹褂裼裴裨裲褄褌褊褓襃褞褥褪褫襁襄褻褶褸襌褝襠襞"
  ],
  [
    "eba1",
    "襦襤襭襪襯襴襷襾覃覈覊覓覘覡覩覦覬覯覲覺覽覿觀觚觜觝觧觴觸訃訖訐訌訛訝訥訶詁詛詒詆詈詼詭詬詢誅誂誄誨誡誑誥誦誚誣諄諍諂諚諫諳諧諤諱謔諠諢諷諞諛謌謇謚諡謖謐謗謠謳鞫謦謫謾謨譁譌譏譎證譖譛譚譫"
  ],
  [
    "eca1",
    "譟譬譯譴譽讀讌讎讒讓讖讙讚谺豁谿豈豌豎豐豕豢豬豸豺貂貉貅貊貍貎貔豼貘戝貭貪貽貲貳貮貶賈賁賤賣賚賽賺賻贄贅贊贇贏贍贐齎贓賍贔贖赧赭赱赳趁趙跂趾趺跏跚跖跌跛跋跪跫跟跣跼踈踉跿踝踞踐踟蹂踵踰踴蹊"
  ],
  [
    "eda1",
    "蹇蹉蹌蹐蹈蹙蹤蹠踪蹣蹕蹶蹲蹼躁躇躅躄躋躊躓躑躔躙躪躡躬躰軆躱躾軅軈軋軛軣軼軻軫軾輊輅輕輒輙輓輜輟輛輌輦輳輻輹轅轂輾轌轉轆轎轗轜轢轣轤辜辟辣辭辯辷迚迥迢迪迯邇迴逅迹迺逑逕逡逍逞逖逋逧逶逵逹迸"
  ],
  [
    "eea1",
    "遏遐遑遒逎遉逾遖遘遞遨遯遶隨遲邂遽邁邀邊邉邏邨邯邱邵郢郤扈郛鄂鄒鄙鄲鄰酊酖酘酣酥酩酳酲醋醉醂醢醫醯醪醵醴醺釀釁釉釋釐釖釟釡釛釼釵釶鈞釿鈔鈬鈕鈑鉞鉗鉅鉉鉤鉈銕鈿鉋鉐銜銖銓銛鉚鋏銹銷鋩錏鋺鍄錮"
  ],
  [
    "efa1",
    "錙錢錚錣錺錵錻鍜鍠鍼鍮鍖鎰鎬鎭鎔鎹鏖鏗鏨鏥鏘鏃鏝鏐鏈鏤鐚鐔鐓鐃鐇鐐鐶鐫鐵鐡鐺鑁鑒鑄鑛鑠鑢鑞鑪鈩鑰鑵鑷鑽鑚鑼鑾钁鑿閂閇閊閔閖閘閙閠閨閧閭閼閻閹閾闊濶闃闍闌闕闔闖關闡闥闢阡阨阮阯陂陌陏陋陷陜陞"
  ],
  [
    "f0a1",
    "陝陟陦陲陬隍隘隕隗險隧隱隲隰隴隶隸隹雎雋雉雍襍雜霍雕雹霄霆霈霓霎霑霏霖霙霤霪霰霹霽霾靄靆靈靂靉靜靠靤靦靨勒靫靱靹鞅靼鞁靺鞆鞋鞏鞐鞜鞨鞦鞣鞳鞴韃韆韈韋韜韭齏韲竟韶韵頏頌頸頤頡頷頽顆顏顋顫顯顰"
  ],
  [
    "f1a1",
    "顱顴顳颪颯颱颶飄飃飆飩飫餃餉餒餔餘餡餝餞餤餠餬餮餽餾饂饉饅饐饋饑饒饌饕馗馘馥馭馮馼駟駛駝駘駑駭駮駱駲駻駸騁騏騅駢騙騫騷驅驂驀驃騾驕驍驛驗驟驢驥驤驩驫驪骭骰骼髀髏髑髓體髞髟髢髣髦髯髫髮髴髱髷"
  ],
  [
    "f2a1",
    "髻鬆鬘鬚鬟鬢鬣鬥鬧鬨鬩鬪鬮鬯鬲魄魃魏魍魎魑魘魴鮓鮃鮑鮖鮗鮟鮠鮨鮴鯀鯊鮹鯆鯏鯑鯒鯣鯢鯤鯔鯡鰺鯲鯱鯰鰕鰔鰉鰓鰌鰆鰈鰒鰊鰄鰮鰛鰥鰤鰡鰰鱇鰲鱆鰾鱚鱠鱧鱶鱸鳧鳬鳰鴉鴈鳫鴃鴆鴪鴦鶯鴣鴟鵄鴕鴒鵁鴿鴾鵆鵈"
  ],
  [
    "f3a1",
    "鵝鵞鵤鵑鵐鵙鵲鶉鶇鶫鵯鵺鶚鶤鶩鶲鷄鷁鶻鶸鶺鷆鷏鷂鷙鷓鷸鷦鷭鷯鷽鸚鸛鸞鹵鹹鹽麁麈麋麌麒麕麑麝麥麩麸麪麭靡黌黎黏黐黔黜點黝黠黥黨黯黴黶黷黹黻黼黽鼇鼈皷鼕鼡鼬鼾齊齒齔齣齟齠齡齦齧齬齪齷齲齶龕龜龠"
  ],
  [
    "f4a1",
    "堯槇遙瑤凜熙"
  ],
  [
    "f9a1",
    "纊褜鍈銈蓜俉炻昱棈鋹曻彅丨仡仼伀伃伹佖侒侊侚侔俍偀倢俿倞偆偰偂傔僴僘兊兤冝冾凬刕劜劦勀勛匀匇匤卲厓厲叝﨎咜咊咩哿喆坙坥垬埈埇﨏塚增墲夋奓奛奝奣妤妺孖寀甯寘寬尞岦岺峵崧嵓﨑嵂嵭嶸嶹巐弡弴彧德"
  ],
  [
    "faa1",
    "忞恝悅悊惞惕愠惲愑愷愰憘戓抦揵摠撝擎敎昀昕昻昉昮昞昤晥晗晙晴晳暙暠暲暿曺朎朗杦枻桒柀栁桄棏﨓楨﨔榘槢樰橫橆橳橾櫢櫤毖氿汜沆汯泚洄涇浯涖涬淏淸淲淼渹湜渧渼溿澈澵濵瀅瀇瀨炅炫焏焄煜煆煇凞燁燾犱"
  ],
  [
    "fba1",
    "犾猤猪獷玽珉珖珣珒琇珵琦琪琩琮瑢璉璟甁畯皂皜皞皛皦益睆劯砡硎硤硺礰礼神祥禔福禛竑竧靖竫箞精絈絜綷綠緖繒罇羡羽茁荢荿菇菶葈蒴蕓蕙蕫﨟薰蘒﨡蠇裵訒訷詹誧誾諟諸諶譓譿賰賴贒赶﨣軏﨤逸遧郞都鄕鄧釚"
  ],
  [
    "fca1",
    "釗釞釭釮釤釥鈆鈐鈊鈺鉀鈼鉎鉙鉑鈹鉧銧鉷鉸鋧鋗鋙鋐﨧鋕鋠鋓錥錡鋻﨨錞鋿錝錂鍰鍗鎤鏆鏞鏸鐱鑅鑈閒隆﨩隝隯霳霻靃靍靏靑靕顗顥飯飼餧館馞驎髙髜魵魲鮏鮱鮻鰀鵰鵫鶴鸙黑"
  ],
  [
    "fcf1",
    "ⅰ",
    9,
    "￢￤＇＂"
  ],
  [
    "8fa2af",
    "˘ˇ¸˙˝¯˛˚～΄΅"
  ],
  [
    "8fa2c2",
    "¡¦¿"
  ],
  [
    "8fa2eb",
    "ºª©®™¤№"
  ],
  [
    "8fa6e1",
    "ΆΈΉΊΪ"
  ],
  [
    "8fa6e7",
    "Ό"
  ],
  [
    "8fa6e9",
    "ΎΫ"
  ],
  [
    "8fa6ec",
    "Ώ"
  ],
  [
    "8fa6f1",
    "άέήίϊΐόςύϋΰώ"
  ],
  [
    "8fa7c2",
    "Ђ",
    10,
    "ЎЏ"
  ],
  [
    "8fa7f2",
    "ђ",
    10,
    "ўџ"
  ],
  [
    "8fa9a1",
    "ÆĐ"
  ],
  [
    "8fa9a4",
    "Ħ"
  ],
  [
    "8fa9a6",
    "Ĳ"
  ],
  [
    "8fa9a8",
    "ŁĿ"
  ],
  [
    "8fa9ab",
    "ŊØŒ"
  ],
  [
    "8fa9af",
    "ŦÞ"
  ],
  [
    "8fa9c1",
    "æđðħıĳĸłŀŉŋøœßŧþ"
  ],
  [
    "8faaa1",
    "ÁÀÄÂĂǍĀĄÅÃĆĈČÇĊĎÉÈËÊĚĖĒĘ"
  ],
  [
    "8faaba",
    "ĜĞĢĠĤÍÌÏÎǏİĪĮĨĴĶĹĽĻŃŇŅÑÓÒÖÔǑŐŌÕŔŘŖŚŜŠŞŤŢÚÙÜÛŬǓŰŪŲŮŨǗǛǙǕŴÝŸŶŹŽŻ"
  ],
  [
    "8faba1",
    "áàäâăǎāąåãćĉčçċďéèëêěėēęǵĝğ"
  ],
  [
    "8fabbd",
    "ġĥíìïîǐ"
  ],
  [
    "8fabc5",
    "īįĩĵķĺľļńňņñóòöôǒőōõŕřŗśŝšşťţúùüûŭǔűūųůũǘǜǚǖŵýÿŷźžż"
  ],
  [
    "8fb0a1",
    "丂丄丅丌丒丟丣两丨丫丮丯丰丵乀乁乄乇乑乚乜乣乨乩乴乵乹乿亍亖亗亝亯亹仃仐仚仛仠仡仢仨仯仱仳仵份仾仿伀伂伃伈伋伌伒伕伖众伙伮伱你伳伵伷伹伻伾佀佂佈佉佋佌佒佔佖佘佟佣佪佬佮佱佷佸佹佺佽佾侁侂侄"
  ],
  [
    "8fb1a1",
    "侅侉侊侌侎侐侒侓侔侗侙侚侞侟侲侷侹侻侼侽侾俀俁俅俆俈俉俋俌俍俏俒俜俠俢俰俲俼俽俿倀倁倄倇倊倌倎倐倓倗倘倛倜倝倞倢倧倮倰倲倳倵偀偁偂偅偆偊偌偎偑偒偓偗偙偟偠偢偣偦偧偪偭偰偱倻傁傃傄傆傊傎傏傐"
  ],
  [
    "8fb2a1",
    "傒傓傔傖傛傜傞",
    4,
    "傪傯傰傹傺傽僀僃僄僇僌僎僐僓僔僘僜僝僟僢僤僦僨僩僯僱僶僺僾儃儆儇儈儋儌儍儎僲儐儗儙儛儜儝儞儣儧儨儬儭儯儱儳儴儵儸儹兂兊兏兓兕兗兘兟兤兦兾冃冄冋冎冘冝冡冣冭冸冺冼冾冿凂"
  ],
  [
    "8fb3a1",
    "凈减凑凒凓凕凘凞凢凥凮凲凳凴凷刁刂刅划刓刕刖刘刢刨刱刲刵刼剅剉剕剗剘剚剜剟剠剡剦剮剷剸剹劀劂劅劊劌劓劕劖劗劘劚劜劤劥劦劧劯劰劶劷劸劺劻劽勀勄勆勈勌勏勑勔勖勛勜勡勥勨勩勪勬勰勱勴勶勷匀匃匊匋"
  ],
  [
    "8fb4a1",
    "匌匑匓匘匛匜匞匟匥匧匨匩匫匬匭匰匲匵匼匽匾卂卌卋卙卛卡卣卥卬卭卲卹卾厃厇厈厎厓厔厙厝厡厤厪厫厯厲厴厵厷厸厺厽叀叅叏叒叓叕叚叝叞叠另叧叵吂吓吚吡吧吨吪启吱吴吵呃呄呇呍呏呞呢呤呦呧呩呫呭呮呴呿"
  ],
  [
    "8fb5a1",
    "咁咃咅咈咉咍咑咕咖咜咟咡咦咧咩咪咭咮咱咷咹咺咻咿哆哊响哎哠哪哬哯哶哼哾哿唀唁唅唈唉唌唍唎唕唪唫唲唵唶唻唼唽啁啇啉啊啍啐啑啘啚啛啞啠啡啤啦啿喁喂喆喈喎喏喑喒喓喔喗喣喤喭喲喿嗁嗃嗆嗉嗋嗌嗎嗑嗒"
  ],
  [
    "8fb6a1",
    "嗓嗗嗘嗛嗞嗢嗩嗶嗿嘅嘈嘊嘍",
    5,
    "嘙嘬嘰嘳嘵嘷嘹嘻嘼嘽嘿噀噁噃噄噆噉噋噍噏噔噞噠噡噢噣噦噩噭噯噱噲噵嚄嚅嚈嚋嚌嚕嚙嚚嚝嚞嚟嚦嚧嚨嚩嚫嚬嚭嚱嚳嚷嚾囅囉囊囋囏囐囌囍囙囜囝囟囡囤",
    4,
    "囱囫园"
  ],
  [
    "8fb7a1",
    "囶囷圁圂圇圊圌圑圕圚圛圝圠圢圣圤圥圩圪圬圮圯圳圴圽圾圿坅坆坌坍坒坢坥坧坨坫坭",
    4,
    "坳坴坵坷坹坺坻坼坾垁垃垌垔垗垙垚垜垝垞垟垡垕垧垨垩垬垸垽埇埈埌埏埕埝埞埤埦埧埩埭埰埵埶埸埽埾埿堃堄堈堉埡"
  ],
  [
    "8fb8a1",
    "堌堍堛堞堟堠堦堧堭堲堹堿塉塌塍塏塐塕塟塡塤塧塨塸塼塿墀墁墇墈墉墊墌墍墏墐墔墖墝墠墡墢墦墩墱墲壄墼壂壈壍壎壐壒壔壖壚壝壡壢壩壳夅夆夋夌夒夓夔虁夝夡夣夤夨夯夰夳夵夶夿奃奆奒奓奙奛奝奞奟奡奣奫奭"
  ],
  [
    "8fb9a1",
    "奯奲奵奶她奻奼妋妌妎妒妕妗妟妤妧妭妮妯妰妳妷妺妼姁姃姄姈姊姍姒姝姞姟姣姤姧姮姯姱姲姴姷娀娄娌娍娎娒娓娞娣娤娧娨娪娭娰婄婅婇婈婌婐婕婞婣婥婧婭婷婺婻婾媋媐媓媖媙媜媞媟媠媢媧媬媱媲媳媵媸媺媻媿"
  ],
  [
    "8fbaa1",
    "嫄嫆嫈嫏嫚嫜嫠嫥嫪嫮嫵嫶嫽嬀嬁嬈嬗嬴嬙嬛嬝嬡嬥嬭嬸孁孋孌孒孖孞孨孮孯孼孽孾孿宁宄宆宊宎宐宑宓宔宖宨宩宬宭宯宱宲宷宺宼寀寁寍寏寖",
    4,
    "寠寯寱寴寽尌尗尞尟尣尦尩尫尬尮尰尲尵尶屙屚屜屢屣屧屨屩"
  ],
  [
    "8fbba1",
    "屭屰屴屵屺屻屼屽岇岈岊岏岒岝岟岠岢岣岦岪岲岴岵岺峉峋峒峝峗峮峱峲峴崁崆崍崒崫崣崤崦崧崱崴崹崽崿嵂嵃嵆嵈嵕嵑嵙嵊嵟嵠嵡嵢嵤嵪嵭嵰嵹嵺嵾嵿嶁嶃嶈嶊嶒嶓嶔嶕嶙嶛嶟嶠嶧嶫嶰嶴嶸嶹巃巇巋巐巎巘巙巠巤"
  ],
  [
    "8fbca1",
    "巩巸巹帀帇帍帒帔帕帘帟帠帮帨帲帵帾幋幐幉幑幖幘幛幜幞幨幪",
    4,
    "幰庀庋庎庢庤庥庨庪庬庱庳庽庾庿廆廌廋廎廑廒廔廕廜廞廥廫异弆弇弈弎弙弜弝弡弢弣弤弨弫弬弮弰弴弶弻弽弿彀彄彅彇彍彐彔彘彛彠彣彤彧"
  ],
  [
    "8fbda1",
    "彯彲彴彵彸彺彽彾徉徍徏徖徜徝徢徧徫徤徬徯徰徱徸忄忇忈忉忋忐",
    4,
    "忞忡忢忨忩忪忬忭忮忯忲忳忶忺忼怇怊怍怓怔怗怘怚怟怤怭怳怵恀恇恈恉恌恑恔恖恗恝恡恧恱恾恿悂悆悈悊悎悑悓悕悘悝悞悢悤悥您悰悱悷"
  ],
  [
    "8fbea1",
    "悻悾惂惄惈惉惊惋惎惏惔惕惙惛惝惞惢惥惲惵惸惼惽愂愇愊愌愐",
    4,
    "愖愗愙愜愞愢愪愫愰愱愵愶愷愹慁慅慆慉慞慠慬慲慸慻慼慿憀憁憃憄憋憍憒憓憗憘憜憝憟憠憥憨憪憭憸憹憼懀懁懂懎懏懕懜懝懞懟懡懢懧懩懥"
  ],
  [
    "8fbfa1",
    "懬懭懯戁戃戄戇戓戕戜戠戢戣戧戩戫戹戽扂扃扄扆扌扐扑扒扔扖扚扜扤扭扯扳扺扽抍抎抏抐抦抨抳抶抷抺抾抿拄拎拕拖拚拪拲拴拼拽挃挄挊挋挍挐挓挖挘挩挪挭挵挶挹挼捁捂捃捄捆捊捋捎捒捓捔捘捛捥捦捬捭捱捴捵"
  ],
  [
    "8fc0a1",
    "捸捼捽捿掂掄掇掊掐掔掕掙掚掞掤掦掭掮掯掽揁揅揈揎揑揓揔揕揜揠揥揪揬揲揳揵揸揹搉搊搐搒搔搘搞搠搢搤搥搩搪搯搰搵搽搿摋摏摑摒摓摔摚摛摜摝摟摠摡摣摭摳摴摻摽撅撇撏撐撑撘撙撛撝撟撡撣撦撨撬撳撽撾撿"
  ],
  [
    "8fc1a1",
    "擄擉擊擋擌擎擐擑擕擗擤擥擩擪擭擰擵擷擻擿攁攄攈攉攊攏攓攔攖攙攛攞攟攢攦攩攮攱攺攼攽敃敇敉敐敒敔敟敠敧敫敺敽斁斅斊斒斕斘斝斠斣斦斮斲斳斴斿旂旈旉旎旐旔旖旘旟旰旲旴旵旹旾旿昀昄昈昉昍昑昒昕昖昝"
  ],
  [
    "8fc2a1",
    "昞昡昢昣昤昦昩昪昫昬昮昰昱昳昹昷晀晅晆晊晌晑晎晗晘晙晛晜晠晡曻晪晫晬晾晳晵晿晷晸晹晻暀晼暋暌暍暐暒暙暚暛暜暟暠暤暭暱暲暵暻暿曀曂曃曈曌曎曏曔曛曟曨曫曬曮曺朅朇朎朓朙朜朠朢朳朾杅杇杈杌杔杕杝"
  ],
  [
    "8fc3a1",
    "杦杬杮杴杶杻极构枎枏枑枓枖枘枙枛枰枱枲枵枻枼枽柹柀柂柃柅柈柉柒柗柙柜柡柦柰柲柶柷桒栔栙栝栟栨栧栬栭栯栰栱栳栻栿桄桅桊桌桕桗桘桛桫桮",
    4,
    "桵桹桺桻桼梂梄梆梈梖梘梚梜梡梣梥梩梪梮梲梻棅棈棌棏"
  ],
  [
    "8fc4a1",
    "棐棑棓棖棙棜棝棥棨棪棫棬棭棰棱棵棶棻棼棽椆椉椊椐椑椓椖椗椱椳椵椸椻楂楅楉楎楗楛楣楤楥楦楨楩楬楰楱楲楺楻楿榀榍榒榖榘榡榥榦榨榫榭榯榷榸榺榼槅槈槑槖槗槢槥槮槯槱槳槵槾樀樁樃樏樑樕樚樝樠樤樨樰樲"
  ],
  [
    "8fc5a1",
    "樴樷樻樾樿橅橆橉橊橎橐橑橒橕橖橛橤橧橪橱橳橾檁檃檆檇檉檋檑檛檝檞檟檥檫檯檰檱檴檽檾檿櫆櫉櫈櫌櫐櫔櫕櫖櫜櫝櫤櫧櫬櫰櫱櫲櫼櫽欂欃欆欇欉欏欐欑欗欛欞欤欨欫欬欯欵欶欻欿歆歊歍歒歖歘歝歠歧歫歮歰歵歽"
  ],
  [
    "8fc6a1",
    "歾殂殅殗殛殟殠殢殣殨殩殬殭殮殰殸殹殽殾毃毄毉毌毖毚毡毣毦毧毮毱毷毹毿氂氄氅氉氍氎氐氒氙氟氦氧氨氬氮氳氵氶氺氻氿汊汋汍汏汒汔汙汛汜汫汭汯汴汶汸汹汻沅沆沇沉沔沕沗沘沜沟沰沲沴泂泆泍泏泐泑泒泔泖"
  ],
  [
    "8fc7a1",
    "泚泜泠泧泩泫泬泮泲泴洄洇洊洎洏洑洓洚洦洧洨汧洮洯洱洹洼洿浗浞浟浡浥浧浯浰浼涂涇涑涒涔涖涗涘涪涬涴涷涹涽涿淄淈淊淎淏淖淛淝淟淠淢淥淩淯淰淴淶淼渀渄渞渢渧渲渶渹渻渼湄湅湈湉湋湏湑湒湓湔湗湜湝湞"
  ],
  [
    "8fc8a1",
    "湢湣湨湳湻湽溍溓溙溠溧溭溮溱溳溻溿滀滁滃滇滈滊滍滎滏滫滭滮滹滻滽漄漈漊漌漍漖漘漚漛漦漩漪漯漰漳漶漻漼漭潏潑潒潓潗潙潚潝潞潡潢潨潬潽潾澃澇澈澋澌澍澐澒澓澔澖澚澟澠澥澦澧澨澮澯澰澵澶澼濅濇濈濊"
  ],
  [
    "8fc9a1",
    "濚濞濨濩濰濵濹濼濽瀀瀅瀆瀇瀍瀗瀠瀣瀯瀴瀷瀹瀼灃灄灈灉灊灋灔灕灝灞灎灤灥灬灮灵灶灾炁炅炆炔",
    4,
    "炛炤炫炰炱炴炷烊烑烓烔烕烖烘烜烤烺焃",
    4,
    "焋焌焏焞焠焫焭焯焰焱焸煁煅煆煇煊煋煐煒煗煚煜煞煠"
  ],
  [
    "8fcaa1",
    "煨煹熀熅熇熌熒熚熛熠熢熯熰熲熳熺熿燀燁燄燋燌燓燖燙燚燜燸燾爀爇爈爉爓爗爚爝爟爤爫爯爴爸爹牁牂牃牅牎牏牐牓牕牖牚牜牞牠牣牨牫牮牯牱牷牸牻牼牿犄犉犍犎犓犛犨犭犮犱犴犾狁狇狉狌狕狖狘狟狥狳狴狺狻"
  ],
  [
    "8fcba1",
    "狾猂猄猅猇猋猍猒猓猘猙猞猢猤猧猨猬猱猲猵猺猻猽獃獍獐獒獖獘獝獞獟獠獦獧獩獫獬獮獯獱獷獹獼玀玁玃玅玆玎玐玓玕玗玘玜玞玟玠玢玥玦玪玫玭玵玷玹玼玽玿珅珆珉珋珌珏珒珓珖珙珝珡珣珦珧珩珴珵珷珹珺珻珽"
  ],
  [
    "8fcca1",
    "珿琀琁琄琇琊琑琚琛琤琦琨",
    9,
    "琹瑀瑃瑄瑆瑇瑋瑍瑑瑒瑗瑝瑢瑦瑧瑨瑫瑭瑮瑱瑲璀璁璅璆璇璉璏璐璑璒璘璙璚璜璟璠璡璣璦璨璩璪璫璮璯璱璲璵璹璻璿瓈瓉瓌瓐瓓瓘瓚瓛瓞瓟瓤瓨瓪瓫瓯瓴瓺瓻瓼瓿甆"
  ],
  [
    "8fcda1",
    "甒甖甗甠甡甤甧甩甪甯甶甹甽甾甿畀畃畇畈畎畐畒畗畞畟畡畯畱畹",
    5,
    "疁疅疐疒疓疕疙疜疢疤疴疺疿痀痁痄痆痌痎痏痗痜痟痠痡痤痧痬痮痯痱痹瘀瘂瘃瘄瘇瘈瘊瘌瘏瘒瘓瘕瘖瘙瘛瘜瘝瘞瘣瘥瘦瘩瘭瘲瘳瘵瘸瘹"
  ],
  [
    "8fcea1",
    "瘺瘼癊癀癁癃癄癅癉癋癕癙癟癤癥癭癮癯癱癴皁皅皌皍皕皛皜皝皟皠皢",
    6,
    "皪皭皽盁盅盉盋盌盎盔盙盠盦盨盬盰盱盶盹盼眀眆眊眎眒眔眕眗眙眚眜眢眨眭眮眯眴眵眶眹眽眾睂睅睆睊睍睎睏睒睖睗睜睞睟睠睢"
  ],
  [
    "8fcfa1",
    "睤睧睪睬睰睲睳睴睺睽瞀瞄瞌瞍瞔瞕瞖瞚瞟瞢瞧瞪瞮瞯瞱瞵瞾矃矉矑矒矕矙矞矟矠矤矦矪矬矰矱矴矸矻砅砆砉砍砎砑砝砡砢砣砭砮砰砵砷硃硄硇硈硌硎硒硜硞硠硡硣硤硨硪确硺硾碊碏碔碘碡碝碞碟碤碨碬碭碰碱碲碳"
  ],
  [
    "8fd0a1",
    "碻碽碿磇磈磉磌磎磒磓磕磖磤磛磟磠磡磦磪磲磳礀磶磷磺磻磿礆礌礐礚礜礞礟礠礥礧礩礭礱礴礵礻礽礿祄祅祆祊祋祏祑祔祘祛祜祧祩祫祲祹祻祼祾禋禌禑禓禔禕禖禘禛禜禡禨禩禫禯禱禴禸离秂秄秇秈秊秏秔秖秚秝秞"
  ],
  [
    "8fd1a1",
    "秠秢秥秪秫秭秱秸秼稂稃稇稉稊稌稑稕稛稞稡稧稫稭稯稰稴稵稸稹稺穄穅穇穈穌穕穖穙穜穝穟穠穥穧穪穭穵穸穾窀窂窅窆窊窋窐窑窔窞窠窣窬窳窵窹窻窼竆竉竌竎竑竛竨竩竫竬竱竴竻竽竾笇笔笟笣笧笩笪笫笭笮笯笰"
  ],
  [
    "8fd2a1",
    "笱笴笽笿筀筁筇筎筕筠筤筦筩筪筭筯筲筳筷箄箉箎箐箑箖箛箞箠箥箬箯箰箲箵箶箺箻箼箽篂篅篈篊篔篖篗篙篚篛篨篪篲篴篵篸篹篺篼篾簁簂簃簄簆簉簋簌簎簏簙簛簠簥簦簨簬簱簳簴簶簹簺籆籊籕籑籒籓籙",
    5
  ],
  [
    "8fd3a1",
    "籡籣籧籩籭籮籰籲籹籼籽粆粇粏粔粞粠粦粰粶粷粺粻粼粿糄糇糈糉糍糏糓糔糕糗糙糚糝糦糩糫糵紃紇紈紉紏紑紒紓紖紝紞紣紦紪紭紱紼紽紾絀絁絇絈絍絑絓絗絙絚絜絝絥絧絪絰絸絺絻絿綁綂綃綅綆綈綋綌綍綑綖綗綝"
  ],
  [
    "8fd4a1",
    "綞綦綧綪綳綶綷綹緂",
    4,
    "緌緍緎緗緙縀緢緥緦緪緫緭緱緵緶緹緺縈縐縑縕縗縜縝縠縧縨縬縭縯縳縶縿繄繅繇繎繐繒繘繟繡繢繥繫繮繯繳繸繾纁纆纇纊纍纑纕纘纚纝纞缼缻缽缾缿罃罄罇罏罒罓罛罜罝罡罣罤罥罦罭"
  ],
  [
    "8fd5a1",
    "罱罽罾罿羀羋羍羏羐羑羖羗羜羡羢羦羪羭羴羼羿翀翃翈翎翏翛翟翣翥翨翬翮翯翲翺翽翾翿耇耈耊耍耎耏耑耓耔耖耝耞耟耠耤耦耬耮耰耴耵耷耹耺耼耾聀聄聠聤聦聭聱聵肁肈肎肜肞肦肧肫肸肹胈胍胏胒胔胕胗胘胠胭胮"
  ],
  [
    "8fd6a1",
    "胰胲胳胶胹胺胾脃脋脖脗脘脜脞脠脤脧脬脰脵脺脼腅腇腊腌腒腗腠腡腧腨腩腭腯腷膁膐膄膅膆膋膎膖膘膛膞膢膮膲膴膻臋臃臅臊臎臏臕臗臛臝臞臡臤臫臬臰臱臲臵臶臸臹臽臿舀舃舏舓舔舙舚舝舡舢舨舲舴舺艃艄艅艆"
  ],
  [
    "8fd7a1",
    "艋艎艏艑艖艜艠艣艧艭艴艻艽艿芀芁芃芄芇芉芊芎芑芔芖芘芚芛芠芡芣芤芧芨芩芪芮芰芲芴芷芺芼芾芿苆苐苕苚苠苢苤苨苪苭苯苶苷苽苾茀茁茇茈茊茋荔茛茝茞茟茡茢茬茭茮茰茳茷茺茼茽荂荃荄荇荍荎荑荕荖荗荰荸"
  ],
  [
    "8fd8a1",
    "荽荿莀莂莄莆莍莒莔莕莘莙莛莜莝莦莧莩莬莾莿菀菇菉菏菐菑菔菝荓菨菪菶菸菹菼萁萆萊萏萑萕萙莭萯萹葅葇葈葊葍葏葑葒葖葘葙葚葜葠葤葥葧葪葰葳葴葶葸葼葽蒁蒅蒒蒓蒕蒞蒦蒨蒩蒪蒯蒱蒴蒺蒽蒾蓀蓂蓇蓈蓌蓏蓓"
  ],
  [
    "8fd9a1",
    "蓜蓧蓪蓯蓰蓱蓲蓷蔲蓺蓻蓽蔂蔃蔇蔌蔎蔐蔜蔞蔢蔣蔤蔥蔧蔪蔫蔯蔳蔴蔶蔿蕆蕏",
    4,
    "蕖蕙蕜",
    6,
    "蕤蕫蕯蕹蕺蕻蕽蕿薁薅薆薉薋薌薏薓薘薝薟薠薢薥薧薴薶薷薸薼薽薾薿藂藇藊藋藎薭藘藚藟藠藦藨藭藳藶藼"
  ],
  [
    "8fdaa1",
    "藿蘀蘄蘅蘍蘎蘐蘑蘒蘘蘙蘛蘞蘡蘧蘩蘶蘸蘺蘼蘽虀虂虆虒虓虖虗虘虙虝虠",
    4,
    "虩虬虯虵虶虷虺蚍蚑蚖蚘蚚蚜蚡蚦蚧蚨蚭蚱蚳蚴蚵蚷蚸蚹蚿蛀蛁蛃蛅蛑蛒蛕蛗蛚蛜蛠蛣蛥蛧蚈蛺蛼蛽蜄蜅蜇蜋蜎蜏蜐蜓蜔蜙蜞蜟蜡蜣"
  ],
  [
    "8fdba1",
    "蜨蜮蜯蜱蜲蜹蜺蜼蜽蜾蝀蝃蝅蝍蝘蝝蝡蝤蝥蝯蝱蝲蝻螃",
    6,
    "螋螌螐螓螕螗螘螙螞螠螣螧螬螭螮螱螵螾螿蟁蟈蟉蟊蟎蟕蟖蟙蟚蟜蟟蟢蟣蟤蟪蟫蟭蟱蟳蟸蟺蟿蠁蠃蠆蠉蠊蠋蠐蠙蠒蠓蠔蠘蠚蠛蠜蠞蠟蠨蠭蠮蠰蠲蠵"
  ],
  [
    "8fdca1",
    "蠺蠼衁衃衅衈衉衊衋衎衑衕衖衘衚衜衟衠衤衩衱衹衻袀袘袚袛袜袟袠袨袪袺袽袾裀裊",
    4,
    "裑裒裓裛裞裧裯裰裱裵裷褁褆褍褎褏褕褖褘褙褚褜褠褦褧褨褰褱褲褵褹褺褾襀襂襅襆襉襏襒襗襚襛襜襡襢襣襫襮襰襳襵襺"
  ],
  [
    "8fdda1",
    "襻襼襽覉覍覐覔覕覛覜覟覠覥覰覴覵覶覷覼觔",
    4,
    "觥觩觫觭觱觳觶觹觽觿訄訅訇訏訑訒訔訕訞訠訢訤訦訫訬訯訵訷訽訾詀詃詅詇詉詍詎詓詖詗詘詜詝詡詥詧詵詶詷詹詺詻詾詿誀誃誆誋誏誐誒誖誗誙誟誧誩誮誯誳"
  ],
  [
    "8fdea1",
    "誶誷誻誾諃諆諈諉諊諑諓諔諕諗諝諟諬諰諴諵諶諼諿謅謆謋謑謜謞謟謊謭謰謷謼譂",
    4,
    "譈譒譓譔譙譍譞譣譭譶譸譹譼譾讁讄讅讋讍讏讔讕讜讞讟谸谹谽谾豅豇豉豋豏豑豓豔豗豘豛豝豙豣豤豦豨豩豭豳豵豶豻豾貆"
  ],
  [
    "8fdfa1",
    "貇貋貐貒貓貙貛貜貤貹貺賅賆賉賋賏賖賕賙賝賡賨賬賯賰賲賵賷賸賾賿贁贃贉贒贗贛赥赩赬赮赿趂趄趈趍趐趑趕趞趟趠趦趫趬趯趲趵趷趹趻跀跅跆跇跈跊跎跑跔跕跗跙跤跥跧跬跰趼跱跲跴跽踁踄踅踆踋踑踔踖踠踡踢"
  ],
  [
    "8fe0a1",
    "踣踦踧踱踳踶踷踸踹踽蹀蹁蹋蹍蹎蹏蹔蹛蹜蹝蹞蹡蹢蹩蹬蹭蹯蹰蹱蹹蹺蹻躂躃躉躐躒躕躚躛躝躞躢躧躩躭躮躳躵躺躻軀軁軃軄軇軏軑軔軜軨軮軰軱軷軹軺軭輀輂輇輈輏輐輖輗輘輞輠輡輣輥輧輨輬輭輮輴輵輶輷輺轀轁"
  ],
  [
    "8fe1a1",
    "轃轇轏轑",
    4,
    "轘轝轞轥辝辠辡辤辥辦辵辶辸达迀迁迆迊迋迍运迒迓迕迠迣迤迨迮迱迵迶迻迾适逄逈逌逘逛逨逩逯逪逬逭逳逴逷逿遃遄遌遛遝遢遦遧遬遰遴遹邅邈邋邌邎邐邕邗邘邙邛邠邡邢邥邰邲邳邴邶邽郌邾郃"
  ],
  [
    "8fe2a1",
    "郄郅郇郈郕郗郘郙郜郝郟郥郒郶郫郯郰郴郾郿鄀鄄鄅鄆鄈鄍鄐鄔鄖鄗鄘鄚鄜鄞鄠鄥鄢鄣鄧鄩鄮鄯鄱鄴鄶鄷鄹鄺鄼鄽酃酇酈酏酓酗酙酚酛酡酤酧酭酴酹酺酻醁醃醅醆醊醎醑醓醔醕醘醞醡醦醨醬醭醮醰醱醲醳醶醻醼醽醿"
  ],
  [
    "8fe3a1",
    "釂釃釅釓釔釗釙釚釞釤釥釩釪釬",
    5,
    "釷釹釻釽鈀鈁鈄鈅鈆鈇鈉鈊鈌鈐鈒鈓鈖鈘鈜鈝鈣鈤鈥鈦鈨鈮鈯鈰鈳鈵鈶鈸鈹鈺鈼鈾鉀鉂鉃鉆鉇鉊鉍鉎鉏鉑鉘鉙鉜鉝鉠鉡鉥鉧鉨鉩鉮鉯鉰鉵",
    4,
    "鉻鉼鉽鉿銈銉銊銍銎銒銗"
  ],
  [
    "8fe4a1",
    "銙銟銠銤銥銧銨銫銯銲銶銸銺銻銼銽銿",
    4,
    "鋅鋆鋇鋈鋋鋌鋍鋎鋐鋓鋕鋗鋘鋙鋜鋝鋟鋠鋡鋣鋥鋧鋨鋬鋮鋰鋹鋻鋿錀錂錈錍錑錔錕錜錝錞錟錡錤錥錧錩錪錳錴錶錷鍇鍈鍉鍐鍑鍒鍕鍗鍘鍚鍞鍤鍥鍧鍩鍪鍭鍯鍰鍱鍳鍴鍶"
  ],
  [
    "8fe5a1",
    "鍺鍽鍿鎀鎁鎂鎈鎊鎋鎍鎏鎒鎕鎘鎛鎞鎡鎣鎤鎦鎨鎫鎴鎵鎶鎺鎩鏁鏄鏅鏆鏇鏉",
    4,
    "鏓鏙鏜鏞鏟鏢鏦鏧鏹鏷鏸鏺鏻鏽鐁鐂鐄鐈鐉鐍鐎鐏鐕鐖鐗鐟鐮鐯鐱鐲鐳鐴鐻鐿鐽鑃鑅鑈鑊鑌鑕鑙鑜鑟鑡鑣鑨鑫鑭鑮鑯鑱鑲钄钃镸镹"
  ],
  [
    "8fe6a1",
    "镾閄閈閌閍閎閝閞閟閡閦閩閫閬閴閶閺閽閿闆闈闉闋闐闑闒闓闙闚闝闞闟闠闤闦阝阞阢阤阥阦阬阱阳阷阸阹阺阼阽陁陒陔陖陗陘陡陮陴陻陼陾陿隁隂隃隄隉隑隖隚隝隟隤隥隦隩隮隯隳隺雊雒嶲雘雚雝雞雟雩雯雱雺霂"
  ],
  [
    "8fe7a1",
    "霃霅霉霚霛霝霡霢霣霨霱霳靁靃靊靎靏靕靗靘靚靛靣靧靪靮靳靶靷靸靻靽靿鞀鞉鞕鞖鞗鞙鞚鞞鞟鞢鞬鞮鞱鞲鞵鞶鞸鞹鞺鞼鞾鞿韁韄韅韇韉韊韌韍韎韐韑韔韗韘韙韝韞韠韛韡韤韯韱韴韷韸韺頇頊頙頍頎頔頖頜頞頠頣頦"
  ],
  [
    "8fe8a1",
    "頫頮頯頰頲頳頵頥頾顄顇顊顑顒顓顖顗顙顚顢顣顥顦顪顬颫颭颮颰颴颷颸颺颻颿飂飅飈飌飡飣飥飦飧飪飳飶餂餇餈餑餕餖餗餚餛餜餟餢餦餧餫餱",
    4,
    "餹餺餻餼饀饁饆饇饈饍饎饔饘饙饛饜饞饟饠馛馝馟馦馰馱馲馵"
  ],
  [
    "8fe9a1",
    "馹馺馽馿駃駉駓駔駙駚駜駞駧駪駫駬駰駴駵駹駽駾騂騃騄騋騌騐騑騖騞騠騢騣騤騧騭騮騳騵騶騸驇驁驄驊驋驌驎驑驔驖驝骪骬骮骯骲骴骵骶骹骻骾骿髁髃髆髈髎髐髒髕髖髗髛髜髠髤髥髧髩髬髲髳髵髹髺髽髿",
    4
  ],
  [
    "8feaa1",
    "鬄鬅鬈鬉鬋鬌鬍鬎鬐鬒鬖鬙鬛鬜鬠鬦鬫鬭鬳鬴鬵鬷鬹鬺鬽魈魋魌魕魖魗魛魞魡魣魥魦魨魪",
    4,
    "魳魵魷魸魹魿鮀鮄鮅鮆鮇鮉鮊鮋鮍鮏鮐鮔鮚鮝鮞鮦鮧鮩鮬鮰鮱鮲鮷鮸鮻鮼鮾鮿鯁鯇鯈鯎鯐鯗鯘鯝鯟鯥鯧鯪鯫鯯鯳鯷鯸"
  ],
  [
    "8feba1",
    "鯹鯺鯽鯿鰀鰂鰋鰏鰑鰖鰘鰙鰚鰜鰞鰢鰣鰦",
    4,
    "鰱鰵鰶鰷鰽鱁鱃鱄鱅鱉鱊鱎鱏鱐鱓鱔鱖鱘鱛鱝鱞鱟鱣鱩鱪鱜鱫鱨鱮鱰鱲鱵鱷鱻鳦鳲鳷鳹鴋鴂鴑鴗鴘鴜鴝鴞鴯鴰鴲鴳鴴鴺鴼鵅鴽鵂鵃鵇鵊鵓鵔鵟鵣鵢鵥鵩鵪鵫鵰鵶鵷鵻"
  ],
  [
    "8feca1",
    "鵼鵾鶃鶄鶆鶊鶍鶎鶒鶓鶕鶖鶗鶘鶡鶪鶬鶮鶱鶵鶹鶼鶿鷃鷇鷉鷊鷔鷕鷖鷗鷚鷞鷟鷠鷥鷧鷩鷫鷮鷰鷳鷴鷾鸊鸂鸇鸎鸐鸑鸒鸕鸖鸙鸜鸝鹺鹻鹼麀麂麃麄麅麇麎麏麖麘麛麞麤麨麬麮麯麰麳麴麵黆黈黋黕黟黤黧黬黭黮黰黱黲黵"
  ],
  [
    "8feda1",
    "黸黿鼂鼃鼉鼏鼐鼑鼒鼔鼖鼗鼙鼚鼛鼟鼢鼦鼪鼫鼯鼱鼲鼴鼷鼹鼺鼼鼽鼿齁齃",
    4,
    "齓齕齖齗齘齚齝齞齨齩齭",
    4,
    "齳齵齺齽龏龐龑龒龔龖龗龞龡龢龣龥"
  ]
], bc = [
  [
    "0",
    "\0",
    127,
    "€"
  ],
  [
    "8140",
    "丂丄丅丆丏丒丗丟丠両丣並丩丮丯丱丳丵丷丼乀乁乂乄乆乊乑乕乗乚乛乢乣乤乥乧乨乪",
    5,
    "乲乴",
    9,
    "乿",
    6,
    "亇亊"
  ],
  [
    "8180",
    "亐亖亗亙亜亝亞亣亪亯亰亱亴亶亷亸亹亼亽亾仈仌仏仐仒仚仛仜仠仢仦仧仩仭仮仯仱仴仸仹仺仼仾伀伂",
    6,
    "伋伌伒",
    4,
    "伜伝伡伣伨伩伬伭伮伱伳伵伷伹伻伾",
    4,
    "佄佅佇",
    5,
    "佒佔佖佡佢佦佨佪佫佭佮佱佲併佷佸佹佺佽侀侁侂侅來侇侊侌侎侐侒侓侕侖侘侙侚侜侞侟価侢"
  ],
  [
    "8240",
    "侤侫侭侰",
    4,
    "侶",
    8,
    "俀俁係俆俇俈俉俋俌俍俒",
    4,
    "俙俛俠俢俤俥俧俫俬俰俲俴俵俶俷俹俻俼俽俿",
    11
  ],
  [
    "8280",
    "個倎倐們倓倕倖倗倛倝倞倠倢倣値倧倫倯",
    10,
    "倻倽倿偀偁偂偄偅偆偉偊偋偍偐",
    4,
    "偖偗偘偙偛偝",
    7,
    "偦",
    5,
    "偭",
    8,
    "偸偹偺偼偽傁傂傃傄傆傇傉傊傋傌傎",
    20,
    "傤傦傪傫傭",
    4,
    "傳",
    6,
    "傼"
  ],
  [
    "8340",
    "傽",
    17,
    "僐",
    5,
    "僗僘僙僛",
    10,
    "僨僩僪僫僯僰僱僲僴僶",
    4,
    "僼",
    9,
    "儈"
  ],
  [
    "8380",
    "儉儊儌",
    5,
    "儓",
    13,
    "儢",
    28,
    "兂兇兊兌兎兏児兒兓兗兘兙兛兝",
    4,
    "兣兤兦內兩兪兯兲兺兾兿冃冄円冇冊冋冎冏冐冑冓冔冘冚冝冞冟冡冣冦",
    4,
    "冭冮冴冸冹冺冾冿凁凂凃凅凈凊凍凎凐凒",
    5
  ],
  [
    "8440",
    "凘凙凚凜凞凟凢凣凥",
    5,
    "凬凮凱凲凴凷凾刄刅刉刋刌刏刐刓刔刕刜刞刟刡刢刣別刦刧刪刬刯刱刲刴刵刼刾剄",
    5,
    "剋剎剏剒剓剕剗剘"
  ],
  [
    "8480",
    "剙剚剛剝剟剠剢剣剤剦剨剫剬剭剮剰剱剳",
    9,
    "剾劀劃",
    4,
    "劉",
    6,
    "劑劒劔",
    6,
    "劜劤劥劦劧劮劯劰労",
    9,
    "勀勁勂勄勅勆勈勊勌勍勎勏勑勓勔動勗務",
    5,
    "勠勡勢勣勥",
    10,
    "勱",
    7,
    "勻勼勽匁匂匃匄匇匉匊匋匌匎"
  ],
  [
    "8540",
    "匑匒匓匔匘匛匜匞匟匢匤匥匧匨匩匫匬匭匯",
    9,
    "匼匽區卂卄卆卋卌卍卐協単卙卛卝卥卨卪卬卭卲卶卹卻卼卽卾厀厁厃厇厈厊厎厏"
  ],
  [
    "8580",
    "厐",
    4,
    "厖厗厙厛厜厞厠厡厤厧厪厫厬厭厯",
    6,
    "厷厸厹厺厼厽厾叀參",
    4,
    "収叏叐叒叓叕叚叜叝叞叡叢叧叴叺叾叿吀吂吅吇吋吔吘吙吚吜吢吤吥吪吰吳吶吷吺吽吿呁呂呄呅呇呉呌呍呎呏呑呚呝",
    4,
    "呣呥呧呩",
    7,
    "呴呹呺呾呿咁咃咅咇咈咉咊咍咑咓咗咘咜咞咟咠咡"
  ],
  [
    "8640",
    "咢咥咮咰咲咵咶咷咹咺咼咾哃哅哊哋哖哘哛哠",
    4,
    "哫哬哯哰哱哴",
    5,
    "哻哾唀唂唃唄唅唈唊",
    4,
    "唒唓唕",
    5,
    "唜唝唞唟唡唥唦"
  ],
  [
    "8680",
    "唨唩唫唭唲唴唵唶唸唹唺唻唽啀啂啅啇啈啋",
    4,
    "啑啒啓啔啗",
    4,
    "啝啞啟啠啢啣啨啩啫啯",
    5,
    "啹啺啽啿喅喆喌喍喎喐喒喓喕喖喗喚喛喞喠",
    6,
    "喨",
    8,
    "喲喴営喸喺喼喿",
    4,
    "嗆嗇嗈嗊嗋嗎嗏嗐嗕嗗",
    4,
    "嗞嗠嗢嗧嗩嗭嗮嗰嗱嗴嗶嗸",
    4,
    "嗿嘂嘃嘄嘅"
  ],
  [
    "8740",
    "嘆嘇嘊嘋嘍嘐",
    7,
    "嘙嘚嘜嘝嘠嘡嘢嘥嘦嘨嘩嘪嘫嘮嘯嘰嘳嘵嘷嘸嘺嘼嘽嘾噀",
    11,
    "噏",
    4,
    "噕噖噚噛噝",
    4
  ],
  [
    "8780",
    "噣噥噦噧噭噮噯噰噲噳噴噵噷噸噹噺噽",
    7,
    "嚇",
    6,
    "嚐嚑嚒嚔",
    14,
    "嚤",
    10,
    "嚰",
    6,
    "嚸嚹嚺嚻嚽",
    12,
    "囋",
    8,
    "囕囖囘囙囜団囥",
    5,
    "囬囮囯囲図囶囷囸囻囼圀圁圂圅圇國",
    6
  ],
  [
    "8840",
    "園",
    9,
    "圝圞圠圡圢圤圥圦圧圫圱圲圴",
    4,
    "圼圽圿坁坃坄坅坆坈坉坋坒",
    4,
    "坘坙坢坣坥坧坬坮坰坱坲坴坵坸坹坺坽坾坿垀"
  ],
  [
    "8880",
    "垁垇垈垉垊垍",
    4,
    "垔",
    6,
    "垜垝垞垟垥垨垪垬垯垰垱垳垵垶垷垹",
    8,
    "埄",
    6,
    "埌埍埐埑埓埖埗埛埜埞埡埢埣埥",
    7,
    "埮埰埱埲埳埵埶執埻埼埾埿堁堃堄堅堈堉堊堌堎堏堐堒堓堔堖堗堘堚堛堜堝堟堢堣堥",
    4,
    "堫",
    4,
    "報堲堳場堶",
    7
  ],
  [
    "8940",
    "堾",
    5,
    "塅",
    6,
    "塎塏塐塒塓塕塖塗塙",
    4,
    "塟",
    5,
    "塦",
    4,
    "塭",
    16,
    "塿墂墄墆墇墈墊墋墌"
  ],
  [
    "8980",
    "墍",
    4,
    "墔",
    4,
    "墛墜墝墠",
    7,
    "墪",
    17,
    "墽墾墿壀壂壃壄壆",
    10,
    "壒壓壔壖",
    13,
    "壥",
    5,
    "壭壯壱売壴壵壷壸壺",
    7,
    "夃夅夆夈",
    4,
    "夎夐夑夒夓夗夘夛夝夞夠夡夢夣夦夨夬夰夲夳夵夶夻"
  ],
  [
    "8a40",
    "夽夾夿奀奃奅奆奊奌奍奐奒奓奙奛",
    4,
    "奡奣奤奦",
    12,
    "奵奷奺奻奼奾奿妀妅妉妋妌妎妏妐妑妔妕妘妚妛妜妝妟妠妡妢妦"
  ],
  [
    "8a80",
    "妧妬妭妰妱妳",
    5,
    "妺妼妽妿",
    6,
    "姇姈姉姌姍姎姏姕姖姙姛姞",
    4,
    "姤姦姧姩姪姫姭",
    11,
    "姺姼姽姾娀娂娊娋娍娎娏娐娒娔娕娖娗娙娚娛娝娞娡娢娤娦娧娨娪",
    6,
    "娳娵娷",
    4,
    "娽娾娿婁",
    4,
    "婇婈婋",
    9,
    "婖婗婘婙婛",
    5
  ],
  [
    "8b40",
    "婡婣婤婥婦婨婩婫",
    8,
    "婸婹婻婼婽婾媀",
    17,
    "媓",
    6,
    "媜",
    13,
    "媫媬"
  ],
  [
    "8b80",
    "媭",
    4,
    "媴媶媷媹",
    4,
    "媿嫀嫃",
    5,
    "嫊嫋嫍",
    4,
    "嫓嫕嫗嫙嫚嫛嫝嫞嫟嫢嫤嫥嫧嫨嫪嫬",
    4,
    "嫲",
    22,
    "嬊",
    11,
    "嬘",
    25,
    "嬳嬵嬶嬸",
    7,
    "孁",
    6
  ],
  [
    "8c40",
    "孈",
    7,
    "孒孖孞孠孡孧孨孫孭孮孯孲孴孶孷學孹孻孼孾孿宂宆宊宍宎宐宑宒宔宖実宧宨宩宬宭宮宯宱宲宷宺宻宼寀寁寃寈寉寊寋寍寎寏"
  ],
  [
    "8c80",
    "寑寔",
    8,
    "寠寢寣實寧審",
    4,
    "寯寱",
    6,
    "寽対尀専尃尅將專尋尌對導尐尒尓尗尙尛尞尟尠尡尣尦尨尩尪尫尭尮尯尰尲尳尵尶尷屃屄屆屇屌屍屒屓屔屖屗屘屚屛屜屝屟屢層屧",
    6,
    "屰屲",
    6,
    "屻屼屽屾岀岃",
    4,
    "岉岊岋岎岏岒岓岕岝",
    4,
    "岤",
    4
  ],
  [
    "8d40",
    "岪岮岯岰岲岴岶岹岺岻岼岾峀峂峃峅",
    5,
    "峌",
    5,
    "峓",
    5,
    "峚",
    6,
    "峢峣峧峩峫峬峮峯峱",
    9,
    "峼",
    4
  ],
  [
    "8d80",
    "崁崄崅崈",
    5,
    "崏",
    4,
    "崕崗崘崙崚崜崝崟",
    4,
    "崥崨崪崫崬崯",
    4,
    "崵",
    7,
    "崿",
    7,
    "嵈嵉嵍",
    10,
    "嵙嵚嵜嵞",
    10,
    "嵪嵭嵮嵰嵱嵲嵳嵵",
    12,
    "嶃",
    21,
    "嶚嶛嶜嶞嶟嶠"
  ],
  [
    "8e40",
    "嶡",
    21,
    "嶸",
    12,
    "巆",
    6,
    "巎",
    12,
    "巜巟巠巣巤巪巬巭"
  ],
  [
    "8e80",
    "巰巵巶巸",
    4,
    "巿帀帄帇帉帊帋帍帎帒帓帗帞",
    7,
    "帨",
    4,
    "帯帰帲",
    4,
    "帹帺帾帿幀幁幃幆",
    5,
    "幍",
    6,
    "幖",
    4,
    "幜幝幟幠幣",
    14,
    "幵幷幹幾庁庂広庅庈庉庌庍庎庒庘庛庝庡庢庣庤庨",
    4,
    "庮",
    4,
    "庴庺庻庼庽庿",
    6
  ],
  [
    "8f40",
    "廆廇廈廋",
    5,
    "廔廕廗廘廙廚廜",
    11,
    "廩廫",
    8,
    "廵廸廹廻廼廽弅弆弇弉弌弍弎弐弒弔弖弙弚弜弝弞弡弢弣弤"
  ],
  [
    "8f80",
    "弨弫弬弮弰弲",
    6,
    "弻弽弾弿彁",
    14,
    "彑彔彙彚彛彜彞彟彠彣彥彧彨彫彮彯彲彴彵彶彸彺彽彾彿徃徆徍徎徏徑従徔徖徚徛徝從徟徠徢",
    5,
    "復徫徬徯",
    5,
    "徶徸徹徺徻徾",
    4,
    "忇忈忊忋忎忓忔忕忚忛応忞忟忢忣忥忦忨忩忬忯忰忲忳忴忶忷忹忺忼怇"
  ],
  [
    "9040",
    "怈怉怋怌怐怑怓怗怘怚怞怟怢怣怤怬怭怮怰",
    4,
    "怶",
    4,
    "怽怾恀恄",
    6,
    "恌恎恏恑恓恔恖恗恘恛恜恞恟恠恡恥恦恮恱恲恴恵恷恾悀"
  ],
  [
    "9080",
    "悁悂悅悆悇悈悊悋悎悏悐悑悓悕悗悘悙悜悞悡悢悤悥悧悩悪悮悰悳悵悶悷悹悺悽",
    7,
    "惇惈惉惌",
    4,
    "惒惓惔惖惗惙惛惞惡",
    4,
    "惪惱惲惵惷惸惻",
    4,
    "愂愃愄愅愇愊愋愌愐",
    4,
    "愖愗愘愙愛愜愝愞愡愢愥愨愩愪愬",
    18,
    "慀",
    6
  ],
  [
    "9140",
    "慇慉態慍慏慐慒慓慔慖",
    6,
    "慞慟慠慡慣慤慥慦慩",
    6,
    "慱慲慳慴慶慸",
    18,
    "憌憍憏",
    4,
    "憕"
  ],
  [
    "9180",
    "憖",
    6,
    "憞",
    8,
    "憪憫憭",
    9,
    "憸",
    5,
    "憿懀懁懃",
    4,
    "應懌",
    4,
    "懓懕",
    16,
    "懧",
    13,
    "懶",
    8,
    "戀",
    5,
    "戇戉戓戔戙戜戝戞戠戣戦戧戨戩戫戭戯戰戱戲戵戶戸",
    4,
    "扂扄扅扆扊"
  ],
  [
    "9240",
    "扏扐払扖扗扙扚扜",
    6,
    "扤扥扨扱扲扴扵扷扸扺扻扽抁抂抃抅抆抇抈抋",
    5,
    "抔抙抜抝択抣抦抧抩抪抭抮抯抰抲抳抴抶抷抸抺抾拀拁"
  ],
  [
    "9280",
    "拃拋拏拑拕拝拞拠拡拤拪拫拰拲拵拸拹拺拻挀挃挄挅挆挊挋挌挍挏挐挒挓挔挕挗挘挙挜挦挧挩挬挭挮挰挱挳",
    5,
    "挻挼挾挿捀捁捄捇捈捊捑捒捓捔捖",
    7,
    "捠捤捥捦捨捪捫捬捯捰捲捳捴捵捸捹捼捽捾捿掁掃掄掅掆掋掍掑掓掔掕掗掙",
    6,
    "採掤掦掫掯掱掲掵掶掹掻掽掿揀"
  ],
  [
    "9340",
    "揁揂揃揅揇揈揊揋揌揑揓揔揕揗",
    6,
    "揟揢揤",
    4,
    "揫揬揮揯揰揱揳揵揷揹揺揻揼揾搃搄搆",
    4,
    "損搎搑搒搕",
    5,
    "搝搟搢搣搤"
  ],
  [
    "9380",
    "搥搧搨搩搫搮",
    5,
    "搵",
    4,
    "搻搼搾摀摂摃摉摋",
    6,
    "摓摕摖摗摙",
    4,
    "摟",
    7,
    "摨摪摫摬摮",
    9,
    "摻",
    6,
    "撃撆撈",
    8,
    "撓撔撗撘撚撛撜撝撟",
    4,
    "撥撦撧撨撪撫撯撱撲撳撴撶撹撻撽撾撿擁擃擄擆",
    6,
    "擏擑擓擔擕擖擙據"
  ],
  [
    "9440",
    "擛擜擝擟擠擡擣擥擧",
    24,
    "攁",
    7,
    "攊",
    7,
    "攓",
    4,
    "攙",
    8
  ],
  [
    "9480",
    "攢攣攤攦",
    4,
    "攬攭攰攱攲攳攷攺攼攽敀",
    4,
    "敆敇敊敋敍敎敐敒敓敔敗敘敚敜敟敠敡敤敥敧敨敩敪敭敮敯敱敳敵敶數",
    14,
    "斈斉斊斍斎斏斒斔斕斖斘斚斝斞斠斢斣斦斨斪斬斮斱",
    7,
    "斺斻斾斿旀旂旇旈旉旊旍旐旑旓旔旕旘",
    7,
    "旡旣旤旪旫"
  ],
  [
    "9540",
    "旲旳旴旵旸旹旻",
    4,
    "昁昄昅昇昈昉昋昍昐昑昒昖昗昘昚昛昜昞昡昢昣昤昦昩昪昫昬昮昰昲昳昷",
    4,
    "昽昿晀時晄",
    6,
    "晍晎晐晑晘"
  ],
  [
    "9580",
    "晙晛晜晝晞晠晢晣晥晧晩",
    4,
    "晱晲晳晵晸晹晻晼晽晿暀暁暃暅暆暈暉暊暋暍暎暏暐暒暓暔暕暘",
    4,
    "暞",
    8,
    "暩",
    4,
    "暯",
    4,
    "暵暶暷暸暺暻暼暽暿",
    25,
    "曚曞",
    7,
    "曧曨曪",
    5,
    "曱曵曶書曺曻曽朁朂會"
  ],
  [
    "9640",
    "朄朅朆朇朌朎朏朑朒朓朖朘朙朚朜朞朠",
    5,
    "朧朩朮朰朲朳朶朷朸朹朻朼朾朿杁杄杅杇杊杋杍杒杔杕杗",
    4,
    "杝杢杣杤杦杧杫杬杮東杴杶"
  ],
  [
    "9680",
    "杸杹杺杻杽枀枂枃枅枆枈枊枌枍枎枏枑枒枓枔枖枙枛枟枠枡枤枦枩枬枮枱枲枴枹",
    7,
    "柂柅",
    9,
    "柕柖柗柛柟柡柣柤柦柧柨柪柫柭柮柲柵",
    7,
    "柾栁栂栃栄栆栍栐栒栔栕栘",
    4,
    "栞栟栠栢",
    6,
    "栫",
    6,
    "栴栵栶栺栻栿桇桋桍桏桒桖",
    5
  ],
  [
    "9740",
    "桜桝桞桟桪桬",
    7,
    "桵桸",
    8,
    "梂梄梇",
    7,
    "梐梑梒梔梕梖梘",
    9,
    "梣梤梥梩梪梫梬梮梱梲梴梶梷梸"
  ],
  [
    "9780",
    "梹",
    6,
    "棁棃",
    5,
    "棊棌棎棏棐棑棓棔棖棗棙棛",
    4,
    "棡棢棤",
    9,
    "棯棲棳棴棶棷棸棻棽棾棿椀椂椃椄椆",
    4,
    "椌椏椑椓",
    11,
    "椡椢椣椥",
    7,
    "椮椯椱椲椳椵椶椷椸椺椻椼椾楀楁楃",
    16,
    "楕楖楘楙楛楜楟"
  ],
  [
    "9840",
    "楡楢楤楥楧楨楩楪楬業楯楰楲",
    4,
    "楺楻楽楾楿榁榃榅榊榋榌榎",
    5,
    "榖榗榙榚榝",
    9,
    "榩榪榬榮榯榰榲榳榵榶榸榹榺榼榽"
  ],
  [
    "9880",
    "榾榿槀槂",
    7,
    "構槍槏槑槒槓槕",
    5,
    "槜槝槞槡",
    11,
    "槮槯槰槱槳",
    9,
    "槾樀",
    9,
    "樋",
    11,
    "標",
    5,
    "樠樢",
    5,
    "権樫樬樭樮樰樲樳樴樶",
    6,
    "樿",
    4,
    "橅橆橈",
    7,
    "橑",
    6,
    "橚"
  ],
  [
    "9940",
    "橜",
    4,
    "橢橣橤橦",
    10,
    "橲",
    6,
    "橺橻橽橾橿檁檂檃檅",
    8,
    "檏檒",
    4,
    "檘",
    7,
    "檡",
    5
  ],
  [
    "9980",
    "檧檨檪檭",
    114,
    "欥欦欨",
    6
  ],
  [
    "9a40",
    "欯欰欱欳欴欵欶欸欻欼欽欿歀歁歂歄歅歈歊歋歍",
    11,
    "歚",
    7,
    "歨歩歫",
    13,
    "歺歽歾歿殀殅殈"
  ],
  [
    "9a80",
    "殌殎殏殐殑殔殕殗殘殙殜",
    4,
    "殢",
    7,
    "殫",
    7,
    "殶殸",
    6,
    "毀毃毄毆",
    4,
    "毌毎毐毑毘毚毜",
    4,
    "毢",
    7,
    "毬毭毮毰毱毲毴毶毷毸毺毻毼毾",
    6,
    "氈",
    4,
    "氎氒気氜氝氞氠氣氥氫氬氭氱氳氶氷氹氺氻氼氾氿汃汄汅汈汋",
    4,
    "汑汒汓汖汘"
  ],
  [
    "9b40",
    "汙汚汢汣汥汦汧汫",
    4,
    "汱汳汵汷汸決汻汼汿沀沄沇沊沋沍沎沑沒沕沖沗沘沚沜沝沞沠沢沨沬沯沰沴沵沶沷沺泀況泂泃泆泇泈泋泍泎泏泑泒泘"
  ],
  [
    "9b80",
    "泙泚泜泝泟泤泦泧泩泬泭泲泴泹泿洀洂洃洅洆洈洉洊洍洏洐洑洓洔洕洖洘洜洝洟",
    5,
    "洦洨洩洬洭洯洰洴洶洷洸洺洿浀浂浄浉浌浐浕浖浗浘浛浝浟浡浢浤浥浧浨浫浬浭浰浱浲浳浵浶浹浺浻浽",
    4,
    "涃涄涆涇涊涋涍涏涐涒涖",
    4,
    "涜涢涥涬涭涰涱涳涴涶涷涹",
    5,
    "淁淂淃淈淉淊"
  ],
  [
    "9c40",
    "淍淎淏淐淒淓淔淕淗淚淛淜淟淢淣淥淧淨淩淪淭淯淰淲淴淵淶淸淺淽",
    7,
    "渆渇済渉渋渏渒渓渕渘渙減渜渞渟渢渦渧渨渪測渮渰渱渳渵"
  ],
  [
    "9c80",
    "渶渷渹渻",
    7,
    "湅",
    7,
    "湏湐湑湒湕湗湙湚湜湝湞湠",
    10,
    "湬湭湯",
    14,
    "満溁溂溄溇溈溊",
    4,
    "溑",
    6,
    "溙溚溛溝溞溠溡溣溤溦溨溩溫溬溭溮溰溳溵溸溹溼溾溿滀滃滄滅滆滈滉滊滌滍滎滐滒滖滘滙滛滜滝滣滧滪",
    5
  ],
  [
    "9d40",
    "滰滱滲滳滵滶滷滸滺",
    7,
    "漃漄漅漇漈漊",
    4,
    "漐漑漒漖",
    9,
    "漡漢漣漥漦漧漨漬漮漰漲漴漵漷",
    6,
    "漿潀潁潂"
  ],
  [
    "9d80",
    "潃潄潅潈潉潊潌潎",
    9,
    "潙潚潛潝潟潠潡潣潤潥潧",
    5,
    "潯潰潱潳潵潶潷潹潻潽",
    6,
    "澅澆澇澊澋澏",
    12,
    "澝澞澟澠澢",
    4,
    "澨",
    10,
    "澴澵澷澸澺",
    5,
    "濁濃",
    5,
    "濊",
    6,
    "濓",
    10,
    "濟濢濣濤濥"
  ],
  [
    "9e40",
    "濦",
    7,
    "濰",
    32,
    "瀒",
    7,
    "瀜",
    6,
    "瀤",
    6
  ],
  [
    "9e80",
    "瀫",
    9,
    "瀶瀷瀸瀺",
    17,
    "灍灎灐",
    13,
    "灟",
    11,
    "灮灱灲灳灴灷灹灺灻災炁炂炃炄炆炇炈炋炌炍炏炐炑炓炗炘炚炛炞",
    12,
    "炰炲炴炵炶為炾炿烄烅烆烇烉烋",
    12,
    "烚"
  ],
  [
    "9f40",
    "烜烝烞烠烡烢烣烥烪烮烰",
    6,
    "烸烺烻烼烾",
    10,
    "焋",
    4,
    "焑焒焔焗焛",
    10,
    "焧",
    7,
    "焲焳焴"
  ],
  [
    "9f80",
    "焵焷",
    13,
    "煆煇煈煉煋煍煏",
    12,
    "煝煟",
    4,
    "煥煩",
    4,
    "煯煰煱煴煵煶煷煹煻煼煾",
    5,
    "熅",
    4,
    "熋熌熍熎熐熑熒熓熕熖熗熚",
    4,
    "熡",
    6,
    "熩熪熫熭",
    5,
    "熴熶熷熸熺",
    8,
    "燄",
    9,
    "燏",
    4
  ],
  [
    "a040",
    "燖",
    9,
    "燡燢燣燤燦燨",
    5,
    "燯",
    9,
    "燺",
    11,
    "爇",
    19
  ],
  [
    "a080",
    "爛爜爞",
    9,
    "爩爫爭爮爯爲爳爴爺爼爾牀",
    6,
    "牉牊牋牎牏牐牑牓牔牕牗牘牚牜牞牠牣牤牥牨牪牫牬牭牰牱牳牴牶牷牸牻牼牽犂犃犅",
    4,
    "犌犎犐犑犓",
    11,
    "犠",
    11,
    "犮犱犲犳犵犺",
    6,
    "狅狆狇狉狊狋狌狏狑狓狔狕狖狘狚狛"
  ],
  [
    "a1a1",
    "　、。·ˉˇ¨〃々—～‖…‘’“”〔〕〈",
    7,
    "〖〗【】±×÷∶∧∨∑∏∪∩∈∷√⊥∥∠⌒⊙∫∮≡≌≈∽∝≠≮≯≤≥∞∵∴♂♀°′″℃＄¤￠￡‰§№☆★○●◎◇◆□■△▲※→←↑↓〓"
  ],
  [
    "a2a1",
    "ⅰ",
    9
  ],
  [
    "a2b1",
    "⒈",
    19,
    "⑴",
    19,
    "①",
    9
  ],
  [
    "a2e5",
    "㈠",
    9
  ],
  [
    "a2f1",
    "Ⅰ",
    11
  ],
  [
    "a3a1",
    "！＂＃￥％",
    88,
    "￣"
  ],
  [
    "a4a1",
    "ぁ",
    82
  ],
  [
    "a5a1",
    "ァ",
    85
  ],
  [
    "a6a1",
    "Α",
    16,
    "Σ",
    6
  ],
  [
    "a6c1",
    "α",
    16,
    "σ",
    6
  ],
  [
    "a6e0",
    "︵︶︹︺︿﹀︽︾﹁﹂﹃﹄"
  ],
  [
    "a6ee",
    "︻︼︷︸︱"
  ],
  [
    "a6f4",
    "︳︴"
  ],
  [
    "a7a1",
    "А",
    5,
    "ЁЖ",
    25
  ],
  [
    "a7d1",
    "а",
    5,
    "ёж",
    25
  ],
  [
    "a840",
    "ˊˋ˙–―‥‵℅℉↖↗↘↙∕∟∣≒≦≧⊿═",
    35,
    "▁",
    6
  ],
  [
    "a880",
    "█",
    7,
    "▓▔▕▼▽◢◣◤◥☉⊕〒〝〞"
  ],
  [
    "a8a1",
    "āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜüêɑ"
  ],
  [
    "a8bd",
    "ńň"
  ],
  [
    "a8c0",
    "ɡ"
  ],
  [
    "a8c5",
    "ㄅ",
    36
  ],
  [
    "a940",
    "〡",
    8,
    "㊣㎎㎏㎜㎝㎞㎡㏄㏎㏑㏒㏕︰￢￤"
  ],
  [
    "a959",
    "℡㈱"
  ],
  [
    "a95c",
    "‐"
  ],
  [
    "a960",
    "ー゛゜ヽヾ〆ゝゞ﹉",
    9,
    "﹔﹕﹖﹗﹙",
    8
  ],
  [
    "a980",
    "﹢",
    4,
    "﹨﹩﹪﹫"
  ],
  [
    "a996",
    "〇"
  ],
  [
    "a9a4",
    "─",
    75
  ],
  [
    "aa40",
    "狜狝狟狢",
    5,
    "狪狫狵狶狹狽狾狿猀猂猄",
    5,
    "猋猌猍猏猐猑猒猔猘猙猚猟猠猣猤猦猧猨猭猯猰猲猳猵猶猺猻猼猽獀",
    8
  ],
  [
    "aa80",
    "獉獊獋獌獎獏獑獓獔獕獖獘",
    7,
    "獡",
    10,
    "獮獰獱"
  ],
  [
    "ab40",
    "獲",
    11,
    "獿",
    4,
    "玅玆玈玊玌玍玏玐玒玓玔玕玗玘玙玚玜玝玞玠玡玣",
    5,
    "玪玬玭玱玴玵玶玸玹玼玽玾玿珁珃",
    4
  ],
  [
    "ab80",
    "珋珌珎珒",
    6,
    "珚珛珜珝珟珡珢珣珤珦珨珪珫珬珮珯珰珱珳",
    4
  ],
  [
    "ac40",
    "珸",
    10,
    "琄琇琈琋琌琍琎琑",
    8,
    "琜",
    5,
    "琣琤琧琩琫琭琯琱琲琷",
    4,
    "琽琾琿瑀瑂",
    11
  ],
  [
    "ac80",
    "瑎",
    6,
    "瑖瑘瑝瑠",
    12,
    "瑮瑯瑱",
    4,
    "瑸瑹瑺"
  ],
  [
    "ad40",
    "瑻瑼瑽瑿璂璄璅璆璈璉璊璌璍璏璑",
    10,
    "璝璟",
    7,
    "璪",
    15,
    "璻",
    12
  ],
  [
    "ad80",
    "瓈",
    9,
    "瓓",
    8,
    "瓝瓟瓡瓥瓧",
    6,
    "瓰瓱瓲"
  ],
  [
    "ae40",
    "瓳瓵瓸",
    6,
    "甀甁甂甃甅",
    7,
    "甎甐甒甔甕甖甗甛甝甞甠",
    4,
    "甦甧甪甮甴甶甹甼甽甿畁畂畃畄畆畇畉畊畍畐畑畒畓畕畖畗畘"
  ],
  [
    "ae80",
    "畝",
    7,
    "畧畨畩畫",
    6,
    "畳畵當畷畺",
    4,
    "疀疁疂疄疅疇"
  ],
  [
    "af40",
    "疈疉疊疌疍疎疐疓疕疘疛疜疞疢疦",
    4,
    "疭疶疷疺疻疿痀痁痆痋痌痎痏痐痑痓痗痙痚痜痝痟痠痡痥痩痬痭痮痯痲痳痵痶痷痸痺痻痽痾瘂瘄瘆瘇"
  ],
  [
    "af80",
    "瘈瘉瘋瘍瘎瘏瘑瘒瘓瘔瘖瘚瘜瘝瘞瘡瘣瘧瘨瘬瘮瘯瘱瘲瘶瘷瘹瘺瘻瘽癁療癄"
  ],
  [
    "b040",
    "癅",
    6,
    "癎",
    5,
    "癕癗",
    4,
    "癝癟癠癡癢癤",
    6,
    "癬癭癮癰",
    7,
    "癹発發癿皀皁皃皅皉皊皌皍皏皐皒皔皕皗皘皚皛"
  ],
  [
    "b080",
    "皜",
    7,
    "皥",
    8,
    "皯皰皳皵",
    9,
    "盀盁盃啊阿埃挨哎唉哀皑癌蔼矮艾碍爱隘鞍氨安俺按暗岸胺案肮昂盎凹敖熬翱袄傲奥懊澳芭捌扒叭吧笆八疤巴拔跋靶把耙坝霸罢爸白柏百摆佰败拜稗斑班搬扳般颁板版扮拌伴瓣半办绊邦帮梆榜膀绑棒磅蚌镑傍谤苞胞包褒剥"
  ],
  [
    "b140",
    "盄盇盉盋盌盓盕盙盚盜盝盞盠",
    4,
    "盦",
    7,
    "盰盳盵盶盷盺盻盽盿眀眂眃眅眆眊県眎",
    10,
    "眛眜眝眞眡眣眤眥眧眪眫"
  ],
  [
    "b180",
    "眬眮眰",
    4,
    "眹眻眽眾眿睂睄睅睆睈",
    7,
    "睒",
    7,
    "睜薄雹保堡饱宝抱报暴豹鲍爆杯碑悲卑北辈背贝钡倍狈备惫焙被奔苯本笨崩绷甭泵蹦迸逼鼻比鄙笔彼碧蓖蔽毕毙毖币庇痹闭敝弊必辟壁臂避陛鞭边编贬扁便变卞辨辩辫遍标彪膘表鳖憋别瘪彬斌濒滨宾摈兵冰柄丙秉饼炳"
  ],
  [
    "b240",
    "睝睞睟睠睤睧睩睪睭",
    11,
    "睺睻睼瞁瞂瞃瞆",
    5,
    "瞏瞐瞓",
    11,
    "瞡瞣瞤瞦瞨瞫瞭瞮瞯瞱瞲瞴瞶",
    4
  ],
  [
    "b280",
    "瞼瞾矀",
    12,
    "矎",
    8,
    "矘矙矚矝",
    4,
    "矤病并玻菠播拨钵波博勃搏铂箔伯帛舶脖膊渤泊驳捕卜哺补埠不布步簿部怖擦猜裁材才财睬踩采彩菜蔡餐参蚕残惭惨灿苍舱仓沧藏操糙槽曹草厕策侧册测层蹭插叉茬茶查碴搽察岔差诧拆柴豺搀掺蝉馋谗缠铲产阐颤昌猖"
  ],
  [
    "b340",
    "矦矨矪矯矰矱矲矴矵矷矹矺矻矼砃",
    5,
    "砊砋砎砏砐砓砕砙砛砞砠砡砢砤砨砪砫砮砯砱砲砳砵砶砽砿硁硂硃硄硆硈硉硊硋硍硏硑硓硔硘硙硚"
  ],
  [
    "b380",
    "硛硜硞",
    11,
    "硯",
    7,
    "硸硹硺硻硽",
    6,
    "场尝常长偿肠厂敞畅唱倡超抄钞朝嘲潮巢吵炒车扯撤掣彻澈郴臣辰尘晨忱沉陈趁衬撑称城橙成呈乘程惩澄诚承逞骋秤吃痴持匙池迟弛驰耻齿侈尺赤翅斥炽充冲虫崇宠抽酬畴踌稠愁筹仇绸瞅丑臭初出橱厨躇锄雏滁除楚"
  ],
  [
    "b440",
    "碄碅碆碈碊碋碏碐碒碔碕碖碙碝碞碠碢碤碦碨",
    7,
    "碵碶碷碸確碻碼碽碿磀磂磃磄磆磇磈磌磍磎磏磑磒磓磖磗磘磚",
    9
  ],
  [
    "b480",
    "磤磥磦磧磩磪磫磭",
    4,
    "磳磵磶磸磹磻",
    5,
    "礂礃礄礆",
    6,
    "础储矗搐触处揣川穿椽传船喘串疮窗幢床闯创吹炊捶锤垂春椿醇唇淳纯蠢戳绰疵茨磁雌辞慈瓷词此刺赐次聪葱囱匆从丛凑粗醋簇促蹿篡窜摧崔催脆瘁粹淬翠村存寸磋撮搓措挫错搭达答瘩打大呆歹傣戴带殆代贷袋待逮"
  ],
  [
    "b540",
    "礍",
    5,
    "礔",
    9,
    "礟",
    4,
    "礥",
    14,
    "礵",
    4,
    "礽礿祂祃祄祅祇祊",
    8,
    "祔祕祘祙祡祣"
  ],
  [
    "b580",
    "祤祦祩祪祫祬祮祰",
    6,
    "祹祻",
    4,
    "禂禃禆禇禈禉禋禌禍禎禐禑禒怠耽担丹单郸掸胆旦氮但惮淡诞弹蛋当挡党荡档刀捣蹈倒岛祷导到稻悼道盗德得的蹬灯登等瞪凳邓堤低滴迪敌笛狄涤翟嫡抵底地蒂第帝弟递缔颠掂滇碘点典靛垫电佃甸店惦奠淀殿碉叼雕凋刁掉吊钓调跌爹碟蝶迭谍叠"
  ],
  [
    "b640",
    "禓",
    6,
    "禛",
    11,
    "禨",
    10,
    "禴",
    4,
    "禼禿秂秄秅秇秈秊秌秎秏秐秓秔秖秗秙",
    5,
    "秠秡秢秥秨秪"
  ],
  [
    "b680",
    "秬秮秱",
    6,
    "秹秺秼秾秿稁稄稅稇稈稉稊稌稏",
    4,
    "稕稖稘稙稛稜丁盯叮钉顶鼎锭定订丢东冬董懂动栋侗恫冻洞兜抖斗陡豆逗痘都督毒犊独读堵睹赌杜镀肚度渡妒端短锻段断缎堆兑队对墩吨蹲敦顿囤钝盾遁掇哆多夺垛躲朵跺舵剁惰堕蛾峨鹅俄额讹娥恶厄扼遏鄂饿恩而儿耳尔饵洱二"
  ],
  [
    "b740",
    "稝稟稡稢稤",
    14,
    "稴稵稶稸稺稾穀",
    5,
    "穇",
    9,
    "穒",
    4,
    "穘",
    16
  ],
  [
    "b780",
    "穩",
    6,
    "穱穲穳穵穻穼穽穾窂窅窇窉窊窋窌窎窏窐窓窔窙窚窛窞窡窢贰发罚筏伐乏阀法珐藩帆番翻樊矾钒繁凡烦反返范贩犯饭泛坊芳方肪房防妨仿访纺放菲非啡飞肥匪诽吠肺废沸费芬酚吩氛分纷坟焚汾粉奋份忿愤粪丰封枫蜂峰锋风疯烽逢冯缝讽奉凤佛否夫敷肤孵扶拂辐幅氟符伏俘服"
  ],
  [
    "b840",
    "窣窤窧窩窪窫窮",
    4,
    "窴",
    10,
    "竀",
    10,
    "竌",
    9,
    "竗竘竚竛竜竝竡竢竤竧",
    5,
    "竮竰竱竲竳"
  ],
  [
    "b880",
    "竴",
    4,
    "竻竼竾笀笁笂笅笇笉笌笍笎笐笒笓笖笗笘笚笜笝笟笡笢笣笧笩笭浮涪福袱弗甫抚辅俯釜斧脯腑府腐赴副覆赋复傅付阜父腹负富讣附妇缚咐噶嘎该改概钙盖溉干甘杆柑竿肝赶感秆敢赣冈刚钢缸肛纲岗港杠篙皋高膏羔糕搞镐稿告哥歌搁戈鸽胳疙割革葛格蛤阁隔铬个各给根跟耕更庚羹"
  ],
  [
    "b940",
    "笯笰笲笴笵笶笷笹笻笽笿",
    5,
    "筆筈筊筍筎筓筕筗筙筜筞筟筡筣",
    10,
    "筯筰筳筴筶筸筺筼筽筿箁箂箃箄箆",
    6,
    "箎箏"
  ],
  [
    "b980",
    "箑箒箓箖箘箙箚箛箞箟箠箣箤箥箮箯箰箲箳箵箶箷箹",
    7,
    "篂篃範埂耿梗工攻功恭龚供躬公宫弓巩汞拱贡共钩勾沟苟狗垢构购够辜菇咕箍估沽孤姑鼓古蛊骨谷股故顾固雇刮瓜剐寡挂褂乖拐怪棺关官冠观管馆罐惯灌贯光广逛瑰规圭硅归龟闺轨鬼诡癸桂柜跪贵刽辊滚棍锅郭国果裹过哈"
  ],
  [
    "ba40",
    "篅篈築篊篋篍篎篏篐篒篔",
    4,
    "篛篜篞篟篠篢篣篤篧篨篩篫篬篭篯篰篲",
    4,
    "篸篹篺篻篽篿",
    7,
    "簈簉簊簍簎簐",
    5,
    "簗簘簙"
  ],
  [
    "ba80",
    "簚",
    4,
    "簠",
    5,
    "簨簩簫",
    12,
    "簹",
    5,
    "籂骸孩海氦亥害骇酣憨邯韩含涵寒函喊罕翰撼捍旱憾悍焊汗汉夯杭航壕嚎豪毫郝好耗号浩呵喝荷菏核禾和何合盒貉阂河涸赫褐鹤贺嘿黑痕很狠恨哼亨横衡恒轰哄烘虹鸿洪宏弘红喉侯猴吼厚候后呼乎忽瑚壶葫胡蝴狐糊湖"
  ],
  [
    "bb40",
    "籃",
    9,
    "籎",
    36,
    "籵",
    5,
    "籾",
    9
  ],
  [
    "bb80",
    "粈粊",
    6,
    "粓粔粖粙粚粛粠粡粣粦粧粨粩粫粬粭粯粰粴",
    4,
    "粺粻弧虎唬护互沪户花哗华猾滑画划化话槐徊怀淮坏欢环桓还缓换患唤痪豢焕涣宦幻荒慌黄磺蝗簧皇凰惶煌晃幌恍谎灰挥辉徽恢蛔回毁悔慧卉惠晦贿秽会烩汇讳诲绘荤昏婚魂浑混豁活伙火获或惑霍货祸击圾基机畸稽积箕"
  ],
  [
    "bc40",
    "粿糀糂糃糄糆糉糋糎",
    6,
    "糘糚糛糝糞糡",
    6,
    "糩",
    5,
    "糰",
    7,
    "糹糺糼",
    13,
    "紋",
    5
  ],
  [
    "bc80",
    "紑",
    14,
    "紡紣紤紥紦紨紩紪紬紭紮細",
    6,
    "肌饥迹激讥鸡姬绩缉吉极棘辑籍集及急疾汲即嫉级挤几脊己蓟技冀季伎祭剂悸济寄寂计记既忌际妓继纪嘉枷夹佳家加荚颊贾甲钾假稼价架驾嫁歼监坚尖笺间煎兼肩艰奸缄茧检柬碱硷拣捡简俭剪减荐槛鉴践贱见键箭件"
  ],
  [
    "bd40",
    "紷",
    54,
    "絯",
    7
  ],
  [
    "bd80",
    "絸",
    32,
    "健舰剑饯渐溅涧建僵姜将浆江疆蒋桨奖讲匠酱降蕉椒礁焦胶交郊浇骄娇嚼搅铰矫侥脚狡角饺缴绞剿教酵轿较叫窖揭接皆秸街阶截劫节桔杰捷睫竭洁结解姐戒藉芥界借介疥诫届巾筋斤金今津襟紧锦仅谨进靳晋禁近烬浸"
  ],
  [
    "be40",
    "継",
    12,
    "綧",
    6,
    "綯",
    42
  ],
  [
    "be80",
    "線",
    32,
    "尽劲荆兢茎睛晶鲸京惊精粳经井警景颈静境敬镜径痉靖竟竞净炯窘揪究纠玖韭久灸九酒厩救旧臼舅咎就疚鞠拘狙疽居驹菊局咀矩举沮聚拒据巨具距踞锯俱句惧炬剧捐鹃娟倦眷卷绢撅攫抉掘倔爵觉决诀绝均菌钧军君峻"
  ],
  [
    "bf40",
    "緻",
    62
  ],
  [
    "bf80",
    "縺縼",
    4,
    "繂",
    4,
    "繈",
    21,
    "俊竣浚郡骏喀咖卡咯开揩楷凯慨刊堪勘坎砍看康慷糠扛抗亢炕考拷烤靠坷苛柯棵磕颗科壳咳可渴克刻客课肯啃垦恳坑吭空恐孔控抠口扣寇枯哭窟苦酷库裤夸垮挎跨胯块筷侩快宽款匡筐狂框矿眶旷况亏盔岿窥葵奎魁傀"
  ],
  [
    "c040",
    "繞",
    35,
    "纃",
    23,
    "纜纝纞"
  ],
  [
    "c080",
    "纮纴纻纼绖绤绬绹缊缐缞缷缹缻",
    6,
    "罃罆",
    9,
    "罒罓馈愧溃坤昆捆困括扩廓阔垃拉喇蜡腊辣啦莱来赖蓝婪栏拦篮阑兰澜谰揽览懒缆烂滥琅榔狼廊郎朗浪捞劳牢老佬姥酪烙涝勒乐雷镭蕾磊累儡垒擂肋类泪棱楞冷厘梨犁黎篱狸离漓理李里鲤礼莉荔吏栗丽厉励砾历利傈例俐"
  ],
  [
    "c140",
    "罖罙罛罜罝罞罠罣",
    4,
    "罫罬罭罯罰罳罵罶罷罸罺罻罼罽罿羀羂",
    7,
    "羋羍羏",
    4,
    "羕",
    4,
    "羛羜羠羢羣羥羦羨",
    6,
    "羱"
  ],
  [
    "c180",
    "羳",
    4,
    "羺羻羾翀翂翃翄翆翇翈翉翋翍翏",
    4,
    "翖翗翙",
    5,
    "翢翣痢立粒沥隶力璃哩俩联莲连镰廉怜涟帘敛脸链恋炼练粮凉梁粱良两辆量晾亮谅撩聊僚疗燎寥辽潦了撂镣廖料列裂烈劣猎琳林磷霖临邻鳞淋凛赁吝拎玲菱零龄铃伶羚凌灵陵岭领另令溜琉榴硫馏留刘瘤流柳六龙聋咙笼窿"
  ],
  [
    "c240",
    "翤翧翨翪翫翬翭翯翲翴",
    6,
    "翽翾翿耂耇耈耉耊耎耏耑耓耚耛耝耞耟耡耣耤耫",
    5,
    "耲耴耹耺耼耾聀聁聄聅聇聈聉聎聏聐聑聓聕聖聗"
  ],
  [
    "c280",
    "聙聛",
    13,
    "聫",
    5,
    "聲",
    11,
    "隆垄拢陇楼娄搂篓漏陋芦卢颅庐炉掳卤虏鲁麓碌露路赂鹿潞禄录陆戮驴吕铝侣旅履屡缕虑氯律率滤绿峦挛孪滦卵乱掠略抡轮伦仑沦纶论萝螺罗逻锣箩骡裸落洛骆络妈麻玛码蚂马骂嘛吗埋买麦卖迈脉瞒馒蛮满蔓曼慢漫"
  ],
  [
    "c340",
    "聾肁肂肅肈肊肍",
    5,
    "肔肕肗肙肞肣肦肧肨肬肰肳肵肶肸肹肻胅胇",
    4,
    "胏",
    6,
    "胘胟胠胢胣胦胮胵胷胹胻胾胿脀脁脃脄脅脇脈脋"
  ],
  [
    "c380",
    "脌脕脗脙脛脜脝脟",
    12,
    "脭脮脰脳脴脵脷脹",
    4,
    "脿谩芒茫盲氓忙莽猫茅锚毛矛铆卯茂冒帽貌贸么玫枚梅酶霉煤没眉媒镁每美昧寐妹媚门闷们萌蒙檬盟锰猛梦孟眯醚靡糜迷谜弥米秘觅泌蜜密幂棉眠绵冕免勉娩缅面苗描瞄藐秒渺庙妙蔑灭民抿皿敏悯闽明螟鸣铭名命谬摸"
  ],
  [
    "c440",
    "腀",
    5,
    "腇腉腍腎腏腒腖腗腘腛",
    4,
    "腡腢腣腤腦腨腪腫腬腯腲腳腵腶腷腸膁膃",
    4,
    "膉膋膌膍膎膐膒",
    5,
    "膙膚膞",
    4,
    "膤膥"
  ],
  [
    "c480",
    "膧膩膫",
    7,
    "膴",
    5,
    "膼膽膾膿臄臅臇臈臉臋臍",
    6,
    "摹蘑模膜磨摩魔抹末莫墨默沫漠寞陌谋牟某拇牡亩姆母墓暮幕募慕木目睦牧穆拿哪呐钠那娜纳氖乃奶耐奈南男难囊挠脑恼闹淖呢馁内嫩能妮霓倪泥尼拟你匿腻逆溺蔫拈年碾撵捻念娘酿鸟尿捏聂孽啮镊镍涅您柠狞凝宁"
  ],
  [
    "c540",
    "臔",
    14,
    "臤臥臦臨臩臫臮",
    4,
    "臵",
    5,
    "臽臿舃與",
    4,
    "舎舏舑舓舕",
    5,
    "舝舠舤舥舦舧舩舮舲舺舼舽舿"
  ],
  [
    "c580",
    "艀艁艂艃艅艆艈艊艌艍艎艐",
    7,
    "艙艛艜艝艞艠",
    7,
    "艩拧泞牛扭钮纽脓浓农弄奴努怒女暖虐疟挪懦糯诺哦欧鸥殴藕呕偶沤啪趴爬帕怕琶拍排牌徘湃派攀潘盘磐盼畔判叛乓庞旁耪胖抛咆刨炮袍跑泡呸胚培裴赔陪配佩沛喷盆砰抨烹澎彭蓬棚硼篷膨朋鹏捧碰坯砒霹批披劈琵毗"
  ],
  [
    "c640",
    "艪艫艬艭艱艵艶艷艸艻艼芀芁芃芅芆芇芉芌芐芓芔芕芖芚芛芞芠芢芣芧芲芵芶芺芻芼芿苀苂苃苅苆苉苐苖苙苚苝苢苧苨苩苪苬苭苮苰苲苳苵苶苸"
  ],
  [
    "c680",
    "苺苼",
    4,
    "茊茋茍茐茒茓茖茘茙茝",
    9,
    "茩茪茮茰茲茷茻茽啤脾疲皮匹痞僻屁譬篇偏片骗飘漂瓢票撇瞥拼频贫品聘乒坪苹萍平凭瓶评屏坡泼颇婆破魄迫粕剖扑铺仆莆葡菩蒲埔朴圃普浦谱曝瀑期欺栖戚妻七凄漆柒沏其棋奇歧畦崎脐齐旗祈祁骑起岂乞企启契砌器气迄弃汽泣讫掐"
  ],
  [
    "c740",
    "茾茿荁荂荄荅荈荊",
    4,
    "荓荕",
    4,
    "荝荢荰",
    6,
    "荹荺荾",
    6,
    "莇莈莊莋莌莍莏莐莑莔莕莖莗莙莚莝莟莡",
    6,
    "莬莭莮"
  ],
  [
    "c780",
    "莯莵莻莾莿菂菃菄菆菈菉菋菍菎菐菑菒菓菕菗菙菚菛菞菢菣菤菦菧菨菫菬菭恰洽牵扦钎铅千迁签仟谦乾黔钱钳前潜遣浅谴堑嵌欠歉枪呛腔羌墙蔷强抢橇锹敲悄桥瞧乔侨巧鞘撬翘峭俏窍切茄且怯窃钦侵亲秦琴勤芹擒禽寝沁青轻氢倾卿清擎晴氰情顷请庆琼穷秋丘邱球求囚酋泅趋区蛆曲躯屈驱渠"
  ],
  [
    "c840",
    "菮華菳",
    4,
    "菺菻菼菾菿萀萂萅萇萈萉萊萐萒",
    5,
    "萙萚萛萞",
    5,
    "萩",
    7,
    "萲",
    5,
    "萹萺萻萾",
    7,
    "葇葈葉"
  ],
  [
    "c880",
    "葊",
    6,
    "葒",
    4,
    "葘葝葞葟葠葢葤",
    4,
    "葪葮葯葰葲葴葷葹葻葼取娶龋趣去圈颧权醛泉全痊拳犬券劝缺炔瘸却鹊榷确雀裙群然燃冉染瓤壤攘嚷让饶扰绕惹热壬仁人忍韧任认刃妊纫扔仍日戎茸蓉荣融熔溶容绒冗揉柔肉茹蠕儒孺如辱乳汝入褥软阮蕊瑞锐闰润若弱撒洒萨腮鳃塞赛三叁"
  ],
  [
    "c940",
    "葽",
    4,
    "蒃蒄蒅蒆蒊蒍蒏",
    7,
    "蒘蒚蒛蒝蒞蒟蒠蒢",
    12,
    "蒰蒱蒳蒵蒶蒷蒻蒼蒾蓀蓂蓃蓅蓆蓇蓈蓋蓌蓎蓏蓒蓔蓕蓗"
  ],
  [
    "c980",
    "蓘",
    4,
    "蓞蓡蓢蓤蓧",
    4,
    "蓭蓮蓯蓱",
    10,
    "蓽蓾蔀蔁蔂伞散桑嗓丧搔骚扫嫂瑟色涩森僧莎砂杀刹沙纱傻啥煞筛晒珊苫杉山删煽衫闪陕擅赡膳善汕扇缮墒伤商赏晌上尚裳梢捎稍烧芍勺韶少哨邵绍奢赊蛇舌舍赦摄射慑涉社设砷申呻伸身深娠绅神沈审婶甚肾慎渗声生甥牲升绳"
  ],
  [
    "ca40",
    "蔃",
    8,
    "蔍蔎蔏蔐蔒蔔蔕蔖蔘蔙蔛蔜蔝蔞蔠蔢",
    8,
    "蔭",
    9,
    "蔾",
    4,
    "蕄蕅蕆蕇蕋",
    10
  ],
  [
    "ca80",
    "蕗蕘蕚蕛蕜蕝蕟",
    4,
    "蕥蕦蕧蕩",
    8,
    "蕳蕵蕶蕷蕸蕼蕽蕿薀薁省盛剩胜圣师失狮施湿诗尸虱十石拾时什食蚀实识史矢使屎驶始式示士世柿事拭誓逝势是嗜噬适仕侍释饰氏市恃室视试收手首守寿授售受瘦兽蔬枢梳殊抒输叔舒淑疏书赎孰熟薯暑曙署蜀黍鼠属术述树束戍竖墅庶数漱"
  ],
  [
    "cb40",
    "薂薃薆薈",
    6,
    "薐",
    10,
    "薝",
    6,
    "薥薦薧薩薫薬薭薱",
    5,
    "薸薺",
    6,
    "藂",
    6,
    "藊",
    4,
    "藑藒"
  ],
  [
    "cb80",
    "藔藖",
    5,
    "藝",
    6,
    "藥藦藧藨藪",
    14,
    "恕刷耍摔衰甩帅栓拴霜双爽谁水睡税吮瞬顺舜说硕朔烁斯撕嘶思私司丝死肆寺嗣四伺似饲巳松耸怂颂送宋讼诵搜艘擞嗽苏酥俗素速粟僳塑溯宿诉肃酸蒜算虽隋随绥髓碎岁穗遂隧祟孙损笋蓑梭唆缩琐索锁所塌他它她塔"
  ],
  [
    "cc40",
    "藹藺藼藽藾蘀",
    4,
    "蘆",
    10,
    "蘒蘓蘔蘕蘗",
    15,
    "蘨蘪",
    13,
    "蘹蘺蘻蘽蘾蘿虀"
  ],
  [
    "cc80",
    "虁",
    11,
    "虒虓處",
    4,
    "虛虜虝號虠虡虣",
    7,
    "獭挞蹋踏胎苔抬台泰酞太态汰坍摊贪瘫滩坛檀痰潭谭谈坦毯袒碳探叹炭汤塘搪堂棠膛唐糖倘躺淌趟烫掏涛滔绦萄桃逃淘陶讨套特藤腾疼誊梯剔踢锑提题蹄啼体替嚏惕涕剃屉天添填田甜恬舔腆挑条迢眺跳贴铁帖厅听烃"
  ],
  [
    "cd40",
    "虭虯虰虲",
    6,
    "蚃",
    6,
    "蚎",
    4,
    "蚔蚖",
    5,
    "蚞",
    4,
    "蚥蚦蚫蚭蚮蚲蚳蚷蚸蚹蚻",
    4,
    "蛁蛂蛃蛅蛈蛌蛍蛒蛓蛕蛖蛗蛚蛜"
  ],
  [
    "cd80",
    "蛝蛠蛡蛢蛣蛥蛦蛧蛨蛪蛫蛬蛯蛵蛶蛷蛺蛻蛼蛽蛿蜁蜄蜅蜆蜋蜌蜎蜏蜐蜑蜔蜖汀廷停亭庭挺艇通桐酮瞳同铜彤童桶捅筒统痛偷投头透凸秃突图徒途涂屠土吐兔湍团推颓腿蜕褪退吞屯臀拖托脱鸵陀驮驼椭妥拓唾挖哇蛙洼娃瓦袜歪外豌弯湾玩顽丸烷完碗挽晚皖惋宛婉万腕汪王亡枉网往旺望忘妄威"
  ],
  [
    "ce40",
    "蜙蜛蜝蜟蜠蜤蜦蜧蜨蜪蜫蜬蜭蜯蜰蜲蜳蜵蜶蜸蜹蜺蜼蜽蝀",
    6,
    "蝊蝋蝍蝏蝐蝑蝒蝔蝕蝖蝘蝚",
    5,
    "蝡蝢蝦",
    7,
    "蝯蝱蝲蝳蝵"
  ],
  [
    "ce80",
    "蝷蝸蝹蝺蝿螀螁螄螆螇螉螊螌螎",
    4,
    "螔螕螖螘",
    6,
    "螠",
    4,
    "巍微危韦违桅围唯惟为潍维苇萎委伟伪尾纬未蔚味畏胃喂魏位渭谓尉慰卫瘟温蚊文闻纹吻稳紊问嗡翁瓮挝蜗涡窝我斡卧握沃巫呜钨乌污诬屋无芜梧吾吴毋武五捂午舞伍侮坞戊雾晤物勿务悟误昔熙析西硒矽晰嘻吸锡牺"
  ],
  [
    "cf40",
    "螥螦螧螩螪螮螰螱螲螴螶螷螸螹螻螼螾螿蟁",
    4,
    "蟇蟈蟉蟌",
    4,
    "蟔",
    6,
    "蟜蟝蟞蟟蟡蟢蟣蟤蟦蟧蟨蟩蟫蟬蟭蟯",
    9
  ],
  [
    "cf80",
    "蟺蟻蟼蟽蟿蠀蠁蠂蠄",
    5,
    "蠋",
    7,
    "蠔蠗蠘蠙蠚蠜",
    4,
    "蠣稀息希悉膝夕惜熄烯溪汐犀檄袭席习媳喜铣洗系隙戏细瞎虾匣霞辖暇峡侠狭下厦夏吓掀锨先仙鲜纤咸贤衔舷闲涎弦嫌显险现献县腺馅羡宪陷限线相厢镶香箱襄湘乡翔祥详想响享项巷橡像向象萧硝霄削哮嚣销消宵淆晓"
  ],
  [
    "d040",
    "蠤",
    13,
    "蠳",
    5,
    "蠺蠻蠽蠾蠿衁衂衃衆",
    5,
    "衎",
    5,
    "衕衖衘衚",
    6,
    "衦衧衪衭衯衱衳衴衵衶衸衹衺"
  ],
  [
    "d080",
    "衻衼袀袃袆袇袉袊袌袎袏袐袑袓袔袕袗",
    4,
    "袝",
    4,
    "袣袥",
    5,
    "小孝校肖啸笑效楔些歇蝎鞋协挟携邪斜胁谐写械卸蟹懈泄泻谢屑薪芯锌欣辛新忻心信衅星腥猩惺兴刑型形邢行醒幸杏性姓兄凶胸匈汹雄熊休修羞朽嗅锈秀袖绣墟戌需虚嘘须徐许蓄酗叙旭序畜恤絮婿绪续轩喧宣悬旋玄"
  ],
  [
    "d140",
    "袬袮袯袰袲",
    4,
    "袸袹袺袻袽袾袿裀裃裄裇裈裊裋裌裍裏裐裑裓裖裗裚",
    4,
    "裠裡裦裧裩",
    6,
    "裲裵裶裷裺裻製裿褀褁褃",
    5
  ],
  [
    "d180",
    "褉褋",
    4,
    "褑褔",
    4,
    "褜",
    4,
    "褢褣褤褦褧褨褩褬褭褮褯褱褲褳褵褷选癣眩绚靴薛学穴雪血勋熏循旬询寻驯巡殉汛训讯逊迅压押鸦鸭呀丫芽牙蚜崖衙涯雅哑亚讶焉咽阉烟淹盐严研蜒岩延言颜阎炎沿奄掩眼衍演艳堰燕厌砚雁唁彦焰宴谚验殃央鸯秧杨扬佯疡羊洋阳氧仰痒养样漾邀腰妖瑶"
  ],
  [
    "d240",
    "褸",
    8,
    "襂襃襅",
    24,
    "襠",
    5,
    "襧",
    19,
    "襼"
  ],
  [
    "d280",
    "襽襾覀覂覄覅覇",
    26,
    "摇尧遥窑谣姚咬舀药要耀椰噎耶爷野冶也页掖业叶曳腋夜液一壹医揖铱依伊衣颐夷遗移仪胰疑沂宜姨彝椅蚁倚已乙矣以艺抑易邑屹亿役臆逸肄疫亦裔意毅忆义益溢诣议谊译异翼翌绎茵荫因殷音阴姻吟银淫寅饮尹引隐"
  ],
  [
    "d340",
    "覢",
    30,
    "觃觍觓觔觕觗觘觙觛觝觟觠觡觢觤觧觨觩觪觬觭觮觰觱觲觴",
    6
  ],
  [
    "d380",
    "觻",
    4,
    "訁",
    5,
    "計",
    21,
    "印英樱婴鹰应缨莹萤营荧蝇迎赢盈影颖硬映哟拥佣臃痈庸雍踊蛹咏泳涌永恿勇用幽优悠忧尤由邮铀犹油游酉有友右佑釉诱又幼迂淤于盂榆虞愚舆余俞逾鱼愉渝渔隅予娱雨与屿禹宇语羽玉域芋郁吁遇喻峪御愈欲狱育誉"
  ],
  [
    "d440",
    "訞",
    31,
    "訿",
    8,
    "詉",
    21
  ],
  [
    "d480",
    "詟",
    25,
    "詺",
    6,
    "浴寓裕预豫驭鸳渊冤元垣袁原援辕园员圆猿源缘远苑愿怨院曰约越跃钥岳粤月悦阅耘云郧匀陨允运蕴酝晕韵孕匝砸杂栽哉灾宰载再在咱攒暂赞赃脏葬遭糟凿藻枣早澡蚤躁噪造皂灶燥责择则泽贼怎增憎曾赠扎喳渣札轧"
  ],
  [
    "d540",
    "誁",
    7,
    "誋",
    7,
    "誔",
    46
  ],
  [
    "d580",
    "諃",
    32,
    "铡闸眨栅榨咋乍炸诈摘斋宅窄债寨瞻毡詹粘沾盏斩辗崭展蘸栈占战站湛绽樟章彰漳张掌涨杖丈帐账仗胀瘴障招昭找沼赵照罩兆肇召遮折哲蛰辙者锗蔗这浙珍斟真甄砧臻贞针侦枕疹诊震振镇阵蒸挣睁征狰争怔整拯正政"
  ],
  [
    "d640",
    "諤",
    34,
    "謈",
    27
  ],
  [
    "d680",
    "謤謥謧",
    30,
    "帧症郑证芝枝支吱蜘知肢脂汁之织职直植殖执值侄址指止趾只旨纸志挚掷至致置帜峙制智秩稚质炙痔滞治窒中盅忠钟衷终种肿重仲众舟周州洲诌粥轴肘帚咒皱宙昼骤珠株蛛朱猪诸诛逐竹烛煮拄瞩嘱主著柱助蛀贮铸筑"
  ],
  [
    "d740",
    "譆",
    31,
    "譧",
    4,
    "譭",
    25
  ],
  [
    "d780",
    "讇",
    24,
    "讬讱讻诇诐诪谉谞住注祝驻抓爪拽专砖转撰赚篆桩庄装妆撞壮状椎锥追赘坠缀谆准捉拙卓桌琢茁酌啄着灼浊兹咨资姿滋淄孜紫仔籽滓子自渍字鬃棕踪宗综总纵邹走奏揍租足卒族祖诅阻组钻纂嘴醉最罪尊遵昨左佐柞做作坐座"
  ],
  [
    "d840",
    "谸",
    8,
    "豂豃豄豅豈豊豋豍",
    7,
    "豖豗豘豙豛",
    5,
    "豣",
    6,
    "豬",
    6,
    "豴豵豶豷豻",
    6,
    "貃貄貆貇"
  ],
  [
    "d880",
    "貈貋貍",
    6,
    "貕貖貗貙",
    20,
    "亍丌兀丐廿卅丕亘丞鬲孬噩丨禺丿匕乇夭爻卮氐囟胤馗毓睾鼗丶亟鼐乜乩亓芈孛啬嘏仄厍厝厣厥厮靥赝匚叵匦匮匾赜卦卣刂刈刎刭刳刿剀剌剞剡剜蒯剽劂劁劐劓冂罔亻仃仉仂仨仡仫仞伛仳伢佤仵伥伧伉伫佞佧攸佚佝"
  ],
  [
    "d940",
    "貮",
    62
  ],
  [
    "d980",
    "賭",
    32,
    "佟佗伲伽佶佴侑侉侃侏佾佻侪佼侬侔俦俨俪俅俚俣俜俑俟俸倩偌俳倬倏倮倭俾倜倌倥倨偾偃偕偈偎偬偻傥傧傩傺僖儆僭僬僦僮儇儋仝氽佘佥俎龠汆籴兮巽黉馘冁夔勹匍訇匐凫夙兕亠兖亳衮袤亵脔裒禀嬴蠃羸冫冱冽冼"
  ],
  [
    "da40",
    "贎",
    14,
    "贠赑赒赗赟赥赨赩赪赬赮赯赱赲赸",
    8,
    "趂趃趆趇趈趉趌",
    4,
    "趒趓趕",
    9,
    "趠趡"
  ],
  [
    "da80",
    "趢趤",
    12,
    "趲趶趷趹趻趽跀跁跂跅跇跈跉跊跍跐跒跓跔凇冖冢冥讠讦讧讪讴讵讷诂诃诋诏诎诒诓诔诖诘诙诜诟诠诤诨诩诮诰诳诶诹诼诿谀谂谄谇谌谏谑谒谔谕谖谙谛谘谝谟谠谡谥谧谪谫谮谯谲谳谵谶卩卺阝阢阡阱阪阽阼陂陉陔陟陧陬陲陴隈隍隗隰邗邛邝邙邬邡邴邳邶邺"
  ],
  [
    "db40",
    "跕跘跙跜跠跡跢跥跦跧跩跭跮跰跱跲跴跶跼跾",
    6,
    "踆踇踈踋踍踎踐踑踒踓踕",
    7,
    "踠踡踤",
    4,
    "踫踭踰踲踳踴踶踷踸踻踼踾"
  ],
  [
    "db80",
    "踿蹃蹅蹆蹌",
    4,
    "蹓",
    5,
    "蹚",
    11,
    "蹧蹨蹪蹫蹮蹱邸邰郏郅邾郐郄郇郓郦郢郜郗郛郫郯郾鄄鄢鄞鄣鄱鄯鄹酃酆刍奂劢劬劭劾哿勐勖勰叟燮矍廴凵凼鬯厶弁畚巯坌垩垡塾墼壅壑圩圬圪圳圹圮圯坜圻坂坩垅坫垆坼坻坨坭坶坳垭垤垌垲埏垧垴垓垠埕埘埚埙埒垸埴埯埸埤埝"
  ],
  [
    "dc40",
    "蹳蹵蹷",
    4,
    "蹽蹾躀躂躃躄躆躈",
    6,
    "躑躒躓躕",
    6,
    "躝躟",
    11,
    "躭躮躰躱躳",
    6,
    "躻",
    7
  ],
  [
    "dc80",
    "軃",
    10,
    "軏",
    21,
    "堋堍埽埭堀堞堙塄堠塥塬墁墉墚墀馨鼙懿艹艽艿芏芊芨芄芎芑芗芙芫芸芾芰苈苊苣芘芷芮苋苌苁芩芴芡芪芟苄苎芤苡茉苷苤茏茇苜苴苒苘茌苻苓茑茚茆茔茕苠苕茜荑荛荜茈莒茼茴茱莛荞茯荏荇荃荟荀茗荠茭茺茳荦荥"
  ],
  [
    "dd40",
    "軥",
    62
  ],
  [
    "dd80",
    "輤",
    32,
    "荨茛荩荬荪荭荮莰荸莳莴莠莪莓莜莅荼莶莩荽莸荻莘莞莨莺莼菁萁菥菘堇萘萋菝菽菖萜萸萑萆菔菟萏萃菸菹菪菅菀萦菰菡葜葑葚葙葳蒇蒈葺蒉葸萼葆葩葶蒌蒎萱葭蓁蓍蓐蓦蒽蓓蓊蒿蒺蓠蒡蒹蒴蒗蓥蓣蔌甍蔸蓰蔹蔟蔺"
  ],
  [
    "de40",
    "轅",
    32,
    "轪辀辌辒辝辠辡辢辤辥辦辧辪辬辭辮辯農辳辴辵辷辸辺辻込辿迀迃迆"
  ],
  [
    "de80",
    "迉",
    4,
    "迏迒迖迗迚迠迡迣迧迬迯迱迲迴迵迶迺迻迼迾迿逇逈逌逎逓逕逘蕖蔻蓿蓼蕙蕈蕨蕤蕞蕺瞢蕃蕲蕻薤薨薇薏蕹薮薜薅薹薷薰藓藁藜藿蘧蘅蘩蘖蘼廾弈夼奁耷奕奚奘匏尢尥尬尴扌扪抟抻拊拚拗拮挢拶挹捋捃掭揶捱捺掎掴捭掬掊捩掮掼揲揸揠揿揄揞揎摒揆掾摅摁搋搛搠搌搦搡摞撄摭撖"
  ],
  [
    "df40",
    "這逜連逤逥逧",
    5,
    "逰",
    4,
    "逷逹逺逽逿遀遃遅遆遈",
    4,
    "過達違遖遙遚遜",
    5,
    "遤遦遧適遪遫遬遯",
    4,
    "遶",
    6,
    "遾邁"
  ],
  [
    "df80",
    "還邅邆邇邉邊邌",
    4,
    "邒邔邖邘邚邜邞邟邠邤邥邧邨邩邫邭邲邷邼邽邿郀摺撷撸撙撺擀擐擗擤擢攉攥攮弋忒甙弑卟叱叽叩叨叻吒吖吆呋呒呓呔呖呃吡呗呙吣吲咂咔呷呱呤咚咛咄呶呦咝哐咭哂咴哒咧咦哓哔呲咣哕咻咿哌哙哚哜咩咪咤哝哏哞唛哧唠哽唔哳唢唣唏唑唧唪啧喏喵啉啭啁啕唿啐唼"
  ],
  [
    "e040",
    "郂郃郆郈郉郋郌郍郒郔郕郖郘郙郚郞郟郠郣郤郥郩郪郬郮郰郱郲郳郵郶郷郹郺郻郼郿鄀鄁鄃鄅",
    19,
    "鄚鄛鄜"
  ],
  [
    "e080",
    "鄝鄟鄠鄡鄤",
    10,
    "鄰鄲",
    6,
    "鄺",
    8,
    "酄唷啖啵啶啷唳唰啜喋嗒喃喱喹喈喁喟啾嗖喑啻嗟喽喾喔喙嗪嗷嗉嘟嗑嗫嗬嗔嗦嗝嗄嗯嗥嗲嗳嗌嗍嗨嗵嗤辔嘞嘈嘌嘁嘤嘣嗾嘀嘧嘭噘嘹噗嘬噍噢噙噜噌噔嚆噤噱噫噻噼嚅嚓嚯囔囗囝囡囵囫囹囿圄圊圉圜帏帙帔帑帱帻帼"
  ],
  [
    "e140",
    "酅酇酈酑酓酔酕酖酘酙酛酜酟酠酦酧酨酫酭酳酺酻酼醀",
    4,
    "醆醈醊醎醏醓",
    6,
    "醜",
    5,
    "醤",
    5,
    "醫醬醰醱醲醳醶醷醸醹醻"
  ],
  [
    "e180",
    "醼",
    10,
    "釈釋釐釒",
    9,
    "針",
    8,
    "帷幄幔幛幞幡岌屺岍岐岖岈岘岙岑岚岜岵岢岽岬岫岱岣峁岷峄峒峤峋峥崂崃崧崦崮崤崞崆崛嵘崾崴崽嵬嵛嵯嵝嵫嵋嵊嵩嵴嶂嶙嶝豳嶷巅彳彷徂徇徉後徕徙徜徨徭徵徼衢彡犭犰犴犷犸狃狁狎狍狒狨狯狩狲狴狷猁狳猃狺"
  ],
  [
    "e240",
    "釦",
    62
  ],
  [
    "e280",
    "鈥",
    32,
    "狻猗猓猡猊猞猝猕猢猹猥猬猸猱獐獍獗獠獬獯獾舛夥飧夤夂饣饧",
    5,
    "饴饷饽馀馄馇馊馍馐馑馓馔馕庀庑庋庖庥庠庹庵庾庳赓廒廑廛廨廪膺忄忉忖忏怃忮怄忡忤忾怅怆忪忭忸怙怵怦怛怏怍怩怫怊怿怡恸恹恻恺恂"
  ],
  [
    "e340",
    "鉆",
    45,
    "鉵",
    16
  ],
  [
    "e380",
    "銆",
    7,
    "銏",
    24,
    "恪恽悖悚悭悝悃悒悌悛惬悻悱惝惘惆惚悴愠愦愕愣惴愀愎愫慊慵憬憔憧憷懔懵忝隳闩闫闱闳闵闶闼闾阃阄阆阈阊阋阌阍阏阒阕阖阗阙阚丬爿戕氵汔汜汊沣沅沐沔沌汨汩汴汶沆沩泐泔沭泷泸泱泗沲泠泖泺泫泮沱泓泯泾"
  ],
  [
    "e440",
    "銨",
    5,
    "銯",
    24,
    "鋉",
    31
  ],
  [
    "e480",
    "鋩",
    32,
    "洹洧洌浃浈洇洄洙洎洫浍洮洵洚浏浒浔洳涑浯涞涠浞涓涔浜浠浼浣渚淇淅淞渎涿淠渑淦淝淙渖涫渌涮渫湮湎湫溲湟溆湓湔渲渥湄滟溱溘滠漭滢溥溧溽溻溷滗溴滏溏滂溟潢潆潇漤漕滹漯漶潋潴漪漉漩澉澍澌潸潲潼潺濑"
  ],
  [
    "e540",
    "錊",
    51,
    "錿",
    10
  ],
  [
    "e580",
    "鍊",
    31,
    "鍫濉澧澹澶濂濡濮濞濠濯瀚瀣瀛瀹瀵灏灞宀宄宕宓宥宸甯骞搴寤寮褰寰蹇謇辶迓迕迥迮迤迩迦迳迨逅逄逋逦逑逍逖逡逵逶逭逯遄遑遒遐遨遘遢遛暹遴遽邂邈邃邋彐彗彖彘尻咫屐屙孱屣屦羼弪弩弭艴弼鬻屮妁妃妍妩妪妣"
  ],
  [
    "e640",
    "鍬",
    34,
    "鎐",
    27
  ],
  [
    "e680",
    "鎬",
    29,
    "鏋鏌鏍妗姊妫妞妤姒妲妯姗妾娅娆姝娈姣姘姹娌娉娲娴娑娣娓婀婧婊婕娼婢婵胬媪媛婷婺媾嫫媲嫒嫔媸嫠嫣嫱嫖嫦嫘嫜嬉嬗嬖嬲嬷孀尕尜孚孥孳孑孓孢驵驷驸驺驿驽骀骁骅骈骊骐骒骓骖骘骛骜骝骟骠骢骣骥骧纟纡纣纥纨纩"
  ],
  [
    "e740",
    "鏎",
    7,
    "鏗",
    54
  ],
  [
    "e780",
    "鐎",
    32,
    "纭纰纾绀绁绂绉绋绌绐绔绗绛绠绡绨绫绮绯绱绲缍绶绺绻绾缁缂缃缇缈缋缌缏缑缒缗缙缜缛缟缡",
    6,
    "缪缫缬缭缯",
    4,
    "缵幺畿巛甾邕玎玑玮玢玟珏珂珑玷玳珀珉珈珥珙顼琊珩珧珞玺珲琏琪瑛琦琥琨琰琮琬"
  ],
  [
    "e840",
    "鐯",
    14,
    "鐿",
    43,
    "鑬鑭鑮鑯"
  ],
  [
    "e880",
    "鑰",
    20,
    "钑钖钘铇铏铓铔铚铦铻锜锠琛琚瑁瑜瑗瑕瑙瑷瑭瑾璜璎璀璁璇璋璞璨璩璐璧瓒璺韪韫韬杌杓杞杈杩枥枇杪杳枘枧杵枨枞枭枋杷杼柰栉柘栊柩枰栌柙枵柚枳柝栀柃枸柢栎柁柽栲栳桠桡桎桢桄桤梃栝桕桦桁桧桀栾桊桉栩梵梏桴桷梓桫棂楮棼椟椠棹"
  ],
  [
    "e940",
    "锧锳锽镃镈镋镕镚镠镮镴镵長",
    7,
    "門",
    42
  ],
  [
    "e980",
    "閫",
    32,
    "椤棰椋椁楗棣椐楱椹楠楂楝榄楫榀榘楸椴槌榇榈槎榉楦楣楹榛榧榻榫榭槔榱槁槊槟榕槠榍槿樯槭樗樘橥槲橄樾檠橐橛樵檎橹樽樨橘橼檑檐檩檗檫猷獒殁殂殇殄殒殓殍殚殛殡殪轫轭轱轲轳轵轶轸轷轹轺轼轾辁辂辄辇辋"
  ],
  [
    "ea40",
    "闌",
    27,
    "闬闿阇阓阘阛阞阠阣",
    6,
    "阫阬阭阯阰阷阸阹阺阾陁陃陊陎陏陑陒陓陖陗"
  ],
  [
    "ea80",
    "陘陙陚陜陝陞陠陣陥陦陫陭",
    4,
    "陳陸",
    12,
    "隇隉隊辍辎辏辘辚軎戋戗戛戟戢戡戥戤戬臧瓯瓴瓿甏甑甓攴旮旯旰昊昙杲昃昕昀炅曷昝昴昱昶昵耆晟晔晁晏晖晡晗晷暄暌暧暝暾曛曜曦曩贲贳贶贻贽赀赅赆赈赉赇赍赕赙觇觊觋觌觎觏觐觑牮犟牝牦牯牾牿犄犋犍犏犒挈挲掰"
  ],
  [
    "eb40",
    "隌階隑隒隓隕隖隚際隝",
    9,
    "隨",
    7,
    "隱隲隴隵隷隸隺隻隿雂雃雈雊雋雐雑雓雔雖",
    9,
    "雡",
    6,
    "雫"
  ],
  [
    "eb80",
    "雬雭雮雰雱雲雴雵雸雺電雼雽雿霂霃霅霊霋霌霐霑霒霔霕霗",
    4,
    "霝霟霠搿擘耄毪毳毽毵毹氅氇氆氍氕氘氙氚氡氩氤氪氲攵敕敫牍牒牖爰虢刖肟肜肓肼朊肽肱肫肭肴肷胧胨胩胪胛胂胄胙胍胗朐胝胫胱胴胭脍脎胲胼朕脒豚脶脞脬脘脲腈腌腓腴腙腚腱腠腩腼腽腭腧塍媵膈膂膑滕膣膪臌朦臊膻"
  ],
  [
    "ec40",
    "霡",
    8,
    "霫霬霮霯霱霳",
    4,
    "霺霻霼霽霿",
    18,
    "靔靕靗靘靚靜靝靟靣靤靦靧靨靪",
    7
  ],
  [
    "ec80",
    "靲靵靷",
    4,
    "靽",
    7,
    "鞆",
    4,
    "鞌鞎鞏鞐鞓鞕鞖鞗鞙",
    4,
    "臁膦欤欷欹歃歆歙飑飒飓飕飙飚殳彀毂觳斐齑斓於旆旄旃旌旎旒旖炀炜炖炝炻烀炷炫炱烨烊焐焓焖焯焱煳煜煨煅煲煊煸煺熘熳熵熨熠燠燔燧燹爝爨灬焘煦熹戾戽扃扈扉礻祀祆祉祛祜祓祚祢祗祠祯祧祺禅禊禚禧禳忑忐"
  ],
  [
    "ed40",
    "鞞鞟鞡鞢鞤",
    6,
    "鞬鞮鞰鞱鞳鞵",
    46
  ],
  [
    "ed80",
    "韤韥韨韮",
    4,
    "韴韷",
    23,
    "怼恝恚恧恁恙恣悫愆愍慝憩憝懋懑戆肀聿沓泶淼矶矸砀砉砗砘砑斫砭砜砝砹砺砻砟砼砥砬砣砩硎硭硖硗砦硐硇硌硪碛碓碚碇碜碡碣碲碹碥磔磙磉磬磲礅磴礓礤礞礴龛黹黻黼盱眄眍盹眇眈眚眢眙眭眦眵眸睐睑睇睃睚睨"
  ],
  [
    "ee40",
    "頏",
    62
  ],
  [
    "ee80",
    "顎",
    32,
    "睢睥睿瞍睽瞀瞌瞑瞟瞠瞰瞵瞽町畀畎畋畈畛畲畹疃罘罡罟詈罨罴罱罹羁罾盍盥蠲钅钆钇钋钊钌钍钏钐钔钗钕钚钛钜钣钤钫钪钭钬钯钰钲钴钶",
    4,
    "钼钽钿铄铈",
    6,
    "铐铑铒铕铖铗铙铘铛铞铟铠铢铤铥铧铨铪"
  ],
  [
    "ef40",
    "顯",
    5,
    "颋颎颒颕颙颣風",
    37,
    "飏飐飔飖飗飛飜飝飠",
    4
  ],
  [
    "ef80",
    "飥飦飩",
    30,
    "铩铫铮铯铳铴铵铷铹铼铽铿锃锂锆锇锉锊锍锎锏锒",
    4,
    "锘锛锝锞锟锢锪锫锩锬锱锲锴锶锷锸锼锾锿镂锵镄镅镆镉镌镎镏镒镓镔镖镗镘镙镛镞镟镝镡镢镤",
    8,
    "镯镱镲镳锺矧矬雉秕秭秣秫稆嵇稃稂稞稔"
  ],
  [
    "f040",
    "餈",
    4,
    "餎餏餑",
    28,
    "餯",
    26
  ],
  [
    "f080",
    "饊",
    9,
    "饖",
    12,
    "饤饦饳饸饹饻饾馂馃馉稹稷穑黏馥穰皈皎皓皙皤瓞瓠甬鸠鸢鸨",
    4,
    "鸲鸱鸶鸸鸷鸹鸺鸾鹁鹂鹄鹆鹇鹈鹉鹋鹌鹎鹑鹕鹗鹚鹛鹜鹞鹣鹦",
    6,
    "鹱鹭鹳疒疔疖疠疝疬疣疳疴疸痄疱疰痃痂痖痍痣痨痦痤痫痧瘃痱痼痿瘐瘀瘅瘌瘗瘊瘥瘘瘕瘙"
  ],
  [
    "f140",
    "馌馎馚",
    10,
    "馦馧馩",
    47
  ],
  [
    "f180",
    "駙",
    32,
    "瘛瘼瘢瘠癀瘭瘰瘿瘵癃瘾瘳癍癞癔癜癖癫癯翊竦穸穹窀窆窈窕窦窠窬窨窭窳衤衩衲衽衿袂袢裆袷袼裉裢裎裣裥裱褚裼裨裾裰褡褙褓褛褊褴褫褶襁襦襻疋胥皲皴矜耒耔耖耜耠耢耥耦耧耩耨耱耋耵聃聆聍聒聩聱覃顸颀颃"
  ],
  [
    "f240",
    "駺",
    62
  ],
  [
    "f280",
    "騹",
    32,
    "颉颌颍颏颔颚颛颞颟颡颢颥颦虍虔虬虮虿虺虼虻蚨蚍蚋蚬蚝蚧蚣蚪蚓蚩蚶蛄蚵蛎蚰蚺蚱蚯蛉蛏蚴蛩蛱蛲蛭蛳蛐蜓蛞蛴蛟蛘蛑蜃蜇蛸蜈蜊蜍蜉蜣蜻蜞蜥蜮蜚蜾蝈蜴蜱蜩蜷蜿螂蜢蝽蝾蝻蝠蝰蝌蝮螋蝓蝣蝼蝤蝙蝥螓螯螨蟒"
  ],
  [
    "f340",
    "驚",
    17,
    "驲骃骉骍骎骔骕骙骦骩",
    6,
    "骲骳骴骵骹骻骽骾骿髃髄髆",
    4,
    "髍髎髏髐髒體髕髖髗髙髚髛髜"
  ],
  [
    "f380",
    "髝髞髠髢髣髤髥髧髨髩髪髬髮髰",
    8,
    "髺髼",
    6,
    "鬄鬅鬆蟆螈螅螭螗螃螫蟥螬螵螳蟋蟓螽蟑蟀蟊蟛蟪蟠蟮蠖蠓蟾蠊蠛蠡蠹蠼缶罂罄罅舐竺竽笈笃笄笕笊笫笏筇笸笪笙笮笱笠笥笤笳笾笞筘筚筅筵筌筝筠筮筻筢筲筱箐箦箧箸箬箝箨箅箪箜箢箫箴篑篁篌篝篚篥篦篪簌篾篼簏簖簋"
  ],
  [
    "f440",
    "鬇鬉",
    5,
    "鬐鬑鬒鬔",
    10,
    "鬠鬡鬢鬤",
    10,
    "鬰鬱鬳",
    7,
    "鬽鬾鬿魀魆魊魋魌魎魐魒魓魕",
    5
  ],
  [
    "f480",
    "魛",
    32,
    "簟簪簦簸籁籀臾舁舂舄臬衄舡舢舣舭舯舨舫舸舻舳舴舾艄艉艋艏艚艟艨衾袅袈裘裟襞羝羟羧羯羰羲籼敉粑粝粜粞粢粲粼粽糁糇糌糍糈糅糗糨艮暨羿翎翕翥翡翦翩翮翳糸絷綦綮繇纛麸麴赳趄趔趑趱赧赭豇豉酊酐酎酏酤"
  ],
  [
    "f540",
    "魼",
    62
  ],
  [
    "f580",
    "鮻",
    32,
    "酢酡酰酩酯酽酾酲酴酹醌醅醐醍醑醢醣醪醭醮醯醵醴醺豕鹾趸跫踅蹙蹩趵趿趼趺跄跖跗跚跞跎跏跛跆跬跷跸跣跹跻跤踉跽踔踝踟踬踮踣踯踺蹀踹踵踽踱蹉蹁蹂蹑蹒蹊蹰蹶蹼蹯蹴躅躏躔躐躜躞豸貂貊貅貘貔斛觖觞觚觜"
  ],
  [
    "f640",
    "鯜",
    62
  ],
  [
    "f680",
    "鰛",
    32,
    "觥觫觯訾謦靓雩雳雯霆霁霈霏霎霪霭霰霾龀龃龅",
    5,
    "龌黾鼋鼍隹隼隽雎雒瞿雠銎銮鋈錾鍪鏊鎏鐾鑫鱿鲂鲅鲆鲇鲈稣鲋鲎鲐鲑鲒鲔鲕鲚鲛鲞",
    5,
    "鲥",
    4,
    "鲫鲭鲮鲰",
    7,
    "鲺鲻鲼鲽鳄鳅鳆鳇鳊鳋"
  ],
  [
    "f740",
    "鰼",
    62
  ],
  [
    "f780",
    "鱻鱽鱾鲀鲃鲄鲉鲊鲌鲏鲓鲖鲗鲘鲙鲝鲪鲬鲯鲹鲾",
    4,
    "鳈鳉鳑鳒鳚鳛鳠鳡鳌",
    4,
    "鳓鳔鳕鳗鳘鳙鳜鳝鳟鳢靼鞅鞑鞒鞔鞯鞫鞣鞲鞴骱骰骷鹘骶骺骼髁髀髅髂髋髌髑魅魃魇魉魈魍魑飨餍餮饕饔髟髡髦髯髫髻髭髹鬈鬏鬓鬟鬣麽麾縻麂麇麈麋麒鏖麝麟黛黜黝黠黟黢黩黧黥黪黯鼢鼬鼯鼹鼷鼽鼾齄"
  ],
  [
    "f840",
    "鳣",
    62
  ],
  [
    "f880",
    "鴢",
    32
  ],
  [
    "f940",
    "鵃",
    62
  ],
  [
    "f980",
    "鶂",
    32
  ],
  [
    "fa40",
    "鶣",
    62
  ],
  [
    "fa80",
    "鷢",
    32
  ],
  [
    "fb40",
    "鸃",
    27,
    "鸤鸧鸮鸰鸴鸻鸼鹀鹍鹐鹒鹓鹔鹖鹙鹝鹟鹠鹡鹢鹥鹮鹯鹲鹴",
    9,
    "麀"
  ],
  [
    "fb80",
    "麁麃麄麅麆麉麊麌",
    5,
    "麔",
    8,
    "麞麠",
    5,
    "麧麨麩麪"
  ],
  [
    "fc40",
    "麫",
    8,
    "麵麶麷麹麺麼麿",
    4,
    "黅黆黇黈黊黋黌黐黒黓黕黖黗黙黚點黡黣黤黦黨黫黬黭黮黰",
    8,
    "黺黽黿",
    6
  ],
  [
    "fc80",
    "鼆",
    4,
    "鼌鼏鼑鼒鼔鼕鼖鼘鼚",
    5,
    "鼡鼣",
    8,
    "鼭鼮鼰鼱"
  ],
  [
    "fd40",
    "鼲",
    4,
    "鼸鼺鼼鼿",
    4,
    "齅",
    10,
    "齒",
    38
  ],
  [
    "fd80",
    "齹",
    5,
    "龁龂龍",
    11,
    "龜龝龞龡",
    4,
    "郎凉秊裏隣"
  ],
  [
    "fe40",
    "兀嗀﨎﨏﨑﨓﨔礼﨟蘒﨡﨣﨤﨧﨨﨩"
  ]
], Hf = [
  [
    "a140",
    "",
    62
  ],
  [
    "a180",
    "",
    32
  ],
  [
    "a240",
    "",
    62
  ],
  [
    "a280",
    "",
    32
  ],
  [
    "a2ab",
    "",
    5
  ],
  [
    "a2e3",
    "€"
  ],
  [
    "a2ef",
    ""
  ],
  [
    "a2fd",
    ""
  ],
  [
    "a340",
    "",
    62
  ],
  [
    "a380",
    "",
    31,
    "　"
  ],
  [
    "a440",
    "",
    62
  ],
  [
    "a480",
    "",
    32
  ],
  [
    "a4f4",
    "",
    10
  ],
  [
    "a540",
    "",
    62
  ],
  [
    "a580",
    "",
    32
  ],
  [
    "a5f7",
    "",
    7
  ],
  [
    "a640",
    "",
    62
  ],
  [
    "a680",
    "",
    32
  ],
  [
    "a6b9",
    "",
    7
  ],
  [
    "a6d9",
    "",
    6
  ],
  [
    "a6ec",
    ""
  ],
  [
    "a6f3",
    ""
  ],
  [
    "a6f6",
    "",
    8
  ],
  [
    "a740",
    "",
    62
  ],
  [
    "a780",
    "",
    32
  ],
  [
    "a7c2",
    "",
    14
  ],
  [
    "a7f2",
    "",
    12
  ],
  [
    "a896",
    "",
    10
  ],
  [
    "a8bc",
    ""
  ],
  [
    "a8bf",
    "ǹ"
  ],
  [
    "a8c1",
    ""
  ],
  [
    "a8ea",
    "",
    20
  ],
  [
    "a958",
    ""
  ],
  [
    "a95b",
    ""
  ],
  [
    "a95d",
    ""
  ],
  [
    "a989",
    "〾⿰",
    11
  ],
  [
    "a997",
    "",
    12
  ],
  [
    "a9f0",
    "",
    14
  ],
  [
    "aaa1",
    "",
    93
  ],
  [
    "aba1",
    "",
    93
  ],
  [
    "aca1",
    "",
    93
  ],
  [
    "ada1",
    "",
    93
  ],
  [
    "aea1",
    "",
    93
  ],
  [
    "afa1",
    "",
    93
  ],
  [
    "d7fa",
    "",
    4
  ],
  [
    "f8a1",
    "",
    93
  ],
  [
    "f9a1",
    "",
    93
  ],
  [
    "faa1",
    "",
    93
  ],
  [
    "fba1",
    "",
    93
  ],
  [
    "fca1",
    "",
    93
  ],
  [
    "fda1",
    "",
    93
  ],
  [
    "fe50",
    "⺁⺄㑳㑇⺈⺋㖞㘚㘎⺌⺗㥮㤘㧏㧟㩳㧐㭎㱮㳠⺧⺪䁖䅟⺮䌷⺳⺶⺷䎱䎬⺻䏝䓖䙡䙌"
  ],
  [
    "fe80",
    "䜣䜩䝼䞍⻊䥇䥺䥽䦂䦃䦅䦆䦟䦛䦷䦶䲣䲟䲠䲡䱷䲢䴓",
    6,
    "䶮",
    93
  ]
], t8 = [
  128,
  165,
  169,
  178,
  184,
  216,
  226,
  235,
  238,
  244,
  248,
  251,
  253,
  258,
  276,
  284,
  300,
  325,
  329,
  334,
  364,
  463,
  465,
  467,
  469,
  471,
  473,
  475,
  477,
  506,
  594,
  610,
  712,
  716,
  730,
  930,
  938,
  962,
  970,
  1026,
  1104,
  1106,
  8209,
  8215,
  8218,
  8222,
  8231,
  8241,
  8244,
  8246,
  8252,
  8365,
  8452,
  8454,
  8458,
  8471,
  8482,
  8556,
  8570,
  8596,
  8602,
  8713,
  8720,
  8722,
  8726,
  8731,
  8737,
  8740,
  8742,
  8748,
  8751,
  8760,
  8766,
  8777,
  8781,
  8787,
  8802,
  8808,
  8816,
  8854,
  8858,
  8870,
  8896,
  8979,
  9322,
  9372,
  9548,
  9588,
  9616,
  9622,
  9634,
  9652,
  9662,
  9672,
  9676,
  9680,
  9702,
  9735,
  9738,
  9793,
  9795,
  11906,
  11909,
  11913,
  11917,
  11928,
  11944,
  11947,
  11951,
  11956,
  11960,
  11964,
  11979,
  12284,
  12292,
  12312,
  12319,
  12330,
  12351,
  12436,
  12447,
  12535,
  12543,
  12586,
  12842,
  12850,
  12964,
  13200,
  13215,
  13218,
  13253,
  13263,
  13267,
  13270,
  13384,
  13428,
  13727,
  13839,
  13851,
  14617,
  14703,
  14801,
  14816,
  14964,
  15183,
  15471,
  15585,
  16471,
  16736,
  17208,
  17325,
  17330,
  17374,
  17623,
  17997,
  18018,
  18212,
  18218,
  18301,
  18318,
  18760,
  18811,
  18814,
  18820,
  18823,
  18844,
  18848,
  18872,
  19576,
  19620,
  19738,
  19887,
  40870,
  59244,
  59336,
  59367,
  59413,
  59417,
  59423,
  59431,
  59437,
  59443,
  59452,
  59460,
  59478,
  59493,
  63789,
  63866,
  63894,
  63976,
  63986,
  64016,
  64018,
  64021,
  64025,
  64034,
  64037,
  64042,
  65074,
  65093,
  65107,
  65112,
  65127,
  65132,
  65375,
  65510,
  65536
], n8 = [
  0,
  36,
  38,
  45,
  50,
  81,
  89,
  95,
  96,
  100,
  103,
  104,
  105,
  109,
  126,
  133,
  148,
  172,
  175,
  179,
  208,
  306,
  307,
  308,
  309,
  310,
  311,
  312,
  313,
  341,
  428,
  443,
  544,
  545,
  558,
  741,
  742,
  749,
  750,
  805,
  819,
  820,
  7922,
  7924,
  7925,
  7927,
  7934,
  7943,
  7944,
  7945,
  7950,
  8062,
  8148,
  8149,
  8152,
  8164,
  8174,
  8236,
  8240,
  8262,
  8264,
  8374,
  8380,
  8381,
  8384,
  8388,
  8390,
  8392,
  8393,
  8394,
  8396,
  8401,
  8406,
  8416,
  8419,
  8424,
  8437,
  8439,
  8445,
  8482,
  8485,
  8496,
  8521,
  8603,
  8936,
  8946,
  9046,
  9050,
  9063,
  9066,
  9076,
  9092,
  9100,
  9108,
  9111,
  9113,
  9131,
  9162,
  9164,
  9218,
  9219,
  11329,
  11331,
  11334,
  11336,
  11346,
  11361,
  11363,
  11366,
  11370,
  11372,
  11375,
  11389,
  11682,
  11686,
  11687,
  11692,
  11694,
  11714,
  11716,
  11723,
  11725,
  11730,
  11736,
  11982,
  11989,
  12102,
  12336,
  12348,
  12350,
  12384,
  12393,
  12395,
  12397,
  12510,
  12553,
  12851,
  12962,
  12973,
  13738,
  13823,
  13919,
  13933,
  14080,
  14298,
  14585,
  14698,
  15583,
  15847,
  16318,
  16434,
  16438,
  16481,
  16729,
  17102,
  17122,
  17315,
  17320,
  17402,
  17418,
  17859,
  17909,
  17911,
  17915,
  17916,
  17936,
  17939,
  17961,
  18664,
  18703,
  18814,
  18962,
  19043,
  33469,
  33470,
  33471,
  33484,
  33485,
  33490,
  33497,
  33501,
  33505,
  33513,
  33520,
  33536,
  33550,
  37845,
  37921,
  37948,
  38029,
  38038,
  38064,
  38065,
  38066,
  38069,
  38075,
  38076,
  38078,
  39108,
  39109,
  39113,
  39114,
  39115,
  39116,
  39265,
  39394,
  189e3
], r8 = {
  uChars: t8,
  gbChars: n8
}, i8 = [
  [
    "0",
    "\0",
    127
  ],
  [
    "8141",
    "갂갃갅갆갋",
    4,
    "갘갞갟갡갢갣갥",
    6,
    "갮갲갳갴"
  ],
  [
    "8161",
    "갵갶갷갺갻갽갾갿걁",
    9,
    "걌걎",
    5,
    "걕"
  ],
  [
    "8181",
    "걖걗걙걚걛걝",
    18,
    "걲걳걵걶걹걻",
    4,
    "겂겇겈겍겎겏겑겒겓겕",
    6,
    "겞겢",
    5,
    "겫겭겮겱",
    6,
    "겺겾겿곀곂곃곅곆곇곉곊곋곍",
    7,
    "곖곘",
    7,
    "곢곣곥곦곩곫곭곮곲곴곷",
    4,
    "곾곿괁괂괃괅괇",
    4,
    "괎괐괒괓"
  ],
  [
    "8241",
    "괔괕괖괗괙괚괛괝괞괟괡",
    7,
    "괪괫괮",
    5
  ],
  [
    "8261",
    "괶괷괹괺괻괽",
    6,
    "굆굈굊",
    5,
    "굑굒굓굕굖굗"
  ],
  [
    "8281",
    "굙",
    7,
    "굢굤",
    7,
    "굮굯굱굲굷굸굹굺굾궀궃",
    4,
    "궊궋궍궎궏궑",
    10,
    "궞",
    5,
    "궥",
    17,
    "궸",
    7,
    "귂귃귅귆귇귉",
    6,
    "귒귔",
    7,
    "귝귞귟귡귢귣귥",
    18
  ],
  [
    "8341",
    "귺귻귽귾긂",
    5,
    "긊긌긎",
    5,
    "긕",
    7
  ],
  [
    "8361",
    "긝",
    18,
    "긲긳긵긶긹긻긼"
  ],
  [
    "8381",
    "긽긾긿깂깄깇깈깉깋깏깑깒깓깕깗",
    4,
    "깞깢깣깤깦깧깪깫깭깮깯깱",
    6,
    "깺깾",
    5,
    "꺆",
    5,
    "꺍",
    46,
    "꺿껁껂껃껅",
    6,
    "껎껒",
    5,
    "껚껛껝",
    8
  ],
  [
    "8441",
    "껦껧껩껪껬껮",
    5,
    "껵껶껷껹껺껻껽",
    8
  ],
  [
    "8461",
    "꼆꼉꼊꼋꼌꼎꼏꼑",
    18
  ],
  [
    "8481",
    "꼤",
    7,
    "꼮꼯꼱꼳꼵",
    6,
    "꼾꽀꽄꽅꽆꽇꽊",
    5,
    "꽑",
    10,
    "꽞",
    5,
    "꽦",
    18,
    "꽺",
    5,
    "꾁꾂꾃꾅꾆꾇꾉",
    6,
    "꾒꾓꾔꾖",
    5,
    "꾝",
    26,
    "꾺꾻꾽꾾"
  ],
  [
    "8541",
    "꾿꿁",
    5,
    "꿊꿌꿏",
    4,
    "꿕",
    6,
    "꿝",
    4
  ],
  [
    "8561",
    "꿢",
    5,
    "꿪",
    5,
    "꿲꿳꿵꿶꿷꿹",
    6,
    "뀂뀃"
  ],
  [
    "8581",
    "뀅",
    6,
    "뀍뀎뀏뀑뀒뀓뀕",
    6,
    "뀞",
    9,
    "뀩",
    26,
    "끆끇끉끋끍끏끐끑끒끖끘끚끛끜끞",
    29,
    "끾끿낁낂낃낅",
    6,
    "낎낐낒",
    5,
    "낛낝낞낣낤"
  ],
  [
    "8641",
    "낥낦낧낪낰낲낶낷낹낺낻낽",
    6,
    "냆냊",
    5,
    "냒"
  ],
  [
    "8661",
    "냓냕냖냗냙",
    6,
    "냡냢냣냤냦",
    10
  ],
  [
    "8681",
    "냱",
    22,
    "넊넍넎넏넑넔넕넖넗넚넞",
    4,
    "넦넧넩넪넫넭",
    6,
    "넶넺",
    5,
    "녂녃녅녆녇녉",
    6,
    "녒녓녖녗녙녚녛녝녞녟녡",
    22,
    "녺녻녽녾녿놁놃",
    4,
    "놊놌놎놏놐놑놕놖놗놙놚놛놝"
  ],
  [
    "8741",
    "놞",
    9,
    "놩",
    15
  ],
  [
    "8761",
    "놹",
    18,
    "뇍뇎뇏뇑뇒뇓뇕"
  ],
  [
    "8781",
    "뇖",
    5,
    "뇞뇠",
    7,
    "뇪뇫뇭뇮뇯뇱",
    7,
    "뇺뇼뇾",
    5,
    "눆눇눉눊눍",
    6,
    "눖눘눚",
    5,
    "눡",
    18,
    "눵",
    6,
    "눽",
    26,
    "뉙뉚뉛뉝뉞뉟뉡",
    6,
    "뉪",
    4
  ],
  [
    "8841",
    "뉯",
    4,
    "뉶",
    5,
    "뉽",
    6,
    "늆늇늈늊",
    4
  ],
  [
    "8861",
    "늏늒늓늕늖늗늛",
    4,
    "늢늤늧늨늩늫늭늮늯늱늲늳늵늶늷"
  ],
  [
    "8881",
    "늸",
    15,
    "닊닋닍닎닏닑닓",
    4,
    "닚닜닞닟닠닡닣닧닩닪닰닱닲닶닼닽닾댂댃댅댆댇댉",
    6,
    "댒댖",
    5,
    "댝",
    54,
    "덗덙덚덝덠덡덢덣"
  ],
  [
    "8941",
    "덦덨덪덬덭덯덲덳덵덶덷덹",
    6,
    "뎂뎆",
    5,
    "뎍"
  ],
  [
    "8961",
    "뎎뎏뎑뎒뎓뎕",
    10,
    "뎢",
    5,
    "뎩뎪뎫뎭"
  ],
  [
    "8981",
    "뎮",
    21,
    "돆돇돉돊돍돏돑돒돓돖돘돚돜돞돟돡돢돣돥돦돧돩",
    18,
    "돽",
    18,
    "됑",
    6,
    "됙됚됛됝됞됟됡",
    6,
    "됪됬",
    7,
    "됵",
    15
  ],
  [
    "8a41",
    "둅",
    10,
    "둒둓둕둖둗둙",
    6,
    "둢둤둦"
  ],
  [
    "8a61",
    "둧",
    4,
    "둭",
    18,
    "뒁뒂"
  ],
  [
    "8a81",
    "뒃",
    4,
    "뒉",
    19,
    "뒞",
    5,
    "뒥뒦뒧뒩뒪뒫뒭",
    7,
    "뒶뒸뒺",
    5,
    "듁듂듃듅듆듇듉",
    6,
    "듑듒듓듔듖",
    5,
    "듞듟듡듢듥듧",
    4,
    "듮듰듲",
    5,
    "듹",
    26,
    "딖딗딙딚딝"
  ],
  [
    "8b41",
    "딞",
    5,
    "딦딫",
    4,
    "딲딳딵딶딷딹",
    6,
    "땂땆"
  ],
  [
    "8b61",
    "땇땈땉땊땎땏땑땒땓땕",
    6,
    "땞땢",
    8
  ],
  [
    "8b81",
    "땫",
    52,
    "떢떣떥떦떧떩떬떭떮떯떲떶",
    4,
    "떾떿뗁뗂뗃뗅",
    6,
    "뗎뗒",
    5,
    "뗙",
    18,
    "뗭",
    18
  ],
  [
    "8c41",
    "똀",
    15,
    "똒똓똕똖똗똙",
    4
  ],
  [
    "8c61",
    "똞",
    6,
    "똦",
    5,
    "똭",
    6,
    "똵",
    5
  ],
  [
    "8c81",
    "똻",
    12,
    "뙉",
    26,
    "뙥뙦뙧뙩",
    50,
    "뚞뚟뚡뚢뚣뚥",
    5,
    "뚭뚮뚯뚰뚲",
    16
  ],
  [
    "8d41",
    "뛃",
    16,
    "뛕",
    8
  ],
  [
    "8d61",
    "뛞",
    17,
    "뛱뛲뛳뛵뛶뛷뛹뛺"
  ],
  [
    "8d81",
    "뛻",
    4,
    "뜂뜃뜄뜆",
    33,
    "뜪뜫뜭뜮뜱",
    6,
    "뜺뜼",
    7,
    "띅띆띇띉띊띋띍",
    6,
    "띖",
    9,
    "띡띢띣띥띦띧띩",
    6,
    "띲띴띶",
    5,
    "띾띿랁랂랃랅",
    6,
    "랎랓랔랕랚랛랝랞"
  ],
  [
    "8e41",
    "랟랡",
    6,
    "랪랮",
    5,
    "랶랷랹",
    8
  ],
  [
    "8e61",
    "럂",
    4,
    "럈럊",
    19
  ],
  [
    "8e81",
    "럞",
    13,
    "럮럯럱럲럳럵",
    6,
    "럾렂",
    4,
    "렊렋렍렎렏렑",
    6,
    "렚렜렞",
    5,
    "렦렧렩렪렫렭",
    6,
    "렶렺",
    5,
    "롁롂롃롅",
    11,
    "롒롔",
    7,
    "롞롟롡롢롣롥",
    6,
    "롮롰롲",
    5,
    "롹롺롻롽",
    7
  ],
  [
    "8f41",
    "뢅",
    7,
    "뢎",
    17
  ],
  [
    "8f61",
    "뢠",
    7,
    "뢩",
    6,
    "뢱뢲뢳뢵뢶뢷뢹",
    4
  ],
  [
    "8f81",
    "뢾뢿룂룄룆",
    5,
    "룍룎룏룑룒룓룕",
    7,
    "룞룠룢",
    5,
    "룪룫룭룮룯룱",
    6,
    "룺룼룾",
    5,
    "뤅",
    18,
    "뤙",
    6,
    "뤡",
    26,
    "뤾뤿륁륂륃륅",
    6,
    "륍륎륐륒",
    5
  ],
  [
    "9041",
    "륚륛륝륞륟륡",
    6,
    "륪륬륮",
    5,
    "륶륷륹륺륻륽"
  ],
  [
    "9061",
    "륾",
    5,
    "릆릈릋릌릏",
    15
  ],
  [
    "9081",
    "릟",
    12,
    "릮릯릱릲릳릵",
    6,
    "릾맀맂",
    5,
    "맊맋맍맓",
    4,
    "맚맜맟맠맢맦맧맩맪맫맭",
    6,
    "맶맻",
    4,
    "먂",
    5,
    "먉",
    11,
    "먖",
    33,
    "먺먻먽먾먿멁멃멄멅멆"
  ],
  [
    "9141",
    "멇멊멌멏멐멑멒멖멗멙멚멛멝",
    6,
    "멦멪",
    5
  ],
  [
    "9161",
    "멲멳멵멶멷멹",
    9,
    "몆몈몉몊몋몍",
    5
  ],
  [
    "9181",
    "몓",
    20,
    "몪몭몮몯몱몳",
    4,
    "몺몼몾",
    5,
    "뫅뫆뫇뫉",
    14,
    "뫚",
    33,
    "뫽뫾뫿묁묂묃묅",
    7,
    "묎묐묒",
    5,
    "묙묚묛묝묞묟묡",
    6
  ],
  [
    "9241",
    "묨묪묬",
    7,
    "묷묹묺묿",
    4,
    "뭆뭈뭊뭋뭌뭎뭑뭒"
  ],
  [
    "9261",
    "뭓뭕뭖뭗뭙",
    7,
    "뭢뭤",
    7,
    "뭭",
    4
  ],
  [
    "9281",
    "뭲",
    21,
    "뮉뮊뮋뮍뮎뮏뮑",
    18,
    "뮥뮦뮧뮩뮪뮫뮭",
    6,
    "뮵뮶뮸",
    7,
    "믁믂믃믅믆믇믉",
    6,
    "믑믒믔",
    35,
    "믺믻믽믾밁"
  ],
  [
    "9341",
    "밃",
    4,
    "밊밎밐밒밓밙밚밠밡밢밣밦밨밪밫밬밮밯밲밳밵"
  ],
  [
    "9361",
    "밶밷밹",
    6,
    "뱂뱆뱇뱈뱊뱋뱎뱏뱑",
    8
  ],
  [
    "9381",
    "뱚뱛뱜뱞",
    37,
    "벆벇벉벊벍벏",
    4,
    "벖벘벛",
    4,
    "벢벣벥벦벩",
    6,
    "벲벶",
    5,
    "벾벿볁볂볃볅",
    7,
    "볎볒볓볔볖볗볙볚볛볝",
    22,
    "볷볹볺볻볽"
  ],
  [
    "9441",
    "볾",
    5,
    "봆봈봊",
    5,
    "봑봒봓봕",
    8
  ],
  [
    "9461",
    "봞",
    5,
    "봥",
    6,
    "봭",
    12
  ],
  [
    "9481",
    "봺",
    5,
    "뵁",
    6,
    "뵊뵋뵍뵎뵏뵑",
    6,
    "뵚",
    9,
    "뵥뵦뵧뵩",
    22,
    "붂붃붅붆붋",
    4,
    "붒붔붖붗붘붛붝",
    6,
    "붥",
    10,
    "붱",
    6,
    "붹",
    24
  ],
  [
    "9541",
    "뷒뷓뷖뷗뷙뷚뷛뷝",
    11,
    "뷪",
    5,
    "뷱"
  ],
  [
    "9561",
    "뷲뷳뷵뷶뷷뷹",
    6,
    "븁븂븄븆",
    5,
    "븎븏븑븒븓"
  ],
  [
    "9581",
    "븕",
    6,
    "븞븠",
    35,
    "빆빇빉빊빋빍빏",
    4,
    "빖빘빜빝빞빟빢빣빥빦빧빩빫",
    4,
    "빲빶",
    4,
    "빾빿뺁뺂뺃뺅",
    6,
    "뺎뺒",
    5,
    "뺚",
    13,
    "뺩",
    14
  ],
  [
    "9641",
    "뺸",
    23,
    "뻒뻓"
  ],
  [
    "9661",
    "뻕뻖뻙",
    6,
    "뻡뻢뻦",
    5,
    "뻭",
    8
  ],
  [
    "9681",
    "뻶",
    10,
    "뼂",
    5,
    "뼊",
    13,
    "뼚뼞",
    33,
    "뽂뽃뽅뽆뽇뽉",
    6,
    "뽒뽓뽔뽖",
    44
  ],
  [
    "9741",
    "뾃",
    16,
    "뾕",
    8
  ],
  [
    "9761",
    "뾞",
    17,
    "뾱",
    7
  ],
  [
    "9781",
    "뾹",
    11,
    "뿆",
    5,
    "뿎뿏뿑뿒뿓뿕",
    6,
    "뿝뿞뿠뿢",
    89,
    "쀽쀾쀿"
  ],
  [
    "9841",
    "쁀",
    16,
    "쁒",
    5,
    "쁙쁚쁛"
  ],
  [
    "9861",
    "쁝쁞쁟쁡",
    6,
    "쁪",
    15
  ],
  [
    "9881",
    "쁺",
    21,
    "삒삓삕삖삗삙",
    6,
    "삢삤삦",
    5,
    "삮삱삲삷",
    4,
    "삾샂샃샄샆샇샊샋샍샎샏샑",
    6,
    "샚샞",
    5,
    "샦샧샩샪샫샭",
    6,
    "샶샸샺",
    5,
    "섁섂섃섅섆섇섉",
    6,
    "섑섒섓섔섖",
    5,
    "섡섢섥섨섩섪섫섮"
  ],
  [
    "9941",
    "섲섳섴섵섷섺섻섽섾섿셁",
    6,
    "셊셎",
    5,
    "셖셗"
  ],
  [
    "9961",
    "셙셚셛셝",
    6,
    "셦셪",
    5,
    "셱셲셳셵셶셷셹셺셻"
  ],
  [
    "9981",
    "셼",
    8,
    "솆",
    5,
    "솏솑솒솓솕솗",
    4,
    "솞솠솢솣솤솦솧솪솫솭솮솯솱",
    11,
    "솾",
    5,
    "쇅쇆쇇쇉쇊쇋쇍",
    6,
    "쇕쇖쇙",
    6,
    "쇡쇢쇣쇥쇦쇧쇩",
    6,
    "쇲쇴",
    7,
    "쇾쇿숁숂숃숅",
    6,
    "숎숐숒",
    5,
    "숚숛숝숞숡숢숣"
  ],
  [
    "9a41",
    "숤숥숦숧숪숬숮숰숳숵",
    16
  ],
  [
    "9a61",
    "쉆쉇쉉",
    6,
    "쉒쉓쉕쉖쉗쉙",
    6,
    "쉡쉢쉣쉤쉦"
  ],
  [
    "9a81",
    "쉧",
    4,
    "쉮쉯쉱쉲쉳쉵",
    6,
    "쉾슀슂",
    5,
    "슊",
    5,
    "슑",
    6,
    "슙슚슜슞",
    5,
    "슦슧슩슪슫슮",
    5,
    "슶슸슺",
    33,
    "싞싟싡싢싥",
    5,
    "싮싰싲싳싴싵싷싺싽싾싿쌁",
    6,
    "쌊쌋쌎쌏"
  ],
  [
    "9b41",
    "쌐쌑쌒쌖쌗쌙쌚쌛쌝",
    6,
    "쌦쌧쌪",
    8
  ],
  [
    "9b61",
    "쌳",
    17,
    "썆",
    7
  ],
  [
    "9b81",
    "썎",
    25,
    "썪썫썭썮썯썱썳",
    4,
    "썺썻썾",
    5,
    "쎅쎆쎇쎉쎊쎋쎍",
    50,
    "쏁",
    22,
    "쏚"
  ],
  [
    "9c41",
    "쏛쏝쏞쏡쏣",
    4,
    "쏪쏫쏬쏮",
    5,
    "쏶쏷쏹",
    5
  ],
  [
    "9c61",
    "쏿",
    8,
    "쐉",
    6,
    "쐑",
    9
  ],
  [
    "9c81",
    "쐛",
    8,
    "쐥",
    6,
    "쐭쐮쐯쐱쐲쐳쐵",
    6,
    "쐾",
    9,
    "쑉",
    26,
    "쑦쑧쑩쑪쑫쑭",
    6,
    "쑶쑷쑸쑺",
    5,
    "쒁",
    18,
    "쒕",
    6,
    "쒝",
    12
  ],
  [
    "9d41",
    "쒪",
    13,
    "쒹쒺쒻쒽",
    8
  ],
  [
    "9d61",
    "쓆",
    25
  ],
  [
    "9d81",
    "쓠",
    8,
    "쓪",
    5,
    "쓲쓳쓵쓶쓷쓹쓻쓼쓽쓾씂",
    9,
    "씍씎씏씑씒씓씕",
    6,
    "씝",
    10,
    "씪씫씭씮씯씱",
    6,
    "씺씼씾",
    5,
    "앆앇앋앏앐앑앒앖앚앛앜앟앢앣앥앦앧앩",
    6,
    "앲앶",
    5,
    "앾앿얁얂얃얅얆얈얉얊얋얎얐얒얓얔"
  ],
  [
    "9e41",
    "얖얙얚얛얝얞얟얡",
    7,
    "얪",
    9,
    "얶"
  ],
  [
    "9e61",
    "얷얺얿",
    4,
    "엋엍엏엒엓엕엖엗엙",
    6,
    "엢엤엦엧"
  ],
  [
    "9e81",
    "엨엩엪엫엯엱엲엳엵엸엹엺엻옂옃옄옉옊옋옍옎옏옑",
    6,
    "옚옝",
    6,
    "옦옧옩옪옫옯옱옲옶옸옺옼옽옾옿왂왃왅왆왇왉",
    6,
    "왒왖",
    5,
    "왞왟왡",
    10,
    "왭왮왰왲",
    5,
    "왺왻왽왾왿욁",
    6,
    "욊욌욎",
    5,
    "욖욗욙욚욛욝",
    6,
    "욦"
  ],
  [
    "9f41",
    "욨욪",
    5,
    "욲욳욵욶욷욻",
    4,
    "웂웄웆",
    5,
    "웎"
  ],
  [
    "9f61",
    "웏웑웒웓웕",
    6,
    "웞웟웢",
    5,
    "웪웫웭웮웯웱웲"
  ],
  [
    "9f81",
    "웳",
    4,
    "웺웻웼웾",
    5,
    "윆윇윉윊윋윍",
    6,
    "윖윘윚",
    5,
    "윢윣윥윦윧윩",
    6,
    "윲윴윶윸윹윺윻윾윿읁읂읃읅",
    4,
    "읋읎읐읙읚읛읝읞읟읡",
    6,
    "읩읪읬",
    7,
    "읶읷읹읺읻읿잀잁잂잆잋잌잍잏잒잓잕잙잛",
    4,
    "잢잧",
    4,
    "잮잯잱잲잳잵잶잷"
  ],
  [
    "a041",
    "잸잹잺잻잾쟂",
    5,
    "쟊쟋쟍쟏쟑",
    6,
    "쟙쟚쟛쟜"
  ],
  [
    "a061",
    "쟞",
    5,
    "쟥쟦쟧쟩쟪쟫쟭",
    13
  ],
  [
    "a081",
    "쟻",
    4,
    "젂젃젅젆젇젉젋",
    4,
    "젒젔젗",
    4,
    "젞젟젡젢젣젥",
    6,
    "젮젰젲",
    5,
    "젹젺젻젽젾젿졁",
    6,
    "졊졋졎",
    5,
    "졕",
    26,
    "졲졳졵졶졷졹졻",
    4,
    "좂좄좈좉좊좎",
    5,
    "좕",
    7,
    "좞좠좢좣좤"
  ],
  [
    "a141",
    "좥좦좧좩",
    18,
    "좾좿죀죁"
  ],
  [
    "a161",
    "죂죃죅죆죇죉죊죋죍",
    6,
    "죖죘죚",
    5,
    "죢죣죥"
  ],
  [
    "a181",
    "죦",
    14,
    "죶",
    5,
    "죾죿줁줂줃줇",
    4,
    "줎　、。·‥…¨〃­―∥＼∼‘’“”〔〕〈",
    9,
    "±×÷≠≤≥∞∴°′″℃Å￠￡￥♂♀∠⊥⌒∂∇≡≒§※☆★○●◎◇◆□■△▲▽▼→←↑↓↔〓≪≫√∽∝∵∫∬∈∋⊆⊇⊂⊃∪∩∧∨￢"
  ],
  [
    "a241",
    "줐줒",
    5,
    "줙",
    18
  ],
  [
    "a261",
    "줭",
    6,
    "줵",
    18
  ],
  [
    "a281",
    "쥈",
    7,
    "쥒쥓쥕쥖쥗쥙",
    6,
    "쥢쥤",
    7,
    "쥭쥮쥯⇒⇔∀∃´～ˇ˘˝˚˙¸˛¡¿ː∮∑∏¤℉‰◁◀▷▶♤♠♡♥♧♣⊙◈▣◐◑▒▤▥▨▧▦▩♨☏☎☜☞¶†‡↕↗↙↖↘♭♩♪♬㉿㈜№㏇™㏂㏘℡€®"
  ],
  [
    "a341",
    "쥱쥲쥳쥵",
    6,
    "쥽",
    10,
    "즊즋즍즎즏"
  ],
  [
    "a361",
    "즑",
    6,
    "즚즜즞",
    16
  ],
  [
    "a381",
    "즯",
    16,
    "짂짃짅짆짉짋",
    4,
    "짒짔짗짘짛！",
    58,
    "￦］",
    32,
    "￣"
  ],
  [
    "a441",
    "짞짟짡짣짥짦짨짩짪짫짮짲",
    5,
    "짺짻짽짾짿쨁쨂쨃쨄"
  ],
  [
    "a461",
    "쨅쨆쨇쨊쨎",
    5,
    "쨕쨖쨗쨙",
    12
  ],
  [
    "a481",
    "쨦쨧쨨쨪",
    28,
    "ㄱ",
    93
  ],
  [
    "a541",
    "쩇",
    4,
    "쩎쩏쩑쩒쩓쩕",
    6,
    "쩞쩢",
    5,
    "쩩쩪"
  ],
  [
    "a561",
    "쩫",
    17,
    "쩾",
    5,
    "쪅쪆"
  ],
  [
    "a581",
    "쪇",
    16,
    "쪙",
    14,
    "ⅰ",
    9
  ],
  [
    "a5b0",
    "Ⅰ",
    9
  ],
  [
    "a5c1",
    "Α",
    16,
    "Σ",
    6
  ],
  [
    "a5e1",
    "α",
    16,
    "σ",
    6
  ],
  [
    "a641",
    "쪨",
    19,
    "쪾쪿쫁쫂쫃쫅"
  ],
  [
    "a661",
    "쫆",
    5,
    "쫎쫐쫒쫔쫕쫖쫗쫚",
    5,
    "쫡",
    6
  ],
  [
    "a681",
    "쫨쫩쫪쫫쫭",
    6,
    "쫵",
    18,
    "쬉쬊─│┌┐┘└├┬┤┴┼━┃┏┓┛┗┣┳┫┻╋┠┯┨┷┿┝┰┥┸╂┒┑┚┙┖┕┎┍┞┟┡┢┦┧┩┪┭┮┱┲┵┶┹┺┽┾╀╁╃",
    7
  ],
  [
    "a741",
    "쬋",
    4,
    "쬑쬒쬓쬕쬖쬗쬙",
    6,
    "쬢",
    7
  ],
  [
    "a761",
    "쬪",
    22,
    "쭂쭃쭄"
  ],
  [
    "a781",
    "쭅쭆쭇쭊쭋쭍쭎쭏쭑",
    6,
    "쭚쭛쭜쭞",
    5,
    "쭥",
    7,
    "㎕㎖㎗ℓ㎘㏄㎣㎤㎥㎦㎙",
    9,
    "㏊㎍㎎㎏㏏㎈㎉㏈㎧㎨㎰",
    9,
    "㎀",
    4,
    "㎺",
    5,
    "㎐",
    4,
    "Ω㏀㏁㎊㎋㎌㏖㏅㎭㎮㎯㏛㎩㎪㎫㎬㏝㏐㏓㏃㏉㏜㏆"
  ],
  [
    "a841",
    "쭭",
    10,
    "쭺",
    14
  ],
  [
    "a861",
    "쮉",
    18,
    "쮝",
    6
  ],
  [
    "a881",
    "쮤",
    19,
    "쮹",
    11,
    "ÆÐªĦ"
  ],
  [
    "a8a6",
    "Ĳ"
  ],
  [
    "a8a8",
    "ĿŁØŒºÞŦŊ"
  ],
  [
    "a8b1",
    "㉠",
    27,
    "ⓐ",
    25,
    "①",
    14,
    "½⅓⅔¼¾⅛⅜⅝⅞"
  ],
  [
    "a941",
    "쯅",
    14,
    "쯕",
    10
  ],
  [
    "a961",
    "쯠쯡쯢쯣쯥쯦쯨쯪",
    18
  ],
  [
    "a981",
    "쯽",
    14,
    "찎찏찑찒찓찕",
    6,
    "찞찟찠찣찤æđðħıĳĸŀłøœßþŧŋŉ㈀",
    27,
    "⒜",
    25,
    "⑴",
    14,
    "¹²³⁴ⁿ₁₂₃₄"
  ],
  [
    "aa41",
    "찥찦찪찫찭찯찱",
    6,
    "찺찿",
    4,
    "챆챇챉챊챋챍챎"
  ],
  [
    "aa61",
    "챏",
    4,
    "챖챚",
    5,
    "챡챢챣챥챧챩",
    6,
    "챱챲"
  ],
  [
    "aa81",
    "챳챴챶",
    29,
    "ぁ",
    82
  ],
  [
    "ab41",
    "첔첕첖첗첚첛첝첞첟첡",
    6,
    "첪첮",
    5,
    "첶첷첹"
  ],
  [
    "ab61",
    "첺첻첽",
    6,
    "쳆쳈쳊",
    5,
    "쳑쳒쳓쳕",
    5
  ],
  [
    "ab81",
    "쳛",
    8,
    "쳥",
    6,
    "쳭쳮쳯쳱",
    12,
    "ァ",
    85
  ],
  [
    "ac41",
    "쳾쳿촀촂",
    5,
    "촊촋촍촎촏촑",
    6,
    "촚촜촞촟촠"
  ],
  [
    "ac61",
    "촡촢촣촥촦촧촩촪촫촭",
    11,
    "촺",
    4
  ],
  [
    "ac81",
    "촿",
    28,
    "쵝쵞쵟А",
    5,
    "ЁЖ",
    25
  ],
  [
    "acd1",
    "а",
    5,
    "ёж",
    25
  ],
  [
    "ad41",
    "쵡쵢쵣쵥",
    6,
    "쵮쵰쵲",
    5,
    "쵹",
    7
  ],
  [
    "ad61",
    "춁",
    6,
    "춉",
    10,
    "춖춗춙춚춛춝춞춟"
  ],
  [
    "ad81",
    "춠춡춢춣춦춨춪",
    5,
    "춱",
    18,
    "췅"
  ],
  [
    "ae41",
    "췆",
    5,
    "췍췎췏췑",
    16
  ],
  [
    "ae61",
    "췢",
    5,
    "췩췪췫췭췮췯췱",
    6,
    "췺췼췾",
    4
  ],
  [
    "ae81",
    "츃츅츆츇츉츊츋츍",
    6,
    "츕츖츗츘츚",
    5,
    "츢츣츥츦츧츩츪츫"
  ],
  [
    "af41",
    "츬츭츮츯츲츴츶",
    19
  ],
  [
    "af61",
    "칊",
    13,
    "칚칛칝칞칢",
    5,
    "칪칬"
  ],
  [
    "af81",
    "칮",
    5,
    "칶칷칹칺칻칽",
    6,
    "캆캈캊",
    5,
    "캒캓캕캖캗캙"
  ],
  [
    "b041",
    "캚",
    5,
    "캢캦",
    5,
    "캮",
    12
  ],
  [
    "b061",
    "캻",
    5,
    "컂",
    19
  ],
  [
    "b081",
    "컖",
    13,
    "컦컧컩컪컭",
    6,
    "컶컺",
    5,
    "가각간갇갈갉갊감",
    7,
    "같",
    4,
    "갠갤갬갭갯갰갱갸갹갼걀걋걍걔걘걜거걱건걷걸걺검겁것겄겅겆겉겊겋게겐겔겜겝겟겠겡겨격겪견겯결겸겹겻겼경곁계곈곌곕곗고곡곤곧골곪곬곯곰곱곳공곶과곽관괄괆"
  ],
  [
    "b141",
    "켂켃켅켆켇켉",
    6,
    "켒켔켖",
    5,
    "켝켞켟켡켢켣"
  ],
  [
    "b161",
    "켥",
    6,
    "켮켲",
    5,
    "켹",
    11
  ],
  [
    "b181",
    "콅",
    14,
    "콖콗콙콚콛콝",
    6,
    "콦콨콪콫콬괌괍괏광괘괜괠괩괬괭괴괵괸괼굄굅굇굉교굔굘굡굣구국군굳굴굵굶굻굼굽굿궁궂궈궉권궐궜궝궤궷귀귁귄귈귐귑귓규균귤그극근귿글긁금급긋긍긔기긱긴긷길긺김깁깃깅깆깊까깍깎깐깔깖깜깝깟깠깡깥깨깩깬깰깸"
  ],
  [
    "b241",
    "콭콮콯콲콳콵콶콷콹",
    6,
    "쾁쾂쾃쾄쾆",
    5,
    "쾍"
  ],
  [
    "b261",
    "쾎",
    18,
    "쾢",
    5,
    "쾩"
  ],
  [
    "b281",
    "쾪",
    5,
    "쾱",
    18,
    "쿅",
    6,
    "깹깻깼깽꺄꺅꺌꺼꺽꺾껀껄껌껍껏껐껑께껙껜껨껫껭껴껸껼꼇꼈꼍꼐꼬꼭꼰꼲꼴꼼꼽꼿꽁꽂꽃꽈꽉꽐꽜꽝꽤꽥꽹꾀꾄꾈꾐꾑꾕꾜꾸꾹꾼꿀꿇꿈꿉꿋꿍꿎꿔꿜꿨꿩꿰꿱꿴꿸뀀뀁뀄뀌뀐뀔뀜뀝뀨끄끅끈끊끌끎끓끔끕끗끙"
  ],
  [
    "b341",
    "쿌",
    19,
    "쿢쿣쿥쿦쿧쿩"
  ],
  [
    "b361",
    "쿪",
    5,
    "쿲쿴쿶",
    5,
    "쿽쿾쿿퀁퀂퀃퀅",
    5
  ],
  [
    "b381",
    "퀋",
    5,
    "퀒",
    5,
    "퀙",
    19,
    "끝끼끽낀낄낌낍낏낑나낙낚난낟날낡낢남납낫",
    4,
    "낱낳내낵낸낼냄냅냇냈냉냐냑냔냘냠냥너넉넋넌널넒넓넘넙넛넜넝넣네넥넨넬넴넵넷넸넹녀녁년녈념녑녔녕녘녜녠노녹논놀놂놈놉놋농높놓놔놘놜놨뇌뇐뇔뇜뇝"
  ],
  [
    "b441",
    "퀮",
    5,
    "퀶퀷퀹퀺퀻퀽",
    6,
    "큆큈큊",
    5
  ],
  [
    "b461",
    "큑큒큓큕큖큗큙",
    6,
    "큡",
    10,
    "큮큯"
  ],
  [
    "b481",
    "큱큲큳큵",
    6,
    "큾큿킀킂",
    18,
    "뇟뇨뇩뇬뇰뇹뇻뇽누눅눈눋눌눔눕눗눙눠눴눼뉘뉜뉠뉨뉩뉴뉵뉼늄늅늉느늑는늘늙늚늠늡늣능늦늪늬늰늴니닉닌닐닒님닙닛닝닢다닥닦단닫",
    4,
    "닳담답닷",
    4,
    "닿대댁댄댈댐댑댓댔댕댜더덕덖던덛덜덞덟덤덥"
  ],
  [
    "b541",
    "킕",
    14,
    "킦킧킩킪킫킭",
    5
  ],
  [
    "b561",
    "킳킶킸킺",
    5,
    "탂탃탅탆탇탊",
    5,
    "탒탖",
    4
  ],
  [
    "b581",
    "탛탞탟탡탢탣탥",
    6,
    "탮탲",
    5,
    "탹",
    11,
    "덧덩덫덮데덱덴델뎀뎁뎃뎄뎅뎌뎐뎔뎠뎡뎨뎬도독돈돋돌돎돐돔돕돗동돛돝돠돤돨돼됐되된될됨됩됫됴두둑둔둘둠둡둣둥둬뒀뒈뒝뒤뒨뒬뒵뒷뒹듀듄듈듐듕드득든듣들듦듬듭듯등듸디딕딘딛딜딤딥딧딨딩딪따딱딴딸"
  ],
  [
    "b641",
    "턅",
    7,
    "턎",
    17
  ],
  [
    "b661",
    "턠",
    15,
    "턲턳턵턶턷턹턻턼턽턾"
  ],
  [
    "b681",
    "턿텂텆",
    5,
    "텎텏텑텒텓텕",
    6,
    "텞텠텢",
    5,
    "텩텪텫텭땀땁땃땄땅땋때땍땐땔땜땝땟땠땡떠떡떤떨떪떫떰떱떳떴떵떻떼떽뗀뗄뗌뗍뗏뗐뗑뗘뗬또똑똔똘똥똬똴뙈뙤뙨뚜뚝뚠뚤뚫뚬뚱뛔뛰뛴뛸뜀뜁뜅뜨뜩뜬뜯뜰뜸뜹뜻띄띈띌띔띕띠띤띨띰띱띳띵라락란랄람랍랏랐랑랒랖랗"
  ],
  [
    "b741",
    "텮",
    13,
    "텽",
    6,
    "톅톆톇톉톊"
  ],
  [
    "b761",
    "톋",
    20,
    "톢톣톥톦톧"
  ],
  [
    "b781",
    "톩",
    6,
    "톲톴톶톷톸톹톻톽톾톿퇁",
    14,
    "래랙랜랠램랩랫랬랭랴략랸럇량러럭런럴럼럽럿렀렁렇레렉렌렐렘렙렛렝려력련렬렴렵렷렸령례롄롑롓로록론롤롬롭롯롱롸롼뢍뢨뢰뢴뢸룀룁룃룅료룐룔룝룟룡루룩룬룰룸룹룻룽뤄뤘뤠뤼뤽륀륄륌륏륑류륙륜률륨륩"
  ],
  [
    "b841",
    "퇐",
    7,
    "퇙",
    17
  ],
  [
    "b861",
    "퇫",
    8,
    "퇵퇶퇷퇹",
    13
  ],
  [
    "b881",
    "툈툊",
    5,
    "툑",
    24,
    "륫륭르륵른를름릅릇릉릊릍릎리릭린릴림립릿링마막만많",
    4,
    "맘맙맛망맞맡맣매맥맨맬맴맵맷맸맹맺먀먁먈먕머먹먼멀멂멈멉멋멍멎멓메멕멘멜멤멥멧멨멩며멱면멸몃몄명몇몌모목몫몬몰몲몸몹못몽뫄뫈뫘뫙뫼"
  ],
  [
    "b941",
    "툪툫툮툯툱툲툳툵",
    6,
    "툾퉀퉂",
    5,
    "퉉퉊퉋퉌"
  ],
  [
    "b961",
    "퉍",
    14,
    "퉝",
    6,
    "퉥퉦퉧퉨"
  ],
  [
    "b981",
    "퉩",
    22,
    "튂튃튅튆튇튉튊튋튌묀묄묍묏묑묘묜묠묩묫무묵묶문묻물묽묾뭄뭅뭇뭉뭍뭏뭐뭔뭘뭡뭣뭬뮈뮌뮐뮤뮨뮬뮴뮷므믄믈믐믓미믹민믿밀밂밈밉밋밌밍및밑바",
    4,
    "받",
    4,
    "밤밥밧방밭배백밴밸뱀뱁뱃뱄뱅뱉뱌뱍뱐뱝버벅번벋벌벎범법벗"
  ],
  [
    "ba41",
    "튍튎튏튒튓튔튖",
    5,
    "튝튞튟튡튢튣튥",
    6,
    "튭"
  ],
  [
    "ba61",
    "튮튯튰튲",
    5,
    "튺튻튽튾틁틃",
    4,
    "틊틌",
    5
  ],
  [
    "ba81",
    "틒틓틕틖틗틙틚틛틝",
    6,
    "틦",
    9,
    "틲틳틵틶틷틹틺벙벚베벡벤벧벨벰벱벳벴벵벼벽변별볍볏볐병볕볘볜보복볶본볼봄봅봇봉봐봔봤봬뵀뵈뵉뵌뵐뵘뵙뵤뵨부북분붇불붉붊붐붑붓붕붙붚붜붤붰붸뷔뷕뷘뷜뷩뷰뷴뷸븀븃븅브븍븐블븜븝븟비빅빈빌빎빔빕빗빙빚빛빠빡빤"
  ],
  [
    "bb41",
    "틻",
    4,
    "팂팄팆",
    5,
    "팏팑팒팓팕팗",
    4,
    "팞팢팣"
  ],
  [
    "bb61",
    "팤팦팧팪팫팭팮팯팱",
    6,
    "팺팾",
    5,
    "퍆퍇퍈퍉"
  ],
  [
    "bb81",
    "퍊",
    31,
    "빨빪빰빱빳빴빵빻빼빽뺀뺄뺌뺍뺏뺐뺑뺘뺙뺨뻐뻑뻔뻗뻘뻠뻣뻤뻥뻬뼁뼈뼉뼘뼙뼛뼜뼝뽀뽁뽄뽈뽐뽑뽕뾔뾰뿅뿌뿍뿐뿔뿜뿟뿡쀼쁑쁘쁜쁠쁨쁩삐삑삔삘삠삡삣삥사삭삯산삳살삵삶삼삽삿샀상샅새색샌샐샘샙샛샜생샤"
  ],
  [
    "bc41",
    "퍪",
    17,
    "퍾퍿펁펂펃펅펆펇"
  ],
  [
    "bc61",
    "펈펉펊펋펎펒",
    5,
    "펚펛펝펞펟펡",
    6,
    "펪펬펮"
  ],
  [
    "bc81",
    "펯",
    4,
    "펵펶펷펹펺펻펽",
    6,
    "폆폇폊",
    5,
    "폑",
    5,
    "샥샨샬샴샵샷샹섀섄섈섐섕서",
    4,
    "섣설섦섧섬섭섯섰성섶세섹센셀셈셉셋셌셍셔셕션셜셤셥셧셨셩셰셴셸솅소속솎손솔솖솜솝솟송솥솨솩솬솰솽쇄쇈쇌쇔쇗쇘쇠쇤쇨쇰쇱쇳쇼쇽숀숄숌숍숏숑수숙순숟술숨숩숫숭"
  ],
  [
    "bd41",
    "폗폙",
    7,
    "폢폤",
    7,
    "폮폯폱폲폳폵폶폷"
  ],
  [
    "bd61",
    "폸폹폺폻폾퐀퐂",
    5,
    "퐉",
    13
  ],
  [
    "bd81",
    "퐗",
    5,
    "퐞",
    25,
    "숯숱숲숴쉈쉐쉑쉔쉘쉠쉥쉬쉭쉰쉴쉼쉽쉿슁슈슉슐슘슛슝스슥슨슬슭슴습슷승시식신싣실싫심십싯싱싶싸싹싻싼쌀쌈쌉쌌쌍쌓쌔쌕쌘쌜쌤쌥쌨쌩썅써썩썬썰썲썸썹썼썽쎄쎈쎌쏀쏘쏙쏜쏟쏠쏢쏨쏩쏭쏴쏵쏸쐈쐐쐤쐬쐰"
  ],
  [
    "be41",
    "퐸",
    7,
    "푁푂푃푅",
    14
  ],
  [
    "be61",
    "푔",
    7,
    "푝푞푟푡푢푣푥",
    7,
    "푮푰푱푲"
  ],
  [
    "be81",
    "푳",
    4,
    "푺푻푽푾풁풃",
    4,
    "풊풌풎",
    5,
    "풕",
    8,
    "쐴쐼쐽쑈쑤쑥쑨쑬쑴쑵쑹쒀쒔쒜쒸쒼쓩쓰쓱쓴쓸쓺쓿씀씁씌씐씔씜씨씩씬씰씸씹씻씽아악안앉않알앍앎앓암압앗았앙앝앞애액앤앨앰앱앳앴앵야약얀얄얇얌얍얏양얕얗얘얜얠얩어억언얹얻얼얽얾엄",
    6,
    "엌엎"
  ],
  [
    "bf41",
    "풞",
    10,
    "풪",
    14
  ],
  [
    "bf61",
    "풹",
    18,
    "퓍퓎퓏퓑퓒퓓퓕"
  ],
  [
    "bf81",
    "퓖",
    5,
    "퓝퓞퓠",
    7,
    "퓩퓪퓫퓭퓮퓯퓱",
    6,
    "퓹퓺퓼에엑엔엘엠엡엣엥여역엮연열엶엷염",
    5,
    "옅옆옇예옌옐옘옙옛옜오옥온올옭옮옰옳옴옵옷옹옻와왁완왈왐왑왓왔왕왜왝왠왬왯왱외왹왼욀욈욉욋욍요욕욘욜욤욥욧용우욱운울욹욺움웁웃웅워웍원월웜웝웠웡웨"
  ],
  [
    "c041",
    "퓾",
    5,
    "픅픆픇픉픊픋픍",
    6,
    "픖픘",
    5
  ],
  [
    "c061",
    "픞",
    25
  ],
  [
    "c081",
    "픸픹픺픻픾픿핁핂핃핅",
    6,
    "핎핐핒",
    5,
    "핚핛핝핞핟핡핢핣웩웬웰웸웹웽위윅윈윌윔윕윗윙유육윤율윰윱윳융윷으윽은을읊음읍읏응",
    7,
    "읜읠읨읫이익인일읽읾잃임입잇있잉잊잎자작잔잖잗잘잚잠잡잣잤장잦재잭잰잴잼잽잿쟀쟁쟈쟉쟌쟎쟐쟘쟝쟤쟨쟬저적전절젊"
  ],
  [
    "c141",
    "핤핦핧핪핬핮",
    5,
    "핶핷핹핺핻핽",
    6,
    "햆햊햋"
  ],
  [
    "c161",
    "햌햍햎햏햑",
    19,
    "햦햧"
  ],
  [
    "c181",
    "햨",
    31,
    "점접젓정젖제젝젠젤젬젭젯젱져젼졀졈졉졌졍졔조족존졸졺좀좁좃종좆좇좋좌좍좔좝좟좡좨좼좽죄죈죌죔죕죗죙죠죡죤죵주죽준줄줅줆줌줍줏중줘줬줴쥐쥑쥔쥘쥠쥡쥣쥬쥰쥴쥼즈즉즌즐즘즙즛증지직진짇질짊짐집짓"
  ],
  [
    "c241",
    "헊헋헍헎헏헑헓",
    4,
    "헚헜헞",
    5,
    "헦헧헩헪헫헭헮"
  ],
  [
    "c261",
    "헯",
    4,
    "헶헸헺",
    5,
    "혂혃혅혆혇혉",
    6,
    "혒"
  ],
  [
    "c281",
    "혖",
    5,
    "혝혞혟혡혢혣혥",
    7,
    "혮",
    9,
    "혺혻징짖짙짚짜짝짠짢짤짧짬짭짯짰짱째짹짼쨀쨈쨉쨋쨌쨍쨔쨘쨩쩌쩍쩐쩔쩜쩝쩟쩠쩡쩨쩽쪄쪘쪼쪽쫀쫄쫌쫍쫏쫑쫓쫘쫙쫠쫬쫴쬈쬐쬔쬘쬠쬡쭁쭈쭉쭌쭐쭘쭙쭝쭤쭸쭹쮜쮸쯔쯤쯧쯩찌찍찐찔찜찝찡찢찧차착찬찮찰참찹찻"
  ],
  [
    "c341",
    "혽혾혿홁홂홃홄홆홇홊홌홎홏홐홒홓홖홗홙홚홛홝",
    4
  ],
  [
    "c361",
    "홢",
    4,
    "홨홪",
    5,
    "홲홳홵",
    11
  ],
  [
    "c381",
    "횁횂횄횆",
    5,
    "횎횏횑횒횓횕",
    7,
    "횞횠횢",
    5,
    "횩횪찼창찾채책챈챌챔챕챗챘챙챠챤챦챨챰챵처척천철첨첩첫첬청체첵첸첼쳄쳅쳇쳉쳐쳔쳤쳬쳰촁초촉촌촐촘촙촛총촤촨촬촹최쵠쵤쵬쵭쵯쵱쵸춈추축춘출춤춥춧충춰췄췌췐취췬췰췸췹췻췽츄츈츌츔츙츠측츤츨츰츱츳층"
  ],
  [
    "c441",
    "횫횭횮횯횱",
    7,
    "횺횼",
    7,
    "훆훇훉훊훋"
  ],
  [
    "c461",
    "훍훎훏훐훒훓훕훖훘훚",
    5,
    "훡훢훣훥훦훧훩",
    4
  ],
  [
    "c481",
    "훮훯훱훲훳훴훶",
    5,
    "훾훿휁휂휃휅",
    11,
    "휒휓휔치칙친칟칠칡침칩칫칭카칵칸칼캄캅캇캉캐캑캔캘캠캡캣캤캥캬캭컁커컥컨컫컬컴컵컷컸컹케켁켄켈켐켑켓켕켜켠켤켬켭켯켰켱켸코콕콘콜콤콥콧콩콰콱콴콸쾀쾅쾌쾡쾨쾰쿄쿠쿡쿤쿨쿰쿱쿳쿵쿼퀀퀄퀑퀘퀭퀴퀵퀸퀼"
  ],
  [
    "c541",
    "휕휖휗휚휛휝휞휟휡",
    6,
    "휪휬휮",
    5,
    "휶휷휹"
  ],
  [
    "c561",
    "휺휻휽",
    6,
    "흅흆흈흊",
    5,
    "흒흓흕흚",
    4
  ],
  [
    "c581",
    "흟흢흤흦흧흨흪흫흭흮흯흱흲흳흵",
    6,
    "흾흿힀힂",
    5,
    "힊힋큄큅큇큉큐큔큘큠크큭큰클큼큽킁키킥킨킬킴킵킷킹타탁탄탈탉탐탑탓탔탕태택탠탤탬탭탯탰탱탸턍터턱턴털턺텀텁텃텄텅테텍텐텔템텝텟텡텨텬텼톄톈토톡톤톨톰톱톳통톺톼퇀퇘퇴퇸툇툉툐투툭툰툴툼툽툿퉁퉈퉜"
  ],
  [
    "c641",
    "힍힎힏힑",
    6,
    "힚힜힞",
    5
  ],
  [
    "c6a1",
    "퉤튀튁튄튈튐튑튕튜튠튤튬튱트특튼튿틀틂틈틉틋틔틘틜틤틥티틱틴틸팀팁팃팅파팍팎판팔팖팜팝팟팠팡팥패팩팬팰팸팹팻팼팽퍄퍅퍼퍽펀펄펌펍펏펐펑페펙펜펠펨펩펫펭펴편펼폄폅폈평폐폘폡폣포폭폰폴폼폽폿퐁"
  ],
  [
    "c7a1",
    "퐈퐝푀푄표푠푤푭푯푸푹푼푿풀풂품풉풋풍풔풩퓌퓐퓔퓜퓟퓨퓬퓰퓸퓻퓽프픈플픔픕픗피픽핀필핌핍핏핑하학한할핥함합핫항해핵핸핼햄햅햇했행햐향허헉헌헐헒험헙헛헝헤헥헨헬헴헵헷헹혀혁현혈혐협혓혔형혜혠"
  ],
  [
    "c8a1",
    "혤혭호혹혼홀홅홈홉홋홍홑화확환활홧황홰홱홴횃횅회획횐횔횝횟횡효횬횰횹횻후훅훈훌훑훔훗훙훠훤훨훰훵훼훽휀휄휑휘휙휜휠휨휩휫휭휴휵휸휼흄흇흉흐흑흔흖흗흘흙흠흡흣흥흩희흰흴흼흽힁히힉힌힐힘힙힛힝"
  ],
  [
    "caa1",
    "伽佳假價加可呵哥嘉嫁家暇架枷柯歌珂痂稼苛茄街袈訶賈跏軻迦駕刻却各恪慤殼珏脚覺角閣侃刊墾奸姦干幹懇揀杆柬桿澗癎看磵稈竿簡肝艮艱諫間乫喝曷渴碣竭葛褐蝎鞨勘坎堪嵌感憾戡敢柑橄減甘疳監瞰紺邯鑑鑒龕"
  ],
  [
    "cba1",
    "匣岬甲胛鉀閘剛堈姜岡崗康强彊慷江畺疆糠絳綱羌腔舡薑襁講鋼降鱇介价個凱塏愷愾慨改槪漑疥皆盖箇芥蓋豈鎧開喀客坑更粳羹醵倨去居巨拒据據擧渠炬祛距踞車遽鉅鋸乾件健巾建愆楗腱虔蹇鍵騫乞傑杰桀儉劍劒檢"
  ],
  [
    "cca1",
    "瞼鈐黔劫怯迲偈憩揭擊格檄激膈覡隔堅牽犬甄絹繭肩見譴遣鵑抉決潔結缺訣兼慊箝謙鉗鎌京俓倞傾儆勁勍卿坰境庚徑慶憬擎敬景暻更梗涇炅烱璟璥瓊痙硬磬竟競絅經耕耿脛莖警輕逕鏡頃頸驚鯨係啓堺契季屆悸戒桂械"
  ],
  [
    "cda1",
    "棨溪界癸磎稽系繫繼計誡谿階鷄古叩告呱固姑孤尻庫拷攷故敲暠枯槁沽痼皐睾稿羔考股膏苦苽菰藁蠱袴誥賈辜錮雇顧高鼓哭斛曲梏穀谷鵠困坤崑昆梱棍滾琨袞鯤汨滑骨供公共功孔工恐恭拱控攻珙空蚣貢鞏串寡戈果瓜"
  ],
  [
    "cea1",
    "科菓誇課跨過鍋顆廓槨藿郭串冠官寬慣棺款灌琯瓘管罐菅觀貫關館刮恝括适侊光匡壙廣曠洸炚狂珖筐胱鑛卦掛罫乖傀塊壞怪愧拐槐魁宏紘肱轟交僑咬喬嬌嶠巧攪敎校橋狡皎矯絞翹膠蕎蛟較轎郊餃驕鮫丘久九仇俱具勾"
  ],
  [
    "cfa1",
    "區口句咎嘔坵垢寇嶇廐懼拘救枸柩構歐毆毬求溝灸狗玖球瞿矩究絿耉臼舅舊苟衢謳購軀逑邱鉤銶駒驅鳩鷗龜國局菊鞠鞫麴君窘群裙軍郡堀屈掘窟宮弓穹窮芎躬倦券勸卷圈拳捲權淃眷厥獗蕨蹶闕机櫃潰詭軌饋句晷歸貴"
  ],
  [
    "d0a1",
    "鬼龜叫圭奎揆槻珪硅窺竅糾葵規赳逵閨勻均畇筠菌鈞龜橘克剋劇戟棘極隙僅劤勤懃斤根槿瑾筋芹菫覲謹近饉契今妗擒昑檎琴禁禽芩衾衿襟金錦伋及急扱汲級給亘兢矜肯企伎其冀嗜器圻基埼夔奇妓寄岐崎己幾忌技旗旣"
  ],
  [
    "d1a1",
    "朞期杞棋棄機欺氣汽沂淇玘琦琪璂璣畸畿碁磯祁祇祈祺箕紀綺羈耆耭肌記譏豈起錡錤飢饑騎騏驥麒緊佶吉拮桔金喫儺喇奈娜懦懶拏拿癩",
    5,
    "那樂",
    4,
    "諾酪駱亂卵暖欄煖爛蘭難鸞捏捺南嵐枏楠湳濫男藍襤拉"
  ],
  [
    "d2a1",
    "納臘蠟衲囊娘廊",
    4,
    "乃來內奈柰耐冷女年撚秊念恬拈捻寧寗努勞奴弩怒擄櫓爐瑙盧",
    5,
    "駑魯",
    10,
    "濃籠聾膿農惱牢磊腦賂雷尿壘",
    7,
    "嫩訥杻紐勒",
    5,
    "能菱陵尼泥匿溺多茶"
  ],
  [
    "d3a1",
    "丹亶但單團壇彖斷旦檀段湍短端簞緞蛋袒鄲鍛撻澾獺疸達啖坍憺擔曇淡湛潭澹痰聃膽蕁覃談譚錟沓畓答踏遝唐堂塘幢戇撞棠當糖螳黨代垈坮大對岱帶待戴擡玳臺袋貸隊黛宅德悳倒刀到圖堵塗導屠島嶋度徒悼挑掉搗桃"
  ],
  [
    "d4a1",
    "棹櫂淘渡滔濤燾盜睹禱稻萄覩賭跳蹈逃途道都鍍陶韜毒瀆牘犢獨督禿篤纛讀墩惇敦旽暾沌焞燉豚頓乭突仝冬凍動同憧東桐棟洞潼疼瞳童胴董銅兜斗杜枓痘竇荳讀豆逗頭屯臀芚遁遯鈍得嶝橙燈登等藤謄鄧騰喇懶拏癩羅"
  ],
  [
    "d5a1",
    "蘿螺裸邏樂洛烙珞絡落諾酪駱丹亂卵欄欒瀾爛蘭鸞剌辣嵐擥攬欖濫籃纜藍襤覽拉臘蠟廊朗浪狼琅瑯螂郞來崍徠萊冷掠略亮倆兩凉梁樑粮粱糧良諒輛量侶儷勵呂廬慮戾旅櫚濾礪藜蠣閭驢驪麗黎力曆歷瀝礫轢靂憐戀攣漣"
  ],
  [
    "d6a1",
    "煉璉練聯蓮輦連鍊冽列劣洌烈裂廉斂殮濂簾獵令伶囹寧岺嶺怜玲笭羚翎聆逞鈴零靈領齡例澧禮醴隷勞怒撈擄櫓潞瀘爐盧老蘆虜路輅露魯鷺鹵碌祿綠菉錄鹿麓論壟弄朧瀧瓏籠聾儡瀨牢磊賂賚賴雷了僚寮廖料燎療瞭聊蓼"
  ],
  [
    "d7a1",
    "遼鬧龍壘婁屢樓淚漏瘻累縷蔞褸鏤陋劉旒柳榴流溜瀏琉瑠留瘤硫謬類六戮陸侖倫崙淪綸輪律慄栗率隆勒肋凜凌楞稜綾菱陵俚利厘吏唎履悧李梨浬犁狸理璃異痢籬罹羸莉裏裡里釐離鯉吝潾燐璘藺躪隣鱗麟林淋琳臨霖砬"
  ],
  [
    "d8a1",
    "立笠粒摩瑪痲碼磨馬魔麻寞幕漠膜莫邈万卍娩巒彎慢挽晩曼滿漫灣瞞萬蔓蠻輓饅鰻唜抹末沫茉襪靺亡妄忘忙望網罔芒茫莽輞邙埋妹媒寐昧枚梅每煤罵買賣邁魅脈貊陌驀麥孟氓猛盲盟萌冪覓免冕勉棉沔眄眠綿緬面麵滅"
  ],
  [
    "d9a1",
    "蔑冥名命明暝椧溟皿瞑茗蓂螟酩銘鳴袂侮冒募姆帽慕摸摹暮某模母毛牟牡瑁眸矛耗芼茅謀謨貌木沐牧目睦穆鶩歿沒夢朦蒙卯墓妙廟描昴杳渺猫竗苗錨務巫憮懋戊拇撫无楙武毋無珷畝繆舞茂蕪誣貿霧鵡墨默們刎吻問文"
  ],
  [
    "daa1",
    "汶紊紋聞蚊門雯勿沕物味媚尾嵋彌微未梶楣渼湄眉米美薇謎迷靡黴岷悶愍憫敏旻旼民泯玟珉緡閔密蜜謐剝博拍搏撲朴樸泊珀璞箔粕縛膊舶薄迫雹駁伴半反叛拌搬攀斑槃泮潘班畔瘢盤盼磐磻礬絆般蟠返頒飯勃拔撥渤潑"
  ],
  [
    "dba1",
    "發跋醱鉢髮魃倣傍坊妨尨幇彷房放方旁昉枋榜滂磅紡肪膀舫芳蒡蚌訪謗邦防龐倍俳北培徘拜排杯湃焙盃背胚裴裵褙賠輩配陪伯佰帛柏栢白百魄幡樊煩燔番磻繁蕃藩飜伐筏罰閥凡帆梵氾汎泛犯範范法琺僻劈壁擘檗璧癖"
  ],
  [
    "dca1",
    "碧蘗闢霹便卞弁變辨辯邊別瞥鱉鼈丙倂兵屛幷昞昺柄棅炳甁病秉竝輧餠騈保堡報寶普步洑湺潽珤甫菩補褓譜輔伏僕匐卜宓復服福腹茯蔔複覆輹輻馥鰒本乶俸奉封峯峰捧棒烽熢琫縫蓬蜂逢鋒鳳不付俯傅剖副否咐埠夫婦"
  ],
  [
    "dda1",
    "孚孵富府復扶敷斧浮溥父符簿缶腐腑膚艀芙莩訃負賦賻赴趺部釜阜附駙鳧北分吩噴墳奔奮忿憤扮昐汾焚盆粉糞紛芬賁雰不佛弗彿拂崩朋棚硼繃鵬丕備匕匪卑妃婢庇悲憊扉批斐枇榧比毖毗毘沸泌琵痺砒碑秕秘粃緋翡肥"
  ],
  [
    "dea1",
    "脾臂菲蜚裨誹譬費鄙非飛鼻嚬嬪彬斌檳殯浜濱瀕牝玭貧賓頻憑氷聘騁乍事些仕伺似使俟僿史司唆嗣四士奢娑寫寺射巳師徙思捨斜斯柶査梭死沙泗渣瀉獅砂社祀祠私篩紗絲肆舍莎蓑蛇裟詐詞謝賜赦辭邪飼駟麝削數朔索"
  ],
  [
    "dfa1",
    "傘刪山散汕珊産疝算蒜酸霰乷撒殺煞薩三參杉森渗芟蔘衫揷澁鈒颯上傷像償商喪嘗孀尙峠常床庠廂想桑橡湘爽牀狀相祥箱翔裳觴詳象賞霜塞璽賽嗇塞穡索色牲生甥省笙墅壻嶼序庶徐恕抒捿敍暑曙書栖棲犀瑞筮絮緖署"
  ],
  [
    "e0a1",
    "胥舒薯西誓逝鋤黍鼠夕奭席惜昔晳析汐淅潟石碩蓆釋錫仙僊先善嬋宣扇敾旋渲煽琁瑄璇璿癬禪線繕羨腺膳船蘚蟬詵跣選銑鐥饍鮮卨屑楔泄洩渫舌薛褻設說雪齧剡暹殲纖蟾贍閃陝攝涉燮葉城姓宬性惺成星晟猩珹盛省筬"
  ],
  [
    "e1a1",
    "聖聲腥誠醒世勢歲洗稅笹細說貰召嘯塑宵小少巢所掃搔昭梳沼消溯瀟炤燒甦疏疎瘙笑篠簫素紹蔬蕭蘇訴逍遡邵銷韶騷俗屬束涑粟續謖贖速孫巽損蓀遜飡率宋悚松淞訟誦送頌刷殺灑碎鎖衰釗修受嗽囚垂壽嫂守岫峀帥愁"
  ],
  [
    "e2a1",
    "戍手授搜收數樹殊水洙漱燧狩獸琇璲瘦睡秀穗竪粹綏綬繡羞脩茱蒐蓚藪袖誰讐輸遂邃酬銖銹隋隧隨雖需須首髓鬚叔塾夙孰宿淑潚熟琡璹肅菽巡徇循恂旬栒楯橓殉洵淳珣盾瞬筍純脣舜荀蓴蕣詢諄醇錞順馴戌術述鉥崇崧"
  ],
  [
    "e3a1",
    "嵩瑟膝蝨濕拾習褶襲丞乘僧勝升承昇繩蠅陞侍匙嘶始媤尸屎屍市弑恃施是時枾柴猜矢示翅蒔蓍視試詩諡豕豺埴寔式息拭植殖湜熄篒蝕識軾食飾伸侁信呻娠宸愼新晨燼申神紳腎臣莘薪藎蜃訊身辛辰迅失室實悉審尋心沁"
  ],
  [
    "e4a1",
    "沈深瀋甚芯諶什十拾雙氏亞俄兒啞娥峨我牙芽莪蛾衙訝阿雅餓鴉鵝堊岳嶽幄惡愕握樂渥鄂鍔顎鰐齷安岸按晏案眼雁鞍顔鮟斡謁軋閼唵岩巖庵暗癌菴闇壓押狎鴨仰央怏昻殃秧鴦厓哀埃崖愛曖涯碍艾隘靄厄扼掖液縊腋額"
  ],
  [
    "e5a1",
    "櫻罌鶯鸚也倻冶夜惹揶椰爺耶若野弱掠略約若葯蒻藥躍亮佯兩凉壤孃恙揚攘敭暘梁楊樣洋瀁煬痒瘍禳穰糧羊良襄諒讓釀陽量養圄御於漁瘀禦語馭魚齬億憶抑檍臆偃堰彦焉言諺孼蘖俺儼嚴奄掩淹嶪業円予余勵呂女如廬"
  ],
  [
    "e6a1",
    "旅歟汝濾璵礖礪與艅茹輿轝閭餘驪麗黎亦力域役易曆歷疫繹譯轢逆驛嚥堧姸娟宴年延憐戀捐挻撚椽沇沿涎涓淵演漣烟然煙煉燃燕璉硏硯秊筵緣練縯聯衍軟輦蓮連鉛鍊鳶列劣咽悅涅烈熱裂說閱厭廉念捻染殮炎焰琰艶苒"
  ],
  [
    "e7a1",
    "簾閻髥鹽曄獵燁葉令囹塋寧嶺嶸影怜映暎楹榮永泳渶潁濚瀛瀯煐營獰玲瑛瑩瓔盈穎纓羚聆英詠迎鈴鍈零霙靈領乂倪例刈叡曳汭濊猊睿穢芮藝蘂禮裔詣譽豫醴銳隸霓預五伍俉傲午吾吳嗚塢墺奧娛寤悟惡懊敖旿晤梧汚澳"
  ],
  [
    "e8a1",
    "烏熬獒筽蜈誤鰲鼇屋沃獄玉鈺溫瑥瘟穩縕蘊兀壅擁瓮甕癰翁邕雍饔渦瓦窩窪臥蛙蝸訛婉完宛梡椀浣玩琓琬碗緩翫脘腕莞豌阮頑曰往旺枉汪王倭娃歪矮外嵬巍猥畏了僚僥凹堯夭妖姚寥寮尿嶢拗搖撓擾料曜樂橈燎燿瑤療"
  ],
  [
    "e9a1",
    "窈窯繇繞耀腰蓼蟯要謠遙遼邀饒慾欲浴縟褥辱俑傭冗勇埇墉容庸慂榕涌湧溶熔瑢用甬聳茸蓉踊鎔鏞龍于佑偶優又友右宇寓尤愚憂旴牛玗瑀盂祐禑禹紆羽芋藕虞迂遇郵釪隅雨雩勖彧旭昱栯煜稶郁頊云暈橒殞澐熉耘芸蕓"
  ],
  [
    "eaa1",
    "運隕雲韻蔚鬱亐熊雄元原員圓園垣媛嫄寃怨愿援沅洹湲源爰猿瑗苑袁轅遠阮院願鴛月越鉞位偉僞危圍委威尉慰暐渭爲瑋緯胃萎葦蔿蝟衛褘謂違韋魏乳侑儒兪劉唯喩孺宥幼幽庾悠惟愈愉揄攸有杻柔柚柳楡楢油洧流游溜"
  ],
  [
    "eba1",
    "濡猶猷琉瑜由留癒硫紐維臾萸裕誘諛諭踰蹂遊逾遺酉釉鍮類六堉戮毓肉育陸倫允奫尹崙淪潤玧胤贇輪鈗閏律慄栗率聿戎瀜絨融隆垠恩慇殷誾銀隱乙吟淫蔭陰音飮揖泣邑凝應膺鷹依倚儀宜意懿擬椅毅疑矣義艤薏蟻衣誼"
  ],
  [
    "eca1",
    "議醫二以伊利吏夷姨履已弛彛怡易李梨泥爾珥理異痍痢移罹而耳肄苡荑裏裡貽貳邇里離飴餌匿溺瀷益翊翌翼謚人仁刃印吝咽因姻寅引忍湮燐璘絪茵藺蚓認隣靭靷鱗麟一佚佾壹日溢逸鎰馹任壬妊姙恁林淋稔臨荏賃入卄"
  ],
  [
    "eda1",
    "立笠粒仍剩孕芿仔刺咨姉姿子字孜恣慈滋炙煮玆瓷疵磁紫者自茨蔗藉諮資雌作勺嚼斫昨灼炸爵綽芍酌雀鵲孱棧殘潺盞岑暫潛箴簪蠶雜丈仗匠場墻壯奬將帳庄張掌暲杖樟檣欌漿牆狀獐璋章粧腸臟臧莊葬蔣薔藏裝贓醬長"
  ],
  [
    "eea1",
    "障再哉在宰才材栽梓渽滓災縡裁財載齋齎爭箏諍錚佇低儲咀姐底抵杵楮樗沮渚狙猪疽箸紵苧菹著藷詛貯躇這邸雎齟勣吊嫡寂摘敵滴狄炙的積笛籍績翟荻謫賊赤跡蹟迪迹適鏑佃佺傳全典前剪塡塼奠專展廛悛戰栓殿氈澱"
  ],
  [
    "efa1",
    "煎琠田甸畑癲筌箋箭篆纏詮輾轉鈿銓錢鐫電顚顫餞切截折浙癤竊節絶占岾店漸点粘霑鮎點接摺蝶丁井亭停偵呈姃定幀庭廷征情挺政整旌晶晸柾楨檉正汀淀淨渟湞瀞炡玎珽町睛碇禎程穽精綎艇訂諪貞鄭酊釘鉦鋌錠霆靖"
  ],
  [
    "f0a1",
    "靜頂鼎制劑啼堤帝弟悌提梯濟祭第臍薺製諸蹄醍除際霽題齊俎兆凋助嘲弔彫措操早晁曺曹朝條棗槽漕潮照燥爪璪眺祖祚租稠窕粗糟組繰肇藻蚤詔調趙躁造遭釣阻雕鳥族簇足鏃存尊卒拙猝倧宗從悰慫棕淙琮種終綜縱腫"
  ],
  [
    "f1a1",
    "踪踵鍾鐘佐坐左座挫罪主住侏做姝胄呪周嗾奏宙州廚晝朱柱株注洲湊澍炷珠疇籌紂紬綢舟蛛註誅走躊輳週酎酒鑄駐竹粥俊儁准埈寯峻晙樽浚準濬焌畯竣蠢逡遵雋駿茁中仲衆重卽櫛楫汁葺增憎曾拯烝甑症繒蒸證贈之只"
  ],
  [
    "f2a1",
    "咫地址志持指摯支旨智枝枳止池沚漬知砥祉祗紙肢脂至芝芷蜘誌識贄趾遲直稙稷織職唇嗔塵振搢晉晋桭榛殄津溱珍瑨璡畛疹盡眞瞋秦縉縝臻蔯袗診賑軫辰進鎭陣陳震侄叱姪嫉帙桎瓆疾秩窒膣蛭質跌迭斟朕什執潗緝輯"
  ],
  [
    "f3a1",
    "鏶集徵懲澄且侘借叉嗟嵯差次此磋箚茶蹉車遮捉搾着窄錯鑿齪撰澯燦璨瓚竄簒纂粲纘讚贊鑽餐饌刹察擦札紮僭參塹慘慙懺斬站讒讖倉倡創唱娼廠彰愴敞昌昶暢槍滄漲猖瘡窓脹艙菖蒼債埰寀寨彩採砦綵菜蔡采釵冊柵策"
  ],
  [
    "f4a1",
    "責凄妻悽處倜刺剔尺慽戚拓擲斥滌瘠脊蹠陟隻仟千喘天川擅泉淺玔穿舛薦賤踐遷釧闡阡韆凸哲喆徹撤澈綴輟轍鐵僉尖沾添甛瞻簽籤詹諂堞妾帖捷牒疊睫諜貼輒廳晴淸聽菁請靑鯖切剃替涕滯締諦逮遞體初剿哨憔抄招梢"
  ],
  [
    "f5a1",
    "椒楚樵炒焦硝礁礎秒稍肖艸苕草蕉貂超酢醋醮促囑燭矗蜀觸寸忖村邨叢塚寵悤憁摠總聰蔥銃撮催崔最墜抽推椎楸樞湫皺秋芻萩諏趨追鄒酋醜錐錘鎚雛騶鰍丑畜祝竺筑築縮蓄蹙蹴軸逐春椿瑃出朮黜充忠沖蟲衝衷悴膵萃"
  ],
  [
    "f6a1",
    "贅取吹嘴娶就炊翠聚脆臭趣醉驟鷲側仄厠惻測層侈値嗤峙幟恥梔治淄熾痔痴癡稚穉緇緻置致蚩輜雉馳齒則勅飭親七柒漆侵寢枕沈浸琛砧針鍼蟄秤稱快他咤唾墮妥惰打拖朶楕舵陀馱駝倬卓啄坼度托拓擢晫柝濁濯琢琸託"
  ],
  [
    "f7a1",
    "鐸呑嘆坦彈憚歎灘炭綻誕奪脫探眈耽貪塔搭榻宕帑湯糖蕩兌台太怠態殆汰泰笞胎苔跆邰颱宅擇澤撑攄兎吐土討慟桶洞痛筒統通堆槌腿褪退頹偸套妬投透鬪慝特闖坡婆巴把播擺杷波派爬琶破罷芭跛頗判坂板版瓣販辦鈑"
  ],
  [
    "f8a1",
    "阪八叭捌佩唄悖敗沛浿牌狽稗覇貝彭澎烹膨愎便偏扁片篇編翩遍鞭騙貶坪平枰萍評吠嬖幣廢弊斃肺蔽閉陛佈包匍匏咆哺圃布怖抛抱捕暴泡浦疱砲胞脯苞葡蒲袍褒逋鋪飽鮑幅暴曝瀑爆輻俵剽彪慓杓標漂瓢票表豹飇飄驃"
  ],
  [
    "f9a1",
    "品稟楓諷豊風馮彼披疲皮被避陂匹弼必泌珌畢疋筆苾馝乏逼下何厦夏廈昰河瑕荷蝦賀遐霞鰕壑學虐謔鶴寒恨悍旱汗漢澣瀚罕翰閑閒限韓割轄函含咸啣喊檻涵緘艦銜陷鹹合哈盒蛤閤闔陜亢伉姮嫦巷恒抗杭桁沆港缸肛航"
  ],
  [
    "faa1",
    "行降項亥偕咳垓奚孩害懈楷海瀣蟹解該諧邂駭骸劾核倖幸杏荇行享向嚮珦鄕響餉饗香噓墟虛許憲櫶獻軒歇險驗奕爀赫革俔峴弦懸晛泫炫玄玹現眩睍絃絢縣舷衒見賢鉉顯孑穴血頁嫌俠協夾峽挾浹狹脅脇莢鋏頰亨兄刑型"
  ],
  [
    "fba1",
    "形泂滎瀅灐炯熒珩瑩荊螢衡逈邢鎣馨兮彗惠慧暳蕙蹊醯鞋乎互呼壕壺好岵弧戶扈昊晧毫浩淏湖滸澔濠濩灝狐琥瑚瓠皓祜糊縞胡芦葫蒿虎號蝴護豪鎬頀顥惑或酷婚昏混渾琿魂忽惚笏哄弘汞泓洪烘紅虹訌鴻化和嬅樺火畵"
  ],
  [
    "fca1",
    "禍禾花華話譁貨靴廓擴攫確碻穫丸喚奐宦幻患換歡晥桓渙煥環紈還驩鰥活滑猾豁闊凰幌徨恍惶愰慌晃晄榥況湟滉潢煌璜皇篁簧荒蝗遑隍黃匯回廻徊恢悔懷晦會檜淮澮灰獪繪膾茴蛔誨賄劃獲宖橫鐄哮嚆孝效斅曉梟涍淆"
  ],
  [
    "fda1",
    "爻肴酵驍侯候厚后吼喉嗅帿後朽煦珝逅勛勳塤壎焄熏燻薰訓暈薨喧暄煊萱卉喙毁彙徽揮暉煇諱輝麾休携烋畦虧恤譎鷸兇凶匈洶胸黑昕欣炘痕吃屹紇訖欠欽歆吸恰洽翕興僖凞喜噫囍姬嬉希憙憘戱晞曦熙熹熺犧禧稀羲詰"
  ]
], Gf = [
  [
    "0",
    "\0",
    127
  ],
  [
    "a140",
    "　，、。．‧；：？！︰…‥﹐﹑﹒·﹔﹕﹖﹗｜–︱—︳╴︴﹏（）︵︶｛｝︷︸〔〕︹︺【】︻︼《》︽︾〈〉︿﹀「」﹁﹂『』﹃﹄﹙﹚"
  ],
  [
    "a1a1",
    "﹛﹜﹝﹞‘’“”〝〞‵′＃＆＊※§〃○●△▲◎☆★◇◆□■▽▼㊣℅¯￣＿ˍ﹉﹊﹍﹎﹋﹌﹟﹠﹡＋－×÷±√＜＞＝≦≧≠∞≒≡﹢",
    4,
    "～∩∪⊥∠∟⊿㏒㏑∫∮∵∴♀♂⊕⊙↑↓←→↖↗↙↘∥∣／"
  ],
  [
    "a240",
    "＼∕﹨＄￥〒￠￡％＠℃℉﹩﹪﹫㏕㎜㎝㎞㏎㎡㎎㎏㏄°兙兛兞兝兡兣嗧瓩糎▁",
    7,
    "▏▎▍▌▋▊▉┼┴┬┤├▔─│▕┌┐└┘╭"
  ],
  [
    "a2a1",
    "╮╰╯═╞╪╡◢◣◥◤╱╲╳０",
    9,
    "Ⅰ",
    9,
    "〡",
    8,
    "十卄卅Ａ",
    25,
    "ａ",
    21
  ],
  [
    "a340",
    "ｗｘｙｚΑ",
    16,
    "Σ",
    6,
    "α",
    16,
    "σ",
    6,
    "ㄅ",
    10
  ],
  [
    "a3a1",
    "ㄐ",
    25,
    "˙ˉˊˇˋ"
  ],
  [
    "a3e1",
    "€"
  ],
  [
    "a440",
    "一乙丁七乃九了二人儿入八几刀刁力匕十卜又三下丈上丫丸凡久么也乞于亡兀刃勺千叉口土士夕大女子孑孓寸小尢尸山川工己已巳巾干廾弋弓才"
  ],
  [
    "a4a1",
    "丑丐不中丰丹之尹予云井互五亢仁什仃仆仇仍今介仄元允內六兮公冗凶分切刈勻勾勿化匹午升卅卞厄友及反壬天夫太夭孔少尤尺屯巴幻廿弔引心戈戶手扎支文斗斤方日曰月木欠止歹毋比毛氏水火爪父爻片牙牛犬王丙"
  ],
  [
    "a540",
    "世丕且丘主乍乏乎以付仔仕他仗代令仙仞充兄冉冊冬凹出凸刊加功包匆北匝仟半卉卡占卯卮去可古右召叮叩叨叼司叵叫另只史叱台句叭叻四囚外"
  ],
  [
    "a5a1",
    "央失奴奶孕它尼巨巧左市布平幼弁弘弗必戊打扔扒扑斥旦朮本未末札正母民氐永汁汀氾犯玄玉瓜瓦甘生用甩田由甲申疋白皮皿目矛矢石示禾穴立丞丟乒乓乩亙交亦亥仿伉伙伊伕伍伐休伏仲件任仰仳份企伋光兇兆先全"
  ],
  [
    "a640",
    "共再冰列刑划刎刖劣匈匡匠印危吉吏同吊吐吁吋各向名合吃后吆吒因回囝圳地在圭圬圯圩夙多夷夸妄奸妃好她如妁字存宇守宅安寺尖屹州帆并年"
  ],
  [
    "a6a1",
    "式弛忙忖戎戌戍成扣扛托收早旨旬旭曲曳有朽朴朱朵次此死氖汝汗汙江池汐汕污汛汍汎灰牟牝百竹米糸缶羊羽老考而耒耳聿肉肋肌臣自至臼舌舛舟艮色艾虫血行衣西阡串亨位住佇佗佞伴佛何估佐佑伽伺伸佃佔似但佣"
  ],
  [
    "a740",
    "作你伯低伶余佝佈佚兌克免兵冶冷別判利刪刨劫助努劬匣即卵吝吭吞吾否呎吧呆呃吳呈呂君吩告吹吻吸吮吵吶吠吼呀吱含吟听囪困囤囫坊坑址坍"
  ],
  [
    "a7a1",
    "均坎圾坐坏圻壯夾妝妒妨妞妣妙妖妍妤妓妊妥孝孜孚孛完宋宏尬局屁尿尾岐岑岔岌巫希序庇床廷弄弟彤形彷役忘忌志忍忱快忸忪戒我抄抗抖技扶抉扭把扼找批扳抒扯折扮投抓抑抆改攻攸旱更束李杏材村杜杖杞杉杆杠"
  ],
  [
    "a840",
    "杓杗步每求汞沙沁沈沉沅沛汪決沐汰沌汨沖沒汽沃汲汾汴沆汶沍沔沘沂灶灼災灸牢牡牠狄狂玖甬甫男甸皂盯矣私秀禿究系罕肖肓肝肘肛肚育良芒"
  ],
  [
    "a8a1",
    "芋芍見角言谷豆豕貝赤走足身車辛辰迂迆迅迄巡邑邢邪邦那酉釆里防阮阱阪阬並乖乳事些亞享京佯依侍佳使佬供例來侃佰併侈佩佻侖佾侏侑佺兔兒兕兩具其典冽函刻券刷刺到刮制剁劾劻卒協卓卑卦卷卸卹取叔受味呵"
  ],
  [
    "a940",
    "咖呸咕咀呻呷咄咒咆呼咐呱呶和咚呢周咋命咎固垃坷坪坩坡坦坤坼夜奉奇奈奄奔妾妻委妹妮姑姆姐姍始姓姊妯妳姒姅孟孤季宗定官宜宙宛尚屈居"
  ],
  [
    "a9a1",
    "屆岷岡岸岩岫岱岳帘帚帖帕帛帑幸庚店府底庖延弦弧弩往征彿彼忝忠忽念忿怏怔怯怵怖怪怕怡性怩怫怛或戕房戾所承拉拌拄抿拂抹拒招披拓拔拋拈抨抽押拐拙拇拍抵拚抱拘拖拗拆抬拎放斧於旺昔易昌昆昂明昀昏昕昊"
  ],
  [
    "aa40",
    "昇服朋杭枋枕東果杳杷枇枝林杯杰板枉松析杵枚枓杼杪杲欣武歧歿氓氛泣注泳沱泌泥河沽沾沼波沫法泓沸泄油況沮泗泅泱沿治泡泛泊沬泯泜泖泠"
  ],
  [
    "aaa1",
    "炕炎炒炊炙爬爭爸版牧物狀狎狙狗狐玩玨玟玫玥甽疝疙疚的盂盲直知矽社祀祁秉秈空穹竺糾罔羌羋者肺肥肢肱股肫肩肴肪肯臥臾舍芳芝芙芭芽芟芹花芬芥芯芸芣芰芾芷虎虱初表軋迎返近邵邸邱邶采金長門阜陀阿阻附"
  ],
  [
    "ab40",
    "陂隹雨青非亟亭亮信侵侯便俠俑俏保促侶俘俟俊俗侮俐俄係俚俎俞侷兗冒冑冠剎剃削前剌剋則勇勉勃勁匍南卻厚叛咬哀咨哎哉咸咦咳哇哂咽咪品"
  ],
  [
    "aba1",
    "哄哈咯咫咱咻咩咧咿囿垂型垠垣垢城垮垓奕契奏奎奐姜姘姿姣姨娃姥姪姚姦威姻孩宣宦室客宥封屎屏屍屋峙峒巷帝帥帟幽庠度建弈弭彥很待徊律徇後徉怒思怠急怎怨恍恰恨恢恆恃恬恫恪恤扁拜挖按拼拭持拮拽指拱拷"
  ],
  [
    "ac40",
    "拯括拾拴挑挂政故斫施既春昭映昧是星昨昱昤曷柿染柱柔某柬架枯柵柩柯柄柑枴柚查枸柏柞柳枰柙柢柝柒歪殃殆段毒毗氟泉洋洲洪流津洌洱洞洗"
  ],
  [
    "aca1",
    "活洽派洶洛泵洹洧洸洩洮洵洎洫炫為炳炬炯炭炸炮炤爰牲牯牴狩狠狡玷珊玻玲珍珀玳甚甭畏界畎畋疫疤疥疢疣癸皆皇皈盈盆盃盅省盹相眉看盾盼眇矜砂研砌砍祆祉祈祇禹禺科秒秋穿突竿竽籽紂紅紀紉紇約紆缸美羿耄"
  ],
  [
    "ad40",
    "耐耍耑耶胖胥胚胃胄背胡胛胎胞胤胝致舢苧范茅苣苛苦茄若茂茉苒苗英茁苜苔苑苞苓苟苯茆虐虹虻虺衍衫要觔計訂訃貞負赴赳趴軍軌述迦迢迪迥"
  ],
  [
    "ada1",
    "迭迫迤迨郊郎郁郃酋酊重閂限陋陌降面革韋韭音頁風飛食首香乘亳倌倍倣俯倦倥俸倩倖倆值借倚倒們俺倀倔倨俱倡個候倘俳修倭倪俾倫倉兼冤冥冢凍凌准凋剖剜剔剛剝匪卿原厝叟哨唐唁唷哼哥哲唆哺唔哩哭員唉哮哪"
  ],
  [
    "ae40",
    "哦唧唇哽唏圃圄埂埔埋埃堉夏套奘奚娑娘娜娟娛娓姬娠娣娩娥娌娉孫屘宰害家宴宮宵容宸射屑展屐峭峽峻峪峨峰島崁峴差席師庫庭座弱徒徑徐恙"
  ],
  [
    "aea1",
    "恣恥恐恕恭恩息悄悟悚悍悔悌悅悖扇拳挈拿捎挾振捕捂捆捏捉挺捐挽挪挫挨捍捌效敉料旁旅時晉晏晃晒晌晅晁書朔朕朗校核案框桓根桂桔栩梳栗桌桑栽柴桐桀格桃株桅栓栘桁殊殉殷氣氧氨氦氤泰浪涕消涇浦浸海浙涓"
  ],
  [
    "af40",
    "浬涉浮浚浴浩涌涊浹涅浥涔烊烘烤烙烈烏爹特狼狹狽狸狷玆班琉珮珠珪珞畔畝畜畚留疾病症疲疳疽疼疹痂疸皋皰益盍盎眩真眠眨矩砰砧砸砝破砷"
  ],
  [
    "afa1",
    "砥砭砠砟砲祕祐祠祟祖神祝祗祚秤秣秧租秦秩秘窄窈站笆笑粉紡紗紋紊素索純紐紕級紜納紙紛缺罟羔翅翁耆耘耕耙耗耽耿胱脂胰脅胭胴脆胸胳脈能脊胼胯臭臬舀舐航舫舨般芻茫荒荔荊茸荐草茵茴荏茲茹茶茗荀茱茨荃"
  ],
  [
    "b040",
    "虔蚊蚪蚓蚤蚩蚌蚣蚜衰衷袁袂衽衹記訐討訌訕訊託訓訖訏訑豈豺豹財貢起躬軒軔軏辱送逆迷退迺迴逃追逅迸邕郡郝郢酒配酌釘針釗釜釙閃院陣陡"
  ],
  [
    "b0a1",
    "陛陝除陘陞隻飢馬骨高鬥鬲鬼乾偺偽停假偃偌做偉健偶偎偕偵側偷偏倏偯偭兜冕凰剪副勒務勘動匐匏匙匿區匾參曼商啪啦啄啞啡啃啊唱啖問啕唯啤唸售啜唬啣唳啁啗圈國圉域堅堊堆埠埤基堂堵執培夠奢娶婁婉婦婪婀"
  ],
  [
    "b140",
    "娼婢婚婆婊孰寇寅寄寂宿密尉專將屠屜屝崇崆崎崛崖崢崑崩崔崙崤崧崗巢常帶帳帷康庸庶庵庾張強彗彬彩彫得徙從徘御徠徜恿患悉悠您惋悴惦悽"
  ],
  [
    "b1a1",
    "情悻悵惜悼惘惕惆惟悸惚惇戚戛扈掠控捲掖探接捷捧掘措捱掩掉掃掛捫推掄授掙採掬排掏掀捻捩捨捺敝敖救教敗啟敏敘敕敔斜斛斬族旋旌旎晝晚晤晨晦晞曹勗望梁梯梢梓梵桿桶梱梧梗械梃棄梭梆梅梔條梨梟梡梂欲殺"
  ],
  [
    "b240",
    "毫毬氫涎涼淳淙液淡淌淤添淺清淇淋涯淑涮淞淹涸混淵淅淒渚涵淚淫淘淪深淮淨淆淄涪淬涿淦烹焉焊烽烯爽牽犁猜猛猖猓猙率琅琊球理現琍瓠瓶"
  ],
  [
    "b2a1",
    "瓷甜產略畦畢異疏痔痕疵痊痍皎盔盒盛眷眾眼眶眸眺硫硃硎祥票祭移窒窕笠笨笛第符笙笞笮粒粗粕絆絃統紮紹紼絀細紳組累終紲紱缽羞羚翌翎習耜聊聆脯脖脣脫脩脰脤舂舵舷舶船莎莞莘荸莢莖莽莫莒莊莓莉莠荷荻荼"
  ],
  [
    "b340",
    "莆莧處彪蛇蛀蚶蛄蚵蛆蛋蚱蚯蛉術袞袈被袒袖袍袋覓規訪訝訣訥許設訟訛訢豉豚販責貫貨貪貧赧赦趾趺軛軟這逍通逗連速逝逐逕逞造透逢逖逛途"
  ],
  [
    "b3a1",
    "部郭都酗野釵釦釣釧釭釩閉陪陵陳陸陰陴陶陷陬雀雪雩章竟頂頃魚鳥鹵鹿麥麻傢傍傅備傑傀傖傘傚最凱割剴創剩勞勝勛博厥啻喀喧啼喊喝喘喂喜喪喔喇喋喃喳單喟唾喲喚喻喬喱啾喉喫喙圍堯堪場堤堰報堡堝堠壹壺奠"
  ],
  [
    "b440",
    "婷媚婿媒媛媧孳孱寒富寓寐尊尋就嵌嵐崴嵇巽幅帽幀幃幾廊廁廂廄弼彭復循徨惑惡悲悶惠愜愣惺愕惰惻惴慨惱愎惶愉愀愒戟扉掣掌描揀揩揉揆揍"
  ],
  [
    "b4a1",
    "插揣提握揖揭揮捶援揪換摒揚揹敞敦敢散斑斐斯普晰晴晶景暑智晾晷曾替期朝棺棕棠棘棗椅棟棵森棧棹棒棲棣棋棍植椒椎棉棚楮棻款欺欽殘殖殼毯氮氯氬港游湔渡渲湧湊渠渥渣減湛湘渤湖湮渭渦湯渴湍渺測湃渝渾滋"
  ],
  [
    "b540",
    "溉渙湎湣湄湲湩湟焙焚焦焰無然煮焜牌犄犀猶猥猴猩琺琪琳琢琥琵琶琴琯琛琦琨甥甦畫番痢痛痣痙痘痞痠登發皖皓皴盜睏短硝硬硯稍稈程稅稀窘"
  ],
  [
    "b5a1",
    "窗窖童竣等策筆筐筒答筍筋筏筑粟粥絞結絨絕紫絮絲絡給絢絰絳善翔翕耋聒肅腕腔腋腑腎脹腆脾腌腓腴舒舜菩萃菸萍菠菅萋菁華菱菴著萊菰萌菌菽菲菊萸萎萄菜萇菔菟虛蛟蛙蛭蛔蛛蛤蛐蛞街裁裂袱覃視註詠評詞証詁"
  ],
  [
    "b640",
    "詔詛詐詆訴診訶詖象貂貯貼貳貽賁費賀貴買貶貿貸越超趁跎距跋跚跑跌跛跆軻軸軼辜逮逵週逸進逶鄂郵鄉郾酣酥量鈔鈕鈣鈉鈞鈍鈐鈇鈑閔閏開閑"
  ],
  [
    "b6a1",
    "間閒閎隊階隋陽隅隆隍陲隄雁雅雄集雇雯雲韌項順須飧飪飯飩飲飭馮馭黃黍黑亂傭債傲傳僅傾催傷傻傯僇剿剷剽募勦勤勢勣匯嗟嗨嗓嗦嗎嗜嗇嗑嗣嗤嗯嗚嗡嗅嗆嗥嗉園圓塞塑塘塗塚塔填塌塭塊塢塒塋奧嫁嫉嫌媾媽媼"
  ],
  [
    "b740",
    "媳嫂媲嵩嵯幌幹廉廈弒彙徬微愚意慈感想愛惹愁愈慎慌慄慍愾愴愧愍愆愷戡戢搓搾搞搪搭搽搬搏搜搔損搶搖搗搆敬斟新暗暉暇暈暖暄暘暍會榔業"
  ],
  [
    "b7a1",
    "楚楷楠楔極椰概楊楨楫楞楓楹榆楝楣楛歇歲毀殿毓毽溢溯滓溶滂源溝滇滅溥溘溼溺溫滑準溜滄滔溪溧溴煎煙煩煤煉照煜煬煦煌煥煞煆煨煖爺牒猷獅猿猾瑯瑚瑕瑟瑞瑁琿瑙瑛瑜當畸瘀痰瘁痲痱痺痿痴痳盞盟睛睫睦睞督"
  ],
  [
    "b840",
    "睹睪睬睜睥睨睢矮碎碰碗碘碌碉硼碑碓硿祺祿禁萬禽稜稚稠稔稟稞窟窠筷節筠筮筧粱粳粵經絹綑綁綏絛置罩罪署義羨群聖聘肆肄腱腰腸腥腮腳腫"
  ],
  [
    "b8a1",
    "腹腺腦舅艇蒂葷落萱葵葦葫葉葬葛萼萵葡董葩葭葆虞虜號蛹蜓蜈蜇蜀蛾蛻蜂蜃蜆蜊衙裟裔裙補裘裝裡裊裕裒覜解詫該詳試詩詰誇詼詣誠話誅詭詢詮詬詹詻訾詨豢貊貉賊資賈賄貲賃賂賅跡跟跨路跳跺跪跤跦躲較載軾輊"
  ],
  [
    "b940",
    "辟農運遊道遂達逼違遐遇遏過遍遑逾遁鄒鄗酬酪酩釉鈷鉗鈸鈽鉀鈾鉛鉋鉤鉑鈴鉉鉍鉅鈹鈿鉚閘隘隔隕雍雋雉雊雷電雹零靖靴靶預頑頓頊頒頌飼飴"
  ],
  [
    "b9a1",
    "飽飾馳馱馴髡鳩麂鼎鼓鼠僧僮僥僖僭僚僕像僑僱僎僩兢凳劃劂匱厭嗾嘀嘛嘗嗽嘔嘆嘉嘍嘎嗷嘖嘟嘈嘐嗶團圖塵塾境墓墊塹墅塽壽夥夢夤奪奩嫡嫦嫩嫗嫖嫘嫣孵寞寧寡寥實寨寢寤察對屢嶄嶇幛幣幕幗幔廓廖弊彆彰徹慇"
  ],
  [
    "ba40",
    "愿態慷慢慣慟慚慘慵截撇摘摔撤摸摟摺摑摧搴摭摻敲斡旗旖暢暨暝榜榨榕槁榮槓構榛榷榻榫榴槐槍榭槌榦槃榣歉歌氳漳演滾漓滴漩漾漠漬漏漂漢"
  ],
  [
    "baa1",
    "滿滯漆漱漸漲漣漕漫漯澈漪滬漁滲滌滷熔熙煽熊熄熒爾犒犖獄獐瑤瑣瑪瑰瑭甄疑瘧瘍瘋瘉瘓盡監瞄睽睿睡磁碟碧碳碩碣禎福禍種稱窪窩竭端管箕箋筵算箝箔箏箸箇箄粹粽精綻綰綜綽綾綠緊綴網綱綺綢綿綵綸維緒緇綬"
  ],
  [
    "bb40",
    "罰翠翡翟聞聚肇腐膀膏膈膊腿膂臧臺與舔舞艋蓉蒿蓆蓄蒙蒞蒲蒜蓋蒸蓀蓓蒐蒼蓑蓊蜿蜜蜻蜢蜥蜴蜘蝕蜷蜩裳褂裴裹裸製裨褚裯誦誌語誣認誡誓誤"
  ],
  [
    "bba1",
    "說誥誨誘誑誚誧豪貍貌賓賑賒赫趙趕跼輔輒輕輓辣遠遘遜遣遙遞遢遝遛鄙鄘鄞酵酸酷酴鉸銀銅銘銖鉻銓銜銨鉼銑閡閨閩閣閥閤隙障際雌雒需靼鞅韶頗領颯颱餃餅餌餉駁骯骰髦魁魂鳴鳶鳳麼鼻齊億儀僻僵價儂儈儉儅凜"
  ],
  [
    "bc40",
    "劇劈劉劍劊勰厲嘮嘻嘹嘲嘿嘴嘩噓噎噗噴嘶嘯嘰墀墟增墳墜墮墩墦奭嬉嫻嬋嫵嬌嬈寮寬審寫層履嶝嶔幢幟幡廢廚廟廝廣廠彈影德徵慶慧慮慝慕憂"
  ],
  [
    "bca1",
    "慼慰慫慾憧憐憫憎憬憚憤憔憮戮摩摯摹撞撲撈撐撰撥撓撕撩撒撮播撫撚撬撙撢撳敵敷數暮暫暴暱樣樟槨樁樞標槽模樓樊槳樂樅槭樑歐歎殤毅毆漿潼澄潑潦潔澆潭潛潸潮澎潺潰潤澗潘滕潯潠潟熟熬熱熨牖犛獎獗瑩璋璃"
  ],
  [
    "bd40",
    "瑾璀畿瘠瘩瘟瘤瘦瘡瘢皚皺盤瞎瞇瞌瞑瞋磋磅確磊碾磕碼磐稿稼穀稽稷稻窯窮箭箱範箴篆篇篁箠篌糊締練緯緻緘緬緝編緣線緞緩綞緙緲緹罵罷羯"
  ],
  [
    "bda1",
    "翩耦膛膜膝膠膚膘蔗蔽蔚蓮蔬蔭蔓蔑蔣蔡蔔蓬蔥蓿蔆螂蝴蝶蝠蝦蝸蝨蝙蝗蝌蝓衛衝褐複褒褓褕褊誼諒談諄誕請諸課諉諂調誰論諍誶誹諛豌豎豬賠賞賦賤賬賭賢賣賜質賡赭趟趣踫踐踝踢踏踩踟踡踞躺輝輛輟輩輦輪輜輞"
  ],
  [
    "be40",
    "輥適遮遨遭遷鄰鄭鄧鄱醇醉醋醃鋅銻銷鋪銬鋤鋁銳銼鋒鋇鋰銲閭閱霄霆震霉靠鞍鞋鞏頡頫頜颳養餓餒餘駝駐駟駛駑駕駒駙骷髮髯鬧魅魄魷魯鴆鴉"
  ],
  [
    "bea1",
    "鴃麩麾黎墨齒儒儘儔儐儕冀冪凝劑劓勳噙噫噹噩噤噸噪器噥噱噯噬噢噶壁墾壇壅奮嬝嬴學寰導彊憲憑憩憊懍憶憾懊懈戰擅擁擋撻撼據擄擇擂操撿擒擔撾整曆曉暹曄曇暸樽樸樺橙橫橘樹橄橢橡橋橇樵機橈歙歷氅濂澱澡"
  ],
  [
    "bf40",
    "濃澤濁澧澳激澹澶澦澠澴熾燉燐燒燈燕熹燎燙燜燃燄獨璜璣璘璟璞瓢甌甍瘴瘸瘺盧盥瞠瞞瞟瞥磨磚磬磧禦積穎穆穌穋窺篙簑築篤篛篡篩篦糕糖縊"
  ],
  [
    "bfa1",
    "縑縈縛縣縞縝縉縐罹羲翰翱翮耨膳膩膨臻興艘艙蕊蕙蕈蕨蕩蕃蕉蕭蕪蕞螃螟螞螢融衡褪褲褥褫褡親覦諦諺諫諱謀諜諧諮諾謁謂諷諭諳諶諼豫豭貓賴蹄踱踴蹂踹踵輻輯輸輳辨辦遵遴選遲遼遺鄴醒錠錶鋸錳錯錢鋼錫錄錚"
  ],
  [
    "c040",
    "錐錦錡錕錮錙閻隧隨險雕霎霑霖霍霓霏靛靜靦鞘頰頸頻頷頭頹頤餐館餞餛餡餚駭駢駱骸骼髻髭鬨鮑鴕鴣鴦鴨鴒鴛默黔龍龜優償儡儲勵嚎嚀嚐嚅嚇"
  ],
  [
    "c0a1",
    "嚏壕壓壑壎嬰嬪嬤孺尷屨嶼嶺嶽嶸幫彌徽應懂懇懦懋戲戴擎擊擘擠擰擦擬擱擢擭斂斃曙曖檀檔檄檢檜櫛檣橾檗檐檠歜殮毚氈濘濱濟濠濛濤濫濯澀濬濡濩濕濮濰燧營燮燦燥燭燬燴燠爵牆獰獲璩環璦璨癆療癌盪瞳瞪瞰瞬"
  ],
  [
    "c140",
    "瞧瞭矯磷磺磴磯礁禧禪穗窿簇簍篾篷簌篠糠糜糞糢糟糙糝縮績繆縷縲繃縫總縱繅繁縴縹繈縵縿縯罄翳翼聱聲聰聯聳臆臃膺臂臀膿膽臉膾臨舉艱薪"
  ],
  [
    "c1a1",
    "薄蕾薜薑薔薯薛薇薨薊虧蟀蟑螳蟒蟆螫螻螺蟈蟋褻褶襄褸褽覬謎謗謙講謊謠謝謄謐豁谿豳賺賽購賸賻趨蹉蹋蹈蹊轄輾轂轅輿避遽還邁邂邀鄹醣醞醜鍍鎂錨鍵鍊鍥鍋錘鍾鍬鍛鍰鍚鍔闊闋闌闈闆隱隸雖霜霞鞠韓顆颶餵騁"
  ],
  [
    "c240",
    "駿鮮鮫鮪鮭鴻鴿麋黏點黜黝黛鼾齋叢嚕嚮壙壘嬸彝懣戳擴擲擾攆擺擻擷斷曜朦檳檬櫃檻檸櫂檮檯歟歸殯瀉瀋濾瀆濺瀑瀏燻燼燾燸獷獵璧璿甕癖癘"
  ],
  [
    "c2a1",
    "癒瞽瞿瞻瞼礎禮穡穢穠竄竅簫簧簪簞簣簡糧織繕繞繚繡繒繙罈翹翻職聶臍臏舊藏薩藍藐藉薰薺薹薦蟯蟬蟲蟠覆覲觴謨謹謬謫豐贅蹙蹣蹦蹤蹟蹕軀轉轍邇邃邈醫醬釐鎔鎊鎖鎢鎳鎮鎬鎰鎘鎚鎗闔闖闐闕離雜雙雛雞霤鞣鞦"
  ],
  [
    "c340",
    "鞭韹額顏題顎顓颺餾餿餽餮馥騎髁鬃鬆魏魎魍鯊鯉鯽鯈鯀鵑鵝鵠黠鼕鼬儳嚥壞壟壢寵龐廬懲懷懶懵攀攏曠曝櫥櫝櫚櫓瀛瀟瀨瀚瀝瀕瀘爆爍牘犢獸"
  ],
  [
    "c3a1",
    "獺璽瓊瓣疇疆癟癡矇礙禱穫穩簾簿簸簽簷籀繫繭繹繩繪羅繳羶羹羸臘藩藝藪藕藤藥藷蟻蠅蠍蟹蟾襠襟襖襞譁譜識證譚譎譏譆譙贈贊蹼蹲躇蹶蹬蹺蹴轔轎辭邊邋醱醮鏡鏑鏟鏃鏈鏜鏝鏖鏢鏍鏘鏤鏗鏨關隴難霪霧靡韜韻類"
  ],
  [
    "c440",
    "願顛颼饅饉騖騙鬍鯨鯧鯖鯛鶉鵡鵲鵪鵬麒麗麓麴勸嚨嚷嚶嚴嚼壤孀孃孽寶巉懸懺攘攔攙曦朧櫬瀾瀰瀲爐獻瓏癢癥礦礪礬礫竇競籌籃籍糯糰辮繽繼"
  ],
  [
    "c4a1",
    "纂罌耀臚艦藻藹蘑藺蘆蘋蘇蘊蠔蠕襤覺觸議譬警譯譟譫贏贍躉躁躅躂醴釋鐘鐃鏽闡霰飄饒饑馨騫騰騷騵鰓鰍鹹麵黨鼯齟齣齡儷儸囁囀囂夔屬巍懼懾攝攜斕曩櫻欄櫺殲灌爛犧瓖瓔癩矓籐纏續羼蘗蘭蘚蠣蠢蠡蠟襪襬覽譴"
  ],
  [
    "c540",
    "護譽贓躊躍躋轟辯醺鐮鐳鐵鐺鐸鐲鐫闢霸霹露響顧顥饗驅驃驀騾髏魔魑鰭鰥鶯鶴鷂鶸麝黯鼙齜齦齧儼儻囈囊囉孿巔巒彎懿攤權歡灑灘玀瓤疊癮癬"
  ],
  [
    "c5a1",
    "禳籠籟聾聽臟襲襯觼讀贖贗躑躓轡酈鑄鑑鑒霽霾韃韁顫饕驕驍髒鬚鱉鰱鰾鰻鷓鷗鼴齬齪龔囌巖戀攣攫攪曬欐瓚竊籤籣籥纓纖纔臢蘸蘿蠱變邐邏鑣鑠鑤靨顯饜驚驛驗髓體髑鱔鱗鱖鷥麟黴囑壩攬灞癱癲矗罐羈蠶蠹衢讓讒"
  ],
  [
    "c640",
    "讖艷贛釀鑪靂靈靄韆顰驟鬢魘鱟鷹鷺鹼鹽鼇齷齲廳欖灣籬籮蠻觀躡釁鑲鑰顱饞髖鬣黌灤矚讚鑷韉驢驥纜讜躪釅鑽鑾鑼鱷鱸黷豔鑿鸚爨驪鬱鸛鸞籲"
  ],
  [
    "c940",
    "乂乜凵匚厂万丌乇亍囗兀屮彳丏冇与丮亓仂仉仈冘勼卬厹圠夃夬尐巿旡殳毌气爿丱丼仨仜仩仡仝仚刌匜卌圢圣夗夯宁宄尒尻屴屳帄庀庂忉戉扐氕"
  ],
  [
    "c9a1",
    "氶汃氿氻犮犰玊禸肊阞伎优伬仵伔仱伀价伈伝伂伅伢伓伄仴伒冱刓刉刐劦匢匟卍厊吇囡囟圮圪圴夼妀奼妅奻奾奷奿孖尕尥屼屺屻屾巟幵庄异弚彴忕忔忏扜扞扤扡扦扢扙扠扚扥旯旮朾朹朸朻机朿朼朳氘汆汒汜汏汊汔汋"
  ],
  [
    "ca40",
    "汌灱牞犴犵玎甪癿穵网艸艼芀艽艿虍襾邙邗邘邛邔阢阤阠阣佖伻佢佉体佤伾佧佒佟佁佘伭伳伿佡冏冹刜刞刡劭劮匉卣卲厎厏吰吷吪呔呅吙吜吥吘"
  ],
  [
    "caa1",
    "吽呏呁吨吤呇囮囧囥坁坅坌坉坋坒夆奀妦妘妠妗妎妢妐妏妧妡宎宒尨尪岍岏岈岋岉岒岊岆岓岕巠帊帎庋庉庌庈庍弅弝彸彶忒忑忐忭忨忮忳忡忤忣忺忯忷忻怀忴戺抃抌抎抏抔抇扱扻扺扰抁抈扷扽扲扴攷旰旴旳旲旵杅杇"
  ],
  [
    "cb40",
    "杙杕杌杈杝杍杚杋毐氙氚汸汧汫沄沋沏汱汯汩沚汭沇沕沜汦汳汥汻沎灴灺牣犿犽狃狆狁犺狅玕玗玓玔玒町甹疔疕皁礽耴肕肙肐肒肜芐芏芅芎芑芓"
  ],
  [
    "cba1",
    "芊芃芄豸迉辿邟邡邥邞邧邠阰阨阯阭丳侘佼侅佽侀侇佶佴侉侄佷佌侗佪侚佹侁佸侐侜侔侞侒侂侕佫佮冞冼冾刵刲刳剆刱劼匊匋匼厒厔咇呿咁咑咂咈呫呺呾呥呬呴呦咍呯呡呠咘呣呧呤囷囹坯坲坭坫坱坰坶垀坵坻坳坴坢"
  ],
  [
    "cc40",
    "坨坽夌奅妵妺姏姎妲姌姁妶妼姃姖妱妽姀姈妴姇孢孥宓宕屄屇岮岤岠岵岯岨岬岟岣岭岢岪岧岝岥岶岰岦帗帔帙弨弢弣弤彔徂彾彽忞忥怭怦怙怲怋"
  ],
  [
    "cca1",
    "怴怊怗怳怚怞怬怢怍怐怮怓怑怌怉怜戔戽抭抴拑抾抪抶拊抮抳抯抻抩抰抸攽斨斻昉旼昄昒昈旻昃昋昍昅旽昑昐曶朊枅杬枎枒杶杻枘枆构杴枍枌杺枟枑枙枃杽极杸杹枔欥殀歾毞氝沓泬泫泮泙沶泔沭泧沷泐泂沺泃泆泭泲"
  ],
  [
    "cd40",
    "泒泝沴沊沝沀泞泀洰泍泇沰泹泏泩泑炔炘炅炓炆炄炑炖炂炚炃牪狖狋狘狉狜狒狔狚狌狑玤玡玭玦玢玠玬玝瓝瓨甿畀甾疌疘皯盳盱盰盵矸矼矹矻矺"
  ],
  [
    "cda1",
    "矷祂礿秅穸穻竻籵糽耵肏肮肣肸肵肭舠芠苀芫芚芘芛芵芧芮芼芞芺芴芨芡芩苂芤苃芶芢虰虯虭虮豖迒迋迓迍迖迕迗邲邴邯邳邰阹阽阼阺陃俍俅俓侲俉俋俁俔俜俙侻侳俛俇俖侺俀侹俬剄剉勀勂匽卼厗厖厙厘咺咡咭咥哏"
  ],
  [
    "ce40",
    "哃茍咷咮哖咶哅哆咠呰咼咢咾呲哞咰垵垞垟垤垌垗垝垛垔垘垏垙垥垚垕壴复奓姡姞姮娀姱姝姺姽姼姶姤姲姷姛姩姳姵姠姾姴姭宨屌峐峘峌峗峋峛"
  ],
  [
    "cea1",
    "峞峚峉峇峊峖峓峔峏峈峆峎峟峸巹帡帢帣帠帤庰庤庢庛庣庥弇弮彖徆怷怹恔恲恞恅恓恇恉恛恌恀恂恟怤恄恘恦恮扂扃拏挍挋拵挎挃拫拹挏挌拸拶挀挓挔拺挕拻拰敁敃斪斿昶昡昲昵昜昦昢昳昫昺昝昴昹昮朏朐柁柲柈枺"
  ],
  [
    "cf40",
    "柜枻柸柘柀枷柅柫柤柟枵柍枳柷柶柮柣柂枹柎柧柰枲柼柆柭柌枮柦柛柺柉柊柃柪柋欨殂殄殶毖毘毠氠氡洨洴洭洟洼洿洒洊泚洳洄洙洺洚洑洀洝浂"
  ],
  [
    "cfa1",
    "洁洘洷洃洏浀洇洠洬洈洢洉洐炷炟炾炱炰炡炴炵炩牁牉牊牬牰牳牮狊狤狨狫狟狪狦狣玅珌珂珈珅玹玶玵玴珫玿珇玾珃珆玸珋瓬瓮甮畇畈疧疪癹盄眈眃眄眅眊盷盻盺矧矨砆砑砒砅砐砏砎砉砃砓祊祌祋祅祄秕种秏秖秎窀"
  ],
  [
    "d040",
    "穾竑笀笁籺籸籹籿粀粁紃紈紁罘羑羍羾耇耎耏耔耷胘胇胠胑胈胂胐胅胣胙胜胊胕胉胏胗胦胍臿舡芔苙苾苹茇苨茀苕茺苫苖苴苬苡苲苵茌苻苶苰苪"
  ],
  [
    "d0a1",
    "苤苠苺苳苭虷虴虼虳衁衎衧衪衩觓訄訇赲迣迡迮迠郱邽邿郕郅邾郇郋郈釔釓陔陏陑陓陊陎倞倅倇倓倢倰倛俵俴倳倷倬俶俷倗倜倠倧倵倯倱倎党冔冓凊凄凅凈凎剡剚剒剞剟剕剢勍匎厞唦哢唗唒哧哳哤唚哿唄唈哫唑唅哱"
  ],
  [
    "d140",
    "唊哻哷哸哠唎唃唋圁圂埌堲埕埒垺埆垽垼垸垶垿埇埐垹埁夎奊娙娖娭娮娕娏娗娊娞娳孬宧宭宬尃屖屔峬峿峮峱峷崀峹帩帨庨庮庪庬弳弰彧恝恚恧"
  ],
  [
    "d1a1",
    "恁悢悈悀悒悁悝悃悕悛悗悇悜悎戙扆拲挐捖挬捄捅挶捃揤挹捋捊挼挩捁挴捘捔捙挭捇挳捚捑挸捗捀捈敊敆旆旃旄旂晊晟晇晑朒朓栟栚桉栲栳栻桋桏栖栱栜栵栫栭栯桎桄栴栝栒栔栦栨栮桍栺栥栠欬欯欭欱欴歭肂殈毦毤"
  ],
  [
    "d240",
    "毨毣毢毧氥浺浣浤浶洍浡涒浘浢浭浯涑涍淯浿涆浞浧浠涗浰浼浟涂涘洯浨涋浾涀涄洖涃浻浽浵涐烜烓烑烝烋缹烢烗烒烞烠烔烍烅烆烇烚烎烡牂牸"
  ],
  [
    "d2a1",
    "牷牶猀狺狴狾狶狳狻猁珓珙珥珖玼珧珣珩珜珒珛珔珝珚珗珘珨瓞瓟瓴瓵甡畛畟疰痁疻痄痀疿疶疺皊盉眝眛眐眓眒眣眑眕眙眚眢眧砣砬砢砵砯砨砮砫砡砩砳砪砱祔祛祏祜祓祒祑秫秬秠秮秭秪秜秞秝窆窉窅窋窌窊窇竘笐"
  ],
  [
    "d340",
    "笄笓笅笏笈笊笎笉笒粄粑粊粌粈粍粅紞紝紑紎紘紖紓紟紒紏紌罜罡罞罠罝罛羖羒翃翂翀耖耾耹胺胲胹胵脁胻脀舁舯舥茳茭荄茙荑茥荖茿荁茦茜茢"
  ],
  [
    "d3a1",
    "荂荎茛茪茈茼荍茖茤茠茷茯茩荇荅荌荓茞茬荋茧荈虓虒蚢蚨蚖蚍蚑蚞蚇蚗蚆蚋蚚蚅蚥蚙蚡蚧蚕蚘蚎蚝蚐蚔衃衄衭衵衶衲袀衱衿衯袃衾衴衼訒豇豗豻貤貣赶赸趵趷趶軑軓迾迵适迿迻逄迼迶郖郠郙郚郣郟郥郘郛郗郜郤酐"
  ],
  [
    "d440",
    "酎酏釕釢釚陜陟隼飣髟鬯乿偰偪偡偞偠偓偋偝偲偈偍偁偛偊偢倕偅偟偩偫偣偤偆偀偮偳偗偑凐剫剭剬剮勖勓匭厜啵啶唼啍啐唴唪啑啢唶唵唰啒啅"
  ],
  [
    "d4a1",
    "唌唲啥啎唹啈唭唻啀啋圊圇埻堔埢埶埜埴堀埭埽堈埸堋埳埏堇埮埣埲埥埬埡堎埼堐埧堁堌埱埩埰堍堄奜婠婘婕婧婞娸娵婭婐婟婥婬婓婤婗婃婝婒婄婛婈媎娾婍娹婌婰婩婇婑婖婂婜孲孮寁寀屙崞崋崝崚崠崌崨崍崦崥崏"
  ],
  [
    "d540",
    "崰崒崣崟崮帾帴庱庴庹庲庳弶弸徛徖徟悊悐悆悾悰悺惓惔惏惤惙惝惈悱惛悷惊悿惃惍惀挲捥掊掂捽掽掞掭掝掗掫掎捯掇掐据掯捵掜捭掮捼掤挻掟"
  ],
  [
    "d5a1",
    "捸掅掁掑掍捰敓旍晥晡晛晙晜晢朘桹梇梐梜桭桮梮梫楖桯梣梬梩桵桴梲梏桷梒桼桫桲梪梀桱桾梛梖梋梠梉梤桸桻梑梌梊桽欶欳欷欸殑殏殍殎殌氪淀涫涴涳湴涬淩淢涷淶淔渀淈淠淟淖涾淥淜淝淛淴淊涽淭淰涺淕淂淏淉"
  ],
  [
    "d640",
    "淐淲淓淽淗淍淣涻烺焍烷焗烴焌烰焄烳焐烼烿焆焓焀烸烶焋焂焎牾牻牼牿猝猗猇猑猘猊猈狿猏猞玈珶珸珵琄琁珽琇琀珺珼珿琌琋珴琈畤畣痎痒痏"
  ],
  [
    "d6a1",
    "痋痌痑痐皏皉盓眹眯眭眱眲眴眳眽眥眻眵硈硒硉硍硊硌砦硅硐祤祧祩祪祣祫祡离秺秸秶秷窏窔窐笵筇笴笥笰笢笤笳笘笪笝笱笫笭笯笲笸笚笣粔粘粖粣紵紽紸紶紺絅紬紩絁絇紾紿絊紻紨罣羕羜羝羛翊翋翍翐翑翇翏翉耟"
  ],
  [
    "d740",
    "耞耛聇聃聈脘脥脙脛脭脟脬脞脡脕脧脝脢舑舸舳舺舴舲艴莐莣莨莍荺荳莤荴莏莁莕莙荵莔莩荽莃莌莝莛莪莋荾莥莯莈莗莰荿莦莇莮荶莚虙虖蚿蚷"
  ],
  [
    "d7a1",
    "蛂蛁蛅蚺蚰蛈蚹蚳蚸蛌蚴蚻蚼蛃蚽蚾衒袉袕袨袢袪袚袑袡袟袘袧袙袛袗袤袬袌袓袎覂觖觙觕訰訧訬訞谹谻豜豝豽貥赽赻赹趼跂趹趿跁軘軞軝軜軗軠軡逤逋逑逜逌逡郯郪郰郴郲郳郔郫郬郩酖酘酚酓酕釬釴釱釳釸釤釹釪"
  ],
  [
    "d840",
    "釫釷釨釮镺閆閈陼陭陫陱陯隿靪頄飥馗傛傕傔傞傋傣傃傌傎傝偨傜傒傂傇兟凔匒匑厤厧喑喨喥喭啷噅喢喓喈喏喵喁喣喒喤啽喌喦啿喕喡喎圌堩堷"
  ],
  [
    "d8a1",
    "堙堞堧堣堨埵塈堥堜堛堳堿堶堮堹堸堭堬堻奡媯媔媟婺媢媞婸媦婼媥媬媕媮娷媄媊媗媃媋媩婻婽媌媜媏媓媝寪寍寋寔寑寊寎尌尰崷嵃嵫嵁嵋崿崵嵑嵎嵕崳崺嵒崽崱嵙嵂崹嵉崸崼崲崶嵀嵅幄幁彘徦徥徫惉悹惌惢惎惄愔"
  ],
  [
    "d940",
    "惲愊愖愅惵愓惸惼惾惁愃愘愝愐惿愄愋扊掔掱掰揎揥揨揯揃撝揳揊揠揶揕揲揵摡揟掾揝揜揄揘揓揂揇揌揋揈揰揗揙攲敧敪敤敜敨敥斌斝斞斮旐旒"
  ],
  [
    "d9a1",
    "晼晬晻暀晱晹晪晲朁椌棓椄棜椪棬棪棱椏棖棷棫棤棶椓椐棳棡椇棌椈楰梴椑棯棆椔棸棐棽棼棨椋椊椗棎棈棝棞棦棴棑椆棔棩椕椥棇欹欻欿欼殔殗殙殕殽毰毲毳氰淼湆湇渟湉溈渼渽湅湢渫渿湁湝湳渜渳湋湀湑渻渃渮湞"
  ],
  [
    "da40",
    "湨湜湡渱渨湠湱湫渹渢渰湓湥渧湸湤湷湕湹湒湦渵渶湚焠焞焯烻焮焱焣焥焢焲焟焨焺焛牋牚犈犉犆犅犋猒猋猰猢猱猳猧猲猭猦猣猵猌琮琬琰琫琖"
  ],
  [
    "daa1",
    "琚琡琭琱琤琣琝琩琠琲瓻甯畯畬痧痚痡痦痝痟痤痗皕皒盚睆睇睄睍睅睊睎睋睌矞矬硠硤硥硜硭硱硪确硰硩硨硞硢祴祳祲祰稂稊稃稌稄窙竦竤筊笻筄筈筌筎筀筘筅粢粞粨粡絘絯絣絓絖絧絪絏絭絜絫絒絔絩絑絟絎缾缿罥"
  ],
  [
    "db40",
    "罦羢羠羡翗聑聏聐胾胔腃腊腒腏腇脽腍脺臦臮臷臸臹舄舼舽舿艵茻菏菹萣菀菨萒菧菤菼菶萐菆菈菫菣莿萁菝菥菘菿菡菋菎菖菵菉萉萏菞萑萆菂菳"
  ],
  [
    "dba1",
    "菕菺菇菑菪萓菃菬菮菄菻菗菢萛菛菾蛘蛢蛦蛓蛣蛚蛪蛝蛫蛜蛬蛩蛗蛨蛑衈衖衕袺裗袹袸裀袾袶袼袷袽袲褁裉覕覘覗觝觚觛詎詍訹詙詀詗詘詄詅詒詈詑詊詌詏豟貁貀貺貾貰貹貵趄趀趉跘跓跍跇跖跜跏跕跙跈跗跅軯軷軺"
  ],
  [
    "dc40",
    "軹軦軮軥軵軧軨軶軫軱軬軴軩逭逴逯鄆鄬鄄郿郼鄈郹郻鄁鄀鄇鄅鄃酡酤酟酢酠鈁鈊鈥鈃鈚鈦鈏鈌鈀鈒釿釽鈆鈄鈧鈂鈜鈤鈙鈗鈅鈖镻閍閌閐隇陾隈"
  ],
  [
    "dca1",
    "隉隃隀雂雈雃雱雰靬靰靮頇颩飫鳦黹亃亄亶傽傿僆傮僄僊傴僈僂傰僁傺傱僋僉傶傸凗剺剸剻剼嗃嗛嗌嗐嗋嗊嗝嗀嗔嗄嗩喿嗒喍嗏嗕嗢嗖嗈嗲嗍嗙嗂圔塓塨塤塏塍塉塯塕塎塝塙塥塛堽塣塱壼嫇嫄嫋媺媸媱媵媰媿嫈媻嫆"
  ],
  [
    "dd40",
    "媷嫀嫊媴媶嫍媹媐寖寘寙尟尳嵱嵣嵊嵥嵲嵬嵞嵨嵧嵢巰幏幎幊幍幋廅廌廆廋廇彀徯徭惷慉慊愫慅愶愲愮慆愯慏愩慀戠酨戣戥戤揅揱揫搐搒搉搠搤"
  ],
  [
    "dda1",
    "搳摃搟搕搘搹搷搢搣搌搦搰搨摁搵搯搊搚摀搥搧搋揧搛搮搡搎敯斒旓暆暌暕暐暋暊暙暔晸朠楦楟椸楎楢楱椿楅楪椹楂楗楙楺楈楉椵楬椳椽楥棰楸椴楩楀楯楄楶楘楁楴楌椻楋椷楜楏楑椲楒椯楻椼歆歅歃歂歈歁殛嗀毻毼"
  ],
  [
    "de40",
    "毹毷毸溛滖滈溏滀溟溓溔溠溱溹滆滒溽滁溞滉溷溰滍溦滏溲溾滃滜滘溙溒溎溍溤溡溿溳滐滊溗溮溣煇煔煒煣煠煁煝煢煲煸煪煡煂煘煃煋煰煟煐煓"
  ],
  [
    "dea1",
    "煄煍煚牏犍犌犑犐犎猼獂猻猺獀獊獉瑄瑊瑋瑒瑑瑗瑀瑏瑐瑎瑂瑆瑍瑔瓡瓿瓾瓽甝畹畷榃痯瘏瘃痷痾痼痹痸瘐痻痶痭痵痽皙皵盝睕睟睠睒睖睚睩睧睔睙睭矠碇碚碔碏碄碕碅碆碡碃硹碙碀碖硻祼禂祽祹稑稘稙稒稗稕稢稓"
  ],
  [
    "df40",
    "稛稐窣窢窞竫筦筤筭筴筩筲筥筳筱筰筡筸筶筣粲粴粯綈綆綀綍絿綅絺綎絻綃絼綌綔綄絽綒罭罫罧罨罬羦羥羧翛翜耡腤腠腷腜腩腛腢腲朡腞腶腧腯"
  ],
  [
    "dfa1",
    "腄腡舝艉艄艀艂艅蓱萿葖葶葹蒏蒍葥葑葀蒆葧萰葍葽葚葙葴葳葝蔇葞萷萺萴葺葃葸萲葅萩菙葋萯葂萭葟葰萹葎葌葒葯蓅蒎萻葇萶萳葨葾葄萫葠葔葮葐蜋蜄蛷蜌蛺蛖蛵蝍蛸蜎蜉蜁蛶蜍蜅裖裋裍裎裞裛裚裌裐覅覛觟觥觤"
  ],
  [
    "e040",
    "觡觠觢觜触詶誆詿詡訿詷誂誄詵誃誁詴詺谼豋豊豥豤豦貆貄貅賌赨赩趑趌趎趏趍趓趔趐趒跰跠跬跱跮跐跩跣跢跧跲跫跴輆軿輁輀輅輇輈輂輋遒逿"
  ],
  [
    "e0a1",
    "遄遉逽鄐鄍鄏鄑鄖鄔鄋鄎酮酯鉈鉒鈰鈺鉦鈳鉥鉞銃鈮鉊鉆鉭鉬鉏鉠鉧鉯鈶鉡鉰鈱鉔鉣鉐鉲鉎鉓鉌鉖鈲閟閜閞閛隒隓隑隗雎雺雽雸雵靳靷靸靲頏頍頎颬飶飹馯馲馰馵骭骫魛鳪鳭鳧麀黽僦僔僗僨僳僛僪僝僤僓僬僰僯僣僠"
  ],
  [
    "e140",
    "凘劀劁勩勫匰厬嘧嘕嘌嘒嗼嘏嘜嘁嘓嘂嗺嘝嘄嗿嗹墉塼墐墘墆墁塿塴墋塺墇墑墎塶墂墈塻墔墏壾奫嫜嫮嫥嫕嫪嫚嫭嫫嫳嫢嫠嫛嫬嫞嫝嫙嫨嫟孷寠"
  ],
  [
    "e1a1",
    "寣屣嶂嶀嵽嶆嵺嶁嵷嶊嶉嶈嵾嵼嶍嵹嵿幘幙幓廘廑廗廎廜廕廙廒廔彄彃彯徶愬愨慁慞慱慳慒慓慲慬憀慴慔慺慛慥愻慪慡慖戩戧戫搫摍摛摝摴摶摲摳摽摵摦撦摎撂摞摜摋摓摠摐摿搿摬摫摙摥摷敳斠暡暠暟朅朄朢榱榶槉"
  ],
  [
    "e240",
    "榠槎榖榰榬榼榑榙榎榧榍榩榾榯榿槄榽榤槔榹槊榚槏榳榓榪榡榞槙榗榐槂榵榥槆歊歍歋殞殟殠毃毄毾滎滵滱漃漥滸漷滻漮漉潎漙漚漧漘漻漒滭漊"
  ],
  [
    "e2a1",
    "漶潳滹滮漭潀漰漼漵滫漇漎潃漅滽滶漹漜滼漺漟漍漞漈漡熇熐熉熀熅熂熏煻熆熁熗牄牓犗犕犓獃獍獑獌瑢瑳瑱瑵瑲瑧瑮甀甂甃畽疐瘖瘈瘌瘕瘑瘊瘔皸瞁睼瞅瞂睮瞀睯睾瞃碲碪碴碭碨硾碫碞碥碠碬碢碤禘禊禋禖禕禔禓"
  ],
  [
    "e340",
    "禗禈禒禐稫穊稰稯稨稦窨窫窬竮箈箜箊箑箐箖箍箌箛箎箅箘劄箙箤箂粻粿粼粺綧綷緂綣綪緁緀緅綝緎緄緆緋緌綯綹綖綼綟綦綮綩綡緉罳翢翣翥翞"
  ],
  [
    "e3a1",
    "耤聝聜膉膆膃膇膍膌膋舕蒗蒤蒡蒟蒺蓎蓂蒬蒮蒫蒹蒴蓁蓍蒪蒚蒱蓐蒝蒧蒻蒢蒔蓇蓌蒛蒩蒯蒨蓖蒘蒶蓏蒠蓗蓔蓒蓛蒰蒑虡蜳蜣蜨蝫蝀蜮蜞蜡蜙蜛蝃蜬蝁蜾蝆蜠蜲蜪蜭蜼蜒蜺蜱蜵蝂蜦蜧蜸蜤蜚蜰蜑裷裧裱裲裺裾裮裼裶裻"
  ],
  [
    "e440",
    "裰裬裫覝覡覟覞觩觫觨誫誙誋誒誏誖谽豨豩賕賏賗趖踉踂跿踍跽踊踃踇踆踅跾踀踄輐輑輎輍鄣鄜鄠鄢鄟鄝鄚鄤鄡鄛酺酲酹酳銥銤鉶銛鉺銠銔銪銍"
  ],
  [
    "e4a1",
    "銦銚銫鉹銗鉿銣鋮銎銂銕銢鉽銈銡銊銆銌銙銧鉾銇銩銝銋鈭隞隡雿靘靽靺靾鞃鞀鞂靻鞄鞁靿韎韍頖颭颮餂餀餇馝馜駃馹馻馺駂馽駇骱髣髧鬾鬿魠魡魟鳱鳲鳵麧僿儃儰僸儆儇僶僾儋儌僽儊劋劌勱勯噈噂噌嘵噁噊噉噆噘"
  ],
  [
    "e540",
    "噚噀嘳嘽嘬嘾嘸嘪嘺圚墫墝墱墠墣墯墬墥墡壿嫿嫴嫽嫷嫶嬃嫸嬂嫹嬁嬇嬅嬏屧嶙嶗嶟嶒嶢嶓嶕嶠嶜嶡嶚嶞幩幝幠幜緳廛廞廡彉徲憋憃慹憱憰憢憉"
  ],
  [
    "e5a1",
    "憛憓憯憭憟憒憪憡憍慦憳戭摮摰撖撠撅撗撜撏撋撊撌撣撟摨撱撘敶敺敹敻斲斳暵暰暩暲暷暪暯樀樆樗槥槸樕槱槤樠槿槬槢樛樝槾樧槲槮樔槷槧橀樈槦槻樍槼槫樉樄樘樥樏槶樦樇槴樖歑殥殣殢殦氁氀毿氂潁漦潾澇濆澒"
  ],
  [
    "e640",
    "澍澉澌潢潏澅潚澖潶潬澂潕潲潒潐潗澔澓潝漀潡潫潽潧澐潓澋潩潿澕潣潷潪潻熲熯熛熰熠熚熩熵熝熥熞熤熡熪熜熧熳犘犚獘獒獞獟獠獝獛獡獚獙"
  ],
  [
    "e6a1",
    "獢璇璉璊璆璁瑽璅璈瑼瑹甈甇畾瘥瘞瘙瘝瘜瘣瘚瘨瘛皜皝皞皛瞍瞏瞉瞈磍碻磏磌磑磎磔磈磃磄磉禚禡禠禜禢禛歶稹窲窴窳箷篋箾箬篎箯箹篊箵糅糈糌糋緷緛緪緧緗緡縃緺緦緶緱緰緮緟罶羬羰羭翭翫翪翬翦翨聤聧膣膟"
  ],
  [
    "e740",
    "膞膕膢膙膗舖艏艓艒艐艎艑蔤蔻蔏蔀蔩蔎蔉蔍蔟蔊蔧蔜蓻蔫蓺蔈蔌蓴蔪蓲蔕蓷蓫蓳蓼蔒蓪蓩蔖蓾蔨蔝蔮蔂蓽蔞蓶蔱蔦蓧蓨蓰蓯蓹蔘蔠蔰蔋蔙蔯虢"
  ],
  [
    "e7a1",
    "蝖蝣蝤蝷蟡蝳蝘蝔蝛蝒蝡蝚蝑蝞蝭蝪蝐蝎蝟蝝蝯蝬蝺蝮蝜蝥蝏蝻蝵蝢蝧蝩衚褅褌褔褋褗褘褙褆褖褑褎褉覢覤覣觭觰觬諏諆誸諓諑諔諕誻諗誾諀諅諘諃誺誽諙谾豍貏賥賟賙賨賚賝賧趠趜趡趛踠踣踥踤踮踕踛踖踑踙踦踧"
  ],
  [
    "e840",
    "踔踒踘踓踜踗踚輬輤輘輚輠輣輖輗遳遰遯遧遫鄯鄫鄩鄪鄲鄦鄮醅醆醊醁醂醄醀鋐鋃鋄鋀鋙銶鋏鋱鋟鋘鋩鋗鋝鋌鋯鋂鋨鋊鋈鋎鋦鋍鋕鋉鋠鋞鋧鋑鋓"
  ],
  [
    "e8a1",
    "銵鋡鋆銴镼閬閫閮閰隤隢雓霅霈霂靚鞊鞎鞈韐韏頞頝頦頩頨頠頛頧颲餈飺餑餔餖餗餕駜駍駏駓駔駎駉駖駘駋駗駌骳髬髫髳髲髱魆魃魧魴魱魦魶魵魰魨魤魬鳼鳺鳽鳿鳷鴇鴀鳹鳻鴈鴅鴄麃黓鼏鼐儜儓儗儚儑凞匴叡噰噠噮"
  ],
  [
    "e940",
    "噳噦噣噭噲噞噷圜圛壈墽壉墿墺壂墼壆嬗嬙嬛嬡嬔嬓嬐嬖嬨嬚嬠嬞寯嶬嶱嶩嶧嶵嶰嶮嶪嶨嶲嶭嶯嶴幧幨幦幯廩廧廦廨廥彋徼憝憨憖懅憴懆懁懌憺"
  ],
  [
    "e9a1",
    "憿憸憌擗擖擐擏擉撽撉擃擛擳擙攳敿敼斢曈暾曀曊曋曏暽暻暺曌朣樴橦橉橧樲橨樾橝橭橶橛橑樨橚樻樿橁橪橤橐橏橔橯橩橠樼橞橖橕橍橎橆歕歔歖殧殪殫毈毇氄氃氆澭濋澣濇澼濎濈潞濄澽澞濊澨瀄澥澮澺澬澪濏澿澸"
  ],
  [
    "ea40",
    "澢濉澫濍澯澲澰燅燂熿熸燖燀燁燋燔燊燇燏熽燘熼燆燚燛犝犞獩獦獧獬獥獫獪瑿璚璠璔璒璕璡甋疀瘯瘭瘱瘽瘳瘼瘵瘲瘰皻盦瞚瞝瞡瞜瞛瞢瞣瞕瞙"
  ],
  [
    "eaa1",
    "瞗磝磩磥磪磞磣磛磡磢磭磟磠禤穄穈穇窶窸窵窱窷篞篣篧篝篕篥篚篨篹篔篪篢篜篫篘篟糒糔糗糐糑縒縡縗縌縟縠縓縎縜縕縚縢縋縏縖縍縔縥縤罃罻罼罺羱翯耪耩聬膱膦膮膹膵膫膰膬膴膲膷膧臲艕艖艗蕖蕅蕫蕍蕓蕡蕘"
  ],
  [
    "eb40",
    "蕀蕆蕤蕁蕢蕄蕑蕇蕣蔾蕛蕱蕎蕮蕵蕕蕧蕠薌蕦蕝蕔蕥蕬虣虥虤螛螏螗螓螒螈螁螖螘蝹螇螣螅螐螑螝螄螔螜螚螉褞褦褰褭褮褧褱褢褩褣褯褬褟觱諠"
  ],
  [
    "eba1",
    "諢諲諴諵諝謔諤諟諰諈諞諡諨諿諯諻貑貒貐賵賮賱賰賳赬赮趥趧踳踾踸蹀蹅踶踼踽蹁踰踿躽輶輮輵輲輹輷輴遶遹遻邆郺鄳鄵鄶醓醐醑醍醏錧錞錈錟錆錏鍺錸錼錛錣錒錁鍆錭錎錍鋋錝鋺錥錓鋹鋷錴錂錤鋿錩錹錵錪錔錌"
  ],
  [
    "ec40",
    "錋鋾錉錀鋻錖閼闍閾閹閺閶閿閵閽隩雔霋霒霐鞙鞗鞔韰韸頵頯頲餤餟餧餩馞駮駬駥駤駰駣駪駩駧骹骿骴骻髶髺髹髷鬳鮀鮅鮇魼魾魻鮂鮓鮒鮐魺鮕"
  ],
  [
    "eca1",
    "魽鮈鴥鴗鴠鴞鴔鴩鴝鴘鴢鴐鴙鴟麈麆麇麮麭黕黖黺鼒鼽儦儥儢儤儠儩勴嚓嚌嚍嚆嚄嚃噾嚂噿嚁壖壔壏壒嬭嬥嬲嬣嬬嬧嬦嬯嬮孻寱寲嶷幬幪徾徻懃憵憼懧懠懥懤懨懞擯擩擣擫擤擨斁斀斶旚曒檍檖檁檥檉檟檛檡檞檇檓檎"
  ],
  [
    "ed40",
    "檕檃檨檤檑橿檦檚檅檌檒歛殭氉濌澩濴濔濣濜濭濧濦濞濲濝濢濨燡燱燨燲燤燰燢獳獮獯璗璲璫璐璪璭璱璥璯甐甑甒甏疄癃癈癉癇皤盩瞵瞫瞲瞷瞶"
  ],
  [
    "eda1",
    "瞴瞱瞨矰磳磽礂磻磼磲礅磹磾礄禫禨穜穛穖穘穔穚窾竀竁簅簏篲簀篿篻簎篴簋篳簂簉簃簁篸篽簆篰篱簐簊糨縭縼繂縳顈縸縪繉繀繇縩繌縰縻縶繄縺罅罿罾罽翴翲耬膻臄臌臊臅臇膼臩艛艚艜薃薀薏薧薕薠薋薣蕻薤薚薞"
  ],
  [
    "ee40",
    "蕷蕼薉薡蕺蕸蕗薎薖薆薍薙薝薁薢薂薈薅蕹蕶薘薐薟虨螾螪螭蟅螰螬螹螵螼螮蟉蟃蟂蟌螷螯蟄蟊螴螶螿螸螽蟞螲褵褳褼褾襁襒褷襂覭覯覮觲觳謞"
  ],
  [
    "eea1",
    "謘謖謑謅謋謢謏謒謕謇謍謈謆謜謓謚豏豰豲豱豯貕貔賹赯蹎蹍蹓蹐蹌蹇轃轀邅遾鄸醚醢醛醙醟醡醝醠鎡鎃鎯鍤鍖鍇鍼鍘鍜鍶鍉鍐鍑鍠鍭鎏鍌鍪鍹鍗鍕鍒鍏鍱鍷鍻鍡鍞鍣鍧鎀鍎鍙闇闀闉闃闅閷隮隰隬霠霟霘霝霙鞚鞡鞜"
  ],
  [
    "ef40",
    "鞞鞝韕韔韱顁顄顊顉顅顃餥餫餬餪餳餲餯餭餱餰馘馣馡騂駺駴駷駹駸駶駻駽駾駼騃骾髾髽鬁髼魈鮚鮨鮞鮛鮦鮡鮥鮤鮆鮢鮠鮯鴳鵁鵧鴶鴮鴯鴱鴸鴰"
  ],
  [
    "efa1",
    "鵅鵂鵃鴾鴷鵀鴽翵鴭麊麉麍麰黈黚黻黿鼤鼣鼢齔龠儱儭儮嚘嚜嚗嚚嚝嚙奰嬼屩屪巀幭幮懘懟懭懮懱懪懰懫懖懩擿攄擽擸攁攃擼斔旛曚曛曘櫅檹檽櫡櫆檺檶檷櫇檴檭歞毉氋瀇瀌瀍瀁瀅瀔瀎濿瀀濻瀦濼濷瀊爁燿燹爃燽獶"
  ],
  [
    "f040",
    "璸瓀璵瓁璾璶璻瓂甔甓癜癤癙癐癓癗癚皦皽盬矂瞺磿礌礓礔礉礐礒礑禭禬穟簜簩簙簠簟簭簝簦簨簢簥簰繜繐繖繣繘繢繟繑繠繗繓羵羳翷翸聵臑臒"
  ],
  [
    "f0a1",
    "臐艟艞薴藆藀藃藂薳薵薽藇藄薿藋藎藈藅薱薶藒蘤薸薷薾虩蟧蟦蟢蟛蟫蟪蟥蟟蟳蟤蟔蟜蟓蟭蟘蟣螤蟗蟙蠁蟴蟨蟝襓襋襏襌襆襐襑襉謪謧謣謳謰謵譇謯謼謾謱謥謷謦謶謮謤謻謽謺豂豵貙貘貗賾贄贂贀蹜蹢蹠蹗蹖蹞蹥蹧"
  ],
  [
    "f140",
    "蹛蹚蹡蹝蹩蹔轆轇轈轋鄨鄺鄻鄾醨醥醧醯醪鎵鎌鎒鎷鎛鎝鎉鎧鎎鎪鎞鎦鎕鎈鎙鎟鎍鎱鎑鎲鎤鎨鎴鎣鎥闒闓闑隳雗雚巂雟雘雝霣霢霥鞬鞮鞨鞫鞤鞪"
  ],
  [
    "f1a1",
    "鞢鞥韗韙韖韘韺顐顑顒颸饁餼餺騏騋騉騍騄騑騊騅騇騆髀髜鬈鬄鬅鬩鬵魊魌魋鯇鯆鯃鮿鯁鮵鮸鯓鮶鯄鮹鮽鵜鵓鵏鵊鵛鵋鵙鵖鵌鵗鵒鵔鵟鵘鵚麎麌黟鼁鼀鼖鼥鼫鼪鼩鼨齌齕儴儵劖勷厴嚫嚭嚦嚧嚪嚬壚壝壛夒嬽嬾嬿巃幰"
  ],
  [
    "f240",
    "徿懻攇攐攍攉攌攎斄旞旝曞櫧櫠櫌櫑櫙櫋櫟櫜櫐櫫櫏櫍櫞歠殰氌瀙瀧瀠瀖瀫瀡瀢瀣瀩瀗瀤瀜瀪爌爊爇爂爅犥犦犤犣犡瓋瓅璷瓃甖癠矉矊矄矱礝礛"
  ],
  [
    "f2a1",
    "礡礜礗礞禰穧穨簳簼簹簬簻糬糪繶繵繸繰繷繯繺繲繴繨罋罊羃羆羷翽翾聸臗臕艤艡艣藫藱藭藙藡藨藚藗藬藲藸藘藟藣藜藑藰藦藯藞藢蠀蟺蠃蟶蟷蠉蠌蠋蠆蟼蠈蟿蠊蠂襢襚襛襗襡襜襘襝襙覈覷覶觶譐譈譊譀譓譖譔譋譕"
  ],
  [
    "f340",
    "譑譂譒譗豃豷豶貚贆贇贉趬趪趭趫蹭蹸蹳蹪蹯蹻軂轒轑轏轐轓辴酀鄿醰醭鏞鏇鏏鏂鏚鏐鏹鏬鏌鏙鎩鏦鏊鏔鏮鏣鏕鏄鏎鏀鏒鏧镽闚闛雡霩霫霬霨霦"
  ],
  [
    "f3a1",
    "鞳鞷鞶韝韞韟顜顙顝顗颿颽颻颾饈饇饃馦馧騚騕騥騝騤騛騢騠騧騣騞騜騔髂鬋鬊鬎鬌鬷鯪鯫鯠鯞鯤鯦鯢鯰鯔鯗鯬鯜鯙鯥鯕鯡鯚鵷鶁鶊鶄鶈鵱鶀鵸鶆鶋鶌鵽鵫鵴鵵鵰鵩鶅鵳鵻鶂鵯鵹鵿鶇鵨麔麑黀黼鼭齀齁齍齖齗齘匷嚲"
  ],
  [
    "f440",
    "嚵嚳壣孅巆巇廮廯忀忁懹攗攖攕攓旟曨曣曤櫳櫰櫪櫨櫹櫱櫮櫯瀼瀵瀯瀷瀴瀱灂瀸瀿瀺瀹灀瀻瀳灁爓爔犨獽獼璺皫皪皾盭矌矎矏矍矲礥礣礧礨礤礩"
  ],
  [
    "f4a1",
    "禲穮穬穭竷籉籈籊籇籅糮繻繾纁纀羺翿聹臛臙舋艨艩蘢藿蘁藾蘛蘀藶蘄蘉蘅蘌藽蠙蠐蠑蠗蠓蠖襣襦覹觷譠譪譝譨譣譥譧譭趮躆躈躄轙轖轗轕轘轚邍酃酁醷醵醲醳鐋鐓鏻鐠鐏鐔鏾鐕鐐鐨鐙鐍鏵鐀鏷鐇鐎鐖鐒鏺鐉鏸鐊鏿"
  ],
  [
    "f540",
    "鏼鐌鏶鐑鐆闞闠闟霮霯鞹鞻韽韾顠顢顣顟飁飂饐饎饙饌饋饓騲騴騱騬騪騶騩騮騸騭髇髊髆鬐鬒鬑鰋鰈鯷鰅鰒鯸鱀鰇鰎鰆鰗鰔鰉鶟鶙鶤鶝鶒鶘鶐鶛"
  ],
  [
    "f5a1",
    "鶠鶔鶜鶪鶗鶡鶚鶢鶨鶞鶣鶿鶩鶖鶦鶧麙麛麚黥黤黧黦鼰鼮齛齠齞齝齙龑儺儹劘劗囃嚽嚾孈孇巋巏廱懽攛欂櫼欃櫸欀灃灄灊灈灉灅灆爝爚爙獾甗癪矐礭礱礯籔籓糲纊纇纈纋纆纍罍羻耰臝蘘蘪蘦蘟蘣蘜蘙蘧蘮蘡蘠蘩蘞蘥"
  ],
  [
    "f640",
    "蠩蠝蠛蠠蠤蠜蠫衊襭襩襮襫觺譹譸譅譺譻贐贔趯躎躌轞轛轝酆酄酅醹鐿鐻鐶鐩鐽鐼鐰鐹鐪鐷鐬鑀鐱闥闤闣霵霺鞿韡顤飉飆飀饘饖騹騽驆驄驂驁騺"
  ],
  [
    "f6a1",
    "騿髍鬕鬗鬘鬖鬺魒鰫鰝鰜鰬鰣鰨鰩鰤鰡鶷鶶鶼鷁鷇鷊鷏鶾鷅鷃鶻鶵鷎鶹鶺鶬鷈鶱鶭鷌鶳鷍鶲鹺麜黫黮黭鼛鼘鼚鼱齎齥齤龒亹囆囅囋奱孋孌巕巑廲攡攠攦攢欋欈欉氍灕灖灗灒爞爟犩獿瓘瓕瓙瓗癭皭礵禴穰穱籗籜籙籛籚"
  ],
  [
    "f740",
    "糴糱纑罏羇臞艫蘴蘵蘳蘬蘲蘶蠬蠨蠦蠪蠥襱覿覾觻譾讄讂讆讅譿贕躕躔躚躒躐躖躗轠轢酇鑌鑐鑊鑋鑏鑇鑅鑈鑉鑆霿韣顪顩飋饔饛驎驓驔驌驏驈驊"
  ],
  [
    "f7a1",
    "驉驒驐髐鬙鬫鬻魖魕鱆鱈鰿鱄鰹鰳鱁鰼鰷鰴鰲鰽鰶鷛鷒鷞鷚鷋鷐鷜鷑鷟鷩鷙鷘鷖鷵鷕鷝麶黰鼵鼳鼲齂齫龕龢儽劙壨壧奲孍巘蠯彏戁戃戄攩攥斖曫欑欒欏毊灛灚爢玂玁玃癰矔籧籦纕艬蘺虀蘹蘼蘱蘻蘾蠰蠲蠮蠳襶襴襳觾"
  ],
  [
    "f840",
    "讌讎讋讈豅贙躘轤轣醼鑢鑕鑝鑗鑞韄韅頀驖驙鬞鬟鬠鱒鱘鱐鱊鱍鱋鱕鱙鱌鱎鷻鷷鷯鷣鷫鷸鷤鷶鷡鷮鷦鷲鷰鷢鷬鷴鷳鷨鷭黂黐黲黳鼆鼜鼸鼷鼶齃齏"
  ],
  [
    "f8a1",
    "齱齰齮齯囓囍孎屭攭曭曮欓灟灡灝灠爣瓛瓥矕礸禷禶籪纗羉艭虃蠸蠷蠵衋讔讕躞躟躠躝醾醽釂鑫鑨鑩雥靆靃靇韇韥驞髕魙鱣鱧鱦鱢鱞鱠鸂鷾鸇鸃鸆鸅鸀鸁鸉鷿鷽鸄麠鼞齆齴齵齶囔攮斸欘欙欗欚灢爦犪矘矙礹籩籫糶纚"
  ],
  [
    "f940",
    "纘纛纙臠臡虆虇虈襹襺襼襻觿讘讙躥躤躣鑮鑭鑯鑱鑳靉顲饟鱨鱮鱭鸋鸍鸐鸏鸒鸑麡黵鼉齇齸齻齺齹圞灦籯蠼趲躦釃鑴鑸鑶鑵驠鱴鱳鱱鱵鸔鸓黶鼊"
  ],
  [
    "f9a1",
    "龤灨灥糷虪蠾蠽蠿讞貜躩軉靋顳顴飌饡馫驤驦驧鬤鸕鸗齈戇欞爧虌躨钂钀钁驩驨鬮鸙爩虋讟钃鱹麷癵驫鱺鸝灩灪麤齾齉龘碁銹裏墻恒粧嫺╔╦╗╠╬╣╚╩╝╒╤╕╞╪╡╘╧╛╓╥╖╟╫╢╙╨╜║═╭╮╰╯▓"
  ]
], a8 = [
  [
    "8740",
    "䏰䰲䘃䖦䕸𧉧䵷䖳𧲱䳢𧳅㮕䜶䝄䱇䱀𤊿𣘗𧍒𦺋𧃒䱗𪍑䝏䗚䲅𧱬䴇䪤䚡𦬣爥𥩔𡩣𣸆𣽡晍囻"
  ],
  [
    "8767",
    "綕夝𨮹㷴霴𧯯寛𡵞媤㘥𩺰嫑宷峼杮薓𩥅瑡璝㡵𡵓𣚞𦀡㻬"
  ],
  [
    "87a1",
    "𥣞㫵竼龗𤅡𨤍𣇪𠪊𣉞䌊蒄龖鐯䤰蘓墖靊鈘秐稲晠権袝瑌篅枂稬剏遆㓦珄𥶹瓆鿇垳䤯呌䄱𣚎堘穲𧭥讏䚮𦺈䆁𥶙箮𢒼鿈𢓁𢓉𢓌鿉蔄𣖻䂴鿊䓡𪷿拁灮鿋"
  ],
  [
    "8840",
    "㇀",
    4,
    "𠄌㇅𠃑𠃍㇆㇇𠃋𡿨㇈𠃊㇉㇊㇋㇌𠄎㇍㇎ĀÁǍÀĒÉĚÈŌÓǑÒ࿿Ê̄Ế࿿Ê̌ỀÊāáǎàɑēéěèīíǐìōóǒòūúǔùǖǘǚ"
  ],
  [
    "88a1",
    "ǜü࿿ê̄ế࿿ê̌ềêɡ⏚⏛"
  ],
  [
    "8940",
    "𪎩𡅅"
  ],
  [
    "8943",
    "攊"
  ],
  [
    "8946",
    "丽滝鵎釟"
  ],
  [
    "894c",
    "𧜵撑会伨侨兖兴农凤务动医华发变团声处备夲头学实実岚庆总斉柾栄桥济炼电纤纬纺织经统缆缷艺苏药视设询车轧轮"
  ],
  [
    "89a1",
    "琑糼緍楆竉刧"
  ],
  [
    "89ab",
    "醌碸酞肼"
  ],
  [
    "89b0",
    "贋胶𠧧"
  ],
  [
    "89b5",
    "肟黇䳍鷉鸌䰾𩷶𧀎鸊𪄳㗁"
  ],
  [
    "89c1",
    "溚舾甙"
  ],
  [
    "89c5",
    "䤑马骏龙禇𨑬𡷊𠗐𢫦两亁亀亇亿仫伷㑌侽㹈倃傈㑽㒓㒥円夅凛凼刅争剹劐匧㗇厩㕑厰㕓参吣㕭㕲㚁咓咣咴咹哐哯唘唣唨㖘唿㖥㖿嗗㗅"
  ],
  [
    "8a40",
    "𧶄唥"
  ],
  [
    "8a43",
    "𠱂𠴕𥄫喐𢳆㧬𠍁蹆𤶸𩓥䁓𨂾睺𢰸㨴䟕𨅝𦧲𤷪擝𠵼𠾴𠳕𡃴撍蹾𠺖𠰋𠽤𢲩𨉖𤓓"
  ],
  [
    "8a64",
    "𠵆𩩍𨃩䟴𤺧𢳂骲㩧𩗴㿭㔆𥋇𩟔𧣈𢵄鵮頕"
  ],
  [
    "8a76",
    "䏙𦂥撴哣𢵌𢯊𡁷㧻𡁯"
  ],
  [
    "8aa1",
    "𦛚𦜖𧦠擪𥁒𠱃蹨𢆡𨭌𠜱"
  ],
  [
    "8aac",
    "䠋𠆩㿺塳𢶍"
  ],
  [
    "8ab2",
    "𤗈𠓼𦂗𠽌𠶖啹䂻䎺"
  ],
  [
    "8abb",
    "䪴𢩦𡂝膪飵𠶜捹㧾𢝵跀嚡摼㹃"
  ],
  [
    "8ac9",
    "𪘁𠸉𢫏𢳉"
  ],
  [
    "8ace",
    "𡃈𣧂㦒㨆𨊛㕸𥹉𢃇噒𠼱𢲲𩜠㒼氽𤸻"
  ],
  [
    "8adf",
    "𧕴𢺋𢈈𪙛𨳍𠹺𠰴𦠜羓𡃏𢠃𢤹㗻𥇣𠺌𠾍𠺪㾓𠼰𠵇𡅏𠹌"
  ],
  [
    "8af6",
    "𠺫𠮩𠵈𡃀𡄽㿹𢚖搲𠾭"
  ],
  [
    "8b40",
    "𣏴𧘹𢯎𠵾𠵿𢱑𢱕㨘𠺘𡃇𠼮𪘲𦭐𨳒𨶙𨳊閪哌苄喹"
  ],
  [
    "8b55",
    "𩻃鰦骶𧝞𢷮煀腭胬尜𦕲脴㞗卟𨂽醶𠻺𠸏𠹷𠻻㗝𤷫㘉𠳖嚯𢞵𡃉𠸐𠹸𡁸𡅈𨈇𡑕𠹹𤹐𢶤婔𡀝𡀞𡃵𡃶垜𠸑"
  ],
  [
    "8ba1",
    "𧚔𨋍𠾵𠹻𥅾㜃𠾶𡆀𥋘𪊽𤧚𡠺𤅷𨉼墙剨㘚𥜽箲孨䠀䬬鼧䧧鰟鮍𥭴𣄽嗻㗲嚉丨夂𡯁屮靑𠂆乛亻㔾尣彑忄㣺扌攵歺氵氺灬爫丬犭𤣩罒礻糹罓𦉪㓁"
  ],
  [
    "8bde",
    "𦍋耂肀𦘒𦥑卝衤见𧢲讠贝钅镸长门𨸏韦页风飞饣𩠐鱼鸟黄歯龜丷𠂇阝户钢"
  ],
  [
    "8c40",
    "倻淾𩱳龦㷉袏𤅎灷峵䬠𥇍㕙𥴰愢𨨲辧釶熑朙玺𣊁𪄇㲋𡦀䬐磤琂冮𨜏䀉橣𪊺䈣蘏𠩯稪𩥇𨫪靕灍匤𢁾鏴盙𨧣龧矝亣俰傼丯众龨吴綋墒壐𡶶庒庙忂𢜒斋"
  ],
  [
    "8ca1",
    "𣏹椙橃𣱣泿"
  ],
  [
    "8ca7",
    "爀𤔅玌㻛𤨓嬕璹讃𥲤𥚕窓篬糃繬苸薗龩袐龪躹龫迏蕟駠鈡龬𨶹𡐿䁱䊢娚"
  ],
  [
    "8cc9",
    "顨杫䉶圽"
  ],
  [
    "8cce",
    "藖𤥻芿𧄍䲁𦵴嵻𦬕𦾾龭龮宖龯曧繛湗秊㶈䓃𣉖𢞖䎚䔶"
  ],
  [
    "8ce6",
    "峕𣬚諹屸㴒𣕑嵸龲煗䕘𤃬𡸣䱷㥸㑊𠆤𦱁諌侴𠈹妿腬顖𩣺弻"
  ],
  [
    "8d40",
    "𠮟"
  ],
  [
    "8d42",
    "𢇁𨥭䄂䚻𩁹㼇龳𪆵䃸㟖䛷𦱆䅼𨚲𧏿䕭㣔𥒚䕡䔛䶉䱻䵶䗪㿈𤬏㙡䓞䒽䇭崾嵈嵖㷼㠏嶤嶹㠠㠸幂庽弥徃㤈㤔㤿㥍惗愽峥㦉憷憹懏㦸戬抐拥挘㧸嚱"
  ],
  [
    "8da1",
    "㨃揢揻搇摚㩋擀崕嘡龟㪗斆㪽旿晓㫲暒㬢朖㭂枤栀㭘桊梄㭲㭱㭻椉楃牜楤榟榅㮼槖㯝橥橴橱檂㯬檙㯲檫檵櫔櫶殁毁毪汵沪㳋洂洆洦涁㳯涤涱渕渘温溆𨧀溻滢滚齿滨滩漤漴㵆𣽁澁澾㵪㵵熷岙㶊瀬㶑灐灔灯灿炉𠌥䏁㗱𠻘"
  ],
  [
    "8e40",
    "𣻗垾𦻓焾𥟠㙎榢𨯩孴穉𥣡𩓙穥穽𥦬窻窰竂竃燑𦒍䇊竚竝竪䇯咲𥰁笋筕笩𥌎𥳾箢筯莜𥮴𦱿篐萡箒箸𥴠㶭𥱥蒒篺簆簵𥳁籄粃𤢂粦晽𤕸糉糇糦籴糳糵糎"
  ],
  [
    "8ea1",
    "繧䔝𦹄絝𦻖璍綉綫焵綳緒𤁗𦀩緤㴓緵𡟹緥𨍭縝𦄡𦅚繮纒䌫鑬縧罀罁罇礶𦋐駡羗𦍑羣𡙡𠁨䕜𣝦䔃𨌺翺𦒉者耈耝耨耯𪂇𦳃耻耼聡𢜔䦉𦘦𣷣𦛨朥肧𨩈脇脚墰𢛶汿𦒘𤾸擧𡒊舘𡡞橓𤩥𤪕䑺舩𠬍𦩒𣵾俹𡓽蓢荢𦬊𤦧𣔰𡝳𣷸芪椛芳䇛"
  ],
  [
    "8f40",
    "蕋苐茚𠸖𡞴㛁𣅽𣕚艻苢茘𣺋𦶣𦬅𦮗𣗎㶿茝嗬莅䔋𦶥莬菁菓㑾𦻔橗蕚㒖𦹂𢻯葘𥯤葱㷓䓤檧葊𣲵祘蒨𦮖𦹷𦹃蓞萏莑䒠蒓蓤𥲑䉀𥳀䕃蔴嫲𦺙䔧蕳䔖枿蘖"
  ],
  [
    "8fa1",
    "𨘥𨘻藁𧂈蘂𡖂𧃍䕫䕪蘨㙈𡢢号𧎚虾蝱𪃸蟮𢰧螱蟚蠏噡虬桖䘏衅衆𧗠𣶹𧗤衞袜䙛袴袵揁装睷𧜏覇覊覦覩覧覼𨨥觧𧤤𧪽誜瞓釾誐𧩙竩𧬺𣾏䜓𧬸煼謌謟𥐰𥕥謿譌譍誩𤩺讐讛誯𡛟䘕衏貛𧵔𧶏貫㜥𧵓賖𧶘𧶽贒贃𡤐賛灜贑𤳉㻐起"
  ],
  [
    "9040",
    "趩𨀂𡀔𤦊㭼𨆼𧄌竧躭躶軃鋔輙輭𨍥𨐒辥錃𪊟𠩐辳䤪𨧞𨔽𣶻廸𣉢迹𪀔𨚼𨔁𢌥㦀𦻗逷𨔼𧪾遡𨕬𨘋邨𨜓郄𨛦邮都酧㫰醩釄粬𨤳𡺉鈎沟鉁鉢𥖹銹𨫆𣲛𨬌𥗛"
  ],
  [
    "90a1",
    "𠴱錬鍫𨫡𨯫炏嫃𨫢𨫥䥥鉄𨯬𨰹𨯿鍳鑛躼閅閦鐦閠濶䊹𢙺𨛘𡉼𣸮䧟氜陻隖䅬隣𦻕懚隶磵𨫠隽双䦡𦲸𠉴𦐐𩂯𩃥𤫑𡤕𣌊霱虂霶䨏䔽䖅𤫩灵孁霛靜𩇕靗孊𩇫靟鐥僐𣂷𣂼鞉鞟鞱鞾韀韒韠𥑬韮琜𩐳響韵𩐝𧥺䫑頴頳顋顦㬎𧅵㵑𠘰𤅜"
  ],
  [
    "9140",
    "𥜆飊颷飈飇䫿𦴧𡛓喰飡飦飬鍸餹𤨩䭲𩡗𩤅駵騌騻騐驘𥜥㛄𩂱𩯕髠髢𩬅髴䰎鬔鬭𨘀倴鬴𦦨㣃𣁽魐魀𩴾婅𡡣鮎𤉋鰂鯿鰌𩹨鷔𩾷𪆒𪆫𪃡𪄣𪇟鵾鶃𪄴鸎梈"
  ],
  [
    "91a1",
    "鷄𢅛𪆓𪈠𡤻𪈳鴹𪂹𪊴麐麕麞麢䴴麪麯𤍤黁㭠㧥㴝伲㞾𨰫鼂鼈䮖鐤𦶢鼗鼖鼹嚟嚊齅馸𩂋韲葿齢齩竜龎爖䮾𤥵𤦻煷𤧸𤍈𤩑玞𨯚𡣺禟𨥾𨸶鍩鏳𨩄鋬鎁鏋𨥬𤒹爗㻫睲穃烐𤑳𤏸煾𡟯炣𡢾𣖙㻇𡢅𥐯𡟸㜢𡛻𡠹㛡𡝴𡣑𥽋㜣𡛀坛𤨥𡏾𡊨"
  ],
  [
    "9240",
    "𡏆𡒶蔃𣚦蔃葕𤦔𧅥𣸱𥕜𣻻𧁒䓴𣛮𩦝𦼦柹㜳㰕㷧塬𡤢栐䁗𣜿𤃡𤂋𤄏𦰡哋嚞𦚱嚒𠿟𠮨𠸍鏆𨬓鎜仸儫㠙𤐶亼𠑥𠍿佋侊𥙑婨𠆫𠏋㦙𠌊𠐔㐵伩𠋀𨺳𠉵諚𠈌亘"
  ],
  [
    "92a1",
    "働儍侢伃𤨎𣺊佂倮偬傁俌俥偘僼兙兛兝兞湶𣖕𣸹𣺿浲𡢄𣺉冨凃𠗠䓝𠒣𠒒𠒑赺𨪜𠜎剙劤𠡳勡鍮䙺熌𤎌𠰠𤦬𡃤槑𠸝瑹㻞璙琔瑖玘䮎𤪼𤂍叐㖄爏𤃉喴𠍅响𠯆圝鉝雴鍦埝垍坿㘾壋媙𨩆𡛺𡝯𡜐娬妸銏婾嫏娒𥥆𡧳𡡡𤊕㛵洅瑃娡𥺃"
  ],
  [
    "9340",
    "媁𨯗𠐓鏠璌𡌃焅䥲鐈𨧻鎽㞠尞岞幞幈𡦖𡥼𣫮廍孏𡤃𡤄㜁𡢠㛝𡛾㛓脪𨩇𡶺𣑲𨦨弌弎𡤧𡞫婫𡜻孄蘔𧗽衠恾𢡠𢘫忛㺸𢖯𢖾𩂈𦽳懀𠀾𠁆𢘛憙憘恵𢲛𢴇𤛔𩅍"
  ],
  [
    "93a1",
    "摱𤙥𢭪㨩𢬢𣑐𩣪𢹸挷𪑛撶挱揑𤧣𢵧护𢲡搻敫楲㯴𣂎𣊭𤦉𣊫唍𣋠𡣙𩐿曎𣊉𣆳㫠䆐𥖄𨬢𥖏𡛼𥕛𥐥磮𣄃𡠪𣈴㑤𣈏𣆂𤋉暎𦴤晫䮓昰𧡰𡷫晣𣋒𣋡昞𥡲㣑𣠺𣞼㮙𣞢𣏾瓐㮖枏𤘪梶栞㯄檾㡣𣟕𤒇樳橒櫉欅𡤒攑梘橌㯗橺歗𣿀𣲚鎠鋲𨯪𨫋"
  ],
  [
    "9440",
    "銉𨀞𨧜鑧涥漋𤧬浧𣽿㶏渄𤀼娽渊塇洤硂焻𤌚𤉶烱牐犇犔𤞏𤜥兹𤪤𠗫瑺𣻸𣙟𤩊𤤗𥿡㼆㺱𤫟𨰣𣼵悧㻳瓌琼鎇琷䒟𦷪䕑疃㽣𤳙𤴆㽘畕癳𪗆㬙瑨𨫌𤦫𤦎㫻"
  ],
  [
    "94a1",
    "㷍𤩎㻿𤧅𤣳釺圲鍂𨫣𡡤僟𥈡𥇧睸𣈲眎眏睻𤚗𣞁㩞𤣰琸璛㺿𤪺𤫇䃈𤪖𦆮錇𥖁砞碍碈磒珐祙𧝁𥛣䄎禛蒖禥樭𣻺稺秴䅮𡛦䄲鈵秱𠵌𤦌𠊙𣶺𡝮㖗啫㕰㚪𠇔𠰍竢婙𢛵𥪯𥪜娍𠉛磰娪𥯆竾䇹籝籭䈑𥮳𥺼𥺦糍𤧹𡞰粎籼粮檲緜縇緓罎𦉡"
  ],
  [
    "9540",
    "𦅜𧭈綗𥺂䉪𦭵𠤖柖𠁎𣗏埄𦐒𦏸𤥢翝笧𠠬𥫩𥵃笌𥸎駦虅驣樜𣐿㧢𤧷𦖭騟𦖠蒀𧄧𦳑䓪脷䐂胆脉腂𦞴飃𦩂艢艥𦩑葓𦶧蘐𧈛媆䅿𡡀嬫𡢡嫤𡣘蚠蜨𣶏蠭𧐢娂"
  ],
  [
    "95a1",
    "衮佅袇袿裦襥襍𥚃襔𧞅𧞄𨯵𨯙𨮜𨧹㺭蒣䛵䛏㟲訽訜𩑈彍鈫𤊄旔焩烄𡡅鵭貟賩𧷜妚矃姰䍮㛔踪躧𤰉輰轊䋴汘澻𢌡䢛潹溋𡟚鯩㚵𤤯邻邗啱䤆醻鐄𨩋䁢𨫼鐧𨰝𨰻蓥訫閙閧閗閖𨴴瑅㻂𤣿𤩂𤏪㻧𣈥随𨻧𨹦𨹥㻌𤧭𤩸𣿮琒瑫㻼靁𩂰"
  ],
  [
    "9640",
    "桇䨝𩂓𥟟靝鍨𨦉𨰦𨬯𦎾銺嬑譩䤼珹𤈛鞛靱餸𠼦巁𨯅𤪲頟𩓚鋶𩗗釥䓀𨭐𤩧𨭤飜𨩅㼀鈪䤥萔餻饍𧬆㷽馛䭯馪驜𨭥𥣈檏騡嫾騯𩣱䮐𩥈馼䮽䮗鍽塲𡌂堢𤦸"
  ],
  [
    "96a1",
    "𡓨硄𢜟𣶸棅㵽鑘㤧慐𢞁𢥫愇鱏鱓鱻鰵鰐魿鯏𩸭鮟𪇵𪃾鴡䲮𤄄鸘䲰鴌𪆴𪃭𪃳𩤯鶥蒽𦸒𦿟𦮂藼䔳𦶤𦺄𦷰萠藮𦸀𣟗𦁤秢𣖜𣙀䤭𤧞㵢鏛銾鍈𠊿碹鉷鑍俤㑀遤𥕝砽硔碶硋𡝗𣇉𤥁㚚佲濚濙瀞瀞吔𤆵垻壳垊鴖埗焴㒯𤆬燫𦱀𤾗嬨𡞵𨩉"
  ],
  [
    "9740",
    "愌嫎娋䊼𤒈㜬䭻𨧼鎻鎸𡣖𠼝葲𦳀𡐓𤋺𢰦𤏁妔𣶷𦝁綨𦅛𦂤𤦹𤦋𨧺鋥珢㻩璴𨭣𡢟㻡𤪳櫘珳珻㻖𤨾𤪔𡟙𤩦𠎧𡐤𤧥瑈𤤖炥𤥶銄珦鍟𠓾錱𨫎𨨖鎆𨯧𥗕䤵𨪂煫"
  ],
  [
    "97a1",
    "𤥃𠳿嚤𠘚𠯫𠲸唂秄𡟺緾𡛂𤩐𡡒䔮鐁㜊𨫀𤦭妰𡢿𡢃𧒄媡㛢𣵛㚰鉟婹𨪁𡡢鍴㳍𠪴䪖㦊僴㵩㵌𡎜煵䋻𨈘渏𩃤䓫浗𧹏灧沯㳖𣿭𣸭渂漌㵯𠏵畑㚼㓈䚀㻚䡱姄鉮䤾轁𨰜𦯀堒埈㛖𡑒烾𤍢𤩱𢿣𡊰𢎽梹楧𡎘𣓥𧯴𣛟𨪃𣟖𣏺𤲟樚𣚭𦲷萾䓟䓎"
  ],
  [
    "9840",
    "𦴦𦵑𦲂𦿞漗𧄉茽𡜺菭𦲀𧁓𡟛妉媂𡞳婡婱𡤅𤇼㜭姯𡜼㛇熎鎐暚𤊥婮娫𤊓樫𣻹𧜶𤑛𤋊焝𤉙𨧡侰𦴨峂𤓎𧹍𤎽樌𤉖𡌄炦焳𤏩㶥泟勇𤩏繥姫崯㷳彜𤩝𡟟綤萦"
  ],
  [
    "98a1",
    "咅𣫺𣌀𠈔坾𠣕𠘙㿥𡾞𪊶瀃𩅛嵰玏糓𨩙𩐠俈翧狍猐𧫴猸猹𥛶獁獈㺩𧬘遬燵𤣲珡臶㻊県㻑沢国琙琞琟㻢㻰㻴㻺瓓㼎㽓畂畭畲疍㽼痈痜㿀癍㿗癴㿜発𤽜熈嘣覀塩䀝睃䀹条䁅㗛瞘䁪䁯属瞾矋売砘点砜䂨砹硇硑硦葈𥔵礳栃礲䄃"
  ],
  [
    "9940",
    "䄉禑禙辻稆込䅧窑䆲窼艹䇄竏竛䇏両筢筬筻簒簛䉠䉺类粜䊌粸䊔糭输烀𠳏総緔緐緽羮羴犟䎗耠耥笹耮耱联㷌垴炠肷胩䏭脌猪脎脒畠脔䐁㬹腖腙腚"
  ],
  [
    "99a1",
    "䐓堺腼膄䐥膓䐭膥埯臁臤艔䒏芦艶苊苘苿䒰荗险榊萅烵葤惣蒈䔄蒾蓡蓸蔐蔸蕒䔻蕯蕰藠䕷虲蚒蚲蛯际螋䘆䘗袮裿褤襇覑𧥧訩訸誔誴豑賔賲贜䞘塟跃䟭仮踺嗘坔蹱嗵躰䠷軎転軤軭軲辷迁迊迌逳駄䢭飠鈓䤞鈨鉘鉫銱銮銿"
  ],
  [
    "9a40",
    "鋣鋫鋳鋴鋽鍃鎄鎭䥅䥑麿鐗匁鐝鐭鐾䥪鑔鑹锭関䦧间阳䧥枠䨤靀䨵鞲韂噔䫤惨颹䬙飱塄餎餙冴餜餷饂饝饢䭰駅䮝騼鬏窃魩鮁鯝鯱鯴䱭鰠㝯𡯂鵉鰺"
  ],
  [
    "9aa1",
    "黾噐鶓鶽鷀鷼银辶鹻麬麱麽黆铜黢黱黸竈齄𠂔𠊷𠎠椚铃妬𠓗塀铁㞹𠗕𠘕𠙶𡚺块煳𠫂𠫍𠮿呪吆𠯋咞𠯻𠰻𠱓𠱥𠱼惧𠲍噺𠲵𠳝𠳭𠵯𠶲𠷈楕鰯螥𠸄𠸎𠻗𠾐𠼭𠹳尠𠾼帋𡁜𡁏𡁶朞𡁻𡂈𡂖㙇𡂿𡃓𡄯𡄻卤蒭𡋣𡍵𡌶讁𡕷𡘙𡟃𡟇乸炻𡠭𡥪"
  ],
  [
    "9b40",
    "𡨭𡩅𡰪𡱰𡲬𡻈拃𡻕𡼕熘桕𢁅槩㛈𢉼𢏗𢏺𢜪𢡱𢥏苽𢥧𢦓𢫕覥𢫨辠𢬎鞸𢬿顇骽𢱌"
  ],
  [
    "9b62",
    "𢲈𢲷𥯨𢴈𢴒𢶷𢶕𢹂𢽴𢿌𣀳𣁦𣌟𣏞徱晈暿𧩹𣕧𣗳爁𤦺矗𣘚𣜖纇𠍆墵朎"
  ],
  [
    "9ba1",
    "椘𣪧𧙗𥿢𣸑𣺹𧗾𢂚䣐䪸𤄙𨪚𤋮𤌍𤀻𤌴𤎖𤩅𠗊凒𠘑妟𡺨㮾𣳿𤐄𤓖垈𤙴㦛𤜯𨗨𩧉㝢𢇃譞𨭎駖𤠒𤣻𤨕爉𤫀𠱸奥𤺥𤾆𠝹軚𥀬劏圿煱𥊙𥐙𣽊𤪧喼𥑆𥑮𦭒釔㑳𥔿𧘲𥕞䜘𥕢𥕦𥟇𤤿𥡝偦㓻𣏌惞𥤃䝼𨥈𥪮𥮉𥰆𡶐垡煑澶𦄂𧰒遖𦆲𤾚譢𦐂𦑊"
  ],
  [
    "9c40",
    "嵛𦯷輶𦒄𡤜諪𤧶𦒈𣿯𦔒䯀𦖿𦚵𢜛鑥𥟡憕娧晉侻嚹𤔡𦛼乪𤤴陖涏𦲽㘘襷𦞙𦡮𦐑𦡞營𦣇筂𩃀𠨑𦤦鄄𦤹穅鷰𦧺騦𦨭㙟𦑩𠀡禃𦨴𦭛崬𣔙菏𦮝䛐𦲤画补𦶮墶"
  ],
  [
    "9ca1",
    "㜜𢖍𧁋𧇍㱔𧊀𧊅銁𢅺𧊋錰𧋦𤧐氹钟𧑐𠻸蠧裵𢤦𨑳𡞱溸𤨪𡠠㦤㚹尐秣䔿暶𩲭𩢤襃𧟌𧡘囖䃟𡘊㦡𣜯𨃨𡏅熭荦𧧝𩆨婧䲷𧂯𨦫𧧽𧨊𧬋𧵦𤅺筃祾𨀉澵𪋟樃𨌘厢𦸇鎿栶靝𨅯𨀣𦦵𡏭𣈯𨁈嶅𨰰𨂃圕頣𨥉嶫𤦈斾槕叒𤪥𣾁㰑朶𨂐𨃴𨄮𡾡𨅏"
  ],
  [
    "9d40",
    "𨆉𨆯𨈚𨌆𨌯𨎊㗊𨑨𨚪䣺揦𨥖砈鉕𨦸䏲𨧧䏟𨧨𨭆𨯔姸𨰉輋𨿅𩃬筑𩄐𩄼㷷𩅞𤫊运犏嚋𩓧𩗩𩖰𩖸𩜲𩣑𩥉𩥪𩧃𩨨𩬎𩵚𩶛纟𩻸𩼣䲤镇𪊓熢𪋿䶑递𪗋䶜𠲜达嗁"
  ],
  [
    "9da1",
    "辺𢒰边𤪓䔉繿潖檱仪㓤𨬬𧢝㜺躀𡟵𨀤𨭬𨮙𧨾𦚯㷫𧙕𣲷𥘵𥥖亚𥺁𦉘嚿𠹭踎孭𣺈𤲞揞拐𡟶𡡻攰嘭𥱊吚𥌑㷆𩶘䱽嘢嘞罉𥻘奵𣵀蝰东𠿪𠵉𣚺脗鵞贘瘻鱅癎瞹鍅吲腈苷嘥脲萘肽嗪祢噃吖𠺝㗎嘅嗱曱𨋢㘭甴嗰喺咗啲𠱁𠲖廐𥅈𠹶𢱢"
  ],
  [
    "9e40",
    "𠺢麫絚嗞𡁵抝靭咔賍燶酶揼掹揾啩𢭃鱲𢺳冚㓟𠶧冧呍唞唓癦踭𦢊疱肶蠄螆裇膶萜𡃁䓬猄𤜆宐茋𦢓噻𢛴𧴯𤆣𧵳𦻐𧊶酰𡇙鈈𣳼𪚩𠺬𠻹牦𡲢䝎𤿂𧿹𠿫䃺"
  ],
  [
    "9ea1",
    "鱝攟𢶠䣳𤟠𩵼𠿬𠸊恢𧖣𠿭"
  ],
  [
    "9ead",
    "𦁈𡆇熣纎鵐业丄㕷嬍沲卧㚬㧜卽㚥𤘘墚𤭮舭呋垪𥪕𠥹"
  ],
  [
    "9ec5",
    "㩒𢑥獴𩺬䴉鯭𣳾𩼰䱛𤾩𩖞𩿞葜𣶶𧊲𦞳𣜠挮紥𣻷𣸬㨪逈勌㹴㙺䗩𠒎癀嫰𠺶硺𧼮墧䂿噼鮋嵴癔𪐴麅䳡痹㟻愙𣃚𤏲"
  ],
  [
    "9ef5",
    "噝𡊩垧𤥣𩸆刴𧂮㖭汊鵼"
  ],
  [
    "9f40",
    "籖鬹埞𡝬屓擓𩓐𦌵𧅤蚭𠴨𦴢𤫢𠵱"
  ],
  [
    "9f4f",
    "凾𡼏嶎霃𡷑麁遌笟鬂峑箣扨挵髿篏鬪籾鬮籂粆鰕篼鬉鼗鰛𤤾齚啳寃俽麘俲剠㸆勑坧偖妷帒韈鶫轜呩鞴饀鞺匬愰"
  ],
  [
    "9fa1",
    "椬叚鰊鴂䰻陁榀傦畆𡝭駚剳"
  ],
  [
    "9fae",
    "酙隁酜"
  ],
  [
    "9fb2",
    "酑𨺗捿𦴣櫊嘑醎畺抅𠏼獏籰𥰡𣳽"
  ],
  [
    "9fc1",
    "𤤙盖鮝个𠳔莾衂"
  ],
  [
    "9fc9",
    "届槀僭坺刟巵从氱𠇲伹咜哚劚趂㗾弌㗳"
  ],
  [
    "9fdb",
    "歒酼龥鮗頮颴骺麨麄煺笔"
  ],
  [
    "9fe7",
    "毺蠘罸"
  ],
  [
    "9feb",
    "嘠𪙊蹷齓"
  ],
  [
    "9ff0",
    "跔蹏鸜踁抂𨍽踨蹵竓𤩷稾磘泪詧瘇"
  ],
  [
    "a040",
    "𨩚鼦泎蟖痃𪊲硓咢贌狢獱謭猂瓱賫𤪻蘯徺袠䒷"
  ],
  [
    "a055",
    "𡠻𦸅"
  ],
  [
    "a058",
    "詾𢔛"
  ],
  [
    "a05b",
    "惽癧髗鵄鍮鮏蟵"
  ],
  [
    "a063",
    "蠏賷猬霡鮰㗖犲䰇籑饊𦅙慙䰄麖慽"
  ],
  [
    "a073",
    "坟慯抦戹拎㩜懢厪𣏵捤栂㗒"
  ],
  [
    "a0a1",
    "嵗𨯂迚𨸹"
  ],
  [
    "a0a6",
    "僙𡵆礆匲阸𠼻䁥"
  ],
  [
    "a0ae",
    "矾"
  ],
  [
    "a0b0",
    "糂𥼚糚稭聦聣絍甅瓲覔舚朌聢𧒆聛瓰脃眤覉𦟌畓𦻑螩蟎臈螌詉貭譃眫瓸蓚㘵榲趦"
  ],
  [
    "a0d4",
    "覩瑨涹蟁𤀑瓧㷛煶悤憜㳑煢恷"
  ],
  [
    "a0e2",
    "罱𨬭牐惩䭾删㰘𣳇𥻗𧙖𥔱𡥄𡋾𩤃𦷜𧂭峁𦆭𨨏𣙷𠃮𦡆𤼎䕢嬟𦍌齐麦𦉫"
  ],
  [
    "a3c0",
    "␀",
    31,
    "␡"
  ],
  [
    "c6a1",
    "①",
    9,
    "⑴",
    9,
    "ⅰ",
    9,
    "丶丿亅亠冂冖冫勹匸卩厶夊宀巛⼳广廴彐彡攴无疒癶辵隶¨ˆヽヾゝゞ〃仝々〆〇ー［］✽ぁ",
    23
  ],
  [
    "c740",
    "す",
    58,
    "ァアィイ"
  ],
  [
    "c7a1",
    "ゥ",
    81,
    "А",
    5,
    "ЁЖ",
    4
  ],
  [
    "c840",
    "Л",
    26,
    "ёж",
    25,
    "⇧↸↹㇏𠃌乚𠂊刂䒑"
  ],
  [
    "c8a1",
    "龰冈龱𧘇"
  ],
  [
    "c8cd",
    "￢￤＇＂㈱№℡゛゜⺀⺄⺆⺇⺈⺊⺌⺍⺕⺜⺝⺥⺧⺪⺬⺮⺶⺼⺾⻆⻊⻌⻍⻏⻖⻗⻞⻣"
  ],
  [
    "c8f5",
    "ʃɐɛɔɵœøŋʊɪ"
  ],
  [
    "f9fe",
    "￭"
  ],
  [
    "fa40",
    "𠕇鋛𠗟𣿅蕌䊵珯况㙉𤥂𨧤鍄𡧛苮𣳈砼杄拟𤤳𨦪𠊠𦮳𡌅侫𢓭倈𦴩𧪄𣘀𤪱𢔓倩𠍾徤𠎀𠍇滛𠐟偽儁㑺儎顬㝃萖𤦤𠒇兠𣎴兪𠯿𢃼𠋥𢔰𠖎𣈳𡦃宂蝽𠖳𣲙冲冸"
  ],
  [
    "faa1",
    "鴴凉减凑㳜凓𤪦决凢卂凭菍椾𣜭彻刋刦刼劵剗劔効勅簕蕂勠蘍𦬓包𨫞啉滙𣾀𠥔𣿬匳卄𠯢泋𡜦栛珕恊㺪㣌𡛨燝䒢卭却𨚫卾卿𡖖𡘓矦厓𨪛厠厫厮玧𥝲㽙玜叁叅汉义埾叙㪫𠮏叠𣿫𢶣叶𠱷吓灹唫晗浛呭𦭓𠵴啝咏咤䞦𡜍𠻝㶴𠵍"
  ],
  [
    "fb40",
    "𨦼𢚘啇䳭启琗喆喩嘅𡣗𤀺䕒𤐵暳𡂴嘷曍𣊊暤暭噍噏磱囱鞇叾圀囯园𨭦㘣𡉏坆𤆥汮炋坂㚱𦱾埦𡐖堃𡑔𤍣堦𤯵塜墪㕡壠壜𡈼壻寿坃𪅐𤉸鏓㖡够梦㛃湙"
  ],
  [
    "fba1",
    "𡘾娤啓𡚒蔅姉𠵎𦲁𦴪𡟜姙𡟻𡞲𦶦浱𡠨𡛕姹𦹅媫婣㛦𤦩婷㜈媖瑥嫓𦾡𢕔㶅𡤑㜲𡚸広勐孶斈孼𧨎䀄䡝𠈄寕慠𡨴𥧌𠖥寳宝䴐尅𡭄尓珎尔𡲥𦬨屉䣝岅峩峯嶋𡷹𡸷崐崘嵆𡺤岺巗苼㠭𤤁𢁉𢅳芇㠶㯂帮檊幵幺𤒼𠳓厦亷廐厨𡝱帉廴𨒂"
  ],
  [
    "fc40",
    "廹廻㢠廼栾鐛弍𠇁弢㫞䢮𡌺强𦢈𢏐彘𢑱彣鞽𦹮彲鍀𨨶徧嶶㵟𥉐𡽪𧃸𢙨釖𠊞𨨩怱暅𡡷㥣㷇㘹垐𢞴祱㹀悞悤悳𤦂𤦏𧩓璤僡媠慤萤慂慈𦻒憁凴𠙖憇宪𣾷"
  ],
  [
    "fca1",
    "𢡟懓𨮝𩥝懐㤲𢦀𢣁怣慜攞掋𠄘担𡝰拕𢸍捬𤧟㨗搸揸𡎎𡟼撐澊𢸶頔𤂌𥜝擡擥鑻㩦携㩗敍漖𤨨𤨣斅敭敟𣁾斵𤥀䬷旑䃘𡠩无旣忟𣐀昘𣇷𣇸晄𣆤𣆥晋𠹵晧𥇦晳晴𡸽𣈱𨗴𣇈𥌓矅𢣷馤朂𤎜𤨡㬫槺𣟂杞杧杢𤇍𩃭柗䓩栢湐鈼栁𣏦𦶠桝"
  ],
  [
    "fd40",
    "𣑯槡樋𨫟楳棃𣗍椁椀㴲㨁𣘼㮀枬楡𨩊䋼椶榘㮡𠏉荣傐槹𣙙𢄪橅𣜃檝㯳枱櫈𩆜㰍欝𠤣惞欵歴𢟍溵𣫛𠎵𡥘㝀吡𣭚毡𣻼毜氷𢒋𤣱𦭑汚舦汹𣶼䓅𣶽𤆤𤤌𤤀"
  ],
  [
    "fda1",
    "𣳉㛥㳫𠴲鮃𣇹𢒑羏样𦴥𦶡𦷫涖浜湼漄𤥿𤂅𦹲蔳𦽴凇沜渝萮𨬡港𣸯瑓𣾂秌湏媑𣁋濸㜍澝𣸰滺𡒗𤀽䕕鏰潄潜㵎潴𩅰㴻澟𤅄濓𤂑𤅕𤀹𣿰𣾴𤄿凟𤅖𤅗𤅀𦇝灋灾炧炁烌烕烖烟䄄㷨熴熖𤉷焫煅媈煊煮岜𤍥煏鍢𤋁焬𤑚𤨧𤨢熺𨯨炽爎"
  ],
  [
    "fe40",
    "鑂爕夑鑃爤鍁𥘅爮牀𤥴梽牕牗㹕𣁄栍漽犂猪猫𤠣𨠫䣭𨠄猨献珏玪𠰺𦨮珉瑉𤇢𡛧𤨤昣㛅𤦷𤦍𤧻珷琕椃𤨦琹𠗃㻗瑜𢢭瑠𨺲瑇珤瑶莹瑬㜰瑴鏱樬璂䥓𤪌"
  ],
  [
    "fea1",
    "𤅟𤩹𨮏孆𨰃𡢞瓈𡦈甎瓩甞𨻙𡩋寗𨺬鎅畍畊畧畮𤾂㼄𤴓疎瑝疞疴瘂瘬癑癏癯癶𦏵皐臯㟸𦤑𦤎皡皥皷盌𦾟葢𥂝𥅽𡸜眞眦着撯𥈠睘𣊬瞯𨥤𨥨𡛁矴砉𡍶𤨒棊碯磇磓隥礮𥗠磗礴碱𧘌辸袄𨬫𦂃𢘜禆褀椂禀𥡗禝𧬹礼禩渪𧄦㺨秆𩄍秔"
  ]
];
var wc, Wf;
function o8() {
  return Wf || (Wf = 1, wc = {
    // == Japanese/ShiftJIS ====================================================
    // All japanese encodings are based on JIS X set of standards:
    // JIS X 0201 - Single-byte encoding of ASCII + ¥ + Kana chars at 0xA1-0xDF.
    // JIS X 0208 - Main set of 6879 characters, placed in 94x94 plane, to be encoded by 2 bytes. 
    //              Has several variations in 1978, 1983, 1990 and 1997.
    // JIS X 0212 - Supplementary plane of 6067 chars in 94x94 plane. 1990. Effectively dead.
    // JIS X 0213 - Extension and modern replacement of 0208 and 0212. Total chars: 11233.
    //              2 planes, first is superset of 0208, second - revised 0212.
    //              Introduced in 2000, revised 2004. Some characters are in Unicode Plane 2 (0x2xxxx)
    // Byte encodings are:
    //  * Shift_JIS: Compatible with 0201, uses not defined chars in top half as lead bytes for double-byte
    //               encoding of 0208. Lead byte ranges: 0x81-0x9F, 0xE0-0xEF; Trail byte ranges: 0x40-0x7E, 0x80-0x9E, 0x9F-0xFC.
    //               Windows CP932 is a superset of Shift_JIS. Some companies added more chars, notably KDDI.
    //  * EUC-JP:    Up to 3 bytes per character. Used mostly on *nixes.
    //               0x00-0x7F       - lower part of 0201
    //               0x8E, 0xA1-0xDF - upper part of 0201
    //               (0xA1-0xFE)x2   - 0208 plane (94x94).
    //               0x8F, (0xA1-0xFE)x2 - 0212 plane (94x94).
    //  * JIS X 208: 7-bit, direct encoding of 0208. Byte ranges: 0x21-0x7E (94 values). Uncommon.
    //               Used as-is in ISO2022 family.
    //  * ISO2022-JP: Stateful encoding, with escape sequences to switch between ASCII, 
    //                0201-1976 Roman, 0208-1978, 0208-1983.
    //  * ISO2022-JP-1: Adds esc seq for 0212-1990.
    //  * ISO2022-JP-2: Adds esc seq for GB2313-1980, KSX1001-1992, ISO8859-1, ISO8859-7.
    //  * ISO2022-JP-3: Adds esc seq for 0201-1976 Kana set, 0213-2000 Planes 1, 2.
    //  * ISO2022-JP-2004: Adds 0213-2004 Plane 1.
    //
    // After JIS X 0213 appeared, Shift_JIS-2004, EUC-JISX0213 and ISO2022-JP-2004 followed, with just changing the planes.
    //
    // Overall, it seems that it's a mess :( http://www8.plala.or.jp/tkubota1/unicode-symbols-map2.html
    shiftjis: {
      type: "_dbcs",
      table: function() {
        return QS;
      },
      encodeAdd: { "¥": 92, "‾": 126 },
      encodeSkipVals: [{ from: 60736, to: 63808 }]
    },
    csshiftjis: "shiftjis",
    mskanji: "shiftjis",
    sjis: "shiftjis",
    windows31j: "shiftjis",
    ms31j: "shiftjis",
    xsjis: "shiftjis",
    windows932: "shiftjis",
    ms932: "shiftjis",
    932: "shiftjis",
    cp932: "shiftjis",
    eucjp: {
      type: "_dbcs",
      table: function() {
        return e8;
      },
      encodeAdd: { "¥": 92, "‾": 126 }
    },
    // TODO: KDDI extension to Shift_JIS
    // TODO: IBM CCSID 942 = CP932, but F0-F9 custom chars and other char changes.
    // TODO: IBM CCSID 943 = Shift_JIS = CP932 with original Shift_JIS lower 128 chars.
    // == Chinese/GBK ==========================================================
    // http://en.wikipedia.org/wiki/GBK
    // We mostly implement W3C recommendation: https://www.w3.org/TR/encoding/#gbk-encoder
    // Oldest GB2312 (1981, ~7600 chars) is a subset of CP936
    gb2312: "cp936",
    gb231280: "cp936",
    gb23121980: "cp936",
    csgb2312: "cp936",
    csiso58gb231280: "cp936",
    euccn: "cp936",
    // Microsoft's CP936 is a subset and approximation of GBK.
    windows936: "cp936",
    ms936: "cp936",
    936: "cp936",
    cp936: {
      type: "_dbcs",
      table: function() {
        return bc;
      }
    },
    // GBK (~22000 chars) is an extension of CP936 that added user-mapped chars and some other.
    gbk: {
      type: "_dbcs",
      table: function() {
        return bc.concat(Hf);
      }
    },
    xgbk: "gbk",
    isoir58: "gbk",
    // GB18030 is an algorithmic extension of GBK.
    // Main source: https://www.w3.org/TR/encoding/#gbk-encoder
    // http://icu-project.org/docs/papers/gb18030.html
    // http://source.icu-project.org/repos/icu/data/trunk/charset/data/xml/gb-18030-2000.xml
    // http://www.khngai.com/chinese/charmap/tblgbk.php?page=0
    gb18030: {
      type: "_dbcs",
      table: function() {
        return bc.concat(Hf);
      },
      gb18030: function() {
        return r8;
      },
      encodeSkipVals: [128],
      encodeAdd: { "€": 41699 }
    },
    chinese: "gb18030",
    // == Korean ===============================================================
    // EUC-KR, KS_C_5601 and KS X 1001 are exactly the same.
    windows949: "cp949",
    ms949: "cp949",
    949: "cp949",
    cp949: {
      type: "_dbcs",
      table: function() {
        return i8;
      }
    },
    cseuckr: "cp949",
    csksc56011987: "cp949",
    euckr: "cp949",
    isoir149: "cp949",
    korean: "cp949",
    ksc56011987: "cp949",
    ksc56011989: "cp949",
    ksc5601: "cp949",
    // == Big5/Taiwan/Hong Kong ================================================
    // There are lots of tables for Big5 and cp950. Please see the following links for history:
    // http://moztw.org/docs/big5/  http://www.haible.de/bruno/charsets/conversion-tables/Big5.html
    // Variations, in roughly number of defined chars:
    //  * Windows CP 950: Microsoft variant of Big5. Canonical: http://www.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/WINDOWS/CP950.TXT
    //  * Windows CP 951: Microsoft variant of Big5-HKSCS-2001. Seems to be never public. http://me.abelcheung.org/articles/research/what-is-cp951/
    //  * Big5-2003 (Taiwan standard) almost superset of cp950.
    //  * Unicode-at-on (UAO) / Mozilla 1.8. Falling out of use on the Web. Not supported by other browsers.
    //  * Big5-HKSCS (-2001, -2004, -2008). Hong Kong standard. 
    //    many unicode code points moved from PUA to Supplementary plane (U+2XXXX) over the years.
    //    Plus, it has 4 combining sequences.
    //    Seems that Mozilla refused to support it for 10 yrs. https://bugzilla.mozilla.org/show_bug.cgi?id=162431 https://bugzilla.mozilla.org/show_bug.cgi?id=310299
    //    because big5-hkscs is the only encoding to include astral characters in non-algorithmic way.
    //    Implementations are not consistent within browsers; sometimes labeled as just big5.
    //    MS Internet Explorer switches from big5 to big5-hkscs when a patch applied.
    //    Great discussion & recap of what's going on https://bugzilla.mozilla.org/show_bug.cgi?id=912470#c31
    //    In the encoder, it might make sense to support encoding old PUA mappings to Big5 bytes seq-s.
    //    Official spec: http://www.ogcio.gov.hk/en/business/tech_promotion/ccli/terms/doc/2003cmp_2008.txt
    //                   http://www.ogcio.gov.hk/tc/business/tech_promotion/ccli/terms/doc/hkscs-2008-big5-iso.txt
    // 
    // Current understanding of how to deal with Big5(-HKSCS) is in the Encoding Standard, http://encoding.spec.whatwg.org/#big5-encoder
    // Unicode mapping (http://www.unicode.org/Public/MAPPINGS/OBSOLETE/EASTASIA/OTHER/BIG5.TXT) is said to be wrong.
    windows950: "cp950",
    ms950: "cp950",
    950: "cp950",
    cp950: {
      type: "_dbcs",
      table: function() {
        return Gf;
      }
    },
    // Big5 has many variations and is an extension of cp950. We use Encoding Standard's as a consensus.
    big5: "big5hkscs",
    big5hkscs: {
      type: "_dbcs",
      table: function() {
        return Gf.concat(a8);
      },
      encodeSkipVals: [41676]
    },
    cnbig5: "big5hkscs",
    csbig5: "big5hkscs",
    xxbig5: "big5hkscs"
  }), wc;
}
var Vf;
function s8() {
  return Vf || (Vf = 1, function(e) {
    for (var t = [
      GS(),
      WS(),
      VS(),
      YS(),
      XS(),
      KS(),
      JS(),
      ZS(),
      o8()
    ], n = 0; n < t.length; n++) {
      var r = t[n];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
  }(hc)), hc;
}
var Ec, Yf;
function c8() {
  if (Yf) return Ec;
  Yf = 1;
  var e = Nt.Buffer, t = ie.Transform;
  Ec = function(i) {
    i.encodeStream = function(o, c) {
      return new n(i.getEncoder(o, c), c);
    }, i.decodeStream = function(o, c) {
      return new r(i.getDecoder(o, c), c);
    }, i.supportsStreams = !0, i.IconvLiteEncoderStream = n, i.IconvLiteDecoderStream = r, i._collect = r.prototype.collect;
  };
  function n(i, a) {
    this.conv = i, a = a || {}, a.decodeStrings = !1, t.call(this, a);
  }
  n.prototype = Object.create(t.prototype, {
    constructor: { value: n }
  }), n.prototype._transform = function(i, a, o) {
    if (typeof i != "string")
      return o(new Error("Iconv encoding stream needs strings as its input."));
    try {
      var c = this.conv.write(i);
      c && c.length && this.push(c), o();
    } catch (s) {
      o(s);
    }
  }, n.prototype._flush = function(i) {
    try {
      var a = this.conv.end();
      a && a.length && this.push(a), i();
    } catch (o) {
      i(o);
    }
  }, n.prototype.collect = function(i) {
    var a = [];
    return this.on("error", i), this.on("data", function(o) {
      a.push(o);
    }), this.on("end", function() {
      i(null, e.concat(a));
    }), this;
  };
  function r(i, a) {
    this.conv = i, a = a || {}, a.encoding = this.encoding = "utf8", t.call(this, a);
  }
  return r.prototype = Object.create(t.prototype, {
    constructor: { value: r }
  }), r.prototype._transform = function(i, a, o) {
    if (!e.isBuffer(i))
      return o(new Error("Iconv decoding stream needs buffers as its input."));
    try {
      var c = this.conv.write(i);
      c && c.length && this.push(c, this.encoding), o();
    } catch (s) {
      o(s);
    }
  }, r.prototype._flush = function(i) {
    try {
      var a = this.conv.end();
      a && a.length && this.push(a, this.encoding), i();
    } catch (o) {
      i(o);
    }
  }, r.prototype.collect = function(i) {
    var a = "";
    return this.on("error", i), this.on("data", function(o) {
      a += o;
    }), this.on("end", function() {
      i(null, a);
    }), this;
  }, Ec;
}
var _c, Xf;
function l8() {
  if (Xf) return _c;
  Xf = 1;
  var e = Nt.Buffer;
  return _c = function(t) {
    var n = void 0;
    t.supportsNodeEncodingsExtension = !(e.from || new e(0) instanceof Uint8Array), t.extendNodeEncodings = function() {
      if (!n) {
        if (n = {}, !t.supportsNodeEncodingsExtension) {
          console.error("ACTION NEEDED: require('iconv-lite').extendNodeEncodings() is not supported in your version of Node"), console.error("See more info at https://github.com/ashtuchkin/iconv-lite/wiki/Node-v4-compatibility");
          return;
        }
        var i = {
          hex: !0,
          utf8: !0,
          "utf-8": !0,
          ascii: !0,
          binary: !0,
          base64: !0,
          ucs2: !0,
          "ucs-2": !0,
          utf16le: !0,
          "utf-16le": !0
        };
        e.isNativeEncoding = function(c) {
          return c && i[c.toLowerCase()];
        };
        var a = Nt.SlowBuffer;
        if (n.SlowBufferToString = a.prototype.toString, a.prototype.toString = function(c, s, u) {
          return c = String(c || "utf8").toLowerCase(), e.isNativeEncoding(c) ? n.SlowBufferToString.call(this, c, s, u) : (typeof s > "u" && (s = 0), typeof u > "u" && (u = this.length), t.decode(this.slice(s, u), c));
        }, n.SlowBufferWrite = a.prototype.write, a.prototype.write = function(c, s, u, l) {
          if (isFinite(s))
            isFinite(u) || (l = u, u = void 0);
          else {
            var p = l;
            l = s, s = u, u = p;
          }
          s = +s || 0;
          var d = this.length - s;
          if (u ? (u = +u, u > d && (u = d)) : u = d, l = String(l || "utf8").toLowerCase(), e.isNativeEncoding(l))
            return n.SlowBufferWrite.call(this, c, s, u, l);
          if (c.length > 0 && (u < 0 || s < 0))
            throw new RangeError("attempt to write beyond buffer bounds");
          var m = t.encode(c, l);
          return m.length < u && (u = m.length), m.copy(this, s, 0, u), u;
        }, n.BufferIsEncoding = e.isEncoding, e.isEncoding = function(c) {
          return e.isNativeEncoding(c) || t.encodingExists(c);
        }, n.BufferByteLength = e.byteLength, e.byteLength = a.byteLength = function(c, s) {
          return s = String(s || "utf8").toLowerCase(), e.isNativeEncoding(s) ? n.BufferByteLength.call(this, c, s) : t.encode(c, s).length;
        }, n.BufferToString = e.prototype.toString, e.prototype.toString = function(c, s, u) {
          return c = String(c || "utf8").toLowerCase(), e.isNativeEncoding(c) ? n.BufferToString.call(this, c, s, u) : (typeof s > "u" && (s = 0), typeof u > "u" && (u = this.length), t.decode(this.slice(s, u), c));
        }, n.BufferWrite = e.prototype.write, e.prototype.write = function(c, s, u, l) {
          var p = s, d = u, m = l;
          if (isFinite(s))
            isFinite(u) || (l = u, u = void 0);
          else {
            var g = l;
            l = s, s = u, u = g;
          }
          if (l = String(l || "utf8").toLowerCase(), e.isNativeEncoding(l))
            return n.BufferWrite.call(this, c, p, d, m);
          s = +s || 0;
          var v = this.length - s;
          if (u ? (u = +u, u > v && (u = v)) : u = v, c.length > 0 && (u < 0 || s < 0))
            throw new RangeError("attempt to write beyond buffer bounds");
          var y = t.encode(c, l);
          return y.length < u && (u = y.length), y.copy(this, s, 0, u), u;
        }, t.supportsStreams) {
          var o = ie.Readable;
          n.ReadableSetEncoding = o.prototype.setEncoding, o.prototype.setEncoding = function(s, u) {
            this._readableState.decoder = t.getDecoder(s, u), this._readableState.encoding = s;
          }, o.prototype.collect = t._collect;
        }
      }
    }, t.undoExtendNodeEncodings = function() {
      if (t.supportsNodeEncodingsExtension) {
        if (!n)
          throw new Error("require('iconv-lite').undoExtendNodeEncodings(): Nothing to undo; extendNodeEncodings() is not called.");
        delete e.isNativeEncoding;
        var i = Nt.SlowBuffer;
        if (i.prototype.toString = n.SlowBufferToString, i.prototype.write = n.SlowBufferWrite, e.isEncoding = n.BufferIsEncoding, e.byteLength = n.BufferByteLength, e.prototype.toString = n.BufferToString, e.prototype.write = n.BufferWrite, t.supportsStreams) {
          var a = ie.Readable;
          a.prototype.setEncoding = n.ReadableSetEncoding, delete a.prototype.collect;
        }
        n = void 0;
      }
    };
  }, _c;
}
var Kf;
function u8() {
  return Kf || (Kf = 1, function(e) {
    var t = Vn().Buffer, n = HS(), r = e.exports;
    r.encodings = null, r.defaultCharUnicode = "�", r.defaultCharSingleByte = "?", r.encode = function(c, s, u) {
      c = "" + (c || "");
      var l = r.getEncoder(s, u), p = l.write(c), d = l.end();
      return d && d.length > 0 ? t.concat([p, d]) : p;
    }, r.decode = function(c, s, u) {
      typeof c == "string" && (r.skipDecodeWarning || (console.error("Iconv-lite warning: decode()-ing strings is deprecated. Refer to https://github.com/ashtuchkin/iconv-lite/wiki/Use-Buffers-when-decoding"), r.skipDecodeWarning = !0), c = t.from("" + (c || ""), "binary"));
      var l = r.getDecoder(s, u), p = l.write(c), d = l.end();
      return d ? p + d : p;
    }, r.encodingExists = function(c) {
      try {
        return r.getCodec(c), !0;
      } catch {
        return !1;
      }
    }, r.toEncoding = r.encode, r.fromEncoding = r.decode, r._codecDataCache = {}, r.getCodec = function(c) {
      r.encodings || (r.encodings = s8());
      for (var s = r._canonicalizeEncoding(c), u = {}; ; ) {
        var l = r._codecDataCache[s];
        if (l)
          return l;
        var p = r.encodings[s];
        switch (typeof p) {
          case "string":
            s = p;
            break;
          case "object":
            for (var d in p)
              u[d] = p[d];
            u.encodingName || (u.encodingName = s), s = p.type;
            break;
          case "function":
            return u.encodingName || (u.encodingName = s), l = new p(u, r), r._codecDataCache[u.encodingName] = l, l;
          default:
            throw new Error("Encoding not recognized: '" + c + "' (searched as: '" + s + "')");
        }
      }
    }, r._canonicalizeEncoding = function(o) {
      return ("" + o).toLowerCase().replace(/:\d{4}$|[^0-9a-z]/g, "");
    }, r.getEncoder = function(c, s) {
      var u = r.getCodec(c), l = new u.encoder(s, u);
      return u.bomAware && s && s.addBOM && (l = new n.PrependBOM(l, s)), l;
    }, r.getDecoder = function(c, s) {
      var u = r.getCodec(c), l = new u.decoder(s, u);
      return u.bomAware && !(s && s.stripBOM === !1) && (l = new n.StripBOM(l, s)), l;
    };
    var i = typeof process < "u" && process.versions && process.versions.node;
    if (i) {
      var a = i.split(".").map(Number);
      (a[0] > 0 || a[1] >= 10) && c8()(r), l8()(r);
    }
  }(fc)), fc.exports;
}
const Ea = Rt, p8 = ie, f8 = zS, _a = me;
let Sc;
const Tn = Symbol("ZipUncompressStream#yauzlCallback"), Jf = Symbol("ZipUncompressStream#stripName"), d8 = { lazyEntries: !0, decodeStrings: !1 };
function h8(e) {
  const t = e.externalFileAttributes >> 16 || 33188;
  return [
    448,
    56,
    7
    /* S_IRWXO */
  ].map((n) => t & n).reduce(
    (n, r) => n + r,
    t & 61440
    /* S_IFMT */
  );
}
let m8 = class extends f8 {
  constructor(t) {
    t = t || {}, super(t), this._chunks = [], this._strip = Number(t.strip) || 0, this._zipFileNameEncoding = t.zipFileNameEncoding || "utf8", this._zipFileNameEncoding === "utf-8" && (this._zipFileNameEncoding = "utf8"), this[Tn] = this[Tn].bind(this);
    const n = _a.sourceType(t.source), r = this._yauzlOpts = Object.assign({}, d8, t.yauzl);
    if (n === "file") {
      Ea.open(t.source, r, this[Tn]);
      return;
    }
    if (n === "buffer") {
      Ea.fromBuffer(t.source, r, this[Tn]);
      return;
    }
    if (n === "stream") {
      _a.streamToBuffer(t.source).then((i) => Ea.fromBuffer(i, r, this[Tn])).catch((i) => this.emit("error", i));
      return;
    }
    this.on("pipe", (i) => {
      i.unpipe(i), _a.streamToBuffer(i).then((a) => {
        this._chunks.push(a), a = Buffer.concat(this._chunks), Ea.fromBuffer(a, r, this[Tn]);
      }).catch((a) => this.emit("error", a));
    });
  }
  _write(t) {
    this._chunks.push(t);
  }
  [Tn](t, n) {
    if (t) return this.emit("error", t);
    n.readEntry(), n.on("entry", (i) => {
      const a = h8(i);
      Buffer.isBuffer(i.fileName) && (this._zipFileNameEncoding === "utf8" ? i.fileName = i.fileName.toString() : (Sc || (Sc = u8()), i.fileName = Sc.decode(i.fileName, this._zipFileNameEncoding)));
      const o = /[\\\/]$/.test(i.fileName) ? "directory" : "file", s = { name: i.fileName = this[Jf](i.fileName, o), type: o, yauzl: i, mode: a };
      if (o === "file")
        n.openReadStream(i, (u, l) => {
          if (u) return this.emit("error", u);
          this.emit("entry", s, l, r);
        });
      else {
        const u = new p8.Readable({ read() {
        } });
        this.emit("entry", s, u, r), setImmediate(() => u.emit("end"));
      }
    }).on("end", () => this.emit("finish")).on("error", (i) => this.emit("error", i));
    function r() {
      n.readEntry();
    }
  }
  [Jf](t, n) {
    return _a.stripFileName(this._strip, t, n);
  }
};
var v8 = m8;
const Ko = me, rv = xS, iv = TS, fu = v8;
dn.Stream = rv;
dn.FileStream = iv;
dn.UncompressStream = fu;
dn.compressDir = Ko.makeCompressDirFn(rv);
dn.compressFile = Ko.makeFileProcessFn(iv);
dn.uncompress = Ko.makeUncompressFn(fu);
dn.decompress = Ko.makeUncompressFn(fu);
var Ut = {}, Hi = {}, g8 = Pe, xl = ie;
Hi.createReadStream = function(e, t) {
  return new du(e, t);
};
var du = function(e, t) {
  e instanceof Buffer || typeof e == "string" ? (t = t || {}, xl.Readable.call(this, {
    highWaterMark: t.highWaterMark,
    encoding: t.encoding
  })) : xl.Readable.call(this, { objectMode: !0 }), this._object = e;
};
g8.inherits(du, xl.Readable);
du.prototype._read = function() {
  this.push(this._object), this._object = null;
};
const x8 = oe, y8 = Qe, b8 = me, w8 = Hi;
let E8 = class extends y8.Gzip {
  constructor(t) {
    t = t || {}, super(t.zlib);
    const n = b8.sourceType(t.source);
    if (n === "file") {
      const r = x8.createReadStream(t.source, t.fs);
      r.on("error", (i) => this.emit("error", i)), r.pipe(this);
      return;
    }
    if (n === "buffer") {
      const r = w8.createReadStream(t.source, t.streamifier);
      r.on("error", (i) => this.emit("error", i)), r.pipe(this);
      return;
    }
    n === "stream" && (t.source.on("error", (r) => this.emit("error", r)), t.source.pipe(this));
  }
};
var _8 = E8;
const S8 = oe, T8 = Qe, A8 = me, R8 = Hi;
let C8 = class extends T8.Unzip {
  constructor(t) {
    t = t || {}, super(t.zlib);
    const n = A8.sourceType(t.source);
    if (n === "file") {
      const r = S8.createReadStream(t.source, t.fs);
      r.on("error", (i) => this.emit("error", i)), r.pipe(this);
      return;
    }
    if (n === "buffer") {
      const r = R8.createReadStream(t.source, t.streamifier);
      r.on("error", (i) => this.emit("error", i)), r.pipe(this);
      return;
    }
    n === "stream" && (t.source.on("error", (r) => this.emit("error", r)), t.source.pipe(this));
  }
};
var O8 = C8;
const hu = me, av = _8, mu = O8;
Ut.FileStream = av;
Ut.UncompressStream = mu;
Ut.compressFile = hu.makeFileProcessFn(av);
Ut.uncompress = hu.makeFileProcessFn(mu);
Ut.decompress = hu.makeFileProcessFn(mu);
var mt = {};
const Zf = oe, $8 = ae, Qf = ie, I8 = Li, P8 = me, D8 = Go;
let ov = class extends Qf.Transform {
  constructor(t) {
    super(t);
    const n = I8.pack();
    n.on("data", (i) => this.push(i)), n.on("end", () => this.ready(!0));
    const r = P8.sourceType(t.source);
    if (r === "file")
      Zf.stat(t.source, (i, a) => {
        if (i) return this.emit("error", i);
        this.entry = n.entry({ name: t.relativePath || $8.basename(t.source), size: a.size, mode: a.mode & 511 }, (c) => {
          if (c) return this.emit("error", c);
          n.finalize();
        });
        const o = Zf.createReadStream(t.source, t.fs);
        o.on("error", (c) => this.emit("error", c)), o.pipe(this);
      });
    else if (r === "buffer") {
      if (!t.relativePath) return this.emit("error", "opts.relativePath is required if opts.source is a buffer");
      n.entry({ name: t.relativePath }, t.source), n.finalize(), this.end();
    } else {
      if (!t.relativePath) return process.nextTick(() => this.emit("error", "opts.relativePath is required"));
      if (t.size)
        this.entry = n.entry({ name: t.relativePath, size: t.size }, (i) => {
          if (i) return this.emit("error", i);
          n.finalize();
        });
      else {
        t.suppressSizeWarning || console.warn("You should specify the size of streamming data by opts.size to prevent all streaming data from loading into memory. If you are sure about memory cost, pass opts.suppressSizeWarning: true to suppress this warning");
        const i = [];
        this.entry = new Qf.Writable({
          write(a, o, c) {
            i.push(a), c();
          }
        }), this.entry.on("finish", () => {
          n.entry({ name: t.relativePath }, Buffer.concat(i)), n.finalize();
        });
      }
      r === "stream" && (t.source.on("error", (i) => this.emit("error", i)), t.source.pipe(this));
    }
  }
  _transform(t, n, r) {
    this.entry && this.entry.write(t, n, r);
  }
  _flush(t) {
    this.entry && this.entry.end(), this.ready(t);
  }
};
D8.mixin(ov.prototype);
var F8 = ov;
const N8 = oe, k8 = Li, L8 = me, U8 = Hi;
let B8 = class extends k8.extract {
  constructor(t) {
    t = t || {}, super(t);
    const n = L8.sourceType(t.source);
    if (n === "file") {
      const r = N8.createReadStream(t.source, t.fs);
      r.on("error", (i) => this.emit("error", i)), r.pipe(this);
      return;
    }
    if (n === "buffer") {
      const r = U8.createReadStream(t.source, t.streamifier);
      r.on("error", (i) => this.emit("error", i)), r.pipe(this);
      return;
    }
    n === "stream" && (t.source.on("error", (r) => this.emit("error", r)), t.source.pipe(this));
  }
};
var j8 = B8;
const Jo = me, sv = q0, cv = F8, vu = j8;
mt.Stream = sv;
mt.FileStream = cv;
mt.UncompressStream = vu;
mt.compressDir = Jo.makeCompressDirFn(sv);
mt.compressFile = Jo.makeFileProcessFn(cv);
mt.uncompress = Jo.makeUncompressFn(vu);
mt.decompress = Jo.makeUncompressFn(vu);
var mn = {};
const M8 = mt, q8 = Ut, z8 = M0;
let H8 = class extends z8 {
  constructor(t) {
    super(t);
    const n = this._tarStream = new M8.Stream();
    n.on("error", (i) => this.emit("error", i));
    const r = new q8.FileStream();
    r.on("end", () => this.push(null)), r.on("data", (i) => this.push(i)), r.on("error", (i) => this.emit("error", i)), n.pipe(r);
  }
  addEntry(t, n) {
    this._tarStream.addEntry(t, n);
  }
};
var G8 = H8;
const W8 = mt, V8 = Ut, ed = me, Y8 = ie, X8 = r0, K8 = Go;
let lv = class extends Y8.Transform {
  constructor(t) {
    t = t || {}, super(t);
    const n = this._sourceType = ed.sourceType(t.source), r = this._tarStream = new W8.FileStream(t);
    t = ed.clone(t), delete t.source;
    const i = new V8.FileStream(t);
    i.on("data", (a) => {
      this.push(a);
    }), i.on("end", () => this.ready(!0)), X8(r, i, (a) => {
      a && this.emit("error", a);
    }), n !== "stream" && n !== void 0 && this.end();
  }
  _transform(t, n, r) {
    this._tarStream.write(t, n, r);
  }
  _flush(t) {
    (this._sourceType === "stream" || this._sourceType === void 0) && this._tarStream.end(), this.ready(t);
  }
};
K8.mixin(lv.prototype);
var J8 = lv, Tc = Hn.EventEmitter, gu = ie.Writable, Z8 = Pe;
function xu(e) {
  gu.call(this, e);
}
Z8.inherits(xu, gu);
xu.prototype.emit = function(e) {
  if (e === "finish" && this._flush && !gu.prototype._flush)
    this._flush((function(n) {
      n ? Tc.prototype.emit.call(this, "error", n) : Tc.prototype.emit.call(this, "finish");
    }).bind(this));
  else {
    var t = Array.prototype.slice.call(arguments);
    Tc.prototype.emit.apply(this, t);
  }
};
var Q8 = xu;
const e2 = oe, td = me, t2 = Go, n2 = Hi, r2 = Q8, i2 = Ut.UncompressStream, a2 = mt.UncompressStream;
let uv = class extends r2 {
  constructor(t) {
    t = t || {}, super(t);
    const n = td.clone(t);
    n.source = void 0, this._gzipStream = new i2(n).on("error", (a) => this.emit("error", a));
    const r = new a2(n).on("finish", () => this.ready(!0)).on("entry", this.emit.bind(this, "entry")).on("error", (a) => this.emit("error", a));
    this._gzipStream.pipe(r);
    const i = td.sourceType(t.source);
    if (i === "file") {
      const a = e2.createReadStream(t.source, t.fs);
      a.on("error", (o) => this.emit("error", o)), a.pipe(this);
      return;
    }
    if (i === "buffer") {
      const a = n2.createReadStream(t.source, t.streamifier);
      a.on("error", (o) => this.emit("error", o)), a.pipe(this);
      return;
    }
    i === "stream" && (t.source.on("error", (a) => this.emit("error", a)), t.source.pipe(this));
  }
  _write(t, n, r) {
    this._gzipStream.write(t, n, r);
  }
  _flush(t) {
    this._gzipStream.end(), this.ready(t);
  }
};
t2.mixin(uv.prototype);
var o2 = uv;
const Zo = me, pv = G8, fv = J8, yu = o2;
mn.Stream = pv;
mn.FileStream = fv;
mn.UncompressStream = yu;
mn.compressDir = Zo.makeCompressDirFn(pv);
mn.compressFile = Zo.makeFileProcessFn(fv);
mn.uncompress = Zo.makeUncompressFn(yu);
mn.decompress = Zo.makeUncompressFn(yu);
ki.zip = dn;
ki.gzip = Ut;
ki.tar = mt;
ki.tgz = mn;
let Ac;
const s2 = async () => (Ac || (Ac = Yh(import.meta.url)("minidev")), Ac);
class dv {
  constructor(t) {
    xe(this, "windown");
    xe(this, "app_dir", ae.join(rn.getPath("documents"), "code-sync"));
    xe(this, "configPath", ae.join(this.app_dir, "config.json"));
    xe(this, "runConfig");
    // 上报配置
    xe(this, "reportConfig", () => {
      this.windown.webContents.send("init", this.runConfig);
    });
    // 下载文件
    xe(this, "downloadFile", async (t, n) => {
      const r = oe.createWriteStream(n);
      try {
        return this.sendLog("🚀 即将开始下载代码包......."), (await Ee({
          method: "get",
          url: t,
          responseType: "stream",
          timeout: 12e3
        })).data.pipe(r), await new Promise((a, o) => {
          r.on("finish", async () => {
            this.sendLog("代码包下载完成,空投已正确投放 🔥"), a(!0);
          }), r.on("error", o);
        });
      } catch (i) {
        return await r.close(), this.sendLog(` 😈 下载失败:${i.message}，特种兵半路被击毙...`, "error"), oe.unlinkSync(n), !1;
      }
    });
    // 解压文件
    xe(this, "unzipFile", async (t, n) => {
      this.sendLog("开始打开空投 🎁🎁🎁🎁");
      try {
        await ki.tgz.uncompress(t, n, { overwrite: !0 });
        const r = ["MG3", "AWM", "AMR", "M200", "GRZRA", "AUG", "P90"], i = r[Math.floor(Math.random() * r.length)];
        return this.sendLog(`🤩 空投里面居然有${i},大吉大利今晚肯定吃鸡 🐔`), oe.unlinkSync(t), !0;
      } catch (r) {
        return this.sendLog(`舔包失败，被老六蹲了: ${r.message}`, "error"), oe.unlinkSync(t), !1;
      }
    });
    // 获取默认开发者工具路径
    xe(this, "getDefaultDevToolPath", () => {
      const t = process.platform;
      return {
        darwin: {
          wechat: "/Applications/wechatwebdevtools.app/Contents/MacOS/cli",
          alipay: "/Applications/小程序开发者工具.app"
        },
        win32: {
          wechat: "C:\\Program Files (x86)\\Tencent\\微信web开发者工具\\cli.bat",
          alipay: "C:\\Program Files\\Program Files\\小程序开发者工具"
        }
      }[t];
    });
    // 读取配置文件
    xe(this, "readConfig", () => {
      const n = { proxy_url: "https://gh-proxy.com", ...this.getDefaultDevToolPath() };
      if (oe.existsSync(this.configPath)) {
        const r = oe.readFileSync(this.configPath, "utf8"), i = JSON.parse(r);
        this.runConfig = { ...n, ...i };
      } else
        this.runConfig = n;
      return this.writeConfig(this.runConfig), this.runConfig;
    });
    // 写入配置文件
    xe(this, "writeConfig", (t) => {
      oe.writeFileSync(this.configPath, JSON.stringify(t, null, 4), "utf8"), this.sendLog("配置文件已更新"), this.reportConfig();
    });
    // 启动支付宝
    xe(this, "startAlipayDevTool", async (t) => {
      try {
        const n = this.runConfig.alipay;
        if (!oe.existsSync(n))
          return this.sendLog("支付宝开发者工具路径不存在，请打开设置配置支付宝开发者工具路径", "error");
        const { minidev: r } = await s2();
        console.log(r, 144);
        const i = await r.startIde({
          project: t,
          appPath: n
        });
        this.sendLog("支付宝开发者工具启动成功");
      } catch (n) {
        this.sendLog(`启动支付宝开发者工具时发生错误: ${n.message}`, "error");
      }
    });
    // 启动微信开发者工具
    xe(this, "startWeChatDevTool", (t) => {
      var i, a;
      const n = this.runConfig.wechat;
      if (!oe.existsSync(n))
        return this.sendLog("微信开发者工具路径不存在，请打开设置配置微信开发者工具路径", "error");
      const r = mp(n, ["open", "--project", t], {
        shell: !0,
        timeout: 1e4
      });
      (i = r.stdout) == null || i.on("data", (o) => {
        const c = o.toString(), s = this.cleanAnsiCodes(c);
        s && this.sendLog(s), c.includes("Enable IDE Service") && setTimeout(() => {
          var u;
          (u = r.stdin) == null || u.write(`y
`);
        }, 100);
      }), (a = r.stderr) == null || a.on("data", (o) => {
        const c = o.toString(), s = this.cleanAnsiCodes(c);
        s && this.sendLog(s, "error");
      }), r.on("close", (o, c) => {
        o === 0 ? this.sendLog("微信开发者工具启动成功") : o === null || this.sendLog(`微信开发者工具启动失败，退出码: ${o}`, "error");
      }), r.on("error", (o) => {
        o.code === "TIMEOUT" ? this.sendLog("微信开发者工具启动超时", "error") : this.sendLog(`启动微信开发者工具时发生错误: ${o.message}`, "error");
      });
    });
    // 启动项目
    xe(this, "startDevTool", (t, n) => {
      const r = ae.dirname(n), i = t === "wechat" ? "mp-weixin" : "mp-alipay", a = ae.join(r, "dist", "build", i);
      if (!oe.existsSync(a))
        return this.sendLog(`项目路径不存在: ${a}`, "error");
      if (t == "wechat") {
        this.startWeChatDevTool(a);
        return;
      }
      this.startAlipayDevTool(a);
    });
    // 异步启动命令并实时捕获输出 (适用于长时间运行的进程)
    xe(this, "spawnCommandWithLogs", (t, n, r = {}) => new Promise((i, a) => {
      var c, s;
      this.sendLog(`🚀 执行命令: ${t} ${n.join(" ")}`);
      const o = mp(t, n, {
        shell: !0,
        ...r
      });
      (c = o.stdout) == null || c.on("data", (u) => {
        const l = u.toString().trim();
        l && this.sendLog(`📝 输出: ${l}`);
      }), (s = o.stderr) == null || s.on("data", (u) => {
        const l = u.toString().trim();
        l && this.sendLog(`⚠️ 错误: ${l}`, "error");
      }), o.on("close", (u) => {
        u === 0 ? (this.sendLog("✅ 命令执行完成"), i(!0)) : (this.sendLog(`❌ 命令执行失败，退出码: ${u}`, "error"), i(!1));
      }), o.on("error", (u) => {
        this.sendLog(`❌ 进程启动失败: ${u.message}`, "error"), a(u);
      }), r.timeout && setTimeout(() => {
        o.kill(), this.sendLog("⏰ 命令执行超时，已终止进程", "error"), i(!1);
      }, r.timeout);
    }));
    // 异步启动微信开发者工具 (如果需要实时输出)
    xe(this, "startWeChatDevToolAsync", async (t) => {
      const n = this.runConfig.wechat;
      return oe.existsSync(n) ? await this.spawnCommandWithLogs(n, ["open", "--project", t], {
        timeout: 1e4
      }) : this.sendLog("微信开发者工具路径不存在，请打开设置配置微信开发者工具路径", "error");
    });
    this.windown = t, oe.existsSync(this.configPath) || oe.writeFileSync(this.configPath, JSON.stringify({}, null, 4), "utf8"), this.readConfig();
  }
  // 增强的日志方法 (同时发送到UI和写入文件)
  sendLog(t, n = "default") {
    const r = lf().unix();
    this.windown.webContents.send("logs", {
      text: t,
      type: n,
      id: `${Math.random() + r}`,
      time: lf().format("YYYY-MM-DD HH:mm:ss")
    });
  }
  // 清理 ANSI 转义序列的工具函数
  cleanAnsiCodes(t) {
    return t.replace(/\x1b\[[0-9;]*[mGKHfJ]/g, "").replace(/\x1b\[[0-9]*[ABCD]/g, "").replace(/\x1b\[[0-9]*[H]/g, "").replace(/\x1b\[2J/g, "").replace(/\x1b\[K/g, "").trim();
  }
}
var wt = {}, Yn = {}, We = {};
We.fromCallback = function(e) {
  return Object.defineProperty(function(...t) {
    if (typeof t[t.length - 1] == "function") e.apply(this, t);
    else
      return new Promise((n, r) => {
        t.push((i, a) => i != null ? r(i) : n(a)), e.apply(this, t);
      });
  }, "name", { value: e.name });
};
We.fromPromise = function(e) {
  return Object.defineProperty(function(...t) {
    const n = t[t.length - 1];
    if (typeof n != "function") return e.apply(this, t);
    t.pop(), e.apply(this, t).then((r) => n(null, r), n);
  }, "name", { value: e.name });
};
var Yt = Kh, c2 = process.cwd, Ya = null, l2 = process.env.GRACEFUL_FS_PLATFORM || process.platform;
process.cwd = function() {
  return Ya || (Ya = c2.call(process)), Ya;
};
try {
  process.cwd();
} catch {
}
if (typeof process.chdir == "function") {
  var nd = process.chdir;
  process.chdir = function(e) {
    Ya = null, nd.call(process, e);
  }, Object.setPrototypeOf && Object.setPrototypeOf(process.chdir, nd);
}
var u2 = p2;
function p2(e) {
  Yt.hasOwnProperty("O_SYMLINK") && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./) && t(e), e.lutimes || n(e), e.chown = a(e.chown), e.fchown = a(e.fchown), e.lchown = a(e.lchown), e.chmod = r(e.chmod), e.fchmod = r(e.fchmod), e.lchmod = r(e.lchmod), e.chownSync = o(e.chownSync), e.fchownSync = o(e.fchownSync), e.lchownSync = o(e.lchownSync), e.chmodSync = i(e.chmodSync), e.fchmodSync = i(e.fchmodSync), e.lchmodSync = i(e.lchmodSync), e.stat = c(e.stat), e.fstat = c(e.fstat), e.lstat = c(e.lstat), e.statSync = s(e.statSync), e.fstatSync = s(e.fstatSync), e.lstatSync = s(e.lstatSync), e.chmod && !e.lchmod && (e.lchmod = function(l, p, d) {
    d && process.nextTick(d);
  }, e.lchmodSync = function() {
  }), e.chown && !e.lchown && (e.lchown = function(l, p, d, m) {
    m && process.nextTick(m);
  }, e.lchownSync = function() {
  }), l2 === "win32" && (e.rename = typeof e.rename != "function" ? e.rename : function(l) {
    function p(d, m, g) {
      var v = Date.now(), y = 0;
      l(d, m, function x(w) {
        if (w && (w.code === "EACCES" || w.code === "EPERM" || w.code === "EBUSY") && Date.now() - v < 6e4) {
          setTimeout(function() {
            e.stat(m, function(A, O) {
              A && A.code === "ENOENT" ? l(d, m, x) : g(w);
            });
          }, y), y < 100 && (y += 10);
          return;
        }
        g && g(w);
      });
    }
    return Object.setPrototypeOf && Object.setPrototypeOf(p, l), p;
  }(e.rename)), e.read = typeof e.read != "function" ? e.read : function(l) {
    function p(d, m, g, v, y, x) {
      var w;
      if (x && typeof x == "function") {
        var A = 0;
        w = function(O, k, q) {
          if (O && O.code === "EAGAIN" && A < 10)
            return A++, l.call(e, d, m, g, v, y, w);
          x.apply(this, arguments);
        };
      }
      return l.call(e, d, m, g, v, y, w);
    }
    return Object.setPrototypeOf && Object.setPrototypeOf(p, l), p;
  }(e.read), e.readSync = typeof e.readSync != "function" ? e.readSync : /* @__PURE__ */ function(l) {
    return function(p, d, m, g, v) {
      for (var y = 0; ; )
        try {
          return l.call(e, p, d, m, g, v);
        } catch (x) {
          if (x.code === "EAGAIN" && y < 10) {
            y++;
            continue;
          }
          throw x;
        }
    };
  }(e.readSync);
  function t(l) {
    l.lchmod = function(p, d, m) {
      l.open(
        p,
        Yt.O_WRONLY | Yt.O_SYMLINK,
        d,
        function(g, v) {
          if (g) {
            m && m(g);
            return;
          }
          l.fchmod(v, d, function(y) {
            l.close(v, function(x) {
              m && m(y || x);
            });
          });
        }
      );
    }, l.lchmodSync = function(p, d) {
      var m = l.openSync(p, Yt.O_WRONLY | Yt.O_SYMLINK, d), g = !0, v;
      try {
        v = l.fchmodSync(m, d), g = !1;
      } finally {
        if (g)
          try {
            l.closeSync(m);
          } catch {
          }
        else
          l.closeSync(m);
      }
      return v;
    };
  }
  function n(l) {
    Yt.hasOwnProperty("O_SYMLINK") && l.futimes ? (l.lutimes = function(p, d, m, g) {
      l.open(p, Yt.O_SYMLINK, function(v, y) {
        if (v) {
          g && g(v);
          return;
        }
        l.futimes(y, d, m, function(x) {
          l.close(y, function(w) {
            g && g(x || w);
          });
        });
      });
    }, l.lutimesSync = function(p, d, m) {
      var g = l.openSync(p, Yt.O_SYMLINK), v, y = !0;
      try {
        v = l.futimesSync(g, d, m), y = !1;
      } finally {
        if (y)
          try {
            l.closeSync(g);
          } catch {
          }
        else
          l.closeSync(g);
      }
      return v;
    }) : l.futimes && (l.lutimes = function(p, d, m, g) {
      g && process.nextTick(g);
    }, l.lutimesSync = function() {
    });
  }
  function r(l) {
    return l && function(p, d, m) {
      return l.call(e, p, d, function(g) {
        u(g) && (g = null), m && m.apply(this, arguments);
      });
    };
  }
  function i(l) {
    return l && function(p, d) {
      try {
        return l.call(e, p, d);
      } catch (m) {
        if (!u(m)) throw m;
      }
    };
  }
  function a(l) {
    return l && function(p, d, m, g) {
      return l.call(e, p, d, m, function(v) {
        u(v) && (v = null), g && g.apply(this, arguments);
      });
    };
  }
  function o(l) {
    return l && function(p, d, m) {
      try {
        return l.call(e, p, d, m);
      } catch (g) {
        if (!u(g)) throw g;
      }
    };
  }
  function c(l) {
    return l && function(p, d, m) {
      typeof d == "function" && (m = d, d = null);
      function g(v, y) {
        y && (y.uid < 0 && (y.uid += 4294967296), y.gid < 0 && (y.gid += 4294967296)), m && m.apply(this, arguments);
      }
      return d ? l.call(e, p, d, g) : l.call(e, p, g);
    };
  }
  function s(l) {
    return l && function(p, d) {
      var m = d ? l.call(e, p, d) : l.call(e, p);
      return m && (m.uid < 0 && (m.uid += 4294967296), m.gid < 0 && (m.gid += 4294967296)), m;
    };
  }
  function u(l) {
    if (!l || l.code === "ENOSYS")
      return !0;
    var p = !process.getuid || process.getuid() !== 0;
    return !!(p && (l.code === "EINVAL" || l.code === "EPERM"));
  }
}
var rd = ie.Stream, f2 = d2;
function d2(e) {
  return {
    ReadStream: t,
    WriteStream: n
  };
  function t(r, i) {
    if (!(this instanceof t)) return new t(r, i);
    rd.call(this);
    var a = this;
    this.path = r, this.fd = null, this.readable = !0, this.paused = !1, this.flags = "r", this.mode = 438, this.bufferSize = 64 * 1024, i = i || {};
    for (var o = Object.keys(i), c = 0, s = o.length; c < s; c++) {
      var u = o[c];
      this[u] = i[u];
    }
    if (this.encoding && this.setEncoding(this.encoding), this.start !== void 0) {
      if (typeof this.start != "number")
        throw TypeError("start must be a Number");
      if (this.end === void 0)
        this.end = 1 / 0;
      else if (typeof this.end != "number")
        throw TypeError("end must be a Number");
      if (this.start > this.end)
        throw new Error("start must be <= end");
      this.pos = this.start;
    }
    if (this.fd !== null) {
      process.nextTick(function() {
        a._read();
      });
      return;
    }
    e.open(this.path, this.flags, this.mode, function(l, p) {
      if (l) {
        a.emit("error", l), a.readable = !1;
        return;
      }
      a.fd = p, a.emit("open", p), a._read();
    });
  }
  function n(r, i) {
    if (!(this instanceof n)) return new n(r, i);
    rd.call(this), this.path = r, this.fd = null, this.writable = !0, this.flags = "w", this.encoding = "binary", this.mode = 438, this.bytesWritten = 0, i = i || {};
    for (var a = Object.keys(i), o = 0, c = a.length; o < c; o++) {
      var s = a[o];
      this[s] = i[s];
    }
    if (this.start !== void 0) {
      if (typeof this.start != "number")
        throw TypeError("start must be a Number");
      if (this.start < 0)
        throw new Error("start must be >= zero");
      this.pos = this.start;
    }
    this.busy = !1, this._queue = [], this.fd === null && (this._open = e.open, this._queue.push([this._open, this.path, this.flags, this.mode, void 0]), this.flush());
  }
}
var h2 = v2, m2 = Object.getPrototypeOf || function(e) {
  return e.__proto__;
};
function v2(e) {
  if (e === null || typeof e != "object")
    return e;
  if (e instanceof Object)
    var t = { __proto__: m2(e) };
  else
    var t = /* @__PURE__ */ Object.create(null);
  return Object.getOwnPropertyNames(e).forEach(function(n) {
    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
  }), t;
}
var he = oe, g2 = u2, x2 = f2, y2 = h2, Sa = Pe, ke, so;
typeof Symbol == "function" && typeof Symbol.for == "function" ? (ke = Symbol.for("graceful-fs.queue"), so = Symbol.for("graceful-fs.previous")) : (ke = "___graceful-fs.queue", so = "___graceful-fs.previous");
function b2() {
}
function hv(e, t) {
  Object.defineProperty(e, ke, {
    get: function() {
      return t;
    }
  });
}
var Ln = b2;
Sa.debuglog ? Ln = Sa.debuglog("gfs4") : /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") && (Ln = function() {
  var e = Sa.format.apply(Sa, arguments);
  e = "GFS4: " + e.split(/\n/).join(`
GFS4: `), console.error(e);
});
if (!he[ke]) {
  var w2 = Te[ke] || [];
  hv(he, w2), he.close = function(e) {
    function t(n, r) {
      return e.call(he, n, function(i) {
        i || id(), typeof r == "function" && r.apply(this, arguments);
      });
    }
    return Object.defineProperty(t, so, {
      value: e
    }), t;
  }(he.close), he.closeSync = function(e) {
    function t(n) {
      e.apply(he, arguments), id();
    }
    return Object.defineProperty(t, so, {
      value: e
    }), t;
  }(he.closeSync), /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") && process.on("exit", function() {
    Ln(he[ke]), wo.equal(he[ke].length, 0);
  });
}
Te[ke] || hv(Te, he[ke]);
var Ve = bu(y2(he));
process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !he.__patched && (Ve = bu(he), he.__patched = !0);
function bu(e) {
  g2(e), e.gracefulify = bu, e.createReadStream = k, e.createWriteStream = q;
  var t = e.readFile;
  e.readFile = n;
  function n(T, H, j) {
    return typeof H == "function" && (j = H, H = null), J(T, H, j);
    function J(ne, F, $, D) {
      return t(ne, F, function(b) {
        b && (b.code === "EMFILE" || b.code === "ENFILE") ? tr([J, [ne, F, $], b, D || Date.now(), Date.now()]) : typeof $ == "function" && $.apply(this, arguments);
      });
    }
  }
  var r = e.writeFile;
  e.writeFile = i;
  function i(T, H, j, J) {
    return typeof j == "function" && (J = j, j = null), ne(T, H, j, J);
    function ne(F, $, D, b, E) {
      return r(F, $, D, function(R) {
        R && (R.code === "EMFILE" || R.code === "ENFILE") ? tr([ne, [F, $, D, b], R, E || Date.now(), Date.now()]) : typeof b == "function" && b.apply(this, arguments);
      });
    }
  }
  var a = e.appendFile;
  a && (e.appendFile = o);
  function o(T, H, j, J) {
    return typeof j == "function" && (J = j, j = null), ne(T, H, j, J);
    function ne(F, $, D, b, E) {
      return a(F, $, D, function(R) {
        R && (R.code === "EMFILE" || R.code === "ENFILE") ? tr([ne, [F, $, D, b], R, E || Date.now(), Date.now()]) : typeof b == "function" && b.apply(this, arguments);
      });
    }
  }
  var c = e.copyFile;
  c && (e.copyFile = s);
  function s(T, H, j, J) {
    return typeof j == "function" && (J = j, j = 0), ne(T, H, j, J);
    function ne(F, $, D, b, E) {
      return c(F, $, D, function(R) {
        R && (R.code === "EMFILE" || R.code === "ENFILE") ? tr([ne, [F, $, D, b], R, E || Date.now(), Date.now()]) : typeof b == "function" && b.apply(this, arguments);
      });
    }
  }
  var u = e.readdir;
  e.readdir = p;
  var l = /^v[0-5]\./;
  function p(T, H, j) {
    typeof H == "function" && (j = H, H = null);
    var J = l.test(process.version) ? function($, D, b, E) {
      return u($, ne(
        $,
        D,
        b,
        E
      ));
    } : function($, D, b, E) {
      return u($, D, ne(
        $,
        D,
        b,
        E
      ));
    };
    return J(T, H, j);
    function ne(F, $, D, b) {
      return function(E, R) {
        E && (E.code === "EMFILE" || E.code === "ENFILE") ? tr([
          J,
          [F, $, D],
          E,
          b || Date.now(),
          Date.now()
        ]) : (R && R.sort && R.sort(), typeof D == "function" && D.call(this, E, R));
      };
    }
  }
  if (process.version.substr(0, 4) === "v0.8") {
    var d = x2(e);
    x = d.ReadStream, A = d.WriteStream;
  }
  var m = e.ReadStream;
  m && (x.prototype = Object.create(m.prototype), x.prototype.open = w);
  var g = e.WriteStream;
  g && (A.prototype = Object.create(g.prototype), A.prototype.open = O), Object.defineProperty(e, "ReadStream", {
    get: function() {
      return x;
    },
    set: function(T) {
      x = T;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(e, "WriteStream", {
    get: function() {
      return A;
    },
    set: function(T) {
      A = T;
    },
    enumerable: !0,
    configurable: !0
  });
  var v = x;
  Object.defineProperty(e, "FileReadStream", {
    get: function() {
      return v;
    },
    set: function(T) {
      v = T;
    },
    enumerable: !0,
    configurable: !0
  });
  var y = A;
  Object.defineProperty(e, "FileWriteStream", {
    get: function() {
      return y;
    },
    set: function(T) {
      y = T;
    },
    enumerable: !0,
    configurable: !0
  });
  function x(T, H) {
    return this instanceof x ? (m.apply(this, arguments), this) : x.apply(Object.create(x.prototype), arguments);
  }
  function w() {
    var T = this;
    te(T.path, T.flags, T.mode, function(H, j) {
      H ? (T.autoClose && T.destroy(), T.emit("error", H)) : (T.fd = j, T.emit("open", j), T.read());
    });
  }
  function A(T, H) {
    return this instanceof A ? (g.apply(this, arguments), this) : A.apply(Object.create(A.prototype), arguments);
  }
  function O() {
    var T = this;
    te(T.path, T.flags, T.mode, function(H, j) {
      H ? (T.destroy(), T.emit("error", H)) : (T.fd = j, T.emit("open", j));
    });
  }
  function k(T, H) {
    return new e.ReadStream(T, H);
  }
  function q(T, H) {
    return new e.WriteStream(T, H);
  }
  var W = e.open;
  e.open = te;
  function te(T, H, j, J) {
    return typeof j == "function" && (J = j, j = null), ne(T, H, j, J);
    function ne(F, $, D, b, E) {
      return W(F, $, D, function(R, N) {
        R && (R.code === "EMFILE" || R.code === "ENFILE") ? tr([ne, [F, $, D, b], R, E || Date.now(), Date.now()]) : typeof b == "function" && b.apply(this, arguments);
      });
    }
  }
  return e;
}
function tr(e) {
  Ln("ENQUEUE", e[0].name, e[1]), he[ke].push(e), wu();
}
var Ta;
function id() {
  for (var e = Date.now(), t = 0; t < he[ke].length; ++t)
    he[ke][t].length > 2 && (he[ke][t][3] = e, he[ke][t][4] = e);
  wu();
}
function wu() {
  if (clearTimeout(Ta), Ta = void 0, he[ke].length !== 0) {
    var e = he[ke].shift(), t = e[0], n = e[1], r = e[2], i = e[3], a = e[4];
    if (i === void 0)
      Ln("RETRY", t.name, n), t.apply(null, n);
    else if (Date.now() - i >= 6e4) {
      Ln("TIMEOUT", t.name, n);
      var o = n.pop();
      typeof o == "function" && o.call(null, r);
    } else {
      var c = Date.now() - a, s = Math.max(a - i, 1), u = Math.min(s * 1.2, 100);
      c >= u ? (Ln("RETRY", t.name, n), t.apply(null, n.concat([i]))) : he[ke].push(e);
    }
    Ta === void 0 && (Ta = setTimeout(wu, 0));
  }
}
(function(e) {
  const t = We.fromCallback, n = Ve, r = [
    "access",
    "appendFile",
    "chmod",
    "chown",
    "close",
    "copyFile",
    "fchmod",
    "fchown",
    "fdatasync",
    "fstat",
    "fsync",
    "ftruncate",
    "futimes",
    "lchmod",
    "lchown",
    "link",
    "lstat",
    "mkdir",
    "mkdtemp",
    "open",
    "opendir",
    "readdir",
    "readFile",
    "readlink",
    "realpath",
    "rename",
    "rm",
    "rmdir",
    "stat",
    "symlink",
    "truncate",
    "unlink",
    "utimes",
    "writeFile"
  ].filter((i) => typeof n[i] == "function");
  Object.assign(e, n), r.forEach((i) => {
    e[i] = t(n[i]);
  }), e.exists = function(i, a) {
    return typeof a == "function" ? n.exists(i, a) : new Promise((o) => n.exists(i, o));
  }, e.read = function(i, a, o, c, s, u) {
    return typeof u == "function" ? n.read(i, a, o, c, s, u) : new Promise((l, p) => {
      n.read(i, a, o, c, s, (d, m, g) => {
        if (d) return p(d);
        l({ bytesRead: m, buffer: g });
      });
    });
  }, e.write = function(i, a, ...o) {
    return typeof o[o.length - 1] == "function" ? n.write(i, a, ...o) : new Promise((c, s) => {
      n.write(i, a, ...o, (u, l, p) => {
        if (u) return s(u);
        c({ bytesWritten: l, buffer: p });
      });
    });
  }, typeof n.writev == "function" && (e.writev = function(i, a, ...o) {
    return typeof o[o.length - 1] == "function" ? n.writev(i, a, ...o) : new Promise((c, s) => {
      n.writev(i, a, ...o, (u, l, p) => {
        if (u) return s(u);
        c({ bytesWritten: l, buffers: p });
      });
    });
  }), typeof n.realpath.native == "function" ? e.realpath.native = t(n.realpath.native) : process.emitWarning(
    "fs.realpath.native is not a function. Is fs being monkey-patched?",
    "Warning",
    "fs-extra-WARN0003"
  );
})(Yn);
var Eu = {}, mv = {};
const E2 = ae;
mv.checkPath = function(t) {
  if (process.platform === "win32" && /[<>:"|?*]/.test(t.replace(E2.parse(t).root, ""))) {
    const r = new Error(`Path contains invalid characters: ${t}`);
    throw r.code = "EINVAL", r;
  }
};
const vv = Yn, { checkPath: gv } = mv, xv = (e) => {
  const t = { mode: 511 };
  return typeof e == "number" ? e : { ...t, ...e }.mode;
};
Eu.makeDir = async (e, t) => (gv(e), vv.mkdir(e, {
  mode: xv(t),
  recursive: !0
}));
Eu.makeDirSync = (e, t) => (gv(e), vv.mkdirSync(e, {
  mode: xv(t),
  recursive: !0
}));
const _2 = We.fromPromise, { makeDir: S2, makeDirSync: Rc } = Eu, Cc = _2(S2);
var Ct = {
  mkdirs: Cc,
  mkdirsSync: Rc,
  // alias
  mkdirp: Cc,
  mkdirpSync: Rc,
  ensureDir: Cc,
  ensureDirSync: Rc
};
const T2 = We.fromPromise, yv = Yn;
function A2(e) {
  return yv.access(e).then(() => !0).catch(() => !1);
}
var Xn = {
  pathExists: T2(A2),
  pathExistsSync: yv.existsSync
};
const Sr = Ve;
function R2(e, t, n, r) {
  Sr.open(e, "r+", (i, a) => {
    if (i) return r(i);
    Sr.futimes(a, t, n, (o) => {
      Sr.close(a, (c) => {
        r && r(o || c);
      });
    });
  });
}
function C2(e, t, n) {
  const r = Sr.openSync(e, "r+");
  return Sr.futimesSync(r, t, n), Sr.closeSync(r);
}
var bv = {
  utimesMillis: R2,
  utimesMillisSync: C2
};
const Or = Yn, Ie = ae, O2 = Pe;
function $2(e, t, n) {
  const r = n.dereference ? (i) => Or.stat(i, { bigint: !0 }) : (i) => Or.lstat(i, { bigint: !0 });
  return Promise.all([
    r(e),
    r(t).catch((i) => {
      if (i.code === "ENOENT") return null;
      throw i;
    })
  ]).then(([i, a]) => ({ srcStat: i, destStat: a }));
}
function I2(e, t, n) {
  let r;
  const i = n.dereference ? (o) => Or.statSync(o, { bigint: !0 }) : (o) => Or.lstatSync(o, { bigint: !0 }), a = i(e);
  try {
    r = i(t);
  } catch (o) {
    if (o.code === "ENOENT") return { srcStat: a, destStat: null };
    throw o;
  }
  return { srcStat: a, destStat: r };
}
function P2(e, t, n, r, i) {
  O2.callbackify($2)(e, t, r, (a, o) => {
    if (a) return i(a);
    const { srcStat: c, destStat: s } = o;
    if (s) {
      if (Gi(c, s)) {
        const u = Ie.basename(e), l = Ie.basename(t);
        return n === "move" && u !== l && u.toLowerCase() === l.toLowerCase() ? i(null, { srcStat: c, destStat: s, isChangingCase: !0 }) : i(new Error("Source and destination must not be the same."));
      }
      if (c.isDirectory() && !s.isDirectory())
        return i(new Error(`Cannot overwrite non-directory '${t}' with directory '${e}'.`));
      if (!c.isDirectory() && s.isDirectory())
        return i(new Error(`Cannot overwrite directory '${t}' with non-directory '${e}'.`));
    }
    return c.isDirectory() && _u(e, t) ? i(new Error(Qo(e, t, n))) : i(null, { srcStat: c, destStat: s });
  });
}
function D2(e, t, n, r) {
  const { srcStat: i, destStat: a } = I2(e, t, r);
  if (a) {
    if (Gi(i, a)) {
      const o = Ie.basename(e), c = Ie.basename(t);
      if (n === "move" && o !== c && o.toLowerCase() === c.toLowerCase())
        return { srcStat: i, destStat: a, isChangingCase: !0 };
      throw new Error("Source and destination must not be the same.");
    }
    if (i.isDirectory() && !a.isDirectory())
      throw new Error(`Cannot overwrite non-directory '${t}' with directory '${e}'.`);
    if (!i.isDirectory() && a.isDirectory())
      throw new Error(`Cannot overwrite directory '${t}' with non-directory '${e}'.`);
  }
  if (i.isDirectory() && _u(e, t))
    throw new Error(Qo(e, t, n));
  return { srcStat: i, destStat: a };
}
function wv(e, t, n, r, i) {
  const a = Ie.resolve(Ie.dirname(e)), o = Ie.resolve(Ie.dirname(n));
  if (o === a || o === Ie.parse(o).root) return i();
  Or.stat(o, { bigint: !0 }, (c, s) => c ? c.code === "ENOENT" ? i() : i(c) : Gi(t, s) ? i(new Error(Qo(e, n, r))) : wv(e, t, o, r, i));
}
function Ev(e, t, n, r) {
  const i = Ie.resolve(Ie.dirname(e)), a = Ie.resolve(Ie.dirname(n));
  if (a === i || a === Ie.parse(a).root) return;
  let o;
  try {
    o = Or.statSync(a, { bigint: !0 });
  } catch (c) {
    if (c.code === "ENOENT") return;
    throw c;
  }
  if (Gi(t, o))
    throw new Error(Qo(e, n, r));
  return Ev(e, t, a, r);
}
function Gi(e, t) {
  return t.ino && t.dev && t.ino === e.ino && t.dev === e.dev;
}
function _u(e, t) {
  const n = Ie.resolve(e).split(Ie.sep).filter((i) => i), r = Ie.resolve(t).split(Ie.sep).filter((i) => i);
  return n.reduce((i, a, o) => i && r[o] === a, !0);
}
function Qo(e, t, n) {
  return `Cannot ${n} '${e}' to a subdirectory of itself, '${t}'.`;
}
var kr = {
  checkPaths: P2,
  checkPathsSync: D2,
  checkParentPaths: wv,
  checkParentPathsSync: Ev,
  isSrcSubdir: _u,
  areIdentical: Gi
};
const Je = Ve, mi = ae, F2 = Ct.mkdirs, N2 = Xn.pathExists, k2 = bv.utimesMillis, vi = kr;
function L2(e, t, n, r) {
  typeof n == "function" && !r ? (r = n, n = {}) : typeof n == "function" && (n = { filter: n }), r = r || function() {
  }, n = n || {}, n.clobber = "clobber" in n ? !!n.clobber : !0, n.overwrite = "overwrite" in n ? !!n.overwrite : n.clobber, n.preserveTimestamps && process.arch === "ia32" && process.emitWarning(
    `Using the preserveTimestamps option in 32-bit node is not recommended;

	see https://github.com/jprichardson/node-fs-extra/issues/269`,
    "Warning",
    "fs-extra-WARN0001"
  ), vi.checkPaths(e, t, "copy", n, (i, a) => {
    if (i) return r(i);
    const { srcStat: o, destStat: c } = a;
    vi.checkParentPaths(e, o, t, "copy", (s) => s ? r(s) : n.filter ? _v(ad, c, e, t, n, r) : ad(c, e, t, n, r));
  });
}
function ad(e, t, n, r, i) {
  const a = mi.dirname(n);
  N2(a, (o, c) => {
    if (o) return i(o);
    if (c) return co(e, t, n, r, i);
    F2(a, (s) => s ? i(s) : co(e, t, n, r, i));
  });
}
function _v(e, t, n, r, i, a) {
  Promise.resolve(i.filter(n, r)).then((o) => o ? e(t, n, r, i, a) : a(), (o) => a(o));
}
function U2(e, t, n, r, i) {
  return r.filter ? _v(co, e, t, n, r, i) : co(e, t, n, r, i);
}
function co(e, t, n, r, i) {
  (r.dereference ? Je.stat : Je.lstat)(t, (o, c) => o ? i(o) : c.isDirectory() ? G2(c, e, t, n, r, i) : c.isFile() || c.isCharacterDevice() || c.isBlockDevice() ? B2(c, e, t, n, r, i) : c.isSymbolicLink() ? Y2(e, t, n, r, i) : c.isSocket() ? i(new Error(`Cannot copy a socket file: ${t}`)) : c.isFIFO() ? i(new Error(`Cannot copy a FIFO pipe: ${t}`)) : i(new Error(`Unknown file: ${t}`)));
}
function B2(e, t, n, r, i, a) {
  return t ? j2(e, n, r, i, a) : Sv(e, n, r, i, a);
}
function j2(e, t, n, r, i) {
  if (r.overwrite)
    Je.unlink(n, (a) => a ? i(a) : Sv(e, t, n, r, i));
  else return r.errorOnExist ? i(new Error(`'${n}' already exists`)) : i();
}
function Sv(e, t, n, r, i) {
  Je.copyFile(t, n, (a) => a ? i(a) : r.preserveTimestamps ? M2(e.mode, t, n, i) : es(n, e.mode, i));
}
function M2(e, t, n, r) {
  return q2(e) ? z2(n, e, (i) => i ? r(i) : od(e, t, n, r)) : od(e, t, n, r);
}
function q2(e) {
  return (e & 128) === 0;
}
function z2(e, t, n) {
  return es(e, t | 128, n);
}
function od(e, t, n, r) {
  H2(t, n, (i) => i ? r(i) : es(n, e, r));
}
function es(e, t, n) {
  return Je.chmod(e, t, n);
}
function H2(e, t, n) {
  Je.stat(e, (r, i) => r ? n(r) : k2(t, i.atime, i.mtime, n));
}
function G2(e, t, n, r, i, a) {
  return t ? Tv(n, r, i, a) : W2(e.mode, n, r, i, a);
}
function W2(e, t, n, r, i) {
  Je.mkdir(n, (a) => {
    if (a) return i(a);
    Tv(t, n, r, (o) => o ? i(o) : es(n, e, i));
  });
}
function Tv(e, t, n, r) {
  Je.readdir(e, (i, a) => i ? r(i) : Av(a, e, t, n, r));
}
function Av(e, t, n, r, i) {
  const a = e.pop();
  return a ? V2(e, a, t, n, r, i) : i();
}
function V2(e, t, n, r, i, a) {
  const o = mi.join(n, t), c = mi.join(r, t);
  vi.checkPaths(o, c, "copy", i, (s, u) => {
    if (s) return a(s);
    const { destStat: l } = u;
    U2(l, o, c, i, (p) => p ? a(p) : Av(e, n, r, i, a));
  });
}
function Y2(e, t, n, r, i) {
  Je.readlink(t, (a, o) => {
    if (a) return i(a);
    if (r.dereference && (o = mi.resolve(process.cwd(), o)), e)
      Je.readlink(n, (c, s) => c ? c.code === "EINVAL" || c.code === "UNKNOWN" ? Je.symlink(o, n, i) : i(c) : (r.dereference && (s = mi.resolve(process.cwd(), s)), vi.isSrcSubdir(o, s) ? i(new Error(`Cannot copy '${o}' to a subdirectory of itself, '${s}'.`)) : e.isDirectory() && vi.isSrcSubdir(s, o) ? i(new Error(`Cannot overwrite '${s}' with '${o}'.`)) : X2(o, n, i)));
    else
      return Je.symlink(o, n, i);
  });
}
function X2(e, t, n) {
  Je.unlink(t, (r) => r ? n(r) : Je.symlink(e, t, n));
}
var K2 = L2;
const je = Ve, gi = ae, J2 = Ct.mkdirsSync, Z2 = bv.utimesMillisSync, xi = kr;
function Q2(e, t, n) {
  typeof n == "function" && (n = { filter: n }), n = n || {}, n.clobber = "clobber" in n ? !!n.clobber : !0, n.overwrite = "overwrite" in n ? !!n.overwrite : n.clobber, n.preserveTimestamps && process.arch === "ia32" && process.emitWarning(
    `Using the preserveTimestamps option in 32-bit node is not recommended;

	see https://github.com/jprichardson/node-fs-extra/issues/269`,
    "Warning",
    "fs-extra-WARN0002"
  );
  const { srcStat: r, destStat: i } = xi.checkPathsSync(e, t, "copy", n);
  return xi.checkParentPathsSync(e, r, t, "copy"), e4(i, e, t, n);
}
function e4(e, t, n, r) {
  if (r.filter && !r.filter(t, n)) return;
  const i = gi.dirname(n);
  return je.existsSync(i) || J2(i), Rv(e, t, n, r);
}
function t4(e, t, n, r) {
  if (!(r.filter && !r.filter(t, n)))
    return Rv(e, t, n, r);
}
function Rv(e, t, n, r) {
  const a = (r.dereference ? je.statSync : je.lstatSync)(t);
  if (a.isDirectory()) return c4(a, e, t, n, r);
  if (a.isFile() || a.isCharacterDevice() || a.isBlockDevice()) return n4(a, e, t, n, r);
  if (a.isSymbolicLink()) return p4(e, t, n, r);
  throw a.isSocket() ? new Error(`Cannot copy a socket file: ${t}`) : a.isFIFO() ? new Error(`Cannot copy a FIFO pipe: ${t}`) : new Error(`Unknown file: ${t}`);
}
function n4(e, t, n, r, i) {
  return t ? r4(e, n, r, i) : Cv(e, n, r, i);
}
function r4(e, t, n, r) {
  if (r.overwrite)
    return je.unlinkSync(n), Cv(e, t, n, r);
  if (r.errorOnExist)
    throw new Error(`'${n}' already exists`);
}
function Cv(e, t, n, r) {
  return je.copyFileSync(t, n), r.preserveTimestamps && i4(e.mode, t, n), Su(n, e.mode);
}
function i4(e, t, n) {
  return a4(e) && o4(n, e), s4(t, n);
}
function a4(e) {
  return (e & 128) === 0;
}
function o4(e, t) {
  return Su(e, t | 128);
}
function Su(e, t) {
  return je.chmodSync(e, t);
}
function s4(e, t) {
  const n = je.statSync(e);
  return Z2(t, n.atime, n.mtime);
}
function c4(e, t, n, r, i) {
  return t ? Ov(n, r, i) : l4(e.mode, n, r, i);
}
function l4(e, t, n, r) {
  return je.mkdirSync(n), Ov(t, n, r), Su(n, e);
}
function Ov(e, t, n) {
  je.readdirSync(e).forEach((r) => u4(r, e, t, n));
}
function u4(e, t, n, r) {
  const i = gi.join(t, e), a = gi.join(n, e), { destStat: o } = xi.checkPathsSync(i, a, "copy", r);
  return t4(o, i, a, r);
}
function p4(e, t, n, r) {
  let i = je.readlinkSync(t);
  if (r.dereference && (i = gi.resolve(process.cwd(), i)), e) {
    let a;
    try {
      a = je.readlinkSync(n);
    } catch (o) {
      if (o.code === "EINVAL" || o.code === "UNKNOWN") return je.symlinkSync(i, n);
      throw o;
    }
    if (r.dereference && (a = gi.resolve(process.cwd(), a)), xi.isSrcSubdir(i, a))
      throw new Error(`Cannot copy '${i}' to a subdirectory of itself, '${a}'.`);
    if (je.statSync(n).isDirectory() && xi.isSrcSubdir(a, i))
      throw new Error(`Cannot overwrite '${a}' with '${i}'.`);
    return f4(i, n);
  } else
    return je.symlinkSync(i, n);
}
function f4(e, t) {
  return je.unlinkSync(t), je.symlinkSync(e, t);
}
var d4 = Q2;
const h4 = We.fromCallback;
var Tu = {
  copy: h4(K2),
  copySync: d4
};
const sd = Ve, $v = ae, ue = wo, yi = process.platform === "win32";
function Iv(e) {
  [
    "unlink",
    "chmod",
    "stat",
    "lstat",
    "rmdir",
    "readdir"
  ].forEach((n) => {
    e[n] = e[n] || sd[n], n = n + "Sync", e[n] = e[n] || sd[n];
  }), e.maxBusyTries = e.maxBusyTries || 3;
}
function Au(e, t, n) {
  let r = 0;
  typeof t == "function" && (n = t, t = {}), ue(e, "rimraf: missing path"), ue.strictEqual(typeof e, "string", "rimraf: path should be a string"), ue.strictEqual(typeof n, "function", "rimraf: callback function required"), ue(t, "rimraf: invalid options argument provided"), ue.strictEqual(typeof t, "object", "rimraf: options should be object"), Iv(t), cd(e, t, function i(a) {
    if (a) {
      if ((a.code === "EBUSY" || a.code === "ENOTEMPTY" || a.code === "EPERM") && r < t.maxBusyTries) {
        r++;
        const o = r * 100;
        return setTimeout(() => cd(e, t, i), o);
      }
      a.code === "ENOENT" && (a = null);
    }
    n(a);
  });
}
function cd(e, t, n) {
  ue(e), ue(t), ue(typeof n == "function"), t.lstat(e, (r, i) => {
    if (r && r.code === "ENOENT")
      return n(null);
    if (r && r.code === "EPERM" && yi)
      return ld(e, t, r, n);
    if (i && i.isDirectory())
      return Xa(e, t, r, n);
    t.unlink(e, (a) => {
      if (a) {
        if (a.code === "ENOENT")
          return n(null);
        if (a.code === "EPERM")
          return yi ? ld(e, t, a, n) : Xa(e, t, a, n);
        if (a.code === "EISDIR")
          return Xa(e, t, a, n);
      }
      return n(a);
    });
  });
}
function ld(e, t, n, r) {
  ue(e), ue(t), ue(typeof r == "function"), t.chmod(e, 438, (i) => {
    i ? r(i.code === "ENOENT" ? null : n) : t.stat(e, (a, o) => {
      a ? r(a.code === "ENOENT" ? null : n) : o.isDirectory() ? Xa(e, t, n, r) : t.unlink(e, r);
    });
  });
}
function ud(e, t, n) {
  let r;
  ue(e), ue(t);
  try {
    t.chmodSync(e, 438);
  } catch (i) {
    if (i.code === "ENOENT")
      return;
    throw n;
  }
  try {
    r = t.statSync(e);
  } catch (i) {
    if (i.code === "ENOENT")
      return;
    throw n;
  }
  r.isDirectory() ? Ka(e, t, n) : t.unlinkSync(e);
}
function Xa(e, t, n, r) {
  ue(e), ue(t), ue(typeof r == "function"), t.rmdir(e, (i) => {
    i && (i.code === "ENOTEMPTY" || i.code === "EEXIST" || i.code === "EPERM") ? m4(e, t, r) : i && i.code === "ENOTDIR" ? r(n) : r(i);
  });
}
function m4(e, t, n) {
  ue(e), ue(t), ue(typeof n == "function"), t.readdir(e, (r, i) => {
    if (r) return n(r);
    let a = i.length, o;
    if (a === 0) return t.rmdir(e, n);
    i.forEach((c) => {
      Au($v.join(e, c), t, (s) => {
        if (!o) {
          if (s) return n(o = s);
          --a === 0 && t.rmdir(e, n);
        }
      });
    });
  });
}
function Pv(e, t) {
  let n;
  t = t || {}, Iv(t), ue(e, "rimraf: missing path"), ue.strictEqual(typeof e, "string", "rimraf: path should be a string"), ue(t, "rimraf: missing options"), ue.strictEqual(typeof t, "object", "rimraf: options should be object");
  try {
    n = t.lstatSync(e);
  } catch (r) {
    if (r.code === "ENOENT")
      return;
    r.code === "EPERM" && yi && ud(e, t, r);
  }
  try {
    n && n.isDirectory() ? Ka(e, t, null) : t.unlinkSync(e);
  } catch (r) {
    if (r.code === "ENOENT")
      return;
    if (r.code === "EPERM")
      return yi ? ud(e, t, r) : Ka(e, t, r);
    if (r.code !== "EISDIR")
      throw r;
    Ka(e, t, r);
  }
}
function Ka(e, t, n) {
  ue(e), ue(t);
  try {
    t.rmdirSync(e);
  } catch (r) {
    if (r.code === "ENOTDIR")
      throw n;
    if (r.code === "ENOTEMPTY" || r.code === "EEXIST" || r.code === "EPERM")
      v4(e, t);
    else if (r.code !== "ENOENT")
      throw r;
  }
}
function v4(e, t) {
  if (ue(e), ue(t), t.readdirSync(e).forEach((n) => Pv($v.join(e, n), t)), yi) {
    const n = Date.now();
    do
      try {
        return t.rmdirSync(e, t);
      } catch {
      }
    while (Date.now() - n < 500);
  } else
    return t.rmdirSync(e, t);
}
var g4 = Au;
Au.sync = Pv;
const lo = Ve, x4 = We.fromCallback, Dv = g4;
function y4(e, t) {
  if (lo.rm) return lo.rm(e, { recursive: !0, force: !0 }, t);
  Dv(e, t);
}
function b4(e) {
  if (lo.rmSync) return lo.rmSync(e, { recursive: !0, force: !0 });
  Dv.sync(e);
}
var ts = {
  remove: x4(y4),
  removeSync: b4
};
const w4 = We.fromPromise, Fv = Yn, Nv = ae, kv = Ct, Lv = ts, pd = w4(async function(t) {
  let n;
  try {
    n = await Fv.readdir(t);
  } catch {
    return kv.mkdirs(t);
  }
  return Promise.all(n.map((r) => Lv.remove(Nv.join(t, r))));
});
function fd(e) {
  let t;
  try {
    t = Fv.readdirSync(e);
  } catch {
    return kv.mkdirsSync(e);
  }
  t.forEach((n) => {
    n = Nv.join(e, n), Lv.removeSync(n);
  });
}
var E4 = {
  emptyDirSync: fd,
  emptydirSync: fd,
  emptyDir: pd,
  emptydir: pd
};
const _4 = We.fromCallback, Uv = ae, Qt = Ve, Bv = Ct;
function S4(e, t) {
  function n() {
    Qt.writeFile(e, "", (r) => {
      if (r) return t(r);
      t();
    });
  }
  Qt.stat(e, (r, i) => {
    if (!r && i.isFile()) return t();
    const a = Uv.dirname(e);
    Qt.stat(a, (o, c) => {
      if (o)
        return o.code === "ENOENT" ? Bv.mkdirs(a, (s) => {
          if (s) return t(s);
          n();
        }) : t(o);
      c.isDirectory() ? n() : Qt.readdir(a, (s) => {
        if (s) return t(s);
      });
    });
  });
}
function T4(e) {
  let t;
  try {
    t = Qt.statSync(e);
  } catch {
  }
  if (t && t.isFile()) return;
  const n = Uv.dirname(e);
  try {
    Qt.statSync(n).isDirectory() || Qt.readdirSync(n);
  } catch (r) {
    if (r && r.code === "ENOENT") Bv.mkdirsSync(n);
    else throw r;
  }
  Qt.writeFileSync(e, "");
}
var A4 = {
  createFile: _4(S4),
  createFileSync: T4
};
const R4 = We.fromCallback, jv = ae, Jt = Ve, Mv = Ct, C4 = Xn.pathExists, { areIdentical: qv } = kr;
function O4(e, t, n) {
  function r(i, a) {
    Jt.link(i, a, (o) => {
      if (o) return n(o);
      n(null);
    });
  }
  Jt.lstat(t, (i, a) => {
    Jt.lstat(e, (o, c) => {
      if (o)
        return o.message = o.message.replace("lstat", "ensureLink"), n(o);
      if (a && qv(c, a)) return n(null);
      const s = jv.dirname(t);
      C4(s, (u, l) => {
        if (u) return n(u);
        if (l) return r(e, t);
        Mv.mkdirs(s, (p) => {
          if (p) return n(p);
          r(e, t);
        });
      });
    });
  });
}
function $4(e, t) {
  let n;
  try {
    n = Jt.lstatSync(t);
  } catch {
  }
  try {
    const a = Jt.lstatSync(e);
    if (n && qv(a, n)) return;
  } catch (a) {
    throw a.message = a.message.replace("lstat", "ensureLink"), a;
  }
  const r = jv.dirname(t);
  return Jt.existsSync(r) || Mv.mkdirsSync(r), Jt.linkSync(e, t);
}
var I4 = {
  createLink: R4(O4),
  createLinkSync: $4
};
const en = ae, ai = Ve, P4 = Xn.pathExists;
function D4(e, t, n) {
  if (en.isAbsolute(e))
    return ai.lstat(e, (r) => r ? (r.message = r.message.replace("lstat", "ensureSymlink"), n(r)) : n(null, {
      toCwd: e,
      toDst: e
    }));
  {
    const r = en.dirname(t), i = en.join(r, e);
    return P4(i, (a, o) => a ? n(a) : o ? n(null, {
      toCwd: i,
      toDst: e
    }) : ai.lstat(e, (c) => c ? (c.message = c.message.replace("lstat", "ensureSymlink"), n(c)) : n(null, {
      toCwd: e,
      toDst: en.relative(r, e)
    })));
  }
}
function F4(e, t) {
  let n;
  if (en.isAbsolute(e)) {
    if (n = ai.existsSync(e), !n) throw new Error("absolute srcpath does not exist");
    return {
      toCwd: e,
      toDst: e
    };
  } else {
    const r = en.dirname(t), i = en.join(r, e);
    if (n = ai.existsSync(i), n)
      return {
        toCwd: i,
        toDst: e
      };
    if (n = ai.existsSync(e), !n) throw new Error("relative srcpath does not exist");
    return {
      toCwd: e,
      toDst: en.relative(r, e)
    };
  }
}
var N4 = {
  symlinkPaths: D4,
  symlinkPathsSync: F4
};
const zv = Ve;
function k4(e, t, n) {
  if (n = typeof t == "function" ? t : n, t = typeof t == "function" ? !1 : t, t) return n(null, t);
  zv.lstat(e, (r, i) => {
    if (r) return n(null, "file");
    t = i && i.isDirectory() ? "dir" : "file", n(null, t);
  });
}
function L4(e, t) {
  let n;
  if (t) return t;
  try {
    n = zv.lstatSync(e);
  } catch {
    return "file";
  }
  return n && n.isDirectory() ? "dir" : "file";
}
var U4 = {
  symlinkType: k4,
  symlinkTypeSync: L4
};
const B4 = We.fromCallback, Hv = ae, ft = Yn, Gv = Ct, j4 = Gv.mkdirs, M4 = Gv.mkdirsSync, Wv = N4, q4 = Wv.symlinkPaths, z4 = Wv.symlinkPathsSync, Vv = U4, H4 = Vv.symlinkType, G4 = Vv.symlinkTypeSync, W4 = Xn.pathExists, { areIdentical: Yv } = kr;
function V4(e, t, n, r) {
  r = typeof n == "function" ? n : r, n = typeof n == "function" ? !1 : n, ft.lstat(t, (i, a) => {
    !i && a.isSymbolicLink() ? Promise.all([
      ft.stat(e),
      ft.stat(t)
    ]).then(([o, c]) => {
      if (Yv(o, c)) return r(null);
      dd(e, t, n, r);
    }) : dd(e, t, n, r);
  });
}
function dd(e, t, n, r) {
  q4(e, t, (i, a) => {
    if (i) return r(i);
    e = a.toDst, H4(a.toCwd, n, (o, c) => {
      if (o) return r(o);
      const s = Hv.dirname(t);
      W4(s, (u, l) => {
        if (u) return r(u);
        if (l) return ft.symlink(e, t, c, r);
        j4(s, (p) => {
          if (p) return r(p);
          ft.symlink(e, t, c, r);
        });
      });
    });
  });
}
function Y4(e, t, n) {
  let r;
  try {
    r = ft.lstatSync(t);
  } catch {
  }
  if (r && r.isSymbolicLink()) {
    const c = ft.statSync(e), s = ft.statSync(t);
    if (Yv(c, s)) return;
  }
  const i = z4(e, t);
  e = i.toDst, n = G4(i.toCwd, n);
  const a = Hv.dirname(t);
  return ft.existsSync(a) || M4(a), ft.symlinkSync(e, t, n);
}
var X4 = {
  createSymlink: B4(V4),
  createSymlinkSync: Y4
};
const { createFile: hd, createFileSync: md } = A4, { createLink: vd, createLinkSync: gd } = I4, { createSymlink: xd, createSymlinkSync: yd } = X4;
var K4 = {
  // file
  createFile: hd,
  createFileSync: md,
  ensureFile: hd,
  ensureFileSync: md,
  // link
  createLink: vd,
  createLinkSync: gd,
  ensureLink: vd,
  ensureLinkSync: gd,
  // symlink
  createSymlink: xd,
  createSymlinkSync: yd,
  ensureSymlink: xd,
  ensureSymlinkSync: yd
};
function J4(e, { EOL: t = `
`, finalEOL: n = !0, replacer: r = null, spaces: i } = {}) {
  const a = n ? t : "";
  return JSON.stringify(e, r, i).replace(/\n/g, t) + a;
}
function Z4(e) {
  return Buffer.isBuffer(e) && (e = e.toString("utf8")), e.replace(/^\uFEFF/, "");
}
var Ru = { stringify: J4, stripBom: Z4 };
let $r;
try {
  $r = Ve;
} catch {
  $r = oe;
}
const ns = We, { stringify: Xv, stripBom: Kv } = Ru;
async function Q4(e, t = {}) {
  typeof t == "string" && (t = { encoding: t });
  const n = t.fs || $r, r = "throws" in t ? t.throws : !0;
  let i = await ns.fromCallback(n.readFile)(e, t);
  i = Kv(i);
  let a;
  try {
    a = JSON.parse(i, t ? t.reviver : null);
  } catch (o) {
    if (r)
      throw o.message = `${e}: ${o.message}`, o;
    return null;
  }
  return a;
}
const eT = ns.fromPromise(Q4);
function tT(e, t = {}) {
  typeof t == "string" && (t = { encoding: t });
  const n = t.fs || $r, r = "throws" in t ? t.throws : !0;
  try {
    let i = n.readFileSync(e, t);
    return i = Kv(i), JSON.parse(i, t.reviver);
  } catch (i) {
    if (r)
      throw i.message = `${e}: ${i.message}`, i;
    return null;
  }
}
async function nT(e, t, n = {}) {
  const r = n.fs || $r, i = Xv(t, n);
  await ns.fromCallback(r.writeFile)(e, i, n);
}
const rT = ns.fromPromise(nT);
function iT(e, t, n = {}) {
  const r = n.fs || $r, i = Xv(t, n);
  return r.writeFileSync(e, i, n);
}
const aT = {
  readFile: eT,
  readFileSync: tT,
  writeFile: rT,
  writeFileSync: iT
};
var oT = aT;
const Aa = oT;
var sT = {
  // jsonfile exports
  readJson: Aa.readFile,
  readJsonSync: Aa.readFileSync,
  writeJson: Aa.writeFile,
  writeJsonSync: Aa.writeFileSync
};
const cT = We.fromCallback, oi = Ve, Jv = ae, Zv = Ct, lT = Xn.pathExists;
function uT(e, t, n, r) {
  typeof n == "function" && (r = n, n = "utf8");
  const i = Jv.dirname(e);
  lT(i, (a, o) => {
    if (a) return r(a);
    if (o) return oi.writeFile(e, t, n, r);
    Zv.mkdirs(i, (c) => {
      if (c) return r(c);
      oi.writeFile(e, t, n, r);
    });
  });
}
function pT(e, ...t) {
  const n = Jv.dirname(e);
  if (oi.existsSync(n))
    return oi.writeFileSync(e, ...t);
  Zv.mkdirsSync(n), oi.writeFileSync(e, ...t);
}
var Cu = {
  outputFile: cT(uT),
  outputFileSync: pT
};
const { stringify: fT } = Ru, { outputFile: dT } = Cu;
async function hT(e, t, n = {}) {
  const r = fT(t, n);
  await dT(e, r, n);
}
var mT = hT;
const { stringify: vT } = Ru, { outputFileSync: gT } = Cu;
function xT(e, t, n) {
  const r = vT(t, n);
  gT(e, r, n);
}
var yT = xT;
const bT = We.fromPromise, Ge = sT;
Ge.outputJson = bT(mT);
Ge.outputJsonSync = yT;
Ge.outputJSON = Ge.outputJson;
Ge.outputJSONSync = Ge.outputJsonSync;
Ge.writeJSON = Ge.writeJson;
Ge.writeJSONSync = Ge.writeJsonSync;
Ge.readJSON = Ge.readJson;
Ge.readJSONSync = Ge.readJsonSync;
var wT = Ge;
const ET = Ve, yl = ae, _T = Tu.copy, Qv = ts.remove, ST = Ct.mkdirp, TT = Xn.pathExists, bd = kr;
function AT(e, t, n, r) {
  typeof n == "function" && (r = n, n = {}), n = n || {};
  const i = n.overwrite || n.clobber || !1;
  bd.checkPaths(e, t, "move", n, (a, o) => {
    if (a) return r(a);
    const { srcStat: c, isChangingCase: s = !1 } = o;
    bd.checkParentPaths(e, c, t, "move", (u) => {
      if (u) return r(u);
      if (RT(t)) return wd(e, t, i, s, r);
      ST(yl.dirname(t), (l) => l ? r(l) : wd(e, t, i, s, r));
    });
  });
}
function RT(e) {
  const t = yl.dirname(e);
  return yl.parse(t).root === t;
}
function wd(e, t, n, r, i) {
  if (r) return Oc(e, t, n, i);
  if (n)
    return Qv(t, (a) => a ? i(a) : Oc(e, t, n, i));
  TT(t, (a, o) => a ? i(a) : o ? i(new Error("dest already exists.")) : Oc(e, t, n, i));
}
function Oc(e, t, n, r) {
  ET.rename(e, t, (i) => i ? i.code !== "EXDEV" ? r(i) : CT(e, t, n, r) : r());
}
function CT(e, t, n, r) {
  _T(e, t, {
    overwrite: n,
    errorOnExist: !0
  }, (a) => a ? r(a) : Qv(e, r));
}
var OT = AT;
const eg = Ve, bl = ae, $T = Tu.copySync, tg = ts.removeSync, IT = Ct.mkdirpSync, Ed = kr;
function PT(e, t, n) {
  n = n || {};
  const r = n.overwrite || n.clobber || !1, { srcStat: i, isChangingCase: a = !1 } = Ed.checkPathsSync(e, t, "move", n);
  return Ed.checkParentPathsSync(e, i, t, "move"), DT(t) || IT(bl.dirname(t)), FT(e, t, r, a);
}
function DT(e) {
  const t = bl.dirname(e);
  return bl.parse(t).root === t;
}
function FT(e, t, n, r) {
  if (r) return $c(e, t, n);
  if (n)
    return tg(t), $c(e, t, n);
  if (eg.existsSync(t)) throw new Error("dest already exists.");
  return $c(e, t, n);
}
function $c(e, t, n) {
  try {
    eg.renameSync(e, t);
  } catch (r) {
    if (r.code !== "EXDEV") throw r;
    return NT(e, t, n);
  }
}
function NT(e, t, n) {
  return $T(e, t, {
    overwrite: n,
    errorOnExist: !0
  }), tg(e);
}
var kT = PT;
const LT = We.fromCallback;
var UT = {
  move: LT(OT),
  moveSync: kT
}, vn = {
  // Export promiseified graceful-fs:
  ...Yn,
  // Export extra methods:
  ...Tu,
  ...E4,
  ...K4,
  ...wT,
  ...Ct,
  ...UT,
  ...Cu,
  ...Xn,
  ...ts
}, Bt = {}, cn = {}, De = {}, ln = {};
Object.defineProperty(ln, "__esModule", { value: !0 });
ln.CancellationError = ln.CancellationToken = void 0;
const BT = Hn;
class jT extends BT.EventEmitter {
  get cancelled() {
    return this._cancelled || this._parent != null && this._parent.cancelled;
  }
  set parent(t) {
    this.removeParentCancelHandler(), this._parent = t, this.parentCancelHandler = () => this.cancel(), this._parent.onCancel(this.parentCancelHandler);
  }
  // babel cannot compile ... correctly for super calls
  constructor(t) {
    super(), this.parentCancelHandler = null, this._parent = null, this._cancelled = !1, t != null && (this.parent = t);
  }
  cancel() {
    this._cancelled = !0, this.emit("cancel");
  }
  onCancel(t) {
    this.cancelled ? t() : this.once("cancel", t);
  }
  createPromise(t) {
    if (this.cancelled)
      return Promise.reject(new wl());
    const n = () => {
      if (r != null)
        try {
          this.removeListener("cancel", r), r = null;
        } catch {
        }
    };
    let r = null;
    return new Promise((i, a) => {
      let o = null;
      if (r = () => {
        try {
          o != null && (o(), o = null);
        } finally {
          a(new wl());
        }
      }, this.cancelled) {
        r();
        return;
      }
      this.onCancel(r), t(i, a, (c) => {
        o = c;
      });
    }).then((i) => (n(), i)).catch((i) => {
      throw n(), i;
    });
  }
  removeParentCancelHandler() {
    const t = this._parent;
    t != null && this.parentCancelHandler != null && (t.removeListener("cancel", this.parentCancelHandler), this.parentCancelHandler = null);
  }
  dispose() {
    try {
      this.removeParentCancelHandler();
    } finally {
      this.removeAllListeners(), this._parent = null;
    }
  }
}
ln.CancellationToken = jT;
class wl extends Error {
  constructor() {
    super("cancelled");
  }
}
ln.CancellationError = wl;
var Lr = {};
Object.defineProperty(Lr, "__esModule", { value: !0 });
Lr.newError = MT;
function MT(e, t) {
  const n = new Error(e);
  return n.code = t, n;
}
var He = {}, Wi = {};
Object.defineProperty(Wi, "__esModule", { value: !0 });
Wi.ProgressCallbackTransform = void 0;
const qT = ie;
class zT extends qT.Transform {
  constructor(t, n, r) {
    super(), this.total = t, this.cancellationToken = n, this.onProgress = r, this.start = Date.now(), this.transferred = 0, this.delta = 0, this.nextUpdate = this.start + 1e3;
  }
  _transform(t, n, r) {
    if (this.cancellationToken.cancelled) {
      r(new Error("cancelled"), null);
      return;
    }
    this.transferred += t.length, this.delta += t.length;
    const i = Date.now();
    i >= this.nextUpdate && this.transferred !== this.total && (this.nextUpdate = i + 1e3, this.onProgress({
      total: this.total,
      delta: this.delta,
      transferred: this.transferred,
      percent: this.transferred / this.total * 100,
      bytesPerSecond: Math.round(this.transferred / ((i - this.start) / 1e3))
    }), this.delta = 0), r(null, t);
  }
  _flush(t) {
    if (this.cancellationToken.cancelled) {
      t(new Error("cancelled"));
      return;
    }
    this.onProgress({
      total: this.total,
      delta: this.delta,
      transferred: this.total,
      percent: 100,
      bytesPerSecond: Math.round(this.transferred / ((Date.now() - this.start) / 1e3))
    }), this.delta = 0, t(null);
  }
}
Wi.ProgressCallbackTransform = zT;
Object.defineProperty(He, "__esModule", { value: !0 });
He.DigestTransform = He.HttpExecutor = He.HttpError = void 0;
He.createHttpError = El;
He.parseJson = JT;
He.configureRequestOptionsFromUrl = rg;
He.configureRequestUrl = $u;
He.safeGetHeader = Tr;
He.configureRequestOptions = po;
He.safeStringifyJson = fo;
const HT = Dr, GT = Fm, WT = oe, VT = ie, ng = At, YT = ln, _d = Lr, XT = Wi, Xr = (0, GT.default)("electron-builder");
function El(e, t = null) {
  return new Ou(e.statusCode || -1, `${e.statusCode} ${e.statusMessage}` + (t == null ? "" : `
` + JSON.stringify(t, null, "  ")) + `
Headers: ` + fo(e.headers), t);
}
const KT = /* @__PURE__ */ new Map([
  [429, "Too many requests"],
  [400, "Bad request"],
  [403, "Forbidden"],
  [404, "Not found"],
  [405, "Method not allowed"],
  [406, "Not acceptable"],
  [408, "Request timeout"],
  [413, "Request entity too large"],
  [500, "Internal server error"],
  [502, "Bad gateway"],
  [503, "Service unavailable"],
  [504, "Gateway timeout"],
  [505, "HTTP version not supported"]
]);
class Ou extends Error {
  constructor(t, n = `HTTP error: ${KT.get(t) || t}`, r = null) {
    super(n), this.statusCode = t, this.description = r, this.name = "HttpError", this.code = `HTTP_ERROR_${t}`;
  }
  isServerError() {
    return this.statusCode >= 500 && this.statusCode <= 599;
  }
}
He.HttpError = Ou;
function JT(e) {
  return e.then((t) => t == null || t.length === 0 ? null : JSON.parse(t));
}
class uo {
  constructor() {
    this.maxRedirects = 10;
  }
  request(t, n = new YT.CancellationToken(), r) {
    po(t);
    const i = r == null ? void 0 : JSON.stringify(r), a = i ? Buffer.from(i) : void 0;
    if (a != null) {
      Xr(i);
      const { headers: o, ...c } = t;
      t = {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": a.length,
          ...o
        },
        ...c
      };
    }
    return this.doApiRequest(t, n, (o) => o.end(a));
  }
  doApiRequest(t, n, r, i = 0) {
    return Xr.enabled && Xr(`Request: ${fo(t)}`), n.createPromise((a, o, c) => {
      const s = this.createRequest(t, (u) => {
        try {
          this.handleResponse(u, t, n, a, o, i, r);
        } catch (l) {
          o(l);
        }
      });
      this.addErrorAndTimeoutHandlers(s, o, t.timeout), this.addRedirectHandlers(s, t, o, i, (u) => {
        this.doApiRequest(u, n, r, i).then(a).catch(o);
      }), r(s, o), c(() => s.abort());
    });
  }
  // noinspection JSUnusedLocalSymbols
  // eslint-disable-next-line
  addRedirectHandlers(t, n, r, i, a) {
  }
  addErrorAndTimeoutHandlers(t, n, r = 60 * 1e3) {
    this.addTimeOutHandler(t, n, r), t.on("error", n), t.on("aborted", () => {
      n(new Error("Request has been aborted by the server"));
    });
  }
  handleResponse(t, n, r, i, a, o, c) {
    var s;
    if (Xr.enabled && Xr(`Response: ${t.statusCode} ${t.statusMessage}, request options: ${fo(n)}`), t.statusCode === 404) {
      a(El(t, `method: ${n.method || "GET"} url: ${n.protocol || "https:"}//${n.hostname}${n.port ? `:${n.port}` : ""}${n.path}

Please double check that your authentication token is correct. Due to security reasons, actual status maybe not reported, but 404.
`));
      return;
    } else if (t.statusCode === 204) {
      i();
      return;
    }
    const u = (s = t.statusCode) !== null && s !== void 0 ? s : 0, l = u >= 300 && u < 400, p = Tr(t, "location");
    if (l && p != null) {
      if (o > this.maxRedirects) {
        a(this.createMaxRedirectError());
        return;
      }
      this.doApiRequest(uo.prepareRedirectUrlOptions(p, n), r, c, o).then(i).catch(a);
      return;
    }
    t.setEncoding("utf8");
    let d = "";
    t.on("error", a), t.on("data", (m) => d += m), t.on("end", () => {
      try {
        if (t.statusCode != null && t.statusCode >= 400) {
          const m = Tr(t, "content-type"), g = m != null && (Array.isArray(m) ? m.find((v) => v.includes("json")) != null : m.includes("json"));
          a(El(t, `method: ${n.method || "GET"} url: ${n.protocol || "https:"}//${n.hostname}${n.port ? `:${n.port}` : ""}${n.path}

          Data:
          ${g ? JSON.stringify(JSON.parse(d)) : d}
          `));
        } else
          i(d.length === 0 ? null : d);
      } catch (m) {
        a(m);
      }
    });
  }
  async downloadToBuffer(t, n) {
    return await n.cancellationToken.createPromise((r, i, a) => {
      const o = [], c = {
        headers: n.headers || void 0,
        // because PrivateGitHubProvider requires HttpExecutor.prepareRedirectUrlOptions logic, so, we need to redirect manually
        redirect: "manual"
      };
      $u(t, c), po(c), this.doDownload(c, {
        destination: null,
        options: n,
        onCancel: a,
        callback: (s) => {
          s == null ? r(Buffer.concat(o)) : i(s);
        },
        responseHandler: (s, u) => {
          let l = 0;
          s.on("data", (p) => {
            if (l += p.length, l > 524288e3) {
              u(new Error("Maximum allowed size is 500 MB"));
              return;
            }
            o.push(p);
          }), s.on("end", () => {
            u(null);
          });
        }
      }, 0);
    });
  }
  doDownload(t, n, r) {
    const i = this.createRequest(t, (a) => {
      if (a.statusCode >= 400) {
        n.callback(new Error(`Cannot download "${t.protocol || "https:"}//${t.hostname}${t.path}", status ${a.statusCode}: ${a.statusMessage}`));
        return;
      }
      a.on("error", n.callback);
      const o = Tr(a, "location");
      if (o != null) {
        r < this.maxRedirects ? this.doDownload(uo.prepareRedirectUrlOptions(o, t), n, r++) : n.callback(this.createMaxRedirectError());
        return;
      }
      n.responseHandler == null ? QT(n, a) : n.responseHandler(a, n.callback);
    });
    this.addErrorAndTimeoutHandlers(i, n.callback, t.timeout), this.addRedirectHandlers(i, t, n.callback, r, (a) => {
      this.doDownload(a, n, r++);
    }), i.end();
  }
  createMaxRedirectError() {
    return new Error(`Too many redirects (> ${this.maxRedirects})`);
  }
  addTimeOutHandler(t, n, r) {
    t.on("socket", (i) => {
      i.setTimeout(r, () => {
        t.abort(), n(new Error("Request timed out"));
      });
    });
  }
  static prepareRedirectUrlOptions(t, n) {
    const r = rg(t, { ...n }), i = r.headers;
    if (i != null && i.authorization) {
      const a = new ng.URL(t);
      (a.hostname.endsWith(".amazonaws.com") || a.searchParams.has("X-Amz-Credential")) && delete i.authorization;
    }
    return r;
  }
  static retryOnServerError(t, n = 3) {
    for (let r = 0; ; r++)
      try {
        return t();
      } catch (i) {
        if (r < n && (i instanceof Ou && i.isServerError() || i.code === "EPIPE"))
          continue;
        throw i;
      }
  }
}
He.HttpExecutor = uo;
function rg(e, t) {
  const n = po(t);
  return $u(new ng.URL(e), n), n;
}
function $u(e, t) {
  t.protocol = e.protocol, t.hostname = e.hostname, e.port ? t.port = e.port : t.port && delete t.port, t.path = e.pathname + e.search;
}
class _l extends VT.Transform {
  // noinspection JSUnusedGlobalSymbols
  get actual() {
    return this._actual;
  }
  constructor(t, n = "sha512", r = "base64") {
    super(), this.expected = t, this.algorithm = n, this.encoding = r, this._actual = null, this.isValidateOnEnd = !0, this.digester = (0, HT.createHash)(n);
  }
  // noinspection JSUnusedGlobalSymbols
  _transform(t, n, r) {
    this.digester.update(t), r(null, t);
  }
  // noinspection JSUnusedGlobalSymbols
  _flush(t) {
    if (this._actual = this.digester.digest(this.encoding), this.isValidateOnEnd)
      try {
        this.validate();
      } catch (n) {
        t(n);
        return;
      }
    t(null);
  }
  validate() {
    if (this._actual == null)
      throw (0, _d.newError)("Not finished yet", "ERR_STREAM_NOT_FINISHED");
    if (this._actual !== this.expected)
      throw (0, _d.newError)(`${this.algorithm} checksum mismatch, expected ${this.expected}, got ${this._actual}`, "ERR_CHECKSUM_MISMATCH");
    return null;
  }
}
He.DigestTransform = _l;
function ZT(e, t, n) {
  return e != null && t != null && e !== t ? (n(new Error(`checksum mismatch: expected ${t} but got ${e} (X-Checksum-Sha2 header)`)), !1) : !0;
}
function Tr(e, t) {
  const n = e.headers[t];
  return n == null ? null : Array.isArray(n) ? n.length === 0 ? null : n[n.length - 1] : n;
}
function QT(e, t) {
  if (!ZT(Tr(t, "X-Checksum-Sha2"), e.options.sha2, e.callback))
    return;
  const n = [];
  if (e.options.onProgress != null) {
    const o = Tr(t, "content-length");
    o != null && n.push(new XT.ProgressCallbackTransform(parseInt(o, 10), e.options.cancellationToken, e.options.onProgress));
  }
  const r = e.options.sha512;
  r != null ? n.push(new _l(r, "sha512", r.length === 128 && !r.includes("+") && !r.includes("Z") && !r.includes("=") ? "hex" : "base64")) : e.options.sha2 != null && n.push(new _l(e.options.sha2, "sha256", "hex"));
  const i = (0, WT.createWriteStream)(e.destination);
  n.push(i);
  let a = t;
  for (const o of n)
    o.on("error", (c) => {
      i.close(), e.options.cancellationToken.cancelled || e.callback(c);
    }), a = a.pipe(o);
  i.on("finish", () => {
    i.close(e.callback);
  });
}
function po(e, t, n) {
  n != null && (e.method = n), e.headers = { ...e.headers };
  const r = e.headers;
  return t != null && (r.authorization = t.startsWith("Basic") || t.startsWith("Bearer") ? t : `token ${t}`), r["User-Agent"] == null && (r["User-Agent"] = "electron-builder"), (n == null || n === "GET" || r["Cache-Control"] == null) && (r["Cache-Control"] = "no-cache"), e.protocol == null && process.versions.electron != null && (e.protocol = "https:"), e;
}
function fo(e, t) {
  return JSON.stringify(e, (n, r) => n.endsWith("Authorization") || n.endsWith("authorization") || n.endsWith("Password") || n.endsWith("PASSWORD") || n.endsWith("Token") || n.includes("password") || n.includes("token") || t != null && t.has(n) ? "<stripped sensitive data>" : r, 2);
}
var rs = {};
Object.defineProperty(rs, "__esModule", { value: !0 });
rs.MemoLazy = void 0;
class eA {
  constructor(t, n) {
    this.selector = t, this.creator = n, this.selected = void 0, this._value = void 0;
  }
  get hasValue() {
    return this._value !== void 0;
  }
  get value() {
    const t = this.selector();
    if (this._value !== void 0 && ig(this.selected, t))
      return this._value;
    this.selected = t;
    const n = this.creator(t);
    return this.value = n, n;
  }
  set value(t) {
    this._value = t;
  }
}
rs.MemoLazy = eA;
function ig(e, t) {
  if (typeof e == "object" && e !== null && (typeof t == "object" && t !== null)) {
    const i = Object.keys(e), a = Object.keys(t);
    return i.length === a.length && i.every((o) => ig(e[o], t[o]));
  }
  return e === t;
}
var is = {};
Object.defineProperty(is, "__esModule", { value: !0 });
is.githubUrl = tA;
is.getS3LikeProviderBaseUrl = nA;
function tA(e, t = "github.com") {
  return `${e.protocol || "https"}://${e.host || t}`;
}
function nA(e) {
  const t = e.provider;
  if (t === "s3")
    return rA(e);
  if (t === "spaces")
    return iA(e);
  throw new Error(`Not supported provider: ${t}`);
}
function rA(e) {
  let t;
  if (e.accelerate == !0)
    t = `https://${e.bucket}.s3-accelerate.amazonaws.com`;
  else if (e.endpoint != null)
    t = `${e.endpoint}/${e.bucket}`;
  else if (e.bucket.includes(".")) {
    if (e.region == null)
      throw new Error(`Bucket name "${e.bucket}" includes a dot, but S3 region is missing`);
    e.region === "us-east-1" ? t = `https://s3.amazonaws.com/${e.bucket}` : t = `https://s3-${e.region}.amazonaws.com/${e.bucket}`;
  } else e.region === "cn-north-1" ? t = `https://${e.bucket}.s3.${e.region}.amazonaws.com.cn` : t = `https://${e.bucket}.s3.amazonaws.com`;
  return ag(t, e.path);
}
function ag(e, t) {
  return t != null && t.length > 0 && (t.startsWith("/") || (e += "/"), e += t), e;
}
function iA(e) {
  if (e.name == null)
    throw new Error("name is missing");
  if (e.region == null)
    throw new Error("region is missing");
  return ag(`https://${e.name}.${e.region}.digitaloceanspaces.com`, e.path);
}
var Iu = {};
Object.defineProperty(Iu, "__esModule", { value: !0 });
Iu.retry = og;
const aA = ln;
async function og(e, t, n, r = 0, i = 0, a) {
  var o;
  const c = new aA.CancellationToken();
  try {
    return await e();
  } catch (s) {
    if ((!((o = a == null ? void 0 : a(s)) !== null && o !== void 0) || o) && t > 0 && !c.cancelled)
      return await new Promise((u) => setTimeout(u, n + r * i)), await og(e, t - 1, n, r, i + 1, a);
    throw s;
  }
}
var Pu = {};
Object.defineProperty(Pu, "__esModule", { value: !0 });
Pu.parseDn = oA;
function oA(e) {
  let t = !1, n = null, r = "", i = 0;
  e = e.trim();
  const a = /* @__PURE__ */ new Map();
  for (let o = 0; o <= e.length; o++) {
    if (o === e.length) {
      n !== null && a.set(n, r);
      break;
    }
    const c = e[o];
    if (t) {
      if (c === '"') {
        t = !1;
        continue;
      }
    } else {
      if (c === '"') {
        t = !0;
        continue;
      }
      if (c === "\\") {
        o++;
        const s = parseInt(e.slice(o, o + 2), 16);
        Number.isNaN(s) ? r += e[o] : (o++, r += String.fromCharCode(s));
        continue;
      }
      if (n === null && c === "=") {
        n = r, r = "";
        continue;
      }
      if (c === "," || c === ";" || c === "+") {
        n !== null && a.set(n, r), n = null, r = "";
        continue;
      }
    }
    if (c === " " && !t) {
      if (r.length === 0)
        continue;
      if (o > i) {
        let s = o;
        for (; e[s] === " "; )
          s++;
        i = s;
      }
      if (i >= e.length || e[i] === "," || e[i] === ";" || n === null && e[i] === "=" || n !== null && e[i] === "+") {
        o = i - 1;
        continue;
      }
    }
    r += c;
  }
  return a;
}
var Ir = {};
Object.defineProperty(Ir, "__esModule", { value: !0 });
Ir.nil = Ir.UUID = void 0;
const sg = Dr, cg = Lr, sA = "options.name must be either a string or a Buffer", Sd = (0, sg.randomBytes)(16);
Sd[0] = Sd[0] | 1;
const Ja = {}, ce = [];
for (let e = 0; e < 256; e++) {
  const t = (e + 256).toString(16).substr(1);
  Ja[t] = e, ce[e] = t;
}
class qn {
  constructor(t) {
    this.ascii = null, this.binary = null;
    const n = qn.check(t);
    if (!n)
      throw new Error("not a UUID");
    this.version = n.version, n.format === "ascii" ? this.ascii = t : this.binary = t;
  }
  static v5(t, n) {
    return cA(t, "sha1", 80, n);
  }
  toString() {
    return this.ascii == null && (this.ascii = lA(this.binary)), this.ascii;
  }
  inspect() {
    return `UUID v${this.version} ${this.toString()}`;
  }
  static check(t, n = 0) {
    if (typeof t == "string")
      return t = t.toLowerCase(), /^[a-f0-9]{8}(-[a-f0-9]{4}){3}-([a-f0-9]{12})$/.test(t) ? t === "00000000-0000-0000-0000-000000000000" ? { version: void 0, variant: "nil", format: "ascii" } : {
        version: (Ja[t[14] + t[15]] & 240) >> 4,
        variant: Td((Ja[t[19] + t[20]] & 224) >> 5),
        format: "ascii"
      } : !1;
    if (Buffer.isBuffer(t)) {
      if (t.length < n + 16)
        return !1;
      let r = 0;
      for (; r < 16 && t[n + r] === 0; r++)
        ;
      return r === 16 ? { version: void 0, variant: "nil", format: "binary" } : {
        version: (t[n + 6] & 240) >> 4,
        variant: Td((t[n + 8] & 224) >> 5),
        format: "binary"
      };
    }
    throw (0, cg.newError)("Unknown type of uuid", "ERR_UNKNOWN_UUID_TYPE");
  }
  // read stringified uuid into a Buffer
  static parse(t) {
    const n = Buffer.allocUnsafe(16);
    let r = 0;
    for (let i = 0; i < 16; i++)
      n[i] = Ja[t[r++] + t[r++]], (i === 3 || i === 5 || i === 7 || i === 9) && (r += 1);
    return n;
  }
}
Ir.UUID = qn;
qn.OID = qn.parse("6ba7b812-9dad-11d1-80b4-00c04fd430c8");
function Td(e) {
  switch (e) {
    case 0:
    case 1:
    case 3:
      return "ncs";
    case 4:
    case 5:
      return "rfc4122";
    case 6:
      return "microsoft";
    default:
      return "future";
  }
}
var si;
(function(e) {
  e[e.ASCII = 0] = "ASCII", e[e.BINARY = 1] = "BINARY", e[e.OBJECT = 2] = "OBJECT";
})(si || (si = {}));
function cA(e, t, n, r, i = si.ASCII) {
  const a = (0, sg.createHash)(t);
  if (typeof e != "string" && !Buffer.isBuffer(e))
    throw (0, cg.newError)(sA, "ERR_INVALID_UUID_NAME");
  a.update(r), a.update(e);
  const c = a.digest();
  let s;
  switch (i) {
    case si.BINARY:
      c[6] = c[6] & 15 | n, c[8] = c[8] & 63 | 128, s = c;
      break;
    case si.OBJECT:
      c[6] = c[6] & 15 | n, c[8] = c[8] & 63 | 128, s = new qn(c);
      break;
    default:
      s = ce[c[0]] + ce[c[1]] + ce[c[2]] + ce[c[3]] + "-" + ce[c[4]] + ce[c[5]] + "-" + ce[c[6] & 15 | n] + ce[c[7]] + "-" + ce[c[8] & 63 | 128] + ce[c[9]] + "-" + ce[c[10]] + ce[c[11]] + ce[c[12]] + ce[c[13]] + ce[c[14]] + ce[c[15]];
      break;
  }
  return s;
}
function lA(e) {
  return ce[e[0]] + ce[e[1]] + ce[e[2]] + ce[e[3]] + "-" + ce[e[4]] + ce[e[5]] + "-" + ce[e[6]] + ce[e[7]] + "-" + ce[e[8]] + ce[e[9]] + "-" + ce[e[10]] + ce[e[11]] + ce[e[12]] + ce[e[13]] + ce[e[14]] + ce[e[15]];
}
Ir.nil = new qn("00000000-0000-0000-0000-000000000000");
var Vi = {}, lg = {};
(function(e) {
  (function(t) {
    t.parser = function(h, f) {
      return new r(h, f);
    }, t.SAXParser = r, t.SAXStream = l, t.createStream = u, t.MAX_BUFFER_LENGTH = 64 * 1024;
    var n = [
      "comment",
      "sgmlDecl",
      "textNode",
      "tagName",
      "doctype",
      "procInstName",
      "procInstBody",
      "entity",
      "attribName",
      "attribValue",
      "cdata",
      "script"
    ];
    t.EVENTS = [
      "text",
      "processinginstruction",
      "sgmldeclaration",
      "doctype",
      "comment",
      "opentagstart",
      "attribute",
      "opentag",
      "closetag",
      "opencdata",
      "cdata",
      "closecdata",
      "error",
      "end",
      "ready",
      "script",
      "opennamespace",
      "closenamespace"
    ];
    function r(h, f) {
      if (!(this instanceof r))
        return new r(h, f);
      var C = this;
      a(C), C.q = C.c = "", C.bufferCheckPosition = t.MAX_BUFFER_LENGTH, C.opt = f || {}, C.opt.lowercase = C.opt.lowercase || C.opt.lowercasetags, C.looseCase = C.opt.lowercase ? "toLowerCase" : "toUpperCase", C.tags = [], C.closed = C.closedRoot = C.sawRoot = !1, C.tag = C.error = null, C.strict = !!h, C.noscript = !!(h || C.opt.noscript), C.state = T.BEGIN, C.strictEntities = C.opt.strictEntities, C.ENTITIES = C.strictEntities ? Object.create(t.XML_ENTITIES) : Object.create(t.ENTITIES), C.attribList = [], C.opt.xmlns && (C.ns = Object.create(v)), C.opt.unquotedAttributeValues === void 0 && (C.opt.unquotedAttributeValues = !h), C.trackPosition = C.opt.position !== !1, C.trackPosition && (C.position = C.line = C.column = 0), j(C, "onready");
    }
    Object.create || (Object.create = function(h) {
      function f() {
      }
      f.prototype = h;
      var C = new f();
      return C;
    }), Object.keys || (Object.keys = function(h) {
      var f = [];
      for (var C in h) h.hasOwnProperty(C) && f.push(C);
      return f;
    });
    function i(h) {
      for (var f = Math.max(t.MAX_BUFFER_LENGTH, 10), C = 0, S = 0, G = n.length; S < G; S++) {
        var z = h[n[S]].length;
        if (z > f)
          switch (n[S]) {
            case "textNode":
              ne(h);
              break;
            case "cdata":
              J(h, "oncdata", h.cdata), h.cdata = "";
              break;
            case "script":
              J(h, "onscript", h.script), h.script = "";
              break;
            default:
              $(h, "Max buffer length exceeded: " + n[S]);
          }
        C = Math.max(C, z);
      }
      var X = t.MAX_BUFFER_LENGTH - C;
      h.bufferCheckPosition = X + h.position;
    }
    function a(h) {
      for (var f = 0, C = n.length; f < C; f++)
        h[n[f]] = "";
    }
    function o(h) {
      ne(h), h.cdata !== "" && (J(h, "oncdata", h.cdata), h.cdata = ""), h.script !== "" && (J(h, "onscript", h.script), h.script = "");
    }
    r.prototype = {
      end: function() {
        D(this);
      },
      write: le,
      resume: function() {
        return this.error = null, this;
      },
      close: function() {
        return this.write(null);
      },
      flush: function() {
        o(this);
      }
    };
    var c;
    try {
      c = require("stream").Stream;
    } catch {
      c = function() {
      };
    }
    c || (c = function() {
    });
    var s = t.EVENTS.filter(function(h) {
      return h !== "error" && h !== "end";
    });
    function u(h, f) {
      return new l(h, f);
    }
    function l(h, f) {
      if (!(this instanceof l))
        return new l(h, f);
      c.apply(this), this._parser = new r(h, f), this.writable = !0, this.readable = !0;
      var C = this;
      this._parser.onend = function() {
        C.emit("end");
      }, this._parser.onerror = function(S) {
        C.emit("error", S), C._parser.error = null;
      }, this._decoder = null, s.forEach(function(S) {
        Object.defineProperty(C, "on" + S, {
          get: function() {
            return C._parser["on" + S];
          },
          set: function(G) {
            if (!G)
              return C.removeAllListeners(S), C._parser["on" + S] = G, G;
            C.on(S, G);
          },
          enumerable: !0,
          configurable: !1
        });
      });
    }
    l.prototype = Object.create(c.prototype, {
      constructor: {
        value: l
      }
    }), l.prototype.write = function(h) {
      if (typeof Buffer == "function" && typeof Buffer.isBuffer == "function" && Buffer.isBuffer(h)) {
        if (!this._decoder) {
          var f = kl.StringDecoder;
          this._decoder = new f("utf8");
        }
        h = this._decoder.write(h);
      }
      return this._parser.write(h.toString()), this.emit("data", h), !0;
    }, l.prototype.end = function(h) {
      return h && h.length && this.write(h), this._parser.end(), !0;
    }, l.prototype.on = function(h, f) {
      var C = this;
      return !C._parser["on" + h] && s.indexOf(h) !== -1 && (C._parser["on" + h] = function() {
        var S = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
        S.splice(0, 0, h), C.emit.apply(C, S);
      }), c.prototype.on.call(C, h, f);
    };
    var p = "[CDATA[", d = "DOCTYPE", m = "http://www.w3.org/XML/1998/namespace", g = "http://www.w3.org/2000/xmlns/", v = { xml: m, xmlns: g }, y = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, x = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/, w = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, A = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
    function O(h) {
      return h === " " || h === `
` || h === "\r" || h === "	";
    }
    function k(h) {
      return h === '"' || h === "'";
    }
    function q(h) {
      return h === ">" || O(h);
    }
    function W(h, f) {
      return h.test(f);
    }
    function te(h, f) {
      return !W(h, f);
    }
    var T = 0;
    t.STATE = {
      BEGIN: T++,
      // leading byte order mark or whitespace
      BEGIN_WHITESPACE: T++,
      // leading whitespace
      TEXT: T++,
      // general stuff
      TEXT_ENTITY: T++,
      // &amp and such.
      OPEN_WAKA: T++,
      // <
      SGML_DECL: T++,
      // <!BLARG
      SGML_DECL_QUOTED: T++,
      // <!BLARG foo "bar
      DOCTYPE: T++,
      // <!DOCTYPE
      DOCTYPE_QUOTED: T++,
      // <!DOCTYPE "//blah
      DOCTYPE_DTD: T++,
      // <!DOCTYPE "//blah" [ ...
      DOCTYPE_DTD_QUOTED: T++,
      // <!DOCTYPE "//blah" [ "foo
      COMMENT_STARTING: T++,
      // <!-
      COMMENT: T++,
      // <!--
      COMMENT_ENDING: T++,
      // <!-- blah -
      COMMENT_ENDED: T++,
      // <!-- blah --
      CDATA: T++,
      // <![CDATA[ something
      CDATA_ENDING: T++,
      // ]
      CDATA_ENDING_2: T++,
      // ]]
      PROC_INST: T++,
      // <?hi
      PROC_INST_BODY: T++,
      // <?hi there
      PROC_INST_ENDING: T++,
      // <?hi "there" ?
      OPEN_TAG: T++,
      // <strong
      OPEN_TAG_SLASH: T++,
      // <strong /
      ATTRIB: T++,
      // <a
      ATTRIB_NAME: T++,
      // <a foo
      ATTRIB_NAME_SAW_WHITE: T++,
      // <a foo _
      ATTRIB_VALUE: T++,
      // <a foo=
      ATTRIB_VALUE_QUOTED: T++,
      // <a foo="bar
      ATTRIB_VALUE_CLOSED: T++,
      // <a foo="bar"
      ATTRIB_VALUE_UNQUOTED: T++,
      // <a foo=bar
      ATTRIB_VALUE_ENTITY_Q: T++,
      // <foo bar="&quot;"
      ATTRIB_VALUE_ENTITY_U: T++,
      // <foo bar=&quot
      CLOSE_TAG: T++,
      // </a
      CLOSE_TAG_SAW_WHITE: T++,
      // </a   >
      SCRIPT: T++,
      // <script> ...
      SCRIPT_ENDING: T++
      // <script> ... <
    }, t.XML_ENTITIES = {
      amp: "&",
      gt: ">",
      lt: "<",
      quot: '"',
      apos: "'"
    }, t.ENTITIES = {
      amp: "&",
      gt: ">",
      lt: "<",
      quot: '"',
      apos: "'",
      AElig: 198,
      Aacute: 193,
      Acirc: 194,
      Agrave: 192,
      Aring: 197,
      Atilde: 195,
      Auml: 196,
      Ccedil: 199,
      ETH: 208,
      Eacute: 201,
      Ecirc: 202,
      Egrave: 200,
      Euml: 203,
      Iacute: 205,
      Icirc: 206,
      Igrave: 204,
      Iuml: 207,
      Ntilde: 209,
      Oacute: 211,
      Ocirc: 212,
      Ograve: 210,
      Oslash: 216,
      Otilde: 213,
      Ouml: 214,
      THORN: 222,
      Uacute: 218,
      Ucirc: 219,
      Ugrave: 217,
      Uuml: 220,
      Yacute: 221,
      aacute: 225,
      acirc: 226,
      aelig: 230,
      agrave: 224,
      aring: 229,
      atilde: 227,
      auml: 228,
      ccedil: 231,
      eacute: 233,
      ecirc: 234,
      egrave: 232,
      eth: 240,
      euml: 235,
      iacute: 237,
      icirc: 238,
      igrave: 236,
      iuml: 239,
      ntilde: 241,
      oacute: 243,
      ocirc: 244,
      ograve: 242,
      oslash: 248,
      otilde: 245,
      ouml: 246,
      szlig: 223,
      thorn: 254,
      uacute: 250,
      ucirc: 251,
      ugrave: 249,
      uuml: 252,
      yacute: 253,
      yuml: 255,
      copy: 169,
      reg: 174,
      nbsp: 160,
      iexcl: 161,
      cent: 162,
      pound: 163,
      curren: 164,
      yen: 165,
      brvbar: 166,
      sect: 167,
      uml: 168,
      ordf: 170,
      laquo: 171,
      not: 172,
      shy: 173,
      macr: 175,
      deg: 176,
      plusmn: 177,
      sup1: 185,
      sup2: 178,
      sup3: 179,
      acute: 180,
      micro: 181,
      para: 182,
      middot: 183,
      cedil: 184,
      ordm: 186,
      raquo: 187,
      frac14: 188,
      frac12: 189,
      frac34: 190,
      iquest: 191,
      times: 215,
      divide: 247,
      OElig: 338,
      oelig: 339,
      Scaron: 352,
      scaron: 353,
      Yuml: 376,
      fnof: 402,
      circ: 710,
      tilde: 732,
      Alpha: 913,
      Beta: 914,
      Gamma: 915,
      Delta: 916,
      Epsilon: 917,
      Zeta: 918,
      Eta: 919,
      Theta: 920,
      Iota: 921,
      Kappa: 922,
      Lambda: 923,
      Mu: 924,
      Nu: 925,
      Xi: 926,
      Omicron: 927,
      Pi: 928,
      Rho: 929,
      Sigma: 931,
      Tau: 932,
      Upsilon: 933,
      Phi: 934,
      Chi: 935,
      Psi: 936,
      Omega: 937,
      alpha: 945,
      beta: 946,
      gamma: 947,
      delta: 948,
      epsilon: 949,
      zeta: 950,
      eta: 951,
      theta: 952,
      iota: 953,
      kappa: 954,
      lambda: 955,
      mu: 956,
      nu: 957,
      xi: 958,
      omicron: 959,
      pi: 960,
      rho: 961,
      sigmaf: 962,
      sigma: 963,
      tau: 964,
      upsilon: 965,
      phi: 966,
      chi: 967,
      psi: 968,
      omega: 969,
      thetasym: 977,
      upsih: 978,
      piv: 982,
      ensp: 8194,
      emsp: 8195,
      thinsp: 8201,
      zwnj: 8204,
      zwj: 8205,
      lrm: 8206,
      rlm: 8207,
      ndash: 8211,
      mdash: 8212,
      lsquo: 8216,
      rsquo: 8217,
      sbquo: 8218,
      ldquo: 8220,
      rdquo: 8221,
      bdquo: 8222,
      dagger: 8224,
      Dagger: 8225,
      bull: 8226,
      hellip: 8230,
      permil: 8240,
      prime: 8242,
      Prime: 8243,
      lsaquo: 8249,
      rsaquo: 8250,
      oline: 8254,
      frasl: 8260,
      euro: 8364,
      image: 8465,
      weierp: 8472,
      real: 8476,
      trade: 8482,
      alefsym: 8501,
      larr: 8592,
      uarr: 8593,
      rarr: 8594,
      darr: 8595,
      harr: 8596,
      crarr: 8629,
      lArr: 8656,
      uArr: 8657,
      rArr: 8658,
      dArr: 8659,
      hArr: 8660,
      forall: 8704,
      part: 8706,
      exist: 8707,
      empty: 8709,
      nabla: 8711,
      isin: 8712,
      notin: 8713,
      ni: 8715,
      prod: 8719,
      sum: 8721,
      minus: 8722,
      lowast: 8727,
      radic: 8730,
      prop: 8733,
      infin: 8734,
      ang: 8736,
      and: 8743,
      or: 8744,
      cap: 8745,
      cup: 8746,
      int: 8747,
      there4: 8756,
      sim: 8764,
      cong: 8773,
      asymp: 8776,
      ne: 8800,
      equiv: 8801,
      le: 8804,
      ge: 8805,
      sub: 8834,
      sup: 8835,
      nsub: 8836,
      sube: 8838,
      supe: 8839,
      oplus: 8853,
      otimes: 8855,
      perp: 8869,
      sdot: 8901,
      lceil: 8968,
      rceil: 8969,
      lfloor: 8970,
      rfloor: 8971,
      lang: 9001,
      rang: 9002,
      loz: 9674,
      spades: 9824,
      clubs: 9827,
      hearts: 9829,
      diams: 9830
    }, Object.keys(t.ENTITIES).forEach(function(h) {
      var f = t.ENTITIES[h], C = typeof f == "number" ? String.fromCharCode(f) : f;
      t.ENTITIES[h] = C;
    });
    for (var H in t.STATE)
      t.STATE[t.STATE[H]] = H;
    T = t.STATE;
    function j(h, f, C) {
      h[f] && h[f](C);
    }
    function J(h, f, C) {
      h.textNode && ne(h), j(h, f, C);
    }
    function ne(h) {
      h.textNode = F(h.opt, h.textNode), h.textNode && j(h, "ontext", h.textNode), h.textNode = "";
    }
    function F(h, f) {
      return h.trim && (f = f.trim()), h.normalize && (f = f.replace(/\s+/g, " ")), f;
    }
    function $(h, f) {
      return ne(h), h.trackPosition && (f += `
Line: ` + h.line + `
Column: ` + h.column + `
Char: ` + h.c), f = new Error(f), h.error = f, j(h, "onerror", f), h;
    }
    function D(h) {
      return h.sawRoot && !h.closedRoot && b(h, "Unclosed root tag"), h.state !== T.BEGIN && h.state !== T.BEGIN_WHITESPACE && h.state !== T.TEXT && $(h, "Unexpected end"), ne(h), h.c = "", h.closed = !0, j(h, "onend"), r.call(h, h.strict, h.opt), h;
    }
    function b(h, f) {
      if (typeof h != "object" || !(h instanceof r))
        throw new Error("bad call to strictFail");
      h.strict && $(h, f);
    }
    function E(h) {
      h.strict || (h.tagName = h.tagName[h.looseCase]());
      var f = h.tags[h.tags.length - 1] || h, C = h.tag = { name: h.tagName, attributes: {} };
      h.opt.xmlns && (C.ns = f.ns), h.attribList.length = 0, J(h, "onopentagstart", C);
    }
    function R(h, f) {
      var C = h.indexOf(":"), S = C < 0 ? ["", h] : h.split(":"), G = S[0], z = S[1];
      return f && h === "xmlns" && (G = "xmlns", z = ""), { prefix: G, local: z };
    }
    function N(h) {
      if (h.strict || (h.attribName = h.attribName[h.looseCase]()), h.attribList.indexOf(h.attribName) !== -1 || h.tag.attributes.hasOwnProperty(h.attribName)) {
        h.attribName = h.attribValue = "";
        return;
      }
      if (h.opt.xmlns) {
        var f = R(h.attribName, !0), C = f.prefix, S = f.local;
        if (C === "xmlns")
          if (S === "xml" && h.attribValue !== m)
            b(
              h,
              "xml: prefix must be bound to " + m + `
Actual: ` + h.attribValue
            );
          else if (S === "xmlns" && h.attribValue !== g)
            b(
              h,
              "xmlns: prefix must be bound to " + g + `
Actual: ` + h.attribValue
            );
          else {
            var G = h.tag, z = h.tags[h.tags.length - 1] || h;
            G.ns === z.ns && (G.ns = Object.create(z.ns)), G.ns[S] = h.attribValue;
          }
        h.attribList.push([h.attribName, h.attribValue]);
      } else
        h.tag.attributes[h.attribName] = h.attribValue, J(h, "onattribute", {
          name: h.attribName,
          value: h.attribValue
        });
      h.attribName = h.attribValue = "";
    }
    function L(h, f) {
      if (h.opt.xmlns) {
        var C = h.tag, S = R(h.tagName);
        C.prefix = S.prefix, C.local = S.local, C.uri = C.ns[S.prefix] || "", C.prefix && !C.uri && (b(h, "Unbound namespace prefix: " + JSON.stringify(h.tagName)), C.uri = S.prefix);
        var G = h.tags[h.tags.length - 1] || h;
        C.ns && G.ns !== C.ns && Object.keys(C.ns).forEach(function(Mt) {
          J(h, "onopennamespace", {
            prefix: Mt,
            uri: C.ns[Mt]
          });
        });
        for (var z = 0, X = h.attribList.length; z < X; z++) {
          var ve = h.attribList[z], Ae = ve[0], ct = ve[1], Se = R(Ae, !0), qe = Se.prefix, Jn = Se.local, jt = qe === "" ? "" : C.ns[qe] || "", Ot = {
            name: Ae,
            value: ct,
            prefix: qe,
            local: Jn,
            uri: jt
          };
          qe && qe !== "xmlns" && !jt && (b(h, "Unbound namespace prefix: " + JSON.stringify(qe)), Ot.uri = qe), h.tag.attributes[Ae] = Ot, J(h, "onattribute", Ot);
        }
        h.attribList.length = 0;
      }
      h.tag.isSelfClosing = !!f, h.sawRoot = !0, h.tags.push(h.tag), J(h, "onopentag", h.tag), f || (!h.noscript && h.tagName.toLowerCase() === "script" ? h.state = T.SCRIPT : h.state = T.TEXT, h.tag = null, h.tagName = ""), h.attribName = h.attribValue = "", h.attribList.length = 0;
    }
    function B(h) {
      if (!h.tagName) {
        b(h, "Weird empty close tag."), h.textNode += "</>", h.state = T.TEXT;
        return;
      }
      if (h.script) {
        if (h.tagName !== "script") {
          h.script += "</" + h.tagName + ">", h.tagName = "", h.state = T.SCRIPT;
          return;
        }
        J(h, "onscript", h.script), h.script = "";
      }
      var f = h.tags.length, C = h.tagName;
      h.strict || (C = C[h.looseCase]());
      for (var S = C; f--; ) {
        var G = h.tags[f];
        if (G.name !== S)
          b(h, "Unexpected close tag");
        else
          break;
      }
      if (f < 0) {
        b(h, "Unmatched closing tag: " + h.tagName), h.textNode += "</" + h.tagName + ">", h.state = T.TEXT;
        return;
      }
      h.tagName = C;
      for (var z = h.tags.length; z-- > f; ) {
        var X = h.tag = h.tags.pop();
        h.tagName = h.tag.name, J(h, "onclosetag", h.tagName);
        var ve = {};
        for (var Ae in X.ns)
          ve[Ae] = X.ns[Ae];
        var ct = h.tags[h.tags.length - 1] || h;
        h.opt.xmlns && X.ns !== ct.ns && Object.keys(X.ns).forEach(function(Se) {
          var qe = X.ns[Se];
          J(h, "onclosenamespace", { prefix: Se, uri: qe });
        });
      }
      f === 0 && (h.closedRoot = !0), h.tagName = h.attribValue = h.attribName = "", h.attribList.length = 0, h.state = T.TEXT;
    }
    function K(h) {
      var f = h.entity, C = f.toLowerCase(), S, G = "";
      return h.ENTITIES[f] ? h.ENTITIES[f] : h.ENTITIES[C] ? h.ENTITIES[C] : (f = C, f.charAt(0) === "#" && (f.charAt(1) === "x" ? (f = f.slice(2), S = parseInt(f, 16), G = S.toString(16)) : (f = f.slice(1), S = parseInt(f, 10), G = S.toString(10))), f = f.replace(/^0+/, ""), isNaN(S) || G.toLowerCase() !== f ? (b(h, "Invalid character entity"), "&" + h.entity + ";") : String.fromCodePoint(S));
    }
    function Z(h, f) {
      f === "<" ? (h.state = T.OPEN_WAKA, h.startTagPosition = h.position) : O(f) || (b(h, "Non-whitespace before first tag."), h.textNode = f, h.state = T.TEXT);
    }
    function M(h, f) {
      var C = "";
      return f < h.length && (C = h.charAt(f)), C;
    }
    function le(h) {
      var f = this;
      if (this.error)
        throw this.error;
      if (f.closed)
        return $(
          f,
          "Cannot write after close. Assign an onready handler."
        );
      if (h === null)
        return D(f);
      typeof h == "object" && (h = h.toString());
      for (var C = 0, S = ""; S = M(h, C++), f.c = S, !!S; )
        switch (f.trackPosition && (f.position++, S === `
` ? (f.line++, f.column = 0) : f.column++), f.state) {
          case T.BEGIN:
            if (f.state = T.BEGIN_WHITESPACE, S === "\uFEFF")
              continue;
            Z(f, S);
            continue;
          case T.BEGIN_WHITESPACE:
            Z(f, S);
            continue;
          case T.TEXT:
            if (f.sawRoot && !f.closedRoot) {
              for (var G = C - 1; S && S !== "<" && S !== "&"; )
                S = M(h, C++), S && f.trackPosition && (f.position++, S === `
` ? (f.line++, f.column = 0) : f.column++);
              f.textNode += h.substring(G, C - 1);
            }
            S === "<" && !(f.sawRoot && f.closedRoot && !f.strict) ? (f.state = T.OPEN_WAKA, f.startTagPosition = f.position) : (!O(S) && (!f.sawRoot || f.closedRoot) && b(f, "Text data outside of root node."), S === "&" ? f.state = T.TEXT_ENTITY : f.textNode += S);
            continue;
          case T.SCRIPT:
            S === "<" ? f.state = T.SCRIPT_ENDING : f.script += S;
            continue;
          case T.SCRIPT_ENDING:
            S === "/" ? f.state = T.CLOSE_TAG : (f.script += "<" + S, f.state = T.SCRIPT);
            continue;
          case T.OPEN_WAKA:
            if (S === "!")
              f.state = T.SGML_DECL, f.sgmlDecl = "";
            else if (!O(S)) if (W(y, S))
              f.state = T.OPEN_TAG, f.tagName = S;
            else if (S === "/")
              f.state = T.CLOSE_TAG, f.tagName = "";
            else if (S === "?")
              f.state = T.PROC_INST, f.procInstName = f.procInstBody = "";
            else {
              if (b(f, "Unencoded <"), f.startTagPosition + 1 < f.position) {
                var z = f.position - f.startTagPosition;
                S = new Array(z).join(" ") + S;
              }
              f.textNode += "<" + S, f.state = T.TEXT;
            }
            continue;
          case T.SGML_DECL:
            if (f.sgmlDecl + S === "--") {
              f.state = T.COMMENT, f.comment = "", f.sgmlDecl = "";
              continue;
            }
            f.doctype && f.doctype !== !0 && f.sgmlDecl ? (f.state = T.DOCTYPE_DTD, f.doctype += "<!" + f.sgmlDecl + S, f.sgmlDecl = "") : (f.sgmlDecl + S).toUpperCase() === p ? (J(f, "onopencdata"), f.state = T.CDATA, f.sgmlDecl = "", f.cdata = "") : (f.sgmlDecl + S).toUpperCase() === d ? (f.state = T.DOCTYPE, (f.doctype || f.sawRoot) && b(
              f,
              "Inappropriately located doctype declaration"
            ), f.doctype = "", f.sgmlDecl = "") : S === ">" ? (J(f, "onsgmldeclaration", f.sgmlDecl), f.sgmlDecl = "", f.state = T.TEXT) : (k(S) && (f.state = T.SGML_DECL_QUOTED), f.sgmlDecl += S);
            continue;
          case T.SGML_DECL_QUOTED:
            S === f.q && (f.state = T.SGML_DECL, f.q = ""), f.sgmlDecl += S;
            continue;
          case T.DOCTYPE:
            S === ">" ? (f.state = T.TEXT, J(f, "ondoctype", f.doctype), f.doctype = !0) : (f.doctype += S, S === "[" ? f.state = T.DOCTYPE_DTD : k(S) && (f.state = T.DOCTYPE_QUOTED, f.q = S));
            continue;
          case T.DOCTYPE_QUOTED:
            f.doctype += S, S === f.q && (f.q = "", f.state = T.DOCTYPE);
            continue;
          case T.DOCTYPE_DTD:
            S === "]" ? (f.doctype += S, f.state = T.DOCTYPE) : S === "<" ? (f.state = T.OPEN_WAKA, f.startTagPosition = f.position) : k(S) ? (f.doctype += S, f.state = T.DOCTYPE_DTD_QUOTED, f.q = S) : f.doctype += S;
            continue;
          case T.DOCTYPE_DTD_QUOTED:
            f.doctype += S, S === f.q && (f.state = T.DOCTYPE_DTD, f.q = "");
            continue;
          case T.COMMENT:
            S === "-" ? f.state = T.COMMENT_ENDING : f.comment += S;
            continue;
          case T.COMMENT_ENDING:
            S === "-" ? (f.state = T.COMMENT_ENDED, f.comment = F(f.opt, f.comment), f.comment && J(f, "oncomment", f.comment), f.comment = "") : (f.comment += "-" + S, f.state = T.COMMENT);
            continue;
          case T.COMMENT_ENDED:
            S !== ">" ? (b(f, "Malformed comment"), f.comment += "--" + S, f.state = T.COMMENT) : f.doctype && f.doctype !== !0 ? f.state = T.DOCTYPE_DTD : f.state = T.TEXT;
            continue;
          case T.CDATA:
            S === "]" ? f.state = T.CDATA_ENDING : f.cdata += S;
            continue;
          case T.CDATA_ENDING:
            S === "]" ? f.state = T.CDATA_ENDING_2 : (f.cdata += "]" + S, f.state = T.CDATA);
            continue;
          case T.CDATA_ENDING_2:
            S === ">" ? (f.cdata && J(f, "oncdata", f.cdata), J(f, "onclosecdata"), f.cdata = "", f.state = T.TEXT) : S === "]" ? f.cdata += "]" : (f.cdata += "]]" + S, f.state = T.CDATA);
            continue;
          case T.PROC_INST:
            S === "?" ? f.state = T.PROC_INST_ENDING : O(S) ? f.state = T.PROC_INST_BODY : f.procInstName += S;
            continue;
          case T.PROC_INST_BODY:
            if (!f.procInstBody && O(S))
              continue;
            S === "?" ? f.state = T.PROC_INST_ENDING : f.procInstBody += S;
            continue;
          case T.PROC_INST_ENDING:
            S === ">" ? (J(f, "onprocessinginstruction", {
              name: f.procInstName,
              body: f.procInstBody
            }), f.procInstName = f.procInstBody = "", f.state = T.TEXT) : (f.procInstBody += "?" + S, f.state = T.PROC_INST_BODY);
            continue;
          case T.OPEN_TAG:
            W(x, S) ? f.tagName += S : (E(f), S === ">" ? L(f) : S === "/" ? f.state = T.OPEN_TAG_SLASH : (O(S) || b(f, "Invalid character in tag name"), f.state = T.ATTRIB));
            continue;
          case T.OPEN_TAG_SLASH:
            S === ">" ? (L(f, !0), B(f)) : (b(f, "Forward-slash in opening tag not followed by >"), f.state = T.ATTRIB);
            continue;
          case T.ATTRIB:
            if (O(S))
              continue;
            S === ">" ? L(f) : S === "/" ? f.state = T.OPEN_TAG_SLASH : W(y, S) ? (f.attribName = S, f.attribValue = "", f.state = T.ATTRIB_NAME) : b(f, "Invalid attribute name");
            continue;
          case T.ATTRIB_NAME:
            S === "=" ? f.state = T.ATTRIB_VALUE : S === ">" ? (b(f, "Attribute without value"), f.attribValue = f.attribName, N(f), L(f)) : O(S) ? f.state = T.ATTRIB_NAME_SAW_WHITE : W(x, S) ? f.attribName += S : b(f, "Invalid attribute name");
            continue;
          case T.ATTRIB_NAME_SAW_WHITE:
            if (S === "=")
              f.state = T.ATTRIB_VALUE;
            else {
              if (O(S))
                continue;
              b(f, "Attribute without value"), f.tag.attributes[f.attribName] = "", f.attribValue = "", J(f, "onattribute", {
                name: f.attribName,
                value: ""
              }), f.attribName = "", S === ">" ? L(f) : W(y, S) ? (f.attribName = S, f.state = T.ATTRIB_NAME) : (b(f, "Invalid attribute name"), f.state = T.ATTRIB);
            }
            continue;
          case T.ATTRIB_VALUE:
            if (O(S))
              continue;
            k(S) ? (f.q = S, f.state = T.ATTRIB_VALUE_QUOTED) : (f.opt.unquotedAttributeValues || $(f, "Unquoted attribute value"), f.state = T.ATTRIB_VALUE_UNQUOTED, f.attribValue = S);
            continue;
          case T.ATTRIB_VALUE_QUOTED:
            if (S !== f.q) {
              S === "&" ? f.state = T.ATTRIB_VALUE_ENTITY_Q : f.attribValue += S;
              continue;
            }
            N(f), f.q = "", f.state = T.ATTRIB_VALUE_CLOSED;
            continue;
          case T.ATTRIB_VALUE_CLOSED:
            O(S) ? f.state = T.ATTRIB : S === ">" ? L(f) : S === "/" ? f.state = T.OPEN_TAG_SLASH : W(y, S) ? (b(f, "No whitespace between attributes"), f.attribName = S, f.attribValue = "", f.state = T.ATTRIB_NAME) : b(f, "Invalid attribute name");
            continue;
          case T.ATTRIB_VALUE_UNQUOTED:
            if (!q(S)) {
              S === "&" ? f.state = T.ATTRIB_VALUE_ENTITY_U : f.attribValue += S;
              continue;
            }
            N(f), S === ">" ? L(f) : f.state = T.ATTRIB;
            continue;
          case T.CLOSE_TAG:
            if (f.tagName)
              S === ">" ? B(f) : W(x, S) ? f.tagName += S : f.script ? (f.script += "</" + f.tagName, f.tagName = "", f.state = T.SCRIPT) : (O(S) || b(f, "Invalid tagname in closing tag"), f.state = T.CLOSE_TAG_SAW_WHITE);
            else {
              if (O(S))
                continue;
              te(y, S) ? f.script ? (f.script += "</" + S, f.state = T.SCRIPT) : b(f, "Invalid tagname in closing tag.") : f.tagName = S;
            }
            continue;
          case T.CLOSE_TAG_SAW_WHITE:
            if (O(S))
              continue;
            S === ">" ? B(f) : b(f, "Invalid characters in closing tag");
            continue;
          case T.TEXT_ENTITY:
          case T.ATTRIB_VALUE_ENTITY_Q:
          case T.ATTRIB_VALUE_ENTITY_U:
            var X, ve;
            switch (f.state) {
              case T.TEXT_ENTITY:
                X = T.TEXT, ve = "textNode";
                break;
              case T.ATTRIB_VALUE_ENTITY_Q:
                X = T.ATTRIB_VALUE_QUOTED, ve = "attribValue";
                break;
              case T.ATTRIB_VALUE_ENTITY_U:
                X = T.ATTRIB_VALUE_UNQUOTED, ve = "attribValue";
                break;
            }
            if (S === ";") {
              var Ae = K(f);
              f.opt.unparsedEntities && !Object.values(t.XML_ENTITIES).includes(Ae) ? (f.entity = "", f.state = X, f.write(Ae)) : (f[ve] += Ae, f.entity = "", f.state = X);
            } else W(f.entity.length ? A : w, S) ? f.entity += S : (b(f, "Invalid character in entity name"), f[ve] += "&" + f.entity + S, f.entity = "", f.state = X);
            continue;
          default:
            throw new Error(f, "Unknown state: " + f.state);
        }
      return f.position >= f.bufferCheckPosition && i(f), f;
    }
    /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
    String.fromCodePoint || function() {
      var h = String.fromCharCode, f = Math.floor, C = function() {
        var S = 16384, G = [], z, X, ve = -1, Ae = arguments.length;
        if (!Ae)
          return "";
        for (var ct = ""; ++ve < Ae; ) {
          var Se = Number(arguments[ve]);
          if (!isFinite(Se) || // `NaN`, `+Infinity`, or `-Infinity`
          Se < 0 || // not a valid Unicode code point
          Se > 1114111 || // not a valid Unicode code point
          f(Se) !== Se)
            throw RangeError("Invalid code point: " + Se);
          Se <= 65535 ? G.push(Se) : (Se -= 65536, z = (Se >> 10) + 55296, X = Se % 1024 + 56320, G.push(z, X)), (ve + 1 === Ae || G.length > S) && (ct += h.apply(null, G), G.length = 0);
        }
        return ct;
      };
      Object.defineProperty ? Object.defineProperty(String, "fromCodePoint", {
        value: C,
        configurable: !0,
        writable: !0
      }) : String.fromCodePoint = C;
    }();
  })(e);
})(lg);
Object.defineProperty(Vi, "__esModule", { value: !0 });
Vi.XElement = void 0;
Vi.parseXml = dA;
const uA = lg, Ra = Lr;
class ug {
  constructor(t) {
    if (this.name = t, this.value = "", this.attributes = null, this.isCData = !1, this.elements = null, !t)
      throw (0, Ra.newError)("Element name cannot be empty", "ERR_XML_ELEMENT_NAME_EMPTY");
    if (!fA(t))
      throw (0, Ra.newError)(`Invalid element name: ${t}`, "ERR_XML_ELEMENT_INVALID_NAME");
  }
  attribute(t) {
    const n = this.attributes === null ? null : this.attributes[t];
    if (n == null)
      throw (0, Ra.newError)(`No attribute "${t}"`, "ERR_XML_MISSED_ATTRIBUTE");
    return n;
  }
  removeAttribute(t) {
    this.attributes !== null && delete this.attributes[t];
  }
  element(t, n = !1, r = null) {
    const i = this.elementOrNull(t, n);
    if (i === null)
      throw (0, Ra.newError)(r || `No element "${t}"`, "ERR_XML_MISSED_ELEMENT");
    return i;
  }
  elementOrNull(t, n = !1) {
    if (this.elements === null)
      return null;
    for (const r of this.elements)
      if (Ad(r, t, n))
        return r;
    return null;
  }
  getElements(t, n = !1) {
    return this.elements === null ? [] : this.elements.filter((r) => Ad(r, t, n));
  }
  elementValueOrEmpty(t, n = !1) {
    const r = this.elementOrNull(t, n);
    return r === null ? "" : r.value;
  }
}
Vi.XElement = ug;
const pA = new RegExp(/^[A-Za-z_][:A-Za-z0-9_-]*$/i);
function fA(e) {
  return pA.test(e);
}
function Ad(e, t, n) {
  const r = e.name;
  return r === t || n === !0 && r.length === t.length && r.toLowerCase() === t.toLowerCase();
}
function dA(e) {
  let t = null;
  const n = uA.parser(!0, {}), r = [];
  return n.onopentag = (i) => {
    const a = new ug(i.name);
    if (a.attributes = i.attributes, t === null)
      t = a;
    else {
      const o = r[r.length - 1];
      o.elements == null && (o.elements = []), o.elements.push(a);
    }
    r.push(a);
  }, n.onclosetag = () => {
    r.pop();
  }, n.ontext = (i) => {
    r.length > 0 && (r[r.length - 1].value = i);
  }, n.oncdata = (i) => {
    const a = r[r.length - 1];
    a.value = i, a.isCData = !0;
  }, n.onerror = (i) => {
    throw i;
  }, n.write(e), t;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.CURRENT_APP_PACKAGE_FILE_NAME = e.CURRENT_APP_INSTALLER_FILE_NAME = e.XElement = e.parseXml = e.UUID = e.parseDn = e.retry = e.githubUrl = e.getS3LikeProviderBaseUrl = e.ProgressCallbackTransform = e.MemoLazy = e.safeStringifyJson = e.safeGetHeader = e.parseJson = e.HttpExecutor = e.HttpError = e.DigestTransform = e.createHttpError = e.configureRequestUrl = e.configureRequestOptionsFromUrl = e.configureRequestOptions = e.newError = e.CancellationToken = e.CancellationError = void 0, e.asArray = p;
  var t = ln;
  Object.defineProperty(e, "CancellationError", { enumerable: !0, get: function() {
    return t.CancellationError;
  } }), Object.defineProperty(e, "CancellationToken", { enumerable: !0, get: function() {
    return t.CancellationToken;
  } });
  var n = Lr;
  Object.defineProperty(e, "newError", { enumerable: !0, get: function() {
    return n.newError;
  } });
  var r = He;
  Object.defineProperty(e, "configureRequestOptions", { enumerable: !0, get: function() {
    return r.configureRequestOptions;
  } }), Object.defineProperty(e, "configureRequestOptionsFromUrl", { enumerable: !0, get: function() {
    return r.configureRequestOptionsFromUrl;
  } }), Object.defineProperty(e, "configureRequestUrl", { enumerable: !0, get: function() {
    return r.configureRequestUrl;
  } }), Object.defineProperty(e, "createHttpError", { enumerable: !0, get: function() {
    return r.createHttpError;
  } }), Object.defineProperty(e, "DigestTransform", { enumerable: !0, get: function() {
    return r.DigestTransform;
  } }), Object.defineProperty(e, "HttpError", { enumerable: !0, get: function() {
    return r.HttpError;
  } }), Object.defineProperty(e, "HttpExecutor", { enumerable: !0, get: function() {
    return r.HttpExecutor;
  } }), Object.defineProperty(e, "parseJson", { enumerable: !0, get: function() {
    return r.parseJson;
  } }), Object.defineProperty(e, "safeGetHeader", { enumerable: !0, get: function() {
    return r.safeGetHeader;
  } }), Object.defineProperty(e, "safeStringifyJson", { enumerable: !0, get: function() {
    return r.safeStringifyJson;
  } });
  var i = rs;
  Object.defineProperty(e, "MemoLazy", { enumerable: !0, get: function() {
    return i.MemoLazy;
  } });
  var a = Wi;
  Object.defineProperty(e, "ProgressCallbackTransform", { enumerable: !0, get: function() {
    return a.ProgressCallbackTransform;
  } });
  var o = is;
  Object.defineProperty(e, "getS3LikeProviderBaseUrl", { enumerable: !0, get: function() {
    return o.getS3LikeProviderBaseUrl;
  } }), Object.defineProperty(e, "githubUrl", { enumerable: !0, get: function() {
    return o.githubUrl;
  } });
  var c = Iu;
  Object.defineProperty(e, "retry", { enumerable: !0, get: function() {
    return c.retry;
  } });
  var s = Pu;
  Object.defineProperty(e, "parseDn", { enumerable: !0, get: function() {
    return s.parseDn;
  } });
  var u = Ir;
  Object.defineProperty(e, "UUID", { enumerable: !0, get: function() {
    return u.UUID;
  } });
  var l = Vi;
  Object.defineProperty(e, "parseXml", { enumerable: !0, get: function() {
    return l.parseXml;
  } }), Object.defineProperty(e, "XElement", { enumerable: !0, get: function() {
    return l.XElement;
  } }), e.CURRENT_APP_INSTALLER_FILE_NAME = "installer.exe", e.CURRENT_APP_PACKAGE_FILE_NAME = "package.7z";
  function p(d) {
    return d == null ? [] : Array.isArray(d) ? d : [d];
  }
})(De);
var Ue = {}, Du = {}, vt = {};
function pg(e) {
  return typeof e > "u" || e === null;
}
function hA(e) {
  return typeof e == "object" && e !== null;
}
function mA(e) {
  return Array.isArray(e) ? e : pg(e) ? [] : [e];
}
function vA(e, t) {
  var n, r, i, a;
  if (t)
    for (a = Object.keys(t), n = 0, r = a.length; n < r; n += 1)
      i = a[n], e[i] = t[i];
  return e;
}
function gA(e, t) {
  var n = "", r;
  for (r = 0; r < t; r += 1)
    n += e;
  return n;
}
function xA(e) {
  return e === 0 && Number.NEGATIVE_INFINITY === 1 / e;
}
vt.isNothing = pg;
vt.isObject = hA;
vt.toArray = mA;
vt.repeat = gA;
vt.isNegativeZero = xA;
vt.extend = vA;
function fg(e, t) {
  var n = "", r = e.reason || "(unknown reason)";
  return e.mark ? (e.mark.name && (n += 'in "' + e.mark.name + '" '), n += "(" + (e.mark.line + 1) + ":" + (e.mark.column + 1) + ")", !t && e.mark.snippet && (n += `

` + e.mark.snippet), r + " " + n) : r;
}
function bi(e, t) {
  Error.call(this), this.name = "YAMLException", this.reason = e, this.mark = t, this.message = fg(this, !1), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
}
bi.prototype = Object.create(Error.prototype);
bi.prototype.constructor = bi;
bi.prototype.toString = function(t) {
  return this.name + ": " + fg(this, t);
};
var Yi = bi, ti = vt;
function Ic(e, t, n, r, i) {
  var a = "", o = "", c = Math.floor(i / 2) - 1;
  return r - t > c && (a = " ... ", t = r - c + a.length), n - r > c && (o = " ...", n = r + c - o.length), {
    str: a + e.slice(t, n).replace(/\t/g, "→") + o,
    pos: r - t + a.length
    // relative position
  };
}
function Pc(e, t) {
  return ti.repeat(" ", t - e.length) + e;
}
function yA(e, t) {
  if (t = Object.create(t || null), !e.buffer) return null;
  t.maxLength || (t.maxLength = 79), typeof t.indent != "number" && (t.indent = 1), typeof t.linesBefore != "number" && (t.linesBefore = 3), typeof t.linesAfter != "number" && (t.linesAfter = 2);
  for (var n = /\r?\n|\r|\0/g, r = [0], i = [], a, o = -1; a = n.exec(e.buffer); )
    i.push(a.index), r.push(a.index + a[0].length), e.position <= a.index && o < 0 && (o = r.length - 2);
  o < 0 && (o = r.length - 1);
  var c = "", s, u, l = Math.min(e.line + t.linesAfter, i.length).toString().length, p = t.maxLength - (t.indent + l + 3);
  for (s = 1; s <= t.linesBefore && !(o - s < 0); s++)
    u = Ic(
      e.buffer,
      r[o - s],
      i[o - s],
      e.position - (r[o] - r[o - s]),
      p
    ), c = ti.repeat(" ", t.indent) + Pc((e.line - s + 1).toString(), l) + " | " + u.str + `
` + c;
  for (u = Ic(e.buffer, r[o], i[o], e.position, p), c += ti.repeat(" ", t.indent) + Pc((e.line + 1).toString(), l) + " | " + u.str + `
`, c += ti.repeat("-", t.indent + l + 3 + u.pos) + `^
`, s = 1; s <= t.linesAfter && !(o + s >= i.length); s++)
    u = Ic(
      e.buffer,
      r[o + s],
      i[o + s],
      e.position - (r[o] - r[o + s]),
      p
    ), c += ti.repeat(" ", t.indent) + Pc((e.line + s + 1).toString(), l) + " | " + u.str + `
`;
  return c.replace(/\n$/, "");
}
var bA = yA, Rd = Yi, wA = [
  "kind",
  "multi",
  "resolve",
  "construct",
  "instanceOf",
  "predicate",
  "represent",
  "representName",
  "defaultStyle",
  "styleAliases"
], EA = [
  "scalar",
  "sequence",
  "mapping"
];
function _A(e) {
  var t = {};
  return e !== null && Object.keys(e).forEach(function(n) {
    e[n].forEach(function(r) {
      t[String(r)] = n;
    });
  }), t;
}
function SA(e, t) {
  if (t = t || {}, Object.keys(t).forEach(function(n) {
    if (wA.indexOf(n) === -1)
      throw new Rd('Unknown option "' + n + '" is met in definition of "' + e + '" YAML type.');
  }), this.options = t, this.tag = e, this.kind = t.kind || null, this.resolve = t.resolve || function() {
    return !0;
  }, this.construct = t.construct || function(n) {
    return n;
  }, this.instanceOf = t.instanceOf || null, this.predicate = t.predicate || null, this.represent = t.represent || null, this.representName = t.representName || null, this.defaultStyle = t.defaultStyle || null, this.multi = t.multi || !1, this.styleAliases = _A(t.styleAliases || null), EA.indexOf(this.kind) === -1)
    throw new Rd('Unknown kind "' + this.kind + '" is specified for "' + e + '" YAML type.');
}
var Ye = SA, Kr = Yi, Dc = Ye;
function Cd(e, t) {
  var n = [];
  return e[t].forEach(function(r) {
    var i = n.length;
    n.forEach(function(a, o) {
      a.tag === r.tag && a.kind === r.kind && a.multi === r.multi && (i = o);
    }), n[i] = r;
  }), n;
}
function TA() {
  var e = {
    scalar: {},
    sequence: {},
    mapping: {},
    fallback: {},
    multi: {
      scalar: [],
      sequence: [],
      mapping: [],
      fallback: []
    }
  }, t, n;
  function r(i) {
    i.multi ? (e.multi[i.kind].push(i), e.multi.fallback.push(i)) : e[i.kind][i.tag] = e.fallback[i.tag] = i;
  }
  for (t = 0, n = arguments.length; t < n; t += 1)
    arguments[t].forEach(r);
  return e;
}
function Sl(e) {
  return this.extend(e);
}
Sl.prototype.extend = function(t) {
  var n = [], r = [];
  if (t instanceof Dc)
    r.push(t);
  else if (Array.isArray(t))
    r = r.concat(t);
  else if (t && (Array.isArray(t.implicit) || Array.isArray(t.explicit)))
    t.implicit && (n = n.concat(t.implicit)), t.explicit && (r = r.concat(t.explicit));
  else
    throw new Kr("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
  n.forEach(function(a) {
    if (!(a instanceof Dc))
      throw new Kr("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    if (a.loadKind && a.loadKind !== "scalar")
      throw new Kr("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    if (a.multi)
      throw new Kr("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
  }), r.forEach(function(a) {
    if (!(a instanceof Dc))
      throw new Kr("Specified list of YAML types (or a single Type object) contains a non-Type object.");
  });
  var i = Object.create(Sl.prototype);
  return i.implicit = (this.implicit || []).concat(n), i.explicit = (this.explicit || []).concat(r), i.compiledImplicit = Cd(i, "implicit"), i.compiledExplicit = Cd(i, "explicit"), i.compiledTypeMap = TA(i.compiledImplicit, i.compiledExplicit), i;
};
var dg = Sl, AA = Ye, hg = new AA("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: function(e) {
    return e !== null ? e : "";
  }
}), RA = Ye, mg = new RA("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: function(e) {
    return e !== null ? e : [];
  }
}), CA = Ye, vg = new CA("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: function(e) {
    return e !== null ? e : {};
  }
}), OA = dg, gg = new OA({
  explicit: [
    hg,
    mg,
    vg
  ]
}), $A = Ye;
function IA(e) {
  if (e === null) return !0;
  var t = e.length;
  return t === 1 && e === "~" || t === 4 && (e === "null" || e === "Null" || e === "NULL");
}
function PA() {
  return null;
}
function DA(e) {
  return e === null;
}
var xg = new $A("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: IA,
  construct: PA,
  predicate: DA,
  represent: {
    canonical: function() {
      return "~";
    },
    lowercase: function() {
      return "null";
    },
    uppercase: function() {
      return "NULL";
    },
    camelcase: function() {
      return "Null";
    },
    empty: function() {
      return "";
    }
  },
  defaultStyle: "lowercase"
}), FA = Ye;
function NA(e) {
  if (e === null) return !1;
  var t = e.length;
  return t === 4 && (e === "true" || e === "True" || e === "TRUE") || t === 5 && (e === "false" || e === "False" || e === "FALSE");
}
function kA(e) {
  return e === "true" || e === "True" || e === "TRUE";
}
function LA(e) {
  return Object.prototype.toString.call(e) === "[object Boolean]";
}
var yg = new FA("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: NA,
  construct: kA,
  predicate: LA,
  represent: {
    lowercase: function(e) {
      return e ? "true" : "false";
    },
    uppercase: function(e) {
      return e ? "TRUE" : "FALSE";
    },
    camelcase: function(e) {
      return e ? "True" : "False";
    }
  },
  defaultStyle: "lowercase"
}), UA = vt, BA = Ye;
function jA(e) {
  return 48 <= e && e <= 57 || 65 <= e && e <= 70 || 97 <= e && e <= 102;
}
function MA(e) {
  return 48 <= e && e <= 55;
}
function qA(e) {
  return 48 <= e && e <= 57;
}
function zA(e) {
  if (e === null) return !1;
  var t = e.length, n = 0, r = !1, i;
  if (!t) return !1;
  if (i = e[n], (i === "-" || i === "+") && (i = e[++n]), i === "0") {
    if (n + 1 === t) return !0;
    if (i = e[++n], i === "b") {
      for (n++; n < t; n++)
        if (i = e[n], i !== "_") {
          if (i !== "0" && i !== "1") return !1;
          r = !0;
        }
      return r && i !== "_";
    }
    if (i === "x") {
      for (n++; n < t; n++)
        if (i = e[n], i !== "_") {
          if (!jA(e.charCodeAt(n))) return !1;
          r = !0;
        }
      return r && i !== "_";
    }
    if (i === "o") {
      for (n++; n < t; n++)
        if (i = e[n], i !== "_") {
          if (!MA(e.charCodeAt(n))) return !1;
          r = !0;
        }
      return r && i !== "_";
    }
  }
  if (i === "_") return !1;
  for (; n < t; n++)
    if (i = e[n], i !== "_") {
      if (!qA(e.charCodeAt(n)))
        return !1;
      r = !0;
    }
  return !(!r || i === "_");
}
function HA(e) {
  var t = e, n = 1, r;
  if (t.indexOf("_") !== -1 && (t = t.replace(/_/g, "")), r = t[0], (r === "-" || r === "+") && (r === "-" && (n = -1), t = t.slice(1), r = t[0]), t === "0") return 0;
  if (r === "0") {
    if (t[1] === "b") return n * parseInt(t.slice(2), 2);
    if (t[1] === "x") return n * parseInt(t.slice(2), 16);
    if (t[1] === "o") return n * parseInt(t.slice(2), 8);
  }
  return n * parseInt(t, 10);
}
function GA(e) {
  return Object.prototype.toString.call(e) === "[object Number]" && e % 1 === 0 && !UA.isNegativeZero(e);
}
var bg = new BA("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: zA,
  construct: HA,
  predicate: GA,
  represent: {
    binary: function(e) {
      return e >= 0 ? "0b" + e.toString(2) : "-0b" + e.toString(2).slice(1);
    },
    octal: function(e) {
      return e >= 0 ? "0o" + e.toString(8) : "-0o" + e.toString(8).slice(1);
    },
    decimal: function(e) {
      return e.toString(10);
    },
    /* eslint-disable max-len */
    hexadecimal: function(e) {
      return e >= 0 ? "0x" + e.toString(16).toUpperCase() : "-0x" + e.toString(16).toUpperCase().slice(1);
    }
  },
  defaultStyle: "decimal",
  styleAliases: {
    binary: [2, "bin"],
    octal: [8, "oct"],
    decimal: [10, "dec"],
    hexadecimal: [16, "hex"]
  }
}), wg = vt, WA = Ye, VA = new RegExp(
  // 2.5e4, 2.5 and integers
  "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
);
function YA(e) {
  return !(e === null || !VA.test(e) || // Quick hack to not allow integers end with `_`
  // Probably should update regexp & check speed
  e[e.length - 1] === "_");
}
function XA(e) {
  var t, n;
  return t = e.replace(/_/g, "").toLowerCase(), n = t[0] === "-" ? -1 : 1, "+-".indexOf(t[0]) >= 0 && (t = t.slice(1)), t === ".inf" ? n === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : t === ".nan" ? NaN : n * parseFloat(t, 10);
}
var KA = /^[-+]?[0-9]+e/;
function JA(e, t) {
  var n;
  if (isNaN(e))
    switch (t) {
      case "lowercase":
        return ".nan";
      case "uppercase":
        return ".NAN";
      case "camelcase":
        return ".NaN";
    }
  else if (Number.POSITIVE_INFINITY === e)
    switch (t) {
      case "lowercase":
        return ".inf";
      case "uppercase":
        return ".INF";
      case "camelcase":
        return ".Inf";
    }
  else if (Number.NEGATIVE_INFINITY === e)
    switch (t) {
      case "lowercase":
        return "-.inf";
      case "uppercase":
        return "-.INF";
      case "camelcase":
        return "-.Inf";
    }
  else if (wg.isNegativeZero(e))
    return "-0.0";
  return n = e.toString(10), KA.test(n) ? n.replace("e", ".e") : n;
}
function ZA(e) {
  return Object.prototype.toString.call(e) === "[object Number]" && (e % 1 !== 0 || wg.isNegativeZero(e));
}
var Eg = new WA("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: YA,
  construct: XA,
  predicate: ZA,
  represent: JA,
  defaultStyle: "lowercase"
}), _g = gg.extend({
  implicit: [
    xg,
    yg,
    bg,
    Eg
  ]
}), Sg = _g, QA = Ye, Tg = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
), Ag = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
);
function e6(e) {
  return e === null ? !1 : Tg.exec(e) !== null || Ag.exec(e) !== null;
}
function t6(e) {
  var t, n, r, i, a, o, c, s = 0, u = null, l, p, d;
  if (t = Tg.exec(e), t === null && (t = Ag.exec(e)), t === null) throw new Error("Date resolve error");
  if (n = +t[1], r = +t[2] - 1, i = +t[3], !t[4])
    return new Date(Date.UTC(n, r, i));
  if (a = +t[4], o = +t[5], c = +t[6], t[7]) {
    for (s = t[7].slice(0, 3); s.length < 3; )
      s += "0";
    s = +s;
  }
  return t[9] && (l = +t[10], p = +(t[11] || 0), u = (l * 60 + p) * 6e4, t[9] === "-" && (u = -u)), d = new Date(Date.UTC(n, r, i, a, o, c, s)), u && d.setTime(d.getTime() - u), d;
}
function n6(e) {
  return e.toISOString();
}
var Rg = new QA("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: e6,
  construct: t6,
  instanceOf: Date,
  represent: n6
}), r6 = Ye;
function i6(e) {
  return e === "<<" || e === null;
}
var Cg = new r6("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: i6
}), a6 = Ye, Fu = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function o6(e) {
  if (e === null) return !1;
  var t, n, r = 0, i = e.length, a = Fu;
  for (n = 0; n < i; n++)
    if (t = a.indexOf(e.charAt(n)), !(t > 64)) {
      if (t < 0) return !1;
      r += 6;
    }
  return r % 8 === 0;
}
function s6(e) {
  var t, n, r = e.replace(/[\r\n=]/g, ""), i = r.length, a = Fu, o = 0, c = [];
  for (t = 0; t < i; t++)
    t % 4 === 0 && t && (c.push(o >> 16 & 255), c.push(o >> 8 & 255), c.push(o & 255)), o = o << 6 | a.indexOf(r.charAt(t));
  return n = i % 4 * 6, n === 0 ? (c.push(o >> 16 & 255), c.push(o >> 8 & 255), c.push(o & 255)) : n === 18 ? (c.push(o >> 10 & 255), c.push(o >> 2 & 255)) : n === 12 && c.push(o >> 4 & 255), new Uint8Array(c);
}
function c6(e) {
  var t = "", n = 0, r, i, a = e.length, o = Fu;
  for (r = 0; r < a; r++)
    r % 3 === 0 && r && (t += o[n >> 18 & 63], t += o[n >> 12 & 63], t += o[n >> 6 & 63], t += o[n & 63]), n = (n << 8) + e[r];
  return i = a % 3, i === 0 ? (t += o[n >> 18 & 63], t += o[n >> 12 & 63], t += o[n >> 6 & 63], t += o[n & 63]) : i === 2 ? (t += o[n >> 10 & 63], t += o[n >> 4 & 63], t += o[n << 2 & 63], t += o[64]) : i === 1 && (t += o[n >> 2 & 63], t += o[n << 4 & 63], t += o[64], t += o[64]), t;
}
function l6(e) {
  return Object.prototype.toString.call(e) === "[object Uint8Array]";
}
var Og = new a6("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: o6,
  construct: s6,
  predicate: l6,
  represent: c6
}), u6 = Ye, p6 = Object.prototype.hasOwnProperty, f6 = Object.prototype.toString;
function d6(e) {
  if (e === null) return !0;
  var t = [], n, r, i, a, o, c = e;
  for (n = 0, r = c.length; n < r; n += 1) {
    if (i = c[n], o = !1, f6.call(i) !== "[object Object]") return !1;
    for (a in i)
      if (p6.call(i, a))
        if (!o) o = !0;
        else return !1;
    if (!o) return !1;
    if (t.indexOf(a) === -1) t.push(a);
    else return !1;
  }
  return !0;
}
function h6(e) {
  return e !== null ? e : [];
}
var $g = new u6("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: d6,
  construct: h6
}), m6 = Ye, v6 = Object.prototype.toString;
function g6(e) {
  if (e === null) return !0;
  var t, n, r, i, a, o = e;
  for (a = new Array(o.length), t = 0, n = o.length; t < n; t += 1) {
    if (r = o[t], v6.call(r) !== "[object Object]" || (i = Object.keys(r), i.length !== 1)) return !1;
    a[t] = [i[0], r[i[0]]];
  }
  return !0;
}
function x6(e) {
  if (e === null) return [];
  var t, n, r, i, a, o = e;
  for (a = new Array(o.length), t = 0, n = o.length; t < n; t += 1)
    r = o[t], i = Object.keys(r), a[t] = [i[0], r[i[0]]];
  return a;
}
var Ig = new m6("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: g6,
  construct: x6
}), y6 = Ye, b6 = Object.prototype.hasOwnProperty;
function w6(e) {
  if (e === null) return !0;
  var t, n = e;
  for (t in n)
    if (b6.call(n, t) && n[t] !== null)
      return !1;
  return !0;
}
function E6(e) {
  return e !== null ? e : {};
}
var Pg = new y6("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: w6,
  construct: E6
}), Nu = Sg.extend({
  implicit: [
    Rg,
    Cg
  ],
  explicit: [
    Og,
    $g,
    Ig,
    Pg
  ]
}), On = vt, Dg = Yi, _6 = bA, S6 = Nu, un = Object.prototype.hasOwnProperty, ho = 1, Fg = 2, Ng = 3, mo = 4, Fc = 1, T6 = 2, Od = 3, A6 = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, R6 = /[\x85\u2028\u2029]/, C6 = /[,\[\]\{\}]/, kg = /^(?:!|!!|![a-z\-]+!)$/i, Lg = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function $d(e) {
  return Object.prototype.toString.call(e);
}
function St(e) {
  return e === 10 || e === 13;
}
function Un(e) {
  return e === 9 || e === 32;
}
function Ze(e) {
  return e === 9 || e === 32 || e === 10 || e === 13;
}
function mr(e) {
  return e === 44 || e === 91 || e === 93 || e === 123 || e === 125;
}
function O6(e) {
  var t;
  return 48 <= e && e <= 57 ? e - 48 : (t = e | 32, 97 <= t && t <= 102 ? t - 97 + 10 : -1);
}
function $6(e) {
  return e === 120 ? 2 : e === 117 ? 4 : e === 85 ? 8 : 0;
}
function I6(e) {
  return 48 <= e && e <= 57 ? e - 48 : -1;
}
function Id(e) {
  return e === 48 ? "\0" : e === 97 ? "\x07" : e === 98 ? "\b" : e === 116 || e === 9 ? "	" : e === 110 ? `
` : e === 118 ? "\v" : e === 102 ? "\f" : e === 114 ? "\r" : e === 101 ? "\x1B" : e === 32 ? " " : e === 34 ? '"' : e === 47 ? "/" : e === 92 ? "\\" : e === 78 ? "" : e === 95 ? " " : e === 76 ? "\u2028" : e === 80 ? "\u2029" : "";
}
function P6(e) {
  return e <= 65535 ? String.fromCharCode(e) : String.fromCharCode(
    (e - 65536 >> 10) + 55296,
    (e - 65536 & 1023) + 56320
  );
}
var Ug = new Array(256), Bg = new Array(256);
for (var nr = 0; nr < 256; nr++)
  Ug[nr] = Id(nr) ? 1 : 0, Bg[nr] = Id(nr);
function D6(e, t) {
  this.input = e, this.filename = t.filename || null, this.schema = t.schema || S6, this.onWarning = t.onWarning || null, this.legacy = t.legacy || !1, this.json = t.json || !1, this.listener = t.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = e.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
}
function jg(e, t) {
  var n = {
    name: e.filename,
    buffer: e.input.slice(0, -1),
    // omit trailing \0
    position: e.position,
    line: e.line,
    column: e.position - e.lineStart
  };
  return n.snippet = _6(n), new Dg(t, n);
}
function Q(e, t) {
  throw jg(e, t);
}
function vo(e, t) {
  e.onWarning && e.onWarning.call(null, jg(e, t));
}
var Pd = {
  YAML: function(t, n, r) {
    var i, a, o;
    t.version !== null && Q(t, "duplication of %YAML directive"), r.length !== 1 && Q(t, "YAML directive accepts exactly one argument"), i = /^([0-9]+)\.([0-9]+)$/.exec(r[0]), i === null && Q(t, "ill-formed argument of the YAML directive"), a = parseInt(i[1], 10), o = parseInt(i[2], 10), a !== 1 && Q(t, "unacceptable YAML version of the document"), t.version = r[0], t.checkLineBreaks = o < 2, o !== 1 && o !== 2 && vo(t, "unsupported YAML version of the document");
  },
  TAG: function(t, n, r) {
    var i, a;
    r.length !== 2 && Q(t, "TAG directive accepts exactly two arguments"), i = r[0], a = r[1], kg.test(i) || Q(t, "ill-formed tag handle (first argument) of the TAG directive"), un.call(t.tagMap, i) && Q(t, 'there is a previously declared suffix for "' + i + '" tag handle'), Lg.test(a) || Q(t, "ill-formed tag prefix (second argument) of the TAG directive");
    try {
      a = decodeURIComponent(a);
    } catch {
      Q(t, "tag prefix is malformed: " + a);
    }
    t.tagMap[i] = a;
  }
};
function nn(e, t, n, r) {
  var i, a, o, c;
  if (t < n) {
    if (c = e.input.slice(t, n), r)
      for (i = 0, a = c.length; i < a; i += 1)
        o = c.charCodeAt(i), o === 9 || 32 <= o && o <= 1114111 || Q(e, "expected valid JSON character");
    else A6.test(c) && Q(e, "the stream contains non-printable characters");
    e.result += c;
  }
}
function Dd(e, t, n, r) {
  var i, a, o, c;
  for (On.isObject(n) || Q(e, "cannot merge mappings; the provided source object is unacceptable"), i = Object.keys(n), o = 0, c = i.length; o < c; o += 1)
    a = i[o], un.call(t, a) || (t[a] = n[a], r[a] = !0);
}
function vr(e, t, n, r, i, a, o, c, s) {
  var u, l;
  if (Array.isArray(i))
    for (i = Array.prototype.slice.call(i), u = 0, l = i.length; u < l; u += 1)
      Array.isArray(i[u]) && Q(e, "nested arrays are not supported inside keys"), typeof i == "object" && $d(i[u]) === "[object Object]" && (i[u] = "[object Object]");
  if (typeof i == "object" && $d(i) === "[object Object]" && (i = "[object Object]"), i = String(i), t === null && (t = {}), r === "tag:yaml.org,2002:merge")
    if (Array.isArray(a))
      for (u = 0, l = a.length; u < l; u += 1)
        Dd(e, t, a[u], n);
    else
      Dd(e, t, a, n);
  else
    !e.json && !un.call(n, i) && un.call(t, i) && (e.line = o || e.line, e.lineStart = c || e.lineStart, e.position = s || e.position, Q(e, "duplicated mapping key")), i === "__proto__" ? Object.defineProperty(t, i, {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: a
    }) : t[i] = a, delete n[i];
  return t;
}
function ku(e) {
  var t;
  t = e.input.charCodeAt(e.position), t === 10 ? e.position++ : t === 13 ? (e.position++, e.input.charCodeAt(e.position) === 10 && e.position++) : Q(e, "a line break is expected"), e.line += 1, e.lineStart = e.position, e.firstTabInLine = -1;
}
function Re(e, t, n) {
  for (var r = 0, i = e.input.charCodeAt(e.position); i !== 0; ) {
    for (; Un(i); )
      i === 9 && e.firstTabInLine === -1 && (e.firstTabInLine = e.position), i = e.input.charCodeAt(++e.position);
    if (t && i === 35)
      do
        i = e.input.charCodeAt(++e.position);
      while (i !== 10 && i !== 13 && i !== 0);
    if (St(i))
      for (ku(e), i = e.input.charCodeAt(e.position), r++, e.lineIndent = 0; i === 32; )
        e.lineIndent++, i = e.input.charCodeAt(++e.position);
    else
      break;
  }
  return n !== -1 && r !== 0 && e.lineIndent < n && vo(e, "deficient indentation"), r;
}
function as(e) {
  var t = e.position, n;
  return n = e.input.charCodeAt(t), !!((n === 45 || n === 46) && n === e.input.charCodeAt(t + 1) && n === e.input.charCodeAt(t + 2) && (t += 3, n = e.input.charCodeAt(t), n === 0 || Ze(n)));
}
function Lu(e, t) {
  t === 1 ? e.result += " " : t > 1 && (e.result += On.repeat(`
`, t - 1));
}
function F6(e, t, n) {
  var r, i, a, o, c, s, u, l, p = e.kind, d = e.result, m;
  if (m = e.input.charCodeAt(e.position), Ze(m) || mr(m) || m === 35 || m === 38 || m === 42 || m === 33 || m === 124 || m === 62 || m === 39 || m === 34 || m === 37 || m === 64 || m === 96 || (m === 63 || m === 45) && (i = e.input.charCodeAt(e.position + 1), Ze(i) || n && mr(i)))
    return !1;
  for (e.kind = "scalar", e.result = "", a = o = e.position, c = !1; m !== 0; ) {
    if (m === 58) {
      if (i = e.input.charCodeAt(e.position + 1), Ze(i) || n && mr(i))
        break;
    } else if (m === 35) {
      if (r = e.input.charCodeAt(e.position - 1), Ze(r))
        break;
    } else {
      if (e.position === e.lineStart && as(e) || n && mr(m))
        break;
      if (St(m))
        if (s = e.line, u = e.lineStart, l = e.lineIndent, Re(e, !1, -1), e.lineIndent >= t) {
          c = !0, m = e.input.charCodeAt(e.position);
          continue;
        } else {
          e.position = o, e.line = s, e.lineStart = u, e.lineIndent = l;
          break;
        }
    }
    c && (nn(e, a, o, !1), Lu(e, e.line - s), a = o = e.position, c = !1), Un(m) || (o = e.position + 1), m = e.input.charCodeAt(++e.position);
  }
  return nn(e, a, o, !1), e.result ? !0 : (e.kind = p, e.result = d, !1);
}
function N6(e, t) {
  var n, r, i;
  if (n = e.input.charCodeAt(e.position), n !== 39)
    return !1;
  for (e.kind = "scalar", e.result = "", e.position++, r = i = e.position; (n = e.input.charCodeAt(e.position)) !== 0; )
    if (n === 39)
      if (nn(e, r, e.position, !0), n = e.input.charCodeAt(++e.position), n === 39)
        r = e.position, e.position++, i = e.position;
      else
        return !0;
    else St(n) ? (nn(e, r, i, !0), Lu(e, Re(e, !1, t)), r = i = e.position) : e.position === e.lineStart && as(e) ? Q(e, "unexpected end of the document within a single quoted scalar") : (e.position++, i = e.position);
  Q(e, "unexpected end of the stream within a single quoted scalar");
}
function k6(e, t) {
  var n, r, i, a, o, c;
  if (c = e.input.charCodeAt(e.position), c !== 34)
    return !1;
  for (e.kind = "scalar", e.result = "", e.position++, n = r = e.position; (c = e.input.charCodeAt(e.position)) !== 0; ) {
    if (c === 34)
      return nn(e, n, e.position, !0), e.position++, !0;
    if (c === 92) {
      if (nn(e, n, e.position, !0), c = e.input.charCodeAt(++e.position), St(c))
        Re(e, !1, t);
      else if (c < 256 && Ug[c])
        e.result += Bg[c], e.position++;
      else if ((o = $6(c)) > 0) {
        for (i = o, a = 0; i > 0; i--)
          c = e.input.charCodeAt(++e.position), (o = O6(c)) >= 0 ? a = (a << 4) + o : Q(e, "expected hexadecimal character");
        e.result += P6(a), e.position++;
      } else
        Q(e, "unknown escape sequence");
      n = r = e.position;
    } else St(c) ? (nn(e, n, r, !0), Lu(e, Re(e, !1, t)), n = r = e.position) : e.position === e.lineStart && as(e) ? Q(e, "unexpected end of the document within a double quoted scalar") : (e.position++, r = e.position);
  }
  Q(e, "unexpected end of the stream within a double quoted scalar");
}
function L6(e, t) {
  var n = !0, r, i, a, o = e.tag, c, s = e.anchor, u, l, p, d, m, g = /* @__PURE__ */ Object.create(null), v, y, x, w;
  if (w = e.input.charCodeAt(e.position), w === 91)
    l = 93, m = !1, c = [];
  else if (w === 123)
    l = 125, m = !0, c = {};
  else
    return !1;
  for (e.anchor !== null && (e.anchorMap[e.anchor] = c), w = e.input.charCodeAt(++e.position); w !== 0; ) {
    if (Re(e, !0, t), w = e.input.charCodeAt(e.position), w === l)
      return e.position++, e.tag = o, e.anchor = s, e.kind = m ? "mapping" : "sequence", e.result = c, !0;
    n ? w === 44 && Q(e, "expected the node content, but found ','") : Q(e, "missed comma between flow collection entries"), y = v = x = null, p = d = !1, w === 63 && (u = e.input.charCodeAt(e.position + 1), Ze(u) && (p = d = !0, e.position++, Re(e, !0, t))), r = e.line, i = e.lineStart, a = e.position, Pr(e, t, ho, !1, !0), y = e.tag, v = e.result, Re(e, !0, t), w = e.input.charCodeAt(e.position), (d || e.line === r) && w === 58 && (p = !0, w = e.input.charCodeAt(++e.position), Re(e, !0, t), Pr(e, t, ho, !1, !0), x = e.result), m ? vr(e, c, g, y, v, x, r, i, a) : p ? c.push(vr(e, null, g, y, v, x, r, i, a)) : c.push(v), Re(e, !0, t), w = e.input.charCodeAt(e.position), w === 44 ? (n = !0, w = e.input.charCodeAt(++e.position)) : n = !1;
  }
  Q(e, "unexpected end of the stream within a flow collection");
}
function U6(e, t) {
  var n, r, i = Fc, a = !1, o = !1, c = t, s = 0, u = !1, l, p;
  if (p = e.input.charCodeAt(e.position), p === 124)
    r = !1;
  else if (p === 62)
    r = !0;
  else
    return !1;
  for (e.kind = "scalar", e.result = ""; p !== 0; )
    if (p = e.input.charCodeAt(++e.position), p === 43 || p === 45)
      Fc === i ? i = p === 43 ? Od : T6 : Q(e, "repeat of a chomping mode identifier");
    else if ((l = I6(p)) >= 0)
      l === 0 ? Q(e, "bad explicit indentation width of a block scalar; it cannot be less than one") : o ? Q(e, "repeat of an indentation width identifier") : (c = t + l - 1, o = !0);
    else
      break;
  if (Un(p)) {
    do
      p = e.input.charCodeAt(++e.position);
    while (Un(p));
    if (p === 35)
      do
        p = e.input.charCodeAt(++e.position);
      while (!St(p) && p !== 0);
  }
  for (; p !== 0; ) {
    for (ku(e), e.lineIndent = 0, p = e.input.charCodeAt(e.position); (!o || e.lineIndent < c) && p === 32; )
      e.lineIndent++, p = e.input.charCodeAt(++e.position);
    if (!o && e.lineIndent > c && (c = e.lineIndent), St(p)) {
      s++;
      continue;
    }
    if (e.lineIndent < c) {
      i === Od ? e.result += On.repeat(`
`, a ? 1 + s : s) : i === Fc && a && (e.result += `
`);
      break;
    }
    for (r ? Un(p) ? (u = !0, e.result += On.repeat(`
`, a ? 1 + s : s)) : u ? (u = !1, e.result += On.repeat(`
`, s + 1)) : s === 0 ? a && (e.result += " ") : e.result += On.repeat(`
`, s) : e.result += On.repeat(`
`, a ? 1 + s : s), a = !0, o = !0, s = 0, n = e.position; !St(p) && p !== 0; )
      p = e.input.charCodeAt(++e.position);
    nn(e, n, e.position, !1);
  }
  return !0;
}
function Fd(e, t) {
  var n, r = e.tag, i = e.anchor, a = [], o, c = !1, s;
  if (e.firstTabInLine !== -1) return !1;
  for (e.anchor !== null && (e.anchorMap[e.anchor] = a), s = e.input.charCodeAt(e.position); s !== 0 && (e.firstTabInLine !== -1 && (e.position = e.firstTabInLine, Q(e, "tab characters must not be used in indentation")), !(s !== 45 || (o = e.input.charCodeAt(e.position + 1), !Ze(o)))); ) {
    if (c = !0, e.position++, Re(e, !0, -1) && e.lineIndent <= t) {
      a.push(null), s = e.input.charCodeAt(e.position);
      continue;
    }
    if (n = e.line, Pr(e, t, Ng, !1, !0), a.push(e.result), Re(e, !0, -1), s = e.input.charCodeAt(e.position), (e.line === n || e.lineIndent > t) && s !== 0)
      Q(e, "bad indentation of a sequence entry");
    else if (e.lineIndent < t)
      break;
  }
  return c ? (e.tag = r, e.anchor = i, e.kind = "sequence", e.result = a, !0) : !1;
}
function B6(e, t, n) {
  var r, i, a, o, c, s, u = e.tag, l = e.anchor, p = {}, d = /* @__PURE__ */ Object.create(null), m = null, g = null, v = null, y = !1, x = !1, w;
  if (e.firstTabInLine !== -1) return !1;
  for (e.anchor !== null && (e.anchorMap[e.anchor] = p), w = e.input.charCodeAt(e.position); w !== 0; ) {
    if (!y && e.firstTabInLine !== -1 && (e.position = e.firstTabInLine, Q(e, "tab characters must not be used in indentation")), r = e.input.charCodeAt(e.position + 1), a = e.line, (w === 63 || w === 58) && Ze(r))
      w === 63 ? (y && (vr(e, p, d, m, g, null, o, c, s), m = g = v = null), x = !0, y = !0, i = !0) : y ? (y = !1, i = !0) : Q(e, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), e.position += 1, w = r;
    else {
      if (o = e.line, c = e.lineStart, s = e.position, !Pr(e, n, Fg, !1, !0))
        break;
      if (e.line === a) {
        for (w = e.input.charCodeAt(e.position); Un(w); )
          w = e.input.charCodeAt(++e.position);
        if (w === 58)
          w = e.input.charCodeAt(++e.position), Ze(w) || Q(e, "a whitespace character is expected after the key-value separator within a block mapping"), y && (vr(e, p, d, m, g, null, o, c, s), m = g = v = null), x = !0, y = !1, i = !1, m = e.tag, g = e.result;
        else if (x)
          Q(e, "can not read an implicit mapping pair; a colon is missed");
        else
          return e.tag = u, e.anchor = l, !0;
      } else if (x)
        Q(e, "can not read a block mapping entry; a multiline key may not be an implicit key");
      else
        return e.tag = u, e.anchor = l, !0;
    }
    if ((e.line === a || e.lineIndent > t) && (y && (o = e.line, c = e.lineStart, s = e.position), Pr(e, t, mo, !0, i) && (y ? g = e.result : v = e.result), y || (vr(e, p, d, m, g, v, o, c, s), m = g = v = null), Re(e, !0, -1), w = e.input.charCodeAt(e.position)), (e.line === a || e.lineIndent > t) && w !== 0)
      Q(e, "bad indentation of a mapping entry");
    else if (e.lineIndent < t)
      break;
  }
  return y && vr(e, p, d, m, g, null, o, c, s), x && (e.tag = u, e.anchor = l, e.kind = "mapping", e.result = p), x;
}
function j6(e) {
  var t, n = !1, r = !1, i, a, o;
  if (o = e.input.charCodeAt(e.position), o !== 33) return !1;
  if (e.tag !== null && Q(e, "duplication of a tag property"), o = e.input.charCodeAt(++e.position), o === 60 ? (n = !0, o = e.input.charCodeAt(++e.position)) : o === 33 ? (r = !0, i = "!!", o = e.input.charCodeAt(++e.position)) : i = "!", t = e.position, n) {
    do
      o = e.input.charCodeAt(++e.position);
    while (o !== 0 && o !== 62);
    e.position < e.length ? (a = e.input.slice(t, e.position), o = e.input.charCodeAt(++e.position)) : Q(e, "unexpected end of the stream within a verbatim tag");
  } else {
    for (; o !== 0 && !Ze(o); )
      o === 33 && (r ? Q(e, "tag suffix cannot contain exclamation marks") : (i = e.input.slice(t - 1, e.position + 1), kg.test(i) || Q(e, "named tag handle cannot contain such characters"), r = !0, t = e.position + 1)), o = e.input.charCodeAt(++e.position);
    a = e.input.slice(t, e.position), C6.test(a) && Q(e, "tag suffix cannot contain flow indicator characters");
  }
  a && !Lg.test(a) && Q(e, "tag name cannot contain such characters: " + a);
  try {
    a = decodeURIComponent(a);
  } catch {
    Q(e, "tag name is malformed: " + a);
  }
  return n ? e.tag = a : un.call(e.tagMap, i) ? e.tag = e.tagMap[i] + a : i === "!" ? e.tag = "!" + a : i === "!!" ? e.tag = "tag:yaml.org,2002:" + a : Q(e, 'undeclared tag handle "' + i + '"'), !0;
}
function M6(e) {
  var t, n;
  if (n = e.input.charCodeAt(e.position), n !== 38) return !1;
  for (e.anchor !== null && Q(e, "duplication of an anchor property"), n = e.input.charCodeAt(++e.position), t = e.position; n !== 0 && !Ze(n) && !mr(n); )
    n = e.input.charCodeAt(++e.position);
  return e.position === t && Q(e, "name of an anchor node must contain at least one character"), e.anchor = e.input.slice(t, e.position), !0;
}
function q6(e) {
  var t, n, r;
  if (r = e.input.charCodeAt(e.position), r !== 42) return !1;
  for (r = e.input.charCodeAt(++e.position), t = e.position; r !== 0 && !Ze(r) && !mr(r); )
    r = e.input.charCodeAt(++e.position);
  return e.position === t && Q(e, "name of an alias node must contain at least one character"), n = e.input.slice(t, e.position), un.call(e.anchorMap, n) || Q(e, 'unidentified alias "' + n + '"'), e.result = e.anchorMap[n], Re(e, !0, -1), !0;
}
function Pr(e, t, n, r, i) {
  var a, o, c, s = 1, u = !1, l = !1, p, d, m, g, v, y;
  if (e.listener !== null && e.listener("open", e), e.tag = null, e.anchor = null, e.kind = null, e.result = null, a = o = c = mo === n || Ng === n, r && Re(e, !0, -1) && (u = !0, e.lineIndent > t ? s = 1 : e.lineIndent === t ? s = 0 : e.lineIndent < t && (s = -1)), s === 1)
    for (; j6(e) || M6(e); )
      Re(e, !0, -1) ? (u = !0, c = a, e.lineIndent > t ? s = 1 : e.lineIndent === t ? s = 0 : e.lineIndent < t && (s = -1)) : c = !1;
  if (c && (c = u || i), (s === 1 || mo === n) && (ho === n || Fg === n ? v = t : v = t + 1, y = e.position - e.lineStart, s === 1 ? c && (Fd(e, y) || B6(e, y, v)) || L6(e, v) ? l = !0 : (o && U6(e, v) || N6(e, v) || k6(e, v) ? l = !0 : q6(e) ? (l = !0, (e.tag !== null || e.anchor !== null) && Q(e, "alias node should not have any properties")) : F6(e, v, ho === n) && (l = !0, e.tag === null && (e.tag = "?")), e.anchor !== null && (e.anchorMap[e.anchor] = e.result)) : s === 0 && (l = c && Fd(e, y))), e.tag === null)
    e.anchor !== null && (e.anchorMap[e.anchor] = e.result);
  else if (e.tag === "?") {
    for (e.result !== null && e.kind !== "scalar" && Q(e, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + e.kind + '"'), p = 0, d = e.implicitTypes.length; p < d; p += 1)
      if (g = e.implicitTypes[p], g.resolve(e.result)) {
        e.result = g.construct(e.result), e.tag = g.tag, e.anchor !== null && (e.anchorMap[e.anchor] = e.result);
        break;
      }
  } else if (e.tag !== "!") {
    if (un.call(e.typeMap[e.kind || "fallback"], e.tag))
      g = e.typeMap[e.kind || "fallback"][e.tag];
    else
      for (g = null, m = e.typeMap.multi[e.kind || "fallback"], p = 0, d = m.length; p < d; p += 1)
        if (e.tag.slice(0, m[p].tag.length) === m[p].tag) {
          g = m[p];
          break;
        }
    g || Q(e, "unknown tag !<" + e.tag + ">"), e.result !== null && g.kind !== e.kind && Q(e, "unacceptable node kind for !<" + e.tag + '> tag; it should be "' + g.kind + '", not "' + e.kind + '"'), g.resolve(e.result, e.tag) ? (e.result = g.construct(e.result, e.tag), e.anchor !== null && (e.anchorMap[e.anchor] = e.result)) : Q(e, "cannot resolve a node with !<" + e.tag + "> explicit tag");
  }
  return e.listener !== null && e.listener("close", e), e.tag !== null || e.anchor !== null || l;
}
function z6(e) {
  var t = e.position, n, r, i, a = !1, o;
  for (e.version = null, e.checkLineBreaks = e.legacy, e.tagMap = /* @__PURE__ */ Object.create(null), e.anchorMap = /* @__PURE__ */ Object.create(null); (o = e.input.charCodeAt(e.position)) !== 0 && (Re(e, !0, -1), o = e.input.charCodeAt(e.position), !(e.lineIndent > 0 || o !== 37)); ) {
    for (a = !0, o = e.input.charCodeAt(++e.position), n = e.position; o !== 0 && !Ze(o); )
      o = e.input.charCodeAt(++e.position);
    for (r = e.input.slice(n, e.position), i = [], r.length < 1 && Q(e, "directive name must not be less than one character in length"); o !== 0; ) {
      for (; Un(o); )
        o = e.input.charCodeAt(++e.position);
      if (o === 35) {
        do
          o = e.input.charCodeAt(++e.position);
        while (o !== 0 && !St(o));
        break;
      }
      if (St(o)) break;
      for (n = e.position; o !== 0 && !Ze(o); )
        o = e.input.charCodeAt(++e.position);
      i.push(e.input.slice(n, e.position));
    }
    o !== 0 && ku(e), un.call(Pd, r) ? Pd[r](e, r, i) : vo(e, 'unknown document directive "' + r + '"');
  }
  if (Re(e, !0, -1), e.lineIndent === 0 && e.input.charCodeAt(e.position) === 45 && e.input.charCodeAt(e.position + 1) === 45 && e.input.charCodeAt(e.position + 2) === 45 ? (e.position += 3, Re(e, !0, -1)) : a && Q(e, "directives end mark is expected"), Pr(e, e.lineIndent - 1, mo, !1, !0), Re(e, !0, -1), e.checkLineBreaks && R6.test(e.input.slice(t, e.position)) && vo(e, "non-ASCII line breaks are interpreted as content"), e.documents.push(e.result), e.position === e.lineStart && as(e)) {
    e.input.charCodeAt(e.position) === 46 && (e.position += 3, Re(e, !0, -1));
    return;
  }
  if (e.position < e.length - 1)
    Q(e, "end of the stream or a document separator is expected");
  else
    return;
}
function Mg(e, t) {
  e = String(e), t = t || {}, e.length !== 0 && (e.charCodeAt(e.length - 1) !== 10 && e.charCodeAt(e.length - 1) !== 13 && (e += `
`), e.charCodeAt(0) === 65279 && (e = e.slice(1)));
  var n = new D6(e, t), r = e.indexOf("\0");
  for (r !== -1 && (n.position = r, Q(n, "null byte is not allowed in input")), n.input += "\0"; n.input.charCodeAt(n.position) === 32; )
    n.lineIndent += 1, n.position += 1;
  for (; n.position < n.length - 1; )
    z6(n);
  return n.documents;
}
function H6(e, t, n) {
  t !== null && typeof t == "object" && typeof n > "u" && (n = t, t = null);
  var r = Mg(e, n);
  if (typeof t != "function")
    return r;
  for (var i = 0, a = r.length; i < a; i += 1)
    t(r[i]);
}
function G6(e, t) {
  var n = Mg(e, t);
  if (n.length !== 0) {
    if (n.length === 1)
      return n[0];
    throw new Dg("expected a single document in the stream, but found more");
  }
}
Du.loadAll = H6;
Du.load = G6;
var qg = {}, os = vt, Xi = Yi, W6 = Nu, zg = Object.prototype.toString, Hg = Object.prototype.hasOwnProperty, Uu = 65279, V6 = 9, wi = 10, Y6 = 13, X6 = 32, K6 = 33, J6 = 34, Tl = 35, Z6 = 37, Q6 = 38, eR = 39, tR = 42, Gg = 44, nR = 45, go = 58, rR = 61, iR = 62, aR = 63, oR = 64, Wg = 91, Vg = 93, sR = 96, Yg = 123, cR = 124, Xg = 125, Me = {};
Me[0] = "\\0";
Me[7] = "\\a";
Me[8] = "\\b";
Me[9] = "\\t";
Me[10] = "\\n";
Me[11] = "\\v";
Me[12] = "\\f";
Me[13] = "\\r";
Me[27] = "\\e";
Me[34] = '\\"';
Me[92] = "\\\\";
Me[133] = "\\N";
Me[160] = "\\_";
Me[8232] = "\\L";
Me[8233] = "\\P";
var lR = [
  "y",
  "Y",
  "yes",
  "Yes",
  "YES",
  "on",
  "On",
  "ON",
  "n",
  "N",
  "no",
  "No",
  "NO",
  "off",
  "Off",
  "OFF"
], uR = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function pR(e, t) {
  var n, r, i, a, o, c, s;
  if (t === null) return {};
  for (n = {}, r = Object.keys(t), i = 0, a = r.length; i < a; i += 1)
    o = r[i], c = String(t[o]), o.slice(0, 2) === "!!" && (o = "tag:yaml.org,2002:" + o.slice(2)), s = e.compiledTypeMap.fallback[o], s && Hg.call(s.styleAliases, c) && (c = s.styleAliases[c]), n[o] = c;
  return n;
}
function fR(e) {
  var t, n, r;
  if (t = e.toString(16).toUpperCase(), e <= 255)
    n = "x", r = 2;
  else if (e <= 65535)
    n = "u", r = 4;
  else if (e <= 4294967295)
    n = "U", r = 8;
  else
    throw new Xi("code point within a string may not be greater than 0xFFFFFFFF");
  return "\\" + n + os.repeat("0", r - t.length) + t;
}
var dR = 1, Ei = 2;
function hR(e) {
  this.schema = e.schema || W6, this.indent = Math.max(1, e.indent || 2), this.noArrayIndent = e.noArrayIndent || !1, this.skipInvalid = e.skipInvalid || !1, this.flowLevel = os.isNothing(e.flowLevel) ? -1 : e.flowLevel, this.styleMap = pR(this.schema, e.styles || null), this.sortKeys = e.sortKeys || !1, this.lineWidth = e.lineWidth || 80, this.noRefs = e.noRefs || !1, this.noCompatMode = e.noCompatMode || !1, this.condenseFlow = e.condenseFlow || !1, this.quotingType = e.quotingType === '"' ? Ei : dR, this.forceQuotes = e.forceQuotes || !1, this.replacer = typeof e.replacer == "function" ? e.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
}
function Nd(e, t) {
  for (var n = os.repeat(" ", t), r = 0, i = -1, a = "", o, c = e.length; r < c; )
    i = e.indexOf(`
`, r), i === -1 ? (o = e.slice(r), r = c) : (o = e.slice(r, i + 1), r = i + 1), o.length && o !== `
` && (a += n), a += o;
  return a;
}
function Al(e, t) {
  return `
` + os.repeat(" ", e.indent * t);
}
function mR(e, t) {
  var n, r, i;
  for (n = 0, r = e.implicitTypes.length; n < r; n += 1)
    if (i = e.implicitTypes[n], i.resolve(t))
      return !0;
  return !1;
}
function xo(e) {
  return e === X6 || e === V6;
}
function _i(e) {
  return 32 <= e && e <= 126 || 161 <= e && e <= 55295 && e !== 8232 && e !== 8233 || 57344 <= e && e <= 65533 && e !== Uu || 65536 <= e && e <= 1114111;
}
function kd(e) {
  return _i(e) && e !== Uu && e !== Y6 && e !== wi;
}
function Ld(e, t, n) {
  var r = kd(e), i = r && !xo(e);
  return (
    // ns-plain-safe
    (n ? (
      // c = flow-in
      r
    ) : r && e !== Gg && e !== Wg && e !== Vg && e !== Yg && e !== Xg) && e !== Tl && !(t === go && !i) || kd(t) && !xo(t) && e === Tl || t === go && i
  );
}
function vR(e) {
  return _i(e) && e !== Uu && !xo(e) && e !== nR && e !== aR && e !== go && e !== Gg && e !== Wg && e !== Vg && e !== Yg && e !== Xg && e !== Tl && e !== Q6 && e !== tR && e !== K6 && e !== cR && e !== rR && e !== iR && e !== eR && e !== J6 && e !== Z6 && e !== oR && e !== sR;
}
function gR(e) {
  return !xo(e) && e !== go;
}
function ni(e, t) {
  var n = e.charCodeAt(t), r;
  return n >= 55296 && n <= 56319 && t + 1 < e.length && (r = e.charCodeAt(t + 1), r >= 56320 && r <= 57343) ? (n - 55296) * 1024 + r - 56320 + 65536 : n;
}
function Kg(e) {
  var t = /^\n* /;
  return t.test(e);
}
var Jg = 1, Rl = 2, Zg = 3, Qg = 4, pr = 5;
function xR(e, t, n, r, i, a, o, c) {
  var s, u = 0, l = null, p = !1, d = !1, m = r !== -1, g = -1, v = vR(ni(e, 0)) && gR(ni(e, e.length - 1));
  if (t || o)
    for (s = 0; s < e.length; u >= 65536 ? s += 2 : s++) {
      if (u = ni(e, s), !_i(u))
        return pr;
      v = v && Ld(u, l, c), l = u;
    }
  else {
    for (s = 0; s < e.length; u >= 65536 ? s += 2 : s++) {
      if (u = ni(e, s), u === wi)
        p = !0, m && (d = d || // Foldable line = too long, and not more-indented.
        s - g - 1 > r && e[g + 1] !== " ", g = s);
      else if (!_i(u))
        return pr;
      v = v && Ld(u, l, c), l = u;
    }
    d = d || m && s - g - 1 > r && e[g + 1] !== " ";
  }
  return !p && !d ? v && !o && !i(e) ? Jg : a === Ei ? pr : Rl : n > 9 && Kg(e) ? pr : o ? a === Ei ? pr : Rl : d ? Qg : Zg;
}
function yR(e, t, n, r, i) {
  e.dump = function() {
    if (t.length === 0)
      return e.quotingType === Ei ? '""' : "''";
    if (!e.noCompatMode && (lR.indexOf(t) !== -1 || uR.test(t)))
      return e.quotingType === Ei ? '"' + t + '"' : "'" + t + "'";
    var a = e.indent * Math.max(1, n), o = e.lineWidth === -1 ? -1 : Math.max(Math.min(e.lineWidth, 40), e.lineWidth - a), c = r || e.flowLevel > -1 && n >= e.flowLevel;
    function s(u) {
      return mR(e, u);
    }
    switch (xR(
      t,
      c,
      e.indent,
      o,
      s,
      e.quotingType,
      e.forceQuotes && !r,
      i
    )) {
      case Jg:
        return t;
      case Rl:
        return "'" + t.replace(/'/g, "''") + "'";
      case Zg:
        return "|" + Ud(t, e.indent) + Bd(Nd(t, a));
      case Qg:
        return ">" + Ud(t, e.indent) + Bd(Nd(bR(t, o), a));
      case pr:
        return '"' + wR(t) + '"';
      default:
        throw new Xi("impossible error: invalid scalar style");
    }
  }();
}
function Ud(e, t) {
  var n = Kg(e) ? String(t) : "", r = e[e.length - 1] === `
`, i = r && (e[e.length - 2] === `
` || e === `
`), a = i ? "+" : r ? "" : "-";
  return n + a + `
`;
}
function Bd(e) {
  return e[e.length - 1] === `
` ? e.slice(0, -1) : e;
}
function bR(e, t) {
  for (var n = /(\n+)([^\n]*)/g, r = function() {
    var u = e.indexOf(`
`);
    return u = u !== -1 ? u : e.length, n.lastIndex = u, jd(e.slice(0, u), t);
  }(), i = e[0] === `
` || e[0] === " ", a, o; o = n.exec(e); ) {
    var c = o[1], s = o[2];
    a = s[0] === " ", r += c + (!i && !a && s !== "" ? `
` : "") + jd(s, t), i = a;
  }
  return r;
}
function jd(e, t) {
  if (e === "" || e[0] === " ") return e;
  for (var n = / [^ ]/g, r, i = 0, a, o = 0, c = 0, s = ""; r = n.exec(e); )
    c = r.index, c - i > t && (a = o > i ? o : c, s += `
` + e.slice(i, a), i = a + 1), o = c;
  return s += `
`, e.length - i > t && o > i ? s += e.slice(i, o) + `
` + e.slice(o + 1) : s += e.slice(i), s.slice(1);
}
function wR(e) {
  for (var t = "", n = 0, r, i = 0; i < e.length; n >= 65536 ? i += 2 : i++)
    n = ni(e, i), r = Me[n], !r && _i(n) ? (t += e[i], n >= 65536 && (t += e[i + 1])) : t += r || fR(n);
  return t;
}
function ER(e, t, n) {
  var r = "", i = e.tag, a, o, c;
  for (a = 0, o = n.length; a < o; a += 1)
    c = n[a], e.replacer && (c = e.replacer.call(n, String(a), c)), (Lt(e, t, c, !1, !1) || typeof c > "u" && Lt(e, t, null, !1, !1)) && (r !== "" && (r += "," + (e.condenseFlow ? "" : " ")), r += e.dump);
  e.tag = i, e.dump = "[" + r + "]";
}
function Md(e, t, n, r) {
  var i = "", a = e.tag, o, c, s;
  for (o = 0, c = n.length; o < c; o += 1)
    s = n[o], e.replacer && (s = e.replacer.call(n, String(o), s)), (Lt(e, t + 1, s, !0, !0, !1, !0) || typeof s > "u" && Lt(e, t + 1, null, !0, !0, !1, !0)) && ((!r || i !== "") && (i += Al(e, t)), e.dump && wi === e.dump.charCodeAt(0) ? i += "-" : i += "- ", i += e.dump);
  e.tag = a, e.dump = i || "[]";
}
function _R(e, t, n) {
  var r = "", i = e.tag, a = Object.keys(n), o, c, s, u, l;
  for (o = 0, c = a.length; o < c; o += 1)
    l = "", r !== "" && (l += ", "), e.condenseFlow && (l += '"'), s = a[o], u = n[s], e.replacer && (u = e.replacer.call(n, s, u)), Lt(e, t, s, !1, !1) && (e.dump.length > 1024 && (l += "? "), l += e.dump + (e.condenseFlow ? '"' : "") + ":" + (e.condenseFlow ? "" : " "), Lt(e, t, u, !1, !1) && (l += e.dump, r += l));
  e.tag = i, e.dump = "{" + r + "}";
}
function SR(e, t, n, r) {
  var i = "", a = e.tag, o = Object.keys(n), c, s, u, l, p, d;
  if (e.sortKeys === !0)
    o.sort();
  else if (typeof e.sortKeys == "function")
    o.sort(e.sortKeys);
  else if (e.sortKeys)
    throw new Xi("sortKeys must be a boolean or a function");
  for (c = 0, s = o.length; c < s; c += 1)
    d = "", (!r || i !== "") && (d += Al(e, t)), u = o[c], l = n[u], e.replacer && (l = e.replacer.call(n, u, l)), Lt(e, t + 1, u, !0, !0, !0) && (p = e.tag !== null && e.tag !== "?" || e.dump && e.dump.length > 1024, p && (e.dump && wi === e.dump.charCodeAt(0) ? d += "?" : d += "? "), d += e.dump, p && (d += Al(e, t)), Lt(e, t + 1, l, !0, p) && (e.dump && wi === e.dump.charCodeAt(0) ? d += ":" : d += ": ", d += e.dump, i += d));
  e.tag = a, e.dump = i || "{}";
}
function qd(e, t, n) {
  var r, i, a, o, c, s;
  for (i = n ? e.explicitTypes : e.implicitTypes, a = 0, o = i.length; a < o; a += 1)
    if (c = i[a], (c.instanceOf || c.predicate) && (!c.instanceOf || typeof t == "object" && t instanceof c.instanceOf) && (!c.predicate || c.predicate(t))) {
      if (n ? c.multi && c.representName ? e.tag = c.representName(t) : e.tag = c.tag : e.tag = "?", c.represent) {
        if (s = e.styleMap[c.tag] || c.defaultStyle, zg.call(c.represent) === "[object Function]")
          r = c.represent(t, s);
        else if (Hg.call(c.represent, s))
          r = c.represent[s](t, s);
        else
          throw new Xi("!<" + c.tag + '> tag resolver accepts not "' + s + '" style');
        e.dump = r;
      }
      return !0;
    }
  return !1;
}
function Lt(e, t, n, r, i, a, o) {
  e.tag = null, e.dump = n, qd(e, n, !1) || qd(e, n, !0);
  var c = zg.call(e.dump), s = r, u;
  r && (r = e.flowLevel < 0 || e.flowLevel > t);
  var l = c === "[object Object]" || c === "[object Array]", p, d;
  if (l && (p = e.duplicates.indexOf(n), d = p !== -1), (e.tag !== null && e.tag !== "?" || d || e.indent !== 2 && t > 0) && (i = !1), d && e.usedDuplicates[p])
    e.dump = "*ref_" + p;
  else {
    if (l && d && !e.usedDuplicates[p] && (e.usedDuplicates[p] = !0), c === "[object Object]")
      r && Object.keys(e.dump).length !== 0 ? (SR(e, t, e.dump, i), d && (e.dump = "&ref_" + p + e.dump)) : (_R(e, t, e.dump), d && (e.dump = "&ref_" + p + " " + e.dump));
    else if (c === "[object Array]")
      r && e.dump.length !== 0 ? (e.noArrayIndent && !o && t > 0 ? Md(e, t - 1, e.dump, i) : Md(e, t, e.dump, i), d && (e.dump = "&ref_" + p + e.dump)) : (ER(e, t, e.dump), d && (e.dump = "&ref_" + p + " " + e.dump));
    else if (c === "[object String]")
      e.tag !== "?" && yR(e, e.dump, t, a, s);
    else {
      if (c === "[object Undefined]")
        return !1;
      if (e.skipInvalid) return !1;
      throw new Xi("unacceptable kind of an object to dump " + c);
    }
    e.tag !== null && e.tag !== "?" && (u = encodeURI(
      e.tag[0] === "!" ? e.tag.slice(1) : e.tag
    ).replace(/!/g, "%21"), e.tag[0] === "!" ? u = "!" + u : u.slice(0, 18) === "tag:yaml.org,2002:" ? u = "!!" + u.slice(18) : u = "!<" + u + ">", e.dump = u + " " + e.dump);
  }
  return !0;
}
function TR(e, t) {
  var n = [], r = [], i, a;
  for (Cl(e, n, r), i = 0, a = r.length; i < a; i += 1)
    t.duplicates.push(n[r[i]]);
  t.usedDuplicates = new Array(a);
}
function Cl(e, t, n) {
  var r, i, a;
  if (e !== null && typeof e == "object")
    if (i = t.indexOf(e), i !== -1)
      n.indexOf(i) === -1 && n.push(i);
    else if (t.push(e), Array.isArray(e))
      for (i = 0, a = e.length; i < a; i += 1)
        Cl(e[i], t, n);
    else
      for (r = Object.keys(e), i = 0, a = r.length; i < a; i += 1)
        Cl(e[r[i]], t, n);
}
function AR(e, t) {
  t = t || {};
  var n = new hR(t);
  n.noRefs || TR(e, n);
  var r = e;
  return n.replacer && (r = n.replacer.call({ "": r }, "", r)), Lt(n, 0, r, !0, !0) ? n.dump + `
` : "";
}
qg.dump = AR;
var ex = Du, RR = qg;
function Bu(e, t) {
  return function() {
    throw new Error("Function yaml." + e + " is removed in js-yaml 4. Use yaml." + t + " instead, which is now safe by default.");
  };
}
Ue.Type = Ye;
Ue.Schema = dg;
Ue.FAILSAFE_SCHEMA = gg;
Ue.JSON_SCHEMA = _g;
Ue.CORE_SCHEMA = Sg;
Ue.DEFAULT_SCHEMA = Nu;
Ue.load = ex.load;
Ue.loadAll = ex.loadAll;
Ue.dump = RR.dump;
Ue.YAMLException = Yi;
Ue.types = {
  binary: Og,
  float: Eg,
  map: vg,
  null: xg,
  pairs: Ig,
  set: Pg,
  timestamp: Rg,
  bool: yg,
  int: bg,
  merge: Cg,
  omap: $g,
  seq: mg,
  str: hg
};
Ue.safeLoad = Bu("safeLoad", "load");
Ue.safeLoadAll = Bu("safeLoadAll", "loadAll");
Ue.safeDump = Bu("safeDump", "dump");
var ss = {};
Object.defineProperty(ss, "__esModule", { value: !0 });
ss.Lazy = void 0;
class CR {
  constructor(t) {
    this._value = null, this.creator = t;
  }
  get hasValue() {
    return this.creator == null;
  }
  get value() {
    if (this.creator == null)
      return this._value;
    const t = this.creator();
    return this.value = t, t;
  }
  set value(t) {
    this._value = t, this.creator = null;
  }
}
ss.Lazy = CR;
var Ol = { exports: {} };
const OR = "2.0.0", tx = 256, $R = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
9007199254740991, IR = 16, PR = tx - 6, DR = [
  "major",
  "premajor",
  "minor",
  "preminor",
  "patch",
  "prepatch",
  "prerelease"
];
var cs = {
  MAX_LENGTH: tx,
  MAX_SAFE_COMPONENT_LENGTH: IR,
  MAX_SAFE_BUILD_LENGTH: PR,
  MAX_SAFE_INTEGER: $R,
  RELEASE_TYPES: DR,
  SEMVER_SPEC_VERSION: OR,
  FLAG_INCLUDE_PRERELEASE: 1,
  FLAG_LOOSE: 2
};
const FR = typeof process == "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...e) => console.error("SEMVER", ...e) : () => {
};
var ls = FR;
(function(e, t) {
  const {
    MAX_SAFE_COMPONENT_LENGTH: n,
    MAX_SAFE_BUILD_LENGTH: r,
    MAX_LENGTH: i
  } = cs, a = ls;
  t = e.exports = {};
  const o = t.re = [], c = t.safeRe = [], s = t.src = [], u = t.safeSrc = [], l = t.t = {};
  let p = 0;
  const d = "[a-zA-Z0-9-]", m = [
    ["\\s", 1],
    ["\\d", i],
    [d, r]
  ], g = (y) => {
    for (const [x, w] of m)
      y = y.split(`${x}*`).join(`${x}{0,${w}}`).split(`${x}+`).join(`${x}{1,${w}}`);
    return y;
  }, v = (y, x, w) => {
    const A = g(x), O = p++;
    a(y, O, x), l[y] = O, s[O] = x, u[O] = A, o[O] = new RegExp(x, w ? "g" : void 0), c[O] = new RegExp(A, w ? "g" : void 0);
  };
  v("NUMERICIDENTIFIER", "0|[1-9]\\d*"), v("NUMERICIDENTIFIERLOOSE", "\\d+"), v("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${d}*`), v("MAINVERSION", `(${s[l.NUMERICIDENTIFIER]})\\.(${s[l.NUMERICIDENTIFIER]})\\.(${s[l.NUMERICIDENTIFIER]})`), v("MAINVERSIONLOOSE", `(${s[l.NUMERICIDENTIFIERLOOSE]})\\.(${s[l.NUMERICIDENTIFIERLOOSE]})\\.(${s[l.NUMERICIDENTIFIERLOOSE]})`), v("PRERELEASEIDENTIFIER", `(?:${s[l.NONNUMERICIDENTIFIER]}|${s[l.NUMERICIDENTIFIER]})`), v("PRERELEASEIDENTIFIERLOOSE", `(?:${s[l.NONNUMERICIDENTIFIER]}|${s[l.NUMERICIDENTIFIERLOOSE]})`), v("PRERELEASE", `(?:-(${s[l.PRERELEASEIDENTIFIER]}(?:\\.${s[l.PRERELEASEIDENTIFIER]})*))`), v("PRERELEASELOOSE", `(?:-?(${s[l.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${s[l.PRERELEASEIDENTIFIERLOOSE]})*))`), v("BUILDIDENTIFIER", `${d}+`), v("BUILD", `(?:\\+(${s[l.BUILDIDENTIFIER]}(?:\\.${s[l.BUILDIDENTIFIER]})*))`), v("FULLPLAIN", `v?${s[l.MAINVERSION]}${s[l.PRERELEASE]}?${s[l.BUILD]}?`), v("FULL", `^${s[l.FULLPLAIN]}$`), v("LOOSEPLAIN", `[v=\\s]*${s[l.MAINVERSIONLOOSE]}${s[l.PRERELEASELOOSE]}?${s[l.BUILD]}?`), v("LOOSE", `^${s[l.LOOSEPLAIN]}$`), v("GTLT", "((?:<|>)?=?)"), v("XRANGEIDENTIFIERLOOSE", `${s[l.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), v("XRANGEIDENTIFIER", `${s[l.NUMERICIDENTIFIER]}|x|X|\\*`), v("XRANGEPLAIN", `[v=\\s]*(${s[l.XRANGEIDENTIFIER]})(?:\\.(${s[l.XRANGEIDENTIFIER]})(?:\\.(${s[l.XRANGEIDENTIFIER]})(?:${s[l.PRERELEASE]})?${s[l.BUILD]}?)?)?`), v("XRANGEPLAINLOOSE", `[v=\\s]*(${s[l.XRANGEIDENTIFIERLOOSE]})(?:\\.(${s[l.XRANGEIDENTIFIERLOOSE]})(?:\\.(${s[l.XRANGEIDENTIFIERLOOSE]})(?:${s[l.PRERELEASELOOSE]})?${s[l.BUILD]}?)?)?`), v("XRANGE", `^${s[l.GTLT]}\\s*${s[l.XRANGEPLAIN]}$`), v("XRANGELOOSE", `^${s[l.GTLT]}\\s*${s[l.XRANGEPLAINLOOSE]}$`), v("COERCEPLAIN", `(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?`), v("COERCE", `${s[l.COERCEPLAIN]}(?:$|[^\\d])`), v("COERCEFULL", s[l.COERCEPLAIN] + `(?:${s[l.PRERELEASE]})?(?:${s[l.BUILD]})?(?:$|[^\\d])`), v("COERCERTL", s[l.COERCE], !0), v("COERCERTLFULL", s[l.COERCEFULL], !0), v("LONETILDE", "(?:~>?)"), v("TILDETRIM", `(\\s*)${s[l.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", v("TILDE", `^${s[l.LONETILDE]}${s[l.XRANGEPLAIN]}$`), v("TILDELOOSE", `^${s[l.LONETILDE]}${s[l.XRANGEPLAINLOOSE]}$`), v("LONECARET", "(?:\\^)"), v("CARETTRIM", `(\\s*)${s[l.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", v("CARET", `^${s[l.LONECARET]}${s[l.XRANGEPLAIN]}$`), v("CARETLOOSE", `^${s[l.LONECARET]}${s[l.XRANGEPLAINLOOSE]}$`), v("COMPARATORLOOSE", `^${s[l.GTLT]}\\s*(${s[l.LOOSEPLAIN]})$|^$`), v("COMPARATOR", `^${s[l.GTLT]}\\s*(${s[l.FULLPLAIN]})$|^$`), v("COMPARATORTRIM", `(\\s*)${s[l.GTLT]}\\s*(${s[l.LOOSEPLAIN]}|${s[l.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", v("HYPHENRANGE", `^\\s*(${s[l.XRANGEPLAIN]})\\s+-\\s+(${s[l.XRANGEPLAIN]})\\s*$`), v("HYPHENRANGELOOSE", `^\\s*(${s[l.XRANGEPLAINLOOSE]})\\s+-\\s+(${s[l.XRANGEPLAINLOOSE]})\\s*$`), v("STAR", "(<|>)?=?\\s*\\*"), v("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), v("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
})(Ol, Ol.exports);
var Ki = Ol.exports;
const NR = Object.freeze({ loose: !0 }), kR = Object.freeze({}), LR = (e) => e ? typeof e != "object" ? NR : e : kR;
var ju = LR;
const zd = /^[0-9]+$/, nx = (e, t) => {
  const n = zd.test(e), r = zd.test(t);
  return n && r && (e = +e, t = +t), e === t ? 0 : n && !r ? -1 : r && !n ? 1 : e < t ? -1 : 1;
}, UR = (e, t) => nx(t, e);
var rx = {
  compareIdentifiers: nx,
  rcompareIdentifiers: UR
};
const Ca = ls, { MAX_LENGTH: Hd, MAX_SAFE_INTEGER: Oa } = cs, { safeRe: $a, t: Ia } = Ki, BR = ju, { compareIdentifiers: rr } = rx;
let jR = class Et {
  constructor(t, n) {
    if (n = BR(n), t instanceof Et) {
      if (t.loose === !!n.loose && t.includePrerelease === !!n.includePrerelease)
        return t;
      t = t.version;
    } else if (typeof t != "string")
      throw new TypeError(`Invalid version. Must be a string. Got type "${typeof t}".`);
    if (t.length > Hd)
      throw new TypeError(
        `version is longer than ${Hd} characters`
      );
    Ca("SemVer", t, n), this.options = n, this.loose = !!n.loose, this.includePrerelease = !!n.includePrerelease;
    const r = t.trim().match(n.loose ? $a[Ia.LOOSE] : $a[Ia.FULL]);
    if (!r)
      throw new TypeError(`Invalid Version: ${t}`);
    if (this.raw = t, this.major = +r[1], this.minor = +r[2], this.patch = +r[3], this.major > Oa || this.major < 0)
      throw new TypeError("Invalid major version");
    if (this.minor > Oa || this.minor < 0)
      throw new TypeError("Invalid minor version");
    if (this.patch > Oa || this.patch < 0)
      throw new TypeError("Invalid patch version");
    r[4] ? this.prerelease = r[4].split(".").map((i) => {
      if (/^[0-9]+$/.test(i)) {
        const a = +i;
        if (a >= 0 && a < Oa)
          return a;
      }
      return i;
    }) : this.prerelease = [], this.build = r[5] ? r[5].split(".") : [], this.format();
  }
  format() {
    return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
  }
  toString() {
    return this.version;
  }
  compare(t) {
    if (Ca("SemVer.compare", this.version, this.options, t), !(t instanceof Et)) {
      if (typeof t == "string" && t === this.version)
        return 0;
      t = new Et(t, this.options);
    }
    return t.version === this.version ? 0 : this.compareMain(t) || this.comparePre(t);
  }
  compareMain(t) {
    return t instanceof Et || (t = new Et(t, this.options)), rr(this.major, t.major) || rr(this.minor, t.minor) || rr(this.patch, t.patch);
  }
  comparePre(t) {
    if (t instanceof Et || (t = new Et(t, this.options)), this.prerelease.length && !t.prerelease.length)
      return -1;
    if (!this.prerelease.length && t.prerelease.length)
      return 1;
    if (!this.prerelease.length && !t.prerelease.length)
      return 0;
    let n = 0;
    do {
      const r = this.prerelease[n], i = t.prerelease[n];
      if (Ca("prerelease compare", n, r, i), r === void 0 && i === void 0)
        return 0;
      if (i === void 0)
        return 1;
      if (r === void 0)
        return -1;
      if (r === i)
        continue;
      return rr(r, i);
    } while (++n);
  }
  compareBuild(t) {
    t instanceof Et || (t = new Et(t, this.options));
    let n = 0;
    do {
      const r = this.build[n], i = t.build[n];
      if (Ca("build compare", n, r, i), r === void 0 && i === void 0)
        return 0;
      if (i === void 0)
        return 1;
      if (r === void 0)
        return -1;
      if (r === i)
        continue;
      return rr(r, i);
    } while (++n);
  }
  // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.
  inc(t, n, r) {
    if (t.startsWith("pre")) {
      if (!n && r === !1)
        throw new Error("invalid increment argument: identifier is empty");
      if (n) {
        const i = `-${n}`.match(this.options.loose ? $a[Ia.PRERELEASELOOSE] : $a[Ia.PRERELEASE]);
        if (!i || i[1] !== n)
          throw new Error(`invalid identifier: ${n}`);
      }
    }
    switch (t) {
      case "premajor":
        this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", n, r);
        break;
      case "preminor":
        this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", n, r);
        break;
      case "prepatch":
        this.prerelease.length = 0, this.inc("patch", n, r), this.inc("pre", n, r);
        break;
      case "prerelease":
        this.prerelease.length === 0 && this.inc("patch", n, r), this.inc("pre", n, r);
        break;
      case "release":
        if (this.prerelease.length === 0)
          throw new Error(`version ${this.raw} is not a prerelease`);
        this.prerelease.length = 0;
        break;
      case "major":
        (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
        break;
      case "minor":
        (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
        break;
      case "patch":
        this.prerelease.length === 0 && this.patch++, this.prerelease = [];
        break;
      case "pre": {
        const i = Number(r) ? 1 : 0;
        if (this.prerelease.length === 0)
          this.prerelease = [i];
        else {
          let a = this.prerelease.length;
          for (; --a >= 0; )
            typeof this.prerelease[a] == "number" && (this.prerelease[a]++, a = -2);
          if (a === -1) {
            if (n === this.prerelease.join(".") && r === !1)
              throw new Error("invalid increment argument: identifier already exists");
            this.prerelease.push(i);
          }
        }
        if (n) {
          let a = [n, i];
          r === !1 && (a = [n]), rr(this.prerelease[0], n) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = a) : this.prerelease = a;
        }
        break;
      }
      default:
        throw new Error(`invalid increment argument: ${t}`);
    }
    return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
  }
};
var Xe = jR;
const Gd = Xe, MR = (e, t, n = !1) => {
  if (e instanceof Gd)
    return e;
  try {
    return new Gd(e, t);
  } catch (r) {
    if (!n)
      return null;
    throw r;
  }
};
var Ur = MR;
const qR = Ur, zR = (e, t) => {
  const n = qR(e, t);
  return n ? n.version : null;
};
var HR = zR;
const GR = Ur, WR = (e, t) => {
  const n = GR(e.trim().replace(/^[=v]+/, ""), t);
  return n ? n.version : null;
};
var VR = WR;
const Wd = Xe, YR = (e, t, n, r, i) => {
  typeof n == "string" && (i = r, r = n, n = void 0);
  try {
    return new Wd(
      e instanceof Wd ? e.version : e,
      n
    ).inc(t, r, i).version;
  } catch {
    return null;
  }
};
var XR = YR;
const Vd = Ur, KR = (e, t) => {
  const n = Vd(e, null, !0), r = Vd(t, null, !0), i = n.compare(r);
  if (i === 0)
    return null;
  const a = i > 0, o = a ? n : r, c = a ? r : n, s = !!o.prerelease.length;
  if (!!c.prerelease.length && !s) {
    if (!c.patch && !c.minor)
      return "major";
    if (c.compareMain(o) === 0)
      return c.minor && !c.patch ? "minor" : "patch";
  }
  const l = s ? "pre" : "";
  return n.major !== r.major ? l + "major" : n.minor !== r.minor ? l + "minor" : n.patch !== r.patch ? l + "patch" : "prerelease";
};
var JR = KR;
const ZR = Xe, QR = (e, t) => new ZR(e, t).major;
var eC = QR;
const tC = Xe, nC = (e, t) => new tC(e, t).minor;
var rC = nC;
const iC = Xe, aC = (e, t) => new iC(e, t).patch;
var oC = aC;
const sC = Ur, cC = (e, t) => {
  const n = sC(e, t);
  return n && n.prerelease.length ? n.prerelease : null;
};
var lC = cC;
const Yd = Xe, uC = (e, t, n) => new Yd(e, n).compare(new Yd(t, n));
var gt = uC;
const pC = gt, fC = (e, t, n) => pC(t, e, n);
var dC = fC;
const hC = gt, mC = (e, t) => hC(e, t, !0);
var vC = mC;
const Xd = Xe, gC = (e, t, n) => {
  const r = new Xd(e, n), i = new Xd(t, n);
  return r.compare(i) || r.compareBuild(i);
};
var Mu = gC;
const xC = Mu, yC = (e, t) => e.sort((n, r) => xC(n, r, t));
var bC = yC;
const wC = Mu, EC = (e, t) => e.sort((n, r) => wC(r, n, t));
var _C = EC;
const SC = gt, TC = (e, t, n) => SC(e, t, n) > 0;
var us = TC;
const AC = gt, RC = (e, t, n) => AC(e, t, n) < 0;
var qu = RC;
const CC = gt, OC = (e, t, n) => CC(e, t, n) === 0;
var ix = OC;
const $C = gt, IC = (e, t, n) => $C(e, t, n) !== 0;
var ax = IC;
const PC = gt, DC = (e, t, n) => PC(e, t, n) >= 0;
var zu = DC;
const FC = gt, NC = (e, t, n) => FC(e, t, n) <= 0;
var Hu = NC;
const kC = ix, LC = ax, UC = us, BC = zu, jC = qu, MC = Hu, qC = (e, t, n, r) => {
  switch (t) {
    case "===":
      return typeof e == "object" && (e = e.version), typeof n == "object" && (n = n.version), e === n;
    case "!==":
      return typeof e == "object" && (e = e.version), typeof n == "object" && (n = n.version), e !== n;
    case "":
    case "=":
    case "==":
      return kC(e, n, r);
    case "!=":
      return LC(e, n, r);
    case ">":
      return UC(e, n, r);
    case ">=":
      return BC(e, n, r);
    case "<":
      return jC(e, n, r);
    case "<=":
      return MC(e, n, r);
    default:
      throw new TypeError(`Invalid operator: ${t}`);
  }
};
var ox = qC;
const zC = Xe, HC = Ur, { safeRe: Pa, t: Da } = Ki, GC = (e, t) => {
  if (e instanceof zC)
    return e;
  if (typeof e == "number" && (e = String(e)), typeof e != "string")
    return null;
  t = t || {};
  let n = null;
  if (!t.rtl)
    n = e.match(t.includePrerelease ? Pa[Da.COERCEFULL] : Pa[Da.COERCE]);
  else {
    const s = t.includePrerelease ? Pa[Da.COERCERTLFULL] : Pa[Da.COERCERTL];
    let u;
    for (; (u = s.exec(e)) && (!n || n.index + n[0].length !== e.length); )
      (!n || u.index + u[0].length !== n.index + n[0].length) && (n = u), s.lastIndex = u.index + u[1].length + u[2].length;
    s.lastIndex = -1;
  }
  if (n === null)
    return null;
  const r = n[2], i = n[3] || "0", a = n[4] || "0", o = t.includePrerelease && n[5] ? `-${n[5]}` : "", c = t.includePrerelease && n[6] ? `+${n[6]}` : "";
  return HC(`${r}.${i}.${a}${o}${c}`, t);
};
var WC = GC;
class VC {
  constructor() {
    this.max = 1e3, this.map = /* @__PURE__ */ new Map();
  }
  get(t) {
    const n = this.map.get(t);
    if (n !== void 0)
      return this.map.delete(t), this.map.set(t, n), n;
  }
  delete(t) {
    return this.map.delete(t);
  }
  set(t, n) {
    if (!this.delete(t) && n !== void 0) {
      if (this.map.size >= this.max) {
        const i = this.map.keys().next().value;
        this.delete(i);
      }
      this.map.set(t, n);
    }
    return this;
  }
}
var YC = VC, Nc, Kd;
function xt() {
  if (Kd) return Nc;
  Kd = 1;
  const e = /\s+/g;
  class t {
    constructor($, D) {
      if (D = i(D), $ instanceof t)
        return $.loose === !!D.loose && $.includePrerelease === !!D.includePrerelease ? $ : new t($.raw, D);
      if ($ instanceof a)
        return this.raw = $.value, this.set = [[$]], this.formatted = void 0, this;
      if (this.options = D, this.loose = !!D.loose, this.includePrerelease = !!D.includePrerelease, this.raw = $.trim().replace(e, " "), this.set = this.raw.split("||").map((b) => this.parseRange(b.trim())).filter((b) => b.length), !this.set.length)
        throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
      if (this.set.length > 1) {
        const b = this.set[0];
        if (this.set = this.set.filter((E) => !v(E[0])), this.set.length === 0)
          this.set = [b];
        else if (this.set.length > 1) {
          for (const E of this.set)
            if (E.length === 1 && y(E[0])) {
              this.set = [E];
              break;
            }
        }
      }
      this.formatted = void 0;
    }
    get range() {
      if (this.formatted === void 0) {
        this.formatted = "";
        for (let $ = 0; $ < this.set.length; $++) {
          $ > 0 && (this.formatted += "||");
          const D = this.set[$];
          for (let b = 0; b < D.length; b++)
            b > 0 && (this.formatted += " "), this.formatted += D[b].toString().trim();
        }
      }
      return this.formatted;
    }
    format() {
      return this.range;
    }
    toString() {
      return this.range;
    }
    parseRange($) {
      const b = ((this.options.includePrerelease && m) | (this.options.loose && g)) + ":" + $, E = r.get(b);
      if (E)
        return E;
      const R = this.options.loose, N = R ? s[u.HYPHENRANGELOOSE] : s[u.HYPHENRANGE];
      $ = $.replace(N, J(this.options.includePrerelease)), o("hyphen replace", $), $ = $.replace(s[u.COMPARATORTRIM], l), o("comparator trim", $), $ = $.replace(s[u.TILDETRIM], p), o("tilde trim", $), $ = $.replace(s[u.CARETTRIM], d), o("caret trim", $);
      let L = $.split(" ").map((M) => w(M, this.options)).join(" ").split(/\s+/).map((M) => j(M, this.options));
      R && (L = L.filter((M) => (o("loose invalid filter", M, this.options), !!M.match(s[u.COMPARATORLOOSE])))), o("range list", L);
      const B = /* @__PURE__ */ new Map(), K = L.map((M) => new a(M, this.options));
      for (const M of K) {
        if (v(M))
          return [M];
        B.set(M.value, M);
      }
      B.size > 1 && B.has("") && B.delete("");
      const Z = [...B.values()];
      return r.set(b, Z), Z;
    }
    intersects($, D) {
      if (!($ instanceof t))
        throw new TypeError("a Range is required");
      return this.set.some((b) => x(b, D) && $.set.some((E) => x(E, D) && b.every((R) => E.every((N) => R.intersects(N, D)))));
    }
    // if ANY of the sets match ALL of its comparators, then pass
    test($) {
      if (!$)
        return !1;
      if (typeof $ == "string")
        try {
          $ = new c($, this.options);
        } catch {
          return !1;
        }
      for (let D = 0; D < this.set.length; D++)
        if (ne(this.set[D], $, this.options))
          return !0;
      return !1;
    }
  }
  Nc = t;
  const n = YC, r = new n(), i = ju, a = ps(), o = ls, c = Xe, {
    safeRe: s,
    t: u,
    comparatorTrimReplace: l,
    tildeTrimReplace: p,
    caretTrimReplace: d
  } = Ki, { FLAG_INCLUDE_PRERELEASE: m, FLAG_LOOSE: g } = cs, v = (F) => F.value === "<0.0.0-0", y = (F) => F.value === "", x = (F, $) => {
    let D = !0;
    const b = F.slice();
    let E = b.pop();
    for (; D && b.length; )
      D = b.every((R) => E.intersects(R, $)), E = b.pop();
    return D;
  }, w = (F, $) => (o("comp", F, $), F = q(F, $), o("caret", F), F = O(F, $), o("tildes", F), F = te(F, $), o("xrange", F), F = H(F, $), o("stars", F), F), A = (F) => !F || F.toLowerCase() === "x" || F === "*", O = (F, $) => F.trim().split(/\s+/).map((D) => k(D, $)).join(" "), k = (F, $) => {
    const D = $.loose ? s[u.TILDELOOSE] : s[u.TILDE];
    return F.replace(D, (b, E, R, N, L) => {
      o("tilde", F, b, E, R, N, L);
      let B;
      return A(E) ? B = "" : A(R) ? B = `>=${E}.0.0 <${+E + 1}.0.0-0` : A(N) ? B = `>=${E}.${R}.0 <${E}.${+R + 1}.0-0` : L ? (o("replaceTilde pr", L), B = `>=${E}.${R}.${N}-${L} <${E}.${+R + 1}.0-0`) : B = `>=${E}.${R}.${N} <${E}.${+R + 1}.0-0`, o("tilde return", B), B;
    });
  }, q = (F, $) => F.trim().split(/\s+/).map((D) => W(D, $)).join(" "), W = (F, $) => {
    o("caret", F, $);
    const D = $.loose ? s[u.CARETLOOSE] : s[u.CARET], b = $.includePrerelease ? "-0" : "";
    return F.replace(D, (E, R, N, L, B) => {
      o("caret", F, E, R, N, L, B);
      let K;
      return A(R) ? K = "" : A(N) ? K = `>=${R}.0.0${b} <${+R + 1}.0.0-0` : A(L) ? R === "0" ? K = `>=${R}.${N}.0${b} <${R}.${+N + 1}.0-0` : K = `>=${R}.${N}.0${b} <${+R + 1}.0.0-0` : B ? (o("replaceCaret pr", B), R === "0" ? N === "0" ? K = `>=${R}.${N}.${L}-${B} <${R}.${N}.${+L + 1}-0` : K = `>=${R}.${N}.${L}-${B} <${R}.${+N + 1}.0-0` : K = `>=${R}.${N}.${L}-${B} <${+R + 1}.0.0-0`) : (o("no pr"), R === "0" ? N === "0" ? K = `>=${R}.${N}.${L}${b} <${R}.${N}.${+L + 1}-0` : K = `>=${R}.${N}.${L}${b} <${R}.${+N + 1}.0-0` : K = `>=${R}.${N}.${L} <${+R + 1}.0.0-0`), o("caret return", K), K;
    });
  }, te = (F, $) => (o("replaceXRanges", F, $), F.split(/\s+/).map((D) => T(D, $)).join(" ")), T = (F, $) => {
    F = F.trim();
    const D = $.loose ? s[u.XRANGELOOSE] : s[u.XRANGE];
    return F.replace(D, (b, E, R, N, L, B) => {
      o("xRange", F, b, E, R, N, L, B);
      const K = A(R), Z = K || A(N), M = Z || A(L), le = M;
      return E === "=" && le && (E = ""), B = $.includePrerelease ? "-0" : "", K ? E === ">" || E === "<" ? b = "<0.0.0-0" : b = "*" : E && le ? (Z && (N = 0), L = 0, E === ">" ? (E = ">=", Z ? (R = +R + 1, N = 0, L = 0) : (N = +N + 1, L = 0)) : E === "<=" && (E = "<", Z ? R = +R + 1 : N = +N + 1), E === "<" && (B = "-0"), b = `${E + R}.${N}.${L}${B}`) : Z ? b = `>=${R}.0.0${B} <${+R + 1}.0.0-0` : M && (b = `>=${R}.${N}.0${B} <${R}.${+N + 1}.0-0`), o("xRange return", b), b;
    });
  }, H = (F, $) => (o("replaceStars", F, $), F.trim().replace(s[u.STAR], "")), j = (F, $) => (o("replaceGTE0", F, $), F.trim().replace(s[$.includePrerelease ? u.GTE0PRE : u.GTE0], "")), J = (F) => ($, D, b, E, R, N, L, B, K, Z, M, le) => (A(b) ? D = "" : A(E) ? D = `>=${b}.0.0${F ? "-0" : ""}` : A(R) ? D = `>=${b}.${E}.0${F ? "-0" : ""}` : N ? D = `>=${D}` : D = `>=${D}${F ? "-0" : ""}`, A(K) ? B = "" : A(Z) ? B = `<${+K + 1}.0.0-0` : A(M) ? B = `<${K}.${+Z + 1}.0-0` : le ? B = `<=${K}.${Z}.${M}-${le}` : F ? B = `<${K}.${Z}.${+M + 1}-0` : B = `<=${B}`, `${D} ${B}`.trim()), ne = (F, $, D) => {
    for (let b = 0; b < F.length; b++)
      if (!F[b].test($))
        return !1;
    if ($.prerelease.length && !D.includePrerelease) {
      for (let b = 0; b < F.length; b++)
        if (o(F[b].semver), F[b].semver !== a.ANY && F[b].semver.prerelease.length > 0) {
          const E = F[b].semver;
          if (E.major === $.major && E.minor === $.minor && E.patch === $.patch)
            return !0;
        }
      return !1;
    }
    return !0;
  };
  return Nc;
}
var kc, Jd;
function ps() {
  if (Jd) return kc;
  Jd = 1;
  const e = Symbol("SemVer ANY");
  class t {
    static get ANY() {
      return e;
    }
    constructor(l, p) {
      if (p = n(p), l instanceof t) {
        if (l.loose === !!p.loose)
          return l;
        l = l.value;
      }
      l = l.trim().split(/\s+/).join(" "), o("comparator", l, p), this.options = p, this.loose = !!p.loose, this.parse(l), this.semver === e ? this.value = "" : this.value = this.operator + this.semver.version, o("comp", this);
    }
    parse(l) {
      const p = this.options.loose ? r[i.COMPARATORLOOSE] : r[i.COMPARATOR], d = l.match(p);
      if (!d)
        throw new TypeError(`Invalid comparator: ${l}`);
      this.operator = d[1] !== void 0 ? d[1] : "", this.operator === "=" && (this.operator = ""), d[2] ? this.semver = new c(d[2], this.options.loose) : this.semver = e;
    }
    toString() {
      return this.value;
    }
    test(l) {
      if (o("Comparator.test", l, this.options.loose), this.semver === e || l === e)
        return !0;
      if (typeof l == "string")
        try {
          l = new c(l, this.options);
        } catch {
          return !1;
        }
      return a(l, this.operator, this.semver, this.options);
    }
    intersects(l, p) {
      if (!(l instanceof t))
        throw new TypeError("a Comparator is required");
      return this.operator === "" ? this.value === "" ? !0 : new s(l.value, p).test(this.value) : l.operator === "" ? l.value === "" ? !0 : new s(this.value, p).test(l.semver) : (p = n(p), p.includePrerelease && (this.value === "<0.0.0-0" || l.value === "<0.0.0-0") || !p.includePrerelease && (this.value.startsWith("<0.0.0") || l.value.startsWith("<0.0.0")) ? !1 : !!(this.operator.startsWith(">") && l.operator.startsWith(">") || this.operator.startsWith("<") && l.operator.startsWith("<") || this.semver.version === l.semver.version && this.operator.includes("=") && l.operator.includes("=") || a(this.semver, "<", l.semver, p) && this.operator.startsWith(">") && l.operator.startsWith("<") || a(this.semver, ">", l.semver, p) && this.operator.startsWith("<") && l.operator.startsWith(">")));
    }
  }
  kc = t;
  const n = ju, { safeRe: r, t: i } = Ki, a = ox, o = ls, c = Xe, s = xt();
  return kc;
}
const XC = xt(), KC = (e, t, n) => {
  try {
    t = new XC(t, n);
  } catch {
    return !1;
  }
  return t.test(e);
};
var fs = KC;
const JC = xt(), ZC = (e, t) => new JC(e, t).set.map((n) => n.map((r) => r.value).join(" ").trim().split(" "));
var QC = ZC;
const eO = Xe, tO = xt(), nO = (e, t, n) => {
  let r = null, i = null, a = null;
  try {
    a = new tO(t, n);
  } catch {
    return null;
  }
  return e.forEach((o) => {
    a.test(o) && (!r || i.compare(o) === -1) && (r = o, i = new eO(r, n));
  }), r;
};
var rO = nO;
const iO = Xe, aO = xt(), oO = (e, t, n) => {
  let r = null, i = null, a = null;
  try {
    a = new aO(t, n);
  } catch {
    return null;
  }
  return e.forEach((o) => {
    a.test(o) && (!r || i.compare(o) === 1) && (r = o, i = new iO(r, n));
  }), r;
};
var sO = oO;
const Lc = Xe, cO = xt(), Zd = us, lO = (e, t) => {
  e = new cO(e, t);
  let n = new Lc("0.0.0");
  if (e.test(n) || (n = new Lc("0.0.0-0"), e.test(n)))
    return n;
  n = null;
  for (let r = 0; r < e.set.length; ++r) {
    const i = e.set[r];
    let a = null;
    i.forEach((o) => {
      const c = new Lc(o.semver.version);
      switch (o.operator) {
        case ">":
          c.prerelease.length === 0 ? c.patch++ : c.prerelease.push(0), c.raw = c.format();
        case "":
        case ">=":
          (!a || Zd(c, a)) && (a = c);
          break;
        case "<":
        case "<=":
          break;
        default:
          throw new Error(`Unexpected operation: ${o.operator}`);
      }
    }), a && (!n || Zd(n, a)) && (n = a);
  }
  return n && e.test(n) ? n : null;
};
var uO = lO;
const pO = xt(), fO = (e, t) => {
  try {
    return new pO(e, t).range || "*";
  } catch {
    return null;
  }
};
var dO = fO;
const hO = Xe, sx = ps(), { ANY: mO } = sx, vO = xt(), gO = fs, Qd = us, eh = qu, xO = Hu, yO = zu, bO = (e, t, n, r) => {
  e = new hO(e, r), t = new vO(t, r);
  let i, a, o, c, s;
  switch (n) {
    case ">":
      i = Qd, a = xO, o = eh, c = ">", s = ">=";
      break;
    case "<":
      i = eh, a = yO, o = Qd, c = "<", s = "<=";
      break;
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"');
  }
  if (gO(e, t, r))
    return !1;
  for (let u = 0; u < t.set.length; ++u) {
    const l = t.set[u];
    let p = null, d = null;
    if (l.forEach((m) => {
      m.semver === mO && (m = new sx(">=0.0.0")), p = p || m, d = d || m, i(m.semver, p.semver, r) ? p = m : o(m.semver, d.semver, r) && (d = m);
    }), p.operator === c || p.operator === s || (!d.operator || d.operator === c) && a(e, d.semver))
      return !1;
    if (d.operator === s && o(e, d.semver))
      return !1;
  }
  return !0;
};
var Gu = bO;
const wO = Gu, EO = (e, t, n) => wO(e, t, ">", n);
var _O = EO;
const SO = Gu, TO = (e, t, n) => SO(e, t, "<", n);
var AO = TO;
const th = xt(), RO = (e, t, n) => (e = new th(e, n), t = new th(t, n), e.intersects(t, n));
var CO = RO;
const OO = fs, $O = gt;
var IO = (e, t, n) => {
  const r = [];
  let i = null, a = null;
  const o = e.sort((l, p) => $O(l, p, n));
  for (const l of o)
    OO(l, t, n) ? (a = l, i || (i = l)) : (a && r.push([i, a]), a = null, i = null);
  i && r.push([i, null]);
  const c = [];
  for (const [l, p] of r)
    l === p ? c.push(l) : !p && l === o[0] ? c.push("*") : p ? l === o[0] ? c.push(`<=${p}`) : c.push(`${l} - ${p}`) : c.push(`>=${l}`);
  const s = c.join(" || "), u = typeof t.raw == "string" ? t.raw : String(t);
  return s.length < u.length ? s : t;
};
const nh = xt(), Wu = ps(), { ANY: Uc } = Wu, Jr = fs, Vu = gt, PO = (e, t, n = {}) => {
  if (e === t)
    return !0;
  e = new nh(e, n), t = new nh(t, n);
  let r = !1;
  e: for (const i of e.set) {
    for (const a of t.set) {
      const o = FO(i, a, n);
      if (r = r || o !== null, o)
        continue e;
    }
    if (r)
      return !1;
  }
  return !0;
}, DO = [new Wu(">=0.0.0-0")], rh = [new Wu(">=0.0.0")], FO = (e, t, n) => {
  if (e === t)
    return !0;
  if (e.length === 1 && e[0].semver === Uc) {
    if (t.length === 1 && t[0].semver === Uc)
      return !0;
    n.includePrerelease ? e = DO : e = rh;
  }
  if (t.length === 1 && t[0].semver === Uc) {
    if (n.includePrerelease)
      return !0;
    t = rh;
  }
  const r = /* @__PURE__ */ new Set();
  let i, a;
  for (const m of e)
    m.operator === ">" || m.operator === ">=" ? i = ih(i, m, n) : m.operator === "<" || m.operator === "<=" ? a = ah(a, m, n) : r.add(m.semver);
  if (r.size > 1)
    return null;
  let o;
  if (i && a) {
    if (o = Vu(i.semver, a.semver, n), o > 0)
      return null;
    if (o === 0 && (i.operator !== ">=" || a.operator !== "<="))
      return null;
  }
  for (const m of r) {
    if (i && !Jr(m, String(i), n) || a && !Jr(m, String(a), n))
      return null;
    for (const g of t)
      if (!Jr(m, String(g), n))
        return !1;
    return !0;
  }
  let c, s, u, l, p = a && !n.includePrerelease && a.semver.prerelease.length ? a.semver : !1, d = i && !n.includePrerelease && i.semver.prerelease.length ? i.semver : !1;
  p && p.prerelease.length === 1 && a.operator === "<" && p.prerelease[0] === 0 && (p = !1);
  for (const m of t) {
    if (l = l || m.operator === ">" || m.operator === ">=", u = u || m.operator === "<" || m.operator === "<=", i) {
      if (d && m.semver.prerelease && m.semver.prerelease.length && m.semver.major === d.major && m.semver.minor === d.minor && m.semver.patch === d.patch && (d = !1), m.operator === ">" || m.operator === ">=") {
        if (c = ih(i, m, n), c === m && c !== i)
          return !1;
      } else if (i.operator === ">=" && !Jr(i.semver, String(m), n))
        return !1;
    }
    if (a) {
      if (p && m.semver.prerelease && m.semver.prerelease.length && m.semver.major === p.major && m.semver.minor === p.minor && m.semver.patch === p.patch && (p = !1), m.operator === "<" || m.operator === "<=") {
        if (s = ah(a, m, n), s === m && s !== a)
          return !1;
      } else if (a.operator === "<=" && !Jr(a.semver, String(m), n))
        return !1;
    }
    if (!m.operator && (a || i) && o !== 0)
      return !1;
  }
  return !(i && u && !a && o !== 0 || a && l && !i && o !== 0 || d || p);
}, ih = (e, t, n) => {
  if (!e)
    return t;
  const r = Vu(e.semver, t.semver, n);
  return r > 0 ? e : r < 0 || t.operator === ">" && e.operator === ">=" ? t : e;
}, ah = (e, t, n) => {
  if (!e)
    return t;
  const r = Vu(e.semver, t.semver, n);
  return r < 0 ? e : r > 0 || t.operator === "<" && e.operator === "<=" ? t : e;
};
var NO = PO;
const Bc = Ki, oh = cs, kO = Xe, sh = rx, LO = Ur, UO = HR, BO = VR, jO = XR, MO = JR, qO = eC, zO = rC, HO = oC, GO = lC, WO = gt, VO = dC, YO = vC, XO = Mu, KO = bC, JO = _C, ZO = us, QO = qu, e$ = ix, t$ = ax, n$ = zu, r$ = Hu, i$ = ox, a$ = WC, o$ = ps(), s$ = xt(), c$ = fs, l$ = QC, u$ = rO, p$ = sO, f$ = uO, d$ = dO, h$ = Gu, m$ = _O, v$ = AO, g$ = CO, x$ = IO, y$ = NO;
var cx = {
  parse: LO,
  valid: UO,
  clean: BO,
  inc: jO,
  diff: MO,
  major: qO,
  minor: zO,
  patch: HO,
  prerelease: GO,
  compare: WO,
  rcompare: VO,
  compareLoose: YO,
  compareBuild: XO,
  sort: KO,
  rsort: JO,
  gt: ZO,
  lt: QO,
  eq: e$,
  neq: t$,
  gte: n$,
  lte: r$,
  cmp: i$,
  coerce: a$,
  Comparator: o$,
  Range: s$,
  satisfies: c$,
  toComparators: l$,
  maxSatisfying: u$,
  minSatisfying: p$,
  minVersion: f$,
  validRange: d$,
  outside: h$,
  gtr: m$,
  ltr: v$,
  intersects: g$,
  simplifyRange: x$,
  subset: y$,
  SemVer: kO,
  re: Bc.re,
  src: Bc.src,
  tokens: Bc.t,
  SEMVER_SPEC_VERSION: oh.SEMVER_SPEC_VERSION,
  RELEASE_TYPES: oh.RELEASE_TYPES,
  compareIdentifiers: sh.compareIdentifiers,
  rcompareIdentifiers: sh.rcompareIdentifiers
}, Ji = {}, yo = { exports: {} };
yo.exports;
(function(e, t) {
  var n = 200, r = "__lodash_hash_undefined__", i = 1, a = 2, o = 9007199254740991, c = "[object Arguments]", s = "[object Array]", u = "[object AsyncFunction]", l = "[object Boolean]", p = "[object Date]", d = "[object Error]", m = "[object Function]", g = "[object GeneratorFunction]", v = "[object Map]", y = "[object Number]", x = "[object Null]", w = "[object Object]", A = "[object Promise]", O = "[object Proxy]", k = "[object RegExp]", q = "[object Set]", W = "[object String]", te = "[object Symbol]", T = "[object Undefined]", H = "[object WeakMap]", j = "[object ArrayBuffer]", J = "[object DataView]", ne = "[object Float32Array]", F = "[object Float64Array]", $ = "[object Int8Array]", D = "[object Int16Array]", b = "[object Int32Array]", E = "[object Uint8Array]", R = "[object Uint8ClampedArray]", N = "[object Uint16Array]", L = "[object Uint32Array]", B = /[\\^$.*+?()[\]{}|]/g, K = /^\[object .+?Constructor\]$/, Z = /^(?:0|[1-9]\d*)$/, M = {};
  M[ne] = M[F] = M[$] = M[D] = M[b] = M[E] = M[R] = M[N] = M[L] = !0, M[c] = M[s] = M[j] = M[l] = M[J] = M[p] = M[d] = M[m] = M[v] = M[y] = M[w] = M[k] = M[q] = M[W] = M[H] = !1;
  var le = typeof Te == "object" && Te && Te.Object === Object && Te, h = typeof self == "object" && self && self.Object === Object && self, f = le || h || Function("return this")(), C = t && !t.nodeType && t, S = C && !0 && e && !e.nodeType && e, G = S && S.exports === C, z = G && le.process, X = function() {
    try {
      return z && z.binding && z.binding("util");
    } catch {
    }
  }(), ve = X && X.isTypedArray;
  function Ae(_, I) {
    for (var U = -1, Y = _ == null ? 0 : _.length, fe = 0, ee = []; ++U < Y; ) {
      var ge = _[U];
      I(ge, U, _) && (ee[fe++] = ge);
    }
    return ee;
  }
  function ct(_, I) {
    for (var U = -1, Y = I.length, fe = _.length; ++U < Y; )
      _[fe + U] = I[U];
    return _;
  }
  function Se(_, I) {
    for (var U = -1, Y = _ == null ? 0 : _.length; ++U < Y; )
      if (I(_[U], U, _))
        return !0;
    return !1;
  }
  function qe(_, I) {
    for (var U = -1, Y = Array(_); ++U < _; )
      Y[U] = I(U);
    return Y;
  }
  function Jn(_) {
    return function(I) {
      return _(I);
    };
  }
  function jt(_, I) {
    return _.has(I);
  }
  function Ot(_, I) {
    return _ == null ? void 0 : _[I];
  }
  function Mt(_) {
    var I = -1, U = Array(_.size);
    return _.forEach(function(Y, fe) {
      U[++I] = [fe, Y];
    }), U;
  }
  function xn(_, I) {
    return function(U) {
      return _(I(U));
    };
  }
  function qt(_) {
    var I = -1, U = Array(_.size);
    return _.forEach(function(Y) {
      U[++I] = Y;
    }), U;
  }
  var yn = Array.prototype, _x = Function.prototype, ta = Object.prototype, ws = f["__core-js_shared__"], Ju = _x.toString, yt = ta.hasOwnProperty, Zu = function() {
    var _ = /[^.]+$/.exec(ws && ws.keys && ws.keys.IE_PROTO || "");
    return _ ? "Symbol(src)_1." + _ : "";
  }(), Qu = ta.toString, Sx = RegExp(
    "^" + Ju.call(yt).replace(B, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), ep = G ? f.Buffer : void 0, na = f.Symbol, tp = f.Uint8Array, np = ta.propertyIsEnumerable, Tx = yn.splice, bn = na ? na.toStringTag : void 0, rp = Object.getOwnPropertySymbols, Ax = ep ? ep.isBuffer : void 0, Rx = xn(Object.keys, Object), Es = Zn(f, "DataView"), jr = Zn(f, "Map"), _s = Zn(f, "Promise"), Ss = Zn(f, "Set"), Ts = Zn(f, "WeakMap"), Mr = Zn(Object, "create"), Cx = _n(Es), Ox = _n(jr), $x = _n(_s), Ix = _n(Ss), Px = _n(Ts), ip = na ? na.prototype : void 0, As = ip ? ip.valueOf : void 0;
  function wn(_) {
    var I = -1, U = _ == null ? 0 : _.length;
    for (this.clear(); ++I < U; ) {
      var Y = _[I];
      this.set(Y[0], Y[1]);
    }
  }
  function Dx() {
    this.__data__ = Mr ? Mr(null) : {}, this.size = 0;
  }
  function Fx(_) {
    var I = this.has(_) && delete this.__data__[_];
    return this.size -= I ? 1 : 0, I;
  }
  function Nx(_) {
    var I = this.__data__;
    if (Mr) {
      var U = I[_];
      return U === r ? void 0 : U;
    }
    return yt.call(I, _) ? I[_] : void 0;
  }
  function kx(_) {
    var I = this.__data__;
    return Mr ? I[_] !== void 0 : yt.call(I, _);
  }
  function Lx(_, I) {
    var U = this.__data__;
    return this.size += this.has(_) ? 0 : 1, U[_] = Mr && I === void 0 ? r : I, this;
  }
  wn.prototype.clear = Dx, wn.prototype.delete = Fx, wn.prototype.get = Nx, wn.prototype.has = kx, wn.prototype.set = Lx;
  function $t(_) {
    var I = -1, U = _ == null ? 0 : _.length;
    for (this.clear(); ++I < U; ) {
      var Y = _[I];
      this.set(Y[0], Y[1]);
    }
  }
  function Ux() {
    this.__data__ = [], this.size = 0;
  }
  function Bx(_) {
    var I = this.__data__, U = ia(I, _);
    if (U < 0)
      return !1;
    var Y = I.length - 1;
    return U == Y ? I.pop() : Tx.call(I, U, 1), --this.size, !0;
  }
  function jx(_) {
    var I = this.__data__, U = ia(I, _);
    return U < 0 ? void 0 : I[U][1];
  }
  function Mx(_) {
    return ia(this.__data__, _) > -1;
  }
  function qx(_, I) {
    var U = this.__data__, Y = ia(U, _);
    return Y < 0 ? (++this.size, U.push([_, I])) : U[Y][1] = I, this;
  }
  $t.prototype.clear = Ux, $t.prototype.delete = Bx, $t.prototype.get = jx, $t.prototype.has = Mx, $t.prototype.set = qx;
  function En(_) {
    var I = -1, U = _ == null ? 0 : _.length;
    for (this.clear(); ++I < U; ) {
      var Y = _[I];
      this.set(Y[0], Y[1]);
    }
  }
  function zx() {
    this.size = 0, this.__data__ = {
      hash: new wn(),
      map: new (jr || $t)(),
      string: new wn()
    };
  }
  function Hx(_) {
    var I = aa(this, _).delete(_);
    return this.size -= I ? 1 : 0, I;
  }
  function Gx(_) {
    return aa(this, _).get(_);
  }
  function Wx(_) {
    return aa(this, _).has(_);
  }
  function Vx(_, I) {
    var U = aa(this, _), Y = U.size;
    return U.set(_, I), this.size += U.size == Y ? 0 : 1, this;
  }
  En.prototype.clear = zx, En.prototype.delete = Hx, En.prototype.get = Gx, En.prototype.has = Wx, En.prototype.set = Vx;
  function ra(_) {
    var I = -1, U = _ == null ? 0 : _.length;
    for (this.__data__ = new En(); ++I < U; )
      this.add(_[I]);
  }
  function Yx(_) {
    return this.__data__.set(_, r), this;
  }
  function Xx(_) {
    return this.__data__.has(_);
  }
  ra.prototype.add = ra.prototype.push = Yx, ra.prototype.has = Xx;
  function zt(_) {
    var I = this.__data__ = new $t(_);
    this.size = I.size;
  }
  function Kx() {
    this.__data__ = new $t(), this.size = 0;
  }
  function Jx(_) {
    var I = this.__data__, U = I.delete(_);
    return this.size = I.size, U;
  }
  function Zx(_) {
    return this.__data__.get(_);
  }
  function Qx(_) {
    return this.__data__.has(_);
  }
  function ey(_, I) {
    var U = this.__data__;
    if (U instanceof $t) {
      var Y = U.__data__;
      if (!jr || Y.length < n - 1)
        return Y.push([_, I]), this.size = ++U.size, this;
      U = this.__data__ = new En(Y);
    }
    return U.set(_, I), this.size = U.size, this;
  }
  zt.prototype.clear = Kx, zt.prototype.delete = Jx, zt.prototype.get = Zx, zt.prototype.has = Qx, zt.prototype.set = ey;
  function ty(_, I) {
    var U = oa(_), Y = !U && vy(_), fe = !U && !Y && Rs(_), ee = !U && !Y && !fe && dp(_), ge = U || Y || fe || ee, Oe = ge ? qe(_.length, String) : [], Fe = Oe.length;
    for (var de in _)
      yt.call(_, de) && !(ge && // Safari 9 has enumerable `arguments.length` in strict mode.
      (de == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      fe && (de == "offset" || de == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      ee && (de == "buffer" || de == "byteLength" || de == "byteOffset") || // Skip index properties.
      py(de, Fe))) && Oe.push(de);
    return Oe;
  }
  function ia(_, I) {
    for (var U = _.length; U--; )
      if (lp(_[U][0], I))
        return U;
    return -1;
  }
  function ny(_, I, U) {
    var Y = I(_);
    return oa(_) ? Y : ct(Y, U(_));
  }
  function qr(_) {
    return _ == null ? _ === void 0 ? T : x : bn && bn in Object(_) ? ly(_) : my(_);
  }
  function ap(_) {
    return zr(_) && qr(_) == c;
  }
  function op(_, I, U, Y, fe) {
    return _ === I ? !0 : _ == null || I == null || !zr(_) && !zr(I) ? _ !== _ && I !== I : ry(_, I, U, Y, op, fe);
  }
  function ry(_, I, U, Y, fe, ee) {
    var ge = oa(_), Oe = oa(I), Fe = ge ? s : Ht(_), de = Oe ? s : Ht(I);
    Fe = Fe == c ? w : Fe, de = de == c ? w : de;
    var nt = Fe == w, lt = de == w, Be = Fe == de;
    if (Be && Rs(_)) {
      if (!Rs(I))
        return !1;
      ge = !0, nt = !1;
    }
    if (Be && !nt)
      return ee || (ee = new zt()), ge || dp(_) ? sp(_, I, U, Y, fe, ee) : sy(_, I, Fe, U, Y, fe, ee);
    if (!(U & i)) {
      var rt = nt && yt.call(_, "__wrapped__"), it = lt && yt.call(I, "__wrapped__");
      if (rt || it) {
        var Gt = rt ? _.value() : _, It = it ? I.value() : I;
        return ee || (ee = new zt()), fe(Gt, It, U, Y, ee);
      }
    }
    return Be ? (ee || (ee = new zt()), cy(_, I, U, Y, fe, ee)) : !1;
  }
  function iy(_) {
    if (!fp(_) || dy(_))
      return !1;
    var I = up(_) ? Sx : K;
    return I.test(_n(_));
  }
  function ay(_) {
    return zr(_) && pp(_.length) && !!M[qr(_)];
  }
  function oy(_) {
    if (!hy(_))
      return Rx(_);
    var I = [];
    for (var U in Object(_))
      yt.call(_, U) && U != "constructor" && I.push(U);
    return I;
  }
  function sp(_, I, U, Y, fe, ee) {
    var ge = U & i, Oe = _.length, Fe = I.length;
    if (Oe != Fe && !(ge && Fe > Oe))
      return !1;
    var de = ee.get(_);
    if (de && ee.get(I))
      return de == I;
    var nt = -1, lt = !0, Be = U & a ? new ra() : void 0;
    for (ee.set(_, I), ee.set(I, _); ++nt < Oe; ) {
      var rt = _[nt], it = I[nt];
      if (Y)
        var Gt = ge ? Y(it, rt, nt, I, _, ee) : Y(rt, it, nt, _, I, ee);
      if (Gt !== void 0) {
        if (Gt)
          continue;
        lt = !1;
        break;
      }
      if (Be) {
        if (!Se(I, function(It, Sn) {
          if (!jt(Be, Sn) && (rt === It || fe(rt, It, U, Y, ee)))
            return Be.push(Sn);
        })) {
          lt = !1;
          break;
        }
      } else if (!(rt === it || fe(rt, it, U, Y, ee))) {
        lt = !1;
        break;
      }
    }
    return ee.delete(_), ee.delete(I), lt;
  }
  function sy(_, I, U, Y, fe, ee, ge) {
    switch (U) {
      case J:
        if (_.byteLength != I.byteLength || _.byteOffset != I.byteOffset)
          return !1;
        _ = _.buffer, I = I.buffer;
      case j:
        return !(_.byteLength != I.byteLength || !ee(new tp(_), new tp(I)));
      case l:
      case p:
      case y:
        return lp(+_, +I);
      case d:
        return _.name == I.name && _.message == I.message;
      case k:
      case W:
        return _ == I + "";
      case v:
        var Oe = Mt;
      case q:
        var Fe = Y & i;
        if (Oe || (Oe = qt), _.size != I.size && !Fe)
          return !1;
        var de = ge.get(_);
        if (de)
          return de == I;
        Y |= a, ge.set(_, I);
        var nt = sp(Oe(_), Oe(I), Y, fe, ee, ge);
        return ge.delete(_), nt;
      case te:
        if (As)
          return As.call(_) == As.call(I);
    }
    return !1;
  }
  function cy(_, I, U, Y, fe, ee) {
    var ge = U & i, Oe = cp(_), Fe = Oe.length, de = cp(I), nt = de.length;
    if (Fe != nt && !ge)
      return !1;
    for (var lt = Fe; lt--; ) {
      var Be = Oe[lt];
      if (!(ge ? Be in I : yt.call(I, Be)))
        return !1;
    }
    var rt = ee.get(_);
    if (rt && ee.get(I))
      return rt == I;
    var it = !0;
    ee.set(_, I), ee.set(I, _);
    for (var Gt = ge; ++lt < Fe; ) {
      Be = Oe[lt];
      var It = _[Be], Sn = I[Be];
      if (Y)
        var hp = ge ? Y(Sn, It, Be, I, _, ee) : Y(It, Sn, Be, _, I, ee);
      if (!(hp === void 0 ? It === Sn || fe(It, Sn, U, Y, ee) : hp)) {
        it = !1;
        break;
      }
      Gt || (Gt = Be == "constructor");
    }
    if (it && !Gt) {
      var sa = _.constructor, ca = I.constructor;
      sa != ca && "constructor" in _ && "constructor" in I && !(typeof sa == "function" && sa instanceof sa && typeof ca == "function" && ca instanceof ca) && (it = !1);
    }
    return ee.delete(_), ee.delete(I), it;
  }
  function cp(_) {
    return ny(_, yy, uy);
  }
  function aa(_, I) {
    var U = _.__data__;
    return fy(I) ? U[typeof I == "string" ? "string" : "hash"] : U.map;
  }
  function Zn(_, I) {
    var U = Ot(_, I);
    return iy(U) ? U : void 0;
  }
  function ly(_) {
    var I = yt.call(_, bn), U = _[bn];
    try {
      _[bn] = void 0;
      var Y = !0;
    } catch {
    }
    var fe = Qu.call(_);
    return Y && (I ? _[bn] = U : delete _[bn]), fe;
  }
  var uy = rp ? function(_) {
    return _ == null ? [] : (_ = Object(_), Ae(rp(_), function(I) {
      return np.call(_, I);
    }));
  } : by, Ht = qr;
  (Es && Ht(new Es(new ArrayBuffer(1))) != J || jr && Ht(new jr()) != v || _s && Ht(_s.resolve()) != A || Ss && Ht(new Ss()) != q || Ts && Ht(new Ts()) != H) && (Ht = function(_) {
    var I = qr(_), U = I == w ? _.constructor : void 0, Y = U ? _n(U) : "";
    if (Y)
      switch (Y) {
        case Cx:
          return J;
        case Ox:
          return v;
        case $x:
          return A;
        case Ix:
          return q;
        case Px:
          return H;
      }
    return I;
  });
  function py(_, I) {
    return I = I ?? o, !!I && (typeof _ == "number" || Z.test(_)) && _ > -1 && _ % 1 == 0 && _ < I;
  }
  function fy(_) {
    var I = typeof _;
    return I == "string" || I == "number" || I == "symbol" || I == "boolean" ? _ !== "__proto__" : _ === null;
  }
  function dy(_) {
    return !!Zu && Zu in _;
  }
  function hy(_) {
    var I = _ && _.constructor, U = typeof I == "function" && I.prototype || ta;
    return _ === U;
  }
  function my(_) {
    return Qu.call(_);
  }
  function _n(_) {
    if (_ != null) {
      try {
        return Ju.call(_);
      } catch {
      }
      try {
        return _ + "";
      } catch {
      }
    }
    return "";
  }
  function lp(_, I) {
    return _ === I || _ !== _ && I !== I;
  }
  var vy = ap(/* @__PURE__ */ function() {
    return arguments;
  }()) ? ap : function(_) {
    return zr(_) && yt.call(_, "callee") && !np.call(_, "callee");
  }, oa = Array.isArray;
  function gy(_) {
    return _ != null && pp(_.length) && !up(_);
  }
  var Rs = Ax || wy;
  function xy(_, I) {
    return op(_, I);
  }
  function up(_) {
    if (!fp(_))
      return !1;
    var I = qr(_);
    return I == m || I == g || I == u || I == O;
  }
  function pp(_) {
    return typeof _ == "number" && _ > -1 && _ % 1 == 0 && _ <= o;
  }
  function fp(_) {
    var I = typeof _;
    return _ != null && (I == "object" || I == "function");
  }
  function zr(_) {
    return _ != null && typeof _ == "object";
  }
  var dp = ve ? Jn(ve) : ay;
  function yy(_) {
    return gy(_) ? ty(_) : oy(_);
  }
  function by() {
    return [];
  }
  function wy() {
    return !1;
  }
  e.exports = xy;
})(yo, yo.exports);
var b$ = yo.exports;
Object.defineProperty(Ji, "__esModule", { value: !0 });
Ji.DownloadedUpdateHelper = void 0;
Ji.createTempUpdateFile = T$;
const w$ = Dr, E$ = oe, ch = b$, Rn = vn, ci = ae;
class _$ {
  constructor(t) {
    this.cacheDir = t, this._file = null, this._packageFile = null, this.versionInfo = null, this.fileInfo = null, this._downloadedFileInfo = null;
  }
  get downloadedFileInfo() {
    return this._downloadedFileInfo;
  }
  get file() {
    return this._file;
  }
  get packageFile() {
    return this._packageFile;
  }
  get cacheDirForPendingUpdate() {
    return ci.join(this.cacheDir, "pending");
  }
  async validateDownloadedPath(t, n, r, i) {
    if (this.versionInfo != null && this.file === t && this.fileInfo != null)
      return ch(this.versionInfo, n) && ch(this.fileInfo.info, r.info) && await (0, Rn.pathExists)(t) ? t : null;
    const a = await this.getValidCachedUpdateFile(r, i);
    return a === null ? null : (i.info(`Update has already been downloaded to ${t}).`), this._file = a, a);
  }
  async setDownloadedFile(t, n, r, i, a, o) {
    this._file = t, this._packageFile = n, this.versionInfo = r, this.fileInfo = i, this._downloadedFileInfo = {
      fileName: a,
      sha512: i.info.sha512,
      isAdminRightsRequired: i.info.isAdminRightsRequired === !0
    }, o && await (0, Rn.outputJson)(this.getUpdateInfoFile(), this._downloadedFileInfo);
  }
  async clear() {
    this._file = null, this._packageFile = null, this.versionInfo = null, this.fileInfo = null, await this.cleanCacheDirForPendingUpdate();
  }
  async cleanCacheDirForPendingUpdate() {
    try {
      await (0, Rn.emptyDir)(this.cacheDirForPendingUpdate);
    } catch {
    }
  }
  /**
   * Returns "update-info.json" which is created in the update cache directory's "pending" subfolder after the first update is downloaded.  If the update file does not exist then the cache is cleared and recreated.  If the update file exists then its properties are validated.
   * @param fileInfo
   * @param logger
   */
  async getValidCachedUpdateFile(t, n) {
    const r = this.getUpdateInfoFile();
    if (!await (0, Rn.pathExists)(r))
      return null;
    let a;
    try {
      a = await (0, Rn.readJson)(r);
    } catch (u) {
      let l = "No cached update info available";
      return u.code !== "ENOENT" && (await this.cleanCacheDirForPendingUpdate(), l += ` (error on read: ${u.message})`), n.info(l), null;
    }
    if (!((a == null ? void 0 : a.fileName) !== null))
      return n.warn("Cached update info is corrupted: no fileName, directory for cached update will be cleaned"), await this.cleanCacheDirForPendingUpdate(), null;
    if (t.info.sha512 !== a.sha512)
      return n.info(`Cached update sha512 checksum doesn't match the latest available update. New update must be downloaded. Cached: ${a.sha512}, expected: ${t.info.sha512}. Directory for cached update will be cleaned`), await this.cleanCacheDirForPendingUpdate(), null;
    const c = ci.join(this.cacheDirForPendingUpdate, a.fileName);
    if (!await (0, Rn.pathExists)(c))
      return n.info("Cached update file doesn't exist"), null;
    const s = await S$(c);
    return t.info.sha512 !== s ? (n.warn(`Sha512 checksum doesn't match the latest available update. New update must be downloaded. Cached: ${s}, expected: ${t.info.sha512}`), await this.cleanCacheDirForPendingUpdate(), null) : (this._downloadedFileInfo = a, c);
  }
  getUpdateInfoFile() {
    return ci.join(this.cacheDirForPendingUpdate, "update-info.json");
  }
}
Ji.DownloadedUpdateHelper = _$;
function S$(e, t = "sha512", n = "base64", r) {
  return new Promise((i, a) => {
    const o = (0, w$.createHash)(t);
    o.on("error", a).setEncoding(n), (0, E$.createReadStream)(e, {
      ...r,
      highWaterMark: 1024 * 1024
      /* better to use more memory but hash faster */
    }).on("error", a).on("end", () => {
      o.end(), i(o.read());
    }).pipe(o, { end: !1 });
  });
}
async function T$(e, t, n) {
  let r = 0, i = ci.join(t, e);
  for (let a = 0; a < 3; a++)
    try {
      return await (0, Rn.unlink)(i), i;
    } catch (o) {
      if (o.code === "ENOENT")
        return i;
      n.warn(`Error on remove temp update file: ${o}`), i = ci.join(t, `${r++}-${e}`);
    }
  return i;
}
var ds = {}, Yu = {};
Object.defineProperty(Yu, "__esModule", { value: !0 });
Yu.getAppCacheDir = R$;
const jc = ae, A$ = Eo;
function R$() {
  const e = (0, A$.homedir)();
  let t;
  return process.platform === "win32" ? t = process.env.LOCALAPPDATA || jc.join(e, "AppData", "Local") : process.platform === "darwin" ? t = jc.join(e, "Library", "Caches") : t = process.env.XDG_CACHE_HOME || jc.join(e, ".cache"), t;
}
Object.defineProperty(ds, "__esModule", { value: !0 });
ds.ElectronAppAdapter = void 0;
const lh = ae, C$ = Yu;
class O$ {
  constructor(t = Bn.app) {
    this.app = t;
  }
  whenReady() {
    return this.app.whenReady();
  }
  get version() {
    return this.app.getVersion();
  }
  get name() {
    return this.app.getName();
  }
  get isPackaged() {
    return this.app.isPackaged === !0;
  }
  get appUpdateConfigPath() {
    return this.isPackaged ? lh.join(process.resourcesPath, "app-update.yml") : lh.join(this.app.getAppPath(), "dev-app-update.yml");
  }
  get userDataPath() {
    return this.app.getPath("userData");
  }
  get baseCachePath() {
    return (0, C$.getAppCacheDir)();
  }
  quit() {
    this.app.quit();
  }
  relaunch() {
    this.app.relaunch();
  }
  onQuit(t) {
    this.app.once("quit", (n, r) => t(r));
  }
}
ds.ElectronAppAdapter = O$;
var lx = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ElectronHttpExecutor = e.NET_SESSION_NAME = void 0, e.getNetSession = n;
  const t = De;
  e.NET_SESSION_NAME = "electron-updater";
  function n() {
    return Bn.session.fromPartition(e.NET_SESSION_NAME, {
      cache: !1
    });
  }
  class r extends t.HttpExecutor {
    constructor(a) {
      super(), this.proxyLoginCallback = a, this.cachedSession = null;
    }
    async download(a, o, c) {
      return await c.cancellationToken.createPromise((s, u, l) => {
        const p = {
          headers: c.headers || void 0,
          redirect: "manual"
        };
        (0, t.configureRequestUrl)(a, p), (0, t.configureRequestOptions)(p), this.doDownload(p, {
          destination: o,
          options: c,
          onCancel: l,
          callback: (d) => {
            d == null ? s(o) : u(d);
          },
          responseHandler: null
        }, 0);
      });
    }
    createRequest(a, o) {
      a.headers && a.headers.Host && (a.host = a.headers.Host, delete a.headers.Host), this.cachedSession == null && (this.cachedSession = n());
      const c = Bn.net.request({
        ...a,
        session: this.cachedSession
      });
      return c.on("response", o), this.proxyLoginCallback != null && c.on("login", this.proxyLoginCallback), c;
    }
    addRedirectHandlers(a, o, c, s, u) {
      a.on("redirect", (l, p, d) => {
        a.abort(), s > this.maxRedirects ? c(this.createMaxRedirectError()) : u(t.HttpExecutor.prepareRedirectUrlOptions(d, o));
      });
    }
  }
  e.ElectronHttpExecutor = r;
})(lx);
var Zi = {}, st = {}, $$ = "[object Symbol]", ux = /[\\^$.*+?()[\]{}|]/g, I$ = RegExp(ux.source), P$ = typeof Te == "object" && Te && Te.Object === Object && Te, D$ = typeof self == "object" && self && self.Object === Object && self, F$ = P$ || D$ || Function("return this")(), N$ = Object.prototype, k$ = N$.toString, uh = F$.Symbol, ph = uh ? uh.prototype : void 0, fh = ph ? ph.toString : void 0;
function L$(e) {
  if (typeof e == "string")
    return e;
  if (B$(e))
    return fh ? fh.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function U$(e) {
  return !!e && typeof e == "object";
}
function B$(e) {
  return typeof e == "symbol" || U$(e) && k$.call(e) == $$;
}
function j$(e) {
  return e == null ? "" : L$(e);
}
function M$(e) {
  return e = j$(e), e && I$.test(e) ? e.replace(ux, "\\$&") : e;
}
var q$ = M$;
Object.defineProperty(st, "__esModule", { value: !0 });
st.newBaseUrl = H$;
st.newUrlFromBase = $l;
st.getChannelFilename = G$;
st.blockmapFiles = W$;
const px = At, z$ = q$;
function H$(e) {
  const t = new px.URL(e);
  return t.pathname.endsWith("/") || (t.pathname += "/"), t;
}
function $l(e, t, n = !1) {
  const r = new px.URL(e, t), i = t.search;
  return i != null && i.length !== 0 ? r.search = i : n && (r.search = `noCache=${Date.now().toString(32)}`), r;
}
function G$(e) {
  return `${e}.yml`;
}
function W$(e, t, n) {
  const r = $l(`${e.pathname}.blockmap`, e);
  return [$l(`${e.pathname.replace(new RegExp(z$(n), "g"), t)}.blockmap`, e), r];
}
var Ce = {};
Object.defineProperty(Ce, "__esModule", { value: !0 });
Ce.Provider = void 0;
Ce.findFile = X$;
Ce.parseUpdateInfo = K$;
Ce.getFileList = fx;
Ce.resolveFiles = J$;
const pn = De, V$ = Ue, dh = st;
class Y$ {
  constructor(t) {
    this.runtimeOptions = t, this.requestHeaders = null, this.executor = t.executor;
  }
  get isUseMultipleRangeRequest() {
    return this.runtimeOptions.isUseMultipleRangeRequest !== !1;
  }
  getChannelFilePrefix() {
    if (this.runtimeOptions.platform === "linux") {
      const t = process.env.TEST_UPDATER_ARCH || process.arch;
      return "-linux" + (t === "x64" ? "" : `-${t}`);
    } else
      return this.runtimeOptions.platform === "darwin" ? "-mac" : "";
  }
  // due to historical reasons for windows we use channel name without platform specifier
  getDefaultChannelName() {
    return this.getCustomChannelName("latest");
  }
  getCustomChannelName(t) {
    return `${t}${this.getChannelFilePrefix()}`;
  }
  get fileExtraDownloadHeaders() {
    return null;
  }
  setRequestHeaders(t) {
    this.requestHeaders = t;
  }
  /**
   * Method to perform API request only to resolve update info, but not to download update.
   */
  httpRequest(t, n, r) {
    return this.executor.request(this.createRequestOptions(t, n), r);
  }
  createRequestOptions(t, n) {
    const r = {};
    return this.requestHeaders == null ? n != null && (r.headers = n) : r.headers = n == null ? this.requestHeaders : { ...this.requestHeaders, ...n }, (0, pn.configureRequestUrl)(t, r), r;
  }
}
Ce.Provider = Y$;
function X$(e, t, n) {
  if (e.length === 0)
    throw (0, pn.newError)("No files provided", "ERR_UPDATER_NO_FILES_PROVIDED");
  const r = e.find((i) => i.url.pathname.toLowerCase().endsWith(`.${t}`));
  return r ?? (n == null ? e[0] : e.find((i) => !n.some((a) => i.url.pathname.toLowerCase().endsWith(`.${a}`))));
}
function K$(e, t, n) {
  if (e == null)
    throw (0, pn.newError)(`Cannot parse update info from ${t} in the latest release artifacts (${n}): rawData: null`, "ERR_UPDATER_INVALID_UPDATE_INFO");
  let r;
  try {
    r = (0, V$.load)(e);
  } catch (i) {
    throw (0, pn.newError)(`Cannot parse update info from ${t} in the latest release artifacts (${n}): ${i.stack || i.message}, rawData: ${e}`, "ERR_UPDATER_INVALID_UPDATE_INFO");
  }
  return r;
}
function fx(e) {
  const t = e.files;
  if (t != null && t.length > 0)
    return t;
  if (e.path != null)
    return [
      {
        url: e.path,
        sha2: e.sha2,
        sha512: e.sha512
      }
    ];
  throw (0, pn.newError)(`No files provided: ${(0, pn.safeStringifyJson)(e)}`, "ERR_UPDATER_NO_FILES_PROVIDED");
}
function J$(e, t, n = (r) => r) {
  const i = fx(e).map((c) => {
    if (c.sha2 == null && c.sha512 == null)
      throw (0, pn.newError)(`Update info doesn't contain nor sha256 neither sha512 checksum: ${(0, pn.safeStringifyJson)(c)}`, "ERR_UPDATER_NO_CHECKSUM");
    return {
      url: (0, dh.newUrlFromBase)(n(c.url), t),
      info: c
    };
  }), a = e.packages, o = a == null ? null : a[process.arch] || a.ia32;
  return o != null && (i[0].packageInfo = {
    ...o,
    path: (0, dh.newUrlFromBase)(n(o.path), t).href
  }), i;
}
Object.defineProperty(Zi, "__esModule", { value: !0 });
Zi.GenericProvider = void 0;
const hh = De, Mc = st, qc = Ce;
class Z$ extends qc.Provider {
  constructor(t, n, r) {
    super(r), this.configuration = t, this.updater = n, this.baseUrl = (0, Mc.newBaseUrl)(this.configuration.url);
  }
  get channel() {
    const t = this.updater.channel || this.configuration.channel;
    return t == null ? this.getDefaultChannelName() : this.getCustomChannelName(t);
  }
  async getLatestVersion() {
    const t = (0, Mc.getChannelFilename)(this.channel), n = (0, Mc.newUrlFromBase)(t, this.baseUrl, this.updater.isAddNoCacheQuery);
    for (let r = 0; ; r++)
      try {
        return (0, qc.parseUpdateInfo)(await this.httpRequest(n), t, n);
      } catch (i) {
        if (i instanceof hh.HttpError && i.statusCode === 404)
          throw (0, hh.newError)(`Cannot find channel "${t}" update info: ${i.stack || i.message}`, "ERR_UPDATER_CHANNEL_FILE_NOT_FOUND");
        if (i.code === "ECONNREFUSED" && r < 3) {
          await new Promise((a, o) => {
            try {
              setTimeout(a, 1e3 * r);
            } catch (c) {
              o(c);
            }
          });
          continue;
        }
        throw i;
      }
  }
  resolveFiles(t) {
    return (0, qc.resolveFiles)(t, this.baseUrl);
  }
}
Zi.GenericProvider = Z$;
var hs = {}, ms = {};
Object.defineProperty(ms, "__esModule", { value: !0 });
ms.BitbucketProvider = void 0;
const mh = De, zc = st, Hc = Ce;
class Q$ extends Hc.Provider {
  constructor(t, n, r) {
    super({
      ...r,
      isUseMultipleRangeRequest: !1
    }), this.configuration = t, this.updater = n;
    const { owner: i, slug: a } = t;
    this.baseUrl = (0, zc.newBaseUrl)(`https://api.bitbucket.org/2.0/repositories/${i}/${a}/downloads`);
  }
  get channel() {
    return this.updater.channel || this.configuration.channel || "latest";
  }
  async getLatestVersion() {
    const t = new mh.CancellationToken(), n = (0, zc.getChannelFilename)(this.getCustomChannelName(this.channel)), r = (0, zc.newUrlFromBase)(n, this.baseUrl, this.updater.isAddNoCacheQuery);
    try {
      const i = await this.httpRequest(r, void 0, t);
      return (0, Hc.parseUpdateInfo)(i, n, r);
    } catch (i) {
      throw (0, mh.newError)(`Unable to find latest version on ${this.toString()}, please ensure release exists: ${i.stack || i.message}`, "ERR_UPDATER_LATEST_VERSION_NOT_FOUND");
    }
  }
  resolveFiles(t) {
    return (0, Hc.resolveFiles)(t, this.baseUrl);
  }
  toString() {
    const { owner: t, slug: n } = this.configuration;
    return `Bitbucket (owner: ${t}, slug: ${n}, channel: ${this.channel})`;
  }
}
ms.BitbucketProvider = Q$;
var fn = {};
Object.defineProperty(fn, "__esModule", { value: !0 });
fn.GitHubProvider = fn.BaseGitHubProvider = void 0;
fn.computeReleaseNotes = hx;
const Ft = De, gr = cx, e3 = At, xr = st, Il = Ce, Gc = /\/tag\/([^/]+)$/;
class dx extends Il.Provider {
  constructor(t, n, r) {
    super({
      ...r,
      /* because GitHib uses S3 */
      isUseMultipleRangeRequest: !1
    }), this.options = t, this.baseUrl = (0, xr.newBaseUrl)((0, Ft.githubUrl)(t, n));
    const i = n === "github.com" ? "api.github.com" : n;
    this.baseApiUrl = (0, xr.newBaseUrl)((0, Ft.githubUrl)(t, i));
  }
  computeGithubBasePath(t) {
    const n = this.options.host;
    return n && !["github.com", "api.github.com"].includes(n) ? `/api/v3${t}` : t;
  }
}
fn.BaseGitHubProvider = dx;
class t3 extends dx {
  constructor(t, n, r) {
    super(t, "github.com", r), this.options = t, this.updater = n;
  }
  get channel() {
    const t = this.updater.channel || this.options.channel;
    return t == null ? this.getDefaultChannelName() : this.getCustomChannelName(t);
  }
  async getLatestVersion() {
    var t, n, r, i, a;
    const o = new Ft.CancellationToken(), c = await this.httpRequest((0, xr.newUrlFromBase)(`${this.basePath}.atom`, this.baseUrl), {
      accept: "application/xml, application/atom+xml, text/xml, */*"
    }, o), s = (0, Ft.parseXml)(c);
    let u = s.element("entry", !1, "No published versions on GitHub"), l = null;
    try {
      if (this.updater.allowPrerelease) {
        const y = ((t = this.updater) === null || t === void 0 ? void 0 : t.channel) || ((n = gr.prerelease(this.updater.currentVersion)) === null || n === void 0 ? void 0 : n[0]) || null;
        if (y === null)
          l = Gc.exec(u.element("link").attribute("href"))[1];
        else
          for (const x of s.getElements("entry")) {
            const w = Gc.exec(x.element("link").attribute("href"));
            if (w === null)
              continue;
            const A = w[1], O = ((r = gr.prerelease(A)) === null || r === void 0 ? void 0 : r[0]) || null, k = !y || ["alpha", "beta"].includes(y), q = O !== null && !["alpha", "beta"].includes(String(O));
            if (k && !q && !(y === "beta" && O === "alpha")) {
              l = A;
              break;
            }
            if (O && O === y) {
              l = A;
              break;
            }
          }
      } else {
        l = await this.getLatestTagName(o);
        for (const y of s.getElements("entry"))
          if (Gc.exec(y.element("link").attribute("href"))[1] === l) {
            u = y;
            break;
          }
      }
    } catch (y) {
      throw (0, Ft.newError)(`Cannot parse releases feed: ${y.stack || y.message},
XML:
${c}`, "ERR_UPDATER_INVALID_RELEASE_FEED");
    }
    if (l == null)
      throw (0, Ft.newError)("No published versions on GitHub", "ERR_UPDATER_NO_PUBLISHED_VERSIONS");
    let p, d = "", m = "";
    const g = async (y) => {
      d = (0, xr.getChannelFilename)(y), m = (0, xr.newUrlFromBase)(this.getBaseDownloadPath(String(l), d), this.baseUrl);
      const x = this.createRequestOptions(m);
      try {
        return await this.executor.request(x, o);
      } catch (w) {
        throw w instanceof Ft.HttpError && w.statusCode === 404 ? (0, Ft.newError)(`Cannot find ${d} in the latest release artifacts (${m}): ${w.stack || w.message}`, "ERR_UPDATER_CHANNEL_FILE_NOT_FOUND") : w;
      }
    };
    try {
      let y = this.channel;
      this.updater.allowPrerelease && (!((i = gr.prerelease(l)) === null || i === void 0) && i[0]) && (y = this.getCustomChannelName(String((a = gr.prerelease(l)) === null || a === void 0 ? void 0 : a[0]))), p = await g(y);
    } catch (y) {
      if (this.updater.allowPrerelease)
        p = await g(this.getDefaultChannelName());
      else
        throw y;
    }
    const v = (0, Il.parseUpdateInfo)(p, d, m);
    return v.releaseName == null && (v.releaseName = u.elementValueOrEmpty("title")), v.releaseNotes == null && (v.releaseNotes = hx(this.updater.currentVersion, this.updater.fullChangelog, s, u)), {
      tag: l,
      ...v
    };
  }
  async getLatestTagName(t) {
    const n = this.options, r = n.host == null || n.host === "github.com" ? (0, xr.newUrlFromBase)(`${this.basePath}/latest`, this.baseUrl) : new e3.URL(`${this.computeGithubBasePath(`/repos/${n.owner}/${n.repo}/releases`)}/latest`, this.baseApiUrl);
    try {
      const i = await this.httpRequest(r, { Accept: "application/json" }, t);
      return i == null ? null : JSON.parse(i).tag_name;
    } catch (i) {
      throw (0, Ft.newError)(`Unable to find latest version on GitHub (${r}), please ensure a production release exists: ${i.stack || i.message}`, "ERR_UPDATER_LATEST_VERSION_NOT_FOUND");
    }
  }
  get basePath() {
    return `/${this.options.owner}/${this.options.repo}/releases`;
  }
  resolveFiles(t) {
    return (0, Il.resolveFiles)(t, this.baseUrl, (n) => this.getBaseDownloadPath(t.tag, n.replace(/ /g, "-")));
  }
  getBaseDownloadPath(t, n) {
    return `${this.basePath}/download/${t}/${n}`;
  }
}
fn.GitHubProvider = t3;
function vh(e) {
  const t = e.elementValueOrEmpty("content");
  return t === "No content." ? "" : t;
}
function hx(e, t, n, r) {
  if (!t)
    return vh(r);
  const i = [];
  for (const a of n.getElements("entry")) {
    const o = /\/tag\/v?([^/]+)$/.exec(a.element("link").attribute("href"))[1];
    gr.lt(e, o) && i.push({
      version: o,
      note: vh(a)
    });
  }
  return i.sort((a, o) => gr.rcompare(a.version, o.version));
}
var vs = {};
Object.defineProperty(vs, "__esModule", { value: !0 });
vs.KeygenProvider = void 0;
const gh = De, Wc = st, Vc = Ce;
class n3 extends Vc.Provider {
  constructor(t, n, r) {
    super({
      ...r,
      isUseMultipleRangeRequest: !1
    }), this.configuration = t, this.updater = n, this.defaultHostname = "api.keygen.sh";
    const i = this.configuration.host || this.defaultHostname;
    this.baseUrl = (0, Wc.newBaseUrl)(`https://${i}/v1/accounts/${this.configuration.account}/artifacts?product=${this.configuration.product}`);
  }
  get channel() {
    return this.updater.channel || this.configuration.channel || "stable";
  }
  async getLatestVersion() {
    const t = new gh.CancellationToken(), n = (0, Wc.getChannelFilename)(this.getCustomChannelName(this.channel)), r = (0, Wc.newUrlFromBase)(n, this.baseUrl, this.updater.isAddNoCacheQuery);
    try {
      const i = await this.httpRequest(r, {
        Accept: "application/vnd.api+json",
        "Keygen-Version": "1.1"
      }, t);
      return (0, Vc.parseUpdateInfo)(i, n, r);
    } catch (i) {
      throw (0, gh.newError)(`Unable to find latest version on ${this.toString()}, please ensure release exists: ${i.stack || i.message}`, "ERR_UPDATER_LATEST_VERSION_NOT_FOUND");
    }
  }
  resolveFiles(t) {
    return (0, Vc.resolveFiles)(t, this.baseUrl);
  }
  toString() {
    const { account: t, product: n, platform: r } = this.configuration;
    return `Keygen (account: ${t}, product: ${n}, platform: ${r}, channel: ${this.channel})`;
  }
}
vs.KeygenProvider = n3;
var gs = {};
Object.defineProperty(gs, "__esModule", { value: !0 });
gs.PrivateGitHubProvider = void 0;
const ir = De, r3 = Ue, i3 = ae, xh = At, yh = st, a3 = fn, o3 = Ce;
class s3 extends a3.BaseGitHubProvider {
  constructor(t, n, r, i) {
    super(t, "api.github.com", i), this.updater = n, this.token = r;
  }
  createRequestOptions(t, n) {
    const r = super.createRequestOptions(t, n);
    return r.redirect = "manual", r;
  }
  async getLatestVersion() {
    const t = new ir.CancellationToken(), n = (0, yh.getChannelFilename)(this.getDefaultChannelName()), r = await this.getLatestVersionInfo(t), i = r.assets.find((c) => c.name === n);
    if (i == null)
      throw (0, ir.newError)(`Cannot find ${n} in the release ${r.html_url || r.name}`, "ERR_UPDATER_CHANNEL_FILE_NOT_FOUND");
    const a = new xh.URL(i.url);
    let o;
    try {
      o = (0, r3.load)(await this.httpRequest(a, this.configureHeaders("application/octet-stream"), t));
    } catch (c) {
      throw c instanceof ir.HttpError && c.statusCode === 404 ? (0, ir.newError)(`Cannot find ${n} in the latest release artifacts (${a}): ${c.stack || c.message}`, "ERR_UPDATER_CHANNEL_FILE_NOT_FOUND") : c;
    }
    return o.assets = r.assets, o;
  }
  get fileExtraDownloadHeaders() {
    return this.configureHeaders("application/octet-stream");
  }
  configureHeaders(t) {
    return {
      accept: t,
      authorization: `token ${this.token}`
    };
  }
  async getLatestVersionInfo(t) {
    const n = this.updater.allowPrerelease;
    let r = this.basePath;
    n || (r = `${r}/latest`);
    const i = (0, yh.newUrlFromBase)(r, this.baseUrl);
    try {
      const a = JSON.parse(await this.httpRequest(i, this.configureHeaders("application/vnd.github.v3+json"), t));
      return n ? a.find((o) => o.prerelease) || a[0] : a;
    } catch (a) {
      throw (0, ir.newError)(`Unable to find latest version on GitHub (${i}), please ensure a production release exists: ${a.stack || a.message}`, "ERR_UPDATER_LATEST_VERSION_NOT_FOUND");
    }
  }
  get basePath() {
    return this.computeGithubBasePath(`/repos/${this.options.owner}/${this.options.repo}/releases`);
  }
  resolveFiles(t) {
    return (0, o3.getFileList)(t).map((n) => {
      const r = i3.posix.basename(n.url).replace(/ /g, "-"), i = t.assets.find((a) => a != null && a.name === r);
      if (i == null)
        throw (0, ir.newError)(`Cannot find asset "${r}" in: ${JSON.stringify(t.assets, null, 2)}`, "ERR_UPDATER_ASSET_NOT_FOUND");
      return {
        url: new xh.URL(i.url),
        info: n
      };
    });
  }
}
gs.PrivateGitHubProvider = s3;
Object.defineProperty(hs, "__esModule", { value: !0 });
hs.isUrlProbablySupportMultiRangeRequests = mx;
hs.createClient = f3;
const Fa = De, c3 = ms, bh = Zi, l3 = fn, u3 = vs, p3 = gs;
function mx(e) {
  return !e.includes("s3.amazonaws.com");
}
function f3(e, t, n) {
  if (typeof e == "string")
    throw (0, Fa.newError)("Please pass PublishConfiguration object", "ERR_UPDATER_INVALID_PROVIDER_CONFIGURATION");
  const r = e.provider;
  switch (r) {
    case "github": {
      const i = e, a = (i.private ? process.env.GH_TOKEN || process.env.GITHUB_TOKEN : null) || i.token;
      return a == null ? new l3.GitHubProvider(i, t, n) : new p3.PrivateGitHubProvider(i, t, a, n);
    }
    case "bitbucket":
      return new c3.BitbucketProvider(e, t, n);
    case "keygen":
      return new u3.KeygenProvider(e, t, n);
    case "s3":
    case "spaces":
      return new bh.GenericProvider({
        provider: "generic",
        url: (0, Fa.getS3LikeProviderBaseUrl)(e),
        channel: e.channel || null
      }, t, {
        ...n,
        // https://github.com/minio/minio/issues/5285#issuecomment-350428955
        isUseMultipleRangeRequest: !1
      });
    case "generic": {
      const i = e;
      return new bh.GenericProvider(i, t, {
        ...n,
        isUseMultipleRangeRequest: i.useMultipleRangeRequest !== !1 && mx(i.url)
      });
    }
    case "custom": {
      const i = e, a = i.updateProvider;
      if (!a)
        throw (0, Fa.newError)("Custom provider not specified", "ERR_UPDATER_INVALID_PROVIDER_CONFIGURATION");
      return new a(i, t, n);
    }
    default:
      throw (0, Fa.newError)(`Unsupported provider: ${r}`, "ERR_UPDATER_UNSUPPORTED_PROVIDER");
  }
}
var xs = {}, Qi = {}, Br = {}, Kn = {};
Object.defineProperty(Kn, "__esModule", { value: !0 });
Kn.OperationKind = void 0;
Kn.computeOperations = d3;
var Pn;
(function(e) {
  e[e.COPY = 0] = "COPY", e[e.DOWNLOAD = 1] = "DOWNLOAD";
})(Pn || (Kn.OperationKind = Pn = {}));
function d3(e, t, n) {
  const r = Eh(e.files), i = Eh(t.files);
  let a = null;
  const o = t.files[0], c = [], s = o.name, u = r.get(s);
  if (u == null)
    throw new Error(`no file ${s} in old blockmap`);
  const l = i.get(s);
  let p = 0;
  const { checksumToOffset: d, checksumToOldSize: m } = m3(r.get(s), u.offset, n);
  let g = o.offset;
  for (let v = 0; v < l.checksums.length; g += l.sizes[v], v++) {
    const y = l.sizes[v], x = l.checksums[v];
    let w = d.get(x);
    w != null && m.get(x) !== y && (n.warn(`Checksum ("${x}") matches, but size differs (old: ${m.get(x)}, new: ${y})`), w = void 0), w === void 0 ? (p++, a != null && a.kind === Pn.DOWNLOAD && a.end === g ? a.end += y : (a = {
      kind: Pn.DOWNLOAD,
      start: g,
      end: g + y
      // oldBlocks: null,
    }, wh(a, c, x, v))) : a != null && a.kind === Pn.COPY && a.end === w ? a.end += y : (a = {
      kind: Pn.COPY,
      start: w,
      end: w + y
      // oldBlocks: [checksum]
    }, wh(a, c, x, v));
  }
  return p > 0 && n.info(`File${o.name === "file" ? "" : " " + o.name} has ${p} changed blocks`), c;
}
const h3 = process.env.DIFFERENTIAL_DOWNLOAD_PLAN_BUILDER_VALIDATE_RANGES === "true";
function wh(e, t, n, r) {
  if (h3 && t.length !== 0) {
    const i = t[t.length - 1];
    if (i.kind === e.kind && e.start < i.end && e.start > i.start) {
      const a = [i.start, i.end, e.start, e.end].reduce((o, c) => o < c ? o : c);
      throw new Error(`operation (block index: ${r}, checksum: ${n}, kind: ${Pn[e.kind]}) overlaps previous operation (checksum: ${n}):
abs: ${i.start} until ${i.end} and ${e.start} until ${e.end}
rel: ${i.start - a} until ${i.end - a} and ${e.start - a} until ${e.end - a}`);
    }
  }
  t.push(e);
}
function m3(e, t, n) {
  const r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
  let a = t;
  for (let o = 0; o < e.checksums.length; o++) {
    const c = e.checksums[o], s = e.sizes[o], u = i.get(c);
    if (u === void 0)
      r.set(c, a), i.set(c, s);
    else if (n.debug != null) {
      const l = u === s ? "(same size)" : `(size: ${u}, this size: ${s})`;
      n.debug(`${c} duplicated in blockmap ${l}, it doesn't lead to broken differential downloader, just corresponding block will be skipped)`);
    }
    a += s;
  }
  return { checksumToOffset: r, checksumToOldSize: i };
}
function Eh(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e)
    t.set(n.name, n);
  return t;
}
Object.defineProperty(Br, "__esModule", { value: !0 });
Br.DataSplitter = void 0;
Br.copyData = vx;
const Na = De, v3 = oe, g3 = ie, x3 = Kn, _h = Buffer.from(`\r
\r
`);
var Kt;
(function(e) {
  e[e.INIT = 0] = "INIT", e[e.HEADER = 1] = "HEADER", e[e.BODY = 2] = "BODY";
})(Kt || (Kt = {}));
function vx(e, t, n, r, i) {
  const a = (0, v3.createReadStream)("", {
    fd: n,
    autoClose: !1,
    start: e.start,
    // end is inclusive
    end: e.end - 1
  });
  a.on("error", r), a.once("end", i), a.pipe(t, {
    end: !1
  });
}
class y3 extends g3.Writable {
  constructor(t, n, r, i, a, o) {
    super(), this.out = t, this.options = n, this.partIndexToTaskIndex = r, this.partIndexToLength = a, this.finishHandler = o, this.partIndex = -1, this.headerListBuffer = null, this.readState = Kt.INIT, this.ignoreByteCount = 0, this.remainingPartDataCount = 0, this.actualPartLength = 0, this.boundaryLength = i.length + 4, this.ignoreByteCount = this.boundaryLength - 2;
  }
  get isFinished() {
    return this.partIndex === this.partIndexToLength.length;
  }
  // noinspection JSUnusedGlobalSymbols
  _write(t, n, r) {
    if (this.isFinished) {
      console.error(`Trailing ignored data: ${t.length} bytes`);
      return;
    }
    this.handleData(t).then(r).catch(r);
  }
  async handleData(t) {
    let n = 0;
    if (this.ignoreByteCount !== 0 && this.remainingPartDataCount !== 0)
      throw (0, Na.newError)("Internal error", "ERR_DATA_SPLITTER_BYTE_COUNT_MISMATCH");
    if (this.ignoreByteCount > 0) {
      const r = Math.min(this.ignoreByteCount, t.length);
      this.ignoreByteCount -= r, n = r;
    } else if (this.remainingPartDataCount > 0) {
      const r = Math.min(this.remainingPartDataCount, t.length);
      this.remainingPartDataCount -= r, await this.processPartData(t, 0, r), n = r;
    }
    if (n !== t.length) {
      if (this.readState === Kt.HEADER) {
        const r = this.searchHeaderListEnd(t, n);
        if (r === -1)
          return;
        n = r, this.readState = Kt.BODY, this.headerListBuffer = null;
      }
      for (; ; ) {
        if (this.readState === Kt.BODY)
          this.readState = Kt.INIT;
        else {
          this.partIndex++;
          let o = this.partIndexToTaskIndex.get(this.partIndex);
          if (o == null)
            if (this.isFinished)
              o = this.options.end;
            else
              throw (0, Na.newError)("taskIndex is null", "ERR_DATA_SPLITTER_TASK_INDEX_IS_NULL");
          const c = this.partIndex === 0 ? this.options.start : this.partIndexToTaskIndex.get(this.partIndex - 1) + 1;
          if (c < o)
            await this.copyExistingData(c, o);
          else if (c > o)
            throw (0, Na.newError)("prevTaskIndex must be < taskIndex", "ERR_DATA_SPLITTER_TASK_INDEX_ASSERT_FAILED");
          if (this.isFinished) {
            this.onPartEnd(), this.finishHandler();
            return;
          }
          if (n = this.searchHeaderListEnd(t, n), n === -1) {
            this.readState = Kt.HEADER;
            return;
          }
        }
        const r = this.partIndexToLength[this.partIndex], i = n + r, a = Math.min(i, t.length);
        if (await this.processPartStarted(t, n, a), this.remainingPartDataCount = r - (a - n), this.remainingPartDataCount > 0)
          return;
        if (n = i + this.boundaryLength, n >= t.length) {
          this.ignoreByteCount = this.boundaryLength - (t.length - i);
          return;
        }
      }
    }
  }
  copyExistingData(t, n) {
    return new Promise((r, i) => {
      const a = () => {
        if (t === n) {
          r();
          return;
        }
        const o = this.options.tasks[t];
        if (o.kind !== x3.OperationKind.COPY) {
          i(new Error("Task kind must be COPY"));
          return;
        }
        vx(o, this.out, this.options.oldFileFd, i, () => {
          t++, a();
        });
      };
      a();
    });
  }
  searchHeaderListEnd(t, n) {
    const r = t.indexOf(_h, n);
    if (r !== -1)
      return r + _h.length;
    const i = n === 0 ? t : t.slice(n);
    return this.headerListBuffer == null ? this.headerListBuffer = i : this.headerListBuffer = Buffer.concat([this.headerListBuffer, i]), -1;
  }
  onPartEnd() {
    const t = this.partIndexToLength[this.partIndex - 1];
    if (this.actualPartLength !== t)
      throw (0, Na.newError)(`Expected length: ${t} differs from actual: ${this.actualPartLength}`, "ERR_DATA_SPLITTER_LENGTH_MISMATCH");
    this.actualPartLength = 0;
  }
  processPartStarted(t, n, r) {
    return this.partIndex !== 0 && this.onPartEnd(), this.processPartData(t, n, r);
  }
  processPartData(t, n, r) {
    this.actualPartLength += r - n;
    const i = this.out;
    return i.write(n === 0 && t.length === r ? t : t.slice(n, r)) ? Promise.resolve() : new Promise((a, o) => {
      i.on("error", o), i.once("drain", () => {
        i.removeListener("error", o), a();
      });
    });
  }
}
Br.DataSplitter = y3;
var ys = {};
Object.defineProperty(ys, "__esModule", { value: !0 });
ys.executeTasksUsingMultipleRangeRequests = b3;
ys.checkIsRangesSupported = Dl;
const Pl = De, Sh = Br, Th = Kn;
function b3(e, t, n, r, i) {
  const a = (o) => {
    if (o >= t.length) {
      e.fileMetadataBuffer != null && n.write(e.fileMetadataBuffer), n.end();
      return;
    }
    const c = o + 1e3;
    w3(e, {
      tasks: t,
      start: o,
      end: Math.min(t.length, c),
      oldFileFd: r
    }, n, () => a(c), i);
  };
  return a;
}
function w3(e, t, n, r, i) {
  let a = "bytes=", o = 0;
  const c = /* @__PURE__ */ new Map(), s = [];
  for (let p = t.start; p < t.end; p++) {
    const d = t.tasks[p];
    d.kind === Th.OperationKind.DOWNLOAD && (a += `${d.start}-${d.end - 1}, `, c.set(o, p), o++, s.push(d.end - d.start));
  }
  if (o <= 1) {
    const p = (d) => {
      if (d >= t.end) {
        r();
        return;
      }
      const m = t.tasks[d++];
      if (m.kind === Th.OperationKind.COPY)
        (0, Sh.copyData)(m, n, t.oldFileFd, i, () => p(d));
      else {
        const g = e.createRequestOptions();
        g.headers.Range = `bytes=${m.start}-${m.end - 1}`;
        const v = e.httpExecutor.createRequest(g, (y) => {
          Dl(y, i) && (y.pipe(n, {
            end: !1
          }), y.once("end", () => p(d)));
        });
        e.httpExecutor.addErrorAndTimeoutHandlers(v, i), v.end();
      }
    };
    p(t.start);
    return;
  }
  const u = e.createRequestOptions();
  u.headers.Range = a.substring(0, a.length - 2);
  const l = e.httpExecutor.createRequest(u, (p) => {
    if (!Dl(p, i))
      return;
    const d = (0, Pl.safeGetHeader)(p, "content-type"), m = /^multipart\/.+?(?:; boundary=(?:(?:"(.+)")|(?:([^\s]+))))$/i.exec(d);
    if (m == null) {
      i(new Error(`Content-Type "multipart/byteranges" is expected, but got "${d}"`));
      return;
    }
    const g = new Sh.DataSplitter(n, t, c, m[1] || m[2], s, r);
    g.on("error", i), p.pipe(g), p.on("end", () => {
      setTimeout(() => {
        l.abort(), i(new Error("Response ends without calling any handlers"));
      }, 1e4);
    });
  });
  e.httpExecutor.addErrorAndTimeoutHandlers(l, i), l.end();
}
function Dl(e, t) {
  if (e.statusCode >= 400)
    return t((0, Pl.createHttpError)(e)), !1;
  if (e.statusCode !== 206) {
    const n = (0, Pl.safeGetHeader)(e, "accept-ranges");
    if (n == null || n === "none")
      return t(new Error(`Server doesn't support Accept-Ranges (response code ${e.statusCode})`)), !1;
  }
  return !0;
}
var bs = {};
Object.defineProperty(bs, "__esModule", { value: !0 });
bs.ProgressDifferentialDownloadCallbackTransform = void 0;
const E3 = ie;
var yr;
(function(e) {
  e[e.COPY = 0] = "COPY", e[e.DOWNLOAD = 1] = "DOWNLOAD";
})(yr || (yr = {}));
class _3 extends E3.Transform {
  constructor(t, n, r) {
    super(), this.progressDifferentialDownloadInfo = t, this.cancellationToken = n, this.onProgress = r, this.start = Date.now(), this.transferred = 0, this.delta = 0, this.expectedBytes = 0, this.index = 0, this.operationType = yr.COPY, this.nextUpdate = this.start + 1e3;
  }
  _transform(t, n, r) {
    if (this.cancellationToken.cancelled) {
      r(new Error("cancelled"), null);
      return;
    }
    if (this.operationType == yr.COPY) {
      r(null, t);
      return;
    }
    this.transferred += t.length, this.delta += t.length;
    const i = Date.now();
    i >= this.nextUpdate && this.transferred !== this.expectedBytes && this.transferred !== this.progressDifferentialDownloadInfo.grandTotal && (this.nextUpdate = i + 1e3, this.onProgress({
      total: this.progressDifferentialDownloadInfo.grandTotal,
      delta: this.delta,
      transferred: this.transferred,
      percent: this.transferred / this.progressDifferentialDownloadInfo.grandTotal * 100,
      bytesPerSecond: Math.round(this.transferred / ((i - this.start) / 1e3))
    }), this.delta = 0), r(null, t);
  }
  beginFileCopy() {
    this.operationType = yr.COPY;
  }
  beginRangeDownload() {
    this.operationType = yr.DOWNLOAD, this.expectedBytes += this.progressDifferentialDownloadInfo.expectedByteCounts[this.index++];
  }
  endRangeDownload() {
    this.transferred !== this.progressDifferentialDownloadInfo.grandTotal && this.onProgress({
      total: this.progressDifferentialDownloadInfo.grandTotal,
      delta: this.delta,
      transferred: this.transferred,
      percent: this.transferred / this.progressDifferentialDownloadInfo.grandTotal * 100,
      bytesPerSecond: Math.round(this.transferred / ((Date.now() - this.start) / 1e3))
    });
  }
  // Called when we are 100% done with the connection/download
  _flush(t) {
    if (this.cancellationToken.cancelled) {
      t(new Error("cancelled"));
      return;
    }
    this.onProgress({
      total: this.progressDifferentialDownloadInfo.grandTotal,
      delta: this.delta,
      transferred: this.transferred,
      percent: 100,
      bytesPerSecond: Math.round(this.transferred / ((Date.now() - this.start) / 1e3))
    }), this.delta = 0, this.transferred = 0, t(null);
  }
}
bs.ProgressDifferentialDownloadCallbackTransform = _3;
Object.defineProperty(Qi, "__esModule", { value: !0 });
Qi.DifferentialDownloader = void 0;
const Zr = De, Yc = vn, S3 = oe, T3 = Br, A3 = At, ka = Kn, Ah = ys, R3 = bs;
class C3 {
  // noinspection TypeScriptAbstractClassConstructorCanBeMadeProtected
  constructor(t, n, r) {
    this.blockAwareFileInfo = t, this.httpExecutor = n, this.options = r, this.fileMetadataBuffer = null, this.logger = r.logger;
  }
  createRequestOptions() {
    const t = {
      headers: {
        ...this.options.requestHeaders,
        accept: "*/*"
      }
    };
    return (0, Zr.configureRequestUrl)(this.options.newUrl, t), (0, Zr.configureRequestOptions)(t), t;
  }
  doDownload(t, n) {
    if (t.version !== n.version)
      throw new Error(`version is different (${t.version} - ${n.version}), full download is required`);
    const r = this.logger, i = (0, ka.computeOperations)(t, n, r);
    r.debug != null && r.debug(JSON.stringify(i, null, 2));
    let a = 0, o = 0;
    for (const s of i) {
      const u = s.end - s.start;
      s.kind === ka.OperationKind.DOWNLOAD ? a += u : o += u;
    }
    const c = this.blockAwareFileInfo.size;
    if (a + o + (this.fileMetadataBuffer == null ? 0 : this.fileMetadataBuffer.length) !== c)
      throw new Error(`Internal error, size mismatch: downloadSize: ${a}, copySize: ${o}, newSize: ${c}`);
    return r.info(`Full: ${Rh(c)}, To download: ${Rh(a)} (${Math.round(a / (c / 100))}%)`), this.downloadFile(i);
  }
  downloadFile(t) {
    const n = [], r = () => Promise.all(n.map((i) => (0, Yc.close)(i.descriptor).catch((a) => {
      this.logger.error(`cannot close file "${i.path}": ${a}`);
    })));
    return this.doDownloadFile(t, n).then(r).catch((i) => r().catch((a) => {
      try {
        this.logger.error(`cannot close files: ${a}`);
      } catch (o) {
        try {
          console.error(o);
        } catch {
        }
      }
      throw i;
    }).then(() => {
      throw i;
    }));
  }
  async doDownloadFile(t, n) {
    const r = await (0, Yc.open)(this.options.oldFile, "r");
    n.push({ descriptor: r, path: this.options.oldFile });
    const i = await (0, Yc.open)(this.options.newFile, "w");
    n.push({ descriptor: i, path: this.options.newFile });
    const a = (0, S3.createWriteStream)(this.options.newFile, { fd: i });
    await new Promise((o, c) => {
      const s = [];
      let u;
      if (!this.options.isUseMultipleRangeRequest && this.options.onProgress) {
        const x = [];
        let w = 0;
        for (const O of t)
          O.kind === ka.OperationKind.DOWNLOAD && (x.push(O.end - O.start), w += O.end - O.start);
        const A = {
          expectedByteCounts: x,
          grandTotal: w
        };
        u = new R3.ProgressDifferentialDownloadCallbackTransform(A, this.options.cancellationToken, this.options.onProgress), s.push(u);
      }
      const l = new Zr.DigestTransform(this.blockAwareFileInfo.sha512);
      l.isValidateOnEnd = !1, s.push(l), a.on("finish", () => {
        a.close(() => {
          n.splice(1, 1);
          try {
            l.validate();
          } catch (x) {
            c(x);
            return;
          }
          o(void 0);
        });
      }), s.push(a);
      let p = null;
      for (const x of s)
        x.on("error", c), p == null ? p = x : p = p.pipe(x);
      const d = s[0];
      let m;
      if (this.options.isUseMultipleRangeRequest) {
        m = (0, Ah.executeTasksUsingMultipleRangeRequests)(this, t, d, r, c), m(0);
        return;
      }
      let g = 0, v = null;
      this.logger.info(`Differential download: ${this.options.newUrl}`);
      const y = this.createRequestOptions();
      y.redirect = "manual", m = (x) => {
        var w, A;
        if (x >= t.length) {
          this.fileMetadataBuffer != null && d.write(this.fileMetadataBuffer), d.end();
          return;
        }
        const O = t[x++];
        if (O.kind === ka.OperationKind.COPY) {
          u && u.beginFileCopy(), (0, T3.copyData)(O, d, r, c, () => m(x));
          return;
        }
        const k = `bytes=${O.start}-${O.end - 1}`;
        y.headers.range = k, (A = (w = this.logger) === null || w === void 0 ? void 0 : w.debug) === null || A === void 0 || A.call(w, `download range: ${k}`), u && u.beginRangeDownload();
        const q = this.httpExecutor.createRequest(y, (W) => {
          W.on("error", c), W.on("aborted", () => {
            c(new Error("response has been aborted by the server"));
          }), W.statusCode >= 400 && c((0, Zr.createHttpError)(W)), W.pipe(d, {
            end: !1
          }), W.once("end", () => {
            u && u.endRangeDownload(), ++g === 100 ? (g = 0, setTimeout(() => m(x), 1e3)) : m(x);
          });
        });
        q.on("redirect", (W, te, T) => {
          this.logger.info(`Redirect to ${O3(T)}`), v = T, (0, Zr.configureRequestUrl)(new A3.URL(v), y), q.followRedirect();
        }), this.httpExecutor.addErrorAndTimeoutHandlers(q, c), q.end();
      }, m(0);
    });
  }
  async readRemoteBytes(t, n) {
    const r = Buffer.allocUnsafe(n + 1 - t), i = this.createRequestOptions();
    i.headers.range = `bytes=${t}-${n}`;
    let a = 0;
    if (await this.request(i, (o) => {
      o.copy(r, a), a += o.length;
    }), a !== r.length)
      throw new Error(`Received data length ${a} is not equal to expected ${r.length}`);
    return r;
  }
  request(t, n) {
    return new Promise((r, i) => {
      const a = this.httpExecutor.createRequest(t, (o) => {
        (0, Ah.checkIsRangesSupported)(o, i) && (o.on("error", i), o.on("aborted", () => {
          i(new Error("response has been aborted by the server"));
        }), o.on("data", n), o.on("end", () => r()));
      });
      this.httpExecutor.addErrorAndTimeoutHandlers(a, i), a.end();
    });
  }
}
Qi.DifferentialDownloader = C3;
function Rh(e, t = " KB") {
  return new Intl.NumberFormat("en").format((e / 1024).toFixed(2)) + t;
}
function O3(e) {
  const t = e.indexOf("?");
  return t < 0 ? e : e.substring(0, t);
}
Object.defineProperty(xs, "__esModule", { value: !0 });
xs.GenericDifferentialDownloader = void 0;
const $3 = Qi;
class I3 extends $3.DifferentialDownloader {
  download(t, n) {
    return this.doDownload(t, n);
  }
}
xs.GenericDifferentialDownloader = I3;
var gn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.UpdaterSignal = e.UPDATE_DOWNLOADED = e.DOWNLOAD_PROGRESS = e.CancellationToken = void 0, e.addHandler = r;
  const t = De;
  Object.defineProperty(e, "CancellationToken", { enumerable: !0, get: function() {
    return t.CancellationToken;
  } }), e.DOWNLOAD_PROGRESS = "download-progress", e.UPDATE_DOWNLOADED = "update-downloaded";
  class n {
    constructor(a) {
      this.emitter = a;
    }
    /**
     * Emitted when an authenticating proxy is [asking for user credentials](https://github.com/electron/electron/blob/master/docs/api/client-request.md#event-login).
     */
    login(a) {
      r(this.emitter, "login", a);
    }
    progress(a) {
      r(this.emitter, e.DOWNLOAD_PROGRESS, a);
    }
    updateDownloaded(a) {
      r(this.emitter, e.UPDATE_DOWNLOADED, a);
    }
    updateCancelled(a) {
      r(this.emitter, "update-cancelled", a);
    }
  }
  e.UpdaterSignal = n;
  function r(i, a, o) {
    i.on(a, o);
  }
})(gn);
Object.defineProperty(cn, "__esModule", { value: !0 });
cn.NoOpLogger = cn.AppUpdater = void 0;
const ze = De, P3 = Dr, D3 = Eo, F3 = Hn, ar = vn, N3 = Ue, Xc = ss, An = ae, Cn = cx, Ch = Ji, k3 = ds, Oh = lx, L3 = Zi, Kc = hs, U3 = Qe, B3 = st, j3 = xs, or = gn;
class Xu extends F3.EventEmitter {
  /**
   * Get the update channel. Doesn't return `channel` from the update configuration, only if was previously set.
   */
  get channel() {
    return this._channel;
  }
  /**
   * Set the update channel. Overrides `channel` in the update configuration.
   *
   * `allowDowngrade` will be automatically set to `true`. If this behavior is not suitable for you, simple set `allowDowngrade` explicitly after.
   */
  set channel(t) {
    if (this._channel != null) {
      if (typeof t != "string")
        throw (0, ze.newError)(`Channel must be a string, but got: ${t}`, "ERR_UPDATER_INVALID_CHANNEL");
      if (t.length === 0)
        throw (0, ze.newError)("Channel must be not an empty string", "ERR_UPDATER_INVALID_CHANNEL");
    }
    this._channel = t, this.allowDowngrade = !0;
  }
  /**
   *  Shortcut for explicitly adding auth tokens to request headers
   */
  addAuthHeader(t) {
    this.requestHeaders = Object.assign({}, this.requestHeaders, {
      authorization: t
    });
  }
  // noinspection JSMethodCanBeStatic,JSUnusedGlobalSymbols
  get netSession() {
    return (0, Oh.getNetSession)();
  }
  /**
   * The logger. You can pass [electron-log](https://github.com/megahertz/electron-log), [winston](https://github.com/winstonjs/winston) or another logger with the following interface: `{ info(), warn(), error() }`.
   * Set it to `null` if you would like to disable a logging feature.
   */
  get logger() {
    return this._logger;
  }
  set logger(t) {
    this._logger = t ?? new gx();
  }
  // noinspection JSUnusedGlobalSymbols
  /**
   * test only
   * @private
   */
  set updateConfigPath(t) {
    this.clientPromise = null, this._appUpdateConfigPath = t, this.configOnDisk = new Xc.Lazy(() => this.loadUpdateConfig());
  }
  /**
   * Allows developer to override default logic for determining if an update is supported.
   * The default logic compares the `UpdateInfo` minimum system version against the `os.release()` with `semver` package
   */
  get isUpdateSupported() {
    return this._isUpdateSupported;
  }
  set isUpdateSupported(t) {
    t && (this._isUpdateSupported = t);
  }
  constructor(t, n) {
    super(), this.autoDownload = !0, this.autoInstallOnAppQuit = !0, this.autoRunAppAfterInstall = !0, this.allowPrerelease = !1, this.fullChangelog = !1, this.allowDowngrade = !1, this.disableWebInstaller = !1, this.disableDifferentialDownload = !1, this.forceDevUpdateConfig = !1, this._channel = null, this.downloadedUpdateHelper = null, this.requestHeaders = null, this._logger = console, this.signals = new or.UpdaterSignal(this), this._appUpdateConfigPath = null, this._isUpdateSupported = (a) => this.checkIfUpdateSupported(a), this.clientPromise = null, this.stagingUserIdPromise = new Xc.Lazy(() => this.getOrCreateStagingUserId()), this.configOnDisk = new Xc.Lazy(() => this.loadUpdateConfig()), this.checkForUpdatesPromise = null, this.downloadPromise = null, this.updateInfoAndProvider = null, this._testOnlyOptions = null, this.on("error", (a) => {
      this._logger.error(`Error: ${a.stack || a.message}`);
    }), n == null ? (this.app = new k3.ElectronAppAdapter(), this.httpExecutor = new Oh.ElectronHttpExecutor((a, o) => this.emit("login", a, o))) : (this.app = n, this.httpExecutor = null);
    const r = this.app.version, i = (0, Cn.parse)(r);
    if (i == null)
      throw (0, ze.newError)(`App version is not a valid semver version: "${r}"`, "ERR_UPDATER_INVALID_VERSION");
    this.currentVersion = i, this.allowPrerelease = M3(i), t != null && (this.setFeedURL(t), typeof t != "string" && t.requestHeaders && (this.requestHeaders = t.requestHeaders));
  }
  //noinspection JSMethodCanBeStatic,JSUnusedGlobalSymbols
  getFeedURL() {
    return "Deprecated. Do not use it.";
  }
  /**
   * Configure update provider. If value is `string`, [GenericServerOptions](./publish.md#genericserveroptions) will be set with value as `url`.
   * @param options If you want to override configuration in the `app-update.yml`.
   */
  setFeedURL(t) {
    const n = this.createProviderRuntimeOptions();
    let r;
    typeof t == "string" ? r = new L3.GenericProvider({ provider: "generic", url: t }, this, {
      ...n,
      isUseMultipleRangeRequest: (0, Kc.isUrlProbablySupportMultiRangeRequests)(t)
    }) : r = (0, Kc.createClient)(t, this, n), this.clientPromise = Promise.resolve(r);
  }
  /**
   * Asks the server whether there is an update.
   * @returns null if the updater is disabled, otherwise info about the latest version
   */
  checkForUpdates() {
    if (!this.isUpdaterActive())
      return Promise.resolve(null);
    let t = this.checkForUpdatesPromise;
    if (t != null)
      return this._logger.info("Checking for update (already in progress)"), t;
    const n = () => this.checkForUpdatesPromise = null;
    return this._logger.info("Checking for update"), t = this.doCheckForUpdates().then((r) => (n(), r)).catch((r) => {
      throw n(), this.emit("error", r, `Cannot check for updates: ${(r.stack || r).toString()}`), r;
    }), this.checkForUpdatesPromise = t, t;
  }
  isUpdaterActive() {
    return this.app.isPackaged || this.forceDevUpdateConfig ? !0 : (this._logger.info("Skip checkForUpdates because application is not packed and dev update config is not forced"), !1);
  }
  // noinspection JSUnusedGlobalSymbols
  checkForUpdatesAndNotify(t) {
    return this.checkForUpdates().then((n) => n != null && n.downloadPromise ? (n.downloadPromise.then(() => {
      const r = Xu.formatDownloadNotification(n.updateInfo.version, this.app.name, t);
      new Bn.Notification(r).show();
    }), n) : (this._logger.debug != null && this._logger.debug("checkForUpdatesAndNotify called, downloadPromise is null"), n));
  }
  static formatDownloadNotification(t, n, r) {
    return r == null && (r = {
      title: "A new update is ready to install",
      body: "{appName} version {version} has been downloaded and will be automatically installed on exit"
    }), r = {
      title: r.title.replace("{appName}", n).replace("{version}", t),
      body: r.body.replace("{appName}", n).replace("{version}", t)
    }, r;
  }
  async isStagingMatch(t) {
    const n = t.stagingPercentage;
    let r = n;
    if (r == null)
      return !0;
    if (r = parseInt(r, 10), isNaN(r))
      return this._logger.warn(`Staging percentage is NaN: ${n}`), !0;
    r = r / 100;
    const i = await this.stagingUserIdPromise.value, o = ze.UUID.parse(i).readUInt32BE(12) / 4294967295;
    return this._logger.info(`Staging percentage: ${r}, percentage: ${o}, user id: ${i}`), o < r;
  }
  computeFinalHeaders(t) {
    return this.requestHeaders != null && Object.assign(t, this.requestHeaders), t;
  }
  async isUpdateAvailable(t) {
    const n = (0, Cn.parse)(t.version);
    if (n == null)
      throw (0, ze.newError)(`This file could not be downloaded, or the latest version (from update server) does not have a valid semver version: "${t.version}"`, "ERR_UPDATER_INVALID_VERSION");
    const r = this.currentVersion;
    if ((0, Cn.eq)(n, r) || !await Promise.resolve(this.isUpdateSupported(t)) || !await this.isStagingMatch(t))
      return !1;
    const a = (0, Cn.gt)(n, r), o = (0, Cn.lt)(n, r);
    return a ? !0 : this.allowDowngrade && o;
  }
  checkIfUpdateSupported(t) {
    const n = t == null ? void 0 : t.minimumSystemVersion, r = (0, D3.release)();
    if (n)
      try {
        if ((0, Cn.lt)(r, n))
          return this._logger.info(`Current OS version ${r} is less than the minimum OS version required ${n} for version ${r}`), !1;
      } catch (i) {
        this._logger.warn(`Failed to compare current OS version(${r}) with minimum OS version(${n}): ${(i.message || i).toString()}`);
      }
    return !0;
  }
  async getUpdateInfoAndProvider() {
    await this.app.whenReady(), this.clientPromise == null && (this.clientPromise = this.configOnDisk.value.then((r) => (0, Kc.createClient)(r, this, this.createProviderRuntimeOptions())));
    const t = await this.clientPromise, n = await this.stagingUserIdPromise.value;
    return t.setRequestHeaders(this.computeFinalHeaders({ "x-user-staging-id": n })), {
      info: await t.getLatestVersion(),
      provider: t
    };
  }
  createProviderRuntimeOptions() {
    return {
      isUseMultipleRangeRequest: !0,
      platform: this._testOnlyOptions == null ? process.platform : this._testOnlyOptions.platform,
      executor: this.httpExecutor
    };
  }
  async doCheckForUpdates() {
    this.emit("checking-for-update");
    const t = await this.getUpdateInfoAndProvider(), n = t.info;
    if (!await this.isUpdateAvailable(n))
      return this._logger.info(`Update for version ${this.currentVersion.format()} is not available (latest version: ${n.version}, downgrade is ${this.allowDowngrade ? "allowed" : "disallowed"}).`), this.emit("update-not-available", n), {
        isUpdateAvailable: !1,
        versionInfo: n,
        updateInfo: n
      };
    this.updateInfoAndProvider = t, this.onUpdateAvailable(n);
    const r = new ze.CancellationToken();
    return {
      isUpdateAvailable: !0,
      versionInfo: n,
      updateInfo: n,
      cancellationToken: r,
      downloadPromise: this.autoDownload ? this.downloadUpdate(r) : null
    };
  }
  onUpdateAvailable(t) {
    this._logger.info(`Found version ${t.version} (url: ${(0, ze.asArray)(t.files).map((n) => n.url).join(", ")})`), this.emit("update-available", t);
  }
  /**
   * Start downloading update manually. You can use this method if `autoDownload` option is set to `false`.
   * @returns {Promise<Array<string>>} Paths to downloaded files.
   */
  downloadUpdate(t = new ze.CancellationToken()) {
    const n = this.updateInfoAndProvider;
    if (n == null) {
      const i = new Error("Please check update first");
      return this.dispatchError(i), Promise.reject(i);
    }
    if (this.downloadPromise != null)
      return this._logger.info("Downloading update (already in progress)"), this.downloadPromise;
    this._logger.info(`Downloading update from ${(0, ze.asArray)(n.info.files).map((i) => i.url).join(", ")}`);
    const r = (i) => {
      if (!(i instanceof ze.CancellationError))
        try {
          this.dispatchError(i);
        } catch (a) {
          this._logger.warn(`Cannot dispatch error event: ${a.stack || a}`);
        }
      return i;
    };
    return this.downloadPromise = this.doDownloadUpdate({
      updateInfoAndProvider: n,
      requestHeaders: this.computeRequestHeaders(n.provider),
      cancellationToken: t,
      disableWebInstaller: this.disableWebInstaller,
      disableDifferentialDownload: this.disableDifferentialDownload
    }).catch((i) => {
      throw r(i);
    }).finally(() => {
      this.downloadPromise = null;
    }), this.downloadPromise;
  }
  dispatchError(t) {
    this.emit("error", t, (t.stack || t).toString());
  }
  dispatchUpdateDownloaded(t) {
    this.emit(or.UPDATE_DOWNLOADED, t);
  }
  async loadUpdateConfig() {
    return this._appUpdateConfigPath == null && (this._appUpdateConfigPath = this.app.appUpdateConfigPath), (0, N3.load)(await (0, ar.readFile)(this._appUpdateConfigPath, "utf-8"));
  }
  computeRequestHeaders(t) {
    const n = t.fileExtraDownloadHeaders;
    if (n != null) {
      const r = this.requestHeaders;
      return r == null ? n : {
        ...n,
        ...r
      };
    }
    return this.computeFinalHeaders({ accept: "*/*" });
  }
  async getOrCreateStagingUserId() {
    const t = An.join(this.app.userDataPath, ".updaterId");
    try {
      const r = await (0, ar.readFile)(t, "utf-8");
      if (ze.UUID.check(r))
        return r;
      this._logger.warn(`Staging user id file exists, but content was invalid: ${r}`);
    } catch (r) {
      r.code !== "ENOENT" && this._logger.warn(`Couldn't read staging user ID, creating a blank one: ${r}`);
    }
    const n = ze.UUID.v5((0, P3.randomBytes)(4096), ze.UUID.OID);
    this._logger.info(`Generated new staging user ID: ${n}`);
    try {
      await (0, ar.outputFile)(t, n);
    } catch (r) {
      this._logger.warn(`Couldn't write out staging user ID: ${r}`);
    }
    return n;
  }
  /** @internal */
  get isAddNoCacheQuery() {
    const t = this.requestHeaders;
    if (t == null)
      return !0;
    for (const n of Object.keys(t)) {
      const r = n.toLowerCase();
      if (r === "authorization" || r === "private-token")
        return !1;
    }
    return !0;
  }
  async getOrCreateDownloadHelper() {
    let t = this.downloadedUpdateHelper;
    if (t == null) {
      const n = (await this.configOnDisk.value).updaterCacheDirName, r = this._logger;
      n == null && r.error("updaterCacheDirName is not specified in app-update.yml Was app build using at least electron-builder 20.34.0?");
      const i = An.join(this.app.baseCachePath, n || this.app.name);
      r.debug != null && r.debug(`updater cache dir: ${i}`), t = new Ch.DownloadedUpdateHelper(i), this.downloadedUpdateHelper = t;
    }
    return t;
  }
  async executeDownload(t) {
    const n = t.fileInfo, r = {
      headers: t.downloadUpdateOptions.requestHeaders,
      cancellationToken: t.downloadUpdateOptions.cancellationToken,
      sha2: n.info.sha2,
      sha512: n.info.sha512
    };
    this.listenerCount(or.DOWNLOAD_PROGRESS) > 0 && (r.onProgress = (w) => this.emit(or.DOWNLOAD_PROGRESS, w));
    const i = t.downloadUpdateOptions.updateInfoAndProvider.info, a = i.version, o = n.packageInfo;
    function c() {
      const w = decodeURIComponent(t.fileInfo.url.pathname);
      return w.endsWith(`.${t.fileExtension}`) ? An.basename(w) : t.fileInfo.info.url;
    }
    const s = await this.getOrCreateDownloadHelper(), u = s.cacheDirForPendingUpdate;
    await (0, ar.mkdir)(u, { recursive: !0 });
    const l = c();
    let p = An.join(u, l);
    const d = o == null ? null : An.join(u, `package-${a}${An.extname(o.path) || ".7z"}`), m = async (w) => (await s.setDownloadedFile(p, d, i, n, l, w), await t.done({
      ...i,
      downloadedFile: p
    }), d == null ? [p] : [p, d]), g = this._logger, v = await s.validateDownloadedPath(p, i, n, g);
    if (v != null)
      return p = v, await m(!1);
    const y = async () => (await s.clear().catch(() => {
    }), await (0, ar.unlink)(p).catch(() => {
    })), x = await (0, Ch.createTempUpdateFile)(`temp-${l}`, u, g);
    try {
      await t.task(x, r, d, y), await (0, ze.retry)(() => (0, ar.rename)(x, p), 60, 500, 0, 0, (w) => w instanceof Error && /^EBUSY:/.test(w.message));
    } catch (w) {
      throw await y(), w instanceof ze.CancellationError && (g.info("cancelled"), this.emit("update-cancelled", i)), w;
    }
    return g.info(`New version ${a} has been downloaded to ${p}`), await m(!0);
  }
  async differentialDownloadInstaller(t, n, r, i, a) {
    try {
      if (this._testOnlyOptions != null && !this._testOnlyOptions.isUseDifferentialDownload)
        return !0;
      const o = (0, B3.blockmapFiles)(t.url, this.app.version, n.updateInfoAndProvider.info.version);
      this._logger.info(`Download block maps (old: "${o[0]}", new: ${o[1]})`);
      const c = async (l) => {
        const p = await this.httpExecutor.downloadToBuffer(l, {
          headers: n.requestHeaders,
          cancellationToken: n.cancellationToken
        });
        if (p == null || p.length === 0)
          throw new Error(`Blockmap "${l.href}" is empty`);
        try {
          return JSON.parse((0, U3.gunzipSync)(p).toString());
        } catch (d) {
          throw new Error(`Cannot parse blockmap "${l.href}", error: ${d}`);
        }
      }, s = {
        newUrl: t.url,
        oldFile: An.join(this.downloadedUpdateHelper.cacheDir, a),
        logger: this._logger,
        newFile: r,
        isUseMultipleRangeRequest: i.isUseMultipleRangeRequest,
        requestHeaders: n.requestHeaders,
        cancellationToken: n.cancellationToken
      };
      this.listenerCount(or.DOWNLOAD_PROGRESS) > 0 && (s.onProgress = (l) => this.emit(or.DOWNLOAD_PROGRESS, l));
      const u = await Promise.all(o.map((l) => c(l)));
      return await new j3.GenericDifferentialDownloader(t.info, this.httpExecutor, s).download(u[0], u[1]), !1;
    } catch (o) {
      if (this._logger.error(`Cannot download differentially, fallback to full download: ${o.stack || o}`), this._testOnlyOptions != null)
        throw o;
      return !0;
    }
  }
}
cn.AppUpdater = Xu;
function M3(e) {
  const t = (0, Cn.prerelease)(e);
  return t != null && t.length > 0;
}
class gx {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  info(t) {
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  warn(t) {
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  error(t) {
  }
}
cn.NoOpLogger = gx;
Object.defineProperty(Bt, "__esModule", { value: !0 });
Bt.BaseUpdater = void 0;
const $h = _o, q3 = cn;
class z3 extends q3.AppUpdater {
  constructor(t, n) {
    super(t, n), this.quitAndInstallCalled = !1, this.quitHandlerAdded = !1;
  }
  quitAndInstall(t = !1, n = !1) {
    this._logger.info("Install on explicit quitAndInstall"), this.install(t, t ? n : this.autoRunAppAfterInstall) ? setImmediate(() => {
      Bn.autoUpdater.emit("before-quit-for-update"), this.app.quit();
    }) : this.quitAndInstallCalled = !1;
  }
  executeDownload(t) {
    return super.executeDownload({
      ...t,
      done: (n) => (this.dispatchUpdateDownloaded(n), this.addQuitHandler(), Promise.resolve())
    });
  }
  get installerPath() {
    return this.downloadedUpdateHelper == null ? null : this.downloadedUpdateHelper.file;
  }
  // must be sync (because quit even handler is not async)
  install(t = !1, n = !1) {
    if (this.quitAndInstallCalled)
      return this._logger.warn("install call ignored: quitAndInstallCalled is set to true"), !1;
    const r = this.downloadedUpdateHelper, i = this.installerPath, a = r == null ? null : r.downloadedFileInfo;
    if (i == null || a == null)
      return this.dispatchError(new Error("No valid update available, can't quit and install")), !1;
    this.quitAndInstallCalled = !0;
    try {
      return this._logger.info(`Install: isSilent: ${t}, isForceRunAfter: ${n}`), this.doInstall({
        isSilent: t,
        isForceRunAfter: n,
        isAdminRightsRequired: a.isAdminRightsRequired
      });
    } catch (o) {
      return this.dispatchError(o), !1;
    }
  }
  addQuitHandler() {
    this.quitHandlerAdded || !this.autoInstallOnAppQuit || (this.quitHandlerAdded = !0, this.app.onQuit((t) => {
      if (this.quitAndInstallCalled) {
        this._logger.info("Update installer has already been triggered. Quitting application.");
        return;
      }
      if (!this.autoInstallOnAppQuit) {
        this._logger.info("Update will not be installed on quit because autoInstallOnAppQuit is set to false.");
        return;
      }
      if (t !== 0) {
        this._logger.info(`Update will be not installed on quit because application is quitting with exit code ${t}`);
        return;
      }
      this._logger.info("Auto install update on quit"), this.install(!0, !1);
    }));
  }
  wrapSudo() {
    const { name: t } = this.app, n = `"${t} would like to update"`, r = this.spawnSyncLog("which gksudo || which kdesudo || which pkexec || which beesu"), i = [r];
    return /kdesudo/i.test(r) ? (i.push("--comment", n), i.push("-c")) : /gksudo/i.test(r) ? i.push("--message", n) : /pkexec/i.test(r) && i.push("--disable-internal-agent"), i.join(" ");
  }
  spawnSyncLog(t, n = [], r = {}) {
    this._logger.info(`Executing: ${t} with args: ${n}`);
    const i = (0, $h.spawnSync)(t, n, {
      env: { ...process.env, ...r },
      encoding: "utf-8",
      shell: !0
    }), { error: a, status: o, stdout: c, stderr: s } = i;
    if (a != null)
      throw this._logger.error(s), a;
    if (o != null && o !== 0)
      throw this._logger.error(s), new Error(`Command ${t} exited with code ${o}`);
    return c.trim();
  }
  /**
   * This handles both node 8 and node 10 way of emitting error when spawning a process
   *   - node 8: Throws the error
   *   - node 10: Emit the error(Need to listen with on)
   */
  // https://github.com/electron-userland/electron-builder/issues/1129
  // Node 8 sends errors: https://nodejs.org/dist/latest-v8.x/docs/api/errors.html#errors_common_system_errors
  async spawnLog(t, n = [], r = void 0, i = "ignore") {
    return this._logger.info(`Executing: ${t} with args: ${n}`), new Promise((a, o) => {
      try {
        const c = { stdio: i, env: r, detached: !0 }, s = (0, $h.spawn)(t, n, c);
        s.on("error", (u) => {
          o(u);
        }), s.unref(), s.pid !== void 0 && a(!0);
      } catch (c) {
        o(c);
      }
    });
  }
}
Bt.BaseUpdater = z3;
var Si = {}, ea = {};
Object.defineProperty(ea, "__esModule", { value: !0 });
ea.FileWithEmbeddedBlockMapDifferentialDownloader = void 0;
const sr = vn, H3 = Qi, G3 = Qe;
class W3 extends H3.DifferentialDownloader {
  async download() {
    const t = this.blockAwareFileInfo, n = t.size, r = n - (t.blockMapSize + 4);
    this.fileMetadataBuffer = await this.readRemoteBytes(r, n - 1);
    const i = xx(this.fileMetadataBuffer.slice(0, this.fileMetadataBuffer.length - 4));
    await this.doDownload(await V3(this.options.oldFile), i);
  }
}
ea.FileWithEmbeddedBlockMapDifferentialDownloader = W3;
function xx(e) {
  return JSON.parse((0, G3.inflateRawSync)(e).toString());
}
async function V3(e) {
  const t = await (0, sr.open)(e, "r");
  try {
    const n = (await (0, sr.fstat)(t)).size, r = Buffer.allocUnsafe(4);
    await (0, sr.read)(t, r, 0, r.length, n - r.length);
    const i = Buffer.allocUnsafe(r.readUInt32BE(0));
    return await (0, sr.read)(t, i, 0, i.length, n - r.length - i.length), await (0, sr.close)(t), xx(i);
  } catch (n) {
    throw await (0, sr.close)(t), n;
  }
}
Object.defineProperty(Si, "__esModule", { value: !0 });
Si.AppImageUpdater = void 0;
const Ih = De, Ph = _o, Y3 = vn, X3 = oe, Qr = ae, K3 = Bt, J3 = ea, Z3 = Ce, Dh = gn;
class Q3 extends K3.BaseUpdater {
  constructor(t, n) {
    super(t, n);
  }
  isUpdaterActive() {
    return process.env.APPIMAGE == null ? (process.env.SNAP == null ? this._logger.warn("APPIMAGE env is not defined, current application is not an AppImage") : this._logger.info("SNAP env is defined, updater is disabled"), !1) : super.isUpdaterActive();
  }
  /*** @private */
  doDownloadUpdate(t) {
    const n = t.updateInfoAndProvider.provider, r = (0, Z3.findFile)(n.resolveFiles(t.updateInfoAndProvider.info), "AppImage", ["rpm", "deb", "pacman"]);
    return this.executeDownload({
      fileExtension: "AppImage",
      fileInfo: r,
      downloadUpdateOptions: t,
      task: async (i, a) => {
        const o = process.env.APPIMAGE;
        if (o == null)
          throw (0, Ih.newError)("APPIMAGE env is not defined", "ERR_UPDATER_OLD_FILE_NOT_FOUND");
        (t.disableDifferentialDownload || await this.downloadDifferential(r, o, i, n, t)) && await this.httpExecutor.download(r.url, i, a), await (0, Y3.chmod)(i, 493);
      }
    });
  }
  async downloadDifferential(t, n, r, i, a) {
    try {
      const o = {
        newUrl: t.url,
        oldFile: n,
        logger: this._logger,
        newFile: r,
        isUseMultipleRangeRequest: i.isUseMultipleRangeRequest,
        requestHeaders: a.requestHeaders,
        cancellationToken: a.cancellationToken
      };
      return this.listenerCount(Dh.DOWNLOAD_PROGRESS) > 0 && (o.onProgress = (c) => this.emit(Dh.DOWNLOAD_PROGRESS, c)), await new J3.FileWithEmbeddedBlockMapDifferentialDownloader(t.info, this.httpExecutor, o).download(), !1;
    } catch (o) {
      return this._logger.error(`Cannot download differentially, fallback to full download: ${o.stack || o}`), process.platform === "linux";
    }
  }
  doInstall(t) {
    const n = process.env.APPIMAGE;
    if (n == null)
      throw (0, Ih.newError)("APPIMAGE env is not defined", "ERR_UPDATER_OLD_FILE_NOT_FOUND");
    (0, X3.unlinkSync)(n);
    let r;
    const i = Qr.basename(n), a = this.installerPath;
    if (a == null)
      return this.dispatchError(new Error("No valid update available, can't quit and install")), !1;
    Qr.basename(a) === i || !/\d+\.\d+\.\d+/.test(i) ? r = n : r = Qr.join(Qr.dirname(n), Qr.basename(a)), (0, Ph.execFileSync)("mv", ["-f", a, r]), r !== n && this.emit("appimage-filename-updated", r);
    const o = {
      ...process.env,
      APPIMAGE_SILENT_INSTALL: "true"
    };
    return t.isForceRunAfter ? this.spawnLog(r, [], o) : (o.APPIMAGE_EXIT_AFTER_INSTALL = "true", (0, Ph.execFileSync)(r, [], { env: o })), !0;
  }
}
Si.AppImageUpdater = Q3;
var Ti = {};
Object.defineProperty(Ti, "__esModule", { value: !0 });
Ti.DebUpdater = void 0;
const eI = Bt, tI = Ce, Fh = gn;
class nI extends eI.BaseUpdater {
  constructor(t, n) {
    super(t, n);
  }
  /*** @private */
  doDownloadUpdate(t) {
    const n = t.updateInfoAndProvider.provider, r = (0, tI.findFile)(n.resolveFiles(t.updateInfoAndProvider.info), "deb", ["AppImage", "rpm", "pacman"]);
    return this.executeDownload({
      fileExtension: "deb",
      fileInfo: r,
      downloadUpdateOptions: t,
      task: async (i, a) => {
        this.listenerCount(Fh.DOWNLOAD_PROGRESS) > 0 && (a.onProgress = (o) => this.emit(Fh.DOWNLOAD_PROGRESS, o)), await this.httpExecutor.download(r.url, i, a);
      }
    });
  }
  get installerPath() {
    var t, n;
    return (n = (t = super.installerPath) === null || t === void 0 ? void 0 : t.replace(/ /g, "\\ ")) !== null && n !== void 0 ? n : null;
  }
  doInstall(t) {
    const n = this.wrapSudo(), r = /pkexec/i.test(n) ? "" : '"', i = this.installerPath;
    if (i == null)
      return this.dispatchError(new Error("No valid update available, can't quit and install")), !1;
    const a = ["dpkg", "-i", i, "||", "apt-get", "install", "-f", "-y"];
    return this.spawnSyncLog(n, [`${r}/bin/bash`, "-c", `'${a.join(" ")}'${r}`]), t.isForceRunAfter && this.app.relaunch(), !0;
  }
}
Ti.DebUpdater = nI;
var Ai = {};
Object.defineProperty(Ai, "__esModule", { value: !0 });
Ai.PacmanUpdater = void 0;
const rI = Bt, Nh = gn, iI = Ce;
class aI extends rI.BaseUpdater {
  constructor(t, n) {
    super(t, n);
  }
  /*** @private */
  doDownloadUpdate(t) {
    const n = t.updateInfoAndProvider.provider, r = (0, iI.findFile)(n.resolveFiles(t.updateInfoAndProvider.info), "pacman", ["AppImage", "deb", "rpm"]);
    return this.executeDownload({
      fileExtension: "pacman",
      fileInfo: r,
      downloadUpdateOptions: t,
      task: async (i, a) => {
        this.listenerCount(Nh.DOWNLOAD_PROGRESS) > 0 && (a.onProgress = (o) => this.emit(Nh.DOWNLOAD_PROGRESS, o)), await this.httpExecutor.download(r.url, i, a);
      }
    });
  }
  get installerPath() {
    var t, n;
    return (n = (t = super.installerPath) === null || t === void 0 ? void 0 : t.replace(/ /g, "\\ ")) !== null && n !== void 0 ? n : null;
  }
  doInstall(t) {
    const n = this.wrapSudo(), r = /pkexec/i.test(n) ? "" : '"', i = this.installerPath;
    if (i == null)
      return this.dispatchError(new Error("No valid update available, can't quit and install")), !1;
    const a = ["pacman", "-U", "--noconfirm", i];
    return this.spawnSyncLog(n, [`${r}/bin/bash`, "-c", `'${a.join(" ")}'${r}`]), t.isForceRunAfter && this.app.relaunch(), !0;
  }
}
Ai.PacmanUpdater = aI;
var Ri = {};
Object.defineProperty(Ri, "__esModule", { value: !0 });
Ri.RpmUpdater = void 0;
const oI = Bt, kh = gn, sI = Ce;
class cI extends oI.BaseUpdater {
  constructor(t, n) {
    super(t, n);
  }
  /*** @private */
  doDownloadUpdate(t) {
    const n = t.updateInfoAndProvider.provider, r = (0, sI.findFile)(n.resolveFiles(t.updateInfoAndProvider.info), "rpm", ["AppImage", "deb", "pacman"]);
    return this.executeDownload({
      fileExtension: "rpm",
      fileInfo: r,
      downloadUpdateOptions: t,
      task: async (i, a) => {
        this.listenerCount(kh.DOWNLOAD_PROGRESS) > 0 && (a.onProgress = (o) => this.emit(kh.DOWNLOAD_PROGRESS, o)), await this.httpExecutor.download(r.url, i, a);
      }
    });
  }
  get installerPath() {
    var t, n;
    return (n = (t = super.installerPath) === null || t === void 0 ? void 0 : t.replace(/ /g, "\\ ")) !== null && n !== void 0 ? n : null;
  }
  doInstall(t) {
    const n = this.wrapSudo(), r = /pkexec/i.test(n) ? "" : '"', i = this.spawnSyncLog("which zypper"), a = this.installerPath;
    if (a == null)
      return this.dispatchError(new Error("No valid update available, can't quit and install")), !1;
    let o;
    return i ? o = [i, "--no-refresh", "install", "--allow-unsigned-rpm", "-y", "-f", a] : o = [this.spawnSyncLog("which dnf || which yum"), "-y", "install", a], this.spawnSyncLog(n, [`${r}/bin/bash`, "-c", `'${o.join(" ")}'${r}`]), t.isForceRunAfter && this.app.relaunch(), !0;
  }
}
Ri.RpmUpdater = cI;
var Ci = {};
Object.defineProperty(Ci, "__esModule", { value: !0 });
Ci.MacUpdater = void 0;
const Lh = De, Jc = vn, lI = oe, Uh = ae, uI = bo, pI = cn, fI = Ce, Bh = _o, jh = Dr;
class dI extends pI.AppUpdater {
  constructor(t, n) {
    super(t, n), this.nativeUpdater = Bn.autoUpdater, this.squirrelDownloadedUpdate = !1, this.nativeUpdater.on("error", (r) => {
      this._logger.warn(r), this.emit("error", r);
    }), this.nativeUpdater.on("update-downloaded", () => {
      this.squirrelDownloadedUpdate = !0, this.debug("nativeUpdater.update-downloaded");
    });
  }
  debug(t) {
    this._logger.debug != null && this._logger.debug(t);
  }
  closeServerIfExists() {
    this.server && (this.debug("Closing proxy server"), this.server.close((t) => {
      t && this.debug("proxy server wasn't already open, probably attempted closing again as a safety check before quit");
    }));
  }
  async doDownloadUpdate(t) {
    let n = t.updateInfoAndProvider.provider.resolveFiles(t.updateInfoAndProvider.info);
    const r = this._logger, i = "sysctl.proc_translated";
    let a = !1;
    try {
      this.debug("Checking for macOS Rosetta environment"), a = (0, Bh.execFileSync)("sysctl", [i], { encoding: "utf8" }).includes(`${i}: 1`), r.info(`Checked for macOS Rosetta environment (isRosetta=${a})`);
    } catch (p) {
      r.warn(`sysctl shell command to check for macOS Rosetta environment failed: ${p}`);
    }
    let o = !1;
    try {
      this.debug("Checking for arm64 in uname");
      const d = (0, Bh.execFileSync)("uname", ["-a"], { encoding: "utf8" }).includes("ARM");
      r.info(`Checked 'uname -a': arm64=${d}`), o = o || d;
    } catch (p) {
      r.warn(`uname shell command to check for arm64 failed: ${p}`);
    }
    o = o || process.arch === "arm64" || a;
    const c = (p) => {
      var d;
      return p.url.pathname.includes("arm64") || ((d = p.info.url) === null || d === void 0 ? void 0 : d.includes("arm64"));
    };
    o && n.some(c) ? n = n.filter((p) => o === c(p)) : n = n.filter((p) => !c(p));
    const s = (0, fI.findFile)(n, "zip", ["pkg", "dmg"]);
    if (s == null)
      throw (0, Lh.newError)(`ZIP file not provided: ${(0, Lh.safeStringifyJson)(n)}`, "ERR_UPDATER_ZIP_FILE_NOT_FOUND");
    const u = t.updateInfoAndProvider.provider, l = "update.zip";
    return this.executeDownload({
      fileExtension: "zip",
      fileInfo: s,
      downloadUpdateOptions: t,
      task: async (p, d) => {
        const m = Uh.join(this.downloadedUpdateHelper.cacheDir, l), g = () => (0, Jc.pathExistsSync)(m) ? !t.disableDifferentialDownload : (r.info("Unable to locate previous update.zip for differential download (is this first install?), falling back to full download"), !1);
        let v = !0;
        g() && (v = await this.differentialDownloadInstaller(s, t, p, u, l)), v && await this.httpExecutor.download(s.url, p, d);
      },
      done: async (p) => {
        if (!t.disableDifferentialDownload)
          try {
            const d = Uh.join(this.downloadedUpdateHelper.cacheDir, l);
            await (0, Jc.copyFile)(p.downloadedFile, d);
          } catch (d) {
            this._logger.warn(`Unable to copy file for caching for future differential downloads: ${d.message}`);
          }
        return this.updateDownloaded(s, p);
      }
    });
  }
  async updateDownloaded(t, n) {
    var r;
    const i = n.downloadedFile, a = (r = t.info.size) !== null && r !== void 0 ? r : (await (0, Jc.stat)(i)).size, o = this._logger, c = `fileToProxy=${t.url.href}`;
    this.closeServerIfExists(), this.debug(`Creating proxy server for native Squirrel.Mac (${c})`), this.server = (0, uI.createServer)(), this.debug(`Proxy server for native Squirrel.Mac is created (${c})`), this.server.on("close", () => {
      o.info(`Proxy server for native Squirrel.Mac is closed (${c})`);
    });
    const s = (u) => {
      const l = u.address();
      return typeof l == "string" ? l : `http://127.0.0.1:${l == null ? void 0 : l.port}`;
    };
    return await new Promise((u, l) => {
      const p = (0, jh.randomBytes)(64).toString("base64").replace(/\//g, "_").replace(/\+/g, "-"), d = Buffer.from(`autoupdater:${p}`, "ascii"), m = `/${(0, jh.randomBytes)(64).toString("hex")}.zip`;
      this.server.on("request", (g, v) => {
        const y = g.url;
        if (o.info(`${y} requested`), y === "/") {
          if (!g.headers.authorization || g.headers.authorization.indexOf("Basic ") === -1) {
            v.statusCode = 401, v.statusMessage = "Invalid Authentication Credentials", v.end(), o.warn("No authenthication info");
            return;
          }
          const A = g.headers.authorization.split(" ")[1], O = Buffer.from(A, "base64").toString("ascii"), [k, q] = O.split(":");
          if (k !== "autoupdater" || q !== p) {
            v.statusCode = 401, v.statusMessage = "Invalid Authentication Credentials", v.end(), o.warn("Invalid authenthication credentials");
            return;
          }
          const W = Buffer.from(`{ "url": "${s(this.server)}${m}" }`);
          v.writeHead(200, { "Content-Type": "application/json", "Content-Length": W.length }), v.end(W);
          return;
        }
        if (!y.startsWith(m)) {
          o.warn(`${y} requested, but not supported`), v.writeHead(404), v.end();
          return;
        }
        o.info(`${m} requested by Squirrel.Mac, pipe ${i}`);
        let x = !1;
        v.on("finish", () => {
          x || (this.nativeUpdater.removeListener("error", l), u([]));
        });
        const w = (0, lI.createReadStream)(i);
        w.on("error", (A) => {
          try {
            v.end();
          } catch (O) {
            o.warn(`cannot end response: ${O}`);
          }
          x = !0, this.nativeUpdater.removeListener("error", l), l(new Error(`Cannot pipe "${i}": ${A}`));
        }), v.writeHead(200, {
          "Content-Type": "application/zip",
          "Content-Length": a
        }), w.pipe(v);
      }), this.debug(`Proxy server for native Squirrel.Mac is starting to listen (${c})`), this.server.listen(0, "127.0.0.1", () => {
        this.debug(`Proxy server for native Squirrel.Mac is listening (address=${s(this.server)}, ${c})`), this.nativeUpdater.setFeedURL({
          url: s(this.server),
          headers: {
            "Cache-Control": "no-cache",
            Authorization: `Basic ${d.toString("base64")}`
          }
        }), this.dispatchUpdateDownloaded(n), this.autoInstallOnAppQuit ? (this.nativeUpdater.once("error", l), this.nativeUpdater.checkForUpdates()) : u([]);
      });
    });
  }
  handleUpdateDownloaded() {
    this.autoRunAppAfterInstall ? this.nativeUpdater.quitAndInstall() : this.app.quit(), this.closeServerIfExists();
  }
  quitAndInstall() {
    this.squirrelDownloadedUpdate ? this.handleUpdateDownloaded() : (this.nativeUpdater.on("update-downloaded", () => this.handleUpdateDownloaded()), this.autoInstallOnAppQuit || this.nativeUpdater.checkForUpdates());
  }
}
Ci.MacUpdater = dI;
var Oi = {}, Ku = {};
Object.defineProperty(Ku, "__esModule", { value: !0 });
Ku.verifySignature = mI;
const Mh = De, yx = _o, hI = Eo, qh = ae;
function mI(e, t, n) {
  return new Promise((r, i) => {
    const a = t.replace(/'/g, "''");
    n.info(`Verifying signature ${a}`), (0, yx.execFile)('set "PSModulePath=" & chcp 65001 >NUL & powershell.exe', ["-NoProfile", "-NonInteractive", "-InputFormat", "None", "-Command", `"Get-AuthenticodeSignature -LiteralPath '${a}' | ConvertTo-Json -Compress"`], {
      shell: !0,
      timeout: 20 * 1e3
    }, (o, c, s) => {
      var u;
      try {
        if (o != null || s) {
          Zc(n, o, s, i), r(null);
          return;
        }
        const l = vI(c);
        if (l.Status === 0) {
          try {
            const g = qh.normalize(l.Path), v = qh.normalize(t);
            if (n.info(`LiteralPath: ${g}. Update Path: ${v}`), g !== v) {
              Zc(n, new Error(`LiteralPath of ${g} is different than ${v}`), s, i), r(null);
              return;
            }
          } catch (g) {
            n.warn(`Unable to verify LiteralPath of update asset due to missing data.Path. Skipping this step of validation. Message: ${(u = g.message) !== null && u !== void 0 ? u : g.stack}`);
          }
          const d = (0, Mh.parseDn)(l.SignerCertificate.Subject);
          let m = !1;
          for (const g of e) {
            const v = (0, Mh.parseDn)(g);
            if (v.size ? m = Array.from(v.keys()).every((x) => v.get(x) === d.get(x)) : g === d.get("CN") && (n.warn(`Signature validated using only CN ${g}. Please add your full Distinguished Name (DN) to publisherNames configuration`), m = !0), m) {
              r(null);
              return;
            }
          }
        }
        const p = `publisherNames: ${e.join(" | ")}, raw info: ` + JSON.stringify(l, (d, m) => d === "RawData" ? void 0 : m, 2);
        n.warn(`Sign verification failed, installer signed with incorrect certificate: ${p}`), r(p);
      } catch (l) {
        Zc(n, l, null, i), r(null);
        return;
      }
    });
  });
}
function vI(e) {
  const t = JSON.parse(e);
  delete t.PrivateKey, delete t.IsOSBinary, delete t.SignatureType;
  const n = t.SignerCertificate;
  return n != null && (delete n.Archived, delete n.Extensions, delete n.Handle, delete n.HasPrivateKey, delete n.SubjectName), t;
}
function Zc(e, t, n, r) {
  if (gI()) {
    e.warn(`Cannot execute Get-AuthenticodeSignature: ${t || n}. Ignoring signature validation due to unsupported powershell version. Please upgrade to powershell 3 or higher.`);
    return;
  }
  try {
    (0, yx.execFileSync)("powershell.exe", ["-NoProfile", "-NonInteractive", "-Command", "ConvertTo-Json test"], { timeout: 10 * 1e3 });
  } catch (i) {
    e.warn(`Cannot execute ConvertTo-Json: ${i.message}. Ignoring signature validation due to unsupported powershell version. Please upgrade to powershell 3 or higher.`);
    return;
  }
  t != null && r(t), n && r(new Error(`Cannot execute Get-AuthenticodeSignature, stderr: ${n}. Failing signature validation due to unknown stderr.`));
}
function gI() {
  const e = hI.release();
  return e.startsWith("6.") && !e.startsWith("6.3");
}
Object.defineProperty(Oi, "__esModule", { value: !0 });
Oi.NsisUpdater = void 0;
const La = De, zh = ae, xI = Bt, yI = ea, Hh = gn, bI = Ce, wI = vn, EI = Ku, Gh = At;
class _I extends xI.BaseUpdater {
  constructor(t, n) {
    super(t, n), this._verifyUpdateCodeSignature = (r, i) => (0, EI.verifySignature)(r, i, this._logger);
  }
  /**
   * The verifyUpdateCodeSignature. You can pass [win-verify-signature](https://github.com/beyondkmp/win-verify-trust) or another custom verify function: ` (publisherName: string[], path: string) => Promise<string | null>`.
   * The default verify function uses [windowsExecutableCodeSignatureVerifier](https://github.com/electron-userland/electron-builder/blob/master/packages/electron-updater/src/windowsExecutableCodeSignatureVerifier.ts)
   */
  get verifyUpdateCodeSignature() {
    return this._verifyUpdateCodeSignature;
  }
  set verifyUpdateCodeSignature(t) {
    t && (this._verifyUpdateCodeSignature = t);
  }
  /*** @private */
  doDownloadUpdate(t) {
    const n = t.updateInfoAndProvider.provider, r = (0, bI.findFile)(n.resolveFiles(t.updateInfoAndProvider.info), "exe");
    return this.executeDownload({
      fileExtension: "exe",
      downloadUpdateOptions: t,
      fileInfo: r,
      task: async (i, a, o, c) => {
        const s = r.packageInfo, u = s != null && o != null;
        if (u && t.disableWebInstaller)
          throw (0, La.newError)(`Unable to download new version ${t.updateInfoAndProvider.info.version}. Web Installers are disabled`, "ERR_UPDATER_WEB_INSTALLER_DISABLED");
        !u && !t.disableWebInstaller && this._logger.warn("disableWebInstaller is set to false, you should set it to true if you do not plan on using a web installer. This will default to true in a future version."), (u || t.disableDifferentialDownload || await this.differentialDownloadInstaller(r, t, i, n, La.CURRENT_APP_INSTALLER_FILE_NAME)) && await this.httpExecutor.download(r.url, i, a);
        const l = await this.verifySignature(i);
        if (l != null)
          throw await c(), (0, La.newError)(`New version ${t.updateInfoAndProvider.info.version} is not signed by the application owner: ${l}`, "ERR_UPDATER_INVALID_SIGNATURE");
        if (u && await this.differentialDownloadWebPackage(t, s, o, n))
          try {
            await this.httpExecutor.download(new Gh.URL(s.path), o, {
              headers: t.requestHeaders,
              cancellationToken: t.cancellationToken,
              sha512: s.sha512
            });
          } catch (p) {
            try {
              await (0, wI.unlink)(o);
            } catch {
            }
            throw p;
          }
      }
    });
  }
  // $certificateInfo = (Get-AuthenticodeSignature 'xxx\yyy.exe'
  // | where {$_.Status.Equals([System.Management.Automation.SignatureStatus]::Valid) -and $_.SignerCertificate.Subject.Contains("CN=siemens.com")})
  // | Out-String ; if ($certificateInfo) { exit 0 } else { exit 1 }
  async verifySignature(t) {
    let n;
    try {
      if (n = (await this.configOnDisk.value).publisherName, n == null)
        return null;
    } catch (r) {
      if (r.code === "ENOENT")
        return null;
      throw r;
    }
    return await this._verifyUpdateCodeSignature(Array.isArray(n) ? n : [n], t);
  }
  doInstall(t) {
    const n = this.installerPath;
    if (n == null)
      return this.dispatchError(new Error("No valid update available, can't quit and install")), !1;
    const r = ["--updated"];
    t.isSilent && r.push("/S"), t.isForceRunAfter && r.push("--force-run"), this.installDirectory && r.push(`/D=${this.installDirectory}`);
    const i = this.downloadedUpdateHelper == null ? null : this.downloadedUpdateHelper.packageFile;
    i != null && r.push(`--package-file=${i}`);
    const a = () => {
      this.spawnLog(zh.join(process.resourcesPath, "elevate.exe"), [n].concat(r)).catch((o) => this.dispatchError(o));
    };
    return t.isAdminRightsRequired ? (this._logger.info("isAdminRightsRequired is set to true, run installer using elevate.exe"), a(), !0) : (this.spawnLog(n, r).catch((o) => {
      const c = o.code;
      this._logger.info(`Cannot run installer: error code: ${c}, error message: "${o.message}", will be executed again using elevate if EACCES, and will try to use electron.shell.openItem if ENOENT`), c === "UNKNOWN" || c === "EACCES" ? a() : c === "ENOENT" ? Bn.shell.openPath(n).catch((s) => this.dispatchError(s)) : this.dispatchError(o);
    }), !0);
  }
  async differentialDownloadWebPackage(t, n, r, i) {
    if (n.blockMapSize == null)
      return !0;
    try {
      const a = {
        newUrl: new Gh.URL(n.path),
        oldFile: zh.join(this.downloadedUpdateHelper.cacheDir, La.CURRENT_APP_PACKAGE_FILE_NAME),
        logger: this._logger,
        newFile: r,
        requestHeaders: this.requestHeaders,
        isUseMultipleRangeRequest: i.isUseMultipleRangeRequest,
        cancellationToken: t.cancellationToken
      };
      this.listenerCount(Hh.DOWNLOAD_PROGRESS) > 0 && (a.onProgress = (o) => this.emit(Hh.DOWNLOAD_PROGRESS, o)), await new yI.FileWithEmbeddedBlockMapDifferentialDownloader(n, this.httpExecutor, a).download();
    } catch (a) {
      return this._logger.error(`Cannot download differentially, fallback to full download: ${a.stack || a}`), process.platform === "win32";
    }
    return !1;
  }
}
Oi.NsisUpdater = _I;
(function(e) {
  var t = Te && Te.__createBinding || (Object.create ? function(y, x, w, A) {
    A === void 0 && (A = w);
    var O = Object.getOwnPropertyDescriptor(x, w);
    (!O || ("get" in O ? !x.__esModule : O.writable || O.configurable)) && (O = { enumerable: !0, get: function() {
      return x[w];
    } }), Object.defineProperty(y, A, O);
  } : function(y, x, w, A) {
    A === void 0 && (A = w), y[A] = x[w];
  }), n = Te && Te.__exportStar || function(y, x) {
    for (var w in y) w !== "default" && !Object.prototype.hasOwnProperty.call(x, w) && t(x, y, w);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.NsisUpdater = e.MacUpdater = e.RpmUpdater = e.PacmanUpdater = e.DebUpdater = e.AppImageUpdater = e.Provider = e.NoOpLogger = e.AppUpdater = e.BaseUpdater = void 0;
  const r = vn, i = ae;
  var a = Bt;
  Object.defineProperty(e, "BaseUpdater", { enumerable: !0, get: function() {
    return a.BaseUpdater;
  } });
  var o = cn;
  Object.defineProperty(e, "AppUpdater", { enumerable: !0, get: function() {
    return o.AppUpdater;
  } }), Object.defineProperty(e, "NoOpLogger", { enumerable: !0, get: function() {
    return o.NoOpLogger;
  } });
  var c = Ce;
  Object.defineProperty(e, "Provider", { enumerable: !0, get: function() {
    return c.Provider;
  } });
  var s = Si;
  Object.defineProperty(e, "AppImageUpdater", { enumerable: !0, get: function() {
    return s.AppImageUpdater;
  } });
  var u = Ti;
  Object.defineProperty(e, "DebUpdater", { enumerable: !0, get: function() {
    return u.DebUpdater;
  } });
  var l = Ai;
  Object.defineProperty(e, "PacmanUpdater", { enumerable: !0, get: function() {
    return l.PacmanUpdater;
  } });
  var p = Ri;
  Object.defineProperty(e, "RpmUpdater", { enumerable: !0, get: function() {
    return p.RpmUpdater;
  } });
  var d = Ci;
  Object.defineProperty(e, "MacUpdater", { enumerable: !0, get: function() {
    return d.MacUpdater;
  } });
  var m = Oi;
  Object.defineProperty(e, "NsisUpdater", { enumerable: !0, get: function() {
    return m.NsisUpdater;
  } }), n(gn, e);
  let g;
  function v() {
    if (process.platform === "win32")
      g = new Oi.NsisUpdater();
    else if (process.platform === "darwin")
      g = new Ci.MacUpdater();
    else {
      g = new Si.AppImageUpdater();
      try {
        const y = i.join(process.resourcesPath, "package-type");
        if (!(0, r.existsSync)(y))
          return g;
        console.info("Checking for beta autoupdate feature for deb/rpm distributions");
        const x = (0, r.readFileSync)(y).toString().trim();
        switch (console.info("Found package-type:", x), x) {
          case "deb":
            g = new Ti.DebUpdater();
            break;
          case "rpm":
            g = new Ri.RpmUpdater();
            break;
          case "pacman":
            g = new Ai.PacmanUpdater();
            break;
          default:
            break;
        }
      } catch (y) {
        console.warn("Unable to detect 'package-type' for autoUpdater (beta rpm/deb support). If you'd like to expand support, please consider contributing to electron-builder", y.message);
      }
    }
    return g;
  }
  Object.defineProperty(e, "autoUpdater", {
    enumerable: !0,
    get: () => g || v()
  });
})(wt);
class SI extends dv {
  constructor(n) {
    super(n);
    xe(this, "updateInProgress");
    xe(this, "proxyurl");
    xe(this, "is_download");
    xe(this, "setUpdatSetFeedUrl", async () => {
      var i, a;
      const n = await this.getLatestVersion();
      this.sendLog(`获取到最新版本号: ${n}`);
      const r = (i = this.runConfig) != null && i.proxy_url ? ((a = this.runConfig) == null ? void 0 : a.proxy_url) + "/" : "";
      if (n) {
        const o = `${r}https://github.com/forget-pro/sync-code-tool/releases/download/${n}`;
        if (o === this.proxyurl) return;
        this.proxyurl = o, wt.autoUpdater.setFeedURL({
          provider: "generic",
          url: o,
          requestHeaders: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36"
          }
        }), this.sendLog("设置更新地址成功", "INFO");
      }
    });
    // 获取最新的APP版本号
    xe(this, "getLatestVersion", async () => {
      try {
        const r = await Ee.get("https://api.github.com/repos/forget-pro/sync-code-tool/releases", { timeout: 6e3 });
        return r.status !== 200 ? (this.sendLog("获取最新版本失败", "ERROR"), null) : (r.data.filter((o) => /^app-v/.test(o.tag_name))[0] || null).tag_name || null;
      } catch (n) {
        return this.sendLog(n.message, "ERROR"), null;
      }
    });
    // 检查更新
    xe(this, "checkElectronUpdate", async () => {
      try {
        if (!rn.isPackaged) return 0;
        if (this.updateInProgress) return 2;
        if (this.is_download) return 3;
        this.updateInProgress = !0, await this.setUpdatSetFeedUrl();
        const n = await wt.autoUpdater.checkForUpdatesAndNotify();
        return this.updateInProgress = !1, wt.autoUpdater.on("checking-for-update", () => {
          var r;
          (r = this.windown) == null || r.webContents.send("main-process-message", "🕵️ 正在检查更新...");
        }), wt.autoUpdater.on("update-available", () => {
          var r;
          (r = this.windown) == null || r.webContents.send("main-process-message", "update-available");
        }), wt.autoUpdater.on("update-not-available", () => {
          var r;
          (r = this.windown) == null || r.webContents.send("main-process-message", "update-not-available");
        }), wt.autoUpdater.on("download-progress", () => {
          this.is_download = !0;
        }), wt.autoUpdater.on("error", (r) => {
          var i;
          this.is_download = !1, this.updateInProgress = !1, (i = this.windown) == null || i.webContents.send("main-process-message", r.message);
        }), wt.autoUpdater.on("update-downloaded", () => {
          this.is_download = !1, Wh.showMessageBox({
            type: "info",
            title: "更新已下载",
            message: "新版本已准备好，是否现在安装？",
            buttons: ["安装并重启", "稍后"]
          }).then((r) => {
            r.response === 0 && wt.autoUpdater.quitAndInstall(), this.updateInProgress = !1;
          });
        }), n && (n == null ? void 0 : n.updateInfo.version) !== rn.getVersion() ? 1 : 0;
      } catch (n) {
        this.updateInProgress = !1, this.sendLog(n.message, "ERROR");
      }
    });
    this.updateInProgress = !1, this.proxyurl = "", this.is_download = !1;
  }
}
Yh(import.meta.url);
const bx = ot.dirname(Ay(import.meta.url));
process.env.APP_ROOT = ot.join(bx, "..");
const Fl = process.env.VITE_DEV_SERVER_URL, TP = ot.join(process.env.APP_ROOT, "dist-electron"), wx = ot.join(process.env.APP_ROOT, "dist");
process.env.VITE_PUBLIC = Fl ? ot.join(process.env.APP_ROOT, "public") : wx;
let at, ye = null, Ua = null;
function Ex() {
  at = new Vh({
    width: 1200,
    height: 800,
    minWidth: 1200,
    minHeight: 800,
    icon: ot.join(process.env.VITE_PUBLIC || "", "logo.png"),
    webPreferences: {
      preload: ot.join(bx, "preload.mjs")
    }
  }), ye = new dv(at), Ua = new SI(at), at.webContents.on("did-finish-load", () => {
    Ua == null || Ua.checkElectronUpdate(), ye == null || ye.reportConfig(), ye == null || ye.sendLog("🚀 初始化成功");
  }), Ty.register("CommandOrControl+Shift+I", () => {
    at == null || at.webContents.toggleDevTools();
  }), Fl ? (at.loadURL(Fl), at.webContents.openDevTools()) : at.loadFile(ot.join(wx, "index.html"));
}
zn.handle("downloadFile", async (e, t) => {
  const n = ot.join(rn.getPath("documents"), "code-sync"), r = ot.join(n, `${t.type}/${t.appid}`);
  vp.existsSync(r) || vp.mkdirSync(r, { recursive: !0 });
  const i = ot.join(r, "code.tar.gz"), a = await (ye == null ? void 0 : ye.downloadFile(t.url, i));
  return {
    path: i,
    result: a
  };
});
zn.handle("unzipFile", async (e, t) => await (ye == null ? void 0 : ye.unzipFile(t.filepath, ot.dirname(t.filepath))));
zn.handle("DevToolsOpen", async (e, t) => {
  ye == null || ye.startDevTool(t.type, t.url);
});
zn.handle("open:url", (e, t) => {
  Sy.openExternal(t);
});
zn.handle("saveConfig", (e, t) => {
  ye == null || ye.writeConfig(t);
});
zn.handle("getConfig", () => (ye == null ? void 0 : ye.reportConfig()) || {});
zn.handle("dialog:open", async (e, t) => {
  const n = await Wh.showOpenDialog(at, {
    title: "请选择",
    properties: [t, "showHiddenFiles", "createDirectory", "treatPackageAsDirectory"],
    filters: [
      { name: "应用程序", extensions: ["app"] },
      { name: "所有文件", extensions: ["*"] }
    ]
  });
  if (n.filePaths.length)
    return n.filePaths[0];
});
rn.on("window-all-closed", () => {
  process.platform !== "darwin" && (rn.quit(), at = null);
});
rn.on("activate", () => {
  Vh.getAllWindows().length === 0 && Ex();
});
rn.whenReady().then(Ex);
export {
  TP as MAIN_DIST,
  wx as RENDERER_DIST,
  Fl as VITE_DEV_SERVER_URL
};
