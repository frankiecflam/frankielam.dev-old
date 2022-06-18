import styles from "./FooterMessage.module.css";
import { motion } from "framer-motion";

const FooterMessage = () => {
  return (
    <div className={styles.footerMessage}>
      <motion.h1
        className={styles.message}
        initial={{ x: "-10rem", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Designed and Built by Frankie Lam
      </motion.h1>
    </div>
  );
};

export default FooterMessage;
