import { useNavigate, useParams } from "react-router-dom";
import "./fiche-logement.scss";
import DetailedCard from "../../organisms/detailedCard/DetailedCard";
import { useEffect, useState } from "react";
import logements from "../../../assets/logements/logements.json";
import DetailedCardImage from "../../atoms/detailedCardAtoms/detailedCardImage/DetailedCardImage";
import DetailedCardDescription from "../../molecules/detailedCardDescription/DetailedCardDescription";

const FicheLogement = () => {
  const { idLogement } = useParams();
  const navigate = useNavigate();

  const [logement, setLogement] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const currentLogement = logements.find((lg) => lg.id === idLogement);
    if (!currentLogement) {
      navigate("/error");
    }
    setLogement(currentLogement);
  }, [idLogement, navigate]);

  return logement === null ? (
    <p>Loading</p>
  ) : (
    <DetailedCard>
      <DetailedCardImage logement={logement} />
      <DetailedCardDescription logement={logement} />
    </DetailedCard>
  );
};

export default FicheLogement;
