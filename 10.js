//para hacer este codigo se tuvo que instalar
//prompt-sync en npm

const prompt = require('prompt-sync')({sigint: true});
let numero = prompt('Ingresa un numero: ');

if(numero % 2 == 0)
    console.log("Es par")
else
    console.log("Es impar")
  