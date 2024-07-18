import { useState } from "react";
export default function PlayerDetail({ name, symbol, onChangeName }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  function handleButton() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }
  function handleChange(event) {
    setPlayerName(event.target.value);
  }
  return (
    <>
      <span className="player">
        {isEditing ? (
          <input
            id="player-name"
            className="player-name"
            value={playerName}
            onChange={handleChange}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleButton}>{isEditing ? "Save" : "Edit"}</button>
    </>
  );
}
