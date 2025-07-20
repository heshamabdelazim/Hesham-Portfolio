import { useCallback, useContext, useEffect, useRef, useState } from "react";
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
    //side Effect4
    animateSection(contextData.userScreen_h, mainDom.current);
  }, []);
  // ====================================================
  let [category, setCategory] = useState("All");

  const handleCategory = useCallback((tab) => setCategory(tab), [category]);

  const projectsFormated = () => {
    //this return {tapName:String, projectsArr:[]}[] => every tab will display projects
    let tabs_hasContent = [{ tapName: "all", projectsArr: allProjects }];
    for (let i = 1; i < allProjects.length; i++) {
      if (!isDublcatedCategory(allProjects[i].category, allProjects, i)) {
        tabs_hasContent.push({
          tapName: allProjects[i].category,
          projectsArr: dataRevealed(allProjects[i].category, allProjects),
        });
      }
    }
    return tabs_hasContent;
  };

  // ====================================================
  function dataRevealed(cate, arr) {
    // This function to filter the projects the user choose from taps (right-section)
    return arr.filter(
      (project) => project.category.toLowerCase() === cate.toLowerCase()
    );
  }
  //====================================================
  function isDublcatedCategory(target, arr, stopSearchIndex) {
    for (let i = 1; i < stopSearchIndex; i++) {
      if (arr[i].category === target) return true;
    }
    return false;
  }

  const displayProjects = () => {
    return projectsFormated().find(
      (ele) => ele.tapName.toLocaleLowerCase() == category.toLowerCase()
    );
  };

  return (
    <section id="projects" ref={mainDom}>
      <div className="container">
        <h2 className="title">Projects</h2>
        <div className="section-body d-flex">
          <ul className="taps">
            {projectsFormated().map((tap, index) => (
              <Tap
                key={index}
                tap={tap.tapName}
                category={category}
                handleCategory={handleCategory}
                arrLength={tap.projectsArr.length}
              />
            ))}
          </ul>
          <div className="right-section">
            {displayProjects().projectsArr.map((project) => (
              <Project key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
