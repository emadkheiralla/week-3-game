	// Create an array that lists out all of the options
	var cat = ['c','a','t'];
	var bear = ['b','e','a','r'];
	var tiger = ['t','i','g','e','r'];
	var nextWord = ['cat', 'bear', 'tiger'];
	var incorrectArr = [];
	var uniqueIncorrectSet = new Set(incorrectArr);
	var uniqueIncorrectArr = Array.from(uniqueIncorrectSet);
	var correctArr = [];
	var uniqueCorrectSet = new Set(correctArr);
	var uniqueCorrectArr = Array.from(uniqueCorrectSet);
	var myList = document.getElementById('letter');
	var myListItem = "";
	
	
	// initialize counters
	var wins = 0;
	var guesses = 6;
	var numLettersMatched = 0;

	// Create code to randomly choose one of the three words  
	var randomNumber = Math.random();
	var optionsIndex = Math.floor(randomNumber * nextWord.length);
	var currWord = nextWord[optionsIndex];

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
	}
	
	// Captures Key Clicks
	document.onkeyup = function (event) {

		// Determines which exact key was selected. Make it lowercase
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

		if(currWord.indexOf(userGuess) != -1 && guesses > 0) {
			if (currWord == 'cat' && userGuess == 'c' && uniqueCorrectArr.indexOf(userGuess) == -1) {
				uniqueCorrectArr += (userGuess);
				document.querySelector('#yesno').innerHTML = 'You guessed right!';
				document.getElementsByTagName('li')[0].innerHTML = 'c';
				numLettersMatched++;
			}

			if (currWord == 'cat' && userGuess == 'a' && uniqueCorrectArr.indexOf(userGuess) == -1) {
				uniqueCorrectArr += (userGuess);
				document.querySelector('#yesno').innerHTML = 'You guessed right!';
				document.getElementsByTagName('li')[1].innerHTML = 'a';
				numLettersMatched++;
			}

			if (currWord == 'cat' && userGuess == 't' && uniqueCorrectArr.indexOf(userGuess) == -1) {
				uniqueCorrectArr += (userGuess);
				document.querySelector('#yesno').innerHTML = 'You guessed right!';
				document.getElementsByTagName('li')[2].innerHTML = 't';
				numLettersMatched++;
			}


			if (currWord == 'bear' && userGuess == 'b' && uniqueCorrectArr.indexOf(userGuess) == -1) {
				uniqueCorrectArr += (userGuess);
				document.querySelector('#yesno').innerHTML = 'You guessed right!';
				document.getElementsByTagName('li')[0].innerHTML = 'b';
				numLettersMatched++;
			}

			if (currWord == 'bear' && userGuess == 'e' && uniqueCorrectArr.indexOf(userGuess) == -1) {
				uniqueCorrectArr += (userGuess);
				document.querySelector('#yesno').innerHTML = 'You guessed right!';
				document.getElementsByTagName('li')[1].innerHTML = 'e';
				numLettersMatched++;
			}

			if (currWord == 'bear' && userGuess == 'a' && uniqueCorrectArr.indexOf(userGuess) == -1) {
				uniqueCorrectArr += (userGuess);
				document.querySelector('#yesno').innerHTML = 'You guessed right!';
				document.getElementsByTagName('li')[2].innerHTML = 'a';
				numLettersMatched++;
			}

			if (currWord == 'bear' && userGuess == 'r' && uniqueCorrectArr.indexOf(userGuess) == -1) {
				uniqueCorrectArr += (userGuess);
				document.querySelector('#yesno').innerHTML = 'You guessed right!';
				document.getElementsByTagName('li')[3].innerHTML = 'r';
				numLettersMatched++;
			}
	
			if (currWord == 'tiger' && userGuess == 't' && uniqueCorrectArr.indexOf(userGuess) == -1) {
				uniqueCorrectArr += (userGuess);
				document.querySelector('#yesno').innerHTML = 'You guessed right!';
				document.getElementsByTagName('li')[0].innerHTML = 't';
				numLettersMatched++;
			}

			if (currWord == 'tiger' && userGuess == 'i' && uniqueCorrectArr.indexOf(userGuess) == -1) {
				uniqueCorrectArr += (userGuess);
				document.querySelector('#yesno').innerHTML = 'You guessed right!';
				document.getElementsByTagName('li')[1].innerHTML = 'i';
				numLettersMatched++;
			}

			if (currWord == 'tiger' && userGuess == 'g' && uniqueCorrectArr.indexOf(userGuess) == -1) {
				uniqueCorrectArr += (userGuess);
				document.querySelector('#yesno').innerHTML = 'You guessed right!';
				document.getElementsByTagName('li')[2].innerHTML = 'g';
				numLettersMatched++;
			}

			if (currWord == 'tiger' && userGuess == 'e' && uniqueCorrectArr.indexOf(userGuess) == -1) {
				uniqueCorrectArr += (userGuess);
				document.querySelector('#yesno').innerHTML = 'You guessed right!';
				document.getElementsByTagName('li')[3].innerHTML = 'e';
				numLettersMatched++;
			}

			if (currWord == 'tiger' && userGuess == 'r' && uniqueCorrectArr.indexOf(userGuess) == -1) {
				uniqueCorrectArr += (userGuess);
				document.querySelector('#yesno').innerHTML = 'You guessed right!';
				document.getElementsByTagName('li')[4].innerHTML = 'r';
				numLettersMatched++;
			}

			document.querySelector('#next').innerHTML = 'Choose another letter!';
			document.querySelector('#hide').innerHTML = '';
			

		}else if(document.querySelector('#arrLetters').innerHTML == null || uniqueIncorrectArr.indexOf(userGuess) == -1){
			uniqueIncorrectArr += (userGuess + ", ");
			document.querySelector('#yesno').innerHTML = 'You guessed wrong!';
			document.querySelector('#next').innerHTML = 'Choose another letter!';
			document.querySelector('#hide').innerHTML = '';
			document.querySelector('#arrLetters').innerHTML = uniqueIncorrectArr;
			guesses--;
			document.querySelector('#numGuess').innerHTML = guesses;
			changeImage();
		}

		if (guesses == 0){
			document.querySelector('#next').innerHTML = 'Game over, you lost!';
			document.getElementById('submit').style.display = 'block';
		}
		
		if(numLettersMatched == currWord.length && currWord == 'cat'){
			var snd = new Audio('../../assets/sounds/cat.mp3'); 
			snd.play();
			document.querySelector('#next').innerHTML = 'Game over, you won!';
			wins++;
			document.querySelector('#numWin').innerHTML = wins;
			document.getElementById('submit').style.display = 'block';			
		}

		if(numLettersMatched == currWord.length && currWord == 'bear'){
			var snd = new Audio('../../assets/sounds/bear.mp3');
			snd.play();
			document.querySelector('#next').innerHTML = 'Game over, you won!';
			wins++;
			document.querySelector('#numWin').innerHTML = wins;
			document.getElementById('submit').style.display = 'block';			
		}

		if(numLettersMatched == currWord.length && currWord == 'tiger'){
			var snd = new Audio('../../assets/sounds/tiger.mp3');
			snd.play();
			document.querySelector('#next').innerHTML = 'Game over, you won!';
			wins++;
			document.querySelector('#numWin').innerHTML = wins;
			document.getElementById('submit').style.display = 'block';			
		}
		
	};