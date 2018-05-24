// Conceito NUll Referencia

let valor// não inicializa
console.log(valor)// valor da variavel é undefined por que não ttem atribuição de valores

valor = null // não esta apontando para memoria e não nenhum valor  - ausencia de valor

const prod = {} // objeto
console.log(prod.preco)
console.log(prod)

prod.preco = 6.5
console.log(prod)

prod.preco = undefined //evide atribuir underfined
console.log(!!prod.preco)
console.log(prod)

prod.preco = null //sem preço

console.log(!!prod.preco)
console.log(prod)

