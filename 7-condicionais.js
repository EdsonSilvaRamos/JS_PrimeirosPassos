console.log(`Trabalhando com Condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);


console.log(`Destinos possíveis`);
console.log(listaDeDestinos);

const idadeComprador = 17
const estaAcompanhado = true;

if (idadeComprador >= 18) {
    listaDeDestinos.splice(1, 1);
}
else if (estaAcompanhado) {
    console.log(`Está acompanhado`)
    listaDeDestinos.splice(1, 1);
} else {
    console.log(`Comprador menor de idade, não posso vender`)
}

console.log(listaDeDestinos);

// console.log(idadeComprador > 18)
// console.log(idadeComprador < 18)
// console.log(idadeComprador >= 18)
// console.log(idadeComprador <= 18)
// console.log(idadeComprador == 18)
// console.log(idadeComprador != 18)









