import AboutJourneyItem from "../AboutJourneyItem";
import { BuildIcon } from "../../../../assets/Icons";
import { HiddenGemsURL } from "../../../../utils/constants";
import AboutJourneyProjectLink from "../AboutJourneyProjectLink";
import AboutJourneyIcon from "../AboutJourneyIcon";
import AboutJourneyDescription from "../AboutJourneyDescription";

const JourneyHiddenGems = ({ toRight }) => {
  return (
    <AboutJourneyItem toRight={toRight}>
      <AboutJourneyIcon>
        <BuildIcon />
      </AboutJourneyIcon>
      <AboutJourneyDescription date="jun 2022">
        <h1>
          I built a social media web app —{" "}
          <AboutJourneyProjectLink href={HiddenGemsURL}>
            Hidden Gems
          </AboutJourneyProjectLink>{" "}
          with React and NextJS.
        </h1>
      </AboutJourneyDescription>
    </AboutJourneyItem>
  );
};

export default JourneyHiddenGems;
