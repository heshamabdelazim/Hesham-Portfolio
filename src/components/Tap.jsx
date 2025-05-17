import React from "react";

function Tap({ tap, category, handleCategory, arrLength }) {
  const isActiveTap = category.toLowerCase() == tap.toLowerCase();
  return (
    <li
      key={tap.id}
      className={`btn-ui ${isActiveTap ? "active" : ""}`}
      onClick={(e) => handleCategory(tap)}
    >
      <a href="#projects">
        <p>{tap}</p>
        <span>{arrLength}</span>
      </a>
    </li>
  );
}

export default Tap;
