const numero = Number(prompt("Digite um número"));
const numeroTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto");

numeroTitulo.innerHTML = numero;
texto.innerHTML += `<p/>Seu número + 2 é ${numero + 2}</p>
Raiz quadrada: ${numero ** 0.5} </br>
${numero} é inteiro: ${Number.isInteger(numero)}</br>
É NaN: ${Number.isNaN(numero)}</br>
Arrendondando para baixo: ${Math.floor(numero)}</br>
Arrendondando para cima: ${Math.ceil(numero)}</br>
Com duas casas decimais: ${numero.toFixed(2)}</br>
`;
