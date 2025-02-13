import React from "react";
import "./GoogleReviewsSection.css";
import CardItem from "./CardItem";
import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";

const featurableId = "example";
function GoogleReviewsSection() {
  return (
    <div className="google-reviews-section">
      <ReactGoogleReviews layout="badge" featurableId={featurableId} />
      <ReactGoogleReviews layout="carousel" featurableId={featurableId} />
    </div>
  );
}

export default GoogleReviewsSection;
