let pares = 0;
let impares = 0;

for(let i = 0; i < 101; i++){
    console.log(i);
    if(i % 2 == 0)
        pares += i;
    else
        impares += i;
}

console.log("Suma de los pares del 1 al 100: " + pares);
console.log("Suma de los impares del 1 al 100: " + impares);