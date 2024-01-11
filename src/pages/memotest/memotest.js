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
export const memotest = () => {
  const app = document.querySelector('#app');
  app.innerHTML = '';
  const memotest = document.createElement('section');

  const puntaje = document.createElement('h2');
  const tablero = document.createElement('div');
  tablero.id = 'memotest';
  puntaje.innerText = 'Puntaje: 0';

  for (const imagen of piezas) {
    const contenedor = document.createElement('div');
    contenedor.classList.add('tarjeta-memotest');
    const img = document.createElement('img');
    img.src = imagen;
    contenedor.append(img);
    tablero.append(contenedor);
  }
  for (const imagen of piezas) {
    const contenedor = document.createElement('div');
    contenedor.classList.add('tarjeta-memotest');
    const img = document.createElement('img');
    img.src = imagen;
    contenedor.append(img);
    tablero.append(contenedor);
  }
  memotest.append(puntaje, tablero);
  app.append(memotest);
};
