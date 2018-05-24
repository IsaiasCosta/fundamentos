//Notação Ponto
console.log (Math.cos(6))

const obj={}
obj.nome ='isaias'
console.log(obj.nome)

function Obj1(nome){
this.nome=nome
}

const obj2 = new Obj1 ('Carro')
const obj3 = new Obj1 ('Kombi')
console.log(obj2.nome)
console.log(obj3.nome)