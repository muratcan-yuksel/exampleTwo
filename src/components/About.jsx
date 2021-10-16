import React from "react";
import "../styles/about.css";
import { Button, ButtonGroup } from "@chakra-ui/react";
import theCreator from "../assets/theCreator.jpg";
const About = () => {
  return (
    <div id="aboutComponentContainer">
      <h1 className="aboutTitle">About me</h1>
      <div className="aboutContainer">
        <div className="aboutTextContainer">
          <h1 className="aboutMeTitle">Hey, I am Brigitte</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            delectus reiciendis doloribus sapiente, porro saepe reprehenderit
            nihil? Nam voluptates, repudiandae, amet quibusdam fugiat dolores
            qui itaque aliquid, nobis molestias totam?
          </p>
        </div>
        <div className="aboutImgContainer">
          <img id="aboutImage" src={theCreator} alt="" />
        </div>
      </div>
      <div className="historyContainer">
        <div className="historyText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
          ratione. Non dolor enim ab illo laborum maxime, sit soluta animi
          aliquam culpa, amet laboriosam, iure eum obcaecati numquam in aperiam?
        </div>
        <div className="historyText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
          ratione. Non dolor enim ab illo laborum maxime, sit soluta animi
          aliquam culpa, amet laboriosam, iure eum obcaecati numquam in aperiam?
        </div>
        <div className="historyText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
          ratione. Non dolor enim ab illo laborum maxime, sit soluta animi
          aliquam culpa, amet laboriosam, iure eum obcaecati numquam in aperiam?
        </div>
        <Button id="aboutButton" colorScheme="orange">
          Read the whole story here
        </Button>
      </div>
    </div>
  );
};

export default About;
