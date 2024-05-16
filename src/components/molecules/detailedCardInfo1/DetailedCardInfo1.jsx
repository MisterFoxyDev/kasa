import TagList from "../../atoms/detailedCardAtoms/tagList/TagList";
import Location from "../location/Location";
import "./detailedCardinfo1.scss";

const DetailedCardInfo1 = ({ idLogement }) => {
  return (
    <div className="info-1__container">
      <Location idLogement={idLogement} />
      <TagList idLogement={idLogement} />
    </div>
  );
};

export default DetailedCardInfo1;
