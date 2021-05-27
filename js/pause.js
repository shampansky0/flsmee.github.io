var button = document.getElementById("button");
button.addEventListener("click", playPause);
audio = document.getElementById("audio");
var video = document.getElementById("myVideo");
function playPause() {
if (audio.paused) {
  audio.play();
  video.play();
  }
else  {
  audio.pause();
  video.pause();
  }
}
