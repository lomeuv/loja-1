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

iniciarloja = () => {
  var conteinerProdutos = document.getElementById("produtos");
  itens.map((val) => {
    console.log(val.nome);
    conteinerProdutos.innerHTML +=
      `

      <div class= 'produto-solo'>
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
  });
};
iniciarloja();
