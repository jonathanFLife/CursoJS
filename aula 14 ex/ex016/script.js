function contar() {
    var inicio = document.getElementById('inicio')
    var fim    = document.getElementById('fim')
    var passo  = document.getElementById('passo')
    var res    = document.getElementById('res')
    
    if (inicio.value.length == 0 || passo.value.length == 0 || fim.value.length == 0){
        res.innerHTML = 'impossível contar!'
    }else {
            
            res.innerHTML = `Contando: <br>`
            var inicio = Number(inicio.value)
            var fim    = Number(fim.value)
            var passo  = Number(passo.value)
            if(passo <= 0){
                window.alert('Passo invalído! Considerando passo 1')
                passo = 1
                }
            if (inicio < fim){ //contagem crescente
                
            for (var s = inicio; s <= fim ; s += passo) {
                res.innerHTML += `${s} \u{1F449}`
            }   
            }   else {        //contagem regressiva
            for (var s = inicio; s >= fim ; s -= passo) {
                res.innerHTML += ` ${s} \u{1F449}`
                }
            } res.innerHTML += ` \u{1F3C1}`

    }   
            

}