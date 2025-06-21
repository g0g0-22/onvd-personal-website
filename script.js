document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("scrollTopBtn");

  window.onscroll = () => {
    btn.style.display = (window.scrollY > 300) ? "block" : "none";
  };

  btn.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const fadeIns = document.querySelectorAll(".fade-in");

  const appearOnScroll = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  fadeIns.forEach(el => {
    appearOnScroll.observe(el);
  });
});
