import styles from "./AboutStory.module.css";
import SectionHeader from "../../Section/SectionHeader";
import AboutStoryContent from "./AboutStoryContent";

const AboutStory = () => {
  return (
    <div className={styles.story}>
      <SectionHeader heading="about" subHeading="here is my story." />
      <AboutStoryContent />
    </div>
  );
};

export default AboutStory;
