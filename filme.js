const prompt = require("prompt-sync")();

const nome = prompt("Nome do filme:");
const duracao = Number(prompt("Duração do filme:"));

const hora = Math.floor(duracao / 60);
const minutos = duracao % 60;

if (minutos === 0) {
  console.log(`Tem duração de ${hora} horas.`);
} else {
  console.log(`O Filme ${nome}`);
  console.log(`Tem duração de ${hora} horas e ${minutos} minutos.`);
}
