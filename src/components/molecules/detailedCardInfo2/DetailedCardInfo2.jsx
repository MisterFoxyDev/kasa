import Rating from "../../atoms/detailedCardAtoms/rating/Rating";
import TagLList from "../../atoms/detailedCardAtoms/tagList/TagList";
import "./detailedCardInfo2.scss";

const DetailedCardInfo2 = ({ idLogement }) => {
  return ( <div className="info2__container">
<TagLList idLogement={idLogement} />
<Rating idLogement={idLogement} />
</div>
)};

export default DetailedCardInfo2;