import { ValidationError, useForm } from "@formspree/react";
import React from "react";

const Input = (props) => {
  let [state, handleSubmit] = useForm("xwkgyzbw");
  function focusing(e) {
    // this function just adding a class to the label
    e.target.previousElementSibling.classList.add("pressed");
  }
  function bluring(e) {
    // this function just removing a class from the label if the input is empty
    !e.target.value &&
      e.target.previousElementSibling.classList.remove("pressed");
  }
  return (
    <div className={props.class}>
      <label htmlFor={props.for}>{props.labelName}</label>
      {props.inputType ? (
        <>
          <input
            type={props.inputType}
            id={props.for}
            name={props.for}
            required
            onFocus={(e) => {
              focusing(e);
            }}
            onBlur={(e) => bluring(e)}
            autoComplete="off"
          />
          {props.for === "email" && (
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          )}
        </>
      ) : (
        <>
          <textarea
            id={props.for}
            name={props.for}
            required
            onFocus={(e) => {
              focusing(e);
            }}
            onBlur={(e) => bluring(e)}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </>
      )}
    </div>
  );
};

export default Input;
