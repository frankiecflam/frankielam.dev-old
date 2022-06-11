import AboutJourneyItem from "../AboutJourneyItem";
import { ReactIcon } from "../../../../assets/Icons";
import AboutJourneyIcon from "../AboutJourneyIcon";
import AboutJourneyDescription from "../AboutJourneyDescription";

const JourneyReactNext = ({ toRight }) => {
  return (
    <AboutJourneyItem toRight={toRight}>
      <AboutJourneyIcon>
        <ReactIcon />
      </AboutJourneyIcon>
      <AboutJourneyDescription date="apr 2022">
        <h1>I learnt React and NextJS.</h1>
      </AboutJourneyDescription>
    </AboutJourneyItem>
  );
};

export default JourneyReactNext;
