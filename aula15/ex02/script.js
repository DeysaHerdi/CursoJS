const nome = prompt("Qual seu nome?")
const idade = Number(prompt("Qual sua idade?"))
const brincando = document.getElementById("brincando")


document.getElementById("nome").innerHTML = nome
document.getElementById("idade").innerHTML = idade

brincando.innerHTML = `${nome}, voce tem ${idade}, sua idade multiplicada por 2 é ${idade * 2}.
<p/> você tem mais de 18 anos? ${idade >= 18}!`