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
      <h2 className="title">About me</h2>
      {/* First section is => image with all technologies */}
      <div className="section-body">
        <div className="img-container">
          <div className="bg-orange" />
          <img src={myImage} className="my-img" loading="lazy" />
        </div>
        {/* Second section is about me */}
        <div className="desc">
          Professional Front-End & Tester using{" "}
          <span style={importantSpan}>
             Java, JavaScript & TypeScript with NEXT.JS
          </span>{" "}
          based in Egypt. <br /> My passion of programming world started 3 years
          ago. <br />
          I have built numerous front-end projects, integrating them with
          back-ends and optimizing their performance. <br />
          With a strong foundation in
          <span style={importantSpan}>
            {" "}
            Data Structures, Algorithms, OOP, System Design and Design Pattern.
          </span>
        </div>
      </div>
      <div className="slider" >
        {Tech_Classes_Icons.map((iconStyle, id) => (
          <div
            key={id}
            className="icon-container"
            style={{ transform: `rotate(${id * distance_btwn_logos}deg)` }}
          >
            <span
              className={iconStyle}
              // style={{ transform: `rotate(${-id * distance_btwn_logos}deg)` }}
              />
          </div>
        ))}
        </div>
        </div>
    </section>
  );
}

export default About;
