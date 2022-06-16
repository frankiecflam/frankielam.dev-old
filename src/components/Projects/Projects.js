import styles from "./Projects.module.css";
import Section from "../Section/Section";
import SectionHeader from "../Section/SectionHeader";
import ProjectsBody from "./ProjectsBody";

const Projects = () => {
  return (
    <Section id="projects" className={styles.projects}>
      <SectionHeader
        heading="projects"
        subHeading="here are some things I have built."
      />
      <ProjectsBody />
    </Section>
  );
};

export default Projects;
