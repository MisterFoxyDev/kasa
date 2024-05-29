import HostName from "../../atoms/detailedCardAtoms/hostName/HostName";
import HostThumbnail from "../../atoms/detailedCardAtoms/hostThumbnail/HostThumbnail";
import "./host.scss";

const Host = ({ logement }) => {
  return (
    <div className="host__container">
      <HostName logement={logement} />
      <HostThumbnail logement={logement} />
    </div>
  );
};

export default Host;
