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

Sudoku.prototype.getColumns = function _getColumns() {
  var grid = this.grid;
  return grid.map(function(_,i) {
    return grid.map(function(row) {
      return row[i];
    });
  });
};
