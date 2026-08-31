
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

function closeMenu(){
  navLinks?.classList.remove('open');
  document.body.classList.remove('menu-open');
  menuBtn?.setAttribute('aria-expanded','false');
}
menuBtn?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  document.body.classList.toggle('menu-open', open);
  menuBtn.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', closeMenu));

// Active navigation state
const navTargets = [...document.querySelectorAll('main section[id]')];
const navAnchors = [...document.querySelectorAll('.nav-links a[href^="#"]')];
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      navAnchors.forEach(a => a.classList.toggle(
        'active',
        a.getAttribute('href') === `#${entry.target.id}`
      ));
    }
  });
},{rootMargin:'-35% 0px -55% 0px',threshold:0});
navTargets.forEach(section => sectionObserver.observe(section));

// Portfolio modal
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const modalClose = document.getElementById('modalClose');

document.querySelectorAll('[data-full]').forEach(el => {
  el.setAttribute('role','button');
  el.setAttribute('tabindex','0');
  const openProject = () => {
    modalImg.src = el.dataset.full;
    modalImg.alt = el.dataset.alt || 'Portfolio project';
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    modalClose.focus();
  };
  el.addEventListener('click', openProject);
  el.addEventListener('keydown', e => {
    if(e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openProject();
    }
  });
});
function closeModal(){
  modal.classList.remove('open');
  modalImg.src='';
  document.body.style.overflow='';
}
modalClose?.addEventListener('click', closeModal);
modal?.addEventListener('click', e => { if(e.target === modal) closeModal(); });
document.addEventListener('keydown', e => {
  if(e.key === 'Escape'){
    closeModal();
    closeMenu();
  }
});

// Portfolio filters
const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project[data-category]');
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-pressed','false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-pressed','true');
    const filter = btn.dataset.filter;
    projects.forEach(project => {
      project.hidden = !(filter === 'all' || project.dataset.category === filter);
    });
  });
});
filterButtons.forEach(btn => btn.setAttribute('aria-pressed', btn.classList.contains('active') ? 'true' : 'false'));

// Back to top
const backTop = document.getElementById('backTop');
window.addEventListener('scroll', () => {
  backTop?.classList.toggle('show', window.scrollY > 650);
},{passive:true});
backTop?.addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'}));
