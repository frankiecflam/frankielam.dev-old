import styles from "./Header.module.css";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      className={styles.header}
      initial={{ opacity: 0, y: "2rem" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: 2,
      }}
    >
      <HeaderLogo />
      <HeaderNav />
    </motion.header>
  );
};

export default Header;
