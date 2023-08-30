const prompt = require("prompt-sync")();

const total = Number(prompt("Numero total de ovos:"));
const caixa = Number(prompt("Numero de ovos na caixa:"));

const numeroC = Math.floor(total / 12);
const sobra = total % 12;

console.log(`Quantidade de Ovos: ${total}`);
console.log(`Nº de caixas (dúzia): ${numeroC}`);
console.log(`Sobraram: ${sobra} unidades`);
