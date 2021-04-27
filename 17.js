//para hacer este codigo se tuvo que instalar
//prompt-sync en npm

const prompt = require('prompt-sync')({sigint: true});

let numero1 = prompt('Inserta un numero: ');
let numero2 = prompt('Inserta un numero mas grande: ');

function multiplosDos(a, b){
    if(b < a)
        console.log("Ingresaste los numeros mal");
    else{
        let contador = 0;
        let suma = 0;
        for(let i = a; i < b; i++){
            if(i % 2 == 0){
                console.log(i);
                contador++
                suma += i;
            }
        }
        console.log("Hay " + contador + " multiplos de dos");
        console.log("La suma de los multiplos es " + suma);
    }
        
}

multiplosDos(numero1, numero2);