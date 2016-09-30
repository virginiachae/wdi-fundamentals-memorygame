console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen"
var cardTwo = "queen"
var cardThree = "king"
var cardFour = "king"

/*if (cardOne === cardTwo) {
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
var createBoard = function(){
	for (i=0; i<4; i++) {
		var cards = document.createElement('div');
		cards.setAttribute('class', 'card')
		gameBoard.appendChild(cards)
	}
}

createBoard(); 
