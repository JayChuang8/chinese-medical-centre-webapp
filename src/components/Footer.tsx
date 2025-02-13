import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              HPCMC
            </Link>
          </div>
          <small className="footer-text">
            Health Plus Chinese Medical Centre Ltd
            <div className="footer-text">
              <a
                href="https://www.google.ca/maps/dir//363+Heritage+Dr+SE,+Calgary,+AB+T2H+1M8/@50.978491,-114.1440723,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x537170e03dc08f91:0x89c452b78512776e!2m2!1d-114.061672!2d50.97852?entry=ttu&g_ep=EgoyMDI1MDIxMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                363 Heritage Dr SE, Calgary, AB
              </a>
            </div>
          </small>
          <small className="footer-text">
            403-802-3883
            <div>HPCMC © 2025</div>
          </small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
