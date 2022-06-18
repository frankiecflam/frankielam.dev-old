import styles from "./ContactInput.module.css";
import { ExclamationMarkIcon } from "../../assets/Icons/index";
import { motion } from "framer-motion";

const ContactInput = ({
  type,
  placeholder,
  textarea,
  inputState,
  inputValidity,
  inputFocused,
  onChange,
  onBlur,
  onFocus,
  isFormSubmitted,
}) => {
  let inputFeedbackClasses = textarea
    ? `${styles.inputFeedback} ${styles.textareaInputFeedback} `
    : `${styles.inputFeedback} `;

  inputFeedbackClasses += isFormSubmitted
    ? inputValidity
      ? styles.correct
      : styles.incorrect
    : "";

  return (
    <motion.div
      className={
        inputFocused
          ? `${styles.inputGroup} ${styles.active}`
          : styles.inputGroup
      }
      initial={{ x: "-10rem", opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      }}
    >
      <label htmlFor={placeholder} className={styles.placeholder}>
        {placeholder}
      </label>

      {!textarea && (
        <input
          id={placeholder}
          value={inputState}
          type={type}
          className={styles.input}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      )}

      {textarea && (
        <textarea
          id={placeholder}
          value={inputState}
          type={type}
          rows="10"
          className={styles.input}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
        />
      )}
      <div className={inputFeedbackClasses}>
        <ExclamationMarkIcon className={styles.inputFeedbackIcon} />
      </div>
    </motion.div>
  );
};

export default ContactInput;
