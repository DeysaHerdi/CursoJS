/*
&& -> false && true -> false "o valor mesmo"
|| -> true || false -> true "o valor mesmo"

FALSY
*false = valor literal
0
"" (string vazia)
undefined
null
NaN
*/

// function falaOi() {
//     return "Oi";
// }
//  const vaiExecutar = "false";
//  console.log(vaiExecutar && falaOi())

// console.log(0 || "oi" ||null || "teste" || false || true)

// const corUser = "vermelho";
// const corPadrao = corUser || "preto";
// console.log(corPadrao);

const a = 0;
const b = null;
const c = "0";
const d = false;
const e = NaN;
const f = undefined;
const g = "";
console.log(a || b || c || d || e || f || g);

