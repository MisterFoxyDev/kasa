import "./rating.scss";
import logements from "../../../../assets/logements/logements.json";
import starActive from "../../../../assets/images/star-active.png";
import starInactive from "../../../../assets/images/star-inactive.png";

const Rating = ({ idLogement }) => {
  const rating = logements.find(
    (logement) => logement.id === idLogement,
  ).rating;

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <img className="star__img" key={i} src={i <= rating ? starActive : starInactive} alt="star" />,
    );
  }

  return <div className="stars__container">{stars}</div>;
};

export default Rating;
