import './footer.css';

export const footer = () => {
  const footer = document.createElement('footer');
  footer.innerHTML = `<p>Made with love by <a href="https://github.com/willCodeForCandy">@Viru</a></p>`;
  document.body.append(footer);
};
