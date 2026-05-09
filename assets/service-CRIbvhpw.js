import { a as o } from "./index-C0Zqfgkc.js";

// ĐỔI DÒNG NÀY: Thay bằng link Cloudflare Worker của ông
// Ví dụ: const a = "https://cors-proxy.ten-cua-ong.workers.dev/",
const a = "https://cors-proxy-api.henrymdb.workers.dev/",
  t = o.create({ baseURL: a, timeout: 2e4 });

t.interceptors.request.use(
  (e) => e,
  (e) => (console.error(e), Promise.reject(e)),
);
t.interceptors.response.use(
  (e) => {
    const { code: s, data: r, msg: c } = e.data;
    return s === 1 || e.status === 200
      ? Promise.resolve(r || e.data)
      : Promise.reject(r);
  },
  (e) => (console.error("err" + e), Promise.reject(e)),
);
export { t as s };
