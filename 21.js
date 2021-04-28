let pares = 0;
let impares = 0;

for(let i = 0; i < 10001; i++){
    if(i % 2 == 0)
        pares += i;
    else
        impares += i;
}

console.log("Suma de los pares del 1 al 1000: " + pares);
console.log("Suma de los impares del 1 al 1000: " + impares);