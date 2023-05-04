//store game status element in variable
const gameStatus = document.querySelector('.game--status')

//varible to pause game in case
const gameActive = true

//variable that determines whos turn it is
const currentPlayer = 'X'

//array for game state
let gameState = ['','','','','','','','','',]

//messages that will be displayed during the game
const winningMessage = () => `Player ${currentPlayer} has won`
const drawMessage = () => 'DRAW'
const currentPlayerTurn = () => `It is ${currentPlayer}'s turn`

//set the inital message to the let players know whos turn it is
gameStatus.innerHTML = currentPlayerTurn()


function handleCellPlayer(){

}


function handlePlayerChange(){

}

function handleResultValidatiojn(){

}

function handleCellClick(){

}

function handleRestartGame(){

}

//add event listeners for the cells and restart button

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick))
document.querySelector('.game--restart').addEventListener('click', handleRestartGame)