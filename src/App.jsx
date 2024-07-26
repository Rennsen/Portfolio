import { useEffect, useState } from "react";
import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
// @ts-ignore
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
// @ts-ignore
import Footer from "./components/5-footer/Footer";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setshowScrollBTN(true);
      } else {
        setshowScrollBTN(false);
      }
    });
  }, []);

  const [showScrollBTN, setshowScrollBTN] = useState(false);
  return (
    <div id="up" className="container">
      <Header />
      <div id="hero"></div>
      <Hero />
      <div id="proj" className="divider"></div>
      <Main />
      <div id="contact" className="divider"></div>
      <Contact />
      <div className="divider"></div>
      <Footer />

      <a
        style={{ opacity: showScrollBTN ? 1 : 0, transition: "1.5s" }}
        href="#up"
      >
        <button className="icon-keyboard_arrow_up scroll2top"></button>
      </a>
    </div>
  );
}

export default App;
