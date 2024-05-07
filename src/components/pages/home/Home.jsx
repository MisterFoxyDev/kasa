import "./home.scss";
import Gallery from "../../organisms/Gallery/Gallery";
import ImageIntro from "../../atoms/imageIntro/ImageIntro";

function Home({ banner, content }) {
  return (
    <div className="home">
      <ImageIntro banner={banner} content={content} />
      <Gallery />
    </div>
  );
}

export default Home;
