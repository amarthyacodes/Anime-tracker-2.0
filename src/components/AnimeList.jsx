import AnimeCard from "./AnimeCard";
import "./AnimeList.css";

function AnimeList(props) {
  const animes = props.list;
  const onDelete = props.onDelete;
  const searchTerm = props.searchTerm;

  const searchAnime = animes.filter((anime) =>
    anime.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  return searchAnime.length === 0 ? (
    <h3 className="no-anime">No anime found</h3>
  ) : (
    <div className="anime-grid">
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
