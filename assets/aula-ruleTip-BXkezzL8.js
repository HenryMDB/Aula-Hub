import {
  z as u,
  i,
  t as l,
  I as c,
  s as o,
  y as m,
  _ as p,
} from "./index-w58kBX-A.js";
const d = ["title"],
  f = u({
    __name: "aula-ruleTip",
    props: { modelValue: {}, rules: {} },
    setup(s) {
      const r = s,
        a = (e) =>
          e == null
            ? !0
            : typeof e == "string"
            ? e.trim() === ""
            : Array.isArray(e)
            ? e.length === 0
            : !1,
        t = o(() => {
          for (const e of r.rules)
            if (
              (e.required && a(r.modelValue)) ||
              (e.validator && !e.validator(r.modelValue))
            )
              return e.message;
          return "";
        }),
        n = o(() => !!t.value);
      return (e, _) =>
        n.value
          ? (m(),
            i(
              "div",
              { key: 0, class: "rule-tips tf-0 common-text", title: t.value },
              "* " + l(t.value),
              9,
              d
            ))
          : c("", !0);
    },
  }),
  g = p(f, [["__scopeId", "data-v-d9038c74"]]);
export { g as A };
