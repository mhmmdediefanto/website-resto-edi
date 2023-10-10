let toggleHamburger = document.getElementById("toggle-hamburger");
let listNav = document.getElementById("list-nav");
toggleHamburger.addEventListener("click", function () {
  listNav.classList.toggle("hamburger-active");
});
