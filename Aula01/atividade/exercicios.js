import promptSync from "prompt-sync";
const prompt = promptSync();

// Questão 10 – Eduardo e a Velocidade da Viagem 
// Enunciado: Eduardo percorreu três trechos com distâncias e tempos diferentes. 
// Quer calcular a velocidade média de cada trecho e a média geral.

const tempo01 = Number(prompt("Digite o primeiro tempo "))
const distancia01 = Number(prompt("Digite a primeira distancia "))

const tempo02 = Number(prompt("Digite o segundo tempo "))
const distancia02 = Number(prompt("Digite a primesehundaira distancia "))

const tempo03 = Number(prompt("Digite o terceiro tempo "))
const distancia03 = Number(prompt("Digite a terceira distancia "))

const media01 = distancia01/tempo01;
const media02 = distancia02/tempo02;
const media03 = distancia03/tempo03;

const mediaGeral = (media01+media02+media03) /3;
console.log(`trecho01: ${media01.toFixed(2)} Km/h`);
console.log(`trecho02: ${media02.toFixed(2)}`);
console.log(`trecho03: ${media03.toFixed(2)}`);
console.log(`Media Geral: ${mediaGeral.toFixed(2)}`);
 