chefe()
function chefe (){
     
    //vamos ultilizar a função forEach()

    var vetor = [3, 2, 4]


    // exemplo de forEach
    vetor.forEach(exe1) 

    // exemplo de map
    var novo = vetor.map(exe2)
    console.log(novo)
    
    // exemplo der filter
    var novo2 = vetor.filter(exe3)
    console.log(novo2)

    var novo3 = vetor.filter(exe4)
    console.log(novo3)

    //exemplo de reduce
    var soma = vetor.reduce(exe5)
    console.log(`Total da soma ${soma}`)
    //exe reduce
    var soma2 = vetor.reduce(exe6)
    console.log(`Total da soma ${soma2}`)
    
}
   
function exe1(elemento, posicao){
    if (posicao % 2 == 1){
        console.log(`${elemento} esta em posição ímpar`)
    }
}

function exe2(elemento){
    return elemento + 10
}

function exe3(elemento){
    return elemento >= 5
}

function exe4 (elemento, posicao){
    return ((elemento <= 5) && (posicao <= 3))
}

function exe5(total, elemento){
    console.log(`Valores parciais de total ${total}`)
    return total + elemento
}

function exe6 (total, elemento, posicao) {
    if(posicao == 1){ // se for o primeiro elemento
        return ((total + 1) * total) - ((elemento + 1) * elemento)
    }
    return total - ((elemento + 1) * elemento)
}