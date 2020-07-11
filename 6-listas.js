console.log(`Trabalhando com Listas`);
console.log(`Destinos possíveis`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;
// console.log(salvador, saoPaulo, rioDeJaneiro);

//Declara uma lista já construindo
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

console.log(listaDeDestinos);

//Acrescenta item na lista
listaDeDestinos.push(`Curitiba`);
console.log(listaDeDestinos);


//Remove item da lista
listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);

console.log(listaDeDestinos[0], listaDeDestinos[2]);




