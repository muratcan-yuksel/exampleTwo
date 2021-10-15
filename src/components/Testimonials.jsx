import React from "react";
import "../styles/testimonials.css";
import { Image } from "@chakra-ui/react";
import testimonial1 from "../assets/testimonialImg1.jpg";
import testimonial2 from "../assets/testimonialImg2.jpg";
import testimonial3 from "../assets/testimonialImg3.jpg";
import testimonial4 from "../assets/testimonialImg4.jpg";

const Testimonials = () => {
  return (
    <div id="testimonialsComponentContainer">
      <h1 id="testimonialsTitle">What Clients Say</h1>
      <div id="testimonialContainer">
        {/* testimonial */}
        <div className="testimonial">
          <p className="testimonialText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sit
            sint in illum ducimus. Expedita reiciendis quaerat natus at
            distinctio rem eos non, ad id. Temporibus quis tempore distinctio
            cupiditate.
          </p>
          <div className="testimonialImgContainer">
            <Image borderRadius="full" boxSize="150px" src={testimonial1} />
            <p className="testimonialName">Mary Poppins</p>
          </div>
        </div>
        {/* testimonial */}
        <div className="testimonial">
          <p className="testimonialText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            nostrum ea quo, hic adipisci sint corporis omnis maiores doloremque
            beatae sequi excepturi voluptatem unde autem ab quaerat natus ipsa?
            Ullam!
          </p>
          <div className="testimonialImgContainer2ndColor">
            <Image borderRadius="full" boxSize="150px" src={testimonial2} />
            <p className="testimonialName">Alex Griffin</p>
          </div>
        </div>
        {/* testimonial */}
        <div className="testimonial">
          <p className="testimonialText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sit
            sint in illum ducimus. Expedita reiciendis quaerat natus at
            distinctio rem eos non, ad id. Temporibus quis tempore distinctio
            cupiditate.
          </p>
          <div className="testimonialImgContainer2ndColor">
            <Image borderRadius="full" boxSize="150px" src={testimonial3} />
            <p className="testimonialName">Evelyn Withers</p>
          </div>
        </div>
        {/* testimonial */}
        <div className="testimonial">
          <p className="testimonialText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            nostrum ea quo, hic adipisci sint corporis omnis maiores doloremque
            beatae sequi excepturi voluptatem unde autem ab quaerat natus ipsa?
            Ullam!
          </p>
          <div className="testimonialImgContainer">
            <Image borderRadius="full" boxSize="150px" src={testimonial4} />
            <p className="testimonialName">Frankie Adams</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
