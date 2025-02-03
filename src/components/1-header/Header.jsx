import { useEffect, useRef, useState } from "react";
import Nav from "./Nav";
import "./header.css";
import { lightMood, putting, switching } from "/src/utilis/light-dark";

const Header = ({ IDs, chosenMood, setChosenMood }) => {
  let [show, setShow] = useState(false);
  let switchBtn = useRef();

  // =========================
  // JSX
  console.log(chosenMood.icon);

  return (
    <header id="header" className=" d-flex ">
      <span className="icon-menu icon-btn menu" onClick={() => setShow(true)} />
      <Nav IDs={IDs} />
      <div className="d-flex">
        <a
          href="/public/images/Hesham_Abdelazim_cv.pdf"
          download="Hesham_Abdelazim_cv"
          className="download"
        >
          Download CV
        </a>
        <span
          ref={switchBtn}
          id="switcher"
          className={chosenMood.icon + " icon-btn"}
          onClick={(e) => {
            switching(chosenMood, setChosenMood);
          }}
        />
      </div>
      {show && (
        <>
          <Nav IDs={IDs} setShow={setShow} isSmallScreens={true} />
        </>
      )}
    </header>
  );
};

export default Header;
