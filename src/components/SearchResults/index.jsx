
import React from "react";
import Song from "../Song";
import "../styles/SearchResults.css";

function SearchResults({ songs, onAdd }) {
  return (
    <div className="search-results">
      <h2>Resultados de Búsqueda</h2>
      {songs.map((song) => (
        <Song key={song.id} song={song} onAdd={onAdd} />
      ))}
    </div>
  );
}

export default SearchResults;