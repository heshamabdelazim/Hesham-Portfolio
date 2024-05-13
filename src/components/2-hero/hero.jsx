import React from "react";
import "./hero.css";

import hLetter from "../../images/H_letter.jpg";
// lottie-react for animation
import Lottie from "lottie-react";
import programmingAnimation from "./../../animation/coding.json";

const Hero = () => {
  // This OOP to put icons of social
  class SocialItem {
    static number = 0;
    constructor(i, h) {
      this.icon = i;
      this.href = h;
      SocialItem.number++;
    }
  }
  const allSocial = [
    // declairing objects from the class
    new SocialItem("icon-github", "https://github.com/heshamabdelazim"),
    new SocialItem("icon-envelope", "mailto:heshamabdelazim3@gmail.com"),
    new SocialItem(
      "icon-facebook2",
      "https://www.facebook.com/hesham.abdelazim.94"
    ),
    new SocialItem(
      "icon-linkedin",
      "https://www.linkedin.com/in/hesham-abdelazim-678759283/"
    ),
  ];

  return (
    <div className="hero ">
      <div className="container d-flex ">
        <section className="details d-flex ">
          <div className="image">
            <img src={hLetter} alt="H-image" />
            <span className="icon-verified verify"></span>
          </div>
          <h1>Hesham Abdelazim Kamel Ahmed</h1>
          <p>
            Front-End Developer using ReactJs. <br /> Graduated from faculty of
            science(physics) - Damanhour University.
          </p>
          <div className="social d-flex">
            {allSocial.map((obj, ind) => (
              <a
                key={SocialItem.number - ind}
                href={obj.href}
                className={obj.icon}
                target="_blanck"
              />
            ))}
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
