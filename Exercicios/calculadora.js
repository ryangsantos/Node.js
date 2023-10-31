/**
 * Esstudo das funções
 * calculadora
 */

const colors =  require ("colors")
const read = require('readline-sync')
 
console.clear()
console.log("Calculadora\n".bgRed)//quebra de linha 
console.log("1.somar")
console.log("2.subtrair")
console.log("3.multiplicar")
console.log("4.dividir")
console.log("5.porcentagem")
let opcao = Number(read.question("Digite a opcao desejada: ").replace(",","."))
//melhorando a experiencia do usuario (validação)
if (opcao < 1 || opcao > 5){
    console.log("opcao invalida")
    process.exit([0]) //encerra o aplicativo no console
}
console.clear()

let num1 = Number(read.question("Digite o primeiro valor: ").replace(",","."))
let num2 = Number(read.question("Digite o segundo valor: ").replace(",","."))
 
switch (opcao){
    case 1:
        //executar a função somar()
        somar(num1, num2)
        break
    case 2:
        //executar a função subitrair()
        subitrair (num1, num2)
        break
     case 3:
        //executar a função dividir()
        multiplicar (num1, num2)
        break
    case 4:
         //executar a função subitrair()
        dividir (num1, num2)
        break

    case 5:
         //executar a função subitrair()
        porcentagem (num1, num2)
        break
     default:
         console.log("opcao invalida")
        break
}


//função somar
function somar (num1, num2) {
    return console.log(`A soma de ${num1} + ${num2}  = ${num1 + num2}`)
}
//função subtrair
function subitrair (num1, num2) {
    return console.log(`A subitração de ${num1} - ${num2}  = ${num1 - num2}`)
}
//função dividir
function dividir (num1, num2) {
    if(num2 === 0){
        return console.log("Não e posssiver fazer divisão por zero!")
    }else{
        return console.log(`A divisão de ${num1} / ${num2}  = ${num1 / num2}`)
    }
    
}
//função multiplicar
function multiplicar (num1, num2) {
    return console.log(`A multiplicação de ${num1} * ${num2}  = ${num1 * num2}`)
}

//função porcentagem
function porcentagem (num1, num2) {
    return console.log(`A Porcentagem de ${num1}% de ${num2}  = ${num1 * num2/100}`)
}


