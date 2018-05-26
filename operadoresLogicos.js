/* Operadores Logicos
O resuldato só sera verdadeiro somente qundo todas as operações forem verdadeira - usando o  E

V e V -> V
V e F -> F
F e V -> F
F e F -> F

O resuldato é verdadeiro qaundo qualquer uma das operações forem verdadeira - usando o  OU

V ou V -> V
F ou V -> V
F ou F -> F
V ou ? -> V

O resuldato sera Falso quando as duas operações forem Verdadeiras ou Falsa - usando o  XOR

 V xor V -> F
 V xor F -> V
 F xor V -> V
 F xor F -> F


  Resultado  da negação logica é negar a operação - usando o operador !

  !V -> F
  !F -> V

*/

function compras(trabalho1, trabalho2) {
  const comprarSorvete = trabalho1 || trabalho2
  const comprarTv50 = trabalho1 && trabalho2
  //const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
  const comprarTv32 = trabalho1 != trabalho2
  const manterSaudavel = !comprarSorvete //Operador unario

  //Retorno dentro de um objeto

  return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}
console.log('Operador OU')
console.log(compras(true, true))
console.log('Operador E')
console.log(compras(true, false))
console.log('Operador XOR')
console.log(compras(false, true))
console.log('Operador de Negação !')
console.log(compras(false, false))