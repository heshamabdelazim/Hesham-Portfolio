import React, { useRef } from "react";
import "./about.scss";

import myImage from "../../images/formal-removebg-preview.png";

function About() {
  const importantSpan = {
    color: "orange",
    fontWeight: "bold",
  };
  const technologies = [];

  // console.log(myImage.current);
  return (
    <section className="container about">
      <h2 className="title">About me</h2>
      {/* First section is => image with all technologies */}
      <div className="img-tech">
        <div className="img-container">
          <div className="bg-orange" />
          <img src={myImage} className="my-img" />
        </div>
        {/* <div className="slider-icons">
          This is icons
          <span className="icon-java"></span>
        </div> */}
      </div>
      {/* Second section is about me */}
      <div className="desc">
        Professional Front-End & Testing{" "}
        <span style={importantSpan}>using Java & JavaScript with NEXT.JS</span>{" "}
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
    </section>
  );
}

export default About;
