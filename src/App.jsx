import React from "react";
import Navbar from "./Navbar";
import AnimeCard from "./AnimeCard";
import AnimeList from "./AnimeList";

function App() {
  const animeList = [
    {
      title: "Attack on Titan",
      date: "05/05/2025",
      rating: 9.9,
    },
    {
      title: "Frieren: Beyond Journey's End",
      date: "28/09/2023",
      rating: 9.3,
    },
    {
      title: "Vinland Saga",
      date: "07/07/2019",
      rating: 9.1,
    },
    {
      title: "Death Note",
      date: "04/10/2006",
      rating: 9.0,
    },
    {
      title: "Steins;Gate",
      date: "06/04/2011",
      rating: 9.1,
    },
    {
      title: "Jujutsu Kaisen",
      date: "03/10/2020",
      rating: 8.6,
    },
  ];
  return (
    <>
      <Navbar />
      <AnimeList list={animeList} />
    </>
  );
}

export default App;
