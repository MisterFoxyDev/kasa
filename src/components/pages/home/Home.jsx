import "./home.scss";
import Gallery from "../../organisms/Gallery/Gallery";
import ImageIntro from "../../atoms/imageIntro/ImageIntro";

function Home({ banner }) {
  return (
    <div className="home">
      <ImageIntro banner={banner} />
      <Gallery />
    </div>
  );
}

export default Home;
