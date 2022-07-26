import styles from "./FooterConnectList.module.css";
import FooterConnectItem from "./FooterConnectItem";
import {
  Email,
  Facebook,
  Instagram,
  Github,
  Twitter,
} from "../../utils/constants/index";

const FooterConnectList = () => {
  return (
    <ul className={styles.list}>
      <FooterConnectItem name="Email" type="email" href={Email} />
      <FooterConnectItem name="GitHub" type="social" href={Github} />
      <FooterConnectItem name="Twitter" type="social" href={Twitter} />
      <FooterConnectItem name="Facebook" type="social" href={Facebook} />
      <FooterConnectItem name="Instagram" type="social" href={Instagram} />
    </ul>
  );
};

export default FooterConnectList;
