import styles from "./Main.module.css";
import Container from "../UI/Container";
import Home from "../Home/Home";
import About from "../About/About";

const Main = () => {
  return (
    <main className={styles.main}>
      <Container>
        <Home />
        <About />
      </Container>
    </main>
  );
};

export default Main;
