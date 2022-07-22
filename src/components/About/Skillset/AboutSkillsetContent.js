import styles from "./AboutSkillsetContent.module.css";
import AboutSkillsetItem from "./AboutSkillsetItem";

const AboutSkillsetContent = () => {
  return (
    <ul className={styles.skillsetContent}>
      <AboutSkillsetItem name="HTML" />
      <AboutSkillsetItem name="Git and GitHub" />
      <AboutSkillsetItem name="CSS and SASS" />
      <AboutSkillsetItem name="React" />
      <AboutSkillsetItem name="JavaScript" />
      <AboutSkillsetItem name="NextJS" />
      <AboutSkillsetItem name="Bootstrap 5" />
      <AboutSkillsetItem name="TypeScript" />
    </ul>
  );
};

export default AboutSkillsetContent;
