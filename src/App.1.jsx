import { useEffect, useRef, useState } from "react";
import Header from "/src/components/1-header/Header";
import Hero from "/src/components/2-hero/hero";
import About from "/src/components/3-about/About";
import Academic from "/src/components/4-Academic/Academic";
import Main from "/src/components/5-main/main";
import Contact from "/src/components/6-contact/Contact";
import Footer from "/src/components/7-footer/Footer";
import { lightMood, putting } from "./utilis/light-dark";
import Loading from "./components/Loading";

export function App() {
  const userScreen_h = window.innerHeight; // height of Whatever screens

  let [showArrow, setShowArrow] = useState(false);
  let [sectionsIds, setSectionsIds] = useState([]);
  let [chosenMood, setChosenMood] = useState((old) => {
    const chosen = JSON.parse(localStorage.getItem("mood")) || lightMood;
    !localStorage.getItem("mood") &&
      localStorage.setItem("mood", JSON.stringify(chosen));
    putting(chosen);
    return chosen;
  });
  let { allSections } = useRef();

  useEffect(() => {
    // Side effect scroll
    window.addEventListener("scroll", () => {
      arrow_to_up();
    });
    //nav IDs
    allSections = Array.from(document.querySelectorAll("#root > section"));
    const IDsArray = allSections.map((section) => section.id);
    setSectionsIds(IDsArray);
  }, []);

  // ===============
  function arrow_to_up() {
    window.scrollY > 350 ? setShowArrow(true) : setShowArrow(false);
  }
  // ===============

  return (
    <>
      {/* This element that has background-image */}
      <Header
        IDs={sectionsIds}
        chosenMood={chosenMood}
        setChosenMood={setChosenMood}
      />
      <Hero />
      <div className="divider" />
      <About />
      <div className="divider" />
      <Academic />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      {/* <div className="divider" />
      <Loading /> */}
      <div className="divider" />
      <Footer />
      <a
        href="#header"
        className="icon-arrow-up2"
        style={{ opacity: showArrow ? 1 : 0, transition: "0.3s" }}
        onClick={() => {
          window.scroll(0, 0);
        }}
      />
      <a
        className="bugs"
        href="https://github.com/heshamabdelazim/Hesham-Portfolio/issues"
        target="_blank"
      >
        checkout the Profile bugs
      </a>
    </>
  );
}

export default App;
