// Tratamento de Erroos  - Try = TENTAR


function imprimirNome(obj) {
    try {  //  Um bloco qu epotencialmente pode gerar um tipo de erro exemplo: errro 500 ajax

        console.log(obj.name.toUpperCase() + '!!!!')
    } catch (e) {// tratar o erro obtido pelo try 
        tratarErro(e)
    }finally{
        console.log('Final')
    }
}
function tratarErro(erro) {
    //throw new Error(" Tratando erro ! ")
    //throw 0
    //throw false
    //throw 'Erro a ser tratato'
    throw { // lançando o erro no JavaScript
        nome: erro.name,
        date: new Date(0)
    }

}
const obj = { nome: 'Isaias' }
imprimirNome(obj)