import styles from "./AboutJourneyContent.module.css";
import AboutJourneyTimeline from "./AboutJourneyTimeline";
import {
  JourneyStart,
  JourneyCS,
  JourneyWeb,
  JourneyJS,
  JourneyMobile,
  JourneySASS,
  JourneyBootstrap,
  JourneyReactNext,
  JourneyZesty,
  JourneyHiddenGems,
  JourneyContinue,
} from "./JourneyItems/index";

const AboutJourneyContent = () => {
  return (
    <div className={styles.journeyContent}>
      <div className={styles.journeyItems}>
        <AboutJourneyTimeline />
        <JourneyStart toRight={true} />
        <JourneyCS toRight={false} />
        <JourneyWeb toRight={true} />
        <JourneyJS toRight={false} />
        <JourneyMobile toRight={true} />
        <JourneySASS toRight={false} />
        <JourneyBootstrap toRight={true} />
        <JourneyReactNext toRight={false} />
        <JourneyZesty toRight={true} />
        <JourneyHiddenGems toRight={false} />
      </div>
      <JourneyContinue />
    </div>
  );
};

export default AboutJourneyContent;
