import { useState } from "react";
import AnimeList from "./AnimeList";

function AnimeSearch() {
  const [anime, setAnime] = useState({ title: "", date: "", rating: "" });
  const [list, setList] = useState([]);

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Enter Anime Name"
        value={anime.title}
        onChange={(e) => setAnime((a) => ({ ...a, title: e.target.value }))}
      />
      <input
        type="Date"
        value={anime.date}
        onChange={(e) => setAnime((a) => ({ ...a, date: e.target.value }))}
      />
      <input
        type="number"
        value={anime.rating}
        placeholder="Enter Rating"
        onChange={(e) =>
          setAnime((a) => ({ ...a, rating: Number(e.target.value) }))
        }
      />
      <button
        onClick={() => {
          setList((l) => [...l, anime]);
          setAnime({ title: "", date: "", rating: "" });
        }}
      >
        Submit
      </button>
      <AnimeList list={list} />
    </div>
  );
}

export default AnimeSearch;
