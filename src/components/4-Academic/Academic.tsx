import React, { useEffect, useState } from "react";
import "./Academic.scss";
import { fetchingData } from "/src/utilis/fetch.ts";
import { data } from "./data";

function Academic() {
  // const [data, setData] = useState(null);
  const [chosenTap, setChosenTap] = useState(data[0]);
  const [openFigure, setOpenFigure] = useState();
  
  // useEffect(() => {
  //   fetchingData("/public/project-details/my-Details.json", setData);
  // }, []);

  // useEffect(() => {
  //   if (!chosenTap && data) {
  //     data[0].isActive = true;
  //     setChosenTap(data[0])
  //   }
  //   // why this? to set default value of the (choesnTap) variable
  // }, [data])
  
  function tapClicked(obj) {
    setChosenTap((old) => {
      old.isActive = false;
      obj.isActive = true;
      return obj
    })
}

  return (
    <section id="academic">
      <div className="container">
        <h2 className="title">Academic Dev</h2>
        <div className="section-body d-flex">
          {/* taps */}
          <ul className="taps">
            {data?.map((obj) => (
              <li key={obj.id} className={ `btn-ui tap ${obj.isActive? "active":" "} ` } onClick={() =>tapClicked(obj) }>
                <img src={obj.logo} className="hide" />
                <h3>{obj.org}</h3>
              </li>
            ))}
          </ul>
          {/* pressed taps details */}
          <div className="tap-details">
            {chosenTap?.course.map((obj,id) => (
              <div key={id}>
                <h4>{obj.title}</h4>
                <p>{obj.desc}</p>
              </div>
            ))}
            <div className="imgs-container">
              <h4>Images</h4>
              <div className="imgs-holder">
                {chosenTap?.images.map((obj, id) => (
                  <figure key={id} onClick={()=>setOpenFigure(obj)}>
                    <img src={obj.imgPath} alt={obj.title} />
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
              <img src={openFigure.imgPath} alt={openFigure.title} />
            </div>
          )
        }
      </div>
    </section>
  );
}

export default Academic;
