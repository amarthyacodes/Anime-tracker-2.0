function AnimeCard(props) {
  return (
    <div className="anime-card">
      <img className="anime-img" src="/2098972.jpg" alt="anime-img" />
      <div className="anime-details">
        <h3>{props.title}</h3>
        <p>Date: {props.date}</p>
        <p>Rating: {props.rating}/10</p>
      </div>
    </div>
  );
}

export default AnimeCard;
