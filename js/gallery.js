/**
 * EMBER & OLIVE - Interactive Gallery & Lightbox Engine
 * Fullscreen Lightbox Modal with Next/Prev & Keyboard Listeners
 */

document.addEventListener('DOMContentLoaded', () => {
  initGalleryLightbox();
});

function initGalleryLightbox() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');

  if (!galleryItems.length || !lightbox || !lightboxImg) return;

  const images = Array.from(galleryItems).map(item => {
    const img = item.querySelector('img');
    return {
      src: img ? img.src : '',
      alt: img ? img.alt : ''
    };
  });

  let currentIndex = 0;

  function showLightbox(index) {
    if (index < 0) index = images.length - 1;
    if (index >= images.length) index = 0;
    currentIndex = index;

    lightboxImg.src = images[currentIndex].src;
    lightboxImg.alt = images[currentIndex].alt;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  galleryItems.forEach((item, idx) => {
    item.addEventListener('click', () => showLightbox(idx));
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', () => showLightbox(currentIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => showLightbox(currentIndex + 1));

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showLightbox(currentIndex - 1);
    if (e.key === 'ArrowRight') showLightbox(currentIndex + 1);
  });
}
