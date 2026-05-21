const botaoMenu = document.querySelector('.menu-botao');
const menu = document.querySelector('.menu');
const links = document.querySelectorAll('.menu a');

botaoMenu.addEventListener('click', () => {
  menu.classList.toggle('ativo');
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('ativo');
  });
});

const cabecalho = document.querySelector('.cabecalho');

window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    cabecalho.style.boxShadow = '0 10px 30px rgba(47, 93, 80, 0.10)';
  } else {
    cabecalho.style.boxShadow = 'none';
  }
});
