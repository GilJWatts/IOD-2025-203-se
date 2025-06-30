import NavBar from "./components/NavBar";
import AppRoutes from "./routes/AppRoutes";
import { EmojiProvider } from "./context/EmojiContext";
import "./App.css";

function App() {
  return (
    <EmojiProvider>
      <div className="App">
        <NavBar />
        <div className="container">
          <AppRoutes />
        </div>
      </div>
    </EmojiProvider>
  );
}

export default App;
