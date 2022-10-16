import { diffMotoItem, scrapMotoList, updateMotoItem } from "../utils";
import { loadProductHtml } from "../../utils";

describe("utils", () => {
  xit("scrapMotoList", () =>
    [
      {
        html: loadProductHtml(
          "osobowe-honda-accord-seg-combi?search%5Bfilter_enum_generation%5D=gen-viii-2008&page=3"
        ),
        result: {
          list: [
            {
              id: "6100795096",
              price: 59900,
              thumbnail:
                "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjM1ODM1MGdwYnk3OTEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.Gi8C_3TzCTX_L7ZscuHHAO0vDHPZ3n9YAT405r1z4rY/image;s=320x240",
              title: "Honda Accord 2.0 Executive",
              url: "https://www.otomoto.pl/oferta/honda-accord-2-0-i-vtec-156km-mt-executive-salon-polska-serwis-aso-ii-wlasc-ID6ESjuU.html",
            },
            {
              id: "6100581850",
              price: 30900,
              thumbnail:
                "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Inhvc2pkbDdjdzlrbDItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.i6htXokg7foJ8ynEgHAnTnqj2y4xENr4kLnAuzRAWv4/image;s=320x240",
              title: "Honda Accord 2.0 Elegance",
              url: "https://www.otomoto.pl/oferta/honda-accord-honda-accord-2-0-benzyna-lpg-ID6ERq1s.html",
            },
            {
              id: "6100564624",
              price: 36970,
              thumbnail:
                "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImRsbDNjb2FtNjZyczMtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.zSm-oKw9lBOLdBko1h5XP-8F7RrDKM4sAfZUoZe9yFA/image;s=320x240",
              title: "Honda Accord 2.2d Elegance",
              url: "https://www.otomoto.pl/oferta/honda-accord-gwarancja-6mc-ID6ERlxC.html",
            },
            {
              id: "6102427760",
              price: 32000,
              thumbnail:
                "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Inc5NDc5ejZjbjBjdjEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.k_nA_NopcBDrrjO0TMaxhwYsKCm0ZxVAlu_9y5GdyZ0/image;s=320x240",
              title: "Honda Accord 2.0 Elegance",
              url: "https://www.otomoto.pl/oferta/honda-accord-honda-accord-8-kombi-2-0-benzyna-lpg-ID6EZaec.html",
            },
            {
              id: "6101506579",
              price: 38900,
              thumbnail:
                "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjFrNm1paHk0ZGFmLU9UT01PVE9QTCIsInciOlt7ImZuIjoid2c0Z25xcDZ5MWYtT1RPTU9UT1BMIiwicyI6IjE2IiwicCI6IjEwLC0xMCIsImEiOiIwIn1dfQ.RYaDQF4fxGHMDhEHiCOC33ylDh-lCJdsL4OZA_EiDxE/image;s=320x240",
              title: "Honda Accord 2.0 Elegance",
              url: "https://www.otomoto.pl/oferta/honda-accord-2-0-vtec100-bezwypadkowypelne-dodatkowe-wyposazenieorg-przebieg-ID6EWiAr.html",
            },
            {
              id: "6102374132",
              price: 42900,
              thumbnail:
                "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InN1Z2JzajQzMWd4cTItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.W-wuJ5cHFycMTtfN4x055hpNwxgIM4_Jm-R3Jp0c3w8/image;s=320x240",
              title: "Honda Accord 2.0 Executive Navi",
              url: "https://www.otomoto.pl/oferta/honda-accord-automat-ID6EYVhe.html",
            },
            {
              id: "6101472186",
              price: 31800,
              thumbnail:
                "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImFiMTJ0bzk0M29tMTEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.AxWs9o-xnwUakToj1nJGxhm5lbc1hIpa03HDxp92NaA/image;s=320x240",
              title: "Honda Accord Tourer 2.0",
              url: "https://www.otomoto.pl/oferta/honda-accord-2-0-benzyna-od-osoby-prywatnej-ID6EW9DI.html",
            },
            {
              id: "6101055053",
              price: 32900,
              thumbnail:
                "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImFoenYxOTl6bnA1bzMtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.O-2wblZlKJTZjZWvjYs_AxeqO1bY0zMbUa7DA-_Zk6o/image;s=320x240",
              title: "Honda Accord 2.0 Elegance",
              url: "https://www.otomoto.pl/oferta/honda-accord-honda-accord-2-0-vtec-ladna-ID6ETp7L.html",
            },
            {
              id: "6101043407",
              price: 38999,
              thumbnail:
                "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InE1aHc3bGxsdG0xYjEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.rlUAcGbiHEFD8dOrwDZ3NuYG0_bR_L-cvm7IEKUnHrY/image;s=320x240",
              title: "Honda Accord 2.0 Executive",
              url: "https://www.otomoto.pl/oferta/honda-accord-drugi-wlasciciel-serwisowana-do-konca-salon-polska-ID6ETm5W.html",
            },
            {
              id: "6102025270",
              price: 27900,
              thumbnail:
                "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjU3ZTFnOWowbjA1eC1PVE9NT1RPUEwiLCJ3IjpbeyJmbiI6IndnNGducXA2eTFmLU9UT01PVE9QTCIsInMiOiIxNiIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.XeUliFeqxYoKZ5ro6mk33-uWG8VbSj9zoJcQbxnqink/image;s=320x240",
              title: "Honda Accord 2.0 Elegance",
              url: "https://www.otomoto.pl/oferta/honda-accord-honda-accord-2-0-vtec-ID6EXtvq.html",
            },
          ],
          nextPage: null,
          url: "https://www.otomoto.pl/osobowe/honda/accord/seg-combi?search%5Bfilter_enum_generation%5D=gen-viii-2008&page=3",
        },
      },
      {
        html: loadProductHtml(
          "osobowe-bmw-x3?search%5Bfilter_enum_generation%5D=gen-g01-2017"
        ),
        result: {
          url: "https://www.otomoto.pl/osobowe/bmw/x3?search%5Bfilter_enum_generation%5D=gen-g01-2017",
          list: [
            {
              id: "6102815055",
              price: 150800,
              thumbnail:
                "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InoyZ3JrcXltdnRhYTItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.PZdzqnfgObkcjauwV-QmI5tb7ZytdwBJ0r1dQ0Er7BY/image;s=320x240",
              title: "BMW X3 xDrive20d Business Edition sport",
              url: "https://www.otomoto.pl/oferta/bmw-x3-g01-x3-2-0d-190km-business-edition-sport-panorama-ID6F0MYT.html",
            },
            {
              id: "6101158065",
              price: 164900,
              thumbnail:
                "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InFwa2wwOGpucTdoNS1PVE9NT1RPUEwiLCJ3IjpbeyJmbiI6IndnNGducXA2eTFmLU9UT01PVE9QTCIsInMiOiIxNiIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.-F_Ra9kLFJV6dcXI9ZiL-sHaYBpzBKqEYGKEr01dWAM/image;s=320x240",
              title: "BMW X3 xDrive30i",
              url: "https://www.otomoto.pl/oferta/bmw-x3-bmw-x3-30i-biala-perla-bogate-wyposazenie-ID6ETPWf.html",
            },
            {
              id: "6102071939",
              price: 298600,
              thumbnail:
                "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IncydDg3c2k4MDFsMjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.IaU37vFC02HR1FPb1w31jf-F0zQQeNtBiLrQWm1kplU/image;s=320x240",
              title: "BMW X3",
              url: "https://www.otomoto.pl/oferta/bmw-x3-2-0-xdrive20d-190km-m-sport-connecteddrive-plus-ID6EXFF9.html",
            },
            {
              id: "6102441136",
              price: 229000,
              thumbnail:
                "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImwzYm5tYTkzNGlnYjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.lyIjC1hUbPJARxkplq80hsNH2CotHhI5Q1Fo7UTkm2k/image;s=320x240",
              title: "BMW X3 xDrive30i GPF M Sport sport",
              url: "https://www.otomoto.pl/oferta/bmw-x3-pierwszy-wlasciciel-stan-idealny-bogate-wyposazenie-ID6EZdHV.html",
            },
            {
              id: "6102056133",
              price: 296800,
              thumbnail:
                "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjZ0c3Bxd3o2NzBzNTEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.CEmEpPJWyEt5sYw7ov5FliGIvGbv0FNOHwtdtFYXZU4/image;s=320x240",
              title: "BMW X3",
              url: "https://www.otomoto.pl/oferta/bmw-x3-od-reki-2-0-xdrive20d-190km-m-sport-pakiet-innowacji-ID6EXByd.html",
            },
            {
              id: "6099371327",
              price: 335000,
              thumbnail:
                "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImFjdzczOHNrMGt4MjMtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.Auh6qBur8bcpZITmu6GU2bkoliRnftThX4hCRx61ctI/image;s=320x240",
              title: "BMW X3 xDrive30e",
              url: "https://www.otomoto.pl/oferta/bmw-x3-hybryda-bez-odstepnego-ID6EMl6T.html",
            },
            {
              id: "6102043897",
              price: 274800,
              thumbnail:
                "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InA0Y2E1dHhob2Q1ZC1PVE9NT1RPUEwiLCJ3IjpbeyJmbiI6IndnNGducXA2eTFmLU9UT01PVE9QTCIsInMiOiIxNiIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.StsbboxqbZTjF5WRxL8ZglkXSu5HxU2QvJIGPkFUltY/image;s=320x240",
              title: "BMW X3 xDrive20d",
              url: "https://www.otomoto.pl/oferta/bmw-x3-2-0-xdrive20d-190km-m-sport-pakiet-innowacji-business-class-ID6EXymR.html",
            },
            {
              id: "6095974139",
              price: 193900,
              thumbnail:
                "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Imp2NGhxeWFvdGVicTItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.oh5B-sBiovP7gGAq1nBAlNF-SW2ikaO1CNdNh8-shDg/image;s=320x240",
              title: "BMW X3 xDrive20i",
              url: "https://www.otomoto.pl/oferta/bmw-x3-bmw-x3-xdrive-20i-prawie-nowy-ID6Ey5lx.html",
            },
            {
              id: "6100964885",
              price: 183500,
              thumbnail:
                "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjZ1ejgxeGQzNGNudzEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19._VwcTrkjyk_boJbrN4EVbKLjXwzIQy_XYfWZ--ZbmO0/image;s=320x240",
              title: "BMW X3 xDrive30i GPF xLine",
              url: "https://www.otomoto.pl/oferta/bmw-x3-bmw-x3-g01-czarna-kamery-x-line-ID6ET1Fr.html",
            },
            {
              id: "6101351252",
              price: 194900,
              thumbnail:
                "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InNnaHlobG13eDF5LU9UT01PVE9QTCIsInciOlt7ImZuIjoid2c0Z25xcDZ5MWYtT1RPTU9UT1BMIiwicyI6IjE2IiwicCI6IjEwLC0xMCIsImEiOiIwIn1dfQ.UQbNsBL2SYUHxidqw5VcXl7GFxD953vu4-_uozm_0s0/image;s=320x240",
              title: "BMW X3 xDrive30i M Sport sport",
              url: "https://www.otomoto.pl/oferta/bmw-x3-ID6EUEba.html",
            },
            {
              id: "6102798173",
              price: 155000,
              thumbnail:
                "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InRweWk2bnRycDc4azEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.kfG8AzR5pzq6Z5pCfrO1WKm14s6zMzpcXsxyi2cf6CI/image;s=320x240",
              title: "BMW X3",
              url: "https://www.otomoto.pl/oferta/bmw-x3-bmw-x3-x-laine-ID6F0IAB.html",
            },
            {
              id: "6098937014",
              price: 284100,
              thumbnail:
                "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImpjbDBnaWcxanZzczItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.ymZm_eFPFtOgNJO1aTzfLRbz5JyD3xLh4WJhWhj5BWQ/image;s=320x240",
              title: "BMW X3 xDrive20d mHEV M Sport sport",
              url: "https://www.otomoto.pl/oferta/bmw-x3-dostepny-od-reki-x3-20d-xdrive-czerwone-skory-zadzwon-zarezerwuj-ID6EKv7Q.html",
            },
            {
              id: "6102119298",
              price: 238861,
              thumbnail:
                "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjE2c2F5ZjY1dWdjZDItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.9Ld0mbV-LIvA4vAhf-q-lSengvJRwkg_FpaRwmYkwyg/image;s=320x240",
              title: "BMW X3 xDrive20i mHEV M Sport sport",
              url: "https://www.otomoto.pl/oferta/bmw-x3-xdrive-20i-m-sport-ID6EXRZ0.html",
            },
            {
              id: "6102714627",
              price: 261900,
              thumbnail:
                "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InlwM3l4b2JzajdiazItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.8DR65lx7j1W6Dw1-N6zxhXa53i4L5_5LC8naC7SIVzw/image;s=320x240",
              title: "BMW X3 xDrive20d",
              url: "https://www.otomoto.pl/oferta/bmw-x3-xdrive20d-m-sport-asystent-parkowania-kamera-cofania-ID6F0mR5.html",
            },
            {
              id: "6102714720",
              price: 261900,
              thumbnail:
                "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjRmcng2NnF3cW16bjEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.66MipisvnwnkozTCFHF56_J5QV-NnPCyFnCwdcLJMDk/image;s=320x240",
              title: "BMW X3 xDrive20d",
              url: "https://www.otomoto.pl/oferta/bmw-x3-xdrive20d-m-sport-asystent-parkowania-kamera-cofania-ID6F0mSA.html",
            },
            {
              id: "6102715387",
              price: 257900,
              thumbnail:
                "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImdzaHRvaDhvOW15eC1PVE9NT1RPUEwiLCJ3IjpbeyJmbiI6IndnNGducXA2eTFmLU9UT01PVE9QTCIsInMiOiIxNiIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.fmMrHQ9HFdTkh4-_daRE4kK-q8b9UNBwD-a7e4ETP0Y/image;s=320x240",
              title: "BMW X3 xDrive20d",
              url: "https://www.otomoto.pl/oferta/bmw-x3-xdrive20d-asystent-parkowania-kamera-cofania-ID6F0n3l.html",
            },
            {
              id: "6102786728",
              price: 268900,
              thumbnail:
                "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjN1NnU3ZGNnaGRpdjEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.QYi0skOBliDXhpHRXGZHDcOiySLrZ85-2wwHX_-I12M/image;s=320x240",
              title: "BMW X3",
              url: "https://www.otomoto.pl/oferta/bmw-x3-2-0-190km-m-sport-pakiet-sportowy-m-business-class-shadowline-ID6F0FC0.html",
            },
            {
              id: "6102767313",
              price: 151900,
              thumbnail:
                "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InA1MTlyajR4a25hNC1PVE9NT1RPUEwiLCJ3IjpbeyJmbiI6IndnNGducXA2eTFmLU9UT01PVE9QTCIsInMiOiIxNiIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.5-SBZLWtSwQNU4jWlrx8s1WYAyhjBB2LQdtcPsuGZ2I/image;s=320x240",
              title: "BMW X3 xDrive20i GPF M Sport sport",
              url: "https://www.otomoto.pl/oferta/bmw-x3-salon-polska-m-pakiet-zewnetrzny-i-wewnetrzny-cyfrowe-zegary-ID6F0AyR.html",
            },
            {
              id: "6099541896",
              price: 130900,
              thumbnail:
                "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjBkbjI2dWJ0eWxwMS1PVE9NT1RPUEwiLCJ3IjpbeyJmbiI6IndnNGducXA2eTFmLU9UT01PVE9QTCIsInMiOiIxNiIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.5eL0bUZ3iKziVGOPB5IwZc6Ll4kHDlR0DxpgammsEQY/image;s=320x240",
              title: "BMW X3 xDrive30i xLine",
              url: "https://www.otomoto.pl/oferta/bmw-x3-bmw-4x4-navi-szyberdach-stan-idealny-ID6EN3u0.html",
            },
            {
              id: "6102763491",
              price: 224600,
              thumbnail:
                "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjRkMng0c3psZHVjcDEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.vS9MnptnZw8xoUrsLdGuNcvQKHOJoz-D8fs9ZYCESbw/image;s=320x240",
              title: "BMW X3",
              url: "https://www.otomoto.pl/oferta/bmw-x3-m40i-harman-kardon-head-up-adaptacyjne-podwozie-m-led-ID6F0zzd.html",
            },
            {
              id: "6101304004",
              price: 235000,
              thumbnail:
                "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjRiYWpoeXVqZWhodTMtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.HLyKTwpvGnwtmVBFjdXgDxAniiGcsPixI69JLsmIewc/image;s=320x240",
              title: "BMW X3 xDrive20d",
              url: "https://www.otomoto.pl/oferta/bmw-x3-xdrive20d-m-sport-sportowe-fotele-asystent-parkowania-ID6EUrT6.html",
            },
            {
              id: "6099894176",
              price: 205000,
              thumbnail:
                "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjgxZGdoZ3Y2aHNnZDEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.zRTFsLSD3Kr7TjP3jveLtWTneYQ8BTxFB0aQp9rwSO8/image;s=320x240",
              title: "BMW X3 xDrive30d mHEV",
              url: "https://www.otomoto.pl/oferta/bmw-x3-bmw-x3-30d-lci-ID6EOx7V.html",
            },
            {
              id: "6101563916",
              price: 328000,
              thumbnail:
                "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImJzcThwNDN2ZjVhcDMtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.v0GpsuuWgfKxep1sdyO1LIqd2Zvcvk18dB_vCihm0dY/image;s=320x240",
              title: "BMW X3",
              url: "https://www.otomoto.pl/oferta/bmw-x3-2-0-xdrive30i-245km-pakiet-connecteddrive-plus-ID6EWxwe.html",
            },
            {
              id: "6101183685",
              price: 175000,
              thumbnail:
                "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImV3ajBmYTJ0cTNodTItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.UJt_EIWVQkm-V4BLnCLlglYq-sCkOguMUkz_C_00Jdg/image;s=320x240",
              title: "BMW X3 xDrive30i GPF xLine",
              url: "https://www.otomoto.pl/oferta/bmw-x3-30i-252km-xdrive-bogate-wyposazenie-ID6ETVAt.html",
            },
            {
              id: "6096756433",
              price: 155000,
              thumbnail:
                "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImoyZW1tajVkNXRqaDItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.UcOifND4xzbHBtzEqhvtPfwQ8iRVlDRuGxsU6AIzPOg/image;s=320x240",
              title: "BMW X3 xDrive20d xLine",
              url: "https://www.otomoto.pl/oferta/bmw-x3-bmw-x3-x-line-panorama-radar-hu-hak-ID6EBmRb.html",
            },
            {
              id: "6098582019",
              price: 267499,
              thumbnail:
                "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Im5pb2wxN25zeDAybTItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.Pg2t3rjGejEH7us2CwL-bjRFlDwyu2jjQX9jBtJS2b8/image;s=320x240",
              title: "BMW X3 xDrive20d M Sport sport",
              url: "https://www.otomoto.pl/oferta/bmw-x3-bmw-x3-nowe-2021-2022-full-opcja-lasery-panorama-m-sport-hak-20-ID6EJ1M7.html",
            },
            {
              id: "6102652403",
              price: 280900,
              thumbnail:
                "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjVuMnZjY3ZhZWlxajEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.k0W8yxG1C18g9YFGa2bx-Jk0radHLRVwTk9YnCGFYEo/image;s=320x240",
              title: "BMW X3 xDrive20d M Sport sport",
              url: "https://www.otomoto.pl/oferta/bmw-x3-xdrive-20d-samochod-demo-gotowy-do-odbioru-bmw-gazda-ID6F06Ft.html",
            },
            {
              id: "6100426067",
              price: 214999,
              thumbnail:
                "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InljYTRkaGo3NDIyODItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.hmsWf_p74UXKKkcvoS3nE32LEoGYyeP1rCO0E70_1dE/image;s=320x240",
              title: "BMW X3 xDrive20d Advantage",
              url: "https://www.otomoto.pl/oferta/bmw-x3-rabat-24-991-automat-adaptiveled-fotsport-ogrzew-mshadowline-komdostep-ID6EQLuP.html",
            },
            {
              id: "6102260975",
              price: 259300,
              thumbnail:
                "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InZ6NjZ6YTcxNWRwazEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.dsd3t8V1auuwZy54tB1ntYPebIuEqBxJoRxJoeBQiYE/image;s=320x240",
              title: "BMW X3 xDrive20d",
              url: "https://www.otomoto.pl/oferta/bmw-x3-2-0-xdrive20d-190km-ogrzewanie-foteli-przednich-ID6EYsQ7.html",
            },
            {
              id: "6102259342",
              price: 526700,
              thumbnail:
                "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImZicG1xNXo3M2owbzMtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.WL3iVEiNzz2cWtGmJ2cREO6aJHx-m4r9nUdb-fzyWGo/image;s=320x240",
              title: "BMW X3 X3M Competition",
              url: "https://www.otomoto.pl/oferta/bmw-x3-3-0-510km-m-competition-m-driver-dach-panoramiczny-hak-ID6EYspM.html",
            },
            {
              id: "6102631227",
              price: 229900,
              thumbnail:
                "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InYzOXgwbDd1cDNucjMtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.Bqggyt5SCdtFBotQ0KYuuqHpCNDkrCKRuJR0yU3I3gI/image;s=320x240",
              title: "BMW X3 xDrive30d Luxury Line",
              url: "https://www.otomoto.pl/oferta/bmw-x3-30d-xdrive-265km-fv-23-salon-pl-wentyl-fotele-kamery-360-harman-ID6F019W.html",
            },
            {
              id: "6102631163",
              price: 219900,
              thumbnail:
                "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InNwOXFlamdvazFtZDItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.XHmFiUDmhWyUUxf58lTv0WPQOjvdmtX1wLr846pQdng/image;s=320x240",
              title: "BMW X3 xDrive25d M Sport",
              url: "https://www.otomoto.pl/oferta/bmw-x3-xdrive-25d-231km-m-pakiet-hak-fv-23-salon-pl-cz-martwego-pola-ID6F018T.html",
            },
          ],
          nextPage: 2,
        },
      },
    ].forEach(({ html, result }) =>
      expect(scrapMotoList(html)).toEqual(result)
    ));

  xit("diffMotoItem", () =>
    [
      {
        last: {
          _id: "kWUpK2jZu2D72GpU",
          _created: 1643137731239,
          id: "klik-471728",
          canonical:
            "https://www.klikmapa.pl/o/warszawa-wawer-1-050-000-zl-200-m2-do-remontu-id471728.html",
          category: "domy",
          images: [
            "https://i.klikmapa.pl/19c/b42/a0-1939-487e-aecb-2dc6ec175503-jpg",
          ],
          title: "Super lokalizacja bliźniak Anin Sadul",
          price: 1050000,
          description: [
            "Mamy przyjemność zaprezentować Państwu do sprzedaży nieduży dom w zabudowie bliźniaczej w doskonałej lokalizacji. Budynek wybudowany w latach 80-tych. Budynek podpiwniczony w całości , piwnice bardzo obszerne i przestronne. Pod tarasem garaż na rowery czy bardzo niski samochód . W budynku ogrzewanie gazowe, woda miejska, szambo, w ulicy niedaleko kanalizacja miejska.<br />Właściwa...",
          ],
          parameters: [],
          created: "2022-01-25 15:41:01",
          changed: "",
          _checked: 1643235391658,
        },
        item: {
          _id: "kWUpK2jZu2D72GpU",
          _created: 1643137731239,
          id: "klik-471728",
          canonical:
            "https://www.klikmapa.pl/o/warszawa-wawer-1-050-000-zl-200-m2-do-remontu-id471728.html",
          category: "domy",
          images: [
            "https://i.klikmapa.pl/399/b6b/65-0e92-48f8-aa8a-65d6346fb4be-jpg",
          ],
          title: "Super lokalizacja, bliźniak Anin-Sadul",
          price: 1050000,
          description: [
            "<br />Mamy przyjemność zaprezentować Państwu ofertę sprzedaży piętrowego domu o powierzchni 130m2 w zabudowie bliźniaczej usytuowanego w doskonałej lokalizacji.<br /><br />Budynek wybudowany w latach 80-tych, w całości podpiwniczony (piwnica bardzo obszerna i przestronna). Pod tarasem zlokalizowany jest garaż na rowery lub niski samochód. <br />Ogrzewanie gazowe, woda miejska,...",
          ],
          parameters: [],
          created: "2022-01-25 15:41:01",
          changed: "",
          _checked: 1643237835712,
        },
        result: true,
      },
    ].forEach(({ last, item, result }) =>
      expect(Boolean(diffMotoItem(last, item))).toEqual(result)
    ));

  xit("updateMotoItem", () =>
    [
      {
        last: {
          _id: "kWUpK2jZu2D72GpU",
          _created: 1643137731239,
          id: "klik-471728",
          canonical:
            "https://www.klikmapa.pl/o/warszawa-wawer-1-050-000-zl-200-m2-do-remontu-id471728.html",
          category: "domy",
          coordinates: {
            latitude: 52.2096,
            longitude: 21.1602,
          },
          images: [
            "https://i.klikmapa.pl/19c/b42/a0-1939-487e-aecb-2dc6ec175503-jpg",
          ],
          title: "Super lokalizacja bliźniak Anin Sadul",
          price: 1050000,
          description: [
            "Mamy przyjemność zaprezentować Państwu do sprzedaży nieduży dom w zabudowie bliźniaczej w doskonałej lokalizacji. Budynek wybudowany w latach 80-tych. Budynek podpiwniczony w całości , piwnice bardzo obszerne i przestronne. Pod tarasem garaż na rowery czy bardzo niski samochód . W budynku ogrzewanie gazowe, woda miejska, szambo, w ulicy niedaleko kanalizacja miejska.<br />Właściwa...",
          ],
          parameters: [],
          created: "2022-01-25 15:41:01",
          changed: "",
          _checked: 1643235391658,
        },
        item: {
          _id: "kWUpK2jZu2D72GpU",
          _created: 1643137731239,
          id: "klik-471728",
          address: {
            lokalizacja_region: "mazowieckie",
            lokalizacja_powiat: "warszawski",
            lokalizacja_miejscowosc: "Warszawa",
            lokalizacja_kraj: "Polska",
            lokalizacja_dzielnica: "Wawer",
          },
          canonical:
            "https://www.klikmapa.pl/o/warszawa-wawer-1-050-000-zl-200-m2-do-remontu-id471728.html",
          category: "domy",
          coordinates: {
            latitude: 52.2096,
            longitude: 21.1602,
          },
          images: [
            "https://i.klikmapa.pl/399/b6b/65-0e92-48f8-aa8a-65d6346fb4be-jpg",
          ],
          location: ["POLSKA", "MAZOWIECKIE", "WARSZAWA", "WAWER"],
          title: "Super lokalizacja, bliźniak Anin-Sadul",
          price: 1050000,
          description: [
            "<br />Mamy przyjemność zaprezentować Państwu ofertę sprzedaży piętrowego domu o powierzchni 130m2 w zabudowie bliźniaczej usytuowanego w doskonałej lokalizacji.<br /><br />Budynek wybudowany w latach 80-tych, w całości podpiwniczony (piwnica bardzo obszerna i przestronna). Pod tarasem zlokalizowany jest garaż na rowery lub niski samochód. <br />Ogrzewanie gazowe, woda miejska,...",
          ],
          parameters: [],
          created: "2022-01-25 15:41:01",
          changed: "",
          _checked: 1643237835712,
          _updated: 1643237701078,
          _area: 0,
          _terrain_area: 0,
          _address: ["Polska", "mazowieckie", "warszawski", "Warszawa"],
          _location: "POLSKA, MAZOWIECKIE, WARSZAWA, WAWER",
        },
        result: {
          _checked: 1643235391658,
          _created: 1643137731239,
          _history: {
            "1643137731239": {
              _checked: 1643235391658,
              _created: 1643137731239,
              _id: "kWUpK2jZu2D72GpU",
              canonical:
                "https://www.klikmapa.pl/o/warszawa-wawer-1-050-000-zl-200-m2-do-remontu-id471728.html",
              category: "domy",
              changed: "",
              coordinates: { latitude: 52.2096, longitude: 21.1602 },
              created: "2022-01-25 15:41:01",
              description: [
                "Mamy przyjemność zaprezentować Państwu do sprzedaży nieduży dom w zabudowie bliźniaczej w doskonałej lokalizacji. Budynek wybudowany w latach 80-tych. Budynek podpiwniczony w całości , piwnice bardzo obszerne i przestronne. Pod tarasem garaż na rowery czy bardzo niski samochód . W budynku ogrzewanie gazowe, woda miejska, szambo, w ulicy niedaleko kanalizacja miejska.<br />Właściwa...",
              ],
              id: "klik-471728",
              images: [
                "https://i.klikmapa.pl/19c/b42/a0-1939-487e-aecb-2dc6ec175503-jpg",
              ],
              parameters: [],
              price: 1050000,
              title: "Super lokalizacja bliźniak Anin Sadul",
            },
          },
          _id: "kWUpK2jZu2D72GpU",
          _updated: 1643239160251,
          canonical:
            "https://www.klikmapa.pl/o/warszawa-wawer-1-050-000-zl-200-m2-do-remontu-id471728.html",
          category: "domy",
          changed: "",
          coordinates: { latitude: 52.2096, longitude: 21.1602 },
          created: "2022-01-25 15:41:01",
          description: [
            "<br />Mamy przyjemność zaprezentować Państwu ofertę sprzedaży piętrowego domu o powierzchni 130m2 w zabudowie bliźniaczej usytuowanego w doskonałej lokalizacji.<br /><br />Budynek wybudowany w latach 80-tych, w całości podpiwniczony (piwnica bardzo obszerna i przestronna). Pod tarasem zlokalizowany jest garaż na rowery lub niski samochód. <br />Ogrzewanie gazowe, woda miejska,...",
          ],
          id: "klik-471728",
          images: [
            "https://i.klikmapa.pl/399/b6b/65-0e92-48f8-aa8a-65d6346fb4be-jpg",
          ],
          parameters: [],
          price: 1050000,
          title: "Super lokalizacja, bliźniak Anin-Sadul",
        },
      },
    ].forEach(({ last, item, result }) =>
      expect(updateMotoItem(last, item, 1643239160251)).toEqual(result)
    ));
});
