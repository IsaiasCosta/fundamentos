console.log(typeof Object) // Função 
console.log( typeof new Object()) // Instanciando a função


const Client = function(){ // criando uma função e instanciando a função
    console.log( typeof Client)
    console.log(typeof new Client)
}


class Produto {}// ES 2015 ES6 - criando um a classe e instanciando

console.log(typeof Produto)
console.log(typeof new Produto())
