import styles from "./AboutStoryContent.module.css";
import { motion } from "framer-motion";

const AboutStoryContent = () => {
  return (
    <motion.div
      className={styles.storyContent}
      initial={{ y: "10rem" }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <p className={styles.paragraph}>
        I’m Frankie, a self-taught web developer based in London. My journey as
        a self-taught programmer started in May 2021 when I decided to take back
        control of my life from being in a rut and directionless. It turns out
        choosing to embark on this journey is one of the best decisions I have
        made in my life. I am glad that I had the courage to make that decision.
      </p>

      <p className={styles.paragraph}>
        Before I started this journey, I never thought of building websites and
        applications. I never felt interested in coding. Code seemed strange to
        me as if they were just a bunch of random characters that work together
        as a whole on computer. But, I was wrong. From this journey, I have
        realised programming is never about the code itself. It is all about
        problem-solving — how things work the way they do.
      </p>

      <p className={styles.paragraph}>
        Since I was a kid, I have always been curious about a lot of things that
        happen around me. I have always got something new to learn to feed my
        curiosity. I have never felt tired of learning because there is always a
        tremendous amount of joy within the process.
      </p>

      <p className={styles.paragraph}>
        But, as I grew older, I kind of felt in a trap of thinking that career
        should be chosen based on money, not interest. Because of this toxic
        thinking, I settled for jobs that pay well, but never present joy. I
        felt miserable living my life in this way, and my mental health took a
        deep dive because of it.
      </p>

      <p className={styles.paragraph}>
        In May 2021, I quit my sales and marketing job, and started my
        programming journey because I didn’t believe my life should have been
        lived in such a miserable way. Since then, I have always been feeling
        happy. Every day, I learn, I code and I build. I learn my areas of
        weakness in programming. I code with all the knowledge I have learnt. I
        build websites and applications with experience from everything I have
        coded.
      </p>

      <p className={styles.paragraph}>
        Because of programming, I feel happy living my life everyday.
      </p>
    </motion.div>
  );
};

export default AboutStoryContent;
