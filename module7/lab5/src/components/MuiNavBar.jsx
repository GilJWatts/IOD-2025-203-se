import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useEmoji } from "../context/EmojiContext";

import HomeIcon from "@mui/icons-material/Home";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import LoginIcon from "@mui/icons-material/Login";

function MuiNavBar() {
  const { emoji } = useEmoji();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App {emoji}
        </Typography>
        <Button
          color="inherit"
          component={Link}
          to="/"
          sx={{
            "&:hover": {
              color: "secondary.main",

              backgroundColor: "transparent",
            },
          }}
        >
          <HomeIcon sx={{ mr: 1 }} />
          Home
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/bitcoin-rates"
          sx={{
            "&:hover": {
              color: "secondary.main",
              backgroundColor: "transparent",
            },
          }}
        >
          <CurrencyBitcoinIcon sx={{ mr: 1 }} />
          Bitcoin Rates
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/login"
          sx={{
            "&:hover": {
              color: "secondary.main",
              backgroundColor: "transparent",
            },
          }}
        >
          <LoginIcon sx={{ mr: 1 }} />
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}
export default MuiNavBar;
