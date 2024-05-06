import footerImage from "../../../assets/images/footer.png";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <img className="footer-img" src={footerImage} alt="footer" />
    </div>
  );
};

export default Footer;
