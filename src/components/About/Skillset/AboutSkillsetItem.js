import styles from "./AboutSkillsetItem.module.css";
import { KeyboardIcon } from "../../../assets/Icons/index";

const AboutSkillsetItem = ({ name }) => {
  return (
    <li className={styles.skillItem}>
      <KeyboardIcon className={styles.icon} />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

export default AboutSkillsetItem;
