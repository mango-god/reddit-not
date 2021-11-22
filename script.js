var vid = document.querySelectorAll('video');
vid.forEach((element) => (element.volume = 0.5));

function toggleMuteOne() {
  var videoOne = document.querySelector('.vidOne');

  videoOne.muted = !videoOne.muted;
}
function toggleMuteTwo() {
  var videoTwo = document.querySelector('.vidTwo');

  videoTwo.muted = !videoTwo.muted;
}
function toggleMuteThree() {
  var videoThree = document.querySelector('.vidThree');

  videoThree.muted = !videoThree.muted;
}
function toggleMuteFour() {
  var videoFour = document.querySelector('.vidFour');

  videoFour.muted = !videoFour.muted;
}
function toggleMuteFive() {
  var videoFive = document.querySelector('.vidFive');

  videoFive.muted = !videoFive.muted;
}
