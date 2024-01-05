import { fillBoard } from '../../components/board/board';
import { scoreBoard } from '../../components/scoreBoard/scoreBoard';
import { board } from '../../data/board';
import './tateti.css';
const body = document.body;
const app = document.querySelector('#app');
export const win = false;

export const addSymbol = (line, column) => {
  if (board[line][column] === '') {
    board[line][column] = 'a';
    console.log(board);
    fillBoard(board);
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
  if (win) {
    alert('Felicidades! Ganaste!');
  }
};
