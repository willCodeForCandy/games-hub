import { fillBoard } from '../../components/tateti/board/board';
import { scoreBoard } from '../../components/tateti/scoreBoard/scoreBoard';
import { board } from '../../data/tateti/board';
import { players } from '../../data/tateti/players';
import { winCondition } from '../../functions/win';
import './tateti.css';

const app = document.querySelector('#app');
let win = false;
let player = 'x';

// Pinto la página del 3 en raya (título, puntajes, y tablero)
export const makeTaTeTi = () => {
  app.innerHTML = '';
  const board$$ = document.createElement('div');
  board$$.id = 'board';
  const title = document.createElement('h1');
  title.textContent = 'Ta-Te-Ti';
  app.append(title, scoreBoard(players), board$$);
  document.body.append(app);
};

// Función para que el usuario elija si juga con la X o el O. Se usa en scoreBoard.js, que es el componente donde está el puntaje y se muestra quién está jugando en ese momento
export const setPlayer = (event) => {
  event.target.classList.add('active');
  player = event.target.id;
  const buttons = document.querySelectorAll('.select');
  for (const button of buttons) {
    button.classList.remove('select');
    button.removeEventListener('click', setPlayer);
  }
};

// Esta es la función que contiene la lógica del juego. Se activa a partir de un escuchador de eventos ubicado en cada una de las casillas del tablero
export const addSymbol = (line, column) => {
  if (board[line][column] === '') {
    board[line][column] = player; // registra qué jugador hizo click y en qué lugar del tablero

    fillBoard(board); //pinta el tablero con la nueva jugada agregada
    win = winCondition(board); //chequea si esa jugada gana la partida
    console.log(win);
    setTimeout(() => {
      // espero 200ms para dar tiempo a que cambie el tablero. De lo contrario la alerta salta antes de que se vea que pasó
      if (win) {
        alert(`1 punto para el jugador ${player}`);
      } else {
        if (player === 'x') {
          player = 'o';
        } else {
          player = 'x';
        }
        const buttons = document.querySelectorAll('.players > div');
        for (const button of buttons) {
          button.classList.toggle('active'); //cambia la clase para que se muestre qué jugador está activo
        }
      }
    }, 100);
  }
};
