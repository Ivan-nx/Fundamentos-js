// == conparção implicita, comapra somente os valores.

const numero = 5
const texto = "5"

console.log(numero == texto)

// === comparações explicita, compara o tipo e valores.

const text = "6"
const num = 5


console.log(num === text)

// typeof , saber qual o valor da variavel.

console.log(typeof numero)
console.log(typeof texto)
console.log(typeof num)
console.log(typeof text)

// Boa pratica usar conversão explicita
Number()
String()

// ||: Operador “ou”, retorna true caso uma condição seja válida;

console.log( text || num )

//&&: Operador “e”, retorna true somente se todas as condições forem válidas;

console.log(text && num)

//!= e !==: Operadores “não igual” e “estritamente não igual”, utilizados para comparação,  == e === 

console.log(texto != numero)
console.log(texto !== numero)

//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators