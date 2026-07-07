// Ibrahims Barbershop & Kafé — subtile scroll-reveals + parallax
document.getElementById("year").textContent = new Date().getFullYear();

const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduce && window.gsap) {
  gsap.registerPlugin(ScrollTrigger);

  // Myke reveals
  gsap.utils.toArray(".reveal").forEach((el) => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "expo.out",
      scrollTrigger: { trigger: el, start: "top 88%" },
      onStart: () => el.classList.add("is-in"),
    });
  });

  // Subtil parallax på dekor-former
  gsap.to(".decor--ring", {
    yPercent: 18,
    ease: "none",
    scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: true },
  });
  gsap.to(".decor--dot", {
    yPercent: -22,
    ease: "none",
    scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: true },
  });
} else {
  // Uten GSAP / redusert bevegelse: vis alt
  document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-in"));
}
