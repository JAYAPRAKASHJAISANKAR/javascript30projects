const video = document.querySelector('.player__video');
const toggleButton = document.querySelector('.toggle');
const skipButtons = document.querySelectorAll('[data-skip]');
const volumeSlider = document.querySelector('[name="volume"]');
const playbackRateSlider = document.querySelector('[name="playbackRate"]');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');

function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateButton() {
  const icon = video.paused ? '&#9658;' : '&#10074;&#10074;';
  toggleButton.innerHTML = icon;
}

function skip() {
  const skipSeconds = parseFloat(this.dataset.skip);
  video.currentTime += skipSeconds;
}

function handleVolumeChange() {
  video.volume = this.value;
}

function handlePlaybackRateChange() {
  video.playbackRate = this.value;
}

function handleProgress() {
  const progressPercent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${progressPercent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
toggleButton.addEventListener('click', togglePlay);
skipButtons.forEach((button) => button.addEventListener('click', skip));
volumeSlider.addEventListener('change', handleVolumeChange);
playbackRateSlider.addEventListener('change', handlePlaybackRateChange);
progress.addEventListener('click', scrub);

let mousedown = false;
progress.addEventListener('mousedown', () => (mousedown = true));
progress.addEventListener('mouseup', () => (mousedown = false));
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
