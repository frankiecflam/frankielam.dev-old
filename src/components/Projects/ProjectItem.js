import styles from "./ProjectItem.module.css";
import { BuildIcon } from "../../assets/Icons/index";
import AnchorTag from "../UI/AnchorTag";

const ProjectItem = ({
  date,
  title,
  githubURL,
  websiteURL,
  imageSrc,
  builtWith,
}) => {
  return (
    <li className={styles.projectItem}>
      <header className={styles.header}>
        <p className={styles.date}>{date}</p>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.links}>
          <AnchorTag href={githubURL} className={styles.link}>
            GitHub
          </AnchorTag>
          <AnchorTag href={websiteURL} className={styles.link}>
            Website
          </AnchorTag>
        </div>
        <div className={styles.new} />
      </header>
      <div className={styles.body}>
        <AnchorTag href={websiteURL} className={styles.mockupLink}>
          <img src={imageSrc} alt={title} className={styles.mockupImg} />
        </AnchorTag>
      </div>
      <footer className={styles.footer}>
        <div className={styles.build}>
          <BuildIcon className={styles.buildIcon} />
          <p className={styles.buildText}>Built with {builtWith}.</p>
        </div>
      </footer>
    </li>
  );
};

export default ProjectItem;
