import React from "react";
import "../../App.css";
import Footer from "../Footer";
import ServiceRateSection, { ServiceRate } from "../ServiceRateSection";
import ServiceInfoSection, { InformationSection } from "../ServiceInfoSection";

const services: ServiceRate[] = [
  { service: "30 minutes", rate: "$50 + GST" },
  { service: "45 minutes", rate: "$70 + GST" },
  { service: "60 minutes", rate: "$90 + GST" },
  { service: "90 minutes", rate: "$140 + GST" },
];

const informationSections: InformationSection[] = [
  {
    info: (
      <>
        <p>
          Massage therapy is the manipulation of the body's soft tissues. Our
          registered massage therapist can perform Deep Tissue,
          Swedish/Relaxation, and Therapeutic massages.
        </p>
        <br />
        <p>
          Deep Tissue Massage is used to treat the deeper layers of muscle and
          fascia within the body. A deep tissue massage involves applying a firm
          pressure to the treatment area to help release tension and decrease
          pain. Adhesions are also reduced through deep tissue massage. Breaking
          down adhesions helps to decrease tension.
        </p>
        <br />
        <p>
          Swedish Massage is a type of therapeutic massage that can be performed
          both gentle and vigorous. Swedish massage uses a wide range of massage
          techniques and strokes to promote a relaxation effect. Gentle massage
          techniques are performed during a Swedish massage to help warm up
          muscles, increase the blood circulation and release tension. More
          vigorous types of techniques are used to break down adhesions within
          soft tissues.
        </p>
        <br />
        <p>
          Therapeutic Massage is an effective massage type that stimulates the
          skin and nervous system, reducing emotional and physical stress.
          Therapeutic massage helps promote general health, relaxation, and
          reduce tension related to emotional stress. A therapeutic massage can
          stimulate a sense of calmness and well-being by increasing feel good
          hormones. Therapeutic massage can be used on regular basis to maintain
          relaxation and healthy muscle condition.
        </p>
        <br />
        <p>
          Lymphatic Massage, also known as manual lymphatic drainage (MLD) - is
          a highly specialized and gentle massage technique used to increase
          lymph flow and encourage the natural drainage of the lymph from the
          body tissues. It is a very safe and effective technique that is useful
          for many conditions where lymph flow may be compromised, such as
          lymphedema, swollen limbs caused by a variety of different things, in
          diabetics, sports injuries, postsurgical, etc. For example, many
          clients require lymphatic therapy or lymphatic massage to treat the
          increased swelling and lymph accumulation that occurs after a
          mastectomy, or other surgical procedures, especially those where lymph
          nodes may be removed or damaged.
        </p>
        <br />
        <p>
          Our massage therapist is a Registered Massage Therapist with 2,200
          hours of training. With a medical background from China, he pursued a
          career in massage therapy upon arriving in Canada to continue
          supporting people's health and wellness. His primary focus is on pain
          management and improving functionality.
        </p>
      </>
    ),
    title: "WHAT IS MASSAGE?",
  },
];

export default function Massage() {
  return (
    <>
      <h1 className="massage">MASSAGE</h1>
      <ServiceInfoSection informationSections={informationSections} />
      <ServiceRateSection services={services} />
      <Footer />
    </>
  );
}
