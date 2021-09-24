let buttonLeft = document.querySelector(".button-left");
let buttonRight = document.querySelector(".button-right");
let focus = document.querySelector(".best-shop-focus");
let navTop = document.querySelector(".nav-top");
let navBottom = document.querySelector(".nav-bottom");
let currentPage = 1;
setInterval(function () {
  focus.style.transform = `translateX(-${currentPage * 30}vw)`;
  console.log(currentPage);
  currentPage += 1;
  if (currentPage > 7) currentPage = 1;
}, 2000);
document.addEventListener("scroll", function () {
  let currentScroll = document.documentElement.scrollTop;
  console.log(currentScroll);
  if (currentScroll > 0) {
    navTop.style.display = "none";
    navBottom.style.backgroundColor = "white";
    navBottom.style.color = "black";
  } else {
    navTop.style.display = "flex";
    navTop.style.color = "black";
    navBottom.style.backgroundColor = " transparent";
    navBottom.style.color = "black";
  }
});
