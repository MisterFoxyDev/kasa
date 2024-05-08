import { Link } from "react-router-dom";
import CardBackground from "../../atoms/cardBackground/CardBackground";
import "./card.scss";
import CardTitle from "../../atoms/cardTitle/CardTiltle";

const Card = ({ id, cover, title }) => {
  return (
    <div className="card">
      <Link to={`/fiche-logement/${id}`}>
        <CardBackground className="card-cover" cover={cover} />
        <CardTitle title={title} />
      </Link>
    </div>
  );
};

export default Card;
