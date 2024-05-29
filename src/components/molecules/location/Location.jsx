import "./location.scss";

const Location = ({ logement }) => {
  return (
    <>
    <div>
      <div className="description__title">{logement.title}</div>
    </div>
    <div className="area-location">
    {logement.location}
  </div>
  </>
  );
};

export default Location;
