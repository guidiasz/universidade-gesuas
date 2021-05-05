const navToggle = document.querySelector('.cabecalho__hamburger');
const links = document.querySelector(".cabecalho__nav");

navToggle.addEventListener('click', function () {
  links.classList.toggle('cabecalho__nav--ativo');
  navToggle.classList.toggle('cabecalho__hamburger--ativo');
});
