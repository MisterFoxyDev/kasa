import "./hostName.scss";
import logements from "../../../../assets/logements/logements.json";

const HostName = ({ idLogement }) => {
  const logement = logements.find((logement) => logement.id === idLogement);

  return <div className="host__name">{logement.host.name}</div>;
};

export default HostName;
