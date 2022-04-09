let num = document.getElementById('num')
let lista= document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores  = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista (n, l) {
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}       

function tab(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let obj = document.createElement('option')
        obj.innerHTML = `Valor ${num.value} adicionado.`
        lista.appendChild(obj)
        res.innerHTML= ''

    } else {
        window.alert('valor inválido ou já encontrado na lista.')
    }
    num.value= ''
    num.focus()
} 

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior= valores[0]
        let menor= valores[0]
        let soma = 0
        let media= 0
        for (let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
        }   
        media = soma / valores.length
        res.innerHTML  = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor é ${maior}.</p>`
        res.innerHTML += `<p>O menor valor é ${menor}.</p>`
        res.innerHTML += `<p>A soma é ${soma}.</p>`
        res.innerHTML += `<p>A média é ${media}.</p>`
    }

    
}