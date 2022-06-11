import styles from "./Section.module.css";

const Section = ({ children, className, id }) => {
  return (
    <section
      className={className ? `${styles.section} ${className}` : styles.section}
      id={id}
    >
      {children}
    </section>
  );
};

export default Section;
