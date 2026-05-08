import {
  z as y,
  v as w,
  C as $,
  j as D,
  H as S,
  k as t,
  l as g,
  t as i,
  h as e,
  y as d,
  n as z,
  I as b,
  m as V,
  a7 as E,
  p as f,
  J as I,
  i as u,
  F as U,
  aH as L,
  a3 as R,
  s as T,
  _ as F,
  u as A,
  o as j,
  Y as H,
} from "./index-w58kBX-A.js";
import "./three-core-Cz6MriGW.js";
const M = { class: "bin-dia w-full" },
  P = { class: "bin-dia-header item-center" },
  q = { class: "bin-dia-content" },
  J = { class: "bin-version item-center" },
  K = { class: "bin-version-info" },
  Y = { key: 0, class: "update-content flex" },
  G = { class: "item-center bin-version-footer" },
  O = ["title"],
  Q = y({
    __name: "binUpdateDia",
    setup(N) {
      var x;
      const { t: n } = w.useI18n(),
        r = (x = $().deviceInstance) == null ? void 0 : x.Version_Class,
        s = r.activeData,
        c = T(() => {
          var o;
          let p = 0;
          return (
            (o = s.activeBinBlob) != null &&
              o.length &&
              s.activeVersion &&
              s.activeBinBlob.forEach((l) => {
                p += Number(((l.blobFile.size ?? 0) / 1024).toFixed(0));
              }),
            p
          );
        });
      function v() {
        r.closeDia();
      }
      function m() {
        r.finishedUpdate();
      }
      async function h() {
        await r.startUpdate(s, s.activeBinBlob);
      }
      function _() {
        r.changeBinVersion();
      }
      return (p, o) => (
        d(),
        D(
          R,
          {
            modelValue: e(s).diaVisible,
            "onUpdate:modelValue":
              o[2] || (o[2] = (l) => (e(s).diaVisible = l)),
            width: "721px",
            "max-width": "721px",
            "padding-value": "0",
            "close-on-click-overlay": e(s).step === 1,
            onClose: v,
          },
          {
            default: S(() => [
              t("div", M, [
                t("div", P, [
                  g(i(e(n)("version.text10")) + " ", 1),
                  e(s).step === 1
                    ? (d(), D(z, { key: 0, name: "close", onClick: v }))
                    : b("", !0),
                ]),
                t("div", q, [
                  t("div", J, [
                    g(i(e(n)("version.text11")) + " ", 1),
                    V(
                      E,
                      {
                        modelValue: e(s).activeVersion,
                        "onUpdate:modelValue":
                          o[0] || (o[0] = (l) => (e(s).activeVersion = l)),
                        class: f({ "aula-disabled": e(s).step !== 1 }),
                        style: { width: "300px" },
                        options: e(s).versionList,
                        "label-alias": "version",
                        "value-alias": "version",
                        onChange: _,
                      },
                      null,
                      8,
                      ["modelValue", "class", "options"]
                    ),
                  ]),
                  t("div", K, [
                    t(
                      "div",
                      null,
                      i(e(n)("version.text11")) + "：" + i(e(s).activeVersion),
                      1
                    ),
                    t(
                      "div",
                      null,
                      i(e(n)("version.text12")) +
                        "：" +
                        i(c.value || "???") +
                        " KB",
                      1
                    ),
                  ]),
                  e(I)(e(s).activeVersion)
                    ? (d(),
                      u("div", Y, [
                        t("div", null, i(e(n)("version.text13")), 1),
                        t("div", null, i(e(n)("version.text14")), 1),
                      ]))
                    : b("", !0),
                ]),
                t("div", G, [
                  e(s).step === 1
                    ? (d(),
                      u(
                        U,
                        { key: 0 },
                        [
                          t(
                            "div",
                            {
                              class: "all-center footer-cancel-btn",
                              onClick: v,
                            },
                            i(e(n)("reSet.cancelText")),
                            1
                          ),
                          t(
                            "div",
                            {
                              class: f([
                                "all-center footer-primary-btn",
                                { "aula-disabled": e(s).requestFinish },
                              ]),
                              onClick: h,
                            },
                            i(e(n)("reSet.confirmText")),
                            3
                          ),
                        ],
                        64
                      ))
                    : (d(),
                      u(
                        U,
                        { key: 1 },
                        [
                          V(
                            L,
                            {
                              modelValue: e(s).progress,
                              "onUpdate:modelValue":
                                o[1] || (o[1] = (l) => (e(s).progress = l)),
                            },
                            null,
                            8,
                            ["modelValue"]
                          ),
                          e(s).progress === 100 && e(s).otherCondition
                            ? (d(),
                              u(
                                "div",
                                {
                                  key: 0,
                                  class: "update-finished common-text",
                                  title: e(n)("version.text18"),
                                  onClick: m,
                                },
                                i(e(n)("version.text18")),
                                9,
                                O
                              ))
                            : b("", !0),
                        ],
                        64
                      )),
                ]),
              ]),
            ]),
            _: 1,
          },
          8,
          ["modelValue", "close-on-click-overlay"]
        )
      );
    },
  }),
  W = F(Q, [["__scopeId", "data-v-46dad1f7"]]),
  X = { class: "w-full h-full content-center full-container" },
  Z = { class: "item-center version-container w-full" },
  ee = { class: "w-full version-content flex" },
  te = { class: "version-item item-center" },
  se = { class: "version-left" },
  ie = { class: "version-title" },
  ne = { class: "version-subtitle" },
  oe = { class: "version-item item-center" },
  ae = { class: "version-left" },
  le = { class: "version-title" },
  ce = { class: "version-subtitle" },
  re = { class: "version-item item-center" },
  de = { class: "version-left" },
  ve = { class: "version-title" },
  ue = { class: "version-subtitle" },
  _e = y({
    __name: "index",
    setup(N) {
      var _;
      const n = A("BinUpdateDiaRef"),
        { t: a } = w.useI18n(),
        r = $(),
        s = (_ = r.deviceInstance) == null ? void 0 : _.Version_Class,
        c = s.activeData;
      async function v() {
        await s.resetDevice();
      }
      function m() {
        H(c.pdfUrl);
      }
      function h() {
        s.goUpdate(n.value);
      }
      return (
        j(() => {
          s.onMountedFn();
        }),
        (x, p) => {
          var o, l, k, C, B;
          return (
            d(),
            u("div", X, [
              t("div", Z, [
                t("div", ee, [
                  t("div", te, [
                    t("div", se, [
                      t("div", ie, i(e(a)("version.text1")), 1),
                      t("div", ne, i(e(a)("version.text2")), 1),
                    ]),
                    t(
                      "div",
                      {
                        class: f([
                          "default-btn item-center",
                          { "aula-disabled": e(c).pdfUrl === "" },
                        ]),
                        onClick: m,
                      },
                      i(e(a)("version.text3")),
                      3
                    ),
                  ]),
                  t("div", oe, [
                    t("div", ae, [
                      t(
                        "div",
                        le,
                        i(e(a)("version.text4")) +
                          " " +
                          i(
                            ((o = e(r).deviceInfo) == null
                              ? void 0
                              : o.binVersion) ?? "???"
                          ),
                        1
                      ),
                      t(
                        "div",
                        ce,
                        i(e(a)("version.text5")) +
                          " " +
                          i(
                            (l = e(c).versionList) != null && l.length
                              ? e(c).versionList[0].version
                              : ((k = e(c)) == null
                                  ? void 0
                                  : k.latestVersion) || "???"
                          ),
                        1
                      ),
                    ]),
                    t(
                      "div",
                      {
                        class: f([
                          "default-btn item-center",
                          {
                            "aula-disabled":
                              !((C = e(c).versionList) != null && C.length) &&
                              !e(I)(
                                (B = e(c)) == null ? void 0 : B.latestVersion
                              ),
                          },
                        ]),
                        onClick: h,
                      },
                      i(e(a)("version.text6")),
                      3
                    ),
                  ]),
                  t("div", re, [
                    t("div", de, [
                      t("div", ve, i(e(a)("version.text7")), 1),
                      t("div", ue, i(e(a)("version.text8")), 1),
                    ]),
                    t(
                      "div",
                      { class: "default-btn item-center", onClick: v },
                      i(e(a)("version.text9")),
                      1
                    ),
                  ]),
                ]),
              ]),
              V(W, { ref_key: "BinUpdateDiaRef", ref: n }, null, 512),
            ])
          );
        }
      );
    },
  }),
  me = F(_e, [["__scopeId", "data-v-42bedb33"]]);
export { me as default };
