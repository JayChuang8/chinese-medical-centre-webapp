import React from "react";
import "../../App.css";
import Footer from "../Footer";
import ServiceRateSection, { ServiceRate } from "../ServiceRateSection";
import ServiceInfoSection, { InformationSection } from "../ServiceInfoSection";

const services: ServiceRate[] = [
  { service: "Herb Medical Consulting", rate: "$30" },
];

const informationSections: InformationSection[] = [
  {
    info: (
      <>
        <p>
          Traditional Chinese medicine (TCM) originated in ancient China and has
          evolved over thousands of years. The ancient beliefs on which TCM is
          based include the following:
        </p>
        <br />
        <div className="center-flex-container">
          <ul>
            <li>
              The human body is a miniature version of the larger, surrounding
              universe
            </li>
            <li>
              Harmony between two opposing yet complementary forces, called yin
              and yang, supports health, and disease results from an imbalance
              between these forces
            </li>
            <li>
              Five elements—fire, earth, wood, metal, and water—symbolically
              represent all phenomena, including the stages of human life, and
              explain the functioning of the body and how it changes during
              disease
            </li>
            <li>
              Qi, a vital energy that flows through the body, performs multiple
              functions in maintaining health
            </li>
          </ul>
        </div>
        <br />
        <p>
          TCM practitioners use primarily plants, but also some minerals and
          animal products. Different parts of plants, such as the leaves, roots,
          stems, flowers, and seeds, are used. In TCM, herbs are often combined
          in formulas and given as teas, capsules, liquid extracts, granules, or
          powders in an effort to promote health and treat disease.
        </p>
      </>
    ),
    title: "WHAT IS TCM?",
  },
  {
    info: (
      <p>
        Chinese herbs come in many forms, raw herbs that are cooked into a
        decoction, powders that can be taken with water or other liquids, pills,
        tinctures, as well as ointments and creams. The modern era added another
        form which are granulated herbs. Chinese herbs are very rarely
        prescribed singly, and almost always in combinations, allowing herbs to
        interact, enhance and modify each other. Most of the Chinese herbs
        really do taste quite bitter, but some herbs tastes sweet or sore, they
        are used mostly for rebalancing function, maintenance, long-term use,
        while we prescribe decoctions for a short period (2-3 weeks) in order to
        invite a strong change.
      </p>
    ),
    title: "",
  },
  {
    info: (
      <>
        <p>
          Generally each bag of herbs can be cooked 2 times by covering the
          herbs with 1200ml ~ 2000ml( it depends on the weight of the herbs)
          water and boiling and then simmering the herbs for 30-45 minutes so
          that about 400ml~600ml of fluid is left. Strain the liquid and keep
          it. And repeat once more. Cover the herbs again with water just above
          the herb 2cm higher, bring to a boil, simmer, strain the liquid. The
          end result will be 3 cups of herbal “soup” which can be mixed all
          together. After the second cooking, the herb dredges can be discarded
          (they are good compost).
        </p>
        <br />
        <p>
          Your condition may require a specific method for preparing and
          consuming herbs, so be sure to follow your TCM practitioner's
          instructions. Store the herbal decoction in the refrigerator until
          you're ready to drink it. For the best effect, consume it warm—hotter
          temperatures reduce bitterness.
        </p>
        <br />
        <p>Here are some more details:</p>
        <br />
        <ol>
          <li>
            Use a clay or glass pot with a cover whenever possible. If those
            aren't available, stainless steel is an alternative option.
          </li>
          <li>
            Remove the herbs from the bag or package, spread them evenly in a
            pot, and add enough water to submerge them, ensuring the water level
            is about half an inch to two inches above the herbs.
          </li>
          <li>
            Allow the herbs to soak in water for 40 minutes to 1 hour before the
            first boil, ensuring they absorb moisture before heating.
          </li>
          <li>
            Cover the pot as you would when cooking rice, leaving a small
            opening for steam to escape.
          </li>
          <li>
            Bring the herbs to a boil, then simmer until approximately 400ml to
            600ml of liquid remains. Tonifying herbs need a longer simmering
            time, while exterior-releasing formulas (such as for colds and flus)
            require about 20 minutes.
          </li>
          <li>
            Be sure to stir the herbs while cooking and remove any that become
            burnt.
          </li>
        </ol>
        <br />
        <p>If you have any questions, please call us at 403-802-3883.</p>
      </>
    ),
    title: "COOKING DIRECTIONS",
  },
];

export default function TcmHerbs() {
  return (
    <>
      <h1 className="tcmHerbs">TCM HERBS</h1>
      <ServiceInfoSection informationSections={informationSections} />
      <ServiceRateSection services={services} />
      <Footer />
    </>
  );
}
