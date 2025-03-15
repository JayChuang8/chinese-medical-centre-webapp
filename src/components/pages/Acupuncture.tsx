import React from "react";
import "../../App.css";
import Footer from "../Footer";
import ServiceRateSection, {
  PackageRate,
  ServiceRate,
} from "../ServiceRateSection";
import ServiceInfoSection, { InformationSection } from "../ServiceInfoSection";
import "./ServicesSection.css";

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

const qaSection: InformationSection[] = [
  {
    info: (
      <p>
        Acupuncture is extremely safe. Needles used for acupuncture are
        typically stainless-steel, sterile, and disposable needles that do not
        have medicine in them. It is an all-natural, drug-free therapy. There is
        no danger of infection from acupuncture needles because they are used
        once, and then discarded. They are hair thin; much thinner than
        hypodermic needles used for injections. After a treatment, it is
        possible to have minor soreness or bruising at the needle insertion
        sites.
      </p>
    ),
    title: "1) How safe is acupuncture?",
  },
  {
    info: (
      <>
        <p>
          An initial visit for acupuncture, including consultation and
          treatment, takes approximately 1.5 hours. Subsequent visits are 30 to
          60 minutes long. Acupuncture needles are left in place for 20 to 40
          minutes.
        </p>
        <p>
          Once you have decided to come in for treatment, we will schedule your
          first appointment which will be 1.5 hours long. If you are in our
          office for the treatment of an internal illness or issue such as
          infertility, during the first 30 minutes we will review your primary
          reason (or chief complaint) for coming, and then gather all the
          details of any medical diagnosis, treatments, or procedures you have
          already received for that specific condition. We will then ask you
          questions about every other aspect of your current state of health,
          emotional and physical well-being. The answers to all of these
          questions, along with the medical information you provide will present
          a picture of your overall health and any underlying imbalance that may
          exist in your body, which is causing your chief complaint. Other
          problems discussed represent that your body is not functioning as well
          as it should, and they are part of the imbalance. All the big and
          small health problems that you are experiencing are symptoms or signs
          of something not functioning properly in your body. Together, they
          make a pattern that shows the state of balance or imbalance in your
          body. When we treat you, we will be treating the pattern of imbalance
          that exists, which will improve the functioning of your entire body
          including your chief complaint.
        </p>
        <p>
          After the intake process is complete, you will receive your first
          acupuncture treatment.
        </p>
      </>
    ),
    title: "2) What will my acupuncturist do?",
  },
  {
    info: (
      <>
        <p>
          The tongue is like a window into the interior health of your body, and
          a map to the possible location of health concerns in your body. It
          reflects the general health of the organs and meridians. We look at
          the color, shape, cracks, and coating on your tongue. Together with
          the answers to the many questions we ask you about your health during
          the first appointment, it will help us determine what type of
          imbalance exists in your body.
        </p>
      </>
    ),
    title: "3) Why do acupuncturists want to look at my tongue?",
  },
  {
    info: (
      <>
        <p>
          Before we start your first acupuncture treatment, we also look at your
          tongue and take your pulse. Gathering this information adds a little
          more information about what is going on inside your body. It enables
          us to more effectively diagnose any pattern of imbalance to the flow
          of Qi that exists in your body, and may have contributed to your
          health problems. We can then create your treatment plan.
        </p>
        <p>
          Once we determine the pattern of imbalance that exists in your body,
          we will place very thin, sterile needles at specific acupuncture
          points along different channels of Qi flow. This is very safe and
          painless. It can unblock the obstructions and balance the flow of Qi
          where it has become blocked or unbalanced. Once this is done, the
          circulation of Qi should improve throughout your body, and will start
          bringing your body back into proper balance. This can reduce or
          eliminate pain, as well as strengthen the body's ability to heal
          itself and restore balance and harmony. This should ultimately lead to
          the correction of any dysfunctions and lead to optimal health and
          feelings of well-being.
        </p>
        <p>
          Acupuncture and Chinese medicine is a safe, effective, and drug-free
          therapy that can help address a wide variety of common ailments and
          problems.
        </p>
      </>
    ),
    title: "4) What to expect during treatment?",
  },
  {
    info: (
      <>
        <p>Oftentimes, multiple conditions are addressed at the same time.</p>
      </>
    ),
    title: "5) Can you treat more than one condition at a time?",
  },
  {
    info: (
      <>
        <p>
          Everyone responds to acupuncture differently, but the majority of
          people will experience results in one to three treatments. As a
          general rule, chronic conditions will take longer for results. Plan on
          a minimum 3-8 treatments to see significant changes. I usually
          recommend weekly treatments for a month, and then decrease treatment
          to every other week for another few months. Patients often find it
          beneficial to receive “maintenance” acupuncture treatment monthly or
          quarterly for seasonal “tune ups” after they complete their initial
          treatment plan.
        </p>
        <p>
          For women going through menstrual problems, fertility treatments with
          medical specialists, taking fertility drugs, or have menopause
          symptoms, we strongly recommend getting at least 6-12 treatments over
          a 6-12 week period. Women trying to get pregnant naturally must expect
          a minimum of 2-6 months of treatments.
        </p>
      </>
    ),
    title: "6) How many treatments will I need?",
  },
  {
    info: (
      <>
        <div className="center-flex-container">
          <ul>
            <li>
              Write down and bring any questions you have. We are here to help
              you.
            </li>
            <li>
              Wear loose and comfortable clothing for easy access to acupuncture
              points. Shorts that fit loosely on your legs and a short sleeved
              shirt or tank top for neck or shoulder issues are best.
            </li>
            <li>Do not eat large meals just before or after your visit.</li>
            <li>
              Avoid caffeine and alcohol immediately before and after receiving
              acupuncture. In general, on the day of an acupuncture treatment,
              it's best not to do too much (workout, have stressful
              appointments, etc.).
            </li>
            <li>
              Between visits, take notes of any changes that may have occurred,
              such as the alleviation of pain, pain moving to other areas, or
              improvements/changes in the frequency and type of physical or
              mental/emotional conditions.
            </li>
          </ul>
        </div>
      </>
    ),
    title: "7) How should I prepare?",
  },
  {
    info: (
      <p>
        All acupuncturists must pass an exam and meet strict guidelines to
        practice in every state. Our accupuncturist finished 8 years of training
        in China, and has practiced for over 25 years. She is licensed to
        practice acupuncture in Alberta.
      </p>
    ),
    title: "8) How is an acupuncturist educated?",
  },
];

export default function Acupuncture() {
  return (
    <>
      <h1 className="acupuncture">ACUPUNCTURE</h1>
      <ServiceInfoSection informationSections={informationSections} />
      <ServiceRateSection packages={packages} services={services} />
      <ServiceInfoSection
        className="services-qa-acupuncture-section"
        informationSections={qaSection}
        title="Q&A SECTION"
      />
      <Footer />
    </>
  );
}
