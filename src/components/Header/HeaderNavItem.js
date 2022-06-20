import styles from "./HeaderNavItem.module.css";
import { Link } from "react-scroll";
import {
  ScrollIntoViewDuration,
  ScrollDelayOnMobileNav,
} from "../../utils/constants/index";

const HeaderNavItem = ({ name, location, onClick, mobileNavActive }) => {
  return (
    <li className={styles.navItem}>
      <Link
        to={location}
        smooth={true}
        hashSpy={name === "home" ? false : true}
        spy={true}
        duration={ScrollIntoViewDuration}
        className={styles.navLink}
        onClick={onClick}
        delay={mobileNavActive ? ScrollDelayOnMobileNav : 0}
        activeClass={`${styles.navLink} ${styles.navLinkActive}`}
      >
        {name}
      </Link>
    </li>
  );
};

export default HeaderNavItem;
