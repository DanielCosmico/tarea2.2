//para hacer este codigo se tuvo que instalar
//prompt-sync en npm

const prompt = require('prompt-sync')({sigint: true});
let calificaciones = [];


function leerCalifas(){
    for (let i = 0; i < 10; i++) {
        let n = parseInt(prompt('Inserta la calificacion #' + i + " "));
        calificaciones.push(n);
    }
}

function obtenerMedia(){
    contador = 0;
    for (let i = 0; i < 10; i++) {
        contador += calificaciones[i];
    }
    return contador / 10;
}

leerCalifas();
console.log("La media es " + obtenerMedia());