/**
 * POO-fundamentos d aprogramação orientada a objetos
 * Exemplos: jogo Minecraft
 */

//Abstração
class Bloco {
    //atributos
    constructor(resistencia, textura) {
        this.resistencia = resistencia
        this.textura = textura
    }
    //ações  (métodos)
    criarBloco() {
        console.log("----------------------------------")
        console.log("┍─┒")
        console.log("┕─┚")
        console.log(`Bloco de ${this.textura}`)
        console.log(`Resistência: ${this.resistencia}`)

    }
    construir() {
        console.log(`Boco de ${this.textura} colocado.`)
    }
    minerar() {
        console.log("☐  ☐  ☐ Recursos obtidos")
    }
    
}
class Enxada extends Bloco {
    //atributos
    constructor(resistencia, textura, conquista){
        super(resistencia, textura)
        this.conquista = conquista
    } 
    //metodos
    criarEnxada(){
    console.log("----------------------------------")
    console.log("⚒")
    console.log(`Enxada de ${this.textura}`)
    console.log(`Resistência: ${this.resistencia}`)
    }
    arar(){
        console.log("._._._. Terra arada!")
        if(this.conquista === true){
            console.log("🟐 Conquista obtida")
        }
    }
    //polimorfismos
    minerar(){
        console.log("♰ dano atribuido")
    }


}



//criação de objetos (mundo)
console.clear()                                                                                                                 
console.log("")  

console.log(".%%...%%..%%%%%%..%%..%%..%%%%%%...%%%%...%%%%%....%%%%...%%%%%%..%%%%%%.")
console.log(".%%%.%%%....%%....%%%.%%..%%......%%..%%..%%..%%..%%..%%..%%........%%...")
console.log(".%%.%.%%....%%....%%.%%%..%%%%....%%......%%%%%...%%%%%%..%%%%......%%...")
console.log(".%%...%%....%%....%%..%%..%%......%%..%%..%%..%%..%%..%%..%%........%%...")
console.log(".%%...%%..%%%%%%..%%..%%..%%%%%%...%%%%...%%..%%..%%..%%..%%........%%...")
console.log(".........................................................................")

//criar um bloco de terra
//new (noovo objeto)
//bloco Class modelo(resistencia, textura)  
const bloco1 = new Bloco(1, "Terra")
bloco1.criarBloco()       

//criar bloco d emadeira 
const bloco2 = new Bloco(2, "Madeira")
bloco2.criarBloco()

//criar bloco de pedra
const bloco3 = new Bloco(5, "Pedra")
bloco3.criarBloco()
bloco3.minerar()

//criar bloco obsidana
const bloco4 = new Bloco(10, "Obsidiana")
bloco4.criarBloco()
bloco4.minerar()

//bloco de tábua
const bloco5 = new Bloco(2, "Tábua")
bloco5.criarBloco()
bloco5.criarBloco()

//criando uma Enxada de madeira
const enxada1 = new Enxada(2,"madeira", false)
enxada1.criarEnxada()
enxada1.arar()

//criando uma Enxada de ferro
const enxada2 = new Enxada(5,"Ferro", true)
enxada2.criarEnxada()
enxada2.arar()

//criando uma Enxada de ferro
const enxada3 = new Enxada(10,"Diamante", false)
enxada3.criarEnxada()
enxada3.minerar()
