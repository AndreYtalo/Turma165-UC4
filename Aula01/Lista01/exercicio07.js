import PromptSync from "prompt-sync";
const prompt = PromptSync()


const metro = Number(prompt("Digite um valor02"))

const resultado = metro * 100;

console.log(`O valor convertido do metro para centimetro é igual a  ${resultado}`);