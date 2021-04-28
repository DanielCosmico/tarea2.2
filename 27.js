//para hacer este codigo se tuvo que instalar
//prompt-sync en npm

const prompt = require('prompt-sync')({sigint: true});

let numero1 = prompt('Inserta un numero para sacar su tabla: ');

function tabla(n){
    for (let i = 1; i < 11; i++) {
        console.log(i + "x" + n + " = " + (i *n));
    }
}

tabla(numero1);