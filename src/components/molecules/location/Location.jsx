import AreaLocation from "../../atoms/detailedCardAtoms/areaLocation/AreaLocation";
import Description from "../../atoms/detailedCardAtoms/description/Description";
import "./location.scss";

const Location = ({ idLogement }) => {
  return (
    <div>
      <Description idLogement={idLogement} />
      <AreaLocation idLogement={idLogement} />
    </div>
  );
};

export default Location;
