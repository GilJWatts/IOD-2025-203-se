import React from "react";

function Greeting({ name = "World", children }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        margin: "1rem auto",
        padding: "1rem",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
        maxWidth: "600px",
        textAlign: "left",
        color: "#333",
      }}
    >
      <h1>Hello, {name}!</h1>
      {children && (
        <div style={{ marginTop: "0.5rem", color: "#555" }}>{children}</div>
      )}
    </div>
  );
}

export default Greeting;
