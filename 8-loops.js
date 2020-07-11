console.log("Trabalhando com Loops");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);


console.log("\nDestinos possíveis");
console.log(listaDeDestinos);

let temPassagemComprada = false;
const estaAcompanhado = true;

const idadeComprador = 17
let contador = 0;
const podeComprar = idadeComprador >= 18 || estaAcompanhado;

const destino = "São Paulo";
let destinoExiste = false;
//exemplo anterior
// while(contador<3){
    
//     if(listaDeDestinos[contador] == destino){
//         console.log("Destino existe");
//     }
//     else{
//         console.log("Destino não existe");
//     }    

//     contador++;
// }


while(contador<3){
    
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }

    contador++;
}

console.log("Destino existe: ", destinoExiste);

console.log("\n### Loop For ###\n");

for(let cont = 0; cont<3 ; cont++){
    
    if(listaDeDestinos[cont] == destino){
        destinoExiste = true;        
    }
    else{
        destinoExiste = false;
    }    

    console.log("Destino existe: ", destinoExiste);
}

