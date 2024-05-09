import "./descriptionDropdownMenu.scss";
import CollapseItem from "../../../atoms/collapseItem/CollapseItem";
import logements from "../../../../assets/logements/logements.json";

const DescriptionDropdownMenu = ({ idLogement }) => {
  const logement = logements.find((logement) => logement.id === idLogement);
  return (
    <div className="description-dropdown__container">
      <CollapseItem title="Description" content={logement.description} />
    </div>
  );
};

export default DescriptionDropdownMenu;
