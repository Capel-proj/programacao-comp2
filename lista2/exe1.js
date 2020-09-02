function chefe () {
    let vendedores = [] //alteramos let po let por ser let com escopo local e nao global
    let vendas = []
    do {
        let opcao = Number(prompt("Informe a opção desejada :\n [1] Cadastrar vendedor\n [2]Cadastrar venda\n [3]Cadastrar \n [4]Consultar venda dos funcionários \n [5]Finalizar o pograma"))
        switch(opcao){
            case 1 : cadastraVendedores(vendedores)
                break
            case 2 : CadastraVendas(vendas, vendedores)
                break
            case 3 : ConsultaVendasFuncionarioMes(vendas)
                break
            case 4 : ConsultaVendasFuncionario(vendas)
                break
            case 5 : console.log("Obigado por ultilizar nosso programa.")
                return 0
                break
                
            default : console.log("Opção inválida")
        }
    }
    while(opcao != 5)
}

function cadastraVendedores(vendor){
    let objeto = new Object
        objeto.codigo = Number(prompt("Informe o código do vendedor"))
        objeto.nome = Number(prompt("Informe o nome do vendedor"))
// verificar código
    for(let i=0;i<vendor.length;i++){
        console.log("O código ja existe, insira outro.")
        return 0 // sai da função
    }
    //insere no vetor
        vendor.push(objeto)
        console.log("Vendedor cadastrado com sucesso.")
}    

function CadastraVendas(vend, vendor){
    let objeto = new Object
        objeto.codigo = Number(prompt("Informe o código da venda"))
        objeto.vendedor = Number(prompt("Informe o código do vendedor"))
        objeto.mes = Number(prompt("Informe o mês da venda"))
        objeto.valor = Number(prompt("Insira o valor da venda"))

    for(let i=0;i<vendor.length;i++){
        if(vendor[i].codigo == objeto.vendedor){//vendedor existe
            for( let j=0; j < vend.length ; j++){//verifica se o vendedor ja tem cadastro no mês
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

function ConsultaVendasFuncionarioMes(vend){
    let vendedor = Numberprompt("Informe o código do vendedor")
    let mes = Number(prompt("Informe o mês da venda"))
    for(let i=0;i<vend.lenght;i++){
        if((vend[i].vendedor == vendedor) && (vend[i].mes == mes)){
            console.log(`Valor da venda ${vend[i].valor}`)
            return 0 //sai da função
        }
    }
    console.log(`Vendedor e/ou mês sem vendas cadastradas.`)
}

function ConsultaVendasFuncionari(vend){
    let vendedor = Number(prompt("Informe o código do vendedor"))
    let total = 0
    for(let i=0;i<vend.lenght;i++){
        if(vend[i].vendedor == vendedor){
            total = total + vend[i].valor
        }
    }
    if (achou == 0){
    console.log(`Vendedor sem vendas cadastradas.`)
    } else {
        console.log(`O total das vendas é ${total}`)
    }
}

function ConsultaMaiorVEndedor(vend){
    let mes = Number(prompt("Informe o mês da venda"))
    let codigoVendedor // codigo do vendedor que mais vendeu
    let maiorVenda = 0 // maior venda

    for(let i=0;i<vend.lenght;i++){ // percorre o vetor de vendas
        if(vend[i].mes == mes){ // verifica se é um mês de interesse
           if(vend[i].valor > maiorVenda){ // achei maior venda
                //att os valores
                maiorVenda = vend[i].valor
                codigoVendedor = vend[i].vendedor
           }
        }
    }
    console.log(`A maior venda foi feita pelo funcionário ${codigoVendedor}`)
}

