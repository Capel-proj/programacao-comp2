chefe()

function chefe(){
    let matriz = [] // pontos dos jogos
    let vetor = []  // os times
    //matriz [0] = []
    //matriz [1] = []
    //matriz [2] = []
    cadastraMatriz (matriz, vetor)
    calculaMedia (matriz, vetor)
    calculaMaior (matriz)
}

function cadastraMatriz (mat, vet){
    for (let i=0; i<4; i++) { // sao 4 times
        //informar os dados dos times
        let obj = new Object()
        obj.nome = prompt(`Insira o nome do time`)
        obj.cidade = prompt(`Informe a cidade do time ${obj.nome}`)
        obj.media = 0
        // inserir pontos dos times
        vet.push(obj)
        alert(`Informe os pontos dos 3 jogos (${i+1})`)
        mat[i] = [] // cria o vetor dentro da matriz
        for( j=0; j<3; j++){ // são 3 jogos
        mat[i][j] = Number(prompt(`Pontos do ${j+1} jogo`))
        }
    }
}

function calculaMedia(mat, vet){
    // vamos usar um vetor auxiliar
    for(let i=0;i<4;i++) {  // para cada time
        for(let j=0;j<3;j++) {  // para cada rodada
           vet[i].media = vet[i].media + mat[i][j] // somando...
        }
            // quando acabarem as notas
        vet[i].media = vet[i].media / 3
    }
    console.log(vet)
}

function calculaMaior(mat, vet){
    for(let j=0;j<3;j++) {  
        maisPontos = mat[0][j] // primeiro time fez mais pontos
        maisNome = vet[0].nome // primeiro nome fez mais pontos
        for(let i=0;i<4;i++){
            if (mat[i][j] > maisPontos){
                maisPontos = mat[i][j] // atualizar pontos
                maisNome = vet[i].nome // atualiZAR NOMES
            }
        }
    }
    console.log(`Na rodada ${j+1} o time ${maisNome} fez ${maisPontos}`)
}