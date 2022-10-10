import styles from "./ProjectList.module.css";
import { HiddenGemsTS, ZestyBurgers, Manage, NutsLab } from "./Project/index";

const ProjectList = () => {
  return (
    <ul className={styles.projectList}>
      <HiddenGemsTS />
      <NutsLab />
      <ZestyBurgers />
      <Manage />
    </ul>
  );
};

export default ProjectList;
