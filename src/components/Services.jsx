import React from "react";
import "../styles/services.css";
import happyPerson from "../assets/happyPerson.jpg";
import { Button, ButtonGroup } from "@chakra-ui/react";

const WaysToWork = () => {
  return (
    <div id="servicesComponentContainer">
      <h1 id="servicesTitle">----My Services----</h1>
      <div id="servicesContainer">
        <div className="service">
          <div className="leftSide">
            <h1 className="serviceTitle">Lorem ipsum</h1>
            <div className="serviceImgContainer">
              <img className="serviceImage" src={happyPerson} alt="" />
            </div>
          </div>
          <div className="rightSide">
            <p className="servicePara">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quo
              cum, nulla totam quibusdam ducimus aperiam aliquid sed error
              facilis laboriosam, obcaecati earum quisquam reprehenderit quaerat
              quae a ullam repellat.
            </p>

            <Button colorScheme="orange">FIND OUT HOW</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaysToWork;
