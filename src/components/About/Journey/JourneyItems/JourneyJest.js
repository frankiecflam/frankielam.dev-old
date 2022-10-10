import AboutJourneyItem from "../AboutJourneyItem";
import { TestIcon } from "../../../../assets/Icons";
import AboutJourneyIcon from "../AboutJourneyIcon";
import AboutJourneyDescription from "../AboutJourneyDescription";

const JourneyJest = ({ toRight }) => {
  return (
    <AboutJourneyItem toRight={toRight}>
      <AboutJourneyIcon>
        <TestIcon />
      </AboutJourneyIcon>
      <AboutJourneyDescription date="aug 2022">
        <h1>I learnt unit testing with Jest and React Testing Library.</h1>
      </AboutJourneyDescription>
    </AboutJourneyItem>
  );
};

export default JourneyJest;
