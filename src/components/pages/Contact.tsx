import React from "react";
import "../../App.css";
import Footer from "../Footer";

export default function Contact() {
  return (
    <div className="contact-page">
      <h1 className="contact">
        Contact Us
        <div className="contact-info">
          <a
            href="https://www.google.ca/maps/dir//363+Heritage+Dr+SE,+Calgary,+AB+T2H+1M8/@50.978491,-114.1440723,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x537170e03dc08f91:0x89c452b78512776e!2m2!1d-114.061672!2d50.97852?entry=ttu&g_ep=EgoyMDI1MDIxMC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            363 Heritage Dr SE, Calgary, AB
          </a>
          <div>403-802-3883</div>
        </div>
      </h1>
      <Footer />
    </div>
  );
}
