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
  JourneyNutsLab,
  JourneyJest,
} from "./JourneyItems/index";

const AboutJourneyContent = () => {
  return (
    <div className={styles.journeyContent}>
      <AboutJourneyTimeline />
      <div className={styles.journeyItems}>
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
        <JourneyNutsLab toRight={true} />
        <JourneyJest toRight={false} />
      </div>
      <JourneyContinue />
    </div>
  );
};

export default AboutJourneyContent;
