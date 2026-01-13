export class Animal {
    #nome;
    #idade;
  
    constructor(nome, idade) {
      this.#nome = nome;
      this.#idade = idade;
    }
  
    get nome() {
      return this.#nome;
    }
  
    get idade() {
      return this.#idade;
    }
  
    emitirSom() {
      return "O animal emite um som genérico.";
    }
  
    getInfo() {
      return `Nome: ${this.#nome}, Idade: ${this.#idade}`;
    }
  }
  