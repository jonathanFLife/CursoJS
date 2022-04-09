function tab() {
    let num = document.getElementById('num')
    let n   = Number(num.value)
    let sel = document.getElementById('seltab')
    let res = document.getElementById('res')
    let i   = 1
    if (num ==0) {
        window.alert('Por favor digite um número!')
    }else{
        sel.innerHTML = ''
        for(let s=n ;i<11 ;i++ ){
            let opt = document.createElement('option')
            opt.innerText= `${n} x ${i} = ${n*i}  `
            sel.appendChild(opt)
        }
    }
}   