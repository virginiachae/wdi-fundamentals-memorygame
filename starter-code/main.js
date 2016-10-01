console.log("JS file is connected to HTML! Woo!")

var cards = ['queen', 'king', 'king', 'queen'];
var cardsInPlay = [];


/*var cardOne = "queen"
var cardTwo = "queen"
var cardThree = "king"
var cardFour = "king"

if (cardOne === cardTwo) {
	alert('You found a match!')
} else if (cardThree === cardFour) {
	alert('You found a match!')
} else if (cardOne !== cardThree) {
	alert('Sorry, try again.')
} else if (cardOne !== cardFour) {
	alert('Sorry, try again.')
} else if (cardTwo !== cardThree) {
	alert('Sorry, try again.')
} else if (cardTwo !== cardFour) {
	alert('Sorry, try again.')
}*/

var gameBoard = document.getElementById('game-board')
var createBoard = function() {
	for (i=0; i<cards.length; i++) {
		var cardDiv = document.createElement('div');
		cardDiv.setAttribute('class', 'card');
		gameBoard.appendChild(cardDiv);
		cardDiv.setAttribute('data-card', cards[i]);
		cardDiv.addEventListener('click', isTwoCards);
	}

	var isMatch = function() {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert('You found a match!') 
		} else if (cardsInPlay[0] !== cardsInPlay[1]) {
			alert('Sorry, try again.');
			for (i=0; i<4; i++) {
			document.getElementsByClassName('card')[i].innerHTML = '';
			}
		}
	}

	function isTwoCards() {
	  if (this.getAttribute('data-card') === 'king') {
	  	this.innerHTML = '<img src="hpKing.jpg"/>';
	  } else if (this.getAttribute('data-card') === 'queen') {
	  	this.innerHTML = '<img src="hpQueen.jpg"/>';
	  }
	  cardsInPlay.push(this.getAttribute('data-card'));
	  setTimeout(function() {
	  	if (cardsInPlay.length === 2) {
	    	isMatch(cardsInPlay);
	   		 cardsInPlay = []; 
	 	 }
	 }, 1000);
	}
}

createBoard(); 

			
	  
	  










    






  


