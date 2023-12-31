/**
 * Exercício de fixação - POO
 */

const read = require('readline-sync')
const colors = require('colors')

//modelo
class conta{
    //atributos
    constructor(numero, titular, saldo){

        let _numero = numero 
        this.getNumero = () => {
            return _numero
        }
        this.setNumero =(novoNumero) => {
            _numero = novoNumero
        }

        let _titular = titular 
        this.getTitular = () => {
            return _titular
        }
        this.setTitular =(novoTitular) => {
            _titular = novoTitular
        }

        let _saldo = saldo 
        this.getSaldo = () => {
            return _saldo
        }
        this.setSaldo =(novoSaldo) => {
            _saldo = novoSaldo
        }


    }

	//ações
    exibirSaldo() {
        console.log(`O saldo da conta ${this.getTitular()} é R$ ${this.getSaldo().toFixed(2)}.`)
    }

    depositar(valor) {
        this.setSaldo (this.getSaldo() + valor)
        console.log(`Crédito de R$ ${valor.toFixed(2)}`)
    }

    sacar(valor) {
        if (valor <= this.getSaldo()) {
            this.setSaldo (this.getSaldo()- valor)
            console.log(`Débito de R$ ${valor.toFixed(2)}`)
        } else {
            console.log("Operação negada! Saldo insuficiente !")
        }
    }

    pix(valor, destino) {
        if (valor <= this.getSaldo()) {
            this.setSaldo (this.getSaldo()- valor)
            destino.depositar(valor)
            console.log(`PIX R$ ${valor.toFixed(2)} para ${destino.getTitular()} realizado com sucesso.`)
        } else {
            console.log("Operação negada! Saldo insuficiente.")
        }
    }
}

//poupança
class ContaPoupanca extends conta {
	//atributos
    constructor(numero, titular, saldo) {
        super(numero, titular, saldo)
    }
 	//metodo
    exibirSaldoPoupanca() {
        console.log(`O saldo da conta Poupança do ${this.getTitular()} é R$ ${this.getSaldo().toFixed(2)}.`)
    }
}

//clientes

//criação Poupança Vaamond
let cp1 = new ContaPoupanca(10,"Robson Vaamond", 6000)
console.log(`Cliente: ${cp1.getTitular()} | conta: ${cp1.getNumero()}`)
cp1.exibirSaldoPoupanca()
console.log()
//criação Poupança Sirlene
let cp2 = new ContaPoupanca(20,"Sirlene Aparecida", 2000)
console.log(`Cliente: ${cp2.getTitular()} | conta: ${cp2.getNumero()}`)
cp2.exibirSaldoPoupanca()
console.log()
//criação Poupança Leandro
let cp3 = new ContaPoupanca(30,"Leandro Ramos", 3000)
console.log(`Cliente: ${cp3.getTitular()} | conta: ${cp3.getNumero()}`)
cp3.exibirSaldoPoupanca()
console.log()

//criação Vaamond
let cc1 = new conta(1, "Robson Vaamond", 2900)
console.log(`Cliente: ${cc1.getTitular()} | conta: ${cc1.getNumero()}`)
cc1.exibirSaldo()
cc1.depositar(1000)
cc1.exibirSaldo()
cc1.sacar(20)
cc1.exibirSaldo()
cc1.pix(300, cp1) 
console.log()

//criação Sirlene
let cc2 = new conta (2, "Sirlene Aparecida", 3000)
console.log(`Cliente: ${cc2.getTitular()} | conta: ${cc2.getNumero()}`)
cc2.exibirSaldo()
cc2.depositar(2000)
cc2.exibirSaldo()
cc2.sacar(20)
cc2.exibirSaldo()
console.log()

let cc3 = new conta (3, "Leandro Ramos", 1000)
console.log(`Cliente: ${cc3.getTitular()} | conta: ${cc3.getNumero()}`)
cc3.exibirSaldo()
cc3.depositar(2000)
cc3.exibirSaldo()
cc3.sacar(20)
cc3.exibirSaldo()
cc3.pix(2500, cc2) 
cc3.pix(100, cp1) 

console.log()
console.log("Extrato:")
console.log()
console.log(`Cliente: ${cc1.getTitular()} | conta: ${cc1.getNumero()}`)
cc1.exibirSaldo()
console.log(`Cliente: ${cp1.getTitular()} | conta: ${cp1.getNumero()}`)
cp1.exibirSaldo()

console.log(`Cliente: ${cc2.getTitular()} | conta: ${cc2.getNumero()}`)
cc2.exibirSaldo()
console.log(`Cliente: ${cp2.getTitular()} | conta: ${cp2.getNumero()}`)
cp2.exibirSaldo()

console.log(`Cliente: ${cc3.getTitular()} | conta: ${cc3.getNumero()}`)
cc3.exibirSaldo()
console.log(`Cliente: ${cp3.getTitular()} | conta: ${cp3.getNumero()}`)
cp3.exibirSaldo()