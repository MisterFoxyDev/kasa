import "./aboutQualityDropdown.scss";
import arrowUp from "../../../assets/images/arrow-up.png";
import arrowDown from "../../../assets/images/arrow-down.png";
import { useState } from "react";

const AboutQualityDropdown = ({ quality, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="single-quality">
        {quality}
        <img
          src={isOpen ? arrowDown : arrowUp}
          alt="open menu"
          onClick={toggleMenu}
        />
      </div>
      {isOpen && <div className="dropdown__content">{content}</div>}
    </div>
  );
};

export default AboutQualityDropdown;
