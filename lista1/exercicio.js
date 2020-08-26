//exe 1
function exe1(n){
    var soma = 0
    for(var i = 1; i <= n;i++){
        soma = soma + i
    }
    return soma
}

function chefe(){
    var nro = Number(prompt(`Informe um numero`))
    var result = exe1(nro)
    console.log(`A soma dos número é ${result}`)
}

chefe()

//exe 2
function relogio (n1, n2, n3){
    var hora = (n1 * 3600)
    var min = (n2 * 60)
    var seg = (n3)
    return (hora + min + seg)
}

function chefe(){
    var n1 = Number(prompt("Informe a hora"))
    var n2 = Number(prompt("Informe os minutos"))
    var n3 = Number(prompt("Informe os segundos"))
    var resultado = relogio(n1, n2, n3)
    console.log(`A conversão para segundos é ${resultado}`)
}

chefe()

//exe 3
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

//exe 4
function raio (r){
    var volume = (3/4 * r * r * r)
    return (volume)
}

function chefe(){
    var r = Number(prompt("Informe o raio da esfera"))
    var resultado = raio(r)
    console.log(`O volume da esfera é ${resultado}`)
}

chefe()

//exe 5
function verificar (n){
    var numero = n
    if (n > 0) {
        return (`Positivo`)
    } else if (n < 0) {
        return(`Negativo`)
    } else {
        return (`Neutro`)
    }
}

function chefe (){
    var n = Number(prompt(`Informe o valor do número`))
    var resultado = verificar(n)
    console.log(`O número é ${resultado}`)

}

chefe()

//exe 6
function imc(alt, sex){
    var calculom = (72.7 * alt/100 - 58)
    var calculof = (62.1 * alt/100 - 44.7)
    if (sex == 'f'){
        return (calculof)
    }else {
        return (calculom)
    }
    
}

function chefe(){
    var alt = Number(prompt("Informe a altura em centímetros"))
    var sex = prompt("Informe o sexo 'f' p/ feminino ou 'm' p/ masculino")
    var resultado = imc(alt, sex)
    console.log(`O seu peso ideal é ${resultado}`)

}

chefe()


//exe 7
 chefe()

function chefe(){
        var vetor = [] 
    do{
        var opcao = Number(prompt("Escolha : \n [1] Cadastrar \n [2] Média \n [3] Sair do programa"))
    switch(opcao){
        case 1:
            entrada(vetor)
            break
        case 2:
            mediaSalario(vetor)
            break
        case 3:
             console.log(`Obrigado por ultilizar nosso programa.`)
            break
        default: console.log(`Opção inválida`)

    }

    }
    while (opcao != 3)

}

function entrada(vet){
    //console.log(`entrou na função entrada`)
    var objeto = new Object
    objeto.numero = Number(prompt("Informe os valores positivos"))
    if (objeto.numero < 0){
        console.log(`Valor Inválido`)
        entrada(vet)
    } else {
        vet.push(objeto) //insere
    }
    
}

function mediaSalario(vet){
    //console.log(`entrou na função média `)
    if (vet == []){
        console.log(`Nenhum habitante cadastrado`)
    }
    else {
        var soma = 0
        for(var i=0;i<vet.length;i++){
            soma = soma + vet[i].numero
        }
        console.log(`A média é ${soma/vet.length}`)
    }
}
//exe 8
chefe()

function chefe(){
        var vetor = [] 
    do{
        var opcao = Number(prompt("Escolha : \n [1] fatorial de um número \n [2] Sair do programa"))
    switch(opcao){
        case 1:
            fatorial(vetor)
            break
        case 2:
             console.log(`Obrigado por ultilizar nosso programa.`)
            break
        default: console.log(`Opção inválida`)

    }

    }
    while (opcao != 2)

}

function entrada(vet){
    
    var objeto = new Object
        objeto.numero = Number(prompt("Informe os valores inteiros e positivos"))
    while (objeto.numero > 0){
        vet.push(objeto) //insere
        return objeto.numero
    }
        console.log(`Valor Inválido`)
}

function fatorial(vet){
     //console.log(`entrou na função fatorial`)
    if (vet == []){
        console.log(`Nenhum habitante cadastrado`)
    }
    else{
        var numero = entrada(vet)
        var resultado=1;
        var i=1;

        while(i<=numero){
        resultado *= i;
        i++;
        }
    }
    if (numero > 0){
        console.log(`O fatorial é ${resultado}`)    
    }
}

//exe 9
function exe9 (numero){
    var soma = 0
    for(var i = numero; i> numero ; i--){
        if (numero % i == 0) {
        soma = soma + i
        }
    }
    console.log(`Soma dos divisores é ${soma}`)
}

//exe 13
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