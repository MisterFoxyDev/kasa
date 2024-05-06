import "./App.scss";
import bodyHomeBanner from "../../../assets/images/body-home-banner.png";
import Gallery from "../Gallery/Gallery";

function App() {
  return (
    <div className="App">
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

export default App;
