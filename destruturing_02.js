//Extrair o valor de um arrays usando destruturing - desestruturar

const [a] = [15]
console.log(a)

const [n1, , n3, , n5, n6 = 9] = [5, 6, 8, 15] //
console.log(n1, n3, n5, n6)

// Acesssando array dentro do array desestruturando

const [, [, array1]] = [[, 5, 6], [10, 11, 12]]
console.log(array1)