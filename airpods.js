// Mobile menu toggle
const mobileButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
if (mobileButton && mobileMenu) {
  mobileButton.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('hidden') === false;
    mobileButton.setAttribute('aria-expanded', open);
  });
}

// Enhance details/summary for keyboard and aria
document.querySelectorAll('details').forEach((det) => {
  const summary = det.querySelector('summary');
  if (!summary) return;

  summary.addEventListener('click', () => {
    const expanded = det.hasAttribute('open');
    summary.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  });

  // Keyboard support
  summary.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      det.toggleAttribute('open');
      const expanded = det.hasAttribute('open');
      summary.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    }
  });
});

// Simple form handler (no backend) — shows a confirmation message and resets form
function handleForm(e) {
  e.preventDefault();
  const form = document.getElementById('booking-form');
  const feedback = document.getElementById('form-feedback');
  const name = form.name.value.trim();
  const model = form.model.value;

  if (!name || !model) {
    feedback.textContent = 'Please provide your name and select a model.';
    feedback.classList.remove('hidden');
    feedback.classList.add('text-red-600');
    return false;
  }

  feedback.classList.remove('text-red-600');
  feedback.classList.remove('hidden');
  feedback.textContent = `Thanks, ${name}! We'll email you a quote shortly.`;
  form.reset();
  return false;
}
