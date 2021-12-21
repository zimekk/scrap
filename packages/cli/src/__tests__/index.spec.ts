import { scrapOptions } from "../utils";

describe("cli", () => {
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
});
