// This is the onclick function, (page refresh) for restart button

function buttonRestart() {

	window.location.reload();

}

// This is the onclick function, when user clicks on the "How to Play" Button

function helpText() {
	document.getElementById("game-container").style.visibility = "hidden";
	document.getElementById("help-row").style.display = "block";
}

// This function makes text appear after game is over.

function gameOverText() {
	document.getElementById("game-container").style.visibility = "hidden";
	document.getElementById("gameover-playagain").style.display = "block";
	taadaaSound.play();
}

function pressPlay() {
	document.getElementById("game-title-heading").style.display = "none";
	document.getElementById("which-animal").style.display = "block";
}

function rightOrWrongAnswerDisappear() {
	document.getElementById("rightorwrong").style.display = "none";
}

function rightOrWrongAnswerReappear() {
	document.getElementById("rightorwrong").style.display = "block";
}

function disableButton() {
	document.getElementById("greenButton").disabled = true;
}

// Event Listeners for onclick functions 

var helpButton = document.getElementById("how-to-play");
helpButton.addEventListener("click", helpText);

var playAgainButton = document.getElementById("play-again");
playAgainButton.addEventListener("click", buttonRestart);


// All global variables

// Game Sounds variables here:

var taadaaSound = new Audio();
taadaaSound.src = "assets/audio/Taadaasound.mp3";

var shuffleSound = new Audio();
shuffleSound.src = "assets/audio/shuffle.mp3";

var wrongAnswerSound = new Audio();
wrongAnswerSound.src = "assets/audio/incorrect-sound.mp3";

var rightAnswerSound = new Audio();
rightAnswerSound.src = "assets/audio/cheering.mp3";

//  Animal Picture & Sound Variables:	

var catPic = '<img src="assets/images/cat.jpg">';
catPic.src = '<img src="assets/images/cat.jpg">';
var catSound = new Audio();
catSound.src = "assets/audio/cat-meow.mp3";

var cowPic = '<img src="assets/images/cow.jpg">';
cowPic.src = '<img src="assets/images/cow.jpg">';
var cowSound = new Audio();
cowSound.src = "assets/audio/cow-bellow.mp3";

var dogPic = '<img src="assets/images/dog.jpg">';
dogPic.src = '<img src="assets/images/dog.jpg">';
var dogSound = new Audio();
dogSound.src = "assets/audio/dog-bark.mp3";

var duckPic = '<img src="assets/images/duck.jpg">';
duckPic.src = '<img src="assets/images/duck.jpg">';
var duckSound = new Audio();
duckSound.src = "assets/audio/duck-sound.mp3";

var frogPic = '<img src="assets/images/frog.jpg">';
frogPic.src = '<img src="assets/images/frog.jpg">';
var frogSound = new Audio();
frogSound.src = "assets/audio/frog-sound.mp3";

var henPic = '<img src="assets/images/hen.jpg">';
henPic.src = '<img src="assets/images/hen.jpg">';
var henSound = new Audio();
henSound.src = "assets/audio/hen-sound.mp3";

var horsePic = '<img src="assets/images/horse.jpg">';
horsePic.src = '<img src="assets/images/horse.jpg">';
var horseSound = new Audio();
horseSound.src = "assets/audio/horse-sound.mp3";

var sheepPic = '<img src="assets/images/sheep.jpg">';
sheepPic.src = '<img src="assets/images/sheep.jpg">';
var sheepSound = new Audio();
sheepSound.src = "assets/audio/sheep-sound.mp3";

var pigPic = '<img src="assets/images/pig.jpg">';
pigPic.src = '<img src="assets/images/pig.jpg">';
var pigSound = new Audio();
pigSound.src = "assets/audio/pig-sound.mp3";

// Variables for ID's in index.html

let playGameHelpButton = document.querySelector('#play-game');
let greenButton = document.querySelector('#greenButton');

let rightOrWrong = document.querySelector('#right-or-wrong');
let cards = document.querySelectorAll('.card');
let turnsLeftSpan = document.querySelector('#turnsLeftSpan');
let currentCard;
let turnsLeft = 5;

// Additional Event Listeners

playGameHelpButton.onclick = () => buttonRestart();
greenButton.onclick = () => (randomShuffle(), pressPlay(), disableButton());
cards.forEach(card => card.onclick = () => checkAnswer(event));

// randomShuffle function - This shuffles the Animal Cards from the array

function randomShuffle() {
	let arr = [catPic, cowPic, dogPic, duckPic, frogPic, henPic, horsePic, sheepPic, pigPic];

	if (turnsLeft <= 0) {
		gameOverText();
	}
	else {
		turnsLeft--;
		turnsLeftSpan.innerText = turnsLeft;

		// set card value for each card, from the array:

		cards.forEach(card => {
			let index = Math.floor(Math.random() * arr.length);
			let value = arr[index];
			card.innerText = value;
			card.dataset.answer = value;
			card.innerHTML = value;
			
			// remove animal from array
			arr.splice(index, 1);
		});

		// assign the current Answer from one of the cards dataset values

		currentCard = cards[Math.floor(Math.random() * 3)].dataset.answer;
		console.log("Current Card is: " + currentCard);

		switch (currentCard) {
			case henPic:
				henSound.play();
				break;
			case catPic:
				catSound.play();
				break;
			case dogPic:
				dogSound.play();
				break;
			case cowPic:
				cowSound.play();
				break;
			case duckPic:
				duckSound.play();
				break;
			case frogPic:
				frogSound.play();
				break;
			case horsePic:
				horseSound.play();
				break;
			case sheepPic:
				sheepSound.play();
				break;
			case pigPic:
				pigSound.play();
		}
	}
}

// check answer function
function checkAnswer(event) {
	let card = event.currentTarget.dataset.answer;
	if (card === currentCard) {
		rightOrWrongAnswerReappear();
		rightOrWrong.innerText = "You're Right, Well Done!";
		rightAnswerSound.play();
		setTimeout(rightOrWrongAnswerDisappear, 3000);
		setTimeout(randomShuffle, 3900);

	}
	else {
		rightOrWrongAnswerReappear();
		rightOrWrong.innerText = `You're Wrong, Try Again! `;
		wrongAnswerSound.play();
		setTimeout(rightOrWrongAnswerDisappear, 2000);
	}
}
