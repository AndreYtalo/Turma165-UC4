//Superclasse ou classe pai

export class Pessoa{
    #nome;
    #dataNascimento
    #genero

    constructor(nome, dataNascimento, genero){
        this.#nome = nome;
        this.#dataNascimento = dataNascimento;
        this.#genero = genero;
        Object.freeze(this);
    }

    get getNome(){}
}