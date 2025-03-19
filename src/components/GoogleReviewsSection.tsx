import React from "react";
import "./GoogleReviewsSection.css";
import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";

const featurableId = "ec2f66e3-0aa7-4a91-9744-e08f5ebee258";
function GoogleReviewsSection() {
  return (
    <div className="google-reviews-section">
      <ReactGoogleReviews layout="badge" featurableId={featurableId} />
      <ReactGoogleReviews layout="carousel" featurableId={featurableId} />
    </div>
  );
}

export default GoogleReviewsSection;
