import styles from "./Container.module.css";

const Container = ({ children, className }) => {
  return (
    <div
      className={
        className ? `${styles.container} ${className}` : styles.container
      }
    >
      {children}
    </div>
  );
};

export default Container;
