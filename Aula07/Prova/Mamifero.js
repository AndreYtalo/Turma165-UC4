import { Animal } from "./Animal.js";

export class Mamifero extends Animal {
  #tipoPelo;
  #habitat;

  constructor(nome, idade, tipoPelo, habitat) {
    super(nome, idade);
    this.#tipoPelo = tipoPelo;
    this.#habitat = habitat;
  }

  emitirSom() {
    return "O mamífero ruge ou grunhe.";
  }

  getInfo() {
    return `Nome: ${this.nome}, Idade: ${this.idade}, Tipo de pelo: ${this.#tipoPelo}, Habitat: ${this.#habitat}`;
  }
}
