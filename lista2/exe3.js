function chefe () {
    var vet = [] // escopo global ele que vai ser passado como parametro bas funçoes
    do {
        var opcao = Number(prompt("Digite [1] Cadastrar \n [2]req2 \n [3]req3 \n [4]req4 \n [5]req5"))
        switch(opcao){
            case 1 : requisito1(vetor)
                    break
            case 2 : requisito2(vetor)
                    break
            case 3 : requisito3(vetor)
                    break
            case 4 : requisito4(vetor)
                    break
            case 5 : requisito5(vetor)
                    break
            case 6 : console.log(`Obrigado por ultilizar nosso programa.`)
                    break
            default: console.log(`opção inválida`)
        }
        
    }
    while(opcao != 6)
}

function requisito1 (vet) { //vet aponta para o vetor
    var objeto = new Object
    objeto.sexo = prompt("Escreve 'F' para feminino e 'M' para masculino").toUpperCase
    objeto.altura = Number(prompt("Informe a altura"))
    objeto.olhos = prompt("Informe a cor dos olhos [A] Azul \n [V] verde \n [C] castanho").toUpperCase
    //insere no vetor
    vet.push(objeto) //insere no vetor (eescopo global)
    console.log("Habitante cadastrado com sucesso.")
}

function requisito2 (vet) { //vet aponta para o vetor
    var soma = 0
    var qtde = 0
    for (var i=0;i<vet.length;i++){
            if ((vet[i].olhos == 'C') && (vet[i].altura > 1.60))
                soma = soma + vet[i].idade
                qtde++
    }
    if (qtde != 0)
    console.log (`A média é ${soma / qtde}`)
    else console.log(`não existe habitante para o cálculo.`)
}

function requisito3 (vet) { //vet aponta para o vetor
}

function requisito4 (vet) { //vet aponta para o vetor
}

function requisito5 (vet) { //vet aponta para o vetor
}

