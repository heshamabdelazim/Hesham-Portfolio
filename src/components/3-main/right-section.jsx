const RightSection = ({ dataRevealed }) => {
  console.log(dataRevealed.i);
  return (
    <div className="right-section">
      {dataRevealed.map((project, index) => (
        <div className="project round" key={index + 1}>
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
      ))}
    </div>
  );
};

export default RightSection;

/*
        <section className="right-section">
          <Project
            photo={temp1}
            head="Template one:  "
            para="Contains 6 sections "
            link="NotYet"
            category="template"
          />
          <Project
            photo={temp2}
            head="Template two: Kasber "
            para="contains 12 sections"
            link="NotYet"
            category="template"
          /> 
          <Project
            photo={temp3}
            head=" Template three"
            para="contains 15 sections."
            link="NotYet"
            category="template"
          />
          <Project
            photo={photo}
            head=" react-app"
            para="contains 15 sections."
            link="NotYet"
            category="react-app"
          />
          <Project
            photo={temp3}
            head=" react-app"
            para="contains 15 sections."
            link="NotYet"
            category="react-app"
          />
          <Project
            photo={temp3}
            head=" react-app"
            para="contains 15 sections."
            link="NotYet"
            category="react-app"
          />
        </section>
*/
