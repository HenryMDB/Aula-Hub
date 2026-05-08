import {
  z as Ce,
  v as Oe,
  c as De,
  y as x,
  i as k,
  k as y,
  t as E,
  h as w,
  F as N,
  B as Fe,
  p as de,
  J as Ie,
  m as V,
  n as X,
  l as Pe,
  r as Le,
  s as je,
  b4 as P,
  L as ge,
  _ as Se,
} from "./index-w58kBX-A.js";
import "./three-core-Cz6MriGW.js";
/*!
 * Compressor.js v1.2.1
 * https://fengyuanchen.github.io/compressorjs
 *
 * Copyright 2018-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2023-02-28T14:09:41.732Z
 */ function pe(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(r);
    e &&
      (a = a.filter(function (i) {
        return Object.getOwnPropertyDescriptor(r, i).enumerable;
      })),
      t.push.apply(t, a);
  }
  return t;
}
function j(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? pe(Object(t), !0).forEach(function (a) {
          ze(r, a, t[a]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t))
      : pe(Object(t)).forEach(function (a) {
          Object.defineProperty(r, a, Object.getOwnPropertyDescriptor(t, a));
        });
  }
  return r;
}
function Me(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function be(r, e) {
  for (var t = 0; t < e.length; t++) {
    var a = e[t];
    (a.enumerable = a.enumerable || !1),
      (a.configurable = !0),
      "value" in a && (a.writable = !0),
      Object.defineProperty(r, Be(a.key), a);
  }
}
function We(r, e, t) {
  return (
    e && be(r.prototype, e),
    t && be(r, t),
    Object.defineProperty(r, "prototype", { writable: !1 }),
    r
  );
}
function ze(r, e, t) {
  return (
    (e = Be(e)),
    e in r
      ? Object.defineProperty(r, e, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (r[e] = t),
    r
  );
}
function S() {
  return (
    (S = Object.assign
      ? Object.assign.bind()
      : function (r) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var a in t)
              Object.prototype.hasOwnProperty.call(t, a) && (r[a] = t[a]);
          }
          return r;
        }),
    S.apply(this, arguments)
  );
}
function He(r, e) {
  if (typeof r != "object" || r === null) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var a = t.call(r, e);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
function Be(r) {
  var e = He(r, "string");
  return typeof e == "symbol" ? e : String(e);
}
var _e = { exports: {} };
(function (r) {
  typeof window > "u" ||
    (function (e) {
      var t = e.HTMLCanvasElement && e.HTMLCanvasElement.prototype,
        a =
          e.Blob &&
          (function () {
            try {
              return !!new Blob();
            } catch {
              return !1;
            }
          })(),
        i =
          a &&
          e.Uint8Array &&
          (function () {
            try {
              return new Blob([new Uint8Array(100)]).size === 100;
            } catch {
              return !1;
            }
          })(),
        n =
          e.BlobBuilder ||
          e.WebKitBlobBuilder ||
          e.MozBlobBuilder ||
          e.MSBlobBuilder,
        f = /^data:((.*?)(;charset=.*?)?)(;base64)?,/,
        u =
          (a || n) &&
          e.atob &&
          e.ArrayBuffer &&
          e.Uint8Array &&
          function (c) {
            var l, h, s, d, m, o, g, v, T;
            if (((l = c.match(f)), !l)) throw new Error("invalid data URI");
            for (
              h = l[2] ? l[1] : "text/plain" + (l[3] || ";charset=US-ASCII"),
                s = !!l[4],
                d = c.slice(l[0].length),
                s ? (m = atob(d)) : (m = decodeURIComponent(d)),
                o = new ArrayBuffer(m.length),
                g = new Uint8Array(o),
                v = 0;
              v < m.length;
              v += 1
            )
              g[v] = m.charCodeAt(v);
            return a
              ? new Blob([i ? g : o], { type: h })
              : ((T = new n()), T.append(o), T.getBlob(h));
          };
      e.HTMLCanvasElement &&
        !t.toBlob &&
        (t.mozGetAsFile
          ? (t.toBlob = function (c, l, h) {
              var s = this;
              setTimeout(function () {
                h && t.toDataURL && u
                  ? c(u(s.toDataURL(l, h)))
                  : c(s.mozGetAsFile("blob", l));
              });
            })
          : t.toDataURL &&
            u &&
            (t.msToBlob
              ? (t.toBlob = function (c, l, h) {
                  var s = this;
                  setTimeout(function () {
                    ((l && l !== "image/png") || h) && t.toDataURL && u
                      ? c(u(s.toDataURL(l, h)))
                      : c(s.msToBlob(l));
                  });
                })
              : (t.toBlob = function (c, l, h) {
                  var s = this;
                  setTimeout(function () {
                    c(u(s.toDataURL(l, h)));
                  });
                }))),
        r.exports ? (r.exports = u) : (e.dataURLtoBlob = u);
    })(window);
})(_e);
var ye = _e.exports,
  $e = function (e) {
    return typeof Blob > "u"
      ? !1
      : e instanceof Blob ||
          Object.prototype.toString.call(e) === "[object Blob]";
  },
  we = {
    strict: !0,
    checkOrientation: !0,
    retainExif: !1,
    maxWidth: 1 / 0,
    maxHeight: 1 / 0,
    minWidth: 0,
    minHeight: 0,
    width: void 0,
    height: void 0,
    resize: "none",
    quality: 0.8,
    mimeType: "auto",
    convertTypes: ["image/png"],
    convertSize: 5e6,
    beforeDraw: null,
    drew: null,
    success: null,
    error: null,
  },
  Ge = typeof window < "u" && typeof window.document < "u",
  B = Ge ? window : {},
  M = function (e) {
    return e > 0 && e < 1 / 0;
  },
  Ne = Array.prototype.slice;
function J(r) {
  return Array.from ? Array.from(r) : Ne.call(r);
}
var Ve = /^image\/.+$/;
function K(r) {
  return Ve.test(r);
}
function Xe(r) {
  var e = K(r) ? r.substr(6) : "";
  return e === "jpeg" && (e = "jpg"), ".".concat(e);
}
var Te = String.fromCharCode;
function Ye(r, e, t) {
  var a = "",
    i;
  for (t += e, i = e; i < t; i += 1) a += Te(r.getUint8(i));
  return a;
}
var Ke = B.btoa;
function xe(r, e) {
  for (var t = [], a = 8192, i = new Uint8Array(r); i.length > 0; )
    t.push(Te.apply(null, J(i.subarray(0, a)))), (i = i.subarray(a));
  return "data:".concat(e, ";base64,").concat(Ke(t.join("")));
}
function Je(r) {
  var e = new DataView(r),
    t;
  try {
    var a, i, n;
    if (e.getUint8(0) === 255 && e.getUint8(1) === 216)
      for (var f = e.byteLength, u = 2; u + 1 < f; ) {
        if (e.getUint8(u) === 255 && e.getUint8(u + 1) === 225) {
          i = u;
          break;
        }
        u += 1;
      }
    if (i) {
      var c = i + 4,
        l = i + 10;
      if (Ye(e, c, 4) === "Exif") {
        var h = e.getUint16(l);
        if (
          ((a = h === 18761),
          (a || h === 19789) && e.getUint16(l + 2, a) === 42)
        ) {
          var s = e.getUint32(l + 4, a);
          s >= 8 && (n = l + s);
        }
      }
    }
    if (n) {
      var d = e.getUint16(n, a),
        m,
        o;
      for (o = 0; o < d; o += 1)
        if (((m = n + o * 12 + 2), e.getUint16(m, a) === 274)) {
          (m += 8), (t = e.getUint16(m, a)), e.setUint16(m, 1, a);
          break;
        }
    }
  } catch {
    t = 1;
  }
  return t;
}
function qe(r) {
  var e = 0,
    t = 1,
    a = 1;
  switch (r) {
    case 2:
      t = -1;
      break;
    case 3:
      e = -180;
      break;
    case 4:
      a = -1;
      break;
    case 5:
      (e = 90), (a = -1);
      break;
    case 6:
      e = 90;
      break;
    case 7:
      (e = 90), (t = -1);
      break;
    case 8:
      e = -90;
      break;
  }
  return { rotate: e, scaleX: t, scaleY: a };
}
var Qe = /\.\d*(?:0|9){12}\d*$/;
function ke(r) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
  return Qe.test(r) ? Math.round(r * e) / e : r;
}
function L(r) {
  var e = r.aspectRatio,
    t = r.height,
    a = r.width,
    i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "none",
    n = M(a),
    f = M(t);
  if (n && f) {
    var u = t * e;
    ((i === "contain" || i === "none") && u > a) || (i === "cover" && u < a)
      ? (t = a / e)
      : (a = t * e);
  } else n ? (t = a / e) : f && (a = t * e);
  return { width: a, height: t };
}
function Ze(r) {
  for (var e = J(new Uint8Array(r)), t = e.length, a = [], i = 0; i + 3 < t; ) {
    var n = e[i],
      f = e[i + 1];
    if (n === 255 && f === 218) break;
    if (n === 255 && f === 216) i += 2;
    else {
      var u = e[i + 2] * 256 + e[i + 3],
        c = i + u + 2,
        l = e.slice(i, c);
      a.push(l), (i = c);
    }
  }
  return a.reduce(function (h, s) {
    return s[0] === 255 && s[1] === 225 ? h.concat(s) : h;
  }, []);
}
function et(r, e) {
  var t = J(new Uint8Array(r));
  if (t[2] !== 255 || t[3] !== 224) return r;
  var a = t[4] * 256 + t[5],
    i = [255, 216].concat(e, t.slice(4 + a));
  return new Uint8Array(i);
}
var tt = B.ArrayBuffer,
  Y = B.FileReader,
  _ = B.URL || B.webkitURL,
  at = /\.\w+$/,
  rt = B.Compressor,
  it = (function () {
    function r(e, t) {
      Me(this, r),
        (this.file = e),
        (this.exif = []),
        (this.image = new Image()),
        (this.options = j(j({}, we), t)),
        (this.aborted = !1),
        (this.result = null),
        this.init();
    }
    return (
      We(
        r,
        [
          {
            key: "init",
            value: function () {
              var t = this,
                a = this.file,
                i = this.options;
              if (!$e(a)) {
                this.fail(
                  new Error("The first argument must be a File or Blob object.")
                );
                return;
              }
              var n = a.type;
              if (!K(n)) {
                this.fail(
                  new Error(
                    "The first argument must be an image File or Blob object."
                  )
                );
                return;
              }
              if (!_ || !Y) {
                this.fail(
                  new Error(
                    "The current browser does not support image compression."
                  )
                );
                return;
              }
              tt || ((i.checkOrientation = !1), (i.retainExif = !1));
              var f = n === "image/jpeg",
                u = f && i.checkOrientation,
                c = f && i.retainExif;
              if (_ && !u && !c) this.load({ url: _.createObjectURL(a) });
              else {
                var l = new Y();
                (this.reader = l),
                  (l.onload = function (h) {
                    var s = h.target,
                      d = s.result,
                      m = {},
                      o = 1;
                    u && ((o = Je(d)), o > 1 && S(m, qe(o))),
                      c && (t.exif = Ze(d)),
                      u || c
                        ? !_ || o > 1
                          ? (m.url = xe(d, n))
                          : (m.url = _.createObjectURL(a))
                        : (m.url = d),
                      t.load(m);
                  }),
                  (l.onabort = function () {
                    t.fail(
                      new Error("Aborted to read the image with FileReader.")
                    );
                  }),
                  (l.onerror = function () {
                    t.fail(
                      new Error("Failed to read the image with FileReader.")
                    );
                  }),
                  (l.onloadend = function () {
                    t.reader = null;
                  }),
                  u || c ? l.readAsArrayBuffer(a) : l.readAsDataURL(a);
              }
            },
          },
          {
            key: "load",
            value: function (t) {
              var a = this,
                i = this.file,
                n = this.image;
              (n.onload = function () {
                a.draw(
                  j(
                    j({}, t),
                    {},
                    {
                      naturalWidth: n.naturalWidth,
                      naturalHeight: n.naturalHeight,
                    }
                  )
                );
              }),
                (n.onabort = function () {
                  a.fail(new Error("Aborted to load the image."));
                }),
                (n.onerror = function () {
                  a.fail(new Error("Failed to load the image."));
                }),
                B.navigator &&
                  /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(
                    B.navigator.userAgent
                  ) &&
                  (n.crossOrigin = "anonymous"),
                (n.alt = i.name),
                (n.src = t.url);
            },
          },
          {
            key: "draw",
            value: function (t) {
              var a = this,
                i = t.naturalWidth,
                n = t.naturalHeight,
                f = t.rotate,
                u = f === void 0 ? 0 : f,
                c = t.scaleX,
                l = c === void 0 ? 1 : c,
                h = t.scaleY,
                s = h === void 0 ? 1 : h,
                d = this.file,
                m = this.image,
                o = this.options,
                g = document.createElement("canvas"),
                v = g.getContext("2d"),
                T = Math.abs(u) % 180 === 90,
                W =
                  (o.resize === "contain" || o.resize === "cover") &&
                  M(o.width) &&
                  M(o.height),
                A = Math.max(o.maxWidth, 0) || 1 / 0,
                C = Math.max(o.maxHeight, 0) || 1 / 0,
                O = Math.max(o.minWidth, 0) || 0,
                D = Math.max(o.minHeight, 0) || 0,
                R = i / n,
                p = o.width,
                b = o.height;
              if (T) {
                var q = [C, A];
                (A = q[0]), (C = q[1]);
                var Q = [D, O];
                (O = Q[0]), (D = Q[1]);
                var Z = [b, p];
                (p = Z[0]), (b = Z[1]);
              }
              W && (R = p / b);
              var ee = L({ aspectRatio: R, width: A, height: C }, "contain");
              (A = ee.width), (C = ee.height);
              var te = L({ aspectRatio: R, width: O, height: D }, "cover");
              if (((O = te.width), (D = te.height), W)) {
                var ae = L({ aspectRatio: R, width: p, height: b }, o.resize);
                (p = ae.width), (b = ae.height);
              } else {
                var re = L({ aspectRatio: R, width: p, height: b }),
                  ie = re.width;
                p = ie === void 0 ? i : ie;
                var ne = re.height;
                b = ne === void 0 ? n : ne;
              }
              (p = Math.floor(ke(Math.min(Math.max(p, O), A)))),
                (b = Math.floor(ke(Math.min(Math.max(b, D), C))));
              var Re = -p / 2,
                Ue = -b / 2,
                Ee = p,
                Ae = b,
                z = [];
              if (W) {
                var oe = 0,
                  se = 0,
                  H = i,
                  $ = n,
                  le = L(
                    { aspectRatio: R, width: i, height: n },
                    { contain: "cover", cover: "contain" }[o.resize]
                  );
                (H = le.width),
                  ($ = le.height),
                  (oe = (i - H) / 2),
                  (se = (n - $) / 2),
                  z.push(oe, se, H, $);
              }
              if ((z.push(Re, Ue, Ee, Ae), T)) {
                var ce = [b, p];
                (p = ce[0]), (b = ce[1]);
              }
              (g.width = p),
                (g.height = b),
                K(o.mimeType) || (o.mimeType = d.type);
              var ue = "transparent";
              d.size > o.convertSize &&
                o.convertTypes.indexOf(o.mimeType) >= 0 &&
                (o.mimeType = "image/jpeg");
              var fe = o.mimeType === "image/jpeg";
              if (
                (fe && (ue = "#fff"),
                (v.fillStyle = ue),
                v.fillRect(0, 0, p, b),
                o.beforeDraw && o.beforeDraw.call(this, v, g),
                !this.aborted &&
                  (v.save(),
                  v.translate(p / 2, b / 2),
                  v.rotate((u * Math.PI) / 180),
                  v.scale(l, s),
                  v.drawImage.apply(v, [m].concat(z)),
                  v.restore(),
                  o.drew && o.drew.call(this, v, g),
                  !this.aborted))
              ) {
                var he = function (F) {
                  if (!a.aborted) {
                    var me = function (I) {
                      return a.done({
                        naturalWidth: i,
                        naturalHeight: n,
                        result: I,
                      });
                    };
                    if (
                      F &&
                      fe &&
                      o.retainExif &&
                      a.exif &&
                      a.exif.length > 0
                    ) {
                      var ve = function (I) {
                        return me(ye(xe(et(I, a.exif), o.mimeType)));
                      };
                      if (F.arrayBuffer)
                        F.arrayBuffer()
                          .then(ve)
                          .catch(function () {
                            a.fail(
                              new Error(
                                "Failed to read the compressed image with Blob.arrayBuffer()."
                              )
                            );
                          });
                      else {
                        var U = new Y();
                        (a.reader = U),
                          (U.onload = function (G) {
                            var I = G.target;
                            ve(I.result);
                          }),
                          (U.onabort = function () {
                            a.fail(
                              new Error(
                                "Aborted to read the compressed image with FileReader."
                              )
                            );
                          }),
                          (U.onerror = function () {
                            a.fail(
                              new Error(
                                "Failed to read the compressed image with FileReader."
                              )
                            );
                          }),
                          (U.onloadend = function () {
                            a.reader = null;
                          }),
                          U.readAsArrayBuffer(F);
                      }
                    } else me(F);
                  }
                };
                g.toBlob
                  ? g.toBlob(he, o.mimeType, o.quality)
                  : he(ye(g.toDataURL(o.mimeType, o.quality)));
              }
            },
          },
          {
            key: "done",
            value: function (t) {
              var a = t.naturalWidth,
                i = t.naturalHeight,
                n = t.result,
                f = this.file,
                u = this.image,
                c = this.options;
              if (
                (_ && u.src.indexOf("blob:") === 0 && _.revokeObjectURL(u.src),
                n)
              )
                if (
                  c.strict &&
                  !c.retainExif &&
                  n.size > f.size &&
                  c.mimeType === f.type &&
                  !(
                    c.width > a ||
                    c.height > i ||
                    c.minWidth > a ||
                    c.minHeight > i ||
                    c.maxWidth < a ||
                    c.maxHeight < i
                  )
                )
                  n = f;
                else {
                  var l = new Date();
                  (n.lastModified = l.getTime()),
                    (n.lastModifiedDate = l),
                    (n.name = f.name),
                    n.name &&
                      n.type !== f.type &&
                      (n.name = n.name.replace(at, Xe(n.type)));
                }
              else n = f;
              (this.result = n), c.success && c.success.call(this, n);
            },
          },
          {
            key: "fail",
            value: function (t) {
              var a = this.options;
              if (a.error) a.error.call(this, t);
              else throw t;
            },
          },
          {
            key: "abort",
            value: function () {
              this.aborted ||
                ((this.aborted = !0),
                this.reader
                  ? this.reader.abort()
                  : this.image.complete
                  ? this.fail(
                      new Error("The compression process has been aborted.")
                    )
                  : ((this.image.onload = null), this.image.onabort()));
            },
          },
        ],
        [
          {
            key: "noConflict",
            value: function () {
              return (window.Compressor = rt), r;
            },
          },
          {
            key: "setDefaults",
            value: function (t) {
              S(we, t);
            },
          },
        ]
      ),
      r
    );
  })();
