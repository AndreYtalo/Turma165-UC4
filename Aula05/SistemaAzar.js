import { Dado } from "./Dado.js";
import { Jogador } from "./Jogador.js";
export class SistemaAzar{
    #dado;
    #jogador;

    constructor(dado, jogador){
        if(dado instanceof Dado && jogador instanceof Jogador){
            this.#dado = dado
            this.#jogador = jogador
        }
        Object.freeze(this);

        
    }

    set setDado(dado){
        this.#dado = dado
    }

    get getDado(){
       return this.#dado;
    }
//==============================================
    set setJogador(jogador){
        this.#jogador = jogador
    }

    get getJogador(){
       return this.#jogador;
    }

    verificarGanhador() {
        if (this.#dado.getFace === this.#jogador.getPalpite) {
            console.log(`🎉 ${this.#jogador.getNome} GANHOU!`);
            console.log(`Palpite: ${this.#jogador.getPalpite}`);
            console.log(`Face do dado: ${this.#dado.getFace}`);
        } else {
            console.log(`😢 ${this.#jogador.getNome} PERDEU!`);
            console.log(`Palpite: ${this.#jogador.getPalpite}`);
            console.log(`Face do dado: ${this.#dado.getFace}`);
        }
    }
    
}