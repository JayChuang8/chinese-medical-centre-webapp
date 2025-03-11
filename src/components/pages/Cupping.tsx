import React from "react";
import "../../App.css";
import Footer from "../Footer";
import ServiceRateSection, { ServiceRate } from "../ServiceRateSection";
import ServiceInfoSection, { InformationSection } from "../ServiceInfoSection";

const services: ServiceRate[] = [{ service: "20 minutes", rate: "$40" }];

const informationSections: InformationSection[] = [
  {
    info: (
      <p>
        Our acupuncturist also offers cupping. Cupping therapy is an ancient
        form of alternative medicine in which a therapist puts special cups on
        your skin for a few minutes to create suction on the body. The therapist
        will typically move the cup around in a circular motion, which causes
        the skin and superficial muscle layer to be lightly drawn into the cup.
        The suction sensation helps mimic the rolling action of a deep tissue
        massage without the discomfort. Typically, cupping can aid in loosening
        connective tissue and stubborn knots. People get it for many purposes,
        including help with pain, inflammation, blood flow, relaxation and
        well-being, and as a type of deep-tissue massage.
      </p>
    ),
    title: "WHAT IS CUPPING?",
  },
];

export default function Cupping() {
  return (
    <>
      <h1 className="cupping">CUPPING</h1>
      <ServiceInfoSection informationSections={informationSections} />
      <ServiceRateSection services={services} />
      <Footer />
    </>
  );
}
