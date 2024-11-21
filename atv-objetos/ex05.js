const produto = {
    nome: "Creme de pentear",
    preco: 14,
    categoria: "Cosmésticos"

};
for (let propriedade in produto) {
    console.log(`${propriedade}: ${produto[propriedade]}`);
  }