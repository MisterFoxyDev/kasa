import "./description.scss";
import logements from "../../../../assets/logements/logements.json";

const Description = ({ idLogement }) => {
  const logement = logements.find((logement) => logement.id === idLogement);
  return <div className="description__title">{logement.title}</div>;
};

export default Description;
