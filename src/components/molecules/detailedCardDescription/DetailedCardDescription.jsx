import DescriptionDropdownMenu from "../../atoms/detailedCardAtoms/descriptionDropdownMenu/DescriptionDropdownMenu";
import EquipementsDropdownMenu from "../../atoms/detailedCardAtoms/equipementsDropdownMenu/EquipementsDropdownMenu";
import DetailedCardInfo1 from "../detailedCardInfo1/DetailedCardInfo1";
import DetailedCardInfo2 from "../detailedCardInfo2/DetailedCardInfo2";

import "./detailedCardDescription.scss";

const detailedCardDescription = ({ idLogement }) => {
  return (
    <div className="detailed-card__container">
      <section className="detailed-card__infos-container">
        <DetailedCardInfo1 idLogement={idLogement} />
        <DetailedCardInfo2 idLogement={idLogement} />
      </section>
      <section className="dropdown-menues">
        <DescriptionDropdownMenu idLogement={idLogement} />
        <EquipementsDropdownMenu idLogement={idLogement} />
      </section>
    </div>
  );
};

export default detailedCardDescription;
