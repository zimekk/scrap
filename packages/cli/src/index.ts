import { Subject, from, of } from "rxjs";
import chunk from "chunk";
import { delay, mergeMap, take, tap } from "rxjs/operators";
import { diffString } from "json-diff";
import { z } from "zod";
// import { gameItems } from "@dev/api";
// import { vehicleItems } from "@dev/api/vehicles";
import {
  GameService,
  ProductService,
  PropertyGratkaService,
  PropertyKlikService,
  PropertyOtodomService,
  StationService,
  VehicleService,
  Vehicle2Service,
  Vehicle3Service,
  Vehicle4Service,
  Vehicle5Service,
} from "./services";

require("dotenv").config();

const {
  NEARBY_LAT = "52.1530829",
  NEARBY_LNG = "21.1104411",
  NEARBY_RADIUS = "10000",
  // NEARBY_RADIUS = "25014.985524846034",
  // KLIK_URL,
  // GRATKA_URL,
  // OTODOM_URL,
  // STATIONS_URL,
  // STORE_URL,
  // STORE_ALTO_URL,
} = process.env as {
  NEARBY_LAT: string;
  NEARBY_LNG: string;
  NEARBY_RADIUS: string;
  // KLIK_URL: string;
  // GRATKA_URL: string;
  // OTODOM_URL: string;
  // STATIONS_URL: string;
  // STORE_URL: string;
  // STORE_ALTO_URL: string;
};
const ERA = 24 * 3600 * 1000;
const _time = Date.now();
const _past = _time - ERA;

export const remove = async (status = false) => {
  let counter = 0;
  const check$ = new Subject<{
    id: number;
    isNew: boolean;
  }>();
  const summary = <Record<"checked" | "removed", number[]>>{
    checked: [],
    removed: [],
  };

  await require("./request").cleanup();

  check$
    .pipe(
      take(1000),
      mergeMap(
        (item) =>
          of(item).pipe(
            mergeMap((item) => {
              const service = new VehicleService();
              return service.inspect(item, summary);
            }),
            delay(100)
          ),
        1
      )
    )
    .subscribe({
      next: (item: { id: number; _removed?: number }) => {
        console.log({ i: counter--, item });
      },
      complete: () => {
        console.log(summary);
      },
    });

  require("@dev/api/vehicles")
    .vehicleItems.find({})
    .then((list: any) => {
      // list
      //   .filter(({ id }: any) => id === undefined)
      //   .map((item: any) => vehicleItems.remove(item)) ||
      const filtered = list
        .sort((a: any, b: any) => a._created - b._created)
        .filter(
          ({
            options,
            _checked = 0,
            _removed = 0,
          }: // isNew,
          {
            options: any;
            _checked: number;
            _removed: number;
            // isNew: boolean;
          }) => (options === undefined || _checked < _past) && _removed === 0
          // _removed > 0 && isNew
        );

      console.log({ records: list.length, tocheck: filtered.length });

      if (status) {
        return;
      }

      counter = filtered.length;

      filtered.slice(0, 1000).map((item: any, i: number, list: any[]) => {
        // console.log(`${i + 1}/${list.length}`);
        check$.next(item);
      });
      check$.complete();
    });
};

export const status = () => {
  remove(true);
};

export const verify = () => {
  const unify = ({
    DisplaySkuAvailabilities: [
      {
        Availabilities: [
          {
            OrderManagementData: { Price },
          },
        ],
      },
    ],
    LocalizedProperties: [
      { Images, ProductDescription, ProductTitle, PublisherName },
    ],
    LastModifiedDate,
  }: any) => ({
    Images: Images.sort((a: any, b: any) => a.Width - b.Width)
      .slice(0, 1)
      .map(({ Uri }: { Uri: string }) => Uri),
    LastModifiedDate,
    Price,
    ProductDescription,
    ProductTitle,
    PublisherName,
  });

  require("@dev/api")
    .gameItems.find({})
    .then((list: any) =>
      list.map((item: any) => {
        const {
          LocalizedProperties: [{ ProductTitle }],
          _history = {},
        } = item;

        // console.log({ ProductTitle });

        [item]
          .concat(Object.values(_history))
          .map(unify)
          .filter(
            (item, i, list) =>
              i === 0 || JSON.stringify(item) !== JSON.stringify(list[i - 1])
          )
          .map((item, i, list) => i && diffString(item, list[i - 1]))
          .filter(Boolean)
          .map((diff) => console.log(diff));
      })
    );
};

