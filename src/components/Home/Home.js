import styles from "./Home.module.css";
import Section from "../Section/Section";
import { Link } from "react-scroll";
import { ScrollIntoViewDuration } from "../../utils/constants/index";

const Hero = () => {
  return (
    <Section className={styles.home} id="home">
      <div className={styles.homeContent}>
        <h1 className={styles.heading}>
          <span className={styles.headingHi}>Hi, I am</span>{" "}
          <span className={styles.headingName}>Frankie Lam.</span>
        </h1>
        <h2 className={styles.subHeading}>I build simple things with code.</h2>
        <p className={styles.description}>
          I am a self-taught web developer based in London. I enjoy building
          things that live on the internet through curioristy and perservance.
        </p>
        <div className={styles.cta}>
          <Link
            to="projects"
            smooth={true}
            hashSpy={true}
            duration={ScrollIntoViewDuration}
            className={`${styles.ctaItem} ${styles.projects}`}
          >
            my projects
          </Link>
          <Link
            to="about"
            smooth={true}
            hashSpy={true}
            duration={ScrollIntoViewDuration}
            className={`${styles.ctaItem} ${styles.things}`}
          >
            things about me
          </Link>
        </div>

        <Link
          to="projects"
          smooth={true}
          hashSpy={true}
          duration={ScrollIntoViewDuration}
          className={styles.scrollDown}
        ></Link>
      </div>
    </Section>
  );
};

export default Hero;
