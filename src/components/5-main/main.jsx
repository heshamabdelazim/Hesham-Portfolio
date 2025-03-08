import React, { useContext, useEffect, useRef, useState } from "react";
//css
import "./main.css";
// components
import Project from "./Project";
// images

import { allProjects } from "./data";
import { animateSection } from "../../utilis/animate-section";
import { MyContext } from "../../context/context";
import Tap from "../Tap";

const Main = () => {
  let contextData = useContext(MyContext);
  const mainDom = useRef();
  useEffect(() => {
    //side Effect
    animateSection(contextData.userScreen_h, mainDom.current);
  }, []);
  // ====================================================
  let [category, setCategory] = useState("All");

  const allTaps = () => {
    // This function to creates taps that belongs to the projects (left-section)
    const arrayOfTaps = allProjects.map((project) => project.category);
    arrayOfTaps.unshift("all");
    return Array.from(new Set(arrayOfTaps));
  };
  // ====================================================
  const dataRevealed = () => {
    // This function to filter the projects the user choose from taps (right-section)
    if (category.toLowerCase() === "all") {
      return allProjects;
    }
    return allProjects.filter(
      (project) => category.toLowerCase() === project.category.toLowerCase()
    );
  };

  return (
    <section id="projects" ref={mainDom}>
      <div className="container">
        <h2 className="title">Projects</h2>
        <div className="section-body d-flex">
          <ul className="taps">
            {allTaps().map((tap, index) => (
              <Tap
                key={index}
                tap={tap}
                category={category}
                setCategory={setCategory}
              />
            ))}
          </ul>
          <div className="right-section">
            {dataRevealed().map((project, index) => (
              <Project key={index + 1} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
