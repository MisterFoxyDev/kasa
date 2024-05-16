import Rating from "../../atoms/detailedCardAtoms/rating/Rating";
import Host from "../host/Host"
import "./detailedCardInfo2.scss";

const DetailedCardInfo2 = ({ idLogement }) => {
  return (
    <div className="info2__container">
      <Rating idLogement={idLogement} />
      <Host idLogement={idLogement} />
    </div>
  );
};

export default DetailedCardInfo2;
