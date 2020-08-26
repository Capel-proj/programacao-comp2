//exercicio 3
function exe3(cadeia1, cadeia2){
    if(cadeia1 == cadeia2){
        return 0
    } 
    else {
         if (cadeia2.length > cadeia1.length)
            return cadeia1.length
        else  {
            for(var i=0; i < cadeia1.length;i++){
                if (cadeia1[i] != cadeia2[i]){
                  return i+1
                }
            }

        }
        
    }

}
function chefe(){
    var cad1 = prompt(`Informe a cadeia 1`)
    var cad2 = prompt(`Informe a cadeia 2`)
    var resultado =exe3(cad1, cad2)
    console.log(`O resultado é ${resultado}`)
}
chefe()


//exericio feito na aula dia 17/08/2020

function cadastra(vet){
    var obejeto = new Object()
    obejeto.codigo = Number(prompt("Informe código"))
    obejeto.qtd = Number(prompt("Informe quantidade"))
    obejeto.preco = Number(prompt("Informe preço"))
    obejeto.nome = prompt("Informe o nome")
    vet.push(obejeto)
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
              default : console.log(`Opção inválida`)
        }
    }
    while (opcao != 3)

}

chefe()
