import "./areaLocation.scss";
import logements from "../../../../assets/logements/logements.json";

const AreaLocation = ({ idLogement }) => {
  const logement = logements.find((logement) => logement.id === idLogement);
  return <div className="area-location">
    {logement.location}
  </div>;
};

export default AreaLocation;
