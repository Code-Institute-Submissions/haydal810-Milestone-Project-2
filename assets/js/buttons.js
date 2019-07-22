// This is the onclick function, (page refresh) for restart button

function buttonRestart() {

	window.location.reload();

}

// onClick Function for buttons sound effects

function buttoncardShufflesound() {

	shuffleSound.play();
}


// Using jQuery ??? (Check this) to start up the newGame function on page load

document.addEventListener("DOMContentLoaded", function() {
	bluebuttonShuffle();
});



// This is the onclick function, when user clicks on the "How to Play" Button

function helpText() {
	document.getElementById("animal-row").style.display = "none";
	document.getElementById("button-row").style.display = "none";
	document.getElementById("portrait-advice").style.display = "none";
	document.getElementById("help-row").style.display = "block";
}

// This is the onclick function, when blue or green button is clicked

function buttonClicktext() {
	document.getElementById("game-title").style.display = "none";
	document.getElementById("question").style.display = "block";
	document.getElementById("needHelp").style.display = "block";
}

// Declare ALL variables here, making them global...

// Game Sounds variables here:

var shuffleSound = new Audio();
shuffleSound.src = "assets/audio/shuffle.mp3";

var wronganswerSound = new Audio();
wronganswerSound.src = "assets/audio/incorrect-sound.mp3";

var rightanswerSound = new Audio();
rightanswerSound.src = "assets/audio/cheering.mp3";

//  Animal Picture Variables:	

var bunnyPic = '<img src="assets/images/bunny.jpg">';
bunnyPic.hint = "This is a bunny";

var catPic = '<img src="assets/images/cat.jpg">';
catPic.hint = "This is a cat";

var cowPic = '<img src="assets/images/cow.jpg">';
cowPic.hint = "This is a cow";

var dogPic = '<img src="assets/images/dog.jpg">';
dogPic.hint = "This is a dog";

var donkeyPic = '<img src="assets/images/donkey.jpg">';
donkeyPic.hint = "This is a donkey";

var duckPic = '<img src="assets/images/duck.jpg">';
duckPic.hint = "This is a duck";

var frogPic = '<img src="assets/images/frog.jpg">';
frogPic.hint = "This is a frog";

var henPic = '<img src="assets/images/hen.jpg">';
henPic.hint = "This is a hen";

var horsePic = '<img src="assets/images/horse.jpg">';
horsePic.hint = "This is a horse";

var lambPic = '<img src="assets/images/lamb.jpg">';
lambPic.hint = "This is a lamb";

var pigPic = '<img src="assets/images/pig.jpg">';
pigPic.hint = "This is a pig";

var tractorPic = '<img src="assets/images/tractor.jpg">';
tractorPic.hint = "This is a tractor";

//  Animal Picture Array:

var animals = [bunnyPic, catPic, cowPic, dogPic, donkeyPic, duckPic, frogPic, henPic, horsePic, lambPic, pigPic, tractorPic];

var randomPic1 = animals[Math.floor(Math.random() * animals.length)];
var randomPic2 = animals[Math.floor(Math.random() * animals.length)];
var randomPic3 = animals[Math.floor(Math.random() * animals.length)];






function bluebuttonShuffle() {


	document.getElementById("card1").style.border = "solid black";
	document.getElementById("card2").style.border = "solid black";
	document.getElementById("card3").style.border = "solid black";


	document.getElementById("card1").innerHTML = randomPic1;
	document.getElementById("card2").innerHTML = randomPic2;
	document.getElementById("card3").innerHTML = randomPic3;

	console.log(randomPic1);
	console.log(randomPic2);
	console.log(randomPic3);


}


//  Animal Sound Variables:	

var cowSound = new Audio();
cowSound.src = "assets/audio/cow-bellow.mp3";
cowSound.pic = '<img src="assets/images/cow.jpg">';
cowSound.hint = "This is a cow";

var henSound = new Audio();
henSound.src = "assets/audio/hen-sound.mp3";
henSound.pic = '<img src="assets/images/hen.jpg">';
henSound.hint = "This is a hen";

var horseSound = new Audio();
horseSound.src = "assets/audio/horse-sound.mp3";
horseSound.pic = '<img src="assets/images/horse.jpg">';
horseSound.hint = "This is a horse";

var dogSound = new Audio();
dogSound.src = "assets/audio/dog-bark.mp3";
dogSound.pic = '<img src="assets/images/dog.jpg">';
dogSound.hint = "This is a dog";

var catSound = new Audio();
catSound.src = "assets/audio/cat-meow.mp3";
catSound.pic = '<img src="assets/images/cat.jpg">';
catSound.hint = "This is a cat";

var animalsoundArray = [cowSound, henSound, horseSound, dogSound, catSound];

var randomSound = animalsoundArray[Math.floor(Math.random() * animalsoundArray.length)];



function greenbuttonAnimalsounds() {
	randomSound.play();
	console.log(randomSound.pic);
}





// This is the function thats tells User if they have selected correct animal pic card or not...




function answer1() {
	if (randomSound.pic == randomPic1) {
		document.getElementById("card1").style.border = "15px solid green";
		rightanswerSound.play();
		console.log("card1 matches the sound effect");
	}
	else {
		document.getElementById("card1").style.border = "15px solid red";
		wronganswerSound.play();
		console.log("card1 does not match the sound effect");
	}
}


function answer2() {
	if (randomSound.pic == randomPic2) {
		document.getElementById("card2").style.border = "15px solid green";
		rightanswerSound.play();
		console.log("card2 does match the sound effect");
	}
	else {
		document.getElementById("card2").style.border = "15px solid red";
		wronganswerSound.play();
		console.log("card2 does not match the sound effect");
	}
}


function answer3() {
	if (randomSound.pic == randomPic3) {
		document.getElementById("card3").style.border = "15px solid green";
		rightanswerSound.play();
		console.log("card3 matches the sound effect");
	}
	else {
		document.getElementById("card3").style.border = "15px solid red";
		wronganswerSound.play();
		console.log("card3 does not match the sound effect");
	}

}
