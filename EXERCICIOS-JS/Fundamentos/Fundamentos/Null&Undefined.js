let valor // não inicializada
console.log(valor)

valor = null // ausência de valor
console.log(valor)
// quando quiser zerar uma variavel do tipo referencia 
// que aponta para um objeto/função
// utilizar null !Não atribuir undefined!


// console.log(valor.toString()) //erro, nao é possivel ler o valor de nulo

const produto = {}
console.log(produto.preco) // undefined, pois nao foi definido um valor de preco 
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)
