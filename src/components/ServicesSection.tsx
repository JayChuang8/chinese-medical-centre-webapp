import React from "react";
import "./ServicesSection.css";
import CardItem from "./CardItem";

function ServicesSection() {
  return (
    <div className="services-section">
      <h1>Our Services</h1>
      <div className="services-section-wrapper">
        <ul className="services-section-items">
          <CardItem
            color="#F5F5DC"
            imageSrc="images/accupuncture.jpg"
            label="Learn More"
            path="/accupuncture"
            text="Accupuncture"
          />
          <CardItem
            color="#D8CFC4"
            imageSrc="images/massage.jpg"
            label="Learn More"
            path="/massage"
            text="Massage"
          />
          <CardItem
            color="#DDE6D5"
            imageSrc="images/herbs.jpg"
            label="Learn More"
            path="/tcmHerbs"
            text="TCM Herbs"
          />
          <CardItem
            color="#EAD8C0"
            imageSrc="images/cupping.jpg"
            label="Learn More"
            path="/cupping"
            text="Cupping"
          />
        </ul>
      </div>
    </div>
  );
}

export default ServicesSection;
