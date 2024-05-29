import ImageIntro from "../../atoms/imageIntro/ImageIntro";
import AboutQualityList from "../../molecules/aboutQualityList/AboutQualityList";
import "./about.scss";

const About = ({ banner }) => {
  const aboutContent = "";
  return (
    <div className="about">
      <ImageIntro banner={banner} content={aboutContent} />
      <AboutQualityList />
    </div>
  );
};

export default About;
