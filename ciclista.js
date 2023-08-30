const prompt = require("prompt-sync")();

const distancia = Number(prompt("Distância Percorrida:"));

const kmPercorrido = Math.floor(distancia / 1000);
const metrosPercorrido = distancia % 1000;

console.log(`Distancia percorrida (m): ${distancia}`);
console.log(`Equivale a ${kmPercorrido}km e ${metrosPercorrido}m`);
