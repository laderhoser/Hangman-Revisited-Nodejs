var inquirer = require('inquirer');
var Game = require('./game.js');
var Letter = require('./letter.js');
var Word = require('./word.js');
var figlet = require('figlet');
guessCount = 9;


console.log(figlet.textSync('HANG\nMAN\nGAME', {
    font: 'isometric2',
    horizontalLayout: 'default',
    verticalLayout: 'default'
}));



var wordOptions = ["jose", "nina", "jerome", "lou", "greg", "adam"];
var lettersinword = [];

var blanksAndSucceses = [];

var hangman = new Game(wordOptions);

var randomChoice = hangman.wordToGuess();


var filledArrayToMatch = randomChoice.split("");


var numBlanks = filledArrayToMatch.length;


for (i = 0; i < filledArrayToMatch.length; i++) {
    blanksAndSucceses.push("_")

}

var newWord = new Word(randomChoice, blanksAndSucceses, filledArrayToMatch);

console.log("********************************")
console.log(blanksAndSucceses)
console.log("********************************")
console.log("Welcome to Jose's Node-App Hangman")
console.log("Guess the Name of the Student")
console.log("You have 9 attempts")

function startGame() {
	
        inquire = inquirer.prompt([{

                type: "input",
                message: "Pick a letter",
                name: "letter"

    }]).then(function(answers) {
            letter = answers.letter.toLowerCase();
            newWord.validate(letter);
            guessCount--;
            console.log("you have " + guessCount + " guesses left")
            console.log(blanksAndSucceses);
           

            if (blanksAndSucceses.toString() == filledArrayToMatch.toString() && guessCount > 0){
               

					console.log(figlet.textSync('YOU\nWIN!', {
    							font: 'doom',
    							horizontalLayout: 'default',
    							verticalLayout: 'default'
								}));
       
            } else if (guessCount < 1){
            	console.log("**************************") 
            	console.log("The word was: " + randomChoice)
				console.log("**************************")
           
				console.log(figlet.textSync('GAME\nOVER', {
    						font: 'doom',
    						horizontalLayout: 'default',
    						verticalLayout: 'default'
							}));
                } else startGame();
	})

}
startGame();




/*	
                            .xm*f""??T?@hc.
                          z@"` '~((!!!!!!!?*m.
                        z$$$K   ~~(/!!!!!!!!!Mh
                      .f` "#$k'`~~\!!!!!!!!!!!MMc
                     :"     f*! ~:~(!!!!!!!!!!XHMk
                     f      " %n:~(!!!!!!!!!!!HMMM.
                    d          X~!~(!!!!!!!X!X!SMMR
                    M :   x::  :~~!>!!!!!!MNWXMMM@R
 n                  E ' *  ueeeeiu(!!XUWWWWWXMRHMMM>                :.
 E%                 E  8 .$$$$$$$$K!!$$$$$$$$&M$RMM>               :"5
z  %                3  $ 4$$$$$$$$!~!*$$$$$$$$!$MM$               :" `
K   ":              ?> # '#$$$$$#~!!!!TR$$$$$R?@MME              z   R
?     %.             5     ^"""~~~:XW!!!!T?T!XSMMM~            :^    J
 ".    ^s             ?.       ~~d$X$NX!!!!!!M!MM             f     :~
  '+.    #L            *c:.    .~"?!??!!!!!XX@M@~           z"    .*
    '+     %L           #c`"!+~~~!/!!!!!!@*TM8M           z"    .~
      ":    '%.         'C*X  .!~!~!!!!!X!!!@RF         .#     +
        ":    ^%.        9-MX!X!!X~H!!M!N!X$MM        .#`    +"
          #:    "n       'L'!~M~)H!M!XX!$!XMXF      .+`   .z"
            #:    ":      R *H$@@$H$*@$@$@$%M~     z`    +"
              %:   `*L    'k' M!~M~X!!$!@H!tF    z"    z"
                *:   ^*L   "k ~~~!~!!!!!M!X*   z*   .+"
                  "s   ^*L  '%:.~~~:!!!!XH"  z#   .*"
                    #s   ^%L  ^"#4@UU@##"  z#   .*"
                      #s   ^%L           z#   .r"
                        #s   ^%.       u#   .r"
                          #i   '%.   u#   .@"
                            #s   ^%u#   .@"
                              #s x#   .*"
                               x#`  .@%.
                             x#`  .d"  "%.
                           xf~  .r" #s   "%.
                     u   x*`  .r"     #s   "%.  x.
                     %Mu*`  x*"         #m.  "%zX"
                     :R(h x*              "h..*dN.
                   u@NM5e#>                 7?dMRMh.
                 z$@M@$#"#"                 *""*@MM$hL
               u@@MM8*                          "*$M@Mh.
             z$RRM8F"                             "N8@M$bL
            5`RM$#                                  'R88f)R
            'h.$"                                     #$x* 

*/
