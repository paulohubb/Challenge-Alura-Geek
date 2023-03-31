import { services } from "../js/services.js";

const getURL = new URL(window.location);
const id = getURL.searchParams.get("id");

const imagem = document.querySelector("[data-url]");
const nome = document.querySelector("[data-nome]");
const preco = document.querySelector("[data-preco]");

services.pegarProduto(id).then((dados) =>
 {
  imagem.setAttribute("src", dados.imgUrl);
  nome.value = dados.name;
  preco.value = dados.price;
});

const formulario = document.querySelector("[data-form]");
formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  services
    .editarProduto(
      id,
      nome.value,
      preco.value,
    )
    .then(() => {
      window.location.href = "../produtos.html";
    });
});
