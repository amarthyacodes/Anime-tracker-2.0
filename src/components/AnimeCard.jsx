import { Trash2 } from "lucide-react";
import "./AnimeCard.css";

function AnimeCard(props) {
  return (
    <div className="anime-card">
      <img className="anime-img" src={`${props.imgurl}`} alt="anime-img" />

      <div className="title-rating">
        <div className="anime-details">
          <h3>{props.title}</h3>
          <p className="status-css">{props.status}</p>
        </div>
        <div className="rating-delete">
          {props.rating !== "Not rated" && <span>⭐ </span>}
          <p>{props.rating}</p>
          <button
            className="delete"
            onClick={() => props.onDelete(props.title)}
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AnimeCard;
