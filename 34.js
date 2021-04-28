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

function buscarCalificacion(n){
    console.log("La calificacion #" + n + " es " + calificaciones[n]);
}

leerCalifas();
let opcion = 0;
while(opcion != 2){
    opcion = prompt("QUieres buscar una calificacion? Si(1) No(2): ");
    switch (opcion) {
        case "1":
            let x = prompt("Buscar calificacion #");
            buscarCalificacion(x)
            break;
        
        case "2":
            opcion = 2;
            break;
    
        default:
            break;
    }
}
