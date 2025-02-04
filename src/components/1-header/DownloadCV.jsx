import React from "react";

function DownloadCV() {
  const fileName = "Hesham_Abdelazim_cv.pdf";
  return (
    <a href={`/images/${fileName}`} download={fileName} className="download">
      <button>Download CV</button>
    </a>
  );
}

export default DownloadCV;
