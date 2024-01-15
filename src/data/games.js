import { memotest } from '../pages/memotest/memotest';
import { initRPSLS } from '../pages/rpsls/rpsls';
import { initTateti } from '../pages/tic-tac-toe/tateti';

export const gameList = [
  {
    game: 'Ta-Te-Ti',
    function: initTateti
  },
  {
    game: 'Memotest',
    function: memotest
  },
  {
    game: '🪨📄✂️🦎🖖',
    function: initRPSLS
  }
];
