import "./cardBackground.scss";

const CardBackground = ({ cover }) => {
  return (
    <div className="card-background" style={{ backgroundImage: `url(${cover})` }}></div>
  );
};

export default CardBackground;