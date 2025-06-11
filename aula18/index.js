// function criaPessoa(nome, sobrenome, idade) {
//   return {
//     nome,
//     sobrenome,
//     idade,
//   };
// }

// const p1 = criaPessoa("Deysa", "Barros", 20);
// console.log(p1, p1.sobrenome);

const pessoa1 = {
    nome: "Deysa",
    sobrenome: "Barros",
    idade: 20,
    fala() {
        console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    },
    incrementaIdade() {
        this.idade++;
    },
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();