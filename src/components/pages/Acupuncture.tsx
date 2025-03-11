import React from "react";
import "../../App.css";
import Footer from "../Footer";
import ServiceRateSection, {
  PackageRate,
  ServiceRate,
} from "../ServiceRateSection";
import ServiceInfoSection, { InformationSection } from "../ServiceInfoSection";

const services: ServiceRate[] = [
  { service: "Initial Visit", rate: "$20" },
  { service: "Acupuncture Visit", rate: "$75 / 60 minutes" },
  { service: "", rate: "$40 / 30 minutes" },
];

const packages: PackageRate[] = [
  {
    service: "5 Session Acupuncture",
    rate: "$65 / session",
    totalPrice: "$325 / package",
  },
  {
    service: "10 Session Acupuncture",
    rate: "$60 / session",
    totalPrice: "$600 / package",
  },
];

const informationSections: InformationSection[] = [
  {
    info: (
      <p>
        Acupuncture is a component of the health care system of China that can
        be traced back at least 2,500 years. Oriental medicine is a holistic
        approach, which is based on the treatment of all bodily systems. The
        benefits of acupuncture includes improvement of physical health
        conditions and affective disorders, and instills a feeling of increased
        mental clarity.
      </p>
    ),
    title: "WHAT IS ACUPUNCTURE?",
  },
  {
    info: (
      <p>
        Acupuncture works directly with the body's energy or qi. Doctors of
        Traditional Chinese Medicine believe that all illnesses are a result of
        the natural flow of energy through the body becoming stuck, depleted or
        weakened, and thus making the individual susceptible to illness. It also
        benefits the re-balance of qi through treatment of specific acupoints
        related to symptoms or illness present. Treatment is effective in
        removing these energy obstructions.
      </p>
    ),
    title: "HOW DOES ACUPUNCTURE WORK?",
  },
  {
    info: (
      <>
        <p>
          Although best known for the control of pain, acupuncture benefits a
          wide variety of disorders, such as:
        </p>
        <div className="center-flex-container">
          <ul>
            <li>Acute/Chronic injuries</li>
            <li>Sinusitis, Bronchitis, Asthma</li>
            <li>
              Frozen shoulder, Tennis Elbow, Sciatica, Sprained ankles,
              Shingles, TMJ
            </li>
            <li>Stress/Anxiety/Depression</li>
            <li>Dizziness</li>
            <li>Digestive problems</li>
            <li>Insomnia</li>
            <li>Weight loss</li>
            <li>Menstrual problems, Fertility, Menopause</li>
            <li>Paralysis following stroke</li>
            <li>Long covid symptoms and so on.</li>
          </ul>
        </div>
        <br />
        <p>
          Your concern may not be shown here, but please do not hesitate to call
          us at 403-802-3883.
        </p>
        <br />
        <p>
          Many people who have never experienced acupuncture are at first
          hesitant to have this kind of treatment. However, acupuncture needles
          are very thin and many patients do not feel anything more than a
          slight amount of pressure when the needle is inserted.
        </p>
        <br />
        <p>
          Our acupuncturist has over 25 years of experience as a Doctor of
          Traditional Chinese Medicine. If you would like to try acupuncture,
          please let us know. The benefits of acupuncture have been established;
          now is the time for you to experience it for yourself.
        </p>
      </>
    ),
    title: "WHAT CAN ACUPUNCTURE TREAT?",
  },
];

export default function Acupuncture() {
  return (
    <>
      <h1 className="acupuncture">ACUPUNCTURE</h1>
      <ServiceInfoSection informationSections={informationSections} />
      <ServiceRateSection packages={packages} services={services} />
      <Footer />
    </>
  );
}
