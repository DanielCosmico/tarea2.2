let contador = 0;

for (let i = 0; i < 101; i++){
    if (i % 2 != 0) {
        console.log(i);
        contador++;
    }
}

console.log("Existen " + contador + " numeros impares entre el 0 y el 100");