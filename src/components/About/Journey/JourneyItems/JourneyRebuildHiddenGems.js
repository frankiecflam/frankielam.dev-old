import AboutJourneyItem from "../AboutJourneyItem";
import { RebuildIcon } from "../../../../assets/Icons";
import AboutJourneyIcon from "../AboutJourneyIcon";
import AboutJourneyDescription from "../AboutJourneyDescription";
import AboutJourneyProjectLink from "../AboutJourneyProjectLink";
import { HiddenGemsTSURL } from "../../../../utils/constants";

const JourneyRebuildHiddenGems = ({ toRight }) => {
  return (
    <AboutJourneyItem toRight={toRight}>
      <AboutJourneyIcon>
        <RebuildIcon />
      </AboutJourneyIcon>
      <AboutJourneyDescription date="oct 2022">
        <h1>
          I rebuilt{" "}
          <AboutJourneyProjectLink href={HiddenGemsTSURL}>
            Hidden Gems
          </AboutJourneyProjectLink>{" "}
          with TypeScript and React Query for better user experience.
        </h1>
      </AboutJourneyDescription>
    </AboutJourneyItem>
  );
};

export default JourneyRebuildHiddenGems;
