chefe() 

function chefe(){
    let pessoa = [] 
    let imovel = []  
    let opcao
    do {
        let opcao = Number(prompt("Informe a opção desejada :\n [1] Cadastrar pessoa \n [2] Cadastrar Imóvel \n [3] Valor total em imóvel da pessoa \n [4] Calcula CPF \n [5] Sair do Programa "))
        switch(opcao){
            case 1 : cadastraPessoa(pessoa, imovel)
                break
            case 2 : cadastraImovel(pessoa, imovel)
                break
            case 3 : calculaValor(pessoa, imovel)
                break
            case 4 : calculaCPF(pessoa, imovel)
                break
            case 5 : console.log("Obigado por ultilizar nosso programa.")
                return 0
                break    
            default : console.log("Opção inválida")
        }
    }
    while(opcao != 5)
}

function cadastraPessoa(pess){
    let obj = new Object()
    obj.nome = prompt(`Insira o nome da pessoa`)
    obj.rg = Number(prompt(`Informe o RG de ${obj.nome}`))
    obj.calculaCPF = Number(prompt(`Insira o CPF de ${obj.nome}`))
    pess.push(obj)
}

function cadastraImovel(imo, pess){
    //código, endereço, tamanho, tipo, valor e rg do dono. Não pode criar imóvel de pessoa que não esteja cadastrada
    if (pess.rg === imo.rgDono){
        let obj = new Object()
         obj.rgDono = Number(prompt(`Insira o RG do dono do imóvel`))
         obj.codigo = Number(prompt(`Insira o código do imóvel`))
         obj.tamanho = Number(prompt(`Insira o tamanho do imóvel`))
         obj.valor = Number(prompt(`Insira o Valor do imóvel`))
         imo.push(obj)
    }
    else{
         alert(`RG inválido, tente novamente`)
         return 0
    }
}