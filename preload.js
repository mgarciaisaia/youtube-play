require('electron').ipcRenderer.on('play-pause', function(event) {
  var playButtons = document.getElementsByClassName("ytp-play-button");
  if(playButtons.length > 0) {
    playButtons[0].click();
  }
});
