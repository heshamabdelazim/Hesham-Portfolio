import React, { useEffect, useRef, useState } from 'react'

function HSeciton({ title, id, children }: { title: string; id: string; children: React.ReactNode }) {
  // let contextData = useContext(MyContext);
  let [animate,setAnimate]=useState(false);
  const Dom = useRef();
  const userScreen_h:number = window.innerHeight; // height of Whatever users screen
  // console.log(Dom.current)
  // console.log("the section ", Dom.current, sectionPosition)
  useEffect(() => {
    //side Effect
    // animateSection(contextData.userScreen_h, aboutDom.current);
    const sectionPosition = Dom.current?.getBoundingClientRect().top; //it must be inside scroll event
        window.addEventListener("scroll", () => {
          const userScrollY = Math.trunc(window.scrollY);
          if(userScrollY >= (sectionPosition - userScreen_h * 0.60)) {
          //  if(userScrollY >= sectionPosition - userScreen_h * 0.66) {
            console.log(userScreen_h, userScrollY, sectionPosition)
            setAnimate(true);
            console.log(`now the section ${Dom.current.id} is animate`);
          } else {
             setAnimate(false);
             console.log("false")
          }
        })
        
      }, []);

  return (
    <section id={id} ref={Dom } className={animate ? 'animate' : ''}>
      <div className="container">
      <h2 className="title">{title}</h2>
        {children}
      </div>
    </section>
  )
}

export default HSeciton
