import DescriptionDropdownMenu from "../../atoms/detailedCardAtoms/descriptionDropdownMenu/DescriptionDropdownMenu";
import EquipementsDropdownMenu from "../../atoms/detailedCardAtoms/equipementsDropdownMenu/EquipementsDropdownMenu";
import DetailedCardInfo1 from "../detailedCardInfo1/DetailedCardInfo1";
import DetailedCardInfo2 from "../detailedCardInfo2/DetailedCardInfo2";

import "./detailedCardDescription.scss";

const detailedCardDescription = ({ idLogement }) => {
  return (
    <div>
      <section className="detailed-card-infos">
        <DetailedCardInfo1 />
        <DetailedCardInfo2 />
      </section>
      <section className="dropdown-menues">
        <DescriptionDropdownMenu idLogement={idLogement} />
        <EquipementsDropdownMenu idLogement={idLogement} />
      </section>
    </div>
  );
};

export default detailedCardDescription;
