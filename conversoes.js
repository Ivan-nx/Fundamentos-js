// tipos de dado
// booleanos 

// conversão implícita
const numero = 456;
const numeroString = "456";

console.log(numero == numeroString); // dois iguais compara os valores somente das variaveis
console.log(numero === numeroString); // tres iguais compara os valores e os tipos da variaveis

// concatenando as variaveis

const num = 456;
const numString = "456";
console.log(numero + numeroString); 

 //Number() é uma função podendo ser chamada na variavel ou no console.log


const num1 = 456;
const numString1 = Number("456");
console.log(num1 + Number(numString1)); 


//String() é uma função podendo ser chamada na variavel ou no console.log
let telefone = 12341234;
console.log("O telefone é" + String(telefone)); // opção 1

let telefone1 = 12341234;
console.log("O telefone é" + telefone1.toString());// opção 2


// conversão explicita

