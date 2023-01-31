import AboutJourneyItem from "../AboutJourneyItem";
import AboutJourneyIcon from "../AboutJourneyIcon";
import AboutJourneyDescription from "../AboutJourneyDescription";
import { CompassIcon } from "../../../../assets/Icons";

const JourneyJan2023 = ({ toRight }) => {
  return (
    <AboutJourneyItem toRight={toRight}>
      <AboutJourneyIcon>
        <CompassIcon />
      </AboutJourneyIcon>
      <AboutJourneyDescription date="jan 2023">
        <h1>
          I learnt design patterns of React, Authentication & Authorisation,
          SQL, Prisma, TDD and web accessibility.
        </h1>
      </AboutJourneyDescription>
    </AboutJourneyItem>
  );
};

export default JourneyJan2023;
