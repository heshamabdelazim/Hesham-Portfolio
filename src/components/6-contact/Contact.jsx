// CSS
import "./contact.css";
// formspree => to sending forms
import { ValidationError, useForm } from "@formspree/react";
// Lottie-react for animatin
import Lottie from "lottie-react";
import sending from "./../../animation/sending.json";
import Message from "./Message";
import Input from "./Input";

const Contact = () => {
  const [state, handleSubmit] = useForm("xwkgyzbw");
  // =============== Lottie-react (animation) ============
  // To get react-code I searched (npm i lottie-react) (https://lottiereact.com/)
  return (
    <div className="content d-flex">
      <div className="left-section">
        {/* <div className="mail " /> */}
        <form onSubmit={handleSubmit} className="d-flex">
          <Input id="Name" type="text" />
          <Input id="Whatsapp" type="number" />
          <Input id="email" type="email" required={false} />
          <Input id="message" type="textarea" />
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
  );
};

export default Contact;

/*
 npm install @formspree/react
 For more help visit https://formspr.ee/react-help

*/
