//Vars 
const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const BLACK_KEYS = ['a', 's', 'd', 'f', 'g'];


const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');


// Select all keys

const keys = document.querySelectorAll('.key');

// Listeners 
keys.forEach((key) => {
  key.addEventListener('click', () => playNote(key));
});

// Handlers
function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);

  noteAudio.currentTime = 0;

  noteAudio.play();

  key.classList.add('active'); 

  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active');
  });

}

//added
document.addEventListener('keydown', (e) => {

  const key = e.key;
  const whiteKeyIndex = WHITE_KEYS.indexOf(key);
  const blackKeyIndex = BLACK_KEYS.indexOf(key);

  if (e.repeat) {
    return;
  }

  if (whiteKeyIndex > -1) {
    playNote(whiteKeys[whiteKeyIndex]);
  }

if (blackKeyIndex > -1) {
    playNote(blackKeys[blackKeyIndex]);
  }
});