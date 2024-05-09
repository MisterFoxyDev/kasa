import "./aboutQualityList.scss";
import qualities from "../../../assets/valeurs/valeurs.json";
import CollapseItem from "../../atoms/collapseItem/CollapseItem";

const AboutQualityList = () => {
  return (
    <div className="quality-list__container">
      {qualities.map((quality, index) => (
        <CollapseItem
          key={`${quality.name}-${index}`}
          title={quality.name}
          content={quality.content}
        />
      ))}
    </div>
  );
};

export default AboutQualityList;
