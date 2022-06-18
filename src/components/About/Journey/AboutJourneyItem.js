import styles from "./AboutJourneyItem.module.css";
import { motion } from "framer-motion";

const AboutJourneyItem = ({ toRight, start, children }) => {
  return (
    <motion.div
      className={
        toRight
          ? `${styles.toRight} ${styles.journeyItem}`
          : `${styles.toLeft} ${styles.journeyItem}`
      }
      initial={{ opacity: 0, x: `${toRight ? "20rem" : "-20rem"}` }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className={start ? `${styles.dot} ${styles.start}` : styles.dot} />
      {children}
    </motion.div>
  );
};

export default AboutJourneyItem;
