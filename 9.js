//para hacer este codigo se tuvo que instalar
//prompt-sync en npm

const prompt = require('prompt-sync')({sigint: true});
let numero = prompt('Ingresa un numero: ');

if(numero > 0)
    console.log("Es positivo")
else
    console.log("Es negativo o cero")
  
