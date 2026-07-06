const produto = {
    nome: "Notebook",
    preco: 3500,
    estoque: 10,
    marca: "tigrao"
};

console.log("A quantidade do estoque é: " + produto.estoque);

console.log("Ganho R$ " + produto.preco + " - 1 estoque");
console.log("Ganho R$ " + produto["preco"] + " - 1 estoque");

produto.estoque = 8;

console.log("A quantidade do estoque mudou para: " + produto.estoque);