let currentPlayer = 'X';
let boardState = ['', '', '', '', '', '', '', '', ''];
let isGameOver = false;

const cells = document.querySelectorAll('.cell');
const statusDisplay = document.querySelector('#status p');

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (isGameOver || cell.textContent !== '') return;

        const cellIndex = cell.getAttribute('data-index');
        boardState[cellIndex] = currentPlayer;
        cell.textContent = currentPlayer;

        if (checkWinner()) {
            isGameOver = true;
            statusDisplay.textContent = `Player ${currentPlayer} wins!`;
        } else if (boardState.every(cell => cell !== '')) {
            isGameOver = true;
            statusDisplay.textContent = "It's a draw!";
        } else {
            currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
            statusDisplay.textContent = `Player ${currentPlayer}'s turn`;
        }
    });
});

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return winningCombinations.some(combination => {
        const [a, b, c] = combination;
        return boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c];
    });
}

function resetGame() {
    boardState = ['', '', '', '', '', '', '', '', ''];
    isGameOver = false;
    currentPlayer = 'X';
    statusDisplay.textContent = `Player ${currentPlayer}'s turn`;

    cells.forEach(cell => {
        cell.textContent = '';
    });
}








