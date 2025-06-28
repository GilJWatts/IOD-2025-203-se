import { useEmoji } from "../context/EmojiContext";

function Emoji() {
  const { emoji, changeMood } = useEmoji();

  return (
    <div className="Emoji componentBox">
      <h2>Current Mood: {emoji}</h2>
      <button onClick={changeMood}>Change Mood</button>
    </div>
  );
}

export default Emoji;
