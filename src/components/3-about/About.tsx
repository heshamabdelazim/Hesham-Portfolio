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
            An enthusiastic and skilled developer based in Alexandria, Egypt, with a proven ability to leverage
            <span style={importantSpan}> JavaScript, TypeScript, and Java</span> to create efficient and scalable solutions. <br />
            Experienced in developing and integrating with APIs with Error handling, with a focus on
            <span style={importantSpan}> performance optimization and reducing runtime complexity</span>. <br />Also, Proficient in software testing methodologies, including manual testing and automation using
            <span style={importantSpan}> Postman and Selenium</span>, ensuring high-quality and reliable applications. <br />Also, Strong fundamental computer science concepts such as
            <span style={importantSpan}> OOP, Data Structures, Algorithms, and Design Patterns</span>, along with practical database and API knowledge. <br />         {/* Strong programming languages like{" "}
          <span style={importantSpan}>
             Java, JavaScript & TypeScript leveraging Next.js</span>{" "}
          for front-end development, based in Alexandria, Egypt. <br />Passionate with 2 years of experience in the programming field.<br />
          I have built numerous front-end projects, integrating them with
          back-ends and optimizing their performance using the <span style={importantSpan}>lighthouse of the browser</span>, and reducing its Runtime complexity. <br />
          Also, Good understanding of
          <span style={importantSpan}>
            {" "}
            OOP, Data-Structures, Algorithms, Design-Patterns, Data-Base, and API.
            </span> <br />
            In the flow of Software testing, Good understanding of <span style={importantSpan}>Manual and Automation Testing using Postman and Selenium</span> */}
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
