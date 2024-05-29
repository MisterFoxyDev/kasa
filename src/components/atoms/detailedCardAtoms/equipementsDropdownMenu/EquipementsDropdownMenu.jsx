import "./equipementsDropdownMenu.scss";
import CollapseItem from "../../../atoms/collapseItem/CollapseItem";


const EquipementsDropdownMenu = ({ logement }) => {

  return (
    <div className="equipements-dropdown__container">
      <CollapseItem title="Équipements" content={logement.equipments} />
    </div>
  );
};

export default EquipementsDropdownMenu;