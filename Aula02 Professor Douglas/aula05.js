// let frutas = [];
// frutas.push("banana", "maça", "pêssego");

// console.log(frutas.length); // 3




// metodo map
// let carros = [1,2,3,4,5,6]
    
// let resultado = carros.map(n => n*2)
// console.log(resultado);
// ______________________________________________
// metodo filter
// let numeros = [23,56,212,78,34,2,7]
// let pares = numeros.filter(n => n % 2 === 0)

// console.log(pares);
// ______________________________________________
// metodo Find
// let numeros = [56,212,78,34,2,7]
// let resultado = numeros.find(n => n < 10)
// console.log(resultado);
// ______________________________________________
// metodo findIndex
// let alunos = ['Vinicius', 'André', 'Dennis', 'Davi' ]
// let indice = alunos.findIndex(n => n === 'Dennis')
// console.log(alunos[3]);
// ______________________________________________
// método some
// let idade = [15, 30, 45, 180, 1, 16, 90]

// let maiorIdade = idade.some(i => i >= 18)

// console.log(maiorIdade);
// ______________________________________________
// método every
// let notas = [10, 8, 9, 12 - 5, 7]
// let todasAsnotas = notas.every(n => n >= 7)
// console.log(todasAsnotas);
// ______________________________________________
// método push: adiciona no final
// let notas = [10, 8, 9, 12, 5, 7]
// ______________________________________________
// método pop: remove no final
// notas.push(5)
// console.log(notas);
// notas.pop()
// console.log(notas);
// ______________________________________________
// método shiift: remove o inicio
// método unshif: adiciona no começo
// ______________________________________________
// método sort: ordem crescente
// let valores = [6, 5, 4, 3, 2, 1];
// valores.unshift(7)
// console.log(valores);
// delete valores[4]
// console.log(valores)
// ______________________________________________
// método reduce: soma ou multiplica
// let valores = [6, 5, 4, 3, 2, 1];
// let soma = valores.reduce(function(total, n){
//     return total + n;
// },)
// console.log(soma);
// let soma2 = valores.reduce((total,n) => total + n,0)
// console.log(soma2);
// ______________________________________________
// ATIVIDADE
let valores = [6, 5, 4, 3, 2, 1]
let quadrado = valores.map(n => n **2)
console.log();

let valores2 = [6, 5, 4, 3, 2, 1]
let resultado2 = valores.map((i) => i % 2==0 ? i * 2 : i)
console.log(resultado2);








