import { winBanner } from '../../components/winBanner/winBanner';
import { computerChoice } from '../../functions/computerchoice';
import './rpsls.css';
const choices = [
  {
    name: 'rock',
    defeats: ['scissors', 'lizard'],
    icon: '/assets/rpsls/rock.png'
  },
  {
    name: 'paper',
    defeats: ['rock', 'spock'],
    icon: '/assets/rpsls/paper.png'
  },
  {
    name: 'scissors',
    defeats: ['paper', 'lizard'],
    icon: '/assets/rpsls/scissor.png'
  },
  {
    name: 'lizard',
    defeats: ['paper', 'spock'],
    icon: '/assets/rpsls/lizard.png'
  },
  {
    name: 'spock',
    defeats: ['scissors', 'rock'],
    icon: '/assets/rpsls/spock.png'
  }
];
let scoreUser = 0;
let scorePC = 0;

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
  let paintIcons = (parentNode) => {
    for (const hand of choices) {
      const icon = document.createElement('img');
      icon.src = hand.icon;
      icon.alt = hand.name;
      icon.classList.add('icon', hand.name);
      if (parentNode === jugadaUser) {
        icon.addEventListener('click', () => {
          const yourChoice = choices.find(
            (option) => option.name === hand.name
          );
          const pcHand = computerChoice();
          console.log(yourChoice, pcHand);
          if (
            pcHand === yourChoice.defeats[0] ||
            pcHand === yourChoice.defeats[1]
          ) {
            winBanner(app);
            setTimeout(() => {
              scoreUser++;
            }, 1000);
          } else if (pcHand === yourChoice.name) {
            console.log('DRAW');
          } else {
            setTimeout(() => {
              scorePC++;
            }, 1000);
          }
        });
      }

      parentNode.append(icon);
    }
  };
  paintIcons(jugadaUser);
  paintIcons(jugadaPC);
  imagenInstrucciones.src = '/assets/rpsls/rpsls.png';
  tituloInstrucciones.textContent = 'Reglas del juego:';
  textoInstrucciones.textContent =
    'La tijera corta el papel, el papel cubre la roca, la roca aplasta a la lagartija, la lagartija envenena a Spock, Spock aplasta la tijera, la tijera decapita a la lagartija, la lagartija se come el papel, el papel refuta a Spock, Spock vaporiza la roca y, como siempre, la roca aplasta a la tijera.';
  divUser.append(puntajeUser, jugadaUser);
  divPC.append(puntajePC, jugadaPC);
  divInstrucciones.append(imagenInstrucciones, textoInstrucciones);
  instrucciones.append(tituloInstrucciones, divInstrucciones);
  rpsls.append(divUser, divPC, instrucciones);
  app.append(rpsls);
};
