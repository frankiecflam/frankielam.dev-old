import styles from "./FooterConnectItem.module.css";
import { motion } from "framer-motion";
import AnchorTag from "../UI/AnchorTag";

const FooterConnectItem = ({ name, type, href }) => {
  return (
    <motion.li
      className={styles.item}
      initial={{ y: "10rem", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <AnchorTag
        href={type === "email" ? `mailto:${href}` : href}
        className={styles.itemLink}
      >
        {name}
      </AnchorTag>
    </motion.li>
  );
};

export default FooterConnectItem;
