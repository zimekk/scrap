import { diffItem, reduceHistory, scrapOptions, updateItem } from "../utils";

const stripAnsi = (s: string) =>
  s.replace(
    /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g,
    ""
  );

describe("VehicleService", () => {
  it("scrapOptions", () =>
    [
      {
        item: {},
        html: `

        <section id="v7668-vehicle_infos" >
        <div class="container">
          <table class="table table-lg-columns">
            <tbody>
            
              <tr>
                <th scope="row">Moc</th>
                <td>
                  
                    250KW
                  
                   / 
                  
                  340KM
                  
                </td>
              </tr>
            
            
              <tr>
                <th scope="row">Pojemność silnika</th>
                <td>2998cm3</td>
              </tr>
            
            
            </tbody>
            </table>
            </div>
            </section>
    

<section id="v22387-specifications" >
<div class="container">
<h2 class="h4 ">
Dane techniczne
</h2>
<table class="table table-lg-columns">
<tbody>
<tr>
<th scope="row">Typ nadwozia</th>
<td>Sedan</td>
</tr>
<tr>
<th scope="row">Typ napędu</th>
<td>Napęd na cztery koła</td>
</tr>
</tbody>
</table>
</div>
</section>
<section>
<h3 class="h5 ">
Wyposażenie zewnętrzne
</h3>
<div class="list-group-columns-wrapper">
<ul class="list-group list-group-sm list-group-flush columns-md-2">
<li class="list-group-item columns-avoid-break-inside">Izolacja termiczna i akustyczna szyb</li>
<li class="list-group-item columns-avoid-break-inside">Opony z funkcją jazdy awaryjnej Runflat</li>
</ul>
</div>
</section>
    `,
        result: {
          options: [
            "Moc\t250KW / 340KM",
            "Pojemność silnika\t2998cm3",
            "Typ nadwozia\tSedan",
            "Typ napędu\tNapęd na cztery koła",
            "Izolacja termiczna i akustyczna szyb",
            "Opony z funkcją jazdy awaryjnej Runflat",
          ],
        },
      },
    ].forEach(({ item, html, result }) =>
      expect(scrapOptions(item, html)).toEqual(result)
    ));

  it("diffItem", () =>
    [
      {
        last: {
          _id: "QTvr5Sg9Nc3MAQhT-",
          _created: 1648148377467,
          _updated: 1655661011217,
          _history: {},
          _removed: 0,
          id: 35628,
          type: "CAR",
          isNew: false,
          modelCode: "11AK",
          title: "BMW 218i Gran Coupé",
          brand: {
            id: 1,
            label: "BMW",
          },
          series: {
            id: 2,
            label: "Seria 2",
          },
          bodyType: {
            id: 2,
            label: "Coupé",
          },
          seriesCode: "F44",
          productionYear: 2021,
          mileage: 15500,
          fuel: {
            id: 1,
            label: "Benzyna",
          },
          consumptionFuel: 5.7,
          emission: 130,
          emissionStandard: {
            id: 6,
            label: "EURO 6",
          },
          powerKW: 103,
          powerHP: 140,
          capacity: 1499,
          transmission: {
            id: 0,
            label: "Automatyczna",
          },
          color: {
            code: "#0000FF",
            id: 2,
            label: "Niebieski morski",
          },
          images: 2,
          imagesLastChanged: "2022-04-12T19:32:13+00:00",
          exterior360: false,
          interior360: false,
          warranty: 24,
          usedBrand: true,
          reservable: false,
          vatReclaimable: true,
          leasable: true,
          leaseProduct: {
            type: "lease",
            label: "LO U",
            totalAgeLimit: 120,
            downPaymentLimits: {
              min: 0,
              max: 0.45,
              step: 1000,
              default: 0.25,
            },
            termLimits: {
              min: 24,
              max: 60,
              step: 1,
              default: 24,
            },
            residualValueFactorLimits: [
              {
                term: 24,
                min: 0.187,
                max: 0.35,
              },
              {
                term: 25,
                min: 0.17,
                max: 0.35,
              },
              {
                term: 26,
                min: 0.155,
                max: 0.35,
              },
              {
                term: 27,
                min: 0.14,
                max: 0.35,
              },
              {
                term: 28,
                min: 0.12,
                max: 0.35,
              },
              {
                term: 29,
                min: 0.105,
                max: 0.35,
              },
              {
                term: 30,
                min: 0.09,
                max: 0.3,
              },
              {
                term: 31,
                min: 0.07,
                max: 0.3,
              },
              {
                term: 32,
                min: 0.055,
                max: 0.3,
              },
              {
                term: 33,
                min: 0.04,
                max: 0.3,
              },
              {
                term: 34,
                min: 0.02,
                max: 0.3,
              },
              {
                term: 35,
                min: 0.01,
                max: 0.3,
              },
              {
                term: 36,
                min: 0.005,
                max: 0.25,
              },
              {
                term: 37,
                min: 0.005,
                max: 0.25,
              },
              {
                term: 42,
                min: 0.005,
                max: 0.2,
              },
              {
                term: 48,
                min: 0.005,
                max: 0.15,
              },
              {
                term: 54,
                min: 0.005,
                max: 0.1,
              },
            ],
            residualValueStep: 0.005,
            residualValueDefault: "max",
            interestRates: [
              {
                term: 0,
                value: 0.138,
              },
              {
                term: 26,
                value: 0.13,
              },
              {
                term: 38,
                value: 0.1288,
              },
              {
                term: 50,
                value: 0.1268,
              },
            ],
          },
          comfortLeaseProduct: {
            type: "comfort_lease",
            label: "CL U",
            calculationMode: "brv_based",
            totalAgeLimit: 96,
            downPaymentLimits: {
              min: 0,
              max: 0.35,
              step: 1000,
              default: 0.25,
            },
            termLimits: {
              min: 24,
              max: 60,
              step: 1,
              default: 36,
            },
            annualMileageLimits: {
              min: 10000,
              max: 50000,
              step: 5000,
              default: 15000,
            },
            interestRates: [
              {
                term: 0,
                value: 0.1371,
              },
              {
                term: 26,
                value: 0.1336,
              },
              {
                term: 38,
                value: 0.1345,
              },
              {
                term: 50,
                value: 0.1336,
              },
            ],
            tarRvMod: {
              id: 80030,
              tmdate: "22/02/22",
              accessoryLimit: 0.35,
              rvValue: 0.491,
              brvValue: 0.471,
              rvValueUsed: 0.502,
              brvValueUsed: 0.471,
              carSegmentId: "1",
            },
            tarRvDev: {
              term: 48,
              totalMileage: 17500,
              rvDev: -0.0492,
              rvDevUsed: -0.0492,
            },
          },
          newPrice: 167800,
          optionsPrice: 38500,
          accessoriesPrice: 0,
          transactionalPrice: 149900,
          dealer: {
            id: 11,
            buno: "28966",
            owner: "06",
            ownerName: "Bawaria Motors",
            name: "Bawaria Motors Warszawa",
            legalName: "Bawaria Motors Sp. z o. o.",
            street: "Czerniakowska 47",
            zip: "00-715",
            city: "Warszawa",
            lat: 52.1982843,
            lng: 21.049366,
          },
          created: "2022-03-24T13:00:02+00:00",
          age: 12,
          isYUC: true,
          reserved: false,
          vin17: "WBA11AK0507J40229",
          registration: "2021-06-24T00:00:00+00:00",
          emissionMeasurementStandard: "WLTP",
          panoramas: 0,
          video:
            '<iframe width="200" height="113" src="https://www.youtube.com/embed/BSpuVatUubo?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          _checked: 1655661011217,
          options: ["Zwiększony bak paliwa"],
          transactionalPriceUpdated: "2022-06-10T05:00:02+00:00",
          href: "https://najlepszeoferty.bmw.pl/uzywane/wyszukaj/opis-szczegolowy/35628",
          srcSet: [
            "https://najlepszeoferty.bmw.pl/uzywane/api/v1/ems/bmw-used-pl_PL/vehicle/1920/2011206437498402f4e346eb5574dcb0/35628-23 1920w, https://najlepszeoferty.bmw.pl/uzywane/api/v1/ems/bmw-used-pl_PL/vehicle/322/255b28ffdad35cd984ff32f30da17158/35628-23 322w",
          ],
        },
        item: {
          id: 35628,
          type: "CAR",
          isNew: false,
          modelCode: "11AK",
          title: "BMW 218i Gran Coupé",
          brand: {
            id: 1,
            label: "BMW",
          },
          series: {
            id: 2,
            label: "Seria 2",
          },
          bodyType: {
            id: 2,
            label: "Coupé",
          },
          seriesCode: "F44",
          productionYear: 2021,
          mileage: 15500,
          fuel: {
            id: 1,
            label: "Benzyna",
          },
          consumptionFuel: 5.7,
          emission: 130,
          emissionStandard: {
            id: 6,
            label: "EURO 6",
          },
          powerKW: 103,
          powerHP: 140,
          capacity: 1499,
          transmission: {
            id: 0,
            label: "Automatyczna",
          },
          color: {
            code: "#0000FF",
            id: 2,
            label: "Niebieski morski",
          },
          images: 2,
          imagesLastChanged: "2022-04-12T19:32:13+00:00",
          exterior360: false,
          interior360: false,
          warranty: 24,
          usedBrand: true,
          reservable: false,
          vatReclaimable: true,
          leasable: true,
          leaseProduct: {
            type: "lease",
            label: "LO U",
            totalAgeLimit: 120,
            downPaymentLimits: {
              min: 0,
              max: 0.45,
              step: 1000,
              default: 0.25,
            },
            termLimits: {
              min: 24,
              max: 60,
              step: 1,
              default: 24,
            },
            residualValueFactorLimits: [
              {
                term: 24,
                min: 0.187,
                max: 0.35,
              },
              {
                term: 25,
                min: 0.17,
                max: 0.35,
              },
              {
                term: 26,
                min: 0.155,
                max: 0.35,
              },
              {
                term: 27,
                min: 0.14,
                max: 0.35,
              },
              {
                term: 28,
                min: 0.12,
                max: 0.35,
              },
              {
                term: 29,
                min: 0.105,
                max: 0.35,
              },
              {
                term: 30,
                min: 0.09,
                max: 0.3,
              },
              {
                term: 31,
                min: 0.07,
                max: 0.3,
              },
              {
                term: 32,
                min: 0.055,
                max: 0.3,
              },
              {
                term: 33,
                min: 0.04,
                max: 0.3,
              },
              {
                term: 34,
                min: 0.02,
                max: 0.3,
              },
              {
                term: 35,
                min: 0.01,
                max: 0.3,
              },
              {
                term: 36,
                min: 0.005,
                max: 0.25,
              },
              {
                term: 37,
                min: 0.005,
                max: 0.25,
              },
              {
                term: 42,
                min: 0.005,
                max: 0.2,
              },
              {
                term: 48,
                min: 0.005,
                max: 0.15,
              },
              {
                term: 54,
                min: 0.005,
                max: 0.1,
              },
            ],
            residualValueStep: 0.005,
            residualValueDefault: "max",
            interestRates: [
              {
                term: 0,
                value: 0.138,
              },
              {
                term: 26,
                value: 0.13,
              },
              {
                term: 38,
                value: 0.1288,
              },
              {
                term: 50,
                value: 0.1268,
              },
            ],
          },
          comfortLeaseProduct: {
            type: "comfort_lease",
            label: "CL U",
            calculationMode: "brv_based",
            totalAgeLimit: 96,
            downPaymentLimits: {
              min: 0,
              max: 0.35,
              step: 1000,
              default: 0.25,
            },
            termLimits: {
              min: 24,
              max: 60,
              step: 1,
              default: 36,
            },
            annualMileageLimits: {
              min: 10000,
              max: 50000,
              step: 5000,
              default: 15000,
            },
            interestRates: [
              {
                term: 0,
                value: 0.1371,
              },
              {
                term: 26,
                value: 0.1336,
              },
              {
                term: 38,
                value: 0.1345,
              },
              {
                term: 50,
                value: 0.1336,
              },
            ],
            tarRvMod: {
              id: 80030,
              tmdate: "22/02/22",
              accessoryLimit: 0.35,
              rvValue: 0.491,
              brvValue: 0.471,
              rvValueUsed: 0.502,
              brvValueUsed: 0.471,
              carSegmentId: "1",
            },
            tarRvDev: {
              term: 48,
              totalMileage: 17500,
              rvDev: -0.0492,
              rvDevUsed: -0.0492,
            },
          },
          newPrice: 167800,
          optionsPrice: 38500,
          accessoriesPrice: 0,
          transactionalPrice: 149900,
          dealer: {
            id: 11,
            buno: "28966",
            owner: "06",
            ownerName: "Bawaria Motors",
            name: "Bawaria Motors Warszawa",
            legalName: "Bawaria Motors Sp. z o. o.",
            street: "Czerniakowska 47",
            zip: "00-715",
            city: "Warszawa",
            lat: 52.1982843,
            lng: 21.049366,
          },
          created: "2022-03-24T13:00:02+00:00",
          age: 12,
          isYUC: true,
          reserved: false,
          vin17: "WBA11AK0507J40229",
          registration: "2021-06-24T00:00:00+00:00",
          emissionMeasurementStandard: "WLTP",
          panoramas: 0,
          video:
            '<iframe width="200" height="113" src="https://www.youtube.com/embed/BSpuVatUubo?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        result: ``,
      },
      ((last, item) => ({
        last,
        item,
        result: "",
      }))(require("./last_59195"), require("./item_59195")),
      ((last, item) => ({
        last,
        item: { ...item, images: 1 },
        result: ` {
-  images: 13
+  images: 1
 }
`,
      }))(require("./last_55569"), require("./item_55569")),
    ].forEach(({ item, last, result }) =>
      expect(stripAnsi(diffItem(last, item))).toEqual(result)
    ));

  it("updateItem", () =>
    [
      ((last, item) => ({
        last,
        item,
        result: {
          ...last,
          _history: {
            ...last._history,
            "1666626732299": {
              ...item,
              options: last.options,
            },
          },
        },
      }))(require("./last_55569"), require("./item_55569")),
    ].forEach(({ last, item, result }) =>
      expect(updateItem(last, item, 1666626732299)).toEqual(result)
    ));

  it("reduceHistory", () =>
    [
      ((last, reduced) => ({
        last,
        result: reduced._history,
      }))(require("./last_55569"), require("./reduced_55569")),
      ((last, reduced) => ({
        last,
        result: reduced._history,
      }))(require("./last_33500"), require("./reduced_33500")),
    ].forEach(({ last, result }) =>
      expect(reduceHistory(last._history)).toEqual(result)
    ));
});
