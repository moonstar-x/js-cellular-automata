const cells = new Array(GRID_SIZE[0]);

function initializeCells() {
  for (let i = 0; i < GRID_SIZE[0]; i++) {
    cells[i] = new Array(GRID_SIZE[1]);
    for (let j = 0; j < GRID_SIZE[1]; j++) {
      cells[i][j] = new Cell(createVector(i * CELL_SIZE, j * CELL_SIZE), i, j);
    }
  }
}

function resetCells() {
  for (let i = 0; i < GRID_SIZE[0]; i++) {
    for (let j = 0; j < GRID_SIZE[1]; j++) {
      cells[i][j].reset();
    }
  }
}

function randomizeCells() {
  for (let i = 0; i < GRID_SIZE[0]; i++) {
    for (let j = 0; j < GRID_SIZE[1]; j++) {
      if (Math.random() > 0.5) {
        cells[i][j].switchState();
      }
    }
  }
}

function updateAllCells() {
  for (let i = 0; i < GRID_SIZE[0]; i++) {
    for (let j = 0; j < GRID_SIZE[1]; j++) {
      cells[i][j].update();
    }
  }
  for (let i = 0; i < GRID_SIZE[0]; i++) {
    for (let j = 0; j < GRID_SIZE[1]; j++) {
      cells[i][j].applyStateUpdate();
    }
  }
}

function aliveNeighbours(x, y) {
  let sum = 0;

  for (let i = x - 1; i <= x + 1; i++) {
    for (let j = y - 1; j <= y + 1; j++) {
      try {
        if (i !== x || j !== y) {
          sum += cells[i][j].getStateAsNumber();
        }
      } catch (_) {
        continue;
      }
    }
  }

  return sum;
}