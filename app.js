const puces = document.querySelectorAll(".puce");

puces.forEach((puce) => {
  puce.addEventListener("click", function () {
    for (let i = 0; i < puces.length; i++) {
      puces[i].classList.remove("active");
    }
    this.classList.add("active");
  });
});
