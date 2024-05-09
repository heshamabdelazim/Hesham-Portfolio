const RightSection = (props) => {
  const { dataRevealed } = props;

  return (
    <div className="right-section">
      {dataRevealed.map((project, index) => (
        <div className="project" key={index + 1}>
          <img src={project.photo} alt={`${project.head} photo`} />
          <article>
            <h2>{project.head}</h2>
            <p>{project.para}</p>
          </article>
          <hr />
          <footer className="d-flex">
            <a href={project.link}>
              <span className="icon-github" />
            </a>
            <a href={project.website}>
              <span className="icon-link" />
            </a>
          </footer>
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
