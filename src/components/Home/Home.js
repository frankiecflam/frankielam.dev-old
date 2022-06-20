import styles from "./Home.module.css";
import Section from "../Section/Section";
import { Link } from "react-scroll";
import { ScrollIntoViewDuration } from "../../utils/constants/index";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <Section className={styles.home} id="home">
      <div className={styles.homeContent}>
        <motion.h1
          className={styles.heading}
          initial={{ y: "5rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.headingHi}>Hi, I am</span>{" "}
          <span className={styles.headingName}>Frankie Lam.</span>
        </motion.h1>
        <motion.h2
          className={styles.subHeading}
          initial={{ y: "-1.5rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          I build simple things with code.
        </motion.h2>
        <motion.p
          className={styles.description}
          initial={{ y: "-1.5rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          I am a self-taught web developer based in London. I enjoy building
          things that live on the internet through curiosity and perseverance.
        </motion.p>
        <motion.div
          className={styles.cta}
          initial={{ y: "-4rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 2,
            type: "spring",
            stiffness: 100,
          }}
        >
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.4 }}
        >
          <Link
            to="projects"
            smooth={true}
            hashSpy={true}
            duration={ScrollIntoViewDuration}
            className={styles.scrollDown}
          />
        </motion.div>
      </div>
    </Section>
  );
};

export default Hero;
