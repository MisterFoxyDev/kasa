import "./tagList.scss";

const TagList = ({ logement }) => {
  const tags = logement.tags;

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
