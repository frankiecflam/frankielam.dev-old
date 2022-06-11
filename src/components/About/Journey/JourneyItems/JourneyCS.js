import AboutJourneyIcon from "../AboutJourneyIcon";
import AboutJourneyItem from "../AboutJourneyItem";
import { CodeIcon } from "../../../../assets/Icons";

import AboutJourneyDescription from "../AboutJourneyDescription";

const JourneyCS = ({ toRight }) => {
  return (
    <AboutJourneyItem toRight={toRight}>
      <AboutJourneyIcon>
        <CodeIcon />
      </AboutJourneyIcon>
      <AboutJourneyDescription date="jul 2021">
        <h1>
          I finished my first computer science course — CS50, with C and Python.
        </h1>
      </AboutJourneyDescription>
    </AboutJourneyItem>
  );
};

export default JourneyCS;
