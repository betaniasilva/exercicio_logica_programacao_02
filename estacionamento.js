const prompt = require("prompt-sync")();

const entrada = Number(prompt("Hora da entrada:"));
const saida = Number(prompt("Hora da Saída:"));
const valor = Number(prompt("Valor da hora:"));

const horaEntrada = Math.floor(entrada);
const horaSaida = Math.ceil(saida);

const totalHora = Math.abs(horaEntrada - horaSaida);
const valorPago = totalHora * valor;

console.log(`Cobrar: ${totalHora} hora(s).`);
console.log(`Valor: R$: ${valorPago}.00`);
