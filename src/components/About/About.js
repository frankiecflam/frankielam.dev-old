import styles from "./About.module.css";
import Section from "../Section/Section";
import AboutStory from "./Story/AboutStory";
import AboutSkillset from "./Skillset/AboutSkillset";

const About = () => {
  return (
    <Section className={styles.about}>
      <AboutStory />
      <AboutSkillset />
    </Section>
  );
};

export default About;
