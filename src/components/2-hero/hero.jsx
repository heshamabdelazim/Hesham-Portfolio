import React from "react";
import "./hero.css";

import me from "../../images/H image.jpg";
// lottie-react for animation
import Lottie from "lottie-react";
import programmingAnimation from "./../../animation/coding.json";

const Hero = () => {
  // This OOP to put icons of social

  const allSocial = [
    { icon: "icon-github", href: "https://github.com/heshamabdelazim" },
    { icon: "icon-envelope", href: "mailto:heshamabdelazim3@gmail.com" },
    {
      icon: "icon-facebook2",
      href: "https://www.facebook.com/hesham.abdelazim.94",
    },
    {
      icon: "icon-github",
      href: "https://www.linkedin.com/in/hesham-abdelazim-678759283/",
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
            Front-End Developer using ReactJs. <br /> Graduated from faculty of
            science(physics) - Damanhour University.
          </p>
          <div className="social d-flex">
            {allSocial.map((obj, ind) => (
              <a
                key={ind}
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
