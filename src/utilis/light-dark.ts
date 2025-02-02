
export const lightMood = { mood: "light", icon: "icon-sun" };
const darkMood = { mood: "dark", icon: "icon-moon1" };

// =============================
export function putting(chosenMood): void {
  document.body.className = chosenMood.mood;  //Put className to the body
  //====
  const switcher = document.querySelector("header .mood");
  switcher.className = chosenMood.icon + " mood";  //Put className to the button
}
// =============================
export function switching(chosenMood:{icon:String,mood:String}, setChosenMood):void {
  // if the mood is light in LocalStorage, Then put dark else light
  // Using function putting() again
  // ================
  if (chosenMood.mood == "light") {
    localStorage.setItem("mood", JSON.stringify(darkMood));
    setChosenMood(darkMood);
    putting(darkMood);
  } else {
    localStorage.setItem("mood", JSON.stringify(lightMood));
    setChosenMood(lightMood);
    putting(lightMood);
  }


}
