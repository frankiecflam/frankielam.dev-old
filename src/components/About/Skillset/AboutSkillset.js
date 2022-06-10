import styles from "./AboutSkillset.module.css";
import SectionHeader from "../../Section/SectionHeader";
import AboutSkillsetContent from "./AboutSkillsetContent";

const AboutSkillset = () => {
  return (
    <div className={styles.skillset}>
      <SectionHeader
        heading="my skillset"
        subHeading="the tools with which I build websites and apps."
      />
      <AboutSkillsetContent />
    </div>
  );
};

export default AboutSkillset;
