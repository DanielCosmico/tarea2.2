//para hacer este codigo se tuvo que instalar
//prompt-sync en npm

const prompt = require('prompt-sync')({sigint: true});
let numero = parseInt(prompt('Inserta un numero: '));

console.log("Su factorial es " + factorial(numero));
comprobarPrimo(numero);
tabla(numero);

function factorial(a){
    if(a>1)
        return a*factorial(a-1);
    else
        return 1;
}

function comprobarPrimo(n){
    bandera = false;
    let i = n - 1;
    while(bandera != true){
        if(i == 1)
            break;
        else if(n % i == 0){
            bandera = true;
            console.log("No es primo");
            break;
        }    
        else
            i--;
    }
    if(i == 1)
        console.log("Es primo");
}

function tabla(n){
    for (let i = 1; i < 11; i++) {
        console.log(i + "x" + n + " = " + (i *n));
    }
}