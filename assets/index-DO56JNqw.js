import { s as t } from "./service-CRIbvhpw.js";
function i(e) {
  return t({ url: "/user/BIN/binList", method: "get", params: e });
}
function s(e) {
  return t({
    url: `/user/BIN/getFile/${e}`,
    method: "get",
    responseType: "blob",
  });
}
export { i as a, s as g };
