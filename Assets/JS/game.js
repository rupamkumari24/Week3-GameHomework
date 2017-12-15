
/* Hangman Logic */

var WordList = [
  ["C", "O", "M", "P", "U", "T", "E", "R"],
  ["J","A","V","A","S","C","R","I","P","T"],
  ["W","E","B","D","E","S","I","G","N"],
  ["E","D","U","C","A","T","I","O","N"],
  ["C","H","O","C","O","L","A","T","E"],
  ["I","N","D","I","A","N"],
  ["D","R","E","A","M"]
]

// random word is picked from above list
var random = Math.floor((Math.random()*(WordList.length-1))); 

// the word to guess is picked and stored in ranWord 
var ranWord = WordList[random]; 
var ranWordLen = new Array(ranWord.length);

// count is intialised for guess
var cnt = 0;

// every letter in the word is symbolized by an underscore in the guessfield
for (var i = 0; i < ranWordLen.length; i++)
{
	ranWordLen[i] = "_ ";
}

// prints the guessfield
function printWord()
{
	for (var i = 0; i < ranWordLen.length; i++)
	{
		// div to display user's entered correct letters of the picked word
		var dipMatchedLetter = document.getElementById("dipMatchedLetter");
		var wordTable = document.createTextNode(ranWordLen[i]);
		dipMatchedLetter.appendChild(wordTable);
	}
}

//checks if the the letter provided by the user matches one or more of the letters in the word
var matchLetters = function(){
	var f = document.frmWord; 
	var b = f.elements["txtInPutLetter"]; 
	var inputLetter = b.value; // the letter provided by the user
	inputLetter = inputLetter.toUpperCase();
	for (var i = 0; i < ranWord.length; i++){
		if(ranWord[i] === inputLetter){
			ranWordLen[i] = inputLetter + " ";
			var wrongGuess = true;
		}
	b.value = "";
	}
	
	//deletes the guessfield and replaces it with the new one
	var dipMatchedLetter = document.getElementById("dipMatchedLetter");
	dipMatchedLetter.innerHTML=""; 
	printWord();
	
	// if a guessed letter is not in the word, the letter will be put on the "wrong letters"-list and hangman grows
	if(!wrongGuess){
		var wrongLetters = document.getElementById("wrongLetters");
		var wordTable = document.createTextNode(" " + inputLetter);
		wrongLetters.appendChild(wordTable); 
		cnt++;
		var hangman = document.getElementById("hangman");
    	hangman.src = "Assets/Images/hangman" + cnt + ".png";
	}
	
	//checks if all letters have been found
	var win = true;
	for (var i = 0; i < ranWordLen.length; i++){
		if(ranWordLen[i] === "_ "){
			win = false;
		}
	}
	if(win){
		var finalMsg = document.getElementById("finalMsg");
		dipMatchedLetter.innerHTML=" You win !"; 

		// if user wins guess button is disabled ,so that user has to click new game button to start again
		var btnGuess = document.getElementById("btnGuess");
		btnGuess.disabled=true;

	}
	
	//once you got six wrong letters, you lose
	if(cnt === 6){
		var finalMsg = document.getElementById("finalMsg");
		dipMatchedLetter.innerHTML="Uh...I guess you're dead now."; 

		// if user looses then also guess button is disabled ,so that user has to click new game button to start again
		var btnGuess = document.getElementById("btnGuess");
		btnGuess.disabled=true;
	}
}

function init(){
	printWord();
}

window.onload = init;

