/**
 * Exercicio de fixação - POO
 */

//class modelo
class Conta {
    //atributos
    constructor(numero, titular, saldo) {
        this.numero = numero
        this.titular = titular
        this.saldo = saldo
    }
    //metodo
    exibirContaPoupanca(){
        console.log("__--__--__--__--__--__--__--__--__--__--__--")
        console.log(`Titular: ${this.getTitular()} CC: ${this.getNumero()}`)
    }
    
    exibirSaldo() {
        console.log(`Saldo: ${this.saldo.toFixed(2)}`)
    }
    depositar(valor) {
        this.saldo += valor
        console.log(`Credito de ${valor.toFixed(2)}`)
    }
    sacar(valor) {
        //validação
        if (valor <= this.saldo) {
            this.saldo -= valor
            console.log(`Debito de ${valor.toFixed(2)}`)
        } else {
            console.log("Saque n permitido")
        }
    }
}

//_______________________________________________________________________________
//class extendida
class ContaPoupaca extends Conta {
    //atributos
    constructor(numero, titular, saldo) {
        super(numero, titular, saldo)

    }
    //metodo
    exibirSaldoPoupanca() {
        console.log(`Saldo: ${this.saldo.toFixed(2)}`)
    }
}


/*****Clientes ****/

console.log("")
console.log("########:::::'###::::'##::: ##:'##:::'##: ")
console.log("##.... ##:::'## ##::: ###:: ##: ##::'##:: ")
console.log("##:::: ##::'##:. ##:: ####: ##: ##:'##::: ")
console.log("########::'##:::. ##: ## ## ##: #####:::: ")
console.log("##.... ##: #########: ##. ####: ##. ##::: ")
console.log("##:::: ##: ##.... ##: ##:. ###: ##:. ##:: ")
console.log("########:: ##:::: ##: ##::. ##: ##::. ##: ")
console.log("........:::..:::::..::..::::..::..::::..::")
console.log("------------------------------------------")

let cc1 = new Conta(100000, "Leandro Ramos", 1000000,)
console.log(`Cliente: ${cc1.titular} conta: ${cc1.numero}`)
cc1.exibirSaldo()
cc1.depositar(500)
cc1.exibirSaldo()
cc1.sacar(2000)
cc1.exibirSaldo()
cc1.sacar(9000000)
cc1.exibirSaldo()
console.log("")
console.log("----------------------------------------------")

let cp1 = new ContaPoupaca(10, "Leandro Ramos", 100)
console.log(`Cliente: ${cp1.titular} conta: ${cp1.numero}`)
cp1.exibirSaldoPoupanca()
cp1.depositar(200)
cp1.exibirSaldoPoupanca()
cp1.exibirContaPoupanca()



