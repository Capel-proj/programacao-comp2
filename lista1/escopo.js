
// se n for 3: soma de 1 + 2 + 3 -> 6
// se n for 8: soma de 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 => 36
// variáveis com escopo local
function exe1(n){
    var soma = 0
    for(var i = 1; i <= n;i++){
        soma = soma + i
    }
    return soma
}
// variáveis com escopo local
function chefe(){
    var nro = Number(prompt(`Informe um numero`))
    var result = exe1(nro)
    console.log(`A soma dos número é ${result}`)
}

chefe()



// variáveis com escopo global
// podem ter escopo globar vetores e objetos

chefe()

// variáveis com escopo global - vet
function entrada(vet){
    vet.push(8)
    vet.push(6)
    vet.push(7)
}
// variáveis com escopo global - vet
function soma10(vet){
    for(var i=0; i< vet.length; i++){
        vet[i] = vet[i] + 10
    }
}

// exemplo com vetor
function chefe(){
    var vetor = []
    entrada(vetor)
    console.log(vetor) // qual o valor do vetor aqui
    soma10(vetor)
    console.log(`Valor final do vetor ${vetor}`) // qual o valor de vetor
}




function chefe(){
    var carro = new Object()
    compra(carro)
    console.log(carro) // qual o valor de carro aqui
}

function compra(obj){
    obj.modelo = 'Renegade'
    obj.marca = 'Jeep'
    obj.ano = 2019
}

chefe()





















 