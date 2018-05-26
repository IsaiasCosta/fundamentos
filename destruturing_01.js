// Recurdo ES2015

const pessoa = {
    nome: 'Jane',
    idade: 47,
    endereco: {
        logradouro: 'Rua Senzala',
        numero: 169,
        bairro: 'Jardim do Lago'
    }
}

const { nome, idade } = pessoa // Usando o operador destrutution - tirando de dentro do objeto a estrutura 
console.log(nome, idade)
//Tirando variavel de dentro do objeto
const { nome: n, idade: i } = pessoa
console.log(n, i)
// Acessando atributo que não existe no objeto
const { sobrenome = 'Maria', bemHumorada } = pessoa
console.log(sobrenome, bemHumorada)
//Extraindo um objeto de dentro do objeto

const { endereco: { logradouro, numero, bairro, cep } } = pessoa
console.log(logradouro, numero, bairro, cep)