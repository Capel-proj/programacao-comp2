function chefe () {
    var vendedores = []
    var vendas = []
    do {
        var opcao = Number(prompt("Informe a opção desejada :\n [1] Cadastrar vendedor\n [2]Cadastrar venda\n [3]Finalizar o pograma"))
        switch(opcao){
            case 1 : cadastraVendedores(vendedores)
                break
            case 2 : CadastraVendas(vendas, vendedores)
                break
            case 3 : console.log("Obigado por ultilizar nosso programa.")
                return 0
                break
                
            default : console.log("Opção inválida")
        }
    }
    while(opcao != 7)
}

function cadastraVendedores(vendor){
    var objeto = new Object
        objeto.codigo = Number(prompt("Informe o código do vendedor"))
        objeto.nome = Number(prompt("Informe o nome do vendedor"))
// verificar código
    for(var i=0;i<vendor.length;i++){
        console.log("O código ja existe, insira outro.")
        return 0 // sai da função
    }
    //insere no vetor
        vendor.push(objeto)
        console.log("Vendedor cadastrado com sucesso.")
}    

function CadastraVendas(vend, vendor){
    var objeto = new Object
        objeto.codigo = Number(prompt("Informe o código da venda"))
        objeto.vendedor = Number(prompt("Informe o código do vendedor"))
        objeto.mes = Number(prompt("Informe o mês da venda"))
        objeto.valor = Number(prompt("Insira o valor da venda"))

    for(var i=0;i<vendor.length;i++){
        if(vendor[i].codigo == objeto.vendedor){//vendedor existe
            for( var j=0; j < vend.length ; j++){//verifica se o vendedor ja tem cadastro no mês
                if((vend[j].vendedor == objeto.vendedor) && (vend[j] == objeto.mes)){
                    console.log("Venda ja cadastrada neste mês")
                    return 0 // sai da função
                }

            }
            vend.push(objeto)
            console.log(`Venda inserida com sucesso ${objeto}`)
            return 0 // sai da função 
        }
    }
}

