import AboutQualityDropdown from "../../atoms/aboutQualityDropdown/AboutQualityDropdown";
import "./aboutQualityList.scss";
import qualities from "../../../assets/valeurs/valeurs.json";

const AboutQualityList = () => {
  return (
    <div className="quality-list__container">
      {qualities.map((quality, index) => (
        <AboutQualityDropdown
          key={`${quality.name}-${index}`}
          quality={quality.name}
          content={quality.content}
        />
      ))}
    </div>
  );
};

export default AboutQualityList;
