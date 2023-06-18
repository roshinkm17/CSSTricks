/* Get both text */
const text = document.querySelector(".text");
const bottomText = document.querySelector(".bottom-text");

/* Separate the letters */
let letters = Array.from(text.innerText);
let bottomTextLetters = Array.from(bottomText.innerText);

text.innerHTML = "";
bottomText.innerHTML = "";
let animationRunning,
  mouseLeft = false;

/* Tweak these settings to change the flow of the effect */
const delayConst = 50;
const togetherNess = 20;
const animationEndsIn = 550 + 400 + delayConst + togetherNess;

/* Add each letter inside a span and add inside the same element */
const createLetterElements = (container, letters) => {
  const delayConst = 70;
  const togetherNess = 19;

  letters.forEach((letter, index) => {
    let spanEl = document.createElement("span");
    spanEl.innerText = letter;
    spanEl.classList.add("letter");

    /* Each letter will have an incrementing transition delay. */
    spanEl.style.animationDelay = index * togetherNess + delayConst + "ms";
    container.appendChild(spanEl);
  });
};

createLetterElements(text, letters);
createLetterElements(bottomText, bottomTextLetters);

/* Hover effect */
text.addEventListener("mouseenter", () => {
  /* Condition to stop rerunning the animation if its already running */
  /* Condition to stop the animation going on loop if mouse is not taken off the text */

  if (animationRunning && !mouseLeft) return;
  animationRunning = true;

  /* Add animation class to each letter  */
  text.childNodes.forEach((node) => {
    node.classList.add("animate-letter");
  });
  bottomText.childNodes.forEach((node) => {
    node.classList.add("animate-letter");
  });

  /* Remove animation class when last letter has completed transition */
  window.setTimeout(() => {
    text.childNodes.forEach((node) => {
      node.classList.remove("animate-letter");
    });
    bottomText.childNodes.forEach((node) => {
      node.classList.remove("animate-letter");
    });
    animationRunning = false;
  }, animationEndsIn);
});

text.addEventListener("mouseleave", () => {
  mouseLeft = false;
});
