// This is the onclick function, (page refresh) for restart button

function buttonRestart() {

	window.location.reload();

}

// onClick Function for buttons sound effects

function buttoncardShufflesound() {

	shuffleSound.play();
}


// Using jQuery ??? (Check this...) to start up the newGame function on page load

document.addEventListener("DOMContentLoaded", function() {
	cardShuffle();
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



var sheepPic = '<img src="assets/images/sheep.jpg">';
sheepPic.hint = "This is a sheep";

var pigPic = '<img src="assets/images/pig.jpg">';
pigPic.hint = "This is a pig";

var tractorPic = '<img src="assets/images/tractor.jpg">';
tractorPic.hint = "This is a tractor";

//  Animal Picture Array:

var animals = [bunnyPic, catPic, cowPic, dogPic, donkeyPic, duckPic, frogPic, henPic, horsePic, sheepPic, pigPic, tractorPic];

function randomNoRepeats(array) {
	var copy = array.slice(0);
	return function() {
		if (copy.length < 1) { copy = array.slice(0); }
		var index = Math.floor(Math.random() * copy.length);
		var item = copy[index];
		copy.splice(index, 1);
		return item;
	};
}

var animalChooser = randomNoRepeats([bunnyPic, catPic, cowPic, dogPic, donkeyPic, duckPic, frogPic, henPic, horsePic, sheepPic, pigPic, tractorPic]);

var cardOne = animalChooser();
var cardTwo = animalChooser();
var cardThree = animalChooser();


function cardShuffle() {

	document.getElementById("card1").style.border = "solid black";
	document.getElementById("card2").style.border = "solid black";
	document.getElementById("card3").style.border = "solid black";

	document.getElementById("card1").innerHTML = cardOne;
	document.getElementById("card2").innerHTML = cardTwo;
	document.getElementById("card3").innerHTML = cardThree;

}

// Green Button Function - This is supposed to pick one of the 3 images and play a sound file matching it.


function greenbuttonAnimalsounds() {

	var threeCards = [cardOne, cardTwo, cardThree];

	console.log(threeCards);

	if ((cardOne === '<img src="assets/images/cow.jpg">') || ((cardTwo === '<img src="assets/images/cow.jpg">')) || ((cardThree === '<img src="assets/images/cow.jpg">'))) {
		cowSound.play();

	}
	else if ((cardOne === '<img src="assets/images/hen.jpg">') || ((cardTwo === '<img src="assets/images/hen.jpg">')) || ((cardThree === '<img src="assets/images/hen.jpg">'))) {
		henSound.play();
	}
	else if ((cardOne === '<img src="assets/images/cat.jpg">') || ((cardTwo === '<img src="assets/images/cat.jpg">')) || ((cardThree === '<img src="assets/images/cat.jpg">'))) {
		catSound.play();
	}
	else if ((cardOne === '<img src="assets/images/dog.jpg">') || ((cardTwo === '<img src="assets/images/dog.jpg">')) || ((cardThree === '<img src="assets/images/dog.jpg">'))) {
		dogSound.play();
	}
	else if ((cardOne === '<img src="assets/images/horse.jpg">') || ((cardTwo === '<img src="assets/images/horse.jpg">')) || ((cardThree === '<img src="assets/images/horse.jpg">'))) {
		horseSound.play();
	}
	else if ((cardOne === '<img src="assets/images/sheep.jpg">') || ((cardTwo === '<img src="assets/images/sheep.jpg">')) || ((cardThree === '<img src="assets/images/sheep.jpg">'))) {
		sheepSound.play();
	}
	else if ((cardOne === '<img src="assets/images/frog.jpg">') || ((cardTwo === '<img src="assets/images/frog.jpg">')) || ((cardThree === '<img src="assets/images/frog.jpg">'))) {
		frogSound.play();
	}
	else if ((cardOne === '<img src="assets/images/pig.jpg">') || ((cardTwo === '<img src="assets/images/pig.jpg">')) || ((cardThree === '<img src="assets/images/pig.jpg">'))) {
		pigSound.play();
	}
	else if ((cardOne === '<img src="assets/images/duck.jpg">') || ((cardTwo === '<img src="assets/images/duck.jpg">')) || ((cardThree === '<img src="assets/images/duck.jpg">'))) {
		duckSound.play();
	}
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

var sheepSound = new Audio();
sheepSound.src = "assets/audio/sheep-sound.mp3";
sheepSound.pic = '<img src="assets/images/sheep.jpg">';
sheepSound.hint = "This is a sheep";

var frogSound = new Audio();
frogSound.src = "assets/audio/frog-sound.mp3";
frogSound.pic = '<img src="assets/images/frog.jpg">';
frogSound.hint = "This is a frog";

var pigSound = new Audio();
pigSound.src = "assets/audio/pig-sound.mp3";
pigSound.pic = '<img src="assets/images/pig.jpg">';
pigSound.hint = "This is a pig";

var duckSound = new Audio();
duckSound.src = "assets/audio/duck-sound.mp3";
duckSound.pic = '<img src="assets/images/duck.jpg">';
duckSound.hint = "This is a duck";



// Onclick Functions for when user clicks on image. Image should go either red or green, depending on correct selection or not.

function greenBox1() {
	document.getElementById("card1").style.border = "15px solid green";
	rightanswerSound.play();
	console.log("Card1 matches the sound effect");
	setTimeout(cardShuffle, 3900);

}

function redBox1() {
	document.getElementById("card1").style.border = "15px solid red";
	wronganswerSound.play();
	console.log("Card1 does not match the sound effect");
	setTimeout(cardShuffle, 3900);

}

function greenBox2() {
	document.getElementById("card2").style.border = "15px solid green";
	rightanswerSound.play();
	console.log("Card2 matches the sound effect");
	setTimeout(cardShuffle, 3900);

}

function redBox2() {
	document.getElementById("card2").style.border = "15px solid red";
	wronganswerSound.play();
	console.log("Card2 does not match the sound effect");
	setTimeout(cardShuffle, 3900);

}

function greenBox3() {
	document.getElementById("card3").style.border = "15px solid green";
	rightanswerSound.play();
	console.log("Card3 matches the sound effect");
	setTimeout(cardShuffle, 3900);

}

function redBox3() {
	document.getElementById("card3").style.border = "15px solid red";
	wronganswerSound.play();
	console.log("Card3 does not match the sound effect");
	setTimeout(cardShuffle, 3900);

}


// Function to give user feedback if they have made right or wrong choice

function answer1() {
	if ((cardOne === catPic && catPic === catSound.pic) || (cardOne === dogPic && dogPic === dogSound.pic) || (cardOne === cowPic && cowPic === cowSound.pic) || (cardOne === henPic && henPic === henSound.pic) || (cardOne === horsePic && horsePic === horseSound.pic)) {
		greenBox1();
	}
	else {
		redBox1();
	}
}



function answer2() {
	if ((document.getElementById("card2").innerHTML === catPic && catPic === catSound.pic) || (document.getElementById("card2").innerHTML === dogPic && dogPic === dogSound.pic) || (document.getElementById("card2").innerHTML === cowPic && cowPic === cowSound.pic) || (document.getElementById("card2").innerHTML === henPic && henPic === henSound.pic) || (document.getElementById("card2").innerHTML === horsePic && horsePic === horseSound.pic)) {
		greenBox2();
	}
	else {
		redBox2();
	}
}

function answer3() {
	if ((document.getElementById("card3").innerHTML === catPic && catPic === catSound.pic) || (document.getElementById("card3").innerHTML === dogPic && dogPic === dogSound.pic) || (document.getElementById("card3").innerHTML === cowPic && cowPic === cowSound.pic) || (document.getElementById("card3").innerHTML === henPic && henPic === henSound.pic) || (document.getElementById("card3").innerHTML === horsePic && horsePic === horseSound.pic)) {
		greenBox3();
	}
	else {
		redBox3();
	}
}
