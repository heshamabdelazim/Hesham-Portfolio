import { ReactElement, useContext } from "react";
import { MyContext } from "../context/context";

export function animateSection(
  screenHeight: number,
  sectionDom: HTMLElement,
): void {
  const chosenPosition = screenHeight * 0.66; //I chose some position at the bottom
  // console.log(sectionDom, "section Dom");

  // window.addEventListener("scroll", () => {
  //   const sectionPosition = sectionDom.getBoundingClientRect().top; //it must be inside scroll event
  //   console.log(sectionPosition, "section position");
  //   if (
  //     chosenPosition &&
  //     sectionPosition &&
  //     chosenPosition >= sectionPosition
  //   ) {
  //     sectionDom.classList.add("animate");
  //   } else {
  //     sectionDom.classList.remove("animate");
  //   }
  // });
}
