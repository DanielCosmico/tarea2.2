//para hacer este codigo se tuvo que instalar
//prompt-sync en npm

const prompt = require('prompt-sync')({sigint: true});

let num1 = prompt('Ingresa un numero: ');
let num2 = prompt('Ingresa otro numero: ');

function obtenerNaturales(a, b){
    if(a > b){
        for(let i = b; i < a; i++){
            console.log(i);
        }
    } else{
        for(let i = a; i < b; i++){
            console.log(i);
        }
    }
}

obtenerNaturales(num1, num2);