import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div id="footerContainer">
      <div className="footerList">
        <h3 className="footerListItem">Home</h3>
        <h3 className="footerListItem">About</h3>
        <h3 className="footerListItem">Program</h3>
        <h3 className="footerListItem">Testimonials</h3>
        <h3 className="footerListItem">Resources</h3>
        <h3 className="footerListItem">Blog</h3>
      </div>
      <h1 className="madeWithLove">Made With Love</h1>
    </div>
  );
};

export default Footer;
