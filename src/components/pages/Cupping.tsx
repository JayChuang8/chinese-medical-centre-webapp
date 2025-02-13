import React from "react";
import "../../App.css";
import Footer from "../Footer";
import ServiceRateSection, { ServiceRate } from "../ServiceRateSection";

const services: ServiceRate[] = [{ service: "20 minutes", rate: "$40" }];

export default function Cupping() {
  return (
    <>
      <h1 className="cupping">CUPPING</h1>
      <ServiceRateSection services={services} />
      <Footer />
    </>
  );
}
