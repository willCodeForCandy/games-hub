import { choices } from '../../../data/rpsls/handChoices';
import { computerChoice } from '../../../functions/rpsls/computerchoice';
import { rpsls } from '../../../pages/rpsls/rpsls';
import { winBanner } from '../../winBanner/winBanner';
import './playerBoardIcons.css';

export let scoreUser = 0;
export let scorePC = 0;

export const paintIcons = (parentNode) => {
  for (const hand of choices) {
    const icon = document.createElement('img');
    const iconContainer = document.createElement('div');
    icon.src = hand.icon;
    icon.alt = hand.name;
    iconContainer.classList.add('icon', hand.name);
    iconContainer.append(icon);
    parentNode.append(iconContainer);
  }
};

export const playerBoardListeners = () => {
  const playerPlays = document.querySelectorAll('.jugador .icon');
  for (const play of playerPlays) {
    play.classList.add('underline-animation');
    play.addEventListener('click', (ev) => {
      ev.target.classList.add('underlined');
      const yourChoice = choices.find((option) =>
        play.classList.contains(option.name)
      );
      const pcHand = computerChoice();
      console.log(yourChoice, pcHand);
      document.querySelector(`.pc .${pcHand}`).classList.add('underlined');
      if (
        pcHand === yourChoice.defeats[0] ||
        pcHand === yourChoice.defeats[1]
      ) {
        setTimeout(() => {
          winBanner(app, `${yourChoice.name} beats ${pcHand}`);
          scoreUser++;
        }, 1000);
      } else if (pcHand === yourChoice.name) {
        setTimeout(() => {
          // winBanner(app, 'EMPATE');
        }, 1000);
      } else {
        setTimeout(() => {
          winBanner(app, `${pcHand} beats ${yourChoice.name}`);
          scorePC++;
        }, 1000);
      }
      setTimeout(() => {
        rpsls();
        playerBoardListeners();
      }, 2500);
    });
  }
};

export const resetScores = () => {
  scoreUser = 0;
  scorePC = 0;
};
