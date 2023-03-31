import { services } from "../js/services.js";

const novoProduto = (name, imgUrl, price, id, alt) => {
    const card = document.createElement("div");
    const content = `
    <div class="cards produto-box">
                <img src="${imgUrl}" alt="${alt}">
                <div class="edit-del">
                    <button id="del" class="btn-del"><img src="img/trash3.svg" alt="apagar item"></button>
                    <button class="btn-edit"><img src="img/pencil.svg" alt="editar item"></button>
                </div>
                <p>${name}</p>
                <span>${price}</span>
                <p>${id}</p>
            </div>
`
    card.innerHTML = content;
    return card;
}

const produtos = document.querySelector("[data-products]");

const render = async () => {
    try {
      const listaProdutos = await services.listaProdutos();
      listaProdutos.forEach((elemento) => {
        produtos.appendChild(
          novoProduto(
            elemento.name,
            elemento.price,
            elemento.imgUrl,
            elemento.id,
            elemento.alt
          )
        );
      });
    } catch (erro) {
      console.log(erro);
    }
  };
  
  render();
