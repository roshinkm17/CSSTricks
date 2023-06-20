const animation = "animate-up 0.7s cubic-bezier(0.87, 0, 0.13, 1) forwards";
const h1 = document.querySelector(".text-to-animate");

/* Select each p inside the h1 and add to an array */
const p = Array.from(h1.querySelectorAll("p"));

/* Add an animation delay to each p incrementally */
p.forEach((p, i) => {
  /* Select the span inside it */
  const span = p.querySelector("span");
  /* Add the animation to the p */
  span.style.animation = `${animation} ${i * 0.1 + 0.4}s`;
});
