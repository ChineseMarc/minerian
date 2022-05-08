import { animateElement } from "./textAnimation.js";
// import { changeButtonColor } from "./navigation.js";
// import { parallaxVideo } from "./showreel.js";
import { projectIntoView } from "./showProjects.js";

document.addEventListener("scroll", (e) => {
  // parallaxVideo();
  animateElement();
  // changeButtonColor();
  projectIntoView();
});
