const CELL_SIZE = 20;
const GRID_SIZE = [30, 30];

let playing = false;
let highlightedCell;

function setup() {
  const canvas = createCanvas(GRID_SIZE[0] * CELL_SIZE, GRID_SIZE[1] * CELL_SIZE);
  canvas.parent('#app-holder');

  initializeCells();
}

function draw() {
  frameRate(Number(frameRateSlider.value));
  background(DEAD_COLOR);
  updateAllCells();
}

function mouseClicked() {
  if (!playing) {
    if (mouseX > 0 && mouseX < GRID_SIZE[0] * CELL_SIZE && mouseY > 0 && mouseY < GRID_SIZE[1] * CELL_SIZE) {
      cells[Math.floor(mouseX / CELL_SIZE)][Math.floor(mouseY / CELL_SIZE)].switchState();
    }
  }

  return false;
}

function mouseMoved() {
  if (!playing) {
    if (mouseX > 0 && mouseX < GRID_SIZE[0] * CELL_SIZE && mouseY > 0 && mouseY < GRID_SIZE[1] * CELL_SIZE) {
      const hoveredCell = cells[Math.floor(mouseX / CELL_SIZE)][Math.floor(mouseY / CELL_SIZE)];
      if (!highlightedCell) {
        highlightedCell = hoveredCell;
      }
      if (!highlightedCell.equals(hoveredCell)) {
        hoveredCell.hover = true;
        highlightedCell.hover = false;
        highlightedCell = hoveredCell;
      }
    }
  }

  return false;
}

function start() {
  playing = true;
  if (highlightedCell) {
    highlightedCell.hover = false;
  }

  document.getElementById('start-button').disabled = true;
  document.getElementById('randomize-button').disabled = true;
}

function reset() {
  playing = false;
  resetCells();

  document.getElementById('start-button').disabled = false;
  document.getElementById('randomize-button').disabled = false;
}

function randomize() {
  if (!playing) {
    randomizeCells();
  }
}