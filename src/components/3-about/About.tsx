import React, { FC } from "react";
import "./about.scss";

// import myImage from "../../../public/images/formal-removebg-preview.png";
import myImage from "/images/formal-removebg-preview.png";
interface spanStyle{
  color: String,
  fontWeight:String,
}
  const importantSpan :spanStyle = {
    color: "var(--orange)",
    fontWeight: "bold",
  };
  const Tech_Classes_Icons = [
    "icon-java",
    "icon-javascript",
    "icon-typescript",
    "icon-html5",
    "icon-css3",
    "icon-sass",
    "icon-tailwindcss",
    "icon-bootstrap",
    "icon-react",
    "icon-next-dot-js",
    "icon-postman",
  ];
  const distance_btwn_logos:number = 360 / Tech_Classes_Icons.length;
function About(): FC {

  return (
      <>
      {/* First section is => image with all technologies */}
      <div className="section-body">
        <div className="img-container">
          <div className="bg-orange" />
          <img src={myImage} className="my-img" loading="lazy" />
        </div>
        {/* Second section is about me */}
        <div className="desc">
            Skilled developer based in Alexandria, Egypt, using
            <span style={importantSpan}> JavaScript, TypeScript, and Java</span> to create efficient and appropriate solutions.
            Integrating with <span style={importantSpan}>APIs and third parties</span>, and applying Error handling, with a focus on
            <span style={importantSpan}> Performance, Optimization, Reducing Runtime Complexity and reliable applications</span>. <br />Supported by, studying the fundamental computer science concepts such as
            <span style={importantSpan}> OOP, Data Structures, Algorithms, System Design, SOLID and Design Patterns</span>, along with practical
            <span style={importantSpan}> Database</span> and
            <span style={importantSpan}> API</span>. <br />
        </div>
      </div>
      <div className="slider" >
        {Tech_Classes_Icons.map((iconStyle, id) => (
          <div
            key={id}
            className="icon-container"
            style={{ transform: `rotate(${id * distance_btwn_logos}deg)` }}
          >
            <span className={iconStyle}/>
          </div>
        ))}
        </div>
        </>
  );
}

export default About;
