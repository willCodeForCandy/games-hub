import { gameList } from '../../data/games';
import './header.css';

export const header = () => {
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  for (const game of gameList) {
    const li = document.createElement('li');
    li.innerText = game.game;
    li.addEventListener('click', game.function);
    li.classList.add('underline-animation');
    ul.append(li);
  }

  nav.append(ul);
  header.append(nav);
  document.body.prepend(header);
};

export const decorateHeader = (e) => {
  const headerElements = document.querySelectorAll('.underline-animation');
  for (const link of headerElements) {
    link?.classList.remove('underlined');
  }
  e.target.classList.add('underlined');
};
