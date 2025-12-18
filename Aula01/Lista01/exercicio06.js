import PromptSync from "prompt-sync";
const prompt = PromptSync()


const preco = Number(prompt("Digite um valor02"))

const resultado = preco - (preco * 10/100);

console.log(`Desconto: ${resultado}`);