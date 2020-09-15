chefe ()

function chefe(){
    // cirar matrix 3x4 3 aulos e 4 nostas
    let matriz = [] // uma matriz é um vetor
    let vetor = []
    matriz[0] = [] 
    matriz[1] = []
    matriz[2] = []
    cadastra(matriz, vetor)
    calculamedia(matriz, vetor)
    calculaMaior (matriz, vetor)
    calculaMenor (matriz, vetor)
}
function calculaMenor(mat, vet){
    for(let j=0;j<4;j++){
        let menorNota = mat[j][0]
        for(let i=0;i<3;i++){
            if (mat[i][j] < menorNota){
                menorNota = mat[i][j]
            }
        }
        console.log(`O aluno ${vet[i].nome} tem menor nota ${menorNota}`)
    }
}

function calculaMaior(mat, vet){
    for(let j=0;j<4;j++){
        let maiorNota = mat[0][j]
        let nomeMaior = vet[0].nome
        for(let i=0;i<3;i++){
            if (mat[i][j] > maiorNota){
                maiorNota = mat[i][j]
                nomeMaior = vet[i].nome
            }
            console.log(`Aluno com a maior nota na prova ${j} foi ${nomeMaior} com nota ${maiorNota}`)
        }
    }
}

function cadastra(mat, vet){
    for (let i=0; i<3; i++) { // sao 3 alunos
        //informar os dados do aluno
        let obj = new Object()
        obj.nome = prompt(`Insira o nome do Aluno`)
        obj.codigo = Number(prompt(`Informe o código do aluno`))
        // inserir aluno 
        vet.push(obj)
        alert(`Informe 4 notas para o aluno ${i+1}`)
        mat[i] = []
        for( j=0; j<4; j++){ // são 4 notas
        mat[i][j] = Number(prompt(`Nota ${i+j}`))

        }
    }
}

function calculamedia(mat, vet){
    // vamos usar um vetor auxiliar
    for(let i=0;i<3;i++) {// para cada aluno
        for(let j=0;j<4;j++) {// para cada nota
           vet[i].media = vet[i].media + mat[i][j] // observar a sintaxe
        }
        // quando acabarem as notas
        vet[i].media = vet[i].media / 4
    }
    console.log(vet)
}
