//store game status element in variable
let gameStatus = document.querySelector('.game--status')

//varible to pause game in case
let gameActive = true

//variable that determines whos turn it is
let currentPlayer = 'X'

//array for game state
let gameState = ['','','','','','','','','',]

//messages that will be displayed during the game
let winningMessage = () => `Player ${currentPlayer} has won`
let drawMessage = () => 'DRAW'
let currentPlayerTurn = () => `It is ${currentPlayer}'s turn`

//set the inital message to the let players know whos turn it is
gameStatus.innerHTML = currentPlayerTurn()


function handleCellPlayed(clickedCell, clickedCellIndex){
    //update the inernal game state to reflect the played move
    gameState[clickedCellIndex] = currentPlayer;
    //update the user interfacet to reflect played move
    clickedCell.innerHTML = currentPlayer
}


function handlePlayerChange(){
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
    gameStatus.innerHTML = currentPlayerTurn()

}

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
function handleResultValidation(){
    let roundWon = false
    for(let i = 0; i <= 7; i++){
        let winCondition = winningConditions[i]
        let a = gameState[winCondition[0]]
        let b = gameState[winCondition[1]]
        let c = gameState[winCondition[2]]
        if(a === '' || b === '' || c === ''){
            continue
        }
        if(a === b && b === c){
            roundWon = true
            break
        }
    }
    if(roundWon){
        gameStatus.innerHTML = winningMessage()
        gameActive = false
        return
    }

    let roundDraw = !gameState.includes('')
    if(roundDraw){
        gameStatus.innerHTML = drawMessage()
        gameActive = false
        return
    }

    handlePlayerChange()
}

function handleCellClick(clickedCellEvent){
    //save the html element in a variable
    const clickedCell = clickedCellEvent.target
    //grab the data-cell-index attribute to indentify location of cell
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index')) //.getAttribute returs strings, so used parseInto to change to number
    //check if the call has already been played, or if the game has been paused
    //if so ignore the click
    if(gameState[clickedCellIndex]!== '' || !gameActive){
        return
    }
    //and if everything is in order, proceed with the game flow
    handleCellPlayed(clickedCell, clickedCellIndex)
    handleResultValidation()
}

function handleRestartGame(){
    gameActive = true
    gameState = ['','','','','','','','','',]
    currentPlayer = 'X'
    gameStatus.innerHTML = currentPlayerTurn()
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");

}

//add event listeners for the cells and restart button

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick))
document.querySelector('.game--restart').addEventListener('click', handleRestartGame)