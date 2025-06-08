
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import Library from "./components/Library";
import "./components/styles/App.css";

const fakeSongs = [
  { id: 1, title: "Imagine", artist: "John Lennon", duration: "3:04" },
  { id: 2, title: "Bohemian Rhapsody", artist: "Queen", duration: "5:55" },
  { id: 3, title: "Billie Jean", artist: "Michael Jackson", duration: "4:54" },
];

function App() {
  const [searchResults] = useState(fakeSongs);
  const [library, setLibrary] = useState([]);

  const addToLibrary = (song) => {
    if (!library.find((s) => s.id === song.id)) {
      setLibrary([...library, song]);
    }
  };

  useEffect(() => {
    console.log("La biblioteca se ha actualizado:", library);
  }, [library]);

  return (
    <div className="App">
      <Header />
      <div className="sections">
        <SearchResults songs={searchResults} onAdd={addToLibrary} />
        <Library songs={library} />
      </div>
    </div>
  );
}

export default App;