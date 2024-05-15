// Nav-bar Script

const collapsibles = document.querySelectorAll(".collapsible");
const shrink = document.querySelectorAll('.shrink')
const navBtn = document.querySelectorAll(".navBtn")

navBtn.forEach((item) =>
  item.addEventListener("click", function () {
    event.preventDefault(); 
    collapsibles.forEach((collapsibles) => {
      collapsibles.classList.toggle("collapsible--hidden")
    });
    shrink.forEach((shrink) => {
      shrink.classList.toggle("shrunk")
    });
  })
);

// Projects Script

const chevrons = document.querySelectorAll(".chevron")

chevrons.forEach((item) => {
  item.addEventListener("click", function () {
    const hideableList = this.parentElement.parentElement.querySelectorAll('.hideable');
    const morphableList = this.parentElement.parentElement.parentElement.querySelectorAll('.morphable');

    hideableList.forEach((hideable) => {
      hideable.classList.toggle("hidden")
    });
    morphableList.forEach((morphable) => {
      morphable.classList.toggle('morphed')
    });
  })
});



