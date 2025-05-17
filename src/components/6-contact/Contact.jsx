import React, { useContext, useEffect, useRef, useState } from "react";
// CSS
import "./contact.css";
// formspree => to sending forms
import { ValidationError, useForm } from "@formspree/react";
// Lottie-react for animatin
import Lottie from "lottie-react";
import sending from "./../../animation/sending.json";
import { animateSection } from "../../utilis/animate-section";
import { MyContext } from "../../context/context";
import Loading from "../99-Loading/Loading";
import Message from "./Message";

const Contact = () => {
  let contextData = useContext(MyContext);
  const contactDom = useRef();

  useEffect(() => {
    //side Effect
    animateSection(contextData.userScreen_h, contactDom.current);
  }, []);
  // ==============
  let [icon, setIcon] = useState("icon-chevron-right");
  const [state, handleSubmit] = useForm("xwkgyzbw");

  // =============== input focus & blur ============
  function focusing(e) {
    // this function just adding a class to the label
    e.target.previousElementSibling.classList.add("pressed");
  }
  function bluring(e) {
    // this function just removing a class from the label if the input is empty
    !e.target.value &&
      e.target.previousElementSibling.classList.remove("pressed");
  }

  // =============== Lottie-react (animation) ============
  // To get react-code I searched (npm i lottie-react) (https://lottiereact.com/)
  return (
    <section className="contact" id="contact" ref={contactDom}>
      <div className="container ">
        <h2 className="title">Contact Us</h2>
        <div className="content d-flex">
          <div className="left-section">
            {/* <div className="mail " /> */}
            <form onSubmit={handleSubmit} className="d-flex">
              <div className="name">
                <label htmlFor="client-Name">Client Name</label>
                <input
                  type="name"
                  id="client-Name"
                  name="client-Name"
                  required
                  onFocus={(e) => {
                    focusing(e);
                  }}
                  onBlur={(e) => bluring(e)}
                  autoComplete="off"
                />
              </div>
              <div className="whatsapp">
                <label htmlFor="whatsapp">Whatsapp (optional)</label>
                <input
                  type="number"
                  id="whatsapp"
                  name="whatsapp"
                  onFocus={(e) => {
                    focusing(e);
                  }}
                  onBlur={(e) => bluring(e)}
                  autoComplete="off"
                />
              </div>
              <div className="email">
                <label htmlFor="email">Email (optional)</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onFocus={(e) => {
                    focusing(e);
                  }}
                  onBlur={(e) => bluring(e)}
                  autoComplete="off"
                />
              </div>
              <div className="message">
                <label htmlFor="message">Your message?</label>
                <textarea
                  name="message"
                  id="message"
                  required
                  onFocus={(e) => {
                    focusing(e);
                  }}
                  onBlur={(e) => bluring(e)}
                  autoComplete="off"
                />
              </div>
              <input type="submit" disabled={state.submitting} />
            </form>
            <Message state={state} />
          </div>
          {/* <section className="right-section hide border">{view}</section> */}
          <Lottie
            animationData={sending}
            loop={true}
            style={{
              height: 390,
              background: "#adadad",
              borderRadius: "20%",
            }}
            className="right-section hide"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;

/*
 npm install @formspree/react
 For more help visit https://formspr.ee/react-help

*/
