const nome = 'Ana'
const sobrenome = 'Barros'
const idade = 20
const peso = 65.5
const altura = 1.75

let imc = peso / (altura * altura)
let anoNascimento = 2022 - idade

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg, tem ${altura} de altura e seu IMC é de ${imc.toFixed(2)} e nasceu em ${anoNascimento}`)