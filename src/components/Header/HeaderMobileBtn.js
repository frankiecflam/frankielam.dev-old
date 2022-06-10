import styles from "./HeaderMobileBtn.module.css";

const HeaderMobileBtn = ({ onClick, mobileNavActive }) => {
  return (
    <div
      onClick={onClick}
      className={
        mobileNavActive
          ? `${styles.active} ${styles.mobileNav}`
          : styles.mobileNav
      }
    >
      <div className={styles.mobileBtn} />
    </div>
  );
};

export default HeaderMobileBtn;
