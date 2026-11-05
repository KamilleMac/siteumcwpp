/*
  Autora: Kamille Machado
  UMC - Análise e Desenvolvimento de Sistemas
  Data: 25/10/2026
*/

// Faz os blocos aparecerem suavemente quando você rola a página.
// Se o navegador não suportar, tudo continua visível normalmente.

var blocos = document.querySelectorAll(".fato, .titulo-secao, .texto, .passo, .etapa, .dado, .termo, .sinal, .lista li, .regra, .caixa");

if ("IntersectionObserver" in window) {
  document.documentElement.classList.add("js");

  var vigia = new IntersectionObserver(function (itens) {
    itens.forEach(function (item) {
      if (item.isIntersecting) {
        item.target.classList.add("visivel");
        vigia.unobserve(item.target);
      }
    });
  }, { threshold: 0.15 });

  blocos.forEach(function (bloco) {
    bloco.classList.add("aparece");
    vigia.observe(bloco);
  });
}
