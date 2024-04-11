import footerImage from "../../../assets/images/footer.png";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="container">
      <img className="footer" src={footerImage} alt="footer" />
    </div>
  );
};

export default Footer;
