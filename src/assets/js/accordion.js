const accordions = document.querySelectorAll('.conteudo__accordion');

accordions.forEach(function (accordion) {

  accordion.addEventListener('click', function () {
    this.classList.toggle('active');

    const painel = this.nextElementSibling;
    if (painel.style.maxHeight) {
      painel.style.maxHeight = null;
    } else {
      painel.style.maxHeight = painel.scrollHeight + 'px';
    }
  });

});
