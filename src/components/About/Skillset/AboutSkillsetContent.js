import styles from "./AboutSkillsetContent.module.css";
import AboutSkillsetItem from "./AboutSkillsetItem";

const AboutSkillsetContent = () => {
  return (
    <ul className={styles.skillsetContent}>
      <AboutSkillsetItem name="HTML" />
      <AboutSkillsetItem name="CSS and SASS" />
      <AboutSkillsetItem name="JavaScript" />
      <AboutSkillsetItem name="Bootstrap 5" />
      <AboutSkillsetItem name="Git and GitHub" />
      <AboutSkillsetItem name="React" />
      <AboutSkillsetItem name="NextJS" />
      <AboutSkillsetItem name="TypeScript" />
      <AboutSkillsetItem name="React Testing Library" />
      <AboutSkillsetItem name="Jest" />
      <AboutSkillsetItem name="GraphQL" />
      <AboutSkillsetItem name="Tailwind CSS" />
      <AboutSkillsetItem name="SQL" />
      <AboutSkillsetItem name="Prisma" />
    </ul>
  );
};

export default AboutSkillsetContent;
