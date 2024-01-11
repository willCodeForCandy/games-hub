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
let tarjetas = [];
let score = 0;
export const memotest = () => {
  const app = document.querySelector('#app');
  app.innerHTML = '';
  const memotest = document.createElement('section');
  const puntaje = document.createElement('h2');
  const tablero = document.createElement('div');
  tablero.id = 'memotest';
  puntaje.innerText = `Puntaje: ${score}`;

  for (const imagen of piezasDesordenadas) {
    const contenedor = document.createElement('div');
    contenedor.classList.add('tarjeta-memotest');
    const flipCardInner = document.createElement('div');
    flipCardInner.classList.add('flip-card-inner');
    const cardFront = document.createElement('div');
    cardFront.classList.add('card-front');
    const cardBack = document.createElement('div');
    cardBack.classList.add('card-back');
    const img = document.createElement('img');
    img.src = imagen;
    contenedor.addEventListener('click', flipCard);
    cardBack.append(img);
    flipCardInner.append(cardFront, cardBack);
    contenedor.append(flipCardInner);
    tablero.append(contenedor);
  }

  memotest.append(puntaje, tablero);
  app.append(memotest);
};

const flipCard = (e) => {
  const clickedCard = e.target.parentElement.querySelector('img');
  const tarjetaMemotest = e.target.parentElement.parentElement;
  if (clickedCard === flippedCards[0]) return;
  tarjetaMemotest.classList.add('flipped');

  if (flippedCards.length === 0) {
    flippedCards.push(clickedCard);
    tarjetas.push(tarjetaMemotest);
  } else {
    flippedCards.push(clickedCard);
    tarjetas.push(tarjetaMemotest);
    console.log(flippedCards[0].src);
    if (flippedCards[0].src === flippedCards[1].src) {
      setTimeout(() => {
        tarjetas.forEach((card) => card.classList.add('matched'));
        flippedCards = [];
        tarjetas = [];
        score++;
        document.querySelector('h2').innerText = `Puntaje: ${score}`;
        if (score === 8) {
          const app = document.querySelector('#app');
          const winBanner = document.createElement('div');
          const winMessage = document.createElement('h3');
          winMessage.innerText = '¡Ganaste!';
          winBanner.classList.add('win-banner');
          winBanner.append(winMessage);
          app.append(winBanner);
          setTimeout(() => {
            score = 0;
            memotest();
            winBanner.remove();
          }, 3000);
        }
      }, 1000);
    } else {
      setTimeout(() => {
        tarjetas.forEach((card) => card.classList.remove('flipped'));
        flippedCards = [];
        tarjetas = [];
      }, 1000);
    }
  }
};
