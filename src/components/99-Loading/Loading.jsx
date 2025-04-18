import React, { useContext, useEffect, useRef } from "react";
import { MyContext } from "../../context/context";
import { animateSection } from "../../utilis/animate-section";
import "./Loading.css";
function Loading() {
  let contextData = useContext(MyContext);
  const LoadingDom = useRef();
  useEffect(() => {
    //side Effect
    animateSection(contextData.userScreen_h, LoadingDom.current);
  }, []);
  return <div id="loading">Loading</div>;
}

export default Loading;
/*
Loading page{
  loading animation
}

*/
