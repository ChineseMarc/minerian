const showReel = document.querySelector("#show-reel");
const play = showReel.querySelector("#play");
const video = showReel.querySelector("video");

let initPos = [showReel.offsetLeft, showReel.offsetTop];
let stylePos = [parseFloat(play.style.left), parseFloat(play.style.top)];

let disableMove = false;

const moveElement = (moveEvent) => {
  initPos = [showReel.offsetLeft, showReel.offsetTop];

  let styleX = stylePos[0];
  let styleY = stylePos[1];

  if (isNaN(styleX)) {
    styleX = 0;
  }

  if (isNaN(styleY)) {
    styleY = 0;
  }

  if (disableMove) return;
  disableMove = true;

  setTimeout(() => {
    disableMove = false;
  }, 50);

  play.style.left =
    moveEvent.pageX -
    initPos[0] -
    play.getBoundingClientRect().width / 2 +
    "px";
  play.style.top =
    moveEvent.pageY -
    initPos[1] -
    play.getBoundingClientRect().height / 2 +
    "px";
};

showReel.addEventListener("mouseover", (e) => {
  showReel.classList.add("move-event");
  stylePos = [parseFloat(play.style.left), parseFloat(play.style.top)];

  document.addEventListener("mousemove", moveElement);
});

showReel.addEventListener("mouseleave", () => {
  showReel.classList.remove("move-event");
  document.removeEventListener("mousemove", moveElement);
});

export const parallaxVideo = () => {
  video.style.transform = `translateY(-${window.scrollY * 0.3}px)`;
};
