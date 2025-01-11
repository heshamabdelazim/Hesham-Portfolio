import React from "react";

function Project({ project }) {
  return (
    <div className="project round">
      <img src={project.photo} alt={`${project.head}`} />
      <article>
        <h2>
          {project.head} {!project.demoLink && "- (soon)"}
        </h2>
        <p>{project.para}</p>
      </article>
      <div className="footer ">
        {project.demoLink ? (
          <div className="links">
            <a href={project.repo} target="_blank">
              <span className="icon-github" />
            </a>
            <a href={project.demoLink} target="_blank">
              <span className="icon-link" />
            </a>
          </div>
        ) : (
          <h4>Soon</h4>
        )}
      </div>
      {/* THe following code is showing icon, So the project is still working the clock will be else the object icon */}
      <i className={project.demoLink ? project.icon : "icon-stopwatch"} />
    </div>
  );
}

export default Project;
