/**
 * funções com parametros ou retorno
 */

//sintax comum
function somar(num1, num2){
    return (console.log(num1 + num2))
}

//para executar funções, devemos passar dois valores
somar(2, 5)

//função atribuida
let somarAtribuida = function(num1, num2){
    return (console.log(num1 + num2))
}

somarAtribuida(5, 5)

//arrow function
let somarAF = (num1, num2) => {
    return (console.log(num1 + num2))
}
somarAF(2, 2)
