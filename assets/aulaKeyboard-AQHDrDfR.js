import {
  z as W,
  aw as F,
  r as h,
  C as T,
  ao as $,
  u as A,
  O as D,
  a5 as O,
  o as P,
  d as U,
  i as b,
  k as f,
  E as k,
  h as u,
  F as Q,
  B as X,
  ax as E,
  Q as N,
  p as Y,
  a4 as j,
  y as L,
  _ as q,
} from "./index-w58kBX-A.js";
const G = { class: "item-center keyboard-container w-full" },
  J = { class: "relative" },
  Z = ["src"],
  ee = W({
    __name: "aulaKeyboard",
    props: N(
      { lengthValue: { type: Number, default: 0 } },
      { modelValue: { default: () => [] }, modelModifiers: {} }
    ),
    emits: N(["update:keyChoose"], ["update:modelValue"]),
    setup(_, { expose: z, emit: B }) {
      const M = _,
        S = B,
        d = h(""),
        H = F(),
        c = h([]),
        I = h(M.lengthValue),
        R = T(),
        { deviceLayout: V, deviceInfo: i } = $(R),
        g = A("deviceItem"),
        v = h(""),
        r = D(_, "modelValue");
      O(
        () => M.lengthValue,
        (e) => {
          var t;
          (I.value = e),
            e && ((t = r.value) == null ? void 0 : t.length) >= e
              ? r.value.filter((a, s) => s <= e - 1)
              : (r.value.length = 0);
        },
        { immediate: !0 }
      );
      function x(e) {
        const t = r.value,
          a = I.value,
          s = e.keyValue,
          o = t.indexOf(s),
          n = o !== -1,
          m = t.length >= a;
        n ? t.splice(o, 1) : m ? (t[t.length - 1] = s) : t.push(s),
          t.length > a && (t.length = a),
          S("update:keyChoose", t, j(e));
      }
      function C(e) {
        var s;
        const t = e.clientX,
          a = e.clientY;
        if ((s = c.value) != null && s.length) {
          const o = c.value.find(
            (n) =>
              t >= (n == null ? void 0 : n.clientLeft) &&
              t <= (n == null ? void 0 : n.clientWidth) &&
              a >= (n == null ? void 0 : n.clientTop) &&
              a <= (n == null ? void 0 : n.clientHeight)
          );
          o
            ? v.value !== o.keyValue && ((v.value = o.keyValue), x(o))
            : (v.value = "");
        }
      }
      function K(e) {
        e.button === 0 &&
          ((d.value = "mouseDown"),
          window.addEventListener("mousemove", p),
          window.addEventListener("mouseup", y));
      }
      function p(e) {
        (d.value = "mouseMove"), C(e);
      }
      function y(e) {
        e.button === 0 &&
          (d.value === "mouseDown" && C(e),
          (d.value = ""),
          (v.value = ""),
          window.removeEventListener("mousemove", p),
          window.removeEventListener("mouseup", y));
      }
      function w() {
        var t;
        c.value.length = 0;
        const e = V.value;
        (t = g.value) != null &&
          t.length &&
          g.value.forEach((a, s) => {
            const o = a.getBoundingClientRect();
            c.value.push({
              ...e[s],
              clientLeft: o.left,
              clientTop: o.top,
              clientWidth: o == null ? void 0 : o.right,
              clientHeight: o.bottom,
            });
          });
      }
      return (
        P(() => {
          ["/keyboard/lightSet", "/keyboard/triggerSet"].includes(H.fullPath) &&
            (window.addEventListener("mousedown", K),
            window.addEventListener("resize", w));
        }),
        U(() => {
          window.removeEventListener("mousedown", K),
            window.removeEventListener("mousemove", p),
            window.removeEventListener("mouseup", y),
            window.addEventListener("resize", w);
        }),
        z({ getPosKey: w }),
        (e, t) => {
          var a, s, o, n, m;
          return (
            L(),
            b("div", G, [
              f("div", J, [
                f(
                  "div",
                  {
                    class: "relative device-container",
                    style: k({
                      width:
                        Number((a = u(i)) == null ? void 0 : a.bgWidth) / 16 +
                        "rem",
                      height:
                        Number((s = u(i)) == null ? void 0 : s.bgHeight) / 16 +
                        "rem",
                    }),
                  },
                  [
                    f(
                      "img",
                      {
                        src: (o = u(i)) == null ? void 0 : o.bgImg,
                        class: "absolute device-background",
                        ondragstart: "return false",
                        alt: "",
                        fetchpriority: "high",
                        style: k({
                          width:
                            Number((n = u(i)) == null ? void 0 : n.bgWidth) /
                              16 +
                            "rem",
                          height:
                            Number((m = u(i)) == null ? void 0 : m.bgHeight) /
                              16 +
                            "rem",
                        }),
                      },
                      null,
                      12,
                      Z
                    ),
                    (L(!0),
                    b(
                      Q,
                      null,
                      X(
                        u(V),
                        (l) => (
                          L(),
                          b("div", { key: l.row + "-" + l.col }, [
                            f(
                              "div",
                              {
                                ref_for: !0,
                                ref_key: "deviceItem",
                                ref: g,
                                style: k({
                                  height: l.height / 16 + "rem",
                                  width: l.width / 16 + "rem",
                                  left: l.x / 16 + "rem",
                                  top: l.y / 16 + "rem",
                                }),
                                class: Y([
                                  [
                                    {
                                      "active-key": r.value.includes(
                                        l.keyValue
                                      ),
                                    },
                                  ],
                                  "absolute key-item",
                                ]),
                              },
                              [
                                E(
                                  e.$slots,
                                  "default",
                                  { item: l, selectKey: x },
                                  void 0,
                                  !0
                                ),
                              ],
                              6
                            ),
                          ])
                        )
                      ),
                      128
                    )),
                  ],
                  4
                ),
                E(e.$slots, "side", {}, void 0, !0),
              ]),
              E(e.$slots, "footer", { deviceInfo: u(i) }, void 0, !0),
            ])
          );
        }
      );
    },
  }),
  oe = q(ee, [["__scopeId", "data-v-663df437"]]);
export { oe as A };
