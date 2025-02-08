import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <p>Let's bring imagination to reality</p>
      <p className="special-orange">Thank You</p>
      <span> &copy; {new Date().getFullYear()} all Rights preserved. </span>
    </footer>
  );
};

export default Footer;
