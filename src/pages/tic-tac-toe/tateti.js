import { fillBoard } from '../../components/board/board';
import { scoreBoard } from '../../components/scoreBoard/scoreBoard';
import { board } from '../../data/board';
import { winCondition } from '../../functions/win';
import './tateti.css';
const body = document.body;
const app = document.querySelector('#app');
let win = false;
let player = 'x';

export const setPlayer = (event) => {
  event.target.classList.add('active');
  player = event.target.id;
  const buttons = document.querySelectorAll('.select');
  for (const button of buttons) {
    button.classList.remove('select');
    button.removeEventListener('click', setPlayer);
  }
};

export const addSymbol = (line, column) => {
  if (board[line][column] === '') {
    board[line][column] = player;
    if (player === 'x') {
      player = 'o';
    } else {
      player = 'x';
    }
    console.log(board);
    fillBoard(board);
    win = winCondition(board);
    console.log(win);
    if (win) {
      alert('Felicidades! Ganaste!');
    }
  }
};

export const makeTaTeTi = (board) => {
  app.innerHTML = '';
  const board$$ = document.createElement('div');
  board$$.id = 'board';
  const title = document.createElement('h1');
  title.textContent = 'Ta-Te-Ti';
  app.append(title, scoreBoard(), board$$);
  body.append(app);
};
