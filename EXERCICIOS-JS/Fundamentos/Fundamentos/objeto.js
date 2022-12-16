// um par de {} repreenta um objeto, 
// assim como um par de [] representa uma array 
const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Produto Legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'camisa polo',
    preco: 79.90
//    obj: {
//        blabla: 1,
//        obj: {
//            blabla: 2
//        }
//    }
}

'{ "nome": "camisa polo", "preco": 79.90 }' 
// isso é um json, json não é um objeto 
// json é um formato textual
// a partir de um objeto é possivel criar um json

console.log(prod2)