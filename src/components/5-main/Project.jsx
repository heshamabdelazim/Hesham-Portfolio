import React from "react";
import PutLinks from "./PutLinks";

function Project({ project }) {
  // const isRepoOnly = !project.links.demoLink && project.links.repo;

  return (
    <div className="project round">
      <img src={project.photo} alt={`${project.head}`} />
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
