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
  function opening(e) {
    // console.log(e.target.parentElement);
    const sideTap = document.querySelector(".contact .tap");
    if (!sideTap.classList.contains("open")) {
      sideTap.classList.add("open");
      setIcon("icon-chevron-left");
    } else {
      sideTap.classList.remove("open");
      setIcon("icon-chevron-right");
    }
  }
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
      {/* <div className="tap d-flex">
        <div className="social">
          <div className="d-flex whatsapp">
            <span className="icon-whatsapp icon" />
            <h3>+20 121 2005 626</h3>
          </div>
          <div className="d-flex gmail">
            <span className="icon-gmail icon" />
            <h3>heshamabdelazim3@gmail.com</h3>
          </div>
        </div>
        <div className="arrow" onClick={(e) => opening(e)}>
          <span className={icon} />
        </div>
      </div> */}
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
            {state.succeeded && (
              <span className="response">Feedback, Sent successfully.✅ </span>
            )}
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
// The following what I found while using (formspree)
// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help

WHAT YOU SHOULD DO IS THE FOLLOWING?
1-make sure you useForm("ABCD") the same that website gave you
2-Validation is working but now I didn't use it

import React from 'react';

import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("mgegdrvo");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
*/
