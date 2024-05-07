import "./imageIntro.scss";

const ImageIntro = ({ banner, content }) => {
  return (
    <div className="body-home-banner">
      <img className="body-home-banner-img" src={banner} alt="" />
      <h1 className="body-home-banner-text">{content}</h1>
    </div>
  );
};

export default ImageIntro;
