// This is the onclick function, restart game (page refresh) for restart button

function buttonRestart() {
    window.location.reload();
} 

// This is the onclick function, when action button is click on, it makes welcome text div disappear and and other div appear instead. Also plays a sound file. 

var cowSound = new Audio();
	cowSound.src = "assets/audio/cow-bellow.mp3";
	
var cowSoundcheer = new Audio();
	cowSoundcheer.src = "assets/audio/cheering.mp3";
	
var wronganswerSound = new Audio();
	wronganswerSound.src = "assets/audio/incorrect-sound.mp3";

function buttonQuestion() { 
	document.getElementById("game-title").style.display="none"; 
	document.getElementById("question").style.display="block"; 
	cowSound.play();
}

// This is the onclick function, when images are click on

function myFunction1() {
  document.getElementById("card1").style.border = "15px solid red";
  wronganswerSound.play();
}

function myFunction2() {
  document.getElementById("card2").style.border = "15px solid green";
  cowSound.pause();
  cowSoundcheer.play();
}

function myFunction3() {
  document.getElementById("card3").style.border = "15px solid red";
  wronganswerSound.play();
}