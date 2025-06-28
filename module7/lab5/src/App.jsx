{
  /*import NavBar from "./components/NavBar";*/
}
import MuiNavBar from "./components/MuiNavBar";
import AppRoutes from "./routes/AppRoutes";
import { EmojiProvider } from "./context/EmojiContext";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import "./App.css";

function App() {
  return (
    <EmojiProvider>
      <CssBaseline />
      <div className="App">
        <MuiNavBar />
        <Container sx={{ mt: 2 }}>
          <AppRoutes />
        </Container>
      </div>
    </EmojiProvider>
  );
}

export default App;
