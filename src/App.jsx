import React from "react";
import Navbar from "./components/Navbar";
import AnimeCard from "./components/AnimeCard";
import AnimeList from "./components/AnimeList";
import AnimeSearch from "./components/AnimeSearch";

function App() {
  return (
    <>
      <Navbar />
      <AnimeSearch />
    </>
  );
}

export default App;
