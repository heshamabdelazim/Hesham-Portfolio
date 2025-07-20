import React from 'react'

function AcademicTab({ tab, category, setCategory }) {
  const isActiveTab = category.toLowerCase() == tab.toLowerCase();
  return (
    <li
      className={`btn-ui ${isActiveTab ? "active" : ""}`}
      onClick={(e) => setCategory(tab)}
    >
      {tab}
    </li>
  );
}


export default AcademicTab
