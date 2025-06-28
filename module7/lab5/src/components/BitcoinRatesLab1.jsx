import { useState, useEffect } from "react";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [bitcoinPrice, setBitcoinPrice] = useState("");

  useEffect(() => {
    let ignore = false;

    console.log("Fetching price for", currency);

    fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
    )
      .then((response) => response.json())
      .then((json) => {
        if (!ignore) {
          setBitcoinPrice(json.bitcoin[currency.toLowerCase()]);
        }
      });

    return () => {
      ignore = true;
      console.log("Cleanup effect for", currency);
    };
  }, [currency]);

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      <p>
        Current Price in {currency}: {bitcoinPrice}
      </p>
    </div>
  );
}

export default BitcoinRates;
