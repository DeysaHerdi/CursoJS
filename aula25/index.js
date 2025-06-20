const numero = 10;

//Se (numero >= 0 && numero <= 5), ocorrer, faça isso{código}
//Se não, ocorrer, faça isso{código}

// Pode fazer um if separado ex:
if(numero <= 10){
    console.log('O número é menor ou igual a 10');
}
// xD

if (numero >= 0 && numero <= 5){
    console.log('O número esta entre 0 e 5');
} else if(numero >= 6 && numero <= 8){
    console.log('O número esta entre 6 e 8'); 
}
else if (numero >= 9 && numero <= 11){
    console.log('O número esta entre 9 e 11');
} else {
    console.log('O número esta fora do intervalo');
}

console.log('Resto do código, Fim');