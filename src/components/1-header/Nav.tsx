import React from "react";

interface navProps{
  IDs: String[],
  setShow?
}
const Nav = ({ IDs, setShow }:navProps)  => {
  console.log(IDs);
  return (
    <>
      {IDs.map((idName, id) => (
        <li key={id}>
          <a href={"#" + idName} onClick={()=>setShow(false)}>{idName.toUpperCase()}</a>
        </li>
      ))}
    </>
  );
};

export default Nav;
