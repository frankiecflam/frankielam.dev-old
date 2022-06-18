import styles from "./FooterConnect.module.css";
import AnchorTag from "../UI/AnchorTag";
import {
  Email,
  Facebook,
  Instagram,
  Github,
} from "../../utils/constants/index";
import { motion } from "framer-motion";

const FooterConntect = () => {
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
      <ul className={styles.list}>
        <motion.li
          className={styles.item}
          initial={{ y: "10rem", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <AnchorTag href={`mailto:${Email}`} className={styles.itemLink}>
            Email
          </AnchorTag>
        </motion.li>
        <motion.li
          className={styles.item}
          initial={{ y: "10rem", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <AnchorTag href={Github} className={styles.itemLink}>
            GitHub
          </AnchorTag>
        </motion.li>
        <motion.li
          className={styles.item}
          initial={{ y: "10rem", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <AnchorTag href={Facebook} className={styles.itemLink}>
            Facebook
          </AnchorTag>
        </motion.li>
        <motion.li
          className={styles.item}
          initial={{ y: "10rem", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <AnchorTag href={Instagram} className={styles.itemLink}>
            Instagram
          </AnchorTag>
        </motion.li>
      </ul>
    </div>
  );
};

export default FooterConntect;
