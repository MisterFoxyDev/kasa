import "./detailedCard.scss";
import DetailedCardImage from "../../atoms/detailedCardAtoms/detailedCardImage/DetailedCardImage";
import DetailedCardDescription from "../../molecules/detailedCardDescription/DetailedCardDescription";

const DetailedCard = ({ idLogement }) => {
  return (
    <div className="detailed-card-container">
      <DetailedCardImage idLogement={idLogement} />
      <DetailedCardDescription idLogement={idLogement} />
    </div>
  );
};

export default DetailedCard;
