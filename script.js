document.addEventListener('DOMContentLoaded', () => {
  const board = document.getElementById('board');
  const size = 8;
  let currentPlayer = 'black';
  const cells = [];

  // Initialize the board
  for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
          const cell = document.createElement('div');
          cell.classList.add('cell');
          cell.dataset.row = row;
          cell.dataset.col = col;
          cell.addEventListener('click', handleCellClick);
          board.appendChild(cell);
          cells.push(cell);
      }
  }

  // Set initial pieces
  const middle = size / 2;
  getCell(middle - 1, middle - 1).classList.add('white');
  getCell(middle - 1, middle).classList.add('black');
  getCell(middle, middle - 1).classList.add('black');
  getCell(middle, middle).classList.add('white');

  function handleCellClick(event) {
      const cell = event.target;
      const row = parseInt(cell.dataset.row);
      const col = parseInt(cell.dataset.col);

      if (cell.classList.contains('black') || cell.classList.contains('white')) {
          return;
      }

      if (isValidMove(row, col, currentPlayer)) {
          makeMove(row, col, currentPlayer);
          currentPlayer = currentPlayer === 'black' ? 'white' : 'black';
      }
  }

  function getCell(row, col) {
      return cells[row * size + col];
  }

  function isValidMove(row, col, player) {
      const opponent = player === 'black' ? 'white' : 'black';
      const directions = [
          [-1, 0], [1, 0], [0, -1], [0, 1],
          [-1, -1], [-1, 1], [1, -1], [1, 1]
      ];

      for (const [dx, dy] of directions) {
          let x = row + dx;
          let y = col + dy;
          let foundOpponent = false;

          while (x >= 0 && x < size && y >= 0 && y < size) {
              const cell = getCell(x, y);
              if (cell.classList.contains(opponent)) {
                  foundOpponent = true;
              } else if (cell.classList.contains(player)) {
                  if (foundOpponent) {
                      return true;
                  }
                  break;
              } else {
                  break;
              }
              x += dx;
              y += dy;
          }
      }

      return false;
  }

  function makeMove(row, col, player) {
      const opponent = player === 'black' ? 'white' : 'black';
      const directions = [
          [-1, 0], [1, 0], [0, -1], [0, 1],
          [-1, -1], [-1, 1], [1, -1], [1, 1]
      ];

      getCell(row, col).classList.add(player);

      for (const [dx, dy] of directions) {
          let x = row + dx;
          let y = col + dy;
          let cellsToFlip = [];

          while (x >= 0 && x < size && y >= 0 && y < size) {
              const cell = getCell(x, y);
              if (cell.classList.contains(opponent)) {
                  cellsToFlip.push(cell);
              } else if (cell.classList.contains(player)) {
                  for (const flipCell of cellsToFlip) {
                      flipCell.classList.remove(opponent);
                      flipCell.classList.add(player);
                  }
                  break;
              } else {
                  break;
              }
              x += dx;
              y += dy;
          }
      }
  }
});
