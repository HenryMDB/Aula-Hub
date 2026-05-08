var D = Object.defineProperty;
var f = (r, t, e) =>
  t in r
    ? D(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e })
    : (r[t] = e);
var o = (r, t, e) => f(r, typeof t != "symbol" ? t + "" : t, e);
import {
  X as p,
  a4 as h,
  D as g,
  a8 as l,
  aM as u,
  aR as b,
  x as B,
  aS as I,
} from "./index-w58kBX-A.js";
import { g as N, a as E } from "./index-DO56JNqw.js";
import { g as H } from "./index-C9Giu2B_.js";
import { g as R } from "./index-DNm0dWTU.js";
import "./three-core-Cz6MriGW.js";
import "./service-CRIbvhpw.js";
import "./index-C0Zqfgkc.js";
class L {
  constructor(t, e) {
    o(this, "store");
    o(this, "ServiceDevice");
    o(this, "defaultPageData");
    o(
      this,
      "activeData",
      p({
        pdfUrl: "",
        versionList: [],
        progress: 0,
        otherCondition: !1,
        step: 1,
        diaVisible: !1,
        activeVersion: "",
        activeBinBlob: [],
        requestFinish: !1,
        latestVersion: "???",
        downloadUrl: "",
      })
    );
    (this.store = t),
      (this.ServiceDevice = e),
      (this.defaultPageData = h(this.activeData));
  }
  async onMountedFn() {
    var t;
    switch (
      (this.getPDF(), (t = this.store.deviceInfo) == null ? void 0 : t.pName)
    ) {
      case "HERO 68 HE PRO":
      case "WIN 68 HE PRO":
      case "WIN 68 HE MAX":
      case "WIN 60 HE PRO":
      case "WIN 60 HE MAX":
        this.getDownloadUrl();
        break;
      default:
        this.getAllBin();
        break;
    }
  }
  async resetDevice() {
    await g
      .confirm(
        `${l.global.t("reSet.message13")}`,
        `${l.global.t("reSet.title9")}`,
        {
          confirmButtonText: l.global.t("reSet.confirmText"),
          cancelButtonText: l.global.t("reSet.cancelText"),
        }
      )
      .then(async () => {
        var t;
        await ((t = this.ServiceDevice) == null
          ? void 0
          : t.factoryDataReset());
      })
      .catch(() => {});
  }
  async goUpdate() {
    var t, e;
    switch ((t = this.store.deviceInfo) == null ? void 0 : t.pName) {
      case "HERO 68 HE PRO":
      case "WIN 68 HE PRO":
      case "WIN 68 HE MAX":
      case "WIN 60 HE PRO":
      case "WIN 60 HE MAX":
        u(this.activeData.downloadUrl);
        break;
      default:
        (this.activeData.step = 1),
          (this.activeData.progress = 0),
          (this.activeData.diaVisible = !0),
          (e = this.activeData.versionList) != null &&
            e.length &&
            ((this.activeData.activeVersion =
              this.activeData.versionList[0].version),
            await this.getBinFile(this.activeData.versionList[0]));
        break;
    }
  }
  getDownloadUrl() {
    var t;
    R((t = this.store.deviceInfo) == null ? void 0 : t.pName)
      .then((e) => {
        (this.activeData.latestVersion = e.version),
          (this.activeData.downloadUrl = b + e.fileName);
      })
      .catch((e) => {});
  }
  async getBinFile(t) {
    var e;
    if (
      ((this.activeData.activeBinBlob = []),
      (this.activeData.requestFinish = !0),
      (e = t == null ? void 0 : t.ids) != null && e.length)
    )
      try {
        for (let a of t == null ? void 0 : t.ids) {
          const s = await N(a.id);
          this.activeData.activeBinBlob.push({ label: a.label, blobFile: s });
        }
      } catch {}
    this.activeData.requestFinish = !1;
  }
  async sureUpdate() {
    if (this.activeData.activeBinBlob) {
      this.activeData.step = 2;
      try {
        await this.startUpdate();
      } catch (t) {
        (this.activeData.step = 1), console.error(t);
      }
    }
  }
  closeDia() {
    this.activeData.step === 1 &&
      ((this.activeData.otherCondition = !1),
      (this.activeData.activeVersion = ""),
      (this.activeData.activeBinBlob = []),
      (this.activeData.step = 1),
      (this.activeData.progress = 0),
      (this.activeData.diaVisible = !1));
  }
  finishedUpdate() {
    this.resetClass(), B.push({ path: "/checkDevice" });
  }
  getAllBin() {
    var t, e, a;
    E({
      pid: (t = this.store.deviceInfo) == null ? void 0 : t.pId,
      vid: (e = this.store.deviceInfo) == null ? void 0 : e.vId,
      productName: (a = this.store.deviceInfo) == null ? void 0 : a.pName,
    })
      .then((s) => {
        s != null &&
          s.length &&
          s.forEach((i) => {
            let c = this.activeData.versionList.findIndex(
              (n) => n.version === i.version
            );
            c !== -1
              ? this.activeData.versionList[c].ids.push({
                  label: i.label,
                  id: i.id,
                })
              : this.activeData.versionList.push({
                  version: i.version,
                  ids: [{ label: i.label, id: i.id }],
                });
          });
      })
      .catch((s) => {});
  }
  getPDF() {
    var e;
    this.activeData.pdfUrl = "";
    let t = {
      pid: "HERO 68 ULTRA",
      vid: "HERO 68 ULTRA",
      productName: "HERO 68 ULTRA",
    };
    switch ((e = this.store.deviceInfo) == null ? void 0 : e.pName) {
      case "WIN 68 HE PRO":
      case "WIN 68 HE MAX":
        (t.pid = "WIN 68 HE PRO"),
          (t.vid = "WIN 68 HE PRO"),
          (t.productName = "WIN 68 HE PRO");
        break;
      case "WIN 60 HE MAX":
      case "WIN 60 HE PRO":
        (t.pid = "WIN 60 HE PRO"),
          (t.vid = "WIN 60 HE PRO"),
          (t.productName = "WIN 60 HE PRO");
        break;
    }
    H(t)
      .then((a) => {
        this.activeData.pdfUrl = I + a;
      })
      .catch(() => {});
  }
  async startUpdate() {
    var t;
    if ((t = this.activeData.activeBinBlob) != null && t.length)
      try {
        this.activeData.step = 2;
        const e = new FileReader();
        e.readAsArrayBuffer(this.activeData.activeBinBlob[0].blobFile),
          (e.onload = async () => {
            var i;
            const a = e.result;
            if (!(a instanceof ArrayBuffer) || a.byteLength === 0) return;
            (this.store.isBinUpdating = !0),
              (await ((i = this.ServiceDevice) == null
                ? void 0
                : i.updateBin(
                    a,
                    (c) => {
                      const { current: n, total: v } = c;
                      let d = Math.floor((n / v) * 100);
                      this.activeData.progress <= d &&
                        ((this.activeData.progress = h(d)),
                        n === v && (this.activeData.progress = 100));
                    },
                    { toBootDelay: 4e3, writeDelay: 30, toAppDelay: 4e3 }
                  ))) &&
                ((this.store.isBinUpdating = !1),
                (this.activeData.otherCondition = !0));
          });
      } catch (e) {
        console.error(e), (this.activeData.step = 1);
      }
  }
  changeBinVersion() {
    let t = this.activeData.versionList.find(
      (e) => e.version === this.activeData.activeVersion
    );
    t && this.getBinFile(t);
  }
  resetClass() {
    Object.assign(this.activeData, h(this.defaultPageData));
  }
}
export { L as default };
