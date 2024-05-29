import { useNavigate, useParams } from "react-router-dom";
import "./fiche-logement.scss";
import DetailedCard from "../../organisms/detailedCard/DetailedCard";
import { useEffect } from "react";
import logements from "../../../assets/logements/logements.json";

const FicheLogement = () => {
  const { idLogement } = useParams();
  const navigate = useNavigate();
  const logement = logements.find((logement) => logement.id === idLogement);
  //Pas de logique dans le global

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
    <div>
      <DetailedCard idLogement={idLogement} />
    </div>
  );
};

export default FicheLogement;
