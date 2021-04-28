//para hacer este codigo se tuvo que instalar
//prompt-sync en npm

const prompt = require('prompt-sync')({sigint: true});

let numero1 = prompt('Inserta un numero: ');

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

comprobarPrimo(numero1);