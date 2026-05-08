import { a as o } from "./index-C0Zqfgkc.js";
const a = "https://hubapi.aulacn.com/",
  t = o.create({ baseURL: a, timeout: 2e4 });
t.interceptors.request.use(
  (e) => e,
  (e) => (console.error(e), Promise.reject(e))
);
t.interceptors.response.use(
  (e) => {
    const { code: s, data: r, msg: c } = e.data;
    return s === 1 || e.status === 200
      ? Promise.resolve(r || e.data)
      : Promise.reject(r);
  },
  (e) => (console.error("err" + e), Promise.reject(e))
);
export { t as s };
