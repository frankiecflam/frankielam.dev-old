import styles from "./JourneyContinue.module.css";

const JourneyContinue = () => {
  return (
    <div className={styles.continue}>
      <div className={styles.dot} />
      <div className={styles.dot} />
      <div className={styles.dot} />
      <p className={styles.continueText}>more to come...</p>
    </div>
  );
};

export default JourneyContinue;
