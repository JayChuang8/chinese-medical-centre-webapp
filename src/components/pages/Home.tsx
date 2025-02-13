import React from "react";
import ServicesSection from "../ServicesSection";
import WelcomeSection from "../WelcomeSection";
import Footer from "../Footer";
import GoogleReviewsSection from "../GoogleReviewsSection";

function Home() {
  return (
    <>
      <WelcomeSection />
      <ServicesSection />
      <GoogleReviewsSection />
      <Footer />
    </>
  );
}

export default Home;
