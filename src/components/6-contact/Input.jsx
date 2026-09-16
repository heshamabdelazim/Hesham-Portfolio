import { ValidationError, useForm } from "@formspree/react";
import React, { useState } from "react";

const Input = ({id, type, required=true}) => {
  let [state, handleSubmit] = useForm("xwkgyzbw");
  const [isFocused, setIsFocused] = useState(false);
  const bluring = (e) => {
        // this function just removing a class from the label if the input is empty
    if(e.target.value.trim()) return
    setIsFocused(false);
  }

  if(type ==="textarea"){
    return(
      <div id={id}>
            <label htmlFor={id} className={isFocused? "pressed" : ""}>Your message?</label>
            <textarea
              name="message"
              id={id}
              required
              onFocus={(e) => {
                setIsFocused(true);
              }}
              onBlur={(e) => bluring(e)}
              autoComplete="off"
            />
          </div>
    )
  }

  return (
    <div id={id}>
      <label htmlFor={id} className={isFocused? "pressed" : ""}>
        {id.toUpperCase()} {!required&& "(optional)"}
      </label>
          <input
            type={type}
            id={id}
            name={id}
            required= {required}
            onFocus={(e) => setIsFocused(true)}
            onBlur={(e) => bluring(e)}
            autoComplete="off"
          />
    </div>
  );
};

export default Input;