const nt = { class: "theme-item" },
  ot = { class: "theme-title" },
  st = { class: "theme-content item-center" },
  lt = { class: "theme-color-container all-center" },
  ct = { key: 0, class: "w-full h-full img-box" },
  ut = ["src"],
  ft = { key: 1 },
  ht = ["onClick"],
  mt = { key: 0, class: "theme-group flex" },
  vt = { class: "theme-color-container all-center custom-skin relative" },
  dt = { class: "w-full h-full img-box" },
  gt = ["src"],
  pt = { class: "edit-mask tf-0 w-full h-full all-center" },
  bt = { class: "icon-mask all-center" },
  yt = { class: "icon-mask all-center" },
  wt = ["onClick"],
  xt = Ce({
    __name: "theme-skin",
    setup(r) {
      const { t: e } = Oe.useI18n(),
        t = De(),
        a = Le(),
        i = je(() => P);
      async function n(l) {
        t.skin !== l && (await t.setThemeBg(l.value, !0));
      }
      function f() {
        var l;
        a.value && ((l = a.value[0]) == null || l.click());
      }
      async function u(l) {
        var d;
        const h = l.target,
          s = (d = h.files) == null ? void 0 : d[0];
        if (s) {
          if (!s.type.startsWith("image/")) {
            alert(e("setting.text22"));
            return;
          }
          if (s.size > 1024 * 1024 * 4) {
            alert(e("setting.text23"));
            return;
          }
          new it(s, {
            quality: 0.8,
            maxWidth: 1920,
            mimeType: "image/webp",
            success: async (m) => {
              const o = new FileReader();
              o.readAsDataURL(m),
                (o.onloadend = async () => {
                  const g = o.result;
                  t.customSkin &&
                    t.customSkin.startsWith("blob:") &&
                    URL.revokeObjectURL(t.customSkin);
                  try {
                    (t.customSkin = g),
                      (P[4].img = g),
                      (P[4].replaceImg = g),
                      await ge(),
                      await t.setThemeBg("custom", !0);
                  } catch (v) {
                    console.error("应用主题背景失败:", v);
                  }
                });
            },
            error(m) {
              console.error("图片压缩失败:", m.message);
            },
          }),
            (h.value = "");
        }
      }
      async function c() {
        (t.customSkin = ""),
          (P[4].img = ""),
          (P[4].replaceImg = ""),
          await ge(),
          await t.setThemeBg("default", !0);
      }
      return (l, h) => (
        x(),
        k("div", nt, [
          y("div", ot, E(w(e)("setting.text18")), 1),
          y("div", st, [
            (x(!0),
            k(
              N,
              null,
              Fe(
                i.value,
                (s) => (
                  x(),
                  k(
                    N,
                    { key: s.value },
                    [
                      s.value !== "custom"
                        ? (x(),
                          k(
                            "div",
                            {
                              key: 0,
                              class: de([
                                "theme-group flex",
                                {
                                  "active-theme":
                                    w(t).skin ===
                                    (s == null ? void 0 : s.value),
                                },
                              ]),
                            },
                            [
                              y("div", lt, [
                                s.value !== "default"
                                  ? (x(),
                                    k("div", ct, [
                                      y(
                                        "img",
                                        {
                                          src: s.replaceImg,
                                          class: "h-full w-full",
                                          ondragstart: "return false",
                                          alt: "",
                                        },
                                        null,
                                        8,
                                        ut
                                      ),
                                    ]))
                                  : (x(),
                                    k(
                                      "span",
                                      ft,
                                      E(w(e)("setting.text19")),
                                      1
                                    )),
                              ]),
                              y(
                                "div",
                                {
                                  class: "use-btn w-full all-center",
                                  onClick: (d) => n(s),
                                },
                                E(
                                  w(t).skin === (s == null ? void 0 : s.value)
                                    ? w(e)("setting.text6")
                                    : w(e)("setting.text7")
                                ),
                                9,
                                ht
                              ),
                            ],
                            2
                          ))
                        : (x(),
                          k(
                            N,
                            { key: 1 },
                            [
                              y(
                                "input",
                                {
                                  ref_for: !0,
                                  ref_key: "fileInput",
                                  ref: a,
                                  type: "file",
                                  accept: "image/*",
                                  style: { display: "none" },
                                  onChange: u,
                                },
                                null,
                                544
                              ),
                              w(Ie)(s.img)
                                ? (x(),
                                  k(
                                    "div",
                                    {
                                      key: 1,
                                      class: de([
                                        "theme-group flex",
                                        {
                                          "active-theme":
                                            w(t).skin ===
                                            (s == null ? void 0 : s.value),
                                        },
                                      ]),
                                    },
                                    [
                                      y("div", vt, [
                                        y("div", dt, [
                                          y(
                                            "img",
                                            {
                                              src: s.replaceImg,
                                              class: "h-full w-full",
                                              ondragstart: "return false",
                                              alt: "",
                                            },
                                            null,
                                            8,
                                            gt
                                          ),
                                        ]),
                                        y("div", pt, [
                                          y("div", bt, [
                                            V(X, { name: "edit", onClick: f }),
                                          ]),
                                          y("div", yt, [
                                            V(X, { name: "del", onClick: c }),
                                          ]),
                                        ]),
                                      ]),
                                      y(
                                        "div",
                                        {
                                          class: "use-btn w-full all-center",
                                          onClick: (d) => n(s),
                                        },
                                        E(
                                          w(t).skin ===
                                            (s == null ? void 0 : s.value)
                                            ? w(e)("setting.text6")
                                            : w(e)("setting.text7")
                                        ),
                                        9,
                                        wt
                                      ),
                                    ],
                                    2
                                  ))
                                : (x(),
                                  k("div", mt, [
                                    y(
                                      "div",
                                      {
                                        class:
                                          "theme-color-container all-center theme-custom",
                                        onClick: f,
                                      },
                                      [
                                        V(X, { name: "upload" }),
                                        Pe(" " + E(w(e)("setting.text20")), 1),
                                      ]
                                    ),
                                    y(
                                      "div",
                                      {
                                        class: "use-btn w-full all-center",
                                        onClick: f,
                                      },
                                      E(w(e)("setting.text21")),
                                      1
                                    ),
                                  ])),
                            ],
                            64
                          )),
                    ],
                    64
                  )
                )
              ),
              128
            )),
          ]),
        ])
      );
    },
  }),
  Tt = Se(xt, [["__scopeId", "data-v-03aaf8b6"]]);
export { Tt as default };
