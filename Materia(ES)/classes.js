class Carro {


    // método construtor, inicializa as variaveis da classe
    constructor(marca, modelo, ano, velocidade, motor){
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        this.velocidade = velocidade
        this.motor = motor
    }

    mostrar(){
        console.log(this)
    }

    aumentarVel(x){
        if(!this.motor){
        this.motor = true       
    }
        this.velocidade = this.velocidade + x
    }

    diminuiVel(y){
        if(!this.motor){
            this.motor = true       
        }
            this.velocidade = this.velocidade - x
    }


}
// vamos instanciar o objeto da classe

let obj1 = new Carro("Hyndai", "HB20", 2018, 100, true)
obj1.mostrar() //this representa o obj1

let obj2 = new Carro("Fiat", "Palio" , 2020 , 0 , false)
obj2.mostrar() //this representa o obj2


let x 
x = Number(prompt("Quer aumentar a velocidade de obj1 em quanto?"))
obj1.aumentarVel(x)
x = Number(prompt("Quer aumentar a velocidade de obj2 em quanto?"))
obj2.aumentarVel(x)

x = Number(prompt("Quer diminuir a velocidade de obj1 em quanto?"))
obj1.diminuiVel(x)
x = Number(prompt("Quer diminuir a velocidade de obj2 em quanto?"))
obj2.diminuiVel(x)

obj1.mostrar()
obj2.mostrar()

