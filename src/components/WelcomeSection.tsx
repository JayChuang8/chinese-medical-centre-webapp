import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./WelcomeSection.css";
import { Link } from "react-router-dom";

function WelcomeSection() {
  return (
    <div className="welcome-container">
      <h1>Health Plus Chinese Medical Centre</h1>
      <div className="welcome-btns">
        <Link to="/services" className="btn-mobile">
          <Button className="btns" buttonStyle="outline" buttonSize="large">
            Services
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default WelcomeSection;
