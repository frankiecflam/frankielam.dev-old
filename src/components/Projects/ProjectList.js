import styles from "./ProjectList.module.css";
import { HiddenGems, ZestyBurgers, Manage, NutsLab } from "./Project/index";

const ProjectList = () => {
  return (
    <ul className={styles.projectList}>
      <NutsLab />
      <HiddenGems />
      <ZestyBurgers />
      <Manage />
    </ul>
  );
};

export default ProjectList;
