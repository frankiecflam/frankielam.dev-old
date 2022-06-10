import styles from "./HeaderLogo.module.css";
import { WebsiteLogo } from "../../assets/Images/index";

const HeaderLogo = () => {
  return (
    <a href="/" className={styles.navBrand}>
      <img src={WebsiteLogo} alt="website logo" className={styles.logo} />
    </a>
  );
};

export default HeaderLogo;
