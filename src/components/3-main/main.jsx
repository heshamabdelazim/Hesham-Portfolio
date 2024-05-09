import React, { useState } from "react";
//css
import "./main.css";
// components
import rightSection from "./right-section";
import RightSection from "./right-section";

// images
import temp1 from "../../images/first project.png";
import temp2 from "../../images/second project.png";
import temp3 from "../../images/third template.png";
import photo from "../../images/H.jpeg";

const Main = () => {
  let [category, setCategory] = useState("All");

  const allProjects = [
    {
      photo: temp1,
      head: "Template one",
      para: "Contains 6 sections",
      link: "NotYet",
      website: "NotYet",
      category: "Templates",
    },
    {
      photo: temp2,
      head: "Template Two",
      para: "Contains 6 sections",
      link: "NotYet",
      website: "NotYet",
      category: "Templates",
    },
    {
      photo: temp3,
      head: "Template Three",
      para: "Contains 6 sections",
      link: "NotYet",
      website: "NotYet",
      category: "Templates",
    },
    {
      photo: temp1,
      head: "react-app",
      para: "Contains 6 sections",
      link: "NotYet",
      website: "NotYet",
      category: "react-app",
    },
    {
      photo: temp1,
      head: "Templates",
      para: "Contains 6 sections",
      link: "NotYet",
      website: "NotYet",
      category: "Templates",
    },
    {
      photo: temp1,
      head: "E-commerce",
      para: "Contains 6 sections",
      link: "NotYet",
      website: "NotYet",
      category: "E-commerce",
    },
    {
      photo: temp1,
      head: "PHP backend",
      para: "Contains 6 sections",
      link: "NotYet",
      website: "NotYet",
      category: "PHP backend",
    },
  ];
  // ====================================================
  const allTaps = () => {
    // This function to creates taps that belongs to the projects (left-section)
    const arrayOfTaps = [];
    allProjects.map((project) => {
      arrayOfTaps.push(project.category);
    });
    return Array.from(new Set(arrayOfTaps));
  };
  // ====================================================
  function pressed(e) {
    //  This function to put class active and re-render when the user press on taps
    let allTaps = document.querySelectorAll(".main .left-section div");
    allTaps.forEach((div) => {
      div.className = "";
    });
    e.target.className = "active";
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
    <main className="main " id="projects">
      <div className="container d-flex">
        <section className="left-section d-flex">
          <div onClick={(e) => pressed(e)} className="active">
            All
          </div>
          {allTaps().map((tap, index) => (
            <div key={index + 1} onClick={(e) => pressed(e)}>
              {tap}
            </div>
          ))}
          {/* <div onClick={(e) => pressed(e)}>three</div> */}
        </section>
        <RightSection dataRevealed={dataRevealed()} />
      </div>
    </main>
  );
};

export default Main;
