//Par nome  / Valor 
const nomeVarialvel = 'nome' // contexro léxico 1

function execulta(){
    const nomeVarialvel ='Isaias' //contexto léxico 2
    return nomeVarialvel
}
//Objetos sõa grupos aninhadso de pares nome / valor

const cliente={
    nome: 'Isaias',
    idade: 101001,
    peso:90,
    endereco:{
        logradouro:'Senzala ',
        numero: 169,
        bairro: 'Jardim do Lago',
        estado:'MG'
    }
}


console.log(nomeVarialvel)
console.log(execulta())
console.log(cliente)
