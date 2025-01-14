import { useEffect, useState } from "react";
import Header from "./components/1-header/header";
import Hero from "./components/2-hero/hero";
import About from "./components/3-about/About";
import Academic from "./components/4-Academic/Academic";
import Main from "./components/5-main/main";
import Contact from "./components/6-contact/Contact";
import Footer from "./components/7-footer/Footer";

export function App() {
  let [arrowTop, setArrowTop] = useState(false);
  useEffect(() => {
    // This to show arrow
    window.addEventListener("scroll", () => {
      window.scrollY > 350 ? setArrowTop(true) : setArrowTop(false);
    });
    console.log("rendered");
  });
  return (
    <>
      <section className=" openning ">
        {/* This element that has background-image */}
        <Header />
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
