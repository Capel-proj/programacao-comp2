function revisao() {
    var bikes = []
    do { 
        //criacao do objeto
        var bike = new Object()
        bike.modelo = prompt("Insira o modelo da bike")
        bike.marca  = prompt("Insira a marca da bike")
        bike.aro    = Number(prompt("Insira o aro da bike"))
        bike.roda   = Number(prompt("Insira o tamanho da roda da bike"))
        var data =  prompt("Insira a data de fabricação da bike").split(`/`)
        bike.fabricacao = new date(data[2], data[1]-1, data[0])
        //quer continuar??

        var resposta = prompt("quer cadastrar nova bike 'S'/'N'?")
        bikes.push(bike)
    }
    while (resposta != 'n')
// achar a média dos aros
    var soma = 0
    for (var i=0;i<bikes.length;i++){
        soma = soma + bikes[i].aro
    }
    console.log (`a média dos aros são ${soma/bikes.length}`)
//achar a marca que tem a maior roda
    var maiorRoda = bikes[0].roda
    var maiorMarca = bikes[0].marca
    
    for(var i=0;i<bikes.length;i++){
        if (bikes[i].roda > maiorRoda){
            maiorRoda = bikes[i].roda
            maiorMarca = bikes[i].marca
        }
    }
    console.log(`A marca com a maior roda pe ${maiorMarca}`)
 // encontar bikes criada entre datas de fabricação
    var di = prompt("Informe a data inicial").split(`/`)
    var datai = new date(di[2], di[1]-1, di[0])
    var df = prompt("Informe a data final").split(`/`)
    var datai = new date(df[2], df[1]-1, df[0])

    for(var i=0;i<bikes.length;i++) {
        console.log(bikes[i])
    }
 


}