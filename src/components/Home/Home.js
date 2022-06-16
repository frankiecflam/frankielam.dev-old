import styles from "./Home.module.css";
import Section from "../Section/Section";

const Hero = () => {
  return (
    <Section className={styles.home} id="home">
      <div className={styles.homeContent}>
        <h1 className={styles.heading}>Hi, I am Frankie Lam.</h1>
        <h2 className={styles.subHeading}>I build simple things with code.</h2>
        <p className={styles.description}>
          I am a self-taught web developer based in London. I enjoy building
          things that live on the internet through curioristy and perservance.
        </p>
        <div className={styles.cta}>
          <a
            href="#projects"
            className={`${styles.ctaItem} ${styles.projects}`}
          >
            my projects
          </a>
          <a href="#about" className={`${styles.ctaItem} ${styles.things}`}>
            things about me
          </a>
        </div>
        <div className={styles.scrollDown} />
      </div>
    </Section>
  );
};

export default Hero;
