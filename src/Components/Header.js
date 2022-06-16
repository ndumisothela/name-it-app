import React from "react";
import "./Header.css";
const Header = ({ headerExpanded }) => {
  return (
    <div className="head-container">
      <img
        className={`head_image ${
          headerExpanded ? "head_image_expanded" : "head_image_contracted"
        }`}
        src="http://assets.stickpng.com/thumbs/580b57fbd9996e24bc43be13.png"
        alt="header_photo"
      />
      <h1
        className={`head_text ${
          headerExpanded ? "head_text_expanded" : "head_text_contracted"
        }`}
      >
        NAME IT !
      </h1>
    </div>
  );
};

export default Header;
