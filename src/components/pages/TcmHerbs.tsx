import React from "react";
import "../../App.css";
import Footer from "../Footer";
import ServiceRateSection, { ServiceRate } from "../ServiceRateSection";
import ServiceInfoSection, { InformationSection } from "../ServiceInfoSection";

const services: ServiceRate[] = [{ service: "Initial Visit", rate: "$20" }];

const informationSections: InformationSection[] = [
  {
    info: (
      <>
        <p>
          Traditional Chinese medicine (TCM) originated in ancient China and has
          evolved over thousands of years. The ancient beliefs on which TCM is
          based include the following:
        </p>
        <br />
        <div className="center-flex-container">
          <ul>
            <li>
              The human body is a miniature version of the larger, surrounding
              universe
            </li>
            <li>
              Harmony between two opposing yet complementary forces, called yin
              and yang, supports health, and disease results from an imbalance
              between these forces
            </li>
            <li>
              Five elements—fire, earth, wood, metal, and water—symbolically
              represent all phenomena, including the stages of human life, and
              explain the functioning of the body and how it changes during
              disease
            </li>
            <li>
              Qi, a vital energy that flows through the body, performs multiple
              functions in maintaining health
            </li>
          </ul>
        </div>
        <br />
        <p>
          TCM practitioners use primarily plants, but also some minerals and
          animal products. Different parts of plants, such as the leaves, roots,
          stems, flowers, and seeds, are used. In TCM, herbs are often combined
          in formulas and given as teas, capsules, liquid extracts, granules, or
          powders in an effort to promote health and treat disease.
        </p>
      </>
    ),
    title: "WHAT IS TCM?",
  },
];

export default function TcmHerbs() {
  return (
    <>
      <h1 className="tcmHerbs">TCM HERBS</h1>
      <ServiceInfoSection informationSections={informationSections} />
      <ServiceRateSection services={services} />
      <Footer />
    </>
  );
}
