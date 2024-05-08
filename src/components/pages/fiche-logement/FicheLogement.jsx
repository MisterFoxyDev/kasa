import { useParams } from "react-router-dom";
import "./fiche-logement.scss";
import DetailedCard from "../../organisms/detailedCard/DetailedCard";
import { useEffect } from "react";

const FicheLogement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { idLogement } = useParams();

  return (
    <div>
      <DetailedCard idLogement={idLogement} />
    </div>
  );
};

export default FicheLogement;