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

// "O que aconteceu com você?": mostra só a orientação da opção escolhida.
var botoesEscolha = document.querySelectorAll(".escolha");
botoesEscolha.forEach(function (botao) {
  botao.addEventListener("click", function () {
    document.querySelectorAll(".resposta").forEach(function (r) { r.hidden = true; });
    botoesEscolha.forEach(function (b) { b.classList.remove("ativa"); });
    botao.classList.add("ativa");
    var resposta = document.getElementById(botao.getAttribute("data-alvo"));
    resposta.hidden = false;
    resposta.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
});
