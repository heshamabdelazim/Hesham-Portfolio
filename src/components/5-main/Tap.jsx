import React from "react";

function Tap({ tap, category, setCategory }) {
  const isActiveTap = category.toLowerCase() == tap.toLowerCase();
  return (
    <div
      className={`btn-ui ${isActiveTap ? "active" : ""}`}
      onClick={(e) => setCategory(tap)}
    >
      {tap}
    </div>
  );
}

export default Tap;
