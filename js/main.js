/* main.js — site-wide interactions */

// ── NAV SCROLL EFFECT ──
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });


// ── MOBILE NAV TOGGLE ──
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });

  // Close on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('open');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}


// ── SCROLL REVEAL (lightweight, no library) ──
function revealOnScroll() {
  const reveals = document.querySelectorAll('.product-card, .banner-card, .blurb-inner');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    observer.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', revealOnScroll);
