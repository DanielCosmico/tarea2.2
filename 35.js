function generarMatriz(){
    for(let i = 0; i < 5; i++){
        let uno = Math.floor(Math.random() * 100) + 1;
        let dos = Math.floor(Math.random() * 100) + 1;
        let tres = Math.floor(Math.random() * 100) + 1;
        let cuatro = Math.floor(Math.random() * 100) + 1;
        console.log(uno + " " + dos + " " + " " + tres + " " + cuatro);
    }
}

generarMatriz();