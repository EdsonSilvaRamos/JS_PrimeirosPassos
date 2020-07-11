console.log("Trabalhando com Condicionais");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);


console.log("Destinos possíveis \n");
console.log(listaDeDestinos);

const idadeComprador = 17
const estaAcompanhado = true;
const temPassagemComprada = true;

// if (idadeComprador >= 18) {
//     listaDeDestinos.splice(1, 1);
// }
// else if (estaAcompanhado) {
//     console.log("Está acompanhado")
//     listaDeDestinos.splice(1, 1);
// } else {
//     console.log("Comprador menor de idade, não posso vender")
// }

if (idadeComprador >= 18 || estaAcompanhado) {
    console.log("É maior ou está acompanhado, venda realizada \n");
    listaDeDestinos.splice(1, 1);
}
else {
    console.log("Comprador menor de idade, não posso vender \n");
}

console.log("Tem passagem para embarque? \n\n");

if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viagem!");
}
else{
    console.log("Não pode embarcar!");
}


console.log(listaDeDestinos);

// console.log(idadeComprador > 18)
// console.log(idadeComprador < 18)
// console.log(idadeComprador >= 18)
// console.log(idadeComprador <= 18)
// console.log(idadeComprador == 18)
// console.log(idadeComprador != 18)