import React from "react";
import "./index.css";

const Floating = ({ img, text }) => {
  return (
    // darkMode
    <div className="floating">
      <img src={img} alt="" />
      <span>{text}</span>
    </div>
  );
};

export default Floating;
