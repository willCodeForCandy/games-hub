import { fillBoard } from './src/components/board/board';
import { board } from './src/data/board';
import { makeTaTeTi } from './src/pages/tic-tac-toe/tateti';
import './style.css';

makeTaTeTi(board);
fillBoard(board);
