const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
   
readline.question('Cuanto numeros quieres imprimir?', x => {
    x++;
    for (let i = 1; i < x; i++) {
        console.log(i);
    }
    readline.close();
});