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
function playRound(board) {
    let i = 1;
    
    while (i < 10) {

    const input = prompt("input the position");
    const [row, col] = input.split(",").map(Number);
    const r = row;
    const c = col;
    const symbol = i % 2 === 0 ? 'x' : 'o';
    const indicator = updateCellValue(board, r, c, symbol);
    if (!indicator)
        continue;
    console.table(board);
    const result = checkWinner(board);
    if (result !== '') {
        alert(`Player ${result} wins!`);
        break;
        };
    i++;
    }
}

// Check if the cell already had value, and if not, update it
function updateCellValue(board, r, c, value){
    if (board[r][c] === "" || board[r][c] === null || board[r][c] === undefined) {
    board[r][c] = value;
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

//Play
const newBoard = gameBoard();
playRound(newBoard);


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
