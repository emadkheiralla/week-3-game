

	// Create an array that lists out all of the options
	var cat = ['c','a','t'];
	var bear = ['b','e','a','r'];
	var tiger = ['t','i','g','e','r'];
	var nextWord = ['cat', 'bear', 'tiger'];
	var myArr = [];
	var myList = document.getElementById('letter');
	var myListItem = "";
	

	// initialize counters
	var wins = 0;
	var guesses = 6;

	// Create code to randomly choose one of the three words  
	var randomNumber = Math.random();
	var optionsIndex = Math.floor(randomNumber * nextWord.length);
	var currWord = nextWord[optionsIndex];
	console.log(currWord);

	document.querySelector('#numWin').innerHTML = wins;
	document.querySelector('#numGuess').innerHTML = guesses;

	for(var i = 0; i < currWord.length; i++){
		myListItem = document.createElement('li');
		myList.appendChild(myListItem);
	}

	function reloadPage() {
	    location.reload(true);
	}	

	function changeImage() {
	    var image = document.querySelector("#hang");

	    if (image.src.match("assets/images/hangman0.png")) {
	        image.src = "assets/images/hangman1.png";
	    }else if (image.src.match("assets/images/hangman1.png")) {
	    	image.src = "assets/images/hangman2.png";
	    }else if (image.src.match("assets/images/hangman2.png")) {
	    	image.src = "assets/images/hangman3.png";
	    }else if (image.src.match("assets/images/hangman3.png")) {
	    	image.src = "assets/images/hangman4.png";
	    }else if (image.src.match("assets/images/hangman4.png")) {
	    	image.src = "assets/images/hangman5.png";
	    }else if (image.src.match("assets/images/hangman5.png")) {
	    	image.src = "assets/images/hangman6.png";
	    }
	    return image;
	};
	
	// Captures Key Clicks
	document.onkeyup = function (event) {

		// Determines which exact key was selected. Make it lowercase
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

		if(currWord.indexOf(userGuess) != -1 && guesses > 0){
			if (currWord == 'cat' && userGuess == 'c') {
				document.querySelector('#yesno').innerHTML = 'You guessed right!';
				document.getElementsByTagName('li')[0].innerHTML = 'c';
			}

			if (currWord == 'cat' && userGuess == 'a') {
				document.querySelector('#yesno').innerHTML = 'You guessed right!';
				document.getElementsByTagName('li')[1].innerHTML = 'a';
			}

			if (currWord == 'cat' && userGuess == 't') {
				document.querySelector('#yesno').innerHTML = 'You guessed right!';
				document.getElementsByTagName('li')[2].innerHTML = 't';
			}


			if (currWord == 'bear' && userGuess == 'b') {
				document.querySelector('#yesno').innerHTML = 'You guessed right!';
				document.getElementsByTagName('li')[0].innerHTML = 'b';
			}

			if (currWord == 'bear' && userGuess == 'e') {
				document.querySelector('#yesno').innerHTML = 'You guessed right!';
				document.getElementsByTagName('li')[1].innerHTML = 'e';
			}

			if (currWord == 'bear' && userGuess == 'a') {
				document.querySelector('#yesno').innerHTML = 'You guessed right!';
				document.getElementsByTagName('li')[2].innerHTML = 'a';
			}

			if (currWord == 'bear' && userGuess == 'r') {
				document.querySelector('#yesno').innerHTML = 'You guessed right!';
				document.getElementsByTagName('li')[3].innerHTML = 'r';
			}
	
			if (currWord == 'tiger' && userGuess == 't') {
				document.querySelector('#yesno').innerHTML = 'You guessed right!';
				document.getElementsByTagName('li')[0].innerHTML = 't';
			}

			if (currWord == 'tiger' && userGuess == 'i') {
				document.querySelector('#yesno').innerHTML = 'You guessed right!';
				document.getElementsByTagName('li')[1].innerHTML = 'i';
			}

			if (currWord == 'tiger' && userGuess == 'g') {
				document.querySelector('#yesno').innerHTML = 'You guessed right!';
				document.getElementsByTagName('li')[2].innerHTML = 'g';
			}

			if (currWord == 'tiger' && userGuess == 'e') {
				document.querySelector('#yesno').innerHTML = 'You guessed right!';
				document.getElementsByTagName('li')[3].innerHTML = 'e';
			}

			if (currWord == 'tiger' && userGuess == 'r') {
				document.querySelector('#yesno').innerHTML = 'You guessed right!';
				document.getElementsByTagName('li')[4].innerHTML = 'r';
			}

			document.querySelector('#next').innerHTML = 'Choose another letter!';
			document.querySelector('#hide').innerHTML = '';

		}else{
			document.querySelector('#yesno').innerHTML = 'You guessed wrong!';
			document.querySelector('#next').innerHTML = 'Choose another letter!';
			document.querySelector('#hide').innerHTML = '';
			document.querySelector('#arrLetters').innerHTML = myArr[userGuess];
			changeImage();
			guesses--;
			document.querySelector('#numGuess').innerHTML = guesses;
		}
		if (guesses == 0){
			document.querySelector('#next').innerHTML = 'Game over, you lost!';
			document.getElementById('submit').style.display = 'block';
		}
		
		if (document.getElementsByTagName('li').innerHTML != null){
			document.querySelector('#next').innerHTML = 'Game over, you won!';
			wins++;
			document.querySelector('#numWin').innerHTML = wins;
		}
		
	};