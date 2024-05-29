import DescriptionDropdownMenu from "../../atoms/detailedCardAtoms/descriptionDropdownMenu/DescriptionDropdownMenu";
import EquipementsDropdownMenu from "../../atoms/detailedCardAtoms/equipementsDropdownMenu/EquipementsDropdownMenu";
import Rating from "../../atoms/detailedCardAtoms/rating/Rating";
import TagList from "../../atoms/detailedCardAtoms/tagList/TagList";
import DetailedCardInfo1 from "../detailedCardInfo1/DetailedCardInfo1";
import DetailedCardInfo2 from "../detailedCardInfo2/DetailedCardInfo2";
import Host from "../host/Host";
import Location from "../location/Location";

import "./detailedCardDescription.scss";

const detailedCardDescription = ({ logement }) => {
  return (
    <div className="detailed-card__container">
      <section className="detailed-card__infos-container">
        <DetailedCardInfo1>
          <Location logement={logement} />
          <TagList logement={logement} />
        </DetailedCardInfo1>
        <DetailedCardInfo2>
          <Rating logement={logement} />
          <Host logement={logement} />
        </DetailedCardInfo2>
      </section>
      <section className="dropdown-menues">
        <DescriptionDropdownMenu logement={logement} />
        <EquipementsDropdownMenu logement={logement} />
      </section>
    </div>
  );
};

export default detailedCardDescription;
