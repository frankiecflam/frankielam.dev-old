import styles from "./ContactForm.module.css";
import ContactInput from "./ContactInput";
import ContactSubmitBtn from "./ContactSubmitBtn";
import useInput from "../../hooks/useInput";
import { useState } from "react";
import { ExclamationMarkIcon } from "../../assets/Icons/index";
import emailjs from "@emailjs/browser";

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
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    setIsFormSubmitted(true);
    setIsFormSuccessfullySubmitted(false);

    if (!formValidity) return;

    setIsFormSubmitted(false);

    // Send data to Email via EmailJS
    const emailJSResponse = await emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      e.target,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    );

    // Status: either 200 (ok) or 400 (error)
    if (!emailJSResponse.status === 200) return;
    setIsFormSuccessfullySubmitted(true);

    // Message of successful submission stays for n seconds.
    setTimeout(() => {
      setIsFormSuccessfullySubmitted(false);
    }, 1000 * 5);

    // Reset input fields
    nameOnReset();
    emailOnReset();
    messageOnReset();
  };

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <ContactInput
        type="text"
        name="sender_name"
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
        name="email"
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
        name="message"
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
      {!isFormSuccessfullySubmitted && <ContactSubmitBtn />}
      {isFormSuccessfullySubmitted && (
        <p className={styles.formSubmittedFeedback}>
          Thank you for your message. I will get back to you ASAP.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
