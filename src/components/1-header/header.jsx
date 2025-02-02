import { useEffect, useRef, useState } from "react";
import Nav from "./Nav";
import "./header.css";
import { lightMood, putting, switching } from "/src/utilis/light-dark";

const Header = ({ IDs, chosenMood, setChosenMood }) => {
  let [show, setShow] = useState(false);
  // let navBar = useRef();

  // =========================

  // JSX
  return (
    <header id="header" className=" d-flex ">
      <span className="icon-menu menu" onClick={() => setShow(true)} />
      <Nav IDs={IDs} />
      <span
        className={
          (localStorage.getItem("mood") === "light"
            ? "icon-sun"
            : "icon-moon1") + " mood"
        }
        onClick={(e) => {
          switching(chosenMood, setChosenMood);
        }}
      />
      {show && (
        <>
          <Nav IDs={IDs} setShow={setShow} isSmallScreens={true} />
        </>
      )}
    </header>
  );
};

export default Header;
