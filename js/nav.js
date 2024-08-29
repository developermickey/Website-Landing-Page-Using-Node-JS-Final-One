let lastTime = 0;
let maxFPS = 60;
let direction = 1;

const nav = document.querySelector("nav");
let lastScrollY = window.scrollY;
let navRect = null;

function navPosition(timestamp) {
  if (!lastTime) {
    lastTime = timestamp;
  }
  const elapsed = timestamp - lastTime;
  if (elapsed > 1000 / maxFPS) {
    lastTime = timestamp;

    if (navRect) {
      if (direction === 1 && window.scrollY > 0) {
        nav.style.transform = `translateY(-${navRect.height}px)`;
      } else {
        nav.style.transform = `translateY(0px)`;
      }
    } else {
      navRect = nav.getBoundingClientRect();
    }

    if (lastScrollY > window.scrollY) {
      direction = -1;
    }

    if (lastScrollY < window.scrollY) {
      direction = 1;
    }
    lastScrollY = window.scrollY;
  }
  requestAnimationFrame(navPosition);
}
requestAnimationFrame(navPosition);

if (document.querySelector(".notification-toggle")) {
  document
    .querySelector(".notification-toggle")
    .addEventListener("click", () => {
      document.querySelector(".notification-panel").classList.toggle("show");
    });

  document
    .querySelector(".remove-notification-panel")
    .addEventListener("click", () => {
      document.querySelector(".notification-panel").classList.remove("show");
    });
}

document.querySelector(".menu-toggle").addEventListener("click", function () {
  if (this.classList.contains("menu-show")) {
    this.classList.add("menu-close");
  } else {
    this.classList.remove("menu-close");
  }
  this.classList.toggle("menu-show");
});
