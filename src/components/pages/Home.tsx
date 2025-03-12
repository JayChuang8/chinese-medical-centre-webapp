import React from "react";
import ServicesSection from "../ServicesSection";
import WelcomeSection from "../WelcomeSection";
import Footer from "../Footer";
import GoogleReviewsSection from "../GoogleReviewsSection";
import InsuranceSection from "../InsuranceSection";

function Home() {
  return (
    <>
      <WelcomeSection />
      <ServicesSection />
      <InsuranceSection />
      <GoogleReviewsSection />
      <Footer />
    </>
  );
}

export default Home;
