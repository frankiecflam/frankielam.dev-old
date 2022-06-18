import styles from "./SectionHeader.module.css";
import AnchorTag from "../UI/AnchorTag";
import { motion } from "framer-motion";

const SectionHeader = ({ heading, subHeading, email }) => {
  return (
    <motion.header
      className={styles.header}
      initial={{ y: "10rem", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
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
    </motion.header>
  );
};

export default SectionHeader;
