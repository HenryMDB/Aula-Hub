import {
  z as d,
  v as g,
  c as h,
  y as n,
  i as l,
  k as t,
  t as c,
  h as s,
  F as m,
  B as P,
  p as f,
  s as B,
  a0 as I,
  _ as Q,
} from "./index-w58kBX-A.js";
import "./three-core-Cz6MriGW.js";
const S =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABzCAYAAAAfZQmsAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAATySURBVHic7dy9UhtXGMbx5xztSsJBGJWkCb4Dj92kxHUaXwWtnckFeHIBmZDWV+EmtSnTOOM7MG6g5EMOSNplTwoBw9gJnP1AL8v+fx1md/UOemfP0er14/SVw8PDTe/TN1J4KmlT0vrXxwAlHEnhSPLviiL7Yzwe713/pbv+w/Hx5HdJr5deIrpk5/Hj0c+XP1w14MnJ5H0I2jIrC53hnHbX1kYvJMnr4s5H82FZQtDWxWort9jzJZ+si0L3FEX+xHufvrIuBN3kffrGS8VL60LQVeGplxyPWWBl0/OcD4bWvXUF6LakzMHeOw0GfSVJIudcxBnoihCC8vxcs9lMRRGiz4tuQO+dHj1akffcNPEt55zSNFGv53V6ehbdhNHdNBgMaD7cynuvwaAff3zsgUnSq1oTOiZJ4nd20UfG7PlCkPI8V5blOj8/VwiL27D3Tt73lKaJkqRXef+4P5He/h20+1mazCtd4sEZ9aXnG9IvPzp9P7KuZqHM++uOjydRi/Xa2uqNv8+yTNPp/KrpbipuOBwoTUt9/tH+RNr+M+jgS6nTOmNjVXr70/1pwpOTuDeqkU3ddDrT2dns1ubTxaels7OpptNZqdf47S+a7yYHXxarQ9vUbsDpdKb5PCt93nyelWrCDwelX6Jzdj9bV1BerQbMsrxS812azzNlWR51LHu+27Xxb1S5AUNQ6WX0v0yncUs3HqbKDZjneSONc/kEHd1UuQFjl85lXwvtUrkBi6K5u1aT10K71GjA5vZtTV4L7cKXuzBVuQGbHMditKu7Kjdgr9fccEKT10K7VG7Ast/lLutaaJfKDVhnquU651yp8R08LLX2gMPhoHYBw2FfbAG7q9an4DRN1O+nlc/v91Oladz5o/gh285q49+o9mOY4XBQqQn7/bTUHXTrh9Iv0TnPN6wrKK+R54DD4UArK8OoPaFzTisrw9LL9/Yzp42bZ2I7bWN1MRXdNo1NROvaYMHNI/lJ5T3f/mQxmPrhoJ2jR3dh1F+sDtvP7s80tEpMREc34Gj0HQ+MESWEoMnkn6hjo5fgPGdiBXHKjNdFN+BsNldRFFVrQkcURaHZLH5QOboBiyLo9PRMWdbMICoelhCCsiwrlYqgstkwRbH4H21AUxjHgikaEKZoQJgiHxCNIB8QpsgHxL1APiDMkQ+IO3dTLiH5gFia/8slJB8QS1E3l5B8QNRWJ5eQfEDUVue9IR8QpsgHhCnyAWGKfECYIh8QpvhyF6bIB4Qp8gFhinxAmCIfEKbIB4Qp8gFRW533hnxA1FYnl5B8QNRSN5eQfEBUclsuIfmAMEM+IEyRDwgz5APCBPmAaCXGsWCKBoQpGhCmyAdEI8gHhCnyAXEvkA8Ic+QD4s6RD4h7gXxAmCIfEObIB4Qp8gHRWuQDwhT5gDBFPiBMkQ8IU3y5C1PkA8IU+YAwRT4gTJEPCFPkA8IU+YCojXxAmCIfEGbIB4QJ8gFxb5EPCFPkA8IM+YAwQT4gWolxLJiiAWGKBoQpGhCmvKQj6yLQWUde0p51FeiqcOQl99G6DHSVf+cODw83vU8+WZeC7imK/Ikfj8d7knasi0Hn7IzH472r8ZaTk8n7ELRlWxO6wDntrq2NXuj6Y5iLf+BOiLu2c9l8kvTNgN9iT5i+koqXkluXtL70EvGQHC2etLiPRZH9erHlu/IvU3tMyKTkXhIAAAAASUVORK5CYII=",
  k =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABzCAYAAAAfZQmsAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAVVSURBVHic7dy/axtnHAbw532vOoqM4SRjURwJLDwI2iXBGDrG/0ELHbplstHW9i8w2Qt1NsuaMgY6ZGwmZ+hWi3ZpqCcFpHqQQD4w0qBD93aQnTom2O/9kL8+3/MBD7JPd1+sx77T+fWjcE2z2Vw3xuwZYx4DWAfgXd+GKAL/4uO11vrFwcHB+6tfVFcf7O7u/gLgxzsfkfJk//Dw8KfLBx8CuLOzc6SUeio2FuWGMeZtu93eBgAHF7/5lFLfSw9G+aCUWt/c3PQ6nc4b1Ww218Mw7EoPRfmjta7rMAx/kB6E8skYs6cBfCM9COWTMeax5m0WErTOAJIkT0tPQPn2WZSNp9MpTk9P4fs+ZrPZ4qaizHEcB8vLy6jVanBd1/p51gGcTqc4OTnBdDqNOyM9YLPZDL7vYzKZoNFoWIfQ+hTc6/UYPrrV5VnSlnUAz8/P485EOeP7vvW21qdgm2s+rTU8z0OpVEKxWEShUAAABEGAyWSCs7Mz+L6PMAytB/zI0irw1XdQj7YAdynePh6a6Rhm+A748yUwHkpPA1hm5VKkNyE3KZfLqFarH0J3leu6cF0XnuchCAL0+32MRqNoB1hahdrem4eQ/ucuzX8gvXWYo+f3JoS2UrkNU6vVUK/XPxm+6wqFAur1Omq1WrSDPHnG8N3k4uyQNYkDWKvVUKlUIj+vUqlECqFa/TLyMfJGPdqSHiGyRAEsl8uxwnepUqmgXC7bbcxrvttl8HsUO4Baa1Sr1cQDVKtVaM0/yORV7Ffe8zyra77bFAoFeB7/HJ1XsQNYKpVSGyLNfVG2xA5gsVhMbYg090XZEjuAaZx+F7EvyhZe/ZOo2AEMgiC1IdLcF2VL7ABOJpPUhkhzX5QtsQN4dnaW2hBp7ouyJXYAfd9P5dQZBEGk5Tv0sMQOYBiG6Pf7iQfo9/vxl2dR5iV6FzwajTAYDGI/fzAY2C/Lmo5jHyc3Mvg9SnwbptfrxQrhYDBAr9ez3t78+0fkY+SNGb6THiGyVO4D9no9dLtdq2vCIAjQ7XYjhQ8A8PevmVtseafGw/mq6IxJbUX0aDSC7/uLW5I/Hs5X/D55Nl8bmMGlRwsxHc/PDhn9AbUOoOM4t671D8MQo9Eo+nJ7W+Mh8PvPMIvZO6XEcRzrba1PwVwyRbaWl5ett7UO4NraWqT/eKd8cl030r9aWAfQdV00Gg14nhfpVyzlg+M4WFlZidSKgKhvQlzXxcbGRpz5iD6Jy7FIFANIohhAEsV+QEoF+wFJFPsB6V5gPyCJYz8gLd4NvYTsB6TFS6mXkP2AlEzCXkL2A1JiSXoJ2Q9IySV4bdgPSKLYD0ii2A9IotgPSKLYD0iiePVPotgPSKLYD0ii2A9IotgPSKLYD0ii2A9IySV4bdgPSIkl6SVkPyAlk7CXkP2AFE9KvYTsB6TUsR+QRLEfkMSwH5BEsB+QMonLsUgUA0iiGEASxX5ASgX7AUkU+wHpXmA/IIljPyAtHvsBSRT7AeleYD8gSWM/IMliPyBlFfsBSRT7AUkU+wFJFPsBSRSv/kkU+wFJFPsBSRT7AUkU+wFJFPsBSRT7ASk59gOSJPYDkhz2A5II9gPSfcV+QBLFfkASw35AEsF+QMokLsciUQwgiWIASRQDSKI0AK6FIim+BvBeegrKLV8rpf6SnoJy67VWSj2XnoLySWv9wjk+PvY3Nzc9AF9LD0S5st9qtV6py0c7OztHSqmnsjNRHhhj3rbb7W1cvQ1z8Yl90ckoD/YvwwcAH60q6HQ6b7a2tl4aYwDgi4tPf37XE9KD4gP4Ryn1m9b621ar9erqF/8DMhc7nI+OTxkAAAAASUVORK5CYII=",
  v = { class: "theme-item" },
  u = { class: "theme-title" },
  H = { class: "theme-content item-center" },
  w = { class: "theme-color-container" },
  U = ["src"],
  L = ["onClick"],
  T = d({
    __name: "theme-mode",
    setup(p) {
      const { t: a } = g.useI18n(),
        A = h(),
        r = B(() => [
          { img: S, value: "light" },
          { img: k, value: "dark" },
        ]);
      function i(o) {
        A.mode !== o &&
          ((A.mode = o),
          I(A.mode),
          A.setThemeColor(A.mode),
          A.setThemeBg("default", !1));
      }
      return (o, F) => (
        n(),
        l("div", v, [
          t("div", u, c(s(a)("setting.text17")), 1),
          t("div", H, [
            (n(!0),
            l(
              m,
              null,
              P(
                r.value,
                (e) => (
                  n(),
                  l(
                    "div",
                    {
                      key: e.value,
                      class: f([
                        "theme-group flex",
                        {
                          "active-theme":
                            s(A).mode === (e == null ? void 0 : e.value),
                        },
                      ]),
                    },
                    [
                      t("div", w, [
                        t(
                          "img",
                          {
                            src: e.img,
                            class: "w-full h-full",
                            alt: "",
                            ondragstart: "return false",
                          },
                          null,
                          8,
                          U
                        ),
                      ]),
                      t(
                        "div",
                        {
                          class: "use-btn w-full all-center",
                          onClick: (M) => i(e.value),
                        },
                        c(
                          s(A).mode === (e == null ? void 0 : e.value)
                            ? s(a)("setting.text6")
                            : s(a)("setting.text7")
                        ),
                        9,
                        L
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
  R = Q(T, [["__scopeId", "data-v-2d85e647"]]);
export { R as default };
