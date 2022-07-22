import AboutJourneyItem from "../AboutJourneyItem";
import { TSIcon } from "../../../../assets/Icons";
import { NutsLabURL } from "../../../../utils/constants";
import AboutJourneyProjectLink from "../AboutJourneyProjectLink";
import AboutJourneyIcon from "../AboutJourneyIcon";
import AboutJourneyDescription from "../AboutJourneyDescription";

const JourneyNutsLab = ({ toRight }) => {
  return (
    <AboutJourneyItem toRight={toRight}>
      <AboutJourneyIcon>
        <TSIcon />
      </AboutJourneyIcon>
      <AboutJourneyDescription date="jul 2022">
        <h1>
          I learnt TypeScript and built an e-commerce app —{" "}
          <AboutJourneyProjectLink href={NutsLabURL}>
            Nuts Lab
          </AboutJourneyProjectLink>{" "}
          with React, NextJS and TypeScript.
        </h1>
      </AboutJourneyDescription>
    </AboutJourneyItem>
  );
};

export default JourneyNutsLab;
