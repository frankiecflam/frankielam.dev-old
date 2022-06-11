import styles from "./AboutJourneyProjectLink.module.css";
import AnchorTag from "../../UI/AnchorTag";

const AboutJourneyProjectLink = ({ children, href }) => {
  return (
    <AnchorTag href={href} className={styles.projectLink}>
      {children}
    </AnchorTag>
  );
};

export default AboutJourneyProjectLink;
