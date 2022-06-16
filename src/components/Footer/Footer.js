import styles from "./Footer.module.css";
import Container from "../UI/Container";
import FooterMessage from "./FooterMessage";
import FooterConnect from "./FooterConntect";

const Footer = () => {
  return (
    <footer>
      <Container className={styles.footer}>
        <FooterMessage />
        <FooterConnect />
      </Container>
    </footer>
  );
};

export default Footer;
