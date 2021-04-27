//para hacer este codigo se tuvo que instalar
//prompt-sync en npm

const prompt = require('prompt-sync')({sigint: true});
 
let opcion = false;
 
while (!opcion) {
  let frase = prompt('Inserta S o N: ');
  
  if (frase === "S") {
    console.log("Adios.");
    opcion = true;
  } else if(frase === "N"){
      console.log("Adios.");
      opcion = true;
  } else {
      console.log("Vuelve a intentarlo");
  }
}