function tirarDado(){
    let dado;
    dado = (Math.floor(Math.random() * 6)) + 1;
    return dado
}

function tirar100(){
    let dado1, dado2;
    let contador = 0;
    for(let i = 0; i < 100; i++){
        dado1 = tirarDado();
        dado2 = tirarDado();
        if(dado1 + dado2 == 10)
            contador++;
    }
    console.log("Los dados sumaron 10 " + contador + " veces");
}

tirar100();