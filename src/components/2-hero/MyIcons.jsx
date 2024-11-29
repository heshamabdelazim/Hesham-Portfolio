import React from "react";

function MyIcons({ allSocial }) {
  return (
    <>
      {allSocial.map((obj, ind) => (
        <a className={obj.icon} key={ind} />
      ))}
    </>
  );
}

export default MyIcons;
