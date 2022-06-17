import styles from "./HeaderNavList.module.css";
import HeaderNavItem from "./HeaderNavItem";

const HeaderNavList = ({ mobileNavActive, onClick }) => {
  return (
    <ul
      className={
        mobileNavActive ? `${styles.navList} ${styles.active}` : styles.navList
      }
      onClick={onClick}
    >
      <HeaderNavItem
        name="home"
        location="home"
        onClick={onClick}
        mobileNavActive={mobileNavActive}
      />
      <HeaderNavItem
        name="projects"
        location="projects"
        onClick={onClick}
        mobileNavActive={mobileNavActive}
      />
      <HeaderNavItem
        name="about"
        location="about"
        onClick={onClick}
        mobileNavActive={mobileNavActive}
      />
      <HeaderNavItem
        name="contact"
        location="contact"
        onClick={onClick}
        mobileNavActive={mobileNavActive}
      />
    </ul>
  );
};

export default HeaderNavList;
