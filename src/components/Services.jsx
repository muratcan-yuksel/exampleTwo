import React from "react";
import "../styles/services.css";
import happyPerson from "../assets/happyPerson.jpg";
import { Button, ButtonGroup } from "@chakra-ui/react";
import goodFood from "../assets/goodFood.jpg";
import happyMeditation from "../assets/happyMeditation.jpg";
import homeComfort from "../assets/homeComfort.jpg";

const WaysToWork = () => {
  return (
    <div id="servicesComponentContainer">
      <h1 id="servicesTitle">----My Services----</h1>
      <div id="servicesContainer">
        {/* service 1 */}
        <div className="service">
          <div className="imgPart">
            <h1 className="serviceTitle">Positive Life</h1>
            <div className="serviceImgContainer">
              <img className="serviceImage" src={happyPerson} alt="" />
            </div>
          </div>
          <div className="textPart">
            <p className="servicePara">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quo
              cum, nulla totam quibusdam ducimus aperiam aliquid sed error
              facilis laboriosam, obcaecati earum quisquam reprehenderit quaerat
              quae a ullam repellat.
            </p>
            <Button colorScheme="orange">FIND OUT HOW</Button>
          </div>
        </div>
        {/* service 2 */}
        <div className="service">
          <div className="textPart" id="bluePart">
            <p className="servicePara">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quo
              cum, nulla totam quibusdam ducimus aperiam aliquid sed error
              facilis laboriosam, obcaecati earum quisquam reprehenderit quaerat
              quae a ullam repellat.
            </p>
            <Button colorScheme="orange">FIND OUT HOW</Button>
          </div>
          <div className="imgPart">
            <h1 className="serviceTitle">Good Food</h1>
            <div className="serviceImgContainer">
              <img className="serviceImage" src={goodFood} alt="" />
            </div>
          </div>
        </div>
        {/* service 3 */}
        <div className="service">
          <div className="imgPart">
            <h1 className="serviceTitle">Free Your Mind</h1>
            <div className="serviceImgContainer">
              <img className="serviceImage" src={happyMeditation} alt="" />
            </div>
          </div>
          <div className="textPart">
            <p className="servicePara">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quo
              cum, nulla totam quibusdam ducimus aperiam aliquid sed error
              facilis laboriosam, obcaecati earum quisquam reprehenderit quaerat
              quae a ullam repellat.
            </p>
            <Button colorScheme="orange">FIND OUT HOW</Button>
          </div>
        </div>
        {/* service 4 */}
        <div className="service">
          <div className="textPart" id="bluePart">
            <p className="servicePara">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quo
              cum, nulla totam quibusdam ducimus aperiam aliquid sed error
              facilis laboriosam, obcaecati earum quisquam reprehenderit quaerat
              quae a ullam repellat.
            </p>
            <Button colorScheme="orange">FIND OUT HOW</Button>
          </div>
          <div className="imgPart">
            <h1 className="serviceTitle">Work Remotely</h1>
            <div className="serviceImgContainer">
              <img className="serviceImage" src={homeComfort} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaysToWork;
