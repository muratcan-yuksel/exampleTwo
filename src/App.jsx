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

//live demo=>  https://hardcore-pike-0851a0.netlify.app/
const App = () => {
  return (
    <div id="AppContainer">
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
