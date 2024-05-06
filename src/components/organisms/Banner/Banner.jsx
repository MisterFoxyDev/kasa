import { Link } from "react-router-dom";
import bannerImage from "../../../assets/images/banner-logo.png";
import "./banner.scss";

const Banner = () => {
  return (
    <div className="banner-container">
      <img className="banner-logo" src={bannerImage} alt="logo kasa" />
      <div className="banner-nav">
        <Link className="navlink" to="/">Accueil</Link>
        <Link className="navlink" to="/about">A Propos</Link>
      </div>
    </div>
  );
};

export default Banner;
