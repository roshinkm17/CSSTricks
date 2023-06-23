const button = document.querySelector(".switch_btn");
const btnWrapper = document.querySelector(".switch_wrapper");

button.addEventListener("click", () => {
  btnWrapper.classList.toggle("active");
});
