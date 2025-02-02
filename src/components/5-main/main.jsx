import React, { useState } from "react";
//css
import "./main.css";
// components
import Project from "./Project";
// images

import { allProjects } from "./data";

// import Instagram from "../../images/instagram-delete-later.webp"

const Main = () => {
  let [category, setCategory] = useState("All");

  // ====================================================
  const allTaps = () => {
    // This function to creates taps that belongs to the projects (left-section)
    const arrayOfTaps = allProjects.map((project) => project.category);
    return Array.from(new Set(arrayOfTaps));
  };
  // ====================================================
  function pressed(e) {
    //  This function to (put class active) and (re-render) when the user press on taps
    let allTaps = document.querySelectorAll("#projects .left-section div");
    allTaps.forEach((div) => {
      div.className = "btn-ui";
    });
    e.target.className = "btn-ui active";
    setCategory(e.target.innerHTML);
  }
  // ====================================================
  const dataRevealed = () => {
    // This function to filter the projects the user choose from taps (right-section)
    if (category.toLowerCase() === "all") {
      return allProjects;
    } else {
      return allProjects.filter((project) => {
        return category.toLowerCase() === project.category.toLowerCase();
      });
    }
  };

  return (
    <section id="projects">
      <div className="container">
        <h2 className="title">Projects</h2>
        <div className="section-body d-flex">
          <div className="left-section d-flex">
            <div onClick={(e) => pressed(e)} className="btn-ui active">
              All
            </div>
            {allTaps().map((tap, index) => (
              <div
                key={index + 1}
                className="btn-ui"
                onClick={(e) => pressed(e)}
              >
                {tap}
              </div>
            ))}
          </div>
          <div className="right-section">
            {dataRevealed().map((project, index) => (
              <Project key={index + 1} project={project} />
            ))}
          </div>
        </div>

        {/* <RightSection dataRevealed={dataRevealed()} /> */}
      </div>
    </section>
  );
};

export default Main;
