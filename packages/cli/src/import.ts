import chunk from "chunk";
import { EMPTY, Subject, from } from "rxjs";
import { expand, filter, map, mergeMap, tap } from "rxjs/operators";
import { z } from "zod";
import {
  GameService,
  HolidaysGrecosService,
  HolidaysTuiService,
  ProductService,
  ProductAltoService,
  ProductCyfroweService,
  ProductEf3mService,
  ProductElectroService,
  ProductEquipService,
  ProductEuroService,
  ProductHifiService,
  ProductMediaService,
  ProductMensaService,
  ProductTourService,
  ProductTousService,
  PromoService,
  PropertyGratkaService,
  PropertyKlikService,
  PropertyOtodomService,
  RatesService,
  QuotesService,
  StationService,
  VehicleService,
  VehicleAudiService,
  VehicleBenzService,
  VehiclePorscheService,
  VehicleVwService,
} from "./services";

// const REGEX = new RegExp(/media/)
// const REGEX = new RegExp(/mensa/);
// const REGEX = new RegExp(/promo:/)
// const REGEX = new RegExp(/equip:/)
// const REGEX = new RegExp(/^((?!promo:).)*$/);
// const REGEX = new RegExp(/get-stations/)
// const REGEX = new RegExp(/^((?!get-product:|get-product-alto:).)*$/);
// const REGEX = new RegExp(/get-product:258829/);
// const REGEX = new RegExp(/get-product-alto:576290/);
// const REGEX = new RegExp(/^(get-product|get-product-alto):/);
let REGEX = new RegExp(/^(.)*$/);

REGEX = new RegExp(/^((?!tui|grecos).)*$/);
// REGEX = new RegExp(/grecos:/)
// REGEX = new RegExp(/rates/)
// REGEX = new RegExp(/^((?!rates).)*$/);
// REGEX = new RegExp(/investments/)
// REGEX = new RegExp(/^((?!investment).)*$/);
// REGEX = new RegExp(/tui:/);
// REGEX = new RegExp(/(bmw-used|bmw-new|mini-new)/)
// REGEX = new RegExp(/^(get-product-electro|get-product-media):/);
// REGEX = new RegExp(/^(get-product)/);
// REGEX = new RegExp(/^(get-product:712247)/);
// REGEX = new RegExp(/^(get-product-alto:1022665)/);
// REGEX = new RegExp(/^(get-product-tophifi:multiroom)/);

enum Types {
  PRODUCT = "get-product",
  CYFROWE = "get-product-cyfrowe",
  TOPHIFI = "get-product-tophifi",
  EF3M = "get-product-ef3m",
  ELECTRO = "get-product-electro",
  EQUIP = "get-product-equip",
  EURO = "get-product-euro",
  MEDIA = "get-product-media",
  MENSA = "get-product-mensa",
  TOUR = "get-product-tour",
  TOUS = "get-product-tous",
  PROMO = "get-promo",
  RATES = "rates",
  TFI = "investments",
  TUI = "tui",
  ALTO = "get-product-alto",
  STATION = "get-stations",
  GRATKA = "gratka",
  GRECOS = "grecos",
  KLIK = "klik",
  BENZ = "mercedes-benz",
  BMW = "najlepszeoferty.bmw.pl",
  OTODOM = "otodom",
  PORSCHE = "porsche",
  AUDI = "scs.audi.de",
  VW = "vw",
  XBOX = "xbox",
}

const SERVICES = {
  [Types.PRODUCT]: ProductService,
  [Types.CYFROWE]: ProductCyfroweService,
  [Types.TOPHIFI]: ProductHifiService,
  [Types.EF3M]: ProductEf3mService,
  [Types.ELECTRO]: ProductElectroService,
  [Types.EQUIP]: ProductEquipService,
  [Types.EURO]: ProductEuroService,
  [Types.MEDIA]: ProductMediaService,
  [Types.MENSA]: ProductMensaService,
  [Types.TOUR]: ProductTourService,
  [Types.TOUS]: ProductTousService,
  [Types.PROMO]: PromoService,
  [Types.RATES]: RatesService,
  [Types.TFI]: QuotesService,
  [Types.TUI]: HolidaysTuiService,
  [Types.ALTO]: ProductAltoService,
  [Types.STATION]: StationService,
  [Types.GRATKA]: PropertyGratkaService,
  [Types.GRECOS]: HolidaysGrecosService,
  [Types.KLIK]: PropertyKlikService,
  [Types.BENZ]: VehicleBenzService,
  [Types.BMW]: VehicleService,
  [Types.OTODOM]: PropertyOtodomService,
  [Types.PORSCHE]: VehiclePorscheService,
  [Types.AUDI]: VehicleAudiService,
  [Types.VW]: VehicleVwService,
  [Types.XBOX]: GameService,
};

