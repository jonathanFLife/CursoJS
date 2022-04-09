 function fatorial(n) {
     let fat = 1
     for(let c = n; c > 1 ; c--){
         fat *=c 
     }
     return fat
 }
 
 console.log(fatorial(5))
 /* nada mais é que fat = 1  e c = n >n = 5 e sendo assim se executa desse jeito:
 1 *= 5 > 5 *= 4 > 20 *= 3 > 60 *= 2 > 120 = 1 > fatorial de 5! = 120
 5! quer dizer fatorial de 5 que é multiplicar pelos sucessores menores( 4, 3, 2, 1)*/