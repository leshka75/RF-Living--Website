function toggleMenu() { document.getElementById('mobileMenu').classList.toggle('open'); }
function closeMenu() { document.getElementById('mobileMenu').classList.remove('open'); }

// Navbar scroll effect
window.addEventListener('scroll', function () {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
});

// Contact form
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = 'Inquiry Sent! We\'ll be in touch soon ✓';
  btn.style.background = 'linear-gradient(135deg, #52B788, #40916C)';
  btn.disabled = true;
}
