import { useState } from "react";
import { useData } from "../hooks/useData";

import { useEmoji } from "../context/EmojiContext";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);

  const { emoji } = useEmoji();

  const apiUrl = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`;
  const data = useData(apiUrl);

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));
  const bitcoinPrice = data
    ? data.bitcoin[currency.toLowerCase()]
    : "Fetching...";

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate {emoji}</h3>
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
