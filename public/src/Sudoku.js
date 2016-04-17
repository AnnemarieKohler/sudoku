function Sudoku(grid) {
  this.grid = grid;
}

Sudoku.prototype.isBetweenOneAndNine = function isBetweenOneAndNine(array) {
  for (let i = 0; i < 9; i++) {
    if (array[i] >= 1 && array[i] <= 9) {
      return true;
    }
  }
  return false;
};

Sudoku.prototype.isEachNumberUnique = function isNumberUnique(array) {
  const sortedArray = array.slice().sort().join('');
  if (sortedArray === '123456789') {
    return true;
  }
  return false;
};

Sudoku.prototype.isEachRowFollowingRules = function isEachRowFollowingRules() {
  for (let i = 0; i < 9; i++) {
    if (this.isBetweenOneAndNine(this.grid[i]) && this.isEachNumberUnique(this.grid[i])) {
      return true;
    }
  }
  return false;
};

Sudoku.prototype.getCols = function getCols() {
  const grid = this.grid;
  return grid.map(function(_,i) {
    return grid.map(function(row) {
      return row[i];
    });
  });
};

Sudoku.prototype.isEachColumnFollowingRules = function isEachColumnFollowingRules() {
  for (let i = 0; i < 9; i++) {
    if (this.isBetweenOneAndNine(this.getCols()[i]) && this.isEachNumberUnique(this.getCols()[i])) {
      return true;
    }
  }
  return false;
};


Sudoku.prototype.isSolutionCorrect = function isSolutionCorrect() {
  if (this.isEachRowFollowingRules() && this.isEachColumnFollowingRules()) {
    return true;
  }
  return false;
};
