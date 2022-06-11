import AboutJourneyItem from "../AboutJourneyItem";
import { MobileIcon } from "../../../../assets/Icons";
import AboutJourneyIcon from "../AboutJourneyIcon";
import AboutJourneyDescription from "../AboutJourneyDescription";

const JourneyMobile = ({ toRight }) => {
  return (
    <AboutJourneyItem toRight={toRight}>
      <AboutJourneyIcon>
        <MobileIcon />
      </AboutJourneyIcon>
      <AboutJourneyDescription date="jan 2022">
        <h1>I learnt mobile responsiveness.</h1>
      </AboutJourneyDescription>
    </AboutJourneyItem>
  );
};

export default JourneyMobile;
