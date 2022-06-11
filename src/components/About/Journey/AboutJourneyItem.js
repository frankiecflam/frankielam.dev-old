import styles from "./AboutJourneyItem.module.css";

const AboutJourneyItem = ({ toRight, start, children }) => {
  return (
    <div
      className={
        toRight
          ? `${styles.toRight} ${styles.journeyItem}`
          : `${styles.toLeft} ${styles.journeyItem}`
      }
    >
      <div className={start ? `${styles.dot} ${styles.start}` : styles.dot} />
      {children}
    </div>
  );
};

export default AboutJourneyItem;
