import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Filler from "./components/Filler";
import Discover from "./components/Discover";

const App = () => {
  return (
    <div>
      {/* <div
        style={
          ({ backgroundColor: "rgb(243, 216, 62)" }, { fontSize: "0,3rem" })
        }
        id="newsLetter"
      >
        Sign up for my Newsletter for FREE tips to bring your mind and body
        together & live the life of your dreams
      </div> */}
      <Navbar />
      <Header />
      <Filler />
      <Discover />
    </div>
  );
};

export default App;
