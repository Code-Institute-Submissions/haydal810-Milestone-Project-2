// This is the onclick function, (page refresh) for restart button

function buttonRestart() {

	window.location.reload();

}

// onClick Function for buttons sound effects

function buttoncardShufflesound() {

	shuffleSound.play();
}


// Using jQuery ??? (Check this...) to start up the newGame function on page load

//document.addEventListener("DOMContentLoaded", function() {
//	cardShuffle();
//});



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


// Declare ALL variables here, making them global...

// Game Sounds variables here:

var shuffleSound = new Audio();
shuffleSound.src = "assets/audio/shuffle.mp3";

var wronganswerSound = new Audio();
wronganswerSound.src = "assets/audio/incorrect-sound.mp3";

var rightanswerSound = new Audio();
rightanswerSound.src = "assets/audio/cheering.mp3";





//  Animal Picture & Sound Variables:	


var catPic = "Cat";
catPic.src = '<img src="assets/images/cat.jpg">';
var catSound = new Audio();
catSound.src = "assets/audio/cat-meow.mp3";

var cowPic = "Cow";
cowPic.src = '<img src="assets/images/cow.jpg">';
var cowSound = new Audio();
cowSound.src = "assets/audio/cow-bellow.mp3";

var dogPic = "Dog";
dogPic.src = '<img src="assets/images/dog.jpg">';
var dogSound = new Audio();
dogSound.src = "assets/audio/dog-bark.mp3";

var duckPic = "Duck";
duckPic.src = '<img src="assets/images/duck.jpg">';
var duckSound = new Audio();
duckSound.src = "assets/audio/duck-sound.mp3";

var frogPic = "Frog";
frogPic.src = '<img src="assets/images/frog.jpg">';
var frogSound = new Audio();
frogSound.src = "assets/audio/frog-sound.mp3";

var henPic = "Hen";
henPic.src = '<img src="assets/images/hen.jpg">';
var henSound = new Audio();
henSound.src = "assets/audio/hen-sound.mp3";

var horsePic = "Horse";
horsePic.src = '<img src="assets/images/horse.jpg">';
var horseSound = new Audio();
horseSound.src = "assets/audio/horse-sound.mp3";

var sheepPic = "Sheep";
sheepPic.src = "assets/audio/sheep-sound.mp3";
var sheepSound = new Audio();
sheepSound.src = "assets/audio/sheep-sound.mp3";

var pigPic = "Pig";
pigPic.src = "assets/audio/pig-sound.mp3";
var pigSound = new Audio();
pigSound.src = "assets/audio/pig-sound.mp3";



// Variables for ID's in Index.html


let redButton = document.querySelector('#redButton');
let greenButton = document.querySelector('#greenButton');
let blueButton = document.querySelector('#blueButton');

let rightOrWrong = document.querySelector('#right-or-wrong');
let cards = document.querySelectorAll('.card');
let currentAnswer;
let triesLeft = 5;


// Event Listeners


redButton.onclick = () => resetGame();
greenButton.onclick = () => randomShuffle();
cards.forEach(card => card.onclick = () => checkAnswer(event));

function resetGame() {
	buttonRestart()
}

// randomShuffle function
function randomShuffle() {
	let arr = [catPic, cowPic, dogPic, duckPic, frogPic, henPic, horsePic, sheepPic, pigPic];


	// set card values
	cards.forEach(card => {
		let value = arr[Math.floor(Math.random() * arr.length)];
		card.innerText = value;
		card.dataset.answer = value;
	});

	// assign the current Answer from one of the cards dataset values
	currentAnswer = cards[Math.floor(Math.random() * 3)].dataset.answer;
	console.log("Current Answer is: " + currentAnswer);

	if (currentAnswer === "Hen") {
		henSound.play();
	}
	else if (currentAnswer === "Sheep") {
		sheepSound.play();
	}
	else if (currentAnswer === "Dog") {
		dogSound.play();
	}
	else if (currentAnswer === "Cat") {
		catSound.play();
	}
	else if (currentAnswer === "Duck") {
		duckSound.play();
	}
	else if (currentAnswer === "Horse") {
		horseSound.play();
	}
	else if (currentAnswer === "Pig") {
		pigSound.play();
	}
	else if (currentAnswer === "Frog") {
		frogSound.play();
	}
	else if (currentAnswer === "Cow") {
		cowSound.play();
	}
	
}

// call once on page load
// randomShuffle(); Don't want this to fire up on load...



// check answer function
function checkAnswer(event) {
	let card = event.target.dataset.answer;
	if (card === currentAnswer) {
		rightOrWrong.innerText = `You're Right!!! It was a ${currentAnswer}`;
		
	}
	else {
		rightOrWrong.innerText = `You're Wrong!!! It was a ${currentAnswer}`;
		
	}

}






















// Green Button Function - This is supposed to pick one of the 3 images and play a sound file matching it.

function greenbuttonAnimalsounds() {

	var cardArray = [document.getElementById("card1").innerHTML, document.getElementById("card2").innerHTML, document.getElementById("card3").innerHTML];

	var randomCard = cardArray[Math.floor(Math.random() * cardArray.length)];

	console.log(randomCard);

	if (randomCard === '<img src="assets/images/cow.jpg">') {
		cowSound.play();

	}
	else if (
		randomCard === '<img src="assets/images/hen.jpg">') {
		henSound.play();
	}
	else if (
		randomCard === '<img src="assets/images/cat.jpg">') {
		catSound.play();
	}
	else if (
		randomCard === '<img src="assets/images/dog.jpg">') {
		dogSound.play();
	}
	else if (
		randomCard === '<img src="assets/images/horse.jpg">') {
		horseSound.play();
	}
	else if (
		randomCard === '<img src="assets/images/sheep.jpg">') {
		sheepSound.play();
	}
	else if (
		randomCard === '<img src="assets/images/frog.jpg">') {
		frogSound.play();
	}
	else if (
		randomCard === '<img src="assets/images/pig.jpg">') {
		pigSound.play();
	}
	else if (
		randomCard === '<img src="assets/images/duck.jpg">') {
		duckSound.play();
	}


}

//var greenButton = document.getElementById("greenbutton");
//greenButton.addEventListener("click", (greenbuttonAnimalsounds, buttonClicktext))




// Onclick Functions for when user clicks on image. Image should go either red or green, depending on right or wrong answer.

function greenBox() {
	document.getElementById(("card") || ("card2") || ("card3")).style.border = "15px solid green";
	rightanswerSound.play();
	console.log("Card matches the sound effect");
	setTimeout(randomShuffle, 3900);

}

function redBox() {
	document.getElementById(("card") || ("card2") || ("card3")).style.border = "15px solid red";
	wronganswerSound.play();
	console.log("Card does not match the sound effect");
	setTimeout(randomShuffle, 3900);

}
