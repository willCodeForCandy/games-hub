import './memotest.css';

const piezas = [
  '/assets/memotest/aguacate.png',
  '/assets/memotest/banana.png',
  '/assets/memotest/kiwi.png',
  '/assets/memotest/manzana.png',
  '/assets/memotest/remolacha.png',
  '/assets/memotest/sandia.png',
  '/assets/memotest/tomate.png',
  '/assets/memotest/zanahoria.png'
];
const doblePiezas = piezas.concat(piezas);
const piezasDesordenadas = doblePiezas.sort(() => Math.random() - 0.5);
let flippedCards = [];

export const memotest = () => {
  const app = document.querySelector('#app');
  app.innerHTML = '';
  const memotest = document.createElement('section');
  const puntaje = document.createElement('h2');
  const tablero = document.createElement('div');
  tablero.id = 'memotest';
  puntaje.innerText = 'Puntaje: 0';

  for (const imagen of piezasDesordenadas) {
    const contenedor = document.createElement('div');
    contenedor.classList.add('tarjeta-memotest');
    const img = document.createElement('img');
    img.src = imagen;
    img.addEventListener('click', flipCard);
    contenedor.append(img);
    tablero.append(contenedor);
  }

  memotest.append(puntaje, tablero);
  app.append(memotest);
};

const flipCard = (e) => {
  const clickedCard = e.target;

  if (clickedCard === flippedCards[0]) return;
  console.log(flippedCards);
  e.target.classList.add('flipped');

  if (flippedCards.length === 0) {
    flippedCards.push(clickedCard);
    console.log(flippedCards);
  } else {
    flippedCards.push(clickedCard);
    console.log(flippedCards[0].src);
    if (flippedCards[0].src === flippedCards[1].src) {
      setTimeout(() => {
        flippedCards.forEach((card) => card.classList.add('matched'));
        flippedCards = [];
      }, 1000);
    } else {
      setTimeout(() => {
        flippedCards.forEach((card) => card.classList.remove('flipped'));
        flippedCards = [];
      }, 1000);
    }
  }
};
