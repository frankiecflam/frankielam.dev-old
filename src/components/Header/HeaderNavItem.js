import styles from "./HeaderNavItem.module.css";

const HeaderNavItem = ({ name, location }) => {
  const handleNavLinkClick = (e) => {
    e.preventDefault();
  };

  return (
    <li className={styles.navItem}>
      <a href={location} onClick={handleNavLinkClick}>
        {name}
      </a>
    </li>
  );
};

export default HeaderNavItem;
