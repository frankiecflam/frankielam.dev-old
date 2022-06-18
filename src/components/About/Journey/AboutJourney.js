import SectionHeader from "../../Section/SectionHeader";
import AboutJourneyContent from "./AboutJourneyContent";

const AboutJourney = () => {
  return (
    <div>
      <SectionHeader
        heading="journey timeline"
        subHeading="how has my journey been so far..."
      />
      <AboutJourneyContent />
    </div>
  );
};

export default AboutJourney;
