export default class ContaBancaria {
    #saldo;
    #titular;
    #numero;
    #agencia;
  
    constructor(agencia, numeroConta, titular, saldoInicial = 0) {
      this.#agencia = agencia;
      this.#numero = numeroConta;
      this.#titular = titular;
      this.#saldo = saldoInicial;
  
      // Impede alteração direta dos dados
      Object.freeze(this);
    }
  
    // ===== GETTERS =====
    get agencia() {
      return this.#agencia;
    }
  
    get numero() {
      return this.#numero;
    }
  
    get titular() {
      return this.#titular;
    }
  
    get saldo() {
      return this.#saldo;
    }
  
    // ===== MÉTODOS =====
  
    sacar(valor) {
      if (valor > 0 && this.getSaldo >= valor){
        this.#saldo -= valor;
      }else if(valor<=0){
        console.log('Não é possivel sacar valores menores ou igual a 0');
      }else{
        console.log('saldo insuficiente!');
        
      }
  
    }

    depositar(valor) {
        if (valor <= 0) {
            this.#saldo += valor;
        }else{
            console.log('Depósito invalido');
            
        }
    
       
       
      }
  
    mostrarDados() {
      return `
  Agência: ${this.#agencia}
  Conta: ${this.#numero}
  Titular: ${this.#titular}
  Saldo: R$ ${this.#saldo}
  `;
    }
  }
  