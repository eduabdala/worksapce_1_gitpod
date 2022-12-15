const nome = 'rebeca'
const concatenacao = 'ola ' + nome + '!' //string 
const template = `
    Ola
    ${nome}!`
console.log(concatenacao, template)

//expressoes... 
console.log(`1 + 1 = ${1 +1 }`)

//template string
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('Cuidado')}!`)
