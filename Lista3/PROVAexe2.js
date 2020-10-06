chefe() 

function chefe(){
    let matriz = [] 
    let vetor = []  
    let opcao
    do {
        let opcao = Number(prompt("Informe a opção desejada :\n [1] Cadastrar veiculo \n [2] Média das avaliações \n [3] Modelo do carro com menor nota em cada avaliação \n [4] Sair do Programa "))
        switch(opcao){
            case 1 : cadastraMatriz(matriz, vetor)
                break
            case 2 : calculaMedia(matriz, vetor)
                break
            case 3 : calculaMenor(matriz, vetor)
                break
            case 4 : console.log("Obigado por ultilizar nosso programa.")
                return 0
                break    
            default : console.log("Opção inválida")
        }
    }
    while(opcao != 4)
}



function cadastraMatriz (mat, vet){
    let i=0; i<vet.length; i++
     //informar os dados dos carros
    let obj = new Object()
        obj.marca = prompt(`Insira a marca do carro`)
        obj.modelo = prompt(`Informe o modelo do carro da ${obj.marca}`)
        obj.ano = Number(prompt(`Insira o ano do carro ${obj.marca} ${obj.modelo}`))
        obj.valor = Number(prompt(`Insira o Valor do carro ${obj.marca} ${obj.modelo}`))
    vet.push(obj)
         
        alert(`Informe a avaliação de 0 a 10 (${i+1})`)
        mat[i] = [] // cria o vetor dentro da matriz
      for( j=0; j<5; j++){ // são 5 jogos
        mat[i][j] = Number(prompt(`${j+1} avaliação do carro ${obj.marca} ${obj.modelo}`))
        //let media = mat[i][j] + media / 5
        }
        
    
}


function calculaMedia(mat, vet){
    // vamos usar um vetor auxiliar 
    let i=0;i<mat.length;i++
    let j=0;j<mat.length;j++
    vet[i].media = mat[i][j] + vet[i].media 
    vet[i].media = vet[i].media / 5
    console.log(`A média é do carro ${vet.marca} ${vet.modelo} é ${vet[i].media}`)
}

function calculaMenor(mat, vet){
    let j=0;j<3;j++
        menosPontos = mat[0][j] // primeiro time fez menos  pontos
        Nmarca = vet[0].marca // primeiro marca fez menos pontos
        let i=0;i<4;i++
            if (mat[i][j] > maisPontos){
                menosPontos = mat[i][j] // atualizar pontos
                Nmarca = vet[i].marca // atualiZAR marca
            }
    console.log(`Na avaliação ${j+1} o carro ${Nmarca} fez ${menosPontos}`)
}


