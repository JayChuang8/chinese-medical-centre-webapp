import React from "react";
import "../../App.css";
import Footer from "../Footer";
import ServiceRateSection, {
  PackageRate,
  ServiceRate,
} from "../ServiceRateSection";

const services: ServiceRate[] = [
  { service: "Initial Visit", rate: "$20" },
  { service: "Accupuncture Visit", rate: "$75 / 60 minutes" },
  { service: "", rate: "$40 / 30 minutes" },
];

const packages: PackageRate[] = [
  {
    service: "5 Session Accupuncture",
    rate: "$65 / session",
    totalPrice: "$325 / package",
  },
  {
    service: "10 Session Accupuncture",
    rate: "$60 / session",
    totalPrice: "$600 / package",
  },
];

export default function Accupuncture() {
  return (
    <>
      <h1 className="accupuncture">ACCUPUNCTURE</h1>
      <ServiceRateSection packages={packages} services={services} />
      <Footer />
    </>
  );
}
