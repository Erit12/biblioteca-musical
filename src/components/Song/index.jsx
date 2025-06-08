
import React from "react";
import "../styles/Song.css";

function Song({ song, onAdd }) {
  return (
    <div className="song">
      <p><strong>{song.title}</strong> - {song.artist} ({song.duration})</p>
      {onAdd && <button onClick={() => onAdd(song)}>Agregar a mi biblioteca</button>}
    </div>
  );
}

export default Song;