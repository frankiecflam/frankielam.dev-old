import styles from "./ProjectItem.module.css";
import { BuildIcon } from "../../assets/Icons/index";
import AnchorTag from "../UI/AnchorTag";
import { motion } from "framer-motion";

const ProjectItem = ({
  date,
  title,
  githubURL,
  websiteURL,
  imageSrc,
  builtWith,
}) => {
  return (
    <motion.li
      className={styles.projectItem}
      initial={{ y: "10rem", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
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
    </motion.li>
  );
};

export default ProjectItem;
