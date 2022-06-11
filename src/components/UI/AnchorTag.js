import styles from "./AnchorTag.module.css";

const AnchorTag = ({ href, children, className }) => {
  return (
    <a
      className={className ? `${styles.anchor} ${className}` : styles.anchor}
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
};

export default AnchorTag;
