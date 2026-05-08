import {
  z as j,
  C as F,
  v as H,
  u as O,
  aa as U,
  o as G,
  ab as q,
  i as p,
  m as s,
  H as S,
  ac as v,
  h as e,
  k as t,
  E as J,
  ad as Q,
  p as m,
  y as d,
  j as y,
  n as W,
  t as u,
  w as b,
  G as x,
  l as X,
  a6 as Y,
  F as C,
  B as P,
  ae as B,
  af as A,
  ag as Z,
  I as ee,
  r as ae,
  s as I,
  ah as k,
  ai as le,
  _ as te,
} from "./index-w58kBX-A.js";
import { A as oe } from "./aulaKeyboard-AQHDrDfR.js";
import "./three-core-Cz6MriGW.js";
const se = { class: "full-container" },
  ie = ["title"],
  ne = { key: 1 },
  ce = { class: "light-container" },
  de = { class: "light-item flex" },
  ue = { class: "light-header w-full item-center" },
  re = { class: "item-center light-header-music" },
  he = { class: "light-content w-full flex" },
  ge = { class: "light-sub-title" },
  ve = { class: "control-model", style: { overflow: "hidden" } },
  me = ["title", "onClick"],
  pe = { class: "light-sub-title" },
  _e = { class: "control-model", style: { flex: "1" } },
  fe = ["title", "onClick"],
  ye = { class: "light-item flex" },
  be = { class: "light-header w-full item-center" },
  xe = ["title"],
  Ce = { class: "item-center slider-right w-full" },
  ke = ["title"],
  we = { class: "item-center slider-right w-full" },
  De = { class: "light-item flex" },
  Le = { class: "light-header w-full item-center" },
  Ve = { class: "light-content w-full all-center light-color-content flex" },
  Ue = j({
    __name: "index",
    setup(Se) {
      var D;
      const K = F(),
        { t: n } = H.useI18n(),
        _ = ae(null),
        w = O("AulaKeyboardRef"),
        i = (D = K.deviceInstance) == null ? void 0 : D.Light_Class,
        l = i.activeData,
        c = I(() => i.lightExplicit),
        r = I(() => i.lightDisabled());
      async function R(h) {
        await i.selectPage(h);
      }
      const f = U(async () => {
        await i.debounceSetInfo();
      });
      async function M(h) {
        await i.selectMode(h);
      }
      async function g(h, o) {
        await i.sdkReport(h, o);
      }
      const N = U(async (h) => {
        await i.closeLight(h);
      });
      async function T(h, o) {
        await i.changeKeyCustomColor(o);
      }
      async function $() {
        await i.changeActiveColor(), (_.value.color.rgb = le(l.activeColor));
      }
      function z() {
        _.value = new k.ColorPicker("#color-picker", {
          width: 245,
          color: l.activeColor,
          display: "block",
          layoutDirection: "horizontal",
          layout: [
            { component: k.ui.Box },
            { component: k.ui.Slider, options: { sliderType: "hue" } },
          ],
        });
      }
      return (
        G(async () => {
          z(), await i.onMountedFn(w, _);
        }),
        q(() => {
          i.resetClass(),
            _.value && (_.value.off("color:change"), _.value.off("input:end"));
        }),
        (h, o) => {
          var L, V;
          return (
            d(),
            p("div", se, [
              s(
                oe,
                {
                  ref_key: "AulaKeyboardRef",
                  ref: w,
                  modelValue: e(l).activeKey,
                  "onUpdate:modelValue":
                    o[0] || (o[0] = (a) => (e(l).activeKey = a)),
                  "length-value": e(l).chooseLength,
                  "onUpdate:keyChoose": T,
                },
                {
                  default: S(({ item: a }) => [
                    t(
                      "div",
                      {
                        class: m([
                          "common-item w-full h-full",
                          { "show-light-color": e(l).deviceShowColor },
                        ]),
                        style: J({
                          "--custom-bg": a == null ? void 0 : a.customBg,
                          "--custom-color": e(Q)(
                            a == null ? void 0 : a.customBg
                          ),
                        }),
                        title: a == null ? void 0 : a.name,
                      },
                      [
                        a.icon
                          ? (d(),
                            y(
                              W,
                              { key: 0, name: a.icon, class: "key-icon" },
                              null,
                              8,
                              ["name"]
                            ))
                          : (d(),
                            p("span", ne, u(a == null ? void 0 : a.name), 1)),
                      ],
                      14,
                      ie
                    ),
                  ]),
                  footer: S(() => [
                    s(
                      v,
                      {
                        params: {
                          activeData: e(l),
                          Light_Data: c.value,
                          Light_Disabled: r.value,
                        },
                        "ins-value": "spaceKey",
                        "onUpdate:report": g,
                      },
                      null,
                      8,
                      ["params"]
                    ),
                  ]),
                  _: 1,
                },
                8,
                ["modelValue", "length-value"]
              ),
              b(
                t(
                  "div",
                  ce,
                  [
                    t("div", de, [
                      t("div", ue, [
                        t("div", re, [
                          X(u(e(n)("kLight.page1")) + " ", 1),
                          s(v, {
                            "ins-value": "music-img",
                            params: {},
                            "onUpdate:report": g,
                          }),
                        ]),
                        s(
                          Y,
                          {
                            modelValue: e(l).lightStatus,
                            "onUpdate:modelValue":
                              o[1] || (o[1] = (a) => (e(l).lightStatus = a)),
                            onChange: e(N),
                          },
                          null,
                          8,
                          ["modelValue", "onChange"]
                        ),
                      ]),
                      t("div", he, [
                        t("div", ge, u(e(n)("kLight.title1")), 1),
                        t("div", ve, [
                          (d(!0),
                          p(
                            C,
                            null,
                            P(
                              c.value.lightSupportPage,
                              (a) => (
                                d(),
                                p(
                                  "div",
                                  {
                                    key: a.value,
                                    class: m([
                                      "common-btn-item common-text",
                                      {
                                        "active-light-page":
                                          e(l).activePage === a.value,
                                      },
                                    ]),
                                    title: e(n)(a.label),
                                    onClick: (E) => R(a),
                                  },
                                  u(e(n)(a.label)),
                                  11,
                                  me
                                )
                              )
                            ),
                            128
                          )),
                        ]),
                        [0, 1].includes(e(l).activePage)
                          ? (d(),
                            p(
                              C,
                              { key: 0 },
                              [
                                t("div", pe, u(e(n)("kLight.title2")), 1),
                                t("div", _e, [
                                  (d(!0),
                                  p(
                                    C,
                                    null,
                                    P(
                                      e(l).activeModeList,
                                      (a) => (
                                        d(),
                                        p(
                                          "div",
                                          {
                                            key: a.value,
                                            class: m([
                                              "common-btn-item common-text",
                                              {
                                                "active-light-page":
                                                  e(l).mode === a.value,
                                              },
                                            ]),
                                            title: a.label,
                                            onClick: (E) => M(a),
                                          },
                                          u(a.label),
                                          11,
                                          fe
                                        )
                                      )
                                    ),
                                    128
                                  )),
                                ]),
                              ],
                              64
                            ))
                          : (d(),
                            y(
                              v,
                              {
                                key: 1,
                                "ins-value": "another-light",
                                params: {
                                  activeData: e(l),
                                  Light_Data: c.value,
                                },
                                "onUpdate:report": g,
                              },
                              null,
                              8,
                              ["params"]
                            )),
                      ]),
                    ]),
                    b(
                      t(
                        "div",
                        ye,
                        [
                          t("div", be, u(e(n)("kLight.page2")), 1),
                          t(
                            "div",
                            {
                              class: m([
                                "light-content w-full flex light-center",
                                { "aula-disabled": r.value.lightClosed },
                              ]),
                            },
                            [
                              t(
                                "div",
                                {
                                  class: m([
                                    "item-center slider-item",
                                    {
                                      "aula-disabled": r.value.lightlyDisabled,
                                    },
                                  ]),
                                },
                                [
                                  t(
                                    "div",
                                    {
                                      class:
                                        "light-sub-title w-full common-text",
                                      style: { "max-width": "6.875rem" },
                                      title: e(n)("kLight.brightness"),
                                    },
                                    u(e(n)("kLight.brightness")),
                                    9,
                                    xe
                                  ),
                                  t("div", Ce, [
                                    s(
                                      B,
                                      {
                                        modelValue: e(l).lightly,
                                        "onUpdate:modelValue":
                                          o[2] ||
                                          (o[2] = (a) => (e(l).lightly = a)),
                                        max: c.value.maxLightly,
                                        min: 1,
                                        onChange: e(f),
                                      },
                                      null,
                                      8,
                                      ["modelValue", "max", "onChange"]
                                    ),
                                    s(
                                      A,
                                      {
                                        modelValue: e(l).lightly,
                                        "onUpdate:modelValue":
                                          o[3] ||
                                          (o[3] = (a) => (e(l).lightly = a)),
                                        style: { width: "78px" },
                                        max: c.value.maxLightly,
                                        min: 1,
                                        onChange: e(f),
                                      },
                                      null,
                                      8,
                                      ["modelValue", "max", "onChange"]
                                    ),
                                  ]),
                                ],
                                2
                              ),
                              t(
                                "div",
                                {
                                  class: m([
                                    "item-center slider-item",
                                    { "aula-disabled": r.value.speedDisabled },
                                  ]),
                                },
                                [
                                  t(
                                    "div",
                                    {
                                      class:
                                        "light-sub-title w-full common-text",
                                      title: e(n)("kLight.speed"),
                                      style: { "max-width": "6.875rem" },
                                    },
                                    u(e(n)("kLight.speed")),
                                    9,
                                    ke
                                  ),
                                  t("div", we, [
                                    s(
                                      B,
                                      {
                                        modelValue: e(l).speed,
                                        "onUpdate:modelValue":
                                          o[4] ||
                                          (o[4] = (a) => (e(l).speed = a)),
                                        max: c.value.maxSpeed,
                                        min: 1,
                                        onChange: e(f),
                                      },
                                      null,
                                      8,
                                      ["modelValue", "max", "onChange"]
                                    ),
                                    s(
                                      A,
                                      {
                                        modelValue: e(l).speed,
                                        "onUpdate:modelValue":
                                          o[5] ||
                                          (o[5] = (a) => (e(l).speed = a)),
                                        style: { width: "78px" },
                                        max: c.value.maxSpeed,
                                        min: 1,
                                        onChange: e(f),
                                      },
                                      null,
                                      8,
                                      ["modelValue", "max", "onChange"]
                                    ),
                                  ]),
                                ],
                                2
                              ),
                              s(
                                v,
                                {
                                  params: {
                                    activeData: e(l),
                                    Light_Data: c.value,
                                  },
                                  "ins-value": "sleepDelay",
                                  "onUpdate:report": g,
                                },
                                null,
                                8,
                                ["params"]
                              ),
                              s(
                                v,
                                {
                                  params: {
                                    activeData: e(l),
                                    Light_Data: c.value,
                                    Light_Disabled: r.value,
                                  },
                                  "ins-value": "direction",
                                  "onUpdate:report": g,
                                },
                                null,
                                8,
                                ["params"]
                              ),
                              s(
                                v,
                                {
                                  params: {
                                    activeData: e(l),
                                    Light_Data: c.value,
                                    Light_Disabled: r.value,
                                  },
                                  "ins-value": "colorful",
                                  "onUpdate:report": g,
                                },
                                null,
                                8,
                                ["params"]
                              ),
                            ],
                            2
                          ),
                        ],
                        512
                      ),
                      [[x, [0, 1].includes(e(l).activePage)]]
                    ),
                    b(
                      t(
                        "div",
                        De,
                        [
                          t("div", Le, u(e(n)("kLight.page3")), 1),
                          t("div", Ve, [
                            t(
                              "div",
                              {
                                id: "color-picker",
                                class: m({
                                  "aula-disabled": r.value.colorDisabled,
                                }),
                              },
                              null,
                              2
                            ),
                            s(
                              v,
                              {
                                params: {
                                  activeData: e(l),
                                  Light_Disabled: r.value,
                                },
                                "ins-value": "colorItem",
                                "onUpdate:report": g,
                              },
                              null,
                              8,
                              ["params"]
                            ),
                            s(
                              Z,
                              {
                                modelValue: e(l).activeColor,
                                "onUpdate:modelValue":
                                  o[6] ||
                                  (o[6] = (a) => (e(l).activeColor = a)),
                                class: m({
                                  "aula-disabled": r.value.colorDisabled,
                                }),
                                onChange: $,
                              },
                              null,
                              8,
                              ["modelValue", "class"]
                            ),
                          ]),
                        ],
                        512
                      ),
                      [[x, [0, 1].includes(e(l).activePage)]]
                    ),
                  ],
                  512
                ),
                [[x, !((L = e(l)) != null && L.otherPage)]]
              ),
              (V = e(l)) != null && V.otherPage
                ? (d(),
                  y(
                    v,
                    {
                      key: 0,
                      "ins-value": "another-page",
                      params: { activeData: e(l), Light_Data: c.value },
                      "onUpdate:report": g,
                    },
                    null,
                    8,
                    ["params"]
                  ))
                : ee("", !0),
            ])
          );
        }
      );
    },
  }),
  Ie = te(Ue, [["__scopeId", "data-v-93bd74a9"]]);
export { Ie as default };
