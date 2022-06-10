import styles from "./SectionHeader.module.css";

const SectionHeader = ({ heading, subHeading }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.heading}>{heading}</h1>
      <h2 className={styles.subHeading}>{subHeading}</h2>
    </header>
  );
};

export default SectionHeader;
