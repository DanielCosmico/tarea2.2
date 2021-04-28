//para hacer este codigo se tuvo que instalar
//prompt-sync en npm

const prompt = require('prompt-sync')({sigint: true});

let numero1 = prompt('Inserta un numero: ');

function factorial(a){
    if(a>1)
        return a*factorial(a-1);
    else
        return 1;
}

let x  = factorial(numero1);
console.log("El factorial de " + numero1 + " es " + x);