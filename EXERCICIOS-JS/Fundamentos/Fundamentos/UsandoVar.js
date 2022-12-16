{
    {
        {
            {
                var sera = 'será???'  //var escopo de funcao
            }
        }
    }
}
console.log(sera)

function teste() {
    var local = 123
}
// variavel 'var' so tem dois escopos possiveis
// ou var global, visivel para todo mundo 
// ou var escopo de funcao.

teste()
// console.log(local) // var global
