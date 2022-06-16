import styles from "./SectionHeader.module.css";
import AnchorTag from "../UI/AnchorTag";

const SectionHeader = ({ heading, subHeading, email }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.heading}>{heading}</h1>
      {!email && <h2 className={styles.subHeading}>{subHeading}</h2>}
      {email && (
        <h2 className={styles.subHeading}>
          {subHeading}{" "}
          <AnchorTag href={`mailto:${email}`} className={styles.email}>
            {email}
          </AnchorTag>
          .
        </h2>
      )}
    </header>
  );
};

export default SectionHeader;
