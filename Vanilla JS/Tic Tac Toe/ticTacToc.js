/***
step 1: create board
step 2: add event listners to cell
step 3: add X or O , player logic
step 4: identify winning condtion
*/

// Size of the Tic-Tac-Toe grid
const gridSize = 3;

// References to the board and message elements in the DOM
const boardRef = document.querySelector(".tic-tac-toe");
const messageRef = document.getElementById("message");

// Initial player is 'X'
let currentPlayer = 'X';

// Initialize game board with null values
const game = Array.from({ length: gridSize }, () => Array(gridSize).fill(null));

// Variables to track the game time
let startTime, endTime, isFirstMove = true;

/**
 * The function `createBoard` dynamically creates a grid board in the DOM with rows and cells based on a specified `gridSize`.
 */
function createBoard() {
    for (let rowSize = 0; rowSize < gridSize; rowSize++) {
        const rowRef = document.createElement("div");
        rowRef.className = "row";
        for (let cellSize = 0; cellSize < gridSize; cellSize++) {
            const cellRef = document.createElement("div");
            cellRef.className = "cell";
            cellRef.setAttribute("data-row", rowSize);
            cellRef.setAttribute("data-cell", cellSize);
            rowRef.appendChild(cellRef);
        }
        boardRef.appendChild(rowRef);
    }

}

// Function to switch the current player
function changePlayer() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

// function addBoardListeners() {
//     boardRef.addEventListener("click", function (e) {
//         if (e.target.classList.contains("cell")) {
//             if (!e.target.innerText) {
//                 if (isFirstMove) {
//                     startTime = new Date();
//                     isFirstMove = false;
//                 }

//                 // let nextValue = getMineSweeperValue();
//                 // let printValue = currentPlayer;
//                 // // mineSweeper implemnetation
//                 // if (nextValue === "*") {
//                 //     // value is blocked nothing going to happen
//                 //     printValue = "*";
//                 // }

//                 // e.target.innerText = printValue;

//                 e.target.innerText = currentPlayer;
//                 const rowId = e.target.dataset.row;
//                 const cellId = e.target.dataset.cell;
//                 updateGameData(rowId, cellId, currentPlayer);

//                 if (getWinner()) {
//                     endTime = new Date();
//                     const timeTaken = calculateTimeTaken(startTime, endTime);
//                   displayMessage(`Player ${currentPlayer} wins! Time taken: ${timeTaken}`);
//                     boardRef.removeEventListener("click", arguments.callee);
//                     return;
//                 }

//                 if (isBoardFull()) {
//                     endTime = new Date();
//                     const timeTaken = calculateTimeTaken(startTime, endTime);
//                     displayMessage(`The match is a draw! Time taken: ${timeTaken}`);
//                     return;
//                 }

//                 changePlayer();
//                 // get extra chance if value === "+"
//                 // if (nextValue !== "+") {
//                 //     changePlayer();
//                 // }
//             }
//         }
//     });
// }

/**
 * The `endGame` function calculates the time taken for the game, determines the winner or a draw, displays the result message, and removes the click event
 * listener from the game board.
 */
function endGame() {
    endTime = new Date();
    const timeTaken = calculateTimeTaken(startTime, endTime);
    const message = getWinner()
        ? `Player ${currentPlayer} wins! Time taken: ${timeTaken}`
        : `The match is a draw! Time taken: ${timeTaken}`;
    displayMessage(message);
    boardRef.removeEventListener("click", handleCellClick);
}

// Function to add event listeners to the board cells
function addBoardListeners() {
    boardRef.addEventListener("click", handleCellClick);
}

// Function to handle cell click events
function handleCellClick(e) {
    if (isCellEmpty(e.target)) {
        if (isFirstMove) {
            startFirstMoveTimer();
        }

        updateCell(e.target);
        const { rowId, cellId } = getCellIdentifiers(e.target);
        // const rowId = e.target.dataset.row;
        // const cellId = e.target.dataset.cell;
        updateGameData(rowId, cellId, currentPlayer);

        if (checkGameStatus()) {
            endGame();
        } else {
            changePlayer();
        }
    }
}

// Function to check if a cell is empty
function isCellEmpty(cell) {
    return cell.classList.contains("cell") && !cell.innerText;
}

// Function to start the timer on the first move
function startFirstMoveTimer() {
    startTime = new Date();
    isFirstMove = false;
}

// Function to update the cell with the current player's symbol
function updateCell(cell) {
    cell.innerText = currentPlayer;
}

// Function to get row and cell identifiers from the cell element
function getCellIdentifiers(cell) {
    return {
        rowId: cell.dataset.row,
        cellId: cell.dataset.cell
    };
}

// Function to check the game status: win or draw
function checkGameStatus() {
    return getWinner() || isBoardFull();
}

// Function to determine if there is a winner
function getWinner() {
    // Check rows
    for (let row = 0; row < gridSize; row++) {
        if (checkSame(game[row])) return true;
    }

    // Check columns
    for (let col = 0; col < gridSize; col++) {
        const column = game.map(row => row[col]);
        if (checkSame(column)) return true;
    }

    // Check diagonals
    const mainDiagonal = game.map((row, idx) => row[idx]);
    const antiDiagonal = game.map((row, idx) => row[gridSize - idx - 1]);

    if (checkSame(mainDiagonal) || checkSame(antiDiagonal)) {
        return true;
    }

    return false;
}

// Function to check if all elements in an array are the same and not null
function checkSame(arr) {
    return arr.every(cell => cell && cell === arr[0]);
}

// Function to check if the board is full
function isBoardFull() {
    return game.every(row => row.every(cell => cell));
}

// Function to update the game data with the current move
function updateGameData(row, col, value) {
    game[row][col] = value;
}

// Function to calculate the time taken for the game
function calculateTimeTaken(start, end) {
    const duration = end - start;
    const seconds = Math.floor((duration / 1000) % 60);
    const minutes = Math.floor((duration / (1000 * 60)) % 60);
    return `${minutes} minute(s) and ${seconds} second(s)`;
}

// Function to display a message
function displayMessage(msg) {
    messageRef.innerText = msg;
    alert(msg);
}

function getMineSweeperValue() {
    // +:get extra chance if value, *:loast the value,-:normal

    const options = ["*", "+", "-"];
    const randomvalue = Math.floor(Math.random() * 10) % options.length;
    /*
    Math.random() = 0.83
    Math.random() * 10 = 8.3
    Math.floor(Math.random() * 10) = 8
    Math.floor(Math.random() * 10) % options.length = 2
    */
    return options[randomvalue];
}

// Create the game board and add event listeners
createBoard();
addBoardListeners();
