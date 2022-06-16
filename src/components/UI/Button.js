import styles from "./Button.module.css";

const Button = ({ className, type, text }) => {
  return (
    <button
      className={className ? `${styles.btn} ${className}` : styles.btn}
      type={type ? type : "button"}
    >
      {text}
    </button>
  );
};

export default Button;
