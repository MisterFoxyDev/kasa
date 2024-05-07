import ImageIntro from "../../atoms/imageIntro/ImageIntro";
import "./about.scss";

const About = ({ banner, content }) => {
  return (
    <div className="about">
      <ImageIntro banner={banner} content={content} />
    </div>
  );
};

export default About;
