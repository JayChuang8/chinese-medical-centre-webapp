import React from "react";
import "./ServiceRateSection.css";

export type ServiceRate = {
  service: string;
  rate: string;
};

export type PackageRate = {
  service: string;
  rate: string;
  totalPrice: string;
};

type ServiceRateSectionProps = {
  packages?: PackageRate[];
  services: ServiceRate[];
};

function ServiceRateSection({ services, packages }: ServiceRateSectionProps) {
  return (
    <div className="services-section">
      <h1>Service Rates</h1>
      <div className="services-section-container">
        <div className="services-section-wrapper">
          <table className="services-table">
            <tbody>
              {services.map((service, index) => (
                <tr key={index}>
                  <td>{service.service}</td>
                  <td>{service.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {packages && packages.length > 0 && (
        <>
          <h1 className="package-heading">Package Rates</h1>
          <div className="services-section-container">
            <div className="services-section-wrapper">
              <table className="services-table">
                <tbody>
                  {packages.map((packageRate, index) => (
                    <tr key={index}>
                      <td>{packageRate.service}</td>
                      <td>{packageRate.rate}</td>
                      <td>{packageRate.totalPrice}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      <div className="center-align-text">
        All prices subject to change without notice If you have any questions
        about our Pricing, do not hesitate to call us at 403-802-3883
      </div>
    </div>
  );
}

export default ServiceRateSection;
