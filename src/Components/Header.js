import React from "react";
import "./Header.css";
const Header = ({ headerExpanded }) => {
  return (
    <div className="head-container">
      <img
        className={`head_image ${
          headerExpanded ? "head_image_expanded" : "head_image_contracted"
        }`}
        src="http://assets.stickpng.com/thumbs/5e8f085dee3ef200041aa0da.png"
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
