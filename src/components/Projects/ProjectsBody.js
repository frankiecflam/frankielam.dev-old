import styles from "./ProjectsBody.module.css";
import ProjectList from "./ProjectList";

const ProjectsBody = () => {
  return (
    <div className={styles.projectBody}>
      <ProjectList />
    </div>
  );
};

export default ProjectsBody;
