import "./home.scss";
import bodyHomeBanner from "../../../assets/images/body-home-banner.png";
import Gallery from "../../organisms/Gallery/Gallery";

function Home() {
  return (
    <div className="home">
      <div className="body-home-banner">
        <img className="body-home-banner-img" src={bodyHomeBanner} alt="" />
        <h1 className="body-home-banner-text">
          Chez vous, partout et ailleurs
        </h1>
        <Gallery />
      </div>
    </div>
  );
}

export default Home;
