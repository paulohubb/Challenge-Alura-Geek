import { services } from "../js/services.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nome = document.querySelector("[data-nome]").value;
  const url = document.querySelector("[data-url]").value;
  const preco = document.querySelector("[data-preco]").value;
  const id = document.querySelector("[data-id]").value;

  services
    .criarProduto(nome, url, preco, id)
    .then((resposta) => {
      window.location.pathname = "/produtos.html";
      console.log(resposta);
    })
    .catch((error) => {
      console.log(error);
    });
});