enum Types {
  PRODUCT = "get-product",
  ALTO = "get-product-alto",
  STATION = "get-stations",
  GRATKA = "gratka",
  KLIK = "klik",
  BENZ = "mercedes-benz",
  BMW = "najlepszeoferty.bmw.pl",
  OTODOM = "otodom",
  PORSCHE = "porsche",
  AUDI = "scs.audi.de",
  VW = "vw",
  XBOX = "xbox",
}

export default function (type?: string) {
  console.log({ type });

  const summary = <Record<string, number[]>>{
    created: [],
    checked: [],
    updated: [],
  };

  const request$ = new Subject<{ type: string; args?: object }>();
  request$
    .pipe(
      mergeMap(
        ({ type, args }) =>
          from(
            z
              .nativeEnum(Types)
              .parseAsync(type.split(":")[0])
              .then(
                (type) =>
                  ({
                    [Types.PRODUCT]: ProductService,
                    [Types.ALTO]: ProductService,
                    [Types.STATION]: StationService,
                    [Types.GRATKA]: PropertyGratkaService,
                    [Types.KLIK]: PropertyKlikService,
                    [Types.BENZ]: Vehicle3Service,
                    [Types.BMW]: VehicleService,
                    [Types.OTODOM]: PropertyOtodomService,
                    [Types.PORSCHE]: Vehicle4Service,
                    [Types.AUDI]: Vehicle2Service,
                    [Types.VW]: Vehicle5Service,
                    [Types.XBOX]: GameService,
                  }[type])
              )
              .then((Service) => new Service())
              .then((service) => service.request(type, args))
          ).pipe(
            tap(({ type, next }) =>
              Boolean(console.log({ next })) || next
                ? request$.next({ type, args: next })
                : request$.complete()
            )
          ),
        1
      ),
      mergeMap(
        ({ type, list }) =>
          from(list).pipe(
            tap((item) => console.log([type, item.id, item.title])),
            mergeMap(
              (item) =>
                from(
                  z
                    .nativeEnum(Types)
                    .parseAsync(type.split(":")[0])
                    .then(
                      (type) =>
                        ({
                          [Types.PRODUCT]: ProductService,
                          [Types.ALTO]: ProductService,
                          [Types.STATION]: StationService,
                          [Types.GRATKA]: PropertyGratkaService,
                          [Types.KLIK]: PropertyKlikService,
                          [Types.BENZ]: Vehicle3Service,
                          [Types.BMW]: VehicleService,
                          [Types.OTODOM]: PropertyOtodomService,
                          [Types.PORSCHE]: Vehicle4Service,
                          [Types.AUDI]: Vehicle2Service,
                          [Types.VW]: Vehicle5Service,
                          [Types.XBOX]: GameService,
                        }[type])
                    )
                    .then((Service) => new Service())
                    .then((service) => service.process(item, summary))
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
    console.log({ type });
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
          "otodom:dom/warszawa/powsin",
          "otodom:dom/warszawa/powsinek",
          "otodom:dom/warszawa/radosc",
          "otodom:dom/warszawa/sadyba",
          "otodom:dom/warszawa/ursynow",
          "otodom:dom/warszawa/wawer",
          "otodom:dom/warszawa/wilanow",
          "otodom:dzialka/komorow_5600",
          "otodom:dzialka/stare-babice",
          "otodom:dzialka/warszawa/powsin",
          "otodom:dzialka/warszawa/powsinek",
          "otodom:dzialka/warszawa/radosc",
          "otodom:dzialka/warszawa/sadyba",
          "otodom:dzialka/warszawa/ursynow",
          "otodom:dzialka/warszawa/wawer",
          "otodom:dzialka/warszawa/wilanow",
        ]
  ).subscribe((type) => {
    console.log({ type });
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
          ],
          5
        ).map((names) => `${Types.XBOX}:${names.join(",")}`)
  ).subscribe((type) => {
    console.log({ type });
    request$.next({ type });
  });

  from(
    type
      ? []
      : [
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
          "get-product:567454-etui-obudowa-na-smartfona-apple-silicone-case-do-iphone-7-8-se-czarny",
          "get-product:567455-etui-obudowa-na-smartfona-apple-silicone-case-do-iphone-7-8-se-piaskowy-roz",
          "get-product:567460-etui-obudowa-na-smartfona-apple-leather-case-do-iphone-7-8-se-nocny-blekit",
          "get-product:567459-etui-obudowa-na-smartfona-apple-leather-case-do-iphone-7-8-se-czarny",
          "get-product:530119-statyw-rode-psa1-studio-arm",
          "get-product:563133-dysk-ssd-kingston-1tb-m2-pcie-nvme-kc2500",
          "get-product:555076-kamera-ip-dahua-lite-hfw2231t-27-135mm-2mp-ir60-ip67-poe-ivs",
          "get-product:583534-hulajnoga-elektryczna-xiaomi-mi-electric-scooter-essential",
          "get-product:583538-hulajnoga-elektryczna-xiaomi-mi-electric-scooter-1s",
          "get-product:670611-inteligentny-glosnik-google-nest-hub-2-czarny",
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
          "get-product:645129-dron-dji-air-2s-mavic-air-2s",
          "get-product-alto:1022665-klocki-lego-lego-technic-42128-ciezki-samochod-pomocy-drogowej",
          "get-product-alto:576290-klocki-lego-lego-technic-42115-lamborghini-sian-fkp-37",
          "get-product-alto:467576-klocki-lego-lego-technic-42096-porsche-911-rsr",
          "get-product-alto:436955-klocki-lego-lego-technic-42083-bugatti-chiron",
          "get-product-alto:1012754-klocki-lego-lego-technic-42125-ferrari-488-gte-af-corse-51",
          "get-product-alto:532359-klocki-lego-lego-technic-42109-auto-wyscigowe-top-gear",
          "get-product-alto:608398-robot-lego-mindstorms-wynalazca-robotow",
          "get-product-alto:558550-robot-sprzatajacy-xiaomi-mi-robot-vacuum-mop-pro-white",
          "get-product-alto:1010924-robot-sprzatajacy-xiaomi-mi-robot-vacuum-mop-essential",
          "get-product-alto:1011153-oczyszczacz-powietrza-xiaomi-mi-air-purifier-pro-h",
          "get-product-alto:1017784-urzadzenie-do-dezynfekcji-rak-xiaomi-mi-automatic-foaming-soap-dispenser",
          "get-product-alto:1014810-urzadzenie-kosmetyczne-inface-ultrasonic-ion-cleansing-instrument-bialy",
          "get-product-alto:1014811-urzadzenie-kosmetyczne-inface-ultrasonic-ion-cleansing-instrument-kolor-czarny",
          "get-product-alto:1014825-urzadzenie-kosmetyczne-inface-ultrasonic-ion-cleansing-instrument-kolor-rozowy",
          "get-product-alto:1014807-urzadzenie-kosmetyczne-inface-sonic-facial-device-pro-czerwony",
          "get-product-alto:1014809-urzadzenie-kosmetyczne-inface-sonic-facial-device-pro-niebieski",
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
        ]
  ).subscribe((type) => {
    console.log({ type });
    request$.next({ type });
  });

  from(
    type
      ? []
      : [`${Types.STATION}:${NEARBY_LAT}:${NEARBY_LNG}:${NEARBY_RADIUS}`]
  ).subscribe((type) => {
    console.log({ type });
    request$.next({ type });
  });

  from(["pluc", "pl"].map((name) => `${Types.AUDI}:${name}`)).subscribe(
    (type) => {
      console.log({ type });
      request$.next({ type });
    }
  );

  // from(["mercedes-benz:mpvehicles-pl-vehicle"]).subscribe((type) => {
  //   console.log({ type });
  //   request$.next({ type });
  // });

  from(["search"].map((name) => `${Types.PORSCHE}:${name}`)).subscribe(
    (type) => {
      console.log({ type });
      request$.next({ type });
    }
  );

  from(
    type ? [type] : ["od-reki"].map((name) => `${Types.VW}:${name}`)
  ).subscribe((type) => {
    console.log({ type });
    request$.next({ type });
  });
}
