import React from "react";
import PutLinks from "./PutLinks";
import Loading from "../99-Loading/Loading";

function Project({ project }) {
  // const isRepoOnly = !project.links.demoLink && project.links.repo;

  return (
    <div className="project round">
      <div className="img-holder">
        <div className="alt">
          <Loading />
        </div>
        <img src={project.photo} alt={`${project.head}`} loading="lazy" />
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
