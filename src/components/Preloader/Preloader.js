import styles from "./Preloader.module.css";
import { motion } from "framer-motion";

const Preloader = () => {
  return (
    <motion.div
      className={styles.preloader}
      animate={{
        clipPath: ["inset(0 0 0 0)", "inset(0 0 100% 0)"],
        opacity: [1, 0],
      }}
      transition={{ duration: 1, delay: 4 }}
    >
      <div className={styles.preloaderContent}>
        {/* Squares */}
        <motion.div
          className={`${styles.square} ${styles.square1}`}
          animate={{ x: ["7.5rem", "0rem"], opacity: [0, 1] }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
        <motion.div
          className={`${styles.square} ${styles.square2}`}
          animate={{ x: ["-1.5rem", "0rem"], opacity: [0, 1] }}
          transition={{ duration: 0.4, delay: 1.2 }}
        />
        <motion.div
          className={`${styles.square} ${styles.square3}`}
          animate={{ x: ["-1.5rem", "0rem"], opacity: [0, 1] }}
          transition={{ duration: 0.4, delay: 1.6 }}
        />
        <motion.div
          className={`${styles.square} ${styles.square4}`}
          animate={{ y: ["-1.5rem", "0rem"], opacity: [0, 1] }}
          transition={{ duration: 0.4, delay: 1.2 }}
        />
        <motion.div
          className={`${styles.square} ${styles.square5}`}
          animate={{ y: ["-1.5rem", "0rem"], opacity: [0, 1] }}
          transition={{ duration: 0.4, delay: 1.6 }}
        />
        <motion.div
          className={`${styles.square} ${styles.square6}`}
          animate={{ y: ["-1.5rem", "0rem"], opacity: [0, 1] }}
          transition={{ duration: 0.4, delay: 2 }}
        />

        <motion.div
          className={`${styles.square} ${styles.square8}`}
          animate={{ x: ["-1.5rem", "0rem"], opacity: [0, 1] }}
          transition={{ duration: 0.4, delay: 2 }}
        />
        <motion.div
          className={`${styles.square} ${styles.square9}`}
          animate={{ x: ["-1.5rem", "0rem"], opacity: [0, 1] }}
          transition={{ duration: 0.4, delay: 2.4 }}
        />

        <motion.div
          className={`${styles.square} ${styles.square10}`}
          animate={{ transform: ["scale(5)", "scale(1)"] }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />

        <motion.div
          className={`${styles.square} ${styles.square11}`}
          animate={{ y: ["-1.5rem", "0rem"], opacity: [0, 1] }}
          transition={{ duration: 0.4, delay: 1.2 }}
        />
        <motion.div
          className={`${styles.square} ${styles.square12}`}
          animate={{ y: ["-1.5rem", "0rem"], opacity: [0, 1] }}
          transition={{ duration: 0.4, delay: 1.6 }}
        />

        <motion.div
          className={`${styles.square} ${styles.square13}`}
          animate={{ y: ["-1.5rem", "0rem"], opacity: [0, 1] }}
          transition={{ duration: 0.4, delay: 2 }}
        />
        <motion.div
          className={`${styles.square} ${styles.square14}`}
          animate={{ x: ["-1.5rem", "0rem"], opacity: [0, 1] }}
          transition={{ duration: 0.4, delay: 2.4 }}
        />
        <motion.div
          className={`${styles.square} ${styles.square15}`}
          animate={{ x: ["-1.5rem", "0rem"], opacity: [0, 1] }}
          transition={{ duration: 0.4, delay: 2.8 }}
        />

        {/* Circle */}
        <motion.div
          className={styles.circle}
          animate={{
            x: ["-4.5rem", "0rem"],
            opacity: [0, 1],
            width: ["0rem", "3rem"],
            height: ["0rem", "3rem"],
          }}
          transition={{ duration: 0.6, delay: 3.2 }}
        />
      </div>
    </motion.div>
  );
};

export default Preloader;
