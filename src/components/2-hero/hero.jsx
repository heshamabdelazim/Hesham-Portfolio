import React, { useEffect, useRef, useState } from "react";
import "./hero.css";

import me from "/images/formal-removebg-preview.png";
// lottie-react for animation
import Lottie from "lottie-react";
import programmingAnimation from "./../../animation/coding.json";
import MyIcons from "./MyIcons";
import { fetchingData } from "/src/utilis/fetch.ts";
import { allSocial } from "./data";
import { animateSection } from "../../utilis/animate-section";

const Hero = ({ screenPosition }) => {
  const { position } = useRef(0);
  // useEffect(() => {
  // fetchingData("/public/project-details/social.json", setAllSocial);
  // }, []);

  return (
    <section id="openning">
      <div className="hero">
        <div className="container d-flex ">
          <div className="details d-flex ">
            <div className="image">
              <img src={me} alt="H-image" loading="lazy" />
              <span className="icon-verified verify"></span>
            </div>
            <h1>Hesham Abdelazim Kamel</h1>
            <p className="parag">
              Front-End Developer / Software Testing <br /> Graduated from
              faculty of science(physics) - Damanhour University.
            </p>
            <div className="social d-flex">
              <MyIcons allSocial={allSocial} />
            </div>
          </div>
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
    </section>
  );
};

export default Hero;
