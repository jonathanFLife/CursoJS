let amigo = {nome: 'José',
sexo: 'M',
peso: 85.4,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}

amigo.engordar(2) //esse 2 entra no lugar de p que passa a valer 2
console.log(`${amigo.nome} pesa ${amigo.peso}`)