import AboutJourneyItem from "../AboutJourneyItem";
import { BrowserIcon } from "../../../../assets/Icons";
import AboutJourneyIcon from "../AboutJourneyIcon";
import AboutJourneyDescription from "../AboutJourneyDescription";

const JourneyWEB = ({ toRight }) => {
  return (
    <AboutJourneyItem toRight={toRight}>
      <AboutJourneyIcon>
        <BrowserIcon />
      </AboutJourneyIcon>
      <AboutJourneyDescription date="nov 2021">
        <h1>
          I finished my first web development course — CS50WEB, with Python and
          JavaScript.
        </h1>
      </AboutJourneyDescription>
    </AboutJourneyItem>
  );
};

export default JourneyWEB;
