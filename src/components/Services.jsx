import React from "react";
import "../styles/services.css";
import happyPerson from "../assets/happyPerson.jpg";

const WaysToWork = () => {
  return (
    <div>
      <h1 id="servicesTitle">My Services</h1>
      <div id="servicesContainer">
        <div className="service">
          <div className="leftSide">
            <h1>Lorem ipsum</h1>
            <div className="serviceImgContainer">
              <img className="serviceImage" src={happyPerson} alt="" />
            </div>
          </div>
          <div className="rightSide"></div>
        </div>
      </div>
    </div>
  );
};

export default WaysToWork;
