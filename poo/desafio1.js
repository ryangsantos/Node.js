//Abstração
class Modelo {
    //atributos
    constructor(ano, cor) {
        this.ano = ano
        this.cor = cor
    }
    //ações (métodos)
    criarCarro() {
        console.log("----------------------------------")
        console.log("⛟")
        console.log(`Ano do carro ${this.ano}`)
        console.log(`Cor do carro: ${this.cor}`)
    }
    ligar() {
        console.log("Ligando...")
    }
    desligar() {
        console.log("☐  ☐  ☐ Desligando")
    }
    acelerar(){
        console.log("acelerandoooooo")
        
    }
    
}

class Aviao extends Modelo {
    //atributos
    constructor(ano,cor,envergadura ){
        super(ano, cor)
        this.envergadura = envergadura 
    } 
    //metodos
    criarAviao(){
    console.log("----------------------------------")
    console.log("⛿")
    console.log(`Ano do avião: ${this.ano}`)
    console.log(`Cor aviao: ${this.cor}`)
    }
    aterrisar(){
        console.log("._._._. Terra arada!")

    }

    //polimorfismos
    acelerar(){
        console.log("acelerando ⛼")
        if(this.acelerar === true){
            console.log("🟐 Acelerando vruuuuuummmmm 🟐")
        }
    }


}



//criação de objetos (mundo)
console.clear()
console.log("")

console.log(":'######:::::'###::::'########::'########:::'#######::")
console.log("'##... ##:::'## ##::: ##.... ##: ##.... ##:'##.... ##:")
console.log("##:::..:::'##:. ##:: ##:::: ##: ##:::: ##: ##:::: ##:")
console.log("##:::::::'##:::. ##: ########:: ########:: ##:::: ##:")
console.log("##::::::: #########: ##.. ##::: ##.. ##::: ##:::: ##:")
console.log("##::: ##: ##.... ##: ##::. ##:: ##::. ##:: ##:::: ##:")
console.log(". ######:: ##:::: ##: ##:::. ##: ##:::. ##:. #######::")
console.log(":......:::..:::::..::..:::::..::..:::::..:::.......:::")

//criando objeto  
const carro1 = new Modelo (1996, "verde")
carro1.criarCarro()  

//segundo carro
const carro2 = new Modelo (1960, "azul bebe",true)
carro2.criarCarro() 
carro2.acelerar ()

// avião
const Aviao1 = new Aviao (2025, "branco e azul", false)
Aviao1.criarAviao()
Aviao1.acelerar ()


