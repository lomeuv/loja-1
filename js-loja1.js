"use strict";
const itens = [
  {
    id: 1,
    nome: "camiseta",
    img: "image.jpg",
    quantidade: 0,
    price: 35.99,
  },
  {
    id: 2,
    nome: "calça",
    img: "image.jpg",
    quantidade: 0,
    price: 79.99,
  },
  {
    id: 3,
    nome: "Jaqueta",
    img: "image.jpg",
    quantidade: 0,
    price: 200.0,
  },
];

let iniciarloja = function iniarLoja() {
  var conteinerProdutos = document.getElementById("produtos");
  itens.map((val) => {
    conteinerProdutos.innerHTML +=
      `<div class= 'produto-solo'>
        <img src=" "` +
      val.img +
      `" />
        <p>` +
      val.nome +
      `</p>
        <span>` +
      val.price +
      `</span>
        <a key"` +
      val.id +
      `" href="#">Adicionar ao carrinho</a>
        </div>

      `;

    console.log(val.nome);
  });
};
iniciarloja();
