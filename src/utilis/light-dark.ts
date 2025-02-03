
export const lightMood = { mood: "light", icon: "icon-sun" };
const darkMood = { mood: "dark", icon: "icon-moon1" };

interface mood{
  mood: String,
  icon:String
}
// =============================
export function putting(chosenMood : mood): void {
  document.body.className = chosenMood.mood;  //Put className to the body
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
