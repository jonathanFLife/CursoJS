let valores = [2, 5, 1, -1]

console.log(`${valores}...`)
valores.sort() //bota em ordem crescente
/*
console.log(valores)


for(let pos= 0; pos < valores.length; pos++){
    console.log(`${valores[pos]}`)
} 
outro jeito de fazer:*/

for(let pos in valores){
    console.log(`${valores[pos]}`)
}