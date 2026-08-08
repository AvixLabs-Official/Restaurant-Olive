/**
 * EMBER & OLIVE - Motion & Animation Engine
 * Scroll Reveal Observer & Subtle Parallax Effects
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initParallax();
});

function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(el => observer.observe(el));
}

function initParallax() {
  const heroBg = document.querySelector('.hero-bg-overlay');
  if (!heroBg) return;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY < window.innerHeight) {
      heroBg.style.transform = `scale(${1.03 + scrollY * 0.00015}) translateY(${scrollY * 0.15}px)`;
    }
  }, { passive: true });
}
