
const nome = "Jane"

const concatena = 'Boa ' + nome + '!'

// quebra de linha dentro string 
const tempalte = ` 
Boa
${nome} !`//interpolação
console.log(concatena, tempalte)
//expressoes com interpolaçaõ


console.log(`3 + 3 = ${3 + 3}`)

// Converter para Maiusculo com função Arrow
const recebe = convertemaiuscula => convertemaiuscula.toUpperCase()

console.log(`Passando para ...${recebe('maiuscula')}!` )

