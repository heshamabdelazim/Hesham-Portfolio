import React, { useState } from "react";
import PutLinks from "./PutLinks";
import Loading from "../99-Loading/Loading";

function Project({ project }) {
  let [isMouseOn, setIsMouseOn] = useState(false);

  function showAssets() {
    if (isMouseOn && project.video)
      return (
        <video src={project.video} controls>
          <source src={project.video} type="video/mp4" />
        </video>
      );
    if ((isMouseOn && !project.video) || !isMouseOn)
      return <img src={project.photo} alt={`${project.head}`} loading="lazy" />;
    return;
  }

  return (
    <div
      className="project round"
      onMouseOver={() => setIsMouseOn(true)}
      onMouseOut={() => setIsMouseOn(false)}
    >
      <div className="img-holder">
        <div className="alt">
          <Loading />
        </div>
        {showAssets()}
      </div>
      <article>
        <h2>{project.head}</h2>
        <p>{project.para}</p>
      </article>
      <div className="footer ">
        <div className="links">
          <PutLinks repo={project.repo} demo={project.demoLink} />
        </div>
      </div>
      {/* THe following code is showing icon, So the project is still working the clock will be else the object icon */}
      <i className={project.repo ? project.icon : "icon-stopwatch"} />
    </div>
  );
}

export default Project;
