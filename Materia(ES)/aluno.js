class aluno {

    constructor(numeroAluno, nome, idade, p1, p2){
        // 0This representa o objeto sendo criado
        this.numeroAluno = numeroAluno
        this.nome = nome
        this.idade = idade
        this.p1 = p1
        this.p2 = p2
    }
    //Média final do aluno
    notaFinal = () => {
        return (this.p1 + this.p2) / 2
    }
    // Mostra os dados dos aluno
    mostra =() =>  {
        console.log(`Número do aluno: ${this.numeroAluno} Nome: ${this.nome} Idade: ${this.idade} Média: ${this.notaFinal()}`)
    }

    // Verifica se o aluno passou
    passou = () => {
        if(this.notaFinal() >= 6){
            console.log('Aluno foi aprovado')
        }
        else{
            console.log('Aluno foi reprovado')
        }
    }
}




// cria os objetos -> intancia-los
let aluno1 = new aluno(22780, "Capel", 18, 10, 9)
aluno1.mostra()
aluno1.passou()

let aluno2 = new aluno(10400, "Beatriz", 20, 6, 6)
aluno2.mostra()
aluno2.passou()
