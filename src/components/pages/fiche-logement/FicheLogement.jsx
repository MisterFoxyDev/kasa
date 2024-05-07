import { useParams } from "react-router-dom";
import "./fiche-logement.scss";


const FicheLogement = () => {

const { idLogement } = useParams(); 

  return ( <div>
<p>Logement : {idLogement}</p>
</div>
)};

export default FicheLogement;