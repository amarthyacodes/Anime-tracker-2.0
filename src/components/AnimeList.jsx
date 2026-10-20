import { useState } from "react";
import AnimeCard from "./AnimeCard";
import "../css/AnimeList.css";

function AnimeList(props) {
  const animes = props.list;
  const onEdit = props.onEdit;
  const onDelete = props.onDelete;
  const searchTerm = props.searchTerm;
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortFilter, setSortFilter] = useState("");
  const [editingAnime, setEditingAnime] = useState(null);

  const handleEdit = (title) => {
    setEditingAnime(animes.find((a) => a.title === title));
  };

  const searchAnime = animes.filter((anime) =>
    anime.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  const filteredAnime = searchAnime.filter(
    (anime) => anime.status === statusFilter || statusFilter === "All",
  );
  const sortedAnime = [...filteredAnime];
  if (sortFilter === "A-Z")
    sortedAnime.sort((a, b) => a.title.localeCompare(b.title));
  else if (sortFilter === "Z-A")
    sortedAnime.sort((a, b) => b.title.localeCompare(a.title));
  else if (sortFilter === "1-10") {
    sortedAnime.sort((a, b) => {
      if (a.rating === "Not rated") return 1;
      else if (b.rating === "Not rated") return -1;
      else {
        return a.rating - b.rating;
      }
    });
  } else if (sortFilter === "10-1")
    sortedAnime.sort((a, b) => {
      if (a.rating === "Not rated") return 1;
      else if (b.rating === "Not rated") return -1;
      else {
        return b.rating - a.rating;
      }
    });

  return animes.length === 0 ? (
    <h3 className="no-anime">No anime added</h3>
  ) : (
    <div className="anime-grid">
      <div className="filter">
        <div className="my-anime">
          <p>My Anime</p>
          <div className="p-sort">
            <p style={{ fontSize: "1rem", color: "#9ca3af" }}>
              {animes.length} anime
            </p>
            <select
              className="sorting"
              value={sortFilter}
              onChange={(e) => setSortFilter(e.target.value)}
            >
              <option value="">Sort</option>
              <option value="A-Z">Title: A-Z</option>
              <option value="Z-A">Title: Z-A</option>
              <option value="1-10">Rating: 1-10</option>
              <option value="10-1">Rating: 10-1</option>
            </select>
          </div>
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
        {sortedAnime.length === 0 ? (
          <h3 className="no-anime">No anime found</h3>
        ) : (
          sortedAnime.map((anime, index) => (
            <AnimeCard
              key={index}
              title={anime.title}
              status={anime.status}
              rating={anime.rating}
              imgurl={anime.imgurl}
              onDelete={onDelete}
              handleEdit={handleEdit}
            />
          ))
        )}
      </div>
      {editingAnime ? (
        <div className="edit-div">
          <div className="search2">
            <select
              className="status-input"
              value={editingAnime.status}
              onChange={(e) =>
                setEditingAnime((a) => ({ ...a, status: e.target.value }))
              }
            >
              <option value="">Status</option>
              <option value="Watching">Watching</option>
              <option value="Completed">Completed</option>
              <option value="On Hold">On Hold</option>
              <option value="Plan to Watch">Plan to Watch</option>
              <option value="Dropped">Dropped</option>
            </select>
            <input
              className="rating-input"
              type="number"
              value={editingAnime.rating}
              placeholder="Select rating"
              onChange={(e) =>
                setEditingAnime((a) => ({
                  ...a,
                  rating: e.target.value === "" ? "" : Number(e.target.value),
                }))
              }
            />
            <button className="submit" onClick={() => setEditingAnime(null)}>
              cancel
            </button>
            <button
              className="submit"
              onClick={() => {
                onEdit(editingAnime);
                setEditingAnime(null);
              }}
            >
              Save Changes
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default AnimeList;
