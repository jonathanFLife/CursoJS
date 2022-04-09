function tab() {
    var num = document.getElementById('num')
    var num = Number(num.value)
    var res = document.getElementById('res')
    var i   = 1
    let tab = document.getElementById('seltab')
    if( num == 0){
        window.alert('Por favor ensira algum número')
    }else{
        tab.innerHTML= ''
        for(var s = num; i <= 10; i++ ) {
        let item  = document.createElement('option')
        var m     = num * i
        item.text = `${s} x ${i} = ${m}`
        tab.appendChild(item)
        }
    }
}