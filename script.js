// ===== Seleção de elementos =====
const navItems = document.querySelectorAll('.nav-item');
const mobileBtn = document.querySelector('.mobile-btn');
const navList = document.querySelector('.nav-list');
const header = document.querySelector('header');

// ===== Menu Mobile =====
mobileBtn.addEventListener('click', () => {
  navList.classList.toggle('active');
});

// ===== Ativar item do menu =====
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navItems.forEach(el => el.classList.remove('active'));
    item.classList.add('active');
  });
});

// ===== Efeito ao rolar a página =====
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY - header.offsetHeight;

  if (scrollPosition <= 0) {
    header.style.boxShadow = 'none';
  } else {
    header.style.boxShadow = '5px 1px 5px rgba(0, 0, 0, 0.1)';
  }
});

// ===== ScrollReveal Animations =====
ScrollReveal().reveal('section', {
  duration: 2000,
  origin: 'left',
  distance: '20%',
});