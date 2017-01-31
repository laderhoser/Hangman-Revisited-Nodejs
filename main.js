var inquirer = require('inquirer');
var Game = require('./game.js');
var Letter = require('./letter.js');
var Word = require('./word.js');
var figlet = require('figlet');



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
console.log("Welcome to Jose's Node-App Hangman")
console.log("********************************")

                console.log(" _________   ")
                console.log("|/           ")
                console.log("|            ")
                console.log("|            ")
                console.log("|            ");
                console.log("|            ");
                console.log("|            ");
                console.log("|_______.    ");
console.log("********************************")
console.log(blanksAndSucceses)
console.log("********************************")
console.log("Fill the blanks spaces above by")
console.log("guessing the Name of the student")
console.log("You have 9 attempts....Goodluck!")
function startGame() {
	
        inquire = inquirer.prompt([{

                type: "input",
                message: "Pick a letter",
                name: "letter"

    }]).then(function(answers) {
            letter = answers.letter.toLowerCase();
            
            newWord.validate(letter);

            // guessCount--;
            console.log("You have " + newWord.guessCount + " guesses left")
            console.log(blanksAndSucceses);
           

            if (blanksAndSucceses.toString() == filledArrayToMatch.toString() && newWord.guessCount > 0|| blanksAndSucceses.toString() == filledArrayToMatch.toString()){
               

					         console.log(figlet.textSync('YOU\nWIN!', {
    							                          font: 'doom',
    							horizontalLayout: 'default',
    							verticalLayout: 'default'
								}));
       
            } 

            else if (newWord.guessCount < 1){

            	console.log("**************************") 
            	console.log("The word was: " + randomChoice)
				console.log("**************************")
           
				console.log(figlet.textSync('GAME\nOVER', {
    						font: 'doom',
    						horizontalLayout: 'default',
    						verticalLayout: 'default'
							}));
                }
            else if (newWord.guessCount === 8) {
                // console.log("wrong choices: " + newWord.wrongGuesses)
              
                console.log(" _________   ")
                console.log("|/       |   ")
                console.log("|            ")
                console.log("|            ")
                console.log("|            ");
                console.log("|            ");
                console.log("|            ");
                console.log("|_______.    ");
                startGame();
            } else if (newWord.guessCount === 7) {
               
                console.log(" _________   ")
                console.log("|/       |   ")
                console.log("|       (_)  ")
                console.log("|            ")
                console.log("|            ");
                console.log("|            ");
                console.log("|            ");
                console.log("|_______.    ");
                startGame();
            } else if (newWord.guessCount === 6) {
              
                console.log(" _________   ")
                console.log("|/       |   ")
                console.log("|       (_)  ")
                console.log("|        |   ")
                console.log("|            ");
                console.log("|            ");
                console.log("|            ");
                console.log("|_______.    ");
               startGame();
            } else  if (newWord.guessCount === 5) {
                console.log(" _________   ")
                console.log("|/       |   ")
                console.log("|       (_)  ")
                console.log("|       /\|   ")
                console.log("|            ");
                console.log("|            ");
                console.log("|            ");
                console.log("|_______.    ");
                 startGame();
            }

           
         
           
            else if (newWord.guessCount === 4) {
                
                console.log(" _________   ")
                console.log("|/       |   ")
                console.log("|       (_)  ")
                console.log("|       /\|\\  ")
                console.log("|            ");
                console.log("|            ");
                console.log("|            ");
                console.log("|_______.    ");
                 startGame();
            }
          else if (newWord.guessCount === 3) {
            
                console.log(" _________   ")
                console.log("|/       |   ")
                console.log("|       (_)  ")
                console.log("|       /\|\\  ")
                console.log("|        |   ");
                console.log("|            ");
                console.log("|            ");
                console.log("|_______.    ");
                startGame();

            } 
          
               else if (newWord.guessCount === 2) {
              
                console.log(" _________   ")
                console.log("|/       |   ")
                console.log("|       (_)  ")
                console.log("|       /\|\\  ")
                console.log("|        |   ");
                console.log("|       /    ");
                console.log("|            ");
                console.log("|_______.    ");

                 startGame();



            }
            else if (newWord.guessCount === 1) {
               
                console.log(" _________   ")
                console.log("|/       |   ")
                console.log("|       (_)  ")
                console.log("|       /\|\\  ")
                console.log("|        |   ");
                console.log("|       / \\\ ");
                console.log("|            ");
                console.log("|_______.    ");


                 startGame();



            } 















                else startGame();
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
