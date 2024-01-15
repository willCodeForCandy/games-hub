export const computerChoice = () => {
  const rnd = Math.random();
  let pcHand = '';
  if (rnd < 0.2) {
    pcHand = 'rock';
  } else if (rnd < 0.4) {
    pcHand = 'paper';
  } else if (rnd < 0.6) {
    pcHand = 'scissors';
  } else if (rnd < 0.8) {
    pcHand = 'lizard';
  } else {
    pcHand = 'spock';
  }
  return pcHand;
};
