require('ipc').on('play-pause', function() {
  var playButtons = document.getElementsByClassName("ytp-play-button");
  if(playButtons.length > 0) {
    playButtons[0].click();
  }
});
