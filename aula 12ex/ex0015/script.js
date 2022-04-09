function verificar() {
    var data = new Date()
    var ano  = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res  = document.querySelector('div#res')
    if (fano.value.length == 0 || (fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente de novo')
        } else {
            var fsex = document.getElementsByName('radsex')
            var idade = ano - Number(fano.value)
            var género = ''     
            var img = document.createElement('img')
            img.setAttribute('id', 'foto') 
            if(fsex[0].checked){
                género = 'Homem'
                if (idade >=0 && idade < 10){
                    //Criança
                    img.setAttribute('src', 'foto-crianca-m.png')
                    género = "Criança"
                    document.body.style.background = '#b9846f'
                } else if (idade < 21) {
                    //Jovem
                    img.setAttribute('src', 'jovem-m.png')
                    género = "Jovem"
                    document.body.style.background = '#b9846f'
                    
                } else if (idade < 50) {
                    //Adulto
                    img.setAttribute('src', 'adulto-m.png')
                } else {
                    //Idoso
                    img.setAttribute('src', 'idoso-m.png')
                    género = 'Idoso'
                }
            } else if (fsex[1].checked){
                género = 'Mulher'
                if (idade >=0 && idade < 10){
                    //Criança
                    img.setAttribute('src', 'crianca-f.png')
                    género = 'Criança'
                } else if (idade < 21) {
                    //Jovem
                    img.setAttribute('src', 'jovem-f.png')
                    género = 'Jovem'
                } else if (idade < 50) {
                    //Adulto
                    img.setAttribute('src', 'adulto-f.png')
                } else {
                    //Idoso
                    img.setAttribute('src', 'idoso-f.png')
                    género = 'Idosa'
                }
            }
        res.style.textAlign= 'center'
        res.innerHTML = `Detectamos ${género} com ${idade} anos.`
        res.appendChild(img)
    }
}