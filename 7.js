//para hacer este codigo se tuvo que instalar
//prompt-sync en npm

const prompt = require('prompt-sync')({sigint: true});
 
let opcion = false;
let frases = [];
 
while (!opcion) {
  let frase = prompt('Inserta una frase: ');
  frases.push(frase);
  
  let n = prompt('Quieres seguir insertando frases? 1(Si) 2(No): ');

  if (n == 2) {
    var count = 0;
    for (var x of frases) {
      if (x.id != '') {
        count++;
      }
    }

    if(count == 1)
      console.log("Ingresaste " + count + " frase");
    else
      console.log("Ingresaste " + count + " frases");
    console.log('Adios.');
    opcion = true;
  }
}