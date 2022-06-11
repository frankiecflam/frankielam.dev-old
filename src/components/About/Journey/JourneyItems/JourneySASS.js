import AboutJourneyItem from "../AboutJourneyItem";
import { SassIcon } from "../../../../assets/Icons";
import { SunnysideURL } from "../../../../utils/constants";
import AboutJourneyProjectLink from "../AboutJourneyProjectLink";
import AboutJourneyIcon from "../AboutJourneyIcon";
import AboutJourneyDescription from "../AboutJourneyDescription";

const JourneySASS = ({ toRight }) => {
  return (
    <AboutJourneyItem toRight={toRight}>
      <AboutJourneyIcon>
        <SassIcon />
      </AboutJourneyIcon>
      <AboutJourneyDescription date="feb 2022">
        <h1>
          I learnt SASS, and created a landing page —{" "}
          <AboutJourneyProjectLink href={SunnysideURL}>
            Sunnyside
          </AboutJourneyProjectLink>{" "}
          , with it.
        </h1>
      </AboutJourneyDescription>
    </AboutJourneyItem>
  );
};

export default JourneySASS;
