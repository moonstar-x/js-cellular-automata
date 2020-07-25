const ALIVE_COLOR = '#000';
const DEAD_COLOR = '#fff';

function Cell(positionVector, i, j) {
  this.pos = positionVector;
  this.index = [i, j];
  this.alive = false;
  this.newState = false;
  this.hover = false;

  this.draw = function() {
    strokeWeight(0);
    stroke(this.getCellColor());
    fill(this.getCellColor());
    rect(this.pos.x, this.pos.y, CELL_SIZE, CELL_SIZE);
  }

  this.highlight = function() {
    strokeWeight(2);
    stroke('#ff5555');
    fill(this.getCellColor());
    rect(this.pos.x + 1, this.pos.y + 1, CELL_SIZE - 2, CELL_SIZE - 2);
  }

  this.update = function() {
    if (this.hover) {
      this.highlight();
    } else {
      this.draw();
    }

    this.computeNewState();
  }

  this.computeNewState = function() {
    if (playing) {
      const n = aliveNeighbours(this.index[0], this.index[1]);

      if (n < 2 || n > 3) {
        this.newState = false;
      } else if (n === 3) {
        this.newState = true;
      }
    }
  }

  this.applyStateUpdate = function() {
    this.alive = this.newState;
  }

  this.switchState = function() {
    this.alive = !this.alive;
    this.newState = this.alive;
  }

  this.reset = function() {
    this.alive = false;
    this.newState = false;
    this.hover = false;
  }

  this.getCellColor = function() {
    return this.alive ? ALIVE_COLOR : DEAD_COLOR;
  }

  this.getStateAsNumber = function() {
    return this.alive ? 1 : 0;
  }

  this.equals = function(cell) {
    return this.index[0] === cell.index[0] && this.index[1] === cell.index[1];
  }
}
