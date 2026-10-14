import AnimeCard from "./AnimeCard";

function AnimeList(props) {
  const animes = props.list;
  const onDelete = props.onDelete;

  return (
    <div className="anime-list">
      {animes.map((anime, index) => (
        <AnimeCard
          key={index}
          title={anime.title}
          date={anime.date}
          rating={anime.rating}
          imgurl={anime.imgurl}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default AnimeList;
