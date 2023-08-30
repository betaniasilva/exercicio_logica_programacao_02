const prompt = require("prompt-sync")();

const destino = prompt("Destino: ");
const nDias = Number(prompt("Número de dias: "));
const nHoras = Number(prompt("Número de horas: "));

const totalHoras = nDias * 24 + nHoras;

console.log(`A viagem para ${destino} dura ${totalHoras} horas.`);
