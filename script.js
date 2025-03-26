const video = document.getElementById("main-video");
const videoControl = document.getElementById("video-control");

videoControl.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    videoControl.textContent = "⏸";
  } else {
    video.pause();
    videoControl.textContent = "⏵";
  }
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".bottom-section");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});