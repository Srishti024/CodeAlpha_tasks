// ===== Scroll Reveal Animation =====
const sections = document.querySelectorAll('.section');

function revealSections() {
  const triggerBottom = window.innerHeight * 0.85; // 85% viewport height
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add('show');
    } 
  });
}

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections); // run on page load

// ===== Highlight Active Nav Link on Scroll =====
const navLinks = document.querySelectorAll('.nav-link');

function highlightNav() {
  let scrollPos = window.scrollY + 200; // offset for header height
  sections.forEach(section => {
    const id = section.getAttribute('id');
    const link = document.querySelector(`nav a[href="#${id}"]`);
    if (section.offsetTop <= scrollPos && 
        section.offsetTop + section.offsetHeight > scrollPos) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', highlightNav);

// ===== Smooth Scrolling (optional polyfill for older browsers) =====
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
