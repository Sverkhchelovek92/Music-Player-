console.log("Hello world!");

let song = new Audio();
song.src = "./sounds/test-track.mp3";
song.volume = 0.5;

const playBtn = document.querySelector(".play-btn");
const stopBtn = document.querySelector(".stop-btn");
const rewindBtn = document.querySelector(".rewind-btn");

const volumeRange = document.querySelector(".volume-range");

stopBtn.classList.add("hidden");

let isPlaying = false;

volumeRange.addEventListener("change", () => {
  const volumeValue = volumeRange.value;
  song.volume = volumeValue;
});

playBtn.addEventListener("click", () => {
  console.log("play");
  song.play();
  isPlaying = true;
  playBtn.classList.add("hidden");
  stopBtn.classList.remove("hidden");
});

stopBtn.addEventListener("click", () => {
  console.log("stop");
  song.pause();
  isPlaying = false;
  playBtn.classList.remove("hidden");
  stopBtn.classList.add("hidden");
});

rewindBtn.addEventListener("click", () => {
  console.log("rewind");
  song.currentTime = 0;
});
