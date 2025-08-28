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

  // If the key is being held down, don't play the note again
  if (e.repeat) {
    return;
  }
}