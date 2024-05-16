import "./tagList.scss";

const logements = require("../../../../assets/logements/logements.json");

const TagList = ({ idLogement }) => {
  const tags = logements.find((logement) => logement.id === idLogement).tags;

  return (
    <div className="tag-list__container">
      {tags.map((tag, index) => (
        <span key={`${tag}-${index}`} className="tag__container">
          {tag}
        </span>
      ))}
    </div>
  );
};

export default TagList;
