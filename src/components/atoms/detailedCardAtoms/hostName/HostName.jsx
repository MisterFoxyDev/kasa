import "./hostName.scss";

const HostName = ({ logement }) => {

  return <div className="host__name">{logement.host.name}</div>;
};

export default HostName;
