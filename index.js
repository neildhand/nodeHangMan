var inquirer = require("inquirer");
var fs = require("fs");

var wordArray = ["Awkward", "Bagpipes", "Banjo", "Bungler", "Croquet", "Crypt", "Dwarves", "Fervid", "Fishhook", "Fjord", "Gazebo", "Gypsy", "Haiku", "Haphazard", "Hyphen", "Ivory", "Jazzy", "Jiffy", "Jinx", "Jukebox", "Kayak", "Kiosk", "Klutz", "Memento", "Mystify", "Numbskull", "Ostracize", "Oxygen", "Pajama", "Phlegm", "Pixel", "Polka", "Quad", "Quip", "Rhythmic", "Rogue", "Sphinx", "Squawk", "Swivel", "Toady", "Twelfth", "Unzip", "Waxy", "Wildebeest", "Yacht", "Zealous", "Zigzag", "Zippy", "Zombie"];



var guessArray =[];
var randomWord = Math.floor(Math.random() * 44);
var generatedWord = wordArray[randomWord].toLowerCase();
var lettersInWord = generatedWord.split("");
var numBlanks = lettersInWord.length;
var guessesLeft = 9;
var wrongLetters = [];
var blanksAndSuccesses = [];

function Word(){
	this.word = word;

}

function Letter(){
	this.letter = letter;
}


var questions = [
{
	type: "input",
 	message: "Guess a letter!",
 	name: "guess"
}];


function readWord(){
		
		for(var i = 0; i < numBlanks; i++){
			blanksAndSuccesses.push("_");
		}
		console.log(blanksAndSuccesses.join(" "));
		console.log(lettersInWord);
		// console.log(numBlanks);
		// console.log(generatedWord);	

}

function checkLetter (letter){
	var isLetterInWord = false;
	for(var i = 0; i < numBlanks; i++){
		if(generatedWord[i] == letter){
			isLetterInWord = true;
		}
	}
	if(isLetterInWord){
		for(var i = 0; i < numBlanks; i++){
			if(generatedWord[i] == letter){
				blanksAndSuccesses[i] = letter;
			}
		}
		prompt();
	}
	else{
		wrongLetters.push(letter);
		if(guessesLeft != 0){
		prompt();
	}
		
	}
	console.log(blanksAndSuccesses);
}

var prompt = function(){

	if(guessesLeft !== 0 && numBlanks !== 0){
		inquirer.prompt(questions).then(function(answer){
		JSON.stringify(answer, null, " ");
	
				checkLetter(answer.guess);
			
			// if(answer.guess != lettersInWord){
			// 	if(guessesLeft != 0){
			// 		console.log(lettersInWord);
			// 		guessArray.push(answer.guess);
			// 		guessesLeft--;
			// 		console.log("incorrect. you have: " + guessesLeft + " guesses left");
			// 		console.log(guessArray);
			// 		prompt();
			// 	}
			// }

			// else if (answer.guess = lettersInWord){
			// 	console.log(lettersInWord);
			// 	guessArray.push(answer.guess);
			// 	console.log("correct. you still have " + guessesLefts + " guesses left");
			// 	numBlanks--;
			// 	prompt();
			//}

		});
	}
}
readWord();
prompt();

