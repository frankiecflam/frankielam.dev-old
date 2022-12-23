import AboutJourneyItem from "../AboutJourneyItem";
import { TailwindIcon } from "../../../../assets/Icons";
import AboutJourneyIcon from "../AboutJourneyIcon";
import AboutJourneyDescription from "../AboutJourneyDescription";
import AboutJourneyProjectLink from "../AboutJourneyProjectLink";
import {
  ManageTailwindURL,
  MetaverseTailwindURL,
} from "../../../../utils/constants";

const JourneyTailwind = ({ toRight }) => {
  return (
    <AboutJourneyItem toRight={toRight}>
      <AboutJourneyIcon>
        <TailwindIcon />
      </AboutJourneyIcon>
      <AboutJourneyDescription date="dec 2022">
        <h1>
          I learnt Tailwind CSS and built a landing page —{" "}
          <AboutJourneyProjectLink href={ManageTailwindURL}>
            Manage
          </AboutJourneyProjectLink>{" "}
          &{" "}
          <AboutJourneyProjectLink href={MetaverseTailwindURL}>
            Metaverse
          </AboutJourneyProjectLink>{" "}
          , with it.
        </h1>
      </AboutJourneyDescription>
    </AboutJourneyItem>
  );
};

export default JourneyTailwind;
