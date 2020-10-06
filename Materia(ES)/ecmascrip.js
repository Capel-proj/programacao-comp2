var conteudo = ""
chefe () 

function chefe(){

    var vetor = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
    vetor.forEach(opera) //  forEach é executado para cada elemento do vetor 

}   
function opera(elemento, posicao){
    conteudo = conteudo + " - " + elemento
  // if (posicao % 2 == 1 ){
  //      console.log(`Valor do parâmetro ${elemento} na posição ${posicao}`)
         //  Valor do parâmetro 2 na posição 0
         //  VM103: Valor do parâmetro 4 na posição 1
         //  VM103: Valor do parâmetro 6 na posição 2
         //  VM103: Valor do parâmetro 8 na posição 3
         //  VM103: Valor do parâmetro 10 na posição 4
         // NUMEROS NAS POSIÇÕES IMPARES
         //Valor do parâmetro 4 na posição 1
         //VM108: Valor do parâmetro 8 na posição 3
         //VM108: Valor do parâmetro 12 na posição 5
         //VM108: Valor do parâmetro 16 na posição 7
         //VM108: Valor do parâmetro 20 na posição 9
  //  }
   
  
    
}
chefe() 

function chefe(){
    var vetor = [1,2,3,4,5,6,7,8,9,10]
    let novoVetor = vetor.map(multiplicacao)
    console.log(novoVetor)
    //[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
}

function multiplicacao(elemento, posicao){
    if (posicao % 2 != 1 ){
     return Math.pow(elemento , 2)
     //return elemento * elemento
    }
    else{
        return elemento
    }
}

let a = function(x, y){
    return x + y
}

console.log(a(10, 20))

// 30

//li = limite inferior
//ls = limite superior
let soma = function(li, ls){
    var aux = 0
    for(let i=li;i<=ls;i++){
        aux = aux  + i
    }
    return aux
}
console.log(soma(10, 20))