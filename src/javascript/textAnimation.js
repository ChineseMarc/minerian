let textAnimationElements = Array.from(
  document.querySelectorAll(".animate-element")
);
const separateTextElements = document.querySelectorAll(".separate-text");

// Separate text to line
const separateTextToLine = (element) => {
  let lineArr = [];
  const font = window.getComputedStyle(element).getPropertyValue("font");
  const elementWidth = element.offsetWidth;
  if (elementWidth === 0) return;

  let text = element.dataset.text;
  element.innerHTML = "";

  const getTextWidth = (text) => {
    const canvas =
      getTextWidth.canvas ||
      (getTextWidth.canvas = document.createElement("canvas"));
    const context = canvas.getContext("2d");
    context.font = font;

    const metrics = context.measureText(text);
    return metrics.width;
  };

  let textWidth = getTextWidth(text);
  const word = text.split("");

  let index = 0;
  let disable = 0;
  while (textWidth > 0) {
    let lineWidth = 0;
    let counter = 0;
    let line = "";
    let spaceIndex;

    while (lineWidth < elementWidth && counter < word.length) {
      if (lineWidth + getTextWidth(word[counter]) > elementWidth) {
        counter--;
        break;
      }
      if (word[counter] === " ") spaceIndex = counter;
      line += word[counter];
      lineWidth = getTextWidth(line);
      counter++;
    }
    if (disable < 1) {
      if (word[counter - 1] !== " " && counter !== word.length) {
        counter = spaceIndex;
      }
    } else {
      disable = 0;
    }
    let singleLine = word.splice(0, counter);
    if (singleLine.join("").length === 0) disable++;

    const measureLine = document.createElement("div");
    measureLine.innerHTML = singleLine.join("");

    element.appendChild(measureLine);

    index++;
    textWidth = getTextWidth(word.join(""));
  }

  return lineArr;
};

// Initial separate and animate after load page
window.addEventListener("load", () => {
  document.fonts.load('1em "Montserrat"').then(() => {
    separateTextElements.forEach((item) => separateTextToLine(item));

    setTimeout(() => {
      textAnimationElements.forEach((item) => {
        if (item.dataset.onload) {
          activeAnimation(item);

          textAnimationElements = textAnimationElements.filter(
            (element) => element !== item
          );
        }
      }, 0);
    });
  });
});

// Active animation function
const activeAnimation = (item) => {
  item.classList.add("show-element");
};

export const animateElement = () => {
  if (textAnimationElements.length === 0) return;

  const item = textAnimationElements[0];

  if (!item.dataset.onload) {
    let breakElement = item;

    if (item.dataset.parent) {
      breakElement = item.parentElement;
    }

    if (breakElement.getBoundingClientRect().top < window.innerHeight * 0.9) {
      activeAnimation(item, +item.dataset.timeout);

      textAnimationElements.shift();
    }
  }
};
