import AboutJourneyItem from "../AboutJourneyItem";
import { BuildIcon } from "../../../../assets/Icons";
import { ZestyBurgersURL } from "../../../../utils/constants";
import AboutJourneyProjectLink from "../AboutJourneyProjectLink";
import AboutJourneyIcon from "../AboutJourneyIcon";
import AboutJourneyDescription from "../AboutJourneyDescription";

const JourneyZesty = ({ toRight }) => {
  return (
    <AboutJourneyItem toRight={toRight}>
      <AboutJourneyIcon>
        <BuildIcon />
      </AboutJourneyIcon>
      <AboutJourneyDescription date="may 2022">
        <h1>
          I built a food ordering web app —{" "}
          <AboutJourneyProjectLink href={ZestyBurgersURL}>
            Zesty Burgers
          </AboutJourneyProjectLink>{" "}
          with React.
        </h1>
      </AboutJourneyDescription>
    </AboutJourneyItem>
  );
};

export default JourneyZesty;
