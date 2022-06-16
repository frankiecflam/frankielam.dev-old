import styles from "./HeaderNavList.module.css";
import HeaderNavItem from "./HeaderNavItem";

const HeaderNavList = ({ mobileNavActive }) => {
  return (
    <ul
      className={
        mobileNavActive ? `${styles.navList} ${styles.active}` : styles.navList
      }
    >
      <HeaderNavItem name="home" location="/" />
      <HeaderNavItem name="projects" location="/projects" />
      <HeaderNavItem name="about" location="/about" />
      <HeaderNavItem name="contact" location="/contact" />
    </ul>
  );
};

export default HeaderNavList;
