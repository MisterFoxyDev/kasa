import Host from "../host/Host";
import Location from "../location/Location";
import "./detailedCardinfo1.scss";

const DetailedCardInfo1 = ({ idLogement }) => {
  return (
    <div className="info-1__container">
      <Location idLogement={idLogement} />
      <Host idLogement={idLogement} />
    </div>
  );
};

export default DetailedCardInfo1;
