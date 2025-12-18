// definição de classe Usuario
 
 export default class Usuario {
    //Atributos para classe de Usuario
    //nome, idade, genero, telefone, email, cpf, cep, rg, endereço
    #nome;
    #idade;
    #genero;
    #telefone;
    #email;
    #cpf;
    #cep;
    #rg;
    #endereco;

    //Método construtor - É um  especial que é chamado/evocado

    constructor(nome, idade, genero, telefone, email, cpf, cep, rg, endereco){
        this.#nome = nome;
        this.#idade = idade;
        this.#genero = genero;
        this.#telefone = telefone;
        this.#email = email;
        this.#cpf = cpf;
        this.#cep = cep;
        this.#rg = rg;
        this.#endereco = endereco;
    }

    get nome(){
        return this.#nome
    }
    set nome(nome){
        this.#nome = nome;
    }

    get idade(){
        return this.#idade
    }
    set idade(idade){
        this.#idade = idade;
    }

    get genero(){
        return this.#genero
    }
    set genero(genero){
        this.#genero = genero;
    }

    get telefone(){
        return this.#telefone
    }
    set telefone(telefone){
        this.#telefone = telefone;
    }

    get email(){
        return this.#email
    }
    set email(email){
        this.#email = email;
    }

    get cpf(){
        return this.#cpf
    }
    set cpf(cpf){
        this.#cpf = cpf;
    }

    get cep(){
        return this.#cep
    }
    set cep(cep){
        this.#cep = cep;
    }

    get rg(){
        return this.#rg
    }
    set rg(rg){
        this.#rg = rg;
    }

    get endereco(){
        return this.#endereco
    }
    set endereco(endereco){
        this.#endereco = endereco;
    }



    mostrarDados() {
        return `
      Nome: ${this.#nome}
      Idade: ${this.#idade}
      Gênero: ${this.#genero}
      Telefone: ${this.#telefone}
      Email: ${this.#email}
      CPF: ${this.#cpf}
      CEP: ${this.#cep}
      RG: ${this.#rg}
      Endereço: ${this.#endereco}
      `;
      }
     
      
    
      
    
}