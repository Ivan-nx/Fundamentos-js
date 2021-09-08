//  HOISTING" funções e variaveis são LISTADAS  no top do arquivo quando ele é executado.
 
console.log(apresentacao())
function apresentacao(){
    return "olá"
}

// Na forma de  expressões 
const soma = function(num1, num2) { return num1 + num2 }
console.log(soma(2, 2))