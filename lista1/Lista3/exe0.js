chefe ()

function chefe(){
    // cirar matrix 3x4 3 aulos e 4 nostas
    let matriz = [] // uma matriz é um vetor
    matriz[0] = [] 
    matriz[1] = []
    matriz[2] = []
    cadastra(matriz)
    calculamedia(matriz)
}

function cadastra(mat){
    for (let i=0; i<3; i++) {
        alert(`Informe 4 notas para o aluno ${i+1}`)
        for( j=0; j<4; j++){ // são 4 notas
        mat[i][j] = Number(prompt(`Nota ${i+j}`))

        }
    }
}

function calculamedia(mat){
    // vamos usar um vetor auxiliar
    let vetor =[0,0,0] // qts de alunos
    for(let i=0;i<3;i++){
        for(let j=0;j<4;j++){
            vetor[i]  =vetor[i] + mat[i][j]
        }
        vetor[i] = vetor[i] / 4
    }
    console.log(`As médias são ${vetor}`)
}