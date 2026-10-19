import { useState } from "react";
import AnimeCard from "./AnimeCard";
import "../css/AnimeList.css";

function AnimeList(props) {
  const animes = props.list;
  const onDelete = props.onDelete;
  const searchTerm = props.searchTerm;
  const [statusFilter, setStatusFilter] = useState("All");

  const searchAnime = animes.filter((anime) =>
    anime.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  const filteredAnime = searchAnime.filter(
    (anime) => anime.status === statusFilter || statusFilter === "All",
  );
  return animes.length === 0 ? (
    <h3 className="no-anime">No anime added</h3>
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
          <button
            className={`filter-buttons ${statusFilter === "All" ? "active" : ""}`}
            onClick={() => {
              setStatusFilter("All");
            }}
          >
            All
          </button>
          <button
            className={`filter-buttons ${statusFilter === "Watching" ? "active" : ""}`}
            onClick={() => {
              setStatusFilter("Watching");
            }}
          >
            Watching
          </button>
          <button
            className={`filter-buttons ${statusFilter === "Completed" ? "active" : ""}`}
            onClick={() => {
              setStatusFilter("Completed");
            }}
          >
            Completed
          </button>
          <button
            className={`filter-buttons ${statusFilter === "On Hold" ? "active" : ""}`}
            onClick={() => {
              setStatusFilter("On Hold");
            }}
          >
            On Hold
          </button>
          <button
            className={`filter-buttons ${statusFilter === "Plan to Watch" ? "active" : ""}`}
            onClick={() => {
              setStatusFilter("Plan to Watch");
            }}
          >
            Plan to Watch
          </button>
          <button
            className={`filter-buttons ${statusFilter === "Dropped" ? "active" : ""}`}
            onClick={() => {
              setStatusFilter("Dropped");
            }}
          >
            Dropped
          </button>
        </div>
      </div>
      <div className="anime-list">
        {filteredAnime.length === 0 ? (
          <h3 className="no-anime">No anime found</h3>
        ) : (
          filteredAnime.map((anime, index) => (
            <AnimeCard
              key={index}
              title={anime.title}
              status={anime.status}
              rating={anime.rating}
              imgurl={anime.imgurl}
              onDelete={onDelete}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default AnimeList;
