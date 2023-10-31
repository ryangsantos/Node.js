/**
 * POO - estudo do encapsulamento
 */

//class modelo
class Pessoa{
    //atributos
    constructor(nome , idade){
        this.nome = nome  //variavel publica
        //-----------------------------------------------------------------------
        let _idade = idade  //let _idade (encapsulamento a variavel)
        //metodos get e set (para acessar a variavel idade)
        this.getIdade = ()=> {
            return _idade
        }
        this.setIdade = function (novaIdade){
            _idade = novaIdade
        }
        //------------------------------------------------------------------------
        }
    //metodos (açoes)
    apresentar(){
        console.log(`Olá meu nome é ${this.nome} e tenho ${this.getIdade()} anos`)
    }
}

/**instaciar (criar) objetos ***/
const Pessoa1 = new Pessoa("Ryan",18)
Pessoa1.apresentar()
Pessoa1.setIdade(20)
Pessoa1.apresentar()
