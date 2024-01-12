import './rpsls.css';
const choices = [
  {
    name: 'Rock',
    defeats: ['scissors', 'lizard'],
    icon: '/assets/rpsls/rock.png'
  },
  {
    name: 'Paper',
    defeats: ['rock', 'spock'],
    icon: '/assets/rpsls/paper.png'
  },
  {
    name: 'Scissors',
    defeats: ['paper', 'lizard'],
    icon: '/assets/rpsls/scissor.png'
  },
  {
    name: 'Lizard',
    defeats: ['paper', 'spock'],
    icon: '/assets/rpsls/lizard.png'
  },
  {
    name: 'Spock',
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
  const jugadaUser = document.createElement('ul');
  const puntajePC = document.createElement('h2');
  const jugadaPC = document.createElement('ul');
  const divPC = document.createElement('div');
  const instrucciones = document.createElement('article');
  const imagenInstrucciones = document.createElement('img');
  const textoInstrucciones = document.createElement('p');
  rpsls.id = 'rpsls';
  divUser.classList.add('jugador');
  divPC.classList.add('pc');
  puntajeUser.innerText = `Usuario: ${scoreUser}`;
  puntajePC.innerText = `Computadora: ${scorePC}`;
  let paintIcons = (parentNode) => {
    for (const hand of choices) {
      const iconLi = document.createElement('li');
      const icon = document.createElement('img');
      icon.src = hand.icon;
      icon.alt = hand.name;
      icon.classList.add('icon', hand.name);
      if (parentNode === jugadaUser) {
        icon.addEventListener('click', () => {
          console.log(hand.name);
        });
      }
      iconLi.append(icon);
      parentNode.append(iconLi);
    }
  };
  paintIcons(jugadaUser);
  paintIcons(jugadaPC);
  imagenInstrucciones.src = '/assets/rpsls/rpsls.png';
  textoInstrucciones.textContent =
    'La tijera corta al papel, el papel cubre la roca, la roca aplasta a la lagartija, la lagartija envenena a Spock, Spock aplasta la tijera, la tijera decapita a la lagartija, la lagartija se come el papel, el papel refuta a Spock, Spock vaporiza la roca y, lógicamente, la roca aplasta a la tijera.';
  divUser.append(puntajeUser, jugadaUser);
  divPC.append(puntajePC, jugadaPC);
  instrucciones.append(imagenInstrucciones, textoInstrucciones);
  rpsls.append(divUser, divPC, instrucciones);
  app.append(rpsls);
};
