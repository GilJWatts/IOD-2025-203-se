import { createContext, useContext, useState } from "react";

const EmojiContext = createContext();

export function EmojiProvider({ children }) {
  const [emoji, setEmoji] = useState("😊");

  const changeMood = () => {
    setEmoji((prevEmoji) => (prevEmoji === "😊" ? "😢" : "😊"));
  };

  return (
    <EmojiContext.Provider value={{ emoji, changeMood }}>
      {children}
    </EmojiContext.Provider>
  );
}

export function useEmoji() {
  const context = useContext(EmojiContext);
  if (!context) {
    throw new Error("useEmoji must be used within an EmojiProvider");
  }
  return context;
}
