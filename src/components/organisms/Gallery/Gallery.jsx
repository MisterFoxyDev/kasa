import Card from "../../molecules/Card/Card";
import "./gallery.scss";
import logements from "../../../assets/logements/logements.json";

const Gallery = () => {
  return (
    <div className="gallery">
      {logements.map((logement) => (
        <Card
          key={logement.id}
          id={logement.id}
          cover={logement.cover}
          title={logement.title}
        />
      ))}
    </div>
  );
};

export default Gallery;
