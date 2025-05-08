import React from "react";

function MyIcons({ allSocial }) {
  return (
    <>
      {allSocial?.map((obj, ind) => (
        <a
          className={obj.icon}
          key={ind}
          href={obj.href}
          title={obj.title}
          target="_blank"
        />
      ))}
    </>
  );
}

export default MyIcons;
