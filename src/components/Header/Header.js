import styles from "./Header.module.css";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";

const Header = () => {
  return (
    <header className={styles.header}>
      <HeaderLogo />
      <HeaderNav />
    </header>
  );
};

export default Header;
