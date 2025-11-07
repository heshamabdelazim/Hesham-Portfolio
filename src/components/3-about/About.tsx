import React, { FC, useContext, useEffect, useRef } from "react";
import "./about.scss";

// import myImage from "../../../public/images/formal-removebg-preview.png";
import myImage from "/images/formal-removebg-preview.png";
import { MyContext } from "../../context/context";
import { animateSection } from "../../utilis/animate-section";
interface spanStyle{
  color: String,
  fontWeight:String,
}

function About(): FC {
    let contextData = useContext(MyContext);
    const aboutDom = useRef();
    useEffect(() => {
      //side Effect
      animateSection(contextData.userScreen_h, aboutDom.current);
    }, []);

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
  return (
    <section id="about" ref={aboutDom}>
      <div className="container">
      {/* <h2 className="title">About me</h2> */}
      <h2 className="title">About me</h2>
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
            <span style={importantSpan}> OOP, Data Structures, Algorithms, and Design Patterns</span>, along with practical
            <span style={importantSpan}> Database</span> and
            <span style={importantSpan}> API</span> knowledge. <br />
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
        </div>
    </section>
  );
}

export default About;
