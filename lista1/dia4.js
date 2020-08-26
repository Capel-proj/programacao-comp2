function principal(){
    var number1 = Number(prompt("Informe o primeiro valor"))
    var number2 = Number(prompt("Informe segundo valor"))
    var resultado = soma(number1 + number2)
    console.log(`O resultado da soma é ${resultado}`)

}

function soma(x,y){
    return x + y
}