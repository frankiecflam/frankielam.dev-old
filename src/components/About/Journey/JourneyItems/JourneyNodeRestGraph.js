import AboutJourneyItem from "../AboutJourneyItem";
import { ServerIcon } from "../../../../assets/Icons";
import AboutJourneyIcon from "../AboutJourneyIcon";
import AboutJourneyDescription from "../AboutJourneyDescription";

const JourneyNodeRestGraph = ({ toRight }) => {
  return (
    <AboutJourneyItem toRight={toRight}>
      <AboutJourneyIcon>
        <ServerIcon />
      </AboutJourneyIcon>
      <AboutJourneyDescription date="nov 2022">
        <h1>
          I learnt NodeJS, REST API and GraphQL for better understanding of how
          frontend and backend work together.
        </h1>
      </AboutJourneyDescription>
    </AboutJourneyItem>
  );
};

export default JourneyNodeRestGraph;
