import { memotest } from '../../pages/memotest/memotest';
import { board, makeTaTeTi } from '../../pages/tic-tac-toe/tateti';
import { fillBoard } from '../tateti/board/board';
import './header.css';
const games = [, ,];
export const header = () => {
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  const liTateti = document.createElement('li');
  const limemotest = document.createElement('li');
  const lirpsls = document.createElement('li');
  liTateti.innerText = 'Ta-Te-Ti';
  limemotest.innerText = 'Memotest';
  lirpsls.innerText = '🪨📄✂️🦎🖖';
  liTateti.addEventListener('click', () => {
    makeTaTeTi();
    fillBoard(board);
    const choosePrompt = document.createElement('h2');
    choosePrompt.innerText = 'Elige si juegas con X o con O';
    choosePrompt.classList.add('eleccion');
    document
      .querySelector('#app')
      .insertBefore(choosePrompt, document.querySelector('.players'));
  });
  limemotest.addEventListener('click', memotest);
  ul.append(liTateti, limemotest, lirpsls);
  nav.append(ul);
  header.append(nav);
  document.body.prepend(header);
};
