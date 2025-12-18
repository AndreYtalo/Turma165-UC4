import PromptSync from "prompt-sync";
const prompt = PromptSync();

import ContaBancaria from "./ContaBancaria.js";

function iniciarAplicacao() {
  console.clear();
  console.log("Bem-vindo ao Banco JS! \n");

  const titular = prompt("Informe o nome do titular da conta: ");
  const agencia = prompt("Informe a agência: ");
  const numeroConta = prompt("Informe o número da conta: ");
  const saldoInicial = Number(prompt("Informe o saldo inicial: "));

  
  const conta = new ContaBancaria(
    agencia,
    numeroConta,
    titular,
    saldoInicial
  );

  let opcao;
  let valor = 0;

  do {
    mostrarMenu();
    opcao = parseInt(prompt("Opção: "));

    switch (opcao) {
      case 1:
        console.log(`Saldo atual: R$ ${conta.saldo}`);
        break;

      case 2:
        valor = parseFloat(prompt("Valor para depósito: "));
        console.log(conta.depositar(valor));
        break;

      case 3:
        valor = parseFloat(prompt("Valor para saque: "));
        console.log(conta.sacar(valor));
        break;

      case 0:
        console.log("Obrigado por usar o Banco JS!");
        break;

      default:
        console.log("Opção inválida");
    }

  } while (opcao !== 0);
}

function mostrarMenu() {
  console.log("\nEscolha uma opção");
  console.log("1 - Ver saldo");
  console.log("2 - Depositar");
  console.log("3 - Sacar");
  console.log("0 - Sair");
}


iniciarAplicacao();


