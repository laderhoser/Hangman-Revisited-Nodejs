var Game = function(wordOptions){
	this.wordOptions = wordOptions;
	this.wordToGuess = function(){
	return wordOptions[Math.floor(Math.random() * wordOptions.length)]
	
	}
	
	
}
module.exports = Game;

//**dont mess with this code - you seriously broke it last time