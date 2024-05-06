import bannerImage from "../../../assets/images/banner-logo.png";
import "./banner.scss";

const Banner = () => {
  return (
    <div className="banner-container">
      <img className="banner-logo" src={bannerImage} alt="logo kasa" />
      <div className="banner-nav">
        <nav className="navlink">Accueil</nav>
        <nav className="navlink">A Propos</nav>
      </div>
    </div>
  );
};

export default Banner;
