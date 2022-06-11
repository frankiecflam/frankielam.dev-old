import styles from "./About.module.css";
import Section from "../Section/Section";
import AboutStory from "./Story/AboutStory";
import AboutSkillset from "./Skillset/AboutSkillset";
import AboutJourney from "./Journey/AboutJourney";

const About = () => {
  return (
    <Section className={styles.about} id="about">
      <AboutStory />
      <AboutSkillset />
      <AboutJourney />
    </Section>
  );
};

export default About;
