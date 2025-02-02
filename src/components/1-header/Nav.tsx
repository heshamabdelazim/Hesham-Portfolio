import React from "react";

interface navProps{
  IDs: String[],
  setShow?
  isSmallScreens?:boolean
}
const Nav = ({ IDs, setShow,isSmallScreens=false }:navProps)  => {
  
  return (
    <nav className={isSmallScreens?"popup-nav":"hide d-flex"}>
      <ul className="d-flex">
      {IDs.map((idName, id) => (
        <li key={id}>
          <a href={"#" + idName} onClick={()=>setShow(false)}>{idName.toUpperCase()}</a>
        </li>
      ))}
      </ul>
      {isSmallScreens&&
        <span className="closeX" onClick={() => setShow(false)}>X</span>
      }
    </nav>
  );
};

export default Nav;
