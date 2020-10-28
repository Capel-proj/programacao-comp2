class produto {
    
    constructor(id, descricao, qtd, preco){
        this.id = id
        this.descricao = descricao
        this.qtd = qtd
        this.preco = preco
    }
    mostra =() =>  {
        console.log(`Id: ${this.id} Descrição: ${this.descricao} Quantidade: ${this.qtd} Preço: ${this.preco}`)
    }

    comprar(x){
        this.qtd = this.qtd + x
    }

    vender(x){
        if((this.qtd - x) >= 0) {
            this.qtd = this.qtd - x
        }else{
            alert("Não foi possivel vender o preço")
        }
    }

    subir(x){
        this.preco = this.preco + x
    }

    descer(x){
        if((this.preco - x) >= 0) {
            this.preco = this.preco - x
        }
        else{
            alert("Não foi possivel diminuir o preço")
        }
    }
}

let produto1 = new produto(22780, "feijão tio lino", 2, 27.99)
let produto2 = new produto(20184, "arroz tio joão", 7, 23.50)

x = Number(prompt("Deseja comprar quantos itens de feijão tio lino? "))
produto1.comprar(x)
x = Number(prompt("Deseja comprar quantos itens de arroz tio joão? "))
produto2.comprar(x)

x = Number(prompt("Deseja vender quantos itens de feijão tio lino? "))
produto1.vender(x)
x = Number(prompt("Deseja vender quantos itens de arroz tio joão? "))
produto2.vender(x)

x = Number(prompt("Deseja subir o preço de feijão tio lino em quanto R$0.00? "))
produto1.subir(x)
x = Number(prompt("Deseja subir o preço de arroz tio joão em quanto R$0.00? "))
produto2.subir(x)

x = Number(prompt("Deseja diminuir o preço de feijão tio lino em quanto R$0.00? "))
produto1.descer(x)
x = Number(prompt("Deseja diminuir o preço de arroz tio joão em quanto R$0.00? "))
produto2.descer(x)

produto1.mostra()
produto2.mostra()


class produto {
    
    constructor(id, descricao, qtd, preco){
        this.id = id
        this.descricao = descricao
        this.qtd = qtd
        this.preco = preco
    }
    mostra =() =>  {
        console.log(`Id: ${this.id} Descrição: ${this.descricao} Quantidade: ${this.qtd} Preço: ${this.preco}`)
    }

    comprar(x){
        this.qtd = this.qtd + x
    }

    vender(x){
        if((this.qtd - x) >= 0) {
            this.qtd = this.qtd - x
        }else{
            console.log("Não foi possivel vender o preço")
        }
    }

    subir(x){
        this.preco = this.preco + x
    }

    descer(x){
        if((this.preco - x) >= 0) {
            this.preco = this.preco - x
        }
        else{
            console.log("Não foi possivel diminuir o preço")
        }
    }
}

let produto1 = new produto(22780, "feijão tio lino", 2, 27.99)
let produto2 = new produto(20184, "arroz tio joão", 7, 23.50)

x = Number(prompt("Deseja comprar quantos itens de feijão tio lino? "))
produto1.comprar(x)
x = Number(prompt("Deseja comprar quantos itens de arroz tio joão? "))
produto2.comprar(x)

x = Number(prompt("Deseja vender quantos itens de feijão tio lino? "))
produto1.vender(x)
x = Number(prompt("Deseja vender quantos itens de arroz tio joão? "))
produto2.vender(x)

x = Number(prompt("Deseja subir o preço de feijão tio lino em quanto R$0.00? "))
produto1.subir(x)
x = Number(prompt("Deseja subir o preço de arroz tio joão em quanto R$0.00? "))
produto2.subir(x)

x = Number(prompt("Deseja diminuir o preço de feijão tio lino em quanto R$0.00? "))
produto1.descer(x)
x = Number(prompt("Deseja diminuir o preço de arroz tio joão em quanto R$0.00? "))
produto2.descer(x)

produto1.mostra()
produto2.mostra()