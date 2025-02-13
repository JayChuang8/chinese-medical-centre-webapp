import React from "react";
import "./ServicesSection.css";
import CardItem from "./CardItem";

function ServicesSection() {
  return (
    <div className="services-section">
      <h1>Our Services</h1>
      <div className="services-section-container">
        <div className="services-section-wrapper">
          <ul className="services-section-items">
            <CardItem
              color="#F5F5DC"
              imageSrc="images/icon-acupuncture.svg"
              label="Learn More"
              path="/accupuncture"
              text="Accupuncture"
            />
            <CardItem
              color="#D8CFC4"
              imageSrc="images/icon-massage.svg"
              label="Learn More"
              path="/massage"
              text="Massage"
            />
            <CardItem
              color="#DDE6D5"
              imageSrc="images/icon-herbs.svg"
              label="Learn More"
              path="/tcmHerbs"
              text="TCM Herbs"
            />
            <CardItem
              color="#EAD8C0"
              imageSrc="images/icon-cupping.png"
              label="Learn More"
              path="/cupping"
              text="Cupping"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
