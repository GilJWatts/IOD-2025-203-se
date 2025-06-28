import { useState } from "react";
import "./App.css";
import Greeting from "./components/Greeting.jsx";
import BigCats from "./components/BigCats.jsx";
import Emoji from "./components/Emoji.jsx";
import Calculator from "./components/Calculator.jsx"; // Import the Calculator

function GreetingPage() {
  return (
    <div>
      <Greeting />
      <Greeting name="Shannon">
        <p>Welcome to my first React component!</p>
      </Greeting>
      <Greeting name="Jackson & Jacklyn" />
    </div>
  );
}

function EmojiPage() {
  return (
    <div>
      <Emoji />
    </div>
  );
}

function CalculatorPage() {
  return (
    <div>
      <h2>Calculator</h2>
      <Calculator />
    </div>
  );
}

function App() {
  const [page, setPage] = useState("greetings");

  return (
    <div className="App">
      {/* Navigation Menu */}
      <nav
        style={{
          marginBottom: "2rem",
          borderBottom: "1px solid #ccc",
          paddingBottom: "1rem",
        }}
      >
        <button
          onClick={() => setPage("greetings")}
          style={{
            marginRight: "1rem",
            padding: "10px 20px",
            cursor: "pointer",
            backgroundColor: page === "greetings" ? "#646cff" : "#f9f9f9",
            color: page === "greetings" ? "white" : "black",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        >
          Greeting App
        </button>
        <button
          onClick={() => setPage("cats")}
          style={{
            marginRight: "1rem",
            padding: "10px 20px",
            cursor: "pointer",
            backgroundColor: page === "cats" ? "#646cff" : "#f9f9f9",
            color: page === "cats" ? "white" : "black",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        >
          Big Cats App
        </button>
        <button
          onClick={() => setPage("emoji")}
          style={{
            marginRight: "1rem",
            padding: "10px 20px",
            cursor: "pointer",
            backgroundColor: page === "emoji" ? "#646cff" : "#f9f9f9",
            color: page === "emoji" ? "white" : "black",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        >
          Emoji App
        </button>
        <button
          onClick={() => setPage("calculator")}
          style={{
            padding: "10px 20px",
            cursor: "pointer",
            backgroundColor: page === "calculator" ? "#646cff" : "#f9f9f9",
            color: page === "calculator" ? "white" : "black",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        >
          Calculator App
        </button>
      </nav>

      {page === "greetings" && <GreetingPage />}
      {page === "cats" && <BigCats />}
      {page === "emoji" && <EmojiPage />}
      {page === "calculator" && <CalculatorPage />}
    </div>
  );
}

export default App;
