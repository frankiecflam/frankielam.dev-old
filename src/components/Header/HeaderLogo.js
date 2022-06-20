import styles from "./HeaderLogo.module.css";
import { WebsiteLogo } from "../../assets/Images/index";
import { Link } from "react-scroll";
import { ScrollIntoViewDuration } from "../../utils/constants/index";

const HeaderLogo = () => {
  return (
    <Link
      to="home"
      smooth={true}
      hashSpy={false}
      duration={ScrollIntoViewDuration}
      className={styles.navBrand}
    >
      <img src={WebsiteLogo} alt="website logo" className={styles.logo} />
    </Link>
  );
};

export default HeaderLogo;
