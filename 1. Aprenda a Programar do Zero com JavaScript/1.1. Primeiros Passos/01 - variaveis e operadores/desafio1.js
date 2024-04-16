/* 
Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

const precoCombustivel = 10;
const kmPorLitro = 10;
const distanciaEmKm = 100;

const valorGasto = (distanciaEmKm / kmPorLitro) * precoCombustivel;

console.log(valorGasto);

// Com outros valores:
const precoCombustivel2 = 9.5;
const kmPorLitro2 = 8.8;
const distanciaEmKm2 = 130;

const valorGasto2 = (distanciaEmKm2 / kmPorLitro2) * precoCombustivel2;

console.log(valorGasto2.toFixed(2)); // toFixed(2) para mostrar apenas 2 casas decimais