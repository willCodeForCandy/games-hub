import { setPlayer } from '../../pages/tic-tac-toe/tateti';
import './scoreBoard.css';

export const scoreBoard = () => {
  const players = document.createElement('div');
  players.classList.add('players');
  const buttonX = document.createElement('div');
  const buttonO = document.createElement('div');
  const iconX = document.createElement('img');
  const iconO = document.createElement('img');
  iconX.src = '/assets/tateti/cross.svg';
  iconO.src = '/assets/tateti/circle.svg';
  buttonO.append(iconO);
  buttonX.append(iconX);
  buttonO.id = 'o';
  buttonX.id = 'x';
  buttonO.classList.add('select');
  buttonX.classList.add('select');
  buttonO.addEventListener('click', setPlayer);
  buttonX.addEventListener('click', setPlayer);
  iconO.classList.add('icon');
  iconX.classList.add('icon');
  players.append(buttonO, buttonX);
  return players;
};
