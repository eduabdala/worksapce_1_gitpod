const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf(3))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!") 
//com numeros o + vai somar e com string ele vai contatenar
//no caso de '2' + 2 ele vai priorizar string e vai contatenar
//caso seja feito '22' - 2 ele vai diminuir pois o - nao faz sentido em string 

console.log(escola.replace(3, 'e')) // console.log(escola.replace(/\d/ 'e')) ou /\w/g para substituir todas as letras

console.log('Ana,Maria,Pedro'.split(',')) //Pesquisar Regex 
