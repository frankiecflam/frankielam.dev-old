import styles from "./Contact.module.css";
import Section from "../Section/Section";
import SectionHeader from "../Section/SectionHeader";
import { Email } from "../../utils/constants/index";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <Section className={styles.contact} id="contact">
      <SectionHeader
        heading="contact"
        subHeading={`if you fancy a chat, feel free to contact me directly on`}
        email={Email}
      />
      <ContactForm />
    </Section>
  );
};

export default Contact;
