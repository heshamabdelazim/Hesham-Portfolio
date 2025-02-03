import { useEffect, useState } from "react";
import Header from "/src/components/1-header/Header";
import Hero from "/src/components/2-hero/hero";
import About from "/src/components/3-about/About";
import Academic from "/src/components/4-Academic/Academic";
import Main from "/src/components/5-main/main";
import Contact from "/src/components/6-contact/Contact";
import Footer from "/src/components/7-footer/Footer";
import { lightMood, putting } from "./utilis/light-dark";

export function App() {
  let [arrowTop, setArrowTop] = useState(false);
  let [sectionsIds, setSectionsIds] = useState([]);
  let [chosenMood, setChosenMood] = useState((old) => {
    const chosen = JSON.parse(localStorage.getItem("mood")) || lightMood;
    !localStorage.getItem("mood") &&
      localStorage.setItem("mood", JSON.stringify(chosen));
    putting(chosen);
    return chosen;
  });
  useEffect(() => {
    // Side effect to show arrow
    window.addEventListener("scroll", () => {
      window.scrollY > 350 ? setArrowTop(true) : setArrowTop(false);
    });
    //nav IDs
    const sectionDOMs = Array.from(
      document.querySelectorAll("#root > section")
    );
    const IDsArray = sectionDOMs.map((dom) => dom.id);
    setSectionsIds(IDsArray);
  }, []);

  return (
    <>
      <section id="openning">
        {/* This element that has background-image */}
        <Header
          IDs={sectionsIds}
          chosenMood={chosenMood}
          setChosenMood={setChosenMood}
        />
        <Hero />
      </section>
      <div className="divider" />
      <About />
      <div className="divider" />
      <Academic />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />
      <a
        href="#header"
        className="icon-arrow-up2"
        style={{ opacity: arrowTop ? 1 : 0, transition: "0.3s" }}
      />
    </>
  );
}

export default App;
