import { useState } from "react";
import logements from "../../../../assets/logements/logements.json";
import leftArrow from "../../../../assets/images/leftArrow.png";
import rightArrow from "../../../../assets/images/rightArrow.png";
import "./detailedCardImage.scss";

const DetailedCardImage = ({ idLogement }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const logement = logements.find((logement) => logement.id === idLogement);

  const handleNext = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % logement.pictures.length
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + logement.pictures.length) % logement.pictures.length
    );
  };

  return (
    <div className="detailed-card__image-container">
      {logement && (
        <>
          <img className="gallery__arrow-left" src={leftArrow} alt="Précédent" onClick={handlePrev} />
          <img className="current-gallery__image"
            src={logement.pictures[currentImageIndex]}
            alt={logement.title}
          />
          <img className="gallery__arrow-right" src={rightArrow} alt="Suivant" onClick={handleNext} />
        </>
      )}
    </div>
  );
};

export default DetailedCardImage;