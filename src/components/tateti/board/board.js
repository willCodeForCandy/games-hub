import { addSymbol } from '../../../pages/tic-tac-toe/tateti';
import './board.css';

export const fillBoard = (board) => {
  const emptyBoard = document.querySelector('#board');
  emptyBoard.innerHTML = '';
  for (let line = 0; line < board.length; line++) {
    for (let column = 0; column < board[line].length; column++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.textContent = board[line][column];
      cell.addEventListener('click', () => addSymbol(line, column));
      emptyBoard.append(cell);
    }
  }
};
