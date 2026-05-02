import React, { useEffect, useRef, useState } from 'react'

function HSeciton({ title, id, children }: { title: string; id: string; children: React.ReactNode }) {
  // let contextData = useContext(MyContext);
  let [animate, setAnimate] = useState(false);
  const Dom = useRef();
  const userScreen_h: number = window.innerHeight; // height of Whatever users screen
  // console.log(Dom.current)
  // console.log("the section ", Dom.current, sectionPosition)
  useEffect(() => {
    //side Effect
    // animateSection(contextData.userScreen_h, aboutDom.current);
    const handleScroll = () => {
      if (!Dom.current) return;
      const sectionPosition = Dom.current.getBoundingClientRect().top; //it must be inside scroll event
      const userScrollY = window.scrollY
      // const isScreen_aboveSection = userScrollY >= (sectionPosition - userScreen_h * 0.60);
      const isScreen_aboveSection = sectionPosition <= userScreen_h * 0.6;

      if (isScreen_aboveSection) {
        setAnimate(true);
        console.log("true ", id)
      } else {
        setAnimate(false);
        console.log("false ", id)
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Cleanup: remove the scroll listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id={id} ref={Dom} className={animate ? 'animate' : ''}>
      <div className="container">
        <h2 className="title">{title}</h2>
        {children}
      </div>
    </section>
  )
}

export default HSeciton
