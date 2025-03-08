import { ReactElement, useContext } from "react";
import { MyContext } from "../context/context";

export function animateSection(screenHeight: number, sectionDom): void {
  const chosenPosition = screenHeight * 0.66; //I chose some position at the bottom
  window.addEventListener("scroll", () => {
    const sectionPosition = sectionDom.getBoundingClientRect().top; //it must be inside scroll event
    if (
      chosenPosition &&
      sectionPosition &&
      chosenPosition >= sectionPosition
    ) {
      sectionDom.classList.add("animate");
    } else {
      sectionDom.classList.remove("animate");
    }
  });
}
