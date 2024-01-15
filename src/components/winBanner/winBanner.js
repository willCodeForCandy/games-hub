import './winBanner.css';

export const winBanner = (parentNode, message = '¡Ganaste!') => {
  const winBanner = document.createElement('div');
  const winMessage = document.createElement('h3');
  winMessage.innerText = message;
  winBanner.classList.add('win-banner');
  winBanner.append(winMessage);
  parentNode.append(winBanner);
  setTimeout(() => {
    winBanner.remove();
  }, 1500);
};
