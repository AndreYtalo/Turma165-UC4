import { Mamifero } from "./Mamifero.js";
import { Ave } from "./Ave.js";
import { Papagaio } from "./Papagaio.js";

const tigre = new Mamifero("Tigre", 5, "Listrado", "Floresta");
const canario = new Ave("Canário", 1, "Pequeno", "Curto");
const papagaio = new Papagaio("Louro", 3, "Curvo", "Longo");

console.log(tigre.getInfo());
console.log(tigre.emitirSom());

console.log("------------");

console.log(canario.getInfo());
console.log(canario.emitirSom());

console.log("------------");

console.log(papagaio.getInfo());
console.log(papagaio.emitirSom());

console.log(papagaio.aprenderPalavra("Olá"));
console.log(papagaio.aprenderPalavra("Tudo bem?"));
console.log(papagaio.aprenderPalavra("Olá")); // duplicada

console.log(papagaio.conversa());
console.log(papagaio.conversa());
