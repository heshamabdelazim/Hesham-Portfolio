import { useEffect, useRef, useState } from "react";
import Nav from "./Nav";
import "./header.css";
const Header = ({ IDs }) => {
  let [show, setShow] = useState(false);
  let navBar = useRef();
  // let [mood, setMood] = useState("");
  const lightMood = { mood: "light", icon: "icon-sun" };
  const darkMood = { mood: "dark", icon: "icon-moon1" };

  // =========================
  useEffect(() => {
    // if no data in localStorage ? put data
    if (!window.localStorage.getItem("mood")) {
      window.localStorage.setItem("mood", JSON.stringify(lightMood));
      putting();
    } else {
      putting();
    }
  }, []);

  // =========================
  function putting() {
    /*
  A function to only put className to the button 
  also put className to the body, according to localStorage
  */
    const moodObject = JSON.parse(localStorage.getItem("mood"));
    document.body.className = moodObject.mood;
    // for button
    const switcher = document.querySelector("header .mood");
    switcher.className = moodObject.icon + " mood";
  }
  // =============================
  function switching(e) {
    // if the mood is light in LocalStorage, Then put dark else light
    // Using function putting() again
    // ================
    const moodObject = JSON.parse(localStorage.getItem("mood"));
    // console.log(moodObject);
    if (moodObject.mood === "light") {
      localStorage.setItem("mood", JSON.stringify(darkMood));
      putting();
    } else {
      localStorage.setItem("mood", JSON.stringify(lightMood));
      putting();
    }
  }

  // JSX
  return (
    <header id="header" className=" d-flex ">
      <div className="container d-flex">
        <span className="icon-menu menu" onClick={() => setShow(true)} />

        <nav>
          <ul className="d-flex">
            <Nav IDs={IDs} />
          </ul>
        </nav>
        <span
          className={
            localStorage.getItem("mood") === "light"
              ? "icon-sun mood"
              : "icon-moon1" + " mood"
          }
          onClick={(e) => {
            switching(e);
          }}
        />
        {show && (
          <div className=" fixed">
            <ul className="model ">
              <Nav IDs={IDs} setShow={setShow} />
              <span onClick={() => setShow(false)}>X</span>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
