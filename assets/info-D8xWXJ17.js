var Ps = Object.defineProperty;
var Os = (e, t, r) =>
  t in e
    ? Ps(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
    : (e[t] = r);
var E = (e, t, r) => Os(e, typeof t != "symbol" ? t + "" : t, r);
import { a4 as dr, a8 as fe, L as xs, J as fr } from "./index-w58kBX-A.js";
import {
  D as Is,
  A as gr,
  a as Ns,
  b as Ks,
  c as Us,
  d as Fs,
  e as Gs,
  f as Ws,
  g as Ys,
} from "./SparkLinkV1-BZE96y6t.js";
import "./three-core-Cz6MriGW.js";
var Me =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Hs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var pr = { exports: {} },
  yr,
  _r = { exports: {} };
function G() {
  return (
    yr ||
      ((yr = 1),
      (_r.exports =
        ((e =
          e ||
          (function (t, r) {
            var n;
            if (
              (typeof window < "u" && window.crypto && (n = window.crypto),
              typeof self < "u" && self.crypto && (n = self.crypto),
              typeof globalThis < "u" &&
                globalThis.crypto &&
                (n = globalThis.crypto),
              !n &&
                typeof window < "u" &&
                window.msCrypto &&
                (n = window.msCrypto),
              !n && Me !== void 0 && Me.crypto && (n = Me.crypto),
              !n)
            )
              try {
                n = require("crypto");
              } catch {}
            var s = function () {
                if (n) {
                  if (typeof n.getRandomValues == "function")
                    try {
                      return n.getRandomValues(new Uint32Array(1))[0];
                    } catch {}
                  if (typeof n.randomBytes == "function")
                    try {
                      return n.randomBytes(4).readInt32LE();
                    } catch {}
                }
                throw new Error(
                  "Native crypto module could not be used to get secure random number."
                );
              },
              i =
                Object.create ||
                (function () {
                  function g() {}
                  return function (y) {
                    var R;
                    return (
                      (g.prototype = y), (R = new g()), (g.prototype = null), R
                    );
                  };
                })(),
              o = {},
              a = (o.lib = {}),
              l = (a.Base = {
                extend: function (g) {
                  var y = i(this);
                  return (
                    g && y.mixIn(g),
                    (y.hasOwnProperty("init") && this.init !== y.init) ||
                      (y.init = function () {
                        y.$super.init.apply(this, arguments);
                      }),
                    (y.init.prototype = y),
                    (y.$super = this),
                    y
                  );
                },
                create: function () {
                  var g = this.extend();
                  return g.init.apply(g, arguments), g;
                },
                init: function () {},
                mixIn: function (g) {
                  for (var y in g) g.hasOwnProperty(y) && (this[y] = g[y]);
                  g.hasOwnProperty("toString") && (this.toString = g.toString);
                },
                clone: function () {
                  return this.init.prototype.extend(this);
                },
              }),
              c = (a.WordArray = l.extend({
                init: function (g, y) {
                  (g = this.words = g || []),
                    (this.sigBytes = y != r ? y : 4 * g.length);
                },
                toString: function (g) {
                  return (g || h).stringify(this);
                },
                concat: function (g) {
                  var y = this.words,
                    R = g.words,
                    w = this.sigBytes,
                    _ = g.sigBytes;
                  if ((this.clamp(), w % 4))
                    for (var m = 0; m < _; m++) {
                      var B = (R[m >>> 2] >>> (24 - (m % 4) * 8)) & 255;
                      y[(w + m) >>> 2] |= B << (24 - ((w + m) % 4) * 8);
                    }
                  else
                    for (var D = 0; D < _; D += 4)
                      y[(w + D) >>> 2] = R[D >>> 2];
                  return (this.sigBytes += _), this;
                },
                clamp: function () {
                  var g = this.words,
                    y = this.sigBytes;
                  (g[y >>> 2] &= 4294967295 << (32 - (y % 4) * 8)),
                    (g.length = t.ceil(y / 4));
                },
                clone: function () {
                  var g = l.clone.call(this);
                  return (g.words = this.words.slice(0)), g;
                },
                random: function (g) {
                  for (var y = [], R = 0; R < g; R += 4) y.push(s());
                  return new c.init(y, g);
                },
              })),
              u = (o.enc = {}),
              h = (u.Hex = {
                stringify: function (g) {
                  for (
                    var y = g.words, R = g.sigBytes, w = [], _ = 0;
                    _ < R;
                    _++
                  ) {
                    var m = (y[_ >>> 2] >>> (24 - (_ % 4) * 8)) & 255;
                    w.push((m >>> 4).toString(16)),
                      w.push((15 & m).toString(16));
                  }
                  return w.join("");
                },
                parse: function (g) {
                  for (var y = g.length, R = [], w = 0; w < y; w += 2)
                    R[w >>> 3] |=
                      parseInt(g.substr(w, 2), 16) << (24 - (w % 8) * 4);
                  return new c.init(R, y / 2);
                },
              }),
              d = (u.Latin1 = {
                stringify: function (g) {
                  for (
                    var y = g.words, R = g.sigBytes, w = [], _ = 0;
                    _ < R;
                    _++
                  ) {
                    var m = (y[_ >>> 2] >>> (24 - (_ % 4) * 8)) & 255;
                    w.push(String.fromCharCode(m));
                  }
                  return w.join("");
                },
                parse: function (g) {
                  for (var y = g.length, R = [], w = 0; w < y; w++)
                    R[w >>> 2] |= (255 & g.charCodeAt(w)) << (24 - (w % 4) * 8);
                  return new c.init(R, y);
                },
              }),
              f = (u.Utf8 = {
                stringify: function (g) {
                  try {
                    return decodeURIComponent(escape(d.stringify(g)));
                  } catch {
                    throw new Error("Malformed UTF-8 data");
                  }
                },
                parse: function (g) {
                  return d.parse(unescape(encodeURIComponent(g)));
                },
              }),
              p = (a.BufferedBlockAlgorithm = l.extend({
                reset: function () {
                  (this._data = new c.init()), (this._nDataBytes = 0);
                },
                _append: function (g) {
                  typeof g == "string" && (g = f.parse(g)),
                    this._data.concat(g),
                    (this._nDataBytes += g.sigBytes);
                },
                _process: function (g) {
                  var y,
                    R = this._data,
                    w = R.words,
                    _ = R.sigBytes,
                    m = this.blockSize,
                    B = _ / (4 * m),
                    D =
                      (B = g
                        ? t.ceil(B)
                        : t.max((0 | B) - this._minBufferSize, 0)) * m,
                    T = t.min(4 * D, _);
                  if (D) {
                    for (var k = 0; k < D; k += m) this._doProcessBlock(w, k);
                    (y = w.splice(0, D)), (R.sigBytes -= T);
                  }
                  return new c.init(y, T);
                },
                clone: function () {
                  var g = l.clone.call(this);
                  return (g._data = this._data.clone()), g;
                },
                _minBufferSize: 0,
              }));
            a.Hasher = p.extend({
              cfg: l.extend(),
              init: function (g) {
                (this.cfg = this.cfg.extend(g)), this.reset();
              },
              reset: function () {
                p.reset.call(this), this._doReset();
              },
              update: function (g) {
                return this._append(g), this._process(), this;
              },
              finalize: function (g) {
                return g && this._append(g), this._doFinalize();
              },
              blockSize: 16,
              _createHelper: function (g) {
                return function (y, R) {
                  return new g.init(R).finalize(y);
                };
              },
              _createHmacHelper: function (g) {
                return function (y, R) {
                  return new v.HMAC.init(g, R).finalize(y);
                };
              },
            });
            var v = (o.algo = {});
            return o;
          })(Math)),
        e))),
    _r.exports
  );
  var e;
}
var vr,
  mr = { exports: {} };
function De() {
  return (
    vr ||
      ((vr = 1),
      (mr.exports =
        ((e = G()),
        (function (t) {
          var r = e,
            n = r.lib,
            s = n.Base,
            i = n.WordArray,
            o = (r.x64 = {});
          (o.Word = s.extend({
            init: function (a, l) {
              (this.high = a), (this.low = l);
            },
          })),
            (o.WordArray = s.extend({
              init: function (a, l) {
                (a = this.words = a || []),
                  (this.sigBytes = l != t ? l : 8 * a.length);
              },
              toX32: function () {
                for (
                  var a = this.words, l = a.length, c = [], u = 0;
                  u < l;
                  u++
                ) {
                  var h = a[u];
                  c.push(h.high), c.push(h.low);
                }
                return i.create(c, this.sigBytes);
              },
              clone: function () {
                for (
                  var a = s.clone.call(this),
                    l = (a.words = this.words.slice(0)),
                    c = l.length,
                    u = 0;
                  u < c;
                  u++
                )
                  l[u] = l[u].clone();
                return a;
              },
            }));
        })(),
        e))),
    mr.exports
  );
  var e;
}
var Rr,
  wr = { exports: {} };
function Vs() {
  return (
    Rr ||
      ((Rr = 1),
      (wr.exports =
        ((e = G()),
        (function () {
          if (typeof ArrayBuffer == "function") {
            var t = e.lib.WordArray,
              r = t.init,
              n = (t.init = function (s) {
                if (
                  (s instanceof ArrayBuffer && (s = new Uint8Array(s)),
                  (s instanceof Int8Array ||
                    (typeof Uint8ClampedArray < "u" &&
                      s instanceof Uint8ClampedArray) ||
                    s instanceof Int16Array ||
                    s instanceof Uint16Array ||
                    s instanceof Int32Array ||
                    s instanceof Uint32Array ||
                    s instanceof Float32Array ||
                    s instanceof Float64Array) &&
                    (s = new Uint8Array(s.buffer, s.byteOffset, s.byteLength)),
                  s instanceof Uint8Array)
                ) {
                  for (var i = s.byteLength, o = [], a = 0; a < i; a++)
                    o[a >>> 2] |= s[a] << (24 - (a % 4) * 8);
                  r.call(this, o, i);
                } else r.apply(this, arguments);
              });
            n.prototype = t;
          }
        })(),
        e.lib.WordArray))),
    wr.exports
  );
  var e;
}
var Dr,
  Er = { exports: {} };
function zs() {
  return (
    Dr ||
      ((Dr = 1),
      (Er.exports =
        ((e = G()),
        (function () {
          var t = e,
            r = t.lib.WordArray,
            n = t.enc;
          function s(i) {
            return ((i << 8) & 4278255360) | ((i >>> 8) & 16711935);
          }
          (n.Utf16 = n.Utf16BE =
            {
              stringify: function (i) {
                for (
                  var o = i.words, a = i.sigBytes, l = [], c = 0;
                  c < a;
                  c += 2
                ) {
                  var u = (o[c >>> 2] >>> (16 - (c % 4) * 8)) & 65535;
                  l.push(String.fromCharCode(u));
                }
                return l.join("");
              },
              parse: function (i) {
                for (var o = i.length, a = [], l = 0; l < o; l++)
                  a[l >>> 1] |= i.charCodeAt(l) << (16 - (l % 2) * 16);
                return r.create(a, 2 * o);
              },
            }),
            (n.Utf16LE = {
              stringify: function (i) {
                for (
                  var o = i.words, a = i.sigBytes, l = [], c = 0;
                  c < a;
                  c += 2
                ) {
                  var u = s((o[c >>> 2] >>> (16 - (c % 4) * 8)) & 65535);
                  l.push(String.fromCharCode(u));
                }
                return l.join("");
              },
              parse: function (i) {
                for (var o = i.length, a = [], l = 0; l < o; l++)
                  a[l >>> 1] |= s(i.charCodeAt(l) << (16 - (l % 2) * 16));
                return r.create(a, 2 * o);
              },
            });
        })(),
        e.enc.Utf16))),
    Er.exports
  );
  var e;
}
var Br,
  Tr = { exports: {} };
function Ut() {
  return (
    Br ||
      ((Br = 1),
      (Tr.exports =
        ((e = G()),
        (function () {
          var t = e,
            r = t.lib.WordArray;
          function n(s, i, o) {
            for (var a = [], l = 0, c = 0; c < i; c++)
              if (c % 4) {
                var u =
                  (o[s.charCodeAt(c - 1)] << ((c % 4) * 2)) |
                  (o[s.charCodeAt(c)] >>> (6 - (c % 4) * 2));
                (a[l >>> 2] |= u << (24 - (l % 4) * 8)), l++;
              }
            return r.create(a, l);
          }
          t.enc.Base64 = {
            stringify: function (s) {
              var i = s.words,
                o = s.sigBytes,
                a = this._map;
              s.clamp();
              for (var l = [], c = 0; c < o; c += 3)
                for (
                  var u =
                      (((i[c >>> 2] >>> (24 - (c % 4) * 8)) & 255) << 16) |
                      (((i[(c + 1) >>> 2] >>> (24 - ((c + 1) % 4) * 8)) &
                        255) <<
                        8) |
                      ((i[(c + 2) >>> 2] >>> (24 - ((c + 2) % 4) * 8)) & 255),
                    h = 0;
                  h < 4 && c + 0.75 * h < o;
                  h++
                )
                  l.push(a.charAt((u >>> (6 * (3 - h))) & 63));
              var d = a.charAt(64);
              if (d) for (; l.length % 4; ) l.push(d);
              return l.join("");
            },
            parse: function (s) {
              var i = s.length,
                o = this._map,
                a = this._reverseMap;
              if (!a) {
                a = this._reverseMap = [];
                for (var l = 0; l < o.length; l++) a[o.charCodeAt(l)] = l;
              }
              var c = o.charAt(64);
              if (c) {
                var u = s.indexOf(c);
                u !== -1 && (i = u);
              }
              return n(s, i, a);
            },
            _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          };
        })(),
        e.enc.Base64))),
    Tr.exports
  );
  var e;
}
var Sr,
  br = { exports: {} };
function Qs() {
  return (
    Sr ||
      ((Sr = 1),
      (br.exports =
        ((e = G()),
        (function () {
          var t = e,
            r = t.lib.WordArray;
          function n(s, i, o) {
            for (var a = [], l = 0, c = 0; c < i; c++)
              if (c % 4) {
                var u =
                  (o[s.charCodeAt(c - 1)] << ((c % 4) * 2)) |
                  (o[s.charCodeAt(c)] >>> (6 - (c % 4) * 2));
                (a[l >>> 2] |= u << (24 - (l % 4) * 8)), l++;
              }
            return r.create(a, l);
          }
          t.enc.Base64url = {
            stringify: function (s, i) {
              i === void 0 && (i = !0);
              var o = s.words,
                a = s.sigBytes,
                l = i ? this._safe_map : this._map;
              s.clamp();
              for (var c = [], u = 0; u < a; u += 3)
                for (
                  var h =
                      (((o[u >>> 2] >>> (24 - (u % 4) * 8)) & 255) << 16) |
                      (((o[(u + 1) >>> 2] >>> (24 - ((u + 1) % 4) * 8)) &
                        255) <<
                        8) |
                      ((o[(u + 2) >>> 2] >>> (24 - ((u + 2) % 4) * 8)) & 255),
                    d = 0;
                  d < 4 && u + 0.75 * d < a;
                  d++
                )
                  c.push(l.charAt((h >>> (6 * (3 - d))) & 63));
              var f = l.charAt(64);
              if (f) for (; c.length % 4; ) c.push(f);
              return c.join("");
            },
            parse: function (s, i) {
              i === void 0 && (i = !0);
              var o = s.length,
                a = i ? this._safe_map : this._map,
                l = this._reverseMap;
              if (!l) {
                l = this._reverseMap = [];
                for (var c = 0; c < a.length; c++) l[a.charCodeAt(c)] = c;
              }
              var u = a.charAt(64);
              if (u) {
                var h = s.indexOf(u);
                h !== -1 && (o = h);
              }
              return n(s, o, l);
            },
            _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            _safe_map:
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
          };
        })(),
        e.enc.Base64url))),
    br.exports
  );
  var e;
}
var Cr,
  Lr = { exports: {} };
function Ft() {
  return (
    Cr ||
      ((Cr = 1),
      (Lr.exports =
        ((e = G()),
        (function (t) {
          var r = e,
            n = r.lib,
            s = n.WordArray,
            i = n.Hasher,
            o = r.algo,
            a = [];
          (function () {
            for (var f = 0; f < 64; f++)
              a[f] = (4294967296 * t.abs(t.sin(f + 1))) | 0;
          })();
          var l = (o.MD5 = i.extend({
            _doReset: function () {
              this._hash = new s.init([
                1732584193, 4023233417, 2562383102, 271733878,
              ]);
            },
            _doProcessBlock: function (f, p) {
              for (var v = 0; v < 16; v++) {
                var g = p + v,
                  y = f[g];
                f[g] =
                  (16711935 & ((y << 8) | (y >>> 24))) |
                  (4278255360 & ((y << 24) | (y >>> 8)));
              }
              var R = this._hash.words,
                w = f[p + 0],
                _ = f[p + 1],
                m = f[p + 2],
                B = f[p + 3],
                D = f[p + 4],
                T = f[p + 5],
                k = f[p + 6],
                A = f[p + 7],
                P = f[p + 8],
                F = f[p + 9],
                W = f[p + 10],
                Y = f[p + 11],
                N = f[p + 12],
                x = f[p + 13],
                z = f[p + 14],
                Q = f[p + 15],
                C = R[0],
                M = R[1],
                S = R[2],
                L = R[3];
              (C = c(C, M, S, L, w, 7, a[0])),
                (L = c(L, C, M, S, _, 12, a[1])),
                (S = c(S, L, C, M, m, 17, a[2])),
                (M = c(M, S, L, C, B, 22, a[3])),
                (C = c(C, M, S, L, D, 7, a[4])),
                (L = c(L, C, M, S, T, 12, a[5])),
                (S = c(S, L, C, M, k, 17, a[6])),
                (M = c(M, S, L, C, A, 22, a[7])),
                (C = c(C, M, S, L, P, 7, a[8])),
                (L = c(L, C, M, S, F, 12, a[9])),
                (S = c(S, L, C, M, W, 17, a[10])),
                (M = c(M, S, L, C, Y, 22, a[11])),
                (C = c(C, M, S, L, N, 7, a[12])),
                (L = c(L, C, M, S, x, 12, a[13])),
                (S = c(S, L, C, M, z, 17, a[14])),
                (C = u(
                  C,
                  (M = c(M, S, L, C, Q, 22, a[15])),
                  S,
                  L,
                  _,
                  5,
                  a[16]
                )),
                (L = u(L, C, M, S, k, 9, a[17])),
                (S = u(S, L, C, M, Y, 14, a[18])),
                (M = u(M, S, L, C, w, 20, a[19])),
                (C = u(C, M, S, L, T, 5, a[20])),
                (L = u(L, C, M, S, W, 9, a[21])),
                (S = u(S, L, C, M, Q, 14, a[22])),
                (M = u(M, S, L, C, D, 20, a[23])),
                (C = u(C, M, S, L, F, 5, a[24])),
                (L = u(L, C, M, S, z, 9, a[25])),
                (S = u(S, L, C, M, B, 14, a[26])),
                (M = u(M, S, L, C, P, 20, a[27])),
                (C = u(C, M, S, L, x, 5, a[28])),
                (L = u(L, C, M, S, m, 9, a[29])),
                (S = u(S, L, C, M, A, 14, a[30])),
                (C = h(
                  C,
                  (M = u(M, S, L, C, N, 20, a[31])),
                  S,
                  L,
                  T,
                  4,
                  a[32]
                )),
                (L = h(L, C, M, S, P, 11, a[33])),
                (S = h(S, L, C, M, Y, 16, a[34])),
                (M = h(M, S, L, C, z, 23, a[35])),
                (C = h(C, M, S, L, _, 4, a[36])),
                (L = h(L, C, M, S, D, 11, a[37])),
                (S = h(S, L, C, M, A, 16, a[38])),
                (M = h(M, S, L, C, W, 23, a[39])),
                (C = h(C, M, S, L, x, 4, a[40])),
                (L = h(L, C, M, S, w, 11, a[41])),
                (S = h(S, L, C, M, B, 16, a[42])),
                (M = h(M, S, L, C, k, 23, a[43])),
                (C = h(C, M, S, L, F, 4, a[44])),
                (L = h(L, C, M, S, N, 11, a[45])),
                (S = h(S, L, C, M, Q, 16, a[46])),
                (C = d(
                  C,
                  (M = h(M, S, L, C, m, 23, a[47])),
                  S,
                  L,
                  w,
                  6,
                  a[48]
                )),
                (L = d(L, C, M, S, A, 10, a[49])),
                (S = d(S, L, C, M, z, 15, a[50])),
                (M = d(M, S, L, C, T, 21, a[51])),
                (C = d(C, M, S, L, N, 6, a[52])),
                (L = d(L, C, M, S, B, 10, a[53])),
                (S = d(S, L, C, M, W, 15, a[54])),
                (M = d(M, S, L, C, _, 21, a[55])),
                (C = d(C, M, S, L, P, 6, a[56])),
                (L = d(L, C, M, S, Q, 10, a[57])),
                (S = d(S, L, C, M, k, 15, a[58])),
                (M = d(M, S, L, C, x, 21, a[59])),
                (C = d(C, M, S, L, D, 6, a[60])),
                (L = d(L, C, M, S, Y, 10, a[61])),
                (S = d(S, L, C, M, m, 15, a[62])),
                (M = d(M, S, L, C, F, 21, a[63])),
                (R[0] = (R[0] + C) | 0),
                (R[1] = (R[1] + M) | 0),
                (R[2] = (R[2] + S) | 0),
                (R[3] = (R[3] + L) | 0);
            },
            _doFinalize: function () {
              var f = this._data,
                p = f.words,
                v = 8 * this._nDataBytes,
                g = 8 * f.sigBytes;
              p[g >>> 5] |= 128 << (24 - (g % 32));
              var y = t.floor(v / 4294967296),
                R = v;
              (p[15 + (((g + 64) >>> 9) << 4)] =
                (16711935 & ((y << 8) | (y >>> 24))) |
                (4278255360 & ((y << 24) | (y >>> 8)))),
                (p[14 + (((g + 64) >>> 9) << 4)] =
                  (16711935 & ((R << 8) | (R >>> 24))) |
                  (4278255360 & ((R << 24) | (R >>> 8)))),
                (f.sigBytes = 4 * (p.length + 1)),
                this._process();
              for (var w = this._hash, _ = w.words, m = 0; m < 4; m++) {
                var B = _[m];
                _[m] =
                  (16711935 & ((B << 8) | (B >>> 24))) |
                  (4278255360 & ((B << 24) | (B >>> 8)));
              }
              return w;
            },
            clone: function () {
              var f = i.clone.call(this);
              return (f._hash = this._hash.clone()), f;
            },
          }));
          function c(f, p, v, g, y, R, w) {
            var _ = f + ((p & v) | (~p & g)) + y + w;
            return ((_ << R) | (_ >>> (32 - R))) + p;
          }
          function u(f, p, v, g, y, R, w) {
            var _ = f + ((p & g) | (v & ~g)) + y + w;
            return ((_ << R) | (_ >>> (32 - R))) + p;
          }
          function h(f, p, v, g, y, R, w) {
            var _ = f + (p ^ v ^ g) + y + w;
            return ((_ << R) | (_ >>> (32 - R))) + p;
          }
          function d(f, p, v, g, y, R, w) {
            var _ = f + (v ^ (p | ~g)) + y + w;
            return ((_ << R) | (_ >>> (32 - R))) + p;
          }
          (r.MD5 = i._createHelper(l)), (r.HmacMD5 = i._createHmacHelper(l));
        })(Math),
        e.MD5))),
    Lr.exports
  );
  var e;
}
var Mr,
  kr = { exports: {} };
function as() {
  return (
    Mr ||
      ((Mr = 1),
      (kr.exports =
        ((e = G()),
        (function () {
          var t = e,
            r = t.lib,
            n = r.WordArray,
            s = r.Hasher,
            i = t.algo,
            o = [],
            a = (i.SHA1 = s.extend({
              _doReset: function () {
                this._hash = new n.init([
                  1732584193, 4023233417, 2562383102, 271733878, 3285377520,
                ]);
              },
              _doProcessBlock: function (l, c) {
                for (
                  var u = this._hash.words,
                    h = u[0],
                    d = u[1],
                    f = u[2],
                    p = u[3],
                    v = u[4],
                    g = 0;
                  g < 80;
                  g++
                ) {
                  if (g < 16) o[g] = 0 | l[c + g];
                  else {
                    var y = o[g - 3] ^ o[g - 8] ^ o[g - 14] ^ o[g - 16];
                    o[g] = (y << 1) | (y >>> 31);
                  }
                  var R = ((h << 5) | (h >>> 27)) + v + o[g];
                  (R +=
                    g < 20
                      ? 1518500249 + ((d & f) | (~d & p))
                      : g < 40
                      ? 1859775393 + (d ^ f ^ p)
                      : g < 60
                      ? ((d & f) | (d & p) | (f & p)) - 1894007588
                      : (d ^ f ^ p) - 899497514),
                    (v = p),
                    (p = f),
                    (f = (d << 30) | (d >>> 2)),
                    (d = h),
                    (h = R);
                }
                (u[0] = (u[0] + h) | 0),
                  (u[1] = (u[1] + d) | 0),
                  (u[2] = (u[2] + f) | 0),
                  (u[3] = (u[3] + p) | 0),
                  (u[4] = (u[4] + v) | 0);
              },
              _doFinalize: function () {
                var l = this._data,
                  c = l.words,
                  u = 8 * this._nDataBytes,
                  h = 8 * l.sigBytes;
                return (
                  (c[h >>> 5] |= 128 << (24 - (h % 32))),
                  (c[14 + (((h + 64) >>> 9) << 4)] = Math.floor(
                    u / 4294967296
                  )),
                  (c[15 + (((h + 64) >>> 9) << 4)] = u),
                  (l.sigBytes = 4 * c.length),
                  this._process(),
                  this._hash
                );
              },
              clone: function () {
                var l = s.clone.call(this);
                return (l._hash = this._hash.clone()), l;
              },
            }));
          (t.SHA1 = s._createHelper(a)), (t.HmacSHA1 = s._createHmacHelper(a));
        })(),
        e.SHA1))),
    kr.exports
  );
  var e;
}
var Ar,
  Pr = { exports: {} };
function ke() {
  return (
    Ar ||
      ((Ar = 1),
      (Pr.exports =
        ((e = G()),
        (function (t) {
          var r = e,
            n = r.lib,
            s = n.WordArray,
            i = n.Hasher,
            o = r.algo,
            a = [],
            l = [];
          (function () {
            function h(v) {
              for (var g = t.sqrt(v), y = 2; y <= g; y++)
                if (!(v % y)) return !1;
              return !0;
            }
            function d(v) {
              return (4294967296 * (v - (0 | v))) | 0;
            }
            for (var f = 2, p = 0; p < 64; )
              h(f) &&
                (p < 8 && (a[p] = d(t.pow(f, 0.5))),
                (l[p] = d(t.pow(f, 1 / 3))),
                p++),
                f++;
          })();
          var c = [],
            u = (o.SHA256 = i.extend({
              _doReset: function () {
                this._hash = new s.init(a.slice(0));
              },
              _doProcessBlock: function (h, d) {
                for (
                  var f = this._hash.words,
                    p = f[0],
                    v = f[1],
                    g = f[2],
                    y = f[3],
                    R = f[4],
                    w = f[5],
                    _ = f[6],
                    m = f[7],
                    B = 0;
                  B < 64;
                  B++
                ) {
                  if (B < 16) c[B] = 0 | h[d + B];
                  else {
                    var D = c[B - 15],
                      T =
                        ((D << 25) | (D >>> 7)) ^
                        ((D << 14) | (D >>> 18)) ^
                        (D >>> 3),
                      k = c[B - 2],
                      A =
                        ((k << 15) | (k >>> 17)) ^
                        ((k << 13) | (k >>> 19)) ^
                        (k >>> 10);
                    c[B] = T + c[B - 7] + A + c[B - 16];
                  }
                  var P = (p & v) ^ (p & g) ^ (v & g),
                    F =
                      ((p << 30) | (p >>> 2)) ^
                      ((p << 19) | (p >>> 13)) ^
                      ((p << 10) | (p >>> 22)),
                    W =
                      m +
                      (((R << 26) | (R >>> 6)) ^
                        ((R << 21) | (R >>> 11)) ^
                        ((R << 7) | (R >>> 25))) +
                      ((R & w) ^ (~R & _)) +
                      l[B] +
                      c[B];
                  (m = _),
                    (_ = w),
                    (w = R),
                    (R = (y + W) | 0),
                    (y = g),
                    (g = v),
                    (v = p),
                    (p = (W + (F + P)) | 0);
                }
                (f[0] = (f[0] + p) | 0),
                  (f[1] = (f[1] + v) | 0),
                  (f[2] = (f[2] + g) | 0),
                  (f[3] = (f[3] + y) | 0),
                  (f[4] = (f[4] + R) | 0),
                  (f[5] = (f[5] + w) | 0),
                  (f[6] = (f[6] + _) | 0),
                  (f[7] = (f[7] + m) | 0);
              },
              _doFinalize: function () {
                var h = this._data,
                  d = h.words,
                  f = 8 * this._nDataBytes,
                  p = 8 * h.sigBytes;
                return (
                  (d[p >>> 5] |= 128 << (24 - (p % 32))),
                  (d[14 + (((p + 64) >>> 9) << 4)] = t.floor(f / 4294967296)),
                  (d[15 + (((p + 64) >>> 9) << 4)] = f),
                  (h.sigBytes = 4 * d.length),
                  this._process(),
                  this._hash
                );
              },
              clone: function () {
                var h = i.clone.call(this);
                return (h._hash = this._hash.clone()), h;
              },
            }));
          (r.SHA256 = i._createHelper(u)),
            (r.HmacSHA256 = i._createHmacHelper(u));
        })(Math),
        e.SHA256))),
    Pr.exports
  );
  var e;
}
var Or,
  xr,
  Ir = { exports: {} };
function Nr() {
  return (
    xr ||
      ((xr = 1),
      (Ir.exports =
        ((e = G()),
        De(),
        (function () {
          var t = e,
            r = t.lib.Hasher,
            n = t.x64,
            s = n.Word,
            i = n.WordArray,
            o = t.algo;
          function a() {
            return s.create.apply(s, arguments);
          }
          var l = [
              a(1116352408, 3609767458),
              a(1899447441, 602891725),
              a(3049323471, 3964484399),
              a(3921009573, 2173295548),
              a(961987163, 4081628472),
              a(1508970993, 3053834265),
              a(2453635748, 2937671579),
              a(2870763221, 3664609560),
              a(3624381080, 2734883394),
              a(310598401, 1164996542),
              a(607225278, 1323610764),
              a(1426881987, 3590304994),
              a(1925078388, 4068182383),
              a(2162078206, 991336113),
              a(2614888103, 633803317),
              a(3248222580, 3479774868),
              a(3835390401, 2666613458),
              a(4022224774, 944711139),
              a(264347078, 2341262773),
              a(604807628, 2007800933),
              a(770255983, 1495990901),
              a(1249150122, 1856431235),
              a(1555081692, 3175218132),
              a(1996064986, 2198950837),
              a(2554220882, 3999719339),
              a(2821834349, 766784016),
              a(2952996808, 2566594879),
              a(3210313671, 3203337956),
              a(3336571891, 1034457026),
              a(3584528711, 2466948901),
              a(113926993, 3758326383),
              a(338241895, 168717936),
              a(666307205, 1188179964),
              a(773529912, 1546045734),
              a(1294757372, 1522805485),
              a(1396182291, 2643833823),
              a(1695183700, 2343527390),
              a(1986661051, 1014477480),
              a(2177026350, 1206759142),
              a(2456956037, 344077627),
              a(2730485921, 1290863460),
              a(2820302411, 3158454273),
              a(3259730800, 3505952657),
              a(3345764771, 106217008),
              a(3516065817, 3606008344),
              a(3600352804, 1432725776),
              a(4094571909, 1467031594),
              a(275423344, 851169720),
              a(430227734, 3100823752),
              a(506948616, 1363258195),
              a(659060556, 3750685593),
              a(883997877, 3785050280),
              a(958139571, 3318307427),
              a(1322822218, 3812723403),
              a(1537002063, 2003034995),
              a(1747873779, 3602036899),
              a(1955562222, 1575990012),
              a(2024104815, 1125592928),
              a(2227730452, 2716904306),
              a(2361852424, 442776044),
              a(2428436474, 593698344),
              a(2756734187, 3733110249),
              a(3204031479, 2999351573),
              a(3329325298, 3815920427),
              a(3391569614, 3928383900),
              a(3515267271, 566280711),
              a(3940187606, 3454069534),
              a(4118630271, 4000239992),
              a(116418474, 1914138554),
              a(174292421, 2731055270),
              a(289380356, 3203993006),
              a(460393269, 320620315),
              a(685471733, 587496836),
              a(852142971, 1086792851),
              a(1017036298, 365543100),
              a(1126000580, 2618297676),
              a(1288033470, 3409855158),
              a(1501505948, 4234509866),
              a(1607167915, 987167468),
              a(1816402316, 1246189591),
            ],
            c = [];
          (function () {
            for (var h = 0; h < 80; h++) c[h] = a();
          })();
          var u = (o.SHA512 = r.extend({
            _doReset: function () {
              this._hash = new i.init([
                new s.init(1779033703, 4089235720),
                new s.init(3144134277, 2227873595),
                new s.init(1013904242, 4271175723),
                new s.init(2773480762, 1595750129),
                new s.init(1359893119, 2917565137),
                new s.init(2600822924, 725511199),
                new s.init(528734635, 4215389547),
                new s.init(1541459225, 327033209),
              ]);
            },
            _doProcessBlock: function (h, d) {
              for (
                var f = this._hash.words,
                  p = f[0],
                  v = f[1],
                  g = f[2],
                  y = f[3],
                  R = f[4],
                  w = f[5],
                  _ = f[6],
                  m = f[7],
                  B = p.high,
                  D = p.low,
                  T = v.high,
                  k = v.low,
                  A = g.high,
                  P = g.low,
                  F = y.high,
                  W = y.low,
                  Y = R.high,
                  N = R.low,
                  x = w.high,
                  z = w.low,
                  Q = _.high,
                  C = _.low,
                  M = m.high,
                  S = m.low,
                  L = B,
                  rt = D,
                  _t = T,
                  ft = k,
                  te = A,
                  Ht = P,
                  Ce = F,
                  ee = W,
                  gt = Y,
                  ht = N,
                  le = x,
                  re = z,
                  he = Q,
                  ne = C,
                  Le = M,
                  se = S,
                  pt = 0;
                pt < 80;
                pt++
              ) {
                var It,
                  Vt,
                  de = c[pt];
                if (pt < 16)
                  (Vt = de.high = 0 | h[d + 2 * pt]),
                    (It = de.low = 0 | h[d + 2 * pt + 1]);
                else {
                  var tr = c[pt - 15],
                    zt = tr.high,
                    ie = tr.low,
                    ws =
                      ((zt >>> 1) | (ie << 31)) ^
                      ((zt >>> 8) | (ie << 24)) ^
                      (zt >>> 7),
                    er =
                      ((ie >>> 1) | (zt << 31)) ^
                      ((ie >>> 8) | (zt << 24)) ^
                      ((ie >>> 7) | (zt << 25)),
                    rr = c[pt - 2],
                    Qt = rr.high,
                    oe = rr.low,
                    Ds =
                      ((Qt >>> 19) | (oe << 13)) ^
                      ((Qt << 3) | (oe >>> 29)) ^
                      (Qt >>> 6),
                    nr =
                      ((oe >>> 19) | (Qt << 13)) ^
                      ((oe << 3) | (Qt >>> 29)) ^
                      ((oe >>> 6) | (Qt << 26)),
                    sr = c[pt - 7],
                    Es = sr.high,
                    Bs = sr.low,
                    ir = c[pt - 16],
                    Ts = ir.high,
                    or = ir.low;
                  (Vt =
                    (Vt =
                      (Vt =
                        ws + Es + ((It = er + Bs) >>> 0 < er >>> 0 ? 1 : 0)) +
                      Ds +
                      ((It += nr) >>> 0 < nr >>> 0 ? 1 : 0)) +
                    Ts +
                    ((It += or) >>> 0 < or >>> 0 ? 1 : 0)),
                    (de.high = Vt),
                    (de.low = It);
                }
                var Nt,
                  Ss = (gt & le) ^ (~gt & he),
                  ar = (ht & re) ^ (~ht & ne),
                  bs = (L & _t) ^ (L & te) ^ (_t & te),
                  Cs = (rt & ft) ^ (rt & Ht) ^ (ft & Ht),
                  Ls =
                    ((L >>> 28) | (rt << 4)) ^
                    ((L << 30) | (rt >>> 2)) ^
                    ((L << 25) | (rt >>> 7)),
                  cr =
                    ((rt >>> 28) | (L << 4)) ^
                    ((rt << 30) | (L >>> 2)) ^
                    ((rt << 25) | (L >>> 7)),
                  Ms =
                    ((gt >>> 14) | (ht << 18)) ^
                    ((gt >>> 18) | (ht << 14)) ^
                    ((gt << 23) | (ht >>> 9)),
                  ks =
                    ((ht >>> 14) | (gt << 18)) ^
                    ((ht >>> 18) | (gt << 14)) ^
                    ((ht << 23) | (gt >>> 9)),
                  ur = l[pt],
                  As = ur.high,
                  lr = ur.low,
                  ae = Le + Ms + ((Nt = se + ks) >>> 0 < se >>> 0 ? 1 : 0),
                  hr = cr + Cs;
                (Le = he),
                  (se = ne),
                  (he = le),
                  (ne = re),
                  (le = gt),
                  (re = ht),
                  (gt =
                    (Ce +
                      (ae =
                        (ae =
                          (ae =
                            ae + Ss + ((Nt += ar) >>> 0 < ar >>> 0 ? 1 : 0)) +
                          As +
                          ((Nt += lr) >>> 0 < lr >>> 0 ? 1 : 0)) +
                        Vt +
                        ((Nt += It) >>> 0 < It >>> 0 ? 1 : 0)) +
                      ((ht = (ee + Nt) | 0) >>> 0 < ee >>> 0 ? 1 : 0)) |
                    0),
                  (Ce = te),
                  (ee = Ht),
                  (te = _t),
                  (Ht = ft),
                  (_t = L),
                  (ft = rt),
                  (L =
                    (ae +
                      (Ls + bs + (hr >>> 0 < cr >>> 0 ? 1 : 0)) +
                      ((rt = (Nt + hr) | 0) >>> 0 < Nt >>> 0 ? 1 : 0)) |
                    0);
              }
              (D = p.low = D + rt),
                (p.high = B + L + (D >>> 0 < rt >>> 0 ? 1 : 0)),
                (k = v.low = k + ft),
                (v.high = T + _t + (k >>> 0 < ft >>> 0 ? 1 : 0)),
                (P = g.low = P + Ht),
                (g.high = A + te + (P >>> 0 < Ht >>> 0 ? 1 : 0)),
                (W = y.low = W + ee),
                (y.high = F + Ce + (W >>> 0 < ee >>> 0 ? 1 : 0)),
                (N = R.low = N + ht),
                (R.high = Y + gt + (N >>> 0 < ht >>> 0 ? 1 : 0)),
                (z = w.low = z + re),
                (w.high = x + le + (z >>> 0 < re >>> 0 ? 1 : 0)),
                (C = _.low = C + ne),
                (_.high = Q + he + (C >>> 0 < ne >>> 0 ? 1 : 0)),
                (S = m.low = S + se),
                (m.high = M + Le + (S >>> 0 < se >>> 0 ? 1 : 0));
            },
            _doFinalize: function () {
              var h = this._data,
                d = h.words,
                f = 8 * this._nDataBytes,
                p = 8 * h.sigBytes;
              return (
                (d[p >>> 5] |= 128 << (24 - (p % 32))),
                (d[30 + (((p + 128) >>> 10) << 5)] = Math.floor(
                  f / 4294967296
                )),
                (d[31 + (((p + 128) >>> 10) << 5)] = f),
                (h.sigBytes = 4 * d.length),
                this._process(),
                this._hash.toX32()
              );
            },
            clone: function () {
              var h = r.clone.call(this);
              return (h._hash = this._hash.clone()), h;
            },
            blockSize: 32,
          }));
          (t.SHA512 = r._createHelper(u)),
            (t.HmacSHA512 = r._createHmacHelper(u));
        })(),
        e.SHA512))),
    Ir.exports
  );
  var e;
}
var Kr,
  Ur = { exports: {} },
  Fr,
  Gr = { exports: {} };
function Xs() {
  return (
    Fr ||
      ((Fr = 1),
      (Gr.exports =
        ((e = G()),
        De(),
        (function (t) {
          var r = e,
            n = r.lib,
            s = n.WordArray,
            i = n.Hasher,
            o = r.x64.Word,
            a = r.algo,
            l = [],
            c = [],
            u = [];
          (function () {
            for (var f = 1, p = 0, v = 0; v < 24; v++) {
              l[f + 5 * p] = (((v + 1) * (v + 2)) / 2) % 64;
              var g = (2 * f + 3 * p) % 5;
              (f = p % 5), (p = g);
            }
            for (f = 0; f < 5; f++)
              for (p = 0; p < 5; p++)
                c[f + 5 * p] = p + ((2 * f + 3 * p) % 5) * 5;
            for (var y = 1, R = 0; R < 24; R++) {
              for (var w = 0, _ = 0, m = 0; m < 7; m++) {
                if (1 & y) {
                  var B = (1 << m) - 1;
                  B < 32 ? (_ ^= 1 << B) : (w ^= 1 << (B - 32));
                }
                128 & y ? (y = (y << 1) ^ 113) : (y <<= 1);
              }
              u[R] = o.create(w, _);
            }
          })();
          var h = [];
          (function () {
            for (var f = 0; f < 25; f++) h[f] = o.create();
          })();
          var d = (a.SHA3 = i.extend({
            cfg: i.cfg.extend({ outputLength: 512 }),
            _doReset: function () {
              for (var f = (this._state = []), p = 0; p < 25; p++)
                f[p] = new o.init();
              this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
            },
            _doProcessBlock: function (f, p) {
              for (
                var v = this._state, g = this.blockSize / 2, y = 0;
                y < g;
                y++
              ) {
                var R = f[p + 2 * y],
                  w = f[p + 2 * y + 1];
                (R =
                  (16711935 & ((R << 8) | (R >>> 24))) |
                  (4278255360 & ((R << 24) | (R >>> 8)))),
                  (w =
                    (16711935 & ((w << 8) | (w >>> 24))) |
                    (4278255360 & ((w << 24) | (w >>> 8)))),
                  ((S = v[y]).high ^= w),
                  (S.low ^= R);
              }
              for (var _ = 0; _ < 24; _++) {
                for (var m = 0; m < 5; m++) {
                  for (var B = 0, D = 0, T = 0; T < 5; T++)
                    (B ^= (S = v[m + 5 * T]).high), (D ^= S.low);
                  var k = h[m];
                  (k.high = B), (k.low = D);
                }
                for (m = 0; m < 5; m++) {
                  var A = h[(m + 4) % 5],
                    P = h[(m + 1) % 5],
                    F = P.high,
                    W = P.low;
                  for (
                    B = A.high ^ ((F << 1) | (W >>> 31)),
                      D = A.low ^ ((W << 1) | (F >>> 31)),
                      T = 0;
                    T < 5;
                    T++
                  )
                    ((S = v[m + 5 * T]).high ^= B), (S.low ^= D);
                }
                for (var Y = 1; Y < 25; Y++) {
                  var N = (S = v[Y]).high,
                    x = S.low,
                    z = l[Y];
                  z < 32
                    ? ((B = (N << z) | (x >>> (32 - z))),
                      (D = (x << z) | (N >>> (32 - z))))
                    : ((B = (x << (z - 32)) | (N >>> (64 - z))),
                      (D = (N << (z - 32)) | (x >>> (64 - z))));
                  var Q = h[c[Y]];
                  (Q.high = B), (Q.low = D);
                }
                var C = h[0],
                  M = v[0];
                for (C.high = M.high, C.low = M.low, m = 0; m < 5; m++)
                  for (T = 0; T < 5; T++) {
                    var S = v[(Y = m + 5 * T)],
                      L = h[Y],
                      rt = h[((m + 1) % 5) + 5 * T],
                      _t = h[((m + 2) % 5) + 5 * T];
                    (S.high = L.high ^ (~rt.high & _t.high)),
                      (S.low = L.low ^ (~rt.low & _t.low));
                  }
                S = v[0];
                var ft = u[_];
                (S.high ^= ft.high), (S.low ^= ft.low);
              }
            },
            _doFinalize: function () {
              var f = this._data,
                p = f.words;
              this._nDataBytes;
              var v = 8 * f.sigBytes,
                g = 32 * this.blockSize;
              (p[v >>> 5] |= 1 << (24 - (v % 32))),
                (p[((t.ceil((v + 1) / g) * g) >>> 5) - 1] |= 128),
                (f.sigBytes = 4 * p.length),
                this._process();
              for (
                var y = this._state,
                  R = this.cfg.outputLength / 8,
                  w = R / 8,
                  _ = [],
                  m = 0;
                m < w;
                m++
              ) {
                var B = y[m],
                  D = B.high,
                  T = B.low;
                (D =
                  (16711935 & ((D << 8) | (D >>> 24))) |
                  (4278255360 & ((D << 24) | (D >>> 8)))),
                  (T =
                    (16711935 & ((T << 8) | (T >>> 24))) |
                    (4278255360 & ((T << 24) | (T >>> 8)))),
                  _.push(T),
                  _.push(D);
              }
              return new s.init(_, R);
            },
            clone: function () {
              for (
                var f = i.clone.call(this),
                  p = (f._state = this._state.slice(0)),
                  v = 0;
                v < 25;
                v++
              )
                p[v] = p[v].clone();
              return f;
            },
          }));
          (r.SHA3 = i._createHelper(d)), (r.HmacSHA3 = i._createHmacHelper(d));
        })(Math),
        e.SHA3))),
    Gr.exports
  );
  var e;
}
var Wr,
  Yr = { exports: {} },
  Hr,
  Vr = { exports: {} };
function Ge() {
  return (
    Hr ||
      ((Hr = 1),
      (Vr.exports =
        ((e = G()),
        void (function () {
          var t = e,
            r = t.lib.Base,
            n = t.enc.Utf8;
          t.algo.HMAC = r.extend({
            init: function (s, i) {
              (s = this._hasher = new s.init()),
                typeof i == "string" && (i = n.parse(i));
              var o = s.blockSize,
                a = 4 * o;
              i.sigBytes > a && (i = s.finalize(i)), i.clamp();
              for (
                var l = (this._oKey = i.clone()),
                  c = (this._iKey = i.clone()),
                  u = l.words,
                  h = c.words,
                  d = 0;
                d < o;
                d++
              )
                (u[d] ^= 1549556828), (h[d] ^= 909522486);
              (l.sigBytes = c.sigBytes = a), this.reset();
            },
            reset: function () {
              var s = this._hasher;
              s.reset(), s.update(this._iKey);
            },
            update: function (s) {
              return this._hasher.update(s), this;
            },
            finalize: function (s) {
              var i = this._hasher,
                o = i.finalize(s);
              return i.reset(), i.finalize(this._oKey.clone().concat(o));
            },
          });
        })()))),
    Vr.exports
  );
  var e;
}
var zr,
  Qr = { exports: {} },
  Xr,
  qr = { exports: {} };
function At() {
  return (
    Xr ||
      ((Xr = 1),
      (qr.exports =
        ((e = G()),
        as(),
        Ge(),
        (function () {
          var t = e,
            r = t.lib,
            n = r.Base,
            s = r.WordArray,
            i = t.algo,
            o = i.MD5,
            a = (i.EvpKDF = n.extend({
              cfg: n.extend({ keySize: 4, hasher: o, iterations: 1 }),
              init: function (l) {
                this.cfg = this.cfg.extend(l);
              },
              compute: function (l, c) {
                for (
                  var u,
                    h = this.cfg,
                    d = h.hasher.create(),
                    f = s.create(),
                    p = f.words,
                    v = h.keySize,
                    g = h.iterations;
                  p.length < v;

                ) {
                  u && d.update(u), (u = d.update(l).finalize(c)), d.reset();
                  for (var y = 1; y < g; y++) (u = d.finalize(u)), d.reset();
                  f.concat(u);
                }
                return (f.sigBytes = 4 * v), f;
              },
            }));
          t.EvpKDF = function (l, c, u) {
            return a.create(u).compute(l, c);
          };
        })(),
        e.EvpKDF))),
    qr.exports
  );
  var e;
}
var jr,
  $r = { exports: {} };
function et() {
  return (
    jr ||
      ((jr = 1),
      ($r.exports =
        ((e = G()),
        At(),
        void (
          e.lib.Cipher ||
          (function (t) {
            var r = e,
              n = r.lib,
              s = n.Base,
              i = n.WordArray,
              o = n.BufferedBlockAlgorithm,
              a = r.enc;
            a.Utf8;
            var l = a.Base64,
              c = r.algo.EvpKDF,
              u = (n.Cipher = o.extend({
                cfg: s.extend(),
                createEncryptor: function (_, m) {
                  return this.create(this._ENC_XFORM_MODE, _, m);
                },
                createDecryptor: function (_, m) {
                  return this.create(this._DEC_XFORM_MODE, _, m);
                },
                init: function (_, m, B) {
                  (this.cfg = this.cfg.extend(B)),
                    (this._xformMode = _),
                    (this._key = m),
                    this.reset();
                },
                reset: function () {
                  o.reset.call(this), this._doReset();
                },
                process: function (_) {
                  return this._append(_), this._process();
                },
                finalize: function (_) {
                  return _ && this._append(_), this._doFinalize();
                },
                keySize: 4,
                ivSize: 4,
                _ENC_XFORM_MODE: 1,
                _DEC_XFORM_MODE: 2,
                _createHelper: (function () {
                  function _(m) {
                    return typeof m == "string" ? w : y;
                  }
                  return function (m) {
                    return {
                      encrypt: function (B, D, T) {
                        return _(D).encrypt(m, B, D, T);
                      },
                      decrypt: function (B, D, T) {
                        return _(D).decrypt(m, B, D, T);
                      },
                    };
                  };
                })(),
              }));
            n.StreamCipher = u.extend({
              _doFinalize: function () {
                return this._process(!0);
              },
              blockSize: 1,
            });
            var h = (r.mode = {}),
              d = (n.BlockCipherMode = s.extend({
                createEncryptor: function (_, m) {
                  return this.Encryptor.create(_, m);
                },
                createDecryptor: function (_, m) {
                  return this.Decryptor.create(_, m);
                },
                init: function (_, m) {
                  (this._cipher = _), (this._iv = m);
                },
              })),
              f = (h.CBC = (function () {
                var _ = d.extend();
                function m(B, D, T) {
                  var k,
                    A = this._iv;
                  A ? ((k = A), (this._iv = t)) : (k = this._prevBlock);
                  for (var P = 0; P < T; P++) B[D + P] ^= k[P];
                }
                return (
                  (_.Encryptor = _.extend({
                    processBlock: function (B, D) {
                      var T = this._cipher,
                        k = T.blockSize;
                      m.call(this, B, D, k),
                        T.encryptBlock(B, D),
                        (this._prevBlock = B.slice(D, D + k));
                    },
                  })),
                  (_.Decryptor = _.extend({
                    processBlock: function (B, D) {
                      var T = this._cipher,
                        k = T.blockSize,
                        A = B.slice(D, D + k);
                      T.decryptBlock(B, D),
                        m.call(this, B, D, k),
                        (this._prevBlock = A);
                    },
                  })),
                  _
                );
              })()),
              p = ((r.pad = {}).Pkcs7 = {
                pad: function (_, m) {
                  for (
                    var B = 4 * m,
                      D = B - (_.sigBytes % B),
                      T = (D << 24) | (D << 16) | (D << 8) | D,
                      k = [],
                      A = 0;
                    A < D;
                    A += 4
                  )
                    k.push(T);
                  var P = i.create(k, D);
                  _.concat(P);
                },
                unpad: function (_) {
                  var m = 255 & _.words[(_.sigBytes - 1) >>> 2];
                  _.sigBytes -= m;
                },
              });
            n.BlockCipher = u.extend({
              cfg: u.cfg.extend({ mode: f, padding: p }),
              reset: function () {
                var _;
                u.reset.call(this);
                var m = this.cfg,
                  B = m.iv,
                  D = m.mode;
                this._xformMode == this._ENC_XFORM_MODE
                  ? (_ = D.createEncryptor)
                  : ((_ = D.createDecryptor), (this._minBufferSize = 1)),
                  this._mode && this._mode.__creator == _
                    ? this._mode.init(this, B && B.words)
                    : ((this._mode = _.call(D, this, B && B.words)),
                      (this._mode.__creator = _));
              },
              _doProcessBlock: function (_, m) {
                this._mode.processBlock(_, m);
              },
              _doFinalize: function () {
                var _,
                  m = this.cfg.padding;
                return (
                  this._xformMode == this._ENC_XFORM_MODE
                    ? (m.pad(this._data, this.blockSize),
                      (_ = this._process(!0)))
                    : ((_ = this._process(!0)), m.unpad(_)),
                  _
                );
              },
              blockSize: 4,
            });
            var v = (n.CipherParams = s.extend({
                init: function (_) {
                  this.mixIn(_);
                },
                toString: function (_) {
                  return (_ || this.formatter).stringify(this);
                },
              })),
              g = ((r.format = {}).OpenSSL = {
                stringify: function (_) {
                  var m = _.ciphertext,
                    B = _.salt;
                  return (
                    B
                      ? i.create([1398893684, 1701076831]).concat(B).concat(m)
                      : m
                  ).toString(l);
                },
                parse: function (_) {
                  var m,
                    B = l.parse(_),
                    D = B.words;
                  return (
                    D[0] == 1398893684 &&
                      D[1] == 1701076831 &&
                      ((m = i.create(D.slice(2, 4))),
                      D.splice(0, 4),
                      (B.sigBytes -= 16)),
                    v.create({ ciphertext: B, salt: m })
                  );
                },
              }),
              y = (n.SerializableCipher = s.extend({
                cfg: s.extend({ format: g }),
                encrypt: function (_, m, B, D) {
                  D = this.cfg.extend(D);
                  var T = _.createEncryptor(B, D),
                    k = T.finalize(m),
                    A = T.cfg;
                  return v.create({
                    ciphertext: k,
                    key: B,
                    iv: A.iv,
                    algorithm: _,
                    mode: A.mode,
                    padding: A.padding,
                    blockSize: _.blockSize,
                    formatter: D.format,
                  });
                },
                decrypt: function (_, m, B, D) {
                  return (
                    (D = this.cfg.extend(D)),
                    (m = this._parse(m, D.format)),
                    _.createDecryptor(B, D).finalize(m.ciphertext)
                  );
                },
                _parse: function (_, m) {
                  return typeof _ == "string" ? m.parse(_, this) : _;
                },
              })),
              R = ((r.kdf = {}).OpenSSL = {
                execute: function (_, m, B, D, T) {
                  if ((D || (D = i.random(8)), T))
                    k = c.create({ keySize: m + B, hasher: T }).compute(_, D);
                  else var k = c.create({ keySize: m + B }).compute(_, D);
                  var A = i.create(k.words.slice(m), 4 * B);
                  return (
                    (k.sigBytes = 4 * m), v.create({ key: k, iv: A, salt: D })
                  );
                },
              }),
              w = (n.PasswordBasedCipher = y.extend({
                cfg: y.cfg.extend({ kdf: R }),
                encrypt: function (_, m, B, D) {
                  var T = (D = this.cfg.extend(D)).kdf.execute(
                    B,
                    _.keySize,
                    _.ivSize,
                    D.salt,
                    D.hasher
                  );
                  D.iv = T.iv;
                  var k = y.encrypt.call(this, _, m, T.key, D);
                  return k.mixIn(T), k;
                },
                decrypt: function (_, m, B, D) {
                  (D = this.cfg.extend(D)), (m = this._parse(m, D.format));
                  var T = D.kdf.execute(
                    B,
                    _.keySize,
                    _.ivSize,
                    m.salt,
                    D.hasher
                  );
                  return (D.iv = T.iv), y.decrypt.call(this, _, m, T.key, D);
                },
              }));
          })()
        )))),
    $r.exports
  );
  var e;
}
var Zr,
  Jr = { exports: {} };
function qs() {
  return (
    Zr ||
      ((Zr = 1),
      (Jr.exports =
        ((e = G()),
        et(),
        (e.mode.CFB = (function () {
          var t = e.lib.BlockCipherMode.extend();
          function r(n, s, i, o) {
            var a,
              l = this._iv;
            l ? ((a = l.slice(0)), (this._iv = void 0)) : (a = this._prevBlock),
              o.encryptBlock(a, 0);
            for (var c = 0; c < i; c++) n[s + c] ^= a[c];
          }
          return (
            (t.Encryptor = t.extend({
              processBlock: function (n, s) {
                var i = this._cipher,
                  o = i.blockSize;
                r.call(this, n, s, o, i), (this._prevBlock = n.slice(s, s + o));
              },
            })),
            (t.Decryptor = t.extend({
              processBlock: function (n, s) {
                var i = this._cipher,
                  o = i.blockSize,
                  a = n.slice(s, s + o);
                r.call(this, n, s, o, i), (this._prevBlock = a);
              },
            })),
            t
          );
        })()),
        e.mode.CFB))),
    Jr.exports
  );
  var e;
}
var tn,
  en = { exports: {} };
function js() {
  return (
    tn ||
      ((tn = 1),
      (en.exports =
        ((r = G()),
        et(),
        (r.mode.CTR =
          ((e = r.lib.BlockCipherMode.extend()),
          (t = e.Encryptor =
            e.extend({
              processBlock: function (n, s) {
                var i = this._cipher,
                  o = i.blockSize,
                  a = this._iv,
                  l = this._counter;
                a && ((l = this._counter = a.slice(0)), (this._iv = void 0));
                var c = l.slice(0);
                i.encryptBlock(c, 0), (l[o - 1] = (l[o - 1] + 1) | 0);
                for (var u = 0; u < o; u++) n[s + u] ^= c[u];
              },
            })),
          (e.Decryptor = t),
          e)),
        r.mode.CTR))),
    en.exports
  );
  var e, t, r;
}
var rn,
  nn = { exports: {} };
function $s() {
  return (
    rn ||
      ((rn = 1),
      (nn.exports =
        ((e = G()),
        et(),
        (e.mode.CTRGladman = (function () {
          var t = e.lib.BlockCipherMode.extend();
          function r(i) {
            if (255 & ~(i >> 24)) i += 1 << 24;
            else {
              var o = (i >> 16) & 255,
                a = (i >> 8) & 255,
                l = 255 & i;
              o === 255
                ? ((o = 0),
                  a === 255 ? ((a = 0), l === 255 ? (l = 0) : ++l) : ++a)
                : ++o,
                (i = 0),
                (i += o << 16),
                (i += a << 8),
                (i += l);
            }
            return i;
          }
          function n(i) {
            return (i[0] = r(i[0])) === 0 && (i[1] = r(i[1])), i;
          }
          var s = (t.Encryptor = t.extend({
            processBlock: function (i, o) {
              var a = this._cipher,
                l = a.blockSize,
                c = this._iv,
                u = this._counter;
              c && ((u = this._counter = c.slice(0)), (this._iv = void 0)),
                n(u);
              var h = u.slice(0);
              a.encryptBlock(h, 0);
              for (var d = 0; d < l; d++) i[o + d] ^= h[d];
            },
          }));
          return (t.Decryptor = s), t;
        })()),
        e.mode.CTRGladman))),
    nn.exports
  );
  var e;
}
var sn,
  on = { exports: {} };
function Zs() {
  return (
    sn ||
      ((sn = 1),
      (on.exports =
        ((r = G()),
        et(),
        (r.mode.OFB =
          ((e = r.lib.BlockCipherMode.extend()),
          (t = e.Encryptor =
            e.extend({
              processBlock: function (n, s) {
                var i = this._cipher,
                  o = i.blockSize,
                  a = this._iv,
                  l = this._keystream;
                a && ((l = this._keystream = a.slice(0)), (this._iv = void 0)),
                  i.encryptBlock(l, 0);
                for (var c = 0; c < o; c++) n[s + c] ^= l[c];
              },
            })),
          (e.Decryptor = t),
          e)),
        r.mode.OFB))),
    on.exports
  );
  var e, t, r;
}
var an,
  cn = { exports: {} },
  un,
  ln = { exports: {} },
  hn,
  dn = { exports: {} },
  fn,
  gn = { exports: {} },
  pn,
  yn = { exports: {} },
  _n,
  vn = { exports: {} },
  mn,
  Rn = { exports: {} },
  wn,
  Dn = { exports: {} },
  En,
  Bn = { exports: {} };
function Js() {
  return (
    En ||
      ((En = 1),
      (Bn.exports =
        ((e = G()),
        Ut(),
        Ft(),
        At(),
        et(),
        (function () {
          var t = e,
            r = t.lib,
            n = r.WordArray,
            s = r.BlockCipher,
            i = t.algo,
            o = [
              57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59,
              51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23,
              15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13,
              5, 28, 20, 12, 4,
            ],
            a = [
              14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8,
              16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33,
              48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32,
            ],
            l = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28],
            c = [
              {
                0: 8421888,
                268435456: 32768,
                536870912: 8421378,
                805306368: 2,
                1073741824: 512,
                1342177280: 8421890,
                1610612736: 8389122,
                1879048192: 8388608,
                2147483648: 514,
                2415919104: 8389120,
                2684354560: 33280,
                2952790016: 8421376,
                3221225472: 32770,
                3489660928: 8388610,
                3758096384: 0,
                4026531840: 33282,
                134217728: 0,
                402653184: 8421890,
                671088640: 33282,
                939524096: 32768,
                1207959552: 8421888,
                1476395008: 512,
                1744830464: 8421378,
                2013265920: 2,
                2281701376: 8389120,
                2550136832: 33280,
                2818572288: 8421376,
                3087007744: 8389122,
                3355443200: 8388610,
                3623878656: 32770,
                3892314112: 514,
                4160749568: 8388608,
                1: 32768,
                268435457: 2,
                536870913: 8421888,
                805306369: 8388608,
                1073741825: 8421378,
                1342177281: 33280,
                1610612737: 512,
                1879048193: 8389122,
                2147483649: 8421890,
                2415919105: 8421376,
                2684354561: 8388610,
                2952790017: 33282,
                3221225473: 514,
                3489660929: 8389120,
                3758096385: 32770,
                4026531841: 0,
                134217729: 8421890,
                402653185: 8421376,
                671088641: 8388608,
                939524097: 512,
                1207959553: 32768,
                1476395009: 8388610,
                1744830465: 2,
                2013265921: 33282,
                2281701377: 32770,
                2550136833: 8389122,
                2818572289: 514,
                3087007745: 8421888,
                3355443201: 8389120,
                3623878657: 0,
                3892314113: 33280,
                4160749569: 8421378,
              },
              {
                0: 1074282512,
                16777216: 16384,
                33554432: 524288,
                50331648: 1074266128,
                67108864: 1073741840,
                83886080: 1074282496,
                100663296: 1073758208,
                117440512: 16,
                134217728: 540672,
                150994944: 1073758224,
                167772160: 1073741824,
                184549376: 540688,
                201326592: 524304,
                218103808: 0,
                234881024: 16400,
                251658240: 1074266112,
                8388608: 1073758208,
                25165824: 540688,
                41943040: 16,
                58720256: 1073758224,
                75497472: 1074282512,
                92274688: 1073741824,
                109051904: 524288,
                125829120: 1074266128,
                142606336: 524304,
                159383552: 0,
                176160768: 16384,
                192937984: 1074266112,
                209715200: 1073741840,
                226492416: 540672,
                243269632: 1074282496,
                260046848: 16400,
                268435456: 0,
                285212672: 1074266128,
                301989888: 1073758224,
                318767104: 1074282496,
                335544320: 1074266112,
                352321536: 16,
                369098752: 540688,
                385875968: 16384,
                402653184: 16400,
                419430400: 524288,
                436207616: 524304,
                452984832: 1073741840,
                469762048: 540672,
                486539264: 1073758208,
                503316480: 1073741824,
                520093696: 1074282512,
                276824064: 540688,
                293601280: 524288,
                310378496: 1074266112,
                327155712: 16384,
                343932928: 1073758208,
                360710144: 1074282512,
                377487360: 16,
                394264576: 1073741824,
                411041792: 1074282496,
                427819008: 1073741840,
                444596224: 1073758224,
                461373440: 524304,
                478150656: 0,
                494927872: 16400,
                511705088: 1074266128,
                528482304: 540672,
              },
              {
                0: 260,
                1048576: 0,
                2097152: 67109120,
                3145728: 65796,
                4194304: 65540,
                5242880: 67108868,
                6291456: 67174660,
                7340032: 67174400,
                8388608: 67108864,
                9437184: 67174656,
                10485760: 65792,
                11534336: 67174404,
                12582912: 67109124,
                13631488: 65536,
                14680064: 4,
                15728640: 256,
                524288: 67174656,
                1572864: 67174404,
                2621440: 0,
                3670016: 67109120,
                4718592: 67108868,
                5767168: 65536,
                6815744: 65540,
                7864320: 260,
                8912896: 4,
                9961472: 256,
                11010048: 67174400,
                12058624: 65796,
                13107200: 65792,
                14155776: 67109124,
                15204352: 67174660,
                16252928: 67108864,
                16777216: 67174656,
                17825792: 65540,
                18874368: 65536,
                19922944: 67109120,
                20971520: 256,
                22020096: 67174660,
                23068672: 67108868,
                24117248: 0,
                25165824: 67109124,
                26214400: 67108864,
                27262976: 4,
                28311552: 65792,
                29360128: 67174400,
                30408704: 260,
                31457280: 65796,
                32505856: 67174404,
                17301504: 67108864,
                18350080: 260,
                19398656: 67174656,
                20447232: 0,
                21495808: 65540,
                22544384: 67109120,
                23592960: 256,
                24641536: 67174404,
                25690112: 65536,
                26738688: 67174660,
                27787264: 65796,
                28835840: 67108868,
                29884416: 67109124,
                30932992: 67174400,
                31981568: 4,
                33030144: 65792,
              },
              {
                0: 2151682048,
                65536: 2147487808,
                131072: 4198464,
                196608: 2151677952,
                262144: 0,
                327680: 4198400,
                393216: 2147483712,
                458752: 4194368,
                524288: 2147483648,
                589824: 4194304,
                655360: 64,
                720896: 2147487744,
                786432: 2151678016,
                851968: 4160,
                917504: 4096,
                983040: 2151682112,
                32768: 2147487808,
                98304: 64,
                163840: 2151678016,
                229376: 2147487744,
                294912: 4198400,
                360448: 2151682112,
                425984: 0,
                491520: 2151677952,
                557056: 4096,
                622592: 2151682048,
                688128: 4194304,
                753664: 4160,
                819200: 2147483648,
                884736: 4194368,
                950272: 4198464,
                1015808: 2147483712,
                1048576: 4194368,
                1114112: 4198400,
                1179648: 2147483712,
                1245184: 0,
                1310720: 4160,
                1376256: 2151678016,
                1441792: 2151682048,
                1507328: 2147487808,
                1572864: 2151682112,
                1638400: 2147483648,
                1703936: 2151677952,
                1769472: 4198464,
                1835008: 2147487744,
                1900544: 4194304,
                1966080: 64,
                2031616: 4096,
                1081344: 2151677952,
                1146880: 2151682112,
                1212416: 0,
                1277952: 4198400,
                1343488: 4194368,
                1409024: 2147483648,
                1474560: 2147487808,
                1540096: 64,
                1605632: 2147483712,
                1671168: 4096,
                1736704: 2147487744,
                1802240: 2151678016,
                1867776: 4160,
                1933312: 2151682048,
                1998848: 4194304,
                2064384: 4198464,
              },
              {
                0: 128,
                4096: 17039360,
                8192: 262144,
                12288: 536870912,
                16384: 537133184,
                20480: 16777344,
                24576: 553648256,
                28672: 262272,
                32768: 16777216,
                36864: 537133056,
                40960: 536871040,
                45056: 553910400,
                49152: 553910272,
                53248: 0,
                57344: 17039488,
                61440: 553648128,
                2048: 17039488,
                6144: 553648256,
                10240: 128,
                14336: 17039360,
                18432: 262144,
                22528: 537133184,
                26624: 553910272,
                30720: 536870912,
                34816: 537133056,
                38912: 0,
                43008: 553910400,
                47104: 16777344,
                51200: 536871040,
                55296: 553648128,
                59392: 16777216,
                63488: 262272,
                65536: 262144,
                69632: 128,
                73728: 536870912,
                77824: 553648256,
                81920: 16777344,
                86016: 553910272,
                90112: 537133184,
                94208: 16777216,
                98304: 553910400,
                102400: 553648128,
                106496: 17039360,
                110592: 537133056,
                114688: 262272,
                118784: 536871040,
                122880: 0,
                126976: 17039488,
                67584: 553648256,
                71680: 16777216,
                75776: 17039360,
                79872: 537133184,
                83968: 536870912,
                88064: 17039488,
                92160: 128,
                96256: 553910272,
                100352: 262272,
                104448: 553910400,
                108544: 0,
                112640: 553648128,
                116736: 16777344,
                120832: 262144,
                124928: 537133056,
                129024: 536871040,
              },
              {
                0: 268435464,
                256: 8192,
                512: 270532608,
                768: 270540808,
                1024: 268443648,
                1280: 2097152,
                1536: 2097160,
                1792: 268435456,
                2048: 0,
                2304: 268443656,
                2560: 2105344,
                2816: 8,
                3072: 270532616,
                3328: 2105352,
                3584: 8200,
                3840: 270540800,
                128: 270532608,
                384: 270540808,
                640: 8,
                896: 2097152,
                1152: 2105352,
                1408: 268435464,
                1664: 268443648,
                1920: 8200,
                2176: 2097160,
                2432: 8192,
                2688: 268443656,
                2944: 270532616,
                3200: 0,
                3456: 270540800,
                3712: 2105344,
                3968: 268435456,
                4096: 268443648,
                4352: 270532616,
                4608: 270540808,
                4864: 8200,
                5120: 2097152,
                5376: 268435456,
                5632: 268435464,
                5888: 2105344,
                6144: 2105352,
                6400: 0,
                6656: 8,
                6912: 270532608,
                7168: 8192,
                7424: 268443656,
                7680: 270540800,
                7936: 2097160,
                4224: 8,
                4480: 2105344,
                4736: 2097152,
                4992: 268435464,
                5248: 268443648,
                5504: 8200,
                5760: 270540808,
                6016: 270532608,
                6272: 270540800,
                6528: 270532616,
                6784: 8192,
                7040: 2105352,
                7296: 2097160,
                7552: 0,
                7808: 268435456,
                8064: 268443656,
              },
              {
                0: 1048576,
                16: 33555457,
                32: 1024,
                48: 1049601,
                64: 34604033,
                80: 0,
                96: 1,
                112: 34603009,
                128: 33555456,
                144: 1048577,
                160: 33554433,
                176: 34604032,
                192: 34603008,
                208: 1025,
                224: 1049600,
                240: 33554432,
                8: 34603009,
                24: 0,
                40: 33555457,
                56: 34604032,
                72: 1048576,
                88: 33554433,
                104: 33554432,
                120: 1025,
                136: 1049601,
                152: 33555456,
                168: 34603008,
                184: 1048577,
                200: 1024,
                216: 34604033,
                232: 1,
                248: 1049600,
                256: 33554432,
                272: 1048576,
                288: 33555457,
                304: 34603009,
                320: 1048577,
                336: 33555456,
                352: 34604032,
                368: 1049601,
                384: 1025,
                400: 34604033,
                416: 1049600,
                432: 1,
                448: 0,
                464: 34603008,
                480: 33554433,
                496: 1024,
                264: 1049600,
                280: 33555457,
                296: 34603009,
                312: 1,
                328: 33554432,
                344: 1048576,
                360: 1025,
                376: 34604032,
                392: 33554433,
                408: 34603008,
                424: 0,
                440: 34604033,
                456: 1049601,
                472: 1024,
                488: 33555456,
                504: 1048577,
              },
              {
                0: 134219808,
                1: 131072,
                2: 134217728,
                3: 32,
                4: 131104,
                5: 134350880,
                6: 134350848,
                7: 2048,
                8: 134348800,
                9: 134219776,
                10: 133120,
                11: 134348832,
                12: 2080,
                13: 0,
                14: 134217760,
                15: 133152,
                2147483648: 2048,
                2147483649: 134350880,
                2147483650: 134219808,
                2147483651: 134217728,
                2147483652: 134348800,
                2147483653: 133120,
                2147483654: 133152,
                2147483655: 32,
                2147483656: 134217760,
                2147483657: 2080,
                2147483658: 131104,
                2147483659: 134350848,
                2147483660: 0,
                2147483661: 134348832,
                2147483662: 134219776,
                2147483663: 131072,
                16: 133152,
                17: 134350848,
                18: 32,
                19: 2048,
                20: 134219776,
                21: 134217760,
                22: 134348832,
                23: 131072,
                24: 0,
                25: 131104,
                26: 134348800,
                27: 134219808,
                28: 134350880,
                29: 133120,
                30: 2080,
                31: 134217728,
                2147483664: 131072,
                2147483665: 2048,
                2147483666: 134348832,
                2147483667: 133152,
                2147483668: 32,
                2147483669: 134348800,
                2147483670: 134217728,
                2147483671: 134219808,
                2147483672: 134350880,
                2147483673: 134217760,
                2147483674: 134219776,
                2147483675: 0,
                2147483676: 133120,
                2147483677: 2080,
                2147483678: 131104,
                2147483679: 134350848,
              },
            ],
            u = [
              4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504,
              2147483679,
            ],
            h = (i.DES = s.extend({
              _doReset: function () {
                for (var v = this._key.words, g = [], y = 0; y < 56; y++) {
                  var R = o[y] - 1;
                  g[y] = (v[R >>> 5] >>> (31 - (R % 32))) & 1;
                }
                for (var w = (this._subKeys = []), _ = 0; _ < 16; _++) {
                  var m = (w[_] = []),
                    B = l[_];
                  for (y = 0; y < 24; y++)
                    (m[(y / 6) | 0] |=
                      g[(a[y] - 1 + B) % 28] << (31 - (y % 6))),
                      (m[4 + ((y / 6) | 0)] |=
                        g[28 + ((a[y + 24] - 1 + B) % 28)] << (31 - (y % 6)));
                  for (m[0] = (m[0] << 1) | (m[0] >>> 31), y = 1; y < 7; y++)
                    m[y] = m[y] >>> (4 * (y - 1) + 3);
                  m[7] = (m[7] << 5) | (m[7] >>> 27);
                }
                var D = (this._invSubKeys = []);
                for (y = 0; y < 16; y++) D[y] = w[15 - y];
              },
              encryptBlock: function (v, g) {
                this._doCryptBlock(v, g, this._subKeys);
              },
              decryptBlock: function (v, g) {
                this._doCryptBlock(v, g, this._invSubKeys);
              },
              _doCryptBlock: function (v, g, y) {
                (this._lBlock = v[g]),
                  (this._rBlock = v[g + 1]),
                  d.call(this, 4, 252645135),
                  d.call(this, 16, 65535),
                  f.call(this, 2, 858993459),
                  f.call(this, 8, 16711935),
                  d.call(this, 1, 1431655765);
                for (var R = 0; R < 16; R++) {
                  for (
                    var w = y[R],
                      _ = this._lBlock,
                      m = this._rBlock,
                      B = 0,
                      D = 0;
                    D < 8;
                    D++
                  )
                    B |= c[D][((m ^ w[D]) & u[D]) >>> 0];
                  (this._lBlock = m), (this._rBlock = _ ^ B);
                }
                var T = this._lBlock;
                (this._lBlock = this._rBlock),
                  (this._rBlock = T),
                  d.call(this, 1, 1431655765),
                  f.call(this, 8, 16711935),
                  f.call(this, 2, 858993459),
                  d.call(this, 16, 65535),
                  d.call(this, 4, 252645135),
                  (v[g] = this._lBlock),
                  (v[g + 1] = this._rBlock);
              },
              keySize: 2,
              ivSize: 2,
              blockSize: 2,
            }));
          function d(v, g) {
            var y = ((this._lBlock >>> v) ^ this._rBlock) & g;
            (this._rBlock ^= y), (this._lBlock ^= y << v);
          }
          function f(v, g) {
            var y = ((this._rBlock >>> v) ^ this._lBlock) & g;
            (this._lBlock ^= y), (this._rBlock ^= y << v);
          }
          t.DES = s._createHelper(h);
          var p = (i.TripleDES = s.extend({
            _doReset: function () {
              var v = this._key.words;
              if (v.length !== 2 && v.length !== 4 && v.length < 6)
                throw new Error(
                  "Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192."
                );
              var g = v.slice(0, 2),
                y = v.length < 4 ? v.slice(0, 2) : v.slice(2, 4),
                R = v.length < 6 ? v.slice(0, 2) : v.slice(4, 6);
              (this._des1 = h.createEncryptor(n.create(g))),
                (this._des2 = h.createEncryptor(n.create(y))),
                (this._des3 = h.createEncryptor(n.create(R)));
            },
            encryptBlock: function (v, g) {
              this._des1.encryptBlock(v, g),
                this._des2.decryptBlock(v, g),
                this._des3.encryptBlock(v, g);
            },
            decryptBlock: function (v, g) {
              this._des3.decryptBlock(v, g),
                this._des2.encryptBlock(v, g),
                this._des1.decryptBlock(v, g);
            },
            keySize: 6,
            ivSize: 2,
            blockSize: 2,
          }));
          t.TripleDES = s._createHelper(p);
        })(),
        e.TripleDES))),
    Bn.exports
  );
  var e;
}
var Tn,
  Sn = { exports: {} },
  bn,
  Cn = { exports: {} },
  Ln,
  Mn = { exports: {} },
  kn,
  An = { exports: {} };
function ti() {
  return (
    kn ||
      ((kn = 1),
      (An.exports =
        ((e = G()),
        Ut(),
        Ft(),
        At(),
        et(),
        (function () {
          var t = e,
            r = t.lib.BlockCipher,
            n = t.algo;
          const s = 16,
            i = [
              608135816, 2242054355, 320440878, 57701188, 2752067618, 698298832,
              137296536, 3964562569, 1160258022, 953160567, 3193202383,
              887688300, 3232508343, 3380367581, 1065670069, 3041331479,
              2450970073, 2306472731,
            ],
            o = [
              [
                3509652390, 2564797868, 805139163, 3491422135, 3101798381,
                1780907670, 3128725573, 4046225305, 614570311, 3012652279,
                134345442, 2240740374, 1667834072, 1901547113, 2757295779,
                4103290238, 227898511, 1921955416, 1904987480, 2182433518,
                2069144605, 3260701109, 2620446009, 720527379, 3318853667,
                677414384, 3393288472, 3101374703, 2390351024, 1614419982,
                1822297739, 2954791486, 3608508353, 3174124327, 2024746970,
                1432378464, 3864339955, 2857741204, 1464375394, 1676153920,
                1439316330, 715854006, 3033291828, 289532110, 2706671279,
                2087905683, 3018724369, 1668267050, 732546397, 1947742710,
                3462151702, 2609353502, 2950085171, 1814351708, 2050118529,
                680887927, 999245976, 1800124847, 3300911131, 1713906067,
                1641548236, 4213287313, 1216130144, 1575780402, 4018429277,
                3917837745, 3693486850, 3949271944, 596196993, 3549867205,
                258830323, 2213823033, 772490370, 2760122372, 1774776394,
                2652871518, 566650946, 4142492826, 1728879713, 2882767088,
                1783734482, 3629395816, 2517608232, 2874225571, 1861159788,
                326777828, 3124490320, 2130389656, 2716951837, 967770486,
                1724537150, 2185432712, 2364442137, 1164943284, 2105845187,
                998989502, 3765401048, 2244026483, 1075463327, 1455516326,
                1322494562, 910128902, 469688178, 1117454909, 936433444,
                3490320968, 3675253459, 1240580251, 122909385, 2157517691,
                634681816, 4142456567, 3825094682, 3061402683, 2540495037,
                79693498, 3249098678, 1084186820, 1583128258, 426386531,
                1761308591, 1047286709, 322548459, 995290223, 1845252383,
                2603652396, 3431023940, 2942221577, 3202600964, 3727903485,
                1712269319, 422464435, 3234572375, 1170764815, 3523960633,
                3117677531, 1434042557, 442511882, 3600875718, 1076654713,
                1738483198, 4213154764, 2393238008, 3677496056, 1014306527,
                4251020053, 793779912, 2902807211, 842905082, 4246964064,
                1395751752, 1040244610, 2656851899, 3396308128, 445077038,
                3742853595, 3577915638, 679411651, 2892444358, 2354009459,
                1767581616, 3150600392, 3791627101, 3102740896, 284835224,
                4246832056, 1258075500, 768725851, 2589189241, 3069724005,
                3532540348, 1274779536, 3789419226, 2764799539, 1660621633,
                3471099624, 4011903706, 913787905, 3497959166, 737222580,
                2514213453, 2928710040, 3937242737, 1804850592, 3499020752,
                2949064160, 2386320175, 2390070455, 2415321851, 4061277028,
                2290661394, 2416832540, 1336762016, 1754252060, 3520065937,
                3014181293, 791618072, 3188594551, 3933548030, 2332172193,
                3852520463, 3043980520, 413987798, 3465142937, 3030929376,
                4245938359, 2093235073, 3534596313, 375366246, 2157278981,
                2479649556, 555357303, 3870105701, 2008414854, 3344188149,
                4221384143, 3956125452, 2067696032, 3594591187, 2921233993,
                2428461, 544322398, 577241275, 1471733935, 610547355,
                4027169054, 1432588573, 1507829418, 2025931657, 3646575487,
                545086370, 48609733, 2200306550, 1653985193, 298326376,
                1316178497, 3007786442, 2064951626, 458293330, 2589141269,
                3591329599, 3164325604, 727753846, 2179363840, 146436021,
                1461446943, 4069977195, 705550613, 3059967265, 3887724982,
                4281599278, 3313849956, 1404054877, 2845806497, 146425753,
                1854211946,
              ],
              [
                1266315497, 3048417604, 3681880366, 3289982499, 290971e4,
                1235738493, 2632868024, 2414719590, 3970600049, 1771706367,
                1449415276, 3266420449, 422970021, 1963543593, 2690192192,
                3826793022, 1062508698, 1531092325, 1804592342, 2583117782,
                2714934279, 4024971509, 1294809318, 4028980673, 1289560198,
                2221992742, 1669523910, 35572830, 157838143, 1052438473,
                1016535060, 1802137761, 1753167236, 1386275462, 3080475397,
                2857371447, 1040679964, 2145300060, 2390574316, 1461121720,
                2956646967, 4031777805, 4028374788, 33600511, 2920084762,
                1018524850, 629373528, 3691585981, 3515945977, 2091462646,
                2486323059, 586499841, 988145025, 935516892, 3367335476,
                2599673255, 2839830854, 265290510, 3972581182, 2759138881,
                3795373465, 1005194799, 847297441, 406762289, 1314163512,
                1332590856, 1866599683, 4127851711, 750260880, 613907577,
                1450815602, 3165620655, 3734664991, 3650291728, 3012275730,
                3704569646, 1427272223, 778793252, 1343938022, 2676280711,
                2052605720, 1946737175, 3164576444, 3914038668, 3967478842,
                3682934266, 1661551462, 3294938066, 4011595847, 840292616,
                3712170807, 616741398, 312560963, 711312465, 1351876610,
                322626781, 1910503582, 271666773, 2175563734, 1594956187,
                70604529, 3617834859, 1007753275, 1495573769, 4069517037,
                2549218298, 2663038764, 504708206, 2263041392, 3941167025,
                2249088522, 1514023603, 1998579484, 1312622330, 694541497,
                2582060303, 2151582166, 1382467621, 776784248, 2618340202,
                3323268794, 2497899128, 2784771155, 503983604, 4076293799,
                907881277, 423175695, 432175456, 1378068232, 4145222326,
                3954048622, 3938656102, 3820766613, 2793130115, 2977904593,
                26017576, 3274890735, 3194772133, 1700274565, 1756076034,
                4006520079, 3677328699, 720338349, 1533947780, 354530856,
                688349552, 3973924725, 1637815568, 332179504, 3949051286,
                53804574, 2852348879, 3044236432, 1282449977, 3583942155,
                3416972820, 4006381244, 1617046695, 2628476075, 3002303598,
                1686838959, 431878346, 2686675385, 1700445008, 1080580658,
                1009431731, 832498133, 3223435511, 2605976345, 2271191193,
                2516031870, 1648197032, 4164389018, 2548247927, 300782431,
                375919233, 238389289, 3353747414, 2531188641, 2019080857,
                1475708069, 455242339, 2609103871, 448939670, 3451063019,
                1395535956, 2413381860, 1841049896, 1491858159, 885456874,
                4264095073, 4001119347, 1565136089, 3898914787, 1108368660,
                540939232, 1173283510, 2745871338, 3681308437, 4207628240,
                3343053890, 4016749493, 1699691293, 1103962373, 3625875870,
                2256883143, 3830138730, 1031889488, 3479347698, 1535977030,
                4236805024, 3251091107, 2132092099, 1774941330, 1199868427,
                1452454533, 157007616, 2904115357, 342012276, 595725824,
                1480756522, 206960106, 497939518, 591360097, 863170706,
                2375253569, 3596610801, 1814182875, 2094937945, 3421402208,
                1082520231, 3463918190, 2785509508, 435703966, 3908032597,
                1641649973, 2842273706, 3305899714, 1510255612, 2148256476,
                2655287854, 3276092548, 4258621189, 236887753, 3681803219,
                274041037, 1734335097, 3815195456, 3317970021, 1899903192,
                1026095262, 4050517792, 356393447, 2410691914, 3873677099,
                3682840055,
              ],
              [
                3913112168, 2491498743, 4132185628, 2489919796, 1091903735,
                1979897079, 3170134830, 3567386728, 3557303409, 857797738,
                1136121015, 1342202287, 507115054, 2535736646, 337727348,
                3213592640, 1301675037, 2528481711, 1895095763, 1721773893,
                3216771564, 62756741, 2142006736, 835421444, 2531993523,
                1442658625, 3659876326, 2882144922, 676362277, 1392781812,
                170690266, 3921047035, 1759253602, 3611846912, 1745797284,
                664899054, 1329594018, 3901205900, 3045908486, 2062866102,
                2865634940, 3543621612, 3464012697, 1080764994, 553557557,
                3656615353, 3996768171, 991055499, 499776247, 1265440854,
                648242737, 3940784050, 980351604, 3713745714, 1749149687,
                3396870395, 4211799374, 3640570775, 1161844396, 3125318951,
                1431517754, 545492359, 4268468663, 3499529547, 1437099964,
                2702547544, 3433638243, 2581715763, 2787789398, 1060185593,
                1593081372, 2418618748, 4260947970, 69676912, 2159744348,
                86519011, 2512459080, 3838209314, 1220612927, 3339683548,
                133810670, 1090789135, 1078426020, 1569222167, 845107691,
                3583754449, 4072456591, 1091646820, 628848692, 1613405280,
                3757631651, 526609435, 236106946, 48312990, 2942717905,
                3402727701, 1797494240, 859738849, 992217954, 4005476642,
                2243076622, 3870952857, 3732016268, 765654824, 3490871365,
                2511836413, 1685915746, 3888969200, 1414112111, 2273134842,
                3281911079, 4080962846, 172450625, 2569994100, 980381355,
                4109958455, 2819808352, 2716589560, 2568741196, 3681446669,
                3329971472, 1835478071, 660984891, 3704678404, 4045999559,
                3422617507, 3040415634, 1762651403, 1719377915, 3470491036,
                2693910283, 3642056355, 3138596744, 1364962596, 2073328063,
                1983633131, 926494387, 3423689081, 2150032023, 4096667949,
                1749200295, 3328846651, 309677260, 2016342300, 1779581495,
                3079819751, 111262694, 1274766160, 443224088, 298511866,
                1025883608, 3806446537, 1145181785, 168956806, 3641502830,
                3584813610, 1689216846, 3666258015, 3200248200, 1692713982,
                2646376535, 4042768518, 1618508792, 1610833997, 3523052358,
                4130873264, 2001055236, 3610705100, 2202168115, 4028541809,
                2961195399, 1006657119, 2006996926, 3186142756, 1430667929,
                3210227297, 1314452623, 4074634658, 4101304120, 2273951170,
                1399257539, 3367210612, 3027628629, 1190975929, 2062231137,
                2333990788, 2221543033, 2438960610, 1181637006, 548689776,
                2362791313, 3372408396, 3104550113, 3145860560, 296247880,
                1970579870, 3078560182, 3769228297, 1714227617, 3291629107,
                3898220290, 166772364, 1251581989, 493813264, 448347421,
                195405023, 2709975567, 677966185, 3703036547, 1463355134,
                2715995803, 1338867538, 1343315457, 2802222074, 2684532164,
                233230375, 2599980071, 2000651841, 3277868038, 1638401717,
                4028070440, 3237316320, 6314154, 819756386, 300326615,
                590932579, 1405279636, 3267499572, 3150704214, 2428286686,
                3959192993, 3461946742, 1862657033, 1266418056, 963775037,
                2089974820, 2263052895, 1917689273, 448879540, 3550394620,
                3981727096, 150775221, 3627908307, 1303187396, 508620638,
                2975983352, 2726630617, 1817252668, 1876281319, 1457606340,
                908771278, 3720792119, 3617206836, 2455994898, 1729034894,
                1080033504,
              ],
              [
                976866871, 3556439503, 2881648439, 1522871579, 1555064734,
                1336096578, 3548522304, 2579274686, 3574697629, 3205460757,
                3593280638, 3338716283, 3079412587, 564236357, 2993598910,
                1781952180, 1464380207, 3163844217, 3332601554, 1699332808,
                1393555694, 1183702653, 3581086237, 1288719814, 691649499,
                2847557200, 2895455976, 3193889540, 2717570544, 1781354906,
                1676643554, 2592534050, 3230253752, 1126444790, 2770207658,
                2633158820, 2210423226, 2615765581, 2414155088, 3127139286,
                673620729, 2805611233, 1269405062, 4015350505, 3341807571,
                4149409754, 1057255273, 2012875353, 2162469141, 2276492801,
                2601117357, 993977747, 3918593370, 2654263191, 753973209,
                36408145, 2530585658, 25011837, 3520020182, 2088578344,
                530523599, 2918365339, 1524020338, 1518925132, 3760827505,
                3759777254, 1202760957, 3985898139, 3906192525, 674977740,
                4174734889, 2031300136, 2019492241, 3983892565, 4153806404,
                3822280332, 352677332, 2297720250, 60907813, 90501309,
                3286998549, 1016092578, 2535922412, 2839152426, 457141659,
                509813237, 4120667899, 652014361, 1966332200, 2975202805,
                55981186, 2327461051, 676427537, 3255491064, 2882294119,
                3433927263, 1307055953, 942726286, 933058658, 2468411793,
                3933900994, 4215176142, 1361170020, 2001714738, 2830558078,
                3274259782, 1222529897, 1679025792, 2729314320, 3714953764,
                1770335741, 151462246, 3013232138, 1682292957, 1483529935,
                471910574, 1539241949, 458788160, 3436315007, 1807016891,
                3718408830, 978976581, 1043663428, 3165965781, 1927990952,
                4200891579, 2372276910, 3208408903, 3533431907, 1412390302,
                2931980059, 4132332400, 1947078029, 3881505623, 4168226417,
                2941484381, 1077988104, 1320477388, 886195818, 18198404,
                3786409e3, 2509781533, 112762804, 3463356488, 1866414978,
                891333506, 18488651, 661792760, 1628790961, 3885187036,
                3141171499, 876946877, 2693282273, 1372485963, 791857591,
                2686433993, 3759982718, 3167212022, 3472953795, 2716379847,
                445679433, 3561995674, 3504004811, 3574258232, 54117162,
                3331405415, 2381918588, 3769707343, 4154350007, 1140177722,
                4074052095, 668550556, 3214352940, 367459370, 261225585,
                2610173221, 4209349473, 3468074219, 3265815641, 314222801,
                3066103646, 3808782860, 282218597, 3406013506, 3773591054,
                379116347, 1285071038, 846784868, 2669647154, 3771962079,
                3550491691, 2305946142, 453669953, 1268987020, 3317592352,
                3279303384, 3744833421, 2610507566, 3859509063, 266596637,
                3847019092, 517658769, 3462560207, 3443424879, 370717030,
                4247526661, 2224018117, 4143653529, 4112773975, 2788324899,
                2477274417, 1456262402, 2901442914, 1517677493, 1846949527,
                2295493580, 3734397586, 2176403920, 1280348187, 1908823572,
                3871786941, 846861322, 1172426758, 3287448474, 3383383037,
                1655181056, 3139813346, 901632758, 1897031941, 2986607138,
                3066810236, 3447102507, 1393639104, 373351379, 950779232,
                625454576, 3124240540, 4148612726, 2007998917, 544563296,
                2244738638, 2330496472, 2058025392, 1291430526, 424198748,
                50039436, 29584100, 3605783033, 2429876329, 2791104160,
                1057563949, 3255363231, 3075367218, 3463963227, 1469046755,
                985887462,
              ],
            ];
          var a = { pbox: [], sbox: [] };
          function l(f, p) {
            let v = (p >> 24) & 255,
              g = (p >> 16) & 255,
              y = (p >> 8) & 255,
              R = 255 & p,
              w = f.sbox[0][v] + f.sbox[1][g];
            return (w ^= f.sbox[2][y]), (w += f.sbox[3][R]), w;
          }
          function c(f, p, v) {
            let g,
              y = p,
              R = v;
            for (let w = 0; w < s; ++w)
              (y ^= f.pbox[w]), (R = l(f, y) ^ R), (g = y), (y = R), (R = g);
            return (
              (g = y),
              (y = R),
              (R = g),
              (R ^= f.pbox[s]),
              (y ^= f.pbox[s + 1]),
              { left: y, right: R }
            );
          }
          function u(f, p, v) {
            let g,
              y = p,
              R = v;
            for (let w = s + 1; w > 1; --w)
              (y ^= f.pbox[w]), (R = l(f, y) ^ R), (g = y), (y = R), (R = g);
            return (
              (g = y),
              (y = R),
              (R = g),
              (R ^= f.pbox[1]),
              (y ^= f.pbox[0]),
              { left: y, right: R }
            );
          }
          function h(f, p, v) {
            for (let _ = 0; _ < 4; _++) {
              f.sbox[_] = [];
              for (let m = 0; m < 256; m++) f.sbox[_][m] = o[_][m];
            }
            let g = 0;
            for (let _ = 0; _ < s + 2; _++)
              (f.pbox[_] = i[_] ^ p[g]), g++, g >= v && (g = 0);
            let y = 0,
              R = 0,
              w = 0;
            for (let _ = 0; _ < s + 2; _ += 2)
              (w = c(f, y, R)),
                (y = w.left),
                (R = w.right),
                (f.pbox[_] = y),
                (f.pbox[_ + 1] = R);
            for (let _ = 0; _ < 4; _++)
              for (let m = 0; m < 256; m += 2)
                (w = c(f, y, R)),
                  (y = w.left),
                  (R = w.right),
                  (f.sbox[_][m] = y),
                  (f.sbox[_][m + 1] = R);
            return !0;
          }
          var d = (n.Blowfish = r.extend({
            _doReset: function () {
              if (this._keyPriorReset !== this._key) {
                var f = (this._keyPriorReset = this._key),
                  p = f.words,
                  v = f.sigBytes / 4;
                h(a, p, v);
              }
            },
            encryptBlock: function (f, p) {
              var v = c(a, f[p], f[p + 1]);
              (f[p] = v.left), (f[p + 1] = v.right);
            },
            decryptBlock: function (f, p) {
              var v = u(a, f[p], f[p + 1]);
              (f[p] = v.left), (f[p + 1] = v.right);
            },
            blockSize: 2,
            keySize: 4,
            ivSize: 2,
          }));
          t.Blowfish = r._createHelper(d);
        })(),
        e.Blowfish))),
    An.exports
  );
  var e;
}
var Pn,
  Ae,
  ei =
    (Pn ||
      ((Pn = 1),
      (pr.exports = (function (e) {
        return e;
      })(
        G(),
        De(),
        Vs(),
        zs(),
        Ut(),
        Qs(),
        Ft(),
        as(),
        ke(),
        Or ||
          ((Or = 1),
          (Ae = G()),
          ke(),
          (function () {
            var e = Ae,
              t = e.lib.WordArray,
              r = e.algo,
              n = r.SHA256,
              s = (r.SHA224 = n.extend({
                _doReset: function () {
                  this._hash = new t.init([
                    3238371032, 914150663, 812702999, 4144912697, 4290775857,
                    1750603025, 1694076839, 3204075428,
                  ]);
                },
                _doFinalize: function () {
                  var i = n._doFinalize.call(this);
                  return (i.sigBytes -= 4), i;
                },
              }));
            (e.SHA224 = n._createHelper(s)),
              (e.HmacSHA224 = n._createHmacHelper(s));
          })(),
          Ae.SHA224),
        Nr(),
        (function () {
          return (
            Kr ||
              ((Kr = 1),
              (Ur.exports =
                ((e = G()),
                De(),
                Nr(),
                (function () {
                  var t = e,
                    r = t.x64,
                    n = r.Word,
                    s = r.WordArray,
                    i = t.algo,
                    o = i.SHA512,
                    a = (i.SHA384 = o.extend({
                      _doReset: function () {
                        this._hash = new s.init([
                          new n.init(3418070365, 3238371032),
                          new n.init(1654270250, 914150663),
                          new n.init(2438529370, 812702999),
                          new n.init(355462360, 4144912697),
                          new n.init(1731405415, 4290775857),
                          new n.init(2394180231, 1750603025),
                          new n.init(3675008525, 1694076839),
                          new n.init(1203062813, 3204075428),
                        ]);
                      },
                      _doFinalize: function () {
                        var l = o._doFinalize.call(this);
                        return (l.sigBytes -= 16), l;
                      },
                    }));
                  (t.SHA384 = o._createHelper(a)),
                    (t.HmacSHA384 = o._createHmacHelper(a));
                })(),
                e.SHA384))),
            Ur.exports
          );
          var e;
        })(),
        Xs(),
        (function () {
          return (
            Wr ||
              ((Wr = 1),
              (Yr.exports =
                ((e = G()),
                (function () {
                  var t = e,
                    r = t.lib,
                    n = r.WordArray,
                    s = r.Hasher,
                    i = t.algo,
                    o = n.create([
                      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7,
                      4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10,
                      14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11,
                      10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7,
                      12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13,
                    ]),
                    a = n.create([
                      5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6,
                      11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5,
                      1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1,
                      3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4,
                      1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11,
                    ]),
                    l = n.create([
                      11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7,
                      6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11,
                      13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11,
                      12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15,
                      5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6,
                    ]),
                    c = n.create([
                      8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9,
                      13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7,
                      15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5,
                      8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12,
                      9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11,
                    ]),
                    u = n.create([
                      0, 1518500249, 1859775393, 2400959708, 2840853838,
                    ]),
                    h = n.create([
                      1352829926, 1548603684, 1836072691, 2053994217, 0,
                    ]),
                    d = (i.RIPEMD160 = s.extend({
                      _doReset: function () {
                        this._hash = n.create([
                          1732584193, 4023233417, 2562383102, 271733878,
                          3285377520,
                        ]);
                      },
                      _doProcessBlock: function (w, _) {
                        for (var m = 0; m < 16; m++) {
                          var B = _ + m,
                            D = w[B];
                          w[B] =
                            (16711935 & ((D << 8) | (D >>> 24))) |
                            (4278255360 & ((D << 24) | (D >>> 8)));
                        }
                        var T,
                          k,
                          A,
                          P,
                          F,
                          W,
                          Y,
                          N,
                          x,
                          z,
                          Q,
                          C = this._hash.words,
                          M = u.words,
                          S = h.words,
                          L = o.words,
                          rt = a.words,
                          _t = l.words,
                          ft = c.words;
                        for (
                          W = T = C[0],
                            Y = k = C[1],
                            N = A = C[2],
                            x = P = C[3],
                            z = F = C[4],
                            m = 0;
                          m < 80;
                          m += 1
                        )
                          (Q = (T + w[_ + L[m]]) | 0),
                            (Q +=
                              m < 16
                                ? f(k, A, P) + M[0]
                                : m < 32
                                ? p(k, A, P) + M[1]
                                : m < 48
                                ? v(k, A, P) + M[2]
                                : m < 64
                                ? g(k, A, P) + M[3]
                                : y(k, A, P) + M[4]),
                            (Q = ((Q = R((Q |= 0), _t[m])) + F) | 0),
                            (T = F),
                            (F = P),
                            (P = R(A, 10)),
                            (A = k),
                            (k = Q),
                            (Q = (W + w[_ + rt[m]]) | 0),
                            (Q +=
                              m < 16
                                ? y(Y, N, x) + S[0]
                                : m < 32
                                ? g(Y, N, x) + S[1]
                                : m < 48
                                ? v(Y, N, x) + S[2]
                                : m < 64
                                ? p(Y, N, x) + S[3]
                                : f(Y, N, x) + S[4]),
                            (Q = ((Q = R((Q |= 0), ft[m])) + z) | 0),
                            (W = z),
                            (z = x),
                            (x = R(N, 10)),
                            (N = Y),
                            (Y = Q);
                        (Q = (C[1] + A + x) | 0),
                          (C[1] = (C[2] + P + z) | 0),
                          (C[2] = (C[3] + F + W) | 0),
                          (C[3] = (C[4] + T + Y) | 0),
                          (C[4] = (C[0] + k + N) | 0),
                          (C[0] = Q);
                      },
                      _doFinalize: function () {
                        var w = this._data,
                          _ = w.words,
                          m = 8 * this._nDataBytes,
                          B = 8 * w.sigBytes;
                        (_[B >>> 5] |= 128 << (24 - (B % 32))),
                          (_[14 + (((B + 64) >>> 9) << 4)] =
                            (16711935 & ((m << 8) | (m >>> 24))) |
                            (4278255360 & ((m << 24) | (m >>> 8)))),
                          (w.sigBytes = 4 * (_.length + 1)),
                          this._process();
                        for (
                          var D = this._hash, T = D.words, k = 0;
                          k < 5;
                          k++
                        ) {
                          var A = T[k];
                          T[k] =
                            (16711935 & ((A << 8) | (A >>> 24))) |
                            (4278255360 & ((A << 24) | (A >>> 8)));
                        }
                        return D;
                      },
                      clone: function () {
                        var w = s.clone.call(this);
                        return (w._hash = this._hash.clone()), w;
                      },
                    }));
                  function f(w, _, m) {
                    return w ^ _ ^ m;
                  }
                  function p(w, _, m) {
                    return (w & _) | (~w & m);
                  }
                  function v(w, _, m) {
                    return (w | ~_) ^ m;
                  }
                  function g(w, _, m) {
                    return (w & m) | (_ & ~m);
                  }
                  function y(w, _, m) {
                    return w ^ (_ | ~m);
                  }
                  function R(w, _) {
                    return (w << _) | (w >>> (32 - _));
                  }
                  (t.RIPEMD160 = s._createHelper(d)),
                    (t.HmacRIPEMD160 = s._createHmacHelper(d));
                })(),
                e.RIPEMD160))),
            Yr.exports
          );
          var e;
        })(),
        Ge(),
        (function () {
          return (
            zr ||
              ((zr = 1),
              (Qr.exports =
                ((e = G()),
                ke(),
                Ge(),
                (function () {
                  var t = e,
                    r = t.lib,
                    n = r.Base,
                    s = r.WordArray,
                    i = t.algo,
                    o = i.SHA256,
                    a = i.HMAC,
                    l = (i.PBKDF2 = n.extend({
                      cfg: n.extend({
                        keySize: 4,
                        hasher: o,
                        iterations: 25e4,
                      }),
                      init: function (c) {
                        this.cfg = this.cfg.extend(c);
                      },
                      compute: function (c, u) {
                        for (
                          var h = this.cfg,
                            d = a.create(h.hasher, c),
                            f = s.create(),
                            p = s.create([1]),
                            v = f.words,
                            g = p.words,
                            y = h.keySize,
                            R = h.iterations;
                          v.length < y;

                        ) {
                          var w = d.update(u).finalize(p);
                          d.reset();
                          for (
                            var _ = w.words, m = _.length, B = w, D = 1;
                            D < R;
                            D++
                          ) {
                            (B = d.finalize(B)), d.reset();
                            for (var T = B.words, k = 0; k < m; k++)
                              _[k] ^= T[k];
                          }
                          f.concat(w), g[0]++;
                        }
                        return (f.sigBytes = 4 * y), f;
                      },
                    }));
                  t.PBKDF2 = function (c, u, h) {
                    return l.create(h).compute(c, u);
                  };
                })(),
                e.PBKDF2))),
            Qr.exports
          );
          var e;
        })(),
        At(),
        et(),
        qs(),
        js(),
        $s(),
        Zs(),
        (function () {
          return an
            ? cn.exports
            : ((an = 1),
              (cn.exports =
                ((t = G()),
                et(),
                (t.mode.ECB =
                  (((e = t.lib.BlockCipherMode.extend()).Encryptor = e.extend({
                    processBlock: function (r, n) {
                      this._cipher.encryptBlock(r, n);
                    },
                  })),
                  (e.Decryptor = e.extend({
                    processBlock: function (r, n) {
                      this._cipher.decryptBlock(r, n);
                    },
                  })),
                  e)),
                t.mode.ECB)));
          var e, t;
        })(),
        (function () {
          return un
            ? ln.exports
            : ((un = 1),
              (ln.exports =
                ((e = G()),
                et(),
                (e.pad.AnsiX923 = {
                  pad: function (t, r) {
                    var n = t.sigBytes,
                      s = 4 * r,
                      i = s - (n % s),
                      o = n + i - 1;
                    t.clamp(),
                      (t.words[o >>> 2] |= i << (24 - (o % 4) * 8)),
                      (t.sigBytes += i);
                  },
                  unpad: function (t) {
                    var r = 255 & t.words[(t.sigBytes - 1) >>> 2];
                    t.sigBytes -= r;
                  },
                }),
                e.pad.Ansix923)));
          var e;
        })(),
        (function () {
          return hn
            ? dn.exports
            : ((hn = 1),
              (dn.exports =
                ((e = G()),
                et(),
                (e.pad.Iso10126 = {
                  pad: function (t, r) {
                    var n = 4 * r,
                      s = n - (t.sigBytes % n);
                    t.concat(e.lib.WordArray.random(s - 1)).concat(
                      e.lib.WordArray.create([s << 24], 1)
                    );
                  },
                  unpad: function (t) {
                    var r = 255 & t.words[(t.sigBytes - 1) >>> 2];
                    t.sigBytes -= r;
                  },
                }),
                e.pad.Iso10126)));
          var e;
        })(),
        (function () {
          return fn
            ? gn.exports
            : ((fn = 1),
              (gn.exports =
                ((e = G()),
                et(),
                (e.pad.Iso97971 = {
                  pad: function (t, r) {
                    t.concat(e.lib.WordArray.create([2147483648], 1)),
                      e.pad.ZeroPadding.pad(t, r);
                  },
                  unpad: function (t) {
                    e.pad.ZeroPadding.unpad(t), t.sigBytes--;
                  },
                }),
                e.pad.Iso97971)));
          var e;
        })(),
        (function () {
          return (
            pn ||
              ((pn = 1),
              (yn.exports =
                ((e = G()),
                et(),
                (e.pad.ZeroPadding = {
                  pad: function (t, r) {
                    var n = 4 * r;
                    t.clamp(), (t.sigBytes += n - (t.sigBytes % n || n));
                  },
                  unpad: function (t) {
                    var r = t.words,
                      n = t.sigBytes - 1;
                    for (n = t.sigBytes - 1; n >= 0; n--)
                      if ((r[n >>> 2] >>> (24 - (n % 4) * 8)) & 255) {
                        t.sigBytes = n + 1;
                        break;
                      }
                  },
                }),
                e.pad.ZeroPadding))),
            yn.exports
          );
          var e;
        })(),
        (function () {
          return _n
            ? vn.exports
            : ((_n = 1),
              (vn.exports =
                ((e = G()),
                et(),
                (e.pad.NoPadding = {
                  pad: function () {},
                  unpad: function () {},
                }),
                e.pad.NoPadding)));
          var e;
        })(),
        (function () {
          return (
            mn ||
              ((mn = 1),
              (Rn.exports =
                ((e = G()),
                et(),
                (function () {
                  var t = e,
                    r = t.lib.CipherParams,
                    n = t.enc.Hex;
                  t.format.Hex = {
                    stringify: function (s) {
                      return s.ciphertext.toString(n);
                    },
                    parse: function (s) {
                      var i = n.parse(s);
                      return r.create({ ciphertext: i });
                    },
                  };
                })(),
                e.format.Hex))),
            Rn.exports
          );
          var e;
        })(),
        (function () {
          return (
            wn ||
              ((wn = 1),
              (Dn.exports =
                ((e = G()),
                Ut(),
                Ft(),
                At(),
                et(),
                (function () {
                  var t = e,
                    r = t.lib.BlockCipher,
                    n = t.algo,
                    s = [],
                    i = [],
                    o = [],
                    a = [],
                    l = [],
                    c = [],
                    u = [],
                    h = [],
                    d = [],
                    f = [];
                  (function () {
                    for (var g = [], y = 0; y < 256; y++)
                      g[y] = y < 128 ? y << 1 : (y << 1) ^ 283;
                    var R = 0,
                      w = 0;
                    for (y = 0; y < 256; y++) {
                      var _ = w ^ (w << 1) ^ (w << 2) ^ (w << 3) ^ (w << 4);
                      (_ = (_ >>> 8) ^ (255 & _) ^ 99), (s[R] = _), (i[_] = R);
                      var m = g[R],
                        B = g[m],
                        D = g[B],
                        T = (257 * g[_]) ^ (16843008 * _);
                      (o[R] = (T << 24) | (T >>> 8)),
                        (a[R] = (T << 16) | (T >>> 16)),
                        (l[R] = (T << 8) | (T >>> 24)),
                        (c[R] = T),
                        (T =
                          (16843009 * D) ^
                          (65537 * B) ^
                          (257 * m) ^
                          (16843008 * R)),
                        (u[_] = (T << 24) | (T >>> 8)),
                        (h[_] = (T << 16) | (T >>> 16)),
                        (d[_] = (T << 8) | (T >>> 24)),
                        (f[_] = T),
                        R
                          ? ((R = m ^ g[g[g[D ^ m]]]), (w ^= g[g[w]]))
                          : (R = w = 1);
                    }
                  })();
                  var p = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
                    v = (n.AES = r.extend({
                      _doReset: function () {
                        if (
                          !this._nRounds ||
                          this._keyPriorReset !== this._key
                        ) {
                          for (
                            var g = (this._keyPriorReset = this._key),
                              y = g.words,
                              R = g.sigBytes / 4,
                              w = 4 * ((this._nRounds = R + 6) + 1),
                              _ = (this._keySchedule = []),
                              m = 0;
                            m < w;
                            m++
                          )
                            m < R
                              ? (_[m] = y[m])
                              : ((T = _[m - 1]),
                                m % R
                                  ? R > 6 &&
                                    m % R == 4 &&
                                    (T =
                                      (s[T >>> 24] << 24) |
                                      (s[(T >>> 16) & 255] << 16) |
                                      (s[(T >>> 8) & 255] << 8) |
                                      s[255 & T])
                                  : ((T =
                                      (s[(T = (T << 8) | (T >>> 24)) >>> 24] <<
                                        24) |
                                      (s[(T >>> 16) & 255] << 16) |
                                      (s[(T >>> 8) & 255] << 8) |
                                      s[255 & T]),
                                    (T ^= p[(m / R) | 0] << 24)),
                                (_[m] = _[m - R] ^ T));
                          for (
                            var B = (this._invKeySchedule = []), D = 0;
                            D < w;
                            D++
                          ) {
                            if (((m = w - D), D % 4)) var T = _[m];
                            else T = _[m - 4];
                            B[D] =
                              D < 4 || m <= 4
                                ? T
                                : u[s[T >>> 24]] ^
                                  h[s[(T >>> 16) & 255]] ^
                                  d[s[(T >>> 8) & 255]] ^
                                  f[s[255 & T]];
                          }
                        }
                      },
                      encryptBlock: function (g, y) {
                        this._doCryptBlock(
                          g,
                          y,
                          this._keySchedule,
                          o,
                          a,
                          l,
                          c,
                          s
                        );
                      },
                      decryptBlock: function (g, y) {
                        var R = g[y + 1];
                        (g[y + 1] = g[y + 3]),
                          (g[y + 3] = R),
                          this._doCryptBlock(
                            g,
                            y,
                            this._invKeySchedule,
                            u,
                            h,
                            d,
                            f,
                            i
                          ),
                          (R = g[y + 1]),
                          (g[y + 1] = g[y + 3]),
                          (g[y + 3] = R);
                      },
                      _doCryptBlock: function (g, y, R, w, _, m, B, D) {
                        for (
                          var T = this._nRounds,
                            k = g[y] ^ R[0],
                            A = g[y + 1] ^ R[1],
                            P = g[y + 2] ^ R[2],
                            F = g[y + 3] ^ R[3],
                            W = 4,
                            Y = 1;
                          Y < T;
                          Y++
                        ) {
                          var N =
                              w[k >>> 24] ^
                              _[(A >>> 16) & 255] ^
                              m[(P >>> 8) & 255] ^
                              B[255 & F] ^
                              R[W++],
                            x =
                              w[A >>> 24] ^
                              _[(P >>> 16) & 255] ^
                              m[(F >>> 8) & 255] ^
                              B[255 & k] ^
                              R[W++],
                            z =
                              w[P >>> 24] ^
                              _[(F >>> 16) & 255] ^
                              m[(k >>> 8) & 255] ^
                              B[255 & A] ^
                              R[W++],
                            Q =
                              w[F >>> 24] ^
                              _[(k >>> 16) & 255] ^
                              m[(A >>> 8) & 255] ^
                              B[255 & P] ^
                              R[W++];
                          (k = N), (A = x), (P = z), (F = Q);
                        }
                        (N =
                          ((D[k >>> 24] << 24) |
                            (D[(A >>> 16) & 255] << 16) |
                            (D[(P >>> 8) & 255] << 8) |
                            D[255 & F]) ^
                          R[W++]),
                          (x =
                            ((D[A >>> 24] << 24) |
                              (D[(P >>> 16) & 255] << 16) |
                              (D[(F >>> 8) & 255] << 8) |
                              D[255 & k]) ^
                            R[W++]),
                          (z =
                            ((D[P >>> 24] << 24) |
                              (D[(F >>> 16) & 255] << 16) |
                              (D[(k >>> 8) & 255] << 8) |
                              D[255 & A]) ^
                            R[W++]),
                          (Q =
                            ((D[F >>> 24] << 24) |
                              (D[(k >>> 16) & 255] << 16) |
                              (D[(A >>> 8) & 255] << 8) |
                              D[255 & P]) ^
                            R[W++]),
                          (g[y] = N),
                          (g[y + 1] = x),
                          (g[y + 2] = z),
                          (g[y + 3] = Q);
                      },
                      keySize: 8,
                    }));
                  t.AES = r._createHelper(v);
                })(),
                e.AES))),
            Dn.exports
          );
          var e;
        })(),
        Js(),
        (function () {
          return (
            Tn ||
              ((Tn = 1),
              (Sn.exports =
                ((e = G()),
                Ut(),
                Ft(),
                At(),
                et(),
                (function () {
                  var t = e,
                    r = t.lib.StreamCipher,
                    n = t.algo,
                    s = (n.RC4 = r.extend({
                      _doReset: function () {
                        for (
                          var a = this._key,
                            l = a.words,
                            c = a.sigBytes,
                            u = (this._S = []),
                            h = 0;
                          h < 256;
                          h++
                        )
                          u[h] = h;
                        h = 0;
                        for (var d = 0; h < 256; h++) {
                          var f = h % c,
                            p = (l[f >>> 2] >>> (24 - (f % 4) * 8)) & 255;
                          d = (d + u[h] + p) % 256;
                          var v = u[h];
                          (u[h] = u[d]), (u[d] = v);
                        }
                        this._i = this._j = 0;
                      },
                      _doProcessBlock: function (a, l) {
                        a[l] ^= i.call(this);
                      },
                      keySize: 8,
                      ivSize: 0,
                    }));
                  function i() {
                    for (
                      var a = this._S, l = this._i, c = this._j, u = 0, h = 0;
                      h < 4;
                      h++
                    ) {
                      c = (c + a[(l = (l + 1) % 256)]) % 256;
                      var d = a[l];
                      (a[l] = a[c]),
                        (a[c] = d),
                        (u |= a[(a[l] + a[c]) % 256] << (24 - 8 * h));
                    }
                    return (this._i = l), (this._j = c), u;
                  }
                  t.RC4 = r._createHelper(s);
                  var o = (n.RC4Drop = s.extend({
                    cfg: s.cfg.extend({ drop: 192 }),
                    _doReset: function () {
                      s._doReset.call(this);
                      for (var a = this.cfg.drop; a > 0; a--) i.call(this);
                    },
                  }));
                  t.RC4Drop = r._createHelper(o);
                })(),
                e.RC4))),
            Sn.exports
          );
          var e;
        })(),
        (function () {
          return (
            bn ||
              ((bn = 1),
              (Cn.exports =
                ((e = G()),
                Ut(),
                Ft(),
                At(),
                et(),
                (function () {
                  var t = e,
                    r = t.lib.StreamCipher,
                    n = t.algo,
                    s = [],
                    i = [],
                    o = [],
                    a = (n.Rabbit = r.extend({
                      _doReset: function () {
                        for (
                          var c = this._key.words, u = this.cfg.iv, h = 0;
                          h < 4;
                          h++
                        )
                          c[h] =
                            (16711935 & ((c[h] << 8) | (c[h] >>> 24))) |
                            (4278255360 & ((c[h] << 24) | (c[h] >>> 8)));
                        var d = (this._X = [
                            c[0],
                            (c[3] << 16) | (c[2] >>> 16),
                            c[1],
                            (c[0] << 16) | (c[3] >>> 16),
                            c[2],
                            (c[1] << 16) | (c[0] >>> 16),
                            c[3],
                            (c[2] << 16) | (c[1] >>> 16),
                          ]),
                          f = (this._C = [
                            (c[2] << 16) | (c[2] >>> 16),
                            (4294901760 & c[0]) | (65535 & c[1]),
                            (c[3] << 16) | (c[3] >>> 16),
                            (4294901760 & c[1]) | (65535 & c[2]),
                            (c[0] << 16) | (c[0] >>> 16),
                            (4294901760 & c[2]) | (65535 & c[3]),
                            (c[1] << 16) | (c[1] >>> 16),
                            (4294901760 & c[3]) | (65535 & c[0]),
                          ]);
                        for (this._b = 0, h = 0; h < 4; h++) l.call(this);
                        for (h = 0; h < 8; h++) f[h] ^= d[(h + 4) & 7];
                        if (u) {
                          var p = u.words,
                            v = p[0],
                            g = p[1],
                            y =
                              (16711935 & ((v << 8) | (v >>> 24))) |
                              (4278255360 & ((v << 24) | (v >>> 8))),
                            R =
                              (16711935 & ((g << 8) | (g >>> 24))) |
                              (4278255360 & ((g << 24) | (g >>> 8))),
                            w = (y >>> 16) | (4294901760 & R),
                            _ = (R << 16) | (65535 & y);
                          for (
                            f[0] ^= y,
                              f[1] ^= w,
                              f[2] ^= R,
                              f[3] ^= _,
                              f[4] ^= y,
                              f[5] ^= w,
                              f[6] ^= R,
                              f[7] ^= _,
                              h = 0;
                            h < 4;
                            h++
                          )
                            l.call(this);
                        }
                      },
                      _doProcessBlock: function (c, u) {
                        var h = this._X;
                        l.call(this),
                          (s[0] = h[0] ^ (h[5] >>> 16) ^ (h[3] << 16)),
                          (s[1] = h[2] ^ (h[7] >>> 16) ^ (h[5] << 16)),
                          (s[2] = h[4] ^ (h[1] >>> 16) ^ (h[7] << 16)),
                          (s[3] = h[6] ^ (h[3] >>> 16) ^ (h[1] << 16));
                        for (var d = 0; d < 4; d++)
                          (s[d] =
                            (16711935 & ((s[d] << 8) | (s[d] >>> 24))) |
                            (4278255360 & ((s[d] << 24) | (s[d] >>> 8)))),
                            (c[u + d] ^= s[d]);
                      },
                      blockSize: 4,
                      ivSize: 2,
                    }));
                  function l() {
                    for (var c = this._X, u = this._C, h = 0; h < 8; h++)
                      i[h] = u[h];
                    for (
                      u[0] = (u[0] + 1295307597 + this._b) | 0,
                        u[1] =
                          (u[1] +
                            3545052371 +
                            (u[0] >>> 0 < i[0] >>> 0 ? 1 : 0)) |
                          0,
                        u[2] =
                          (u[2] +
                            886263092 +
                            (u[1] >>> 0 < i[1] >>> 0 ? 1 : 0)) |
                          0,
                        u[3] =
                          (u[3] +
                            1295307597 +
                            (u[2] >>> 0 < i[2] >>> 0 ? 1 : 0)) |
                          0,
                        u[4] =
                          (u[4] +
                            3545052371 +
                            (u[3] >>> 0 < i[3] >>> 0 ? 1 : 0)) |
                          0,
                        u[5] =
                          (u[5] +
                            886263092 +
                            (u[4] >>> 0 < i[4] >>> 0 ? 1 : 0)) |
                          0,
                        u[6] =
                          (u[6] +
                            1295307597 +
                            (u[5] >>> 0 < i[5] >>> 0 ? 1 : 0)) |
                          0,
                        u[7] =
                          (u[7] +
                            3545052371 +
                            (u[6] >>> 0 < i[6] >>> 0 ? 1 : 0)) |
                          0,
                        this._b = u[7] >>> 0 < i[7] >>> 0 ? 1 : 0,
                        h = 0;
                      h < 8;
                      h++
                    ) {
                      var d = c[h] + u[h],
                        f = 65535 & d,
                        p = d >>> 16,
                        v = ((((f * f) >>> 17) + f * p) >>> 15) + p * p,
                        g =
                          (((4294901760 & d) * d) | 0) +
                          (((65535 & d) * d) | 0);
                      o[h] = v ^ g;
                    }
                    (c[0] =
                      (o[0] +
                        ((o[7] << 16) | (o[7] >>> 16)) +
                        ((o[6] << 16) | (o[6] >>> 16))) |
                      0),
                      (c[1] =
                        (o[1] + ((o[0] << 8) | (o[0] >>> 24)) + o[7]) | 0),
                      (c[2] =
                        (o[2] +
                          ((o[1] << 16) | (o[1] >>> 16)) +
                          ((o[0] << 16) | (o[0] >>> 16))) |
                        0),
                      (c[3] =
                        (o[3] + ((o[2] << 8) | (o[2] >>> 24)) + o[1]) | 0),
                      (c[4] =
                        (o[4] +
                          ((o[3] << 16) | (o[3] >>> 16)) +
                          ((o[2] << 16) | (o[2] >>> 16))) |
                        0),
                      (c[5] =
                        (o[5] + ((o[4] << 8) | (o[4] >>> 24)) + o[3]) | 0),
                      (c[6] =
                        (o[6] +
                          ((o[5] << 16) | (o[5] >>> 16)) +
                          ((o[4] << 16) | (o[4] >>> 16))) |
                        0),
                      (c[7] =
                        (o[7] + ((o[6] << 8) | (o[6] >>> 24)) + o[5]) | 0);
                  }
                  t.Rabbit = r._createHelper(a);
                })(),
                e.Rabbit))),
            Cn.exports
          );
          var e;
        })(),
        (function () {
          return (
            Ln ||
              ((Ln = 1),
              (Mn.exports =
                ((e = G()),
                Ut(),
                Ft(),
                At(),
                et(),
                (function () {
                  var t = e,
                    r = t.lib.StreamCipher,
                    n = t.algo,
                    s = [],
                    i = [],
                    o = [],
                    a = (n.RabbitLegacy = r.extend({
                      _doReset: function () {
                        var c = this._key.words,
                          u = this.cfg.iv,
                          h = (this._X = [
                            c[0],
                            (c[3] << 16) | (c[2] >>> 16),
                            c[1],
                            (c[0] << 16) | (c[3] >>> 16),
                            c[2],
                            (c[1] << 16) | (c[0] >>> 16),
                            c[3],
                            (c[2] << 16) | (c[1] >>> 16),
                          ]),
                          d = (this._C = [
                            (c[2] << 16) | (c[2] >>> 16),
                            (4294901760 & c[0]) | (65535 & c[1]),
                            (c[3] << 16) | (c[3] >>> 16),
                            (4294901760 & c[1]) | (65535 & c[2]),
                            (c[0] << 16) | (c[0] >>> 16),
                            (4294901760 & c[2]) | (65535 & c[3]),
                            (c[1] << 16) | (c[1] >>> 16),
                            (4294901760 & c[3]) | (65535 & c[0]),
                          ]);
                        this._b = 0;
                        for (var f = 0; f < 4; f++) l.call(this);
                        for (f = 0; f < 8; f++) d[f] ^= h[(f + 4) & 7];
                        if (u) {
                          var p = u.words,
                            v = p[0],
                            g = p[1],
                            y =
                              (16711935 & ((v << 8) | (v >>> 24))) |
                              (4278255360 & ((v << 24) | (v >>> 8))),
                            R =
                              (16711935 & ((g << 8) | (g >>> 24))) |
                              (4278255360 & ((g << 24) | (g >>> 8))),
                            w = (y >>> 16) | (4294901760 & R),
                            _ = (R << 16) | (65535 & y);
                          for (
                            d[0] ^= y,
                              d[1] ^= w,
                              d[2] ^= R,
                              d[3] ^= _,
                              d[4] ^= y,
                              d[5] ^= w,
                              d[6] ^= R,
                              d[7] ^= _,
                              f = 0;
                            f < 4;
                            f++
                          )
                            l.call(this);
                        }
                      },
                      _doProcessBlock: function (c, u) {
                        var h = this._X;
                        l.call(this),
                          (s[0] = h[0] ^ (h[5] >>> 16) ^ (h[3] << 16)),
                          (s[1] = h[2] ^ (h[7] >>> 16) ^ (h[5] << 16)),
                          (s[2] = h[4] ^ (h[1] >>> 16) ^ (h[7] << 16)),
                          (s[3] = h[6] ^ (h[3] >>> 16) ^ (h[1] << 16));
                        for (var d = 0; d < 4; d++)
                          (s[d] =
                            (16711935 & ((s[d] << 8) | (s[d] >>> 24))) |
                            (4278255360 & ((s[d] << 24) | (s[d] >>> 8)))),
                            (c[u + d] ^= s[d]);
                      },
                      blockSize: 4,
                      ivSize: 2,
                    }));
                  function l() {
                    for (var c = this._X, u = this._C, h = 0; h < 8; h++)
                      i[h] = u[h];
                    for (
                      u[0] = (u[0] + 1295307597 + this._b) | 0,
                        u[1] =
                          (u[1] +
                            3545052371 +
                            (u[0] >>> 0 < i[0] >>> 0 ? 1 : 0)) |
                          0,
                        u[2] =
                          (u[2] +
                            886263092 +
                            (u[1] >>> 0 < i[1] >>> 0 ? 1 : 0)) |
                          0,
                        u[3] =
                          (u[3] +
                            1295307597 +
                            (u[2] >>> 0 < i[2] >>> 0 ? 1 : 0)) |
                          0,
                        u[4] =
                          (u[4] +
                            3545052371 +
                            (u[3] >>> 0 < i[3] >>> 0 ? 1 : 0)) |
                          0,
                        u[5] =
                          (u[5] +
                            886263092 +
                            (u[4] >>> 0 < i[4] >>> 0 ? 1 : 0)) |
                          0,
                        u[6] =
                          (u[6] +
                            1295307597 +
                            (u[5] >>> 0 < i[5] >>> 0 ? 1 : 0)) |
                          0,
                        u[7] =
                          (u[7] +
                            3545052371 +
                            (u[6] >>> 0 < i[6] >>> 0 ? 1 : 0)) |
                          0,
                        this._b = u[7] >>> 0 < i[7] >>> 0 ? 1 : 0,
                        h = 0;
                      h < 8;
                      h++
                    ) {
                      var d = c[h] + u[h],
                        f = 65535 & d,
                        p = d >>> 16,
                        v = ((((f * f) >>> 17) + f * p) >>> 15) + p * p,
                        g =
                          (((4294901760 & d) * d) | 0) +
                          (((65535 & d) * d) | 0);
                      o[h] = v ^ g;
                    }
                    (c[0] =
                      (o[0] +
                        ((o[7] << 16) | (o[7] >>> 16)) +
                        ((o[6] << 16) | (o[6] >>> 16))) |
                      0),
                      (c[1] =
                        (o[1] + ((o[0] << 8) | (o[0] >>> 24)) + o[7]) | 0),
                      (c[2] =
                        (o[2] +
                          ((o[1] << 16) | (o[1] >>> 16)) +
                          ((o[0] << 16) | (o[0] >>> 16))) |
                        0),
                      (c[3] =
                        (o[3] + ((o[2] << 8) | (o[2] >>> 24)) + o[1]) | 0),
                      (c[4] =
                        (o[4] +
                          ((o[3] << 16) | (o[3] >>> 16)) +
                          ((o[2] << 16) | (o[2] >>> 16))) |
                        0),
                      (c[5] =
                        (o[5] + ((o[4] << 8) | (o[4] >>> 24)) + o[3]) | 0),
                      (c[6] =
                        (o[6] +
                          ((o[5] << 16) | (o[5] >>> 16)) +
                          ((o[4] << 16) | (o[4] >>> 16))) |
                        0),
                      (c[7] =
                        (o[7] + ((o[6] << 8) | (o[6] >>> 24)) + o[5]) | 0);
                  }
                  t.RabbitLegacy = r._createHelper(a);
                })(),
                e.RabbitLegacy))),
            Mn.exports
          );
          var e;
        })(),
        ti()
      ))),
    pr.exports),
  Pe = Hs(ei);
const vt = [1732584193, 4023233417, 2562383102, 271733878],
  mt = [1696822273, 1930445398, 4020996557, 3130580222],
  ri = (e, t) => {
    const r = new Array(244),
      n = t.length;
    for (let i = 0; i < 244; i++) r[i] = 255;
    const s = n - e + 1;
    if (s < 244) for (let i = 0; i < s - 1; i++) r[i] = t[e++];
    else for (let i = 0; i < 244; i++) r[i] = t[e++];
    return r;
  },
  Z = (e) =>
    new Promise((t) => {
      setTimeout(t, e);
    }),
  bt = (e, t) => {
    let r = e[0],
      n = e[1],
      s = 0;
    for (let i = 0; i < 16; i++)
      (s = (s + 2654435769) >>> 0),
        (r = (r + (((n << 4) + t[0]) ^ (n + s) ^ ((n >>> 5) + t[1]))) >>> 0),
        (n = (n + (((r << 4) + t[2]) ^ (r + s) ^ ((r >>> 5) + t[3]))) >>> 0);
    return (e[0] = r), (e[1] = n), e;
  },
  ni = (e) => (e[0] | (e[1] << 8) | (e[2] << 16) | (e[3] << 24)) >>> 0,
  ge = (e) => [255 & e, (e >> 8) & 255, (e >> 16) & 255, (e >> 24) & 255],
  Rt = (e, t, r, n) => {
    const s = [],
      i = t.slice();
    for (let l = 0; l < 4; l++) s[l] = ni(e.slice(4 * l, 4 * (l + 1)));
    let o = [];
    (o = bt(s.slice(0, 2), i)),
      (s[0] = o[0]),
      (s[1] = o[1]),
      (o = bt(s.slice(1, 3), i)),
      (s[1] = o[0]),
      (s[2] = o[1]),
      (o = bt(s.slice(2, 4), i)),
      (s[2] = o[0]),
      (s[3] = o[1]),
      (s[4] = s[0]),
      (o = bt(s.slice(3, 5), i)),
      (s[3] = o[0]),
      (s[4] = o[1]),
      (s[0] = s[4]),
      (i[0] = ((l, c, u) => ((l & c) | (~l & u)) >>> 0)(i[0], s[0], r[0]) + n),
      (i[1] =
        ((l, c, u) => ((l & u) | (-1930445399 & c)) >>> 0)(i[1], s[1], r[1]) +
        n),
      (i[2] = ((l, c, u) => (l ^ c ^ u) >>> 0)(i[2], s[2], r[2]) + n),
      (i[3] = ((l, c) => (c ^ (1164387073 | l)) >>> 0)(i[3], s[3]) + n),
      (o = bt(s.slice(0, 2), i)),
      (s[0] = o[0]),
      (s[1] = o[1]),
      (o = bt(s.slice(1, 3), i)),
      (s[1] = o[0]),
      (s[2] = o[1]),
      (o = bt(s.slice(2, 4), i)),
      (s[2] = o[0]),
      (s[3] = o[1]),
      (s[4] = s[0]),
      (o = bt(s.slice(3, 5), i)),
      (s[3] = o[0]),
      (s[4] = o[1]),
      (s[0] = s[4]);
    let a = [];
    return (
      (a = a.concat(ge(s[0]))),
      (a = a.concat(ge(s[1]))),
      (a = a.concat(ge(s[2]))),
      (a = a.concat(ge(s[3]))),
      a
    );
  },
  si = (e, t, r) => {
    for (let n = 0; n < r; n++) {
      e ^= t[n];
      for (let s = 0; s < 8; s++) 1 & e ? (e = (e >> 1) ^ 33800) : (e >>= 1);
    }
    return e;
  },
  cs = (e) => Object.prototype.toString.call(e).slice(8, -1).toLowerCase(),
  Oe = (e) => cs(e) === "object",
  pe = (e) => cs(e) === "array";
class ii {
  static validateLightConfig(t) {
    if (typeof t.open != "boolean") return "light.open must be boolean";
    if (typeof t.mode != "string") return "light.mode must be string";
    if (!pe(t.staticColors)) return "light.staticColors must be array";
    if (typeof t.luminance != "number" || t.luminance < 0 || t.luminance > 100)
      return "light.luminance must be number between 0 and 100";
    if (t.custom && pe(t.custom.data))
      for (const r of t.custom.data) {
        if (
          typeof r.key != "number" ||
          typeof r.x != "number" ||
          typeof r.y != "number"
        )
          return "Invalid custom light data format";
        if (!pe(r.color)) return "light.custom.data.color must be array";
      }
    return null;
  }
  static validatePerformance(t) {
    const r = [
      { key: "isGlobalTriggering", type: "boolean" },
      { key: "globalTriggeringValue", type: "number" },
      { key: "isRt", type: "boolean" },
      { key: "isSingle", type: "boolean" },
      { key: "singleTriggeringValue", type: ["string", "number"] },
      { key: "rtPressValue", type: "number" },
      { key: "rtReleaseValue", type: "number" },
      { key: "axisID", type: "number" },
      { key: "deadBandPressValue", type: "number" },
      { key: "deadBandReleaseValue", type: "number" },
    ];
    for (const { key: n, type: s } of r)
      if (Array.isArray(s)) {
        if (!s.includes(typeof t[n]))
          return (
            console.log("performance[key]", t[n], n, s),
            `performance.${n} must be ${s[0]}`
          );
      } else if (typeof t[n] !== s)
        return (
          console.log("performance[key]", t[n], n, s),
          `performance.${n} must be ${s}`
        );
    return null;
  }
  static validateAdvancedKey(t) {
    if (Object.keys(t).length === 0) return null;
    if (
      (console.log("advancedKeys.advancedType", t.advancedType, t),
      typeof t.advancedType != "string" && typeof t.advancedType != "number")
    )
      return "advancedKeys.advancedType must be string or number";
    if (typeof t.value != "number") return "advancedKeys.value must be number";
    const r = ["dks", "mpt", "mt", "tgl", "end", "socd", "macro"];
    for (const n of r) {
      const s = t[n];
      if (s !== void 0 && typeof s != "object")
        return `${n} must be an object if defined`;
    }
    return null;
  }
  static validateCustomKey(t) {
    const r = ["fn0", "fn1", "fn2", "fn3"];
    for (const n of r) {
      const s = t[n];
      if (s !== null) {
        if (typeof s != "object") return `${n} must be an object or null`;
        if (typeof s.keyValue != "number")
          return `${n}.keyValue must be a number`;
        if (typeof s.bindKeyValue != "number")
          return `${n}.bindKeyValue must be a number`;
      }
    }
    return null;
  }
  static validateKeyboards(t) {
    if (!pe(t)) return "keyboards must be array";
    for (const r of t) {
      const {
        col: n,
        row: s,
        keyValue: i,
        performance: o,
        advancedKeys: a,
        customKeys: l,
      } = r;
      if (typeof n != "number") return "keyboards.col must be number";
      if (typeof s != "number") return "keyboards.row must be number";
      if (typeof i != "number") return "keyboards.keyValue must be number";
      if (!Oe(o)) return "keyboards.performance must be object";
      if (!Oe(a)) return "keyboards.advancedKeys must be object";
      if (!Oe(l)) return "keyboards.customKeys must be object";
      const c = this.validatePerformance(o);
      if (c) return c;
      const u = this.validateAdvancedKey(a);
      if (u) return u;
      const h = this.validateCustomKey(l);
      if (h) return h;
    }
    return null;
  }
  static validateConfig(t) {
    try {
      const r =
        this.validateLightConfig(t.light.main) ||
        this.validateLightConfig(t.light.logo);
      if (r) return { isValid: !1, error: r };
      const n = this.validateKeyboards(t.keyboards);
      return (
        console.log("config.keyboards: ", t.keyboards),
        n
          ? { isValid: !1, error: n }
          : typeof t.system.rateOfReturn != "number" ||
            typeof t.system.topDeadBandSwitch != "number"
          ? { isValid: !1, error: "Invalid system configuration" }
          : { isValid: !0 }
      );
    } catch (r) {
      return { isValid: !1, error: `Validation failed: ${r.message}` };
    }
  }
}
const On = "fDPy6vvnpPsYm2T0g1bh";
class oi {
  constructor(t) {
    E(this, "keyBoard");
    E(this, "advancedKeysSdkMap");
    E(this, "success", !1);
    (this.keyBoard = t),
      (this.advancedKeysSdkMap = {
        1: this.keyBoard.setDks,
        2: this.keyBoard.setMpt,
        3: this.keyBoard.setMT,
        4: this.keyBoard.setTGL,
        5: this.keyBoard.setEND,
        6: this.keyBoard.setMacro,
        8: this.keyBoard.setSocd,
        9: this.keyBoard.setRS,
      });
  }
  encryptData(t, r) {
    try {
      const n = JSON.stringify(t);
      return Pe.AES.encrypt(n, r).toString();
    } catch (n) {
      throw new Error(`加密数据失败: ${n.message}`);
    }
  }
  async exportEncryptedJSON(t, r) {
    try {
      const n = { data: this.encryptData(t, On) };
      console.log("exportData: ", n);
      const s = new Blob([JSON.stringify(n)], { type: "application/json" }),
        i = URL.createObjectURL(s),
        o = document.createElement("a");
      (o.href = i),
        (o.download = r),
        document.body.appendChild(o),
        o.click(),
        document.body.removeChild(o),
        URL.revokeObjectURL(i);
    } catch (n) {
      throw new Error(`导出文件失败: ${n.message}`);
    }
  }
  async importEncryptedJSON(t) {
    try {
      return new Promise((r, n) => {
        const s = new FileReader();
        (s.onload = async (i) => {
          var o;
          try {
            const a = (o = i.target) == null ? void 0 : o.result,
              l = JSON.parse(a),
              c = JSON.parse(Pe.AES.decrypt(l.data, On).toString(Pe.enc.Utf8));
            Array.isArray(c.keyboards) && (c.keyboards = c.keyboards.flat()),
              this.validateKeyboardConfig(c) || n(new Error("配置验证失败"));
            const u = await this.setImportData(c);
            r(u);
          } catch (a) {
            n(new Error(`解析文件失败: ${a.message}`));
          }
        }),
          (s.onerror = () => n(new Error("读取文件失败"))),
          s.readAsText(t);
      });
    } catch (r) {
      throw new Error(`导入文件失败: ${r.message}`);
    }
  }
  validateKeyboardConfig(t) {
    const r = ii.validateConfig(t);
    return r.isValid
      ? (console.log("配置验证通过"), !0)
      : (console.error("配置验证失败:", r.error), !1);
  }
  async setImportData(t) {
    try {
      const { light: r, system: n, keyboards: s, macro: i } = t;
      return (
        await this.setKeyboards(s),
        await this.setLighting(r),
        await this.setSystem(n),
        this.setMacro(i),
        { success: !0 }
      );
    } catch (r) {
      return { success: !1, error: r.message };
    }
  }
  async setLighting(t) {
    const { main: r, logo: n } = t;
    await this.setMainLighting(r), await this.setLogoLighting(n);
  }
  async setMainLighting(t) {
    const {
      mode: r,
      staticColors: n,
      selectStaticColor: s,
      luminance: i,
      speed: o,
      sleepTime: a,
      direction: l,
      dynamic: c,
    } = t;
    await this.keyBoard.setLighting({
      type: r,
      colors: n,
      staticColor: s,
      luminance: i,
      speed: o,
      sleepDelay: a,
      direction: l,
      mode: c,
      superResponse: !0,
    });
  }
  async setLogoLighting(t) {
    const {
      mode: r,
      staticColors: n,
      selectStaticColor: s,
      luminance: i,
      speed: o,
      sleepTime: a,
      direction: l,
      dynamic: c,
    } = t;
    await this.keyBoard.setLogoLighting({
      type: r,
      colors: n,
      staticColor: s,
      luminance: i,
      speed: o,
      sleepDelay: a,
      direction: l,
      mode: c,
      superResponse: !0,
    });
  }
  async setKeyboards(t) {
    try {
      const r = [];
      for (const s of t) {
        const {
            keyValue: i,
            performance: o,
            advancedKeys: a,
            customKeys: l,
            light: c,
          } = s,
          u = await this.setPerformance(i, o).catch((p) => ({ error: p })),
          h = await this.setCustomLight(c.custom).catch((p) => ({ error: p })),
          d = await this.setCustomKeys(l).catch((p) => ({ error: p })),
          f = await this.setAdvancedKeys(i, a).catch((p) => ({ error: p }));
        r.push({
          advancedKeysRes: f,
          performanceRes: u,
          customKeysRes: d,
          lightRes: h,
        });
      }
      const n = await Promise.allSettled(r);
      return (
        console.log("result: ", n),
        n.forEach((s, i) => {
          s.status === "fulfilled"
            ? console.log(`Keyboard ${i} results: `, s.value)
            : console.error(`Keyboard ${i} failed: `, s.reason);
        }),
        n
      );
    } catch (r) {
      console.error("setKeyboards error: ", r);
    }
  }
  async setPerformance(t, r) {
    const {
      isGlobalTriggering: n,
      globalTriggeringValue: s,
      isRt: i,
      isSingle: o,
      singleTriggeringValue: a,
      rtPressValue: l,
      rtReleaseValue: c,
      deadBandPressValue: u,
      deadBandReleaseValue: h,
      advancedKeyMode: d,
    } = r;
    let f = "global";
    f = n ? "global" : i ? "rt" : "single";
    const p = this.keyBoard.setPerformanceMode(t, f, d),
      v = [];
    return (
      n
        ? v.push(
            this.keyBoard.setDB({
              globalTouchTravel: s,
              pressDead: u,
              releaseDead: h,
            })
          )
        : v.push(this.keyBoard.setDp(t, u), this.keyBoard.setDr(t, h)),
      i &&
        v.push(
          this.keyBoard.setRtPressTravel(t, l),
          this.keyBoard.setRtReleaseTravel(t, c),
          this.keyBoard.setSingleTravel(t, a)
        ),
      o && v.push(this.keyBoard.setSingleTravel(t, a)),
      [p, ...(await Promise.allSettled(v))]
    );
  }
  async setAdvancedKeys(t, r) {
    try {
      const {
          advancedType: n,
          value: s,
          dks: i,
          mpt: o,
          mt: a,
          tgl: l,
          end: c,
          socd: u,
          macro: h,
        } = r,
        d = this.advancedKeysSdkMap[s];
      let f;
      if (n === "dks") {
        const { dks: p, trps: v, db: g, db2: y } = i,
          R = this.getValues(p),
          w = this.getValues(v),
          _ = [1e3 * g, 1e3 * y];
        f = await d({ key: t, dks: R, trps: w, dbs: _ });
      } else if (n === "mpt") f = await d({ key: t, ...o });
      else if (n === "mt") {
        const { dksAll: p, delay: v } = a,
          g = this.getValues(p);
        f = await d({ key: t, dks: g, delay: v / 10 });
      } else if (n === "tgl") {
        const { dks: p, delay: v } = l;
        f = await d({ key: t, dks: p, delay: v });
      } else if (n === "end") {
        const { dks: p, delay: v } = c;
        f = await d({ key: t, dks: p, delay: v });
      } else if (n === "socd") f = await d(u);
      else if (n === "macro") {
        const { macros: p, ...v } = h;
        f = await d({ key: t, ...v }, p);
      }
      return f;
    } catch (n) {
      throw (
        (console.log("error: ", n), new Error(`高级键设置失败: ${n.message}`))
      );
    }
  }
  async setCustomKeys(t) {
    const { fn0: r, fn1: n, fn2: s, fn3: i } = t,
      o = [];
    for (let a = 0; a < 4; a++) {
      const l = [r, n, s, i][a];
      if (l) {
        const { keyValue: c, bindKeyValue: u } = l,
          h = await this.keyBoard.setKey([{ key: c, layout: a, value: u }]);
        o.push(Promise.resolve(h));
      } else o.push(Promise.resolve(null));
    }
    return await Promise.allSettled(o);
  }
  async setCustomLight(t) {
    const { R: r, G: n, B: s, key: i } = t;
    return this.keyBoard.setCustomLighting({ key: i, r, g: n, b: s });
  }
  async setSystem(t) {
    const { rateOfReturn: r, topDeadBandSwitch: n } = t;
    await this.keyBoard.setTopDeadSwitch(n);
  }
  setMacro(t) {
    const { list: r } = t;
    localStorage.setItem("MacroList", JSON.stringify(r));
  }
  getValues(t) {
    return Object.entries(t).map((r) => r[1]);
  }
}
const it = [];
for (let e = 0; e < 256; ++e) it.push((e + 256).toString(16).slice(1));
let xe;
const ai = new Uint8Array(16);
var xn,
  We,
  In,
  jt,
  Nn = {
    randomUUID:
      typeof crypto < "u" &&
      crypto.randomUUID &&
      crypto.randomUUID.bind(crypto),
  };
function Kn(e, t, r) {
  var s;
  if (Nn.randomUUID && !e) return Nn.randomUUID();
  const n =
    (e = e || {}).random ??
    ((s = e.rng) == null ? void 0 : s.call(e)) ??
    (function () {
      if (!xe) {
        if (typeof crypto > "u" || !crypto.getRandomValues)
          throw new Error(
            "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
          );
        xe = crypto.getRandomValues.bind(crypto);
      }
      return xe(ai);
    })();
  if (n.length < 16) throw new Error("Random bytes length must be >= 16");
  return (
    (n[6] = (15 & n[6]) | 64),
    (n[8] = (63 & n[8]) | 128),
    (function (i, o = 0) {
      return (
        it[i[o + 0]] +
        it[i[o + 1]] +
        it[i[o + 2]] +
        it[i[o + 3]] +
        "-" +
        it[i[o + 4]] +
        it[i[o + 5]] +
        "-" +
        it[i[o + 6]] +
        it[i[o + 7]] +
        "-" +
        it[i[o + 8]] +
        it[i[o + 9]] +
        "-" +
        it[i[o + 10]] +
        it[i[o + 11]] +
        it[i[o + 12]] +
        it[i[o + 13]] +
        it[i[o + 14]] +
        it[i[o + 15]]
      ).toLowerCase();
    })(n)
  );
}
let us = class {
  constructor() {
    E(this, "events", new Map());
    E(this, "inputReportEvents", new Map());
  }
  subscribe(e, t) {
    if (typeof t != "function") throw new Error("Handler must be a function");
    this.events.has(e) || this.events.set(e, new Set()),
      this.events.get(e).add(t);
  }
  publish(e, t) {
    const r = this.events.get(e);
    r &&
      r.forEach((n) => {
        try {
          n(t);
        } catch (s) {
          console.error(`Error in event handler for ${e}:`, s);
        }
      });
  }
  unsubscribe(e, t) {
    const r = this.events.get(e);
    r && (r.delete(t), r.size === 0 && this.events.delete(e));
  }
  clear() {
    this.events.clear();
  }
  subscribeInputReportEvent(e, t) {
    if (typeof t != "function") throw new Error("Handler must be a function");
    this.inputReportEvents.has(e) || this.inputReportEvents.set(e, t);
  }
  publishInputReportEvent(e, t) {
    const r = this.inputReportEvents.get(e);
    r && r(t);
  }
  unsubscribeInputReportEvent(e) {
    if (!this.inputReportEvents.has(e))
      throw new Error(`No subscription for event '${e}'.`);
    this.inputReportEvents.delete(e);
  }
};
var Wt;
let ye =
  ((Wt = class extends us {
    constructor(r) {
      super();
      E(this, "device");
      E(this, "MAX_RETRIES", 3);
      E(this, "responseQueue", []);
      E(this, "waitingResolvers", []);
      E(this, "handleInputReport", (r) => {
        const n = r;
        this.publish(Wt.Events.INPUT_REPORT, {
          data: n.data,
          reportId: n.reportId,
          time: Date.now(),
        }),
          this.waitingResolvers.length > 0
            ? this.waitingResolvers.shift()(n.data)
            : this.responseQueue.push({ data: n.data, time: Date.now() });
      });
      (this.device = r),
        (this.responseQueue = []),
        (this.waitingResolvers = []),
        this.device.addEventListener("inputreport", this.handleInputReport);
    }
    reset() {
      for (this.responseQueue = []; this.waitingResolvers.length > 0; ) {
        const r = this.waitingResolvers.shift();
        r && r(null);
      }
      this.device &&
        (this.device.removeEventListener("inputreport", this.handleInputReport),
        this.device.addEventListener("inputreport", this.handleInputReport));
    }
    async sendReport(r) {
      return this.device.sendReport(0, r);
    }
    async sendData(r) {
      Array.isArray(r)
        ? await Promise.all(r.map((n) => this.sendReport(n)))
        : await this.sendReport(r);
    }
    waitForResponse(r, n) {
      return new Promise((s) => {
        this.loadedResponseQueue(n),
          this.responseQueue.length > 0
            ? s(this.responseQueue.shift().data)
            : (this.waitingResolvers.push(s),
              setTimeout(() => {
                const i = this.waitingResolvers.indexOf(s);
                i !== -1 &&
                  (this.waitingResolvers.splice(i, 1),
                  console.log("waitForResponse-timeout"),
                  s(null));
              }, r));
      });
    }
    loadedResponseQueue(r) {
      let n = this.responseQueue.length;
      for (; n && (n--, this.responseQueue[0].time < r); )
        this.responseQueue.shift();
    }
    async waitForResponses(r, n = 1, s = 1e3) {
      const i = Date.now(),
        o = [],
        a = Array(n)
          .fill(0)
          .map(async () => {
            const c = Math.max(0, s - (Date.now() - i));
            return await this.waitForResponse(c, r);
          }),
        l = await Promise.allSettled(a);
      return (
        o.push(
          ...l.map((c) => (c.status, c.status === "fulfilled" ? c.value : null))
        ),
        o.filter((c) => c !== null)
      );
    }
    async tryOnce(r, n, s, i) {
      if (Array.isArray(r)) {
        const o = [],
          a = Date.now(),
          l = await Promise.all(
            r.map(async (c) => {
              (this.responseQueue = []), await this.sendReport(c);
              const u = Date.now() - a,
                h = Math.max(0, i - u),
                d = await this.waitForResponses(s, 1, h);
              return d.length, d.length > 0 ? d[0] : null;
            })
          );
        return (
          o.push(...l.filter((c) => c !== null)),
          Date.now() - a > i && (o.length, r.length),
          o
        );
      }
      return await this.sendData(r), await this.waitForResponses(s, n, i);
    }
    async attemptSend(r, n, s, i, o = 0) {
      try {
        const a = await this.tryOnce(r, n, i, s);
        return a.length === 0 && o < this.MAX_RETRIES - 1
          ? await this.attemptSend(r, n, s, i, o + 1)
          : (a.length, a);
      } catch (a) {
        if (o === this.MAX_RETRIES - 1)
          throw new Error(
            `发送/接收数据失败，已重试 ${this.MAX_RETRIES} 次: ${a.message}`
          );
        return await this.attemptSend(r, n, s, i, o + 1);
      }
    }
    async sendAndWait(r, n = {}) {
      (this.responseQueue = []), (this.waitingResolvers = []);
      const { expectedResponses: s = 1, timeout: i = 1e3, sendTime: o } = n,
        a = await this.attemptSend(r, s, o, i);
      return s === 1 ? a[0] || null : a;
    }
  }),
  E(Wt, "Events", { INPUT_REPORT: "inputReport", ERROR: "error" }),
  Wt);
(function (e) {
  (e[(e.INPUT_REPORT_STATUS_ACTIVE = 1)] = "INPUT_REPORT_STATUS_ACTIVE"),
    (e[(e.INPUT_REPORT_STATUS_INACTIVE = 3)] = "INPUT_REPORT_STATUS_INACTIVE");
})(xn || (xn = {})),
  (function (e) {
    (e.CONNECT_STATUS_ACTIVE = "ACTIVE"),
      (e.CONNECT_STATUS_WAITING = "WAITING"),
      (e.CONNECT_STATUS_INACTIVE = "INACTIVE");
  })(We || (We = {})),
  (function (e) {
    (e.GETDEVICEINFO = "GETDEVICEINFO"),
      (e.INPUTREPORT = "INPUTREPORT"),
      (e.USBCHANGE = "usbChange"),
      (e.SWITCHCONFIG = "switchConfig"),
      (e.CUSTOMCOMMAND = "customCommand"),
      (e.LIGHTINGBASE = "lightingBase"),
      (e.TOUCHFLOW = "touchFlow"),
      (e.VOICEFLOW = "voiceFlow");
  })(In || (In = {})),
  (function (e) {
    (e.DEBUG = "调试"),
      (e.INFO = "信息"),
      (e.WARN = "警告"),
      (e.ERROR = "错误");
  })(jt || (jt = {}));
const {
    CONNECT_STATUS_ACTIVE: ci,
    CONNECT_STATUS_WAITING: ui,
    CONNECT_STATUS_INACTIVE: Ie,
  } = We,
  li = "hid" in navigator && typeof navigator.hid == "object";
var dt;
let hi =
  ((dt = class extends us {
    constructor({ configs: r, usage: n, usagePage: s }) {
      super();
      E(this, "requestDeviceStatus", Ie);
      E(this, "hidDevices", {});
      E(this, "device", null);
      E(this, "id", "");
      E(this, "usage");
      E(this, "usagePage");
      E(this, "configs");
      E(this, "inputReportManager", null);
      E(this, "isReconnecting", !1);
      E(this, "isInputReportListenerSetup", !1);
      E(this, "reconnection", async (r, n, s) => {
        var i, o;
        if (this.isReconnecting)
          console.warn("Reconnection already in progress");
        else
          try {
            (this.isReconnecting = !0),
              await this.closeDevice(),
              await new Promise((l) => {
                setTimeout(l, 100);
              }),
              this.device.id === n || r.id || s || ((n = Kn()), (r.id = n)),
              s && (this.device = r);
            const a = {
              data: this.device,
              id: n,
              usage: this.usage[0],
              usagePage:
                ((o = (i = this.device.collections) == null ? void 0 : i[0]) ==
                null
                  ? void 0
                  : o.usagePage) || -1,
              vendorId: this.device.vendorId ?? -1,
              productId: this.device.productId ?? -1,
              productName: this.device.productName ?? "",
              collections: this.device.collections,
            };
            return (
              (this.hidDevices[n] = a),
              this.device.opened
                ? void console.warn("Device already opened, skipping open")
                : (await this.device.open(),
                  (this.inputReportManager = new ye(this.device)),
                  (this.isInputReportListenerSetup = !1),
                  this.setupInputReportListener(),
                  console.log("Reconnection successful"),
                  !0)
            );
          } catch (a) {
            console.error("Reconnection failed:", a);
          } finally {
            this.isReconnecting = !1;
          }
      });
      E(this, "tagDevice", (r, n) => {
        var c, u;
        const s = (r == null ? void 0 : r.id) || (n ? this.id : Kn());
        r.id = s;
        const { vendorId: i, productId: o, productName: a } = r,
          l = {
            data: r,
            id: s,
            usage: this.usage[0],
            usagePage:
              ((u = (c = r.collections) == null ? void 0 : c[0]) == null
                ? void 0
                : u.usagePage) || -1,
            vendorId: i ?? -1,
            productId: o ?? -1,
            productName: a ?? "",
            collections: r.collections,
          };
        return (this.hidDevices[s] = l), l;
      });
      E(this, "filterHIDDevices", (r) =>
        r.filter((n) => {
          var s;
          return (s = n.collections) == null
            ? void 0
            : s.some((i) => {
                for (let o = 0; o < this.usage.length; o++)
                  for (let a = 0; a < this.usagePage.length; a++)
                    if (
                      i.usage === this.usage[o] &&
                      i.usagePage === this.usagePage[a]
                    )
                      return !0;
                return !1;
              });
        })
      );
      (this.usage = Array.isArray(n) ? n : [n]),
        (this.usagePage = Array.isArray(s) ? s : [s]),
        (this.configs = r);
    }
    get deviceUsagePage() {
      var r, n;
      return (
        ((n = (r = this.device.collections) == null ? void 0 : r[0]) == null
          ? void 0
          : n.usagePage) || -1
      );
    }
    static getInstance({ configs: r, usage: n, usagePage: s }) {
      return (
        this.instance ||
          (this.instance = new dt({ configs: r, usage: n, usagePage: s })),
        this.instance
      );
    }
    async devices(r) {
      let n = await this.getDevices();
      if (n.length === 0) {
        try {
          await this.requestDevice();
        } catch (s) {
          return console.log("e: ", s), [];
        }
        n = await this.getDevices();
      }
      return n.map((s) =>
        this.tagDevice(s, r == null ? void 0 : r.isUpgrading)
      );
    }
    async requestDevice() {
      if (!li) return new Error("WebHID is not supported in this browser.");
      this.updateDeviceStatus(ui);
      try {
        const r = await navigator.hid.requestDevice({ filters: this.configs });
        if (r.length === 0) return this.updateDeviceStatus(Ie), null;
        r.forEach((s) => this.tagDevice(s, !1));
        const [n] = r;
        return (this.device = n), this.updateDeviceStatus(ci), n;
      } catch (r) {
        return this.updateDeviceStatus(Ie), r;
      }
    }
    async getDevices() {
      try {
        return this.filterHIDDevices(await navigator.hid.getDevices());
      } catch (r) {
        return r;
      }
    }
    async initAndConnectDevice(r) {
      if (!r) return null;
      this.id = r;
      const n = this.hidDevices[r];
      return n != null && n.data
        ? ((this.device = n.data), (await this.open()) ? n : null)
        : null;
    }
    async open() {
      if (!this.device) return new Error("当前没有设备");
      try {
        return (
          this.device.opened || (await this.device.open()),
          (this.inputReportManager = new ye(this.device)),
          this.setupInputReportListener(),
          !0
        );
      } catch (r) {
        return console.log("e: ", r), !1;
      }
    }
    async sendData(r, n = {}) {
      if (!this.inputReportManager)
        throw new Error("InputReportManager未初始化");
      return this.inputReportManager.sendAndWait(r, n);
    }
    async sendReportAndWaitResponse(r, n, s = 1e3) {
      return this.sendData(r, { timeout: s, sendTime: n });
    }
    async sendMultipleReportsAndWaitResponse(r, n, s = 1e3) {
      return this.sendData(r, { timeout: s, sendTime: n });
    }
    async sendReportAndWaitMultipleResponses(r, n, s, i = 1e3) {
      return this.sendData(r, {
        expectedResponses: n,
        timeout: i,
        sendTime: s,
      });
    }
    async sendDataNoResponse(r) {
      if (!this.inputReportManager)
        throw new Error("InputReportManager未初始化");
      return this.inputReportManager.sendReport(r);
    }
    async closeDevice() {
      if (this.device)
        try {
          this.inputReportManager &&
            (this.inputReportManager.clear(), (this.inputReportManager = null)),
            (this.isInputReportListenerSetup = !1),
            await this.device.close();
        } catch (r) {
          console.error("Failed to close device:", r);
        }
    }
    on(r, n) {
      this.subscribe(r, n);
    }
    off(r, n) {
      this.unsubscribe(r, n);
    }
    updateDeviceStatus(r = this.requestDeviceStatus) {
      (this.requestDeviceStatus = r),
        this.publish(dt.Events.DEVICE_STATUS, { status: r }),
        this.publish(dt.Events.DEVICE_INFO, {
          status: r,
          device: this.device,
          deviceList: Object.values(this.hidDevices),
        });
    }
    setupInputReportListener() {
      this.inputReportManager &&
        (this.isInputReportListenerSetup
          ? console.log("Input report listener already setup")
          : (this.inputReportManager.subscribe(ye.Events.INPUT_REPORT, (r) => {
              this.publish(dt.Events.INPUT_REPORT, r);
            }),
            this.inputReportManager.subscribe(ye.Events.ERROR, (r) => {
              this.publish(dt.Events.ERROR, r);
            }),
            (this.isInputReportListenerSetup = !0)));
    }
  }),
  E(dt, "instance"),
  E(dt, "Events", {
    DEVICE_STATUS: "deviceStatus",
    DEVICE_INFO: "deviceInfo",
    INPUT_REPORT: "inputReport",
    ERROR: "error",
  }),
  dt);
var U;
let Tt =
  ((U = class {
    static get id() {
      var t;
      return ((t = this.deviceBase) == null ? void 0 : t.id) ?? "";
    }
    static startMonitoring() {
      (this.shouldMonitor = !0),
        !this.hasMonitored &&
          navigator.hid &&
          (navigator.hid.addEventListener("connect", this.onConnect),
          navigator.hid.addEventListener("disconnect", this.onDisconnect),
          (this.hasMonitored = !0));
    }
    static stopMonitoring() {
      this.shouldMonitor = !1;
    }
    static setUpgrading(t) {
      this.isUpgrading = t;
    }
    static setUpgradingFail(t) {
      this.isUpgradingFail = t;
    }
    static setUpgradingAfterBoot(t) {
      this.isUpgradingAfterBoot = t;
    }
    static reset() {
      (this.shouldMonitor = !1),
        (this.hasMonitored = !1),
        (this.isUpgrading = !1),
        this.listeners.clear();
    }
    static subscribe(t, r) {
      this.listeners.has(t) || this.listeners.set(t, []),
        this.listeners.get(t).push(r);
    }
    static unsubscribe(t, r) {
      if (!this.listeners.has(t)) return;
      const n = this.listeners.get(t),
        s = n.indexOf(r);
      s !== -1 && n.splice(s, 1);
    }
    static notifyListeners(t, r) {
      this.listeners.has(t) && this.listeners.get(t).forEach((n) => n(r));
    }
    static bindToDeviceBase(t) {
      (this.usage = t.usage),
        (this.uagePage = t.uagePage),
        (this.reconnection = t.reconnection.bind(t)),
        (this.deviceBase = t),
        this.subscribe("connect", (r) => {
          t.emit("usbChange", r);
        }),
        this.subscribe("disconnect", (r) => {
          t.emit("usbChange", r);
        });
    }
  }),
  E(U, "listeners", new Map()),
  E(U, "shouldMonitor", !1),
  E(U, "hasMonitored", !1),
  E(U, "isUpgrading", !1),
  E(U, "isUpgradingFail", !1),
  E(U, "isUpgradingAfterBoot", !1),
  E(U, "usage", []),
  E(U, "uagePage", []),
  E(U, "reconnection", null),
  E(U, "deviceBase", null),
  E(U, "device", null),
  E(U, "onConnect", async ({ device: t }) => {
    const r = t.collections.find(
      (s) => s.usage === U.usage[0] && U.uagePage.includes(s.usagePage)
    );
    let n = !1;
    r &&
      ((U.device = t),
      console.log(" this.isUpgrading", U.isUpgrading),
      (n = await U.reconnection(U.device, U.id, U.isUpgrading))),
      U.shouldMonitor && !U.isUpgrading
        ? r
          ? U.notifyListeners("connect", {
              device: t,
              type: "connect",
              reconnect: n,
            })
          : U.notifyListeners("connect", { device: t, type: "connect" })
        : r
        ? (U.notifyListeners("connect", {
            device: t,
            type: "isUpgrading_connect",
            reconnect: n,
            updateFail: U.isUpgradingAfterBoot,
          }),
          (U.isUpgradingAfterBoot = !1))
        : U.notifyListeners("connect", { device: t, type: "connect" });
  }),
  E(U, "onDisconnect", ({ device: t }) => {
    const r = t.collections.find(
      (n) => n.usage === U.usage[0] && U.uagePage.includes(n.usagePage)
    );
    U.shouldMonitor && !U.isUpgrading
      ? U.notifyListeners("disconnect", { device: t, type: "disconnect" })
      : r
      ? U.notifyListeners("disconnect", {
          device: t,
          type: "isUpgrading_disconnect",
          updateFail: U.isUpgradingAfterBoot,
        })
      : U.notifyListeners("disconnect", { device: t, type: "disconnect" });
  }),
  U);
var xt, Un, Fn, Gn;
jt.DEBUG,
  jt.INFO,
  jt.WARN,
  jt.ERROR,
  (function (e) {
    (e[(e.KB2_CMD = 0)] = "KB2_CMD"),
      (e[(e.KB2_CMD_SYNC = 1)] = "KB2_CMD_SYNC"),
      (e[(e.KB2_CMD_KEY = 35)] = "KB2_CMD_KEY"),
      (e[(e.KB2_CMD_DB = 41)] = "KB2_CMD_DB"),
      (e[(e.KB2_CMD_DEFKEY = 43)] = "KB2_CMD_DEFKEY"),
      (e[(e.KB2_CMD_RM6X21 = 18)] = "KB2_CMD_RM6X21"),
      (e[(e.KB2_CMD_MT = 36)] = "KB2_CMD_MT"),
      (e[(e.KB2_CMD_TGL = 37)] = "KB2_CMD_TGL"),
      (e[(e.KB2_CMD_DKS = 38)] = "KB2_CMD_DKS"),
      (e[(e.KB2_CMD_MPT = 39)] = "KB2_CMD_MPT"),
      (e[(e.KB2_CMD_END = 40)] = "KB2_CMD_END"),
      (e[(e.KB2_CMD_MACRO = 32)] = "KB2_CMD_MACRO"),
      (e[(e.KB2_CMD_MACRO_MODE = 33)] = "KB2_CMD_MACRO_MODE"),
      (e[(e.KB2_CMD_SOCD = 44)] = "KB2_CMD_SOCD"),
      (e[(e.KB2_CMD_RS = 45)] = "KB2_CMD_RS"),
      (e[(e.KB2_CMD_PRGB = 24)] = "KB2_CMD_PRGB"),
      (e[(e.KB2_CMD_LOGORGB = 25)] = "KB2_CMD_LOGORGB"),
      (e[(e.KB2_CMD_KRGB = 42)] = "KB2_CMD_KRGB"),
      (e[(e.KB2_BL_SIGN = 8)] = "KB2_BL_SIGN"),
      (e[(e.KB2_BL_ERASE = 9)] = "KB2_BL_ERASE"),
      (e[(e.KB2_BL_REBOOT = 10)] = "KB2_BL_REBOOT"),
      (e[(e.KB2_BL_TOAPP = 11)] = "KB2_BL_TOAPP"),
      (e[(e.KB2_BL_WRITE = 12)] = "KB2_BL_WRITE"),
      (e[(e.KB2_BL_READ = 13)] = "KB2_BL_READ"),
      (e[(e.KB2_BL_RCRC = 14)] = "KB2_BL_RCRC"),
      (e[(e.KB2_CMD_FAIL = 255)] = "KB2_CMD_FAIL"),
      (e[(e.KB2_CMD_PIC = 48)] = "KB2_CMD_PIC"),
      (e[(e.KB2_PIC_WRITE = 49)] = "KB2_PIC_WRITE");
  })(xt || (xt = {})),
  (function (e) {
    (e[(e.Layout_Fn0 = 0)] = "Layout_Fn0"),
      (e[(e.Layout_Fn1 = 1)] = "Layout_Fn1"),
      (e[(e.Layout_Fn2 = 2)] = "Layout_Fn2"),
      (e[(e.Layout_Fn3 = 3)] = "Layout_Fn3"),
      (e[(e.Layout_DB0 = 4)] = "Layout_DB0"),
      (e[(e.Layout_DB1 = 5)] = "Layout_DB1"),
      (e[(e.Layout_DB2 = 6)] = "Layout_DB2"),
      (e[(e.Layout_DB3 = 7)] = "Layout_DB3"),
      (e[(e.Layout_Mode = 8)] = "Layout_Mode"),
      (e[(e.Layout_DKS1 = 9)] = "Layout_DKS1"),
      (e[(e.Layout_DKS2 = 10)] = "Layout_DKS2"),
      (e[(e.Layout_DKS3 = 11)] = "Layout_DKS3"),
      (e[(e.Layout_DKS4 = 12)] = "Layout_DKS4"),
      (e[(e.Layout_TRPS1 = 13)] = "Layout_TRPS1"),
      (e[(e.Layout_TRPS2 = 14)] = "Layout_TRPS2"),
      (e[(e.Layout_TRPS3 = 15)] = "Layout_TRPS3"),
      (e[(e.Layout_TRPS4 = 16)] = "Layout_TRPS4"),
      (e[(e.Layout_MacroAddr = 17)] = "Layout_MacroAddr"),
      (e[(e.Layout_MacroSize = 18)] = "Layout_MacroSize"),
      (e[(e.Layout_MTDelay = 19)] = "Layout_MTDelay"),
      (e[(e.Layout_RTP = 20)] = "Layout_RTP"),
      (e[(e.Layout_RTR = 21)] = "Layout_RTR");
  })(Un || (Un = {})),
  (function (e) {
    (e[(e.GlobalMode = 0)] = "GlobalMode"),
      (e[(e.SingleMode = 1)] = "SingleMode"),
      (e[(e.QuickMode = 2)] = "QuickMode");
  })(Fn || (Fn = {})),
  (function (e) {
    (e[(e.BL_NONE = 0)] = "BL_NONE"),
      (e[(e.BL_SIGN = 2)] = "BL_SIGN"),
      (e[(e.BL_ERASE = 3)] = "BL_ERASE"),
      (e[(e.BL_REBOOT = 4)] = "BL_REBOOT"),
      (e[(e.BL_TOBOOT = 5)] = "BL_TOBOOT"),
      (e[(e.BL_WRITE = 6)] = "BL_WRITE");
  })(Gn || (Gn = {}));
/*!
 *  decimal.js v10.5.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2025 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */ var ls,
  St,
  Ye = 9e15,
  Pt = 1e9,
  He = "0123456789abcdef",
  Ee =
    "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
  Be =
    "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
  Ve = {
    precision: 20,
    rounding: 4,
    modulo: 1,
    toExpNeg: -7,
    toExpPos: 21,
    minE: -9e15,
    maxE: Ye,
    crypto: !1,
  },
  I = !0,
  be = "[DecimalError] ",
  Ot = be + "Invalid argument: ",
  hs = be + "Precision limit exceeded",
  ds = be + "crypto unavailable",
  fs = "[object Decimal]",
  ut = Math.floor,
  tt = Math.pow,
  di = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
  fi = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
  gi = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
  Wn = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
  yt = 1e7,
  pi = Ee.length - 1,
  ze = Be.length - 1,
  b = { toStringTag: fs };
function ot(e) {
  var t,
    r,
    n,
    s = e.length - 1,
    i = "",
    o = e[0];
  if (s > 0) {
    for (i += o, t = 1; t < s; t++)
      (r = 7 - (n = e[t] + "").length) && (i += Mt(r)), (i += n);
    (r = 7 - (n = (o = e[t]) + "").length) && (i += Mt(r));
  } else if (o === 0) return "0";
  for (; o % 10 == 0; ) o /= 10;
  return i + o;
}
function lt(e, t, r) {
  if (e !== ~~e || e < t || e > r) throw Error(Ot + e);
}
function ce(e, t, r, n) {
  var s, i, o, a;
  for (i = e[0]; i >= 10; i /= 10) --t;
  return (
    --t < 0 ? ((t += 7), (s = 0)) : ((s = Math.ceil((t + 1) / 7)), (t %= 7)),
    (i = tt(10, 7 - t)),
    (a = e[s] % i | 0),
    n == null
      ? t < 3
        ? (t == 0 ? (a = (a / 100) | 0) : t == 1 && (a = (a / 10) | 0),
          (o =
            (r < 4 && a == 99999) ||
            (r > 3 && a == 49999) ||
            a == 5e4 ||
            a == 0))
        : (o =
            (((r < 4 && a + 1 == i) || (r > 3 && a + 1 == i / 2)) &&
              ((e[s + 1] / i / 100) | 0) == tt(10, t - 2) - 1) ||
            ((a == i / 2 || a == 0) && !((e[s + 1] / i / 100) | 0)))
      : t < 4
      ? (t == 0
          ? (a = (a / 1e3) | 0)
          : t == 1
          ? (a = (a / 100) | 0)
          : t == 2 && (a = (a / 10) | 0),
        (o = ((n || r < 4) && a == 9999) || (!n && r > 3 && a == 4999)))
      : (o =
          (((n || r < 4) && a + 1 == i) || (!n && r > 3 && a + 1 == i / 2)) &&
          ((e[s + 1] / i / 1e3) | 0) == tt(10, t - 3) - 1),
    o
  );
}
function Re(e, t, r) {
  for (var n, s, i = [0], o = 0, a = e.length; o < a; ) {
    for (s = i.length; s--; ) i[s] *= t;
    for (i[0] += He.indexOf(e.charAt(o++)), n = 0; n < i.length; n++)
      i[n] > r - 1 &&
        (i[n + 1] === void 0 && (i[n + 1] = 0),
        (i[n + 1] += (i[n] / r) | 0),
        (i[n] %= r));
  }
  return i.reverse();
}
(b.absoluteValue = b.abs =
  function () {
    var e = new this.constructor(this);
    return e.s < 0 && (e.s = 1), O(e);
  }),
  (b.ceil = function () {
    return O(new this.constructor(this), this.e + 1, 2);
  }),
  (b.clampedTo = b.clamp =
    function (e, t) {
      var r = this,
        n = r.constructor;
      if (((e = new n(e)), (t = new n(t)), !e.s || !t.s)) return new n(NaN);
      if (e.gt(t)) throw Error(Ot + t);
      return r.cmp(e) < 0 ? e : r.cmp(t) > 0 ? t : new n(r);
    }),
  (b.comparedTo = b.cmp =
    function (e) {
      var t,
        r,
        n,
        s,
        i = this,
        o = i.d,
        a = (e = new i.constructor(e)).d,
        l = i.s,
        c = e.s;
      if (!o || !a)
        return l && c
          ? l !== c
            ? l
            : o === a
            ? 0
            : !o ^ (l < 0)
            ? 1
            : -1
          : NaN;
      if (!o[0] || !a[0]) return o[0] ? l : a[0] ? -c : 0;
      if (l !== c) return l;
      if (i.e !== e.e) return (i.e > e.e) ^ (l < 0) ? 1 : -1;
      for (t = 0, r = (n = o.length) < (s = a.length) ? n : s; t < r; ++t)
        if (o[t] !== a[t]) return (o[t] > a[t]) ^ (l < 0) ? 1 : -1;
      return n === s ? 0 : (n > s) ^ (l < 0) ? 1 : -1;
    }),
  (b.cosine = b.cos =
    function () {
      var e,
        t,
        r = this,
        n = r.constructor;
      return r.d
        ? r.d[0]
          ? ((e = n.precision),
            (t = n.rounding),
            (n.precision = e + Math.max(r.e, r.sd()) + 7),
            (n.rounding = 1),
            (r = (function (s, i) {
              var o, a, l;
              if (i.isZero()) return i;
              (a = i.d.length) < 32
                ? (l = (1 / ve(4, (o = Math.ceil(a / 3)))).toString())
                : ((o = 16), (l = "2.3283064365386962890625e-10")),
                (s.precision += o),
                (i = Xt(s, 1, i.times(l), new s(1)));
              for (var c = o; c--; ) {
                var u = i.times(i);
                i = u.times(u).minus(u).times(8).plus(1);
              }
              return (s.precision -= o), i;
            })(n, Vn(n, r))),
            (n.precision = e),
            (n.rounding = t),
            O(St == 2 || St == 3 ? r.neg() : r, e, t, !0))
          : new n(1)
        : new n(NaN);
    }),
  (b.cubeRoot = b.cbrt =
    function () {
      var e,
        t,
        r,
        n,
        s,
        i,
        o,
        a,
        l,
        c,
        u = this,
        h = u.constructor;
      if (!u.isFinite() || u.isZero()) return new h(u);
      for (
        I = !1,
          (i = u.s * tt(u.s * u, 1 / 3)) && Math.abs(i) != 1 / 0
            ? (n = new h(i.toString()))
            : ((r = ot(u.d)),
              (i = ((e = u.e) - r.length + 1) % 3) &&
                (r += i == 1 || i == -2 ? "0" : "00"),
              (i = tt(r, 1 / 3)),
              (e = ut((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2))),
              ((n = new h(
                (r =
                  i == 1 / 0
                    ? "5e" + e
                    : (r = i.toExponential()).slice(0, r.indexOf("e") + 1) + e)
              )).s = u.s)),
          o = (e = h.precision) + 3;
        ;

      )
        if (
          ((c = (l = (a = n).times(a).times(a)).plus(u)),
          (n = X(c.plus(u).times(a), c.plus(l), o + 2, 1)),
          ot(a.d).slice(0, o) === (r = ot(n.d)).slice(0, o))
        ) {
          if ((r = r.slice(o - 3, o + 1)) != "9999" && (s || r != "4999")) {
            (+r && (+r.slice(1) || r.charAt(0) != "5")) ||
              (O(n, e + 1, 1), (t = !n.times(n).times(n).eq(u)));
            break;
          }
          if (!s && (O(a, e + 1, 0), a.times(a).times(a).eq(u))) {
            n = a;
            break;
          }
          (o += 4), (s = 1);
        }
      return (I = !0), O(n, e, h.rounding, t);
    }),
  (b.decimalPlaces = b.dp =
    function () {
      var e,
        t = this.d,
        r = NaN;
      if (t) {
        if (((r = 7 * ((e = t.length - 1) - ut(this.e / 7))), (e = t[e])))
          for (; e % 10 == 0; e /= 10) r--;
        r < 0 && (r = 0);
      }
      return r;
    }),
  (b.dividedBy = b.div =
    function (e) {
      return X(this, new this.constructor(e));
    }),
  (b.dividedToIntegerBy = b.divToInt =
    function (e) {
      var t = this.constructor;
      return O(X(this, new t(e), 0, 1, 1), t.precision, t.rounding);
    }),
  (b.equals = b.eq =
    function (e) {
      return this.cmp(e) === 0;
    }),
  (b.floor = function () {
    return O(new this.constructor(this), this.e + 1, 3);
  }),
  (b.greaterThan = b.gt =
    function (e) {
      return this.cmp(e) > 0;
    }),
  (b.greaterThanOrEqualTo = b.gte =
    function (e) {
      var t = this.cmp(e);
      return t == 1 || t === 0;
    }),
  (b.hyperbolicCosine = b.cosh =
    function () {
      var e,
        t,
        r,
        n,
        s,
        i = this,
        o = i.constructor,
        a = new o(1);
      if (!i.isFinite()) return new o(i.s ? 1 / 0 : NaN);
      if (i.isZero()) return a;
      (r = o.precision),
        (n = o.rounding),
        (o.precision = r + Math.max(i.e, i.sd()) + 4),
        (o.rounding = 1),
        (s = i.d.length) < 32
          ? (t = (1 / ve(4, (e = Math.ceil(s / 3)))).toString())
          : ((e = 16), (t = "2.3283064365386962890625e-10")),
        (i = Xt(o, 1, i.times(t), new o(1), !0));
      for (var l, c = e, u = new o(8); c--; )
        (l = i.times(i)), (i = a.minus(l.times(u.minus(l.times(u)))));
      return O(i, (o.precision = r), (o.rounding = n), !0);
    }),
  (b.hyperbolicSine = b.sinh =
    function () {
      var e,
        t,
        r,
        n,
        s = this,
        i = s.constructor;
      if (!s.isFinite() || s.isZero()) return new i(s);
      if (
        ((t = i.precision),
        (r = i.rounding),
        (i.precision = t + Math.max(s.e, s.sd()) + 4),
        (i.rounding = 1),
        (n = s.d.length) < 3)
      )
        s = Xt(i, 2, s, s, !0);
      else {
        (e = (e = 1.4 * Math.sqrt(n)) > 16 ? 16 : 0 | e),
          (s = Xt(i, 2, (s = s.times(1 / ve(5, e))), s, !0));
        for (var o, a = new i(5), l = new i(16), c = new i(20); e--; )
          (o = s.times(s)), (s = s.times(a.plus(o.times(l.times(o).plus(c)))));
      }
      return (i.precision = t), (i.rounding = r), O(s, t, r, !0);
    }),
  (b.hyperbolicTangent = b.tanh =
    function () {
      var e,
        t,
        r = this,
        n = r.constructor;
      return r.isFinite()
        ? r.isZero()
          ? new n(r)
          : ((e = n.precision),
            (t = n.rounding),
            (n.precision = e + 7),
            (n.rounding = 1),
            X(r.sinh(), r.cosh(), (n.precision = e), (n.rounding = t)))
        : new n(r.s);
    }),
  (b.inverseCosine = b.acos =
    function () {
      var e = this,
        t = e.constructor,
        r = e.abs().cmp(1),
        n = t.precision,
        s = t.rounding;
      return r !== -1
        ? r === 0
          ? e.isNeg()
            ? Et(t, n, s)
            : new t(0)
          : new t(NaN)
        : e.isZero()
        ? Et(t, n + 4, s).times(0.5)
        : ((t.precision = n + 6),
          (t.rounding = 1),
          (e = new t(1).minus(e).div(e.plus(1)).sqrt().atan()),
          (t.precision = n),
          (t.rounding = s),
          e.times(2));
    }),
  (b.inverseHyperbolicCosine = b.acosh =
    function () {
      var e,
        t,
        r = this,
        n = r.constructor;
      return r.lte(1)
        ? new n(r.eq(1) ? 0 : NaN)
        : r.isFinite()
        ? ((e = n.precision),
          (t = n.rounding),
          (n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4),
          (n.rounding = 1),
          (I = !1),
          (r = r.times(r).minus(1).sqrt().plus(r)),
          (I = !0),
          (n.precision = e),
          (n.rounding = t),
          r.ln())
        : new n(r);
    }),
  (b.inverseHyperbolicSine = b.asinh =
    function () {
      var e,
        t,
        r = this,
        n = r.constructor;
      return !r.isFinite() || r.isZero()
        ? new n(r)
        : ((e = n.precision),
          (t = n.rounding),
          (n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6),
          (n.rounding = 1),
          (I = !1),
          (r = r.times(r).plus(1).sqrt().plus(r)),
          (I = !0),
          (n.precision = e),
          (n.rounding = t),
          r.ln());
    }),
  (b.inverseHyperbolicTangent = b.atanh =
    function () {
      var e,
        t,
        r,
        n,
        s = this,
        i = s.constructor;
      return s.isFinite()
        ? s.e >= 0
          ? new i(s.abs().eq(1) ? s.s / 0 : s.isZero() ? s : NaN)
          : ((e = i.precision),
            (t = i.rounding),
            (n = s.sd()),
            Math.max(n, e) < 2 * -s.e - 1
              ? O(new i(s), e, t, !0)
              : ((i.precision = r = n - s.e),
                (s = X(s.plus(1), new i(1).minus(s), r + e, 1)),
                (i.precision = e + 4),
                (i.rounding = 1),
                (s = s.ln()),
                (i.precision = e),
                (i.rounding = t),
                s.times(0.5)))
        : new i(NaN);
    }),
  (b.inverseSine = b.asin =
    function () {
      var e,
        t,
        r,
        n,
        s = this,
        i = s.constructor;
      return s.isZero()
        ? new i(s)
        : ((t = s.abs().cmp(1)),
          (r = i.precision),
          (n = i.rounding),
          t !== -1
            ? t === 0
              ? (((e = Et(i, r + 4, n).times(0.5)).s = s.s), e)
              : new i(NaN)
            : ((i.precision = r + 6),
              (i.rounding = 1),
              (s = s.div(new i(1).minus(s.times(s)).sqrt().plus(1)).atan()),
              (i.precision = r),
              (i.rounding = n),
              s.times(2)));
    }),
  (b.inverseTangent = b.atan =
    function () {
      var e,
        t,
        r,
        n,
        s,
        i,
        o,
        a,
        l,
        c = this,
        u = c.constructor,
        h = u.precision,
        d = u.rounding;
      if (c.isFinite()) {
        if (c.isZero()) return new u(c);
        if (c.abs().eq(1) && h + 4 <= ze)
          return ((o = Et(u, h + 4, d).times(0.25)).s = c.s), o;
      } else {
        if (!c.s) return new u(NaN);
        if (h + 4 <= ze) return ((o = Et(u, h + 4, d).times(0.5)).s = c.s), o;
      }
      for (
        u.precision = a = h + 10,
          u.rounding = 1,
          e = r = Math.min(28, (a / 7 + 2) | 0);
        e;
        --e
      )
        c = c.div(c.times(c).plus(1).sqrt().plus(1));
      for (
        I = !1,
          t = Math.ceil(a / 7),
          n = 1,
          l = c.times(c),
          o = new u(c),
          s = c;
        e !== -1;

      )
        if (
          ((s = s.times(l)),
          (i = o.minus(s.div((n += 2)))),
          (s = s.times(l)),
          (o = i.plus(s.div((n += 2)))).d[t] !== void 0)
        )
          for (e = t; o.d[e] === i.d[e] && e--; );
      return (
        r && (o = o.times(2 << (r - 1))),
        (I = !0),
        O(o, (u.precision = h), (u.rounding = d), !0)
      );
    }),
  (b.isFinite = function () {
    return !!this.d;
  }),
  (b.isInteger = b.isInt =
    function () {
      return !!this.d && ut(this.e / 7) > this.d.length - 2;
    }),
  (b.isNaN = function () {
    return !this.s;
  }),
  (b.isNegative = b.isNeg =
    function () {
      return this.s < 0;
    }),
  (b.isPositive = b.isPos =
    function () {
      return this.s > 0;
    }),
  (b.isZero = function () {
    return !!this.d && this.d[0] === 0;
  }),
  (b.lessThan = b.lt =
    function (e) {
      return this.cmp(e) < 0;
    }),
  (b.lessThanOrEqualTo = b.lte =
    function (e) {
      return this.cmp(e) < 1;
    }),
  (b.logarithm = b.log =
    function (e) {
      var t,
        r,
        n,
        s,
        i,
        o,
        a,
        l,
        c = this,
        u = c.constructor,
        h = u.precision,
        d = u.rounding;
      if (e == null) (e = new u(10)), (t = !0);
      else {
        if (((r = (e = new u(e)).d), e.s < 0 || !r || !r[0] || e.eq(1)))
          return new u(NaN);
        t = e.eq(10);
      }
      if (((r = c.d), c.s < 0 || !r || !r[0] || c.eq(1)))
        return new u(r && !r[0] ? -1 / 0 : c.s != 1 ? NaN : r ? 0 : 1 / 0);
      if (t)
        if (r.length > 1) i = !0;
        else {
          for (s = r[0]; s % 10 == 0; ) s /= 10;
          i = s !== 1;
        }
      if (
        ((I = !1),
        (o = Lt(c, (a = h + 5))),
        (n = t ? Te(u, a + 10) : Lt(e, a)),
        ce((l = X(o, n, a, 1)).d, (s = h), d))
      )
        do
          if (
            ((o = Lt(c, (a += 10))),
            (n = t ? Te(u, a + 10) : Lt(e, a)),
            (l = X(o, n, a, 1)),
            !i)
          ) {
            +ot(l.d).slice(s + 1, s + 15) + 1 == 1e14 && (l = O(l, h + 1, 0));
            break;
          }
        while (ce(l.d, (s += 10), d));
      return (I = !0), O(l, h, d);
    }),
  (b.minus = b.sub =
    function (e) {
      var t,
        r,
        n,
        s,
        i,
        o,
        a,
        l,
        c,
        u,
        h,
        d,
        f = this,
        p = f.constructor;
      if (((e = new p(e)), !f.d || !e.d))
        return (
          f.s && e.s
            ? f.d
              ? (e.s = -e.s)
              : (e = new p(e.d || f.s !== e.s ? f : NaN))
            : (e = new p(NaN)),
          e
        );
      if (f.s != e.s) return (e.s = -e.s), f.plus(e);
      if (
        ((c = f.d),
        (d = e.d),
        (a = p.precision),
        (l = p.rounding),
        !c[0] || !d[0])
      ) {
        if (d[0]) e.s = -e.s;
        else {
          if (!c[0]) return new p(l === 3 ? -0 : 0);
          e = new p(f);
        }
        return I ? O(e, a, l) : e;
      }
      if (
        ((r = ut(e.e / 7)), (u = ut(f.e / 7)), (c = c.slice()), (i = u - r))
      ) {
        for (
          (h = i < 0)
            ? ((t = c), (i = -i), (o = d.length))
            : ((t = d), (r = u), (o = c.length)),
            i > (n = Math.max(Math.ceil(a / 7), o) + 2) &&
              ((i = n), (t.length = 1)),
            t.reverse(),
            n = i;
          n--;

        )
          t.push(0);
        t.reverse();
      } else {
        for (
          (h = (n = c.length) < (o = d.length)) && (o = n), n = 0;
          n < o;
          n++
        )
          if (c[n] != d[n]) {
            h = c[n] < d[n];
            break;
          }
        i = 0;
      }
      for (
        h && ((t = c), (c = d), (d = t), (e.s = -e.s)),
          o = c.length,
          n = d.length - o;
        n > 0;
        --n
      )
        c[o++] = 0;
      for (n = d.length; n > i; ) {
        if (c[--n] < d[n]) {
          for (s = n; s && c[--s] === 0; ) c[s] = yt - 1;
          --c[s], (c[n] += yt);
        }
        c[n] -= d[n];
      }
      for (; c[--o] === 0; ) c.pop();
      for (; c[0] === 0; c.shift()) --r;
      return c[0]
        ? ((e.d = c), (e.e = we(c, r)), I ? O(e, a, l) : e)
        : new p(l === 3 ? -0 : 0);
    }),
  (b.modulo = b.mod =
    function (e) {
      var t,
        r = this,
        n = r.constructor;
      return (
        (e = new n(e)),
        !r.d || !e.s || (e.d && !e.d[0])
          ? new n(NaN)
          : !e.d || (r.d && !r.d[0])
          ? O(new n(r), n.precision, n.rounding)
          : ((I = !1),
            n.modulo == 9
              ? ((t = X(r, e.abs(), 0, 3, 1)).s *= e.s)
              : (t = X(r, e, 0, n.modulo, 1)),
            (t = t.times(e)),
            (I = !0),
            r.minus(t))
      );
    }),
  (b.naturalExponential = b.exp =
    function () {
      return Ne(this);
    }),
  (b.naturalLogarithm = b.ln =
    function () {
      return Lt(this);
    }),
  (b.negated = b.neg =
    function () {
      var e = new this.constructor(this);
      return (e.s = -e.s), O(e);
    }),
  (b.plus = b.add =
    function (e) {
      var t,
        r,
        n,
        s,
        i,
        o,
        a,
        l,
        c,
        u,
        h = this,
        d = h.constructor;
      if (((e = new d(e)), !h.d || !e.d))
        return (
          h.s && e.s
            ? h.d || (e = new d(e.d || h.s === e.s ? h : NaN))
            : (e = new d(NaN)),
          e
        );
      if (h.s != e.s) return (e.s = -e.s), h.minus(e);
      if (
        ((c = h.d),
        (u = e.d),
        (a = d.precision),
        (l = d.rounding),
        !c[0] || !u[0])
      )
        return u[0] || (e = new d(h)), I ? O(e, a, l) : e;
      if (
        ((i = ut(h.e / 7)), (n = ut(e.e / 7)), (c = c.slice()), (s = i - n))
      ) {
        for (
          s < 0
            ? ((r = c), (s = -s), (o = u.length))
            : ((r = u), (n = i), (o = c.length)),
            s > (o = (i = Math.ceil(a / 7)) > o ? i + 1 : o + 1) &&
              ((s = o), (r.length = 1)),
            r.reverse();
          s--;

        )
          r.push(0);
        r.reverse();
      }
      for (
        (o = c.length) - (s = u.length) < 0 &&
          ((s = o), (r = u), (u = c), (c = r)),
          t = 0;
        s;

      )
        (t = ((c[--s] = c[s] + u[s] + t) / yt) | 0), (c[s] %= yt);
      for (t && (c.unshift(t), ++n), o = c.length; c[--o] == 0; ) c.pop();
      return (e.d = c), (e.e = we(c, n)), I ? O(e, a, l) : e;
    }),
  (b.precision = b.sd =
    function (e) {
      var t,
        r = this;
      if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Ot + e);
      return (
        r.d ? ((t = Yn(r.d)), e && r.e + 1 > t && (t = r.e + 1)) : (t = NaN), t
      );
    }),
  (b.round = function () {
    var e = this,
      t = e.constructor;
    return O(new t(e), e.e + 1, t.rounding);
  }),
  (b.sine = b.sin =
    function () {
      var e,
        t,
        r = this,
        n = r.constructor;
      return r.isFinite()
        ? r.isZero()
          ? new n(r)
          : ((e = n.precision),
            (t = n.rounding),
            (n.precision = e + Math.max(r.e, r.sd()) + 7),
            (n.rounding = 1),
            (r = (function (s, i) {
              var o,
                a = i.d.length;
              if (a < 3) return i.isZero() ? i : Xt(s, 2, i, i);
              (o = (o = 1.4 * Math.sqrt(a)) > 16 ? 16 : 0 | o),
                (i = Xt(s, 2, (i = i.times(1 / ve(5, o))), i));
              for (var l, c = new s(5), u = new s(16), h = new s(20); o--; )
                (l = i.times(i)),
                  (i = i.times(c.plus(l.times(u.times(l).minus(h)))));
              return i;
            })(n, Vn(n, r))),
            (n.precision = e),
            (n.rounding = t),
            O(St > 2 ? r.neg() : r, e, t, !0))
        : new n(NaN);
    }),
  (b.squareRoot = b.sqrt =
    function () {
      var e,
        t,
        r,
        n,
        s,
        i,
        o = this,
        a = o.d,
        l = o.e,
        c = o.s,
        u = o.constructor;
      if (c !== 1 || !a || !a[0])
        return new u(!c || (c < 0 && (!a || a[0])) ? NaN : a ? o : 1 / 0);
      for (
        I = !1,
          (c = Math.sqrt(+o)) == 0 || c == 1 / 0
            ? (((t = ot(a)).length + l) % 2 == 0 && (t += "0"),
              (c = Math.sqrt(t)),
              (l = ut((l + 1) / 2) - (l < 0 || l % 2)),
              (n = new u(
                (t =
                  c == 1 / 0
                    ? "5e" + l
                    : (t = c.toExponential()).slice(0, t.indexOf("e") + 1) + l)
              )))
            : (n = new u(c.toString())),
          r = (l = u.precision) + 3;
        ;

      )
        if (
          ((n = (i = n).plus(X(o, i, r + 2, 1)).times(0.5)),
          ot(i.d).slice(0, r) === (t = ot(n.d)).slice(0, r))
        ) {
          if ((t = t.slice(r - 3, r + 1)) != "9999" && (s || t != "4999")) {
            (+t && (+t.slice(1) || t.charAt(0) != "5")) ||
              (O(n, l + 1, 1), (e = !n.times(n).eq(o)));
            break;
          }
          if (!s && (O(i, l + 1, 0), i.times(i).eq(o))) {
            n = i;
            break;
          }
          (r += 4), (s = 1);
        }
      return (I = !0), O(n, l, u.rounding, e);
    }),
  (b.tangent = b.tan =
    function () {
      var e,
        t,
        r = this,
        n = r.constructor;
      return r.isFinite()
        ? r.isZero()
          ? new n(r)
          : ((e = n.precision),
            (t = n.rounding),
            (n.precision = e + 10),
            (n.rounding = 1),
            ((r = r.sin()).s = 1),
            (r = X(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0)),
            (n.precision = e),
            (n.rounding = t),
            O(St == 2 || St == 4 ? r.neg() : r, e, t, !0))
        : new n(NaN);
    }),
  (b.times = b.mul =
    function (e) {
      var t,
        r,
        n,
        s,
        i,
        o,
        a,
        l,
        c,
        u = this,
        h = u.constructor,
        d = u.d,
        f = (e = new h(e)).d;
      if (((e.s *= u.s), !(d && d[0] && f && f[0])))
        return new h(
          !e.s || (d && !d[0] && !f) || (f && !f[0] && !d)
            ? NaN
            : d && f
            ? 0 * e.s
            : e.s / 0
        );
      for (
        r = ut(u.e / 7) + ut(e.e / 7),
          (l = d.length) < (c = f.length) &&
            ((i = d), (d = f), (f = i), (o = l), (l = c), (c = o)),
          i = [],
          n = o = l + c;
        n--;

      )
        i.push(0);
      for (n = c; --n >= 0; ) {
        for (t = 0, s = l + n; s > n; )
          (a = i[s] + f[n] * d[s - n - 1] + t),
            (i[s--] = a % yt | 0),
            (t = (a / yt) | 0);
        i[s] = (i[s] + t) % yt | 0;
      }
      for (; !i[--o]; ) i.pop();
      return (
        t ? ++r : i.shift(),
        (e.d = i),
        (e.e = we(i, r)),
        I ? O(e, h.precision, h.rounding) : e
      );
    }),
  (b.toBinary = function (e, t) {
    return Ke(this, 2, e, t);
  }),
  (b.toDecimalPlaces = b.toDP =
    function (e, t) {
      var r = this,
        n = r.constructor;
      return (
        (r = new n(r)),
        e === void 0
          ? r
          : (lt(e, 0, Pt),
            t === void 0 ? (t = n.rounding) : lt(t, 0, 8),
            O(r, e + r.e + 1, t))
      );
    }),
  (b.toExponential = function (e, t) {
    var r,
      n = this,
      s = n.constructor;
    return (
      e === void 0
        ? (r = Dt(n, !0))
        : (lt(e, 0, Pt),
          t === void 0 ? (t = s.rounding) : lt(t, 0, 8),
          (r = Dt((n = O(new s(n), e + 1, t)), !0, e + 1))),
      n.isNeg() && !n.isZero() ? "-" + r : r
    );
  }),
  (b.toFixed = function (e, t) {
    var r,
      n,
      s = this,
      i = s.constructor;
    return (
      e === void 0
        ? (r = Dt(s))
        : (lt(e, 0, Pt),
          t === void 0 ? (t = i.rounding) : lt(t, 0, 8),
          (r = Dt((n = O(new i(s), e + s.e + 1, t)), !1, e + n.e + 1))),
      s.isNeg() && !s.isZero() ? "-" + r : r
    );
  }),
  (b.toFraction = function (e) {
    var t,
      r,
      n,
      s,
      i,
      o,
      a,
      l,
      c,
      u,
      h,
      d,
      f = this,
      p = f.d,
      v = f.constructor;
    if (!p) return new v(f);
    if (
      ((c = r = new v(1)),
      (n = l = new v(0)),
      (o = (i = (t = new v(n)).e = Yn(p) - f.e - 1) % 7),
      (t.d[0] = tt(10, o < 0 ? 7 + o : o)),
      e == null)
    )
      e = i > 0 ? t : c;
    else {
      if (!(a = new v(e)).isInt() || a.lt(c)) throw Error(Ot + a);
      e = a.gt(t) ? (i > 0 ? t : c) : a;
    }
    for (
      I = !1,
        a = new v(ot(p)),
        u = v.precision,
        v.precision = i = 7 * p.length * 2;
      (h = X(a, t, 0, 1, 1)), (s = r.plus(h.times(n))).cmp(e) != 1;

    )
      (r = n),
        (n = s),
        (s = c),
        (c = l.plus(h.times(s))),
        (l = s),
        (s = t),
        (t = a.minus(h.times(s))),
        (a = s);
    return (
      (s = X(e.minus(r), n, 0, 1, 1)),
      (l = l.plus(s.times(c))),
      (r = r.plus(s.times(n))),
      (l.s = c.s = f.s),
      (d =
        X(c, n, i, 1).minus(f).abs().cmp(X(l, r, i, 1).minus(f).abs()) < 1
          ? [c, n]
          : [l, r]),
      (v.precision = u),
      (I = !0),
      d
    );
  }),
  (b.toHexadecimal = b.toHex =
    function (e, t) {
      return Ke(this, 16, e, t);
    }),
  (b.toNearest = function (e, t) {
    var r = this,
      n = r.constructor;
    if (((r = new n(r)), e == null)) {
      if (!r.d) return r;
      (e = new n(1)), (t = n.rounding);
    } else {
      if (((e = new n(e)), t === void 0 ? (t = n.rounding) : lt(t, 0, 8), !r.d))
        return e.s ? r : e;
      if (!e.d) return e.s && (e.s = r.s), e;
    }
    return (
      e.d[0]
        ? ((I = !1), (r = X(r, e, 0, t, 1).times(e)), (I = !0), O(r))
        : ((e.s = r.s), (r = e)),
      r
    );
  }),
  (b.toNumber = function () {
    return +this;
  }),
  (b.toOctal = function (e, t) {
    return Ke(this, 8, e, t);
  }),
  (b.toPower = b.pow =
    function (e) {
      var t,
        r,
        n,
        s,
        i,
        o,
        a = this,
        l = a.constructor,
        c = +(e = new l(e));
      if (!(a.d && e.d && a.d[0] && e.d[0])) return new l(tt(+a, c));
      if ((a = new l(a)).eq(1)) return a;
      if (((n = l.precision), (i = l.rounding), e.eq(1))) return O(a, n, i);
      if (
        (t = ut(e.e / 7)) >= e.d.length - 1 &&
        (r = c < 0 ? -c : c) <= 9007199254740991
      )
        return (s = gs(l, a, r, n)), e.s < 0 ? new l(1).div(s) : O(s, n, i);
      if ((o = a.s) < 0) {
        if (t < e.d.length - 1) return new l(NaN);
        if ((1 & e.d[t] || (o = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1))
          return (a.s = o), a;
      }
      return (t =
        (r = tt(+a, c)) != 0 && isFinite(r)
          ? new l(r + "").e
          : ut(c * (Math.log("0." + ot(a.d)) / Math.LN10 + a.e + 1))) >
        l.maxE + 1 || t < l.minE - 1
        ? new l(t > 0 ? o / 0 : 0)
        : ((I = !1),
          (l.rounding = a.s = 1),
          (r = Math.min(12, (t + "").length)),
          (s = Ne(e.times(Lt(a, n + r)), n)).d &&
            ce((s = O(s, n + 5, 1)).d, n, i) &&
            ((t = n + 10),
            +ot((s = O(Ne(e.times(Lt(a, t + r)), t), t + 5, 1)).d).slice(
              n + 1,
              n + 15
            ) +
              1 ==
              1e14 && (s = O(s, n + 1, 0))),
          (s.s = o),
          (I = !0),
          (l.rounding = i),
          O(s, n, i));
    }),
  (b.toPrecision = function (e, t) {
    var r,
      n = this,
      s = n.constructor;
    return (
      e === void 0
        ? (r = Dt(n, n.e <= s.toExpNeg || n.e >= s.toExpPos))
        : (lt(e, 1, Pt),
          t === void 0 ? (t = s.rounding) : lt(t, 0, 8),
          (r = Dt((n = O(new s(n), e, t)), e <= n.e || n.e <= s.toExpNeg, e))),
      n.isNeg() && !n.isZero() ? "-" + r : r
    );
  }),
  (b.toSignificantDigits = b.toSD =
    function (e, t) {
      var r = this.constructor;
      return (
        e === void 0
          ? ((e = r.precision), (t = r.rounding))
          : (lt(e, 1, Pt), t === void 0 ? (t = r.rounding) : lt(t, 0, 8)),
        O(new r(this), e, t)
      );
    }),
  (b.toString = function () {
    var e = this,
      t = e.constructor,
      r = Dt(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
    return e.isNeg() && !e.isZero() ? "-" + r : r;
  }),
  (b.truncated = b.trunc =
    function () {
      return O(new this.constructor(this), this.e + 1, 1);
    }),
  (b.valueOf = b.toJSON =
    function () {
      var e = this,
        t = e.constructor,
        r = Dt(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
      return e.isNeg() ? "-" + r : r;
    });
var X = (function () {
  function e(n, s, i) {
    var o,
      a = 0,
      l = n.length;
    for (n = n.slice(); l--; )
      (o = n[l] * s + a), (n[l] = o % i | 0), (a = (o / i) | 0);
    return a && n.unshift(a), n;
  }
  function t(n, s, i, o) {
    var a, l;
    if (i != o) l = i > o ? 1 : -1;
    else
      for (a = l = 0; a < i; a++)
        if (n[a] != s[a]) {
          l = n[a] > s[a] ? 1 : -1;
          break;
        }
    return l;
  }
  function r(n, s, i, o) {
    for (var a = 0; i--; )
      (n[i] -= a), (a = n[i] < s[i] ? 1 : 0), (n[i] = a * o + n[i] - s[i]);
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function (n, s, i, o, a, l) {
    var c,
      u,
      h,
      d,
      f,
      p,
      v,
      g,
      y,
      R,
      w,
      _,
      m,
      B,
      D,
      T,
      k,
      A,
      P,
      F,
      W = n.constructor,
      Y = n.s == s.s ? 1 : -1,
      N = n.d,
      x = s.d;
    if (!(N && N[0] && x && x[0]))
      return new W(
        n.s && s.s && (N ? !x || N[0] != x[0] : x)
          ? (N && N[0] == 0) || !x
            ? 0 * Y
            : Y / 0
          : NaN
      );
    for (
      l
        ? ((f = 1), (u = n.e - s.e))
        : ((l = yt), (f = 7), (u = ut(n.e / f) - ut(s.e / f))),
        P = x.length,
        k = N.length,
        R = (y = new W(Y)).d = [],
        h = 0;
      x[h] == (N[h] || 0);
      h++
    );
    if (
      (x[h] > (N[h] || 0) && u--,
      i == null
        ? ((B = i = W.precision), (o = W.rounding))
        : (B = a ? i + (n.e - s.e) + 1 : i),
      B < 0)
    )
      R.push(1), (p = !0);
    else {
      if (((B = (B / f + 2) | 0), (h = 0), P == 1)) {
        for (d = 0, x = x[0], B++; (h < k || d) && B--; h++)
          (D = d * l + (N[h] || 0)), (R[h] = (D / x) | 0), (d = D % x | 0);
        p = d || h < k;
      } else {
        for (
          (d = (l / (x[0] + 1)) | 0) > 1 &&
            ((x = e(x, d, l)),
            (N = e(N, d, l)),
            (P = x.length),
            (k = N.length)),
            T = P,
            _ = (w = N.slice(0, P)).length;
          _ < P;

        )
          w[_++] = 0;
        (F = x.slice()).unshift(0), (A = x[0]), x[1] >= l / 2 && ++A;
        do
          (d = 0),
            (c = t(x, w, P, _)) < 0
              ? ((m = w[0]),
                P != _ && (m = m * l + (w[1] || 0)),
                (d = (m / A) | 0) > 1
                  ? (d >= l && (d = l - 1),
                    (c = t(
                      (v = e(x, d, l)),
                      w,
                      (g = v.length),
                      (_ = w.length)
                    )) == 1 && (d--, r(v, P < g ? F : x, g, l)))
                  : (d == 0 && (c = d = 1), (v = x.slice())),
                (g = v.length) < _ && v.unshift(0),
                r(w, v, _, l),
                c == -1 &&
                  (c = t(x, w, P, (_ = w.length))) < 1 &&
                  (d++, r(w, P < _ ? F : x, _, l)),
                (_ = w.length))
              : c === 0 && (d++, (w = [0])),
            (R[h++] = d),
            c && w[0] ? (w[_++] = N[T] || 0) : ((w = [N[T]]), (_ = 1));
        while ((T++ < k || w[0] !== void 0) && B--);
        p = w[0] !== void 0;
      }
      R[0] || R.shift();
    }
    if (f == 1) (y.e = u), (ls = p);
    else {
      for (h = 1, d = R[0]; d >= 10; d /= 10) h++;
      (y.e = h + u * f - 1), O(y, a ? i + y.e + 1 : i, o, p);
    }
    return y;
  };
})();
function O(e, t, r, n) {
  var s,
    i,
    o,
    a,
    l,
    c,
    u,
    h,
    d,
    f = e.constructor;
  t: if (t != null) {
    if (!(h = e.d)) return e;
    for (s = 1, a = h[0]; a >= 10; a /= 10) s++;
    if ((i = t - s) < 0)
      (i += 7), (o = t), (l = ((u = h[(d = 0)]) / tt(10, s - o - 1)) % 10 | 0);
    else if ((d = Math.ceil((i + 1) / 7)) >= (a = h.length)) {
      if (!n) break t;
      for (; a++ <= d; ) h.push(0);
      (u = l = 0), (s = 1), (o = (i %= 7) - 7 + 1);
    } else {
      for (u = a = h[d], s = 1; a >= 10; a /= 10) s++;
      l = (o = (i %= 7) - 7 + s) < 0 ? 0 : (u / tt(10, s - o - 1)) % 10 | 0;
    }
    if (
      ((n =
        n ||
        t < 0 ||
        h[d + 1] !== void 0 ||
        (o < 0 ? u : u % tt(10, s - o - 1))),
      (c =
        r < 4
          ? (l || n) && (r == 0 || r == (e.s < 0 ? 3 : 2))
          : l > 5 ||
            (l == 5 &&
              (r == 4 ||
                n ||
                (r == 6 &&
                  (i > 0 ? (o > 0 ? u / tt(10, s - o) : 0) : h[d - 1]) % 10 &
                    1) ||
                r == (e.s < 0 ? 8 : 7)))),
      t < 1 || !h[0])
    )
      return (
        (h.length = 0),
        c
          ? ((t -= e.e + 1),
            (h[0] = tt(10, (7 - (t % 7)) % 7)),
            (e.e = -t || 0))
          : (h[0] = e.e = 0),
        e
      );
    if (
      (i == 0
        ? ((h.length = d), (a = 1), d--)
        : ((h.length = d + 1),
          (a = tt(10, 7 - i)),
          (h[d] = o > 0 ? ((u / tt(10, s - o)) % tt(10, o) | 0) * a : 0)),
      c)
    )
      for (;;) {
        if (d == 0) {
          for (i = 1, o = h[0]; o >= 10; o /= 10) i++;
          for (o = h[0] += a, a = 1; o >= 10; o /= 10) a++;
          i != a && (e.e++, h[0] == yt && (h[0] = 1));
          break;
        }
        if (((h[d] += a), h[d] != yt)) break;
        (h[d--] = 0), (a = 1);
      }
    for (i = h.length; h[--i] === 0; ) h.pop();
  }
  return (
    I &&
      (e.e > f.maxE
        ? ((e.d = null), (e.e = NaN))
        : e.e < f.minE && ((e.e = 0), (e.d = [0]))),
    e
  );
}
function Dt(e, t, r) {
  if (!e.isFinite()) return ys(e);
  var n,
    s = e.e,
    i = ot(e.d),
    o = i.length;
  return (
    t
      ? (r && (n = r - o) > 0
          ? (i = i.charAt(0) + "." + i.slice(1) + Mt(n))
          : o > 1 && (i = i.charAt(0) + "." + i.slice(1)),
        (i = i + (e.e < 0 ? "e" : "e+") + e.e))
      : s < 0
      ? ((i = "0." + Mt(-s - 1) + i), r && (n = r - o) > 0 && (i += Mt(n)))
      : s >= o
      ? ((i += Mt(s + 1 - o)),
        r && (n = r - s - 1) > 0 && (i = i + "." + Mt(n)))
      : ((n = s + 1) < o && (i = i.slice(0, n) + "." + i.slice(n)),
        r && (n = r - o) > 0 && (s + 1 === o && (i += "."), (i += Mt(n)))),
    i
  );
}
function we(e, t) {
  var r = e[0];
  for (t *= 7; r >= 10; r /= 10) t++;
  return t;
}
function Te(e, t, r) {
  if (t > pi) throw ((I = !0), r && (e.precision = r), Error(hs));
  return O(new e(Ee), t, 1, !0);
}
function Et(e, t, r) {
  if (t > ze) throw Error(hs);
  return O(new e(Be), t, r, !0);
}
function Yn(e) {
  var t = e.length - 1,
    r = 7 * t + 1;
  if ((t = e[t])) {
    for (; t % 10 == 0; t /= 10) r--;
    for (t = e[0]; t >= 10; t /= 10) r++;
  }
  return r;
}
function Mt(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function gs(e, t, r, n) {
  var s,
    i = new e(1),
    o = Math.ceil(n / 7 + 4);
  for (I = !1; ; ) {
    if (
      (r % 2 && zn((i = i.times(t)).d, o) && (s = !0), (r = ut(r / 2)) === 0)
    ) {
      (r = i.d.length - 1), s && i.d[r] === 0 && ++i.d[r];
      break;
    }
    zn((t = t.times(t)).d, o);
  }
  return (I = !0), i;
}
function Hn(e) {
  return 1 & e.d[e.d.length - 1];
}
function ps(e, t, r) {
  for (var n, s, i = new e(t[0]), o = 0; ++o < t.length; ) {
    if (!(s = new e(t[o])).s) {
      i = s;
      break;
    }
    ((n = i.cmp(s)) === r || (n === 0 && i.s === r)) && (i = s);
  }
  return i;
}
function Ne(e, t) {
  var r,
    n,
    s,
    i,
    o,
    a,
    l,
    c = 0,
    u = 0,
    h = 0,
    d = e.constructor,
    f = d.rounding,
    p = d.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new d(
      e.d ? (e.d[0] ? (e.s < 0 ? 0 : 1 / 0) : 1) : e.s ? (e.s < 0 ? 0 : e) : NaN
    );
  for (
    t == null ? ((I = !1), (l = p)) : (l = t), a = new d(0.03125);
    e.e > -2;

  )
    (e = e.times(a)), (h += 5);
  for (
    l += n = ((Math.log(tt(2, h)) / Math.LN10) * 2 + 5) | 0,
      r = i = o = new d(1),
      d.precision = l;
    ;

  ) {
    if (
      ((i = O(i.times(e), l, 1)),
      (r = r.times(++u)),
      ot((a = o.plus(X(i, r, l, 1))).d).slice(0, l) === ot(o.d).slice(0, l))
    ) {
      for (s = h; s--; ) o = O(o.times(o), l, 1);
      if (t != null) return (d.precision = p), o;
      if (!(c < 3 && ce(o.d, l - n, f, c)))
        return O(o, (d.precision = p), f, (I = !0));
      (d.precision = l += 10), (r = i = a = new d(1)), (u = 0), c++;
    }
    o = a;
  }
}
function Lt(e, t) {
  var r,
    n,
    s,
    i,
    o,
    a,
    l,
    c,
    u,
    h,
    d,
    f = 1,
    p = e,
    v = p.d,
    g = p.constructor,
    y = g.rounding,
    R = g.precision;
  if (p.s < 0 || !v || !v[0] || (!p.e && v[0] == 1 && v.length == 1))
    return new g(v && !v[0] ? -1 / 0 : p.s != 1 ? NaN : v ? 0 : p);
  if (
    (t == null ? ((I = !1), (u = R)) : (u = t),
    (g.precision = u += 10),
    (n = (r = ot(v)).charAt(0)),
    !(Math.abs((i = p.e)) < 15e14))
  )
    return (
      (c = Te(g, u + 2, R).times(i + "")),
      (p = Lt(new g(n + "." + r.slice(1)), u - 10).plus(c)),
      (g.precision = R),
      t == null ? O(p, R, y, (I = !0)) : p
    );
  for (; (n < 7 && n != 1) || (n == 1 && r.charAt(1) > 3); )
    (n = (r = ot((p = p.times(e)).d)).charAt(0)), f++;
  for (
    i = p.e,
      n > 1 ? ((p = new g("0." + r)), i++) : (p = new g(n + "." + r.slice(1))),
      h = p,
      l = o = p = X(p.minus(1), p.plus(1), u, 1),
      d = O(p.times(p), u, 1),
      s = 3;
    ;

  ) {
    if (
      ((o = O(o.times(d), u, 1)),
      ot((c = l.plus(X(o, new g(s), u, 1))).d).slice(0, u) ===
        ot(l.d).slice(0, u))
    ) {
      if (
        ((l = l.times(2)),
        i !== 0 && (l = l.plus(Te(g, u + 2, R).times(i + ""))),
        (l = X(l, new g(f), u, 1)),
        t != null)
      )
        return (g.precision = R), l;
      if (!ce(l.d, u - 10, y, a)) return O(l, (g.precision = R), y, (I = !0));
      (g.precision = u += 10),
        (c = o = p = X(h.minus(1), h.plus(1), u, 1)),
        (d = O(p.times(p), u, 1)),
        (s = a = 1);
    }
    (l = c), (s += 2);
  }
}
function ys(e) {
  return String((e.s * e.s) / 0);
}
function _e(e, t) {
  var r, n, s;
  for (
    (r = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
      (n = t.search(/e/i)) > 0
        ? (r < 0 && (r = n), (r += +t.slice(n + 1)), (t = t.substring(0, n)))
        : r < 0 && (r = t.length),
      n = 0;
    t.charCodeAt(n) === 48;
    n++
  );
  for (s = t.length; t.charCodeAt(s - 1) === 48; --s);
  if ((t = t.slice(n, s))) {
    if (
      ((s -= n),
      (e.e = r = r - n - 1),
      (e.d = []),
      (n = (r + 1) % 7),
      r < 0 && (n += 7),
      n < s)
    ) {
      for (n && e.d.push(+t.slice(0, n)), s -= 7; n < s; )
        e.d.push(+t.slice(n, (n += 7)));
      n = 7 - (t = t.slice(n)).length;
    } else n -= s;
    for (; n--; ) t += "0";
    e.d.push(+t),
      I &&
        (e.e > e.constructor.maxE
          ? ((e.d = null), (e.e = NaN))
          : e.e < e.constructor.minE && ((e.e = 0), (e.d = [0])));
  } else (e.e = 0), (e.d = [0]);
  return e;
}
function Xt(e, t, r, n, s) {
  var i,
    o,
    a,
    l,
    c = e.precision,
    u = Math.ceil(c / 7);
  for (I = !1, l = r.times(r), a = new e(n); ; ) {
    if (
      ((o = X(a.times(l), new e(t++ * t++), c, 1)),
      (a = s ? n.plus(o) : n.minus(o)),
      (n = X(o.times(l), new e(t++ * t++), c, 1)),
      (o = a.plus(n)).d[u] !== void 0)
    ) {
      for (i = u; o.d[i] === a.d[i] && i--; );
      if (i == -1) break;
    }
    (i = a), (a = n), (n = o), (o = i);
  }
  return (I = !0), (o.d.length = u + 1), o;
}
function ve(e, t) {
  for (var r = e; --t; ) r *= e;
  return r;
}
function Vn(e, t) {
  var r,
    n = t.s < 0,
    s = Et(e, e.precision, 1),
    i = s.times(0.5);
  if ((t = t.abs()).lte(i)) return (St = n ? 4 : 1), t;
  if ((r = t.divToInt(s)).isZero()) St = n ? 3 : 2;
  else {
    if ((t = t.minus(r.times(s))).lte(i))
      return (St = Hn(r) ? (n ? 2 : 3) : n ? 4 : 1), t;
    St = Hn(r) ? (n ? 1 : 4) : n ? 3 : 2;
  }
  return t.minus(s).abs();
}
function Ke(e, t, r, n) {
  var s,
    i,
    o,
    a,
    l,
    c,
    u,
    h,
    d,
    f = e.constructor,
    p = r !== void 0;
  if (
    (p
      ? (lt(r, 1, Pt), n === void 0 ? (n = f.rounding) : lt(n, 0, 8))
      : ((r = f.precision), (n = f.rounding)),
    e.isFinite())
  ) {
    for (
      p
        ? ((s = 2), t == 16 ? (r = 4 * r - 3) : t == 8 && (r = 3 * r - 2))
        : (s = t),
        (o = (u = Dt(e)).indexOf(".")) >= 0 &&
          ((u = u.replace(".", "")),
          ((d = new f(1)).e = u.length - o),
          (d.d = Re(Dt(d), 10, s)),
          (d.e = d.d.length)),
        i = l = (h = Re(u, 10, s)).length;
      h[--l] == 0;

    )
      h.pop();
    if (h[0]) {
      if (
        (o < 0
          ? i--
          : (((e = new f(e)).d = h),
            (e.e = i),
            (h = (e = X(e, d, r, n, 0, s)).d),
            (i = e.e),
            (c = ls)),
        (o = h[r]),
        (a = s / 2),
        (c = c || h[r + 1] !== void 0),
        (c =
          n < 4
            ? (o !== void 0 || c) && (n === 0 || n === (e.s < 0 ? 3 : 2))
            : o > a ||
              (o === a &&
                (n === 4 ||
                  c ||
                  (n === 6 && 1 & h[r - 1]) ||
                  n === (e.s < 0 ? 8 : 7)))),
        (h.length = r),
        c)
      )
        for (; ++h[--r] > s - 1; ) (h[r] = 0), r || (++i, h.unshift(1));
      for (l = h.length; !h[l - 1]; --l);
      for (o = 0, u = ""; o < l; o++) u += He.charAt(h[o]);
      if (p) {
        if (l > 1)
          if (t == 16 || t == 8) {
            for (o = t == 16 ? 4 : 3, --l; l % o; l++) u += "0";
            for (l = (h = Re(u, s, t)).length; !h[l - 1]; --l);
            for (o = 1, u = "1."; o < l; o++) u += He.charAt(h[o]);
          } else u = u.charAt(0) + "." + u.slice(1);
        u = u + (i < 0 ? "p" : "p+") + i;
      } else if (i < 0) {
        for (; ++i; ) u = "0" + u;
        u = "0." + u;
      } else if (++i > l) for (i -= l; i--; ) u += "0";
      else i < l && (u = u.slice(0, i) + "." + u.slice(i));
    } else u = p ? "0p+0" : "0";
    u = (t == 16 ? "0x" : t == 2 ? "0b" : t == 8 ? "0o" : "") + u;
  } else u = ys(e);
  return e.s < 0 ? "-" + u : u;
}
function zn(e, t) {
  if (e.length > t) return (e.length = t), !0;
}
function yi(e) {
  return new this(e).abs();
}
function _i(e) {
  return new this(e).acos();
}
function vi(e) {
  return new this(e).acosh();
}
function mi(e, t) {
  return new this(e).plus(t);
}
function Ri(e) {
  return new this(e).asin();
}
function wi(e) {
  return new this(e).asinh();
}
function Di(e) {
  return new this(e).atan();
}
function Ei(e) {
  return new this(e).atanh();
}
function Bi(e, t) {
  (e = new this(e)), (t = new this(t));
  var r,
    n = this.precision,
    s = this.rounding,
    i = n + 4;
  return (
    e.s && t.s
      ? e.d || t.d
        ? !t.d || e.isZero()
          ? ((r = t.s < 0 ? Et(this, n, s) : new this(0)).s = e.s)
          : !e.d || t.isZero()
          ? ((r = Et(this, i, 1).times(0.5)).s = e.s)
          : t.s < 0
          ? ((this.precision = i),
            (this.rounding = 1),
            (r = this.atan(X(e, t, i, 1))),
            (t = Et(this, i, 1)),
            (this.precision = n),
            (this.rounding = s),
            (r = e.s < 0 ? r.minus(t) : r.plus(t)))
          : (r = this.atan(X(e, t, i, 1)))
        : ((r = Et(this, i, 1).times(t.s > 0 ? 0.25 : 0.75)).s = e.s)
      : (r = new this(NaN)),
    r
  );
}
function Ti(e) {
  return new this(e).cbrt();
}
function Si(e) {
  return O((e = new this(e)), e.e + 1, 2);
}
function bi(e, t, r) {
  return new this(e).clamp(t, r);
}
function Ci(e) {
  if (!e || typeof e != "object") throw Error(be + "Object expected");
  var t,
    r,
    n,
    s = e.defaults === !0,
    i = [
      "precision",
      1,
      Pt,
      "rounding",
      0,
      8,
      "toExpNeg",
      -9e15,
      0,
      "toExpPos",
      0,
      Ye,
      "maxE",
      0,
      Ye,
      "minE",
      -9e15,
      0,
      "modulo",
      0,
      9,
    ];
  for (t = 0; t < i.length; t += 3)
    if (((r = i[t]), s && (this[r] = Ve[r]), (n = e[r]) !== void 0)) {
      if (!(ut(n) === n && n >= i[t + 1] && n <= i[t + 2]))
        throw Error(Ot + r + ": " + n);
      this[r] = n;
    }
  if (((r = "crypto"), s && (this[r] = Ve[r]), (n = e[r]) !== void 0)) {
    if (n !== !0 && n !== !1 && n !== 0 && n !== 1)
      throw Error(Ot + r + ": " + n);
    if (n) {
      if (
        typeof crypto > "u" ||
        !crypto ||
        (!crypto.getRandomValues && !crypto.randomBytes)
      )
        throw Error(ds);
      this[r] = !0;
    } else this[r] = !1;
  }
  return this;
}
function Li(e) {
  return new this(e).cos();
}
function Mi(e) {
  return new this(e).cosh();
}
function ki(e, t) {
  return new this(e).div(t);
}
function Ai(e) {
  return new this(e).exp();
}
function Pi(e) {
  return O((e = new this(e)), e.e + 1, 3);
}
function Oi() {
  var e,
    t,
    r = new this(0);
  for (I = !1, e = 0; e < arguments.length; )
    if ((t = new this(arguments[e++])).d) r.d && (r = r.plus(t.times(t)));
    else {
      if (t.s) return (I = !0), new this(1 / 0);
      r = t;
    }
  return (I = !0), r.sqrt();
}
function Qn(e) {
  return e instanceof Zt || (e && e.toStringTag === fs) || !1;
}
function xi(e) {
  return new this(e).ln();
}
function Ii(e, t) {
  return new this(e).log(t);
}
function Ni(e) {
  return new this(e).log(2);
}
function Ki(e) {
  return new this(e).log(10);
}
function Ui() {
  return ps(this, arguments, -1);
}
function Fi() {
  return ps(this, arguments, 1);
}
function Gi(e, t) {
  return new this(e).mod(t);
}
function Wi(e, t) {
  return new this(e).mul(t);
}
function Yi(e, t) {
  return new this(e).pow(t);
}
function Hi(e) {
  var t,
    r,
    n,
    s,
    i = 0,
    o = new this(1),
    a = [];
  if (
    (e === void 0 ? (e = this.precision) : lt(e, 1, Pt),
    (n = Math.ceil(e / 7)),
    this.crypto)
  )
    if (crypto.getRandomValues)
      for (t = crypto.getRandomValues(new Uint32Array(n)); i < n; )
        (s = t[i]) >= 429e7
          ? (t[i] = crypto.getRandomValues(new Uint32Array(1))[0])
          : (a[i++] = s % 1e7);
    else {
      if (!crypto.randomBytes) throw Error(ds);
      for (t = crypto.randomBytes((n *= 4)); i < n; )
        (s =
          t[i] +
          (t[i + 1] << 8) +
          (t[i + 2] << 16) +
          ((127 & t[i + 3]) << 24)) >= 214e7
          ? crypto.randomBytes(4).copy(t, i)
          : (a.push(s % 1e7), (i += 4));
      i = n / 4;
    }
  else for (; i < n; ) a[i++] = (1e7 * Math.random()) | 0;
  for (
    e %= 7,
      (n = a[--i]) && e && ((s = tt(10, 7 - e)), (a[i] = ((n / s) | 0) * s));
    a[i] === 0;
    i--
  )
    a.pop();
  if (i < 0) (r = 0), (a = [0]);
  else {
    for (r = -1; a[0] === 0; r -= 7) a.shift();
    for (n = 1, s = a[0]; s >= 10; s /= 10) n++;
    n < 7 && (r -= 7 - n);
  }
  return (o.e = r), (o.d = a), o;
}
function Vi(e) {
  return O((e = new this(e)), e.e + 1, this.rounding);
}
function zi(e) {
  return (e = new this(e)).d ? (e.d[0] ? e.s : 0 * e.s) : e.s || NaN;
}
function Qi(e) {
  return new this(e).sin();
}
function Xi(e) {
  return new this(e).sinh();
}
function qi(e) {
  return new this(e).sqrt();
}
function ji(e, t) {
  return new this(e).sub(t);
}
function $i() {
  var e = 0,
    t = arguments,
    r = new this(t[e]);
  for (I = !1; r.s && ++e < t.length; ) r = r.plus(t[e]);
  return (I = !0), O(r, this.precision, this.rounding);
}
function Zi(e) {
  return new this(e).tan();
}
function Ji(e) {
  return new this(e).tanh();
}
function to(e) {
  return O((e = new this(e)), e.e + 1, 1);
}
(b[Symbol.for("nodejs.util.inspect.custom")] = b.toString),
  (b[Symbol.toStringTag] = "Decimal");
var Zt = (b.constructor = (function e(t) {
  var r, n, s;
  function i(o) {
    var a,
      l,
      c,
      u = this;
    if (!(u instanceof i)) return new i(o);
    if (((u.constructor = i), Qn(o)))
      return (
        (u.s = o.s),
        void (I
          ? !o.d || o.e > i.maxE
            ? ((u.e = NaN), (u.d = null))
            : o.e < i.minE
            ? ((u.e = 0), (u.d = [0]))
            : ((u.e = o.e), (u.d = o.d.slice()))
          : ((u.e = o.e), (u.d = o.d ? o.d.slice() : o.d)))
      );
    if ((c = typeof o) == "number") {
      if (o === 0)
        return (u.s = 1 / o < 0 ? -1 : 1), (u.e = 0), void (u.d = [0]);
      if ((o < 0 ? ((o = -o), (u.s = -1)) : (u.s = 1), o === ~~o && o < 1e7)) {
        for (a = 0, l = o; l >= 10; l /= 10) a++;
        return void (I
          ? a > i.maxE
            ? ((u.e = NaN), (u.d = null))
            : a < i.minE
            ? ((u.e = 0), (u.d = [0]))
            : ((u.e = a), (u.d = [o]))
          : ((u.e = a), (u.d = [o])));
      }
      return 0 * o != 0
        ? (o || (u.s = NaN), (u.e = NaN), void (u.d = null))
        : _e(u, o.toString());
    }
    if (c === "string")
      return (
        (l = o.charCodeAt(0)) === 45
          ? ((o = o.slice(1)), (u.s = -1))
          : (l === 43 && (o = o.slice(1)), (u.s = 1)),
        Wn.test(o)
          ? _e(u, o)
          : (function (h, d) {
              var f, p, v, g, y, R, w, _, m;
              if (d.indexOf("_") > -1) {
                if (((d = d.replace(/(\d)_(?=\d)/g, "$1")), Wn.test(d)))
                  return _e(h, d);
              } else if (d === "Infinity" || d === "NaN")
                return +d || (h.s = NaN), (h.e = NaN), (h.d = null), h;
              if (fi.test(d)) (f = 16), (d = d.toLowerCase());
              else if (di.test(d)) f = 2;
              else {
                if (!gi.test(d)) throw Error(Ot + d);
                f = 8;
              }
              for (
                (g = d.search(/p/i)) > 0
                  ? ((w = +d.slice(g + 1)), (d = d.substring(2, g)))
                  : (d = d.slice(2)),
                  y = (g = d.indexOf(".")) >= 0,
                  p = h.constructor,
                  y &&
                    ((g = (R = (d = d.replace(".", "")).length) - g),
                    (v = gs(p, new p(f), g, 2 * g))),
                  g = m = (_ = Re(d, f, yt)).length - 1;
                _[g] === 0;
                --g
              )
                _.pop();
              return g < 0
                ? new p(0 * h.s)
                : ((h.e = we(_, m)),
                  (h.d = _),
                  (I = !1),
                  y && (h = X(h, v, 4 * R)),
                  w &&
                    (h = h.times(Math.abs(w) < 54 ? tt(2, w) : Zt.pow(2, w))),
                  (I = !0),
                  h);
            })(u, o)
      );
    if (c === "bigint")
      return o < 0 ? ((o = -o), (u.s = -1)) : (u.s = 1), _e(u, o.toString());
    throw Error(Ot + o);
  }
  if (
    ((i.prototype = b),
    (i.ROUND_UP = 0),
    (i.ROUND_DOWN = 1),
    (i.ROUND_CEIL = 2),
    (i.ROUND_FLOOR = 3),
    (i.ROUND_HALF_UP = 4),
    (i.ROUND_HALF_DOWN = 5),
    (i.ROUND_HALF_EVEN = 6),
    (i.ROUND_HALF_CEIL = 7),
    (i.ROUND_HALF_FLOOR = 8),
    (i.EUCLID = 9),
    (i.config = i.set = Ci),
    (i.clone = e),
    (i.isDecimal = Qn),
    (i.abs = yi),
    (i.acos = _i),
    (i.acosh = vi),
    (i.add = mi),
    (i.asin = Ri),
    (i.asinh = wi),
    (i.atan = Di),
    (i.atanh = Ei),
    (i.atan2 = Bi),
    (i.cbrt = Ti),
    (i.ceil = Si),
    (i.clamp = bi),
    (i.cos = Li),
    (i.cosh = Mi),
    (i.div = ki),
    (i.exp = Ai),
    (i.floor = Pi),
    (i.hypot = Oi),
    (i.ln = xi),
    (i.log = Ii),
    (i.log10 = Ki),
    (i.log2 = Ni),
    (i.max = Ui),
    (i.min = Fi),
    (i.mod = Gi),
    (i.mul = Wi),
    (i.pow = Yi),
    (i.random = Hi),
    (i.round = Vi),
    (i.sign = zi),
    (i.sin = Qi),
    (i.sinh = Xi),
    (i.sqrt = qi),
    (i.sub = ji),
    (i.sum = $i),
    (i.tan = Zi),
    (i.tanh = Ji),
    (i.trunc = to),
    t === void 0 && (t = {}),
    t && t.defaults !== !0)
  )
    for (
      s = [
        "precision",
        "rounding",
        "toExpNeg",
        "toExpPos",
        "maxE",
        "minE",
        "modulo",
        "crypto",
      ],
        r = 0;
      r < s.length;

    )
      t.hasOwnProperty((n = s[r++])) || (t[n] = this[n]);
  return i.config(t), i;
})(Ve));
(Ee = new Zt(Ee)), (Be = new Zt(Be));
const Gt = (e, t, r, n = 3) => {
    const s = new Zt(t),
      i = new Zt(r);
    let o;
    switch (e) {
      case "add":
        o = s.plus(i);
        break;
      case "subtract":
        o = s.minus(i);
        break;
      case "multiply":
        o = s.times(i);
        break;
      case "divide":
        o = s.dividedBy(i);
        break;
      default:
        throw new Error("不支持的运算类型");
    }
    return Number(o.toFixed(n));
  },
  at = (e = !0) => (e ? 0 : 1),
  Xn = (e, t, r) => {
    let n = 0;
    return e && (n |= 1), t && (n |= 2), r && (n |= 16), n;
  },
  j = (e = 1, t = 0) => Array(e).fill(t),
  Qe = (e) => 255 & e,
  Xe = (e) => (e >> 8) & 255,
  kt = (e) => (e >> 16) & 255,
  Kt = (e) => (e >> 24) & 255,
  H = (e) => [Qe(e), Xe(e)],
  _s = (e, t, r) => [92, e, t, r],
  vs = (e, t, r) => {
    let n = 53;
    return (
      (n += 92),
      (n += e),
      (n += t),
      e > 0 && e <= 252 && (n += r[r.length - 1]),
      n
    );
  },
  q = (e, t, r) => {
    const n = vs(e, t, r);
    return ((i, o, a = 64) => {
      const l = [...i, ...o],
        c = new Uint8Array(a).fill(0);
      return (
        l.forEach((u, h) => {
          c[h] = u;
        }),
        c
      );
    })(_s(e, t, n), r);
  },
  qn = (e, t, r) => {
    const n = vs(e, t, r);
    return ((i, o, a = 64) => {
      const l = [...i, ...o],
        c = [];
      for (let u = 0; u < l.length; u += a) {
        const h = new Uint8Array(a).fill(0);
        l.slice(u, u + a).forEach((d, f) => {
          h[f] = d;
        }),
          c.push(h);
      }
      return c;
    })(_s(e, t, n), r);
  },
  Jt = (e, t) => {
    const r = e.split(".").map(Number),
      n = t.split(".").map(Number),
      s = Math.max(r.length, n.length);
    for (; r.length < s; ) r.push(0);
    for (; n.length < s; ) n.push(0);
    for (let i = 0; i < s; i++) {
      if (r[i] > n[i]) return "greater";
      if (r[i] < n[i]) return "less";
    }
    return "equal";
  };
var ue, qe, $t, je;
(function (e) {
  (e[(e.ORDER_TYPE_PROTOCOL_VERSION = 1)] = "ORDER_TYPE_PROTOCOL_VERSION"),
    (e[(e.ORDER_TYPE_SAVING_PARAMETER = 2)] = "ORDER_TYPE_SAVING_PARAMETER"),
    (e[(e.ORDER_TYPE_RELOAD_PARAMETERS = 3)] = "ORDER_TYPE_RELOAD_PARAMETERS"),
    (e[(e.ORDER_TYPE_CLEAR_CALIBRATION_DATA = 4)] =
      "ORDER_TYPE_CLEAR_CALIBRATION_DATA"),
    (e[(e.ORDER_TYPE_OPEN_DKS = 5)] = "ORDER_TYPE_OPEN_DKS"),
    (e[(e.ORDER_TYPE_CLOSE_DKS = 6)] = "ORDER_TYPE_CLOSE_DKS"),
    (e[(e.ORDER_TYPE_REVERSE = 7)] = "ORDER_TYPE_REVERSE"),
    (e[(e.ORDER_TYPE_TURN_ON_REMAPPING = 8)] = "ORDER_TYPE_TURN_ON_REMAPPING"),
    (e[(e.ORDER_TYPE_TURN_OFF_REMAPPING = 9)] =
      "ORDER_TYPE_TURN_OFF_REMAPPING"),
    (e[(e.ORDER_TYPE_ENABLE_RELATIVE_TRIGGER = 10)] =
      "ORDER_TYPE_ENABLE_RELATIVE_TRIGGER"),
    (e[(e.ORDER_TYPE_TURN_OFF_RELATIVE_TRIGGER = 11)] =
      "ORDER_TYPE_TURN_OFF_RELATIVE_TRIGGER"),
    (e[(e.ORDER_TYPE_START_CALIBRATION = 12)] = "ORDER_TYPE_START_CALIBRATION"),
    (e[(e.ORDER_TYPE_CLOSE_CALIBRATION = 13)] = "ORDER_TYPE_CLOSE_CALIBRATION"),
    (e[(e.ORDER_TYPE_START_DEMONSTRATION = 14)] =
      "ORDER_TYPE_START_DEMONSTRATION"),
    (e[(e.ORDER_TYPE_CLOSE_DEMONSTRATION = 15)] =
      "ORDER_TYPE_CLOSE_DEMONSTRATION"),
    (e[(e.ORDER_TYPE_ERASE_MACROSTORAGE = 16)] =
      "ORDER_TYPE_ERASE_MACROSTORAGE"),
    (e[(e.ORDER_TYPE_RESTORE_FACTORY_SETTINGS = 17)] =
      "ORDER_TYPE_RESTORE_FACTORY_SETTINGS"),
    (e[(e.ORDER_TYPE_LOCK_WIN_KEY = 32)] = "ORDER_TYPE_LOCK_WIN_KEY"),
    (e[(e.ORDER_TYPE_QUERY_WIN_MODEL = 33)] = "ORDER_TYPE_QUERY_WIN_MODEL"),
    (e[(e.ORDER_TYPE_QUERY_MAC_MODEL = 34)] = "ORDER_TYPE_QUERY_MAC_MODEL"),
    (e[(e.ORDER_TYPE_QUERY_STANDARD_MODEL = 35)] =
      "ORDER_TYPE_QUERY_STANDARD_MODEL"),
    (e[(e.ORDER_TYPE_QUERY_ADJUSTABLE_SPEEDMODEL = 36)] =
      "ORDER_TYPE_QUERY_ADJUSTABLE_SPEEDMODEL"),
    (e[(e.ORDER_TYPE_PRECISION_STROKE = 37)] = "ORDER_TYPE_PRECISION_STROKE"),
    (e[(e.ORDER_TYPE_KEYBOARD_NAME = 38)] = "ORDER_TYPE_KEYBOARD_NAME"),
    (e[(e.ORDER_TYPE_SET_WIN_MODEL = 48)] = "ORDER_TYPE_SET_WIN_MODEL"),
    (e[(e.ORDER_TYPE_SET_MAC_MODEL = 49)] = "ORDER_TYPE_SET_MAC_MODEL"),
    (e[(e.ORDER_TYPE_SET_STANDARD_MODEL = 50)] =
      "ORDER_TYPE_SET_STANDARD_MODEL"),
    (e[(e.ORDER_TYPE_SET_ADJUSTABLE_SPEEDMODEL = 51)] =
      "ORDER_TYPE_SET_ADJUSTABLE_SPEEDMODEL"),
    (e[(e.ORDER_TYPE_TOP_DEAD_SWITCH = 52)] = "ORDER_TYPE_TOP_DEAD_SWITCH"),
    (e[(e.ORDER_TYPE_RGB1 = 64)] = "ORDER_TYPE_RGB1"),
    (e[(e.ORDER_TYPE_RGB2 = 65)] = "ORDER_TYPE_RGB2"),
    (e[(e.ORDER_TYPE_RGB3 = 66)] = "ORDER_TYPE_RGB3"),
    (e[(e.ORDER_TYPE_RGB4 = 67)] = "ORDER_TYPE_RGB4"),
    (e[(e.ORDER_TYPE_ROES = 80)] = "ORDER_TYPE_ROES"),
    (e[(e.ORDER_TYPE_WEB = 96)] = "ORDER_TYPE_WEB"),
    (e[(e.ORDER_TYPE_SOCD = 97)] = "ORDER_TYPE_SOCD"),
    (e[(e.ORDER_TYPE_CONFIG = 112)] = "ORDER_TYPE_CONFIG"),
    (e[(e.ORDER_TYPE_CURRENT_AXOSOME = 117)] = "ORDER_TYPE_CURRENT_AXOSOME"),
    (e[(e.ORDER_TYPE_AXOSOME = 118)] = "ORDER_TYPE_AXOSOME"),
    (e[(e.QUERY_LIGHT_FIX_RGB = 68)] = "QUERY_LIGHT_FIX_RGB"),
    (e[(e.ORDER_TYPE_RGBNACK = 71)] = "ORDER_TYPE_RGBNACK");
})(ue || (ue = {})),
  (function (e) {
    (e[(e.Layout_Fn0 = 0)] = "Layout_Fn0"),
      (e[(e.Layout_Fn1 = 1)] = "Layout_Fn1"),
      (e[(e.Layout_Fn2 = 2)] = "Layout_Fn2"),
      (e[(e.Layout_Fn3 = 3)] = "Layout_Fn3"),
      (e[(e.Layout_Mode = 8)] = "Layout_Mode"),
      (e[(e.Layout_DB0 = 4)] = "Layout_DB0"),
      (e[(e.Layout_DB1 = 5)] = "Layout_DB1"),
      (e[(e.Layout_DB2 = 6)] = "Layout_DB2"),
      (e[(e.Layout_DB3 = 7)] = "Layout_DB3"),
      (e[(e.Layout_DKS1 = 9)] = "Layout_DKS1"),
      (e[(e.Layout_DKS2 = 10)] = "Layout_DKS2"),
      (e[(e.Layout_DKS3 = 11)] = "Layout_DKS3"),
      (e[(e.Layout_DKS4 = 12)] = "Layout_DKS4"),
      (e[(e.Layout_TRPS1 = 13)] = "Layout_TRPS1"),
      (e[(e.Layout_TRPS2 = 14)] = "Layout_TRPS2"),
      (e[(e.Layout_TRPS3 = 15)] = "Layout_TRPS3"),
      (e[(e.Layout_TRPS4 = 16)] = "Layout_TRPS4"),
      (e[(e.Layout_MacroAddr = 17)] = "Layout_MacroAddr"),
      (e[(e.Layout_MacroSize = 18)] = "Layout_MacroSize"),
      (e[(e.Layout_MTDelay = 19)] = "Layout_MTDelay"),
      (e[(e.Layout_RTP = 20)] = "Layout_RTP"),
      (e[(e.Layout_RTR = 21)] = "Layout_RTR"),
      (e[(e.Layout_DP = 22)] = "Layout_DP"),
      (e[(e.Layout_DR = 23)] = "Layout_DR"),
      (e[(e.Layout_KR = 24)] = "Layout_KR"),
      (e[(e.Layout_AXIS = 25)] = "Layout_AXIS"),
      (e[(e.Layout_RS = 32)] = "Layout_RS");
  })(qe || (qe = {})),
  (function (e) {
    (e[(e.global = 0)] = "global"),
      (e[(e.single = 1)] = "single"),
      (e[(e.rt = 2)] = "rt");
  })($t || ($t = {})),
  (function (e) {
    (e[(e.BL_NONE = 0)] = "BL_NONE"),
      (e[(e.BL_SIGN = 2)] = "BL_SIGN"),
      (e[(e.BL_ERASE = 3)] = "BL_ERASE"),
      (e[(e.BL_REBOOT = 4)] = "BL_REBOOT"),
      (e[(e.BL_TOBOOT = 5)] = "BL_TOBOOT"),
      (e[(e.BL_WRITE = 6)] = "BL_WRITE");
  })(je || (je = {}));
var Je = Object.freeze({
  __proto__: null,
  get BLControls() {
    return je;
  },
  get KeyLayout() {
    return qe;
  },
  get KeyTouchMode() {
    return $t;
  },
  get OrderType() {
    return ue;
  },
});
const jn = (e, t = "1.0.5") => {
    const { key: r, dks: n, delay: s } = e,
      i = Jt(t, "1.0.7"),
      o = Jt(t, "1.0.5"),
      a = ["greater", "equal"].includes(i),
      l = ["greater", "equal"].includes(o);
    return a ? [r, ...H(n), ...H(s)] : l ? [r, ...H(n)] : [r, n];
  },
  $n = (e, t = "1.0.5", r = !1) => {
    if (r) return [e];
    const n = Jt(t, "1.0.7"),
      s = ["greater", "equal"].includes(n);
    if (["1.0.5", "1.0.6"].includes(t) || s) {
      const {
          pos1: c,
          pos2: u,
          key1: h,
          key2: d,
          type: f,
          mode: p,
          delay: v,
        } = e,
        g = H(h),
        y = H(d);
      if (s) {
        const R = H(v);
        return [c, u, ...g, ...y, f, p, ...R];
      }
      return [c, u, ...g, ...y, f, p];
    }
    const { key: i, dks1: o, mode1: a, mode2: l } = e;
    return [i, o, a, o, i, l];
  },
  {
    ORDER_TYPE_KEYBOARD_NAME: eo,
    ORDER_TYPE_PRECISION_STROKE: ro,
    ORDER_TYPE_PROTOCOL_VERSION: no,
    ORDER_TYPE_ROES: so,
    ORDER_TYPE_CONFIG: io,
    ORDER_TYPE_AXOSOME: oo,
    ORDER_TYPE_CURRENT_AXOSOME: ao,
    ORDER_TYPE_SET_WIN_MODEL: co,
    ORDER_TYPE_SET_MAC_MODEL: uo,
    ORDER_TYPE_QUERY_MAC_MODEL: lo,
    ORDER_TYPE_QUERY_WIN_MODEL: ho,
    ORDER_TYPE_TOP_DEAD_SWITCH: fo,
    QUERY_LIGHT_FIX_RGB: go,
    ORDER_TYPE_RGBNACK: po,
  } = ue,
  ms = (e) => {
    const t = e[1];
    if (t === eo) {
      const r = new TextDecoder("utf-8"),
        n = e.slice(2, 34).filter((s) => s !== 0);
      return r.decode(new Uint8Array(n));
    }
    if (t === no) return `${15 & e[3]}.${(e[2] >> 4) & 15}.${15 & e[2]}`;
    if (t === ro) {
      const r = {
          precision: 0,
          decimalPlace: 0,
          minTouchTravel: 0,
          maxTouchTravel: 0,
          VID: 0,
          PID: 0,
        },
        n = e[2] / 1e3;
      r.precision = n;
      const s = (e[4] << 8) | e[3];
      r.minTouchTravel = s / 1e3;
      const i = (e[6] << 8) | e[5];
      r.maxTouchTravel = i / 1e3;
      const o = n.toString().split(".")[1];
      return (r.decimalPlace = o.length), r;
    }
    if (t === so) return e[2];
    if (t === io) return { configID: e[2], hasFourConfig: !0 };
    if (t === oo) {
      const r = [];
      for (let n = 0; n < 8; n++) {
        const s = (e[2 * (n + 1)] << 8) | e[2 * (n + 1) + 1];
        if (s === 65535) break;
        r.push(s);
      }
      return { hasAxisSetting: !0, axisList: r };
    }
    if (t === ao) return (e[3] << 8) | e[2];
    if (t === co) return e[2] === 1 ? 0 : null;
    if (t === uo) return e[2] === 1 ? 1 : null;
    if (t === ho) {
      const r = { currentSystem: "", hasWinMode: !1 },
        n = e[2];
      return (
        n === 1
          ? ((r.currentSystem = "win"), (r.hasWinMode = !0))
          : n === 0
          ? ((r.currentSystem = "mac"), (r.hasWinMode = !0))
          : n === 255 && (r.hasWinMode = !1),
        r
      );
    }
    if (t === lo) {
      const r = { currentSystem: "mac", hasMacMode: !1 },
        n = e[2];
      return (
        n === 1
          ? ((r.currentSystem = "mac"), (r.hasMacMode = !0))
          : n === 0
          ? ((r.currentSystem = "win"), (r.hasMacMode = !0))
          : n === 255 && (r.hasMacMode = !1),
        r
      );
    }
    return t === fo
      ? e[2] !== 0
      : t === go
      ? { r: e[2], g: e[3], b: e[4] }
      : t === po
      ? e[2] !== 0
      : null;
  },
  {
    KB2_CMD_DKS: yo,
    KB2_CMD_MPT: _o,
    KB2_CMD_MT: vo,
    KB2_CMD_TGL: mo,
    KB2_CMD_END: Ro,
    KB2_CMD_SOCD: wo,
    KB2_CMD_RS: Do,
    KB2_CMD_MACRO: Eo,
    KB2_CMD_MACRO_MODE: Bo,
  } = xt,
  { KB2_CMD: To, KB2_CMD_SYNC: So } = xt,
  { KB2_CMD_DEFKEY: bo, KB2_CMD_KEY: Zn } = xt,
  { KB2_CMD_LOGORGB: Co, KB2_CMD_PRGB: Ue, KB2_CMD_KRGB: Jn, KB2_CMD: Lo } = xt,
  { KB2_CMD_DB: Mo, KB2_CMD_RM6X21: ko } = xt,
  {
    KB2_BL_ERASE: Ao,
    KB2_BL_REBOOT: Po,
    KB2_BL_TOAPP: Oo,
    KB2_BL_WRITE: xo,
    KB2_BL_RCRC: Io,
    KB2_BL_SIGN: No,
    KB2_CMD_PIC: Ko,
    KB2_PIC_WRITE: Uo,
  } = xt,
  Fo = new (class {
    getTrps(e) {
      return ((t) => ({ trps: (t[4] << 8) | t[3] }))(e);
    }
    cmdDKS(e, t) {
      const r = ((s, i = "1.0.5") => {
          const { key: o, dks: a, trps: l, dbs: c } = s,
            u = [];
          for (let h = 0; h < c.length; h++) u.push(...H(c[h]));
          if (i === "1.0.5") {
            const h = [];
            for (let d = 0; d < a.length; d++) h.push(...H(a[d]));
            return [o, ...h, ...l, ...u];
          }
          return [o, ...a, ...l, ...u];
        })(t),
        n = [at(e), ...r];
      return q(n.length, yo, n);
    }
    getDks(e) {
      return ((t) => ({ dks: (t[4] << 8) | t[3] }))(e);
    }
    getMtorTgl(e) {
      return ((t) => 10 * ((t[4] << 8) | t[3]))(e);
    }
    cmdMPT(e, t) {
      const r = ((s) => {
          const i = [],
            o = [],
            { key: a, dks: l, dbs: c } = s;
          for (let u = 0; u < l.length; u++) o.push(...H(l[u]));
          for (let u = 0; u < c.length; u++)
            i.push(...H(Gt("multiply", c[u], 1e3)));
          return [a, ...o, ...i];
        })(e ? { key: t.key, dks: [], dbs: [] } : t),
        n = [at(e), ...r];
      return q(n.length, _o, n);
    }
    getMptData(e) {
      return ((t) => {
        const r = (t[3] << 8) | t[2],
          n = (t[5] << 8) | t[4],
          s = (t[7] << 8) | t[6],
          i = (t[9] << 8) | t[8],
          o = (t[11] << 8) | t[10],
          a = (t[13] << 8) | t[12];
        return {
          dks: [r, n, s],
          dbs: [
            Gt("divide", i, 1e3),
            Gt("divide", o, 1e3),
            Gt("divide", a, 1e3),
          ],
        };
      })(e);
    }
    cmdMT(e, t) {
      const r = ((s, i = "1.0.5") => {
          const { key: o, dks: a, delay: l } = s;
          if (i === "1.0.5") {
            const c = [];
            return (
              a.forEach((u) => {
                c.push(...H(u));
              }),
              [o, ...c, l]
            );
          }
          return [o, ...a, l];
        })(t),
        n = [at(e), ...r];
      return q(n.length, vo, n);
    }
    getMtRecdata(e) {
      return e;
    }
    cmdTGL(e, t) {
      const r = ((s, i = "1.0.5") => {
          const { key: o, dks: a, delay: l } = s,
            c = Jt(i, "1.0.5");
          return ["greater", "equal"].includes(c)
            ? [o, ...H(a), l / 10]
            : [o, a, l];
        })(e ? { key: t.key, dks: 0, delay: 0 } : t),
        n = [at(e), ...r];
      return q(n.length, mo, n);
    }
    getTglData(e) {
      return ((t) => ({ dks: (t[3] << 8) | t[2], delay: 10 * t[4] }))(e);
    }
    cmdEND(e, t, r = "1.0.5") {
      const n = e ? jn({ key: t.key, dks: 0, delay: 0 }) : jn(t, r),
        s = [at(e), ...n];
      return q(s.length, Ro, s);
    }
    getEndData(e) {
      return ((t) => ({ dks: (t[3] << 8) | t[2], delay: (t[5] << 8) | t[4] }))(
        e
      );
    }
    cmdSOCD(e, t, r = "1.0.5") {
      const n = e ? $n(t, r, !0) : $n(t, r),
        s = [at(e), ...n];
      return q(s.length, wo, s);
    }
    getSocdData(e, t = "1.0.5") {
      return ((r, n = "1.0.5") => {
        const s = Jt(n, "1.0.7"),
          i = ["greater", "equal"].includes(s),
          o = (r[4] << 8) | r[3],
          a = (r[6] << 8) | r[5];
        if (i) {
          const l = (r[10] << 8) | r[9];
          return {
            pos1: r[1],
            pos2: r[2],
            key1: o,
            key2: a,
            type: r[7],
            mode: r[8],
            delay: l,
          };
        }
        return { pos: r[1], key: o, type: r[7], mode: r[8] };
      })(e, t);
    }
    cmdRS(e, t) {
      const r = ((s) => {
        const { key: i, dks: o } = s;
        return [i, o, o, i];
      })(t);
      console.log("rs", r);
      const n = [at(e), ...r];
      return q(n.length, Do, n);
    }
    getRsData(e) {
      return ((t) => (console.log("data", t), { dks1: t[1], dks2: t[2] }))(e);
    }
    cmdMacro(e, t, r, n, s, i) {
      const o = at(e),
        a = ((c, u, h, d, f) => {
          const p = H(c),
            v = [];
          for (let g = 0; g < h.length; g++) {
            const y = H(h[g]);
            v.push(...y);
            let R = 0,
              w = 1;
            d[g] === 0 && (w = 8),
              (R |= w << 24),
              (R |= 16777215 & f[g]),
              v.push(...H(R)),
              v.push(kt(R), Kt(R));
          }
          return [...p, u, ...v];
        })(t, r, n, s, i),
        l = [o, ...a];
      return q(l.length, Eo, l);
    }
    modeMacro(e, t, r, n, s, i, o) {
      const a = at(e),
        l = ((u, h, d, f, p, v) => [u, ...H(h), d, f, ...H(p), ...H(v), kt(v)])(
          t,
          r,
          n,
          s,
          i,
          o
        ),
        c = [a, ...l];
      return q(c.length, Bo, c);
    }
    getModeMacro(e) {
      return ((t) => ({
        key: t[1],
        id: (t[3] << 8) | t[2],
        len: t[4],
        mode: t[5],
        num: (t[7] << 8) | t[6],
        delay: (t[10] << 16) | (t[9] << 8) | t[8],
      }))(e);
    }
  })(),
  Go = new (class {
    cmd(e) {
      const t = ((n) => {
          console.log("paramparamparamparam", n);
          const { type: s, hArgs: i, is8bit: o } = n,
            a = ue[s],
            l = j(2, 255);
          let c = i || [];
          if (o) {
            const u = [];
            c.forEach((h) => {
              u.push(...H(h));
            }),
              (c = u);
          }
          return [a, ...c, ...l];
        })(e),
        r = t.length;
      return q(r, To, t);
    }
    getCmd(e) {
      return ms(e);
    }
    cmdSync() {
      const e = [1, 2, 3, 4, ...j(2, 255)];
      return q(e.length, So, e);
    }
    getCmdSync(e) {
      return ((t) => {
        const r = {
            BoardID: 0,
            KeyboardLayout: 0,
            KeyType: 0,
            CustomerID: 0,
            ProductionId: 0,
            KeyboardRunMode: 0,
            KeyboardSN: "",
            firewareSpaceSize: 0,
            appVersion: "",
            appBuildDate: "",
            versionString: "",
          },
          n = t.slice(1, 5),
          s = new DataView(n.buffer);
        r.BoardID = s.getUint32(0, !0);
        const [, , , i, o, , , a] = t;
        (r.KeyboardLayout = o), (r.KeyType = i), (r.KeyboardRunMode = a);
        const l = new TextDecoder("utf-8");
        r.KeyboardSN = l.decode(t.slice(9, 25));
        const c = (t[6] << 8) | t[5];
        if (c < 1e3) {
          const u = Math.floor(c / 100),
            h = Math.floor((c % 100) / 10),
            d = c % 10;
          r.versionString = `V${u}.${h}.${d}`;
        } else r.firewareSpaceSize = 256 * c;
        return (
          l.decode(t.slice(26, 30)).startsWith("Boot")
            ? (r.appVersion = l.decode(t.slice(26, 37)))
            : (r.appVersion = l.decode(t.slice(26, 36))),
          (r.appBuildDate = l.decode(t.slice(43, 54))),
          r
        );
      })(e);
    }
  })(),
  Wo = new (class {
    cmdDefKey(e, t) {
      const r = [at(), e, t];
      return q(r.length, bo, r);
    }
    getDefKey(e) {
      return ((t) => {
        const r = t[1],
          n = t[23],
          s = t.slice(2, 23),
          i = t.slice(24, 45),
          o = [[], []];
        return (
          s.forEach((a, l) => {
            const c = { keyValue: a, location: { row: r, col: l } };
            a !== 0 && o[0].push(c);
          }),
          i.forEach((a, l) => {
            const c = { keyValue: a, location: { row: n, col: l } };
            a !== 0 && o[1].push(c);
          }),
          o
        );
      })(e);
    }
    cmdKey(e, t) {
      const r = at(e),
        n = ((i) => {
          const o = [];
          return (
            i.forEach((a) => {
              const { key: l, layout: c, value: u } = a;
              o.push(l),
                o.push(c),
                o.push(u ? Qe(u) : 0),
                o.push(u ? Xe(u) : 0);
            }),
            o
          );
        })(t),
        s = [r, ...n];
      return q(s.length, Zn, s);
    }
    cmdLayout(e, t) {
      const r = at(e),
        n = ((i) => {
          const o = [],
            { key: a, layout: l, value: c } = i;
          return (
            o.push(a),
            o.push(l),
            o.push(c ? Qe(c) : 0),
            o.push(c ? Xe(c) : 0),
            o
          );
        })(t),
        s = [r, ...n];
      return q(s.length, Zn, s);
    }
    getLayoutModel(e) {
      return ((t) => {
        const r = 255 & ((t[4] << 8) | t[3]),
          n = 15 & r;
        let s = "";
        switch ((r >> 4) & 15) {
          case $t.global:
            s = "global";
            break;
          case $t.single:
            s = "single";
            break;
          case $t.rt:
            s = "rt";
            break;
          default:
            s = "global";
        }
        return { touchMode: s, advancedKeyMode: n };
      })(e);
    }
    getFnLayoutKeyRecdata(e) {
      return ((t) => {
        const r = [];
        for (let n = 0; n < t.length; n += 4) {
          const s = t[n + 1],
            i = t[n + 2],
            o = (t[n + 4] << 8) | t[n + 3];
          i !== 255 &&
            o !== 255 &&
            s !== 0 &&
            r.push({ key: s, layout: i, value: o });
        }
        return r;
      })(e);
    }
  })(),
  Yo = new (class {
    cmdPRGB(e, t, r = "1.0.7") {
      return this.RGB(e, t, Ue, r);
    }
    cmdSRGB(e, t) {
      return this.SRGB(e, t);
    }
    getPRGB(e) {
      return ((r) => {
        const n = {
          open: !1,
          direction: !1,
          superResponse: !1,
          speed: 0,
          colors: [],
          mode: 0,
          luminance: 0,
          sleepDelay: 0,
          staticColor: 0,
          type: "static",
          dynamicColorId: 0,
        };
        let s = 5;
        for (let d = 0; d < 7; d++) {
          const f = r[s++],
            p = r[s++],
            v = r[s++];
          s++;
          const g = `#${v.toString(16).padStart(2, "0")}${p
            .toString(16)
            .padStart(2, "0")}${f.toString(16).padStart(2, "0")}`;
          n.colors.push(g);
        }
        const i = r[37];
        (n.open = !!(1 & i)),
          (n.direction = !!(2 & i)),
          (n.superResponse = !!(16 & i));
        const o = r[38];
        n.luminance = o;
        const a = r[40];
        n.speed = a;
        const l = r[39];
        (n.mode = l),
          (n.type =
            l === 0 ? "static" : l > 0 && l <= 20 ? "dynamic" : "custom");
        const c = r[41];
        n.sleepDelay = c;
        const u = r[42];
        n.staticColor = u;
        const h = r[43];
        return (n.dynamicColorId = h), n;
      })(e);
    }
    cmdLogoRGB(e, t) {
      return this.RGB(e, t, Co);
    }
    RGB(e, t, r = Ue, n = "1.0.7") {
      const s = at(e),
        i = ((a, l = "1.0.7") => {
          const {
              colors: c,
              open: u,
              direction: h,
              superResponse: d,
              luminance: f,
              mode: p,
              speed: v,
              sleepDelay: g,
              staticColor: y,
              dynamicColorId: R,
            } = a,
            w = j(4),
            _ = [],
            m = j(1, 255),
            B = Math.min(c.length, 7);
          for (let P = 0; P < B; P++) {
            const F = c[P];
            _.push(parseInt(F.substring(5, 7), 16)),
              _.push(parseInt(F.substring(3, 5), 16)),
              _.push(parseInt(F.substring(1, 3), 16)),
              _.push(...m);
          }
          const D = j(4),
            T = Xn(u, h, d),
            k = [...w, ..._, ...D, T, f, p, v, g, y],
            A = Jt(l, "1.0.9");
          return ["greater", "equal"].includes(A) ? [...k, R] : k;
        })(t, n),
        o = [s, ...i];
      return q(o.length, r, o);
    }
    SRGB(e, t, r = Ue) {
      const n = at(e),
        s = ((o) => {
          const {
              colors: a,
              open: l,
              direction: c,
              superResponse: u,
              luminance: h,
              mode: d,
              speed: f,
              sleepDelay: p,
              staticColor: v,
            } = o,
            g = j(4),
            y = [],
            R = j(1, 255),
            w = Math.min(a.length, 7);
          for (let m = 0; m < w; m++) {
            const B = a[m];
            y.push(parseInt(B.substring(5, 7), 16)),
              y.push(parseInt(B.substring(3, 5), 16)),
              y.push(parseInt(B.substring(1, 3), 16)),
              y.push(...R);
          }
          const _ = Xn(l, c, u);
          return [...g, ...y, _, h, d, f, p, v];
        })(t),
        i = [n, ...s];
      return q(i.length, r, i);
    }
    cmdSingleRGB(e, t) {
      const r = at(e),
        n = ((i) => {
          const { key: o, r: a, g: l, b: c } = i,
            u = [o];
          return (
            (a || a === 0) && u.push(a),
            (l || l === 0) && u.push(l),
            (c || c === 0) && u.push(c),
            u
          );
        })(t),
        s = [r, ...n];
      return q(s.length, Jn, [...s]);
    }
    getSingleRGB(e) {
      return ((t) => ({ key: t[1], R: t[2], G: t[3], B: t[4] }))(e);
    }
    cmdKRGB(e, t) {
      const r = at(e),
        n = ((c) => {
          const u = [];
          return (
            c.forEach((h) => {
              const { key: d, r: f, g: p, b: v } = h;
              u.push(d, f, p, v);
            }),
            u
          );
        })(t),
        s = 59 - n.length,
        i = new Uint8Array(s).fill(255),
        o = [r, ...n],
        a = o.length,
        l = Array.from(q(a, Jn, o));
      return l.splice(a + 4, i.length), new Uint8Array([...l, ...i]);
    }
    getSpecialSingleRGB(e) {
      return ((t) => {
        const r = {
          open: !1,
          direction: !1,
          superResponse: !1,
          speed: 0,
          colors: [],
          mode: 0,
          luminance: 0,
          sleepDelay: 0,
          staticColor: 0,
          type: "static",
          dynamicColorId: 0,
        };
        let n = 5;
        for (let h = 0; h < 7; h++) {
          const d = t[n++],
            f = t[n++],
            p = t[n++];
          n++;
          const v = `#${p.toString(16).padStart(2, "0")}${f
            .toString(16)
            .padStart(2, "0")}${d.toString(16).padStart(2, "0")}`;
          r.colors.push(v);
        }
        const s = t[37];
        (r.open = !!(1 & s)),
          (r.direction = !!(2 & s)),
          (r.superResponse = !!(16 & s));
        const i = t[38];
        r.luminance = i;
        const o = t[40];
        r.speed = o;
        const a = t[39];
        (r.mode = a),
          (r.type =
            a === 0 ? "static" : a > 0 && a <= 20 ? "dynamic" : "custom");
        const l = t[41];
        r.sleepDelay = l;
        const c = t[42];
        r.staticColor = c;
        const u = t[43];
        return (r.dynamicColorId = u), r;
      })(e);
    }
    cmdRGBSaturation(e, t) {
      var r;
      const n = [...((r = t), [68, ...r, ...j(2, 255)])];
      return q(n.length, Lo, n);
    }
  })(),
  Ho = new (class {
    cmdDB(e, t) {
      const r = [
        at(e),
        ...((n = { globalTouchTravel: 0, pressDead: 0, releaseDead: 0 }) => {
          const { globalTouchTravel: s, pressDead: i, releaseDead: o } = n;
          return [...j(2), ...H(s), ...H(i), ...H(o), ...j(6)];
        })(t),
      ];
      return q(r.length, Mo, r);
    }
    rm6X21Pack(e, t) {
      const r = ((s, i) => [s, i, ...j(2, 255)])(e, t),
        n = r.length;
      return q(n, ko, r);
    }
    getRm6X21data(e) {
      return ((t) => {
        const r = t.slice(2),
          n = Array.from(r);
        if (t[1] === 3) {
          const s = [];
          for (
            let i = 0;
            i < n.length && (n[i] !== 255 || n[i + 1] !== 255);
            i += 21
          ) {
            const o = n.slice(i, i + 21);
            o.length === 21 && s.push(o);
          }
          return s;
        }
        if (t[1] === 2 || t[1] === 6) {
          const s = [];
          for (let i = 0; i < 3; i++) {
            s.push([]);
            for (let o = 0; o < 21; o++) {
              const a = 2 * i * 21 + 2 * o,
                l = (n[a + 1] << 8) | n[a],
                c = Gt("divide", l, 1e3);
              s[i].push(c);
            }
          }
          return s;
        }
      })(e);
    }
    getGlobalTouchTravel(e) {
      return ((t) => {
        const r = { globalTouchTravel: 0, pressDead: 0, releaseDead: 0 };
        return (
          (r.globalTouchTravel = ((t[4] << 8) | t[3]) / 1e3),
          (r.pressDead = ((t[6] << 8) | t[5]) / 1e3),
          (r.releaseDead = ((t[8] << 8) | t[7]) / 1e3),
          r
        );
      })(e);
    }
    getSingleTravel(e, t) {
      return ((r, n) => (((r[4] << 8) | r[3]) / 1e3).toFixed(n))(e, t);
    }
    getDksTravel(e) {
      return ((t) => {
        const r = (t[4] << 8) | t[3];
        return Gt("divide", r, 1e3);
      })(e);
    }
    getRtTravel(e) {
      return ((t) => {
        const r = (t[4] << 8) | t[3];
        return Gt("divide", r, 1e3);
      })(e);
    }
    getDpDr(e) {
      return ((t) => ((t[4] << 8) | t[3]) / 1e3)(e);
    }
    getAxis(e) {
      return ((t) => ({ axis: (t[4] << 8) | t[3] }))(e);
    }
    getAxisList(e) {
      return ms(e);
    }
  })(),
  Vo = new (class {
    blSIGN(e, t, r) {
      const n = ((i, o, a) => {
          const l = j(1, 16),
            c = j(4, 255);
          return [i, ...l, ...o, ...l, ...a, ...c];
        })(e, t, r),
        s = n.length;
      return q(s, No, n);
    }
    blERASE(e) {
      const t = ((n) => [...j(4), ...H(n), kt(n), Kt(n), ...j(1, 255)])(e),
        r = t.length;
      return q(r, Ao, t);
    }
    blREBOOT() {
      const e = [...j(2, 255)];
      return q(e.length, Po, e);
    }
    blTOAPP(e, t) {
      const r = ((s, i) => [...j(4), ...H(s), kt(s), Kt(s), ...H(i)])(e, t),
        n = r.length;
      return q(n, Oo, r);
    }
    blWRITE(e) {
      const t = ((n) => {
          const { addr: s, size: i, codes: o } = n,
            a = H(s),
            l = kt(s),
            c = Kt(s),
            u = H(i),
            h = j(244, 255);
          return (
            o.forEach((d, f) => {
              h[f] = d;
            }),
            [...a, l, c, ...u, ...h]
          );
        })(e),
        r = t.length;
      return qn(r, xo, t);
    }
    blRCRC(e) {
      const t = ((n) => [...j(4), ...H(n), kt(n), Kt(n), ...j(2, 255)])(e),
        r = t.length;
      return q(r, Io, t);
    }
    picStart(e, t) {
      const r = ((s, i) => [s, ...H(s), kt(s), Kt(s), i, ...j(2, 255)])(e, t),
        n = r.length;
      return q(n, Ko, r);
    }
    picWrite(e, t, r) {
      const n = ((i, o, a) => {
          const l = H(i),
            c = kt(i),
            u = Kt(i),
            h = H(o),
            d = [];
          for (let f = 0; f < 244; f++) d.push(a[f]);
          return [...l, c, u, ...h, ...h];
        })(e, t, r),
        s = n.length;
      return qn(s, Uo, n);
    }
    getSignature(e) {
      return ((t) => {
        if (t[0] === 0) {
          const r = [];
          for (let n = 0; n < 16; n++) r[n] = t[n + 3];
          return { signSuccess: !0, signature: r };
        }
        return { signSuccess: !1, signature: [] };
      })(e);
    }
    getWrite(e) {
      return ((t) =>
        t[0] === 0
          ? {
              currentUpdateAddress:
                ((t[4] << 24) | (t[3] << 16) | (t[2] << 8) | t[1]) +
                ((t[6] << 8) | t[5]),
            }
          : { currentUpdateAddress: 0 })(e);
    }
    getCrc(e) {
      return ((t) => (t[10] << 8) | t[9])(e);
    }
  })(),
  Yt = {
    higherKeyProtocol: Fo,
    infoProtocol: Go,
    keyProtocol: Wo,
    lightingProtocol: Yo,
    systemProtocol: Vo,
    performanceProtocol: Ho,
  },
  { infoProtocol: J, systemProtocol: ts } = Yt;
class Rs {
  constructor(t) {
    E(this, "deviceBase");
    this.deviceBase = t;
  }
  delay(t = 10) {
    return new Promise((r) => {
      setTimeout(r, t);
    });
  }
  async getBaseInfo() {
    const t = J.cmdSync();
    try {
      const r = await this.deviceBase.sendData(t);
      return J.getCmdSync(r);
    } catch (r) {
      return r;
    }
  }
  async getApi(t) {
    console.log(t);
    const r = J.cmd(t);
    try {
      const n = await this.deviceBase.sendData(r);
      return J.getCmd(n);
    } catch (n) {
      return n;
    }
  }
  async setRateOfReturn(t) {
    const r = J.cmd({ type: "ORDER_TYPE_ROES", hArgs: [t] });
    try {
      const n = await this.deviceBase.sendData(r);
      return J.getCmd(n);
    } catch (n) {
      return n;
    }
  }
  async calibrationStart() {
    const t = J.cmd({ type: "ORDER_TYPE_START_CALIBRATION" });
    try {
      const r = await this.deviceBase.sendData(t);
      return J.getCmd(r);
    } catch (r) {
      return r;
    }
  }
  async calibrationEnd() {
    const t = J.cmd({ type: "ORDER_TYPE_CLOSE_CALIBRATION" });
    try {
      const r = await this.deviceBase.sendData(t);
      return J.getCmd(r);
    } catch (r) {
      return r;
    }
  }
  async setPic(t, r, n, s) {
    const i = ts.picStart(t, r),
      o = ts.picWrite(n, t, s);
    try {
      await this.deviceBase.sendData(i);
      for (const a of o) await this.deviceBase.sendData(a);
      return !0;
    } catch (a) {
      return a;
    }
  }
  async switchConfig(t) {
    const r = J.cmd({ type: "ORDER_TYPE_CONFIG", hArgs: [t] });
    try {
      const n = await this.deviceBase.sendData(r);
      return J.getCmd(n);
    } catch (n) {
      return n;
    }
  }
  async switchSystemMode(t) {
    const r =
        t === "win" ? "ORDER_TYPE_SET_WIN_MODEL" : "ORDER_TYPE_SET_MAC_MODEL",
      n = J.cmd({ type: r, hArgs: [1] });
    try {
      const s = await this.deviceBase.sendData(n);
      return J.getCmd(s);
    } catch (s) {
      return s;
    }
  }
  async setTopDeadSwitch(t) {
    const r = J.cmd({ type: "ORDER_TYPE_TOP_DEAD_SWITCH", hArgs: [t] });
    try {
      const n = await this.deviceBase.sendData(r);
      return J.getCmd(n);
    } catch (n) {
      return n;
    }
  }
  async factoryDataReset() {
    const t = J.cmd({ type: "ORDER_TYPE_RESTORE_FACTORY_SETTINGS" });
    try {
      if (await this.deviceBase.sendData(t)) return !0;
    } catch (r) {
      return r;
    }
  }
  async getSaturation() {
    const t = J.cmd({ type: "QUERY_LIGHT_FIX_RGB" });
    try {
      const r = await this.deviceBase.sendData(t);
      return J.getCmd(r);
    } catch (r) {
      return r;
    }
  }
}
const { systemProtocol: Bt } = Yt,
  { BLControls: zo } = Je,
  {
    BL_SIGN: wt,
    BL_WRITE: es,
    BL_ERASE: me,
    BL_REBOOT: rs,
    BL_TOBOOT: ns,
  } = zo;
class $e {
  constructor(t) {
    E(this, "deviceBase");
    E(this, "sn", []);
    E(this, "KeyboardRunMode");
    E(this, "addr", 0);
    E(this, "device", null);
    E(this, "baseInfo", null);
    this.deviceBase = t;
  }
  async init() {
    if ((await this.getDevice()).length === 0) return "toBootFirst";
    await this.getDeviceBaseInfo(this.deviceBase);
  }
  async getDevice() {
    const t = await this.deviceBase.getHidDevices(),
      [r] = t;
    return (this.device = r), t;
  }
  async getDeviceBaseInfo(t) {
    const r = new Rs(t);
    this.baseInfo = await r.getBaseInfo();
    const { KeyboardRunMode: n, KeyboardSN: s } = this.baseInfo;
    this.KeyboardRunMode = n;
    const i = [];
    for (let o = 0; o < 16; o++) i[o] = s.charCodeAt(o);
    this.sn = i;
  }
  async getSignProtocol(t, r, n) {
    const s = Bt.blSIGN(t, n, r),
      i = await this.deviceBase.sendData(s);
    return Bt.getSignature(i);
  }
  async getEraseProtocol(t) {
    const r = Bt.blERASE(t);
    return await this.deviceBase.sendData(r);
  }
  async getSwitchBoot() {
    const t = Bt.blREBOOT();
    return await this.deviceBase.sendData(t);
  }
  async getWriteProtocol(t, r = 3) {
    const n = Bt.blWRITE(t);
    for (let s = 0; s < n.length; s++) {
      const i = n[s];
      try {
        this.device.sendReport(0, i);
      } catch (o) {
        throw new Error(o.message);
      }
    }
    try {
      const s = await Promise.race([
        this.receiveReport(this.device),
        this.timeout(1e3),
      ]);
      return Bt.getWrite(new Uint8Array(s.slice(4)));
    } catch (s) {
      if (r > 0) return this.getWriteProtocol(t, r - 1);
      throw new Error(s.message);
    }
  }
  receiveReport(t) {
    return new Promise((r) => {
      const n = (s) => {
        const { data: i } = s;
        t.removeEventListener("inputreport", n), r(i.buffer);
      };
      t.addEventListener("inputreport", n);
    });
  }
  timeout(t) {
    return new Promise((r, n) => {
      setTimeout(() => {
        n(new Error("inputreport timed out"));
      }, t);
    });
  }
  async getCrcProtocol(t) {
    const r = Bt.blRCRC(t),
      n = await this.deviceBase.sendData(r);
    return Bt.getCrc(n);
  }
  async getSwitchAPPProtocol(t, r) {
    const n = Bt.blTOAPP(t, r);
    return await this.deviceBase.sendData(n);
  }
  async toBoot() {
    await this.init(), await Z(200);
    const { sn: t } = this,
      { signature: r, signSuccess: n } = await this.getSignProtocol(
        wt,
        t,
        Rt(t, vt, mt, wt)
      );
    if (!n) throw new Error("获取签名失败");
    await Z(10),
      await this.getSignProtocol(me, r, Rt(r, vt, mt, me)),
      await Z(10),
      await this.getEraseProtocol(0),
      await Z(10);
    const { signature: s, signSuccess: i } = await this.getSignProtocol(
      wt,
      t,
      Rt(t, vt, mt, wt)
    );
    if (!i) throw new Error("解锁toBoot签名失败");
    await Z(10),
      await this.getSignProtocol(rs, s, Rt(s, vt, mt, rs)),
      await Z(10),
      await this.getSwitchBoot();
  }
  async updateDrive(
    t,
    r,
    n = { toBootDelay: 4e3, writeDelay: 30, toAppDelay: 4e3 }
  ) {
    Tt.setUpgrading(!0),
      r == null ||
        r({ current: 0, total: t.length, updateStatus: "beforeToBoot" }),
      await this.toBoot(),
      r == null ||
        r({ current: 0, total: t.length, updateStatus: "afterToBoot" }),
      r == null ||
        r({ current: 0, total: t.length, updateStatus: "beforeToBootDelay" }),
      await Z(n.toBootDelay),
      r == null ||
        r({ current: 0, total: t.length, updateStatus: "afterToBootDelay" }),
      Tt.setUpgradingAfterBoot(!0);
    const s = await this.init();
    if ((console.log("resInit", s), s === "toBootFirst")) {
      const i = await this.deviceBase.getDevices(),
        [o] = i;
      console.log("toBootFirst------>", o),
        await this.deviceBase.init(o.id),
        (this.device = o.data),
        await this.getDeviceBaseInfo(this.deviceBase);
    }
    if ((await Z(30), this.KeyboardRunMode === 0))
      throw new Error("The keyboard is not in upgrade mode");
    try {
      const i = ((o) => {
        const a = o.length,
          l = a % 512,
          c = l === 0 ? 0 : 512 - l;
        if (c === 0) return o;
        const u = new Uint8Array(a + c);
        u.set(o);
        for (let h = a; h < u.length; h++) u[h] = 255;
        return u;
      })(t);
      return await this.updateStart(i, r, n);
    } catch (i) {
      throw new Error(i.message);
    }
  }
  async updateStart(
    t,
    r,
    n = { toBootDelay: 4e3, writeDelay: 30, toAppDelay: 4e3 }
  ) {
    const { sn: s } = this,
      { signature: i, signSuccess: o } = await this.getSignProtocol(
        wt,
        s,
        Rt(s, vt, mt, wt)
      );
    if (!o) throw new Error("烧录异常：解锁erase签名失败");
    await Z(10),
      this.getSignProtocol(me, i, Rt(s, vt, mt, me)),
      await Z(10),
      this.getEraseProtocol(t.length),
      await Z(100);
    const { signature: a, signSuccess: l } = await this.getSignProtocol(
      wt,
      s,
      Rt(s, vt, mt, wt)
    );
    if (!l) throw new Error("烧录异常：解锁write签名失败");
    await Z(10),
      await this.getSignProtocol(es, a, Rt(a, vt, mt, es)),
      await Z(10);
    let c = 244;
    r == null ||
      r({ current: 0, total: t.length, updateStatus: "beforeWrite" });
    for (let u = 0; this.addr + c <= t.length; u++)
      try {
        const h = ri(this.addr, t);
        await Z(n.writeDelay);
        const { currentUpdateAddress: d } = await this.getWriteProtocol({
          addr: this.addr,
          size: c,
          codes: h,
        });
        (this.addr = d),
          this.addr + c >= t.length && c === 244 && (c = t.length - this.addr),
          r &&
            r({
              current: this.addr,
              total: t.length,
              updateStatus: "isWriting",
            });
      } catch (h) {
        throw new Error(`烧录异常： ${h.message}`);
      }
    if (this.addr + 244 >= t.length) {
      Z(20);
      try {
        await Z(20);
        const u = await this.getCrcProtocol(t.length);
        if (
          ((h) => {
            const d = new Uint8Array(512);
            let f = 0;
            const p = h.length;
            for (let v = 0; v < p; v += 512) {
              let g = p - v;
              g > 512 && (g = 512), d.set(h.slice(v, v + g)), (f = si(f, d, g));
            }
            return f;
          })(t) === u
        ) {
          r == null ||
            r({ current: 0, total: t.length, updateStatus: "afterWrite" }),
            Tt.setUpgradingAfterBoot(!1),
            r == null ||
              r({ current: 0, total: t.length, updateStatus: "beforeToApp" });
          const h = await this.toApp(t, u);
          return (
            r == null ||
              r({ current: 0, total: t.length, updateStatus: "AfterToApp" }),
            r == null ||
              r({
                current: 0,
                total: t.length,
                updateStatus: "beforeToAppDelay",
              }),
            await Z(n.toAppDelay),
            r == null ||
              r({
                current: 0,
                total: t.length,
                updateStatus: "AfterToAppDelay",
              }),
            h
          );
        }
        throw new Error("crc校验异常，跳转失败");
      } catch (u) {
        throw new Error(u.message);
      } finally {
        Tt.setUpgrading(!1);
      }
    }
  }
  async toApp(t, r) {
    let n = !1;
    try {
      const { sn: s } = this,
        { signature: i, signSuccess: o } = await this.getSignProtocol(
          wt,
          s,
          Rt(s, vt, mt, wt)
        );
      if (!o) throw new Error("跳转异常：解锁签名失败");
      await Z(10);
      const { signSuccess: a } = await this.getSignProtocol(
        ns,
        i,
        Rt(i, vt, mt, ns)
      );
      if (!a) throw new Error("跳转异常：解锁跳转签名失败");
      await Z(10), await this.getSwitchAPPProtocol(t.length, r), (n = !0);
    } catch (s) {
      throw ((n = !1), new Error(s.message));
    }
    return { success: n };
  }
  resetUpgradeStatus() {
    Tt.setUpgrading(!1), Tt.setUpgradingAfterBoot(!1);
  }
}
E($e, "instance");
const { KeyLayout: qt, KeyTouchMode: Qo } = Je,
  { higherKeyProtocol: K, keyProtocol: nt } = Yt;
class Xo {
  constructor(t) {
    E(this, "deviceBase");
    this.deviceBase = t;
  }
  async getDks(t, r = "Layout_DKS1") {
    const n = qt[r],
      s = nt.cmdLayout(!0, { key: t, layout: n });
    try {
      const i = await this.deviceBase.sendData(s);
      return K.getDks(i);
    } catch (i) {
      return i;
    }
  }
  async getDksAll(t) {
    const {
        Layout_DKS1: r,
        Layout_DKS2: n,
        Layout_DKS3: s,
        Layout_DKS4: i,
      } = qt,
      o = nt.cmdLayout(!0, { key: t, layout: r }),
      a = nt.cmdLayout(!0, { key: t, layout: n }),
      l = nt.cmdLayout(!0, { key: t, layout: s }),
      c = nt.cmdLayout(!0, { key: t, layout: i });
    try {
      const u = await this.deviceBase.sendData(o),
        h = await this.deviceBase.sendData(a),
        d = await this.deviceBase.sendData(l),
        f = await this.deviceBase.sendData(c),
        p = K.getDks(u),
        v = K.getDks(h),
        g = K.getDks(d),
        y = K.getDks(f);
      return { dks1: p.dks, dks2: v.dks, dks3: g.dks, dks4: y.dks };
    } catch (u) {
      return u;
    }
  }
  async getTrps(t, r) {
    const n = qt[r],
      s = nt.cmdLayout(!0, { key: t, layout: n });
    try {
      const i = await this.deviceBase.sendData(s);
      return K.getTrps(i);
    } catch (i) {
      return i;
    }
  }
  async getTrpsAll(t) {
    const {
        Layout_TRPS1: r,
        Layout_TRPS2: n,
        Layout_TRPS3: s,
        Layout_TRPS4: i,
      } = qt,
      o = nt.cmdLayout(!0, { key: t, layout: r }),
      a = nt.cmdLayout(!0, { key: t, layout: n }),
      l = nt.cmdLayout(!0, { key: t, layout: s }),
      c = nt.cmdLayout(!0, { key: t, layout: i });
    try {
      const u = await this.deviceBase.sendData(o),
        h = await this.deviceBase.sendData(a),
        d = await this.deviceBase.sendData(l),
        f = await this.deviceBase.sendData(c),
        p = K.getTrps(u),
        v = K.getTrps(h),
        g = K.getTrps(d),
        y = K.getTrps(f);
      return { trps1: p.trps, trps2: v.trps, trps3: g.trps, trps4: y.trps };
    } catch (u) {
      return u;
    }
  }
  async getMtorTgl(t) {
    const r = qt.Layout_MTDelay,
      n = nt.cmdLayout(!0, { key: t, layout: r });
    try {
      const s = await this.deviceBase.sendData(n);
      return K.getMtorTgl(s);
    } catch (s) {
      return s;
    }
  }
  async setDKS(t) {
    const r = K.cmdDKS(!1, t);
    try {
      const n = await this.deviceBase.sendData(r);
      return K.getDks(n);
    } catch (n) {
      return n;
    }
  }
  async getMPT(t) {
    const r = K.cmdMPT(!0, { key: t });
    try {
      const n = await this.deviceBase.sendData(r);
      return K.getMptData(n);
    } catch (n) {
      return n;
    }
  }
  async setMPT(t, r = "1.0.5") {
    const n = K.cmdMPT(!1, t);
    console.log("data", n);
    try {
      const s = await this.deviceBase.sendData(n);
      return K.getMptData(s);
    } catch (s) {
      return s;
    }
  }
  async setMT(t, r = "1.0.5") {
    const n = K.cmdMT(!1, t);
    try {
      const s = await this.deviceBase.sendData(n);
      return K.getMtRecdata(s);
    } catch (s) {
      return s;
    }
  }
  async getMT(t) {
    const {
        Layout_DKS1: r,
        Layout_DKS2: n,
        Layout_DKS3: s,
        Layout_DKS4: i,
      } = qt,
      o = nt.cmdLayout(!0, { key: t, layout: r }),
      a = nt.cmdLayout(!0, { key: t, layout: n }),
      l = nt.cmdLayout(!0, { key: t, layout: s }),
      c = nt.cmdLayout(!0, { key: t, layout: i });
    try {
      const u = await this.deviceBase.sendData(o),
        h = await this.deviceBase.sendData(a),
        d = await this.deviceBase.sendData(l),
        f = await this.deviceBase.sendData(c),
        p = K.getDks(u),
        v = K.getDks(h),
        g = K.getDks(d),
        y = K.getDks(f);
      return { dks1: p.dks, dks2: v.dks, dks3: g.dks, dks4: y.dks };
    } catch (u) {
      return u;
    }
  }
  async getTGL(t) {
    const r = K.cmdTGL(!0, { key: t });
    try {
      const n = await this.deviceBase.sendData(r);
      return K.getTglData(n);
    } catch (n) {
      return n;
    }
  }
  async setTGL(t, r = "1.0.5") {
    const n = K.cmdTGL(!1, t);
    try {
      const s = await this.deviceBase.sendData(n);
      return K.getTglData(s);
    } catch (s) {
      return s;
    }
  }
  async getEND(t) {
    const r = K.cmdEND(!0, { key: t });
    try {
      const n = await this.deviceBase.sendData(r);
      return K.getEndData(n);
    } catch (n) {
      return n;
    }
  }
  async setEND(t, r = "1.0.5") {
    const n = K.cmdEND(!1, t, r);
    try {
      const s = await this.deviceBase.sendData(n);
      return K.getEndData(s);
    } catch (s) {
      return s;
    }
  }
  async getSocd(t, r = "1.0.5") {
    const n = K.cmdSOCD(!0, t, r);
    try {
      const s = await this.deviceBase.sendData(n);
      return K.getSocdData(s, r);
    } catch (s) {
      return s;
    }
  }
  async setSocd(t, r = "1.0.5") {
    const n =
      (((i, o) => {
        const a = i.split(".").map(Number),
          l = o.split(".").map(Number),
          c = Math.max(a.length, l.length);
        for (; a.length < c; ) a.push(0);
        for (; l.length < c; ) l.push(0);
        for (let u = 0; u < c; u++) {
          if (a[u] > l[u]) return "greater";
          if (a[u] < l[u]) return "less";
        }
      })(r, "1.0.5"),
      t);
    console.log("111111", n);
    const s = K.cmdSOCD(!1, n, r);
    try {
      const i = await this.deviceBase.sendData(s);
      return K.getSocdData(i, r);
    } catch (i) {
      return i;
    }
  }
  async getRS(t) {
    const r = K.cmdRS(!0, { key: t, dks: 0 });
    try {
      const n = await this.deviceBase.sendData(r);
      return K.getRsData(n);
    } catch (n) {
      return n;
    }
  }
  async setRS(t) {
    const r = K.cmdRS(!1, t);
    try {
      const n = await this.deviceBase.sendData(r);
      return K.getRsData(n);
    } catch (n) {
      return n;
    }
  }
  async getMacro(t) {
    const r = K.modeMacro(!0, t);
    try {
      const n = await this.deviceBase.sendData(r);
      return K.getModeMacro(n);
    } catch (n) {
      return n;
    }
  }
  async setMacro(t, r, n, s = "1.0.5") {
    let i = 0,
      o = 0;
    const a = new Uint16Array(9),
      l = new Array(9),
      c = new Uint32Array(9);
    for (o = 0; o < 9; o++) (a[o] = 0), (l[o] = 0), (c[o] = 0);
    (o = 0), (i = 256);
    for (let w = 0; w < r.length; w++)
      if (
        ((a[o] = r[w].keyCode),
        (l[o] = r[w].status),
        (c[o] = r[w].timeDifference),
        o++,
        i++,
        o === 9)
      ) {
        const _ = K.cmdMacro(!1, i - o, o, a, l, c);
        await this.deviceBase.sendData(_), (o = 0);
      }
    if (o > 0) {
      const w = K.cmdMacro(!1, i - o, o, a, l, c);
      await this.deviceBase.sendData(w);
    }
    let u = 0;
    n === "quick" ? (u = 2) : n === "single" && (u = 1);
    const { key: h, index: d, len: f, mode: p, num: v, delay: g } = t,
      y = (u << 4) | 6;
    await this.deviceBase.sendData(
      nt.cmdLayout(!1, { key: h, layout: 8, value: y })
    );
    const R = K.modeMacro(!1, h, d, f, p, v, g);
    try {
      return await this.deviceBase.sendData(R);
    } catch (w) {
      return w;
    }
  }
  async deleteKey(t, r) {
    const n = Qo[r] << 4,
      s = nt.cmdLayout(!1, { key: t, layout: 8, value: n });
    try {
      return await this.deviceBase.sendData(s);
    } catch (i) {
      return i;
    }
  }
}
const { keyProtocol: Ct } = Yt;
class qo {
  constructor(t) {
    E(this, "deviceBase");
    this.deviceBase = t;
  }
  async defKey() {
    const t = Ct.cmdDefKey(0, 1),
      r = Ct.cmdDefKey(2, 3),
      n = Ct.cmdDefKey(4, 5);
    try {
      const s = await this.deviceBase.sendData(t),
        i = await this.deviceBase.sendData(r),
        o = [s, i, await this.deviceBase.sendData(n)];
      let a = [];
      for (let l = 0; l < o.length; l++) {
        const c = Ct.getDefKey(o[l]);
        a = [...a, ...c];
      }
      return a;
    } catch (s) {
      return s;
    }
  }
  async getLayoutKeyInfo(t) {
    const r = Ct.cmdKey(!0, t);
    try {
      const n = await this.deviceBase.sendData(r);
      return Ct.getFnLayoutKeyRecdata(n);
    } catch (n) {
      return n;
    }
  }
  async updateKey(t) {
    const r = Ct.cmdKey(!1, t),
      n = await this.deviceBase.sendData(r);
    if (!n) throw new Error("No response received");
    const s = new Uint8Array(n.buffer);
    return Ct.getFnLayoutKeyRecdata(s);
  }
}
const { lightingProtocol: st } = Yt;
class jo {
  constructor(t) {
    E(this, "deviceBase");
    E(this, "light", {
      open: !1,
      direction: !1,
      superResponse: !1,
      speed: 0,
      colors: [],
      mode: 0,
      luminance: 0,
      sleepDelay: 0,
      staticColor: 0,
      dynamicColorId: 0,
    });
    E(this, "logoLight", {
      open: !1,
      direction: !1,
      superResponse: !1,
      speed: 0,
      colors: [],
      mode: 0,
      luminance: 0,
      sleepDelay: 0,
      staticColor: 0,
    });
    E(this, "version", "1.0.7");
    this.deviceBase = t;
  }
  async closedLighting() {
    const t = { ...this.light, open: !1 },
      r = st.cmdPRGB(!1, t, this.version);
    try {
      return await this.deviceBase.sendData(r), !0;
    } catch (n) {
      return n;
    }
  }
  async getLighting(t = "1.0.7") {
    const r = st.cmdPRGB(!0, this.light, t);
    try {
      const n = await this.deviceBase.sendData(r),
        s = st.getPRGB(n);
      return (this.light = s), (this.version = t), s;
    } catch (n) {
      return n;
    }
  }
  async setLighting(t, r = "1.0.7") {
    const {
        direction: n,
        superResponse: s,
        speed: i,
        colors: o,
        mode: a,
        luminance: l,
        sleepDelay: c,
        staticColor: u,
        type: h,
        dynamicColorId: d,
      } = t,
      f = {
        direction: n,
        superResponse: s,
        speed: i,
        mode: a,
        luminance: l,
        sleepDelay: c,
        colors: o,
        staticColor: u,
        dynamicColorId: d,
      };
    h === "dynamic"
      ? (f.staticColor = 0)
      : h === "static"
      ? (f.mode = 0)
      : h === "custom" && (f.mode = 21);
    const p = { ...f, open: !0 };
    (this.light = p), (this.version = r);
    const v = st.cmdPRGB(!1, p, r);
    try {
      return await this.deviceBase.sendData(v);
    } catch (g) {
      return g;
    }
  }
  async getLogoLighting() {
    const t = st.cmdLogoRGB(!0, this.light);
    try {
      const r = await this.deviceBase.sendData(t),
        n = st.getPRGB(r);
      return (this.logoLight = n), n;
    } catch (r) {
      return r;
    }
  }
  async setLogoLighting(t) {
    const {
        direction: r,
        superResponse: n,
        speed: s,
        colors: i,
        mode: o,
        luminance: a,
        sleepDelay: l,
        staticColor: c,
        type: u,
        open: h,
      } = t,
      d = {
        direction: r,
        superResponse: n,
        speed: s,
        mode: o,
        luminance: a,
        sleepDelay: l,
        colors: i,
        staticColor: c,
      };
    u === "dynamic" ? (d.staticColor = 0) : (d.mode = 0);
    const f = { ...d, open: h };
    this.logoLight = f;
    const p = st.cmdLogoRGB(!1, f);
    try {
      return await this.deviceBase.sendData(p);
    } catch (v) {
      return v;
    }
  }
  async getCustomLighting(t) {
    const r = st.cmdSingleRGB(!0, { key: t });
    try {
      const n = await this.deviceBase.sendData(r);
      return st.getSingleRGB(n);
    } catch (n) {
      return n;
    }
  }
  async saveCustomLighting() {
    const t = st.cmdSingleRGB(!1, { key: 254, r: 254, g: 254, b: 254 });
    try {
      await this.deviceBase.sendData(t);
    } catch (r) {
      return r;
    }
  }
  async setCustomLighting(t) {
    const r = st.cmdSingleRGB(!1, t);
    try {
      const n = await this.deviceBase.sendData(r);
      return st.getSingleRGB(n);
    } catch (n) {
      return n;
    }
  }
  async setSpecialLighting(t) {
    const {
        direction: r,
        superResponse: n,
        speed: s,
        colors: i,
        mode: o,
        luminance: a,
        sleepDelay: l,
        staticColor: c,
      } = t,
      u = {
        direction: r,
        superResponse: n,
        speed: s,
        mode: o,
        luminance: a,
        sleepDelay: l,
        colors: i,
        staticColor: c,
        open: !0,
      };
    this.light = u;
    const h = st.cmdSRGB(!1, u);
    try {
      const d = await this.deviceBase.sendData(h);
      return st.getSpecialSingleRGB(d);
    } catch (d) {
      return d;
    }
  }
  async getSpecialLighting() {
    const t = st.cmdSRGB(!0, this.light);
    try {
      const r = await this.deviceBase.sendData(t);
      return st.getSpecialSingleRGB(r);
    } catch (r) {
      return r;
    }
  }
  async setLightingSaturation(t) {
    const r = st.cmdRGBSaturation(!1, t);
    try {
      return await this.deviceBase.sendData(r);
    } catch (n) {
      return n;
    }
  }
}
const { performanceProtocol: V, keyProtocol: $ } = Yt,
  { KeyLayout: ct, KeyTouchMode: $o } = Je;
class Zo {
  constructor(t) {
    E(this, "deviceBase");
    this.deviceBase = t;
  }
  async getGlobalTouchTravel() {
    const t = V.cmdDB(!0);
    try {
      const r = await this.deviceBase.sendData(t);
      return V.getGlobalTouchTravel(r);
    } catch (r) {
      return r;
    }
  }
  async setDB(t) {
    const { globalTouchTravel: r, pressDead: n, releaseDead: s } = t,
      i = V.cmdDB(!1, {
        globalTouchTravel: 1e3 * r,
        pressDead: 1e3 * n,
        releaseDead: 1e3 * s,
      });
    try {
      const o = await this.deviceBase.sendData(i);
      return V.getGlobalTouchTravel(o);
    } catch (o) {
      return o;
    }
  }
  async getPerformanceMode(t) {
    const { Layout_Mode: r } = ct,
      n = $.cmdLayout(!0, { key: t, layout: r });
    try {
      const s = await this.deviceBase.sendData(n);
      return $.getLayoutModel(s);
    } catch (s) {
      return s;
    }
  }
  async setPerformanceMode(t, r, n) {
    const { Layout_Mode: s } = ct,
      i = ($o[r] << 4) | n,
      o = $.cmdLayout(!1, { key: t, layout: s, value: i });
    try {
      const a = await this.deviceBase.sendData(o);
      return $.getLayoutModel(a);
    } catch (a) {
      return a;
    }
  }
  async getDksTravel(t, r = "Layout_DB1") {
    const n = ct[r],
      s = $.cmdLayout(!0, { key: t, layout: n });
    try {
      const i = await this.deviceBase.sendData(s);
      return V.getDksTravel(i);
    } catch (i) {
      return i;
    }
  }
  async setDksTravel(t, r, n = "Layout_DB1") {
    const s = ct[n],
      i = $.cmdLayout(!1, { key: t, layout: s, value: 1e3 * r });
    try {
      const o = await this.deviceBase.sendData(i);
      return V.getDksTravel(o);
    } catch (o) {
      return o;
    }
  }
  async getDbTravel(t, r = "Layout_DB1") {
    const n = ct[r],
      s = $.cmdLayout(!0, { key: t, layout: n });
    try {
      const i = await this.deviceBase.sendData(s);
      return V.getDksTravel(i);
    } catch (i) {
      return i;
    }
  }
  async setDbTravel(t, r, n = "Layout_DB1") {
    const s = ct[n],
      i = $.cmdLayout(!1, { key: t, layout: s, value: 1e3 * r });
    try {
      const o = await this.deviceBase.sendData(i);
      return V.getDksTravel(o);
    } catch (o) {
      return o;
    }
  }
  async getRtTravel(t) {
    const { Layout_RTP: r, Layout_RTR: n } = ct,
      s = $.cmdLayout(!0, { key: t, layout: r }),
      i = $.cmdLayout(!0, { key: t, layout: n });
    try {
      const o = await this.deviceBase.sendData(s),
        a = await this.deviceBase.sendData(i);
      return { pressTravel: V.getRtTravel(o), releaseTravel: V.getRtTravel(a) };
    } catch (o) {
      return o;
    }
  }
  async setRtPressTravel(t, r) {
    const { Layout_RTP: n } = ct,
      s = $.cmdLayout(!1, { key: t, layout: n, value: 1e3 * r });
    try {
      const i = await this.deviceBase.sendData(s);
      return { pressTravel: V.getRtTravel(i) };
    } catch (i) {
      return i;
    }
  }
  async setRtReleaseTravel(t, r) {
    const { Layout_RTR: n } = ct,
      s = $.cmdLayout(!1, { key: t, layout: n, value: 1e3 * r });
    try {
      const i = await this.deviceBase.sendData(s);
      return { releaseTravel: V.getRtTravel(i) };
    } catch (i) {
      return i;
    }
  }
  async getSingleTravel(t, r = 2) {
    const { Layout_DB0: n } = ct,
      s = $.cmdLayout(!0, { key: t, layout: n });
    try {
      const i = await this.deviceBase.sendData(s);
      return V.getSingleTravel(i, r);
    } catch (i) {
      return i;
    }
  }
  async setSingleTravel(t, r, n = 2) {
    const { Layout_DB0: s } = ct,
      i = $.cmdLayout(!1, { key: t, layout: s, value: 1e3 * r });
    try {
      const o = await this.deviceBase.sendData(i);
      return V.getSingleTravel(o, n);
    } catch (o) {
      return o;
    }
  }
  async getDpDr(t) {
    const { Layout_DP: r, Layout_DR: n } = ct,
      s = $.cmdLayout(!0, { key: t, layout: r }),
      i = $.cmdLayout(!0, { key: t, layout: n });
    try {
      const o = await this.deviceBase.sendData(s),
        a = await this.deviceBase.sendData(i);
      return { pressDead: V.getDpDr(o), releaseDead: V.getDpDr(a) };
    } catch (o) {
      return o;
    }
  }
  async setDp(t, r) {
    const { Layout_DP: n } = ct,
      s = $.cmdLayout(!1, { key: t, layout: n, value: 1e3 * r });
    try {
      const i = await this.deviceBase.sendData(s);
      return V.getDpDr(i);
    } catch (i) {
      return i;
    }
  }
  async setDr(t, r) {
    const { Layout_DR: n } = ct,
      s = $.cmdLayout(!1, { key: t, layout: n, value: 1e3 * r });
    try {
      const i = await this.deviceBase.sendData(s);
      return V.getDpDr(i);
    } catch (i) {
      return i;
    }
  }
  async getAxis(t) {
    const { Layout_AXIS: r } = ct,
      n = $.cmdLayout(!0, { key: t, layout: r });
    try {
      const s = await this.deviceBase.sendData(n);
      return V.getAxis(s);
    } catch (s) {
      return s;
    }
  }
  async setAxis(t, r) {
    const { Layout_AXIS: n } = ct,
      s = $.cmdLayout(!1, { key: t, layout: n, value: r });
    try {
      const i = await this.deviceBase.sendData(s);
      return V.getAxis(i);
    } catch (i) {
      return i;
    }
  }
  async getRm6X21Travel03() {
    const t = V.rm6X21Pack(3, 1),
      r = await this.deviceBase.sendDataAndWaitMultiple(t, 3),
      n = Uint8Array.from(
        r.flatMap((s) => [...new Uint8Array(s.buffer)])
      ).slice(4);
    return V.getRm6X21data(n);
  }
  async getRm6X21Travel021() {
    const t = V.rm6X21Pack(2, 1),
      r = await this.deviceBase.sendDataAndWaitMultiple(t, 3),
      n = Uint8Array.from(
        r.flatMap((s) => [...new Uint8Array(s.buffer)])
      ).slice(4);
    return V.getRm6X21data(n);
  }
  async getRm6X21Travel022() {
    const t = V.rm6X21Pack(2, 2),
      r = await this.deviceBase.sendDataAndWaitMultiple(t, 3),
      n = Uint8Array.from(
        r.flatMap((s) => [...new Uint8Array(s.buffer)])
      ).slice(4);
    return V.getRm6X21data(n);
  }
  async getRm6X21Travel061() {
    const t = V.rm6X21Pack(6, 1),
      r = await this.deviceBase.sendDataAndWaitMultiple(t, 3),
      n = Uint8Array.from(
        r.flatMap((s) => [...new Uint8Array(s.buffer)])
      ).slice(4);
    return V.getRm6X21data(n);
  }
  async getRm6X21Travel062() {
    const t = V.rm6X21Pack(6, 2),
      r = await this.deviceBase.sendDataAndWaitMultiple(t, 3),
      n = Uint8Array.from(
        r.flatMap((s) => [...new Uint8Array(s.buffer)])
      ).slice(4);
    return V.getRm6X21data(n);
  }
  async getRm6X21Travel() {
    try {
      const t = await this.getRm6X21Travel03(),
        r = await this.getRm6X21Travel021(),
        n = await this.getRm6X21Travel022();
      return { status: t, travels: [...r, ...n] };
    } catch (t) {
      return t;
    }
  }
  async getRm6X21Calibration() {
    try {
      const t = await this.getRm6X21Travel021(),
        r = await this.getRm6X21Travel022(),
        n = await this.getRm6X21Travel061(),
        s = await this.getRm6X21Travel062();
      return { travels: [...t, ...r], calibrations: [...n, ...s] };
    } catch (t) {
      return t;
    }
  }
}
const Fe = {
    128: "getCmd",
    163: "getKey",
    171: "defKey",
    152: "getSpecialSingleRGB",
    153: "getLogoRGB",
  },
  { infoProtocol: Jo, keyProtocol: ss, lightingProtocol: is } = Yt,
  ta = {
    getCmd: (e) => Jo.getCmd(e),
    getKey: (e) => ss.getDefKey(e),
    defKey: (e) => ss.getDefKey(e),
    getSpecialSingleRGB: (e) => is.getSpecialSingleRGB(e),
    getLogoRGB: (e) => is.getPRGB(e),
  },
  Se = class Se {
    constructor({ configs: t, usage: r, usagePage: n }) {
      E(this, "hidService");
      E(this, "eventHandlers", new Map());
      E(this, "configs");
      E(this, "usage");
      E(this, "uagePage");
      E(this, "devices", []);
      E(this, "id", "");
      E(this, "globalCommandQueue", {});
      E(this, "globalCommandQueueMultiple", {});
      (this.configs = t),
        (this.usage = Array.isArray(r) ? r : [r]),
        (this.uagePage = Array.isArray(n) ? n : [n]),
        (this.hidService = hi.getInstance({
          configs: t,
          usage: r,
          usagePage: n,
        })),
        this.setupEventListeners(),
        Tt.bindToDeviceBase(this),
        Tt.startMonitoring();
    }
    static getInstance(t) {
      return this.instance || (this.instance = new Se(t)), this.instance;
    }
    setupEventListeners() {
      this.hidService.on("deviceStatus", (t) => {
        this.emit("deviceStatus", t);
      }),
        this.hidService.on(
          "deviceInfo",
          ({ status: t, device: r, deviceList: n }) => {
            var s, i;
            this.emit("deviceInfo", {
              status: t,
              device: r
                ? {
                    data: r,
                    id: r.id,
                    usage: this.usage[0],
                    usagePage:
                      ((i = (s = r.collections) == null ? void 0 : s[0]) == null
                        ? void 0
                        : i.usagePage) || -1,
                    vendorId: r.vendorId ?? -1,
                    productId: r.productId ?? -1,
                    productName: r.productName ?? "",
                  }
                : null,
              deviceList: n,
            });
          }
        ),
        this.hidService.on("inputReport", ({ data: t }) => {
          const r = new Uint8Array(t.buffer),
            n = r[2].toString(),
            s = ((i, o) => {
              const a = Fe[i];
              if (a) return ta[a](o.slice(4));
            })(n, r);
          this.emit(n, s);
        }),
        this.hidService.on("error", (t) => {
          this.emit("error", t);
        });
    }
    on(t, r) {
      var o;
      if (typeof r != "function") throw new Error("Handler must be a function");
      const n =
          (o = Object.entries(Fe).find(([, a]) => a === t)) == null
            ? void 0
            : o[0],
        s = n || t,
        i = this.eventHandlers.get(s) || [];
      i.push(r), this.eventHandlers.set(s, i);
    }
    emit(t, r) {
      (this.eventHandlers.get(t) || []).forEach((n) => n(r));
    }
    off(t, r) {
      var i;
      const n =
          (i = Object.entries(Fe).find(([, o]) => o === t)) == null
            ? void 0
            : i[0],
        s = n || t;
      if (this.eventHandlers.has(s))
        if (r) {
          const o = this.eventHandlers.get(s),
            a = o.indexOf(r);
          a !== -1 && o.splice(a, 1),
            o.length === 0 && this.eventHandlers.delete(s);
        } else this.eventHandlers.delete(s);
    }
    async getDevices() {
      return (this.devices = await this.hidService.devices()), this.devices;
    }
    async getHidDevices() {
      return this.hidService.getDevices();
    }
    async requestDevice() {
      return this.hidService.requestDevice();
    }
    async init(t) {
      return (this.id = t), this.hidService.initAndConnectDevice(t);
    }
    async reconnection(t, r, n) {
      await this.hidService.reconnection(t, r, n),
        (this.commandQueueWrapper.isFlushing = !1),
        (this.commandQueueWrapperMultiple.isFlushing = !1);
    }
    async sendData(t, r) {
      return new Promise((n, s) => {
        this.commandQueueWrapper.isFlushing ||
        this.commandQueueWrapperMultiple.isFlushing
          ? this.commandQueueWrapper.commandQueue.push({
              res: n,
              rej: s,
              args: t,
              timeout: r,
              sendTime: Date.now(),
            })
          : (this.commandQueueWrapper.commandQueue.push({
              res: n,
              rej: s,
              args: t,
              timeout: r,
              sendTime: Date.now(),
            }),
            this.flushQueue());
      });
    }
    get commandQueueWrapper() {
      return (
        this.globalCommandQueue[this.id] ||
          (this.globalCommandQueue[this.id] = {
            isFlushing: !1,
            commandQueue: [],
          }),
        this.globalCommandQueue[this.id]
      );
    }
    async flushQueue() {
      if (this.commandQueueWrapper.isFlushing !== !0) {
        this.commandQueueWrapper.isFlushing = !0;
        try {
          for (
            ;
            this.commandQueueWrapper.commandQueue.length !== 0 &&
            this.commandQueueWrapper.isFlushing === !0;

          ) {
            const {
              res: t,
              rej: r,
              args: n,
              timeout: s,
              sendTime: i,
            } = this.commandQueueWrapper.commandQueue[0];
            try {
              if (typeof n == "function") await n(), t();
              else {
                const o = await this.hidService.sendReportAndWaitResponse(
                  n,
                  s,
                  i
                );
                t(
                  this.hidService.deviceUsagePage === 65456
                    ? new Uint8Array(o.buffer)
                    : new Uint8Array(o.buffer).slice(4)
                );
              }
              this.commandQueueWrapper.commandQueue.shift();
            } catch (o) {
              if (o.message === "Read timeout") {
                this.commandQueueWrapper.commandQueue.shift(), r(o);
                continue;
              }
              throw o;
            }
          }
        } finally {
          (this.commandQueueWrapper.isFlushing = !1),
            this.commandQueueWrapperMultiple.commandQueue.length === 0 ||
              this.commandQueueWrapperMultiple.isFlushing ||
              this.flushQueueMultiple();
        }
      }
    }
    async sendDataAndWaitMultiple(t, r, n) {
      return new Promise((s, i) => {
        this.commandQueueWrapperMultiple.isFlushing ||
        this.commandQueueWrapper.isFlushing
          ? this.commandQueueWrapperMultiple.commandQueue.push({
              res: s,
              rej: i,
              args: t,
              timeout: n,
              expectedResponses: r,
              sendTime: Date.now(),
            })
          : (this.commandQueueWrapperMultiple.commandQueue.push({
              res: s,
              rej: i,
              args: t,
              timeout: n,
              expectedResponses: r,
              sendTime: Date.now(),
            }),
            this.flushQueueMultiple());
      });
    }
    async flushQueueMultiple() {
      if (this.commandQueueWrapperMultiple.isFlushing !== !0) {
        this.commandQueueWrapperMultiple.isFlushing = !0;
        try {
          for (
            ;
            this.commandQueueWrapperMultiple.commandQueue.length !== 0 &&
            this.commandQueueWrapperMultiple.isFlushing === !0;

          ) {
            const {
              res: t,
              rej: r,
              args: n,
              timeout: s,
              expectedResponses: i,
              sendTime: o,
            } = this.commandQueueWrapperMultiple.commandQueue[0];
            try {
              typeof n == "function"
                ? (await n(), t())
                : t(
                    await this.hidService.sendReportAndWaitMultipleResponses(
                      n,
                      i,
                      s,
                      o
                    )
                  ),
                this.commandQueueWrapperMultiple.commandQueue.shift();
            } catch (a) {
              if (a.message === "Read timeout") {
                this.commandQueueWrapperMultiple.commandQueue.shift(), r(a);
                continue;
              }
              throw a;
            }
          }
        } finally {
          (this.commandQueueWrapperMultiple.isFlushing = !1),
            this.commandQueueWrapper.commandQueue.length === 0 ||
              this.commandQueueWrapper.isFlushing ||
              this.flushQueue();
        }
      }
    }
    get commandQueueWrapperMultiple() {
      return (
        this.globalCommandQueueMultiple[this.id] ||
          (this.globalCommandQueueMultiple[this.id] = {
            isFlushing: !1,
            commandQueue: [],
          }),
        this.globalCommandQueueMultiple[this.id]
      );
    }
    destroy() {
      Tt.stopMonitoring();
    }
  };
E(Se, "instance");
let Ze = Se;
class os {
  constructor(t) {
    E(this, "deviceBase");
    E(this, "higherKeyController");
    E(this, "infoController");
    E(this, "keyController");
    E(this, "lightingController");
    E(this, "performanceController");
    E(this, "exportController");
    E(this, "getDevices", async () => this.deviceBase.getDevices());
    E(this, "init", (t) => this.deviceBase.init(t));
    E(this, "on", (t, r) => this.deviceBase.on(t, r));
    E(this, "off", (t) => this.deviceBase.off(t));
    E(this, "reconnection", (t, r) => this.deviceBase.reconnection(t, r));
    E(this, "getBaseInfo", () => this.infoController.getBaseInfo());
    E(this, "getApi", (t) => this.infoController.getApi(t));
    E(this, "setRateOfReturn", (t) => this.infoController.setRateOfReturn(t));
    E(this, "calibrationStart", () => this.infoController.calibrationStart());
    E(this, "calibrationEnd", () => this.infoController.calibrationEnd());
    E(this, "switchConfig", (t) => this.infoController.switchConfig(t));
    E(this, "switchSystemMode", (t) => this.infoController.switchSystemMode(t));
    E(this, "getLighting", (t) => this.lightingController.getLighting(t));
    E(this, "setLighting", (t, r) => this.lightingController.setLighting(t, r));
    E(this, "getLogoLighting", () => this.lightingController.getLogoLighting());
    E(this, "setLogoLighting", (t) =>
      this.lightingController.setLogoLighting(t)
    );
    E(this, "getCustomLighting", (t) =>
      this.lightingController.getCustomLighting(t)
    );
    E(this, "setCustomLighting", (t) =>
      this.lightingController.setCustomLighting(t)
    );
    E(this, "saveCustomLighting", () =>
      this.lightingController.saveCustomLighting()
    );
    E(this, "getSaturation", () => this.infoController.getSaturation());
    E(this, "setLightingSaturation", (t) =>
      this.lightingController.setLightingSaturation(t)
    );
    E(this, "closedLighting", () => this.lightingController.closedLighting());
    E(this, "defKey", () => this.keyController.defKey());
    E(this, "getLayoutKeyInfo", (t) => this.keyController.getLayoutKeyInfo(t));
    E(this, "setKey", (t) => this.keyController.updateKey(t));
    E(this, "getGlobalTouchTravel", () =>
      this.performanceController.getGlobalTouchTravel()
    );
    E(this, "setDB", (t) => this.performanceController.setDB(t));
    E(this, "getPerformanceMode", (t) =>
      this.performanceController.getPerformanceMode(t)
    );
    E(this, "setPerformanceMode", (t, r, n) =>
      this.performanceController.setPerformanceMode(t, r, n)
    );
    E(this, "getDksTravel", (t, r = "Layout_DB1") =>
      this.performanceController.getDksTravel(t, r)
    );
    E(this, "setDksTravel", (t, r, n = "Layout_DB1") =>
      this.performanceController.setDksTravel(t, r, n)
    );
    E(this, "getDbTravel", (t, r = "Layout_DB1") =>
      this.performanceController.getDbTravel(t, r)
    );
    E(this, "setDbTravel", (t, r, n = "Layout_DB1") =>
      this.performanceController.setDbTravel(t, r, n)
    );
    E(this, "getRtTravel", (t) => this.performanceController.getRtTravel(t));
    E(this, "setRtPressTravel", (t, r) =>
      this.performanceController.setRtPressTravel(t, r)
    );
    E(this, "setRtReleaseTravel", (t, r) =>
      this.performanceController.setRtReleaseTravel(t, r)
    );
    E(this, "getSingleTravel", (t, r = 2) =>
      this.performanceController.getSingleTravel(t, r)
    );
    E(this, "setSingleTravel", (t, r, n = 2) =>
      this.performanceController.setSingleTravel(t, r, n)
    );
    E(this, "getDpDr", (t) => this.performanceController.getDpDr(t));
    E(this, "setDp", (t, r) => this.performanceController.setDp(t, r));
    E(this, "setDr", (t, r) => this.performanceController.setDr(t, r));
    E(this, "getAxisList", () =>
      this.infoController.getApi({ type: "ORDER_TYPE_AXOSOME" })
    );
    E(this, "getAxis", (t) => this.performanceController.getAxis(t));
    E(this, "setAxis", (t, r) => this.performanceController.setAxis(t, r));
    E(this, "getRm6X21Travel", () =>
      this.performanceController.getRm6X21Travel()
    );
    E(this, "getRm6X21Calibration", () =>
      this.performanceController.getRm6X21Calibration()
    );
    E(this, "setDks", (t) => this.higherKeyController.setDKS(t));
    E(this, "getDks", (t, r = "Layout_DKS1") =>
      this.higherKeyController.getDks(t, r)
    );
    E(this, "getDksAll", (t) => this.higherKeyController.getDksAll(t));
    E(this, "getTrps", (t, r) => this.higherKeyController.getTrps(t, r));
    E(this, "getTrpsAll", (t) => this.higherKeyController.getTrpsAll(t));
    E(this, "getMtorTgl", (t) => this.higherKeyController.getMtorTgl(t));
    E(this, "setMT", (t) => this.higherKeyController.setMT(t));
    E(this, "getMT", (t) => this.higherKeyController.getMT(t));
    E(this, "setTGL", (t) => this.higherKeyController.setTGL(t));
    E(this, "getTGL", (t) => this.higherKeyController.getTGL(t));
    E(this, "setEND", (t, r = "1.0.5") =>
      this.higherKeyController.setEND(t, r)
    );
    E(this, "getEND", (t) => this.higherKeyController.getEND(t));
    E(this, "getSocd", (t, r = "1.0.5") =>
      this.higherKeyController.getSocd(t, r)
    );
    E(this, "setSocd", (t, r = "1.0.5") =>
      this.higherKeyController.setSocd(t, r)
    );
    E(this, "getMpt", (t) => this.higherKeyController.getMPT(t));
    E(this, "setMpt", (t) => this.higherKeyController.setMPT(t));
    E(this, "getRS", (t) => this.higherKeyController.getRS(t));
    E(this, "setRS", (t) => this.higherKeyController.setRS(t));
    E(this, "setMacro", (t, r, n) =>
      this.higherKeyController.setMacro(t, r, n)
    );
    E(this, "getMacro", (t) => this.higherKeyController.getMacro(t));
    E(this, "deleteKey", (t, r) => this.higherKeyController.deleteKey(t, r));
    E(this, "setTopDeadSwitch", (t) => this.infoController.setTopDeadSwitch(t));
    E(
      this,
      "updateBin",
      async (
        t,
        r,
        n = { toBootDelay: 4e3, writeDelay: 30, toAppDelay: 4e3 }
      ) => {
        try {
          if (t instanceof ArrayBuffer) {
            const s = new $e(this.deviceBase),
              i = new Uint8Array(t);
            return await s.updateDrive(i, r, n);
          }
          throw new Error("Provided file is not an ArrayBuffer");
        } catch (s) {
          throw new Error(s.message);
        }
      }
    );
    E(this, "exportConfig", (t, r = "keyboard_config.json") => {
      this.exportController.exportEncryptedJSON(t, r);
    });
    E(
      this,
      "importConfig",
      async (t) => await this.exportController.importEncryptedJSON(t)
    );
    E(this, "toBoot", async () => {
      try {
        await new $e(this.deviceBase).toBoot();
      } catch (t) {
        throw new Error(t.message);
      }
    });
    E(this, "factoryDataReset", () => this.infoController.factoryDataReset());
    E(this, "getSpecialLighting", () =>
      this.lightingController.getSpecialLighting()
    );
    E(this, "setSpecialLighting", (t) =>
      this.lightingController.setSpecialLighting(t)
    );
    (this.deviceBase = Ze.getInstance(t)),
      (this.higherKeyController = new Xo(this.deviceBase)),
      (this.infoController = new Rs(this.deviceBase)),
      (this.keyController = new qo(this.deviceBase)),
      (this.lightingController = new jo(this.deviceBase)),
      (this.performanceController = new Zo(this.deviceBase)),
      (this.exportController = new oi(this));
  }
}
class ia {
  constructor(t) {
    E(this, "store");
    E(this, "keyboardMap");
    E(this, "deviceRoute");
    E(this, "onFnMode");
    E(this, "awaitProfileGet");
    E(this, "axisMap");
    E(this, "ServiceDevice");
    E(this, "reportCallback");
    (this.store = t),
      (this.ServiceDevice = null),
      (this.keyboardMap = Is),
      (this.onFnMode = 0),
      (this.awaitProfileGet = 0),
      (this.deviceRoute = [
        "lightSet",
        "triggerSet",
        "masterSet",
        "keySet",
        "highSet",
        "perfSet",
        "versionSet",
      ]),
      (this.axisMap = gr);
  }
  async initModule(t) {
    (this.ServiceDevice = new os({
      usage: 1,
      usagePage: [65440],
      configs: [
        { vendorId: t.vId, productId: t.pId, usage: 1, usagePage: 65440 },
      ],
    })),
      (this.store.sdkModuleName = "sparkLinkV1");
  }
  async getDevices() {
    var t;
    return (t = this.ServiceDevice) == null ? void 0 : t.getDevices();
  }
  async initDevice(t) {
    var r;
    return (r = this.ServiceDevice) == null ? void 0 : r.init(t.id);
  }
  async initDeviceLayout(t = 0) {
    var o, a;
    const r =
      (o = this.store.deviceInfo) != null && o.pName.includes("WIN 60 HE")
        ? Ns
        : Ks;
    let n = dr(r);
    const s = await ((a = this.ServiceDevice) == null ? void 0 : a.defKey());
    if (!(s != null && s.length)) return;
    let i = s.filter((l) => l.length > 0);
    for (let l = 0; l < i.length; l++) {
      const c = i[l];
      if (c != null && c.length)
        for (let u = 0; u < c.length; u++) {
          const h = c[u];
          if (!(h != null && h.keyValue)) continue;
          let d =
            n == null ? void 0 : n.find((f) => f.row === l && f.col === u);
          d && (d.keyValue = h.keyValue);
        }
    }
    (this.store.deviceLayout = dr(n)), await this.initDeviceFnLayout(t);
  }
  async initDeviceFnLayout(t = 0) {
    var r, n, s, i, o, a, l, c, u, h;
    if ((r = this.store.deviceLayout) != null && r.length)
      for (let d of this.store.deviceLayout) {
        if (!(d != null && d.keyValue)) continue;
        const f = await ((n = this.ServiceDevice) == null
          ? void 0
          : n.getLayoutKeyInfo([{ key: d.keyValue, layout: t }]));
        (d.browserCode =
          (s = this.keyboardMap[Number(d.keyValue)]) == null
            ? void 0
            : s.browserCode),
          (d.browserValue =
            (i = this.keyboardMap[Number(d.keyValue)]) == null
              ? void 0
              : i.browserValue),
          f != null &&
            f.length &&
            ((d.fnValue = (o = f[0]) == null ? void 0 : o.value),
            (d.name =
              (l = this.keyboardMap[(a = f[0]) == null ? void 0 : a.value]) ==
              null
                ? void 0
                : l.defaultKey),
            (d.icon =
              ((c = this.keyboardMap[Number(d.fnValue)]) == null
                ? void 0
                : c.icon) || ""));
        const p = await ((u = this.ServiceDevice) == null
          ? void 0
          : u.getAxis(Number(d.keyValue)));
        d.axisColor =
          (h = this.axisMap[(p == null ? void 0 : p.axis) || 0]) == null
            ? void 0
            : h.iconColor;
      }
  }
  async getBaseInfo(t) {
    var s, i;
    const r = await ((s = this.ServiceDevice) == null
        ? void 0
        : s.getBaseInfo()),
      n = await this.getApi("ORDER_TYPE_QUERY_WIN_MODEL");
    switch (
      (this.activeReportMode(() => {}, t),
      (this.store.deviceInfo.binVersion = r.appVersion),
      (this.store.deviceInfo.deviceId = r.BoardID),
      (this.store.deviceInfo.FnMode =
        (n == null ? void 0 : n.currentSystem) === "win" ? "Win" : "Mac"),
      (i = this.store.deviceInfo) == null ? void 0 : i.pName)
    ) {
      case "HERO 68 HE ULTRA":
        this.axisMap = Ys;
        break;
      case "HERO 68 HE PRO":
        this.axisMap = gr;
        break;
      case "WIN 68 HE PRO":
        this.axisMap = Ws;
        break;
      case "WIN 68 HE MAX":
        this.axisMap = Gs;
        break;
      case "WIN 60 HE PRO":
        this.axisMap = Fs;
        break;
      case "WIN 60 HE MAX":
        this.axisMap = Us;
        break;
    }
  }
  async getProfileList() {
    const t = [
      { value: 0, label: fe.global.t("profileConfig.config1") },
      { value: 1, label: fe.global.t("profileConfig.config2") },
      { value: 2, label: fe.global.t("profileConfig.config3") },
      { value: 3, label: fe.global.t("profileConfig.config4") },
    ];
    if (this.ServiceDevice) {
      this.awaitProfileGet = 1;
      const r = await this.getApi("ORDER_TYPE_CONFIG");
      (this.store.profileIndex = (r == null ? void 0 : r.configID) || 0),
        (this.awaitProfileGet = 0);
    }
    return t;
  }
  async updateProfile(t, r) {
    var n;
    await ((n = this.ServiceDevice) == null ? void 0 : n.switchConfig(t));
  }
  async getApi(t, r = "") {
    var n;
    return (n = this.ServiceDevice) == null
      ? void 0
      : n.getApi({ type: t, hArgs: r });
  }
  getKeyValueByBrowserCode(t) {
    var n;
    let r = 0;
    for (const s in this.keyboardMap)
      if (((n = this.keyboardMap[s]) == null ? void 0 : n.browserCode) === t) {
        r = Number(s);
        break;
      }
    return r;
  }
  activeReportMode(t, r) {
    var n;
    t && (this.reportCallback = t),
      this.onFnMode === 0 &&
        ((this.onFnMode = 1),
        (n = this.ServiceDevice) == null ||
          n.on("getCmd", async (s) => {
            var i, o;
            if (s && s != null && s.currentSystem) {
              await xs();
              let a =
                (s == null ? void 0 : s.currentSystem) === "win"
                  ? "Win"
                  : "Mac";
              ((i = this.store.deviceInfo) == null ? void 0 : i.FnMode) !== a &&
                ((o = this.reportCallback) == null || o.call(this, s),
                (this.store.deviceInfo.FnMode = a),
                await this.initDeviceLayout());
            }
            fr(s == null ? void 0 : s.configID) &&
              r &&
              !this.awaitProfileGet &&
              this.store.profileIndex !== (s == null ? void 0 : s.configID) &&
              ((this.store.profileIndex = s == null ? void 0 : s.configID),
              setTimeout(async () => {
                (r.refreshData = !r.refreshData),
                  await this.initDeviceLayout(0);
              }, 300));
          }));
  }
  async autoChangeProfile(t, r, n) {
    try {
      if (!t) return !1;
      let s = new os({
        usage: 1,
        usagePage: [65440],
        configs: [
          { vendorId: t.vId, productId: t.pId, usage: 1, usagePage: 65440 },
        ],
      });
      if (!fr(t.id)) {
        let o = await s.getDevices();
        if (o != null && o.length) {
          let a = o.filter(
            (l) =>
              l.productName === t.productName &&
              l.venderId === t.venderId &&
              l.productId === t.productId
          );
          a != null && a.length && (t.id = a[0].id);
        }
      }
      await (s == null ? void 0 : s.init(t == null ? void 0 : t.id));
      const i = await (s == null
        ? void 0
        : s.getApi({ type: "ORDER_TYPE_CONFIG", hArgs: "" }));
      return (i == null ? void 0 : i.configID) === n
        ? ((s = null), !1)
        : (await (s == null ? void 0 : s.switchConfig(n)), (s = null), !0);
    } catch {
      return !1;
    }
  }
  resetClass() {
    var t, r;
    (this.onFnMode = 0),
      (this.awaitProfileGet = 0),
      (t = this.ServiceDevice) == null || t.off("getCmd"),
      (r = this.ServiceDevice) == null || r.off("usbChange");
  }
}
export { ia as default };
