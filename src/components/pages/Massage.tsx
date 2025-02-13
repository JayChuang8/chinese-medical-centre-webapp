import React from "react";
import "../../App.css";
import Footer from "../Footer";
import ServiceRateSection, { ServiceRate } from "../ServiceRateSection";

const services: ServiceRate[] = [
  { service: "30 minutes", rate: "$50 + GST" },
  { service: "45 minutes", rate: "$70 + GST" },
  { service: "60 minutes", rate: "$90 + GST" },
  { service: "90 minutes", rate: "$140 + GST" },
];

export default function Massage() {
  return (
    <>
      <h1 className="massage">MASSAGE</h1>
      <ServiceRateSection services={services} />
      <Footer />
    </>
  );
}
