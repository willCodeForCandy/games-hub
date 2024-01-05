import './scoreBoard.css';
export let player = 'hola';
const setPlayer = (event) => {
  event.target.classList.add('active');
  player = event.target.id;
  const buttons = document.querySelectorAll('.select');
  for (const button of buttons) {
    button.classList.remove('select');
    button.removeEventListener('click', setPlayer);
  }
  console.log(player);
};
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
  buttonO.addEventListener('click', (e) => {
    setPlayer(e, player);
  });
  buttonX.addEventListener('click', (e) => {
    setPlayer(e, player);
  });
  iconO.classList.add('icon');
  iconX.classList.add('icon');
  players.append(buttonO, buttonX);
  return players;
};
