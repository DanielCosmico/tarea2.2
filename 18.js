var caracterABuscar = "a"
var string = "Hola como estan aaa"

function buscar(string){
    let contador = 0;
    for(let i = 0; i < string.length; i++){
        if(string[i] === caracterABuscar)
            contador++   
    }
    console.log(contador)
}

buscar(string)