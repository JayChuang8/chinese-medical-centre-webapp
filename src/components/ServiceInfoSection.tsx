import React, { ReactNode } from "react";
import "./ServiceRateSection.css";
import "./ServiceInfoSection.css";

export type InformationSection = {
  info: ReactNode;
  title: string;
};

type ServiceInfoSectionProps = {
  informationSections?: InformationSection[];
};

function ServiceInfoSection({ informationSections }: ServiceInfoSectionProps) {
  return (
    <div className="services-section">
      {informationSections &&
        informationSections.length > 0 &&
        informationSections.map((information) => (
          <div className="left-align-text">
            <div className="service-info-section">
              <h1>{information.title}</h1>
              {information.info}
            </div>
          </div>
        ))}
    </div>
  );
}

export default ServiceInfoSection;
