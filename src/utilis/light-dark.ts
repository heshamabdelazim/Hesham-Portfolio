export const lightMood = { mood: "light", icon: "icon-sun" };
const darkMood = { mood: "dark", icon: "icon-moon1" };

interface mood {
  mood: String;
  icon: String;
}
// =============================
export function putting(chosenMood: mood): void {
  document.body.className = chosenMood.mood; //Put className to the body
}
// =============================
export function switching(chosenMood: mood, setChosenMood): void {
  // if the mood is light in LocalStorage, Then put dark else light
  // Using function putting() again
  // ================
  if (chosenMood.mood == "light") {
    mood_func(darkMood, setChosenMood);
  } else {
    mood_func(lightMood, setChosenMood);
  }
}
// =============================

function mood_func(mood, setChosenMood): void {
  localStorage.setItem("mood", JSON.stringify(mood));
  setChosenMood(mood);
  putting(mood);
}
