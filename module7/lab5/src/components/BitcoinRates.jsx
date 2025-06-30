import { useState } from "react";
import { useData } from "../hooks/useData";
import { useEmoji } from "../context/EmojiContext";
import {
  Card,
  CardContent,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const { emoji } = useEmoji();

  const apiUrl = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`;
  const data = useData(apiUrl);

  const bitcoinPrice = data
    ? data.bitcoin[currency.toLowerCase()]
    : "Fetching...";

  return (
    <Card sx={{ maxWidth: 400, margin: "0 auto" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Bitcoin Exchange Rate {emoji}
        </Typography>
        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel id="currency-select-label">Currency</InputLabel>
          <Select
            labelId="currency-select-label"
            id="currency-select"
            value={currency}
            label="Currency"
            onChange={(e) => setCurrency(e.target.value)}
          >
            {currencies.map((curr) => (
              <MenuItem value={curr} key={curr}>
                {curr}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Typography sx={{ mt: 2 }}>Current Price in {currency}:</Typography>
        <Typography variant="h6">{bitcoinPrice}</Typography>
      </CardContent>
    </Card>
  );
}

export default BitcoinRates;
