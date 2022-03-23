/*Navegador ativo*/

const links = document.querySelectorAll(".header-menu a");

links.forEach((link) => {
  if (location.href.includes(link.href)) {
    link.classList.add("ativo");
  }
});

// Ativar Items do Orçamento

const parametros = new URLSearchParams(location.search);

parametros.forEach((parametro) => {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
});

// Perguntas Frequentes

const perguntas = document.querySelectorAll(".perguntas button");

perguntas.forEach((pergunta) => {
  pergunta.addEventListener("click", (event) => {
    const pergunta = event.currentTarget;
    const controle = pergunta.getAttribute("aria-controls");
    const resposta = document.getElementById(controle);
    resposta.classList.toggle("ativo");
    pergunta.setAttribute(
      "aria-expanded",
      resposta.classList.contains("ativo")
    );
  });
});

// Galeria de bicicletas

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

galeria.forEach((foto) => {
  foto.addEventListener("click", (foto) => {
    if (matchMedia("(min-width: 1000px)").matches) {
      galeriaContainer.prepend(foto.currentTarget);
    }
  });
});

// Simple anime

if (window.SimpleAnime) {
  new SimpleAnime();
}
