const toggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const bars = document.querySelectorAll(".bar");

toggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  bars.forEach(bar => bar.classList.toggle("active"));
});

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
