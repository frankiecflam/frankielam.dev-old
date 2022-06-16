import styles from "./ContactInput.module.css";
import { ExclamationMarkIcon } from "../../assets/Icons/index";

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
    <div
      className={
        inputFocused
          ? `${styles.inputGroup} ${styles.active}`
          : styles.inputGroup
      }
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
    </div>
  );
};

export default ContactInput;
