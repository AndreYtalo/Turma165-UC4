import { Ave } from "./Ave.js";

export class Papagaio extends Ave {
  #vocabulario;

  constructor(nome, idade, tipoBico, capacidadeVoo) {
    super(nome, idade, tipoBico, capacidadeVoo);
    this.#vocabulario = [];
  }

  // Sobrescrita do método
  emitirSom() {
    return "O papagaio imita sons e tenta falar palavras!";
  }

  aprenderPalavra(palavra) {
    if (!palavra || palavra.trim() === "") {
      return "A palavra não pode ser vazia.";
    }

    if (this.#vocabulario.includes(palavra)) {
      return `A palavra "${palavra}" já foi aprendida.`;
    }

    this.#vocabulario.push(palavra);
    return `O papagaio aprendeu a palavra: "${palavra}"`;
  }

  conversa() {
    if (this.#vocabulario.length === 0) {
      return "O papagaio ainda não aprendeu nenhuma palavra.";
    }

    const indiceAleatorio = Math.floor(
      Math.random() * this.#vocabulario.length
    );

    return `🦜 Papagaio diz: "${this.#vocabulario[indiceAleatorio]}"`;
  }
}
