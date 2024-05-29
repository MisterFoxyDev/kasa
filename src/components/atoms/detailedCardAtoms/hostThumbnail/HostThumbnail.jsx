import "./hostThumbnail.scss";

const hostThumbnail = ({ logement }) => {

  return (
    <div>
      <img className="host__thumbnail" src={logement.host.picture} alt="Propriétaire" />
    </div>
  );
};

export default hostThumbnail;
