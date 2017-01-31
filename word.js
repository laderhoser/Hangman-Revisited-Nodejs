//* `word.js` should contain all of 
//the methods which will check the letters guessed versus the random word selected.
var Letter = require('./letter.js');

function Word(string, blanksAndSucceses, filledArrayToMatch) {
    this.string = string;
    this.guessCount = 9;
    this.length = string.length;
    this.blanksAndSucceses = blanksAndSucceses;
    this.filledArrayToMatch = filledArrayToMatch;
    this.numBlanks = filledArrayToMatch.length;
    this.validate = function(letter) {
      
       		this.letter = letter;
      		newLetter  = new Letter(letter, blanksAndSucceses, filledArrayToMatch);
          var letterInWord = false;
       			for (var i = 0; i < this.numBlanks; i++) {
            			if (filledArrayToMatch[i] == letter) {
                			console.log("Correct! That letter is in the word!")
                      letterInWord = true; 
							newLetter.validate(letter);

       					}

        		}

            if(!letterInWord){

            
              console.log("Sorry, Try Again")
              this.guessCount--;
            }
            
}
}







module.exports = Word;
