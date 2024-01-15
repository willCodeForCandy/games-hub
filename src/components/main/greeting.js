import { gameList } from '../../data/games';
import './greeting.css';

export const greetGuest = () => {
  const app = document.querySelector('#app');
  for (let i = 0; i < window.innerWidth / 40; i++) {
    const invader = document.createElement('img');
    invader.src = '/assets/space-invader.png';
    invader.classList.add('space-invader');
    invader.style.top = `${window.innerHeight * Math.random()}px`;
    invader.style.left = `${window.innerWidth * Math.random()}px`;
    invader.style.filter = `invert(${Math.random() * 100}%)`;
    app.append(invader);
  }
  const bienvenida = document.createElement('h1');
  bienvenida.classList.add('welcome-text');
  bienvenida.innerText = '¡A jugar!';
  bienvenida.addEventListener(
    'click',
    gameList[Math.floor(Math.random() * 3)].function
  );
  app.append(bienvenida);
};
