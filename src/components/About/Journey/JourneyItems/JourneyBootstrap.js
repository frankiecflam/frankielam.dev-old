import AboutJourneyItem from "../AboutJourneyItem";
import { BootstrapIcon } from "../../../../assets/Icons";
import { EasybankURL, BookmarkURL } from "../../../../utils/constants";
import AboutJourneyProjectLink from "../AboutJourneyProjectLink";
import AboutJourneyIcon from "../AboutJourneyIcon";
import AboutJourneyDescription from "../AboutJourneyDescription";

const JourneyBootstrap = ({ toRight }) => {
  return (
    <AboutJourneyItem toRight={toRight}>
      <AboutJourneyIcon>
        <BootstrapIcon />
      </AboutJourneyIcon>
      <AboutJourneyDescription date="mar 2022">
        <h1>
          I learnt Bootstrap 5 and created 2 landing pages —{" "}
          <AboutJourneyProjectLink href={EasybankURL}>
            Easybank
          </AboutJourneyProjectLink>{" "}
          &{" "}
          <AboutJourneyProjectLink href={BookmarkURL}>
            Bookmark
          </AboutJourneyProjectLink>{" "}
          , with it.
        </h1>
        <h1>I learnt Git and GitHub.</h1>
      </AboutJourneyDescription>
    </AboutJourneyItem>
  );
};

export default JourneyBootstrap;
