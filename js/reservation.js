/**
 * EMBER & OLIVE - Reservation Form & Confirmation Modal Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  initReservationForm();
});

function initReservationForm() {
  const form = document.getElementById('reservation-form');
  const modal = document.getElementById('reservation-modal');
  const closeModalBtn = document.getElementById('res-modal-close');
  const modalOverlay = document.getElementById('res-modal-overlay');

  if (!form || !modal) return;

  function openModal(details) {
    const detailsContainer = document.getElementById('res-confirmed-details');
    if (detailsContainer) {
      detailsContainer.innerHTML = `
        <p style="margin-bottom:8px;"><strong>Guest:</strong> ${details.name}</p>
        <p style="margin-bottom:8px;"><strong>Date & Time:</strong> ${details.date} at ${details.time}</p>
        <p style="margin-bottom:8px;"><strong>Party Size:</strong> ${details.guests} Guests</p>
        <p style="font-size:0.85rem; color:var(--text-muted); margin-top:12px;">A confirmation email has been dispatched to <em>${details.email}</em>.</p>
      `;
    }
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('res-name').value;
    const email = document.getElementById('res-email').value;
    const phone = document.getElementById('res-phone').value;
    const date = document.getElementById('res-date').value;
    const time = document.getElementById('res-time').value;
    const guests = document.getElementById('res-guests').value;

    openModal({ name, email, phone, date, time, guests });
    form.reset();
  });

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (modalOverlay) modalOverlay.addEventListener('click', closeModal);
}
