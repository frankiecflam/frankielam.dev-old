import styles from "./ProjectList.module.css";
import { HiddenGems, ZestyBurgers, Manage, Bookmark } from "./Project/index";

const ProjectList = () => {
  return (
    <ul className={styles.projectList}>
      <HiddenGems />
      <ZestyBurgers />
      <Manage />
      <Bookmark />
    </ul>
  );
};

export default ProjectList;
