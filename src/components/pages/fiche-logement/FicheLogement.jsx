import { useNavigate, useParams } from "react-router-dom";
import "./fiche-logement.scss";
import DetailedCard from "../../organisms/detailedCard/DetailedCard";
import { useEffect } from "react";
import logements from "../../../assets/logements/logements.json";
import DetailedCardImage from "../../atoms/detailedCardAtoms/detailedCardImage/DetailedCardImage";
import DetailedCardDescription from "../../molecules/detailedCardDescription/DetailedCardDescription";

const FicheLogement = () => {
  const { idLogement } = useParams();
  const navigate = useNavigate();

  const logementsById = logements.reduce((obj, logement) => {
    obj[logement.id] = logement;
    return obj;
  }, {});
  const logement = logementsById[idLogement];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!logement) {
      navigate("/error");
    }
  }, [logement, navigate]);

  if (!logement) {
    return null;
  }

  return (
    <DetailedCard>
      <DetailedCardImage logement={logement} />
      <DetailedCardDescription logement={logement} />
    </DetailedCard>
  );
};

export default FicheLogement;
