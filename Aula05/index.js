import { SistemaAzar } from "./SistemaAzar.js";
import { Dado } from "./Dado.js";
import { Jogador } from "./Jogador.js";
import PromptSync from "prompt-sync";

const prompt = PromptSync();

// let jogador = new Jogador('André', 1)
// let dado = new Dado();
// let trigrinho = new SistemaAzar(dado, jogador);
// trigrinho.verificarGanhador();


function iniciarSistema() {
    let novoTurno = ''; //variável de controle - (loop)
    console.log('Bem-vindo ao undefined165');
    let nome = prompt('Informe o seu nome/Nickname:  ');
    do {
        let palpite = parseInt(prompt('Digite um valor de 1 a 6:  '));
        if (palpite < 1 || palpite > 6) {
            console.log('palpite inválido! informe novamente.');
        }else{
            let lance = new Dado(); //instancia o objeto da classe Dado
            let jogador = new Jogador(nome.palpite); //instancia o objeto de classe jogador
            const trigrinho = new SistemaAzar(lance, jogador); //instancia o objeto de classe SistemaAzar
            trigrinho.verificarGanhador(); //acione o método verificar ganhador da classe SistemaAzar
            novoTurno = prompt('Digite S para um novo palpite ou N para encerrar:  ');
        }
        

    } while (novoTurno.toUpperCase() !== 'N');
    console.log('Obrigado por investir seu dinheiro conosco!');

    
}

iniciarSistema()