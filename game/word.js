function Word (string) {
	this.string = string;
	this.length = string.length;
	this.corrGuess = [];
	this.inCorrGuess = [];

}

module.exports = Word;