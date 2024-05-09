import "./hostThumbnail.scss";
import logements from "../../../../assets/logements/logements.json";

const hostThumbnail = ({ idLogement }) => {
  const logement = logements.find((logement) => logement.id === idLogement);
  return (
    <div>
      <img className="host__thumbnail" src={logement.host.picture} alt="Propriétaire" />
    </div>
  );
};

export default hostThumbnail;
