import React from "react";
import "../styles/testimonials.css";
import { Image } from "@chakra-ui/react";
import testimonial1 from "../assets/testimonialImg1.jpg";

const Testimonials = () => {
  return (
    <div id="testimonialsComponentContainer">
      <h1 id="testimonialsTitle">What Clients Say</h1>
      <div id="testimonialContainer">
        <div className="testimonial">
          <p className="testimonialText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sit
            sint in illum ducimus. Expedita reiciendis quaerat natus at
            distinctio rem eos non, ad id. Temporibus quis tempore distinctio
            cupiditate.
          </p>
          <div className="testimonialImgContainer">
            <Image
              borderRadius="full"
              boxSize="150px"
              src={testimonial1}
              alt="Segun Adebayo"
            />
            <p className="testimonialName">Mary Poppins</p>
          </div>
        </div>
        <div className="testimonial">
          <p className="testimonialText"></p>
          <div className="testimonialImgContainer"></div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
