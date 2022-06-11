import styles from "./AboutJourneyDescription.module.css";

const AboutJourneyDescription = ({ date, children }) => {
  return (
    <div className={styles.description}>
      <p className={styles.date}>{date}</p>
      <div className={styles.details}>{children}</div>
    </div>
  );
};

export default AboutJourneyDescription;
