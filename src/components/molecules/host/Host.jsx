import HostName from "../../atoms/detailedCardAtoms/hostName/HostName";
import HostThumbnail from "../../atoms/detailedCardAtoms/hostThumbnail/HostThumbnail";
import "./host.scss";

const Host = ({ idLogement }) => {
  return (
    <div className="host__container">
      <HostName idLogement={idLogement} />
      <HostThumbnail idLogement={idLogement} />
    </div>
  );
};

export default Host;
