import AnimeCard from "./AnimeCard";

function AnimeList(props) {
  const animes = props.list;

  return (
    <div className="anime-list">
      {animes.map((anime, index) => (
        <AnimeCard
          key={index}
          title={anime.title}
          date={anime.date}
          rating={anime.rating}
        />
      ))}
    </div>
  );
}

export default AnimeList;
