import { fillBoard } from '../../components/tateti/board/board';
import { scoreBoard } from '../../components/tateti/scoreBoard/scoreBoard';
import { players } from '../../data/tateti/players';
import { empate, winCondition } from '../../functions/win';
import './tateti.css';

const app = document.querySelector('#app');
export let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];
let win = false;
let activePlayer = 'x';

// Pinto la página del 3 en raya (título, puntajes, y tablero)
export const makeTaTeTi = () => {
  app.innerHTML = '';
  const board$$ = document.createElement('div');
  board$$.id = 'board';
  app.append(scoreBoard(players), board$$);
  document.body.append(app);
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
};

// Función para que el usuario elija si juga con la X o el O. Se usa en scoreBoard.js, que es el componente donde está el puntaje y se muestra quién está jugando en ese momento
export const setPlayer = (event) => {
  event.target.classList.add('active');
  activePlayer = event.target.id;
  const buttons = document.querySelectorAll('.select');
  for (const button of buttons) {
    button.classList.remove('select');
    button.removeEventListener('click', setPlayer);
  }
  document.querySelector('.eleccion').remove();
};

// Esta es la función que contiene la lógica del juego. Se activa a partir de un escuchador de eventos ubicado en cada una de las casillas del tablero
export const addSymbol = (line, column) => {
  if (board[line][column] === '') {
    board[line][column] = activePlayer; // registra qué jugador hizo click y en qué lugar del tablero

    fillBoard(board); //pinta el tablero con la nueva jugada agregada
    win = winCondition(board); //chequea si esa jugada gana la partida

    const playerScoreBoard = document.querySelector(`#${activePlayer} > h2`);
    setTimeout(() => {
      // espero 100ms para dar tiempo a que cambie el tablero. De lo contrario la alerta salta antes de que se vea que pasó
      if (win) {
        const winBanner = document.createElement('div');
        const winMessage = document.createElement('h3');
        winMessage.innerText = `¡Ganó ${activePlayer}!`;
        winBanner.classList.add('win-banner');
        winBanner.append(winMessage);
        app.append(winBanner);
        setTimeout(() => {
          playerScoreBoard.innerText = Number(playerScoreBoard.innerText) + 1;
          board = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
          ];
          fillBoard(board);
          winBanner.remove();
        }, 1000);
      } else if (empate(board)) {
        const tieBanner = document.createElement('div');
        const tieMessage = document.createElement('h3');
        tieMessage.innerText = '¡Empate!';
        tieBanner.classList.add('win-banner');
        tieBanner.append(tieMessage);
        app.append(tieBanner);
        setTimeout(() => {
          board = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
          ];
          fillBoard(board);
          tieBanner.remove();
        }, 1000);
      } else {
        console.log('empate:', empate(board));
        activePlayer = activePlayer === 'x' ? 'o' : 'x';
        const buttons = document.querySelectorAll('.players > div');
        for (const button of buttons) {
          button.classList.toggle('active'); //cambia la clase para que se muestre qué jugador está activo
        }
      }
    }, 100);
  }
};
