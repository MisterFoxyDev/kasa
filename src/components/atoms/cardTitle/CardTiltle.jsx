import "./cardTitle.scss";

const CardTitle = ({ title }) => {
  return (
    <div>
      <p className="card__title">{title}</p>
    </div>
  );
};

export default CardTitle;
