chefe()

function chefe(){
    //vetor com escopo global --> porque vamos passá-lo como parametro nas funções
    var vetor = []
    do{
        var opcao = Number(prompt("Escolha : \n [1] Cadastrar \n [2] Média \n [3] Maior e Menor idade \n [4] Quantidade de mulheres \n [5] sair do programa"))
        switch(opcao){
            case 1:
                entrada(vetor)
                break
            case 2:
                mediaSalario(vetor)
                break
            case 3:
                menorMaioridade(vetor)
                break
            case 4:
                qtdMulheres(vetor) 
                break
            case 5:
                console.log(`Obrigado por ultilizar nosso programa.`)
                break
            default: console.log(`Opção inválida`)

        }

    }
    while (opcao != 5)
}                                           

function entrada(vet){
    //console.log(`entrou na função entrada`)
    var objeto = new Object
    objeto.salario = Number(prompt("Informe o salário"))
    objeto.nrofilhos = Number(prompt("Informe o número de filhos"))
    objeto.sexo = prompt("Informe o sexo [F] Feminino [M] masculino").toUpperCase //converte para maiúsculo.
    objeto.idade = Number(prompt("Informe a idade"))
    vet.push(objeto) //insere
    
}

function mediaSalario(vet){
    //console.log(`entrou na função média salarial`)
    if (vet == []){
        console.log(`Nenhum habitante cadastrado`)
    }
    else {
        var soma = 0
        for(var i=0;i<vet.length;i++){
            soma = soma + vet[i].salario
        }
        console.log(`A média é ${soma/vet.length}`)
    }
}

function menorMaioridade(vet){
    //console.log(`entrou na função maior e menor idade`)
   if(vet.length == 0){
       console.log(`Nenhum habitante`)
    } 
   else {
       var menor = vet[0].idade //a idade do 1 é a menor
       var maior = vet[0].idade //a idade do 1 é a maior
       for(i=1;1<vet.length;i++){//percorre o vetor
            if(vet[i].idade > maior){
            maior = vet[i].idade //att a menor
            }
            if(vet[i].idade < menor){
            menor = vet[i].idade //att a menor
            }
        
        }       
   
    } console.log(`Maior ${maior} e Menor ${menor}`)

}

function qtdMulheres(vet){
    console.log(`entrou na função quantidade de mulheres`)
}