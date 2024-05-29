import "./home.scss";
import Gallery from "../../organisms/Gallery/Gallery";
import ImageIntro from "../../atoms/imageIntro/ImageIntro";

function Home({ banner }) {
  const homeContent = "Chez vous, partout et ailleurs";
  return (
    <div className="home">
      <ImageIntro banner={banner} content={homeContent} />
      <Gallery />
    </div>
  );
}

export default Home;
