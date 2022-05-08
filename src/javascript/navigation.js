const button = document.querySelector("#hamburger");
const navMenu = document.querySelector("#navigation-menu");
const whiteSections = document.querySelectorAll(".white-section");

button.addEventListener("click", () => {
  button.classList.toggle("active-button");
  navMenu.classList.toggle("open");
});

export const changeButtonColor = () => {
  const btn = button.querySelector(".hamburger-bar");
  const lines = btn.querySelectorAll(".line");

  for (let i = 0; i < whiteSections.length; i++) {
    if (
      whiteSections[i].getBoundingClientRect().top <=
        btn.getBoundingClientRect().top &&
      whiteSections[i].getBoundingClientRect().bottom >=
        btn.getBoundingClientRect().top
    ) {
      for (let j = 0; j < lines.length; j++) {
        lines[j].style.backgroundColor = "black";
      }

      break;
    } else {
      for (let j = 0; j < lines.length; j++) {
        lines[j].style.backgroundColor = "white";
      }
    }
  }
};
