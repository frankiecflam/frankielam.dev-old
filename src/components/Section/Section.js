import styles from "./Section.module.css";

const Section = ({ children, className }) => {
  return (
    <section
      className={className ? `${styles.section} ${className}` : styles.section}
    >
      {children}
    </section>
  );
};

export default Section;
