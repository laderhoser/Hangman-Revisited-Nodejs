//* `letter.js` should control whether or not a letter appears as a "_" or as itself on-screen.


function Letter(letter, blanksAndSucceses, filledArrayToMatch) {
	this.letter = letter;
	this.filledArrayToMatch = filledArrayToMatch;
	this.blanksAndSucceses = blanksAndSucceses;
	this.numBlanks = filledArrayToMatch.length;
	
    this.validate = function(letter) {

        for (var i = 0; i < this.numBlanks; i++) {
            if (this.filledArrayToMatch[i] == letter) {
            this.blanksAndSucceses[i] = letter;
			} 
   		 } ;
 	}
}
module.exports = Letter;
