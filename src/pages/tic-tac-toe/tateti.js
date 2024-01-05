import './tateti.css';
const body = document.body;
const app = document.querySelector('#app');
export const board = [
  ['x', '', ''],
  ['', '', ''],
  ['', 'o', '']
];
const win = false;
const addSymbol = (line, column) => {
  board[line][column] = 'a';
  makeTaTeTi(board);
};
export const makeTaTeTi = (board) => {
  app.innerHTML = '';
  const board$$ = document.createElement('div');
  board$$.id = 'board';
  const title = document.createElement('h1');
  title.textContent = 'Ta-Te-Ti';

  for (let line = 0; line < board.length; line++) {
    for (let column = 0; column < board[line].length; column++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.textContent = board[line][column];
      cell.addEventListener('click', () => addSymbol(line, column));
      board$$.append(cell);
    }
  }
  app.append(title, board$$);
  body.append(app);
  if (win) {
    alert('Felicidades! Ganaste!');
  }
};
