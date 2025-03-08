import React from "react";

function Tap({ tap, category, setCategory }) {
  const isActiveTap = category.toLowerCase() == tap.toLowerCase();
  return (
    <li
      key={tap.id}
      className={`btn-ui ${isActiveTap ? "active" : ""}`}
      onClick={(e) => setCategory(tap)}
    >
      {tap}
    </li>
  );
}

export default Tap;
