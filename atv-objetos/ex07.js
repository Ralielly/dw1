const carrinho = {
    itens: [
      { nome: "Blusa", preco: 50 },
      { nome: "Calça", preco: 150 }
    ],
    calcularTotal: function() {
      return this.itens.reduce((total, item) => total + item.preco, 0);
    }
  };
  
  console.log(carrinho.calcularTotal());