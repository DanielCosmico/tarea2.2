//para hacer este codigo se tuvo que instalar
//prompt-sync en npm

const prompt = require('prompt-sync')({sigint: true});
let arreglo = []


for(let i = 0; i < 5; i++){
    let numero = prompt('Inserta un numero: ');
    arreglo.push(numero);
}

let menor = arreglo[0];
let mayor = arreglo[0];

function encontrarMenor(arreglo){
    for(let i = 0; i < 5; i++)
        if(arreglo[i] < menor)
            menor = arreglo[i];

    console.log("El menor es " + menor)
}

function encontrarMayor(arreglo){
    for(let i = 0; i < 5; i++)
        if(arreglo[i] > mayor)
            mayor = arreglo[i];

    console.log("El menor es " + mayor)
}

encontrarMenor(arreglo);
encontrarMayor(arreglo);

