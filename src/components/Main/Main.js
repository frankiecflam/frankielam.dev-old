import Container from "../UI/Container";
import Home from "../Home/Home";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

const Main = () => {
  return (
    <main>
      <Container>
        <Home />
        <Projects />
        <About />
        <Contact />
      </Container>
    </main>
  );
};

export default Main;
