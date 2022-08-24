const body = document.querySelector('body');

const ash = document.querySelector('#ash');

const charmander = document.querySelector('#charmander');
const zubat = document.querySelector('#zubat');
const pikaxu = document.querySelector('#pikaxu');

const audio = document.querySelector('audio');

audio.volume = 0.1;

const control = document.querySelector('.music-control');

control.addEventListener('click', (event) => {
  event.target.src = `!${event.target.src}`.includes('on.png') ? '../assets/icons/off.png' : '../assets/icons/on.png';

  `${event.target.src}`.includes('on.png') ? audio.play() : audio.pause();
});


function getRightPosition() {
  return parseInt(ash.style.right.split('px')[0]) || 2;
}

function getTopPosition() {
  return parseInt(ash.style.top.split('px')[0]) || 2;
}

let findCharmander = false;
let findPikaxu = false;
let findZubat = false;

function verifyLookPokemon(to) {

  const pokemonRightPosition = to === 'ArrowLeft' ? `${getRightPosition() - 64}px` : `${getRightPosition() + 64}px`;

  if (findCharmander) {
    const newTopPosition = to === 'ArrowUp' ? `${getTopPosition() + 8}px` : `${getTopPosition() - 8}px`;

    charmander.style.right = pokemonRightPosition;
    charmander.style.top = newTopPosition;
  }

  if (findPikaxu) {
    const newTopPosition = to === 'ArrowUp' ? `${getTopPosition() + 36}px` : `${getTopPosition() - 36}px`;

    pikaxu.style.right = pokemonRightPosition;
    pikaxu.style.top = newTopPosition;
  }

  if (findZubat) {
    const newTopPosition = to === 'ArrowUp' ? `${getTopPosition() + 72}px` : `${getTopPosition() - 72}px`;

    zubat.style.right = pokemonRightPosition;
    zubat.style.top = newTopPosition;
  }

  if ((getTopPosition() >= 2 && getTopPosition() <= 98)
    && (getRightPosition() >= 130 && getRightPosition() <= 216)) {
    charmander.style.display = 'block';
    findCharmander = true;
    return;
  }

  if ((getTopPosition() >= 474 && getTopPosition() <= 594)
    && (getRightPosition() <= 138 && getRightPosition() >= 42)) {
    zubat.style.display = 'block';
    findZubat = true;
    return;
  }

  if ((getTopPosition() >= 266 && getTopPosition() <= 394)
    && (getRightPosition() >= 546 && getRightPosition() <= 650)) {
    pikaxu.style.display = 'block';
    findPikaxu = true;
    return;
  }

}

body.addEventListener('keydown', (event) => {

  switch (event.code) {
    case 'ArrowLeft':
      if (getRightPosition() < 770) {
        ash.style.right = `${getRightPosition() + 8}px`;
        ash.src = '../assets/left.png';
      }
      break;
    case 'ArrowRight':
      if (getRightPosition() > 2) {
        ash.style.right = `${getRightPosition() - 8}px`;
        ash.src = '../assets/right.png';
      }
      break;
    case 'ArrowDown':
      if (getTopPosition() < 625) {
        ash.style.top = `${getTopPosition() + 8}px`;
        ash.src = '../assets/front.png';
      }
      break;
    case 'ArrowUp':
      if (getTopPosition() > 2) {
        ash.style.top = `${getTopPosition() - 8}px`;
        ash.src = '../assets/back.png';
      }
      break;
    default:
      break;
  }

  verifyLookPokemon(event.code);
});