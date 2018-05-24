const peso1 = 1.1
const peso2 = Number('2.0')
console.log(peso1, peso2)
console.log(Number.isInteger(peso1))

const avaliacao1 = 9.59
const avaliacao2 = 5.59
const total = avaliacao1 * peso1 + avaliacao2 * peso2

const media = total / (peso1 + peso2)
console.log(media.toFixed(2))//Fixar casas décimasi
console.log(media.toString(2)) //Converte em binario
console.log(typeof media) // Tipo da variavel
console.log(typeof Number) // Função

