import { fromHtml } from "../utils";

describe("StationService", () => {
  it("fromHtml", () =>
    [
      {
        html: `<div class="map-station-pop-up">
    <div class="left-side">
        <div class="photo"><img src="/ac-file/station-logo-img/595394a9592c7d34248b4570/pkn-orlen.png" alt="PKN ORLEN" /></div>
        <div class="name">PKN ORLEN</div>
    </div>

    <div class="right-side">
        <a href="/stacje-paliw/pkn-orlen/pkn-orlen-trakt-lubelski-63-warszawa/"><strong><b>Warszawa</b>, Trakt Lubelski 63</strong></a>
        <ul class="petrol-list">
                                            <li><div class="fuel-logo on big">on</div><div class="price">5.5</div></li>
                    </ul>
        <a href="/stacje-paliw/pkn-orlen/pkn-orlen-trakt-lubelski-63-warszawa/dodawanie-cen-paliw/" class="refresh-price"><i class="icon-arrows-ccw"></i> Aktualizuj ceny</a>
    </div>
</div>`,
        result: {
          address: "Warszawa, Trakt Lubelski 63",
          petrol_list: [
            {
              price: "5.5",
              type: "on",
            },
          ],
        },
      },
      {
        html: `<div class="map-station-pop-up">
    <div class="left-side">
        <div class="photo"><img src="/ac-file/station-logo-img/595394b3592c7d0d2b8b4571/shell.png" alt="Shell" /></div>
        <div class="name">Shell</div>
    </div>

    <div class="right-side">
        <a href="/stacje-paliw/shell/shell-ostrobramska-75-warszawa/"><strong><b>Warszawa</b>, Ostrobramska 75</strong></a>
        <ul class="petrol-list">
                                            <li><div class="fuel-logo pb big">pb</div><div class="price">5.46</div></li>
                                            <li><div class="fuel-logo pb big">pb</div><div class="price">5.46</div></li>
                    </ul>
        <a href="/stacje-paliw/shell/shell-ostrobramska-75-warszawa/dodawanie-cen-paliw/" class="refresh-price"><i class="icon-arrows-ccw"></i> Aktualizuj ceny</a>
    </div>
</div>`,
        result: {
          address: "Warszawa, Ostrobramska 75",
          petrol_list: [
            {
              price: "5.46",
              type: "pb",
            },
            {
              price: "5.46",
              type: "pb",
            },
          ],
        },
      },
    ].forEach(({ html, result }) => expect(fromHtml(html)).toEqual(result)));
});
