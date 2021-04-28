function tirarMoneda(){
    let x = (Math.floor(Math.random() * 2)) + 1;
    if(x == 1)
        console.log("Cara");
    else
        console.log("Cruz");
}

tirarMoneda();