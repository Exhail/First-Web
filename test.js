const collapsibles = document.querySelectorAll(".collapsible");
const shrink = document.querySelectorAll('.shrink')
const navBtn = document.querySelectorAll(".navBtn")

navBtn.forEach((item) =>
  item.addEventListener("click", function () {
    collapsibles.forEach((collapsibles) => {
      collapsibles.classList.toggle("collapsible--hidden")
    });
    shrink.forEach((shrink) => {
      shrink.classList.toggle("shrunk")
    });
  })
);

