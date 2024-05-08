import "./rating.scss";

const logements = require("../../../../assets/logements/logements.json");

const Rating = ({ idLogement }) => {
  const rating = logements.find(
    (logement) => logement.id === idLogement,
  ).rating;
  return <div>Rating : {rating}</div>;
};

export default Rating;
