import styles from "./ContactSubmitBtn.module.css";
import Button from "../UI/Button";

const ContactSubmitBtn = () => {
  return <Button type="submit" className={styles.btn} text="send message" />;
};

export default ContactSubmitBtn;
