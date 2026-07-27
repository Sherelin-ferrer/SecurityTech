// ============ Reloj en vivo del "monitor" ============
function updateClock(){
  const el = document.getElementById('live-clock');
  if(!el) return;
  const now = new Date();
  const hh = String(now.getHours()).padStart(2,'0');
  const mm = String(now.getMinutes()).padStart(2,'0');
  const ss = String(now.getSeconds()).padStart(2,'0');
  el.textContent = `${hh}:${mm}:${ss}`;
}
updateClock();
setInterval(updateClock, 1000);

// ============ Año dinámico en el footer ============
const yearEl = document.getElementById('year');
if(yearEl){ yearEl.textContent = new Date().getFullYear(); }

// ============ Menú móvil ============
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

if(navToggle && mainNav){
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.classList.toggle('is-active', isOpen);
  });

  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.classList.remove('is-active');
    });
  });
}

// ============ Reveal suave al hacer scroll ============
const revealTargets = document.querySelectorAll('.cam-tile, .ideal-card, .stat, .manifest-list');
if('IntersectionObserver' in window && revealTargets.length){
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealTargets.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(14px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
    io.observe(el);
  });
}
