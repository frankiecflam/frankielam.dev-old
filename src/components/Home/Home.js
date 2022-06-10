import styles from "./Home.module.css";
import Section from "../Section/Section";

const Hero = () => {
  return (
    <Section className={styles.home}>
      <div className={styles.homeContent}>
        <h1 className={styles.heading}>Hi, my name is Frankie Lam.</h1>
        <h2 className={styles.subHeading}>
          I build minimal-aesthetic websites and apps.
        </h2>
        <p className={styles.description}>
          I am a self-taught web developer enjoying building things that live on
          the internet through curioristy and perservance.
        </p>
        <div className={styles.cta}>
          <a href="/" className={styles.ctaItem}>
            my projects
          </a>
          <a href="/" className={styles.ctaItem}>
            things about me
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
