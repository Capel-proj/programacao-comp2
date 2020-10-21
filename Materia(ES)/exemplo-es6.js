

//ES 5
var soma5 = function(x, y){
    return x + y
}
console.log(`A soma dde 2 numeros é ${soma5(3, 8)}`)
//---------------------------------------------------------------------------------------------

//ES 6
var soma6 = (x, y) => x + y

console.log(`A soma de 2 números é ${soma6(3, 8)}`)
//---------------------------------------------------------------------------------------------

//ES 5
var vetor = [10, 20, 30, 40, 50]
var soma = 0
vetor.forEach(fsoma)
console.log(`A soma dos elementos é ${soma}`)
function fsoma(elemento){
    soma = soma + elemento
}
//---------------------------------------------------------------------------------------------
//ES 6
var vetor = [10, 20, 30, 40, 50]
var soma = 0
vetor.forEach(
    (elemento) => soma = soma + elemento
)
console.log(`A soma dos elementos é ${soma}`)
//---------------------------------------------------------------------------------------------
//Quetão 1
var numeros = [2, 4, 6 ,2, 8, 4 ,9]
console.log(numeros.find( (elemento) => elementro == 2))

//Questão 2

var numeros = [2, 4, 6 ,2, 8, 4 ,9]
console.log(numeros.filter( (elemento) => elementro == 2))

//Questão 3

var numeros = [2, 4, 6 ,2, 8, 4 ,9]
console.log(numeros.filter( (elemento, posicao) => posicao % 2 == 1))
//---------------------------------------------------------------------------------------------


// Busca por uma bicicleta no vetor a partir de um código informado pelo usuário

   var codigo = Number(prompt(`Informe codigo`))
    console.log(vet.filter((objeto) => (objeto.codigo == codigo)))


