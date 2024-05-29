import "./descriptionDropdownMenu.scss";
import CollapseItem from "../../../atoms/collapseItem/CollapseItem";


const DescriptionDropdownMenu = ({ logement }) => {

  return (
    <div className="description-dropdown__container">
      <CollapseItem title="Description" content={logement.description} />
    </div>
  );
};

export default DescriptionDropdownMenu;
