import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Filler from "./components/Filler";
import Discover from "./components/Discover";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Footer from "./components/Footer";
import "./styles/app.css";
const App = () => {
  return (
    <div id="AppContainer">
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
      <Services />
      <Testimonials />
      <About />
      <Footer />
    </div>
  );
};

export default App;
