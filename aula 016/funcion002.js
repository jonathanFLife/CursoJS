/*function soma(n1, n2){
    return n1 + n2
}
console.log(soma(2,5))

// ou determinar um valor para n1 para caso eu deixe em branco ele n dar erro
e usar o 0 */

function soma(n1=0, n2=0){
    return (n1 + n2)
}
console.log(soma(7))
// no caso o 7 virou o n1 e o n2 ficou como 0 e deu o resultado sem erro de NaN