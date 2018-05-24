// Armazenar função em Variavel ou constante
const funcaoAnonima = function (num1, num2) {
    console.log(num1 + num2)
}
funcaoAnonima(4, 6)

//Armazenando função Arrow em uma Varialvel
const funcaoArrow = (num1, num2) => {
    return num1 + num2
}
console.log(funcaoArrow(56, 89))

//Retorno implícito
const retornoImplicito = (num1, num2) => num1 * num2
console.log(retornoImplicito(12, 12))

