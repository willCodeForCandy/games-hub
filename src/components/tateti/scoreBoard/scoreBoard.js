import { setPlayer } from '../../../pages/tic-tac-toe/tateti';
import './scoreBoard.css';

export const scoreBoard = (listOfPlayers) => {
  const players = document.createElement('div');
  players.classList.add('players');

  for (const player of listOfPlayers) {
    const button = document.createElement('div');
    const icon = document.createElement('img');
    const score = document.createElement('h2');
    icon.src = player.symbol;
    score.textContent = player.score;
    button.append(icon, score);
    button.id = player.player;
    button.classList.add('select');
    button.addEventListener('click', setPlayer);
    icon.classList.add('icon');
    players.append(button);
  }

  return players;
};
