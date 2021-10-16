import React from "react";
import backgroundImg from "../assets/header.jpg";
import "../styles/header.css";
const Header = () => {
  return (
    <div>
      {/* <div id="headerTextContainer"> */}
      <h3 id="headerText">Lorem ipsum dolor sit amet</h3>
      {/* </div> */}
      <div id="headerImg">
        <img id="image" src={backgroundImg} alt="" />
      </div>
    </div>
  );
};

export default Header;
