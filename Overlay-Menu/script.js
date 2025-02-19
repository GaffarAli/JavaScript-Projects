const hamburger = document.getElementById("hamburger");
const overlayMenu = document.getElementById("menuOverlay");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  overlayMenu.classList.toggle("active");
});
overlayMenu.addEventListener("click", (e) => {
  if (e.target === overlayMenu) {
    hamburger.classList.remove("active");
    overlayMenu.classList.remove("active");
  }
});
