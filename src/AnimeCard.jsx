function AnimeCard(props) {
  return (
    <div className="anime-card">
      <img className="anime-img" src={`${props.imgurl}`} alt="anime-img" />

      <div className="title-rating">
        <div className="anime-details">
          <h3>{props.title}</h3>
          <p>{props.date}</p>
        </div>
        <p>&#11088; {props.rating}</p>
      </div>
    </div>
  );
}

export default AnimeCard;
