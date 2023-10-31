/**
 * Jogo de cartas
 */


const color = require('colors')

// Símbolos para os naipes
const naipes = ['♠'.blue, '♥'.red, '♦'.red, '♣'.blue];

// Valores das cartas
const valores = ['2'.yellow, '3'.yellow, '4'.yellow, '5'.yellow, '6'.yellow, '7'.yellow, '8'.yellow, '9'.yellow, '10'.yellow, 'J'.yellow, 'Q'.yellow, 'K'.yellow, 'A'.yellow];

// Função para desenhar uma carta
function desenharCarta(naipe, valor) {
    const carta = `
    ┌─────────┐
    │ ${valor}       │
    │         │
    │    ${naipe}    │
    │         │
    │       ${valor} │
    └─────────┘
    `.bold;
    return carta;
}

// Função para sortear uma carta aleatória
function sortearCarta() {
    const naipe = naipes[Math.floor(Math.random() * naipes.length)];
    const valor = valores[Math.floor(Math.random() * valores.length)];
    return { naipe, valor };
}

// Sorteie uma carta aleatória
const cartaSorteada = sortearCarta();

// Desenhe a carta sorteada
const cartaDesenhada = desenharCarta(cartaSorteada.naipe, cartaSorteada.valor);

// Exiba a carta no console
console.log('Carta sorteada:');
console.log(cartaDesenhada);
