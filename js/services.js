// produtos
const listaProdutos = () =>
fetch("produtos.html", {
    headers: {
    "Access-Control-Allow-Origin": "*",
    mode: "cors"},
})
  .then((res) => res.json())
  .catch((error) => console.log(error));

    
const pegarProduto = (id) => {
    return fetch(`produtos.html/${id}`).then((res) => {
      return res.json();
    });
};

// criar um novo produto
const criarProduto = (name, imgUrl, price, id) => {
  return fetch("produtos.html", {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      datatype: 'application/json',
    },
    body: JSON.stringify({
      name,
      imgUrl,
      price,
      id
    }),
  }).then((res) => {
    if (res.ok) {
      return res.body;
    }
    throw new Error("Não foi possível criar a porra produtoVNBJASKDB");
  });
};

// editar produto existente
const editarProduto = async (id, name, price, imgUrl) => {
  return fetch(`produtos.html/${id}`, {
    method: "PATCH",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      datatype: 'application/json',
    },
    body: JSON.stringify({
      name,
      price,
      imgUrl,
    }),
  })
    .then((res) => {
      return res.json();
    })
    .catch((error) => console.log(error));
};

// deletar um produto
const deletarProduto = async (id) => {
  return await fetch(`produtos.html/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      datatype: 'application/json',
    },
  });
};

// exportar services
export const services = {
  listaProdutos,
  pegarProduto,
  criarProduto,
  editarProduto,
  deletarProduto,
};
