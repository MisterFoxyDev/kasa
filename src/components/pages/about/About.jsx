import ImageIntro from "../../atoms/imageIntro/ImageIntro";
import AboutQualityList from "../../molecules/aboutQualityList/AboutQualityList";
import "./about.scss";

const About = ({ banner, content }) => {
  return (
    <div className="about">
      <ImageIntro banner={banner} content={content} />
      <AboutQualityList />
    </div>
  );
};

export default About;
