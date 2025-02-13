import React from "react";
import "../../App.css";
import Footer from "../Footer";
import ServiceRateSection, { ServiceRate } from "../ServiceRateSection";

const services: ServiceRate[] = [{ service: "Initial Visit", rate: "$20" }];

export default function TcmHerbs() {
  return (
    <>
      <h1 className="tcmHerbs">TCM HERBS</h1>
      <ServiceRateSection services={services} />
      <Footer />
    </>
  );
}
