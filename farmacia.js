const prompt = require("prompt-sync")();

const produto = prompt("Nome do produto:");
const preco = prompt("Valor do produto:");
const quantidade = prompt("Quantidade:");

if (Number(quantidade) === 1) {
  console.log(`Na compra de ${quantidade} unidades, o total é ${preco}`);
} else {
  const promocao = Math.floor(preco) * quantidade;
  console.log(`Promoção de ${produto}`);
  console.log(
    `Na compra de ${quantidade} unidades, o total é R$ ${promocao}.00`
  );
}
