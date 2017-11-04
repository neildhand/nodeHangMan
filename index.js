var inquirer = require("inquirer");
var fs = require("fs");

function Word(){

}

function Letter(){

}


var questions = [
{
	type: "input",
 	message: "Guess a letter!",
 	name: "guess"
}];

fs.readFile("./hangMan.txt", "utf-8", function read(err, data){

	var guessArray =[];

	var dataArray = data.split(", ");
	var randomWord = Math.floor(Math.random() * 44);
	var generatedWord = dataArray[randomWord];
	var lettersInWord = generatedWord.split("");
	var numBlanks = lettersInWord.length;
	var guessesLeft = 9;
	var wrongLetters = [];
	var blanksAndSuccesses = [];

function readWord(){
		if (err){
			return console.log(err);
		}
		
		for(var i = 0; i < numBlanks; i++){
			blanksAndSuccesses.push("_");
		}
		console.log(blanksAndSuccesses.join(" "));
		console.log(lettersInWord);
		console.log(numBlanks);
		console.log(generatedWord);	

}
readWord();

function checkLetters(letter){
	var isLetterInWord = false;

	for(var i = 0; i < numBlanks; i++){
		if(generatedWord[i] == letter){
			isLetterInWord = true;
		}
	}

	if(isLetterInWord){
		for(var i = 0; i <numBlanks; i++){
			if(generatedWord[i] == letter){
				blanksAndSuccesses[i] = letter;
			}
		
			else{
				wrongLetters.push(letter);
				guessesLeft--;
				console.log("wrong letters: " + wrongLetters[i]);
			}
		}
	}
}
if(guessesLeft !== 0 && numBlanks !== 0){
	inquirer.prompt(questions).then(function(answer){
		JSON.stringify(answer, null, " ");
		readWord();
		checkLetters(answer);
		guessesLeft--
	});
}



});



