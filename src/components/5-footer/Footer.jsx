import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <p>the idea of this design came from</p>
      <a
        href="https://www.youtube.com/watch?v=bv_IJ3N6y8U&t=32s"
        target="_blank"
      >
        here.
      </a>
      <span> &copy; {new Date().getFullYear()} all Rights preserved. </span>
    </footer>
  );
};

export default Footer;
