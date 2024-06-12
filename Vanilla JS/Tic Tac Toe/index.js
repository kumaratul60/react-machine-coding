/***
step 1: create board
step 2: add event listners to cell
step 3: add X or O , player logic
step 4: identify winning condtion
*/

const gridSize = 6;
const boardRef = document.querySelector(".tic-tac-toe");
// const messageRef = document.getElementById("message");

let currentPlayer = 'X';

const game = [];

function createBoard() {
    for (let rowSize = 0; rowSize < gridSize; rowSize++) {
        // creating a div using js
        const rowRef = document.createElement("div");
        // want to give class name as row to above created div
        rowRef.className = "row";

        // creating cell behalf of gridSize
        for (let cellSize = 0; cellSize < gridSize; cellSize++) {
            const cellRef = document.createElement("div");
            cellRef.className = "cell";
            // step 2: adding eventListners to cell to know which cell user click
            // addEventListener(type, listener)

            /* some performnace issue if we add listners in this way, couse: if grid size is 6 then we added 6*6 = 36 event listeners.
            sol: event bubbling: add eventListners to the board reference instaed of individual cell
            */

            // cellRef.addEventListener("click", function (e) {
            //     console.log(e.target);
            //     e.target.innerText = currentPlayer;
            //     changePlayer();
            // });

            // append then cell to the row
            rowRef.appendChild(cellRef);

            // idetify value by setting attributes
            cellRef.setAttribute("data-row", rowSize);
            cellRef.setAttribute("data-cell", cellSize);
        }
        // append then row to the body (tic-tac-toe) also
        document.querySelector(".tic-tac-toe").appendChild(rowRef);
    }
}

// logic to change player
function changePlayer() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

// logic to addEventListners
function addBoardListners() {
    const boardRef = document.querySelector(".tic-tac-toe");
    boardRef.addEventListener("click", function (e) {
        if (e.target.nodeName === "DIV") {
            if (e.target.classList.contains("cell")) {
                // Ensure only empty cells can be clicked
                if (e.target.innerText === "") {

                    let nextValue = getMineSweeperValue();
                    // console.log(nextValue, "::getMineSweeperValue");
                    let printValue = currentPlayer;
                    // mineSweeper implemnetation
                    if (nextValue === "*") {
                        // your value is blocked nothing going to happen
                        printValue = "*";
                    }

                    // e.target.innerText = printValue;

                    // nomal : adding currentPlayer to innerText
                    e.target.innerText = currentPlayer;

                    // extract value of row, cell
                    const rowId = e.target.dataset.row;
                    const cellId = e.target.dataset.cell;
                    updateGameData(rowId, cellId, currentPlayer);

                    // change player alternate
                    changePlayer();

                    // get extra chance if value === "+"
                    // if (nextValue !== "+") {
                    //     changePlayer();
                    // }

                }


            }
        }

    });
}

// getWinner
function getWinner() {
    // get the list of cells
    // const getRow1Cell = document.querySelectorAll(".cell");
    // console.log(getRow1Cell, "::getRow1Cell");

    // check for row values - Horizontal
    for (let rowValue = 0; rowValue < game.length; rowValue++) {
        if (checkSame(game[rowValue])) {
            return true;
        }
    }

    // check for column values - Vertical
    for (let colValue = 0; colValue < game.length; colValue++) {
        // getting vertial cell values
        const vertialCell = game.map((row) => row[colValue]);
        if (checkSame(vertialCell)) {
            return true;
        }
    }

    // check for diaganol values
    for (let dValue = 0; dValue < game.length; dValue++) {
        // getting diaganol values
        const diaganolValues = game.map((row, idx) => row[idx]);
        if (checkSame(diaganolValues)) {
            return true;
        }

        // getting reverse diaganol values
        const reverseDiaganolValues = game.map((row, idx) => row[game - idx - 1]);
        if (checkSame(reverseDiaganolValues)) {
            return true;
        }
    }
}


// check all data is same or not in row and col
function checkSame(arr) {
    return arr.every((data) => arr[0] === data);
}


function updateGameData(row, col, value) {
    // console.log({ row, col, value });
    if (!game[row]) {
        game[row] = [];
    }
    game[row][col] = value;
    // console.log({ game });
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

createBoard();
addBoardListners();
getWinner();
