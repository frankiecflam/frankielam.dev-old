import styles from "./AboutSkillsetItem.module.css";
import { KeyboardIcon } from "../../../assets/Icons/index";
import { motion } from "framer-motion";

const AboutSkillsetItem = ({ name }) => {
  return (
    <motion.li
      className={styles.skillItem}
      initial={{ x: "5rem", y: "10rem", opacity: 0 }}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <KeyboardIcon className={styles.icon} />
      <p className={styles.name}>{name}</p>
    </motion.li>
  );
};

export default AboutSkillsetItem;
