import { decorateHeader } from '../../components/header/header';
import {
  paintIcons,
  playerBoardListeners,
  resetScores,
  scorePC,
  scoreUser
} from '../../components/rpsls/playerBoardIcons/playerBoardIcons';
import './rpsls.css';

export const rpsls = () => {
  const app = document.querySelector('#app');
  app.innerHTML = '';
  const rpsls = document.createElement('section');
  const divUser = document.createElement('div');
  const puntajeUser = document.createElement('h2');
  const jugadaUser = document.createElement('div');
  const puntajePC = document.createElement('h2');
  const jugadaPC = document.createElement('div');
  const divPC = document.createElement('div');
  const instrucciones = document.createElement('article');
  const imagenInstrucciones = document.createElement('img');
  const tituloInstrucciones = document.createElement('h3');
  const textoInstrucciones = document.createElement('p');
  const divInstrucciones = document.createElement('div');
  rpsls.id = 'rpsls';
  divUser.classList.add('jugador');
  divPC.classList.add('pc');
  puntajeUser.innerText = `Usuario: ${scoreUser}`;
  puntajePC.innerText = `Computadora: ${scorePC}`;

  paintIcons(jugadaUser);
  paintIcons(jugadaPC);
  const resetButton = document.createElement('button');
  resetButton.innerText = 'Reset scores';
  resetButton.addEventListener('click', () => {
    resetScores();
    puntajeUser.innerText = `Usuario: ${scoreUser}`;
    puntajePC.innerText = `Computadora: ${scorePC}`;
  });
  imagenInstrucciones.src = '/assets/rpsls/rpsls.png';
  tituloInstrucciones.textContent = 'Reglas del juego:';
  textoInstrucciones.textContent =
    'La tijera corta el papel, el papel cubre la roca, la roca aplasta a la lagartija, la lagartija envenena a Spock, Spock aplasta la tijera, la tijera decapita a la lagartija, la lagartija se come el papel, el papel refuta a Spock, Spock vaporiza la roca y, como siempre, la roca aplasta a la tijera.';
  divUser.append(puntajeUser, jugadaUser);
  divPC.append(puntajePC, jugadaPC);
  divInstrucciones.append(imagenInstrucciones, textoInstrucciones);
  instrucciones.append(tituloInstrucciones, divInstrucciones);
  rpsls.append(divUser, divPC, resetButton, instrucciones);
  app.append(rpsls);
};

export const initRPSLS = (e) => {
  decorateHeader(e);
  rpsls();
  playerBoardListeners();
};
