let contador = 0;

for(let i = 1; i<101; i++){
    if(i % 2 == 0 || i % 3 == 0){
        console.log(i);
        contador++;
    }
}

console.log("Hay " + contador + " multiplos de 3 y 2 entre 1 y 100");