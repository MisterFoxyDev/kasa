import "./collapseItem.scss";
import arrow from "../../../assets/images/arrow-up.png";
import { useState } from "react";

const CollapseItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const renderContent = () => {
    if (Array.isArray(content)) {
      return (
        <ul>
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    } else {
      return content;
    }
  };

  return (
    <div>
      <div className="dropdown__title">
        {title}
        <img
          className={isOpen ? "arrow-down" : ""}
          src={arrow}
          alt="open menu"
          onClick={toggleMenu}
        />
      </div>
      <div className={`dropdown__content ${isOpen ? "open" : ""}`}>
        {renderContent()}
      </div>
    </div>
  );
};

export default CollapseItem;
