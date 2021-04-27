//para hacer este codigo se tuvo que instalar
//prompt-sync en npm

const prompt = require('prompt-sync')({sigint: true});
let numero = prompt('Hasta que numero quieres contar multiplos de tres?: ');

for(let i = 0; i < numero; i++){
    if(i % 3 == 0)
        console.log(i);
}