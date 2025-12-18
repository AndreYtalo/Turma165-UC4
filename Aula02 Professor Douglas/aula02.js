//let  x = 18;

//if(x < 18){
//console.log("não pode votar");



//}else{
//console.log("pode votar");

//}


//const nota = 8

//if(nota >=10 ){
//console.log("albert einstein");

//}else if(nota >= 8){
//console.log("aprovado acima da media");

//}else if(nota >= 7){
//console.log("aprovado na media");


//}else if(nota < 7){
//console.log("reprovado");

//}

//let nota1 = 6.1

//let nota2 = 6.5

//let media = (nota1+nota2)/2

//if(media >= 8 ){
//console.log("aprovado com louvor");

//}else if(media >=7 ){
// console.log("aprovado");

//}else if(media >= 3 || media >= 6){
// console.log("recuperação");

//}else{
//  console.log("reprovado");

//}

// const nota1 = Number(prompt("digite um numero "))
// const nota2 = Number(prompt("digite um numero"))



// if (nota1 <= 10 && nota2 <= 10) {
//     let media = (nota1 + nota2) / 2

//     if (media > 4 && nota1 > 0 && nota2 > 0) {
//         alert(`Sua nota foi ${media}` + "Aprovado")

//     } else if (media <= 3) {
//         alert(`Sua nota foi ${media}` + "Reprovado")
//     }
//     else if (media <= 4 && nota1 != 0 && nota2 != 0) {
//         alert(`Sua nota foi ${media}` + "Recuperação")
//     } else {
//         alert("Digite um numero válido")
//     }

// }
const peso = 95
const altura = 1.78

const imc = peso / (altura*altura)

 
 
if(imc < 18.5 ){
    console.log("Abaixo do peso" + imc.toFixed(2));
    
}else if(imc >= 18.5 && imc <= 24.9){
    console.log("Peso normal" + imc.toFixed(2));
    
}else if(imc >= 25 && imc <= 29.9){
    console.log("Sobrepeso" + imc.toFixed(2));
    

}else{
    console.log("Obesidade" + imc.toFixed(2));
}