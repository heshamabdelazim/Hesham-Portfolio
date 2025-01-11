import React, { useEffect } from "react";
import "./hero.css";

import me from "../../images/H image.jpg";
// lottie-react for animation
import Lottie from "lottie-react";
import programmingAnimation from "./../../animation/coding.json";
import MyIcons from "./MyIcons";

const Hero = () => {
  const allSocial = [
    {
      icon: "icon-github",
      href: "https://github.com/heshamabdelazim",
      title: "GitHub",
    },
    {
      icon: "icon-envelope",
      href: "mailto:heshamabdelazim3@gmail.com",
      title: "Gmail",
    },
    {
      icon: "icon-facebook2",
      href: "https://www.facebook.com/hesham.abdelazim.94",
      title: "FaceBook",
    },
    {
      icon: "icon-linkedin",
      href: "https://www.linkedin.com/in/hesham-abdelazim-kamel/",
      title: "LinkedIn",
    },
  ];

  return (
    <div className="hero ">
      <div className="container d-flex ">
        <section className="details d-flex ">
          <div className="image">
            <img src={me} alt="H-image" />
            <span className="icon-verified verify"></span>
          </div>
          <h1>Hesham Abdelazim Kamel</h1>
          <p className="parag">
            Front-End Developer / Tester Developer <br /> Graduated from faculty
            of science(physics) - Damanhour University.
          </p>
          <div className="social d-flex">
            <MyIcons allSocial={allSocial} />
          </div>
        </section>
        {/* <section className="animation border">animation</section> */}
        <Lottie
          animationData={programmingAnimation}
          loop={true}
          className="right-section hide "
          style={{
            height: 300,
            backgroundColor: "rgb(173 173 173 / 28%)",
            borderRadius: "20%",
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
