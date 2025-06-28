import React, { useState } from "react";

function Emoji() {
  const [mood, setMood] = useState("😊");

  const handleMoodChange = () => {
    setMood(mood === "😊" ? "😢" : "😊");
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        margin: "1rem auto",
        padding: "1rem",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
        maxWidth: "600px",
        textAlign: "center",
        color: "#333",
      }}
    >
      <div style={{ fontSize: "5rem" }}>{mood}</div>
      <button onClick={handleMoodChange}>Change Mood</button>
    </div>
  );
}

export default Emoji;
