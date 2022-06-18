import styles from "./Button.module.css";
import { Fragment } from "react";
import { motion } from "framer-motion";

const Button = ({ className, type, text, animation }) => {
  return (
    <Fragment>
      {animation && (
        <motion.button
          className={className ? `${styles.btn} ${className}` : styles.btn}
          type={type ? type : "button"}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {text}
        </motion.button>
      )}
      {!animation && (
        <button
          className={className ? `${styles.btn} ${className}` : styles.btn}
          type={type ? type : "button"}
        >
          {text}
        </button>
      )}
    </Fragment>
  );
};

export default Button;
