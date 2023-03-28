import React, {
  ChangeEventHandler,
  useCallback,
  useMemo,
  useState,
} from "react";
import styles from "./styles.module.scss";

const { isValid: isValidIban } = require("iban");

function Data() {
  const [number, setNumber] = useState("25106010282276727214385741");
  // https://ewib.nbp.pl/faces/pages/daneDoPobrania.xhtml
  const ewib = useMemo(
    () =>
      `
1010	Narodowy Bank Polski
1020	PKO BP
1030	Bank Handlowy (Citi Handlowy)
1050	ING Bank Śląski
1090	Santander Bank Polska
1130	BGK
1140	mBank
1160	Bank Millennium
1240	Pekao SA
1320	Bank Pocztowy
1540	BOŚ Bank
1580	Mercedes-Benz Bank Polska
1610	SGB - Bank
1680	Plus Bank
1840	Societe Generale
1870	Nest Bank
1930	Bank Polskiej Spółdzielczości
1940	Credit Agricole Bank Polska
2030	BNP Paribas
2120	Santander Consumer Bank
2160	Toyota Bank
2190	DNB Bank Polska
2490	Alior Bank
2710	FCE Bank Polska
2720	Inbank
2770	Volkswagen Bank
2800	HSBC
2850	BFF Bank
2910	Aion Bank
2930	VeloBank`
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line.length > 0)
        .map((line) =>
          (([_, code, name]: string[]) => ({ code, name }))(
            line.split(/^(\d+)\s+(.*)$/g)
          )
        ),
    []
  );

  const filtered = useMemo(
    () =>
      ewib.filter(({ code }) =>
        number
          .substring(2)
          .startsWith(
            code.substring(0, Math.min(number.length - 2, code.length))
          )
      ),
    [ewib, number]
  );

  const code = useMemo(() => `PL`, []);

  const validIban = useMemo(
    () => isValidIban(`${code}${number}`),
    [code, number]
  );

  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target }) => setNumber(target.value),
    [setNumber]
  );

  // https://nbp.pl/wp-content/uploads/2022/09/numeracja-bankow.pdf
  return (
    <div className={styles.Iban}>
      <table>
        <tbody>
          <tr>
            <td></td>
            <td className={styles.blue} colSpan={3}>
              NRB – Numer Rachunku Bankowego
            </td>
          </tr>
          <tr>
            <td className={styles.pink}>
              <input
                value={code}
                readOnly
                style={{
                  width: "calc(1.25 * 2ch)",
                  color: validIban ? "green" : "red",
                }}
              />
            </td>
            <td className={styles.blue} colSpan={4}>
              <input
                value={number}
                onChange={handleChange}
                style={{
                  width: "calc(1.25 * 26ch)",
                  color: validIban ? "green" : "red",
                }}
              />
            </td>
          </tr>
          <tr>
            <td className={styles.pink}>Kod kraju</td>
            <td className={styles.blue}>Liczba kontrolna</td>
            <td className={styles.blue}>
              Numer rozliczeniowy jednostki organizacyjnej
            </td>
            <td className={styles.blue}>
              Numer identyfikujący rachunek bankowy klienta
            </td>
          </tr>
          <tr>
            <td className={styles.pink} colSpan={4}>
              IBAN – Międzynarodowy Numer Rachunku Bankowego
            </td>
          </tr>
        </tbody>
      </table>
      <ul>
        {filtered.map(({ code, name }) => (
          <li key={code}>
            <strong>{code}</strong> {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Section() {
  return (
    <div className={styles.Section}>
      <h2>Iban</h2>
      <Data />
    </div>
  );
}
