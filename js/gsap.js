document.addEventListener("DOMContentLoaded", function () {
  gsap.fromTo(
    "#text",
    { opacity: 0, scale: 1.5 },
    { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }
  );
  setTimeout(() => {
    gsap.to("#preload", {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      onComplete: () => {
        document.getElementById("preload").style.display = "none";
      },
    });
  }, 2000);
});
