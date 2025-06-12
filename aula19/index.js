/*

Primitivos(imutáveis) - string, number, boolean, undefined,
null (bigint, symbol) - valores copiados
EX:
*/
let a = "A";
let b = a; // Cópia
a = "Outra coisa";
console.log(b);

/*
Referecias (mutáveis) - arrays, objects,
functions - valores passados por referência
EX:
 */

let c = [1, 2, 3];
let d = c;// Referencia
c.push(4);
console.log(c,d);

// para copiar o valor é so usar o spread operator que é [...]
//EX:
let e = [1, 2, 3];
let f = [...e];
e.push(4);
console.log(e,f);
