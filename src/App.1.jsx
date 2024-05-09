import { useEffect, useState } from "react";
import Header from "./components/1-header/header";
import Hero from "./components/2-hero/hero";
import Main from "./components/3-main/main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";

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
      <div className=" openning ">
        {/* This element that has background-image */}
        <Header />
        <Hero />
      </div>

      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />
      <a
        href="#header"
        className="icon-arrow-up"
        style={{ opacity: arrowTop ? 1 : 0, transition: "0.3s" }}
      />
    </>
  );
}

export default App;
