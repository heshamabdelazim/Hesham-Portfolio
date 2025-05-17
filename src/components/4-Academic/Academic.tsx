import React, { FC, useContext, useEffect, useRef, useState } from "react";
import "./Academic.scss";
import { fetchingData } from "/src/utilis/fetch.ts";
import { academicStructure, data } from "./data";
import { MyContext } from "../../context/context";
import { animateSection } from "../../utilis/animate-section";
import AcademicTab from "./AcademicTab";

function Academic() {
    let contextData = useContext(MyContext);
    const academicDom = useRef();
    useEffect(() => {
      //side Effect
animateSection(contextData.userScreen_h, academicDom.current);
    }, []);
  //=================
  const allTaps = data.map(obj => obj.org);
  const [category, setCategory] = useState(allTaps[0]);
  const [openFigure, setOpenFigure] = useState();

    // =================
  // useEffect(() => {
  //   fetchingData("/public/project-details/my-Details.json", setData);
  // }, []);

  // =================
  function tapContent(): academicStructure  {
    for (let i = 0; i < data.length; i++){
      let isChosen: boolean = category.toLocaleLowerCase() == data[i].org.toLocaleLowerCase();
      if (isChosen) {
        return  data[i] ;
      }
    }
    return data[0];
  }

  return (
    <section id="academic" ref={academicDom}>
      <div className="container">
        <h2 className="title">Academic Dev</h2>
        <div className="section-body d-flex">
          {/* taps */}
          <ul className="taps">
            {allTaps.map((tap,index) => (
              <AcademicTab key={index} tap={tap} category={ category} setCategory={setCategory} />
            ))}
          </ul>
          {/* pressed taps details */}
          <div className="tap-details">
            {tapContent()?.course.map((obj,id) => (
              <div key={id}>
                <h4>{obj.title}</h4>
                <p>{obj.desc}</p>
              </div>
            ))}
            <div className="imgs-container">
              <h4>Images</h4>
              <div className="imgs-holder">
                {tapContent()?.images.map((obj, id) => (
                  <figure key={id} onClick={()=>setOpenFigure(obj)}>
                    <img src={obj.imgPath} alt={obj.title} loading="lazy" />
                    <figcaption>{ obj.title}</figcaption>
                  </figure>
                )) }
              </div>
            </div>
          </div>
        </div>
        {
          openFigure && (
            <div className="showFig">
              <span className="closeX" onClick={()=>setOpenFigure(null)}>X</span>
              <img src={openFigure.imgPath} alt={openFigure.title} loading="lazy" />
            </div>
          )
        }
      </div>

    </section>
  );
}

export default Academic;
