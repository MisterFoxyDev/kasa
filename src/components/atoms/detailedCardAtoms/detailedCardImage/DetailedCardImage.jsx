import { useState } from "react";
import leftArrow from "../../../../assets/images/leftArrow.png";
import rightArrow from "../../../../assets/images/rightArrow.png";
import "./detailedCardImage.scss";

const DetailedCardImage = ({ logement }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  const handleNext = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % logement.pictures.length,
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + logement.pictures.length) % logement.pictures.length,
    );
  };

  return (
    <div className="detailed-card__image-container">
      {logement && (
        <>
          <img
            className="gallery__arrow-left"
            src={leftArrow}
            alt="Précédent"
            onClick={handlePrev}
          />
          <img
            className="current-gallery__image"
            src={logement.pictures[currentImageIndex]}
            alt={logement.title}
          />
          <img
            className="gallery__arrow-right"
            src={rightArrow}
            alt="Suivant"
            onClick={handleNext}
          />
        </>
      )}
    </div>
  );
};

export default DetailedCardImage;