export default function (type?: string) {
  if (type) {
    console.log({ type });
  }

  const summary = {
    created: [],
    checked: [],
    updated: [],
    request: {},
  };

  const request = ({ type, args }: { type: string; args?: object }) =>
    z
      .nativeEnum(Types)
      .parseAsync(type.split(":")[0])
      .then((type) => SERVICES[type])
      .then((Service) => new Service({ summary }))
      .then((service) => {
        console.log(type);
        return service.request(type, args);
      });

  const request$ = new Subject<{ type: string; args?: object }>();
  request$
    .pipe(
      filter(
        ({ type }) =>
          Boolean(type.match(REGEX)) && (Boolean(console.log({ type })) || true)
      ),
      mergeMap(
        ({ type, args }) =>
          from(request({ type, args })).pipe(
            // tap(({ type, list, next }) =>
            //   console.log(["tap"], { type, list, next })
            // ),
            expand(({ type, next }) =>
              // Boolean(console.log(["expand"], { type, next })) ||
              next ? from(request({ type, args: next })) : EMPTY
            ),
            map(({ type, list }) => ({ type, list }))
          ),
        1
      ),
      mergeMap(
        ({ type, list }) =>
          from(list).pipe(
            // tap((item) => console.log([type, item.id, item.title])),
            mergeMap(
              (item) =>
                from(
                  z
                    .nativeEnum(Types)
                    .parseAsync(type.split(":")[0])
                    .then((type) => SERVICES[type])
                    .then((Service) => new Service({ summary }))
                    .then((service) => service.process(item))
                ),
              1
            )
          ),
        1
      )
    )
    .subscribe({
      // next: (item) => {
      //   console.log({item});
      // },
      complete: () => {
        console.log(summary);
      },
    });

  from(
    type
      ? [type]
      : ["bmw-new", "bmw-used", "mini-new"].map(
          (name) => `${Types.BMW}:${name}`
        )
  ).subscribe((type) => {
    request$.next({ type });
  });

  from(type ? [] : [Types.RATES]).subscribe((type) => {
    request$.next({ type });
  });

  from(
    type
      ? []
      : [
          2, 4, 5, 6, 8,
          // 10,
          30, 33, 34, 35, 36, 37, 43, 44, 73, 74, 75, 77, 79, 80, 82, 84, 91,
          103, 104, 105, 106, 107, 112, 113, 114, 117, 119,
        ].map((investment_id) => `${Types.TFI}:${investment_id}`)
  ).subscribe((type) => {
    request$.next({ type });
  });

  from(
    type
      ? []
      : [
          "grecos:LoadMoreOffers?PriceFrom=0&PriceTo=50000&Adults=2&Children=3&Child1=20070711&Child2=20121021&Child3=20160103&DurationInterval=10:13&DateOfDeparture=20220708&DateOfReturn=20220801&From=WAW",
          "grecos:LoadMoreOffers?PriceFrom=0&PriceTo=50000&Adults=2&Children=3&Child1=20070711&Child2=20121021&Child3=20160103&DurationInterval=6:9&DateOfDeparture=20220708&DateOfReturn=20220801&From=WAW",
          "grecos:LoadMoreOffers?PriceFrom=0&PriceTo=50000&Adults=2&Children=2&Child1=20100413&Child2=20121213&DurationInterval=10:13&DateOfDeparture=20220708&DateOfReturn=20220801&From=WAW",
          "grecos:LoadMoreOffers?PriceFrom=0&PriceTo=50000&Adults=2&Children=2&Child1=20100413&Child2=20121213&DurationInterval=6:9&DateOfDeparture=20220708&DateOfReturn=20220801&From=WAW",
          "tui:offers?durationFrom=6&durationTo=8&numberOfAdults=2&childrenBirthdays=13.04.2010:13.12.2012",
          "tui:offers?durationFrom=6&durationTo=8&numberOfAdults=2&childrenBirthdays=11.07.2007:21.10.2012:03.01.2016",
        ]
  ).subscribe((type) => {
    request$.next({ type });
  });

  from(
    type
      ? []
      : [
          // "gratka:nieruchomosci/domy/warszawa",
          "gratka:nieruchomosci/domy/komorow-34074",
          "gratka:nieruchomosci/domy/ozarow-mazowiecki",
          "gratka:nieruchomosci/domy/podkowa-lesna",
          "gratka:nieruchomosci/domy/stare-babice",
          "gratka:nieruchomosci/domy/warszawa/powsin",
          "gratka:nieruchomosci/domy/warszawa/powsinek",
          "gratka:nieruchomosci/domy/warszawa/radosc",
          "gratka:nieruchomosci/domy/warszawa/sadyba",
          "gratka:nieruchomosci/domy/warszawa/ursynow",
          "gratka:nieruchomosci/domy/warszawa/wawer",
          "gratka:nieruchomosci/domy/warszawa/wilanow",
          "gratka:nieruchomosci/dzialki-grunty/budowlana/komorow-34074",
          "gratka:nieruchomosci/dzialki-grunty/budowlana/ozarow-mazowiecki",
          "gratka:nieruchomosci/dzialki-grunty/budowlana/podkowa-lesna",
          "gratka:nieruchomosci/dzialki-grunty/budowlana/stare-babice",
          "gratka:nieruchomosci/dzialki-grunty/budowlana/warszawa/powsin",
          "gratka:nieruchomosci/dzialki-grunty/budowlana/warszawa/radosc",
          "gratka:nieruchomosci/dzialki-grunty/budowlana/warszawa/sadyba",
          "gratka:nieruchomosci/dzialki-grunty/budowlana/warszawa/ursynów",
          "gratka:nieruchomosci/dzialki-grunty/budowlana/warszawa/wawer",
          "gratka:nieruchomosci/dzialki-grunty/budowlana/warszawa/wilanow",
          // "gratka:nieruchomosci/komorow-34074",
          // "gratka:nieruchomosci/ozarow-mazowiecki",
          // "gratka:nieruchomosci/podkowa-lesna",
          // "gratka:nieruchomosci/stare-babice",
          // "gratka:nieruchomosci/warszawa/powsin",
          // "gratka:nieruchomosci/warszawa/sadyba",
          // "gratka:nieruchomosci/warszawa/ursynow",
          // "gratka:nieruchomosci/warszawa/wilanow",
          "klik:1:4",
          "klik:1:2",
          // "klik:2:1",
          "otodom:dom/komorow_5600",
          "otodom:dom/stare-babice",
          "otodom:dom/warszawa/mlociny",
          "otodom:dom/warszawa/powsin",
          "otodom:dom/warszawa/powsinek",
          "otodom:dom/warszawa/radosc",
          "otodom:dom/warszawa/sadyba",
          "otodom:dom/warszawa/ursynow",
          "otodom:dom/warszawa/wawer",
          "otodom:dom/warszawa/wilanow",
          "otodom:dzialka/komorow_5600",
          "otodom:dzialka/stare-babice",
          "otodom:dzialka/warszawa/mlociny",
          "otodom:dzialka/warszawa/powsin",
          "otodom:dzialka/warszawa/powsinek",
          "otodom:dzialka/warszawa/radosc",
          "otodom:dzialka/warszawa/sadyba",
          "otodom:dzialka/warszawa/ursynow",
          "otodom:dzialka/warszawa/wawer",
          "otodom:dzialka/warszawa/wilanow",
        ]
  ).subscribe((type) => {
    request$.next({ type });
  });

  from(
    type
      ? []
      : chunk(
          [
            "9NKX70BBCDRN",
            "9Z1W36CRQ9DF",
            "B4X7PC56X1VV",
            "9MTLKM2DJMZ2",
            "C08JXNK0VG5L",
            "9N9J38LPVSM3",
            "9P6SRW1HVW9K",
            "BVH2R2SBWL51",
            "9PNJXVCVWD4K",
            "9MZ0SR207MG8",
            "9P4SH7HLMLFS",
            "9N1CS194W1Q6",
            "9P1HX37NMJLT",
            "BRZZLBF5T245",
            "9P513P4MWC71",
            "C2MBDNDS3H5W",
            "BWVBNCMF22ZK",
            "9N6J02VPG635",
            "BS5RXLL3WQ2J",
            "C2HQVXVVLMKG",
            "BVJLKDG2TX8H",
            "C4VKLMG1HLZW",
            "9N04KQK2LBZL",
            "9NMBJQ0265ZK",
            "BSMZH25V6V46",
            "9N9QFGPBH418",
            "9NS86BQ33SPX",
            "9NXPBSMHPLTV",
            "9N8VG0B7TDZ0",
            "9PH3RR8MVFJL",
            "9NM0CRXJ389D",
            "BNNMLWZRNQF6",
            "9P778MQ2JPKC",
            "9NH5HN11FG4M",
            "C348248BJZCQ",
            "9PGPQK0XTHRZ",
          ],
          5
        ).map((names) => `${Types.XBOX}:${names.join(",")}`)
  ).subscribe((type) => {
    request$.next({ type });
  });

  from(
    type
      ? []
      : [
          "get-product-tophifi:multiroom/audio-pro/audio-pro-a26",
          "get-product-tophifi:multiroom/audio-pro/audio-pro-a36",
          "get-product-tophifi:multiroom/musiccast/yamaha-musiccast-wxc-50",
          "get-product-tophifi:multiroom/musiccast/yamaha-musiccast-r-n402d",
          "get-product-tophifi:multiroom/musiccast/yamaha-r-n303d",
          "get-product-tophifi:multiroom/musiccast/yamaha-r-n602-czarny",
          "get-product-tophifi:multiroom/musiccast/yamaha-r-n803d",
          "get-product-tophifi:multiroom/musiccast/yamaha-musiccast-20",
          "get-product-tophifi:stereo/odtwarzacze-sieciowe/bluesound-powernode-2021",
          "get-product-tophifi:stereo/bezprzewodowe-zestawy-stereo/zestaw-stereo-2x-yamaha-musiccast-129",
          "get-product-tophifi:stereo/zestawy-stereo/zestaw-stereo-yamaha-r-n602-bowers-wilkins-606-s2",
          "get-product-tophifi:stereo/zestawy-stereo/zestaw-stereo-yamaha-r-n803d-bowers-and-wilkins-603-s2-anniversary-edition",
          "get-product-tophifi:stereo/zestawy-stereo/zestaw-stereo-yamaha-r-n803d-bowers-and-wilkins-606-s2-anniversary-edition",
          "get-product-tophifi:stereo/wzmacniacze-zintegrowane/nad-c328",
          "get-product-tophifi:stereo/wzmacniacze-zintegrowane/c338",
          "get-product-tophifi:stereo/wzmacniacze-zintegrowane/c368",
          "get-product-tophifi:stereo/wzmacniacze-zintegrowane/c388",
          "get-product-tophifi:stereo/wzmacniacze-zintegrowane/hegel-h95",
          "get-product-tophifi:stereo/wzmacniacze-zintegrowane/hegel-h120-czarny",
          "get-product-tophifi:stereo/wzmacniacze-zintegrowane/hegel-h190-czarny",
          "get-product-tophifi:stereo/zestawy-stereo/zestaw-hegel-h95-bowers-wilkins-706-s2",
          "get-product-tophifi:stereo/zestawy-stereo/zestaw-hegel-h95-bowers-wilkins-603-s2-anniversary-edition",
          "get-product-tophifi:glosniki/glosniki-instalacyjne/ccm-362",
          "get-product-tophifi:glosniki/glosniki-instalacyjne/ccm664sr",
          "get-product-tophifi:glosniki/podstawki-glosnikowe/bowers-wilkins-stav24-s2",
          "get-product-tophifi:sluchawki/sluchawki-z-redukcja-szumow/bowers-wilkins-px5-space-grey",
          "get-product-tophifi:sluchawki/sluchawki-z-redukcja-szumow/bowers-wilkins-px7-carbon-edition",
          "get-product-tophifi:sluchawki/sluchawki-z-redukcja-szumow/bowers-wilkins-px7-space-grey",
          "get-product-tophifi:glosniki/glosniki-podlogowe/bowers-wilkins-603-s2-anniversary-edition",
          "get-product-tophifi:glosniki/glosniki-podlogowe/bowers-wilkins-702-s2-rosenut",
          "get-product-tophifi:glosniki/glosniki-podlogowe/bowers-wilkins-703-s2-rosenut",
          "get-product-tophifi:glosniki/glosniki-podlogowe/bowers-wilkins-704-s2-rosenut",
          "get-product-tophifi:glosniki/glosniki-podlogowe/bowers-wilkins-704-s2-czarny-polysk",
          "get-product-tophifi:glosniki/glosniki-podstawkowe/bowers-wilkins-606-s2-anniversary-edition",
          "get-product-tophifi:glosniki/glosniki-podstawkowe/bowers-wilkins-607-s2-anniversary-edition",
          "get-product-tophifi:glosniki/glosniki-podstawkowe/bowers-wilkins-705-s2-rosenut",
          "get-product-tophifi:glosniki/glosniki-podstawkowe/bowers-wilkins-706-s2-czarny-polysk",
          "get-product-tophifi:glosniki/glosniki-podstawkowe/bowers-wilkins-707-s2-czarny-polysk",
          "get-product-tophifi:glosniki/subwoofery/bowers-wilkins-seria-600-asw608",
          "get-product-tophifi:gramofony/gramofony/at-lp120x-czarny",
          "get-product-tophifi:gramofony/gramofony/audio-technica-at-lp5x",
          "get-product-tophifi:gramofony/gramofony/audio-technica-at-lp120xbt-usb",
          "get-product-cyfrowe:aparat-cyfrowy-canon-eos-m50-ii-czarny-i-ob-15-45-f35-63-p",
          "get-product-cyfrowe:aparat-cyfrowy-canon-eos-m50-ii-czarny-p",
          "get-product-cyfrowe:aparat-cyfrowy-canon-eos-m6-mark-iisprawdz-promocje-p",
          // "get-product-cyfrowe:aparat-cyfrowy-canon-eos-m6-mark-ii-i-ef-m-22-mm-f-20-stm-p",
          // "get-product-cyfrowe:aparat-cyfrowy-canon-eos-m6-mark-ii-i-ef-m-32mm-f-14-stm-p",
          "get-product-cyfrowe:aparaty/obiektyw-canon-ef-m-18-150-mm-f-35-63-is-stm-czarny",
          "get-product-cyfrowe:obiektyw-canon-32-mm-f-14-stm-p",
          "get-product-cyfrowe:aparaty/obiektyw-canon-ef-m-55-200mm-f-45-63-is-stm",
          "get-product-cyfrowe:aparaty/obiektyw-canon-22-mm-f-20-ef-m-stm",
          "get-product-cyfrowe:obiektyw-sigma-c-16-mm-f-14-dc-dn-eos-m-p",
          "get-product-cyfrowe:rode-statyw-do-mikrofonu-psa1-p",
          "get-product-cyfrowe:rode-przeciwwietrzna-deadcat-ws11-do-ntg-p",
          "get-product-cyfrowe:kabel-rode-kabel-sc15-usb-c-na-ios-p",
          "get-product-cyfrowe:kamery/rode-smartlavi",
          "get-product-cyfrowe:dji-om-4-se-osmo-mobile-4-se-p",
          "get-product-cyfrowe:dji-ronin-sc-stabilizator-gimbal-p",
          "get-product-cyfrowe:dji-stabilizator-ronin-sc-2-p",
          "get-product-cyfrowe:dron-dji-mini-2-polska-dystrybucja-p",
          "get-product-cyfrowe:dron-dji-mini-2-fly-more-combo-polska-dystrybucja-p",
          "get-product-cyfrowe:aparat-cyfrowy-panasonic-lumix-dc-s5-body-p",
          "get-product-cyfrowe:kamera-cyfrowa-canon-eos-c70-p",
          "get-product-cyfrowe:kamera-sportowa-gopro-hero8-black-polska-dystrybucja-p",
          // "get-product-cyfrowe:plecak-manfrotto-advanced2-befree-p",
          "get-product-cyfrowe:plecak-manfrotto-advanced-2-active-p",
          // "get-product-cyfrowe:plecak-manfrotto-advanced-2-travel-m-p",
          "get-product-cyfrowe:plecak-manfrotto-advanced-iii-active-p",
          // "get-product-cyfrowe:aparaty/plecak-manfrotto-next-szary",
          "get-product-cyfrowe:plecak-lowepro-flipside-300-aw-iii-czarny-p",
          "get-product-cyfrowe:rhino-slider-rov-pro-traveler-p",
          "get-product-cyfrowe:rhino-slider-rhino-rov-pro-everyday-i-backpack-bundle-p",
          "get-product-cyfrowe:filmowanie/edelkrone-sterownik-motion-module",
          "get-product-cyfrowe:filmowanie/lampa-led-yongnuo-yn-360",
          "get-product-cyfrowe:kamery/edelkrone-pokrowiec-na-sliderplus-small",
          "get-product-cyfrowe:aparaty/-dr-e12-zasilacz-do-eos-m",
          "get-product-cyfrowe:wyposazenie-studia/tlo-materialowe-glareone-tlo-fotograficzne-150x200-cm-zielono-niebieskie",
          "get-product-cyfrowe:atomos-connect-2-usb-4k-video-audio-p",
          "get-product-cyfrowe:karta-pamieci-sandisk-sdxc-extreme-pro-64gb-170mb-s-v30-uhs-i-u3-p",
          "get-product-cyfrowe:karta-pamieci-sandisk-sdxc-extreme-pro-128gb-170mb-s-v30-uhs-i-u3-p",
          "get-product:681208-tablet-8-apple-new-ipad-mini-64gb-wi-fi-purple",
          "get-product:681208-tablet-8-apple-new-ipad-mini-64gb-wi-fi-purple",
          "get-product:681208-tablet-8-apple-new-ipad-mini-64gb-wi-fi-purple",
          "get-product:681280-etui-na-tablet-apple-etui-smart-folio-ipada-mini-6gen-angielska-lawenda",
          "get-product:681284-etui-na-tablet-apple-etui-smart-folio-ipada-mini-6gen-czarny",
          "get-product:460088-rysik-do-tabletu-apple-pencil-2-do-ipad-pro",
          "get-product:392666-rysik-do-tabletu-apple-pencil-tips",
          "get-product:487902-pasek-bransoletka-apple-bransoleta-mediolanska-do-apple-watch-srebrny",
          "get-product:464941-smartwatch-apple-watch-3-38-space-gray-aluminium-blacksport-gps",
          "get-product:516123-smartwatch-apple-watch-3-42-space-gray-black-sport-gps",
          "get-product:547094-smartwatch-lte-apple-watch-5-44-space-grey-steel-black-loop-lte",
          "get-product:593143-smartwatch-lte-apple-watch-6-40-silver-steel-silver-loop-lte",
          "get-product:682156-smartwatch-apple-watch-se-40-gold-aluminium-starlight-sport-gps",
          "get-product:682191-smartwatch-lte-apple-watch-se-40-gold-aluminium-starlight-sport-lte",
          "get-product:686491-smartwatch-lte-apple-watch-7-41-silver-steel-silver-loop-lte",
          "get-product:686476-smartwatch-lte-apple-watch-7-45-silver-steel-silver-loop-lte",
          "get-product:681152-smartfon-telefon-apple-iphone-13-128gb-midnight",
          "get-product:592143-smartfon-telefon-apple-iphone-12-64gb-black-5g",
          "get-product:681136-smartfon-telefon-apple-iphone-13-mini-128gb-midnight",
          "get-product:592124-smartfon-telefon-apple-iphone-12-mini-64gb-black-5g",
          "get-product:602826-smartfon-telefon-apple-iphone-11-64gb-black",
          "get-product:602851-smartfon-telefon-apple-iphone-se-64gb-black",
          "get-product:569882-sluchawki-bezprzewodowe-apple-beats-studio3-szarosc-nocy",
          "get-product:569886-sluchawki-bezprzewodowe-apple-beats-studio3-czarne-matowe",
          "get-product:490938-sluchawki-true-wireless-apple-airpods-2-generacji",
          "get-product:690349-sluchawki-true-wireless-apple-airpods-3-generacji",
          "get-product:258829-sluchawki-przewodowe-akg-k612pro-czarne",
          "get-product:602404-sluchawki-bezprzewodowe-microsoft-surface-headphones-2-matowy-czarny",
          "get-product:567454-etui-obudowa-na-smartfona-apple-silicone-case-do-iphone-7-8-se-czarny",
          "get-product:567455-etui-obudowa-na-smartfona-apple-silicone-case-do-iphone-7-8-se-piaskowy-roz",
          "get-product:567460-etui-obudowa-na-smartfona-apple-leather-case-do-iphone-7-8-se-nocny-blekit",
          "get-product:567459-etui-obudowa-na-smartfona-apple-leather-case-do-iphone-7-8-se-czarny",
          "get-product:530119-statyw-rode-psa1-studio-arm",
          "get-product:563133-dysk-ssd-kingston-1tb-m2-pcie-nvme-kc2500",
          "get-product:555076-kamera-ip-dahua-lite-hfw2231t-27-135mm-2mp-ir60-ip67-poe-ivs",
          "get-product:583534-hulajnoga-elektryczna-xiaomi-mi-electric-scooter-essential",
          "get-product:583538-hulajnoga-elektryczna-xiaomi-mi-electric-scooter-1s",
          "get-product:715382-aparat-natychmiastowy-polaroid-go-white",
          "get-product:715385-aparat-natychmiastowy-polaroid-go-e-box-white",
          "get-product:1058365-aparat-natychmiastowy-polaroid-go-black",
          "get-product:506925-drukarka-laserowa-hp-laser-107a-usb-monochromatycza",
          "get-product:480763-glosnik-przenosny-marshall-acton-ii-czarny",
          "get-product:669205-glosnik-przenosny-marshall-emberton-czarno-miedziany",
          "get-product:691047-inteligentny-sterownik-blebox-switchboxd-2x-przekaznik-230v-wifi",
          "get-product:691123-inteligentny-sterownik-blebox-switchbox-light-przekaznik-230v-wifi",
          "get-product:461257-kabel-hdmi-silver-monkey-kabel-hdmi-20-hdmi-15m",
          "get-product:567545-kabel-displayport-silver-monkey-kabel-mini-displayport-displayport-2m",
          "get-product:536252-obudowa-dysku-silver-monkey-obudowa-do-dysku-m2-nvme-usb-c",
          "get-product:699487-kamera-internetowa-ipevo-mirror-cam",
          "get-product:699483-kamera-internetowa-ipevo-uplift",
          "get-product:699484-kamera-internetowa-ipevo-v4k",
          "get-product:699485-kamera-internetowa-ipevo-do-cam-gray",
          "get-product:557079-listwa-zasilajaca-apc-essential-surgearrest-5-gniazd-2xusb-24a-18m",
          "get-product:583812-listwa-zasilajaca-apc-essential-surgearrest-1-gniazdo-2x-usb",
          "get-product:670611-inteligentny-glosnik-google-nest-hub-2-czarny",
          "get-product:712782-centralka-zestaw-google-nest-hub-max-szary",
          "get-product:712984-centralka-zestaw-amazon-echo-show-8-sandstone",
          "get-product:640845-wideorejestrator-xblitz-s5-duo-full-hd-245-120",
          "get-product:489051-wideorejestrator-mio-mivue-c570-fullhd-150-2",
          "get-product:186950-akcesorium-sieciowe-ubiquiti-zasilacz-poe-24v-24w-1a",
          "get-product:179200-stacja-pogodowa-netatmo-weather-station-modul-wewnetrzny-i-zewnetrzny",
          "get-product:389607-sterowanie-ogrzewaniem-netatmo-valve-dodatkowa-glowica-termostatyczna",
          "get-product:389610-sterowanie-ogrzewaniem-netatmo-valves-set-2-glowice-termostatyczne-przekaznik",
          "get-product:518556-sterowanie-ogrzewaniem-netatmo-zestaw-thermostat-3x-valves",
          "get-product:522728-sterowanie-ogrzewaniem-netatmo-3x-valves-zestaw-3-dodatkowych-glowic-termostat",
          "get-product:598919-czujnik-xiaomi-mi-temperature-and-humidity-monitor-2-bluetooth",
          "get-product:622780-czujnik-aqara-czujnik-temperatury",
          "get-product:689489-czujnik-sonoff-czujnik-temperatury-i-wilgotnosci-zigbee-snzb-02",
          "get-product:691074-czujnik-blebox-tempsensor-czujnik-temperatury-wifi",
          "get-product:506724-stabilizator-do-aparatu-dji-ronin-sc",
          "get-product:598908-stabilizator-do-aparatu-dji-rsc-2-ronin-sc2",
          "get-product:598909-stabilizator-do-aparatu-dji-rsc-2-pro-combo-ronin-sc2-pro-combo",
          "get-product:603420-dron-dji-mini-2",
          "get-product:603422-dron-dji-mini-2-fly-more-combo",
          "get-product:645129-dron-dji-air-2s-mavic-air-2s",
          "get-product:679314-gimbal-dji-om-5-osmo-mobile-5",
          "get-product:684658-gimbal-dji-om-4-se-osmo-mobile-4-se",
          "get-product:697901-dron-dji-mini-se",
          "get-product:697900-dron-dji-mini-se-fly-more-combo",
          "get-product:691906-kamera-sportowa-dji-action-2-dual-screen-combo",
          "get-product:691908-kamera-sportowa-dji-action-2-power-combo",
          "get-product:445840-akcesorium-do-streamingu-elgato-stream-deck",
          "get-product:445847-akcesorium-do-streamingu-elgato-stream-deck-mini",
          "get-product:466357-akcesorium-do-streamingu-elgato-cam-link-4k-hdmi-camera-connector",
          "get-product:517582-tlo-fotograficzne-elgato-green-screen-mt",
          "get-product:668973-statyw-do-mikrofonu-elgato-wave-mic-arm-low-profile",
          "get-product:668974-statyw-do-mikrofonu-elgato-wave-mic-arm-high-rise",
          "get-product:668984-akcesorium-do-streamingu-elgato-stream-deck-mk2",
          "get-product:408363-kontroler-unitek-mostek-usb-30-do-sata-iii-6-gbps",
          "get-product:247090-akumulator-uniwersalny-panasonic-eneloop-pro-r6-aa-2500-mah-4-sztuki",
          "get-product:293301-akumulator-uniwersalny-panasonic-eneloop-pro-r6-aa-2500-mah-2-szt-blister",
          "get-product:293346-akumulator-uniwersalny-panasonic-eneloop-pro-r03-aaa-930mah-2-szt-blister",
          "get-product:704653-akumulator-uniwersalny-panasonic-eneloop-pro-r03-aaa-930mah-4-szt-sliding-pack",
          "get-product:431123-pendrive-pamiec-usb-sandisk-16gb-ultra-fit-usb-31-130mb-s",
          "get-product:431125-pendrive-pamiec-usb-sandisk-32gb-ultra-fit-usb-31-130mb-s",
          "get-product:635440-pendrive-pamiec-usb-lexar-256gb-jumpdrive-s47-usb-31-250mb-s",
          "get-product:635439-pendrive-pamiec-usb-lexar-128gb-jumpdrive-s47-usb-31-250mb-s",
          "get-product:635437-pendrive-pamiec-usb-lexar-64gb-jumpdrive-s47-usb-31-250mb-s",
          "get-product:712234-stacja-zasilania-ecoflow-stacja-zasilania-river-mini-210wh-indukcja-15w",
          "get-product:712247-akcesorium-do-stacji-zasilania-ecoflow-panel-fotowoltaiczny-110w",
          "get-product:729080-stacja-zasilania-ecoflow-stacja-zasilania-river-mini-210wh",
          "get-product:221122-zasilacz-awaryjny-ups-apc-back-ups-500va-300w-3xiec-avr",
          "get-product:592552-zasilacz-awaryjny-ups-apc-back-ups-750va-410w-4x-schuko-usb-avr",
          "get-product:539756-zasilacz-awaryjny-ups-apc-easy-ups-500va-300w-4x-schuko-avr",
          "get-product:701633-zasilacz-awaryjny-ups-apc-easy-ups-700va-360w-2x-schuko-avr",
          "get-product:701708-zasilacz-awaryjny-ups-apc-be325-fr-325va-185w-4xfr-rj-45",
          "get-product-alto:1022665-klocki-lego-lego-technic-42128-ciezki-samochod-pomocy-drogowej",
          "get-product-alto:576290-klocki-lego-lego-technic-42115-lamborghini-sian-fkp-37",
          "get-product-alto:467576-klocki-lego-lego-technic-42096-porsche-911-rsr",
          "get-product-alto:436955-klocki-lego-lego-technic-42083-bugatti-chiron",
          "get-product-alto:1012754-klocki-lego-lego-technic-42125-ferrari-488-gte-af-corse-51",
          "get-product-alto:532359-klocki-lego-lego-technic-42109-auto-wyscigowe-top-gear",
          // "get-product-alto:608398-robot-lego-mindstorms-wynalazca-robotow",
          "get-product-alto:558550-robot-sprzatajacy-xiaomi-mi-robot-vacuum-mop-pro-white",
          "get-product-alto:1010924-robot-sprzatajacy-xiaomi-mi-robot-vacuum-mop-essential",
          "get-product-alto:1011153-oczyszczacz-powietrza-xiaomi-mi-air-purifier-pro-h",
          "get-product-alto:1017784-urzadzenie-do-dezynfekcji-rak-xiaomi-mi-automatic-foaming-soap-dispenser",
          "get-product-alto:1014810-urzadzenie-kosmetyczne-inface-ultrasonic-ion-cleansing-instrument-bialy",
          "get-product-alto:1014811-urzadzenie-kosmetyczne-inface-ultrasonic-ion-cleansing-instrument-kolor-czarny",
          "get-product-alto:1014825-urzadzenie-kosmetyczne-inface-ultrasonic-ion-cleansing-instrument-kolor-rozowy",
          "get-product-alto:1014807-urzadzenie-kosmetyczne-inface-sonic-facial-device-pro-czerwony",
          "get-product-alto:1014809-urzadzenie-kosmetyczne-inface-sonic-facial-device-pro-niebieski",
          "get-product-alto:562805-klocki-lego-lego-technic-42107-ducati-panigale-v4-r",
          "get-product-alto:1021493-klocki-lego-lego-creator-10295-porsche-911",
          "get-product-alto:1012734-klocki-lego-lego-technic-42122-jeep-wrangler",
          "get-product-alto:519805-klocki-lego-lego-technic-42110-land-rover-defender",
          "get-product-alto:504830-klocki-lego-lego-creator-10265-ford-mustang",
          "get-product-alto:436955-klocki-lego-lego-technic-42083-bugatti-chiron",
          "get-product-alto:576173-wentylator-smartmi-fan-2s",
          "get-product-alto:1017724-wentylator-xiaomi-mi-smart-standing-fan-1c-2-lite",
          "get-product-alto:1023158-wentylator-xiaomi-mi-smart-standing-fan-2-white",
          "get-product-alto:1023160-wentylator-xiaomi-mi-smart-standing-fan-pro-white",
          "get-product:473070-etui-na-laptopa-apple-skorzany-futeral-na-macbook-pro-air-13-czarny",
          "get-product:584249-etui-na-laptopa-apple-skorzany-futeral-na-macbook-pro-air-13-braz",
          "get-product:631749-etui-na-laptopa-apple-skorzany-futeral-na-macbook-pro-air-13-blekit",
          "get-product:622284-notebook-laptop-133-apple-macbook-air-m1-8gb-256-mac-os-gold-us",
          "get-product:606019-notebook-laptop-133-apple-macbook-air-m1-8gb-256-mac-os-space-gray",
          "get-product:606366-notebook-laptop-133-apple-macbook-air-m1-16gb-512-mac-os-space-gray",
          "get-product:606369-notebook-laptop-133-apple-macbook-air-m1-16gb-1tb-mac-os-space-gray",
          "get-product:606027-notebook-laptop-133-apple-macbook-pro-m1-8gb-256-mac-os-space-gray",
          "get-product:606377-notebook-laptop-133-apple-macbook-pro-m1-16gb-512-mac-os-space-gray",
          "get-product:606383-notebook-laptop-133-apple-macbook-pro-m1-16gb-1tb-mac-os-space-gray",
          "get-product:692730-notebook-laptop-140-apple-macbook-pro-m1-pro-16gb-512-mac-os-space-gray",
          "get-product:690347-notebook-laptop-140-apple-macbook-pro-m1-pro-16gb-512-mac-os-space-gray",
          "get-product:690350-notebook-laptop-140-apple-macbook-pro-m1-pro-16gb-1tb-mac-os-space-gray",
          "get-product:690352-notebook-laptop-140-apple-macbook-pro-m1-max-32gb-1tb-mac-os-space-gray",
          "get-product:690352-notebook-laptop-140-apple-macbook-pro-m1-max-32gb-1tb-mac-os-space-gray",
          "get-product:690353-notebook-laptop-140-apple-macbook-pro-m1-max-32gb-1tb-mac-os-space-gray",
          "get-product:648851-etui-na-tablet-apple-smart-folio-ipada-pro-11-3-gen-granat",
          "get-product:555272-klawiatura-do-tabletu-apple-smart-keyboard-folio-ipad-pro-11-3gen-air-4gen",
          "get-product:555273-klawiatura-do-tabletu-apple-magic-keyboard-ipad-pro-11air-4gen-czarny",
          "get-product:592404-tablet-10-apple-ipad-air-109-256gb-wi-fi-space-gray",
          "get-product:553107-tablety-11-apple-2020-ipad-pro-11-1-tb-wi-fi-space-gray",
          "get-product:648721-tablety-11-apple-ipad-pro-11-m1-128-gb-wi-fi-space-gray",
          "get-product:648729-tablety-11-apple-ipad-pro-11-m1-1-tb-wi-fi-space-gray",
          "get-product:116312-toner-do-drukarki-samsung-clt-y406s-yellow-1000str",
          "get-product:116313-toner-do-drukarki-samsung-clt-k406s-black-1500str",
          "get-product:116315-toner-do-drukarki-samsung-clt-c406s-cyan-1000str",
          "get-product:127128-beben-do-drukarki-samsung-clt-r406-black-16000-zadan-beben",
          "get-product:507439-toner-do-drukarki-hp-106a-black-1000str",
          "get-product:596369-joystick-thrustmaster-tca-quadrant-airbus-edition",
          "get-product:652301-sluchawki-przewodowe-thrustmaster-gaming-tracing-scuderia-ferrari-dts",
          "get-product:681593-sluchawki-do-konsoli-microsoft-xsx-stereo-headset-przewodowe",
          "get-product:696872-joystick-thrustmaster-tca-yoke-pack-boeing-edition",
          "get-product:696874-joystick-thrustmaster-tca-quadrant-boeing-edition",
          "get-product:547367-monitor-led-32-i-wiekszy-dell-u4320q-czarny",
          "get-product:645085-monitor-led-32-i-wiekszy-dell-u3821dw-czarno-srebrny",
          "get-product:648255-monitor-led-32-i-wiekszy-dell-u4021qw",
          "get-product:648872-all-in-one-apple-imac-24-m1-8gb-256-macos-retina-45k-silver",
          "get-product:648883-all-in-one-apple-imac-24-m1-8gb-256-macos-retina-45k-silver",
          "get-product:656048-all-in-one-apple-imac-24-m1-16gb-256-macos-retina-45k-silver",
          "get-product:656052-all-in-one-apple-imac-24-m1-16gb-512-macos-retina-45k-silver",
          "get-product:334197-przejsciowka-unitek-adapter-usb-c-usb-31-otg",
          "get-product:646480-dysk-ssd-kingston-1tb-m2-pcie-nvme-nv1",
          "get-product:691100-dysk-ssd-kingston-1tb-m2-pcie-gen4-nvme-kc3000",
          "get-product:442513-dysk-ssd-samsung-1tb-m2-pcie-nvme-970-pro",
          "get-product:477776-dysk-ssd-samsung-1tb-m2-pcie-nvme-970-evo-plus",
          "get-product:593198-dysk-ssd-samsung-1tb-m2-pcie-gen4-nvme-980-pro",
          "get-product:634238-dysk-ssd-samsung-1tb-m2-pcie-nvme-980",
          "get-product:623728-dysk-ssd-samsung-1tb-25-sata-ssd-870-evo",
          "get-product:578860-dysk-ssd-samsung-1tb-25-sata-ssd-870-qvo",
          "get-product:578861-dysk-ssd-samsung-2tb-25-sata-ssd-870-qvo",
          "get-product:562878-dysk-zewnetrzny-ssd-samsung-portable-ssd-t7-500gb-usb-32-gen-2-szary",
          "get-product:562883-dysk-zewnetrzny-ssd-samsung-portable-ssd-t7-1tb-usb-32-gen-2-szary",
          "get-product:729819-dysk-zewnetrzny-ssd-samsung-ssd-t7-shield-1tb-usb-32-gen-2-czarny",
          "get-product:409052-dysk-zewnetrzny-hdd-toshiba-canvio-basics-2tb-usb-32-gen-1-czarny",
          "get-product:495009-dysk-zewnetrzny-hdd-toshiba-canvio-basics-4tb-usb-32-gen-1-czarny",
          "get-product:620500-dysk-zewnetrzny-hdd-toshiba-canvio-slim-2tb-usb-32-gen-1-czarny",
          "get-product:651706-bezlusterkowiec-canon-eos-m50-ii-premium-live-stream-kit",
          "get-product:651708-bezlusterkowiec-canon-eos-m50-ii-vlogger-kit",
          "get-product:653453-klatki-do-aparatu-smallrig-klatka-do-canon-m50-m5",
          "get-product:744951-bezlusterkowiec-canon-eos-m50-ii-ef-m-18-150mm-f-35-63-is-stm",
          "get-product:747838-obiektywy-staloogniskowy-sigma-c-16mm-f-14-c-dn-canon-m",
          "get-product:494795-karta-pamieci-sd-sandisk-64gb-extreme-pro-170-90-mb-s-u3-v30-odczyt-zapis",
          "get-product:483005-karta-pamieci-sd-sandisk-128gb-sdxc-extreme-pro-odczyt-170mb-s-90mb-s",
          "get-product:613706-obudowa-do-komputera-phanteks-evolv-shift-2-air-czarna",
          "get-product:613708-obudowa-do-komputera-phanteks-evolv-shift-2-air-srebrna",
          "get-product:625399-zasilacz-do-komputera-asus-tuf-gaming-650w-80-plus-bronze",
          "get-product:597427-procesor-amd-ryzen-5-amd-ryzen-5-5600x",
          "get-product:665219-procesor-amd-ryzen-5-amd-ryzen-5-5600g",
          "get-product:665238-procesor-amd-ryzen-7-amd-ryzen-7-5700g",
          "get-product:735703-procesor-amd-ryzen-5-amd-ryzen-5-5600",
          "get-product:735718-procesor-amd-ryzen-7-amd-ryzen-7-5700x",
          "get-product:533018-plyta-glowna-socket-am4-asus-rog-strix-x570-i-gaming",
          "get-product:569332-plyta-glowna-socket-am4-msi-mag-b550m-mortar-wifi",
          "get-product:569337-plyta-glowna-socket-am4-asus-rog-strix-b550-i-gaming",
          "get-product:569339-plyta-glowna-socket-am4-asus-tuf-gaming-b550m-plus-wi-fi",
          "get-product:569340-plyta-glowna-socket-am4-asus-tuf-gaming-b550m-plus",
          "get-product:618348-plyta-glowna-socket-am4-gigabyte-b550m-aorus-pro-p",
          "get-product:722483-plyta-glowna-socket-am4-asus-tuf-gaming-b550m-plus-wifi-ii",
          "get-product:541516-karta-graficzna-nvidia-asus-geforce-gtx-1660-super-tuf-gaming-oc-6gb-gddr6",
          "get-product:641503-karta-graficzna-amd-sapphire-radeon-rx-6700-xt-pulse-12gb-gddr6",
          "get-product:643938-karta-graficzna-amd-asus-radeon-rx-6700-xt-dual-12gb-gddr6",
          "get-product:662309-karta-graficzna-nvidia-asus-geforce-rtx-3060-tuf-gaming-oc-v2-lhr-12gb-gddr6",
          "get-product:665466-karta-graficzna-nvidia-gigabyte-geforce-rtx-3060-ti-eagle-oc-lhr-8gb-gddr6",
          "get-product:672073-karta-graficzna-amd-asus-radeon-rx-6600-xt-rog-strix-oc-8gb-gddr6",
          "get-product:672074-karta-graficzna-amd-asus-radeon-rx-6600-xt-dual-oc-8gb-gddr6",
          "get-product:672762-karta-graficzna-amd-msi-radeon-rx-6600-xt-gaming-x-8gb-gddr6",
          "get-product:673210-karta-graficzna-nvidia-asus-geforce-rtx-3060-ti-dual-oc-v2-lhr-8gb-gddr6",
          "get-product:673211-karta-graficzna-nvidia-asus-geforce-rtx-3070-tuf-gaming-oc-v2-lhr-8gb-gddr6",
          "get-product:675319-karta-graficzna-nvidia-msi-geforce-rtx-3060-ti-ventus-2x-v1-oc-lhr-8gb-gddr6",
          "get-product:676395-karta-graficzna-nvidia-asus-geforce-gtx-1660-ti-tuf-gaming-evo-6gb-gddr6",
          "get-product:676398-karta-graficzna-nvidia-asus-geforce-gtx-1660-ti-tuf-gaming-evo-oc-6gb-gddr6",
          "get-product:688539-karta-graficzna-amd-sapphire-radeon-rx-6600-gaming-pulse-8gb-gddr6",
          "get-product:715687-karta-graficzna-nvidia-gigabyte-geforce-rtx-3050-eagle-8gb-gddr6",
          "get-product:715688-karta-graficzna-nvidia-gigabyte-geforce-rtx-3050-eagle-oc-8gb-gddr6",
          "get-product:715689-karta-graficzna-nvidia-gigabyte-geforce-rtx-3050-gaming-oc-8gb-gddr6",
          "get-product:715690-karta-graficzna-nvidia-msi-geforce-rtx-3050-ventus-2x-oc-8gb-gddr6",
          "get-product:717581-karta-graficzna-nvidia-asus-geforce-rtx-3050-dual-oc-8gb-gddr6",
          "get-product:730072-karta-graficzna-nvidia-asus-geforce-rtx-3050-phoenix-8gb-gddr6",
          "get-product:733918-karta-graficzna-amd-asus-radeon-rx-6500-xt-tuf-gaming-oc-4gb-gddr6",
          "get-product:735530-karta-graficzna-amd-msi-radeon-rx-6650-xt-gaming-x-8gb-gddr6",
          "get-product:1058175-karta-graficzna-nvidia-asus-geforce-rtx-3060-ti-dual-v2-8gb-gddr6",
          "get-product:655984-pamiec-ram-ddr4-gigabyte-16gb-2x8gb-3733mhz-cl18-aorus-rgb",
          "get-product:667516-pamiec-ram-ddr4-kingston-fury-16gb-2x8gb-3600mhz-cl17-beast-black",
          "get-product:667525-pamiec-ram-ddr4-kingston-fury-32gb-2x16gb-3600mhz-cl18-beast-black",
          "get-product:667555-pamiec-ram-ddr4-kingston-fury-16gb-2x8gb-3733mhz-cl19-beast-black",
          "get-product:667559-pamiec-ram-ddr4-kingston-fury-32gb-2x16gb-3733mhz-cl19-beast-black",
          "get-product:667824-pamiec-ram-ddr4-kingston-fury-16gb-2x8gb-3600mhz-cl17-beast-rgb",
          "get-product:667830-pamiec-ram-ddr4-kingston-fury-32gb-2x16gb-3600mhz-cl18-beast-rgb",
          "get-product:667846-pamiec-ram-ddr4-kingston-fury-16gb-2x8gb-3733mhz-cl19-beast-rgb",
          "get-product:667860-pamiec-ram-ddr4-kingston-fury-32gb-2x16gb-3733mhz-cl19-beast-rgb",
          "get-product-electro:sport-i-rekreacja/akcesoria-do-rowerow/kaski-sportowe/kask-rowerowy-abus-macator-szary-szosowy-rozmiar-m",
          "get-product-electro:sport-i-rekreacja/akcesoria-do-rowerow/zamki-i-zapiecia/zapiecie-rowerowe-abus-1200-web-lancuch-czarny",
          "get-product-electro:sport-i-rekreacja/akcesoria-do-rowerow/zamki-i-zapiecia/zapiecie-rowerowe-abus-steel-o-chain-5805k-110-lancuch-czarny",
          "get-product-electro:sport-i-rekreacja/akcesoria-do-rowerow/zamki-i-zapiecia/zapiecie-rowerowe-abus-steel-o-chain-5805c-110-lancuch-czarny",
          "get-product-electro:sport-i-rekreacja/akcesoria-do-rowerow/zamki-i-zapiecia/zapiecie-rowerowe-abus-1500-110-web-lancuch-czarny",
          "get-product-electro:sport-i-rekreacja/akcesoria-do-rowerow/oswietlenie-rowerowe/lampka-rowerowa-przod-sigma-buster-100-usb",
          "get-product-electro:agd-male/akcesoria-agd-drobne/mlynki-do-kawy/tsm6a013b",
          "get-product-euro:zmywarki-do-zabudowy/siemens-iq300-sn63ex14ce",
          "get-product-media:smartfony-i-zegarki/smartfony/smartfon-apple-iphone-12-5g-black-64gb",
          "get-product-media:agd-male/ekspresy-i-kawa/mlynki-do-kawy/mlynek-do-kawy-wmf-stelio",
          "get-product-media:agd-male/ekspresy-i-kawa/mlynki-do-kawy/tsm6a011w",
          // "get-product-media:sport-i-rekreacja/akcesoria-do-rowerow/zamki-i-zapiecia/zapiecie-rowerowe-abus-1200-web-lancuch-czarny",
          "get-product-media:foto-i-kamery/aparaty-kompaktowe/aparaty-natychmiastowe/aparat-cyfrowy-instax-mini-11-lilac-purple-10-shots-2-small-shacolla",
          "get-product-media:foto-i-kamery/drukarki-do-zdjec/drukarka-przenosna-termosublimacyjna-fujifilm-instax-mini-link-dark-denim",
          "get-product-media:foto-i-kamery/drukarki-do-zdjec/drukarka-przenosna-fujifilm-link-wide-a-white-ex-d",
          "get-product-media:foto-i-kamery/drukarki-do-zdjec/polaroid-hi-print-drukarka-zdjec-bluetooth-do-telefonu-smartfona",
          "get-product-media:foto-i-kamery/akcesoria-do-aparatow-i-kamer/wklady-do-aparatow/wklady-do-aparatu-fujifilm-instax-mini-glossy-20-zdjec",
          "get-product-media:sport-i-rekreacja/deskorolki-elektryczne/smartboard-lexgo-phantom-6-5-black",
          "get-product-tour:81268/sigma-buster-100-nugget-ii-zestaw-lampek-led-usb",
          "get-product-tour:86799/sigma-buster-100-lampka-przednia-led-usb",
          "get-product-tour:89111/sigma-buster-100-hl-lampka-przednia-led-usb",
          "get-product-tour:92431/abus-1500-web-zapiecie-do-roweru-lancuch-z-zamkiem-czarny",
          "get-product-tour:92427/abus-steel-o-chain-4804c-zapiecie-rowerowe-lancuch-na-szyfr-czarny",
          "get-product-tour:174182/abus-ivytex-6210-zapiecie-rowerowe-lancuch-z-zamkiem",
          "get-product-tour:174572/abus-macator-kask-rowerowy-szosowy-gleam-silver",
          "get-product-tour:174726/abus-urban-i-3.0-kask-rowerowy-miejski-damski-glacier-blue",
          "get-product-tour:210800/kask-rowerowy-abus-viantor-szary",
          "get-product-tour:211740/abus-youn-i-2.0-kask-jasnoczerwony",
          "get-product-tour:241230/zapiecie-abus-6800-citychain-2.0-czerwone",
          "get-product-mensa:wmf-blok-do-nozy-ciemny-18-8046-4500",
          "get-product-mensa:wmf-blok-do-nozy-1880454500",
          "get-product-mensa:wmf-noz-20cm-do-warzyw-18-7003-9990",
          "get-product-mensa:wmf-noz-20cm-do-warzyw-18-7003-9990",
          "get-product-mensa:mensa-home-pomocnik-do-paleczek-panda-53cm-6094071",
          "get-product-mensa:mensa-home-pomocnik-do-paleczek-kot-53cm-6094073",
          "get-product-equip:product-pol-63775-Plecak-Fjallraven-Kanken-fog-pink",
          "get-product-equip:product-pol-37566-Plecak-fotograficzny-Thule-EnRoute-Camera-Backpack-20l-black",
          "get-product-equip:product-pol-43799-Podrozny-kubek-termiczny-Motion-JNL-350-ml-Thermos-graphite",
          "get-product-equip:product-pol-43800-Podrozny-kubek-termiczny-Motion-JNO-350-ml-Thermos-matte-black",
          "get-product-equip:product-pol-63637-Plecak-do-szkoly-miejski-plocienny-Vans-Realm-Canvas-mascd-mind-ditsy",
          "get-product-equip:product-pol-64582-Plecak-mlodziezowy-Vans-Old-Skool-H2O-retro-floral",
          "get-product-equip:product-pol-40131-Plecak-Vans-Deana-III-multi-tropic-marshmallow",
          "get-product-equip:product-pol-43075-Plecak-szkolny-Vans-Old-Skool-III-victoria-blue-checkerboard",
          "get-product-equip:product-pol-41234-Plecak-na-laptopa-Thule-Notus-black",
          "get-product-equip:product-pol-41238-Plecak-na-laptopa-Thule-Indago-black",
          "get-product-equip:product-pol-59845-Plecak-na-laptopa-Thule-Notus-aluminium-grey",
          "get-product-equip:product-pol-65332-Plecak-miejski-Thule-Lithos-20-l-black",
          "get-product-equip:product-pol-65335-Plecak-miejski-Thule-Lithos-16-l-black",
          "get-product-equip:product-pol-62240-Walizka-srednia-z-poszerzeniem-American-Tourister-Bon-Air-DLX-midnight-navy",
          "get-product-equip:product-pol-61671-Walizka-srednia-poszerzana-Samsonite-Mickey-Pixel-black",
          "get-product-ef3m:EXCEL-noz-K1-/122",
          "get-product-ef3m:Mata-do-ciecia-A3-ze-skala-/785",
          "get-product-ef3m:Mata-do-ciecia-A2-ze-skala/2189",
          "get-product-ef3m:Mata-do-ciecia-podkladka-A2-45-cm-x-60-cm/2704",
          "get-product-tous:tous-cool-joykolczyki-z-zoltego-srebra-vermeil/p/018153570",
          "get-product-tous:tous-luahkolczyki-z-zoltego-srebra-vermeil-i-srebra-z-motywem-misia/p/111363530",
        ]
  ).subscribe((type) => {
    request$.next({ type });
  });

  from(type ? [] : ["get-promo:promocje"]).subscribe((type) => {
    request$.next({ type });
  });

  from(
    type
      ? []
      : [
          `${Types.STATION}:${52.17}:${21.06}:${10000}`,
          `${Types.STATION}:${52.46}:${21.29}:${10000}`,
          `${Types.STATION}:${53.12}:${23.09}:${10000}`,
        ]
  ).subscribe((type) => {
    request$.next({ type });
  });

  from(["pluc", "pl"].map((name) => `${Types.AUDI}:${name}`)).subscribe(
    (type) => {
      request$.next({ type });
    }
  );

  // from(["mercedes-benz:mpvehicles-pl-vehicle"]).subscribe((type) => {
  //   request$.next({ type });
  // });

  from(["search"].map((name) => `${Types.PORSCHE}:${name}`)).subscribe(
    (type) => {
      request$.next({ type });
    }
  );

  from(
    type ? [type] : ["od-reki"].map((name) => `${Types.VW}:${name}`)
  ).subscribe((type) => {
    request$.next({ type });
  });

  request$.complete();
}
