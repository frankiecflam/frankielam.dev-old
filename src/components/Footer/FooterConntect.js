import styles from "./FooterConnect.module.css";
import AnchorTag from "../UI/AnchorTag";
import {
  Email,
  Facebook,
  Instagram,
  Github,
} from "../../utils/constants/index";

const FooterConntect = () => {
  return (
    <div className={styles.footerConnect}>
      <h1 className={styles.heading}>Connect with me</h1>
      <ul className={styles.list}>
        <li className={styles.item}>
          <AnchorTag href={`mailto:${Email}`} className={styles.itemLink}>
            Email
          </AnchorTag>
        </li>
        <li className={styles.item}>
          <AnchorTag href={Github} className={styles.itemLink}>
            GitHub
          </AnchorTag>
        </li>
        <li className={styles.item}>
          <AnchorTag href={Facebook} className={styles.itemLink}>
            Facebook
          </AnchorTag>
        </li>
        <li className={styles.item}>
          <AnchorTag href={Instagram} className={styles.itemLink}>
            Instagram
          </AnchorTag>
        </li>
      </ul>
    </div>
  );
};

export default FooterConntect;
