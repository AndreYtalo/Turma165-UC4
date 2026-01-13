import { Animal } from "./Animal.js";

export class Ave extends Animal {
  #tipoBico;
  #capacidadeVoo;

  constructor(nome, idade, tipoBico, capacidadeVoo) {
    super(nome, idade);
    this.#tipoBico = tipoBico;
    this.#capacidadeVoo = capacidadeVoo;
  }

  emitirSom() {
    return "A ave canta ou pia.";
  }

  getInfo() {
    return `Nome: ${this.nome}, Idade: ${this.idade}, Tipo de bico: ${this.#tipoBico}, Capacidade de voo: ${this.#capacidadeVoo}`;
  }
}
