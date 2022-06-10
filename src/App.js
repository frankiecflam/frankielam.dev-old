import Header from "./components/Header/Header";
import Container from "./components/UI/Container";
import Home from "./components/Home/Home";
import About from "./components/About/About";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Container>
          <Home />
          <About />
        </Container>
      </main>
    </div>
  );
}

export default App;
