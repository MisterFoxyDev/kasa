import ImageIntro from "../../atoms/imageIntro/ImageIntro";
import "./about.scss";

const About = ({ banner }) => {
  return (
    <div className="about">
      <ImageIntro banner={banner} />
    </div>
  );
};

export default About;
