const button = document.querySelector(".switch_btn");
const btnWrapper = document.querySelector(".switch_wrapper");
const bird = document.querySelectorAll(".bird");

button.addEventListener("click", () => {
  btnWrapper.classList.toggle("active");
  bird.forEach((item) => {
    btnWrapper.classList.contains("active")
      ? (item.style.animation = "bird-exit 2s ease-in-out forwards")
      : (item.style.animation = "bird-enter 2s ease-in-out infinite alternate");
  });
});
