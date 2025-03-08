import { useEffect, useRef, useState } from "react";
import Nav from "./Nav";
import "./header.css";
import { lightMood, putting, switching } from "/src/utilis/light-dark";
import DownloadCV from "./DownloadCV";

const Header = ({ IDs, chosenMood, setChosenMood }) => {
  let [show, setShow] = useState(false);
  let switchBtn = useRef();

  // =========================

  return (
    <header id="header" className=" d-flex ">
      <span className="icon-menu icon-btn menu" onClick={() => setShow(true)} />
      <Nav IDs={IDs} />
      <div className="d-flex">
        <DownloadCV />
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
