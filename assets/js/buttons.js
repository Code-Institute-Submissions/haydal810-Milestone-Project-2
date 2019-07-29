// This is the onclick function, (page refresh) for restart button

function buttonRestart() {

	window.location.reload();

}

// onClick Function for buttons sound effects

function buttoncardShufflesound() {

	shuffleSound.play();
}

// This is the onclick function, when user clicks on the "How to Play" Button

function helpText() {
	document.getElementById("animal-row").style.display = "none";
	document.getElementById("button-row").style.display = "none";
	document.getElementById("portrait-advice").style.display = "none";
	document.getElementById("help-row").style.display = "block";
}

var helpButton = document.getElementById("how-to-play");
helpButton.addEventListener("click", helpText);


// This is the onclick function, when green button is clicked

function buttonClicktext() {
	document.getElementById("game-title").style.display = "none";
	document.getElementById("turns-left").style.display = "block";
}


// All global variables

// Game Sounds variables here:

var shuffleSound = new Audio();
shuffleSound.src = "assets/audio/shuffle.mp3";

var wronganswerSound = new Audio();
wronganswerSound.src = "assets/audio/incorrect-sound.mp3";

var rightanswerSound = new Audio();
rightanswerSound.src = "assets/audio/cheering.mp3";

//  Animal Picture & Sound Variables:	


var catPic = '<img src="assets/images/cat.jpg">';
catPic.answer = "Cat";
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



// Variables for ID's in Index.html

let playgamehelpbutton = document.querySelector('#play-game');
let redButton = document.querySelector('#redButton');
let greenButton = document.querySelector('#greenButton');
let blueButton = document.querySelector('#blueButton');

let rightOrWrong = document.querySelector('#right-or-wrong');
let cards = document.querySelectorAll('.card');
let currentCard;
let triesLeft = 5; // is this needed? 


// Event Listeners

playgamehelpbutton.onclick = () => resetGame();
redButton.onclick = () => resetGame();
greenButton.onclick = () => randomShuffle();
cards.forEach(card => card.onclick = () => checkAnswer(event));


function resetGame() {
	buttonRestart()
}

// randomShuffle function - This shuffles the Animal Cards from the array

function randomShuffle() {
	let arr = [catPic, cowPic, dogPic, duckPic, frogPic, henPic, horsePic, sheepPic, pigPic];

	// set card values
	cards.forEach(card => {
		let value = arr[Math.floor(Math.random() * arr.length)];
		card.innerText = value;
		card.dataset.answer = value;
		card.innerHTML = value;

	});

	// assign the current Answer from one of the cards dataset values
	currentCard = cards[Math.floor(Math.random() * 3)].dataset.answer;
	console.log("Current Card is: " + currentCard);

	if (currentCard === '<img src="assets/images/hen.jpg">') {
		henSound.play();
	}
	else if (currentCard === '<img src="assets/images/sheep.jpg">') {
		sheepSound.play();
	}
	else if (currentCard === '<img src="assets/images/dog.jpg">') {
		dogSound.play();
	}
	else if (currentCard === '<img src="assets/images/cat.jpg">') {
		catSound.play();
	}
	else if (currentCard === '<img src="assets/images/duck.jpg">') {
		duckSound.play();
	}
	else if (currentCard === '<img src="assets/images/horse.jpg">') {
		horseSound.play();
	}
	else if (currentCard === '<img src="assets/images/pig.jpg">') {
		pigSound.play();
	}
	else if (currentCard === '<img src="assets/images/frog.jpg">') {
		frogSound.play();
	}
	else if (currentCard === '<img src="assets/images/cow.jpg">') {
		cowSound.play();
	}

}

// call once on page load
// randomShuffle(); Don't want this to fire up on load...



// check answer function
function checkAnswer(event) {
	let card = event.currentTarget.dataset.answer;
	if (card === currentCard) {
		rightOrWrong.innerText = "You're Right!!! Well Done!";
		rightanswerSound.play();
		setTimeout(randomShuffle, 3900);
	}
	else {
		rightOrWrong.innerText = `You're Wrong!!! Try Again `;
		wronganswerSound.play();
	}
}
