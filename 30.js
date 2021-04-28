//para hacer este codigo se tuvo que instalar
//prompt-sync en npm

const prompt = require('prompt-sync')({sigint: true});
let opcion = 0

let numero1 = parseInt(prompt('Inserta un numero: '));
let numero2 = parseInt(prompt('Inserta otro numero: '));

while(opcion != 5){
    imprimirMenu();
    opcion = prompt('Ingresa una opcion: ');
    switch (opcion) {
        case "1":
            console.log(numero1 + numero2);
            break;
        
        case "2":
            console.log(numero1 - numero2);
            break;

        case "3":
            console.log(numero1 * numero2);
            break;
        
        case "2":
            console.log(numero1 / numero2);
            break;
    
        default:
            break;
    }
}

function imprimirMenu(){
    console.log("1. Sumar");
    console.log("2. Restar");
    console.log("3. Multiplicar");
    console.log("4. Dividir");
}