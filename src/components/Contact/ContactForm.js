import styles from "./ContactForm.module.css";
import ContactInput from "./ContactInput";
import ContactSubmitBtn from "./ContactSubmitBtn";
import useInput from "../../hooks/useInput";
import { useState } from "react";
import { ExclamationMarkIcon } from "../../assets/Icons/index";

function emailAuthentication(email) {
  return email.trim().length > 0 && email.trim().includes("@");
}

function inputAuthentication(value) {
  return value.trim().length > 0;
}

const ContactForm = () => {
  // NameInput
  const {
    inputState: nameInput,
    inputValidity: nameInputValidity,
    inputFocused: nameInputFocused,
    onChange: nameOnChange,
    onFocus: nameOnFocus,
    onBlur: nameOnBlur,
    onReset: nameOnReset,
  } = useInput(inputAuthentication);

  // EmailInput
  const {
    inputState: emailInput,
    inputValidity: emailInputValidity,
    inputFocused: emailInputFocused,
    onChange: emailOnChange,
    onFocus: emailOnFocus,
    onBlur: emailOnBlur,
    onReset: emailOnReset,
  } = useInput(emailAuthentication);

  // MessageInput
  const {
    inputState: messageInput,
    inputValidity: messageInputValidity,
    inputFocused: messageInputFocused,
    onChange: messageOnChange,
    onFocus: messageOnFocus,
    onBlur: messageOnBlur,
    onReset: messageOnReset,
  } = useInput(inputAuthentication);

  // Validity
  const formValidity =
    nameInputValidity && emailInputValidity && messageInputValidity;

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isFormSuccessfullySubmitted, setIsFormSuccessfullySubmitted] =
    useState(false);

  // FormValidation
  const handleFormSubmit = (e) => {
    e.preventDefault();

    setIsFormSubmitted(true);

    if (!formValidity) return;

    setIsFormSubmitted(false);
    setIsFormSuccessfullySubmitted(true);

    // Message of successful submission stays for n seconds.
    setTimeout(() => {
      setIsFormSuccessfullySubmitted(false);
    }, 1000 * 10);

    // Reset input fields
    nameOnReset();
    emailOnReset();
    messageOnReset();
  };

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <ContactInput
        type="text"
        placeholder="name"
        inputState={nameInput}
        inputValidity={nameInputValidity}
        inputFocused={nameInputFocused}
        onChange={nameOnChange}
        onFocus={nameOnFocus}
        onBlur={nameOnBlur}
        isFormSubmitted={isFormSubmitted}
      />
      <ContactInput
        type="email"
        placeholder="email"
        inputState={emailInput}
        inputValidity={emailInputValidity}
        inputFocused={emailInputFocused}
        onChange={emailOnChange}
        onFocus={emailOnFocus}
        onBlur={emailOnBlur}
        isFormSubmitted={isFormSubmitted}
      />
      <ContactInput
        type="text"
        placeholder="message"
        textarea={true}
        inputState={messageInput}
        inputValidity={messageInputValidity}
        inputFocused={messageInputFocused}
        onChange={messageOnChange}
        onFocus={messageOnFocus}
        onBlur={messageOnBlur}
        isFormSubmitted={isFormSubmitted}
      />
      <div
        className={
          !formValidity && isFormSubmitted
            ? `${styles.required} ${styles.requiredActive}`
            : styles.required
        }
      >
        <ExclamationMarkIcon className={styles.requiredIcon} />
        <p className={styles.requiredText}>required</p>
      </div>
      <ContactSubmitBtn />
      {isFormSuccessfullySubmitted && (
        <p className={styles.formSubmittedFeedback}>
          Thank you for your message. I will get back to you ASAP.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
