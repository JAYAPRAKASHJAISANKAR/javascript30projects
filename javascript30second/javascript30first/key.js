window.addEventListener('keydown', playSound);

function playSound(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);

  if (!audio) return; // Stop the function if no audio element is found

  audio.currentTime = 0; // Rewind audio to the start
  audio.play();

  key.classList.add('playing');
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(event) {
  if (event.propertyName !== 'transform') return; // Skip if it's not a transform property
  this.classList.remove('playing');
}
