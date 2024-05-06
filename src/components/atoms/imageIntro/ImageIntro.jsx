import "./imageIntro.scss";



const ImageIntro = ({ banner }) => {
    return (
      <div className="body-home-banner">
        <img className="body-home-banner-img" src={banner} alt="" />
        <h1 className="body-home-banner-text">Chez vous, partout et ailleurs</h1>
      </div>
    );
  };

export default ImageIntro;
