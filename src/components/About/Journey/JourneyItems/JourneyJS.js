import AboutJourneyIcon from "../AboutJourneyIcon";
import AboutJourneyItem from "../AboutJourneyItem";
import { JSIcon } from "../../../../assets/Icons";
import AboutJourneyDescription from "../AboutJourneyDescription";

const JourneyJS = ({ toRight }) => {
  return (
    <AboutJourneyItem toRight={toRight}>
      <AboutJourneyIcon>
        <JSIcon />
      </AboutJourneyIcon>
      <AboutJourneyDescription date="dec 2021">
        <h1>
          I finished my first JavaScript course on Udemy, and decided to be
          focused on web development.
        </h1>
      </AboutJourneyDescription>
    </AboutJourneyItem>
  );
};

export default JourneyJS;
