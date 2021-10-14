import React from "react";
import "../styles/discover.css";
import feelgood1 from "../assets/feelgood1.jpg";
import feelgood2 from "../assets/feelgood2.jpg";
import feelgood3 from "../assets/feelgood3.jpg";
import feelgood4 from "../assets/feelgood4 .jpg";

const Discover = () => {
  return (
    <div id="discoverContainer">
      <h1>
        Discover the programs that have helped thousands heal their mind and
        transform their life
      </h1>
      <div id="discoverWrapper">
        <div className="discoverImgContainer">
          <img className="discoverImg" src={feelgood1} alt="" />
          <p className="discoverPara">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui labore
            sapiente soluta nihil cumque
          </p>
        </div>
        <div className="discoverImgContainer">
          <img className="discoverImg" src={feelgood2} alt="" />
          <p className="discoverPara">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui labore
            sapiente soluta nihil cumque?
          </p>
        </div>
        <div className="discoverImgContainer">
          <img className="discoverImg" src={feelgood3} alt="" />
          <p className="discoverPara">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui labore
            sapiente soluta nihil cumque?
          </p>
        </div>
        <div className="discoverImgContainer">
          <img className="discoverImg" src={feelgood4} alt="" />
          <p className="discoverPara">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui labore
            sapiente soluta nihil cumque?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Discover;
