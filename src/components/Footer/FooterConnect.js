import styles from "./FooterConnect.module.css";
import FooterConnectList from "./FooterConnectList";
import { motion } from "framer-motion";

const FooterConnect = () => {
  return (
    <div className={styles.footerConnect}>
      <motion.h1
        className={styles.heading}
        initial={{ y: "10rem", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Connect with me
      </motion.h1>
      <FooterConnectList />
    </div>
  );
};

export default FooterConnect;
