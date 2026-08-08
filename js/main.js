/**
 * EMBER & OLIVE - Main JavaScript Controller
 * Sticky Navigation Bar, Scroll Blur, & Mobile Menu Drawer
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
});

/* Sticky Navigation Bar Scroll Handler */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* Animated Mobile Navigation Drawer */
function initMobileMenu() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (!menuBtn || !navLinks) return;

  function closeMenu() {
    navLinks.classList.remove('mobile-active');
    menuBtn.textContent = '☰';
    menuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  function openMenu() {
    navLinks.classList.add('mobile-active');
    menuBtn.textContent = '✕';
    menuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isExpanded = navLinks.classList.contains('mobile-active');
    if (isExpanded) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  const links = navLinks.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
      closeMenu();
    }
  });
}
