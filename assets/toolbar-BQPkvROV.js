import {
  z as y,
  v as w,
  C as x,
  c as B,
  u as L,
  h as u,
  q as I,
  i as s,
  m as i,
  n as g,
  k as m,
  F as h,
  B as d,
  I as S,
  s as E,
  x as _,
  y as e,
  j as R,
  H as f,
  Z as $,
  p as N,
  t as V,
  $ as j,
  a0 as z,
  _ as A,
} from "./index-w58kBX-A.js";
const D = { key: 0, class: "w-full item-center common-toolbar" },
  F = { class: "common-toolbar-right item-center" },
  H = { class: "status-item h-full all-center" },
  q = { class: "language-list flex" },
  P = ["onClick"],
  Z = ["onClick"],
  G = y({
    __name: "toolbar",
    setup(J) {
      const { locale: p } = w.useI18n(),
        l = x(),
        a = B(),
        r = L("LanguageRef"),
        k = E(() =>
          a.mode === "light"
            ? ["darkTheme", "language", "setting"]
            : ["lightTheme", "language", "setting"]
        );
      async function v() {
        await l.resetAllData(), await _.push({ path: "/home" });
      }
      function T(t) {
        switch (t) {
          case "setting":
            _.push({ path: "/setting" });
            break;
          case "lightTheme":
          case "darkTheme":
            (a.mode = t === "darkTheme" ? "dark" : "light"),
              a.setThemeBg("default", !1),
              z(a.mode),
              a.setThemeColor(a.mode);
            break;
        }
      }
      async function b(t) {
        var c;
        (l.language = t),
          (p.value = t),
          _.go(0),
          r.value && ((c = r.value[0]) == null || c.hide());
      }
      return (t, c) => {
        const C = j;
        return u(I)()
          ? S("", !0)
          : (e(),
            s("div", D, [
              i(g, { name: "logo", onClick: v }),
              m("div", F, [
                (e(!0),
                s(
                  h,
                  null,
                  d(
                    k.value,
                    (o) => (
                      e(),
                      s(
                        h,
                        { key: o },
                        [
                          o === "language"
                            ? (e(),
                              R(
                                C,
                                {
                                  key: 0,
                                  ref_for: !0,
                                  ref_key: "LanguageRef",
                                  ref: r,
                                  placement: "bottom",
                                  "popper-class": "dp-dr-popover",
                                  "show-arrow": !1,
                                  "hide-after": 0,
                                  enterable: !1,
                                  trigger: "click",
                                  offset: 30,
                                },
                                {
                                  reference: f(() => [
                                    m("div", H, [
                                      i(g, { name: o }, null, 8, ["name"]),
                                    ]),
                                  ]),
                                  default: f(() => [
                                    m("div", q, [
                                      (e(!0),
                                      s(
                                        h,
                                        null,
                                        d(
                                          u($),
                                          (n) => (
                                            e(),
                                            s(
                                              "div",
                                              {
                                                key: n.value,
                                                class: N([
                                                  "language-list-item",
                                                  {
                                                    "active-language":
                                                      u(l).language === n.value,
                                                  },
                                                ]),
                                                onClick: (K) => b(n.value),
                                              },
                                              V(n.label),
                                              11,
                                              P
                                            )
                                          )
                                        ),
                                        128
                                      )),
                                    ]),
                                  ]),
                                  _: 2,
                                },
                                1536
                              ))
                            : (e(),
                              s(
                                "div",
                                {
                                  key: 1,
                                  class: "status-item h-full all-center",
                                  onClick: (n) => T(o),
                                },
                                [i(g, { name: o }, null, 8, ["name"])],
                                8,
                                Z
                              )),
                        ],
                        64
                      )
                    )
                  ),
                  128
                )),
              ]),
            ]));
      };
    },
  }),
  O = A(G, [["__scopeId", "data-v-eb037aeb"]]);
export { O as T };
