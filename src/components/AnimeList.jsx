import { useState } from "react";
import AnimeCard from "./AnimeCard";
import "./AnimeList.css";

function AnimeList(props) {
  const animes = props.list;
  const onDelete = props.onDelete;
  const searchTerm = props.searchTerm;
  const [statusFilter, setStatusFilter] = useState("All");

  const searchAnime = animes.filter((anime) =>
    anime.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return animes.length === 0 ? (
    <h3 className="no-anime">No anime added</h3>
  ) : searchAnime.length === 0 ? (
    <h3 className="no-anime">No anime found</h3>
  ) : (
    <div className="anime-grid">
      <div className="filter">
        <div className="my-anime">
          <p>My Anime</p>
          <p style={{ fontSize: "1rem", color: "#9ca3af" }}>
            {animes.length} anime
          </p>
        </div>
        <div className="filter-buttons-div">
          <button className="filter-buttons">All</button>
          <button className="filter-buttons">Watching</button>
          <button className="filter-buttons">Completed</button>
          <button className="filter-buttons">On Hold</button>
          <button className="filter-buttons">Plan to Watch</button>
          <button className="filter-buttons">Dropped</button>
        </div>
      </div>
      <div className="anime-list">
        {searchAnime.map((anime, index) => (
          <AnimeCard
            key={index}
            title={anime.title}
            status={anime.status}
            rating={anime.rating}
            imgurl={anime.imgurl}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default AnimeList;
