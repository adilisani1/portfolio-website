import "./app.scss";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import { ThemeProvider } from "./context/ThemeProvider";

const App = () => {
  return (
    <div>
      <ThemeProvider>
        <Cursor />
        <section id="Home">
          <Navbar />
          <Hero />
        </section>
        <section id="About">
          <About />
        </section>
        {/* <section id="Portfolio">
          <Portfolio />
        </section> */}
        <section id="Services">Services</section>
        {/* <section id="Portfolio ">Portfolio</section> */}
        {/* <Portfolio /> */}
        {/* <section id="Contact">Contact</section> */}
      </ThemeProvider>
    </div>
  )
};

export default App;
