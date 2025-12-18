import PromptSync from "prompt-sync";
const prompt = PromptSync()

const valor01 = Number(prompt("Digite um valor01"))
const valor02 = Number(prompt("Digite um valor02"))

const resultado = (valor01 + valor02) / 2;

console.log(`resultado: ${resultado}`);