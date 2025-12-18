// avidade de somar de 0 a 10
// _____________________________________________
// let soma = 0;

// for (let n = 1; n <= 10; n++ ){
//     soma += n;
// }
// console.log(soma);
// _____________________________________________
// atiidade numeros pares de 0 a 20
// for(let n = 1; n <= 20; n++){
//     if (n %2 === 0) {
//         console.log(n);
//     }
// }
// _____________________________________________
// atividade somar números ímpares de 0 a 50
// let soma = 0;

//  for(let n = 1; n <= 50; n++){
//      if (n % 2 !== 0) {
         
//         soma += n
//      }
// }
// console.log(soma);
// _____________________________________________
// let frutas = ['banana', 'manga', 'péra'];
// for(let f = 0; f < frutas.length; f++){
//     console.log(f, frutas[f]);
// }
// _____________________________________________
let numeros = [1,2,3,4,5,6,7,8,9,10];
let total = 0;
for(let f = 0; f < numeros.length; f++){
    total += numeros[f];
}
const media = total/(numeros.length)
console.log(`O total da soma é ${total} e sua média ${media}`);


