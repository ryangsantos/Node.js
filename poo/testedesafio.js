const color = require('colors')

class Conta {

    constructor(numero, nome, saldo) {
        this._numero = numero;
        this._nome = nome;
        this._saldo = saldo
    }

    //Encapsulamento das variaveis
    getNome() {
        return this._nome;
    }

    getSaldo() {
        return this._saldo;
    }

    getNumero() {
        return this._numero;
    }


    exibirSaldo() {
        console.log(`O saldo da conta do ${this.getNome()} é R$ ${this.getSaldo().toFixed(2)}.`);
    }

    depositar(valor) {
        this._saldo += valor;
        console.log(`A conta de ${this._nome} recebeu um valor de R$ ${valor.toFixed(2)}`);
    }

    sacar(valor) {
        if (valor <= this._saldo) {
            this._saldo -= valor;
            console.log(`A conta de ${this._nome} realizou um saque de R$ ${valor.toFixed(2)}`);
        } else {
            console.log(`Operação de saque da conta ${this._nome} no valor de R$ ${valor.toFixed(2)} negada! Saldo insuficiente`);
        }
    }

    pix(valor, conta) {
        if (valor <= this._saldo) {
            //retira o valor da conta manipulada
            this._saldo -= valor;
            //chama o metodo depositar para a conta selecionada
            conta.depositar(valor)
            console.log(`Transferencia por PIX para a conta ${conta.getNome()} com valor de R$ ${valor.toFixed(2)} efetuada com sucesso`)
        } else {
            console.log(`Operação de transferenia da conta ${this._nome} para ${conta.getNome()} no valor de R$ ${valor.toFixed(2)} negada! Saldo insuficiente`)
        }
    }

}



//cc2


class ContaPoupanca extends Conta {
    constructor(numero, nome, saldo) {
        super(numero, nome, saldo);
    }

    exibirSaldoPoupanca() {
        console.log(`Saldo da conta corrente de ${this.getSaldo()}`)
    }

}


//start
console.clear()
console.log("'########:::::'###::::'##::: ##::'######:::'#######::::: ")
console.log(" ##.... ##:::'## ##::: ###:: ##:'##... ##:'##.... ##::::")
console.log(" ##:::: ##::'##:. ##:: ####: ##: ##:::..:: ##:::: ##::::")
console.log(" ########::'##:::. ##: ## ## ##: ##::::::: ##:::: ##::::")
console.log(" ##.... ##: #########: ##. ####: ##::::::: ##:::: ##::::")
console.log(" ##:::: ##: ##.... ##: ##:. ###: ##::: ##: ##:::: ##::::")
console.log(" ########:: ##:::: ##: ##::. ##:. ######::. #######:::::")
console.log("--------------------------------CONTAS----------------------------------------")
//criando contas


const leandro = new Conta(1, "Leandro Ramos", 10000)
const sirlene = new Conta(2, "Sirlene Aparecida", 19000)
const robson = new Conta(3, "Robson Vaamond", 20000)
const robsonPoupanca = new ContaPoupanca (1, "Robson Vaamond", 1000)
const josePoupanca = new ContaPoupanca(2, "Jose de Assis", 30000)

console.log(`O Cliente: ${leandro.getNome()} da conta: ${leandro.getNumero()}`);
leandro.exibirSaldo();
leandro.depositar(300)
leandro.exibirSaldo()

console.log("------------------------------------------------------------------------")
console.log(`O Cliente: ${sirlene.getNome()} da conta: ${sirlene.getNumero()}`);
sirlene.exibirSaldo();
sirlene.sacar(400)
sirlene.sacar(1000000)
sirlene.exibirSaldo()

console.log("------------------------------------------------------------------------")
console.log(`O Cliente: ${robson.getNome()} da conta: ${robson.getNumero()}`);
robson.exibirSaldo();
robson.pix(600, robsonPoupanca)
robson.pix(600000000, josePoupanca)
robson.exibirSaldo()
robsonPoupanca.exibirSaldoPoupanca()
console.log()

console.log(`O Cliente: ${robsonPoupanca.getNome()} da conta: ${robsonPoupanca.getNumero()}`);
robsonPoupanca.exibirSaldo();










