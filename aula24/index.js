/*
Entre 0 - 11 - Bom dia!
Entre 12 - 17 - Boa tarde!
Entre 18 - 23 - Boa noite!
*/

//If pode ser usado sozinho
//Sempre que usar Else, precisa de um If
//pode ter varios Else ifs
//So pode um Else na checagem
//Podemos usar condições sem Else if, usando apenas if e else


const hora = 12
if (hora >= 0 && hora <= 11) {
    console.log("Bom dia!")
} else if (hora >= 12 && hora <= 17) {
    console.log("Boa tarde!")
} else if (hora >= 18 && hora <= 23) {
    console.log("Boa noite!")
}else {
    console.log("Oiii!")
}

const tenhoDinheiro = true

if (tenhoDinheiro) {
    console.log("Vou sair de casa")
} else {
    console.log("Vou ficar em casa")
}