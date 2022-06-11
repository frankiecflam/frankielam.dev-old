import AboutJourneyItem from "../AboutJourneyItem";
import { WalkIcon } from "../../../../assets/Icons";
import AboutJourneyIcon from "../AboutJourneyIcon";
import AboutJourneyDescription from "../AboutJourneyDescription";

const JourneyStart = ({ toRight }) => {
  return (
    <AboutJourneyItem toRight={toRight} start={true}>
      <AboutJourneyIcon>
        <WalkIcon />
      </AboutJourneyIcon>
      <AboutJourneyDescription date="may 2021">
        <h1>I started programming.</h1>
      </AboutJourneyDescription>
    </AboutJourneyItem>
  );
};

export default JourneyStart;
