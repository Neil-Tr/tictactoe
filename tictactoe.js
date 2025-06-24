//Draw a game board

function gameBoard() {
    const rows = 3;
    const columns = 3;
    const board = [];

    for (let r = 0; r < rows; r++) {
        board[r] = [];
        for (let c = 0; c < columns; c++ ) {
            board[r][c] = '';
        }
    }
    return board;
}

// Logic to play 9 round, and update value in each round
function nextMove(currentTurn,board,r,c) {
    const symbol = currentTurn % 2 === 0 ? 'X' : 'O';
    const validMove = updateCellValue(board, r, c, symbol);
    if (!validMove) return false;
    const result = checkWinner(board);
    if (result !== '') {
        alert(`Player ${result} wins!`);
        return true;
    }
    if(currentTurn==9 && result==''){
        alert(`Tie!`);
        return true;
    }
            return true;
    }

// Check if the cell already had value, and if not, update it
function updateCellValue(board, r, c, value){
    if (board[r][c] === "" || board[r][c] === null || board[r][c] === undefined) {
    board[r][c] = value;
    console.table(board);
    return true;
  } else {
    console.error(`Cell at (${r}, ${c}) already has a value: ${board[r][c]}`);
    return false;
  }
}

//Logic to check winner, to check it each turn after player play.
function checkWinner(board) {
    if (board[0][0] !== '' && board[0][0] === board[0][1] && board[0][1] === board[0][2]) {
        return board[0][0];
    }

    if (board[1][0] !== '' && board[1][0] === board[1][1] && board[1][1] === board[1][2]) {
        return board[1][0];
    }

    if (board[2][0] !== '' && board[2][0] === board[2][1] && board[2][1] === board[2][2]) {
        return board[2][0];
    }

    if (board[0][0] !== '' && board[0][0] === board[1][0] && board[1][0] === board[2][0]) {
        return board[0][0];
    }

    if (board[0][1] !== '' && board[0][1] === board[1][1] && board[1][1] === board[2][1]) {
        return board[0][1];
    }

    if (board[0][2] !== '' && board[0][2] === board[1][2] && board[1][2] === board[2][2]) {
        return board[0][2];
    }

    if (board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        return board[0][0];
    }

    if (board[0][2] !== '' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        return board[0][2];
    }
    return '';
}

function userInput (currentTurn, board) {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
    square.addEventListener("click", function() {
    const squareNumber = square.id;
    const r = Number(squareNumber.charAt(0));
    const c = Number(squareNumber.charAt(1));
    const currentBoard = board;
    const advance = nextMove (currentTurn, currentBoard, r, c);
    if (advance) {
        const squareValue = document.createElement('p');
        squareValue.className = 'square-value';
        squareValue.textContent = currentBoard[r][c];
        square.appendChild(squareValue);
        currentTurn++;
    }
    });
})}

//Update square with x or or



//Play
function play(){
    //reset squares
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
      square.innerHTML = "";
    });

    //create new board
    const newBoard = gameBoard();    
    let currentTurn = 1; 
    userInput(currentTurn, newBoard);

}

document.getElementById("play").addEventListener("click", play);







// // More logical way to check Winner by the winningCombos
// function checkWinner(board) {
//   const winningCombos = [
//     // Rows
//     [[0, 0], [0, 1], [0, 2]],
//     [[1, 0], [1, 1], [1, 2]],
//     [[2, 0], [2, 1], [2, 2]],
//     // Columns
//     [[0, 0], [1, 0], [2, 0]],
//     [[0, 1], [1, 1], [2, 1]],
//     [[0, 2], [1, 2], [2, 2]],
//     // Diagonals
//     [[0, 0], [1, 1], [2, 2]],
//     [[0, 2], [1, 1], [2, 0]]
//   ];

//   for (const [[r1, c1], [r2, c2], [r3, c3]] of winningCombos) {
//     const val = board[r1][c1];
//     if (val !== '' && val === board[r2][c2] && val === board[r3][c3]) {
//       return val;
//     }
//   }

//   return '';
// }
