import styles from "./JourneyContinue.module.css";
import { motion } from "framer-motion";

const JourneyContinue = () => {
  return (
    <motion.div
      className={styles.continue}
      initial={{ y: "10rem", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className={styles.dot}
        initial={{ transform: "scale(3)" }}
        whileInView={{ transform: "scale(1)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.33 }}
      />
      <motion.div
        className={styles.dot}
        initial={{ transform: "scale(3)" }}
        whileInView={{ transform: "scale(1)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.33 }}
      />
      <motion.div
        className={styles.dot}
        initial={{ transform: "scale(3)" }}
        whileInView={{ transform: "scale(1)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.33 }}
      />
      <motion.p
        className={styles.continueText}
        initial={{ y: "10rem", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.66, ease: "easeOut" }}
      >
        more to come...
      </motion.p>
    </motion.div>
  );
};

export default JourneyContinue;
