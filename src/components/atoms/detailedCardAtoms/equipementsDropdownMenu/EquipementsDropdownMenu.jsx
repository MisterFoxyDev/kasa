import "./equipementsDropdownMenu.scss";
import CollapseItem from "../../../atoms/collapseItem/CollapseItem";
import logements from "../../../../assets/logements/logements.json"

const EquipementsDropdownMenu = ({ idLogement }) => {
  const logement = logements.find((logement) => logement.id === idLogement);

  return (
    <div className="equipements-dropdown__container">
      <CollapseItem title="Équipements" content={logement.equipments} />
    </div>
  );
};

export default EquipementsDropdownMenu;