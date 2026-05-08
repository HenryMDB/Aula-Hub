import {
  z as d,
  C as _,
  o as f,
  d as u,
  w as p,
  h as a,
  i as m,
  k as c,
  m as v,
  ac as w,
  y as h,
  _ as D,
} from "./index-w58kBX-A.js";
import { v as x } from "./el-loading-DyxSlm0Y.js";
import "./three-core-Cz6MriGW.js";
const C = { class: "w-full h-full content-center full-container" },
  k = { class: "item-center perf-container w-full" },
  y = { class: "w-full perf-content flex" },
  P = d({
    __name: "index",
    setup(g) {
      var s;
      const e = (s = _().deviceInstance) == null ? void 0 : s.Perf_Class,
        r = e.staticData,
        t = e.activeData;
      async function i(n, o) {
        await e.setPerfConfig(n, o);
      }
      return (
        f(async () => {
          await e.onMountedFn(t);
        }),
        u(async () => {
          await e.resetClass(t);
        }),
        (n, o) => {
          const l = x;
          return p(
            (h(),
            m("div", C, [
              c("div", k, [
                c("div", y, [
                  v(
                    w,
                    {
                      params: { activeData: a(t), staticData: a(r) },
                      "ins-value": "perfEl",
                      "onUpdate:report": i,
                    },
                    null,
                    8,
                    ["params"]
                  ),
                ]),
              ]),
            ])),
            [[l, a(t).loadPrefSet, void 0, { fullscreen: !0, lock: !0 }]]
          );
        }
      );
    },
  }),
  N = D(P, [["__scopeId", "data-v-7c05253e"]]);
export { N as default };
