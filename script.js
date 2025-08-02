// Welcome alert on load
window.onload = function () {
  alert("Welcome to my portfolio website!");
};

// Dark mode toggle
document.getElementById("darkToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Scroll-to-top button
const scrollBtn = document.getElementById("scrollTop");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 100) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};
scrollBtn.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});
