import {
  z as h,
  v as _,
  c as v,
  y as n,
  i as m,
  k as t,
  t as a,
  h as o,
  F as p,
  B as C,
  p as f,
  E as r,
  s as b,
  b2 as g,
  b3 as k,
  _ as i,
} from "./index-w58kBX-A.js";
import "./three-core-Cz6MriGW.js";
const x = { class: "theme-item" },
  y = { class: "theme-title" },
  w = { class: "theme-content item-center" },
  B = { class: "theme-color-container" },
  I = ["onClick"],
  S = h({
    __name: "theme-color",
    setup(z) {
      const { t: l } = _.useI18n(),
        s = v(),
        u = b(() => (s.mode === "light" ? g : k));
      function d(c) {
        s.themeColor !== c.value && s.setThemeColor(s.mode, c.value);
      }
      return (c, E) => (
        n(),
        m("div", x, [
          t("div", y, a(o(l)("setting.text5")), 1),
          t("div", w, [
            (n(!0),
            m(
              p,
              null,
              C(
                u.value,
                (e) => (
                  n(),
                  m(
                    "div",
                    {
                      key: e.value,
                      class: f([
                        "theme-group flex",
                        {
                          "active-theme":
                            o(s).themeColor === (e == null ? void 0 : e.value),
                        },
                      ]),
                    },
                    [
                      t("div", B, [
                        t(
                          "div",
                          {
                            class: "theme-color-item-top w-full",
                            style: r({ background: e.bottomColor }),
                          },
                          [
                            t(
                              "div",
                              {
                                class: "theme-color-top w-full",
                                style: r({
                                  background: e == null ? void 0 : e.topColor,
                                }),
                              },
                              a(o(l)(e == null ? void 0 : e.topName)),
                              5
                            ),
                          ],
                          4
                        ),
                        t(
                          "div",
                          {
                            class: "theme-color-item-bottom w-full",
                            style: r({ background: e.topColor }),
                          },
                          [
                            t(
                              "div",
                              {
                                class:
                                  "theme-color-bottom w-full content-center",
                                style: r({
                                  background:
                                    e == null ? void 0 : e.bottomColor,
                                }),
                              },
                              a(o(l)(e == null ? void 0 : e.bottomName)),
                              5
                            ),
                          ],
                          4
                        ),
                      ]),
                      t(
                        "div",
                        {
                          class: "use-btn w-full all-center",
                          onClick: (N) => d(e),
                        },
                        a(
                          o(s).themeColor === (e == null ? void 0 : e.value)
                            ? o(l)("setting.text6")
                            : o(l)("setting.text7")
                        ),
                        9,
                        I
                      ),
                    ],
                    2
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
  F = i(S, [["__scopeId", "data-v-d8de030c"]]);
export { F as default };
