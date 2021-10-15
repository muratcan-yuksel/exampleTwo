import React from "react";
import backgroundImg from "../assets/header.jpg";
import "../styles/header.css";
const Header = () => {
  return (
    <div>
      {/* <div id="headerTextContainer"> */}
      <h3 id="headerText">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
        incidunt nisi explicabo quasi ut, animi aut, deleniti perferendis
        eveniet et praesentium porro quis minima quo, sed in ratione pariatur
        debitis.
      </h3>
      {/* </div> */}
      <div id="headerImg">
        <img id="image" src={backgroundImg} alt="" />
      </div>
    </div>
  );
};

export default Header;
