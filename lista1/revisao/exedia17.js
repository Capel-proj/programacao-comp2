//exericio feito na aula dia 17/08/2020

function cadastra(vet){
    var objeto = new Object()
    objeto.codigo = Number(prompt("Informe código"))
    objeto.qtd = Number(prompt("Informe quantidade"))
    objeto.preco = Number(prompt("Informe preço"))
    objeto.nome = prompt("Informe o nome")
    vet.push(objeto)
}
function mostra(vet){
    for(var i=0;i<vet.lenght;i++)
    console.log(vet[i])
}
function chefe(){
    var vetor = []
    do{
        var opcao = Number(prompt("Difite a opção desejada : [1] cadastrar, [2] consultar, [3] sair"))
        switch(opcao) {
            case 1 : cadastra(vetor)
              break
            case 2 : console.log(vetor)
              break
            case 3 : console.log(`Até logo`)
            break
              default : console.log(`Opção inválida`)
        }
    }
    while (opcao != 3)

}

chefe()